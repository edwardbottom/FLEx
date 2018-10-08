const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'FLEx-password';

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

function encrypt(text)
{
  var cipher = crypto.createCipher(algorithm,password)
  var encrypted = cipher.update(text,'utf8','hex')
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(text)
{
  var decipher = crypto.createDecipher(algorithm,password)
  var decrypted = decipher.update(text,'hex','utf8')
  decrypted += decipher.final('utf8');
  return decrypted;
}

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

//hello world get request
var testCipher = encrypt('Hello World!')
//app.get('/', (req, res) => res.send(testCipher))
app.get('/', (req, res) => res.send(decrypt(testCipher)))


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
  const username_text=req.body.username;
  const password_guess=req.body.password;
  db.collection('UserProfile').find({user : username_text}).toArray(function (err, result) {
    if (err) throw err
      
    console.log(result)
    let salt = result[0].passwordData.salt;
    console.log("the salt is " + salt)
    let password_hash = result[0].passwordData.passwordHash;
    console.log("the password hash is " + password_hash);
    let password_guess_hash = sha512(password_guess, salt).passwordHash;
    console.log(password_guess_hash + " is the p word hash guess");
    //if login fails
    if(password_guess_hash != password_hash){
      console.log("login FAILED");
      let loginObject = new Object();
      loginObject.username = username_text;
      loginObject.status = "failed";
      res.send(loginObject)
    }
    //if login works
    console.log("LOGIN WORKED");
    let loginObject = new Object();
    loginObject.username = username_text;
    loginObject.status = "success";
    loginObject.isValidated = true;
    res.send(loginObject)

  })
})

app.post('/register',function(req,res){
  // const type = req.body.type;
  const first_name = req.body.first_name;
  const middle_name = req.body.middle_name;
  const last_name = req.body.last_name;
  const user_name = req.body.user_name;
  const password = req.body.password;
  const re_password = req.body.re_password;
  const email_address = req.body.email_address;
  const provider_id = req.body.provider_id;
  const therapist_id = req.body.therapist_id;
  const account_type = req.body.account_type;

  if(password != re_password){
    res.send("passwords dont match")
  }
  else{
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(password, salt);

    db.collection('UserProfile').insertOne(
    {
          user:user_name,
          passwordData:passwordData,
          first_name:first_name,
          middle_name:middle_name,
          last_name:last_name,
          email_address:email_address,
          provider_id:provider_id,
          therapist_id:therapist_id,
          account_type:account_type
      },
      //catch errors
      function (err, res) {
          if (err) {
            // db.close();
            res.send("it done fucked up")
          }
          // Success
          // db.close();  
      });
    res.send("this path works")
    }
})

app.post('/submitReport',function(req,res){
  // const type = req.body.type;
  const value = req.body.value;
  const reportText = req.body.reportText;
  const completedExercises = req.body.completedExercises;
  var today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const user = req.body.user;



    db.collection('Reports').insertOne(
    {
          user:user,
          value:value,
          reportText:reportText,
          completedExercises:completedExercises,
          date:date
      },
      //catch errors
      function (err, res) {
          if (err) {
            // db.close();
            res.send("it done fucked up")
          }
          // Success
          // db.close();  
      });
    res.send("this path works")
})