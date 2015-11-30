Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function(){
	//Login 
	this.render('mytickets');
	// Data context from a collection
	this.route('mytickets', {
  	data: function() {
    templateData = { tickets: Tickets.find({}) 
	};
    return templateData;
  }, 

}); 
	Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('mytickets');
  } else {
    this.next();
  }
});
});

