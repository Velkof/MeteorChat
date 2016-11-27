
Template.dashboard.onCreated(function() {
    this.subscribe('users');


});

Template.dashboard.helpers({
    'users': function(){
        let id = Meteor.userId();
        return Meteor.users.find({_id: {$ne: id}});
    },
});