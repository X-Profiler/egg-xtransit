'use strict';

const xtransit = require('xtransit');
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

  didLoad() {
    const { xtransit: startConfig } = this.app.config;
    if (!startConfig.server || !startConfig.appId || !startConfig.appSecret) {
      this.app.logger.error('xtransit config error, server, appId, appSecret must be passed in.');
      return;
    }

    // start xtransit
    const config = Object.assign(startConfig, {
      logger: this.app.logger,
    });
    xtransit.start(config);
    this.app.logger.info('xtransit start.');
  }
}

module.exports = AgentBootHook;
