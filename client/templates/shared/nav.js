Template.nav.onRendered(function () {
    $('#at-nav-button').on('click', function () {
        Meteor.call('users.updatePath', Meteor.userId(), "signedOut");
    });
});