
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


        let chatBuddy = Meteor.users.findOne({'_id': chatBuddyId});


        let pathForChatForOtherUser =  "/dashboard/" + Meteor.userId();
        // console.log(chatBuddy.profile.currentPath + "  " + pathForChatForOtherUser);

        // console.log(Meteor.user());

        if (chatBuddy.profile.currentPath !==  pathForChatForOtherUser) {

        let key = chatBuddyId + "unseenMessages";
        let name = this.userId;
        let value = 1;

        Meteor.call('counts.updateOrCreate', key, name, value);
        };





    },
    'messages.updateStatusToSeen' (messageId) {
        Messages.update({_id: messageId}, {$set: {seenStatus:"Seen"}});
    },
    'messages.unreadCountPerUser' (chatBuddyId) {
        return Messages.find({'userId': chatBuddyId, 'chatBuddyId': Meteor.userId(), 'seenStatus': 'Not seen'}).count();
    },
});

