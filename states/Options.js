var Options = function () {};

Options.prototype = { 

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

  	game.add.sprite(0, 0, 'menu-bg');

  	game.add.existing(this.titleText);

    this.menuFactory('Mute music', function(){
      game.state.start("GameMenu");
    });

  	this.menuFactory('Return', function () {
    game.state.start("GameMenu");
   });

  }

}