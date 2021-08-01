// Discord libraries
const Discord = require('discord.js');
const client = new Discord.Client();
// Import parser
//const parser = require('./parser.js');
// Import config
const conf = require('./config.json');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content.startsWith(conf.prefix)) {
		//try {
			msg.channel.send(parse(tokenize(msg.content)));
		//} catch (e) {
			//msg.channel.send("something went wrong, please try again.");
		//}
	}
});

client.login(conf.token);

/*
 * external function issue workaround
*/

// parser

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

// commands
/*
const quote = () => {
	const quotes = {
		"people": {
			"Scraft161": [
				"I hate my life.",
				"When all else fails, degeneracy is the only option left.",
				"Don't quote me on that.",
				"I told you not to quote me on that."
			],
			"Giorno Giovanna": [
				"And that’s why I turned one of your pistols into a banana. It’s your last meal. Take your time… enjoy it."
			],
			"Jotaro Kujo": [
				"You truly are the lowest scum in history. You can’t pay back what you owe with money."
			]
		}
	};

	return Math.round(Math.random() * (Object.keys(quotes.people).length - 1));
};
*/
