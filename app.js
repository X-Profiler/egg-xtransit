'use strict';

const xprofiler = require('xprofiler');

class AppBootHook {
  constructor(app) {
    this.app = app;
    this.config = app.config;
  }

  configDidLoad() {
    xprofiler.start({
      log_dir: this.config.xtransit.logdir,
    });
  }
}

module.exports = AppBootHook;
