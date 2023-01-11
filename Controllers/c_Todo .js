const m_Todo = require("../Models/m_Todo");

async function Create_todo(data) {
  let res = await m_Todo.create(data);
  return res;
}

async function get_todo(userId) {
  let res = await m_Todo.findOne({ _id: userId });
  return res;
}

async function delete_todo(title) {
  let delteled = await m_Todo.deleteOne({ _id: title });
  return delteled;
}

async function updated_todo(id, data) {
  let updated = await m_Todo.updateOne({ _id: id }, data);
  return updated;
}

module.exports = { Create_todo, get_todo, delete_todo, updated_todo };
