({
    doInit: function(component) {
        component.set('v.isRecordEdited', false);
        component.set('v.isRecordClicked', false);
    },
    handler: function(cmp, event, helper) {
        console.log('account wrapper');
        console.log(event.getParam('accountWrapper'));
        let id = event.getParam('accountWrapper');
        cmp.set('v.wrapper', id);
        cmp.set('v.isRecordClicked', true);
    },
    showEditForm: function(cmp, event, helper) {
        cmp.set('v.isRecordEdited', true);
    },
    hideEditForm: function(cmp, event, helper) {
        cmp.set('v.isRecordEdited', false);
    },

    saveEdit: function(cmp,event,helper){
        hideEditForm(cmp,event,helper);
        helper.refreshTable(cmp);
    },

    handleConfirmDialog: function(component, event, helper) {
        component.set('v.showConfirmDialog', true);
    },

    handleConfirmDialogYes: function(component, event, helper) {
        helper.removeItem(component);
        component.set('v.showConfirmDialog', false);
                helper.refreshTable(component);
    },

    handleConfirmDialogNo: function(component, event, helper) {
        console.log('No');
        component.set('v.showConfirmDialog', false);
    },
})