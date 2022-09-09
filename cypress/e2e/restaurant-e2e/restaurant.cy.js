describe("Load webpage", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});


	it("can click onto the menu page, add 2 things to the basket and view modals, it can then visit the basket, navigate away from the page and back with the data persisting", () => {
		cy.contains("Menu").click();

		cy.get(":nth-child(2) > .modal-button").click();

		cy.get(".chakra-modal__footer > .css-1zb9ui").click();

		cy.get(".css-1qjb353").click();

		cy.get(":nth-child(5) > .css-1zb9ui").click();


		cy.get('[href="/basket"]').click();

		cy.get('[href="/"]').click();

		cy.get('[href="/basket"]').click();
	});
});
