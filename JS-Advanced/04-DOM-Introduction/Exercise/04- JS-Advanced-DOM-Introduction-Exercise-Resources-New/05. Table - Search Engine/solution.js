function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll('table tbody tr');
      let search = document.getElementById('searchField').value;

      for (let index = 0; index < rows.length; index++) {
         let cells = rows[index].children;
         rows[index].classList.remove("select");
         for (let i = 0; i < cells.length; i++) {
            if (cells[i].textContent.includes(search)) {
               rows[index].classList.add("select");
            }
         }
      }
   }
}