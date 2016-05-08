var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var smtpConfig = {
    host: 'out.alice.it',
    port: 587,
    secure: false, // use SSL
    auth: {
        user: 'alessandrodionisi@alice.it',
        pass: 'romatre'
    }
};

var transporter = nodemailer.createTransport(smtpConfig);

exports.transporter = transporter;