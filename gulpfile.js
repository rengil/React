var gulp         = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel        = require('gulp-babel');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var eslint       = require('gulp-eslint');
var filter       = require('gulp-filter');
var newer        = require('gulp-newer');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var reload       = browserSync.reload;
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var del = require('del');
var symlink = require('gulp-sym');
var less = require('gulp-less');
var fs = require('fs');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var bundler = browserify('lib/js/main.js');
bundler.transform(babelify);

bundler.bundle()
    .on('error', function (err) { console.error(err); })
    .pipe(fs.createWriteStream('bundle.js'));

var onError = function (err) {
  notify.onError({
    title:    'Error',
    message:  '<%= error %>',
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

var jsFiles = {
  vendor: [

  ],
  source: [
    'lib/js/src/components/Dashboard.jsx',
    'lib/js/src/components/LastSearchs.jsx',
  ]
};

gulp.task('eslint', function () {
  return gulp.src(jsFiles.source)
    .pipe(eslint({
      baseConfig: {
        ecmaFeatures: {
           jsx: true
         }
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('copying-react', function () {
  return gulp.src('node_modules/react/dist/react.js')
         .pipe(newer('public/js/src/vendor/react.js'))
         .pipe(gulp.dest('public/js/src/vendor'));
});

gulp.task('copy-react-dom', function () {
  return gulp.src('node_modules/react-dom/dist/react-dom.js')
    .pipe(newer('public/js/src/vendor/react-dom.js'))
    .pipe(gulp.dest('public/js/src/vendor'));
});

gulp.task('getting-vendors', function () {
  return gulp
    .src([
      'public/js/src/vendor/react.js',
      'public/js/src/vendor/react-dom.js',
    ])
    .pipe(gulp.dest('public/js'));
});

gulp.task('del_babel', function () {
  del(['node_modules/semantic-ui-less/theme.config', 'node_modules/semantic-ui-less/site']);
});

gulp.task('concat-js', ['copying-react', 'copy-react-dom', 'del_babel'], function () {
  return browserify({entries: jsFiles.vendor.concat(jsFiles.source),
                    extensions: ['.jsx'],
                  })
       .transform(babelify,  {presets: ['react']})
       .bundle()
       .pipe(source('./app.js'))
       .pipe(gulp.dest('public/js'));
});

// BrowserSync
gulp.task('browsersync', function () {
  browserSync({
    server: {
      baseDir: './'
    },
    open: false,
    online: false,
    notify: false,
  });
});

gulp.task('copySemanticThemes', function () {
  return gulp.src('./node_modules/semantic-ui-less/themes/**')
  .pipe(gulp.dest('public/themes'));
});

gulp.task('remove-symlink', function () {
  del(['node_modules/semantic-ui-less/theme.config', 'node_modules/semantic-ui-less/site']);
});

gulp.task('semantic-symlink', function () {
  gulp.src(['lib/css/semantic-ui/theme.config', 'lib/css/semantic-ui/site'])
    .pipe(symlink(['node_modules/semantic-ui-less/theme.config',
                   'node_modules/semantic-ui-less/site']));
});

gulp.task('createCss', function () {
  return gulp.src(['./lib/css/main.less', './lib/css/general.less', './lib/css/**/*.css'])
    .pipe(less())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./public/css'));
});

// Watch JS/JSX and Sass files
gulp.task('watch', function () {
  gulp.watch('lib/js/src/**/*.{js,jsx}', ['concat-js']);
});

gulp.task('css', ['copySemanticThemes', 'remove-symlink', 'semantic-symlink', 'createCss']);
gulp.task('build', ['getting-vendors', 'concat-js']);
gulp.task('default', ['css', 'build', 'browsersync', 'watch']);
