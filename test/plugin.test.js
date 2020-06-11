'use strict';

const mock = require('egg-mock');

describe('test/plugin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'example',
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
