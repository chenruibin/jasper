var gulp = require('gulp');
var gp_deploy = require('gulp-gh-pages');
var gp_copy = require('gulp-copy');

var options = {
}

gulp.task('copy', function (){
  return gulp.src('CNAME')
  .pipe(gp_copy('./_site/', options));
});

gulp.task('deploy', function () {
  return gulp.src('./_site/**/*')
  .pipe(gp_deploy(options));
});

gulp.task('default',['copy', 'deploy'] ,function () {
  console.log('default');
});
