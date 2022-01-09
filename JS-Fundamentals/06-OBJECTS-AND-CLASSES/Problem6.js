function songs (array) {
    let songs = [];
    class Song {
        constructor (type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
            this.print = () => {
                console.log(name);
            }
        }
    }
    for (let index = 1; index < Number(array[0]) + 1; index++) {
        let i = array[index];
        let [type, name, time] = i.split('_');
        songs.push(new Song(type, name, time))
    }
    let filter = array.pop();
    if (filter === 'all') {
        songs.forEach((i) => i.print())
    } else {
        let filtered = songs.filter((i) => i.type === filter);
        filtered.forEach((i) => i.print())
    }

}

songs ([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'] 
)