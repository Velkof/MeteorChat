

Meteor.methods({

    'counts.updateOrCreate' (key, name, value) {

        var findDocument = Counts.findOne({key: key, name: name});

        if(!findDocument) {
            Counts.insert({
                key: key,
                name: name,
                value: 1,
            });
        } else if (value == 0) { //if value is 0, we reset value in collection
            Counts.update({_id: findDocument._id}, {$set: {value: 0}});

        } else {

            var newValue = findDocument.value + value;

           Counts.update({_id: findDocument._id}, {$set: {value: newValue}});

        }
    },
    'counts.findCountsPerConversation' (key, name) {
        var count =   Counts.findOne({key: key, name: name});

        if(count) {
            return count.value;
        } else {
            return 0;
        }

    }
});