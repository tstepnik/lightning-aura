({
    handleEvent: function(cmp, event) {
        let accountWrappers = event.getParam('param');
        cmp.set('v.accountWrappers',accountWrappers);
    },
});