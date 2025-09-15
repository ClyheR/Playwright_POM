exports.LoginPage = class LoginPage{
    constructor(page){
        this.page=page
    this.username_textbox=page.getByRole('textbox', { name: 'Username' })
    this.password_textbox=page.getByRole('textbox', { name: 'Password' })
    this.login_button=page.getByRole('button', { name: ' Login' })
}
    async gotoLoginPage(){
       await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(username,password){
        if(username !== undefined){
        await this.username_textbox.fill(username)
        
    }
        if(password !== undefined){
        await this.password_textbox.fill(password)
        }
        await this.login_button.click()
    }

    
}