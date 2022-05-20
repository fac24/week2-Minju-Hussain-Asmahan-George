//const db = require("../database/connection.js");

function errorPost(){
  const error = new Error("Retrieving posts failed");
  return Promise.reject(error);
}

function get(request, response) {
// errorPost().then(()=>{
  try{
    const html = /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PurrThday home page">
    <link rel="stylesheet" href="style.css">
    
    <title>PurrThday</title>
    </head>
    <body class="landing-body">
    <header>
    <h1 class="mb-2">PurrThday</h1>
    <p>the birhtday calender app</p>
    </header>
    <main class="landing-main">
    <h2>upcoming PurrThday</h2>
    <ul>
    <li class="pet-card ml-0">
    <img src="https://source.unsplash.com/random/100x100/?cat" alt="its a cat">
    
    <div class='pet-info-container'>
    Hiya 
    <p class="name">Name: tom</p>
    <p class="kind">Kind: cat</p>
    <p class="time">meet up on 24/05 between 16:30-18:00 at finsbury park by the pond</p>
    </div>
    
    </li>
    </u
    <a class="link-as-button" id="add-link" href="/add-pet">add-pet</a>
    <a class="link-as-button" id="birthday-link" href="/birthdays">view birthdays</a>
    </main>
    
    </body>
    </html>
    `;
      response.send(html)
    }
    catch (error){
      console.error(error);
      response.status(500).send(`<h1>something went wrong <a href="/">Go back to home page</a></h1>`);
    }
  }



module.exports = { get };
