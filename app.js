var express = require('express');
var bodyParser = require('body-parser');
var Controller = require('./controllers/')
var Applicant = require('./models/applicant')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// home - application form
app.get('/', Controller.index);

// list of applicants
app.get('/applicants', Controller.applicants);

// remove applicant
app.get('/delete-applicant/:id', Controller.deleteApplicant)

// show a single applicant
app.get('/applicant/:id', Controller.applicant)

// submit application
app.post('/submit-application', Controller.submitApplication);

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
