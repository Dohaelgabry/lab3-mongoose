const m_user = require("../Models/m_User");

async function create_user(data) {
  let res = await m_user.create(data);
  return res;
}

async function get_name_todo() {
  let res = await m_user.find({}, { firstName: 1, _id: 1 });
  return res;
}

async function get_first_name() {
  let res = await m_user.find({}, { firstName: 1, _id: 0 });
  return res;
}

async function delete_user(id) {
  let delteled = await m_user.deleteOne({ _id: id });
  return delteled;
}

async function updated_user(id, data) {
  let updated = await m_user.updateOne({ _id: id }, data);
  return updated;
}

module.exports = {
  create_user,
  get_name_todo,
  get_first_name,
  delete_user,
  updated_user,
};
