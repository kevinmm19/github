describe('Form One', () => {
  beforeEach(() => {
    cy.visit('/2')
  })

  it('should show the user information headline', () => {
    cy.get('h2').should('have.text', 'User Information')
  })

  it('should show navigation button with "Back" text', () => {
    cy.get('[qa-ref="back-button"]').should('have.text', 'Back')
  })

  it('should show current navigation step', () => {
    cy.get('[qa-ref="navigation-steps"]').should('have.text', '2 / 3')
  })

  it('should show navigation button with "Next" text', () => {
    cy.get('[qa-ref="next-button"]').should('have.text', 'Next')
  })

  it('should show disabled "Next" button', () => {
    cy.get('[qa-ref="next-button"]').should('be.disabled')
  })

  it('should show enabled "Next" button when form is filled', () => {
    cy.get('[qa-ref="form-one-first-name"]').type('Kevin')
    cy.get('[qa-ref="form-one-last-name"]').type('Martinez')
    cy.get('[qa-ref="form-one-username"]').type('test')
    cy.get('[qa-ref="next-button"]').should('not.be.disabled')
  })

  it('should show error for required first name', () => {
    cy.get('[qa-ref="form-one-first-name"]').focus()
    cy.get('[qa-ref="form-one-last-name"]').focus()
    cy.get('[qa-ref="form-one-first-name-error"]').should('have.text', 'First name is a required field')
  })

  it('should show error for required last name', () => {
    cy.get('[qa-ref="form-one-last-name"]').focus()
    cy.get('[qa-ref="form-one-first-name"]').focus()
    cy.get('[qa-ref="form-one-last-name-error"]').should('have.text', 'Last name is a required field')
  })

  it('should show error for required username', () => {
    cy.get('[qa-ref="form-one-username"]').focus()
    cy.get('[qa-ref="form-one-first-name"]').focus()
    cy.get('[qa-ref="form-one-username-error"]').should('have.text', 'Username is a required field')
  })
})