// this requires autoHeight: true in the gridOptions

export class VariantRenderer {
  init(params) {
    // set the gridOptions rowHeight: 64
    params.eGridCell.rowHeight = 164;


    this.eGui = document.createElement('div');
    this.eGui.setAttribute('class', 'flex items-start justify-start space-x-2 py-2');
    this.eGui.innerHTML = `
        <div class="pt-0.5">
          <div style="background-image: url('https://placehold.it/64x64'); background-size: cover; background-position: center center;" class="w-12 h-12 rounded-md border"></div>
        </div>
        <div class="flex flex-col items-start justify-start space-y-1 leading-none">
          <div class="text-sm"><a href="#" class="font-medium hover:underline">Solder Lead Free - 15-gram Tube</a></div>
          <div class=""><span class="text-xs bg-gray-200 rounded-full px-2">Large</span></div>
          <div class="text-xs text-gray-500 uppercase">SKU: SF-TOL-09163</div>
        </div>
     `
  }

  getGui() {
    return this.eGui;
  }


}
