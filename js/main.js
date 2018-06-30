'use strict';
let days = Array.from(document.getElementsByClassName('day'));
let date = new Date(2018, 7, 1);
let firstDayOfMonth = date.getDay(); //3
let numberContainer;

//Добавляю 
days.forEach((day, i) => {
	let d = new Date(date.getUTCFullYear(), date.getMonth(), date.getDate());
	let textNode;
	
	if (i < firstDayOfMonth - 1) {
		d.setDate(d.getDate() - i); //1 - 0 = 1
		textNode = document.createTextNode(d.getDate());
		day.style.backgroundColor = 'salmon';
	} else {
		d.setDate(i - 1);
		textNode = document.createTextNode(d.getDate());

		if (d.getMonth() > date.getMonth()) {
			day.style.backgroundColor = 'salmon';
		}
	}
	numberContainer = document.createElement('div');
	numberContainer.appendChild(textNode);
	day.appendChild(numberContainer);
	
	numberContainer.style.display = 'inline';
	numberContainer.className = 'number';

	
});