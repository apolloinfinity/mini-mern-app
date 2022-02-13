const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		name: {
			type: String,
			require: [ true, 'Please add a name' ]
		},
		email: {
			type: String,
			require: [ true, 'Please add a email' ],
			unique: true
		},
		password: {
			type: String,
			require: [ true, 'Please add a password' ]
		}
	},
	{ timestamps: true }
);

module.exports = model('User', userSchema);
