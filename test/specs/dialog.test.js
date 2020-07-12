const dialog = require('../../pageObjects/dialog.page');
const expect = require('chai').expect;

describe('Dialog', ()=>{

    // Execute a block of code before every test
    beforeEach(() => {
    });

    it('Verify if text entry dialog username and password fields are editable', ()=>{

        //dialog.appButton.click();
        dialog.appBtn.click();
        dialog.alertDialogBtn.click();
        dialog.textEntryDialogBtn.click();

        dialog.userNameField.addValue("Test");
        dialog.userNameField.clearValue();
        dialog.userNameField.addValue("User X");

        dialog.passwordField.clearValue();
        dialog.passwordField.addValue("password");

        let text = dialog.userNameField.getText();
        console.log(text);
        expect(text).equal("User X");

        dialog.dialogOkBtn.click();
    });

    it('Scroll', () => {
        dialog.viewBtn.click();
        driver.touchAction([
            { action: 'press', x: 500, y: 1000 },
            { action: 'moveTo', x: 500, y: 500 },
            'release'
        ])

    });

    // Execute a block of code after every test
    afterEach(() => {
        driver.reset();
    });

})