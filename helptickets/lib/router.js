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

	this.route('tickets', {
		path: '/ticket/:_id', 
		template: 'ticket', 
		data: function(){
			var currentTicket = this.params._id;
			return Tickets.findOne({_id: currentTicket})
		}
	});
});

