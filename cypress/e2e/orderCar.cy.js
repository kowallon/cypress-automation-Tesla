/// <reference types="cypress" />

import { common } from "../PageObjects/Common.cy"
import { demoDrivePage} from "../PageObjects/DemoDrivePage.cy"
import { myAccount } from "../PageObjects/MyAccount.cy"
import { orderPage } from "../PageObjects/orderPage.cy"


const loginData = require('../fixtures/loginData.json')

describe('Feature tests', () => {

  ['Model S', 'Model X'].forEach((model) =>{
    it('Check if yokee steeing is available for ' + model, () => {
    
      common
        .visitHome()
        .clickElementWithText(common.homePageNavEl, model)
        .catchRequest('POST', '**/configurator/api/v3/sesscheck', 'configurator')
        .clickButtonWithText('span', 'Order Now')
        .waitForServiceResponse('configurator', 200)
      orderPage
        .checkIfCorrectModelIsSelected(model)
        /*.clickElement(demoDrivePage.submitDemoDrive)
        I keep it commented out, so that Elon wouldn't book demo drive every time it runs*/
    })
  })
  
})