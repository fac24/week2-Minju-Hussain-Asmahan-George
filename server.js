const express = require("express");
const home = require("./routes/home.js");
const birthdays = require("./routes/birthdays.js");
const addPet = require("./routes/add-pet.js")


const server = express();

// Using our static files e.g. css, colours, images, etc.
const staticHandler = express.static("public");
server.use(staticHandler);

// Allowing posts to look through the body of whats posted
const bodyHandler = express.urlencoded({ extended: false });

server.use(bodyHandler);

server.get("/", home.get);
server.get("/birthdays", birthdays.get);
server.get("/add-pet", addPet.get);
server.post("/add-pet", bodyHandler, addPet.post);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));