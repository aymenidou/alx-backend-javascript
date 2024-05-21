const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the correct total for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleSpy);
  });

  it('should log the correct total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleSpy);
  });
});
