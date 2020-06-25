'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  test: [
    'test',
    'benchmark',
  ],
  dep: [
    'xprofiler',
    'xtransit'
  ],
  devdep: [
    'assert-file',
    'autod',
    'autod-egg',
    'egg',
    'egg-bin',
    'egg-ci',
    'egg-mock',
    'eslint',
    'eslint-config-egg',
  ],
  exclude: [
    './test/fixtures',
    './docs',
    './coverage',
  ],
};
