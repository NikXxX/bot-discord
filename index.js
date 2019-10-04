let config = require("./config");
const Discord = require("discord.js");
const client = new Discord.Client();
//client.website = require("./website/dashboard");
client.on("ready", async () => {
  console.log(`${client.user.username} is now Active!`);
  client.user.setActivity(`*help - ${client.guilds.size} serveurs`);
});

const fs = require("fs");
client.config = config;
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  const jsfile = files.filter(f => f.endsWith(".js"));
  if (jsfile.length <= 0) return console.log("[FS] Couldn't Find Commands!");

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`);
    client.commands.set(
      pull.config.name,
      Object.assign(pull, {
        triggers: [pull.config.name, ...(pull.config.aliases || [])]
      })
    );
  });
});

client.on("message", async message => {
  const prefix = config.BOT_PREFIX;
  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  const [cmd, ...args] = message.content.slice(prefix.length).split(/ +/g);

  let commandFile = client.commands.find(c =>
    c.triggers.includes(cmd.toLowerCase())
  );
  if (commandFile) commandFile.run(client, message, args);
});

client.login(config.BOT_TOKEN);
module.exports = client;
