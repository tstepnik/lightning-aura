
({
removeItem: function(cmp){
    console.log('WRAPPER ID');
    console.log(cmp.get('v.wrapper.recordId'));
    const action = cmp.get('c.deleteAccount');
    action.setParams({
        id: cmp.get('v.wrapper.recordId')
    });
    $A.enqueueAction(action);
},
refreshTable: function(cmp){
     let event = $A.get('e.c:AS_DivisionSearch_RefreshTableEvent');
     event.fire();
}

})