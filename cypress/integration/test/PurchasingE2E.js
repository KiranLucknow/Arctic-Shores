/// <reference types='Cypress' />

import Homepage from "../PageObject/Homepage.js"
import LoginPage from "../PageObject/LoginPage.js"
import CheckoutPage from "../PageObject/checkoutPage.js"
import CustomerDetailPage from "../PageObject/CustomerDetailPage.js"
import PaymentPage from "../PageObject/PaymentPage.js"
import PurchaseCompletionPage from "../PageObject/PurchaseCompletionPage.js"


describe('End to End shopping for a valid user', function(){
    before(function(){
        //bringing the data from the exampleProduct.json file in fitures folder
        cy.fixture('exampleProduct.json').then(function(data){
            //assigning the data to the local variable data to make it accessable to the local spec
            this.data=data
        })
    })
    it('My First TestCase', function(){
        //instantiating the Homepage
        const homePage = new Homepage()
        //instantiating the LoginPage
        const loginPage = new LoginPage()
        //instantiating the CheckoutPage
        const checkoutPage = new CheckoutPage()
        //instantiating the CustomerDetailPage
        const customerDetailPage = new CustomerDetailPage()
        //instantiating the PaymentPage
        const paymentPage = new PaymentPage()
        //instantiating the PurchaseCompletionPage
        const purchaseCompletionPage = new PurchaseCompletionPage()
        //To get the web page through the environmental variable 'url' in config file
        cy.visit(Cypress.env('url'))
        //To enter the data for the username through fixtures folder
        loginPage.getUserNameField().type(this.data.username)
        //To enter the data for the password through fixtures folder
        loginPage.getPasswordField().type(this.data.password)
        //to click the login button
        loginPage.getLoginClickButton().click()

        //to get all products and access each product individually
        homePage.getAllProducts().each(($el, index, $list) => {
            //to get the name of the each product
            const productName = $el.find('.inventory_item_name').text()
            cy.log(productName)
            //to verify the name of the product, is the product user need
            if(productName.includes(this.data.productName)){
                //logging the product name
                cy.log(productName)
                //clicking on the Add-to-Cart button
                cy.wrap($el).find('button').click()
            }
        })
        //clicking on the carton icon to navigate to see the price
        homePage.getCartIcon().click()
        cy.wait(5000)
        //clicking on the checkoutout button to navigate to user's detail page
        checkoutPage.getCheckouButton().click()
        //entering the user first name
        customerDetailPage.getCustomerFirstName().type(this.data.FirstName)
        //entering the user Last name
        customerDetailPage.getCustomerLastName().type(this.data.LastName)
        //entering the user zip code
        customerDetailPage.getCustomerZipCode().type(this.data.ZipCode)
        //Clicking on the Continue button
        customerDetailPage.getContinueButton().click()
        //clicking on the finish button to validate the shopping
        paymentPage.getFinishButton().click()
        //to verify if the thankyou message is displaying 
        purchaseCompletionPage.getThankyouButton().then($el=>{
                
            const lengthCount=$el.text().length
            if (lengthCount>0){
            cy.log(lengthCount)
            cy.log('In the loop')
            const msg=$el.text()
            if(msg.includes('Thank you for your order!')){
            cy.log('Purchasing Done')
                 }
    
             else{
             cy.log('Purchasing unsuccessful') 
             }
            }
        })
      
        
        



})
})
    
