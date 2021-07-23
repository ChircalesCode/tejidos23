//const SERVER_PORT = 8000;
//const REFRESH_RATE = 25;

const MONGO_REPO = "Account";
//const express = require("express");
//const app = require("express")();
//const server = require("http").createServer(app);

const MongoClient = require("mongodb").MongoClient;
/*const assert = require("assert");

const url =
  "mongodb+srv://admin:alfredoiriarte@cluster0.plwuy.mongodb.net/videojuego?retryWrites=true&w=majority";
let dbo;
console.log("hola");
const client = new MongoClient(url, { useUnifiedTopology: true });

client.connect(function (err, db) {
  assert.equal(null, err);
  if (err) throw err;
  dbo = db.db("videojuego");
  dbo.createCollection(MONGO_REPO, function (err, res) {
    if (err) throw err;
    console.log("Colección fue creada");
  });
});
*/
