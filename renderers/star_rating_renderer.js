export class StarRatingRenderer {
  init(params) {

    // take a rating 0-5 and turn it into stars
    // increments of 0.5 are supported

    // convert the the value to a number
    let value = parseFloat(params.value);

    // clamp the value to 0-5
    value = Math.min(5, Math.max(0, value));

    // round to the nearest .5
    value = Math.round(value * 2) / 2;

    // create the stars
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (value >= i) {
        starsHtml += this.star();
      } else if (value >= i - 0.5) {
        starsHtml += this.starHalf();
      }
    }


    this.eGui = document.createElement('div');
    this.eGui.setAttribute('class', 'flex items-center space-x-1 h-full justify-start text-yellow-500');
    this.eGui.innerHTML = starsHtml;
  }

  getGui() {
    return this.eGui;
  }


  star() {
    return `<svg class="h-4 w-4 fill-[#F5BD42]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`;
  }

  starHalf() {
    return `<svg class="h-4 w-4 fill-[#F5BD42]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M288 0c-12.2 .1-23.3 7-28.6 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3L288 439.8V0zM429.9 512c1.1 .1 2.1 .1 3.2 0h-3.2z"/></svg>`
  }


}
