(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// client/templates/register.js                                        //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Template.register.events({                                             // 1
	"submit .form-signup": function (event) {                             // 2
		var email = trimInput(event.target.email.value);                     // 3
		var password = trimInput(event.target.password.value);               // 4
		var password2 = trimInput(event.target.password2.value);             // 5
		var first_name = trimInput(event.target.first_name.value);           // 6
		var last_name = trimInput(event.target.last_name.value);             // 7
                                                                       //
		if (isNotEmpty(email) && isNotEmpty(password) && isNotEmpty(first_name) && isNotEmpty(last_name) && isEmail(email) && areValidPasswords(password, password2)) {
                                                                       //
			Accounts.createUser({                                               // 16
				email: email,                                                      // 17
				password: password,                                                // 18
				profile: {                                                         // 19
					first_name: first_name,                                           // 20
					last_name: last_name                                              // 21
				}                                                                  //
			}, function (err) {                                                 //
				if (err) {                                                         // 24
					FlashMessages.sendError('There was an error with registration');  // 25
				} else {                                                           //
					FlashMessages.sendSuccess('Account Created! You are now logged in');
					Router.go('/dashboard');                                          // 28
				}                                                                  //
			});                                                                 //
		}                                                                    //
                                                                       //
		// Prevent Submit                                                    //
		return false;                                                        // 34
	}                                                                     //
});                                                                    //
                                                                       //
// Validation Rules                                                    //
                                                                       //
// Trim Helper                                                         //
var trimInput = function (val) {                                       // 42
	return val.replace(/^\s*|\s*$/g, "");                                 // 43
};                                                                     //
                                                                       //
// Check For Empty Fields                                              //
isNotEmpty = function (value) {                                        // 47
	if (value && value !== '') {                                          // 48
		return true;                                                         // 49
	}                                                                     //
	FlashMessages.sendError("Please fill in all fields");                 // 51
	return false;                                                         // 52
};                                                                     //
                                                                       //
// Validate Email                                                      //
isEmail = function (value) {                                           // 56
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(value)) {                                             // 58
		return true;                                                         // 59
	}                                                                     //
	FlashMessages.sendError("Please use a valid email address");          // 61
	return false;                                                         // 62
};                                                                     //
                                                                       //
// Check Password Field                                                //
isValidPassword = function (password) {                                // 66
	if (password.length < 6) {                                            // 67
		FlashMessages.sendError("Password must be at least 6 characters");   // 68
		return false;                                                        // 69
	}                                                                     //
	return true;                                                          // 71
};                                                                     //
                                                                       //
// Match Password                                                      //
areValidPasswords = function (password, confirm) {                     // 75
	if (!isValidPassword(password)) {                                     // 76
		return false;                                                        // 77
	}                                                                     //
	if (password !== confirm) {                                           // 79
		FlashMessages.sendError("Password s do not match");                  // 80
		return false;                                                        // 81
	}                                                                     //
	return true;                                                          // 83
};                                                                     //
/////////////////////////////////////////////////////////////////////////

}).call(this);
