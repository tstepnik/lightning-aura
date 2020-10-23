public with sharing class AccountWrapper {
    @AuraEnabled
    public String recordId;
    @AuraEnabled
    public String name;
    @AuraEnabled
    public String country;
    @AuraEnabled
    public String rating;
    @AuraEnabled
    public String city;
    @AuraEnabled
    public String active;
    @AuraEnabled
    public String upsellOpportunity;
    @AuraEnabled
    public String street;
    public AccountWrapper(String recordId, String name, String country, String rating, String city, String active, String upsellOpportunity,String street) {
        this.recordId = recordId;
        this.name = name;
        this.country = country;
        this.rating = rating;
        this.city = city;
        this.active = active;
        this.upsellOpportunity = upsellOpportunity;
        this.street = street;
    }
}