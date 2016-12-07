const CoveragesPanel = require('./../../objects/coverages.panel.object.js');
const Aiepe2etools = require('aiep-e2e-tools/helpers');

module.exports = function(TestData) {
	const coveragesPanel = new CoveragesPanel();

	it('Should wait until the page is loaded', () => {
		Aiepe2etools.general.visibleOnPage(coveragesPanel.nextButton);
	});

	it('LiabilityCasco should be selected by default', () => {
		expect(coveragesPanel.liability.isSelected()).toBe(true);
	});

	it('Should fill in coverage and go to next screen', () => {
		Aiepe2etools.general.scrollIntoView(coveragesPanel.nextButton);
		coveragesPanel.nextButton.click();
	});
}