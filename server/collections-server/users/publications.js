Meteor.publish('users',function(){
    // you should restrict this publication to only be available to admin users
    return Meteor.users.find({});
});