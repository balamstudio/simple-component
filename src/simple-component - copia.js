import { LitElement, html, css } from 'lit';
//export class SimpleComplement extends LitElement {}
//import { LitElement, html, css } from './node_modules/lit/index.js';

class CounterComponent extends LitElement {
    static styles = css`
    button {
      display: center;
      font-size: 1em;
      padding: 0.5em;
      color: white;
      background-color: rebeccapurple;
      border: none;
      border-radius: 0.3em;
      cursor: pointer;
    }

    button:hover {
      background-color: indigo;
    }

    #counter {
      font-size: 2em;
      padding: 1em;
    }
  `;

    static properties = {
        count: { type: Number },
    };

    constructor() {
        super();
        this.count = 0;
    }

    render() {
        return html`
      <div>
        <button @click="${this.decrement}">-</button>
        <span id="counter">${this.count}</span>
        <button @click="${this.increment}">+</button>
      </div>
    `;
    }

    increment() {
        if (this.count < 10) {
            this.count++;
        }
    }

    decrement() {
        if (this.count > 0) {
            this.count--;
        }
    }
}

customElements.define('counter-component', CounterComponent);