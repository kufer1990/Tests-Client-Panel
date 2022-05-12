/// <reference types="cypress" />
let username = "jakub.ferdek@gmail.com";
let password = "Ut3pa8c2@"

describe('login Client Panel', () => {
    it('login account', () => {
        cy.visit('/auth/login')
        cy.get('input[name=username]').type(username);
        cy.get('input[name=password]').type(password);
        cy.get('button[type=submit]').click();
        // cy.wait(2000)
        // cy.get('a[href="/new-order/create"]').click();
    })



})
