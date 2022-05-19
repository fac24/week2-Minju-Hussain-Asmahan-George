const model = require("../database/model.js");

function get(request, response) {
    const htmlHead = /* html */ `
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PurrThday</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
    `;
    
    const petForm = /* html */ `
    <form id="pet-form" action="/add-pet" method="POST">
      <label for="name">Pet Name:</label>
      <input type="text" id="name" placeholder="name" name="name" aria-label="enter your pet name"><br>
      <label for="type">Type:</label>
      <select id="type" placeholder="type of pet" name="type" aria-label="dropdown menu for pet types">
        <option aria-label="cat" value="1">Cat</option>
        <option aria-label="dog" value="2">Dog</option>
        <option aria-label="bird" value="3">Bird</option>
        <option aria-label="rabbit" value="4">Rabbit</option>
      </select><br>
      <label for="birth">Date of birth:</label>
      <input type="date" id="birth" placeholder="Date of birth" name="birth" aria-label="put birth date of your pet"><br>       
           
      <button type="Submit" value="Submit" aria-label="submit the add pet form">Submit</button>
    </form>
    `;

    const html = /* html */`
    <!doctype html>
    <html lang="en">
      ${htmlHead}
      <body>
        <header>
          <h1>ADD-PET</h1>
        </header>
        ${petForm}
      </body>
    </html>
    `;
    response.send(html);
}

function sanitize(unsafe_body) {
  let safe_body = {};
  for (let [key, value] of Object.entries(unsafe_body)) {
    // THIS IS NOT ENOUGH! Use a proper XSS preventation package
    safe_body[key] = value.replaceAll("<", "&lt;");
  }
  return safe_body;
}

function post(request, response) {
    const {name, type, birth} = sanitize(request.body);
    model.addPet(name,type,birth)
    response.redirect("/birthdays"); // Redirect to birthdays when ready to.
}

module.exports = { get, post }