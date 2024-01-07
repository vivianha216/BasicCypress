export class HomeAPI{
    static getProductAPI(){
        cy.intercept('/entries').as('entries');
        cy.wait('@entries');
        return cy.get('@entries');
    }
}