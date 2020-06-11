'use strict';

const xtransit = require('xtransit');
const xprofiler = require('xprofiler');
const assert = require('assert');
const path = require('path');
const fs = require('fs');

class AgentBootHook {
  constructor(agent) {
    this.agent = agent;
    this.config = agent.config;

    this.logger = {};
    for (const method of [ 'info', 'warn', 'error', 'debug' ]) {
      this.logger[method] = (message, ...args) => {
        agent.logger[method](`[xtransit] ${message}`, ...args);
      };
    }
  }

  configWillLoad() {
    // nodejs will handler absolute/relative
    let logDir = this.config.xtransit.logDir;
    logDir = path.resolve(this.config.logger.dir, logDir);
    this.config.xtransit.logDir = logDir;

    /* istanbul ignore next */
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  configDidLoad() {
    xprofiler.start({
      log_dir: this.config.xtransit.logDir,
      log_interval: this.config.xtransit.logInterval,
    });
  }

  async didLoad() {
    const { server, appId, appSecret } = this.config.xtransit;
    assert(server && appId && appSecret, 'xtransit config error, server, appId, appSecret must be passed in.');

    // start xtransit
    xtransit.start({
      logger: this.logger,
      logdir: this.config.xtransit.logDir,
      ...this.config.xtransit,
    });
    this.logger.info('xtransit start.');
  }
}

module.exports = AgentBootHook;
