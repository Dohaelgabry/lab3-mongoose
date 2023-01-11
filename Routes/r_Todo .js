const c_todo = require("../Controllers/c_Todo");
const express = require("express");
const route = express.Router();

route.post("/toods", async function (req, res) {
  let data = await c_todo.Create_todo(req.body);
  res.send(data);
});

route.get("/todos/:userId", async function (req, res) {
  let data = await c_todo.get_todo(req.params.id);
  res.send(data);
});

route.patch("/todos/update/:id", async function (req, res) {
  let update = await c_todo.updated_todo(req.params.id, req.body);
  res.send(update);
});

route.delete("/todos/delete/:id", async function (req, res) {
  let data = await c_todo.delete_todo(req.params.id);
  res.send(data);
});

module.exports = route;
