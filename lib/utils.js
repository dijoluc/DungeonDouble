var utils = {

//for each loopt door een array van objects en voor elk object/parameter
centerGameObject : function (objects) {
 objects.forEach(function (object) {
      object.anchor.setTo(0.5);
    })
  },

  tilesets: function(){

  
    game1.map.addTilesetImage("Castle","Castle");
    this.map.addTilesetImage("Cave", "Cave");
    this.map.addTilesetImage("Lava", "Lava");
   return this.map;

}

 };

