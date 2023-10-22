import { Common } from "../pages/common/common";

describe('login is successful', () => {
    it('login is successful', () => {
        //open the login page
        cy.visit("/login");

        //find username by ID then input the text
        Common.LoginModule.username.type("ABC");
        cy.wait(3000);
    });
});