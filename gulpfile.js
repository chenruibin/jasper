var gulp = require('gulp');
var gp_deploy = require('gulp-gh-pages');
var gp_copy = require('gulp-copy');
var gulp_sequence = require('gulp-sequence');

var options = {
}

gulp.task('copy', function (){
  return gulp.src('CNAME')
  .pipe(gp_copy('./_site/', options));
});

gulp.task('deploy', function () {
  return gulp.src(['./_site/**/*', '!./node_modules/**'])
  .pipe(gp_deploy(options));
});

gulp.task('default', function(cb) {
  console.log('default');
  gulp_sequence('copy', 'deploy', cb);
});
