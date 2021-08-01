/* Speedwagon bot commands
 * This is the file which contains every command used by Speedwagon bot
 */
const conf = require('./config.json');

const run = (commandObj) => {

	switch (commandObj.tokens[0]) {
		case "quote":
			return quote();
		case "rate":
			return rate(commandObj);
		case "source":
			return source();
		default:
			return "I'm sorry, but I do not know what you want to do.";
	}
};

const quote = () => {
	const quotes = [
		"I hate my life.\n- Scraft161",
		"Why isn't my code working? (this includes the quote system)\n- Scraft161",
		"When all else fails, degeneracy is the only option left.\n- Scraft161",
		"I really should stop quoting myself.\n- Scraft161",
		"Don't quote me on that.\n- Scraft161",
		"I told you not to quote me on that.\n- Scraft161",
		"And that’s why I turned one of your pistols into a banana. It’s your last meal. Take your time… enjoy it.\n- Giorno Giovanna",
		"You truly are the lowest scum in history. You can’t pay back what you owe with money.\n- Jotaro Kujo",
		"Just shut up already. I have nothing more to say to you. You’re way too pathetic… I’m done wasting my breath.\n- Jotaro Kujo",
		"I covered you with gasoline so I can track your smell. I feel bad, kicking a guy when he’s down, but… Nah, I don´t feel bad about this at all. My friends and a lot of bystanders are dead because of you.\n- Jotaro Kujo",
		"This ends here! You will not leave this place alive!\n- Jonathan Joestar",
		"When I was a kid, I saw Mona Lisa from my grammar school art book….The fist time I saw her, with her hands on her knee…how do I say this…I had a boner.\n- Yoshikage Kira",
		"Go out there and take this useless world for all you can get.\n Dio Brando",
		"Right about now, you’re probably wondering who I am. Allow me to elucidate ya! The name is Robert E. O. Speedwagon! I had a hunch Jonathan’s run of trouble might not be done, so I followed him back home. I like you, Jonathan, so I’m gonna offer up this little tidbit pro bono: living in the gutter, you learn to spot lowlifes pretty quick if you want to see tomorrow. I’ve trained my nose to sort out the bad ones from the good just from a sniff. This fellow reeks of brimstone and blood worse than anyone I’ve ever laid eyes on!\n- Robert E.O. Speedwagon",
		"Shoot me if you want to! But you better be prepared to face the consequences. The moment you try to pull that trigger, I’ll snap your fingers in half like matchsticks!\n- Joseph Joestar"
	];
	const quoteLen = quotes.length - 1;

	return {
		"type": "message",
		"content": quotes[Math.round(Math.random() * quoteLen)]
	};
};

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
	if (conf.embeds) {	//if embeds are enabled
		return {
			"type": "embed",
			"content": {
				"title": "Source code",
				"description": "Find my source code and setup guide by clicking the text above.",
				"url": "https://github.com/Scraft161/Speedwagon-bot",
				"type": "link"
			}
		};
	} else {
		return {
			"type": "message",
			"content": "You can find my source code over at: https://github.com/Scraft161/Speedwagon-bot/"
		};
	}
};

module.exports = { run };
