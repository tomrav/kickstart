var fs = require('fs');
var chalk = require('chalk');

fs.readFile('node.txt', 'utf8', function(err, data) {

	var re = /Node.js/g;
	var str = data.replace(re, chalk.green('Node.js'));
	console.log(str);
})