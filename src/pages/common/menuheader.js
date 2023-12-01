class MenuHeader{
    get jacketMenu(){
        cy.visit("women/tops-women/jackets-women.html");
    }
}

export const menuHeader = new MenuHeader();