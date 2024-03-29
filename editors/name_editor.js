export class NameEditor {
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('absolute', 'flex', 'space-x-2', 'p-4', 'z-10', 'w-fit', 'bg-white', 'rounded', 'shadow-lg');

    this.eGui.innerHTML = `
      <input placeholder="Steve" type="text" id="firstNameInput" value="${params.node.data.first_name}" class="form-control w-64">
      <input placeholder="Jobs" type="text" id="lastNameInput" value="${params.node.data.last_name}" class="form-control w-64">
    `;

    this.firstNameInput = this.eGui.querySelector('#firstNameInput');
    this.lastNameInput = this.eGui.querySelector('#lastNameInput');

    this.column = params.column;
    this.column.getColDef().suppressKeyboardEvent = this.handleKeyboardEvent.bind(this);
  }

  handleKeyboardEvent(params) {
    const focusedElement = document.activeElement;

    if (focusedElement === this.firstNameInput && params.event.key === 'Tab') {
      this.lastNameInput.focus();
      params.event.preventDefault();
      return true;
    } else if (focusedElement === this.lastNameInput && params.event.key === 'Tab') {
      this.firstNameInput.focus();
      params.event.preventDefault();
      return true;
    }
  }

  getGui() {
    return this.eGui;
  }

  getValue() {
    return `${this.firstNameInput.value} ${this.lastNameInput.value}`;
  }

  afterGuiAttached() {
    this.firstNameInput.focus();
  }
}
