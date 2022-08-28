import {searchPagelements} from '../pageObjects/searchElements'
import {searchInfo} from '../data/searchInfo'
import { commonElements } from '../pageObjects/commonElements'
const searchPage = searchPagelements()
const info = searchInfo()
const commonEl = commonElements()
let list = []

export class SelectCarActions{
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
        this.selectCarBtn = commonEl.btnSuccess;
        this.searchBtn = searchPage.searchBtn;
        this.country = info.country;
        this.city = info.city;
        this.model = info.model;
        this.pickUpDate = info.pickUpDate;
        this.dropOffDate = info.dropOffDate;
        
    }

    summary = () => {
        let arr = []
        
        cy.get(this.cardBody).children().each(($el) => {
            arr.push($el.text().trim())
            console.log(arr)
        }).then(() => {
            expect(arr[0]).to.include(list[1])
            expect(arr[1]).to.include(list[5])
            expect(arr[2]).to.include(`${info.country}, ${info.city}`)
            expect(arr[3]).to.include(list[3])            
            expect(arr[4]).to.include(`${info.pickUpDate}`)
            expect(arr[5]).to.include(`${info.dropOffDate}`)
        })
        cy.get(commonEl.btnSearch).click()
    }

    selectCar = () => {
        cy.get(this.searchResults).find('tr').each(($el, index, $list) => {
            const store = $el.text();
            if(store.includes(this.model)){
                cy.get(`:nth-child(${index}`).children().each(($c) => {
                    list.push($c.text().trim())
                }).then(() => {
                    console.log(list[0])
                    cy.intercept({
                        url: `/details/${list[0]}`,
                        method: 'GET'
                    }).as('redirectConfirmation')
                    cy.get($list[index]).find(this.selectCarBtn).as('selectButton').click()
                    cy.wait('@redirectConfirmation', {
                        timeout: 5000
                    }).its('response.statusCode').should('equal', 200);
                })
            }
        })
    }
}