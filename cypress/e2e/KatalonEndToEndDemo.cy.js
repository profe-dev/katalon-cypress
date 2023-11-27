describe('Katalon End To End HealthCare App Test', () => {

  it('Navigate to Katalon Demo Application', () => {

    //Navigating to URL of Application Under Test

    cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php')


    //Performing click operation on Make Appointment Button

    cy.get('#btn-make-appointment').click()


  })




  it('Logging in by entering credentials', () => {


    //Entering username

    cy.get('#txt-username').type("John Doe")


    //Entering password

    cy.get('#txt-password').type("ThisIsNotAPassword")

    //Hitting the Login Button

    cy.get('#btn-login').click()




  })




  it("Filling the registration form" , () => {


    //Selecting the radio button

    cy.get('#combo_facility').select(1)




    //Checking the checkbox

    cy.get('#chk_hospotal_readmission').click()




    //Selecting the Radio Button

    cy.get('#radio_program_medicaid').click()




    //Selecting the Date Field

    cy.get('.glyphicon').click()

    cy.get('tbody > :nth-child(5) > :nth-child(2)').click()

    cy.get('#menu-toggle > .fa').click()

    cy.get('#menu-toggle > .fa').click()




    //Entering text in text field

    cy.get('#txt_comment').type("Booking Doctor's Appointment")

    cy.get('#btn-book-appointment').click()




  })




  it("Verifying if appointment was booked successfully" , () => {




    //Verifying Appointment Confiration Message

    cy.get('h2').contains("Appointment Confirmation")




    //Clicking on Go to Homepage Button

    cy.get('.text-center > .btn').click()




  })

  

})