//
// Template.dashboard.onCreated(function() {
//     this.subscribe('users');
//
//
// });
//
// Template.dashboard.helpers({
//     'users': function(){
//         let id = Meteor.userId();
//         return Meteor.users.find({_id: {$ne: id}});
//     },
// });
//


Template.dashboard.onCreated(function() {
    this.subscribe('users');
    this.subscribe('messages');
});

Template.dashboard.helpers({
    'users': function(){
        let userId = Meteor.userId();
        var users = Meteor.users.find({'_id': {$ne: userId}});

        // Meteor.users.find({ "status.online": true })
        // users.observeChanges({
        //     changed: function(id, fields) {
        //         console.log("id from changed: " + id + "meteor.userid(): " + Meteor.userId());
        //
        //         var user = Meteor.users.findOne({'_id': id});
        //
        //         if(!user.status.online) {
        //             Meteor.call('users.updatePath', id, "offline");
        //         };
        //     },
        // });
        return users;
    },
});