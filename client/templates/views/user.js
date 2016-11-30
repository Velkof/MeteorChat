import {Mongo } from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';



Template.user.onCreated(function(){
    var self = this;

    this.autorun(function(){
        self.subscribe('counts');
    });

    var chatBuddyId = this.data._id;
    self.chatBuddyId = new ReactiveVar(chatBuddyId);
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
        let numberOfUnread =  Counts.findOne({key: key, name: name});

        if(numberOfUnread.value > 0) {
            return numberOfUnread;
        }
    },
    'status': function() {
        if (this.status.idle)
            return "statusIdle";
        else if (this.status.online)
            return "statusOnline";
        else
            return "statusOffline";
    }
});
