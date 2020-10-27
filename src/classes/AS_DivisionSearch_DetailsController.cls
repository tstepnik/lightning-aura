/**
 * Created by BRITENET on 27.10.2020.
 */

public with sharing class AS_DivisionSearch_DetailsController {

    @AuraEnabled
    public static void deleteAccount(String id) {
        System.debug('INSIDE DELETE ACCOUNT');
        System.debug(id);
        Account account = new Account(Id = id);
        try {
            Database.DeleteResult result = Database.delete(account);
            System.debug(result);
        }catch (Exception e){
            System.debug('EXCEPTION');
            System.debug(e.getMessage());
        }
        }

}