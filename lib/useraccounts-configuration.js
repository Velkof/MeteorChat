import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
    defaultLayout: 'appBody',
    defaultLayoutRegions: {
        nav: 'nav',
        footer: 'footer',
    },
    defaultContentRegion: 'main',
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: true,
    enforceEmailVerification: true,
    forbidClientAccountCreation: false,
//    confirmPassword: true,
//    continuousValidation: false,
//    displayFormLabels: true,
//    formValidationFeedback: true,
//    homeRoutePath: '/',
//    showAddRemoveServices: false,
//    showPlaceholders: true,
//
//    negativeValidation: true,
//    positiveValidation: true,
//    negativeFeedback: false,
//    positiveFeedback: true,
//
//    Privacy Policy and Terms of Use
//    privacyUrl: 'privacy',
//    termsUrl: 'terms-of-use',
});




//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
