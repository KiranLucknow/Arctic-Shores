class LoginPage{
    //extracting the web elements from the Login page of the web application
    //and returning the element to the called function

    getUserNameField(){

        return (cy.get('#user-name'))
    }
    getPasswordField(){

        return (cy.get('#password'))
    }

    getLoginClickButton(){
        return(cy.get('#login-button'))
    }



}
//Exporting the class, so that it can be used by other files in the project

export default LoginPage