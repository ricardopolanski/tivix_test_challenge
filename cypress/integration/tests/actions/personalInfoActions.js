import { personalInfoPagelements } from '../pageObjects/personalInfoElements'
import { personalInfo } from '../data/personalInfo'
const infoPage = personalInfoPagelements()
const info = personalInfo()

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
    }

    inputName = () => {
        cy.get(this.nameField).type(this.name)
        cy.get(this.lastNameField).type(this.lastName)
        cy.get(this.cardNumberField).type(this.cardNumber)
        cy.get(this.emailField).type(this.email)
    }    
}