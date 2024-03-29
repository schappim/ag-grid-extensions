export class BadgeRenderer {
  init(params, status_color_map) {
    // Default color is set to gray if there's no match in status_color_map
    let color = status_color_map[params.value] || 'gray';

    this.eGui = document.createElement('span');
    // Uses the color variable which dynamically sets the class based on the status_color_map or defaults to gray
    this.eGui.setAttribute('class', `bg-${color}-200 text-${color}-800 border border-${color}-600 py-1 px-2 rounded-lg text-xs font-medium`);
    this.eGui.textContent = params.value;
  }

  getGui() {
    return this.eGui;
  }
}
