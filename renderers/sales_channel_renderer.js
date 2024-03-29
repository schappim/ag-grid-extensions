export class SalesChannelRenderer {
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
      ${this.getIcon(this.status)} <span class="${this.getTextColor(this.status)}">${this.titleCase(params.value)}</span>
      </div>
    `;
  }

  // Convert a string to title case
  titleCase(str) {
    let title = ''
    let title = str.toLowerCase().split(' ').map(function (word) {
      word.replace(word[0], word[0].toUpperCase());
    }).join(' ');

    if (str === 'POS') {
      title = 'Point of Sale';
    }

    if (str === 'Ebay') {
      title ='eBay';
    }

    if (str === 'Wholesale') {
      title = 'Wholesale';
    }

    return title || str;
  }

  // Get the text color based on the status
  getTextColor(status) {
    switch (status) {
      case 'shopify':
        return 'text-[#698D48]';
      case 'koi':
        return 'text-indigo-800';
      case 'etsy':
        return 'text-white';
      case 'ebay':
        return 'text-gray-800';
      case 'amazon':
        return 'text-gray-800';
      case 'POS':
        return 'text-gray-800';
      case 'Wholesale':
        return 'text-gray-800';
      default:
        return 'text-gray-800';
    }
  }

  // Get the background color based on the status
  getBgColor(status) {
    switch (status) {
      case 'shopify':
        return 'bg-[#e1ebcc]';
      case 'koi':
        return 'bg-indigo-200';
      case 'etsy':
        return 'bg-[#e46d2c]';
      case 'ebay':
        return 'bg-gray-100';
      case 'amazon':
        return 'bg-gray-100';
      case 'pos':
        return 'bg-gray-100';
      case 'wholesale':
        return 'bg-gray-100';
      default:
        return 'text-gray-800';
    }
  }

  getIcon(status) {
    switch (status) {
      case 'shopify':
        return this.shopifyIcon();
      case 'koi':
        return this.koiIcon();
      case 'etsy':
        return this.etsyIcon();
      case 'ebay':
        return this.ebayIcon();
      case 'amazon':
        return this.amazonIcon();
      case 'pos':
        return this.POSIcon();
      case 'wholesale':
        return this.wholesaleIcon();
      default:
        return this.koiIcon();
    }
  }

  getGui() {
    return this.eGui;
  }

  shopifyIcon() {
    return `<svg class="w-4 h-4 fill-[#698D48]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M388.3 104.1a4.7 4.7 0 0 0 -4.4-4c-2 0-37.2-.8-37.2-.8s-21.6-20.8-29.6-28.8V503.2L442.8 472S388.7 106.5 388.3 104.1zM288.7 70.5a116.7 116.7 0 0 0 -7.2-17.6C271 32.9 255.4 22 237 22a15 15 0 0 0 -4 .4c-.4-.8-1.2-1.2-1.6-2C223.4 11.6 213 7.6 200.6 8c-24 .8-48 18-67.3 48.8-13.6 21.6-24 48.8-26.8 70.1-27.6 8.4-46.8 14.4-47.2 14.8-14 4.4-14.4 4.8-16 18-1.2 10-38 291.8-38 291.8L307.9 504V65.7a41.7 41.7 0 0 0 -4.4 .4S297.9 67.7 288.7 70.5zM233.4 87.7c-16 4.8-33.6 10.4-50.8 15.6 4.8-18.8 14.4-37.6 25.6-50 4.4-4.4 10.4-9.6 17.2-12.8C232.2 54.9 233.8 74.5 233.4 87.7zM200.6 24.4A27.5 27.5 0 0 1 215 28c-6.4 3.2-12.8 8.4-18.8 14.4-15.2 16.4-26.8 42-31.6 66.5-14.4 4.4-28.8 8.8-42 12.8C131.3 83.3 163.8 25.2 200.6 24.4zM154.2 244.6c1.6 25.6 69.3 31.2 73.3 91.7 2.8 47.6-25.2 80.1-65.7 82.5-48.8 3.2-75.7-25.6-75.7-25.6l10.4-44s26.8 20.4 48.4 18.8c14-.8 19.2-12.4 18.8-20.4-2-33.6-57.2-31.6-60.8-86.9-3.2-46.4 27.2-93.3 94.5-97.7 26-1.6 39.2 4.8 39.2 4.8L221.4 225.4s-17.2-8-37.6-6.4C154.2 221 153.8 239.8 154.2 244.6zM249.4 82.9c0-12-1.6-29.2-7.2-43.6 18.4 3.6 27.2 24 31.2 36.4Q262.6 78.7 249.4 82.9z"/></svg>`
  }

  koiIcon() {
    return `<svg class="w-4 h-4 fill-[#271F5A]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="m464 455s.3 1 .6 1.6c3.5 8.3 6.1 21.8 8.3 40.3c1 7.4-4.5 14.1-11.8 15c-.6 0-1 0-1.6 0h-279c-7.4 0-13.4-6.1-13.4-13.4c0-.6 0-1 0-1.6c2.2-18.6 5.1-32 8.3-40.3c0-.6 .3-1.3 .6-1.6c-4.8-1.6-9.3-3.8-13.4-6.1c-16.3-8.6-29.4-21.8-38.1-38.1S111 378.2 111 333.1v-25.3s0 0-.3 0h-5.1c-4.5 0-6.4-.6-8.3-1.6s-3.2-2.2-4.2-4.2s-1.6-3.5-1.6-8.3v-75.8c0-4.5 .6-6.4 1.6-8.3s2.2-3.2 4.2-4.2s3.5-1.6 8.3-1.6h5.1s1.3 0 1.6 0c2.6-30.1 8.6-49 18.2-66.9c12.8-24 31.4-42.6 55.4-55.4c19.8-10.6 41.3-17 77.1-18.9c.6-16 2.2-37.4 5.1-42.6c3.5-6.4 8.6-11.5 15-15s13.8-5.4 27.5-5.4h17.9c14.1 0 21.1 1.9 27.5 5.4s11.5 8.6 15 15c2.6 5.1 4.5 26.6 5.1 42.6c36.2 1.9 57.3 8.3 77.1 18.9c24 12.8 42.6 31.4 55.4 55.4c9.6 17.9 15.7 36.8 18.2 66.9c.6 0 1 0 1.6 0h5.1c4.5 0 6.4 .6 8.3 1.6s3.2 2.2 4.2 4.2s1.6 3.5 1.6 8.3v75.8c0 4.5-.6 6.4-1.6 8.3s-2.2 3.2-4.2 4.2s-3.5 1.6-8.3 1.6h-5.1s0 0-.3 0v25.3c0 44.8-4.8 61.1-13.4 77.8c-8.6 16.3-21.8 29.4-38.1 38.1c-4.5 2.2-8.6 4.5-13.4 6.1h0zM209.9 262.7c24 0 43.5-19.5 43.5-43.5s-19.5-43.5-43.5-43.5-43.5 19.5-43.5 43.5 19.5 43.5 43.5 43.5zm220.5 0c24 0 43.5-19.5 43.5-43.5s-19.5-43.5-43.5-43.5-43.5 19.5-43.5 43.5 19.5 43.5 43.5 43.5zM320.3 393.6c33.3 0 63.7-18.6 91.2-55.4c1.9-2.2 1.3-5.8-1-7.7c-1-.6-1.9-1-3.2-1H233.3c-2.9 0-5.4 2.6-5.4 5.4c0 1.3 .3 2.2 1 3.2c27.5 36.8 57.9 55.4 91.2 55.4z"/></svg>`
  }

  etsyIcon() {
    return `<svg class="w-4 h-4 fill-white"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M384 348c-1.8 10.8-13.8 110-15.5 132-117.9-4.3-219.9-4.7-368.5 0v-25.5c45.5-8.9 60.6-8 61-35.3 1.8-72.3 3.5-244.1 0-322-1-28.5-12.1-26.8-61-36v-25.5c73.9 2.4 255.9 8.6 363-3.8-3.5 38.3-7.8 126.5-7.8 126.5H332C320.9 115.7 313.2 68 277.3 68h-137c-10.3 0-10.8 3.5-10.8 9.8V241.5c58 .5 88.5-2.5 88.5-2.5 29.8-1 27.6-8.5 40.8-65.3h25.8c-4.4 101.4-3.9 61.8-1.8 160.3H257c-9.2-40.1-9.1-61-39.5-61.5 0 0-21.5-2-88-2v139c0 26 14.3 38.3 44.3 38.3H263c63.6 0 66.6-25 98.8-99.8H384z"/></svg>`
  }

  ebayIcon() {
    return `<svg class="w-4 h-4 fill-gray-600"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M606 189.5l-54.8 109.9-54.9-109.9h-37.5l10.9 20.6c-11.5-19-35.9-26-63.3-26-31.8 0-67.9 8.7-71.5 43.1h33.7c1.4-13.8 15.7-21.8 35-21.8 26 0 41 9.6 41 33v3.4c-12.7 0-28 .1-41.7 .4-42.4 .9-69.6 10-76.7 34.4 1-5.2 1.5-10.6 1.5-16.2 0-52.1-39.7-76.2-75.4-76.2-21.3 0-43 5.5-58.7 24.2v-80.6h-32.1v169.5c0 10.3-.6 22.9-1.1 33.1h31.5c.7-6.3 1.1-12.9 1.1-19.5 13.6 16.6 35.4 24.9 58.7 24.9 36.9 0 64.9-21.9 73.3-54.2-.5 2.8-.7 5.8-.7 9 0 24.1 21.1 45 60.6 45 26.6 0 45.8-5.7 61.9-25.5 0 6.6 .3 13.3 1.1 20.2h29.8c-.7-8.2-1-17.5-1-26.8v-65.6c0-9.3-1.7-17.2-4.8-23.8l61.5 116.1-28.5 54.1h35.9L640 189.5zM243.7 313.8c-29.6 0-50.2-21.5-50.2-53.8 0-32.4 20.6-53.8 50.2-53.8 29.8 0 50.2 21.4 50.2 53.8 0 32.3-20.4 53.8-50.2 53.8zm200.9-47.3c0 30-17.9 48.4-51.6 48.4-25.1 0-35-13.4-35-25.8 0-19.1 18.1-24.4 47.2-25.3 13.1-.5 27.6-.6 39.4-.6zm-411.9 1.6h128.8v-8.5c0-51.7-33.1-75.4-78.4-75.4-56.8 0-83 30.8-83 77.6 0 42.5 25.3 74 82.5 74 31.4 0 68-11.7 74.4-46.1h-33.1c-12 35.8-87.7 36.7-91.2-21.6zm95-21.4H33.3c6.9-56.6 92.1-54.7 94.4 0z"/></svg>`
  }

  amazonIcon() {
    return `<svg class="w-4 h-4 fill-gray-600"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"/></svg>`
  }

  POSIcon() {
    return `<svg class="w-4 h-4 fill-gray-600"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z"/></svg>`
  }

 wholesaleIcon() {
    return `<svg class="w-4 h-4 fill-gray-600"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>`
  }


}
