

const {test,expect}=require('@playwright/test')
const{Loginpage} =require('../POM/Loginpage')

test('Login',async({page})=>{

  const login=new Loginpage(page);
  await login.gotoezhour();
  await expect(page).toHaveURL("https://rubixtek.ezhour.com/account/login");
  await expect(page).toHaveTitle("EzHour");
  await login.login("rengaraj.k@rubixtek.com","Raj@0077");
  // await page.pause();

})