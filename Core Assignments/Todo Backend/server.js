const express = require("express");
const { validateTask } = require("./middleware/validateTask");
const { todos } = require("./todos");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    Tasks: todos,
  });
});

app.post("/add", validateTask, (req, res) => {
  const { task } = req.body;
  const newTodo = {
    id: todos.length + 1,
    task,
  };

  todos.push(newTodo);
  res.status(200).json({
    message: "Todo added successfully",
  });
});

app.put("/update/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const { task } = req.body;

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return res.status(404).json({
      error: "Todo not found",
    });
  }

  // modify todo..
  todo.task = task;
  res.status(200).json({
    message: "Todo updated successfully",
  });
});

app.delete("/delete/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({
      error: "Todo not found",
    });
  }

  // remove todo from todos
  todos.splice(todoIndex, 1);

  res.status(200).json({
    message: "Todo deleted successfully",
  });
});

// listen to the server
const port = 5555;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
