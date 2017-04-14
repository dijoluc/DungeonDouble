var splash = function () {};      

  // playSound = true, 
  // playMusic = true,
  // music;

splash.prototype = {

  loadScripts: function () {

    game.load.script('gameMenu', 'states/gameMenu.js');
    game.load.script('style', 'lib/style.js');
    game.load.script('utils', 'lib/utils.js');
    game.load.script('load', 'states/load.js');
    game.load.script('game1', 'states/game1.js');
    game.load.script('npc', 'lib/npc.js');
   },

  //muziek en geluid
  loadBgm: function () {
  // game.load.audio('mainmenu', 'assets/bgm/goblin-menu.mp3');
  
},

loadImages: function () {
     game.load.image('mainmenu', 'assets/images/mainmenu.png');
   // game.load.image('options-bg', 'assets/images/options-bg.jpg');

     game.load.tilemap('GameWorld1616', 'assets/images/GameWorld1616.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.text('GameWorld1616', 'assets/images/GameWorld1616.json');
 
    game.load.image('Cave','assets/images/tilemaps/Cave.png');
    game.load.image('Castle','assets/images/tilemaps/Castle.png');
    game.load.image('Lava', 'assets/images/tilemaps/Lava.png');
  
    game.load.spritesheet('battlemage' , 'assets/images/battlemage/knight.png', 70,90);
    game.load.spritesheet('War1', 'assets/images/npc/war1.png', 32,32);
  },

 // loadFonts: function () {
 // },

 init: function(){

   this.loadingBar = game.make.sprite(game.world.centerX-(387* 0.5), 510, "loading");
   this.logo       = game.make.sprite(game.world.centerX, 270, 'logo');
   this.status     = game.make.text(game.world.centerX, 560, 'Loading...', {fill: 'grey'});
   utils.centerGameObject([this.logo, this.status]);
  },

 //  The preload function then will call all of the previously defined functions:
 preload: function () {
   game.add.sprite(0, 0, 'bgLoading');
   game.add.existing(this.logo);
   game.add.existing(this.loadingBar);
   game.add.existing(this.status);
   this.load.setPreloadSprite(this.loadingBar);

   this.loadScripts();
   this.loadImages();
   this.loadBgm();
  },

  addGameStates: function () {
    game.state.add("gameMenu",gameMenu);
    game.state.add("game1",game1);
    // game.state.add("GameOver",GameOver);
    // game.state.add("Credits",Credits);
    // game.state.add("Options",Options);
     game.state.add("load", load);
  },
  
  addGameMusic: function () {
    // music = game.add.audio('mainmenu');
    // music.loop = true;
    // music.play();
  },

  create: function() {
    this.status.setText('Big helmets and small swords make for major mayhem');
    this.addGameStates();
    //this.addGameMusic();

    setTimeout(function(){
  //we will load the main menu here
   game.state.start('gameMenu');

}, 500
);
  }



};



