import { LitElement, css, html } from 'lit';
import { map } from 'lit/directives/map.js';

export class SimpleComponent extends LitElement {
    static styles = css`
    :host {
      color: blue;
    }
  `;
    static properties = {
        names: { state: true },
    };
    constructor() {
        super();
        this.names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];
    }
    // Render the UI as a function of component state
    render() {
        return html`
        <p>A list of names that include the letter "e"</p>
        <ul>
          ${this.names
                .filter((name) => name.match(/e/i))
                .map((name) => html`<li>${name}</li>`)}
        </ul>
        `;
    }
}
customElements.define('simple-component', SimpleComponent);