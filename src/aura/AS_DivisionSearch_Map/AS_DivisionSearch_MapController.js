({
    init: function(cmp, event, helper) {

    },

    handleMarkerSelect: function(cmp, event, helper) {
//        var marker = event.getParam("selectedMarkerValue");
    },

    handleAccount: function(cmp, event, helper) {
        let listOfPointers = [];
        let iter = 0;
        console.log(event.getParam('param'));
        event.getParam('param').forEach((element) => {
            if (element.city || element.country || element.street) {

                listOfPointers[iter++] = {
                    location: {
                        City: element.city,
                        Country: element.country,
                        Street: element.street
                    },
                    value: 'Poland',
                    icon: 'custom:custom26',
                    title: element.name
                };
            }
        });
        console.log(listOfPointers);
        cmp.set('v.mapMarkers', listOfPointers);
        cmp.set('v.markersTitle', 'Our Shops');
    }
});