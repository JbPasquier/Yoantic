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
        avatar: [String],
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
        convenant: String,
        married: String,
        children: String,
        wantChildren: String,
        height: String,
        weight: String,
        hairLenght: String,
        hairColor: String,
        origin: String,
        ageDiffMin: Number,
        ageDiffMax: Number,
        boobsMeasurementMin: Number,
        boobsMeasurementMax: Number,
        waistCircumferenceMin: Number,
        waistCircumferenceMax: Number,
        assMeasurementMin: Number,
        assMeasurementMax: Number,
        sexe: Boolean
    },
    ilike: [String], // like & ignore by _id
    idislike: [String]
});

var User = {

    model: mongoose.model('User', userSchema),

    createAccount: function (req, res) {
        console.log(req.body);
        var is_ok = false;
        var roger = "";

        var checkInput = function (input, regex) {
            if (!input || typeof input != 'string') {
                roger += "Input invalid!";
                return false;
            }
            if (!(new RegExp('^' + regex + '$').test(input))) {
                roger += input + ": ne correspond pas au pattern:" + regex + "\n";
                return false;
            }
            return true;
        };
        console.log(req.body.currentGender);
        is_ok =
            checkInput(req.body.nickname, "[A-Za-z0-9-]+") &&
            checkInput(req.body.firstName, "[\\w\\-]+") &&
            checkInput(req.body.lastName, "[\\w\\-]+") &&
            checkInput(req.body.email, "[\\w\\-\\+]+(\\.[\\w\\-]+)*@[\\w\\-]+(\\.[\\w\\-]+)*\\.[\\w\\-]{2,4}") &&
            checkInput(req.body.password, "[A-Za-z0-9]+") &&
            checkInput(req.body.passwordConfirm, req.body.password) &&
            req.body.major18 &&
            (req.body.currentGender === 0 ||  req.body.currentGender === 1) ?
            true :
            false;


        if (is_ok === true) {
            User.model.create({
                nickname: req.body.nickname,
                email: req.body.email,
                password: req.body.password,
                profile: {
                    avatar: req.body.avatar,
                    firstname: req.body.firstName,
                    lastname: req.body.lastName,
                    birthday: req.body.birthday,
                    sexe: req.body.currentGender,
                    city: req.body.city
                }
            }, function (err, data) {
                res.send({
                    id: data._id
                });
            });
        } else {
            console.log(roger);
            res.sendStatus(400);
        }

    },
    updateAccount: function (req, res) {
        User.model.find({
            _id: req.params.id
        }, function (err, data) {
            Object.keys(req.body.objProfile).forEach(function (key) {
                data[0].profile[key] = req.body.objProfile[key];
                data[0].search[key] = req.body.objSearch[key];
            });
            data[0].save();
            res.sendStatus(200);
        });
    },

    findUserName: function (req, res) {
        User.model.find({
                _id: req.params.id
            },
            function (err, data) {
                console.log(data);
                res.send(data);
            });
    },

    findAll: function (req, res) {
        User.model.find(function (err, data) {
            res.send(data);
        });
    },

    delete: function (req, res) {
        User.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        });
    },

    login: function (req, res) {
        User.model.find({
            nickname: req.body.nickname,
            password: req.body.password
        }, function (err, data) {
            if (!data[0]) {
                res.send({
                    statusCode: 'bad login'
                });
            } else {
                res.send({
                    _id: data[0]._id,
                    statusCode: 200
                });
            }

        });

    }
};

module.exports = User;
