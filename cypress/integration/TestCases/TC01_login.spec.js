import homePage from '../pageObjects/homePage'
const home =new homePage()
describe('Login function with valid user', function(){
    
    before(function(){
        cy.LaunchAapplication()
    })

    beforeEach(function(){
        cy.fixture('userData').as('user')
    })

    it('Sign in with valid user details',function(){
        cy.login(this.user.ValidUser.email,this.user.ValidUser.password)
        home.profileMenu().click()
        home.logoutButton().click()
        cy.contains('You have successfully logged out.')
    })
    
})
describe('Login function with invalid user', function(){
    
    before(function(){
        cy.LaunchAapplication()
    })

    beforeEach(function(){
        cy.fixture('userData').as('user')
    })

    it('sign in with invalid user',function(){
        cy.login(this.user.InvalidUser.email,this.user.InvalidUser.password)
        cy.contains('You have entered an incorrect username or password.')
        
    })
})