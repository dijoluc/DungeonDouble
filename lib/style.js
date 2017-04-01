var style;

// this is a wrapped function
(function () {

  // the variables declared here will not be scoped anywhere and will only be accessible in this wrapped function
  var defaultColor = "#A9BCF5",
    highlightColor = "#FEFFD5";

  style = {
    header: {
      font: 'bold 60pt TheMinion',
      fill: defaultColor,
      align: 'center'
    },
    navitem: {
      base: {
        font: '30pt TheMinion',
        align: 'left',
        srokeThickness: 4
      },
      default: {
        fill: defaultColor,
        stroke: 'rgba(0,0,0,0)'
      },
      hover: {
        fill: highlightColor,
        stroke: 'rgba(200,200,200,0.5)'
      }
    }
  };

  Object.assign(style.navitem.hover, style.navitem.base);
  Object.assign(style.navitem.default, style.navitem.base);

})();

// Remember, the trailing () triggers the function call immediately