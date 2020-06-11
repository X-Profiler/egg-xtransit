'use strict';

const fs = require('fs');
const path = require('path');

module.exports = appInfo => {
  const config = {};

  const appRoot = appInfo.env === 'local' || appInfo.env === 'unittest' ? appInfo.baseDir : appInfo.HOME;

  const logdir = path.join(appRoot, 'logs/xprofiler');
  if (!fs.existsSync(logdir)) {
    fs.mkdirSync(logdir, { recursive: true });
  }

  config.xtransit = {
    server: '',
    appId: '',
    appSecret: '',

    disks: [],
    errors: [
      path.join(appRoot, `logs/${appInfo.pkg.name}/common-error.log`),
      path.join(appRoot, 'logs/stderr.log'),
    ],
    packages: [
      path.join(appInfo.baseDir, 'package.json'),
    ],

    logdir,
    docker: false,
    ipMode: false,
    libMode: false,
    errexp: /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/i,
    logger: null,
    logLevel: 2,
  };

  return config;
};
