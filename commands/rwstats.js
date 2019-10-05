module.exports.run = async (client, message, args) => {
  const axios = require("axios");
  const { MessageEmbed } = require("discord.js");
  const user = args[0];
  if (!user) return message.reply("Utilisation : *rwstats <tag sans #>");
  axios({
    method: "get",

    url: `https://api.rushstats.com/v1/player/${user}`,

    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiIzMjg3MjgxNzQ1MzM4MDQwMzIiLCJyZWFzb24iOiJCb3QgIiwidmVyc2lvbiI6MSwiaWF0IjoxNTY4NTM0MDg4fQ.M6vg10LXo2lj04a8VbS_uRxQjntU-1MaVP3DPaT1bFE"
    },

    responseType: "application/JSON"
  }).then(data => {
    const embed = new MessageEmbed()
      .setColor(0x0040ff)
      .setThumbnail(data.data.league.imageUrl)
      .setTitle("__Statistiques RushWars__")
      .addField("- `Pseudo` →", data.data.name, true)
      .addField("- `Tag` →", data.data.tag, true)
      .addField("- `League` →", data.data.league.name, true)
      .addField("- `Stars` →", data.data.stars, true)
      .addField(
        "- `Total d'attaques` →",
        data.data.variables.totalAttacks,
        true
      )
      .addField(
        "- `Attaques gagnés` →",
        data.data.variables.totalAttacksWon,
        true
      )
      .addField(
        "- `Attaques perdus` →",
        data.data.variables.totalAttacksLost,
        true
      )
      .addField(
        "- `Défenses gagnés` →",
        data.data.variables.totalDefensesWon,
        true
      )
      .addField(
        "- `Défenses perdus` →",
        data.data.variables.totalDefensesLost,
        true
      );

    message.channel.send(embed);
    // console.log(data);
  });
};
module.exports.config = {
  name: "rwstats",
  aliases: []
};
