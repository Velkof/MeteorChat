import { AccountsTemplates } from 'meteor/useraccounts:core';

/**
 * The useraccounts package must be configured for both client and server to work properly.
 * See the Guide for reference (https://github.com/meteor-useraccounts/core/blob/master/Guide.md)
 */

AccountsTemplates.configure({
    showForgotPasswordLink: true,
    defaultLayout: 'appBody',
    defaultLayoutRegions: {
        nav: 'nav',
        footer: 'footer',
    },
    defaultContentRegion: 'main',
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
});

// AccountsTemplates.configureRoute('signIn', {
//     name: 'signin',
//     path: '/signin',
// });
//
// AccountsTemplates.configureRoute('signUp', {
//     name: 'join',
//     path: '/join',
// });
//
// AccountsTemplates.configureRoute('forgotPwd');
//
// AccountsTemplates.configureRoute('resetPwd', {
//     name: 'resetPwd',
//     path: '/reset-password',
// });

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
