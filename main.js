let size1 = document.getElementById('size1');
let size2 = document.getElementById('size2');
let sizeName1 = document.getElementById('sizeName1');
let sizeName2 = document.getElementById('sizeName2');
let price = document.getElementById('price');

let range = function() {
	console.log(size1.value)
	sizeName1.innerText = size1.value
	price.innerText = parseInt(size1.value) + parseInt(size2.value);
}
let range2 = function () {
	// console.log(size1.value)
	sizeName2.innerText = size2.value
	price.innerText = parseInt(size1.value) + parseInt(size2.value);
	console.log(typeof(price.innerText))
}
range();
range2();
size1.addEventListener('input', range);
size2.addEventListener('input', range2);
