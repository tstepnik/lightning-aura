({
    handleNewRecordModal: function(component, event) {
        component.set('v.showNewRecordModal', true);
    },
    handleSuccess: function(cmp, event) {
        cmp.set('v.showNewRecordModal', false);
        cmp.find('notifLib').showToast({
            "variant": "success",
            "title": "Account Created",
            "message": "Record ID: " + event.getParam("id")
        });
    },
    closeModal: function(cmp, event) {
        cmp.set('v.showNewRecordModal', false);
    },

})