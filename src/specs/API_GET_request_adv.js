describe('Test GET method', () => {
    it('send a GET request & verify data', () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'GET'
        }).then(response => {
            //destructure
            let{status, body} = response;
            expect(status).to.eq(200);
            expect(body.length).to.eq(100);

            //get a random element from array object
            let randomIndex = Math.random() * body.length
            let roundedRandomIndex = Math.floor(randomIndex);
            let randomObject = body[roundedRandomIndex];

            //verify
            verifyNotEmpty('userId', randomObject.userId);
            verifyNotEmpty('id',randomObject.id);
            verifyNotEmpty('title',randomObject.title);
            verifyNotEmpty('body',randomObject.body); 
        })
    });
});

let verifyNotEmpty = (name, data) => {
    cy.log(data);
    if(!data){
        expect(true).to.eq(false,`${name} is empty`)
    }
}