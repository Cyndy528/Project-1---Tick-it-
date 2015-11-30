(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/router.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
                                                                       //
Router.route('/', function () {                                        // 2
	//Login                                                               //
	this.render('login');                                                 // 4
});                                                                    //
                                                                       //
Router.route('/register', function () {                                // 7
	//Register Page                                                       //
	this.render('register');                                              // 9
});                                                                    //
                                                                       //
Router.route('/dashboard', function () {                               // 12
	//Dashboard Page                                                      //
	this.render('dashboard');                                             // 14
                                                                       //
	Router.onBeforeAction(function () {                                   // 16
		if (!Meteor.userId()) {                                              // 17
			this.render('/');                                                   // 18
		} else {                                                             //
			this.next();                                                        // 20
		}                                                                    //
	});                                                                   //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=router.js.map
