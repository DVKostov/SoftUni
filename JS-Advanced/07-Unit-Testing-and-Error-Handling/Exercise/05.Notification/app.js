function notify(message) {
  let element = document.getElementById('notification');
  element.textContent = message;
  element.style.display = 'block';
  element.addEventListener('click', () => {
    element.style.display = 'none';
  })
}