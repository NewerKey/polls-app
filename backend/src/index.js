const Express = require("express");

const setupMiddleware = require("./setup/middleware");

//Create express instance
const app = Express();

setupMiddleware(app);

// Start server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
