document.addEventListener('DOMContentLoaded', () => {
	const actual = document.getElementById('actual');
	const potential = document.getElementById('potential');

	if(localStorage.getItem('total')){
		actual.innerText = localStorage.getItem('total');
	}

	const buttons = document.querySelectorAll('input');
	buttons.forEach((e) => {
		e.addEventListener('click', () =>{
			switch(e.value){
				case 'CLEAR':
					actual.innerText = '0000';
				case 'ADD':
					actual.innerText = pad(parseInt(actual.innerText, 10) + parseInt(potential.innerText, 10));
					potential.innerText = '0000';
					localStorage.setItem('total', actual.innerText);
					break;
				default:
					const value = e.value.slice(e.value.indexOf('+') + 1);
					potential.innerText = pad(parseInt(potential.innerText, 10) + parseInt(e.value.slice(e.value.indexOf('+') + 1), 10));
			}
		});
	});
});

function pad(n) {
	if(n < 10){
		return ('000' + n);
	} else if(n < 100){
		return ('00' + n);
	} else {
		return (n < 1000) ? ('0' + n) : n;
	}	
}