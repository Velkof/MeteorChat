/**
 * Created by Marjan on 11/26/2016.
 */
Meteor.startup(function(){

    //
    // //MAIL_URL setup
    // var login = encodeURIComponent("disposablemailforprojects@gmail.com");
    // var password = encodeURIComponent("dBn@XwT:RN=8Jt?D");
    // var domain = "smtp.gmail.com";
    // var port = 587;
    // process.env.MAIL_URL = "smtp://" + login + ":" + password + "@" + domain + ":" + port;


    var login = encodeURIComponent("postmaster@sandboxeb1990b49d244d55baf8f77247d7a7f5.mailgun.org");
    var password = encodeURIComponent("00b8e4afc5afd5f5dc484865b1723272");
    var domain = "smtp.mailgun.org";
    var port = 587;
    process.env.MAIL_URL = "smtp://" + login + ":" + password + "@" + domain + ":" + port;
});