({
handleEvent: function(cmp, event) {
        let listOfPointers = [];
        let iter = 0;
        let data = event.getParam('param');
        data.forEach((element) =>{
            listOfPointers[iter++] = {
                location: {
                    City: element.city,
                    Country: element.country,
                    Street : element.street
                },
                description: element.name
            };
        });
        cmp.set('v.mapMarkers', listOfPointers);
    }
})