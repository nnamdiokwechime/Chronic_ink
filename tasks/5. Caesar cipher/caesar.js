export function encryptCaesar(inputString, key) {
	// TODO: write your code here
	const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const arrayABC = abc.split('');

	text = inputString.split('');
	let encryptedText = [];

	text.forEach(el => {
		if (el === ' ') return
		const plainTextIndex = arrayABC.indexOf(el);
		const shift = plainTextIndex + key;
		if (shift > 25) shift = shift % 25;
		encryptedText.push(arrayABC[shift]);
	})

	return encryptedText.join('');

}
