var Game = function () {};




Game.prototype = { 

 

tilesets: function(){

    this.map.addTilesetImage("Ground1","Ground1");
   

},

create: function () {
game.world.setBounds(0, 0, 4896, 4896);


game.physics.startSystem(Phaser.Physics.ARCADE);
 
    this.map = game.add.tilemap("GameWorld1616", 16, 16, 204, 204);
    
    this.tilesets();
    this.layer1 =  this.map.createLayer("GroundLayer").resizeWorld();
    
    this.map.setCollisionByExclusion([0],true, 'Collision inv');

   

   music.stop();
      music = game.add.audio('maingame');
      music.loop = true;
      music.play();


},

update: function() {


},

render: function() {
 

 }


} 











