function loadRepos() {
   let request = new XMLHttpRequest();
   request.open('GET', 'https://api.github.com/users/testnakov/repos');
   request.send();
   let div = document.getElementById('res');
   div.textContent = ''
   request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
         div.textContent = this.response
      }
   }
}