describe("add product to cart", () => {
  it("should be able to navigate to the product page and it to the cart", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
    cy.location("pathname").should("include", "/product");

    cy.contains("adicionar ao carrinho", { matchCase: false }).click();

    cy.contains("Cart (1)").should("exist");
  });
  it("should not count duplicated products on cart", () => {
    cy.visit("http://localhost:3000");

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
    cy.location("pathname").should("include", "/product");

    cy.contains("adicionar ao carrinho", { matchCase: false }).click();
    cy.contains("adicionar ao carrinho", { matchCase: false }).click();

    cy.contains("Cart (1)").should("exist");
  });
  it("should be able to search for a product and add it to the cart", () => {
    cy.searchByQuery("moletom");

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
    cy.location("pathname").should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();

    cy.contains("Cart (1)").should("exist");
  });
});
