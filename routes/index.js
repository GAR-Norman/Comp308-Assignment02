let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET products page. */
router.get('/projects', function(req, res, next) {
  res.render('Services', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

/* Sends User to the contact page if nav button is clicked
*/
router.get('/MyContact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});



module.exports = router;
