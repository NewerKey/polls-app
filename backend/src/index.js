const Express = require("express");

//Create express instance
const app = Express();

// Start server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
