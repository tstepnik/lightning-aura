/**
 * Created by BRITENET on 27.10.2020.
 */

public with sharing class AS_DivisionSearch_DetailsController {

    @AuraEnabled
    public static String deleteAccount(String id) {

        Account account = new Account(Id = id);
        try {
            Database.DeleteResult result = Database.delete(account);
            return 'Success';

        } catch (Exception e) {
            System.debug(e.getMessage());
            return e.getMessage();
        }
    }

}