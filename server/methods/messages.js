// import {moment} from 'momentjs/moment';

Meteor.methods({
    'messages.insert' (message, chatBuddyId) {
        const date  = moment(new Date()).format("HH:MM:SS DD/MM/YYYY");

        Messages.insert({
            message,
            chatBuddyId,
            userId: Meteor.userId(),
            createdAt: date,
            seenStatus: "Sent",
        });
    },
});