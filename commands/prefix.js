module.exports = {
  config: {
    name: "prefix",
    aliases: []
  },
  run: (client, message, args, prefix) => {
 const fs = require("fs");
if(!message.member.hasPermission("MANAGE_SERVER") return message.reply("Vous n'avez pas les permissions nécessaires pour effectuer cette commandes!");
if(!args[0]) return message.reply("Veuillez saisir le nouveau préfix du bot!");
if(args[0]) return message.reply("Le préfix est trop grand!")
let prefixes = JSON.parse(fs.readFilSync("./prefixes.json" , "utf8"));
prefixes[message.guild.id] = {
  prefix: args[0]
};
fs.writeFile("./prefixes.json" , JSON.stringfy(prefixes) (err) => {
  if (err) console.log(err)
}
 message.channel.send(embed)
}
};
