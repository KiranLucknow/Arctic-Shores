class CheckoutPage{

    //extracting the web elements from the Checkout page of the web application 
    //and returning the element to the called function

    getCheckouButton(){
        return(cy.get("#checkout"))
    }



}
//Exporting the class, so that it can be used by other files in the project
export default CheckoutPage;