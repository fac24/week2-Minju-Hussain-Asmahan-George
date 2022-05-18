//const db = require("../database/connection.js");

function get(request, response) {
    const html = /*html*/ `
      <h1>Hello</h1>
    `
    response.send(html);
    };


module.exports = { get };
