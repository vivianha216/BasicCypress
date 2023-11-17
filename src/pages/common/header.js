class Header{
    get accountName() {
        return cy.get(".page-header .logged-in");
    }
    get btnArrow() {
        return cy.get(".page-header button[data-action=\"customer-menu-toggle\"]");
    }
    get btnSignOut(){
        return cy.get("div[aria-hidden='false'] .authorization-link");
    }
}
export const header = new Header();