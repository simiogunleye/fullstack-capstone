const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const server = require('../server');



describe('GET', function() {
	it('should return html and a status of 200', function() {

		it('fails, as expected', function(done) { // <= Pass in done callback
		  chai.request('http://localhost:8080')
		  .get('/')
		  .end(function(err, res) {
		    expect(res).to.have.status(123);
		    done();                               // <= Call done to signal callback end
		  });
		});

		it('succeeds silently!', function() {   // <= No done callback
		  chai.request('http://localhost:8080')
		  .get('/')
		  .end(function(err, res) {
		    expect(res).to.have.status(200);    // <= Test completes before this runs
		  });
		});	
	});
});
	