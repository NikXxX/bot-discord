const Client = require("fortnite");
const fortnite = new Client("0cdc3b8d-0f31-44e4-bd6a-47afe459b55f");
const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  try {
    const na = args[0];
    if (!na) return "Veuillez saisir le pseudo d'un joueur fortnite!";
    fortnite.user(na).then(data => {
      const stats = data.stats;
      const lt = stats.lifetime;

      const embed = new MessageEmbed()
        .setTitle("__Statistiques Fortnite__")
        .setColor("0040ff")
        .addField("Pseudo : ", data.username, true)
        .addField("ID", data.id, true)
        .addField("Platforme : ", data.platform, true)
        .addField("Tuer", lt.kills, true)
        .addField("K/D", lt.kd, true)
        .addField("Score : ", lt.score, true)
        .addField("Matches Joués : ", lt.matches)
        .addField("Top 1 : ", lt.wins, true)
        .addField("Top 3 : ", lt.top_3, true)
        .addField("Top 5 : ", lt.top_5, true)
        .addField("Top 6 : ", lt.top_6, true)
        .addField("Top 12 : ", lt.top_12, true)
        .addField("Top 25 : ", lt.top_25, true);

      message.channel.send(embed);
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports.config = {
  name: "fnstats",
  aliases: []
};
