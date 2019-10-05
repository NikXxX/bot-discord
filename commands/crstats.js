module.exports.run = async (client, message, args) => {
  const axios = require("axios")
  axios({
    method: "get",

    url: "https://api.royaleapi.com/player/8L9L9GL",

    headers: {
      auth:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzExMSwiaWRlbiI6IjMyODcyODE3NDUzMzgwNDAzMiIsIm1kIjp7InVzZXJuYW1lIjoiIUNSM1ciLCJkaXNjcmltaW5hdG9yIjoiMTc1NCIsImtleVZlcnNpb24iOjN9LCJ0cyI6MTU3MDI3MTI1NzQ0MH0.UhhSL4tnVQEDcjdpZH8MtIZsuMUlq5zdkMde8xtUvNM"
    },

    responseType: "application/JSON"
  }).then(response => {
    console.log(response);
  });
};
module.exports.config = {
  name: "crstats",
  aliases: []
};
