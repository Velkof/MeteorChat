import {Mongo } from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';



Template.user.onCreated(function(){


    var self = this;

    this.subscribe('counts');

    var chatBuddyId = this.data._id;
    self.numberOfUnread = new ReactiveVar();
    self.chatBuddyId = new ReactiveVar(chatBuddyId);
    var key = Meteor.userId() + "unseenMessages";

    Meteor.call("counts.getCountForKey", key, function(error, result){
            if(error){
                console.log(error.reason);
                return;
            }

            result.forEach(function (doc) {

                console.log(doc.value);
            });
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
    'counts': function () {
        var key = Meteor.userId() + "unseenMessages";

        let name =  Template.instance().chatBuddyId.get();

        console.log(name);
        let numberOfUnread =  Counts.findOne({key: key, name: name});

        if(numberOfUnread.value > 0) {
            return numberOfUnread;
        }
    },

});
