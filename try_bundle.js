'use strict';

var Builder = require('systemjs-builder');

var builder = new Builder('./', './config.js');

builder.buildStatic('./src/app.js', './dist-sfx/app.js', {
  'sourceMaps': true,
  'sourceMapContents': true
});

builder.bundle('./src/app.js', './dist-regular/app.js', {
  'sourceMaps': true,
  'sourceMapContents': true
});
