import { LitElement, css, html } from 'lit';
import { map } from 'lit/directives/map.js';

export class SimpleComponent extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    :host {
      color: blue;
    }
  `;
    static properties = {
        // holamundo: { type: String },
        items: { state: true },
    };
    constructor() {
        super();
        // Declare reactive properties
        // this.holamundo = 'World';
        this.items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime']);
    }
    // Render the UI as a function of component state
    render() {
        return html`
        <p>My unique fruits</p>
        <ul>
          ${map(this.items, (item) => html`<li>${item}</li>`)}
        </ul>
        `;
    }
}
customElements.define('simple-component', SimpleComponent);