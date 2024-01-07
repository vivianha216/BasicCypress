export class HomeAPI{
    static getProductAPI(){
        cy.intercept('/entries').as('entries');
        cy.wait('@entries');
        return cy.get('@entries');
    }
    static waitForPageLoaded(){
        this._waitForRequest();
    }
    static _waitForRequest(){
        cy.intercept('/entries').as('entries');
        cy.wait('@entries');
    }
}