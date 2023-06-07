import { Common } from "./Common.cy"


export class DemoDrivePage extends Common{

//Selectors
demoDriveHeader = '.header-container > h1'
contactInfoName = '#edit-firstname-td'
contactInfoLastName = '#edit-lastname-td'
phoneNumber = '#edit-phonenumber-td'
email = '#edit-usermail-td'
zipCode = '#edit-zipcode-td'
submitBtn = '#edit-submit-td-ajax0'
locationPicker = '#select-location'
calendar = '#select-day'
dayPicker = '.tds-day:not([disabled])[type="button"]'
timePicker = '#select-time'
submitDemoDrive = '[data-section=timeSection]'
selectedTeslaModel = '.selectedButton'


//Methods    
    visitDemoDrivePage(){
        cy.visit('https://www.tesla.com/drive')
        return this;
    }

    fillContactInfo(){
        cy.get(this.contactInfoName).type('Elon')
        cy.get(this.contactInfoLastName).type('Musk')
        cy.get(this.phoneNumber).type('2025550123')
        cy.get(this.email).type('ceo@tesla.com')
        cy.get(this.zipCode).type('46580')
        return this;
    }

    checkIfCorrectModelIsSelected(model){
        cy.get(this.selectedTeslaModel).should('have.attr', 'data-model', model)
        return this;
    }

}

export const demoDrivePage = new DemoDrivePage();