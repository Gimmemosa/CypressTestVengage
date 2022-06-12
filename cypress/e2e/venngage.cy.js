describe('Venngage home screen', () => {
  var emailV = 'anpanyu.g@gmail.com'
  var passwordV = 'F)W#M?:3PT>)d<=tu'


  it('visits venngage home', () => {
    cy.visit('https://venngage.com')
    cy.get('.hero_header').should('be.visible')
  })
  it('checks if title is correct', () => {
    cy.get('.hero_header').contains('Make Better Infographics ')
  })
  it('checks if sign up button is visible by attr', () => {
    cy.get('[data-vg-test-label="top-nav-sign-up"]').should('be.visible')
  })
  it('finds "Careers" in footer', () => {
    cy.get(':nth-child(6) > :nth-child(1) > .footer_menuList > :nth-child(2) > .footer_menuLink').scrollIntoView().should('be.visible')
  })
  it('goes to login page from home', () => {
    cy.get('.nav_ctaContainer > .link_button_root').invoke('attr','href').should('contain','https://infograph.venngage.com/signin')
    cy.get('.nav_ctaContainer > .link_button_root').click()
    cy.url().should('eq','https://infograph.venngage.com/signin')
  })
  it('checks that login page has background image', () => {
    cy.get('#signin_container_v2').should('have.css','background-image', 'url("https://cdn.venngage.com/media/v2_img/signup_overlay.png")')
  })
  it('checks that email field is not readonly before user inputs and confirms email', () => {
    cy.get('#user_email').should('not.have.attr', 'readonly')
  })
  it('fills the fields with creds', () => {
    cy.fillCredsIntoLoginForn(emailV,passwordV)
  })
  it('checks that email field is readonly after input', () => {
    cy.get('#user_email').should('have.attr','readonly','readonly')
  })
  it('validates Login button colour', () => {
    cy.get('#btn_login').should('have.css', 'background-color', 'rgb(0, 130, 255)')
  })
  it('validates Login button size', () => {
    cy.get('#btn_login').should('have.css', 'height', '40px')
    .and('have.css', 'width', '356px')
  })
})