const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },

  title: { typeof: String, required: true, min: [5], max: [20], indexed: true },
  status: { typeof: String, optional: true, default: "to-do" },
  tags: { typeof: String, optional: true, max: [10] },
  createdAt: timeStamp,
});

const todo = mongoose.model("todos", todosSchema);
module.exports = todo;
