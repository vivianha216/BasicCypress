class MenuHeader{
    get womenTab(){
        return cy.get("//span[text()='Women']");
    }
    get topMenu(){

    }
    get jacketMenu(){
        
    }
}

export const menuHeader = new MenuHeader();