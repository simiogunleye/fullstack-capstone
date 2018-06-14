const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const {app, runServer, closeServer} = require('../server');
const expect = chai.expect;

describe('GET', function() {
	before(function() {
		return runServer();
	});
	after(function() {
		return closeServer();
	});

	it('should return html and a status of 200', function() {
		return chai.request(app)
		  	.get('/')
		  	.then(function(res) {
		   		expect(res).to.have.status(200);    // <= Test completes before this runs
	  	});		
	});	
});
	