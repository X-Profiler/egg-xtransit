'use strict';

const mock = require('egg-mock');

describe('test/xtransit.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/xtransit-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, xtransit')
      .expect(200);
  });
});
