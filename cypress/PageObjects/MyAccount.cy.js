/// <reference types="Cypress" />

import { DemoDrivePage} from "../PageObjects/DemoDrivePage.cy"

export class MyAccount extends DemoDrivePage{

//Selectors
loginPage = 'https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US'
emailInput = '#form-input-identity'
loginPageBtn = '#form-submit-continue'
passwordInput = '#tds-form-input-password'
mainConetnet = '#main-content'


//Methods

    login(user, password){

        cy.visit('https://www.tesla.com/')
        .get('.tds-site-nav-item-text').contains('Account').click()
        .wait(1000)
        //cy.visit(this.loginPage)
        .wait(1000)
        .get(this.emailInput).type(user)
        .wait(1000)
        .get(this.loginPageBtn).click()
        .wait(1000)
        .get(this.passwordInput).type(password)
        .wait(1000)

        cy.intercept({
            method: 'GET',
            url: '**/teslaaccount/oxp-bff-api/user-orders',
            times: 1
        }).as('userOrders')

        cy.get(this.loginPageBtn).click()   

        cy.wait('@userOrders').its('response.statusCode').should('eq', 200);

        cy.get(this.mainConetnet).children().invoke('text').should('eq', 'Dashboard')

    }


}

export const myAccount = new MyAccount();
