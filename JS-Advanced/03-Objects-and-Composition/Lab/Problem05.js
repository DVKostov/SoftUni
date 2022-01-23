function createAssemblyLine() {
    return {
        hasClima(myCar) {
            myCar.temp = 21,
                myCar.tempSettings = 21,
                myCar.adjustTemp = function adjustTemp() {
                    if (this.temp < this.tempSettings) { this.temp++ }
                    if (this.temp > this.tempSettings) { this.temp-- }
                }
        },
        hasAudio(myCar) {
            myCar.currentTrack = { "name": null, "artist": null }
            myCar.nowPlaying = function nowPlaying() {
                if (myCar.currentTrack.name && myCar.currentTrack.artist) {
                    console.log(`Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`);
                }
            }
        },
        hasParktronic(myCar) {
            myCar.checkDistance = function checkDistance(num) {
                if (num < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (num < 0.25 && num >= 0.1) {
                    console.log('Beep! Beep!');
                } else if (num < 0.5 && num >= 0.25) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};



