import { ChainablePromiseElement } from 'webdriverio';
    
import Page from './page';


class LandingPage extends Page {

    public get headerLinks(){
        return $('.header-links')
    }

    public get accountName() {
        return this.headerLinks.$('.account').getText()
    }

}



export default new LandingPage();