import {sRHomePage } from "../pages/simply.page";

describe('SR Home Page', () => {
    it('verify card title', () => {
        cy.visit("https://www.simplyrecipes.com/");
        sRHomePage.getHeroCompTitle().then(title => {
            cy.wrap('').then(()=>{
                cy.log(title);
                expect(title).to.be.eq("Our Most Popular Holiday Cookies of All Time");
            })
        })
    });
});