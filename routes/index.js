var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/gullmarsfrisorerna', function(req, res){
	res.render('gullmars', {title: 'gullmarsfrisorerna'});
});

module.exports = router;
