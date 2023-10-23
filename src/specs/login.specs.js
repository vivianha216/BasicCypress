import { Common } from "../pages/common/common";

describe('login', () => {
    it('login is successful', () => {
        //open the login page
        cy.visit("/auth/login");

        //find username by attribute name then input the text
        Common.LoginModule.inputUsername.type("Admin");

        //find password by attribute name then input the text
        Common.LoginModule.inputPassword.type("admin123");

        //find login btn by attribute & tag name then click
        Common.LoginModule.btnLogin.click();

        //verify
        // cy.location('pathname').should('include', '/dashboard/index')
        cy.url().should('include', '/dashboard/index');
        
    });
});