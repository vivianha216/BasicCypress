import {demoblazePage } from "../pages/demoblaze.page";
import PRODUCT_DATA from "../data/demoblaze.data.json"

describe('SR Home Page', () => {
    it('verify card title', () => {
        cy.visit("https://demoblaze.com/");
        demoblazePage.getAllCardData().then(allItemData => {
            cy.wrap('').then(()=>{
                cy.log(JSON.stringify(allItemData));
                expect(allItemData).to.be.deep.eq(PRODUCT_DATA);
            })
        })
    });
    it.only('verify card title with API',()=>{
        cy.visit("https://demoblaze.com/");
        //get API by using intercept
        cy.intercept('/entries').as('entries');

        //no data
        // cy.get('@entries').then(entries => {
        //     cy.log(JSON.stringify(entries));
        // })
        
        //wait API response data by alias
        cy.wait('@entries');
        cy.get('@entries').then(entries => {
            let apiProductData = entries.response.body.Items;
            apiProductData = apiProductData.map(item => {
                return {
                    itemName: item.title.replace('\n',''),
                    //string literal
                    itemPrice: `$${item.price}`
                }
            })
            // cy.log(JSON.stringify(apiProductData));
            demoblazePage.getAllCardData().then(allItemData => {
                cy.wrap('').then(()=>{
                    cy.log(JSON.stringify(allItemData));
                    expect(allItemData).to.be.deep.eq(apiProductData);
                })
            })
        })
    })
});