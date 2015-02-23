var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
mongoose.connect('mongodb://localhost/omega3')

var Applicant = mongoose.model('Applicant', {
	name: String,
	bio: String,
	skills: String,
	years: Number,
	why: String
})

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	Applicant.find({}, function(err, applicants){
		if (!err) {
			res.render('applicants', {applicants: applicants})
		}
		
	})
});

app.get('/form-submitted', function(req, res){
	res.render('form-submitted')
})

// creates and applicant
app.post('/applicant', function(req, res){
	var applicant = new Applicant(req.body)
	applicant.save()
	res.redirect('/form-submitted');

});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
