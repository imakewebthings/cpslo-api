var mocha = require('mocha');
var app = require('../app');
var request = require('supertest')(app);

describe('CPSLO Catalog API', function() {
  describe('GET /courses/:id', function(done) {
    describe('with a valid id', function() {
      beforeEach(function() {
        this.response = request.get('/courses/csc-101');
      });

      it('200s', function(done) {
        this.response.expect(200, done);
      });

      it('returns the course object', function(done) {
        this.response.expect(function(res) {
          if (res.body['id'] !== 'csc-101') return 'id does not match';
        }).end(done);
      });
    });

    describe('with invalid id', function() {
      before(function() {
        this.response = request.get('/courses/csc-000');
      });

      it('404s', function(done) {
        this.response.expect(404, done);
      });
    });
  });
});
