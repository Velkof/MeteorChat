// Meteor.publish('users',function(){
//     // you should restrict this publication to only be available to admin users
//     console.log("ddd");
//
//     return Meteor.users.find({}, {transform: function (doc){
//        doc.count = 0;
//        return doc;
//     }});
//
// });



Meteor.publish("users", function() {

    let loggedInUserId = this.userId;
    let key = loggedInUserId + "unseenMessages";

    var transform = function(doc) {
        let name = doc._id;
        if(name !== loggedInUserId) {
            doc.count = Meteor.call('counts.findCountsPerConversation', key, name);
            return doc;
        }
    };

    var self = this;

    var observer = Meteor.users.find().observe({
        added: function (document) {
            self.added('users', document._id, transform(document));
        },
        changed: function (newDocument, oldDocument) {
            self.changed('users', newDocument._id, transform(newDocument));
        },
        // removed: function (oldDocument) {
        //     self.removed('users', oldDocument._id);
        // }
    });

    self.onStop(function () {
        observer.stop();
    });

    self.ready();
});