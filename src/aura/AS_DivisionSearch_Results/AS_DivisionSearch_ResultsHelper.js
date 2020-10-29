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
        console.log("LISTA SIE USTAWILA");
        console.log("NOWA LISTA");
        console.log(newData);
        console.log(recordId);
    }
});