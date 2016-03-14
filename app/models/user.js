// MODEL TODO
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    pseudo: String,
    email: String,
    password: String,
    token: String,
    userCreation: Date,
    lastLogin: Date,
    profile: {
        firstname: String,
        lastname: String,
        birthday: Date,
        sexe: Boolean, // 0 = male // 1 = femelle ?
        address: {
            road: String,
            road2: String,
            postalCode: Number,
            city: String,
            country: String
        },
        phone: {
            home: Number,
            mobile: Number,
            other: Number
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

    create: function(req, res) {
        User.model.create({
            description: req.body.description
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
            description: req.body.description
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
