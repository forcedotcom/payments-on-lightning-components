import { api, LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import locale from '@salesforce/i18n/locale';
import { buildTheme, SF_PAYMENTS_SDK_URL, loadMetadata } from 'c/paymentUtility';

export default class PaymentSheetForm extends LightningElement {
    static renderMode = 'light';

    _amount;

    @api
    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
        if (value) {
            this.paymentSheet?.updateAmount(Number(value));
        }
    }

    _paymentMethodSet;

    @api
    get paymentMethodSet() {
        return this._paymentMethodSet;
    }

    set paymentMethodSet(value) {
        this._paymentMethodSet = value;
        if (this.hasRendered && !this.sfpInitialized) {
            this.sfpInitialized = true;
            this.loadSfp();
        }
    }

    @api
    currency;

    @api
    savedPaymentMethods;

    @api
    paymentRedirectReturnUrl;

    @api
    useManualCapture;

    @api
    sepaDebitMandate;

    @api
    maximumInitialPaymentMethods = 3;

    @api
    enforceSavedPaymentMethod;

    @api
    enableSavedPaymentMethods;

    @api
    labels;

    @api
    emptyStateTitle = '';

    @api
    emptyStateDescription = '';

    @api
    createIntentFunction;

    hasRendered = false;

    sfpInitialized = false;

    sfp;

    paymentSheet;

    showEmptyState = true;

    selectedPaymentMethod;

    selectedPaymentMethodId;

    savePaymentMethodForFutureUse = false;

    makePaymentMethodDefault = false;

    _handlePaymentMethodsRenderedEvent = (evt) => this.handlePaymentMethodsRenderedEvent(evt);

    _handlePaymentSheetLoadEvent = (evt) => this.handlePaymentSheetLoadEvent(evt);

    _handlePaymentMethodSelected = (evt) => this.handlePaymentMethodSelected(evt);

    _handlePaymentCancelled = (evt) => this.handlePaymentCancelled(evt);

    _handlePaymentApproved = (evt) => this.handlePaymentApproved(evt);

    _handlePaymentButtonClick = (evt) => this.handlePaymentButtonClick(evt);

    _handlePaymentError = (evt) => this.handlePaymentError(evt);

    connectedCallback() {
        this.addEventListener('load', this._handlePaymentSheetLoadEvent);
        this.addEventListener('paymentMethodSelected', this._handlePaymentMethodSelected);
        this.addEventListener('sfppaymentcancelled', this._handlePaymentCancelled);
        this.addEventListener('sfppaymentbuttonapprove', this._handlePaymentApproved);
        this.addEventListener('sfppaymentbuttonclick', this._handlePaymentButtonClick);
        this.addEventListener('sfppaymenterror', this._handlePaymentError);
        this.addEventListener('sfppaymentmethodsrendered', this._handlePaymentMethodsRenderedEvent);
    }

    disconnectedCallback() {
        this.removeEventListener('sfppaymentmethodsrendered', this._handlePaymentMethodsRenderedEvent);
        this.removeEventListener('paymentMethodSelected', this._handlePaymentMethodSelected);
        this.removeEventListener('load', this._handlePaymentSheetLoadEvent);
        this.removeEventListener('sfppaymentcancelled', this._handlePaymentCancelled);
        this.removeEventListener('sfppaymentbuttonapprove', this._handlePaymentApproved);
        this.removeEventListener('sfppaymentbuttonclick', this._handlePaymentButtonClick);
        this.removeEventListener('sfppaymenterror', this._handlePaymentError);
    }

    renderedCallback() {
        this.hasRendered = true;
        if (this._paymentMethodSet) {
            if (this.sfpInitialized) {
                return;
            }
            this.sfpInitialized = true;
            this.loadSfp();
        }
    }

    async loadSfp() {
        if (typeof window !== 'undefined') {
            if (this.paymentMethodSet) {
                if (!globalThis.SFPayments) {
                    await loadScript(this, SF_PAYMENTS_SDK_URL);
                }
                this.sfp = new globalThis.SFPayments();
                const el = this.refs?.sfPaymentsCheckout;
                while (el?.firstChild) {
                    el.removeChild(el.firstChild);
                }
                const labels = {
                    ...this.labels,
                };
                if (this.sepaDebitMandate) {
                    labels.sepaDepitAuthorizationMandate = this.sepaDebitMandate;
                } else if (
                    labels.sepaDebitAuthorizationMandate &&
                    labels.sepaDebitAuthorizationMandate.includes('{0}')
                ) {
                    const vendor = this.paymentMethodSet.paymentMethodSetAccounts.find(
                        (account) => !(account.vendor === 'Paypal')
                    )?.vendor;
                    if (vendor) {
                        labels.sepaDebitAuthorizationMandate = labels.sepaDebitAuthorizationMandate.replace(
                            '{0}',
                            labels[vendor]
                        );
                    }
                }
                const config = {
                    labels: labels,
                    theme: buildTheme(el),
                    actions: this.createIntentFunction && {
                        createIntentFunction: this.createIntentFunction,
                    },
                    options: {
                        returnUrl: this.paymentRedirectReturnUrl,
                        useManualCapture: this.useManualCapture,
                        showSaveForFutureUsageCheckbox: this.enableSavedPaymentMethods,
                        savedPaymentMethods: this.savedPaymentMethods,
                        enforceSavedPaymentMethod: this.enforceSavedPaymentMethod,
                        showSaveAsDefaultCheckbox: this.enableSavedPaymentMethods || this.enforceSavedPaymentMethod,
                        maximumInitialPaymentMethods: this.maximumInitialPaymentMethods,
                    },
                };
                const paymentRequestInfo = {
                    amount: Number(this._amount),
                    currency: this.currency,
                    country: this.paymentMethodSet?.countryCode,
                    locale: locale,
                };
                const metadata = await loadMetadata();
                this.dispatchEvent(
                    new CustomEvent('metadataloaded', {
                        bubbles: true,
                        detail: {
                            metadata: metadata,
                        },
                    })
                );
                this.paymentSheet = this.sfp?.checkout(metadata, this.paymentMethodSet, config, paymentRequestInfo, el);
                this.showEmptyState = false;
            }
        }
    }

    @api
    async completePayment(paymentIntentCreationFn, billingDetails, shippingDetails) {
        const resp = await this.paymentSheet?.confirm(paymentIntentCreationFn, billingDetails, shippingDetails);
        if (resp) {
            Object.assign(resp.data, {
                paymentMethodsAvailable: this.paymentSheet?.paymentMethods?.map((pm) => pm.paymentMethodType),
            });
            return resp;
        }
        return Promise.reject({
            responseCode: 1,
            data: {
                error: 'Payment Confirmation returned undefined',
            },
        });
    }

    paymentMethodsRendered;

    handlePaymentMethodsRenderedEvent(eventDetails) {
        this.paymentMethodsRendered = eventDetails.detail?.rendered;
    }

    handlePaymentSheetLoadEvent(eventDetails) {
        if (typeof window !== 'undefined') {
            this.dispatchEvent(
                new CustomEvent('paymentsheetloaded', {
                    bubbles: true,
                    detail: {
                        paymentMethodsAvailable:
                            this.paymentMethodsRendered ??
                            this.paymentSheet?.components?.map((component) => component.TYPE),
                        paymentMethodSelected: eventDetails.detail.selectedPaymentMethod,
                    },
                })
            );
        }
        this.handlePaymentMethodSelected(eventDetails);
    }

    handlePaymentMethodSelected(eventDetails) {
        this.dispatchEvent(new CustomEvent('paymentmethodselected', eventDetails));
    }

    handlePaymentButtonClick(eventDetails) {
        if (typeof window !== 'undefined') {
            this.dispatchEvent(
                new CustomEvent('paymentinitiated', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        fundingSource: eventDetails.detail.fundingSource,
                        addValidation: eventDetails.detail.addValidation,
                    },
                })
            );
        }
    }

    handlePaymentCancelled(eventDetails) {
        this.dispatchEvent(new CustomEvent('paymentcancel', eventDetails));
    }

    handlePaymentApproved(eventDetails) {
        this.dispatchEvent(new CustomEvent('paymentapproved', eventDetails));
    }

    handlePaymentError(eventDetails) {
        this.dispatchEvent(new CustomEvent('paymenterrored', eventDetails));
    }
}
