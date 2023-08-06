
/// <reference types='Cypress' />
import HomePage from "../PageObject/Homepage"
import LoginPage from "../PageObject/LoginPage"

//Suite defining
describe('My Login Test Suite', function(){
    before(function(){ 
        //bringing data from external file from exampleLogin.json
        cy.fixture('exampleLogin.json').then(function(data){
        //initializing local data 
        this.data=data
        })
    })

    //test case
    it('Login TestCase', function(){
        Cypress.config('defaultCommandTimeout',5000)
        //instantiating LoginPage with the new operator
        const loginpage =new LoginPage()
        //instantiating HomePage with the new operator
        const homePage=new HomePage()
        //To open the web page through the environmetal variable
         cy.visit(Cypress.env('url'))
         // extracting data for each data set
         this.data.users.forEach((element) => {
                   //calling userlogin method for each user in command.js
                    cy.userLogin(element.username,element.password) 
                    //assertion of successful login by checking webelement
                     cy.url().then((url) => {
                    Cypress.env('urlValue', url)
                    cy.log(url)
                    cy.wait(300)
                    //condition to check if login is successful or not
                    if(url.includes('/inventory.html'))
                    {
                        //Printing for login success
                        cy.log("Success Login")
                        //Going back to the login page in the next 2 lines
                        homePage.getMenu().click()
                        homePage.getLogOutButton().click()
                        
                    }
                    else{
                        //Printing if the login was unsuccessful
                        cy.log('Login not success')
                        //clearing the data of the username field
                        loginpage.getUserNameField().clear()
                        //clearing the data of the passwordfield
                        loginpage.getPasswordField().clear()
                    }
                })
                   


               

                        
        }) 
    }) 
                  

              
            
                  
              
            
             
}) 
    
    
    


