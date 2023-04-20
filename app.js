const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const motivationController = require("./controllers/motivationController");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

const dbURI = "mongodb+srv://user1:user1@todowebsite.qrz3hts.mongodb.net/TodoWebsite";
mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("connected to db"), app.listen(3000))
    .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    next();
});

app.get("/", (req, res) => res.redirect("/todos"));

app.get("/motivation", motivationController.getMotivation);

app.use("/todos", todoRoutes);

app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
