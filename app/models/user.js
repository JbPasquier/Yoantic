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
            console.log(req.body);
        var is_ok = 1;

        if (req.body.nickname.match(/^[A-Za-z-]+$/) < 1)
            is_ok += "Le pseudo n'est pas valide\n";
        if (req.body.firstName.match(/^[A-Za-z-]+$/) < 1)
            is_ok += "Le nom n'est pas valide\n";
        if (req.body.lastName.match(/^[A-Za-z-]+$/) < 1)
            is_ok += "Le prenom n'est pas valide\n";
        if (req.body.email.match(/^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/) < 1)
            is_ok += "L'e-mail n'est pas valide\n";
        if(req.body.password.match(/[A-Z]+/) < 1)
            is_ok += "Le mot de passe n'a pas au moins majuscule\n";
        if(req.body.password.match(/[a-z]+/) < 1)
            is_ok += "Le mot de passe n'a pas au moins une minuscule\n";
        if(req.body.password.match(/[0-9]+/) < 1)
            is_ok += "Le mot de passe n'a pas au moins chiffre\n";

        if(is_ok == 1){
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
            console.log(is_ok);
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
