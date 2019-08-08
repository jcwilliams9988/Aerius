var express = require('express');
var app = express();
const nodemailer = require('nodemailer');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));



var http = require('http');
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./dist/aerius/');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/aerius/');
});



app.post('/send', (req, res) => {
    const output = `<span style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #7790a6;">

  <p style="color:#38d0f2;">You have a new appointment request</p>
    
    <dl>  
      <dd>Name: ${req.body.name}</dd>
      <dd>Subject: ${req.body.subject}</dd>
      <dd>Email: ${req.body.email}</dd>
      <dd>Phone: ${req.body.phone}</dd>
      <dd>date: ${req.body.date}</dd>
    </dl>
    <h3>Message</h3>
    <p>${req.body.message}</p>

 </span>
   
  `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.live.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'daiziehaze@hotmail.com', // generated ethereal user
            pass: 'Borgne6924!'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <daiziehaze@hotmail.com>', // sender address
        to: 'jeanellchrystale@gmail.com',// list of receivers
        subject: 'Appointment Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        console.log('Error detected!');
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.sendFile(__dirname + './dist/aerius/contact',{msg: 'Email has been sent'});
    });
});

app.get('*', function (req, res) {
    //console.log(req.url);

    fileServer.serve(req, res);
});

app.listen(3000, () => console.log('Server started...'));