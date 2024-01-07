import { MLOGIN_SUCCESS } from "../data/login.data";
import { modalLogin } from "../pages/login.page";

describe('Login Test', () => {
    beforeEach(() => {
        //open index page
        cy.visit('/');
        //open login model
        modalLogin.openModel.click({force: true});
    });
    it('login is successful', ()=>{
        let data = MLOGIN_SUCCESS;
        //modelLogin.openModel.click({force: true});
        modalLogin.form.should('be.visible');
        modalLogin.inputUsername.type(data.username, {force: true, waiForAnimations: true});
        modalLogin.inputPassword.type(data.password, {force: true, waiForAnimations: true});
        modalLogin.btnLogin.click({force: true});

        //verify username after login
        modalLogin.welcomeText.should('be.visible');
        modalLogin.welcomeText.should('contain.text', `Welcome ${data.username}`);
    })
    it('login is unsuccessful', ()=>{
        let data = MLOGIN_SUCCESS;
        //modelLogin.openModel.click({force: true});
        modalLogin.form.should('be.visible');
        modalLogin.inputUsername.type(`${data.username}Wrong`, {force: true, waiForAnimations: true});
        modalLogin.inputPassword.type(data.password, {force: true, waiForAnimations: true});
        modalLogin.btnLogin.click({force: true});

        //verify alert on browser
        cy.on('window:alert', alert=>{
            expect(alert).to.contain("User does not exist.")
        })
    })
});