const gulp       = require('gulp');
const concat     = require('gulp-concat');
const git        = require('gulp-git');
const rename     = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const ts         = require('gulp-typescript');
const tslint     = require('gulp-tslint');
const uglify     = require('gulp-uglify');

const tsProject = ts.createProject('./tsconfig.json');

gulp.task('lint', () => {
  tsProject.src()
    .pipe(tslint({ formatter: 'verbose' }))
    .pipe(tslint.report({ emitError: false }));
});

gulp.task('build', ['lint'], () => {
  const tsResult = tsProject.src()
          .pipe(sourcemaps.init())
          .pipe(ts(tsProject));
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle', () => {
  return gulp.src(['./build/*.js', './lib/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('compress', () => {
  return gulp.src('./dist/bundle.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build', 'bundle']);

gulp.task('watch', ['default'], () => {
  gulp.watch(['./src/**/*.ts', './tsconfig.json'], ['build']);
  gulp.watch(['./build/*.js', './lib/**/*.js'], ['bundle']);
});

gulp.task('deploy', ['default', 'compress'], () => {
  git.push('heroku', 'master', (err) => { if (err) throw err; });
});
