module.exports = async (client, message) => {
  const fs = require("fs");
  
  if (message.author.bot || message.channel.type === "dm") return;
 
  let prefix = "*"
  if (!message.content.startsWith(prefix)) return;

  const [cmd, ...args] = message.content.slice(prefix.length).split(/ +/g);

  let commandFile = client.commands.find(c =>
    c.triggers.includes(cmd.toLowerCase())
  );
  if (commandFile) commandFile.run(client, message, args);
};
