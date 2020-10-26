({
 doInit: function(component) {
        component.set('v.isRecordEdited', false);
    },
    handler: function(cmp,event,helper){
        console.log('account wrapper');
        console.log(event.getParam('accountWrapper'));
        let id = event.getParam('accountWrapper');
        cmp.set('v.wrapper',id);
    },
     showEditForm: function(cmp,event,helper){
            cmp.set('v.isRecordEdited',true);
        },
        hideEditForm: function(cmp,event,helper){
            cmp.set('v.isRecordEdited',false);
        }
})