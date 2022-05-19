const model = require("../database/model.js");

function post(request, response) {
    const {id} = request.body;
    model.deletePet(id).then(() => {
        response.redirect("/birthdays"); // Redirect to birthdays when ready to.
    }) 
    
    
}

module.exports = { post }        