Router.configure({
	layoutTemplate: 'layout'
});

// Router.map(function(){
// 	this.route({
// 		path: '/'
// 		template: 'mytickets'
// 	});
// }); 

Router.route('/', function(){
	//Login 
	this.render('mytickets'); 
}); 