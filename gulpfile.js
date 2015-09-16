var gulp = require('gulp'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync');

function clean() {
  return del.sync(['public']);
};

var publ1c = function(){
  gulp.src('./app/elements/**')
    .pipe(gulp.dest('./public/elements/'))
  gulp.src('./views/elements/**')
    .pipe(gulp.dest('./public/elements/'))
  gulp.src('./bower_components/**')
    .pipe(gulp.dest('./public/components/'))
  gulp.src('./styles/**')
    .pipe(gulp.dest('./public/styles/'))
  gulp.src('./images/**')
    .pipe(gulp.dest('./public/images/'))
};

gulp.task('dev', function () {
  nodemon({
    script: './server.js',
    ext: 'js json html jade css',
    env: {NODE_ENV: 'development'},
    ignore: [,'public/*', 'dist/*'],
    nodeArgs: ['--harmony']
  }).on('change', [], function(e){
    clean();
    publ1c();
  }).on('restart', function(e){
    console.log('Restart Trigger: ',e);
  });
});

gulp.task('default', function() {
  require('./server.js');
});
