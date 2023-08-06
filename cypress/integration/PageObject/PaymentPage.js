class PaymentPage{
    //extracting the web elements from the Payment page of the web application
    //and returning the element to the called function

    getFinishButton(){
        return(cy.get('#finish'))
    }
}
//Exporting the class, so that it can be used by other files in the project

export default PaymentPage