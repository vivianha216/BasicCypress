import { Common } from "../pages/common/common";
import * as LoginData from "../data/login.data"

describe('login', () => {
    it('login is successful', () => {
        //open the login page
            cy.visit("customer/account/login/");
        //get data
            let loginSuccess = LoginData.LOGIN_SUCCESS;

        //find username by ID then input the text
            Common.LoginModule.inputUsername.type(loginSuccess.email);

        //find password by attribute name then input the text
            Common.LoginModule.inputPassword.type(loginSuccess.password);

        //find login btn by attribute & tag name then click
            Common.LoginModule.btnLogin.click();

        //verify path that /login is not exist
            // cy.location('pathname').should('not.include', '/login')
            cy.url().should('not.include', '/login');

        //verify account name
            Common.HeaderModule.accountName.should('contain.text', `Welcome, ${loginSuccess.accountName}!`);
            Common.HeaderModule.btnArrow.click();
            Common.HeaderModule.btnSignOut.click();
            
    });
});