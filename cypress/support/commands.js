import loginPage from '../integration/pageObjects/loginPage'
const login = new loginPage()

Cypress.Commands.add("login",(email,password)=>{
        login.email().type(email)
        login.password().type(password)
        login.signInButton().click()
})
Cypress.Commands.add("LaunchAapplication",()=>{
        cy.visit('/')
})