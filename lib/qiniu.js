/**
 * Created by jks on 2017/4/3.
 */
'use strict';

const assert = require('assert');
const qiniu = require('co-qiniu');

module.exports = app => {
  const config = app.config.qiniu;
  assert(config.ak, '[egg-qiniu] ak is required on config');
  app.coreLogger.info('[egg-qiniu] init %s', config.ak);
  
  qiniu.config({
    ACCESS_KEY: config.ak,
    SECRET_KEY: config.sk
  });
  
  const qn = app.qiniu = qiniu;
  
  app.beforeStart(function*() {
    app.coreLogger.info('[egg-qiniu] starting...');
  });
  
  return qn;
};