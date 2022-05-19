const { execFileSync } = require("child_process");


module.exports = (on, config) => {
    on("task", {
        resetDb: () => {
          console.log("Resetting DB...");
          // we have to return something or Cypress gets mad
          return execFileSync("./scripts/populate_db");
        },
    });
};

