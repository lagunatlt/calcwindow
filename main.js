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

// prof1 = 500;
// prof2 = 600;
// prof3 = 700;
size1.value = 1000;
size2.value = 1000;


let checked = function() {


	for (let i = 0; i < type.length; i++) { /*Перебор всех тип окон*/ 
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

	for (let i = 0; i < prof.length; i++) { /*Перебор всех типов профилей*/ 
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
						valueProfPrice = 1100;
						break;
					case 23:
						valueProfPrice = 1150;
						break;
				}
			};
			console.log(valueProfPrice);
			pricef();
		});
	};

	for (let i = 0; i < glass.length; i++) { /*Перебор всех типов стеклопакетов*/
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


	size1.addEventListener('input', function () {
		sizeName1.innerText = size1.value;
		console.log(size1.value);
		pricef();
	});
	size2.addEventListener('input', function () {
		sizeName2.innerText = size2.value;
		pricef();
	});

	let pricef = function () {
		price.innerText = Math.floor(((((parseInt(size1.value) * 2) + (parseInt(size2.value) * 2)) / 1000) * valueProfPrice) + (valueTypePrice + valueGlassPrice));
		};
	
}
checked();

