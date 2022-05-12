import 'loginAccount.js';
let typeSubscription = "Subskrypcja";
let typeOnePaymentOred = 'Płatność jednorazowa';
let optionLoginAccount = false; // true or false
let choiceDish = 'Pęczotto pod kremową pierzynką z białych warzyw';




describe('create new order',()=>{

    it.only('new order', () => {
        cy.visit('/new-order/create');
        cy.get('div').contains(typeOnePaymentOred).click(); // typeOnePaymentOred or  typeSubscription
        cy.get('button[data-cy=basket-action__button--next]').click();
        cy.get('button[data-cy=basket-action__button--next]').click();
        cy.get('button[data-cy=basket-action__button--next]').click();
        cy.get('[data-cy="tab-auth--login"]').click();
        //login on account 
        cy.get('input[name=username]').type(username);
        cy.get('input[name=password]').type(password);
        cy.get('button[type=submit]').click();
        cy.wait(3000);
        cy.get('button[data-cy=basket-action__button--next]').click();

//payment ptk ze skarbonki
cy.contains('Wykorzystaj punkty ze skarbonki').click();
cy.get('[data-cy="piggy-bank-form__submit"]').click();
cy.get('[data-cy="order-pay"]').click();

        //payment pay u - blik
        // cy.get('[data-cy="payment-type payment-type--payu"]').click();
        // cy.get('[data-cy="order-pay"]').click();
        // cy.get('[title="BLIK"]').click();
        // cy.wait(1000)
        // cy.get('#formSubmit').click();
        // cy.get('#btnLogout').click();

    })
})