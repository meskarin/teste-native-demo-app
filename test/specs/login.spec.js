const buttons = require("../screens/home.screen");

describe('Testing the Forms', async () =>{
    it('Should acess the form page', async () => {   
       await buttons.goToForms()
       
    });
})