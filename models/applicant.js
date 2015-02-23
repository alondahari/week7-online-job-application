var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/omega3')

module.exports = mongoose.model('Applicant', {
	name: String,
	bio: String,
	skills: String,
	years: Number,
	why: String
})