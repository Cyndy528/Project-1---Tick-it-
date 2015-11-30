(function(){
Template.__checkName("dashboard_layout");
Template["dashboard_layout"] = new Template("Template.dashboard_layout", (function() {
  var view = this;
  return [ HTML.DIV({
    "class": "container"
  }, "\n      ", Spacebars.include(view.lookupTemplate("navbar")), "\n      ", HTML.DIV({
    "class": "row marketing"
  }, "\n        ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n          ", Spacebars.include(view.lookupTemplate("flashMessages")), "\n          ", Spacebars.include(view.lookupTemplate("yield")), "\n        "), "\n      "), "\n\n      ", HTML.Raw('<footer class="footer">\n        <p>&copy; 2015 Tick-it!</p>\n      </footer>'), "\n\n    "), HTML.Raw(" <!-- /container -->") ];
}));

}).call(this);
