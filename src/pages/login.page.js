class ModalLogin{
    get openModel(){
        return cy.get("#login2");
    }
    get form(){
        return cy.get("#logInModal .modal-body form")
    }
    get inputUsername(){
        return cy.get("#loginusername");
    }
    get inputPassword(){
        return cy.get("#loginpassword");
    }
    get btnLogin(){
        return cy.get("[onclick='logIn()']");
    }

    get welcomeText(){
        return cy.get("#nameofuser");
    }
}

export const modalLogin = new ModalLogin();