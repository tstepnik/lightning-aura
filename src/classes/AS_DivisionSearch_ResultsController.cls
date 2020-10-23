public with sharing class AS_DivisionSearch_ResultsController {
    @AuraEnabled
    public static List<Account> returnAccounts() {
        String query = 'SELECT Id,Name,BillingCountry FROM Account';
        List<Account> accounts = Database.query(query);
        return accounts;
    }
}