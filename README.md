# egg-xtransit

[![NPM version][npm-image]][npm-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-xtransit.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-xtransit
[travis-image]: https://img.shields.io/travis/eggjs/egg-xtransit.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-xtransit
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-xtransit.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-xtransit?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-xtransit.svg?style=flat-square
[david-url]: https://david-dm.org/x-profiler/egg-xtransit
[snyk-image]: https://snyk.io/test/npm/egg-xtransit/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-xtransit
[download-image]: https://img.shields.io/npm/dm/egg-xtransit.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-xtransit

## Install

```bash
$ npm i --save egg-xtransit
```

## Usage

```js
// {app_root}/config/plugin.js
exports.xtransit = {
  enable: true,
  package: 'egg-xtransit',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.xtransit = {
  server: '<xtransit-server address>',
  appId: '<your appId>',
  appSecret: '<your appSecret>'
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/X-Profiler/egg-xtransit/issues).

## License

[BSD-2-Clause](LICENSE)
