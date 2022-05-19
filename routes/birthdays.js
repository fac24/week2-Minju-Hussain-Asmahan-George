const db = require("../database/connection.js");

function sliceDate(data){
    const dateFormat = String(data).slice(4,11)
    return dateFormat;
}



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
    `
    db.query(selectPets).then((result) => {
        const pets = result.rows;
        console.log(pets)
        const petList = pets.map( pets => {
           return /* html */ `
            <li>
                Hiya ${pets.pet_name}, you are a ${pets.pet_kind}, your birthday is ${sliceDate(pets.birth_date)}
                <form action="/delete-pet" method="POST" class="inline">
                    <button name="id" value="${pets.id}" aria-label="Delete ${pets.pet_name}">
                        &times;
                    </button>
                </form>
            </li>`
        })
        
        const htmlBody = /* html */ `
            <body>
                <main>
                    <ul>${petList.join("")}</ul>
                </main>
            </body>
        `;

        const html = /* html */`
            <!doctype html>
            <html lang="en">
                ${htmlHead}
                ${htmlBody}
            </html>
        `;
        response.send(html);
    })

};

module.exports = { get };