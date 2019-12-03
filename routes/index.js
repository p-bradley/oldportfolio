var express = require('express');
var router = express.Router();
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

module.exports = router;
