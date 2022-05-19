const db = require("./connection.js");

function deletePet(id) {
    const deletePet = /* sql */ `DELETE FROM pets WHERE id = ${id}`
    return db.query(deletePet)
}

//add-pets
function addPet(name, type, birth) {
    const addPet = /* sql */ `INSERT INTO pets (pet_name, type_id, birth_date) VALUES ($1, $2, $3)`
    return db.query(addPet, [name, type, birth])
}

//birthdays
function birthdays() {
    const birthdays = `SELECT FROM pets VALUES (pets.birth_date)`
    return db.query(birthdays)
}

function selectPet() {
    const selectPets = /* sql */ `
    SELECT pets.id, pets.pet_name, pets.birth_date, pet_type.pet_kind
    FROM pets
        INNER JOIN pet_type ON pets.type_id = pet_type.id;
    `;
    return db.query(selectPets).then((result) => result.rows)
}

module.exports = { deletePet, addPet, birthdays, selectPet }
