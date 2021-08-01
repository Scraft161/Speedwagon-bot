# Speedwagon-bot

ever thought another discord bot would just add to the pile of useless bots that exist.
Allow me to introduce Speedwagon bot, a bot so useless it needs to look like a gentlemen in order to appeal to others.

## Privacy

We do our best to not log anything unless something goes wrong.
We don't even log user interactions on our end (discord will log actions taken on your server).

Please do keep in mind that this may not apply to any of our forks or discord itself.

## configuration

You can configure the bot using a `config.json` file in the bot directory
Currently there are only two options you can set.

```json
{
  "token": "Bot token obtained from discord",
  "prefix": "Prefix used for commands"
}
```

## features

`rate` let Speedwagon give his thoughts on something.
PS: if it's Jonathan related he might not be objective about it.

`quote` get quotes from various JoJo characters or the bot developers

`source` link to this repo.

### Adding features

Adding your own features is simple.

1. open `commands.js`
2. add a new function at the bottom making sure the text you want to send is returned by the function (as type sting)
3. add your function to the switch statement.
4. done! enjoy your new feature.

## copying

This bot's source code is free to be used by anyone else, it is still facing early development as of now, so bugs shall be plenty.
