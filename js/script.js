document.addEventListener('DOMContentLoaded', () => {
	let actual = document.getElementById('actual');
	let potential = document.getElementById('potential');

	if(localStorage.getItem('total')){
		actual.innerText = localStorage.getItem('total');
	}

	let buttons = document.querySelectorAll('#button-container input');
	buttons.forEach(e => {
		e.addEventListener('click', () =>{
			let value = e.value.slice(e.value.indexOf('+')+1);
			potential.innerText = pad(parseInt(potential.innerText, 10) + parseInt(value, 10));
		});
	});
	document.querySelector('input[type=button]').addEventListener('click', () =>{
		actual.innerText = pad(parseInt(actual.innerText, 10) + parseInt(potential.innerText, 10));
		potential.innerText = '0000';
		localStorage.setItem('total', actual.innerText);
	});
});

function pad(n) {
	return (n < 1000) ? ('0' + n) : n;
}