
public with sharing class AS_DivisionSearch_FormController {
    @AuraEnabled
    public static List<AccountWrapper> returnAccounts(String name, String country, String rating, String city, String active) {
        List<AccountWrapper> wrappers = new List<AccountWrapper>();
        Map<String, String> params = new Map<String, String>();
        params.put('Name', name);
        params.put('BillingCountry',country);
        params.put('Rating',rating);
        params.put('BillingCity',city);
        params.put('Active__c', active);
        try {
            String query = AS_DivisionSearchService.queryGenerator(params);
            List<Account> accounts = Database.query(query);
            wrappers = AS_DivisionSearchService.convertToWrapperList(accounts);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return wrappers;
    }
}