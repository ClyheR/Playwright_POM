exports.LoginRetest = class LoginRetest{

    constructor (page){
        this.page=page
        this.username_box=page.locator('[data-test="username"]')
        this.password_box=page.locator('[data-test="password"]')
        this.login_but=page.locator('[data-test="login-button"]')

    }
        async gotoLoginPage(){
            await this.page.goto('https://www.saucedemo.com/')
        }
        async Login(username,password){
            await this.username_box.fill(username)
            await this.password_box.fill(password)
            await this.login_but.click()
        }
}