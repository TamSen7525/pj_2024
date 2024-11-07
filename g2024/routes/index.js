var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница основной версии игры*/
router.get('/cyberpunk-2077', function(req, res, next) {
  res.send("<h1>Страница основной версии игры</h1>")
  });
  
/* Страница дополнения phantom liberty*/
router.get('/phantom-liberty', function(req, res, next) {
  res.send("<h1>Страница дополнения phantom liberty</h1>")
  });

  /* Страница сериала edgerunners*/
router.get('/edgerunners', function(req, res, next) {
  res.send("<h1>Страница сериала edgerunners</h1>")
  });

module.exports = router;
