import { HomeAPI } from "../intercept/homeAPI";
import { homePage } from "../pages/home.page";
describe('Filter category', () => {
    beforeEach(() => {
        //open index page
        cy.visit('/');
        HomeAPI.waitForPageLoaded();
    });

    // for(let i=0; i<20;i++){
        
    // }
    // it('filter phone', () => {
    //     cy.intercept('/bycat').as('cats');
    //     cy.get(`[onclick="byCat('phone')"]`).click({force:true});
    //     //wait data is response            
    //     cy.wait('@cats');
        
    //     cy.request({
    //         url: 'https://api.demoblaze.com/bycat',
    //         method: 'POST',
    //         body: {
    //             cat: "phone"
    //         }
    //     }).then((res) =>{
    //         // cy.log(JSON.stringify(res));
    //         if(res.status==200){
    //             let apiProductData = res.body.Items;
    //             apiProductData = apiProductData.map(item => {
    //                 return {
    //                     itemName: item.title.replace('\n',''),
    //                     itemPrice: `$${item.price}`
    //                 }
    //             })
    //             // cy.log(JSON.stringify(apiProductData));
    //             homePage.getAllCardData().then(allItemData => {
    //                 cy.wrap('').then(()=>{
    //                     // cy.log(JSON.stringify(allItemData));
    //                     expect(allItemData).to.be.deep.eq(apiProductData);
    //                 })
    //             })
    //         }
            
    //     })
    // });
    //rút gọn
    function verifyCategoryFilterBy(productName){
        cy.intercept('/bycat').as('cats');
        cy.get(`[onclick="byCat('${productName}')"]`).click({force:true});
        //wait data is response            
        cy.wait('@cats');
        
        cy.request({
            url: 'https://api.demoblaze.com/bycat',
            method: 'POST',
            body: {
                cat: `${productName}`
            }
        }).then((res) =>{
            // cy.log(JSON.stringify(res));
            if(res.status==200){
                let apiProductData = res.body.Items;
                apiProductData = apiProductData.map(item => {
                    return {
                        itemName: item.title.replace('\n',''),
                        itemPrice: `$${item.price}`
                    }
                })
                // cy.log(JSON.stringify(apiProductData));
                homePage.getAllCardData().then(allItemData => {
                    cy.wrap('').then(()=>{
                        // cy.log(JSON.stringify(allItemData));
                        expect(allItemData).to.be.deep.eq(apiProductData);
                    })
                })
            }
            
        })
    }

    const PRODUCTLIST = ["phone", "notebook", "monitor"];
    PRODUCTLIST.forEach(product =>{
        it(`filter ${product} `,()=>{
            verifyCategoryFilterBy(product);
        });
    })
});