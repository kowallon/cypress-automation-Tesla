import { DemoDrivePage} from "../PageObjects/DemoDrivePage.cy"

export class MyAccount extends DemoDrivePage{

//Selectors
loginPage = 'https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US'
emailInput = '#form-input-identity'
loginPageBtn = '#form-submit-continue'
passwordInput = '#tds-form-input-password'
mainConetnet = '#main-content'


//Methods
//To be finished
    login(user, password){
        cy.request({
            method: 'GET',
            url: 'https://auth.tesla.com/oauth2/v3/authorize',
            qs: {
              client_id: 'ownerapi',
              code_challenge: '123',
              code_challenge_method: 'S256',
              redirect_uri: 'https://auth.tesla.com/void/callback',
              response_type: 'code',
              scope: 'openid email offline_access',
              state: '123',
              login_hint: user
            }
          }).then((response) => {
            cy.log(response)
            expect(response.status).to.eq(200);
          });
    }


}

export const myAccount = new MyAccount();
