function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input'));
    buttons = buttons.filter(e => e.type === 'button');
    let texts = Array.from(document.querySelectorAll('input'));
    texts = texts.filter(e => e.type === 'text');

    for (button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        let currentText = event.target.parentElement.children[1];
        inputs = texts.filter(e => e !== currentText);
        let currentValue = Number(currentText.value)
        switch (currentText.id) {
            case 'days':
                texts.filter(e => e.id === 'hours')[0].value = currentValue * 24;
                texts.filter(e => e.id === 'minutes')[0].value = currentValue * 1400;
                texts.filter(e => e.id === 'seconds')[0].value = currentValue * 86400;
                break;
            case 'hours':
                texts.filter(e => e.id === 'days')[0].value = currentValue / 24;
                texts.filter(e => e.id === 'minutes')[0].value = currentValue * 60;
                texts.filter(e => e.id === 'seconds')[0].value = currentValue * 3600;
                break;
            case 'minutes':
                texts.filter(e => e.id === 'days')[0].value = currentValue / 1440;
                texts.filter(e => e.id === 'hours')[0].value = currentValue / 60;
                texts.filter(e => e.id === 'seconds')[0].value = currentValue * 60;
                break;
            case 'seconds':
                texts.filter(e => e.id === 'days')[0].value = currentValue / 86400;
                texts.filter(e => e.id === 'hours')[0].value = currentValue / 3600;
                texts.filter(e => e.id === 'minutes')[0].value = currentValue / 60;
                break;
            default:
                break;
        }

    }
}