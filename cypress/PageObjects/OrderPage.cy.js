/// <reference types="Cypress" />

import { MyAccount} from "../PageObjects/MyAccount.cy"

export class OrderPage extends MyAccount{


//Selectors
submitConfiguration = '[data-gio-eventname=web_design_overview_nextstep]'
modelXyokeeSteering = '#Model_X_Yoke_Steering'
modelSyokeeSteering = '#Model_S_Yoke_Steering'
yokeePrice = '[data-id=STEERING_WHEEL-price]'

//Methods

    checkIfYokeeSteeringIsAvailable(model){
        if(model == 'Model S'){
            cy.get(this.modelSyokeeSteering).should('be.visible').click()
            cy.get(this.yokeePrice).children().invoke('text').should('contain', '$250')
        }
        else if(model == 'Model X'){
            cy.get(this.modelXyokeeSteering).should('be.visible').click()
            cy.get(this.yokeePrice).children().invoke('text').should('contain', '$250')
        }
        return this;
    }

}

export const orderPage = new OrderPage()