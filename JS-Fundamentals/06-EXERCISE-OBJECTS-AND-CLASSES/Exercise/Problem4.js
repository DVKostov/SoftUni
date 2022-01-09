function info(input) {
    class Movie {
        constructor(name, director , date) {
            this.name = name;
            this.director  = director;
            this.date = date;
        }
    }
    let movies = [];
    for (let index = 0; index < input.length; index++) {
        let array = input[index].split(' ');
        if (array[0] === 'addMovie') {
            let newMovieArray = input[index].split(' ');
            newMovieArray.shift();
            movies.push(new Movie(newMovieArray.join(' ')))
        } else if (array.indexOf('directedBy') > -1) {
            let director = input[index].split(' directedBy ');
            if (movies.find(movie => movie.name === director[0]) !== undefined) {
                movies.find(movie => movie.name === director[0]).director = director[1];
            }
        } else {
            let date = input[index].split(' onDate ');
            if (movies.find(movie => movie.name === date[0]) !== undefined) {
                movies.find(movie => movie.name === date[0]).date = date[1];
            }
        }
    }
    let filteredMovies = movies.filter(movie => movie.name !== undefined && movie.director !== undefined && movie.date !== undefined);
    for (let index = 0; index < filteredMovies.length; index++) {
        console.log(JSON.stringify(filteredMovies[index]))
    }
   
}
info([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
)