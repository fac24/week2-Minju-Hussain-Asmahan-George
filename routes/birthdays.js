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
        SELECT pets.pet_name, pets.birth_date, pet_type.pet_kind
        FROM pets
            INNER JOIN pet_type ON pets.type_id = pet_type.id;
    `
    db.query(selectPets).then((result) => {
        const names = result.rows;
        const nameList = names.map( name => {
           return /* html */ `
            <li>
                Hiya ${name.pet_name}, you are a ${name.pet_kind}, your birthday is ${name.birth_date}
            </li>`
        })
        
        const htmlBody = /* html */ `
            <body>
                <main>
                    <ul>${nameList.join("")}</ul>
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