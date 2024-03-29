export class PercentRenderer {
  constructor() {
    this.eGui = document.createElement('span');
  }

  init(params) {
    // Set the cell style to align the text to the right
    params.eGridCell.style.textAlign = 'right';

    // Assuming params.value holds the numeric value that needs to be formatted
    this.valueToDisplay = `${params.value}%`

    this.eGui.classList.add('text-right');
    this.eGui.innerHTML = this.valueToDisplay;
  }

  getGui() {
    return this.eGui;
  }



}
