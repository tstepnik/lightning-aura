({
    showSpinner: function(component, event, helper) {
        component.set('v.spinnerVisible', true);
    },

    hideSpinner: function(component, event, helper) {
        console.log('hide spinner');
        component.set('v.spinnerVisible', false);
        console.log(component.get('v.spinnerVisible'));
    },
})