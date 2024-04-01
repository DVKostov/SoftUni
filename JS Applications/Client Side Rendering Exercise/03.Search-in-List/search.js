import { towns } from './towns.js'
import { html, render } from '../node_modules/lit-html/lit-html.js'

var townsDiv = document.getElementById('towns');
var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', search);
var input = document.getElementById('searchText');
search();

function townTemplate(town) {
   var addClass = null

   if (input.value) {
      if (town.toLowerCase().includes(input.value.toLowerCase())) {
         addClass = 'active'
      }
   }
   return html`<li class ="${addClass}" id="${town}">${town}</li>`;
}


function search() {
   console.log(input.value);


   render(html`<ul>${towns.map(townTemplate)}</ul>`, townsDiv);
}
