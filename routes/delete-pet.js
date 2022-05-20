const model = require("../database/model.js");

function post(request, response) {
    const {id} = request.body;
    model.deletePet(id).then(() => {
        response.redirect("/birthdays"); // Redirect to birthdays when ready to.
    }).catch((error)=>{
        console.error(error);
        response.status(500).send(`<h1>something went wrong <a href="/">Go back to home page</></h1>`)
    })

}

module.exports = { post }        