// cypress/integration/app.spec.js

describe('Sanity', () => {
  it('should have a title header', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('header>h1')
  })
})

const asModule = {}
export default asModule
