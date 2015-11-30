(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/navbar.js                                          //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.navbar.events({                                               // 1
	"click .logout-btn": function (event) {                               // 2
		Meteor.logout(function (err) {                                       // 3
			if (err) {                                                          // 4
				FlashMessages.sendError(err.reason);                               // 5
			} else {                                                            //
				FlashMessages.sendSuccess('You are now logged out');               // 7
				Router.go('/');                                                    // 8
			}                                                                   //
		});                                                                  //
	}                                                                     //
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);
