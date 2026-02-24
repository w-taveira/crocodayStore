describe("search products", () => {
  it("should be able to search for a products", () => {
    cy.searchByQuery("manga")

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=manga");

    cy.get('a[href^="/product"]').should("exist");
  });

  it("should not be able to visit search page without a search query", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.visit("/search");

    cy.location("pathname").should("equal", "/");
  });
});
