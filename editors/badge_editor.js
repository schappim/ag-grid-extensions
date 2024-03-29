export class BadgeEditor {
  init(params) {
    console.log(params);
    this.eGui = document.createElement('select');
    this.options = params.values;

    for (let option of this.options) {
      let optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = `${option.charAt(0).toUpperCase()}${option.slice(1)}!`;
      if (params.value === option) {
        optionElement.selected = true;
      }
      this.eGui.appendChild(optionElement);
    }
  }


  getGui() {
    return this.eGui;
  }

  getValue() {
    return this.eGui.value;
  }
}
