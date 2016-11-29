Meteor.methods({
   'users.updatePath' (userId, path) {
       Meteor.users.update(userId, {$set: {"profile.currentPath": path}});
   },
});

