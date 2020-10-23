({
    init: function (cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'Account name', fieldName: 'name', type: 'text'},
            {label: 'Country', fieldName: 'country', type: 'text'},
            {label: 'Rating', fieldName: 'rating', type: 'text'},
            {label: 'City', fieldName: 'city', type: 'text'},
            {label: 'Active', fieldName: 'active', type: 'text'},
            {label: 'Upsell Opportunity', fieldName: 'upsellOpportunity', type: 'text'},
        ]);
    },

    handleEvent: function(cmp, event, helper) {
        helper.handleEvent(cmp,event);
    },
    consoleLog : function(cmp, event, helper){
        console.log('ON ROW ACTION DZIALA');
    }
});