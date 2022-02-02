function solve() {
  let text = document.getElementById('input').value.split('.').map(e => e.trim());
  let counter = 0;
  let para = '';
  for (let index = 0; index < text.length; index++) {
    if (counter === 3) {
      let newPara = document.createElement("p");
      newPara.appendChild(document.createTextNode(para));
      document.getElementById('output').appendChild(newPara);
      counter = 0;
      para = '';
    }
    if (text[index].length > 0) {
      para += `${text[index]}.`;
      counter++;
    }
  }
if (counter > 0) {
  let newPara = document.createElement("p");
  newPara.appendChild(document.createTextNode(para));
  document.getElementById('output').appendChild(newPara);
}
}