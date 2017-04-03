var load = function () {};

var map;
// var Tilesets;

load.prototype = {


 //  The preload function then will call all of the previously defined functions:

 init: function(){


   this.logo       = game.make.sprite(game.world.centerX, 270, 'logo'); 
   this.status     = game.make.text(game.world.centerX, 580, 'Placeholder', {fill: '#A9BCF5'});
   this.loadit    = game.make.text(game.world.centerX - 50, 525, 'Loading...', {fill: '#A9BCF5'}); 
   utils.centerGameObject([this.logo, this.status]);


 },

 //  The preload function then will call all of the previously defined functions:
 preload: function () {

   game.add.sprite(0, 0, 'bgLoading');
   game.add.existing(this.logo);
   game.add.existing(this.status);
   game.add.existing(this.loadit);

 

  },

create: function(){

//dice = Math.random();

switch(Math.floor(Math.random()*10* 0.5)){

case 0:
		this.status.setText("Hint: Avoiding death is advisable");
		break;
case 1:
		this.status.setText("Hint: Running from a fight won't save you");
		break;
case 2:
		this.status.setText("Hint: You cannot swim. Trust me on this.");
		break;
case 3:
		this.status.setText("Hint: She with imminent resurrectin is NOT bugged...just very stuborn");
		break;
case 4: 
		this.status.setText("Hint: You can enter the tavern!");	
		break;	
default: 
		this.status.setText("Hint: Buy me a beer and I might help you out...!");

} 


 // this.status.setText('Onward, into the abiss!');
 
	game.state.start("game1");
	
}
	
};