import util from 'util';

describe('End-to-End Test Case Template (Version 0.3)', function () {
  before(async function () {
    this.timeout(100000);
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      if (global.currentStepInfo) {
        console.log(
          util.inspect(global.currentStepInfo, {
            colors: true,
            depth: null,
            showHidden: false,
          })
        );
      }
    }

    global.currentStepInfo = {};
  });

  require('./v1');

  after(function () {
  });
});
