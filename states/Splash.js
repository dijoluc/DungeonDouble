var Splash = function () {};      

  // playSound = true, 
  // playMusic = true,
  // music;

Splash.prototype = {

  loadScripts: function () {

    game.load.script('gamemenu', 'states/GameMenu.js');
    game.load.script('style', 'lib/style.js');
   },

  //muziek en geluid
  loadBgm: function () {
  // game.load.audio('mainmenu', 'assets/bgm/goblin-menu.mp3');
  
},

loadImages: function () {
     game.load.image('mainmenu', 'assets/images/mainmenu.png');
  // game.load.image('options-bg', 'assets/images/options-bg.jpg');

  // game.load.tilemap('GameWorld1616', 'assets/images/GameWorld1616.json', null, Phaser.Tilemap.TILED_JSON);
  // game.load.text('GameWorld1616', 'assets/images/GameWorld1616.json');
 
  // game.load.image('Ground1','assets/images/tilemaps/Ground1.png');
  // game.load.image('Ground2','assets/images/tilemaps/Ground2.png');
  
  // game.load.spritesheet('battlemage' , 'assets/images/battlemage/knight.png', 70,90);
  },

 // loadFonts: function () {
 // },

 init: function(){

   this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 510, "loading");
   this.logo       = game.make.sprite(game.world.centerX, 270, 'logo');
   this.status     = game.make.text(game.world.centerX, 560, 'Loading...', {fill: '#A9BCF5'});
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
    game.state.add("GameMenu",GameMenu);
    // game.state.add("Game",Game);
    //     // game.state.add("GameOver",GameOver);
    // game.state.add("Credits",Credits);
    // game.state.add("Options",Options);
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
   game.state.start('GameMenu');

}, 500
);
  }



};



