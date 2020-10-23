({
//     sendRecord: function(component, index) {
//                let eventShowLocalization = $A.get("e.c:AS_SelectedShopOnList");
//                let account = component.get("v.accountWrappers")[index];
//                eventShowLocalization.setParams({"accountId": account.recordId});
//                eventShowLocalization.fire();
//        },

            removeHighlightFromAllRows: function(component, shopId) {
                  let rows = component.find("row");
                  for(let i=0; i< rows.length; i++){
                 $A.util.removeClass(rows[i], "row-highlighted");
                  }
            },


    handleEvent: function(cmp, event) {

        let accountWrappers = event.getParam('accounts');
        console.log(JSON.parse(accountWrappers));
        cmp.set('v.accountWrappers',accountWrappers);

    }
});