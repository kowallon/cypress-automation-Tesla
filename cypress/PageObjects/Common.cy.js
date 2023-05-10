/// <reference types="Cypress" />

export class Common {

    //Selectors
    carPicture = '[class="car-model model-models show"]'
    demoDriveBtn = '[data-gtm-drawer=drive]'
    homePageNavEl = '.tds-site-nav-item-text'
    
    //Mehods
    
        visitHome(){
            cy.visit('https://www.tesla.com/')
            return this;
        }
    
        waits(time){
            cy.wait(time)
            return this;
        }
    
        clickElement(selector ){
            cy.get(selector).click()
            return this;
        }
    
        clickAnyElementWithForce(selector ){
            cy.get(selector).getAny().click();
            return this;
        }
    
        selectElement(selector , value){
            cy.get(selector).select(value)
            return this;
        }
    
        checkIfElementWithIndexContainsText(selector , index, text){
            cy.get(selector).eq(index).should('contain', text)
            return this;
        }
    
        selectRandomModel(TeslaModel){
            cy.fixture('models').then((model) =>{
                const modelsTable = model.name;
                const random = Math.floor(Math.random()* modelsTable.length);
                const randomModel = modelsTable[random]
                cy.wrap(randomModel).as(TeslaModel)
              })
              return this;
        }
    
        clickButtonWithText(text){
            cy.get('button').contains(text).click({force: true})
            return this;
        }
    
        clickElementWithText(selector, text){
            cy.get(selector).contains(text).click({force: true})
            return this;
        }
    
        selectModel(aliasName){
            cy.get('@' + aliasName).then(val => {
              cy.get('button').contains(val).click({force: true});
            });
            return this;
          }
    
        catchRequest = (method, url, alias) => {
            cy.intercept({
                method: method,
                url: url,
                times: 1
            }).as(alias);
            return this;
        };
    
        waitForServiceResponse = (aliasName, statusCode) => {
            cy.wait('@' + aliasName).its('response.statusCode').should('eq', statusCode);
            return this;
        };    
    
    }
    
    export const common = new Common();