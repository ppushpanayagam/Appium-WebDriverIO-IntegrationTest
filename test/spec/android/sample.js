describe('launch android app', ()=>{


    it.only('Find element by Accessibility ID', async ()=>{
        
        
        const appElement = await $('~App');
        await appElement.click();

        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })
    
    it('verify list view', async ()=>{

        const listofItems = await $$('~android.widget.TextView')
        for(let item of listofItems) {
            console.log(await item.getText());
        }

    })

    it('enter text', async()=>{

        const views = await $('~Views');
        const autoComplete = await $('~Auto Complete')
        const viewTop = await $('~1. Screen Top')
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')

        await views.click()
        await autoComplete.click()
        await viewTop.click()
        await textField.addValue('Canada')
        
        


    })
})