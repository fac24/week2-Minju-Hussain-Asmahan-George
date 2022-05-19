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

      <title>APP NAME</title>
  </head>
  <body>
      <header>
          <h1>APP NAME</h1>
          <p>birhtday calender</p>
      </header>
      <main>
          <h2>upcoming birthdays</h2>
          <ul>
              <li>
              tom - cat - turning 4 - finsbury park
              date 24/05/2022
              time: 16:30 - 18:00
              </li>
          </ul>
  
          <a href="/add-pet" class="add-pet-link">add-pet</a>
          <a href="/birthdays" class="birthday-link">view birthdays</a>
      </main>
      
  </body>
  </html>
    `;
  response.send(html);
}

module.exports = { get };
