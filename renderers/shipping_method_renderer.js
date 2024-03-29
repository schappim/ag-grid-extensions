export class ShippingMethodRenderer {
  init(params) {

    // if the value is blank, render it as plain text
    if (!params.value) {
      this.eGui = document.createElement('span');
      this.eGui.textContent = params.value;
      return;
    }

    this.status = `${params.value}`.toLowerCase();

    this.eGui = document.createElement('div');
    this.eGui.setAttribute('class', 'h-full flex items-center justify-start p-1');
    this.eGui.innerHTML = `<div class="flex  py-1 px-2 rounded-lg text-xs rounded space-x-1 items-center justify-start ${this.getBgColor(this.status)}">
      ${this.getIcon(this.status)} <span class="${this.getTextColor(this.status)}">${this.titleCase(params.value)}</span></div>
    `;

  }


  titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }


  getTextColor(status) {
    switch (status) {
      case 'standard':
        return 'text-red-800';
      case 'express':
        return 'text-yellow-800';
      case 'pickup':
        return 'text-blue-800';
      default:
        return 'text-gray-800';
    }
  }

  getBgColor(status) {
    switch (status) {
      case 'standard':
        return 'bg-red-200';
      case 'express':
        return 'bg-yellow-200';
      case 'pickup':
        return 'bg-blue-200';
      default:
        return 'bg-gray-200';
    }
  }

  getIconColor(status) {
    switch (status) {
      case 'standard':
        return 'fill-red-800 text-red-700';
      case 'express':
        return 'fill-yellow-800 text-yellow-700';
      case 'pickup':
        return 'fill-blue-800 text-blue-700';
      default:
        return 'fill-gray-600 text-gray-600';
    }
  }


  getIcon(status) {
    switch (status) {
      case 'standard':
        return this.standardIcon();
      case 'express':
        return this.expressIcon();
      case 'pickup':
        return this.pickupIcon();
      default:
        return this.standardIcon();
    }
  }

  standardIcon() {
    return `<svg class="w-4 h-4  ${this.getIconColor(this.status)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`
  }

  expressIcon() {
    return `<svg class="w-4 h-4  ${this.getIconColor(this.status)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>`
  }

  pickupIcon() {
    return `<svg class="w-4 h-4  ${this.getIconColor(this.status)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M0 155.1c0-7.2 2.2-14.3 6.2-20.4L81.8 21.4C90.7 8 105.7 0 121.7 0L518.3 0c16.1 0 31 8 39.9 21.4l75.6 113.4c4 6 6.2 13.1 6.2 20.4c0 20.3-16.5 36.8-36.8 36.8l-28.6 0c-20.2-19.9-48-32.2-78.6-32.2s-58.4 12.3-78.6 32.2L36.8 192C16.5 192 0 175.5 0 155.1zM64 224l64 0 0 160 192 0 0-160 64 0 0 47.8 0 95.9c-38 21.3-63.8 61.9-64 108.6l0 1.2c.1 12.6 3.7 24.4 9.9 34.5L112 512c-26.5 0-48-21.5-48-48l0-80 0-160zM352 477.1c0-51.4 41.7-93.1 93.1-93.1l101.8 0c51.4 0 93.1 41.7 93.1 93.1c0 19.3-15.6 34.9-34.9 34.9l-218.2 0c-19.3 0-34.9-15.6-34.9-34.9zM426.7 232c14.3-24.8 40.7-40 69.3-40s55 15.2 69.3 40s14.3 55.2 0 80s-40.7 40-69.3 40s-55-15.2-69.3-40s-14.3-55.2 0-80zM571.8 354.3c1.4-1.3 2.8-2.7 4.2-4.1l0 5c-1.4-.3-2.8-.6-4.2-.9z"/></svg>`
  }


  getGui() {
    return this.eGui;
  }
}
