describe('Test GET method', () => {
    it('send a GET request', () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'GET'
        }).then(response => {
            /* 
             - API: https://jsonplaceholder.typicode.com/
             - syntax for verification: https://www.chaijs.com/ */
            expect(response.status).to.eq(200);
            expect(response.body.length).to.eq(100);
        })
    });
});