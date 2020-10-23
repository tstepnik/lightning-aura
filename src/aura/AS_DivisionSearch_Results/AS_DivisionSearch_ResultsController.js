({
//    tableRowClicked: function(component, event, helper) {
//        let shopId = event.currentTarget.dataset.id;
//        let index = event.currentTarget.dataset.index;
//        let selectedRowIndex = component.get("v.selectedRowIndex");
//        if (!$A.util.isUndefinedOrNull(selectedRowIndex)) {
//            helper.removeHighlightFromAllRows(component);
//        }
//        let rows = component.find("row");
//        $A.util.addClass(rows[index], "row-highlighted");
//        component.set("v.selectedAccount", index);
//        helper.sendRecord(component, index);
//        helper.showShopDetails(component, shopId);
//    },

//    removeHighlightFromAllRowsEventAction: function(component, event, helper) {
//                 helper.removeHighlightFromAllRows(component);
//         },



    handleEvent: function(cmp, event, helper) {
        helper.handleEvent(cmp, event);
    },
    consoleLog: function(cmp, event, helper) {
        console.log('ON ROW ACTION DZIALA');
    }
});