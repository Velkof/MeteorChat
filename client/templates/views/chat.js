Template.chat.onCreated(function() {
    this.subscribe('users');
    this.subscribe('messages');
    this.autorun(function(){

    });
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



