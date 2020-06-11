'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
  const config = {};

  const logdir = path.join(appInfo.root, 'logs/xprofiler');
  if (!fs.existsSync(logdir)) {
    fs.mkdirSync(logdir, { recursive: true });
  }

  config.xtransit = {
    server: '',
    appId: '',
    appSecret: '',

    disks: [],
    errors: [
      path.join(appInfo.root, `logs/${appInfo.pkg.name}/common-error.log`),
      path.join(appInfo.root, 'logs/stderr.log'),
    ],
    packages: [
      path.join(appInfo.baseDir, 'package.json'),
    ],

    logdir,
    docker: false,
    ipMode: false,
    libMode: false,
    errexp: /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/i,
    logger: undefined,
    logLevel: 2,
  };

  return config;
};
