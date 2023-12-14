//Learn about Cypress.Promise
class SRHomePage{
    getHeroCompTitle(){
        let title='';
        cy.get('.showcase__hero .card__title').then($title => {
            title = $title.text().trim();
        })
        return new Cypress.Promise(resolve => cy.wrap('').then(()=> resolve(title)));
    }
}
export const sRHomePage = new SRHomePage();