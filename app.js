'use strict';

const xprofiler = require('xprofiler');
const path = require('path');

class AppBootHook {
  constructor(app) {
    this.app = app;
    this.config = app.config;
  }

  configWillLoad() {
    // nodejs will handler absolute/relative
    let logDir = this.config.xtransit.logDir;
    logDir = path.resolve(this.config.logger.dir, logDir);
    this.config.xtransit.logDir = logDir;
  }

  configDidLoad() {
    xprofiler.start({
      log_dir: this.config.xtransit.logDir,
      log_interval: this.config.xtransit.logInterval,
    });
  }
}

module.exports = AppBootHook;
