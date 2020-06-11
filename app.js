'use strict';

const xprofiler = require('xprofiler');

class AgentBootHook {
  constructor(app) {
    this.app = app;
  }

  configDidLoad() {
    const { xtransit } = this.app.config;
    xprofiler.start({
      log_dir: xtransit.logdir,
    });
  }
}

module.exports = AgentBootHook;
