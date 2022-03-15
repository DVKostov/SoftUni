import {showView, e} from "/src/dom.js"
let view = document.getElementById('home-page');
view.remove();

export function showHome() {
    showView(view)
}