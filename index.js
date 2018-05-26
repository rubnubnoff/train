let arr = require('./arr.js');

console.log(arr);
for(let i = 0; i < arr.length; i++){
	document.getElementsByTagName('ul')[i].text = arr();
	console.log(arr);
}