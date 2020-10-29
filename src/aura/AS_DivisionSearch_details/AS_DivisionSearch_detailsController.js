({
    doInit: function(component) {
        component.set('v.isRecordEdited', false);
        component.set('v.isRecordClicked', false);
        component.set('v.wrapperIsNotNull', true);
    },
    handler: function(component, event, helper) {
        let id = event.getParam('accountWrapper');
        component.set('v.wrapper', id);
        component.set('v.accountIdd',id.recordId);
        component.set('v.isRecordClicked', true);
        component.set('v.wrapperIsNotNull', true);
    },
    showEditForm: function(component, event, helper) {
        component.set('v.isRecordEdited', true);
    },
    hideEditForm: function(component, event, helper) {
        component.set('v.isRecordEdited', false);

    },

    saveEdit: function(component,event,helper){
        let hideEditFormAction = component.get('c.hideEditForm');
        $A.enqueueAction(hideEditFormAction);
        helper.refreshTable(component);
             component.find('notification').showToast({
                                "title": 'Success',
                                "variant": 'success',
                                "message": 'Account successfully updated'
                            });

    },

    handleConfirmDialog: function(component, event, helper) {
        component.set('v.showConfirmDialog', true);
    },

    handleConfirmDialogYes: function(component, event, helper) {
        helper.removeItem(component);
        component.set('v.showConfirmDialog', false);
         component.set('v.wrapper.recordId',null);
         component.set('v.wrapperIsNotNull',false);

    },

    handleConfirmDialogNo: function(component, event, helper) {
        component.set('v.showConfirmDialog', false);
    },
})