({
    search: function(component) {
        this.showSpinner(component);
        const action = component.get('c.returnAccounts');
        action.setParams({
            name: component.get('v.accountName'),
            country: component.get('v.country'),
            rating: component.get('v.rating'),
            city: component.get('v.city'),
            active: component.get('v.active'),
            upsellOpportunity: component.get('v.upsellOpportunity')});

        action.setCallback(this, function(response) {
            const status = response.getState();
            if (status === 'SUCCESS') {

                let event = $A.get('e.c:AS_DivisionSearch_SearchEvent');
                event.setParams({"params": response.getReturnValue()});
                event.fire();
                this.handleShowToast(component, event, 'Success', 'success', 'Success operation');
            } else {
                this.handleShowToast(component, event, 'Error', 'error', 'Error while processing loading data');
                let errors = response.getError();
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    console.error(JSON.stringify(errors[0].message));
                }
            }
            this.hideSpinner(component);
        });
        $A.enqueueAction(action);
    },

    showSpinner: function(component) {
        component.find('spinner').showSpinner();
    },
    hideSpinner: function(component) {

        console.log('SPINNER');
        console.log(component.find('spinner'));
        component.find('spinner').hideSpinner();
    },

    handleShowToast: function(component, event, title, variant, message) {
        component.find('notification').showToast({
            "title": title,
            "variant": variant,
            "message": message
        });
    },

    clear: function(component) {
        component.set('v.accountName', '');
        component.set('v.city', '');
        component.set('v.country', '');
        component.set('v.active', '');
        component.set('v.rating', '');
        component.set('v.upsellOpportunity', '');
    },
})