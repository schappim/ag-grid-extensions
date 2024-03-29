export class SupplierOrderStatusRenderer {
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
     <span class="${this.getTextColor(this.status)}">${this.titleCase(params.value)}</span></div>
    `;

  }


  titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }


  getTextColor(status) {
    switch (status) {
      case 'sent':
        return 'text-orange-800';
      case 'pending':
        return 'text-blue-800';
      case 'shipped':
        return 'text-purple-800';
      case 'arrived':
        return 'text-indigo-800';
      case 'receiving':
        return 'text-pink-800';
      case 'received':
        return 'text-green-800';
      case 'draft':
        return 'text-gray-800';
      default:
        return 'text-gray-800';
    }
  }

  getBgColor(status) {
    switch (status) {
      case 'sent':
        return 'bg-orange-200';
      case 'pending':
        return 'bg-blue-200';
      case 'shipped':
        return 'bg-purple-200';
      case 'arrived':
        return 'bg-indigo-200';
      case 'receiving':
        return 'bg-pink-200';
      case 'received':
        return 'bg-green-200';
      case 'draft':
        return 'bg-gray-200';
      default:
        return 'bg-gray-200';
    }
  }



  getGui() {
    return this.eGui;
  }
}
