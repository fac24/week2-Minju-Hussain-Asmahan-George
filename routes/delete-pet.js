const db = require("../database/connection.js");

function post(request, response) {
    const {id} = request.body;
    const deletePet = /* sql */ `DELETE FROM pets WHERE id = ${id}`
    db.query(deletePet).then(() => {
        response.redirect("/birthdays"); // Redirect to birthdays when ready to.
    }) 
    
    
}

module.exports = { post }        