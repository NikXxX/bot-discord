module.exports = {
  config: {
    name: "help",
    aliases: ["h"]
  },
  run: async (client, message, args) => {
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL())
      .setAuthor(message.author.username, message.author.avatarURL())
      .setColor(0x0040ff)
      .addField(
        ":newspaper: **Informations →**",
        "`badge` , `help` , `serveurinfos`"
      )
      .addField(":video_game: **Jeux →**", "`crstats` , `brstats` , `crstats` , `fnstats` , `rwstats`")
      .addField(":tada: **Fun →**", "`blague` , `joke`")
      .addField(
        ":camping: **Images →**",
        "`beautiful` , `crush` , `gay` , `sniper` , `vs`"
      );
    message.channel.send(embed);
  }
};
