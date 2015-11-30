(function(){
Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.Raw('<div class="header clearfix">\n        <nav>\n          <ul class="nav nav-pills pull-right">\n            <li role="presentation" class="active"><a href="/dashboard">Dashboard Home</a></li>\n            <li class="logout-bnt" role="presentation"><a href="#">Logout</a></li>\n\n          </ul>\n        </nav>\n        <h3 class="text-muted">Dashboard</h3>\n      </div>');
}));

}).call(this);
