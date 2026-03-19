import { User } from "../../../src/models";

describe("Accessibility", function () {
  beforeEach(function () {
    cy.task("db:seed");

    cy.intercept("GET", "/notifications").as("notifications");
    cy.intercept("GET", "/transactions/public*").as("publicTransactions");

    cy.database("find", "users").then((user: User) => {
      cy.loginByXstate(user.username);
    });
  });

  it("sign-in page has no critical accessibility violations", function () {
    cy.logoutByXstate();
    cy.visit("/signin");
    cy.injectAxe();
    cy.checkA11y();
  });

  it("transaction feed has no critical accessibility violations", function () {
    cy.wait("@notifications");
    cy.wait("@publicTransactions");
    cy.injectAxe();
    cy.checkA11y(undefined, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa"],
      },
    });
  });
});
