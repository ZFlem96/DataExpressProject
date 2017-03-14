var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {    
});

var UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    userlevel: { type: String},
    email: { type: String},
    age:{ type: String},
    answers:{type: JSON},
    hash:{type: String}
});

var Entry = mongoose.model('VideoGameSurvey', UserSchema);

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

exports = mongoose.model('User', UserSchema);

exports.register = function(req,res){
    var userEntry = new Entry({
        username: req.body.username,
        password: req.body.password,
        userlevel: req.body.userlevel,
        email: req.body.email,
        age: req.body.age
    });
    userEntry.save(function(err, userEntry){
        if(err) return console.error(err);
        console.log(req.body.username + ' added');
    });
    res.redirect('/');
};