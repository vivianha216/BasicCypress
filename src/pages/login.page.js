class LoginPage{
    get inputUsername(){
        return cy.get("[name='username']");
    }
    get inputPassword(){
        return cy.get("[name='password']");
    }
    get btnLogin(){
        return cy.get("button[type='submit']");
    }
}

export const loginPage = new LoginPage();