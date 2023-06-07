import { common } from "../PageObjects/Common.cy"
import { demoDrivePage} from "../PageObjects/DemoDrivePage.cy"
import { myAccount } from "../PageObjects/MyAccount.cy"
import { orderPage } from "../PageObjects/OrderPage.cy"


const loginData = require('../fixtures/loginData.json')

describe('Feature tests', () => {

  ['Model S', 'Model X'].forEach((model) =>{
    it('Check if yokee steeing is available for ' + model, () => {
    
      common
        .visitHome()
        .clickElementWithText(common.homePageNavEl, model)
        .catchRequest('POST', '**/configurator/api/v3/sesscheck', 'configurator')
        .clickElementWithText('span','Order Now')
        .waitForServiceResponse('configurator', 200)
      orderPage
        .checkIfYokeeSteeringIsAvailable(model)
    })
  })
  
})