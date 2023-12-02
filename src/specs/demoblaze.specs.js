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
});