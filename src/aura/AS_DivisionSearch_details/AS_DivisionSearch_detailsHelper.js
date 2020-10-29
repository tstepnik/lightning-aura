({
    removeItem: function(component) {
        const action = component.get('c.deleteAccount');
        action.setParams({
            id: component.get('v.wrapper.recordId')
        });
        action.setCallback(this, function(response) {

            const status = response.getState();
            var resultMessage = response.getReturnValue();
            if (status === 'SUCCESS') {

                if (resultMessage.includes('Success')) {
                    component.find('notification').showToast({
                        "title": 'Success',
                        "variant": 'success',
                        "message": 'Account successfully deleted'
                    });


                    let event = $A.get('e.c:AS_DivisionSearch_DeleteRecordEvent');
                    event.setParams({
                        "recordId": component.get('v.accountIdd')

                    });
                    event.fire();
                    console.log("EVENT SIE WYSYLA");

                } else {
                    component.find('notification').showToast({
                        "variant": "error",
                        "title": "Error",
                        "message": resultMessage,
                    });
                }
            } else {
                component.find('notification').showToast({
                    "variant": "error",
                    "title": "Error",
                    "message": 'There has been a problem processing your request',
                });
            }
        });

        $A.enqueueAction(action);
    },
    refreshTable: function(component) {
        let event = $A.get('e.c:AS_DivisionSearch_RefreshTableEvent');
             event.fire();

        console.log('FIRE EVENT DZIALA');
    },
    editItem: function(component){

    }


})