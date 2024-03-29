export class LinkRenderer {
  init(params) {

    // if the value is not a valid URL, render it as plain text
    if (!params.value || !params.value.startsWith('http')) {
      this.eGui = document.createElement('span');
      this.eGui.textContent = params.value;
      return;
    }

    this.eGui = document.createElement('a');
    this.eGui.setAttribute('href', params.value);

    // Open the link in a new tab
    this.eGui.setAttribute('target', '_blank');

    // simplified text content (hide the protocol)
    this.eGui.textContent = new URL(params.value).hostname;
  }

  getGui() {
    return this.eGui;
  }
}
