const { Schema, model } = require('mongoose');

const goalSchema = new Schema(
	{
		text: {
			type: String,
			required: [ true, 'please add a text value' ]
		}
	},
	{
		timestamps: true
	}
);

module.exports = model('Goal', goalSchema);
