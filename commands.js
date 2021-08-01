/* Speedwagon bot commands
 * This is the file which contains every command used by Speedwagon bot
 */
const run = (commandObj) => {

	switch (commandObj.tokens[0]) {
		case "quote":
			return /*quote(tokens[1])*/ "Why isn't my code working? (this includes the quote system)\n- Scraft161";
		case "rate":
			return rate(commandObj);
		case "source":
			return source();
		default:
			return "I'm sorry, but I do not know what you want to do.";
	}
};

/*const quote = (commandObj) => {
	// TODO: quote system
}*/

const rate = (commandObj) => {
	if (commandObj.argStr.includes("Jonathan")) {
		return "I would rate " + commandObj.argStr + " over 10/10.";
	} else {
		const rated = Math.round(Math.random() * 10);
		if (rated == 8) {
			return "I would rate " + commandObj.argStr + " an " + rated + "/10";
		} else {
			return "I would rate " + commandObj.argStr + " a " + rated + "/10";
		}
	}
};

const source = () => {
	return "https://github.com/Scraft161/Speedwagon-bot";
};

module.exports = { run };
