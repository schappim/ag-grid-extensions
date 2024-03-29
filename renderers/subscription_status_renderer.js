export class SubscriptionStatusRenderer {
  init(params) {
    // If the value is blank, render it as plain text
    if (!params.value) {
      this.eGui = document.createElement('span');
      this.eGui.textContent = params.value;
      return;
    }

    // Convert the status to lowercase
    this.status = `${params.value}`.toLowerCase();

    // Create a div element for the status
    this.eGui = document.createElement('div');
    this.eGui.setAttribute('class', 'h-full flex items-center justify-start p-1');

    // Set the inner HTML of the div element with the status and appropriate colors
    this.eGui.innerHTML = `
      <div class="flex py-1 px-2 rounded-lg text-xs rounded space-x-1 items-center justify-start ${this.getBgColor(this.status)}">
        <span class="${this.getTextColor(this.status)}">${this.titleCase(params.value)}</span>
      </div>
    `;
  }

  // Convert a string to title case
  titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

  // Get the text color based on the status
  getTextColor(status) {
    switch (status) {
      case 'subscribed':
        return 'text-green-800';
      case 'unsubscribed':
        return 'text-yellow-800';
      case 'not-subscribed':
        return 'text-gray-800';
      default:
        return 'text-gray-800';
    }
  }

  // Get the background color based on the status
  getBgColor(status) {
    switch (status) {
      case 'subscribed':
        return 'bg-green-200';
      case 'unsubscribed':
        return 'bg-yellow-200';
      case 'not-subscribed':
        return 'bg-gray-200';
      default:
        return 'bg-gray-200';
    }
  }

  getGui() {
    return this.eGui;
  }
}
