const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

//set up cors requests
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//mongo credentials
const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://Ed:drowssap1@ds058739.mlab.com:58739/flex';
var db;

//connect to database and run app
mongodb.MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database.db('flex');
  console.log("Database connection ready");
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})


//hello world get request
app.get('/', (req, res) => res.send('Hello World!'))


//places a single json object in the database
app.get('/db', (req, res) =>{
	//insert a user into the databse
  	db.collection('Users').insertOne(
 	{
      	user:'name'
    },
    //catch errors
    function (err, res) {
      	if (err) {
        	db.close();
        	res.send("it done fucked up")
      	}
      	// Success
      	db.close();  
    });
	res.send("this path works")
})


app.post('/login',function(req,res){
  const user_name=req.body.user;
  const password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("login");
});

app.post('/register',function(req,res)){
  const type = req.body.type;
  const first_name = req.body.first_name;
  const middle_name = req.body.middle_name;
  const last_name = req.body.last_name;
  const user_name = req.body.user_name;
  const password = req.body.password;
  const re_password = req.body.re_password;
  const email_address = req.body.email_address;
  const provider_id = req.body.provider_id;
  const therapist_id = req.body.therapist_id;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
}