(function(){
Template.body.addContent((function() {
  var view = this;
  return Blaze.View("lookup:renderPage", function() {
    return Spacebars.mustache(view.lookup("renderPage"));
  });
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("form_layout");
Template["form_layout"] = new Template("Template.form_layout", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "container"
  }, "\n      \n		", Spacebars.include(view.lookupTemplate("flashMessages")), "\n		", Spacebars.include(view.lookupTemplate("yield")), "\n		", Spacebars.include(view.lookupTemplate("loginButtons")), "\n\n    "), HTML.Raw(" <!-- /container -->") ];
}));

Meteor.startup(function() { $('body').attr({"id":"form_layout"}); });

}).call(this);
