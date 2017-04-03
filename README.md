# egg-qiniu

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-qiniu.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-qiniu
[travis-image]: https://img.shields.io/travis/JKShare/egg-qiniu.svg?style=flat-square
[travis-url]: https://travis-ci.org/JKShare/egg-qiniu
[codecov-image]: https://img.shields.io/codecov/c/github/JKShare/egg-qiniu.svg?style=flat-square
[codecov-url]: https://codecov.io/github/JKShare/egg-qiniu?branch=master
[david-image]: https://img.shields.io/david/JKShare/egg-qiniu.svg?style=flat-square
[david-url]: https://david-dm.org/JKShare/egg-qiniu
[snyk-image]: https://snyk.io/test/npm/egg-qiniu/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-qiniu
[download-image]: https://img.shields.io/npm/dm/egg-qiniu.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-qiniu

<!--
Description here.
-->

## Install

```bash
$ npm i egg-qiniu --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.qiniu = {
  enable: true,
  package: 'egg-qiniu',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.qiniu = {
  ak: '<Your Access Key>',
  sk: '<Your Access Key>',
  prefix: '<Key Prefix>',
  buckets: [{}]
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/JKShare/egg-qiniu/issues).

## License

[MIT](LICENSE)
