var gulp = require('gulp'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload');

function clean() {
  return del.sync(['public']);
};

var publ1c = function(){
  gulp.src('./app/elements/**')
    .pipe(gulp.dest('./public/elements/'))
    .pipe(livereload());
  gulp.src('./views/elements/**')
    .pipe(gulp.dest('./public/elements/'))
    .pipe(livereload());
  gulp.src('./bower_components/**')
    .pipe(gulp.dest('./public/components/'))
    .pipe(livereload());
  gulp.src('./styles/**')
    .pipe(gulp.dest('./public/styles/'))
    .pipe(livereload());
  gulp.src('./images/**')
    .pipe(gulp.dest('./public/images/'))
    .pipe(livereload());
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
