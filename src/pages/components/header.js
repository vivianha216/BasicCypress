class Header{
    brandLogo = () => cy.get("#nava");
    brandLogoImg = () => cy.get("#nava img");
    headerMenuItemList = () => cy.get(".nav-item");
}

export const header = new Header();