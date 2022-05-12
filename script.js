let btnConvert = document.querySelector('button');
let input = document.querySelector('input');
let output = document.querySelector('h2');

btnConvert.addEventListener('click', () => {
	output.innerText = numberToWords.toWords(input.value);
});

