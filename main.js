let size1 = document.getElementById('size1');
let size2 = document.getElementById('size2');
let sizeName1 = document.getElementById('sizeName1');
let sizeName2 = document.getElementById('sizeName2');
let price = document.getElementById('price');
// let itemwind1 = document.getElementById('itemwind1');
// let itemwind2 = document.getElementById('itemwind2');
// let itemwind3 = document.getElementById('itemwind3');
// let itemwind4 = document.getElementById('itemwind4');
// let itemwind5 = document.getElementById('itemwind5');
// let itemwind6 = document.getElementById('itemwind6');
// let itemwind7 = document.getElementById('itemwind7');
// let itemwind8 = document.getElementById('itemwind8');
// let itemwind9 = document.getElementById('itemwind9');
// let itemwind10 = document.getElementById('itemwind10');
let porf1 = document.getElementById('porf1');
let porf2 = document.getElementById('porf2');
let porf3 = document.getElementById('porf3');
let pod = document.getElementById('pod');
let otl = document.getElementById('otl');
let otk = document.getElementById('otk');
let lam = document.getElementById('lam');
let set = document.getElementById('set');

let check = document.querySelectorAll('.itemwind');
let prof = document.querySelectorAll('.prof');
let typeWin;
let typeProf;
let valueCheckPrice = 0;
let valueProfPrice = 0;

// prof1 = 500;
// prof2 = 600;
// prof3 = 700;


let checked = function() {

	for (let i = 0; i < check.length; i++) { /*Перебор всех тип окон*/ 
		check[i].checked = false;
		console.log(check[i]);
		check[i].addEventListener('change', function() {
			if (check[i].checked){
				typeWin = parseInt(check[i].dataset.item);
				console.log('typeWin: ', typeWin);
				switch (typeWin) { /*установка цены типа окна*/ 
					case 11: 
						valueCheckPrice = 1000;
						break;
					case 12:
						valueCheckPrice = 1100;
						break;
					case 13:
						valueCheckPrice = 1150;
						break;
					case 14:
						valueCheckPrice = 1200;
						break;
					case 15:
						valueCheckPrice = 1250;
						break;
					case 16:
						valueCheckPrice = 1300;
						break;
					case 17:
						valueCheckPrice = 1350;
						break;
					case 18:
						valueCheckPrice = 1400;
						break;
					case 19:
						valueCheckPrice = 1450;
						break;
					case 110:
						valueCheckPrice = 1500;
						break;
				}
			};
			console.log(valueCheckPrice);
			pricef();
		});
	};

	for (let i = 0; i < prof.length; i++) { /*Перебор всех тип профилей*/ 
		prof[i].checked = false;
		console.log(prof[i]);
		prof[i].addEventListener('change', function() {
			if (prof[i].checked) {
				typeProf = parseInt(prof[i].dataset.item);
				console.log('typeProf: ', typeProf);
				switch (typeProf) { /*установка цены типа профилей*/
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
		price.innerText = Math.floor((((parseInt(size1.value) + parseInt(size2.value)) * 2) / 1000) * valueProfPrice + valueCheckPrice);
		};
	
}
checked();

