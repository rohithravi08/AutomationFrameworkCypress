class loginPage{
    email(){
        return cy.get('#inputEmail')
    }
    password(){
        return cy.get('#inputPassword')
    }
    signInButton(){
        return cy.get('.login-btn')
    }
}
export default loginPage