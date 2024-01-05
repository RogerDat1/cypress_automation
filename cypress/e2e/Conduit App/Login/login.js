import loginPage from "../../../pages/loginPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPOM = new loginPage();
///reference types = 'cypress-xpath'
beforeEach(() => {
    // Intercept and Alias API Requests
    cy.intercept('POST', 'https://api.realworld.io/api/users/login').as('login')
})

Given('I navigate to the login page', () => {
    cy.visit('https://www.google.com/')
});

// When('I enter my credentials and click submit', () => {
//     cy.get('.nav-item').contains('Sign in').click()
//     loginPOM.login('qaportfolioaz@gmail.com', 'Loveqa!123');
// });

When('I enter {string} in the search field', (value) => {
    //cy.get('.gLFyf').type(value`{enter}`)
    cy.get('.gLFyf').type(value)
    cy.get('li[data-view-type="1"]').contains(value).click()
   // .contains('Sign in').click()
    
});

//I enter "flipkart" in the search field

Then('I click on flipkart login button', () => {
    cy.visit('https://www.ksrtc.in/oprs-web/')
    // cy.xpath('(//span[@class="VuuXrf"][contains(text(),"Flipkar")])[1]')
    // .click()
    
});

/// code to Get the attribute value 
Then('I verify calendar data', () => {
 
    cy.get('#txtJourneyDate').click()
    cy.get('tr > td.ui-datepicker-days-cell-over').then(($e)=>{
        let val = $e.attr('data-month')
        cy.log("val"+val)
    })
    
});

//Iterating over the locator to fetch the date values 

Then('I verify disabled date in calendar', () => {
 
    //cy.get('#txtJourneyDate').click()
    // cy.get('tr > td>a.ui-state-default').each(($e)=>{
    //     cy.wrap($e) // wrap is used to wrap the element
    //     .invoke('text') // invoking the text element 
    //     .then(($label)=>{ // return the text value 
    //         const day = $label
    //         cy.log(day)
    //     })

        cy.get('tr > td>a.ui-state-default').each(($e)=>{
            cy.wrap($e)
            .then(($label)=>{
               expect($label.attr('class')).contains('ui-state-default')
               //cy.log(val)
            })
       // })

     
      })
    
    
});


//tr > td>a.ui-state-default
// Iterate over the the elements 


//


// describe('Conduit Login Scenarios', () => {
   
//     it('User can Login with VALID User', () => {
//         // Go to Sign In page, enter login info and login
//         cy.get('.nav-item').contains('Sign in').click()
//         loginPOM.login('qaportfolioaz@gmail.com', 'Loveqa!123');

//         // Verify the user logged in successfully
//         cy.get('.feed-toggle').contains('Your Feed')
//         cy.get('.feed-toggle').contains('Global Feed')
//     })

//     it('User cannot login with INVALID User - Error appears', () => {
//         // Go to Sign In page, enter login info for an INVALID user and click Sign In
//         cy.get('.nav-item').contains('Sign in').click()
//         loginPOM.login('abc@gmail.com', 'abc')

//         // Verify Error Message appears
//         cy.get('.error-messages').contains('email or password is invalid')
//     })

//     it('User cannot login with BLANK EMAIL - Error appears', () => {
//         // Go to Sign In page, enter login info with a Blank Email and click Sign In
//         cy.get('.nav-item').contains('Sign in').click()
//         loginPOM.login(null,'abc')

//         // Verify Error Message appears
//         cy.get('.error-messages').contains('email can\'t be blank')
//     })

//     it('User cannot login with BLANK PASSWORD - Error appears', () => {
//         // Go to Sign In page, enter login info with a Blank Password and click Sign In
//         cy.get('.nav-item').contains('Sign in').click()
//         loginPOM.login('abc@gmail.com', null)

//         // Verify Error Message appears
//         cy.get('.error-messages').contains('password can\'t be blank')
//     })

//     it('User cannot login with BLANK Values - API Returns a 500 error response', () => {
//         // Go to Sign In page, enter login info with a Blank Password and click Sign In
//         cy.get('.nav-item').contains('Sign in').click()
//         loginPOM.login(null, null)

//         // Verify Login API returns 500 status code response
//         cy.wait('@login').its('response.statusCode').should('eq', 500)
//     })
// })