/**
 * Login Page Spec
 *
 * @description End-to-End tests for Login page
 */

var EC = protractor.ExpectedConditions;

var GENERAL = require('../general/general.constant').CONSTANT,
    LOGIN_PAGE = require('./login.constant').CONSTANT;

describe('Velocitum Inventory App', function () {

    it('should login admin user', function () {
        browser.get(LOGIN_PAGE.TARGET_URL);

        // Given
        element(by.model(LOGIN_PAGE.LOGIN_INPUT)).sendKeys(LOGIN_PAGE.LOGIN_VALUE);
        element(by.model(LOGIN_PAGE.PASSWORD_INPUT)).sendKeys(LOGIN_PAGE.PASSWORD_VALUE);

        // When
        element(by.css(LOGIN_PAGE.SUBMIT_BTN)).submit();
        browser.sleep(5000);

        // Then
        expect(element(by.binding(LOGIN_PAGE.USER_NAME)).getText()).toBe(GENERAL.USER_NAME);
    });
});
