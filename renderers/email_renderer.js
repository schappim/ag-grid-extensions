export class EmailRenderer {
  init(params) {

    // if the email is valid, create a mailto link
    if (this.isValidEmail(params.value)) {
      this.eGui = document.createElement('a');
      this.eGui.setAttribute('href', 'mailto:' + params.value);
      this.eGui.setAttribute('title', 'Send Email');
      this.eGui.innerHTML = params.value;
    } else {
      this.eGui = document.createElement('span');
      this.eGui.setAttribute('title', 'Invalid Email');
      this.eGui.classList.add('text-red-500');
      this.eGui.innerHTML = params.value;
    }
  }

  // check if the email is valid
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  getGui() {
    return this.eGui;
  }
}
