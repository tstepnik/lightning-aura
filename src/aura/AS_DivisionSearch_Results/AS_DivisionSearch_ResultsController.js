({
    handleEvent: function(cmp, event, helper) {
        helper.handleEvent(cmp, event);
    },

    tableRowClicked: function(cmp, event, helper) {
        let accountId = event.currentTarget.dataset.id;
        let index = event.currentTarget.dataset.index;
        //        let selectedRowIndex = component.get("v.selectedRowIndex");
        //        if (!$A.util.isUndefinedOrNull(selectedRowIndex)) {
        //            helper.removeHighlightFromAllRows(component);
        //        }
        let rows = cmp.find("row");

        $A.util.addClass(rows[index], "row-highlighted");
         let eventt = $A.get('e.c:AS_DivisionSearch_SelectAccountEvent');
                 console.log('let eventt');
                        eventt.setParams({"accountId": accountId});
                        eventt.fire();

                        console.log('EVENT SIE WYSLAL');
        //        component.set("v.selectedRowIndex", index);
        //        helper.showShopLocalizationOnMap(component, index);
        //        helper.showShopDetails(component, shopId);
    }
});