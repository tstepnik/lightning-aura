({
 displayAllAccounts: function(cmp, event, helper){
     helper.handleEvent(cmp,event);
 },
     showChosenRecord : function(component, event, helper) {
         let listOfPointers = [{
             location: {
                 City: event.getParam('accountWrapper').city || '',
                 Country: event.getParam('accountWrapper').country || '',
                 Street : event.getParam('accountWrapper').street || ''
             },
             value: event.getParam('accountWrapper').street || '',
             icon: 'custom:custom26',
             title: event.getParam('accountWrapper').name || ''
         }];
         component.set('v.mapMarkers', listOfPointers);
          component.set('v.zoomLevel', 17);

     }
});