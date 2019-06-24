var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Success Soft' });
});

router.get('/about', function(req, res, next) {
	res.render('about', { title: 'Success Soft' });
});

router.get('/clients', function(req, res, next) {
	res.render('clients', { title: 'Success Soft' });
});

router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'Success Soft' });
});

router.post('/', function(req, res, next) {
	res.render('index', { title: 'Success Soft' });
});

module.exports = router;
