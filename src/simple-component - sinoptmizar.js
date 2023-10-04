import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import { until } from 'lit/directives/until.js';
import { asyncAppend } from 'lit/directives/async-append.js';
import { AsyncReplaceDirective } from 'lit/directives/async-replace.js';

// const llamaDetalles = (url) => {
//   console.log('llama detalles', url);
// }
// function llamaDetalles(url) {
//   console.log('llama detalles', url);
// }


/*
const fetchDetalle = async (url) => {
  console.log('fetchDetalle', url);
  // const responseDetalle = await fetch(url);
  const responseDetalle = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const jsonDetalle = await responseDetalle.json();
  console.log(jsonDetalle.title);

  this.valorString = html`<p>Adios</p>`;
  // return jsonDetalle.title;
  // await new Promise((r) => setTimeout(r, 1000));
};
*/



const fetchDataxxx = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  // const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const json = await response.json();

  let aTemp = json.results;
  let htmlTemp = '';
  console.log('json', json);
  console.log('aTemp', aTemp);
  let arespuesta = [];


  aTemp.forEach(persona => {
    console.log('persona', persona.name, persona.url);
    arespuesta.push(agregaPokemon(persona));
    // this.mispokes.push(persona);
  });

  console.log('arespuesta', arespuesta);


  // let renderBefore = container.querySelector('.mih3');
  // this.staticNode = this.renderRoot.querySelector('.mih3');
  // console.log(json.results);
  // aTemp = json.results;

  // aTemp.forEach(element => {

  //   htmlTemp += `<p>${element.name}</p>`;
  // });
  // console.log('htmlTemp', htmlTemp);
  // json.forEach(element => {
  //   // htmlTemp += '<li>' + element.title + '</li>';
  //   htmlTemp += `<li>${element.title}</li>`;
  // });


  // return `<ul>${htmlTemp}</ul>`;
  // return json.title;
  /*
 
  return html`<p>${json.name}</p>
  <p>${json.title}</p>`;
  */
  // htmlTemp = '<p>ggggg</p>';
  // let xxx = html`<span>yyyy</span>

  // <span>${json.title}</span>
  // <span>${json.title}</span>`

  // let algo = html`<p>ggggg</p>`;
  // let algo = html`${xxx}`;
  // console.log(algo);
  // console.log(typeof algo);
  // return html`<div>${htmlTemp}</div>`;
  // return json;
  return arespuesta;

};

async function fetchDetalle(url) {
  console.log('fetchDetalle', url);
  // const responseDetalle = await fetch(url);
  const responseDetalle = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const jsonDetalle = await responseDetalle.json();
  console.log(jsonDetalle.title);

  // this.valorString = html`<p>Adios</p>`;

  this.things._addThing('abc');

  // return jsonDetalle.title;
  // await new Promise((r) => setTimeout(r, 1000));
};


/*
function _llamaDetalles(url) {
  // console.log('increment', url);
  this.contentDetalle = _fetchDetalle(url);

}
*/

function agregaPokemon(obj) {
  console.log('agregaPokemon');
  // return html`<p>${obj}</p>`;
  return html`<button @click=${() => _llamaDetalles(obj.url)}>${obj.name}</button>`;
}



async function* tossCoins(count) {
  for (let i = 0; i < count; i++) {
    yield Math.random() > 0.5 ? 'Heads' : 'Tails';
    await new Promise((r) => setTimeout(r, 1000));
  }
}


// async function* fetchDetalle() {
//   for (let i = 0; i < 8; i++) {
//     yield Math.random() > 0.5 ? 'Heads' : 'Tails';
//     await new Promise((r) => setTimeout(r, 1000));
//   }
//   this.requestUpdate();
// }

class MyElement extends LitElement {
  static properties = {
    content: { state: true },
    contentDetalle: { state: true },
    things: { state: true },
    mispokes: { state: true },
    tosses: { state: true },
    valorString: { state: true },
  };

  // _llamaDetalles(url) {
  //   console.log('llama detalles');
  // }
  _otro(index) {
    return html`<p>${index}</p>`;
  }
  _agregaPokemon(obj) {
    console.log('_agregaPokemon');
    return html`<button @click=${() => this._llamaDetalles(obj.url)}>${obj.name}</button>`;
  }



  constructor() {
    super();
    this.tosses = tossCoins(10);
    this.tosses = tossCoins(10);
    this.mispokes = ['1', '2', '3'];
    this.things = ['Raindrops on roses',
      'Whiskers on kittens', 'Bright copper kettles',
      'Warm woolen mittens',];
    this.content = this._fetchData();
    this.contentDetalle;
    this.valorString = html``;
  }


  async _fetchData() {
    console.log('feetch');
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const json = await response.json();
    let aTemp = json.results;
    let htmlTemp = '';
    console.log('json', json);
    console.log('aTemp', aTemp);
    let arespuesta = [];
    aTemp.forEach(persona => {
      console.log('persona', persona.name, persona.url);
      arespuesta.push(this._agregaPokemon(persona));
      // this.mispokes.push(persona);
    });
    console.log('arespuesta', arespuesta);
    return arespuesta;
  }



  async _fetchDetalle(url) {
    console.log('_fetchDetalle', url);
    const responseDetalle = await fetch(url);
    // const responseDetalle = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const jsonDetalle = await responseDetalle.json();
    console.log(jsonDetalle);
    // console.log(jsonDetalle.title);
    let arHabilidades = [];


    let jsonHabilidades = jsonDetalle.abilities;
    jsonHabilidades.forEach(persona => {
      arHabilidades.push(persona.ability.name)
      // arHabilidades += html`<li>${persona.ability.name}</li>`;
      // console.log('persona', persona.ability.name);
    });
    console.log('arHabilidades', arHabilidades);


    this.valorString = html`
    <img src="${jsonDetalle.sprites.front_default}" alt="${jsonDetalle.name}">
    <h2>${jsonDetalle.name}</h2>
    <p>Altura: ${jsonDetalle.height}</p>
    <p>Peso: ${jsonDetalle.weight}</p>
    <p>Habilidades:</p>
    <ul>${map(arHabilidades, habilidad => html`<li>${habilidad}</li>`)}</ul>
    `;

  }
  _llamaDetalles(url) {
    console.log('_llamaDetalles', url);
    this.contentDetalle = this._fetchDetalle(url);
  }
  _deleteThing(index) {
    this.things = this.things.filter((_, i) => i !== index);
  }
  _addThing(index) {
    this.things.push(index);
  }


  // ${until(this.content, html`<span>Loading...</span>`)}
  // ${until(this._deleteThing(this.content, this.mispokes), html`<span>Loading...</span>`)}
  render() {
    // <div id=detalle">${until(this.contentDetalle, html`<span>Loading detalle...</span>`)}</div>
    // <ul>${asyncAppend(this.contentDetalle, (v) => html`<li>${v}</li>`)}</ul>
    return html`
  <h1>Pokemon!</h1>
  ${until(this.content, html`<span>Loading...</span>`)}
  <div id=detalle">${this.valorString}</div>
`;
  }



}
customElements.define('my-element', MyElement);


