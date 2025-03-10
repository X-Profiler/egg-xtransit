# egg-xtransit

[![NPM version][npm-image]][npm-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![Codecov branch](https://img.shields.io/codecov/c/github/X-Profiler/egg-xtransit/master)](https://codecov.io/gh/X-Profiler/egg-xtransit/branch/master)
[![Continuous integration](https://github.com/X-Profiler/egg-xtransit/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/X-Profiler/egg-xtransit/actions/workflows/nodejs.yml?query=branch:master)

[npm-image]: https://img.shields.io/npm/v/egg-xtransit.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-xtransit
[snyk-image]: https://snyk.io/test/npm/egg-xtransit/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-xtransit
[download-image]: https://img.shields.io/npm/dm/egg-xtransit.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-xtransit

## Install

```bash
npm i --save egg-xtransit
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

## Contributors

[![Contributors](https://contrib.rocks/image?repo=X-Profiler/egg-xtransit)](https://github.com/X-Profiler/egg-xtransit/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).
