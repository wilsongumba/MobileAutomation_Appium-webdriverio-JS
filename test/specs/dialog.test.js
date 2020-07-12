const dialog = require('../../pageObjects/dialog.page');
const expect = require('chai').expect;

describe('Dialog', ()=>{

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

})