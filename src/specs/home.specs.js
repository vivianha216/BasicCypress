import { homePage } from "../pages/home.page";
import PRODUCT_DATA from "../data/home.data.json"
import { HomeAPI } from "../intercept/homeAPI";

describe('Home Page', () => {
    beforeEach(() => {
        //open index page
        cy.visit('/');
    });
    it('verify card title', () => {
        homePage.getAllCardData().then(allItemData => {
            cy.wrap('').then(()=>{
                cy.log(JSON.stringify(allItemData));
                expect(allItemData).to.be.deep.eq(PRODUCT_DATA);
            })
        })
    });
    it('verify card with API',()=>{
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
            homePage.getAllCardData().then(allItemData => {
                cy.wrap('').then(()=>{
                    cy.log(JSON.stringify(allItemData));
                    expect(allItemData).to.be.deep.eq(apiProductData);
                })
            })
        })
    })
    it.only('verify card with API (shortcut)',()=>{        
        HomeAPI.getProductAPI().then(entries => {
            let apiProductData = entries.response.body.Items;
            apiProductData = apiProductData.map(item => {
                return {
                    itemName: item.title.replace('\n',''),
                    itemPrice: `$${item.price}`
                }
            })
            homePage.getAllCardData().then(allItemData => {
                cy.wrap('').then(()=>{
                    cy.log(JSON.stringify(allItemData));
                    expect(allItemData).to.be.deep.eq(apiProductData);
                })
            })
        })
    })
});