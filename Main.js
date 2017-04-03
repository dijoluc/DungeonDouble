
var game = new Phaser.Game(1000, 560, Phaser.AUTO, 'game'), main = function () {};

main.prototype = {

  preload: function () {
    game.load.image('logo', 'assets/images/logo.png');
    game.load.image('loading', 'assets/images/loading.png');
    game.load.image('bgLoading', 'assets/images/loadbg.jpg');
    game.load.script('utils',   'lib/utils.js');
    game.load.script('splash', 'states/splash.js');
  },

  create: function () {
    game.state.add('splash', splash);
    game.state.start('splash');
  }

};

game.state.add('main', main);
game.state.start('main');