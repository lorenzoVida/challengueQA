import LoginPage from '../pages/login.page.js';
import DashboardPage from '../pages/dashboard.page';
//const EMAIL = process.env.TODOIST_EMAIL;
const EMAIL = "lorenkaya";
//const PASSWORD = process.env.TODOIST_PASSWORD;
const PASSWORD = "KayaNow86";

fixture('Login Tests').page('https://todoist.com/');

test('Login sucessful',async t => {
    await LoginPage.login(EMAIL,PASSWORD);
    console.log(LoginPage.msjLoginIncorrecto.textContent);
   // await t.expect("Dirección de email no válida.").eql(LoginPage.msjLoginIncorrecto.textContent)
   // await t.expect(await DashboardPage.isPageLoaded()).ok();
});

