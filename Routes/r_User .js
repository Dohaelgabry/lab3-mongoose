const c_user = require("../Controllers/c_User");
const express = require("express");
const route = express.Router();

route.post("/users/register", async function (req, res) {
  if (
    req.body.username == "" ||
    req.body.password == "" ||
    req.body.firstName == ""
  ) {
    res.send("you must enter data");
  } else {
    let data = await c_user.create_user(req.body);
    res.send("user was registered successfully" + data);
  }
});

route.post("/users/login", async function (req, res) {
  if (req.body.username == c_user.get_name_todo.value) {
    res.send(`logged in successfully + ${get_name_todo.value}`);
  } else {
    res.status(401).send("error:invalid credentials");
  }
});

route.get("/users", async function (req, res) {
  let data = await c_user.get_first_name();
  res.send("Users first name : " + data);
});

route.delete("/:id", async function (req, res) {
  let data = await c_user.delete_user(req.params.id);
  res.send("Delete the user successfully:" + data);
});

route.patch("/:id", async function (req, res) {
  let data_update = await c_user.updated_user(req.params.id, req.body);
  res.send("user was edited successfully");
});

module.exports = route;
