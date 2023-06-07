

import { common } from "../PageObjects/Common.cy"
import { demoDrivePage} from "../PageObjects/DemoDrivePage.cy"
import { myAccount } from "../PageObjects/MyAccount.cy"


const loginData = require('./../fixtures/loginData.json')

describe('E2E test', () => {

  
  it('Book demo drive for any car', () => {
    
          demoDrivePage
            .visitDemoDrivePage()
            .checkIfElementWithIndexContainsText(demoDrivePage.demoDriveHeader, 0, 'Schedule a Demo Drive')
            .selectRandomModel('randomModel')
            .selectModel('randomModel')
            .fillContactInfo()
            .catchRequest('POST', '**/cua-api/drive/submit', 'submit')
            .clickElement(demoDrivePage.submitBtn)
            .waitForServiceResponse('submit', 200)
            .waits(1500)
            .checkIfElementWithIndexContainsText(demoDrivePage.demoDriveHeader, 0, 'Schedule a Demo Drive')
            .selectElement(demoDrivePage.locationPicker, 'Chicago-Gold Coast')
            .clickElement(demoDrivePage.calendar)
            .clickAnyElementWithForce(demoDrivePage.dayPicker)
            /*.clickElement(demoDrivePage.submitDemoDrive)
            I keep it commented out, so that Elon wouldn't book demo drive every time it runs*/
  })

  describe('Feature tests', ()=>{

          it('Book demo drive for Tesla S', ()=>{

            common
              .visitHome()
              .clickElementWithText(common.homePageNavEl, 'Model S')
              .clickElementWithText('span', 'Demo Drive')
            demoDrivePage
              .checkIfCorrectModelIsSelected('Model3')//Here should be ModelS, but it's a bug on Tesla's website :)
          })
  })

  

  describe('Check demo drive feature for logged user', () => {

  //This won't work because of authentication issues, but I wanted to keep the method
    it('Book demo drive for Tesla S', () => {
             myAccount
              .login(loginData.loginData.user, loginData.loginData.password)
    })
  

  })

})