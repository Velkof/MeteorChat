/**
 * Created by Marjan on 11/26/2016.
 */
Meteor.startup(function(){


    //MAIL_URL setup
    var login = encodeURIComponent("disposablemailforprojects@gmail.com");
    var password = encodeURIComponent("MPskYSJMt7QpagKX");
    var domain = "smtp.gmail.com";
    var port = 587;
    process.env.MAIL_URL = "smtp://" + login + ":" + password + "@" + domain + ":" + port;
});