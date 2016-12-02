Meteor.publish('users', function() {

    return Meteor.users.find({});
    // var self = this,
    // ready = false;
    //
    // let key = this.userId + "unseenMessages";
    //
    // var subHandle = Meteor.users.find({}).observeChanges({
    //     added: function (id, fields) {
    //         if (!ready) {
    //             let name = id;
    //             let countData = Counts.findOne({key: key, name: name});
    //             if (!!countData) {
    //                 fields.count = countData.value;
    //             } else {
    //                 fields.count = 0;
    //             }
    //         }
    //         self.added("users", id, fields);
    //     },
    //     changed: function(id, fields) {
    //         if (!ready) {
    //             let name = id;
    //             let countData = Counts.findOne({key: key, name: name});
    //             if (!!countData) {
    //                 fields.count = countData.value;
    //             } else {
    //                 fields.count = 0;
    //             }
    //         }
    //         self.changed("users", id, fields);
    //     },
    //     removed: function (id) {
    //         self.removed("users", id);
    //     }
    // });
    //
    // ready = true;
    //
    // self.ready();
    //
    //
    // self.onStop(function () {
    //     subHandle.stop();
    // });
});
//
// Meteor.publish("users", function() {
//
//     let loggedInUserId = this.userId;
//     let key = loggedInUserId + "unseenMessages";
//
//     var transform = function(doc) {
//         let name = doc._id;
//         if(name !== loggedInUserId) {
//             doc.count = Meteor.call('counts.findCountsPerConversation', key, name);
//             return doc;
//         };
//     };
//
//     var self = this;
//
//     var observer = Meteor.users.find().observe({
//         added: function (document) {
//
//             self.added('users', document._id, transform(document));
//         },
//         // changed: function (newDocument, oldDocument) {
//         //     self.changed('users', newDocument._id, transform(newDocument));
//         // },
//         // removed: function (oldDocument) {
//         //     self.removed('users', oldDocument._id);
//         // }
//     });
//
//     self.onStop(function () {
//         observer.stop();
//     });
//
//     self.ready();
// });