import { ChainablePromiseElement } from 'webdriverio';
import Page from './page';


class LoginPage extends Page {


    public open(): Promise<string> {
        return super.open('/login');
    }

    public async loginAs(username: string, password: string) {
        this.loginLink.click;
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#Email');
    }
    
    public get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#Password');
    }

    public get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('button[type="submit"]');
    }


}

export default new LoginPage();
