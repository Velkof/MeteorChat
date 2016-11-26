var publicRoutes = FlowRouter.group({
    prefix: '/',
    name: 'public',
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
            footer: "footer",
            main: "home",
            nav: "nav",
        });
    }
});

privateRoutes.route('/', {
    name:"dashboard",
    action: function() {
        BlazeLayout.render('appBody', {
            footer: "footer",
            main: "dashboard",
            nav: "nav",
        });
    }
});

privateRoutes.route('/test', {
    name:"test",
    action: function() {
        BlazeLayout.render('appBody', {
            footer: "footer",
            main: "test",
            nav: "nav",
        });
    }
});


function checkLoggedIn (ctx, redirect) {
    if (!Meteor.userId()) {
        redirect('/sign-in')
    }
}

// function redirectIfLoggedIn (ctx, redirect) {
//     if (Meteor.userId()) {
//         redirect('/dashboard')
//     }
// }