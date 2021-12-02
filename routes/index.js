var express = require('express'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'URL Filter' });
});

router.post('/filter', function(req, res, next) {

  // call filter and return output
  const filter = require('../src/filterByTerm');
  const searchTerm = req.body.filterTerm;
  const inputURLArray = req.body.inputURLs.split('\r\n');
  let finalURLArray = [];

  // Build the array of objects
  inputURLArray.forEach(element => {
    let item = { url: element };
    finalURLArray.push(item);
  });

  res.render('index', { urls: filter.filterByTerm(finalURLArray, searchTerm), title: 'URL Filter' });
});

module.exports = router;
