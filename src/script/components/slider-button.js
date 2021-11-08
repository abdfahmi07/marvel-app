class SliderButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <button class="slider-button slider-previous"><i class="fas fa-chevron-left"></i></button>
            <button class="slider-button slider-next"><i class="fas fa-chevron-right"></i></button>
        `;
  }
}

customElements.define("slider-button", SliderButton);
