function forSortTwo(array) {
     array.sort((a, b) => a.length - b.length || a.localeCompare(b));
     console.log(array.join('\n'))
}
forSortTwo(["Isacc", "Theodor", "Jack", "Harrison", "George"])