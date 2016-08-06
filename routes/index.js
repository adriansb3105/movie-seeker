var express = require('express'),
	router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movie Seeker' });
});

/* GET info page */
router.get('/info', function(req, res, next){
	res.render('info');
});

router.get('/hola', function(req, res, next) {
  res.render('hola');
});

/* GET reset password page */
router.get('/reset_password', function(req, res, next){
	res.render('reset_password');
});

module.exports = router;