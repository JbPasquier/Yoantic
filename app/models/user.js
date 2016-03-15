// MODEL TODO
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    nickname: String,
    email: String,
    password: String,
    token: String,
    userCreation: Date,
    lastLogin: Date,
    profile: {
        firstname: String,
        lastname: String,
        birthday: Date,
        sexe: Boolean, // 0 = male // 1 = femelle
        address: {
            road: String,
            road2: String,
            postalCode: Number,
            city: String,
            country: String
        },
        phone: {
            home: Number,
            mobile: Number
        },
        hobbies: {

        },
        isVerified: Boolean
    },
    search: {
        ageDiffMin: Number,
        ageDiffMax: Number,
        sexe: Boolean,
        hobbies: {

        }
    }
});

var User = {

    model: mongoose.model('User', userSchema),

    createAccount: function(req, res) {
        User.model.create({
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
            profile: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                birthday: req.body.birthday,
                sexe: req.body.sexe,
                address: {
                    road: req.body.road,
                    road2: req.body.road2,
                    postalCode: req.body.postalCode,
                    city: req.body.city,
                    country: req.body.country
                },
                phone: {
                    home: req.body.home,
                    mobile: req.body.mobile
                }
            }
        }, function() {
            res.sendStatus(200);
        });
    },

    findAll: function(req, res) {
        User.model.find(function(err, data) {
            res.send(data);
        });
    },

    update: function(req, res) {
        User.model.findByIdAndUpdate(req.params.id, {
            nickname: req.body.nickname
        }, function() {
            res.sendStatus(200);
        });
    },

    delete: function(req, res) {
        User.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        });
    }
};

module.exports = User;
