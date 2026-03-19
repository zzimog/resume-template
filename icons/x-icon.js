class XIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['src'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const src = this.getAttribute('src') || '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 1.5em;
          height: 1.5em;
          background-color: currentColor;
          mask: url(${src}) no-repeat center / contain;
        }
      </style>
    `;
  }
}

customElements.define('x-icon', XIcon);
