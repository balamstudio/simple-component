import { LitElement, html } from 'lit';

class MyHeader extends LitElement {

  render() {
    return html`
      <header>
        <img src="src/images/pokemon_logo.png" alt="Pokemon">
        <h1>Pokémon destacados</h1>
      </header>
    `;
  }
}
customElements.define('my-header', MyHeader);
