// questions.Shooter, 
// questions.RPG,
// questions.Strategy,
//  questions.Puzzle,
//  questions.Hack 'n' Slash, 
//  questions.RPG,
/*
{ x: 10, y: jsonData.questions.entries.Shooter, label:"Shooter" },
      { x: 20, y: jsonData.questions.entries.RPG, label:"RPG" },
      { x: 30, y: jsonData.questions.entries.Strategy, label:"Strategy" },
      { x: 40, y: jsonData.questions.entries.Puzzle, label:"Puzzle" },
      { x: 50, y: jsonData.questions.entries.HacknSlash, label:"Hack 'n' Slash" },
      { x: 60, y: jsonData.questions.entries.Fighting, label:"Fighting" },
      { x: 70, y: jsonData.questions.entries.Sandbox, label:"Open World" },
      { x: 80, y: jsonData.questions.entries.Platformer, label:"Platformer" },
      { x: 90, y: jsonData.questions.entries.MOBA, label:"MOBA" },
      { x: 100, y: jsonData.questions.entries.Horror, label:"Horror" },
      { x: 110, y: jsonData.questions.entries.Party, label:"Party" },
      { x: 120, y: jsonData.questions.entries.Racing, label:"Racing" },
      { x: 130, y: jsonData.questions.entries.Sports, label:"Sports" },
      { x: 140, y: jsonData.questions.entries.Survival, label:"Survival" }
*/
var data = getEntry();
var jsonData ={
    "questions": 
    [
        {"What is your favorite video game genre?": 
        [
            {"Shooter": 0},
            {"RPG": 0},
            {"Strategy": 0},
            {"Puzzle": 0},
            {"HacknSlash": 0},
            {"Fighting": 1},
            {"Sandbox": 0},
            {"Platformer": 0},
            {"MOBA": 0},
            {"Horror": 0},
            {"Party": 0},
            {"Racing": 0},
            {"Sports": 0},
            {"Survival": 0}
        ]
        }
    ]
};
// var genreNums = [];
function setJson(data){
jsonData = data;
}
window.onload = function () {
    //   console.log(jsonData);
      var chart = new CanvasJS.Chart("chartContainer",
      {
      title:{
      text: "Favorite Game Genre"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Shooter" },
      { x: 20, y: 70, label:"RPG" },
      { x: 30, y: 50, label:"Strategy" },
      { x: 40, y: 60, label:"Puzzle" },
      { x: 50, y: 20, label:"Hack 'n' Slash" },
      { x: 60, y: 30, label:"Fighting" },
      { x: 70, y: 35, label:"Open World" },
      { x: 80, y: 40, label:"Platformer" },
      { x: 90, y: 30, label:"MOBA" },
      { x: 100, y: 20, label:"Horror" },
      { x: 110, y: 30, label:"Party" },
      { x: 120, y: 35, label:"Racing" },
      { x: 130, y: 40, label:"Sports" },
      { x: 140, y: 30, label:"Survival" }
      ]
      }
      ]
    });
    var chart2 = new CanvasJS.Chart("chartContainer2",
      {
      title:{
      text: "Prefered Platformer"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Mario" },
      { x: 20, y: 70, label:"Unravle" },
      { x: 30, y: 50, label:"Limbo/Inside" },
      { x: 40, y: 60, label:"Metroid Prime" },
      { x: 50, y: 20, label:"Salt and Sanctuary" },
      { x: 60, y: 30, label:"Mirror's Edge" },
      { x: 70, y: 35, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart4 = new CanvasJS.Chart("chartContainer4",
      {
      title:{
      text: "Prefered Open World"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"The Elder Scrolls" },
      { x: 20, y: 70, label:"Fallout" },
      { x: 30, y: 50, label:"Assassin's Creed" },
      { x: 40, y: 60, label:"Horizon: Zero Dawn" },
      { x: 50, y: 20, label:"Final Fantasy" },
      { x: 60, y: 30, label:"Fable" },
      { x: 70, y: 35, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart3 = new CanvasJS.Chart("chartContainer3",
      {
      title:{
      text: "Prefered Shooter"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Halo" },
      { x: 20, y: 70, label:"Call of Duty" },
      { x: 30, y: 50, label:"Battlefield" },
      { x: 40, y: 60, label:"Overwatch" },
      { x: 50, y: 20, label:"Rainbow Six" },
      { x: 60, y: 30, label:"Counter Strike" },
      { x: 70, y: 90, label:"Crysis" },
      { x: 80, y: 70, label:"Dark Void" },
      { x: 90, y: 50, label:"DOOM" },
      { x: 100, y: 60, label:"Quake" },
      { x: 110, y: 20, label:"Duke Nukem" },
      { x: 120, y: 30, label:"Boarderlands" },
      { x: 130, y: 35, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart5 = new CanvasJS.Chart("chartContainer5",
      {
      title:{
      text: "Favorite Sports Game"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Madden" },
      { x: 20, y: 70, label:"FIFA" },
      { x: 30, y: 50, label:"NBA2K" },
      { x: 40, y: 60, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart6 = new CanvasJS.Chart("chartContainer6",
      {
      title:{
      text: "Favorite MOBA"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"League of Legends" },
      { x: 20, y: 70, label:"DOTA" },
      { x: 30, y: 50, label:"Smite" },
      { x: 40, y: 60, label:"Heroes of the Storm" },
      { x: 50, y: 20, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart7 = new CanvasJS.Chart("chartContainer7",
      {
      title:{
      text: "Favorite Fighter"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Dead or Alive" },
      { x: 20, y: 70, label:"Mortal Kombat" },
      { x: 30, y: 50, label:"Virtua Fighter" },
      { x: 40, y: 60, label:"Street Fighter" },
      { x: 50, y: 20, label:"Tekken" },
      { x: 60, y: 30, label:"Soul Calibur" },
      { x: 70, y: 90, label:"Injustice" },
      { x: 80, y: 70, label:"Marvel Vs Capcom" },
      { x: 90, y: 50, label:"Super Smash Bros" },
      { x: 100, y: 20, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart8 = new CanvasJS.Chart("chartContainer8",
      {
      title:{
      text: "Favorite Racer"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Burnout" },
      { x: 20, y: 70, label:"Mario Kart" },
      { x: 30, y: 50, label:"Need for Speed" },
      { x: 40, y: 60, label:"Sega Allstar Racing" },
      { x: 50, y: 20, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart9 = new CanvasJS.Chart("chartContainer9",
      {
      title:{
      text: "Favorite Non-Shooter/Non-Fighter Action Game"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"God of War" },
      { x: 20, y: 70, label:"Devil May Cry" },
      { x: 30, y: 50, label:"Bayonetta" },
      { x: 40, y: 60, label:"Dante's Inferno" },
      { x: 50, y: 20, label:"Shadow of Mordor" },
      { x: 60, y: 30, label:"Ryse: Son of Rome" },
      { x: 70, y: 35, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart10 = new CanvasJS.Chart("chartContainer10",
      {
      title:{
      text: "Favorite Adventure"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Uncharted" },
      { x: 20, y: 70, label:"Tomb Raider" },
      { x: 30, y: 50, label:"Myst" },
      { x: 40, y: 60, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart11 = new CanvasJS.Chart("chartContainer11",
      {
      title:{
      text: "Prefered Strategy"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Halo Wars" },
      { x: 20, y: 70, label:"Starcraft" },
      { x: 30, y: 50, label:"Warcraft" },
      { x: 40, y: 60, label:"Civilization" },
      { x: 50, y: 20, label:"Homeworld" },
      { x: 60, y: 30, label:"LotR: Battle for Middle Earth" },
      { x: 70, y: 35, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart12 = new CanvasJS.Chart("chartContainer12",
      {
      title:{
      text: "Prefered Survival"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"7 Days to Die" },
      { x: 20, y: 70, label:"Minecraft" },
      { x: 30, y: 50, label:"Savage Lands" },
      { x: 40, y: 60, label:"Horizon: Zero Dawn" },
      { x: 50, y: 20, label:"The Long Dark" },
      { x: 60, y: 30, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart13 = new CanvasJS.Chart("chartContainer13",
      {
      title:{
      text: "Favorite Publisher"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Microsoft" },
      { x: 20, y: 70, label:"EA" },
      { x: 30, y: 50, label:"Ubisoft" },
      { x: 40, y: 60, label:"Bethesda" },
      { x: 50, y: 20, label:"Blizzard" },
      { x: 60, y: 30, label:"2K" },
      { x: 70, y: 35, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart14 = new CanvasJS.Chart("chartContainer14",
      {
      title:{
      text: "Favorite Developer"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Bungie" },
      { x: 20, y: 70, label:"343 Industries" },
      { x: 30, y: 50, label:"Bethesda" },
      { x: 40, y: 60, label:"Blizzard" },
      { x: 50, y: 20, label:"Gearbox" },
      { x: 60, y: 30, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart15 = new CanvasJS.Chart("chartContainer15",
      {
      title:{
      text: "Favorite Character"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Master Chief Petty Officer John 117" },
      { x: 20, y: 70, label:"Ezio Auditore de Florence" },
      { x: 30, y: 50, label:"Samus" },
      { x: 40, y: 60, label:"Link" },
      { x: 50, y: 20, label:"Kirby" },
      { x: 60, y: 30, label:"King Varian Wrynn" },
      { x: 70, y: 90, label:"Cloud Strife" },
      { x: 80, y: 70, label:"Soap MacTavish" },
      { x: 90, y: 50, label:"Sonic the Hedgehog" },
      { x: 100, y: 20, label:"Not A Fan" }
      ]
      }
      ]
    });
    var chart16 = new CanvasJS.Chart("chartContainer16",
      {
      title:{
      text: "Favorite Console Creator"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      { x: 10, y: 90, label:"Nintendo" },
      { x: 20, y: 70, label:"Sega" },
      { x: 30, y: 50, label:"Microsoft" },
      { x: 40, y: 60, label:"Sony" },
      { x: 50, y: 20, label:"Not A Fan" }
      ]
      }
      ]
    });
      chart.render();
      chart2.render();
      chart3.render();
      chart4.render();
      chart5.render();
      chart6.render();
      chart7.render();
      chart8.render();
      chart9.render();
      chart10.render();
      chart11.render();
      chart12.render();
      chart13.render();
      chart14.render();
      chart15.render();
      chart16.render();
    }