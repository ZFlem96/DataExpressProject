var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {    
});

var vgsSchema = mongoose.Schema({
    name: String,
    favoriteGameGenre: String,
    preferedPlatformer: String,
    preferedShooter: String,
    preferedOpenWorld: String,
    favoriteSportsGame: String,
    favoriteMOBA: String,
    favoriteFighter: String,
    favoriteRacer: String,
    favoriteAction: String,
    favoriteAdventure: String,
    preferedStrategy: String,
    preferedSurvival: String,
    favoritePublisher: String,
    favoriteDeveloper: String,
    favoriteCharacter: String,
    favoriteConsoleCreator: String
});

var Entry = mongoose.model('VideoGameSurvey', vgsSchema);

exports.index = function(req, res){
    Entry.find(function(err, vgsEntry){
        if(err) return console.error(err);
        res.render('index',{title: 'Video Game Survey List', vgsEntry: vgsEntry});
    });
};

exports.create = function(req, res){
    res.render('create');
};

exports.createEntry = function(req, res){
    var vgsEntry = new Entry({
        name: req.body.name, 
        favoriteGameGenre: req.body.favoriteGameGenre,
        preferedPlatformer: req.body.preferedPlatformer,
        preferedShooter: req.body.preferedShooter,
        preferedOpenWorld: req.body.preferedOpenWorld,
        favoriteSportsGame: req.body.favoriteSportsGame,
        favoriteMOBA: req.body.favoriteMOBA,
        favoriteFighter: req.body.favoriteFighter,
        favoriteRacer: req.body.favoriteRacer,
        favoriteAction: req.body.favoriteAction,
        favoriteAdventure: req.body.favoriteAdventure,
        preferedStrategy: req.body.preferedStrategy,
        preferedSurvival: req.body.preferedSurvival,
        favoritePublisher: req.body.favoritePublisher,
        favoriteDeveloper: req.body.favoriteDeveloper,
        favoriteCharacter: req.body.favoriteCharacter,
        favoriteConsoleCreator: req.body.favoriteConsoleCreator
    });
    vgsEntry.save(function(err, vgsEntry){
        if(err) return console.error(err);
        console.log(req.body.name + ' added');
    });
    res.redirect('/');
};