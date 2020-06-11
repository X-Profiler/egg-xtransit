'use strict';

const xtransit = require('xtransit');
const xprofiler = require('xprofiler');
const assert = require('assert');

class AgentBootHook {
  constructor(agent) {
    this.agent = agent;
    this.config = agent.config;
    this.logger = agent.coreLogger;
  }

  configDidLoad() {
    xprofiler.start({
      log_dir: this.config.logdir,
    });
  }

  didLoad() {
    const { server, appId, appSecret } = this.config.xtransit;
    assert(server && appId && appSecret, 'xtransit config error, server, appId, appSecret must be passed in.');

    // start xtransit
    xtransit.start({
      logger: this.logger,
      ...this.config.xtransit,
    });
    this.logger.info('xtransit start.');
  }
}

module.exports = AgentBootHook;
