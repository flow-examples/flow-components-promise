var component = FlowComponents.define("parent", function() {

});

component.action.changeColorWithPromise = function() {
  return new Promise(function(reslove, reject) {
    $('body').css({backgroundColor: "#efefef"})
    setTimeout(function() {
      $('body').css({backgroundColor: "white"})
      reslove();
    }, 500);
  });
};

component.action.changeColorWithoutPromise = function() {
  $('body').css({backgroundColor: "#eee"})
  setTimeout(function() {
    $('body').css({backgroundColor: "white"})
  }, 500);
};