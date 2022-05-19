//const db = require("../database/connection.js");

function get(request, response) {
  const html = /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

      <title>PurrThday</title>
  </head>
  <body class="landing-body">
      <header>
          <h1>PurrThday</h1>
          <p>the birhtday calender app</p>
      </header>
      <main class="landing-main">
          <h2>upcoming birthdays</h2>
          <ul>
              <li class="pet-card">
              <img src="https://source.unsplash.com/random/100x100/?cat">
  
              <div class='pet-info-container'>
              Hiya 
              <p class="name">Name: tom</p>
              <p class="kind">Kind: cat</p>
              <p class="time">meet up on 24/05 between 16:30-18:00 at finsbury park by the pond</p>
              </div>
                  <form class="delete-button" action="/delete-pet" method="POST" class="inline">
                  <button >
                      &times;
                  </button>
              </form>
              </li>
          </ul>
  

          <a class="link-as-button" id="add-link" href="/add-pet">add-pet</a>
          <a class="link-as-button" id="birthday-link" href="/birthdays">view birthdays</a>
      </main>
      
  </body>
  </html>
    `;
  response.send(html);
}

module.exports = { get };
