import { LitElement, css, html } from 'lit';
import { map } from 'lit/directives/map.js';
import { asyncReplace } from 'lit/directives/async-replace.js';
export class SimpleComponent extends LitElement {
  static properties = {
    things: { state: true },
    pokemones: { state: true },
    holamundo: { type: String },
  };

  // async fetchMovies() {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   // waits until the request completes...
  //   console.log(response.json());

  // }
  saludo() {
    return 'Holaaaa';
  }
  async fetchMovies() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(item => {
        let aTemp = item.results;
        let htmlTemp = '';
        aTemp.forEach(element => {
          this.pokemones.push(element);
          htmlTemp += '<li>' + element.name + '</li>';
        });
        // console.log(htmlTemp);
        // document.getElementById('pokewrapper').innerHTML = htmlTemp;
        // this.holamundo = htmlTemp;
        console.log(this.pokemones);
        return htmlTemp;
      })
      .catch(error => {
        console.log('La peticion fallo');
      });


  }

  constructor() {
    super();
    this.pokemones = [];

    // this.fetchMovies();
  }


  render() {
    return html`
      <p>A few of my favorite things</p>
      <ul id="pokewrapper">
      ${this.fetchMovies()}
      </ul>
  `;
  }
}
customElements.define('simple-component', SimpleComponent);
