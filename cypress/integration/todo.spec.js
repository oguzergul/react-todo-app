/// <reference types="cypress" />

describe('to-do app', () => {
  beforeEach(() => {
    cy.visit('https://todo-eight-tau.vercel.app/')
  });

  it('displays todo form', () => {
    cy.get("#todo-form").should("be.visible");
    cy.get("#todo-form-input").should("be.visible");
    cy.get("#todo-form-button").should("be.visible");
  });

  it("should create new todo",() => {
    cy.fixture("example-todo.json").then(response => {
      cy.get("#todo-form").should("be.visible");
      cy.get("#todo-form-input").should("be.visible").type(response.todo);
      cy.get("#todo-form-button").should("be.visible").click();
    })
  });

  it("should change status of task",() => {
    cy.wait(4000);
    cy.get("#incompleted-icon").should("be.visible").click();
    cy.get("#completed-icon").should("be.visible").click();
  })

  it("should delete recently created todo",() => {
    cy.wait(3000);
    cy.get("#todo-item-delete").click();

  })

})
