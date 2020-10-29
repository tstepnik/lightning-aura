({
    handleEvent: function(cmp, event, helper) {
        helper.handleEvent(cmp, event);
    },

    tableRowClicked: function(cmp, event, helper) {
        let account = event.currentTarget.dataset.id;
        let wrappersList = cmp.get('v.accountWrappers');
        let index = event.currentTarget.dataset.index;
       let acct = wrappersList[index];
        //        let selectedRowIndex = component.get("v.selectedRowIndex");
        //        if (!$A.util.isUndefinedOrNull(selectedRowIndex)) {
        //            helper.removeHighlightFromAllRows(component);
        //        }
        let rows = cmp.find("row");
  rows.forEach((element) =>{
            $A.util.removeClass(element, "row-highlighted");
        });
        $A.util.addClass(rows[index], "row-highlighted");
         let eventt = $A.get('e.c:AS_DivisionSearch_SelectAccountEvent');
                 console.log('let eventt');
                        eventt.setParams({"accountWrapper": acct});
                        eventt.fire();

                        console.log('EVENT SIE WYSLAL');
                        console.log(JSON.stringify(acct));
        //        component.set("v.selectedRowIndex", index);
        //        helper.showShopLocalizationOnMap(component, index);
        //        helper.showShopDetails(component, shopId);
    }
});