public with sharing class AS_WebToLeadController {

    public String firstName { get; set; }
    public String lastName { get; set; }
    public String email { get; set; }
    public String company { get; set; }
    public String phone { get; set; }
    public String industry { get; set; }
    public String leadSource { get; set; }
    public List<String> industries { get; set; }
    public List<SelectOption> industries2 { get; set; }

    public AS_WebToLeadController() {
        industries2 = new List<SelectOption>();
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
        wrapper.createLead();


    }


    public void debugData() {
//        industry = system.currentpagereference().getParameters().get('leadIndustry');
        System.debug('///////////////////');
        System.debug(firstName);
        System.debug(lastName);
        System.debug(email);
        System.debug(company);
        System.debug(phone);
        System.debug(industry);
        System.debug(leadSource);
        System.debug('///////////////////');
        createLead();
        System.debug(industries);
    }


    public void leadIndustryPicListValues() {
        List <String> allOpts = new list < String > ();
        Schema.sObjectType objType = Lead.getSObjectType();
        Schema.DescribeSObjectResult objDescribe = objType.getDescribe();

        map < String, Schema.SObjectField > fieldMap = objDescribe.fields.getMap();


        list < Schema.PicklistEntry > values =
                fieldMap.get('Industry').getDescribe().getPickListValues();

        for (Schema.PicklistEntry a : values) {
            allOpts.add(a.getValue());
        }
        for (String option : allOpts) {
            String indu = option;
            industries2.add(new SelectOption(indu, indu));
        }
        System.debug(industries2);
        industries = allOpts;
    }
}