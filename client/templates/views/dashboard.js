Template.dashboard.onCreated(function() {

    //subscribed to both users and counts so that we can add a count field in the user collection on the client side
    //in order to insure reactivity when either the users or counts collection changes
    this.userSubscription = this.subscribe('users');
    this.subscribe('messages');
    this.countSubscriptions = this.subscribe('counts');
    this.users = new ReactiveVar(null);

    let _this = this;
    this.autorun(function () {
        if (!!_this.userSubscription && _this.userSubscription.ready() &&
            !!_this.countSubscriptions && _this.countSubscriptions.ready()) { //when both subscriptions are ready
            let userId = Meteor.userId();
            if (!!userId) {
                let users = Meteor.users.find({_id: {$ne: userId}}); //all users except for current one are listed
                users.forEach(function (user) {
                    let name = user._id;
                    var key = userId + "unseenMessages";
                    let count = Counts.findOne({key: key, name: name});
                    Meteor.users._collection.update({_id: user._id}, {$set: {count: count.value}});
                });
                let us = Meteor.users.find({_id: {$ne: userId}}, {sort: {count: -1}}).fetch();
                console.log(us);
                _this.users.set(us);
            }
        }
    });

});

Template.dashboard.helpers({
    'users': function(){
        return Template.instance().users.get();
    },
});
