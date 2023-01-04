const express = require("express");
const app = express();

const data = {
  todos: [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "MAMA GONNA BUY YOU A MOCKINGBIRD",
    "UCAN AT",
  ],
}

app.use(express.urlencoded());
app.use(express.json())
app.get("/todos", (req, res) => {
  // Set the "Content-Type" header to "application/json"
  res.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });

  // Send a response with a JSON object containing information about two books
  res.send(data);
});

app.post("/todos", (req, res) => {
  data.todos.push(req.body.todo);
  res.redirect("http://127.0.0.1:5500/index.html");
});

app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
