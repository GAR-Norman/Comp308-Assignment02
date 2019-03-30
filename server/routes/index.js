let express = require('express');
let router = express.Router();

//Controller
let indexController = require('../controllers/index');

/* Sends User to the home page if nav button is clicked
 */
//router.get('/', indexController.displayHomePage);

/* Sends User to the about page if nav button is clicked
 */
//router.get('/about', indexController.displayAboutPage);

/* Sends User to the projects page if nav button is clicked
 */
//router.get('/projects', indexController.displayProjectsPage);

/* Sends User to the services page if nav button is clicked
 */
//router.get('/services', indexController.displayServicesPage);

/* Sends User to the contact page if nav button is clicked
 */
//router.get('/MyContact', indexController.displayContactsPage);

/* GET - displays the Login Page */
//router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;