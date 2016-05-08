var mailer = require('./mail.js');

var fs = require('fs');

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'alessandrodionisi@alice.it', // sender address
    to: 'alessandrodionisi@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

describe('angularjs homepage todo list', function () {
    it('should add a todo', function (done) {

        browser.ignoreSynchronization = true;  // or false
        browser.get('https://www.poslazio.it/');
        element(by.css('#username')).sendKeys('cecchisandrone');
        element(by.css('#password')).sendKeys('FK2w6kL7Wl');
        element(by.css('#loginFormBean > p:nth-child(4) > input')).click();
        element(by.css('#boxServizi > div > ul:nth-child(4) > li:nth-child(1) > div > a')).click();
        element(by.css('#center > div > ul:nth-child(14) > li > a')).click();
        browser.get('https://www.poslazio.it/xservlet/scelta');
        // Change frame
        browser.switchTo().frame(browser.driver.findElement(protractor.By.xpath('/html/frameset/frame[2]')));
        element(by.partialLinkText('DI MUZIO')).element(by.xpath('..')).getOuterHtml().then(function (text) {

            // within a test:
            browser.takeScreenshot().then(function (data) {

                mailOptions.attachments = [
                    {   // binary buffer as an attachment
                        filename: 'screenshot.png',
                        content: new Buffer(data, 'base64')
                    }];

                if (text.indexOf("Supera limite del numero assistiti") >= 0) {
                    console.log("Medico occupato");
                    mailOptions.subject = "Medico occupato";
                    mailOptions.text = "Medico occupato";
                    mailOptions.html = "Medico occupato";
                    done();
                } else {
                    console.log("Medico libero");
                    mailOptions.subject = "Medico libero";
                    mailOptions.text = "Medico libero";
                    mailOptions.html = "Medico libero";
                    mailer.transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error);
                        }
                        console.log('Message sent: ' + info.response);
                        done();
                    });
                }
            });
        });
    });
});