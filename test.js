if (Meteor.isClient) {

    Template.hello.events({

        'click #btnTest': function (event, template) {
            event.preventDefault();
            if (AutoForm.validateForm('testForm')) {
                console.log("form validated");
            }

        },

    });



}
