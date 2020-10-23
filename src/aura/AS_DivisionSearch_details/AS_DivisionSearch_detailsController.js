({

    handler: function(cmp,event,helper){
        let id = event.getParam('accountId');
        cmp.set('v.accountId',id);
    }
})