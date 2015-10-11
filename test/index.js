console.log(__dirname);
var gsutil = require('gulp-util'),
    dss = require('../'),
    assert = require('stream-assert'),
    path = require('path'),
    gulp = require('gulp');

var fixtures = function (glob) { return path.join(__dirname, 'fixtures', glob); }

describe('gulp-dss-handlebars', function() {
 it('should be true', function(done) {
   gulp.src(fixtures('*'))
     .pipe(dss())
     .pipe(assert.end(done));
 });
});


