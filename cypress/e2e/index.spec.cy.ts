import type {} from "cypress";

describe("Index", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("loads the page", () => {});

  it("filters by id", () => {
    cy.get("input").type("2");
    cy.get("tr").contains("2").should("be.visible");
    cy.get("tr").contains("3").should("not.exist");
  });

  it("opens the modal", () => {
    cy.get("tr").contains("1").click();
    cy.get('[role="dialog"]').should("contain.text", "1");
  });

  it("should switch to the next page", () => {
    cy.get('[title="Go to next page"]').click();
    cy.get("tr").contains("6").should("be.visible");
    cy.url().should("include", "page=1");
  });
});
