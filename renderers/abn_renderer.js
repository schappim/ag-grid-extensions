export class ABNRenderer {
  init(params) {

    // if the value is not a valid ABN, render it as plain text
      if (!this.validateABN(params.value)) {
      this.eGui = document.createElement('span');
      this.eGui.textContent = params.value;
      // return;
    } else {


      this.eGui = document.createElement('a');
      const formattedABN = this.formatABN(params.value);

      const abnUrl = `https://abr.business.gov.au/ABN/View?id=${params.value.toString().replace(/\s+/g, '')}`;
      this.eGui.setAttribute('href', abnUrl);
      this.eGui.textContent = formattedABN;
      this.eGui.setAttribute('target', '_blank'); // Open link in a new tab/window
      this.eGui.setAttribute('rel', 'noopener noreferrer'); // Security measures for opening links in new tabs
    }
  }

   validateABN(abn) {
    // Remove any spaces and ensure the input is a string
    const cleanABN = abn.toString().replace(/\s+/g, '');

    // Check if the ABN length is exactly 11 digits
    if (cleanABN.length !== 11 || isNaN(cleanABN)) {
      return false;
    }

    // Weighting factors for each position in the ABN
    const weightingFactors = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    // Subtract 1 from the first digit
    const modifiedDigits = [(parseInt(cleanABN[0], 10) - 1).toString(), ...cleanABN.slice(1)];

    // Calculate the weighted sum of the digits
    const total = modifiedDigits.reduce((sum, digit, index) => {
      return sum + parseInt(digit, 10) * weightingFactors[index];
    }, 0);

    // Validate the ABN by checking if the total modulo 89 is 0
    return total % 89 === 0;
  }


  formatABN(abn) {
    // Normalize by removing non-numeric characters
    abn = abn.replace(/\D/g, '');

    // Format ABN into 92 644 920 764 format
    if (abn.length === 11) {
      return `${abn.slice(0, 2)} ${abn.slice(2, 5)} ${abn.slice(5, 8)} ${abn.slice(8)}`;
    } else {
      return 'Invalid ABN';
    }
  }

  getGui() {
    return this.eGui;
  }
}
