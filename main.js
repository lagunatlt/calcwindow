let size1 = document.getElementById('size1');
let size2 = document.getElementById('size2');
let sizeName1 = document.getElementById('sizeName1');
let sizeName2 = document.getElementById('sizeName2');
let price = document.getElementById('price');

let pod = document.getElementById('pod');
let otl = document.getElementById('otl');
let otk = document.getElementById('otk');
let lam = document.getElementById('lam');
let set = document.getElementById('set');

let type = document.querySelectorAll('.typewind');
let prof = document.querySelectorAll('.prof');
let glass = document.querySelectorAll('.glass');

let typeWin;
let typeProf;
let typeGlass;

let valueTypePrice = 0;
let valueProfPrice = 0;
let valueGlassPrice = 0;
let otlValue = 0;
let otkValue = 0;
let lamValue = 0;
let setValue = 0;
let podValue = 0;

size1.value = 1000;
size2.value = 1000;


let checked = function() {
	otl.checked = false;
	otk.checked = false;
	lam.checked = false;
	set.checked = false;
	pod.checked = false;
	
	/* расчет подокойника */
	pod.addEventListener('change', function() {
		if(pod.checked) {
			podValue = 1500;
			console.log(podValue);
			pricef();
		} else {
			podValue = 0;
			pricef();
		}
	});
	/* -------------- */
	/* расчет отлива */
	otl.addEventListener('change', function () {
		if (otl.checked) {
			otlValue = 800;
			console.log(otlValue);
			pricef();
		} else {
			otlValue = 0;
			pricef();
		}
	});
	/* -------------- */
	/* расчет откосы */
	otk.addEventListener('change', function () {
		if (otk.checked) {
			otkValue = 800;
			console.log(otkValue);
			pricef();
		} else {
			otkValue = 0;
			pricef();
		}
	});
	/* -------------- */
	/* расчет ламинация */
	lam.addEventListener('change', function () {
		if (lam.checked) {
			lamValue = 800;
			console.log(lamValue);
			pricef();
		} else {
			lamValue = 0;
			pricef();
		}
	});
	/* -------------- */
	/* расчет москитная сетка */
	set.addEventListener('change', function () {
		if (set.checked) {
			setValue = 1000;
			console.log(setValue);
			pricef();
		} else {
			setValue = 0;
			pricef();
		}
	});
	/* -------------- */
/*Перебор всех тип окон*/
	for (let i = 0; i < type.length; i++) { 
		type[i].checked = false;
		console.log(type[i]);
	type[i].addEventListener('change', function() {
			if (type[i].checked){
				typeWin = parseInt(type[i].dataset.item);
				console.log('typeWin: ', typeWin);
				switch (typeWin) { /*установка цены типа окна*/ 
					case 11: 
						valueTypePrice = 1000;
						break;
					case 12:
						valueTypePrice = 1100;
						break;
					case 13:
						valueTypePrice = 1150;
						break;
					case 14:
						valueTypePrice = 1200;
						break;
					case 15:
						valueTypePrice = 1250;
						break;
					case 16:
						valueTypePrice = 1300;
						break;
					case 17:
						valueTypePrice = 1350;
						break;
					case 18:
						valueTypePrice = 1400;
						break;
					case 19:
						valueTypePrice = 1450;
						break;
					case 110:
						valueTypePrice = 1500;
						break;
				}
			};
			console.log(valueTypePrice);
			pricef();
		});
	};
/* ------------------- */
/*Перебор всех типов профилей*/
	for (let i = 0; i < prof.length; i++) { 
		prof[i].checked = false;
		console.log(prof[i]);
		prof[i].addEventListener('change', function() {
			if (prof[i].checked) {
				typeProf = parseInt(prof[i].dataset.item);
				console.log('typeProf: ', typeProf);
				switch (typeProf) { /*установка цены типов профилей*/
					case 21:
						valueProfPrice = 1000;
						break;
					case 22:
						valueProfPrice = 1700;
						break;
					case 23:
						valueProfPrice = 2500;
						break;
				}
			};
			console.log(valueProfPrice);
			pricef();
		});
	};
/* --------------- */
/*Перебор всех типов стеклопакетов*/
	for (let i = 0; i < glass.length; i++) { 
		glass[i].checked = false;
		console.log(glass[i]);
		glass[i].addEventListener('change', function () {
			if (glass[i].checked) {
				typeGlass = parseInt(glass[i].dataset.item);
				console.log('typeGlass: ', typeGlass);
				switch (typeGlass) { /*установка цены типов стеклопакетов*/
					case 31:
						valueGlassPrice = 1000;
						break;
					case 32:
						valueGlassPrice = 1100;
						break;
					case 33:
						valueGlassPrice = 1150;
						break;
				}
			};
			console.log(valueGlassPrice);
			pricef();
		});
	};
/* -------------------- */

	size1.addEventListener('input', function () {
		sizeName1.innerText = size1.value;
		console.log(size1.value);
		pricef();
	});
	size2.addEventListener('input', function () {
		sizeName2.innerText = size2.value;
		pricef();
	});

	/* расчет итоговой суммы */
	let pricef = function () {
		price.innerText = Math.floor(((((parseInt(size1.value) * 2) + (parseInt(size2.value) * 2)) / 1000) * valueProfPrice) + (valueTypePrice + valueGlassPrice
			+ podValue + otlValue + otkValue + lamValue + setValue));
		};
	
}
checked();

