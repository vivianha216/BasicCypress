//Learn about Cypress.Promise
class HomePage{
    get cardItem(){
        return cy.get('.card');
    }
    get productTitle(){
        return cy.get('h4');
    }
    get productPrice(){
        return cy.get('h5');
    }
    _getCardDetails(){
        let itemData = {};
        this.productTitle.then($title => itemData.itemName = $title.text().trim());
        this.productPrice.then($price => itemData.itemPrice = $price.text().trim());
        return new Cypress.Promise(resolve => resolve(itemData));
    }
    getAllCardData(){
        let allItemData = [];
        this.cardItem.each($item => {
            cy.wrap($item).within(()=>{
                this._getCardDetails().then(itemData => allItemData.push(itemData));
            })
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(()=> resolve(allItemData));
        })
    }
}
export const homePage = new HomePage();