var through = require('through2'),
    dss = require('dss');

var Plugin = function(opts) {
  var dssOutput;

  var bufferContents = function(file, enc, cb) {
    if(file.isNull()) {
      cb();
      return;
    }

    if(file.isStream()) {
      this.emit('error', new PluginError('gulp-dss-handelbars', 'Streaming is not supported'));
      cb();
      return;
    }

    console.log(file.path);
    dss.parse(file, {}, function(parsedContent){
      dssOutput = parsedContent;
      cb();
    });
  };

  var endStream = function(cb) {
    console.log(dssOutput);
    cb();
  };

  return through.obj(bufferContents, endStream);
};

module.exports = Plugin;
