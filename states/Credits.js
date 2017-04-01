var Credits = function (game) {};

Credits.prototype = {
 
 preload: function () {

 this.optionCount = 1;
 this.creditCount = 0;
 },

 addCredit: function(task, author) {
    var authorStyle = { font: '40pt bold', fill: '#A9BCF5', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    var taskStyle = { font: '30pt bold', fill: '#A9BCF5', align: 'center', stroke: 'rgba(0,0,0,0)', strokeThickness: 4};
    var authorText = game.add.text(game.world.centerX, 900, author, authorStyle);
    var taskText = game.add.text(game.world.centerX, 950, task, taskStyle);
    authorText.anchor.setTo(0.5);
    authorText.stroke = "rgba(0,0,0,0)";
    authorText.strokeThickness = 4;
    taskText.anchor.setTo(0.5);
    taskText.stroke = "rgba(0,0,0,0)";
    taskText.strokeThickness = 4;
    game.add.tween(authorText).to( { y: -300 }, 9000, Phaser.Easing.Cubic.In, true, this.creditCount * 2000);
    game.add.tween(taskText).to( { y: -200 }, 9000, Phaser.Easing.Cubic.In, true, this.creditCount * 2000);
    this.creditCount ++;
  },

menuFactory: function(text, callback){

  //var txt = game.add.text(10, (this.optionCount * 80) + 450, text, optionStyle);     
  var txt = game.add.text(20, (this.optionCount * 80) + 250, text, style.navitem.default);
  //txt.anchor.set(0.5);
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
    this.titleText = game.make.text(game.world.centerX, 100, "An adventurous Adventure", {
      font: 'bold 60pt',
      fill: '#A9BCF5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,10)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  

  create: function () {

 this.stage.disableVisibilityChange = false;

   // if (gameOptions.playMusic) {
      music.stop();
      music = game.add.audio('credits');
      music.loop = true;
      music.play();
    //}
  	game.add.existing(this.titleText);

  	var bg = game.add.sprite(0, 0, 'menu-bg');

    this.addCredit('Developer', 'Diederik Lucas');
    this.addCredit('Leveldesign', 'Diederik Lucas');
    this.addCredit('Pogrammer', 'Diederik Lucas');
    this.addCredit('Images and Sprites', 'xxxxxxxx');
    this.addCredit('Images and Sprites', 'xxxxxxxx');
    this.addCredit('Images and Sprites', 'xxxxxxxx');
    this.addCredit('Music', 'Eric Mathyas');
    this.addCredit('Music', 'xxxxxxx2 ')
    this.addCredit('Sietske de Weers', 'Special thanks to');
    this.addCredit('Phaser.io', 'Powered By');
    this.addCredit('for playing', 'Thank you');
    this.menuFactory('<- Back', function (e) {
      game.state.start("GameMenu");

  	

  	// this.menuFactory('Return', function () {
   //  game.state.start("GameMenu");
   });
 //game.add.tween(bg).to({alpha: 0}, 20000, Phaser.Easing.Cubic.Out, true, 40000);
  }
};


