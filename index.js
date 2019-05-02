const server = require("./server.js");

const port = 4400;
server.listen(port, () => {
  console.log(`<------ this server is listening to ${port} ------>`);
});
