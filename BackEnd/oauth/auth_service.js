const axios = require("axios");
const config = require("../../config.js");

function getGithubAccessToken(code, done) {
  const body = {
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    code,
  };
  console.log(body);
  const opts = {
    headers: {
      accept: "application/json",
    },
  };

  axios
    .post("https://github.com/login/outh/access_token?", body, opts)
    .then((response) => response.data.access_token)
    .then((token) => {
      done(null, token);
    })
    .cathc((err) => {
      done({ err: err.message });
    });
}

module.export = getGithubAccessToken;
