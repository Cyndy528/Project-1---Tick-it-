
Router.route('/', function(){
	//Login 
	this.render('login'); 
}); 

Router.route('/register', function(){
	//Register Page
	this.render('register'); 
}); 

Router.route('/dashboard', function(){
	//Dashboard Page
	this.render('dashboard');

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('/');
  } else {
    this.next();
  }
});
}); 
