var GameMenu = function () {};

GameMenu.prototype = {

 preload: function () {

  this.optionCount = 1;
  },

 menuFactory: function(text, callback){
       
  var txt = game.add.text(game.world.centerX, (this.optionCount * 80) + 200, text, style.navitem.default);
  txt.anchor.set(0.5);
  txt.inputEnabled = true;


  txt.events.onInputUp.add(callback);

  txt.events.onInputOver.add(function (target) {
  target.setStyle(style.navitem.hover);
    });
    
  txt.events.onInputOut.add(function (target) {
      target.setStyle(style.navitem.default);
    });

    this.optionCount ++;
  },
 
 init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, "Two smacks all evil!", {
      font: 'bold 60pt',
      fill: '#A9BCF5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,10)', 5);
    this.titleText.anchor.set(0.5);
  },

  create: function () {

// if (music.name !== "mainmenu") {
//       music.stop();
//       music = game.add.audio('mainmenu');
//       music.loop = true;
//       music.play();
//     }
      //decide wether games pauses on loosing focus or not
    game.stage.disableVisibilityChange = true


    game.add.sprite(0, 0, 'mainmenu');
    game.add.existing(this.titleText);
  
    this.menuFactory('Start', function () {
   // game.state.start('CharSelect');
    });

    this.menuFactory('Options', function () {
  //  game.state.start('Options');
    });

    this.menuFactory('Credits', function () {
   // game.state.start('Credits');
    });
  }

 

};





// this.startText = game.make.text(game.world.centerX, 250, "Start", { fill: "#A9BCF5"});

// this.startText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
//     this.startText.anchor.set(0.5)
//    this.startText.inputEnabled = true;

//    this.startText.events.onInputUp.add(function () { alert('werkt')});

//    this.startText.events.onInputOver.add(function (target) {
//       target.fill = "#FEFFD5"
//    });

//    this.startText.events.onInputOut.add(function (target) {
//       target.fill = "#A9BCF5"
//    });



 //  //var onOver = function (target) {
 // //   target.fill = "#FEFFD5";
 //    target.stroke = "rgba(200,200,200,0.5)";
 //  };

 //  var onOut = function(target) {
 //    target.fill = "#A9BCF5";
 //    target.stroke = "rgba(0,0,0,0)";

 //  };

  // txt.stroke = "rgba(0,0,0,0)";
  //   txt.strokeThickness = 0;
  //   txt.setShadow(3, 3, 'rgba(0,0,10,10)', 5);
  //   txt.inputEnabled = true;