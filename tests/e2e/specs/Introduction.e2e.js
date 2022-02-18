describe('Introduction', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show the welcome headline', () => {
    cy.get('h2').should('have.text', 'Welcome to GitHub Buddy!')
  })

  it('should render proper route for logo', () => {
    cy.get('[qa-ref="header-logo"]').should('have.attr', 'href', '/')
  })

  it('should show current navigation step', () => {
    cy.get('[qa-ref="navigation-steps"]').should('have.text', '1 / 3')
  })

  it('should show navigation button with "Next" text', () => {
    cy.get('[qa-ref="next-button"]').should('have.text', 'Next')
  })

  it('should show enabled "Next" button', () => {
    cy.get('[qa-ref="next-button"]').should('not.be.disabled')
  })
})
