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

//takes in text and encrpyts the message
function encrypt(text)
{
  var cipher = crypto.createCipher(algorithm,password)
  var encrypted = cipher.update(text,'utf8','hex')
  encrypted += cipher.final('hex');
  return encrypted;
}

//takes in text and decrypts the message
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
//app.get('/', (req, res) => res.send(decrypt(testCipher)))


app.post('/UserHome', function(req,res) {
  const username_text=req.body.username;
  // console.log(username_text + " is the username searched for")
  console.log(username_text)
  db.collection('Reports').find({user : username_text}).toArray(function (err, result) 
  {
    if (err) throw err
      const collator = new Intl.Collator('en', {numeric: true, sensitivity: 'base'})
    const sorted = result.sort((a,b) => collator.compare(b.date,a.date))
      console.log(sorted + " is the result")
      res.send(sorted)
  });
});

app.post('/exercisePlan', function(req,res) {
  const username_text=req.body.username;
  console.log(username_text + " is the username searched for")
  db.collection('ExercisePlans').find({user : username_text}).toArray(function (err, result) 
  {
    if (err) throw err
      
      console.log(result[0] + " is the result!!!!!")
      res.send(result[0])
  });
});

app.post('/exerciseDescriptions',function(req,res){
  console.log("MADESS" + JSON.stringify(req.body))
  console.log("MADESxx" + req.body.exercises.exercise)
  var exerciseNames = []

  console.log(req.body.exercises.exercise + "is the item")
  db.collection('Exercises').find({name : req.body.exercises.exercise}).toArray(function (err, result) 
  {
    if (err) throw err
    console.log(result[0].description + " is the result! (desc)")
    res.send(result[0])
  });
  
  // for(var i = 0; i <req.body.exercises.length; ++){
  //   exerciseNames.push(req.body.exercises[i].exercise)
  // }
  // var item = req.body.exercises[0].exercise
  // var stuff = db.collection('Exercises').find({
  //   exercise: item
  // })

  // res.send(stuff)
  // console.log("!!!" + exerciseDescriptions.length)
  // res.send(exerciseDescriptions)
})

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
  if(username_text == undefined || password_guess == undefined){
    res.send("user not found");
  }
  db.collection('UserProfile').find({user : username_text}).toArray(function (err, result) {
    if (err) throw err
    
    if(result.length == 0){
      res.send("user not found");
    }
    else{
      let salt = result[0].passwordData.salt;
      let password_hash = result[0].passwordData.passwordHash;
      let password_guess_hash = sha512(password_guess, salt).passwordHash;
      if(password_guess_hash != password_hash){
        console.log("login FAILED");
        let loginObject = new Object();
        loginObject.username = username_text;
        loginObject.status = "failed";
        res.send("user not found")
      }
      else{
        //if login works
        console.log("LOGIN WORKED");
        console.log(result.account_type + " is account type");
        let loginObject = new Object();
        loginObject.username = username_text;
        loginObject.status = "success";
        loginObject.isValidated = true;
        loginObject.accountType = result[0].account_type;
        loginObject.therapistId = result[0].therapist_id;
        loginObject.providerId = result[0].provider_id;
        res.send(loginObject)
      }
    }
  })
})

app.post('/register',function(req,res){
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

app.post('/createNewExercise',function(req,res){
    const name = req.body.name;
    const description = req.body.description;

    db.collection('Exercises').insertOne(
    {
        name:name,
        description:description
    },
    //catch errors
    function (err, res) {
        if (err) {
          // db.close();
          res.send("broken path")
        }
        // Success
        // db.close();  
    });
    res.send("this path works")  
})

app.post('/createNewExerciseSet',function(req,res){
    const id = req.body.id;
    const exercise = req.body.exercise;
    const repetitions = req.body.repetitions;
    const sets = req.body.sets;

    db.collection('ExerciseSet').insertOne(
    {
        id:id,
        exercise:exercise,
        repetitions:repetitions,
        sets:sets
    },
    //catch errors
    function (err, res) {
        if (err) {
          // db.close();
          res.send("broken path")
        }
        // Success
        // db.close();  
    });
    res.send("this path works")  
})

app.post('/deleteExerciseSet',function(req,res){
    const id = req.body.id;
    const exercise = req.body.exercise;
    const repetitions = req.body.repetitions;
    const sets = req.body.sets;

    db.collection('ExerciseSet').deleteOne(
    {
        "id":id
    },
    //catch errors
    function (err, res) {
        if (err) {
          // db.close();
          res.send("broken path")
        }
        // Success
        // db.close();  
    });
    res.send("this path works")  
})

app.post('/submitReport',function(req,res){
  const value = req.body.value;
  const reportText = req.body.reportText;
  const completedExercises = req.body.completedExercises;
  const date = req.body.date;
  const user = req.body.user;
  const exerciseOptions = req.body.exerciseOptions;
  var length;
  db.collection('Reports').find({date: date, user:user}).toArray(function (err, result) {
    if (err){throw err}
    // console.log(result)
    else{
      if (result.length == 0){
    db.collection('Reports').insertOne(
    {
          user:user,
          value:value,
          reportText:reportText,
          completedExercises:completedExercises,
          exerciseOptions:exerciseOptions,
          date:date
      },
      //catch errors
      function (err, res) {
          if (err) {
            // db.close();
            res.send("broken path")
          }
          // Success
          // db.close();  
      });
    console.log("sending success")
    res.send("1")
  }
  else{
    console.log("sending fail")
    res.send("0")
  }
    }

  })
  
})

app.post('/submitExercisePlan',function(req,res){
  const user = req.body.user;
  const exercisePlan = req.body.exercisePlan;
  // console.log(user)
  db.collection('ExercisePlans').insertOne(
    {
          user:user,
          text:exercisePlan.exercise + exercisePlan.repetitions + "x" + exercisePlan.sets,
          exercisePlan:exercisePlan
      },
  function (err, res) {
          if (err) {
            // db.close();
            res.send("broken path")
          }
          // Success
          // db.close();  
      });
    res.send("this path works")

})

app.post('/updateExercisePlan',function(req,res){
  const user = req.body.user;
  const exercisePlan = req.body.exercisePlan;
  // console.log(user)
  db.collection('ExercisePlans').update(
    {user:user},
    {
          user:user,
          exercisePlan:exercisePlan
    },
  function (err, res) {
          if (err) {
            // db.close();
            res.send("broken path")
          }
          // Success
          // db.close();  
      });
    res.send("this path works")

})

app.post('/getPatients',function(req,res){
  const doctorIdVal = req.body.doctorId;
   db.collection('UserDescription').find({doctorID:doctorIdVal}).toArray(function (err, result) {
    if (err) throw err
    // console.log(result)
    res.send(result);
  })
})

app.post('/getPlan', function(req,res){
  const userVal = req.body.user;
  db.collection('ExercisePlans').find({user:userVal}).toArray(function (err, result) {
    if (err) throw err
    // console.log(result)
    res.send(result);
  })
})

app.post('/getMessages', function(req,res){
  const rec = req.body.rec;
  db.collection('Messages').find({receiver:rec}).toArray(function (err, result) {
    if (err) throw err
    // console.log(result)
    res.send(result.reverse());
  })
})

//working
app.post('/getPatientNames', function(req,res){
  const doctorIdVal = req.body.doctorId;
  var updates = [];
  let hasRun = false;
  db.collection('UserProfile').find({therapist_id:doctorIdVal}).toArray(function(err,result){
    if(err) throw err
      console.log("results sent");
      res.send(result);
  })
})

app.post('/getDoctorUpdates', function(req,res){
  let patientNames = req.body.patientNames;
  console.log("the updates request was received and the patient names array is " + patientNames.toString())
  for(let i = 0; i < patientNames.length; i++){
    patientNames[i] = patientNames[i].user;
  }

  let returnArray = [];
  db.collection('Reports').find().toArray(function (err, result) {
    if (err) throw err
    for(let i = 0; i < result.length; i++){
      if(patientNames.includes(result[i].user) && result[i].reportText !== ""){
        returnArray.push(result[i]);
      }
    }
    res.send(returnArray.reverse());
  })

  //res.send("words");
})

app.post('/getProfile', function(req,res){
  const reqUser = req.body.reqUser;
  db.collection('PatientProfile').find({'user':reqUser}).toArray(function (err, result) {
    if (err) throw err
    console.log(result[0])
    res.send(result[0]);
  })
})

app.get('/getAllExercises', (req, res) =>{
  db.collection('Exercises').find().toArray(function (err, result) {
    if (err) throw err
    res.send(result);
  })
})

app.post('/sendMessage', function(req,res){
  const message = req.body.message;
  const sender = req.body.sender;
  const receiver = req.body.receiver;
  const id = genRandomString(30);

  console.log("send messaged reached");
  db.collection('Messages').insertOne(
    {
        message:message,
        sender:sender,
        receiver:receiver,
        id:id
    },
    //catch errors
    function (err, res) {
        if (err) {
          console.log("error reached")
          res.send("failure");
        }
    })
    res.send("success");

})

app.post('/createSummary', function(req,res){
    const patient = req.body.patient;
    const username = req.body.username;
    console.log("username is " + username)
    const age = req.body.age;
    const height = req.body.height;
    const weight = req.body.weight;
    const injury = req.body.injury;
    const currentStatus = req.body.currentStatus;
    const averageStatus = req.body.averageStatus;
    const lastUsed = req.body.lastUsed;
    const insuraceProvider = req.body.insuraceProvider;
    const contact = req.body.contact;
    const nextVisit = req.body.nextVisit;
    const variant = req.body.variant;
    const doctorID = req.body.doctorID;
    const accordionId = genRandomString(30);

    db.collection('UserDescription').insertOne(
    {
        patient:patient, 
        username:username, 
        age:age,
        height:height,
        weight:weight, 
        injury:injury,
        currentStatus:currentStatus,
        averageStatus:averageStatus, 
        lastUsed:lastUsed, 
        insuraceProvider:insuraceProvider, 
        contact:contact, 
        nextVisit:nextVisit, 
        variant:variant, 
        doctorID:doctorID,
        accordionId:accordionId
    },
    //catch errors
    function (err, res) {
        if (err) {
          res.send("broken path")
        }
    });
    res.send("success")  
})

app.post('/updatePatientProfile', function(req,res){
  console.log("request reached")
  console.log(req.body.user + " is the username");
  db.collection("PatientProfile").update(
   { user:req.body.user},
   {
      user: req.body.user,
      name: req.body.name,
      height: req.body.height,
      weight: req.body.weight,
      injury: req.body.injury,
      currentStatus: req.body.currentStatus,
      averageStatus: req.body.averageStatus,
      worstStatus: req.body.worstStatus,
      bestStatus: req.body.bestStatus,
      lastActive: req.body.lastActive,
      contact: req.body.contact,
      nextVisit: req.body.nextVisit,
      summary: req.body.summary
   },
   //catch errors
   function (err, res) {
        if (err) {
          console.log("error reached")
          res.send("broken path")
        }
    });
  console.log("success reached")
  res.send("success");
})

