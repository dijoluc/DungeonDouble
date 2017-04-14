
var game1 = function () {};

var map;
var layer3;
var layer2;
var layer1;
var layer4;
var player;
var badguys;
var enemy1;

game1.prototype = { 

tilesets: function(){

    this.map.addTilesetImage("Castle","Castle");
    this.map.addTilesetImage("Cave", "Cave");
    this.map.addTilesetImage("Lava", "Lava");
},

create: function () {
game.world.setBounds(0, 0, 1920, 560);


game.physics.startSystem(Phaser.Physics.ARCADE);
 
    this.map = game.add.tilemap("GameWorld1616", 16, 16, 80, 25);
            
    this.tilesets();
    this.layer1 =  this.map.createLayer("Ground").resizeWorld();
    this.layer3 =  this.map.createLayer("Floor");   
    player = game.add.sprite(0, 440, 'battlemage');
    player.scale.setTo(0.5,0.5);
    this.layer2 =  this.map.createLayer("Pain");
    this.layer4 = this.map.createLayer("Pointers");

    this.map.setCollisionByExclusion([0],true, this.layer3); 
    this.map.setCollisionByExclusion([0],true, this.layer4); 

    //enable physics on player and layer3
    game.physics.arcade.enable([player, this.layer3]);

    badguys = game.add.group();
    badguys.enablebody = true;
   // badguys.enable.physics.arcade;
//badguys.scale.setTo(1.5,1.5);

    //debug
     // console.log(this.map);
     // console.log(this.map.objects.Bad);

      this.map.objects.Bad.forEach(function(element) {
      element.gid = 100;
    }, this);



    this.map.createFromObjects('Bad', 100, 'War1', 0, true, false, badguys);
    

game.physics.arcade.enable(badguys);
    game.physics.arcade.gravity.y = 1000;
    game.camera.follow(player);
    player.body.fixedRotation=true;
    player.body.collideWorldBounds = true;
   // player.body.setCircle(22,0,0);

   // music.stop();
   //    music = game.add.audio('maingame');
   //    music.loop = true;
   //    music.play();
//player.animations.add('left', [32, 33, 34, 35], 10, true);
 //player.animations.add('right', [36, 37, 38, 39], 10, true);
 //player.animations.add('up', [8, 9, 10, 11], 10, true);
 player.animations.add('left', [8,9,10,12,14,15], 10, true);
 player.animations.add('right', [16,17,18,19,20,21,22,23], 10, true);
 player.animations.add('up', [0], 10, true);
 player.animations.add('down', [12, 13, 14, 15], 10, true);
 player.animations.add('slashLeft', [24,25,26],10, true);
 player.animations.add('slashRight',[28,29,30],10, true);

 //u create controls
 cursors = game.input.keyboard.createCursorKeys();  

//register hotkeys
 this.keyE = game.input.keyboard.addKey(Phaser.Keyboard.E);
 this.space= game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

 //  Stop the following keys from propagating up to the browser
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.E]);
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);


},

update: function() {
//game.physics.arcade.collide(player);
game.physics.arcade.collide(player, this.layer3);
game.physics.arcade.collide(badguys, this.layer3);
game.physics.arcade.collide(badguys, this.layer4, npc.do(this.badguys), null, this );
//var laa = this.layer3;


 //npc.enemy(this.badguys);


 //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    //player.body.velocity.y = 0;


    if (cursors.left.isDown)
    {
      if(this.keyE.isDown){
        //  Move to the left and attack
        player.animations.play('slashLeft');
        player.body.velocity.x = -200;
      }else if (this.space.isDown && player.body.onFloor())
    {
          player.body.velocity.y = -400;

        player.animations.play('up');  //verander animatie in trapklimmen
    }
      else{
        //move to the left

      player.body.velocity.x = -200;

        player.animations.play('left');
      }
    }
    else if (cursors.right.isDown)
    {
      if(this.keyE.isDown){
        //  Move to the left and attack
        player.animations.play('slashRight');
        player.body.velocity.x = 200;
      }else if (this.space.isDown && player.body.onFloor())
    {
          player.body.velocity.y = -400;

        player.animations.play('up');  //verander animatie in trapklimmen
    }
      else{
        //  Move to the right
       player.body.velocity.x = 200;

        player.animations.play('right');
      }
    }
    else if (cursors.up.isDown)
    {
      //  Move up stairs
      player.body.velocity.y = -200;

        player.animations.play('up');  //verander animati in trapklimmen
    }
    else if (cursors.down.isDown)
    {
       //  Move down
       player.body.velocity.y = 200;

        player.animations.play('down');
    }
    else if (this.space.isDown && player.body.onFloor())
    {
          player.body.velocity.y = -400;

        player.animations.play('up');  //verander animatie in trapklimmen
    }

  
  //   else if(this.keyE.isDown){
    
  //   if(cursors.left.upDuration(200))
  //   {
  //   player.animations.play('slashLeft');
  //  }
  //  else if(cursors.right.upDuration(200))
  //   {
  //   player.animations.play('slashRight');
  //  }
  // }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 0;
    }
},

render: function() {
 
game.debug.bodyInfo(player, 32, 32);
 }


} 











