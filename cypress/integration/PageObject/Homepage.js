class HomePage{
    //extracting the web elements from the Homepage of the web application
    //and returning the element to the called function

    getMenu(){
        return(cy.get('.bm-burger-button'))
    }
    getLogOutButton(){
        return(cy.get('#logout_sidebar_link'))
    }
    getAllProducts(){
        return(cy.get(".inventory_list").find('.inventory_item'))
    }
    getCartIcon(){
        return(cy.get('.shopping_cart_badge'))
    }
    getNameGroup(){
        return(cy.get('[data-test="product_sort_container"]'))
    }


}
//Exporting the class, so that it can be used by other files in the project
export default HomePage