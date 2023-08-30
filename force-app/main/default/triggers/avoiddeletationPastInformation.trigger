trigger avoiddeletationPastInformation on Past_Information__c (before delete) {
    list<Id> conId = new List<Id>();
    for(Past_Information__c pi:trigger.old){
        conID.add(pi.pconsultant__c);
        
    }
    Map<Id,pconsultant__c> mapconId = new
        Map<Id,pconsultant__c>();
    for(Pconsultant__c c:[Select Id,Type__c from Pconsultant__c Where Id IN:conID]){
        mapConID.put(c.ID,c);
        
    }
    for(Past_Information__c pi:trigger.old){
        if(mapConID.containsKey(pi.PConsultant__c)){
            if(mapConID.get(pi.PConsultant__c).Type__c=='Employee'){
                pi.addError('You cannot delete this past information record because its parent type is Employee');
            }
        }
    }
    

}