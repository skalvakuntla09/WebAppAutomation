import Page from './page'
import Assert from '../support/assertions';

class LoginPage extends Page {
    /**
     * define elements
     */
    get email () { return $('#email') }
    get password () { return $('#password') }
    get submitButton () { return $('#btn-signin') }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login')
    }

    loginSuccess (email, password) {
        this.email.addValue(email);
        this.password.addValue(password);
        this.submitButton.click();
        expect(browser.getUrl()).to.include(Assert.assertions.SUCCESSFUL_LOGIN_URL)
    }
}

export default new LoginPage()
