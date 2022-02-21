window.addEventListener('load', solution);

function solution() {

	let fullNameInput = document.getElementById('fname');
	let emailInput = document.getElementById('email');
	let phoneInput = document.getElementById('phone');
	let addressInput = document.getElementById('address');
	let codeInput = document.getElementById('code');

	let list = document.getElementById('infoPreview');
	let block = document.getElementById('block');

	let submitBTN = document.getElementById('submitBTN');
	submitBTN.addEventListener('click', submit);

	let continueBTN = document.getElementById('continueBTN');
	continueBTN.addEventListener('click', continuee);

	let editBTN = document.getElementById('editBTN');
	editBTN.addEventListener('click', edit);

	submitBTN.disabled = false;
	continueBTN.disabled = true;
	editBTN.disabled = true;

	function submit(event) {
		event.preventDefault();
		if (fullNameInput.value !== '' && emailInput.value !== '') {

			let li0 = document.createElement('li');
			li0.textContent = `Full name: ${fullNameInput.value}`;
			list.appendChild(li0);
			let li1 = document.createElement('li');
			li1.textContent = `Email: ${emailInput.value}`;
			list.appendChild(li1);
			let li2 = document.createElement('li');
			li2.textContent = `Phone Number: ${phoneInput.value}`;
			list.appendChild(li2);
			let li3 = document.createElement('li');
			li3.textContent = `Address: ${addressInput.value}`;
			list.appendChild(li3);
			let li4 = document.createElement('li');
			li4.textContent = `Postal Code: ${codeInput.value}`;
			list.appendChild(li4);

			submitBTN.disabled = true;
			continueBTN.disabled = false;
			editBTN.disabled = false;

			fullNameInput.value = ''
			emailInput.value = ''
			phoneInput.value = ''
			addressInput.value = ''
			codeInput.value = ''
		}

	}
	function continuee(event) {
		event.preventDefault();
		let array = Array.from(block.children);
		for (let index = 0; index < array.length; index++) {
			array[index].remove();
		}
		let newDiv = document.createElement('h3');
		newDiv.textContent = 'Thank you for your reservation!';
		block.appendChild(newDiv);
	}
	function edit(event) {
		event.preventDefault();

		let array = Array.from(list.children);

		fullNameInput.value = array[0].textContent.split(': ')[1];
		emailInput.value = array[1].textContent.split(': ')[1];
		phoneInput.value = array[2].textContent.split(': ')[1];
		addressInput.value = array[3].textContent.split(': ')[1];
		codeInput.value = array[4].textContent.split(': ')[1];

		for (let index = 0; index < array.length; index++) {
			array[index].remove();
		}

		submitBTN.disabled = false;
		continueBTN.disabled = true;
		editBTN.disabled = true;
	}
}
