import {Mongo } from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';

var number;
Template.user.onRendered(function(){

    this.subscribe('messages');

    let chatBuddyId = this.data._id;
    var numberOfUnseen = new ReactiveVar();

    Meteor.call("messages.unreadCountPerUser", chatBuddyId, function(error, result){
        if(error){
            console.log(error.reason);
            return;
        }

        number = result;
        alert("nmb: " + result);
    });


});

Template.user.helpers({
    pathForUser: function(){
        var user = this;

        var params = {
            id: user._id,
        };

        var routename = "/dashboard/:id";
        var path = FlowRouter.path(routename, params);
        return path;
    },
    unreadMessages: function (number) {

        alert(number);
        return number;

    }
});