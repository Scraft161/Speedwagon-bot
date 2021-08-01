/* parser
*/
module.exports = { run };

const conf = require('./config.json');

const run = (command) => {
	tokenize(command);
	parse();
};

const tokenize = (command) => {
	let tokens = command.slice(conf.prefix.length).split(' ');
	return tokens;
};

const parse = (tokens) => {
	let hasMagicWord = false;
	switch (tokens[0]) {
		case "quote":
			return /*quote(tokens[1])*/ "Why isn't my code working? (this includes the quote system)\n- Scraft161";
		case "rate":
			tokens.forEach((item, i) => {
				if (tokens[i].includes("Jonathan")) {
					hasMagicWord = true;
				}
			});

			tokens.shift();

			if (hasMagicWord) {
				return "I would rate " + tokens.join(' ') + " over 10/10.";
			} else {
				const rated = Math.round(Math.random() * 10);
				if (rated == 8) {
					return "I would rate " + tokens.join(' ') + " an " + rated + "/10";
				} else {
					return "I would rate " + tokens.join(' ') + " a " + rated + "/10";
				}
			}
		default:
			return "I'm sorry my good sir, but I do not know what you want to do.";
	}
};
