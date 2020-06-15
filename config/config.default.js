'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {};

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

    logDir: 'xprofiler',
    logInterval: undefined,
    docker: false,
    ipMode: false,
    libMode: true,
    errexp: /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/i,
    logger: undefined,
  };

  return config;
};
