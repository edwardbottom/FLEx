//nodejs dependencies and external libraries
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

//sample encrpytion of data
var testCipher = encrypt('Hello World!')



//gets the reports for the user home
app.post('/UserHome', function(req,res) {
  const username_text=req.body.username;
  //gets the report and send the reports to the user
  db.collection('Reports').find({user : username_text}).toArray(function (err, result) 
  {
    if (err) throw err
    const collator = new Intl.Collator('en', {numeric: true, sensitivity: 'base'})
    const sorted = result.sort((a,b) => collator.compare(b.date,a.date))
      res.send(sorted)
  });
});

//retreive a patients exercise plan
app.post('/exercisePlan', function(req,res) {
  const username_text=req.body.username;
  //query the database
  db.collection('ExercisePlans').find({user : username_text}).toArray(function (err, result) 
  {
    if (err) throw err
      
      res.send(result[0])
  });
});

//get the descriptions of each exercise
app.post('/exerciseDescriptions',function(req,res){
  //create a list to store exedrcise names
  var exerciseNames = []
  //query the database
  db.collection('Exercises').find({name : req.body.exercises.exercise}).toArray(function (err, result) 
  {
    if (err) throw err
    console.log(result[0].description + " is the result! (desc)")
    res.send(result[0])
  });
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
        	res.send("path is not valid")
      	}
      	// Success
      	db.close();  
    });
	res.send("this path works")
})

//veriffies if a login is valid
app.post('/login',function(req,res){
  //set user input to constants
  const username_text=req.body.username;
  const password_guess=req.body.password;

  //catch error if values are blank
  if(username_text == undefined || username_text == '' || password_guess == undefined){
    res.send("user not found");
  }

  //query the database
  db.collection('UserProfile').find({user : username_text}).toArray(function (err, result) {
    if (err) throw err
    
    //if the user does not exit
    if(result.length == 0){
      res.send("user not found");
    }
    //if the user exists
    else{
      let salt = result[0].passwordData.salt;
      let password_hash = result[0].passwordData.passwordHash;
      let password_guess_hash = sha512(password_guess, salt).passwordHash;
      //if the password is invalid
      if(password_guess_hash != password_hash){
        console.log("login FAILED");
        let loginObject = new Object();
        loginObject.username = username_text;
        loginObject.status = "failed";
        res.send("user not found")
      }
      //if the password is valid
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

//register an account
app.post('/register',function(req,res){
  //store user data
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

  //return false if any of the fields are blank
  if(password != re_password){
    res.send("passwords dont match")
  } else if (first_name == undefined || first_name == '')
  {
    res.send("Please enter a first name")
  } else if (middle_name == undefined || middle_name == '')
  {
    res.send("Please enter a middle name")
  } else if (last_name == undefined || last_name == '')
  {
    res.send("Please enter a last name")
  } else if (user_name == undefined || user_name == '')
  {
    res.send("Please enter a username")
  } else if (password == undefined || password == '')
  {
    res.send("Please enter a password")
  } else if (re_password == undefined || re_password == '')
  {
    res.send("Please enter your password a second time")
  } else if (email_address == undefined || email_address == '')
  {
    res.send("Please enter an email address")
  } else if (provider_id == undefined || provider_id == '')
  {
    res.send("Please enter a provider ID")
  } else if (therapist_id == undefined || therapist_id == '')
  {
    res.send("Please enter a therapist ID")
  } else if (account_type == undefined || account_type == '')
  {
    res.send("Please select an account type")
  }
  else{
    //ecrpyt the password
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(password, salt);

    //create user in database
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
          res.send(err)
          }  
      });
    res.send("success")
    }
})

//create a new exercise in the database
app.post('/createNewExercise',function(req,res){
    //store data
    const name = req.body.name;
    const description = req.body.description;
    const link = req.body.link;
    //send errors if values are null
    if(name == undefined || name == ''){
      res.send("Exercise name is blank");
    } else if(description == undefined || description == '')
    {
      res.send("Exercise description is blank");
    }
    //store the exercise in the database
    db.collection('Exercises').insertOne(
    {
        name:name,
        description:description,
        link:link
    },
    //catch errors
    function (err, res) {
        if (err) {
        res.send("broken path")
        }
    });
    res.send("success")  
})

//creates a new set for an exercise
app.post('/createNewExerciseSet',function(req,res){
    //store the values
    const id = req.body.id;
    const exercise = req.body.exercise;
    const repetitions = req.body.repetitions;
    const sets = req.body.sets;

    //store the values in the database
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
          
          res.send("broken path")
        }  
    });
    res.send("this path works")  
})

//delete an exercise from the database
app.post('/deleteExerciseSet',function(req,res){
    //store values
    const id = req.body.id;
    const exercise = req.body.exercise;
    const repetitions = req.body.repetitions;
    const sets = req.body.sets;

    //delete the value from the database
    db.collection('ExerciseSet').deleteOne(
    {
        "id":id
    },
    //catch errors
    function (err, res) {
        if (err) {
          res.send("broken path")
        } 
    });
    res.send("this path works")  
})

//submit a a patient report to the database
app.post('/submitReport',function(req,res){
  //store values
  const value = req.body.value;
  const reportText = req.body.reportText;
  const completedExercises = req.body.completedExercises;
  const date = req.body.date;
  const user = req.body.user;
  const exerciseOptions = req.body.exerciseOptions;
  var length;

  //find a report in the database
  db.collection('Reports').find({date: date, user:user}).toArray(function (err, result) {
    if (err){throw err}
    // console.log(result)
    else{
      if (result.length == 0){
    //insert a report in the database
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
            res.send("broken path")
          } 
      });
    res.send("1")
  }
  else{
    res.send("0")
  }
    }

  })
  
})

//submit an exercise plan for a patient
app.post('/submitExercisePlan',function(req,res){
  //store values in the database
  const user = req.body.user;
  const exercisePlan = req.body.exercisePlan;
  
  //store the plan in the database
  db.collection('ExercisePlans').insertOne(
    {
          user:user,
          text:exercisePlan.exercise + exercisePlan.repetitions + "x" + exercisePlan.sets,
          exercisePlan:exercisePlan
      },
  function (err, res) {
          if (err) {
            res.send("broken path")
          }
      });
    res.send("this path works")
})

//update a patients exercise plan
app.post('/updateExercisePlan',function(req,res){
  //store values
  const user = req.body.user;
  const exercisePlan = req.body.exercisePlan;
  
  //update the plan inthe database
  db.collection('ExercisePlans').update(
    {user:user},
    {
          user:user,
          exercisePlan:exercisePlan
    },
    //catch errors
  function (err, res) {
          if (err) {
            res.send("broken path")
          }
      });
    res.send("this path works")

})

//get all of a docctors patients
app.post('/getPatients',function(req,res){
  const doctorIdVal = req.body.doctorId;
  //query and return a list of patients
   db.collection('UserDescription').find({doctorID:doctorIdVal}).toArray(function (err, result) {
    if (err) throw err
    res.send(result);
  })
})

//get a users plan
app.post('/getPlan', function(req,res){
  const userVal = req.body.user;
  //get and send the users plan
  db.collection('ExercisePlans').find({user:userVal}).toArray(function (err, result) {
    if (err) throw err
    res.send(result);
  })
})

//get a doctors messages
app.post('/getMessages', function(req,res){
  const rec = req.body.rec;
  //retreived and send all of the users messages
  db.collection('Messages').find({receiver:rec}).toArray(function (err, result) {
    if (err) throw err
    res.send(result.reverse());
  })
})

//get a patients names from the database
app.post('/getPatientNames', function(req,res){
  const doctorIdVal = req.body.doctorId;
  var updates = [];
  let hasRun = false;
  //find and send the patient's profiles for a therapist
  db.collection('UserProfile').find({therapist_id:doctorIdVal}).toArray(function(err,result){
    if(err) throw err
      console.log("results sent");
      res.send(result);
  })
})

//get the updates for the doctor
app.post('/getDoctorUpdates', function(req,res){
  let patientNames = req.body.patientNames;

  //get all of the patients names
  for(let i = 0; i < patientNames.length; i++){
    patientNames[i] = patientNames[i].user;
  }

  let returnArray = [];
  //requery the reports and extract the patients updates
  db.collection('Reports').find().toArray(function (err, result) {
    if (err) throw err
    for(let i = 0; i < result.length; i++){
      if(patientNames.includes(result[i].user) && result[i].reportText !== ""){
        returnArray.push(result[i]);
      }
    }
    res.send(returnArray.reverse());
  })
})

//get the profile for a patient
app.post('/getProfile', function(req,res){
  const reqUser = req.body.reqUser;
  //query and send a patients profile
  db.collection('PatientProfile').find({'user':reqUser}).toArray(function (err, result) {
    if (err) throw err
    console.log(result[0])
    res.send(result[0]);
  })
})

//get all the exericses in the database
app.get('/getAllExercises', (req, res) =>{
  //query and send all exercises
  db.collection('Exercises').find().toArray(function (err, result) {
    if (err) throw err
    res.send(result);
  })
})

//send a message to a user
app.post('/sendMessage', function(req,res){
  //store values as consts
  const message = req.body.message;
  const sender = req.body.sender;
  const receiver = req.body.receiver;
  const id = genRandomString(30);

  //catch blank data in forms
  if (message == undefined || message == '')
  {
    res.send("Your message text is blank")
  } else if (receiver == undefined || receiver == '')
  {
    res.send("Your message recipient is blank")
  }

  //query the database
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
          res.send("failure");
        }
    });
    res.send("success");
})

//create a summary for a patient
app.post('/createSummary', function(req,res){
    //stores calues an consts
    const patient = req.body.patient;
    const username = req.body.username;
    const age = req.body.age;
    const height = req.body.height;
    const weight = req.body.weight;
    const injury = req.body.injury;
    const currentStatus = req.body.currentStatus;
    const averageStatus = req.body.averageStatus;
    const insuraceProvider = req.body.insuraceProvider;
    const contact = req.body.contact;
    const nextVisit = req.body.nextVisit;
    const variant = req.body.variant;
    const doctorID = req.body.doctorID;
    const accordionId = genRandomString(30);

    //catch an blank values
    if (patient == undefined || patient == '')
    {
      res.send('Please enter a patient name');
    } else if (age == undefined || age == '')
    {
      res.send('Please enter your age');
    } else if (height == undefined || height == '')
    {
      res.send('Please enter your height');
    } else if (weight == undefined || weight == '')
    {
      res.send('Please enter your weight');
    } else if (injury == undefined || injury == '')
    {
      res.send('Please enter your injury');
    } else if (currentStatus == undefined || currentStatus == '')
    {
      res.send('Please enter your current status');
    } else if (averageStatus == undefined || averageStatus == '')
    {
      res.send('Please enter your average status');
    } else if (insuraceProvider == undefined || insuraceProvider == '')
    {
      res.send('Please enter your insurance provider');
    } else if (contact == undefined || contact == '')
    {
      res.send('Please enter your emergency contact');
    } else if (nextVisit == undefined || nextVisit == '')
    {
      res.send('Please enter your next visit');
    } else if (doctorID == undefined || doctorID == '')
    {
      res.send('Please enter your doctor ID');
    }

    //insert object into the database
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

//update the patient profule
app.post('/updatePatientProfile', function(req,res){
  //store the object in the database
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
          res.send("broken path")
        }
    });
  res.send("success");
})

//get the patient summary
app.post('/getPatientSummary', function(req,res){
  const username = req.body.username;
  //query the database and send the result
  db.collection('UserDescription').find({'username':username}).toArray(function (err, result) {
    if (err) throw err
    console.log(result[0])
    res.send(result[0]);
  })
})

//update a patient summary
app.post('/updateSummary', function(req,res){
    //store the values as consts
    const patient = req.body.patient;
    const username = req.body.username;
    const age = req.body.age;
    const height = req.body.height;
    const weight = req.body.weight;
    const injury = req.body.injury;
    const currentStatus = req.body.currentStatus;
    const averageStatus = req.body.averageStatus;
    const insuraceProvider = req.body.insuraceProvider;
    const contact = req.body.contact;
    const nextVisit = req.body.nextVisit;
    const variant = req.body.variant;
    const doctorID = req.body.doctorID;
    const accordionId = genRandomString(30);

    //update the value in the database
    db.collection('UserDescription').update(
    {username:username},
    {
        patient:patient, 
        username:username, 
        age:age,
        height:height,
        weight:weight, 
        injury:injury,
        currentStatus:currentStatus,
        averageStatus:averageStatus,  
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

