const express = require("express");
const app = express();
const { middlewares } = require("./middlewares");
const userHealth = require("./routes/bmiRoute");

// middleware
app.use(middlewares);

app.use("/", userHealth);

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

module.exports = app;
