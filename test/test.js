describe('My React Test', () => {
  beforeEach(() => {
    browser.url('./');
    browser.waitForText('[data-reactroot]');
  })

  it('should find moana', () => {
    browser.setValue('#q', 'moana');

    browser.waitForText('.tt-dropdown-menu');

    browser.keys('Down arrow');
    browser.keys('Enter');

    browser.pause(500);

    let pageHeading = browser.getText('h1');
    
    expect(pageHeading).toBe('MOANA');
    expect(browser.getText('.tagline')).toBe('The ocean is calling.');
  })
})
