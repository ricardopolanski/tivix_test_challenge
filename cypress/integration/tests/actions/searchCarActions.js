import {searchPagelements} from '../pageObjects/searchElements'
import {searchInfo} from '../data/searchInfo'
import { commonElements } from '../pageObjects/commonElements'
const searchPage = searchPagelements()
const info = searchInfo()
const commonEl = commonElements()
let list = []

export class SearchCarActions{
    constructor() {
        this.countryField = searchPage.countryField;
        this.cityField = searchPage.cityField;
        this.modelField = searchPage.modelField;
        this.pickUpDateField = searchPage.pickUpDate;
        this.dropOffDateField = searchPage.dropOffDate;
        this.btnSearch = commonEl.btnSearch;
        this.alertBox = searchPage.alertBox;
        this.searchResults = searchPage.searchResults
        this.cardBody = commonEl.cardBody;
        this.searchBtn = searchPage.searchBtn;
        this.country = info.country;
        this.city = info.city;
        this.model = info.model;
        this.pickUpDate = info.pickUpDate;
        this.dropOffDate = info.dropOffDate;
        
    }

    selectCountry = () => {
        cy.get(searchPage.countryField).select(this.country)
    }

    checkInputElements = () => {
        cy.get(this.countryField).should('be.enabled').and('be.visible')
        cy.get(this.cityField).should('be.enabled').and('be.visible')
        cy.get(this.modelField).should('be.enabled').and('be.visible')
        cy.get(this.pickUpDateField).should('be.enabled').and('be.visible')
        cy.get(this.dropOffDateField).should('be.enabled').and('be.visible')
    }

    checkButton = () => {
        cy.get(this.btnSearch).should('be.enabled').and('be.visible').and('have.css', 'background-color', 'rgb(0, 123, 255)')
    }

    checkAlertBox = () => {
        cy.get(this.alertBox).should('have.css', 'background-color', 'rgb(248, 215, 218)')
    }

    selectCity = () => {
        cy.get(this.cityField).select(this.city)
    }

    selectModel = () => {
        cy.get(this.modelField).type(this.model)
    }

    selectPickUpDate = () => {
        cy.get(this.pickUpDateField).click().type(this.pickUpDate)
    }

    selectDropOffDate = () => {
        cy.get(this.dropOffDateField).type(this.dropOffDate)
    }

    clickSearchBtn = () => {
        cy.get(this.btnSearch).click()
    }

    

    checkResults = () => {
        cy.get(this.searchResults).find('tr').should('have.length', 22)
    }
}