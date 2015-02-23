var express = require('express');
var bodyParser = require('body-parser');
var Controller = require('./controllers/')
var Applicant = require('./models/applicant')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', Controller.index);

// displays a list of applicants
app.get('/applicants', Controller.applicants);

app.get('/form-submitted', Controller.submitForm)

app.get('/delete-applicant/:id', Controller.deleteApplicant)

app.get('/applicant/:id', Controller.applicant)

// creates an applicant
app.post('/applicant', Controller.createApplication);

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
