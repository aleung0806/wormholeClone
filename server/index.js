const app = require("./app");
const http = require("http");


const path = require('path');
require('dotenv').config({ path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`) });

const server = http.createServer(app);
const port = process.env.PORT;


server.listen(port, () => {
  console.log(`${process.env.NODE_ENV} mode. listening on port ${port}.`);
});
