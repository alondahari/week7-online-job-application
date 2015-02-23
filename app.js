var express = require('express');
var bodyParser = require('body-parser');

var Applicant = require('./models/applicant')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());



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

app.get('/delete-applicant/:id', function(req, res){
	Applicant.remove({_id: req.params.id}, function(){
		res.redirect('/applicants')
	})
})

app.get('/applicant/:id', function(req, res){
	Applicant.findOne({_id: req.params.id}, function(err, applicant){
		console.log(applicant);
		res.render('applicant', {applicant:applicant})

	})

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
