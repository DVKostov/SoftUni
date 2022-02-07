function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let target = event.target;
        let max = target.clientWidth - 1;
        let result = document.getElementById('result');
        let current = Math.trunc((event.offsetX / max) * 100)
        result.textContent = `${current}%`;
    }
    function gradientOut(event) {
        result.textContent = ``;
    }
}