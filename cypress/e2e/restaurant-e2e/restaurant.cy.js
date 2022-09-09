describe("Load webpage", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("displays the title 'Welcome to our tantalising Thai takeout !'", () => {
		cy.get("h1").should(
			"have.text",
			"Welcome to our tantalising Thai takeout !"
		);
	});

	it("can click onto the menu page, add 2 things to the basket and view modals, it can then visit the basket, navigate away from the page and back with the data persisting", () => {
		cy.contains("Menu").click();

		cy.get(":nth-child(1) > .css-1zb9ui").click();

		cy.get(":nth-child(2) > .css-1qjb353").click();

		cy.get(".chakra-modal__footer > .css-1zb9ui").click();

		cy.get(".chakra-modal__footer > .css-1qjb353").click();

		cy.get('[href="/basket"]').click();

		cy.get('[href="/"]').click();

		cy.get('[href="/basket"]').click();
	});


});

