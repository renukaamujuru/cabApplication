var user = require('../model/userschema');
var rides = require('../model/ridesschema');

var bcrypt = require('bcrypt');
var saltRounds = 10;
salt = bcrypt.genSaltSync(saltRounds);

exports.registerUser = (req, res) => {
    console.log(req.body);
    var email = req.body.email;
    var password = bcrypt.hashSync(req.body.password, saltRounds);
    var phoneNumber = req.body.phoneNumber;
    var username = req.body.username;
    var newuser = new user({
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        username: username

    });
    user.findOne({
        email: email
    }, (err, event) => {
        if (err) {
            res.send({
                status: false,
                err
            });
            console.error(err);
        } else {
            if (event == null) {
                newuser.save((err1, result) => {
                    if (err1) {
                        res.send({
                            status: false,
                            message: "registration failed",
                            err1
                        });
                    } else {
                        res.send({
                            status: true,
                            message: "registration successful",
                            result
                        })
                    }
                })
            } else {

                res.send({
                    status: false,
                    message: "email already exists",
                    event
                });
                console.log("email already exist", event);
            }
        }
    })



}


var nodemailer = require('nodemailer');



exports.loginUser = (req, res) => {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;
    var username;
    
    // var awesome_instance = new user({ username:username });

    // awesome_instance.save(function (err,result) {
    //   if (err){
    //        return handleError(err);
    //   }
    //     else {
    //         console.log("username"+result);
    //     }
    // });
    user.findOne({
        email: email
    }, (err, obj) => {
        if (err) {
            res.send({
                status: false,
                message: "error occoured while processing login request",
                err
            });
            console.error(err);
        } else {
            if (obj == null) {

                res.send({
                    status: false,
                    message: "user not registered"
                })
            } else {
                console.log("your obj is" + obj.username);
                this.username = obj.username;
                bcrypt.compare(password, obj.password, (err, result) => {
                    if (result) {
                        res.send({
                            status: true,
                            message: "login successfull",
                            obj: obj
                        });
                          let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'renukaamujuru@gmail.com',
            pass: 'renuka12345'
        }

    });
    let mailoptions = {
        from: 'renukaamujuru@gmail.com',
        to: email,
        subject: 'login  test',
        text: 'welcome ' + obj.username
    };
    console.log(mailoptions);

    transporter.sendMail(mailoptions, (err, info) => {
        if (err) {
            return console.log(err.message);
        }


        console.log("you have logined to your account");

    })
                    } else {
                        res.send({
                            status: false,
                            message: "incorrect password"
                        });
                        console.log(obj);
                    }
                })


            }
        }
    })


  

}




exports.forgotpassword = (req, res) => {
    console.log(req.body);
    var email = req.body.email;
    user.findOne({
        email: email
    }, (err, result) => {
        if (err) {
            res.send({
                status: false,
                message: "error occured while processing forgot password request",
                err
            });
            console.error(err);
        } else {
            if (result) {
                res.send({
                    status: true,
                    message: "message sent to your mail",
                    result
                });
                console.log(result);
            }
        }
    })
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'renukaamujuru@gmail.com',
            pass: 'renuka12345'
        }

    });
    let mailoptions = {
        from: 'renukaamujuru@gmail.com',
        to: email,
        subject: 'forgotpassword test',
        text: "for got password?? soo sad"
    };
    transporter.sendMail(mailoptions, (err, info) => {
        if (err) {
            return console.log(err.message);
        }

        console.log("successful forgotpassword message sent");

    })

}
/* <pick up location put method> */

exports.UserEnteredData = (req, res) => {
    console.log(req.body);
    let data = req.body;
    console.log(data);
    var obj = {};
    obj.location = data.location;
    obj.destination = data.destination;
    obj.fare = data.fare;
    obj.userid = data.uid;
    obj.username = data.username;
    console.log(obj.username);
    console.log(obj.userid);
    console.log(obj.location + obj.destination + obj.fare + obj.userid + obj.username);
    var newrides = new rides({
        location: obj.location,
        destination: obj.destination,
        fare: obj.fare,
        userid: obj.userid,
        username: obj.username
    })
    newrides.save(function (err, result) {
        if (err) {
            return console.log(err);
        } else {
            console.log("rides saved");
        }
    })
}

// email = "sireesha555551@gmail.com";

// db.collection("userdatas").findOne({
//     // location: location,
// destination:destination,
// fare:fare,
//     user.findOneAndUpdate({email:email},{$set:obj},{new:true},(err, result) => {
//     if (err) {
//         console.error(err);
//         res.send({
//             status: false,
//             err
//         });
//     } else {
//         if (result) {
//             res.send({
//                 email:email,
//                 status: true,
//                 message: "user entered details",
//                 result
//             });
//            // console.log(result);
//         }
//     }
// })



exports.getUserEnteredData = (req, res) => {
    console.log('I received a GET request');

    var userid = req.params.id;
    console.log(userid);
    rides.find({
        userid: userid,
       
    }, (err, event) => {
        if (err) {
            res.send({
                status: false,
                message: "error occured while finding ride",
                err
            });
            console.log(err);
        } else {
            if (event == null) {
                res.send({
                    status: false,
                    message: "no rides available"
                })
            } else {
                res.json({
                    status: true,
                    message: "rides avaiable",
                    event: event
                });

                console.log(event);
            }
        }
    })

}
// var userRideData = query.select('username location destination fare');