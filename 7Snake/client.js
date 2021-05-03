const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });


  conn.setEncoding("utf8"); // interpret incoming data as text

  //'connect' event is triggered as soon as connection with server is established
  conn.on("connect", () => {
    console.log("connected to snake server")
    conn.write("Name: GSD"); //send message to server
  });

  //data event is triggered when server sends data to client
  conn.on("data", (data) => {
    console.log(data)
  });

  return conn;
};

module.exports = { connect };