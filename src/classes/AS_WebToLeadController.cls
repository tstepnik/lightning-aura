public with sharing class AS_WebToLeadController {

    public String firstName { get; set; }
    public String lastName { get; set; }
    public String email { get; set; }
    public String company { get; set; }
    public String phone { get; set; }
    public String industry { get; set; }
    public String leadSource { get; set; }
    public List<SelectOption> industries { get; set; }

    public AS_WebToLeadController() {
        industries = new List<SelectOption>();
        leadIndustryPicListValues();
    }

    public void createLead() {
        AS_WebToLeadWrapper wrapper = new AS_WebToLeadWrapper(
                firstName,
                lastName,
                email,
                company,
                phone,
                industry,
                leadSource
        );
        try {
            wrapper.createLead();
            clearData();
        }catch (Exception e){
            ApexPages.addMessage(new ApexPages.message(Apexpages.Severity.ERROR, e.getMessage()));
            System.debug(e);
        }
    }

    public void leadIndustryPicListValues() {
        Schema.sObjectType objType = Lead.getSObjectType();
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();

        map < String, Schema.SObjectField > fieldMap = objDescribe.fields.getMap();

        list < Schema.PicklistEntry > values =
                fieldMap.get('Industry').getDescribe().getPickListValues();

        industries.add(new SelectOption('', ''));
        for (Schema.PicklistEntry a : values) {
            String option = a.getValue();
            industries.add(new SelectOption(option, option));
        }
    }

    public void clearData() {
        firstName = '';
        lastName = '';
        email = '';
        company = '';
        phone = '';
        industry = '';
        leadSource = '';
    }
}