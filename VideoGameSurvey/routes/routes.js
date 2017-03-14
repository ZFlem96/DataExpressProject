var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {    
});
var gameGenre = [], favDeveloper = [], favCompany = [];
var vgsSchema = mongoose.Schema({
    name: String,
    favoriteGameGenre: String,
    favoriteDeveloper: String,
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
        favoriteDeveloper: req.body.favoriteDeveloper,
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
        vgsEntry.favoriteDeveloper = req.body.favoriteDeveloper;
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
exports.home = function(req, res){
    Entry.find(function(err, counts){
if (err) console.log(err)
var genre1 = counts.filter(checkForShooter).length;
var genre2 = counts.filter(checkForRPG).length;
var genre3 = counts.filter(checkForStrategy).length;
var genre4 = counts.filter(checkForPuzzle).length;
var genre5 = counts.filter(checkForHacknSlash).length;
var genre6 = counts.filter(checkForFighting).length;
var genre7 = counts.filter(checkForSandbox).length;
var genre8 = counts.filter(checkForPlatform).length;
var genre9 = counts.filter(checkForMOBA).length;
var genre10 = counts.filter(checkForHorror).length;
var genre11 = counts.filter(checkForParty).length;
var genre12 = counts.filter(checkForRacing).length;
var genre13 = counts.filter(checkForSports).length;
var genre14 = counts.filter(checkForSurvival).length;
var creator1 = counts.filter(checkForNintendo).length;
var creator2 = counts.filter(checkForSega).length;
var creator3 = counts.filter(checkForMicrosoft).length;
var creator4 = counts.filter(checkForSony).length;
var developer1 = counts.filter(checkForBungie).length;
var developer2 = counts.filter(checkFor343).length;
var developer3 = counts.filter(checkForBethesda).length;
var developer4 = counts.filter(checkForBlizzard).length;
var developer5 = counts.filter(checkFor2K).length;
gameGenre = [genre1,genre2,genre3,genre4,genre5,genre6,genre7,genre8,genre9,genre10,genre11,genre12,genre13,genre14];
favCompany = [creator1,creator2,creator3,creator4];
favDeveloper = [developer1,developer2,developer3,developer4,developer5];
console.log(gameGenre);
console.log(favCompany);
console.log(favDeveloper)
    });
    Entry.findById(req.params.id, function (err, vgsEntry) {
   if (err) return console.error(err);
   
    res.render('home', { vgsEntry: vgsEntry});    
});
    
};

function checkForShooter(count){
    return count.favoriteGameGenre == "Shooter";
}
function checkForRPG(count){
    return count.favoriteGameGenre == "RPG";
}
function checkForStrategy(count){
    return count.favoriteGameGenre == "Strategy";
}
function checkForPuzzle(count){
    return count.favoriteGameGenre == "Puzzle";
}
function checkForHacknSlash(count){
    return count.favoriteGameGenre == "HacknSlash";
}
function checkForFighting(count){
    return count.favoriteGameGenre == "Fighting";
}
function checkForSandbox(count){
    return count.favoriteGameGenre == "Sandbox";
}
function checkForPlatform(count){
    return count.favoriteGameGenre == "Platform";
}
function checkForMOBA(count){
    return count.favoriteGameGenre == "MOBA";
}
function checkForHorror(count){
    return count.favoriteGameGenre == "Horror";
}
function checkForParty(count){
    return count.favoriteGameGenre == "Party";
}
function checkForRacing(count){
    return count.favoriteGameGenre == "Racing";
}
function checkForSports(count){
    return count.favoriteGameGenre == "Sports";
}
function checkForSurvival(count){
    return count.favoriteGameGenre == "Survival";
}

function checkForNintendo(count){
    return count.favoriteConsoleCreator == "Nintendo";
}
function checkForSega(count){
    return count.favoriteConsoleCreator == "Sega";
}
function checkForMicrosoft(count){
    return count.favoriteConsoleCreator == "Microsoft";
}
function checkForSony(count){
    return count.favoriteConsoleCreator == "Sony";
}

function checkForBungie(count){
    return count.favoriteDeveloper == "Bungie";
}
function checkFor343(count){
    return count.favoriteDeveloper == "Industries343";
}
function checkForBethesda(count){
    return count.favoriteDeveloper == "Bethesda";
}
function checkForBlizzard(count){
    return count.favoriteDeveloper == "Blizzard";
}
function checkFor2K(count){
    return count.favoriteDeveloper == "2K";
}
// function fillGenreArray(count){
// for(var x =0;x<count.favoriteGameGenre;x++){

// }
// }