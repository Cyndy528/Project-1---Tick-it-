Router.route('/', function(){
	//Login 
	this.render('login'); 
}); 

Router.route('/login', function(){
	var req = this.request; 
	var res = this.response; 
	res.end('hello from the server\n'); 	
}, {where: 'server'}); 

Router.route('/register', function(){
	//Register Page
	this.render('register'); 
}); 
 