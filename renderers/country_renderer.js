// This class takes a country name (or IsoCode) and renders a flag emoji next to it.

export class CountryRenderer {
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.classList.add('flex', 'items-center', 'h-full', 'space-x-2');
    // this.eGui.textContent = params.value;

    if (this.isValidCountryCode(params.value)) {
      this.eGui.innerHTML = `<span class="rounded-sm fi fi-${params.value.toLowerCase()}"></span>`;

    }

  }

  // check if the value is a valid country code
  isValidCountryCode(countryCode) {
    return countryCode.length === 2;
  }

  // get the flag emoji based on the country code
  getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }

  getGui() {
    return this.eGui;
  }
}
