var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send(
{
    approved:5,
    pending:10,
    declined:2
}
  )
});

module.exports = router;