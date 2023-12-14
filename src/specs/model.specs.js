import { MLOGIN_SUCCESS } from "../data/model.data";
import { modelLogin } from "../pages/lessons/model.page";

describe('Login Test', () => {
    before(()=>{
        cy.visit("https://demoblaze.com/");
    })
    it('login is successful', ()=>{
        let data = MLOGIN_SUCCESS;
        modelLogin.openModel.click({force: true});
        modelLogin.form.should('be.visible');
        modelLogin.inputUsername.type(data.username, {force: true, waiForAnimations: true});
        modelLogin.inputPassword.type(data.password, {force: true, waiForAnimations: true});
        modelLogin.btnLogin.click({force: true});

        modelLogin.welcomeText.should('be.visible');
        modelLogin.welcomeText.should('contain.text', `Welcome ${data.username}`);
    })
});