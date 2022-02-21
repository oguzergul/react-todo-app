/// <reference types="cypress" />

describe('to-do app home-page', () => {
    beforeEach(() => {
        cy.visit('https://todo-eight-tau.vercel.app/')
    });

    it('displays hero section', () => {
        cy.fixture("hero-content").then(response => {
            cy.get("#hero-title").should("be.visible").should("have.text",response.title);
            cy.get("#hero-subtitle").should("be.visible").should("have.text",response.subtitle);
        })
    });

})
