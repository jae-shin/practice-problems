/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
	let encoded = '';
	strs.forEach(str => {
		str.split('').forEach((char, index) => {
			encoded += String.fromCharCode(str.charCodeAt(index) + 1);
		});
		encoded += '\n';
	});

	return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
	let decoded;
	return s.split('\n').slice(0, -1).map(str => {
		decoded = '';
		str.split('').forEach((char, index) => {
			decoded += String.fromCharCode(str.charCodeAt(index) - 1);
		});
		return decoded;
	});
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

console.log(decode(encode([])));
console.log(decode(encode(['jae'])));
console.log(decode(encode(['jae', 'bear'])));