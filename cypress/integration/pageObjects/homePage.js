class homePage{
    profileMenu(){
        return cy.get('.admin-dropdown.profile')
    }
    logoutButton(){
        return cy.get('.action-btn[type="submit"]')
    }
}
export default homePage