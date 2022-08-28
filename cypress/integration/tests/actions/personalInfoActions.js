import { personalInfoPagelements } from '../pageObjects/personalInfoElements'
import { personalInfo } from '../data/personalInfo'
import { commonElements } from '../pageObjects/commonElements'
const infoPage = personalInfoPagelements()
const info = personalInfo()
const commonEl = commonElements()

export class PersonalInfo{
    constructor() {
        this.name = info.name;
        this.lastName = info.lastName;
        this.cardNumber = info.cardNumber;
        this.email = info.email;
        this.nameField = infoPage.nameField;
        this.lastNameField = infoPage.lastNameField;
        this.cardNumberField = infoPage.cardNumberField;
        this.emailField = infoPage.emailField;
        this.rentBtn = commonEl.btnSearch;
    }

    inputName = () => {
        cy.get(this.nameField).should('be.visible').and('be.enabled').type(this.name)
    }    

    inputLastName = () => {
        cy.get(this.lastNameField).should('be.visible').and('be.enabled').type(this.lastName)
    }    

    inputCardNumber = () => {
        cy.get(this.cardNumberField).should('be.visible').and('be.enabled').type(this.cardNumber)
    }    

    inputEmail = () => {
        cy.get(this.emailField).should('be.visible').and('be.enabled').type(this.email)
    }    

    clickRentBtn = () => {
        cy.get(this.rentBtn).click()
    }

    checkUrl = () => {
        cy.url().should('include', '/rent/51')
    }
}