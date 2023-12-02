import { Common } from "../pages/common/common";
import * as LoginData from "../data/login.data"
import { jacketPage } from "../pages/women/tops/jackets.page";
import JACKET_DATA from "../data/jacket.data.json"

//xem demo demoblaze

describe('Jacket Page', () => {
    before(() => {
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
            cy.wait(1000);

    });
    it('compare data list',()=>{
        //open women/tops/jackets
            Common.MenuHeader.jacketMenu;
        //compare data
            jacketPage.getAllData().then(allItemData =>{
                cy.wrap('').then(()=>{
                    cy.log(JSON.stringify(allItemData));
                    expect(allItemData).to.be.deep.eq(JACKET_DATA);
                })
            })
    });
});