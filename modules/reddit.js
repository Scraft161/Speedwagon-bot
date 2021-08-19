/* Subreddit image request feature
 * request image from list of enabled subreddits
 */
// Import config
const conf = require('../config.json');
// This module requires snekfetch to function.
const snekfetch = require('snekfetch');

const run = (commandObj) => {
  if (commandObj.tokens[1]) { // Only fetch if a subreddit is specified
    return query(commandObj.tokens[1]);
  } else {  // Otherwise return error message
    return {
      "type": "message",
      "content": "Please specify a subreddit"
    }
  }
}

const query = (subRedditName) => {  // not sending data back for now, fixed: don't use async function
  // for every item in conf.reddit.allowedsubreddits
    // check if subRedditName = currentItem
      // run reddit fetch
    // else
      // return error message

  conf.reddit.allowedsubreddits.forEach((item, i) => {
    if (subRedditName = item) {
      return "Work In progress";
    } else {
      return {
        "type": "message",
        "content": `The sub provided isn't allowed, allowed subs are ${conf.reddit.allowedsubreddits}`
      };
    }
  });


/*  this is not working for some reason but is kept as a refetrence.
  try {
    console.log('Querrying subreddit data from: ' + subRedditName);
    const { body } = await snekfetch
      .get('https://www.reddit.com/r/' + subRedditName + '.json?sort=top&t=week')
      .query({ limit: 800 });
    console.log('Transaction complete, dumping received data:');
    console.log(body);
    const allowed = body.data.children.filter(post => !post.data.over_18);
    if (!allowed.length) return "No more posts";
    const randomNumber = Math.floor(Math.random() * allowed.length);
    console.log(allowed);
    return 'test';/*
    return {
      "type": "embed",
      "content": {
        "color": "0x00A2E8",
        "title": "${allowed[randomNumber].data.title}",
        "description": "Posted by: ${allowed[randomNumber].data.author}",
        "image": "${allowed[randomNumber].data.url}",
        "footer": "Content pulled from Reddit and provided by the r/${subRedditName} community"
      }
    };*//*
  } catch (err) {
    console.log(err);
  }*/
}

module.exports = { run };
