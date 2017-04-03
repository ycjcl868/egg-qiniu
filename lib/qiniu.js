/**
 * Created by jks on 2017/4/3.
 */
'use strict';

const assert = require('assert');
const qiniu = require('co-qiniu');

module.exports = app => {
  app.addSingleton('qiniu', createQiniu);
};

function createQiniu(config, app) {
  assert(config.ak, '[egg-qiniu] ak is required on config');
  app.coreLogger.info('[egg-qiniu] init %s', config.ak);
  
  qiniu.config({
    ACCESS_KEY: config.ak,
    SECRET_KEY: config.sk
  });
  
  return qiniu;
}