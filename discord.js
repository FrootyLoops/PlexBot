const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const request = require('request');

client.login(config.token);



client.on('message', handleMessageEvent)
function handleMessageEvent(message) {
if (message.content === '!plex') {
    request('http://<ip:port>/library/sections/<libraryID>/refresh?X-Plex-Token=<PlexToken>', { json: true }, handleRequestResponse)
  }
}

function handleRequestResponse(err, res, body) {
  if (err) return console.log(err)
}


// ALTERNATIVE CODE
//  client.on('message', message => {
//    if (message.content === '!plex') {
//    request('http://<ip:port>/library/sections/<libraryID>/refresh?X-Plex-Token=<PlexToken>', { json: true }, (err, res, body) => {
//      if (err) return console.log(err)
//      console.log(body.url);
//      console.log(body.explanation);
//    })
//    }
//  })
