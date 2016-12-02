Template.messageReceived.onRendered(function () {
    Meteor.call('messages.updateStatusToSeen', this.data._id);
    $("html, body").animate({ scrollTop: $(document).height() });
});





