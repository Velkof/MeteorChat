Meteor.publish('counts',function(){
    return Counts.find({});
});