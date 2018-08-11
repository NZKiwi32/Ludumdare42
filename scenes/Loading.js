Crafty.defineScene("loading", function() {
    Crafty.background("#000");
    Crafty.e("2D, DOM, Text")
          .attr({ w: 200, h: 50, x: 200, y: 280 })
          .text("Loading")
          .textAlign("center")
          .textColor("#FFFFFF");
 	
 	// Load our sprite map image
  	Crafty.load(gameAssets, function(){

      // Now that our sprites are ready to draw, start the game
      Crafty.scene('Game');
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
  });