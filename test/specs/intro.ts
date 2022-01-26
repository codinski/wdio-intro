
import url from 'webdriverio/build/commands/browser/url';
import landingPage from '../pageobjects/landing.page';
import LandingPage from '../pageobjects/landing.page';
import LoginPage from '../pageobjects/login.page';


/* ---Variables--- */
const baseUrl = "http://demowebshop.tricentis.com"

/* Testdata */
const customerEmail = "czabinski@byom.de"
const customerPassword = "tosca1234!"


describe('The webshop is available for a basic purchase with an existing user account', () => {
   
    it('open tricentis webshop', async () => {
        LandingPage.open(baseUrl)
        expect(browser).toHaveUrlContaining('demowebshop.tricentis')
        expect(browser).toHaveTitleContaining('Demo Webshop')
        
    });



   it('login to webshop', async () => {
       
        //LandingPage.open(baseUrl)
        LandingPage.loginLink.click()
        console.log("text: " + LandingPage.loginLink.getText())
        

        expect(browser).toHaveUrlContaining("/login")
        LoginPage.loginAs(customerEmail, customerPassword)
        expect(LandingPage.accountName).toEqual(customerEmail)
        
        
    }); 

/*     it('put simple computer in cart', async () => {
        
        ComputersPage.open()
        expect(browser.getUrl).toHaveTextContaining('/desktops')
        ComputersPage.desktops.choose("Simple Computer")
        Desktops.configuration.setRam("8").setHDD("400 GB").setCPU("slow").addToCart()
        Dekstops.shoppingCartLink.click()
        expect(ShoppingCart.getProductList()).toContain("Simple Computer")
        ShoppingCart.setTermsofService(true)
        ShoppingCart.proceedCheckout()
        Checkout.setBillingAddress("Mustercity")
        Checkout.setShippingAddress("Mustercity")
        Checkout.setShippingMethod("Ground")
        Checkout.setPaymentMethod("Cash On Delivery")
        Checkout.setPaymentInformation()
        expect(Checkout.totalPrice()).toEqual("960.00")
        Checkout.setConfirmOrder()


    });

    it('proceed to checkout and buy', async () => {
                
        ShoppingCart.setTermsofService(true)
        ShoppingCart.proceedCheckout()
        Checkout.setBillingAddress("Mustercity")
        Checkout.setShippingAddress("Mustercity")
        Checkout.setShippingMethod("Ground")
        Checkout.setPaymentMethod("Cash On Delivery")
        Checkout.setPaymentInformation()
        expect(Checkout.totalPrice()).toEqual("960.00")
        Checkout.setConfirmOrder()


    }); */


});



