/// <reference types="cypress" />

describe('to-do app', () => {
  beforeEach(() => {
    cy.visit('https://todo-eight-tau.vercel.app/')
  });

  it('displays todo form', () => {
    cy.get("#todo-form").should("be.visible");
    cy.get("#todo-form-input").should("be.visible");
    cy.get("#todo-form-button").should("be.visible");
  })
})
