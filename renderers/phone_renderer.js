import parsePhoneNumber from 'libphonenumber-js';

export class PhoneRenderer {
  init(params) {

    // If the value is empty, create a span element and set its text content to an empty string
    if (!params.value || params.value === '' || params.value === '0' || !params.value.match(/\d/)) {
      this.eGui = document.createElement('span');
      this.eGui.textContent = '';
      return;
    }

    // Parse the phone number using the 'libphonenumber-js' library
    const phoneNumber = parsePhoneNumber(params.value, 'AU');

    // If the phone number is invalid, create a span element and set its text content to the original value
    if (!phoneNumber) {
      this.eGui = document.createElement('span');
      this.eGui.textContent = params.value;
      return;
    }

    // If the phone number is valid, create an anchor element and set its href attribute to the phone number URI
    this.eGui = document.createElement('a');
    this.eGui.setAttribute('href', phoneNumber.getURI());

    // Format the phone number in the national format
    const formattedNumber = phoneNumber.formatNational();

    // If the length of the formatted number is 8, reformat it to "xxxx xxxx" format
    if (formattedNumber.length === 8) {
      this.eGui.textContent = `${formattedNumber.substring(0, 4)} ${formattedNumber.substring(4)}`;
      return;
    }

    // Set the text content of the anchor element to the formatted phone number
    this.eGui.textContent = phoneNumber.formatNational();
  }

  getGui() {
    // Return the created element (span or anchor)
    return this.eGui;
  }
}
