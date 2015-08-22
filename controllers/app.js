var Router = require('koa-router');
var router = new Router();

router.get('/', function*(next){
  this.render('index');
});

module.exports = router;
