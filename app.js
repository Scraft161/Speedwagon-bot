// Discord integration libraries
const Discord = require('discord.js');		// Discord API wrapper
const client  = new Discord.Client();

// Bot specific libraries
const parser   = require('./parser.js');	// Parser
const commands = require('./commands.js');	// Commands list and code
const conf     = require('./config.json');	// Config

// Show a message when the bot is ready
client.on('ready', () => {
	// Notify in console that the bot is live
	console.log(`Logged in as ${client.user.tag}!`);
	// Set activity status

});

// message handler
client.on('message', msg => {
	if (msg.content.startsWith(conf.prefix)) {
		let newMsg = commands.run(parser.process(msg.content));

		// In order to prevent some crashes we filter out messages that aren't of type string.
		// If your module is giving the message below try casting to string before returning.
		if (typeof(newMsg) == "string") {
			console.log("[WARN]: Using string as return type is only supposed to be used for testing purposes and may be removed in the future, Please use objects to enable extra features");
			msg.channel.send(newMsg);
		} else if (typeof(newMsg) == "object") {	// Unpack object into proper data we can use
			if (newMsg.type == "message") {			// Simple return messages
				msg.channel.send(newMsg.content);
			} else if (newMsg.type == "embed") {	// Embed messages
				// extract content object from embed and feed it into discord.js embed constructor.
				msg.channel.send(new Discord.MessageEmbed(newMsg.content));
				if (conf.betaLogging) {
					console.log(newMsg.content);
				}
			} else if (newMsg.type == "error") {	// If there is internal error handling it can pack into an embed for us
				const intErr = new Discord.MessageEmbed(newMsg.content);	// create embed from packed data
				msg.channel.send("We ran into an error while executing your command" + intErr);
			} else {
				msg.channel.send("Err: message returned by module is of unknown type `" + newMsg.type + "`, expected `message`, `embed`, or `error`");
			}
		} else if (typeof(newMsg) == "integer") {	// TODO: check if returned value is not zero
			msg.channel.send("The module you tried to use returned an error `code: " + newMsg + "`.");
		} else {
			msg.channel.send("Please excuse me but something went critically wrong, could you try again?");
			console.log(newMsg);
		}
	}
	if (convertSauce) {
		if (/^\[[0-9]{3,6}\]$/.test(msg.content)) {
			msg.channel.send("https://nhentai.net/g/" + msg.content.slice(1, -1) + "/");
		}
	}
});

// Login with the token provided in the config
console.log("Taking final preparations.");
const convertSauce = conf.convertSauce;
console.log("Connecting to Discord ...");
client.login(conf.token);
