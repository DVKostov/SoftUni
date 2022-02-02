function search() {
   let array = document.getElementById('towns').children;
   let search = document.getElementById('searchText').value;
   let matches = 0;
   for (let index = 0; index < array.length; index++) {
      if (array[index].textContent.includes(search)) {
         array[index].style.textDecoration = 'underline';
         array[index].style.fontWeight = 'bold';
         matches++;
      } else {
         array[index].style.textDecoration = 'none';
         array[index].style.fontWeight = 'normal';
      }
   }
   document.getElementById('result').textContent = `${matches} matches found`

}