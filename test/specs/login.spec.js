const buttons = require("../screens/menu.screen");
const form = require("../screens/form.screen");

let nome = 'Rafael Ide'

describe('Testing the Forms', async () =>{

    it('Should acess the form page', async () => {   
        await buttons.goToForms()
        await form.inputText(nome)
        await form.turnSwitch()
        await form.selectOpt(5)
        await form.pushBtn()

     });
})