public with sharing class AS_WebToLeadWrapper {

    public String firstName { get; set; }
    public String lastName { get; set; }
    public String email { get; set; }
    public String company { get; set; }
    public String phone { get; set; }
    public String industry { get; set; }
    public String leadSource { get; set; }

    public AS_WebToLeadWrapper(String fn, String ln, String email, String company, String phone, String industry, String leadSource) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.company = company;
        this.phone = phone;
        this.industry = industry;
        this.leadSource = leadSource;
    }

    public void createLead() {
        Lead lead = new Lead(
                FirstName = firstName,
                LastName = lastName,
                Email = email,
                Company = company,
                Phone = phone,
                Industry = industry,
                LeadSource = 'Web',
                Source_Recommendation__c = leadSource
        );
        try {
            insert lead;
        } catch (Exception e) {
            System.debug(e.getMessage());
            throw e;
        }
    }
}