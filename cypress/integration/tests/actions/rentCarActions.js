import {searchPagelements} from '../pageObjects/searchElements'
import {searchInfo} from '../data/searchInfo'
const searchPage = searchPagelements()
const info = searchInfo()
let list = []

export class Search{
    constructor() {
        this.countryField = searchPage.countryField;
        this.cityField = searchPage.cityField;
        this.modelField = searchPage.modelField;
        this.pickUpDateField = searchPage.pickUpDate;
        this.dropOffDateField = searchPage.dropOffDate;
        this.btnSearch = searchPage.btnSearch;
        this.alertBox = searchPage.alertBox;
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

    selectCar = () => {
        cy.get('[id="search-results"]').find('tr').each(($el, index, $list) => {
            const store = $el.text();
            if(store.includes("Toyota Aygo")){
                cy.get(`:nth-child(${index}`).children().each(($c) => {
                    list.push($c.text().trim())
                }).then(() => {
                    console.log(list[0])
                    cy.intercept({
                        url: `/details/${list[0]}`,
                        method: 'GET'
                    }).as('redirectConfirmation')
                    cy.get($list[index]).find('[class="btn btn-success"]').as('selectButton').click()
                    cy.wait('@redirectConfirmation', {
                        timeout: 5000
                    }).its('response.statusCode').should('equal', 200);
                })
            }
        })
    }

    checkResults = () => {
        cy.get('[id="search-results"]').find('tr').should('have.length', 22)
    }

    sumary = () => {
        let arr = []
        
        cy.get('[class="card-body"]').children().each(($el) => {
            arr.push($el.text().trim())
        }).then(() => {
            expect(arr[0]).to.include(list[1])
            expect(arr[1]).to.include(list[5])
            expect(arr[2]).to.include(`${info.country}, ${info.city}`)
            expect(arr[3]).to.include(list[3])            
            expect(arr[4]).to.include(`${info.pickUpDate}`)
            expect(arr[5]).to.include(`${info.dropOffDate}`)
        })
        cy.get('[class="btn btn-primary"]').click()
    }
}