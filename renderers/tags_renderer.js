export class TagsRenderer {
  init(params) {
    this.eGui = document.createElement('div');
    this.eGui.setAttribute('class', 'h-full flex justify-start items-center space-x-2');

    const tags = params.value ? params.value.split(',') : [];
    tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.classList.add('bg-gray-200', 'text-gray-800', 'px-2', 'rounded', 'text-sm');
      tagElement.textContent = tag.trim();
      this.eGui.appendChild(tagElement);
    });
  }

  getGui() {
    return this.eGui;
  }

}
