// MODEL TODO
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    nickname: String,
    email: String,
    password: String,
    token: String,
    userCreation: Date,
    lastLogin: Date,
    isVerified: Boolean,
    profile: {
        city: String,
        firstname: String,
        lastname: String,
        birthday: Date,
        sexe: Boolean, // 0 = male // 1 = femelle
        convenant: String,
        married: String,
        children: String,
        wantChildren: String,
        height: String,
        weight: String,
        hairLenght: String,
        hairColor: String,
        origin: String,
    },
    search: {
        ageDiffMin: Number,
        ageDiffMax: Number,
        boobsMeasurementMin: Number,
        boobsMeasurementMax: Number,
        waistCircumferenceMin: Number,
        waistCircumferenceMax: Number,
        assMeasurementMin: Number,
        assMeasurementMax: Number,
        sexe: Boolean
    }
});

var User = {

    model: mongoose.model('User', userSchema),

    createAccount: function(req, res) {

        if(req.body.password == req.body.passwordConfirmation) {
            User.model.create({
                nickname: req.body.nickname,
                email: req.body.email,
                password: req.body.password,
                profile: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    birthday: req.body.birthday,
                    sexe: req.body.sexe,
                    city: req.body.city
                }
            }, function() {
                res.sendStatus(200);
            });
        } else {
            res.sendStatus(400);
        }

    },

    updateAccount: function(req, res) {
        User.model.findByIdAndUpdate(req.params.id, req.body.obj, function() {
            res.sendStatus(200);
        });
    },

    findAll: function(req, res) {
        User.model.find(function(err, data) {
            res.send(data);
        });
    },

    delete: function(req, res) {
        User.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        });
    }
};

module.exports = User;
