describe('Form Two', () => {
  beforeEach(() => {
    cy.visit('/3')
  })

  it('should show the user information headline', () => {
    cy.contains('h2', 'Last Step')
  })

  it('should show navigation button with "Back" text', () => {
    cy.get('[qa-ref="back-button"]').should('have.text', 'Back')
  })

  it('should show current navigation step', () => {
    cy.get('[qa-ref="navigation-steps"]').should('have.text', '3 / 3')
  })

  it('should show navigation button with "Finish" text', () => {
    cy.get('[qa-ref="next-button"]').should('have.text', 'Finish')
  })

  it('should show disabled "Finish" button', () => {
    cy.get('[qa-ref="next-button"]').should('be.disabled')
  })

  it('should show enabled "Finish" button when form is filled', () => {
    cy.get('[qa-ref="form-two-email"]').type('email@test.com')
    cy.get('[qa-ref="form-two-agree-to-terms"]').click()
    cy.get('[qa-ref="next-button"]').should('not.be.disabled')
  })

  it('should show error for required email', () => {
    cy.get('[qa-ref="form-two-email"]').focus()
    cy.get('[qa-ref="form-two-agree-to-terms"]').focus()
    cy.get('[qa-ref="form-two-email-error"]').should('have.text', 'Email is a required field')
  })

  it('should show error for invalid email', () => {
    cy.get('[qa-ref="form-two-email"]').type('wrong-email@test')
    cy.get('[qa-ref="form-two-agree-to-terms"]').focus()
    cy.get('[qa-ref="form-two-email-error"]').should('have.text', 'Please provide a valid email')
  })

  it('should show error for required agree with terms and services', () => {
    cy.get('[qa-ref="form-two-agree-to-terms"]').click().click()
    cy.get('[qa-ref="form-two-email"]').focus()
    cy.get('[qa-ref="form-two-agree-to-terms-error"]').should('have.text', 'You must agree with terms and services')
  })
})