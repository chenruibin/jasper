var gulp = require('gulp');
var gp_deploy = require('gulp-gh-pages');

var options = {
}

gulp.task('copy', function (){
  return gulp.src(sourceFiles)
  .pipe($.copy(outputPath, options));
});

gulp.task('deploy', function () {
  return gulp.src('./_site/**/*')
  .pipe(gp_deploy(options));
});

gulp.task('default',['deploy'] ,function () {
  console.log('default');
});
