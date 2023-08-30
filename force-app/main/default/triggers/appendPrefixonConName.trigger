trigger appendPrefixonConName on Consultant__c (before insert,before update) {
    for(consultant__c con : trigger.new){
        if(con.Type__c == 'Employee'){
            con.Name = 'Mr.' + con.Name;
        } else if(con.Type__c == 'Vendor'){
            con.Name = 'Dr.' + con.Name;
        }
    }
}