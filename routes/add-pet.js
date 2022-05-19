const model = require("../database/model.js");

function get(request, response) {
  try {
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
    <form class="pet-form" id="pet-form" action="/add-pet" method="POST">
    <div>
      <label for="name">Pet Name:</label>
      <input type="text" id="name" placeholder="name" name="name" aria-label="enter your pet name">
      </div>
      <br>

    <div>
      <label for="type">Type:</label>
      <select id="type" placeholder="type of pet" name="type" aria-label="dropdown menu for pet types">
        <option aria-label="cat" value="1">Cat</option>
        <option aria-label="dog" value="2">Dog</option>
        <option aria-label="bird" value="3">Bird</option>
        <option aria-label="rabbit" value="4">Rabbit</option>
      </select>
      </div>
      
      <br>
      <div>

      <label for="birth">Date of birth:</label>
      <input type="date" id="birth" placeholder="Date of birth" name="birth" aria-label="put birth date of your pet">
      </div>
      
      <br>       
           
      <button class="link-as-button submit-button" type="Submit" value="Submit" aria-label="submit the add pet form">Submit</button>
    </form>
    `;

  const html = /* html */ `
    <!doctype html>
    <html lang="en">
      ${htmlHead}
      <body>
      
        <header class="center">
        <h1 class="mb-5">ADD-PET</h1>
        <p class="mb-5">add your pet to our PurrThday</p>
        <a class="link-as-button" href="/">back home</a>
        <a class="link-as-button" href="/birthdays">view birhtdays</a>
    </header>
        <main>
        ${petForm}
        </main>

      </body>
    </html>
    `;
      response.send(html);
    }
    catch (error){
      console.error(error);
      response.status(404).send('<h1>Error handling</h1>');
    }
}

function post(request, response) {
  try{

    const {name, type, birth} = request.body;
    model.addPet(name,type,birth)
  }
  catch(error){
        console.error(error)
        response.status(404).send('<h1>Error handling</h1>')
    }
  response.redirect("/birthdays"); // Redirect to birthdays when ready to.
}

module.exports = { get, post };
