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
  const filterTerm = request.query.type
  let filterType =''
  if(filterTerm & filterTerm != 0) {
    filterType = `pet_type.id = ${filterTerm}`
  } else {
    filterType = "1=1"
  }
  
  
  const htmlHead = /* html */ `
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PET Birthdays</title>
      <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
  `;

  model.selectPet(filterType).then((pets) => {
    const petList = pets.map((pets) => {
      return /* html */ `
        <li class="pet-card">
          <img src="https://source.unsplash.com/random/100x100/?${pets.pet_kind}">
          <div class='pet-info-container'>
            Hiya 
            <p class="name">Name: ${pets.pet_name}</p>
            <p class="kind">Kind: ${pets.pet_kind}</p>
            <p class="birthday">birthday: ${sliceDate(pets.birth_date)}, your age is ${calcAge(pets.birth_date)}</p>
            
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
          <form id="filter-form">
          <label for="filterType">Filter By Type Of Pet:</label>
            <select id="filterType" placeholder="type of pet filter" name="type" aria-label="dropdown menu for filtering by pet types">
              <option aria-label="unfiltered" value="0">Unfiltered</option>
              <option aria-label="cat" value="1">Cat</option>
              <option aria-label="dog" value="2">Dog</option>
              <option aria-label="bird" value="3">Bird</option>
              <option aria-label="rabbit" value="4">Rabbit</option>
            </select>
            <button aria-label="Filter the pets">Filter</button>
          </form>
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
