class CustomerDetailPage{
    ////extracting the web elements from the Customer Detail page of the web application
    //and returning the element to the called function
    getCustomerFirstName(){
        return(cy.get('#first-name'))
    }
    getCustomerLastName(){
        return(cy.get('#last-name'))
    }
    getCustomerZipCode(){
        return(cy.get('#postal-code'))
    }
    getContinueButton(){
        return(cy.get('#continue'))
    }

}
//Exporting the class, so that it can be used by other files in the project
export default CustomerDetailPage