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

exports.edit = function(req,res){
    Entry.findById(req.params.id, function(err, vgsEntry){
        if(err) return console.error(err);
        res.render('edit',{vgsEntry: vgsEntry});
    });
};

exports.editEntry = function(req, res){
    Entry.findById(req.params.id, function(err, vgsEntry){
        if(err) return console.error(err)
        vgsEntry.name = req.body.name; 
        vgsEntry.favoriteGameGenre = req.body.favoriteGameGenre;
        vgsEntry.preferedPlatformer = req.body.preferedPlatformer;
        vgsEntry.preferedShooter = req.body.preferedShooter;
        vgsEntry.preferedOpenWorld = req.body.preferedOpenWorld;
        vgsEntry.favoriteSportsGame = req.body.favoriteSportsGame;
        vgsEntry.favoriteMOBA = req.body.favoriteMOBA;
        vgsEntry.favoriteFighter = req.body.favoriteFighter;
        vgsEntry.favoriteRacer = req.body.favoriteRacer;
        vgsEntry.favoriteAction = req.body.favoriteAction;
        vgsEntry.favoriteAdventure = req.body.favoriteAdventure;
        vgsEntry.preferedStrategy = req.body.preferedStrategy;
        vgsEntry.preferedSurvival = req.body.preferedSurvival;
        vgsEntry.favoritePublisher = req.body.favoritePublisher;
        vgsEntry.favoriteDeveloper = req.body.favoriteDeveloper;
        vgsEntry.favoriteCharacter = req.body.favoriteCharacter;
        vgsEntry.favoriteConsoleCreator = req.body.favoriteConsoleCreator;
       vgsEntry.save(function (err,vgsentry) {
        if (err) return console.error(err);
            console.log(req.body.name + ' updated');
        });
    }); 
    res.redirect('/');
};

exports.delete = function (req, res) {
    Entry.findByIdAndRemove(req.params.id, function (err, vgsEntry) {
        if (err) return console.error(err);
        res.redirect('/');
    }); 
};

exports.details = function (req, res) {
    Entry.findById(req.params.id, function (err, vgsEntry) {
        if (err) return console.error(err);
        res.render('details',{ title: 'Video Game Survey List', vgsEntry: vgsEntry});
    });  
};
