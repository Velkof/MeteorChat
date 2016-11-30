
$("#chatContainer").ready(function() {
    chatScrollDown();
});

$(".userLink").on("click", function(){
    chatScrollDown();
});

function chatScrollDown(){
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
};

$(".messageForm").on("submit", function () {
    chatScrollDown();
});

window.onbeforeunload = function (event) {
    changeRoute();
};

window.addEventListener('online', function(e) {
    let routeParam = FlowRouter.getParam('id');
    Meteor.call('users.updatePath', Meteor.userId(), "/dashboard/" + routeParam);

    let key = Meteor.userId() + "unseenMessages";
    let name = routeParam;
    Meteor.call( 'counts.updateOrCreate', key, name, 0);
}, false);

window.addEventListener('offline', function(e) {
    console.log('Connection is down.');
    changeRoute();
}, false);

function changeRoute() {
    Meteor.call('users.updatePath', Meteor.userId(), "signedOut");
};


