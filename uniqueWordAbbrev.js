/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
	this.hash = {};
	let abbrev;
	dictionary.forEach(word => {
		abbrev = this.abbrev(word);

		if (this.hash[abbrev]) {
			this.hash[abbrev].add(word);
		} else {
			this.hash[abbrev] = new Set([word]);
		}
	});
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
	let abbrev = this.abbrev(word);
	return !this.hash[abbrev] || this.hash[abbrev].size === 1 && this.hash[abbrev].has(word);
};

ValidWordAbbr.prototype.abbrev = function(word) {
	return word.length < 3 ? word : `${word[0]}${word.length - 2}${word[word.length - 1]}`;
};



/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */

console.assert(new ValidWordAbbr([]).isUnique('hello') === true);
console.assert(new ValidWordAbbr(['hello']).isUnique('hello') === true);
console.assert(new ValidWordAbbr(['deer', 'hello']).isUnique('dear') === false);
console.assert(new ValidWordAbbr(['truck']).isUnique('car') === true);
console.assert(new ValidWordAbbr(['deer', 'door', 'hello']).isUnique('deer') === false);
console.assert(new ValidWordAbbr(['deer', 'door', 'hello']).isUnique('door') === false);
console.assert(new ValidWordAbbr(['deer', 'deer']).isUnique('deer') === true);