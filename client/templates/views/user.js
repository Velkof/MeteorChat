import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

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
});