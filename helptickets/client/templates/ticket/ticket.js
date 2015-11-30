Template.ticket.events({
	'submit .add-reply': function(event){
		var reply = event.target.reply.value;

		if(Meteor.user().profile.usertype == 'staff'){
			usertype = 'staff';
		} else {
			usertype = 'customer';
		}
		// Need to make two options: customer or staff

		Tickets.update({
			_id: this._id
		}, {
			$push: {
				replies: {
					reply: reply,
					usertype: usertype,
					user: Meteor.userId(),
					replyDate: new Date()
				}
			}
		});

		event.target.reply.value = '';

		FlashMessages.sendSuccess('Reply Added');

		return false;
	}
});