class LoginPage{
    get username(){
        return cy.get("#username");
    }
    get password(){
        return cy.get("#password");
    }
}

export const loginPage = new LoginPage();