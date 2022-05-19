const model = require("../database/model.js");

function sliceDate(data){
    const dateFormat = String(data).slice(4,11)
    return dateFormat;
}

function calcAge(data){
    const birthDate = new Date(data)
    const today = Date.now()
    const month_diff = today - birthDate.getTime();
    const age_diff = new Date(month_diff)

    const year = age_diff.getUTCFullYear()
    const month = age_diff.getUTCMonth()

    const yearOld = Math.abs(year-1970);
    const monthOld = Math.abs(month)

    return `${yearOld} year(s) ${monthOld} month(s) old`
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

    model.selectPet().then((pets) => {

        const petList = pets.map( pets => {
           return /* html */ `
            <li>
                Hiya ${pets.pet_name}, you are a ${pets.pet_kind}, your birthday is ${sliceDate(pets.birth_date)}, your age is ${calcAge(pets.birth_date)}
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