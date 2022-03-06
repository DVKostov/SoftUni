function loadRepos() {
	let input = document.getElementById('username').value;
	let request = new XMLHttpRequest();
	request.open('GET', `https://api.github.com/users/${input}/repos`);
	request.send();
	let ul = document.getElementById('repos');
	ul.textContent = ''
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			var response = JSON.parse(this.response);
			for (let index = 0; index < response.length; index++) {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.href = response[index].html_url
				a.textContent = response[index].full_name
				li.appendChild(a);
				ul.appendChild(li);
			}
		}
	}
}