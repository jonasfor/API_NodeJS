const mongoose = require('mongoose')

const uri ="mongodb://testapi:test4521@cluster0-shard-00-00-0fzsd.mongodb.net:27017,cluster0-shard-00-01-0fzsd.mongodb.net:27017,cluster0-shard-00-02-0fzsd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(uri,  { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected");
});

module.exports = mongoose;

