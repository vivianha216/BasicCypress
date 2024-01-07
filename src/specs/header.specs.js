import { header } from "../pages/components/header";

describe('Header test', () => {

    const BRAND_TEXT = 'PRODUCT STORE';

    beforeEach(() => {
        //open index page
        cy.visit('/');
    });

    it('Test for brand', () => {
        header.brandLogoImg().should('be.visible');
        header.brandLogo().should('contain.text', BRAND_TEXT);
    });

    it('Test for header menu', () => {
        header.headerMenuItemList().each(item => {
            cy.wrap(item).should('not.be.empty');
        })
    });
});