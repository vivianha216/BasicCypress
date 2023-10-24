class LoginPage{
    get inputUsername(){
        return cy.get("#email");
    }
    get inputPassword(){
        return cy.get("[name=\"login[password]\"]");
    }
    get btnLogin(){
        return cy.get("button[class='action login primary']");
    }
}

export const loginPage = new LoginPage();