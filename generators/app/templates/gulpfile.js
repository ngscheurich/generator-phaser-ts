const gulp       = require('gulp');
const concat     = require('gulp-concat');
const git        = require('gulp-git');
const livereload = require('gulp-livereload');
const rename     = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const ts         = require('gulp-typescript');
const tslint     = require('gulp-tslint');
const uglify     = require('gulp-uglify');

const tsProject = ts.createProject('./tsconfig.json');

gulp.task('lint', () => {
  tsProject.src()
    .pipe(tslint({ formatter: 'verbose' }))
    .pipe(tslint.report({ emitError: true }));
});

gulp.task('build', ['lint'], () => {
  const tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(gulp.dest('.build'));
    livereload();
});

gulp.task('bundle', ['build'], () => {
  return gulp.src([
    'lib/phaser.js',
    '.build/**/!(app).js',
    '.build/app.js'
  ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('compress', ['bundle'], () => {
  return gulp.src('public/js/bundle.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['bundle'], () => {
    livereload.listen();
    gulp.watch(['src/**/*.ts', 'tsconfig.json'], ['bundle']);
});

gulp.task('deploy', ['compress'], () => {
  git.push('heroku', 'master', (err) => { if (err) throw err; });
});

gulp.task('default', ['bundle']);
