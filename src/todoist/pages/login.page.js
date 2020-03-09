import { Selector, t } from 'testcafe';


class LoginPage {
    /**
     * primera clase
     */
    constructor(){
        this.loginLink = Selector('ul>li>a').withExactText('Iniciar sesión').nth(0);
        this.loginFrame = Selector('iframe[src*="showLogin"]');
        this.emailField = Selector('#email');
        this.passwordField = Selector('#password');
        this.loginButton = Selector('.submit_btn');
        this.msjLoginIncorrecto= Selector('body:nth-child(2) div.login_singup_form.content:nth-child(1) div.error_block:nth-child(4) div.error_msg > span:nth-child(2)');

    }

    async login(email,password){
        await t.click(this.loginLink)
             .switchToIframe(this.loginFrame)
             .typeText(this.emailField,email)
             .typeText(this.passwordField,password);
     //        .click(this.loginButton)
     //        .switchToMainWindow;
    }

    
}

export default new LoginPage();