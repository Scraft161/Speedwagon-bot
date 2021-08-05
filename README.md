# Speedwagon-bot

ever thought another discord bot would just add to the pile of useless bots that exist.
Allow me to introduce Speedwagon bot, a bot so useless it needs to look like a gentlemen in order to appeal to others.

## Privacy

We do our best to not log anything unless something goes wrong.
We don't even log user interactions on our end (discord will log actions taken on your server).

the only things that get logged are beta features when `betaLogging` is enabled in the config.
current list of beta features:
- embeds (only data in the embed sent by the bot is logged `[content]`)

Please do keep in mind that this may not apply to any of our forks or discord itself.

## configuration

You can configure the bot using a `config.json` file in the bot directory
Currently there are only a couple options you can set.

token: Input your bot's token here. (string)
prefix: Choose what you want as prefix (string)
embeds: Whether the bot should send embeds or only use text (boolean)

example config:
```json
{
  "token": "",
  "prefix": ",",
  "embeds": true,
  "audio": {
    "enabled": false
  }
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

if you want to send embeds you need to return an object.
this object should be constructed using the following template:
```json
{
  "type": "embed",
  "content": {
    "embed data here"
  }
}
```

you can find a list of every field you can use [here](https://discord.js.org/#/docs/main/stable/class/MessageEmbed).
(every writable property can be used)

you can also use this method to return normal text (the proper way).
doing this can be done using the following template:
```json
{
  "type": "message",
  "content": "text to return goes here"
}
```

## copying

This bot's source code is free to be used by anyone else, it is still facing early development as of now, so bugs shall be plenty.
