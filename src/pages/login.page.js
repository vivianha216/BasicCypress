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
    get alertError(){
        return cy.get("div[data-bind=\"html: $parent.prepareMessageForHtml(message.text)\"]");
    }
}

export const loginPage = new LoginPage();