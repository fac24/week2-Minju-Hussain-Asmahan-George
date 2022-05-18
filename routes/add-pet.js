//const db = require("../database/connection.js");

function get(request, response) {
    const html = /* html */
    `<h1>add page</h1>`;
    response.send(html);
}

function post(request, response) {
    response.redirect("/");
}

module.exports = { get, post }