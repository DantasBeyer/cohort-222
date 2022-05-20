const { Schema, model } = require("mongoose")

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			// unique: true -> Ideally, should be unique, but its up to you
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: Boolean,
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
)

const User = model("User", userSchema)

module.exports = User
