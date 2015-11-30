(function(){
Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<form class="form-signin">\n        <h2 class="form-signin-heading">Sign in</h2>\n\n        <label for="email" class="sr-only">Email address</label>\n\n        <input type="email" id="email" name="email" class="form-control" placeholder="Email address" required="" autofocus="">\n\n        <label for="password" class="sr-only">Password</label>\n\n        <input type="password" id="password" name="password" class="form-control" placeholder="Password" required="">\n\n        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>\n\n        <br>\n\n        <p>No Account? <a href="/register">Create An Account</a>\n\n        </p>\n\n      </form>');
}));

}).call(this);
