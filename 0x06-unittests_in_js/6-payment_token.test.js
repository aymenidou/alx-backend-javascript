const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepStrictEqual(response, {
          data: 'Successful response from the API',
        });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should reject with an error when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Promise should have been rejected'));
      })
      .catch((error) => {
        assert.strictEqual(error.message, 'API call failed');
        done();
      });
  });
});
