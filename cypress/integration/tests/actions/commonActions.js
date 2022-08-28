export class CommonActions{
    accessWebSite = () => {
        cy.visit('/', {timeout: 10000});
        cy.request('/').then((response) => {
            expect(response.status).equal(200)
        })
        cy.viewport('macbook-13')
    }   
}