function solve() {
  let initial = document.getElementById('text').value.split(' ');
  let casee = document.getElementById('naming-convention').value;
  if (casee === "Camel Case" || casee === "Pascal Case") {

    for (let index = 0; index < initial.length; index++) {
      initial[index] = initial[index][0].toUpperCase() + initial[index].slice(1).toLowerCase()
    }

    if (casee === "Camel Case") {
      initial[0] = initial[0].toLowerCase()
    }

    document.getElementById('result').textContent = initial.join('');

  } else {

    document.getElementById('result').textContent = 'Error!';

  }
}