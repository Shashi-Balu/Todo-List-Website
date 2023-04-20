const Todo = require("../models/todo");

const todo_index = (req, res) => {
    Todo.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("todos/index", { title: "All Todos", todos: result });
        })
        .catch((err) => {
            console.log(err);
        });
};

const todo_details = (req, res) => {
    const id = req.params.id;
    Todo.findById(id)
        .then((result) => {
            res.render("todos/details", { todo: result, title: "Todo Description" });
        })
        .catch((err) => {
            res.status(404).render("404", { title: "No todo found" });
        });
};

const todo_create_get = (req, res) => {
    res.render("todos/create", { title: "New todo" });
};
const todo_create_post = (req, res) => {
    const todo = new Todo(req.body);
    todo.save()
        .then((result) => {
            console.log("time: ", result.createdAt);
            res.redirect("/todos");
        })
        .catch((err) => {
            console.log(err);
        });
};

const todo_delete = (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/todos" });
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    todo_index,
    todo_details,
    todo_create_get,
    todo_create_post,
    todo_delete,
};
