import { ChainablePromiseElement } from 'webdriverio';
import LoginPage from './login.page';

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string): Promise<string> {
        return browser.url(`${path}`)
    }

    public get registerLink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('*=register')
    }

    public get loginLink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> 
    {
       /*  return $('*=login') */
       return $("//a[@href='/login']")
    }

    public get shoppingCartLink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> 
    {
        return $('*=cart')
    }

    public get whichlistLink(): ChainablePromiseElement<Promise<WebdriverIO.Element>> 
    {
        return $('*=whichlist')
    }

    public get searchBarInput(): ChainablePromiseElement<Promise<WebdriverIO.Element>> 
    {
        return $('#small-searchterms')
    }


    
    




    

 


    



}
