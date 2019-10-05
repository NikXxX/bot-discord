module.exports.run = async (client, message) => {
  const axios = require("axios");
  const { MessageEmbed } = require("discord.js");
  axios({
    method: "get",

    url: "https://blague.xyz/joke/random",

    headers: {
      Authorization:
        "NRVQedO4MWCOJGM7JIHC2VforfHGunZ_SN.LcyzFJqafgHg-ZyJ_cKMK2qqZUZDo"
    },

    responseType: "application/JSON"
  }).then(data => {
    const em = new MessageEmbed()
      .setTitle("__Blague aléatoire__")
      .setColor(0x0040ff)
      .setDescription(
        `${data.data.joke.question}\n||${data.data.joke.answer}||`
      );

    message.channel.send(em);
  });
};
module.exports.config = {
  name: "blague",
  aliases: []
};
