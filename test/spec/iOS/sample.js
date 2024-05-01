describe('launch iOS app', ()=>{


    it('Find element by Accessibility ID', async ()=>{
        
        const appElement = await $('~App');
        await appElement.click();

        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })
    
})