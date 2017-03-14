window.onload = function () {
    //   console.log(jsonData);
    // var json1 = JSON.parse(document.getElementById('genreId'));
    // var json2 = JSON.parse(document.getElementById('developerId'));
    // var json3 = JSON.parse(document.getElementById('creatorId'));
      var chart = new CanvasJS.Chart("chartContainer",
      {
      title:{
      text: "Favorite Game Genre"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      // { x: 10, y: json1.Shooter, label:"Shooter" },
      // { x: 20, y: json1.RPG, label:"RPG" },
      // { x: 30, y: json1.Strategy, label:"Strategy" },
      // { x: 40, y: json1.Puzzle, label:"Puzzle" },
      // { x: 50, y: json1.HacknSlash, label:"Hack 'n' Slash" },
      // { x: 60, y: json1.Fighting, label:"Fighting" },
      // { x: 70, y: json1.Sandbox, label:"Open World" },
      // { x: 80, y: json1.Platformer, label:"Platformer" },
      // { x: 90, y: json1.MOBA, label:"MOBA" },
      // { x: 100, y: json1.Horror, label:"Horror" },
      // { x: 110, y: json1.Party, label:"Party" },
      // { x: 120, y: json1.Racing, label:"Racing" },
      // { x: 130, y: json1.Sports, label:"Sports" },
      // { x: 140, y: json1.Survival, label:"Survival" }
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
      text: "Favorite Developer"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      // { x: 10, y: json2.Bungie, label:"Bungie" },
      // { x: 20, y: json2.Industries343, label:"343 Industries" },
      // { x: 30, y: json2.Bethesda, label:"Bethesda" },
      // { x: 40, y: json2.Blizzard, label:"Blizzard" },
      // { x: 50, y: json2.K2, label:"Gearbox" }
      { x: 10, y: 90, label:"Bungie" },
      { x: 20, y: 70, label:"343 Industries" },
      { x: 30, y: 50, label:"Bethesda" },
      { x: 40, y: 60, label:"Blizzard" },
      { x: 50, y: 20, label:"Gearbox" }
      ]
      }
      ]
    });
    var chart3 = new CanvasJS.Chart("chartContainer3",
      {
      title:{
      text: "Favorite Console Creator"
      },
      data: [
      {
      type: "bar",
      dataPoints: [
      // { x: 10, y: json3.Nintendo, label:"Nintendo" },
      // { x: 20, y: json3.Sega, label:"Sega" },
      // { x: 30, y: json3.Microsoft, label:"Microsoft" },
      // { x: 40, y: json3.Sony, label:"Sony" }
      { x: 10, y: 90, label:"Nintendo" },
      { x: 20, y: 70, label:"Sega" },
      { x: 30, y: 50, label:"Microsoft" },
      { x: 40, y: 60, label:"Sony" }
      ]
      }
      ]
    });
      chart.render();
      chart2.render();
      chart3.render();
    }
//     module.exports = displayCharts;
// exports.displayCharts = displayCharts;