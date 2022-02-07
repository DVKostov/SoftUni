function encodeAndDecodeMessages() {
    document.querySelectorAll('button')[0].addEventListener('click', encode);
    document.querySelectorAll('button')[1].addEventListener('click', decode);

    function encode() {
        let message = document.querySelectorAll('textarea')[0].value
            .split('')
            .map(e => String.fromCharCode(e.charCodeAt(0) + 1))
            .join('');

            document.querySelectorAll('textarea')[0].value = '';
            document.querySelectorAll('textarea')[1].value = message;
    }

    function decode() {
        message = document.querySelectorAll('textarea')[1].value
            .split('')
            .map(e => String.fromCharCode(e.charCodeAt(0) - 1))
            .join('');
        document.querySelectorAll('textarea')[1].value = message;
    }



}