function solve() {
   const cart = [];
   let addButtons = Array.from(document.getElementsByClassName('add-product'));
   //let textArea = document.getElementsByTagName('textarea')[0].textContent;
   for (button of addButtons) {
      button.addEventListener('click', addItem)
   }
   document.getElementsByClassName('checkout')[0].addEventListener('click', checkout)

   function addItem(event) {
      let name = event.target.parentElement.parentElement.children[1].children[0].textContent;
      let money = Number(event.target.parentElement.parentElement.children[3].textContent);
      document.getElementsByTagName('textarea')[0].textContent += `Added ${name} for ${money.toFixed(2)} to the cart.\n`
      let find = cart.filter(e => e.name === name);
      if (find.length > 0) {
         find[0].money += money
      } else {
         cart.push({ name, money })
      }
   }

   function checkout() {
      let total = Number(cart.reduce((p, c) => p + c.money, 0))
      document.getElementsByTagName('textarea')[0].textContent += `You bought ${cart.map(e => e.name).join(', ')} for ${total.toFixed(2)}.`
      document.getElementsByClassName('checkout')[0].disabled = true
      for (button of addButtons) {
         button.disabled = true
      }
   }
}