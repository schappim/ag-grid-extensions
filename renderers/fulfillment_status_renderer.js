export class FulfillmentStatusRenderer {
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
      case 'unfulfilled':
        return 'text-yellow-800';
      case 'pending':
        return 'text-orange-800';
      case 'partial':
        return 'text-orange-800';
      case 'transit':
        return 'text-blue-800';
      case 'rejected':
        return 'text-red-800';
      case 'delivered':
        return 'text-green-800';
      case 'fulfilled':
        return 'text-gray-800';
      default:
        return 'text-gray-800';
    }
  }

  getBgColor(status) {
    switch (status) {
      case 'unfulfilled':
        return 'bg-yellow-200';
      case 'partial':
        return 'bg-orange-200';
      case 'pending':
        return 'bg-yellow-200';
      case 'rejected':
        return 'bg-red-200';
      case 'delivered':
        return 'bg-green-200';
      case 'transit':
        return 'bg-blue-200';
      case 'fulfilled':
        return 'bg-gray-200';
      default:
        return 'bg-gray-200';
    }
  }

  getIconColor(status) {
    switch (status) {
      case 'unfulfilled':
        return 'fill-yellow-800 text-yellow-700';
      case 'partial':
        return 'fill-orange-800 text-orange-700';
      case 'pending':
        return 'fill-yellow-800 text-yellow-700';
      case 'rejected':
        return 'fill-red-800 text-red-700';
      case 'transit':
        return 'fill-blue-800 text-blue-700';
      case 'delivered':
        return 'fill-green-800 text-green-700';
      case 'fulfilled':
        return 'fill-gray-600 text-gray-600';
      default:
        return 'fill-gray-600 text-gray-600';
    }
  }


  getIcon(status) {
    switch (status) {
      case 'unfulfilled':
        return this.unfulfilledIcon();
      case 'partial':
        return this.partialIcon();
      case 'pending':
        return this.unfulfilledIcon();
      case 'delivered':
        return this.deliveredIcon();
      case 'rejected':
        return this.rejectedIcon();
      case 'in-transit':
        return this.transitIcon();
      case 'fulfilled':
        return this.fulfilledIcon();
      default:
        return this.unfulfilledIcon();
    }
  }

  fulfilledIcon() {
    return `<svg class="w-3 h-3  ${this.getIconColor(this.status)}" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>`
  }

  rejectedIcon() {
    return `<svg class="w-3 h-3  ${this.getIconColor(this.status)}"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`
  }

  unfulfilledIcon() {
    return `<svg class="w-3 h-3  ${this.getIconColor(this.status)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`
  }


  transitIcon() {

    return `<svg class="w-3 h-3  ${this.getIconColor(this.status)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`
  }

  partialIcon() {
    return `<svg class="w-3 h-3  ${this.getIconColor(this.status)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`
  }


  deliveredIcon() {
    return `<svg class="w-3 h-3 ${this.getIconColor(this.status)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193 241 337z"/></svg>`
  }


  getGui() {
    return this.eGui;
  }
}
