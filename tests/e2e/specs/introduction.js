describe('Introduction', () => {
  it('should visit the app root url', () => {
    cy.visit('/')
    cy.contains('h2', 'Welcome to GitHub Buddy!')
  })

  it('should show button Next', () => {
    cy.contains('button', 'Next')
  })
})
