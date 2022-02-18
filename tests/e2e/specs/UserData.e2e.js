describe('User Data', () => {
  beforeEach(() => {
    cy.visit('/user')
  })

  it('should not show GitHub data when no username is given', () => {
    cy.get('[qa-ref="not-found-username"]').should('exist')
  })

  it('should show GitHub data when an existing username is given', () => {
    cy.completeRegistration()
    cy.get('[qa-ref="not-found-username"]').should('not.exist')
  })

  it('should show the welcome headline with the first name', () => {
    cy.completeRegistration()
    cy.get('h2').should('have.text', 'Hello Kevin!')
  })

  it('should render proper route for Take Me Home link', () => {
    cy.get('[qa-ref="take-me-home"]').should('have.attr', 'href', '/')
  })
})
