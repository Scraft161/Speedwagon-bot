/* parser
 * Convert user input into workable data for commands.js
*/
const conf = require('./config.json');

// Run governs the tokenizing and parsing process of the incoming string
// It should also handle input sanitation (TODO)
const process = (command) => {
	return parse(command);
};

const parse = (command) => {
	let tokens = command.slice(conf.prefix.length).split(' ');

	let argStr = command.slice(conf.prefix.length + tokens[0].length + 1);

	return {
		tokens,
		argStr
	};
};

module.exports = { process };
