({
    handleEvent: function(cmp, event) {
        let accountWrappers = event.getParam('param');
        cmp.set('v.accountWrappers',accountWrappers);
    },
    handleDeleteEvent: function(component,event){

  console.log('table in handleDeleteEvent method');
        let recordId = event.getParam('recordId');
        let oldData = component.get('v.accountWrappers');
        let newData = [];
        oldData.forEach((element) =>{
            if( element.recordId != recordId){
                newData.push(element);
            }
        });
        component.set('v.accountWrappers',newData);

    }
//    handleEditEvent: function(component,event){
//
//        let eventWrapper = event.getParam('record');
//
//                let oldData = component.get('v.data');
//                oldData.forEach((element) =>{
//                    if( element.Id === eventWrapper.Id){
//
//                        element = eventWrapper;
//                    }
//                });
//                component.set('v.data',oldData);
//    }
});
