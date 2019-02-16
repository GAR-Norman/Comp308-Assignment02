let express = require('express');
let router = express.Router();

/* Sends User to the home page if nav button is clicked
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Sends User to the about page if nav button is clicked
*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* Sends User to the projects page if nav button is clicked
*/
router.get('/projects', function(req, res, next) {
  res.render('Services', { title: 'Projects' });
});

/* Sends User to the services page if nav button is clicked
*/
router.get('/services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

/* Sends User to the contact page if nav button is clicked
*/
router.get('/MyContact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});



module.exports = router;
