var Applicant = require('../models/applicant')

module.exports = {

	index: function(req, res){
		res.render('index');
	},

	applicant: function(req, res){
		Applicant.findOne({_id: req.params.id}, function(err, applicant){
			res.render('applicant', {applicant:applicant})
		})
	},

	applicants: function(req, res){
		Applicant.find({}, function(err, applicants){
			if (!err) {
				res.render('applicants', {applicants: applicants})
			}
			
		})
	},

	createApplication: function(req, res){
		var applicant = new Applicant(req.body)
		applicant.save()
		res.redirect('/form-submitted');
	},

	deleteApplicant: function(req, res){
		Applicant.remove({_id: req.params.id}, function(){
			res.redirect('/applicants')
		})
	},

	submitForm: function(req, res){
		res.render('form-submitted')
	}

}