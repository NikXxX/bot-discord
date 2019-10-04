module.exports.run = async (client, message, args) => {
  const lang = require('../lang/fr.json').brstats
  try {
    const lang = require('../lang/fr.json').brstats
    const Discord = require("discord.js");
    const BrawlStars = require("brawlstars");
    const user = args[0]
    if (!user) return message.channel.send(lang.notag)
    const br = {
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiIzMjg3MjgxNzQ1MzM4MDQwMzIiLCJyZWFzb24iOiJCb3QgIiwidmVyc2lvbiI6MSwiaWF0IjoxNTY3NjAyMDQ5fQ.dDKHloN7b1uM4q1Un7dH61jIw6Q-oytgOj2yQD-mwcc'
    }
    const brs = new BrawlStars.Client({ token: br.token });

    const player = await brs.getPlayer(args[0]);
    const e = new Discord.RichEmbed()
      .setColor('0040ff')
      .setThumbnail(player.avatarUrl)
      .setTitle(lang.title)
      .addField(lang.nom, player.name, true)
      .addField(lang.tag, player.tag, true)
      .addField(lang.club, player.club.name, true)
      .addField(lang.niveau, player.expLevel, true)
      .addField(lang.xp, player.totalExp, true)
      .addField(lang.trophée, player.trophies, true)
      .addField(lang.victoire, player.victories, true)
      .addField(lang.unlocked, player.brawlersUnlocked, true)
    message.channel.send(e)
  } catch (e) {
    message.channel.send(lang.err)
  }
}
module.exports.config = {
  "name": "brstats",
  "aliases": []
}