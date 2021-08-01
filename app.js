// Discord integration libraries
const Discord = require('discord.js');
const client  = new Discord.Client();
// Bot specific libraries
const parser   = require('./parser.js');		// Parser
const commands = require('./commands.js');	// Commands list and code
const conf     = require('./config.json');	// Config

// Show a message when the bot is ready
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

// message handler
client.on('message', msg => {
	if (msg.content.startsWith(conf.prefix)) {
		let newMsg = commands.run(parser.process(msg.content));

		// In order to prevent some crashes we filter out messages that aren't of type string.
		// If your module is giving the message below try casting to string before returning.
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
