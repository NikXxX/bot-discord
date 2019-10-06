module.exports.run = (client, message, args) => {
  const request = require("request");
  args = args.join(' ');
  // On vérifie que l'utilisateur a spécifié un argument
  if (!args)
    return (message.channel.send("✘ - Veuillez spécifier une recherche."));
  if (args.length > 100)
    return (message.channel.send("✘ - Veuillez spécifier une recherche de moins ou égale à **100** caractères."))
  // On prépare l'embed avant l'envoie
  let embed = {
    author: {
      name: `${client.user.username}#${client.user.discriminator} - MDN`,
      icon_url: "https://developer.mozilla.org/static/img/favicon144.e7e21ca263ca.png",
    },
    fields: [],
    footer: { text: `${client.user.username} © ${new Date(Date.now()).getFullYear()}` }
  };
  // On fait une requête puis on parse les résultats de recherche Google via le module "google-it"
  request({
     method: "GET", 
  hostname: "developer.mozilla.org",
   path: `/en-US/search.json?locale=fr-FR&q=${encodeURIComponent(args)}`,
    headers: { 
      "Content-Type": "application/json" 
    }
   })
    .then((res) => {
      if (!res.documents || !res.documents[0])
        return (message.channel.send("✘ - Aucun résultat trouvé."));
      embed.title = res.documents[0].title;
      embed.url = res.documents[0].url;
      embed.description = res.documents[0].excerpt.replace(new RegExp("<mark>|</mark>", 'g'), '`').substr(0, 1021) + "...";
      embed.fields.push({
        name: "Tags",
        value: res.documents[0].tags.map((t) => `\`${t}\``).join(", "),
        inline: false
      });
      message.channel.send(`Voici le résultat pour: **${(args.length > 500 ? (args.slice(0, 500) + "...") : args)}**.`, { embed })
        .catch(() => message.channel.send("✘ - Une erreur est survenue."));
    })
    .catch(() => message.channel.send("✘ - Une erreur est survenue."))
    ;
};
module.exports.config = {
  name: "mdn",
  aliases: []
};