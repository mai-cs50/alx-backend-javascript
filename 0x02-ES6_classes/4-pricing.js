import Currency from './3-currency.js';


export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;      // using the setter
    this.currency = currency;  // using the setter
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  // Method to display full price in the format: amount currency_name (currency_code)
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on a conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
