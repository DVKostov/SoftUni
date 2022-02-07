function create(words) {
   let content = document.getElementById('content')
   for (word of words) {
      let newPara = document.createElement('p');
      newPara.textContent = word;
      newPara.style.display = "none";
      let newDiv = document.createElement('div');
      newDiv.appendChild(newPara);
      newDiv.addEventListener('click', display)
      content.appendChild(newDiv);
   }

   function display (event) {
      event.target.children[0].style.display = "";
   }

}