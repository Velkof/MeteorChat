// import {moment} from 'momentjs/moment';

Meteor.methods({
    'messages.insert' (message, chatBuddyId) {
        const date  = moment(new Date()).format("HH:MM:SS DD/MM/YYYY");

        Messages.insert({
            message,
            chatBuddyId,
            userId: Meteor.userId(),
            createdAt: date,
            seenStatus: "Not seen",
        });
    },
    'messages.updateStatusToSeen' (messageId) {
        Messages.update({_id: messageId}, {$set: {seenStatus:"Seen"}});
    },
    'messages.unreadCountPerUser' (chatBuddyId) {

        var ccc222 =  Messages.find({'userId': chatBuddyId, 'chatBuddyId': Meteor.userId(), 'seenStatus': 'Not seen'}).count();
        console.log(ccc222);
        return ccc222;
    },
});

