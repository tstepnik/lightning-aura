({
    search: function(component, event, helper) {
        console.log('WCHODZI DO SEARCH');
        helper.search(component);
        console.log('WYCHODZI Z SEARCH DO SEARCH');
    },

    clear: function(component, event, helper) {
        helper.clear(component);
    },
})