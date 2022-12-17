const mongoose = require("mongoose");
const { Schema } = mongoose;

const ActivitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  client: { type: Schema.Types.ObjectId, ref: "Client" },
  project: { type: Schema.Types.ObjectId, ref: "Project" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  tags: { type: Schema.Types.ObjectId, ref: "Tags" },
  date: { type: Date, require: true },
  activity: { type: text },
  timeStart: { type: Number, require: true },
  timeEnd: { type: Number, require: true },
  timeRange: { type: Number, require: true },
  billable: { type: Boolean, require: true },
});
module.exports = mongoose.model("Activity", ActvitiySchema);
