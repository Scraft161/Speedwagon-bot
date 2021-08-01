// Discord libraries
const Discord = require('discord.js');
const client  = new Discord.Client();
// Bot specific libraries
const parser   = require('./parser.js');		// Parser
const commands = require('./commands.js');	// Commands list and code
const conf     = require('./config.json');	// Config

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content.startsWith(conf.prefix)) {
		let newMsg = commands.run(parser.process(msg.content));

		if (typeof(newMsg) == "string") {
			msg.channel.send(newMsg);
		} else {
			msg.channel.send("Please excuse me but something went critically wrong, could you try again?");
		}
	}
});

// Login with the token provided in the config
console.log("connecting to Discord ...");
client.login(conf.token);

/*
 * external function issue workaround
*/

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
