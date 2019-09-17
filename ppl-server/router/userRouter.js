const router = require("express").Router();
const userApi = require("../api/userApi");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

router.post("/signup", (req, res) => {
  let userdata = req.body;
  userApi
    .saveUser(userdata)
    .then(result => {
      res.send({ error: false });
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "ishant.garg@daffodilsw.com",
          pass: "Ishant123@"
        }
      });

      let mailOptions = {
        from: "ishant.garg@daffodilsw.com",
        to: result.email,
        subject: "Email verification : PPL",
        html: `<a href="http://localhost:8080/user/verify/${result._id}">Click here to verify your mail</a>`
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    })
    .catch(err => {
      console.log("error", err.stack);
      res.send({ error: true });
    });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  userApi
    .authenticateUser(userData)
    .then(result => {
      if (result.length > 0) {
        let user = result[0];
        jwt.sign({ user }, "Ishant1234@@", (err, token) => {
          res.send({ authenticate: true, token });
        });
      } else {
        res.send({ authenticate: false });
      }
    })
    .catch(err => {
      console.error(err.stack);
    });
});

router.get("/verify/:id", (req, res) => {
  userApi
    .verifyUser(req.params.id)
    .then(result => {
      console.log(result);
      res.redirect("http://localhost:3000/login");
    })
    .catch(err => console.error(err.stack));
});

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  console.log("working!");
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

router.post("/verifytoken", verifyToken, (req, res) => {
  console.log("route call working");
  jwt.verify(req.token, "Ishant1234@@", (err, authData) => {
    if (err) {
      res.send({ validToken: false });
    } else {
      res.send({ validToken: true, authData });
    }
  });
});

router.post("/forgotpass", (req, res) => {
  userApi
    .sendPassword(req.body.email)
    .then(result => {
      console.log(result);
      if (result.length > 0) {
        res.send({ done: true });

        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "ishant.garg@daffodilsw.com",
            pass: "Ishant123@"
          }
        });

        let mailOptions = {
          from: "ishant.garg@daffodilsw.com",
          to: result[0].email,
          subject: "Forgot Password",
          text: `Your password : ${result[0].password}`
        };

        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      } else {
        res.send({ done: false });
      }
    })
    .catch(err => console.error(err.stack));
});

module.exports = router;
