Template.chat.onCreated(function() {
    this.subscribe('users');
    this.subscribe('messages');
    // this.subscribe('counts');

    this.autorun(function(){

    });

    let key = Meteor.userId()  + "unseenMessages";
    let name = FlowRouter.getParam('id');
    let value = 0;

    Meteor.call('counts.updateOrCreate', key, name, value);

});


Template.chat.helpers({
    'chatBuddy': function() {
        let chatBuddyId =  FlowRouter.getParam('id');
        return Meteor.users.findOne({_id: chatBuddyId});
    },
    'messages': function(){

        let chatBuddyId =  FlowRouter.getParam('id');

        return Messages.find({$or:[
                            {'userId': Meteor.userId(), 'chatBuddyId': chatBuddyId},
                            {'userId': chatBuddyId, 'chatBuddyId': Meteor.userId()}
                            ]});
    },
    equals: function(v1, v2) {
        return (v1 === v2);
    }
});

Template.chat.events({
   'submit .messageForm': function(event){
       event.preventDefault();

       const target = event.target;

       const message = target.message.value;

       let chatBuddyId =  FlowRouter.getParam('id');

       Meteor.call('messages.insert', message, chatBuddyId);

       target.message.value = "";

   },
});



