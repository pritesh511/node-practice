// function num(x, y) {
//   console.log(x * y);
// }

// function message(name) {
//   console.log(name);
// }

// var number = "pritesh";

// module.exports.message = message;
// module.exports.num = num;
// module.exports.number = number;

// // console.log(module);

// const path = require("path");

// const pathObj = path.parse(__dirname);
// console.log(pathObj);

// const EventEmitter = require("events");

// class Logger extends EventEmitter {
//   massege() {
//     this.emit("msgLodded", { id: 1, url: "salescamp.app" });
//   }
// }
// // console.log(Logger);
// module.exports = Logger;

// const logger = require("./logger.js");

// console.log(logger.number);

// console.log(logger);

// message("print");

// console.log(module);

// const path = require("path");

// const pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require("os");

// var totalmemory = os.totalmem();
// var freememory = os.freemem();
// var uptime = os.uptime();

// console.log(totalmemory);
// console.log(freememory);
// console.log(uptime);

// const EventEmitter = require("events");
// const emmiter = new EventEmitter();

// const Logger = require("./logger");
// const logger = new Logger();

// // resiter evet
// logger.on("msgLodded", function (arg) {
//   console.log("event is lodded", arg);
// });

// logger.massege("msgLodded");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("hello request");
//     res.end();
//   }

//   if (req.url === "/api") {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });
// server.listen(4000);
// console.log("poarting 4000...");

// const express = require("express");
// const app = new express();

// const course = [
//   { id: 1, name: "pritesh" },
//   { id: 2, name: "Dako" },
//   { id: 3, name: "sapo" },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello Pritesh");
//   console.log(req.body);
// });

// app.get("/api", (req, res) => {
//   res.send(course);
//   console.log(req.body.name);
// });

// // app.get("/api/:id", (req, res) => {
// //   const courceId = course.find((c) => c.id === parseInt(req.params.id));
// //   if (!courceId) res.status(404).send("Id Not found");
// //   res.send(courceId);
// // });

// app.listen(3000, () => console.log("port 3000"));

// var http = require("http");
// var url = require("url");

// http
//   .createServer(function (req, res) {
//     /*Use the url module to turn the querystring into an object:*/
//     var q = url.parse(req.url, true).query;
//     console.log(q);
//     /*Return the year and month from the query object:*/
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(3000);
