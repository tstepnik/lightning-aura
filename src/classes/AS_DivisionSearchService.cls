/**
 * Created by BRITENET on 23.10.2020.
 */

public with sharing class AS_DivisionSearchService {


    public static String queryGenerator(Map<String, String> parameters) {
        String query = 'SELECT Id,Name,BillingCountry, Rating, BillingCity, BillingStreet, Active__c, UpsellOpportunity__c FROM Account WHERE RecordType.Name = \'Division\'';

        if (emptyParameters(parameters)) {
            return query;
        }

        for (String key : parameters.keySet()) {
            if (String.isNotBlank(parameters.get(key))) {
                    if (key == 'id') {
                        query += ' AND ' + key + ' = \'' + parameters.get(key) + '\'';

                    } else {
                        query += ' AND ' + key + ' LIKE \'' + parameters.get(key) + '%\'';
                    }
            }
        }
        return query;
    }

    public static Boolean emptyParameters(Map<String, String> parameters) {
        if (parameters.isEmpty()) {
            return true;
        }

        for (String key : parameters.keySet()) {
            if (String.isNotBlank(parameters.get(key))) {
                return false;
            }
        }
        return true;
    }

    public static List<AccountWrapper> convertToWrapperList(List<Account> accounts){
        List<AccountWrapper> wrappers = new List<AccountWrapper>();
        for (Account account : accounts) {
            wrappers.add(new AccountWrapper(
                    account.Id,
                    account.Name,
                    account.BillingCountry,
                    account.Rating,
                    account.BillingCity,
                    account.Active__c,
                    account.UpsellOpportunity__c,
                    account.BillingStreet
            ));
        }
        return wrappers;
    }

}