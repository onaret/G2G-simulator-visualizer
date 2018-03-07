var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/g2g-sim-visualizer', function(req, res, next) {
  res.render('index', { title: 'G2G - Manhattan plot visualizer' });
});

router.get('/g2g-sim-visual-izer', function(req, res, next) {
  res.redirect('/g2g-sim-visualizer');
});

router.get('/', function(req, res, next) {
  res.redirect('https://github.com/onaret');
});

module.exports = router;
