// Format the Date using Moment.js
Template.registerHelper('formatDate', function(data) {
	return moment(date).format('MMMM Do YYYY, h:mm a'); 
}); 

// Capitalize First Letter
Template.registerHelper ('capFirst', function(text){
	return text.charAt(0).toUpperCase() + text.slice(1); 
}); 