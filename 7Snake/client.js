const net = require("net");
const { IP, PORT, NAME } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });


  conn.setEncoding("utf8"); // interpret incoming data as text

  //'connect' event is triggered as soon as connection with server is established
  conn.on("connect", () => {
    console.log("connected to snake server")
    conn.write(NAME); //send message to server
  });

  //data event is triggered when server sends data to client
  conn.on("data", (data) => {
    console.log(data)
  });

  return conn;
};

module.exports = { connect };