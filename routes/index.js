var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sql = require('../utils/sql');

router.get('/', function(req, res) {
  let query = "SELECT * FROM tbl_home";
  
  sql.query(query, (err, result) => {
    if (err) { throw err; console.log(err); }
  
    res.render('index', { skill: result});
  })
  });

router.get('/about', function(req, res) {
let query = "SELECT Service FROM tbl_info";

sql.query(query, (err, result) => {
  if (err) { throw err; console.log(err); }

  res.render('about', { Services: result});
})
});


router.get('/projects', (req, res) => {
  console.log('at the main route');

  let query = "SELECT * FROM tbl_projects";

  sql.query(query, (err, result) => {
      if (err) { throw err; console.log(err); }

      res.render('projects', { project: result }); 
  })
})

router.get('/project/:id', (req, res) => {
  let query = `SELECT * FROM tbl_project_specific WHERE projID="${req.params.id}"`;

  sql.query(query, (err, result) => {
    if (err) { throw err; console.log(err);}
    console.log(result);

    res.json(result[0]);
    //renders the view with the dynamic data
  })
})

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Express' });
});

router.post('/send', (req, res) => {
  console.log(req.body);
  const output =` 
  <p>New: Email</p>
  <h3>Details</h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  <li>Subject: ${req.body.subject}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</li>
  `

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'pbradleyFanshaweC@gmail.com',
        pass: 'portfolio'  
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  let mailOptions = {
      from: '"New Email" pbradleyFanshaweC@gmail.com', 
      to: 'wpatrickbradley99@gmail.com',
      subject: 'Notification',
      text: 'Hello world?',
      html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {message:'Thank you for contacting me, I will reply shortly!'});
  });

});

module.exports = router;
