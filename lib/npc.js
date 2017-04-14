var npc = {

enemy: function (objects){
//this.objects.forEach();

badguys.setAll('body.velocity.x', - 200, true, true);


},

do: function(objects){

badguys.forEach(function(element) {

console.log(element.body.velocity.x);

element.body.velocity.x = 50;

if(element.body.velocity < 10 | element.body.velocity < -10){
// element.body.velocity.x = 150;

element.body.onCollide = element.body.velocity.x *= -1;
}

//console.log(element.body.velocity.x);

// element.body.onCollide = element.body.velocity.x *= -1;

//console.log(element.body.velocity.x);

// 	if(element.body.velocity.x === 200){
// badguys.setAll('body.velocity.x', - 200, true, true);
// }
// 	if(element.body.velocity.x === -200){
// badguys.setAll('body.velocity.x', 200, true, true);
// }


        // Update alpha first.
        // item.alpha -= item.alphaIncSpeed;

        // // Check for switch between increasing and descreasing.
        // if (item.alpha < 0.001 || item.alpha > 0.999)
        // {
        //     item.alphaIncSpeed *= -1;
        // }
        
    });
// if('body.velocity.x' === 0 )
// badguys.setAll('body.velocity.x', 150, true, true);




}

}