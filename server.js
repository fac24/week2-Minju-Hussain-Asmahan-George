const express = require("express");
const home = require("./routes/home.js");
const birthdays = require("./routes/birthdays.js");
const addPet = require("./routes/add-pet.js");
const deletePet = require("./routes/delete-pet.js");
const { response } = require("express");

const server = express();

// Using our static files e.g. css, colours, images, etc.
const staticHandler = express.static("public");
server.use(staticHandler);

// Allowing posts to look through the body of whats posted
const bodyHandler = express.urlencoded({ extended: false });

server.use(express.static("public"));

server.use(bodyHandler);


server.get("/", home.get);
server.get("/birthdays", birthdays.get);
server.get("/add-pet", addPet.get);
server.post("/add-pet", bodyHandler, addPet.post);
server.post("/delete-pet", bodyHandler, deletePet.post);

const PORT = process.env.PORT || 3000;

process.on("unhandledRejection", (error) => {
    console.log('////////////////////')
    console.error(error);
    process.exit(1);
  });

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
