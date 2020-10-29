({
    handleEvent: function(component, event, helper) {
        helper.handleEvent(component, event);
    },

    tableRowClicked: function(component, event, helper) {
        let account = event.currentTarget.dataset.id;
        let wrappersList = component.get('v.accountWrappers');
        let index = event.currentTarget.dataset.index;
       let acct = wrappersList[index];
        //        let selectedRowIndex = component.get("v.selectedRowIndex");
        //        if (!$A.util.isUndefinedOrNull(selectedRowIndex)) {
        //            helper.removeHighlightFromAllRows(component);
        //        }
        let rows = component.find("row");
  rows.forEach((element) =>{
            $A.util.removeClass(element, "row-highlighted");
        });
        $A.util.addClass(rows[index], "row-highlighted");
         let eventt = $A.get('e.c:AS_DivisionSearch_SelectAccountEvent');
                        eventt.setParams({"accountWrapper": acct});
                        eventt.fire();
    },
    handleDeleteEvent: function(component,event,helper){
        helper.handleDeleteEvent(component,event);
    }
});