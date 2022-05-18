const db = require("../database/connection.js");

function get(request, response) {
    const htmlHead = /* html */ `
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PET Birthdays</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
    `;
    
    const petForm = /* html */ `
    <form action="/add-pet" method="POST">
      <label for="name">Pet Name:</label>
      <input type="text" id="name" placeholder="name" name="name"><br>
      <label for="type">Type:</label>
      <select id="type" placeholder="type of pet" name="type">
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="bird">Bird</option>
        <option value="rabbit">Rabbit</option>
      </select><br>
      <label for="birth">Date of birth:</label>
      <input type="date" id="birth" placeholder="Date of birth" name="birth"><br>       
      <label for="location">Location:</label>
      <input type="text" id="location" placeholder="location" name="location"><br>  
           
      <button type="Submit" value="Submit" class="submit">Submit</button>
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

function post(request, response) {
    const {name, type, birth, location} = request.body;
    db.query(`INSERT INTO pets (pet_name, type_id, birth_date) VALUES($1, $2, $3, $4)`, [name, 1, '2000-01-01']) 
    
    response.redirect("/add-pet"); // Redirect to birthdays when ready to.
}

module.exports = { get, post }