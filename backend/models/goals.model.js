const { Schema, model } = require('mongoose');

const goalSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'User' // referencing the name used in the model when the module is being exported
		},
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
