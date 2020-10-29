({
    doInit: function(component) {
        component.set('v.isRecordEdited', false);
        component.set('v.isRecordClicked', false);
        component.set('v.wrapperIsNotNull', true);
    },
    handler: function(cmp, event, helper) {
        let id = event.getParam('accountWrapper');
        cmp.set('v.wrapper', id);
        cmp.set('v.accountIdd',id.recordId);
        cmp.set('v.isRecordClicked', true);
        cmp.set('v.wrapperIsNotNull', true);
    },
    showEditForm: function(cmp, event, helper) {
        cmp.set('v.isRecordEdited', true);
    },
    hideEditForm: function(cmp, event, helper) {
        cmp.set('v.isRecordEdited', false);

    },

    saveEdit: function(cmp,event,helper){
        let hideEditFormAction = cmp.get('c.hideEditForm');
        $A.enqueueAction(hideEditFormAction);
        helper.refreshTable(cmp);
             cmp.find('notification').showToast({
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