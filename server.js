const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const withAuth = require('./middleware');
let ind = 100000;
const app = express();

const secret = 'Hackathon2019YoYoYo';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongo_uri = 'mongodb://localhost/react-auth';
mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/partner/:index", function(req,res){   
  User.findOne({
    index: req.params.index
  })
  .then(
    function(err,user) {
      if(err){
        res.send(err)
      }
      res.json(user)
    }
  )
});

app.get("/api/directory", function(req,res) {
  User.find()
  .then(
    function(err,user) {
      if(err){
        res.send(err);
      }
      res.json(user);
    }
  )
})
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/home', function (req, res) {
  res.send('Welcome!');
});

app.get('/api/secret', withAuth, function (req, res) {
  res.send('The password is potato');
});

app.get("/api/id/:email", function(req,res) {
  User.findOne({
    email: req.params.email
  })
  .then( function(err,index) {
    if(err) {
      res.send(err);
    }
    res.send(index)
  })
})

app.post("/api/review/:index", function(req,res) {
  const Person = User.findOne({index: req.params.index});
  const rater = Person.schema.obj.name;
  console.log("Person"+Person);
  console.log("rater"+rater);
  // .then((err,value) => {
  //   if(err){
  //     console.log(err)
  //   }
  //   console.log(value)
  //   return value;
  // })
  // });
  // const rating = {
  //   rater: rater,
  //   rating: req.body.rating,
  //   comment: req.body.review
  // }
  // console.log(rating);
  Person.ratings.push(rating).save();
  /*User.findOneAndUpdate({
    index: req.params.index
  },{
    "$push": rating
  }, {new: true, safe: true, upsert: true}).then((result) => {
    return res.status(200).json({
      status: "Success",
      message: "Resources Are Created Successfully",
      data: result
    })
  })*/
});

app.post('/api/register', function (req, res) {
  const { index,name,email, password } = req.body;
  const user = new User({
    index: ++ind,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  user.save(function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

app.post('/api/authenticate', function (req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

app.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});

app.listen(process.env.PORT || 8080);
