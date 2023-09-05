const oauthService = require("./auth_service.js");

function oauthProcessor(code, done) {
  console.log("oauthProcessor");
  console.log(code);
  oauthService.getGithubAccessToken(code, (err, token) => {
    if (err) {
      done(err);
    } else {
      done(null, token);
    }
  });
}

module.export = oauthProcessor;
