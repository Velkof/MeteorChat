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
        var users = Meteor.users.find({'_id': {$ne: userId}}, {sort: {count:-1}});
        users.fetch().forEach(function (doc) {
            console.log(doc);
        });
        return users;
    },
});