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

  const selectPets = /* sql */ `
        SELECT pets.id, pets.pet_name, pets.birth_date, pet_type.pet_kind
        FROM pets
            INNER JOIN pet_type ON pets.type_id = pet_type.id;
    `;
  db.query(selectPets).then((result) => {
    const pets = result.rows;
    const petList = pets.map((pets) => {
      return /* html */ `
            <li class="pet-card">
            <img src="https://source.unsplash.com/random/100x100/?${pets.pet_kind}">
            <div class='pet-info-container'>
            Hiya 
            <p class="name">Name: ${pets.pet_name}</p>
            <p class="kind">Kind: ${pets.pet_kind}</p>
            <p class="birthday">birthday: ${pets.birth_date}</p>
            
            </div>
                <form class="delete-button" action="/delete-pet" method="POST" class="inline">
                <button name="id" value="${pets.id}" aria-label="Delete ${pets.pet_name}">
                    &times;
                </button>
            </form>
            </li>`;
    });

    const htmlBody = /* html */ `
            <body>
            <header class="center">
          <h1 class="mb-5">PurrThday Page</h1>
          <a class="link-as-button" href="/">back home</a>
          <a class="link-as-button" href="/add-pet">add-pet</a>

         
      </header>
                <main>
                    <ul class="birthday-car-contianer">${petList.join("")}</ul>


                </main>

            </body>
        `;

    const html = /* html */ `
            <!doctype html>
            <html lang="en">
                ${htmlHead}
                ${htmlBody}
            </html>
        `;
    response.send(html);
  });
}

module.exports = { get };
