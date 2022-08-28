import { PersonalInfo } from '../actions/personalInfoActions';
const info = new PersonalInfo()


When(/^fill up personal information$/, () => {
	info.inputName();
	info.inputLastName();
	info.inputCardNumber();
	info.inputEmail();
});

When(/^click on the Rent button$/, () => {
	info.clickRentBtn()
});

Then(/^all before information provided should be displayed$/, () => {
	info.checkUrl()
});
