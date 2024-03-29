export class CurrencyRenderer {
  constructor() {
    this.eGui = document.createElement('span');
  }

  init(params) {
    // Set the cell style to align the text to the right
    params.eGridCell.style.textAlign = 'right';

    // Convert the value into a number
    params.value = Number(params.value);

    // Assuming params.value holds the numeric value that needs to be formatted
    this.valueToDisplay = this.formatCurrency(params.value);

    this.eGui.classList.add('text-right');
    this.eGui.innerHTML = this.valueToDisplay;
  }

  getGui() {
    return this.eGui;
  }

  refresh(params) {
    // Set value into the cell again
    this.eGui.innerHTML = this.formatCurrency(params.value);
    return true;
  }

  formatCurrency(value) {
    // Format the number to a currency string
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
}
