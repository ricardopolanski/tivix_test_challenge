import { SelectCarActions } from '../actions/selectCarActions';
const selectCar = new SelectCarActions()

When(/^the Rent button is clicked$/, () => {
	selectCar.selectCar()
});

Then(/^will be displayed a summary with, Model, Company, Price per day, Location, License plate, Pickup date and Dropoff date$/, () => {
	selectCar.summary()
});