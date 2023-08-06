class PurchaseCompletionPage{
    //extracting the web elements from the Purchase Completion page of the web application
    //and returning the element to the called function

    getThankyouButton(){
        return(cy.get('.complete-header'))
    }

}
//Exporting the class, so that it can be used by other files in the project
export default PurchaseCompletionPage