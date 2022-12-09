const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: String,
  name: [firstName, LastName],
  email: {
    type: String,
    lowercase: true,
    unique: [true, "Your e-mail already existed"],
    require: true,
  },
  profilePicture: {
    data: Buffer,
    type: String,
  },
  defaultBillable: Number,
  role: [{ type: Schema.Types.ObjectId, ref: "Role" }],
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
});

module.exports = mongoose.model("User", UserSchema);
