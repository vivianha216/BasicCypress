import { Common } from "../pages/common/common";

describe('login', () => {
    it('login is successful', () => {
        //open the login page
        cy.visit("customer/account/login/");

        //find username by attribute name then input the text
        Common.LoginModule.inputUsername.type("hacecilia2023@gmail.com");

        //find password by attribute name then input the text
        Common.LoginModule.inputPassword.type("A123456!");

        //find login btn by attribute & tag name then click
        Common.LoginModule.btnLogin.click();

        //verify path that /login is not exist
        // cy.location('pathname').should('not.include', '/login')
        cy.url().should('not.include', '/login');
        
    });
});