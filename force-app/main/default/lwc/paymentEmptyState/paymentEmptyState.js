import { LightningElement, api } from 'lwc';
import paymentEmptyState from '@salesforce/resourceUrl/paymentEmptyState';

export default class PaymentEmptyState extends LightningElement {
  static renderMode = 'light';

  paymentEmptyState = paymentEmptyState;

  @api
  emptyStateTitle;
  @api
  emptyStateDescription;
}