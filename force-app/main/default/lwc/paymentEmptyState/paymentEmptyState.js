import { LightningElement, api } from 'lwc';

export default class PaymentEmptyState extends LightningElement {
    static renderMode = 'light';

    @api
    emptyStateTitle;

    @api
    emptyStateDescription;
}
