(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/login.js                                           //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.login.events({                                                // 1
	"submit .form-signin": function (event) {                             // 2
		var email = event.target.email.value;                                // 3
		var password = event.target.password.value;                          // 4
                                                                       //
		Meteor.loginWithPassword(email, password, function (err) {           // 6
			// Checking for errors                                              //
			if (err) {                                                          // 8
				event.target.email.value = email;                                  // 9
				event.target.password.value = password;                            // 10
				FlashMessages.sendError(err.reason);                               // 11
			} else {                                                            //
				FlashMessages.sendSuccess('You are now logged in.');               // 13
				Router.go('/dashboard');                                           // 14
			}                                                                   //
		});                                                                  //
                                                                       //
		// Prevent Submit                                                    //
		return false;                                                        // 19
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
