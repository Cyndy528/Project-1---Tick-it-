(function(){
Template.__checkName("register");
Template["register"] = new Template("Template.register", (function() {
  var view = this;
  return HTML.Raw('<form class="form-signup">\n        <h2 class="form-signup-heading">Create Account</h2>\n        \n        <label for="first_name" class="sr-only">First Name</label>\n        <input type="text" id="first_name" name="first_name" class="form-control" placeholder="First Name" autofocus="">\n\n        <label for="last_name" class="sr-only">Last Name</label>\n        <input type="text" id="last_name" name="last_name" class="form-control" placeholder="Last Name" autofocus="">\n\n        <label for="email" class="sr-only">Email address</label>\n        <input type="email" id="email" name="email" class="form-control" placeholder="Email address" autofocus="">\n\n        <label for="password" class="sr-only">Password</label>\n        <input type="password" id="password" name="password" class="form-control" placeholder="Password">\n        \n        <label for="password2" class="sr-only">Confirm Password</label>\n        <input type="password" id="password2" name="password2" class="form-control" placeholder="Confirm Password">\n\n\n        <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>\n\n        <br>\n\n        <p>Have An Account? <a href="/">Log in</a>\n\n        </p>\n\n      </form>');
}));

}).call(this);
