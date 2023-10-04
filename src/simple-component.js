import { LitElement, css, html } from 'lit';
import { map } from 'lit/directives/map.js';
import { until } from 'lit/directives/until.js';


class MyElement extends LitElement {
  static styles = css`
header {
  text-align: center;
  display   : flex;
  flex-direction: column;
  align-items: center;
}
.menu-pokemones {
  justify-content: center;
  display        : flex;
  flex-flow      : row wrap;
  margin         : 0 auto;
  max-width      : 1000px;
  width          : 70%;
}

.detalle {
  background   : #fff;
  border-radius: 10px;
  color        : #000;
  text-align   : center;
  width        : 30%;
}

.detalle h2 {
  margin-top    : 0;
  text-transform: capitalize;
}

.detalle ul {
  list-style: none;
  padding: 0;
}

.wrapper {
  display      : flex;
  margin-inline: auto;
  max-width    : 1200px;
}


.card {
  background-color: #fff;
  border          : none;
  border-radius   : 10px;
  color           : #3c5aa6;
  cursor          : pointer;
  font-size       : 14px;
  font-weight     : bold;
  margin          : 10px;
  padding         : 14px;
  text-transform  : capitalize;
  transition      : all .5s;
  width           : 150px;
}

.card:hover {
  background-color: #3c5aa6;
  color: #fff;
}

`;
  static properties = {
    content: { state: true },
    contentDetalle: { state: true },
    detalleString: { state: true },
  };

  _agregaPokemon(obj) {
    return html`<button class="card" @click=${() => this._llamaDetalles(obj.url)}>${obj.name}</button>`;
  }

  constructor() {
    super();
    this.content = this._fetchData();
    this.contentDetalle;
    this.detalleString = html``;
  }

  async _fetchData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const json = await response.json();
    let aTemp = json.results;
    let aRespuesta = [];
    aTemp.forEach(pokemon => {
      aRespuesta.push(this._agregaPokemon(pokemon));
    });
    return aRespuesta;
  }

  async _fetchDetalle(url) {
    const responseDetalle = await fetch(url);
    const jsonDetalle = await responseDetalle.json();
    let arHabilidades = [];
    let jsonHabilidades = jsonDetalle.abilities;
    jsonHabilidades.forEach(pokemon => {
      arHabilidades.push(pokemon.ability.name)
    });
    this.detalleString = html`
      <img src="${jsonDetalle.sprites.front_default}" alt="${jsonDetalle.name}">
      <h2>${jsonDetalle.name}</h2>
      <p><b>Altura:</b> ${jsonDetalle.height}</p>
      <p><b>Peso:</b> ${jsonDetalle.weight}</p>
      <p><b>Habilidades:</b></p>
      <ul>${map(arHabilidades, habilidad => html`<li>${habilidad}</li>`)}</ul>
    `;
  }

  _llamaDetalles(url) {
    this.contentDetalle = this._fetchDetalle(url);
  }

  render() {
    return html`
    <header>
      <img src="src/images/pokemon_logo.png" alt="Pokemon">
      <h1>Pokémon destacados</h1>
    </header>
    <div class="wrapper">
      <div class="menu-pokemones">
        ${until(this.content, html`<span>Loading...</span>`)}
      </div>
      <div class="detalle">${this.detalleString}</div>
    </div>
    `;
  }

}
customElements.define('my-element', MyElement);


