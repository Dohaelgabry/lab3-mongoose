const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);
const r_user = require("./Routes/r_User");
const r_todo = require("./Routes/r_Todo");

mongoose.connect("mongodb://localhost:27017/lab3-mongoose").then(() => {
  console.log("SDone");
});

app.use("/users", r_user);
app.use("/todos", r_todo);

app.listen(port, () => console.log(`listen on port ${port}!`));
