import { LitElement, html } from 'lit';

import './my-header.js';
import './simple-component.js';
import './my-footer.js';

class MyPage extends LitElement {

  render() {
    return html`
      <my-header></my-header>
      <my-element></my-element>
      <my-footer></my-footer>
    `;
  }
}
customElements.define('my-page', MyPage);
