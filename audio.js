/* audio handler
 * All audio related things should go here
*/
const conf = require('./config.json');

const run = (commandObj) => {
  //
  switch (commandObj.tokens[1]) {
    case "help":
      return help();
    case "play":
      return play(commandObj);
    default:
      return "Unknown audio subcommand";
  }
};

const help = () => {
  return "Help has not been implemented";
};

module.exports = { run };
