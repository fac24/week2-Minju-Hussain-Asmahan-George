const { idleTimeoutMillis } = require("pg/lib/defaults");

beforeEach(() => {
    cy.task("resetDb");
});

describe("Home Page tests", () => {
    it("Can see the next pets birthday", () => {
        cy.visit("/");

    });
    it("Add pet link works", () => {
        cy.visit("/").get(".add-pet-link").click();
        cy.url().should('include', '/add-pet')
    });
    it("Birthdays link works", () => {
        cy.visit("/").get(".birthday-link").click();
        cy.url().should('include', '/birthdays')
    });
     
})


describe("Add Page tests", () => {
    it("Adding a pet works", () => {
        cy.visit("/add-pet");
        cy.get("#pet-form").find("input[name='name']").type("TestPet")
        cy.get("#pet-form").find("select[name='type']").select("1")
        cy.get("#pet-form").find("input[name='birth']").type('2022-01-01')
        cy.get("#pet-form").submit();
        cy.contains("TestPet")
    });
})


describe("Birthday Page tests", () => {
    it("Can see all the pets and their birthdays", () => {
        cy.visit("/birthdays").contains("Pumpkin");
    });
    it("Delete button works", () => {
        cy.visit("/birthdays");
        // Getting the second delete button on the page
        cy.get("button").eq(1).click();
        cy.contains("Dug").should("not.exist");
    });
     
})

/* 
it("", () => {
        
})  */
