class JacketPage{
    get productItem(){
        return cy.get(".product-item-info");
    }
    get productName(){
        return cy.get(".product-item-link");
    }
    get productPrice(){
        return cy.get("");
    }

    _getDetails(){
        let itemData = {};
        this.productName.then($name => itemData.itemName = $name.text().trim());
        // this.productPrice.then($price => itemData.itemPrice = $price.text().trim());
        return new Cypress.Promise(resolve => resolve(itemData));
    }

    getAllData(){
        let allItemData = [];
        this.productItem.each($item => {
            cy.wrap($item).within(()=>{
                this._getDetails().then(itemData => allItemData.push(itemData));
            })
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(()=> resolve(allItemData));
        })
    }
}

export const jacketPage = new JacketPage();