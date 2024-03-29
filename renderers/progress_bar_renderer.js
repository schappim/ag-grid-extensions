export class ProgressBarRenderer {
  init(params) {

    // clamp values to 0-100
    params.value = Math.min(100, Math.max(0, params.value));

    this.eGui = document.createElement('div');
    this.eGui.setAttribute('class', 'h-full flex items-center justify-center');
    this.eGui.innerHTML = `<div class="bg-gray-200 w-full rounded-full">
      <div class="rounded-full h-3 bg-green-600" style="width: ${params.value}%;"></div>
      </div>
      </div>

    `;
  }
  getGui() {
    return this.eGui;
  }
}
