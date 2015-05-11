var component = FlowComponents.define("loadingButton", function(props) {
  this.text = props.text;
  this.onClick = props.onClick;
});

component.state.text = function() {
  if(this.get('loading')) {
    return "loading...";
  } else {
    return this.text;
  }
};

component.action.clickButton = function() {
  var self = this;
  self.set('loading', true);

  var promise = this.onClick();
  promise.catch(function(err) {
    alert(err);
  }).then(function() {
    self.set('loading', false);
  });
};