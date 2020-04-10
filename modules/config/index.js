
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jay:upforce123@cluster0-nppmy.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(">>>>>>>> MongoDB Connected : ", client.isConnected(), err);
  // client.close();
});

module.exports = client;
