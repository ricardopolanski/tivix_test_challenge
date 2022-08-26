import { CommonActions } from '../actions/commonActions.js';
import { Search } from '../actions/rentCarActions';
const commonActions = new CommonActions
const searchActions = new Search

Given(/^the website is accessed$/, () => {
	commonActions.accessWebSite()
});

Then(/^will be showed up five fields to be filled up$/, () => {
	searchActions.checkInputElements()
});

Then(/^a blue Search button$/, () => {
	searchActions.checkButton()
});

Then(/^a notice box warning "([^"]*)"$/, (args1) => {
	searchActions.checkAlertBox()
});

When(/^all fields are filled up$/, () => {
	searchActions.selectCountry();
	searchActions.selectCity();
	searchActions.selectModel();
	searchActions.selectPickUpDate();
	searchActions.selectDropOffDate();
});

When(/^the Search button is clicked$/, () => {
	searchActions.clickSearchBtn()
});

Then(/^will be displayed a table informing Company, Model, License plate, Price, Price per day and a Rent button$/, () => {
	searchActions.checkResults();
});

When(/^the Rent button is clicked$/, () => {
	searchActions.selectCar()
});

Then(/^will be displayed a sumary with, Model, Company, Price per day, Location, Licencse plate, Pickup date and Dropoff date$/, () => {
	searchActions.sumary()
});
