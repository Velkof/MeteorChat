var publicRoutes = FlowRouter.group({
    prefix: '/',
    name: 'public',
    triggersEnter: [redirectIfLoggedIn],
});

var privateRoutes = FlowRouter.group({
    prefix: '/dashboard',
    name: 'private',
    triggersEnter: [checkLoggedIn],
});

publicRoutes.route('/', {
    name: "home",
    action: function() {
        BlazeLayout.render('appBody', {
            nav: "nav",
            main: "home",
            footer: "footer",
        });
    }
});

privateRoutes.route('/', {
    name:"dashboard",
    action: function() {
        BlazeLayout.render('appBody', {
            nav: "nav",
            main: "dashboard",
            footer: "footer",
        });
    }
});

privateRoutes.route('/:id', {
    name: 'chat',
    action: function() {
        BlazeLayout.render("appBody", {
            nav: "nav",
            main: "chat",
            footer: "footer",
        });
    }
});



function checkLoggedIn (ctx, redirect) {
    if (!Meteor.userId()) {
        redirect('/sign-in')
    }
}

function redirectIfLoggedIn (ctx, redirect) {
    if (Meteor.userId()) {
        redirect('/dashboard')
    }
}