describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization=true;  // or false
    browser.get('https://www.poslazio.it/');
    element(by.css('#username')).sendKeys('cecchisandrone');
    element(by.css('#password')).sendKeys('FK2w6kL7Wl');
    element(by.css('#loginFormBean > p:nth-child(4) > input')).click();
    element(by.css('#boxServizi > div > ul:nth-child(4) > li:nth-child(1) > div > a')).click();
    element(by.css('#center > div > ul:nth-child(14) > li > a')).click();    
    browser.get('https://www.poslazio.it/xservlet/scelta');
    var elem = element(by.css('body > center > table > tbody'));    
    browser.pause();
    expect(element(by.linkText('DI MUZIO FLAVIO')).getTagName()).toBe('a');
    console.log("asd");
  });
});