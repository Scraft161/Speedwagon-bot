/* Speedwagon bot command workaround
 * This is a temporary workaround to register slash commands until discord.js 13.x is available
 */

// inport library to allow registering slash commands
const DiscordInteractions = require("slash-commands");
// Import config
const conf = require('./config.json');

const init = () => {
// pass config data to interactions API (should be pulled from config.json)
	const interaction = new DiscordInteractions({
		applicationId: conf.id,
		authToken: conf.token,
		publicKey: conf.key
	})
}
// init to register all commands and check if registered commands are up-to-date with local list

const register = async () => {
	// get commands list
	await interaction
		.getApplicationCommands()
		.then(console.log)
		.catch(console.error);

	const cmdQuote = {
		name: "quote",
		description: "Get a quote"
	};

	// create commands
	await interaction
		.createApplicationCommand(cmdQuote)
		.then(console.log)
	.catch(console.error);
}
