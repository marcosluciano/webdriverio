describe('My React Test', () => {
    it('should find moana', (done) => {
        browser.url('./');
        browser.setValue('#q', 'Moana');
        
    });
});
