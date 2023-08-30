trigger ChildpastInformation on PConsultant__c (before insert) {
    list<Past_Information__c> plist = new
        list<Past_Information__c>();
    for(Pconsultant__c con :trigger.new){
        if(con.Type__c == 'Employee'){
            Past_Information__c pi = new Past_Information__c();
            pi.pconsultant__c = con.id;
             
            plist.add(pi);
        }
    }
    insert plist;
    
            
        }