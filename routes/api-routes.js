/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = (app) => {

  // function to delete the display of the password and ThemeId
  const delPass = (val) => {
    delete val.dataValues.password;
    // delete val.dataValues.ThemeId;
    return val;
  };

  // function to delete the display of the password and ThemeId when associated table
  const delPass2 = (val) => {
    delete val.dataValues.User.dataValues.password;
    delete val.dataValues.User.dataValues.ThemeId;
    return val;
  };

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page. Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login"); // Temporary Redirect status
      })
      .catch((err) => {
        res.status(401).json(err); // Unauthorized status
      });
  });


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // GET route for getting all of the themes
  app.get("/api/themes", (req, res) => {
    db.Theme.findAll({})
      .then((result) => {
        res.json(result);
      });
  });

  // GET route for getting all of the quotes
  app.get("/api/quotes", (req, res) => {
    db.Quote.findAll({})
      .then((result) => {
        res.json(result);
      });
  });

  // GET route for getting all of the activities
  app.get("/api/activities", (req, res) => {
    db.Activity.findAll({})
      .then((result) => {
        res.json(result);
      });
  });

  // GET route for getting all of the moods
  app.get("/api/moods", (req, res) => {
    db.Mood.findAll({})
      .then((result) => {
        res.json(result);
      });
  });

  // GET route for retrieveing a single user with theme
  app.get("/api/users/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include:[db.Theme]
    }).then((result) => {
      delPass(result); // Excluding password and unnessary key from result
      res.json(result);
    });
  });

  // GET route for retrieveing all data from current user
  app.get("/api/userdata/:userId", (req, res) => {
    db.UserData.findAll({
      where: {
        userId: req.params.userId
      },
      include:[db.User, db.Mood, db.Activity]
    }).then((result) => {
      result.forEach((val) => {
        delPass2(val); // Excluding password and unnessary key from result
      });
      res.json(result);
    });
  });

  // POST route for updating safely the theme of the current user
  app.post("/api/update", (req, res) => {
    let user = req.body.id;
    let newTheme = req.body.ThemeId;
    db.User.findOne(
      {
        where: {
          id: user
        }
      }).then((result) => {
      result.ThemeId = newTheme; // assign new value
      result.save(); // save the full object
      res.status(202).send(result); // Accepted status
    }).catch((error) => {
      console.log(error);
      res.status(400).send( // Bad request status
        {
          error: "Something went wrong. Please try again later."
        });
    });
  });

  // POST route for adding mood and activity to the current user
  app.post("/api/userdata", (req, res) => {
    db.UserData.create({
      userId: req.body.userId,
      activityId: req.body.activityId,
      moodId: req.body.moodId
    }).then((result) => {
      res.status(201).send(result); // Created status
    }).catch((error) => {
      console.log(error);
      res.status(400).send( // Bad request status
        {
          error: "Something went wrong. Please try again later."
        });
    });
  });

  /***************MAY NOT BE NEEDED*************/

  // GET route for getting all of the users with theme
  app.get("/api/users", (req, res) => {
    db.User.findAll({include:[db.Theme]})
      .then((result) => {
        result.forEach((val) => {
          delPass(val); // Excluding password and unnessary key from result
        });
        res.json(result);
      });
  });

};
