import { DEFAULT } from "../utils/Method";

describe('Test DELETE method', () => {
    it('send a DELETE request', () => {
        cy.request({
            method: DEFAULT.delete,
            url: "https://jsonplaceholder.typicode.com/posts/1"
        }).then(res => {
            expect(res.status).to.eq(200, 'Verifying response header')
        })
    });
});