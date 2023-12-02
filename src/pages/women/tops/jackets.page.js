require('cypress-xpath');
class JacketPage{
    get contentRight(){
        return cy.xpath("//div[@class='column main']");
    }
    get productItem(){
        return cy.get(".product-item-info");
    }
    get productName(){
        return cy.get(".product-item-link");
    }
    get productPrice(){
        // return cy.xpath("//span[@class='normal-price']//span[@class='price']");
        return cy.get(".price-box .price")
    }

    _getDetails(){
        let itemData = {};
        this.productName.then($name => itemData.itemName = $name.text().trim());
        this.productPrice.then($price => itemData.itemPrice = $price.text().trim());
        return new Cypress.Promise(resolve => resolve(itemData));
    }

    getAllData(){
        let allItemData = [];
        this.contentRight.within(()=>{
            cy.wrap('').then(()=>{
                this.productItem.each($item => {
                    cy.wrap($item).within(()=>{
                        this._getDetails().then(itemData => allItemData.push(itemData));
                    })
                })
            })
        })        
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(()=> resolve(allItemData));
        })
    }

    // getAllData(){
    //     let allItemData = [];
    //     this.productItem.each($item => {
    //         cy.wrap($item).within(()=>{
    //             this._getDetails().then(itemData => allItemData.push(itemData));
    //         })
    //     })
    //     return new Cypress.Promise(resolve => {
    //         cy.wrap('').then(()=> resolve(allItemData));
    //     })
    // }
}

export const jacketPage = new JacketPage();