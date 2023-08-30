public class updateAccountonInsert {
    public static void updateAccountActive (list<Account> acclist){
        for(Account a : acclist){
        if(a.rating == 'Cold'){
            a.Active__c = 'Yes';
        }
        }
    }

}