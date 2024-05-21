const request = require('request');
const { expect } = require('chai');
const server = require('./api');

const URL = 'http://localhost:7865';

describe('Index page', function () {
  after(function () {
    server.close();
  });

  it('Correct status code?', function (done) {
    request.get(URL, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', function (done) {
    request.get(URL, function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other?', function (done) {
    // Add other tests here if needed
    done();
  });
});
