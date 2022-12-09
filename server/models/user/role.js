const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoleSchema = new Schema({
  title: String,
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
