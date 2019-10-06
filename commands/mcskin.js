module.exports = {
  config: {
    name: "mcskin",
    aliases: []
  },
  run: (client, message, args) => {
    const name = args.join(" ");
    if (!name) return message.reply("Veuillez saisir le nom d'un skin!");
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
    .setColor("#0040ff")
      .setTitle(`**Télécharger le skin de ${name}**`)
      .setURL(`https://minotar.net/download/${name}`)
      .setImage(`https://minotar.net/body/${name}/100.png`);
    message.channel.send(embed);
  }
};
