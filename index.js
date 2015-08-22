var koa = require('koa'),
    serve = require('koa-static'),
    mount = require('koa-mount'),
    router = require('koa-router'),
    logger = require('koa-logger'),
    koaBody = require('koa-body'),
    jade = require('koa-jade'),
    app;

app = koa();

app.use(logger());

app.use(jade.middleware({
  viewPath: __dirname + '/views/',
  pretty: true,
  basedir: __dirname + '/views/'
}));
app.use(serve('./public/'));
app.use(koaBody());

app.use(router(app));
app.use(mount('/', require('./controllers/app.js').middleware()));

module.exports = app;
