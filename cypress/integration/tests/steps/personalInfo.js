const { PersonalInfo } = require('../actions/personalInfoActions')
const info = new PersonalInfo()


When(/^fill up personal information$/, () => {
	info.inputName()
});

When(/^click on the Rent button$/, () => {
	cy.get('[class="btn btn-primary"]').click()
});

Then(/^all before information provided should be displayed$/, () => {
	return true;
});
