trigger avoidDeleteofconsultant on PConsultant__c (before delete) {
    for(pconsultant__c con:trigger.old){
        if(con.type__c=='Employee'){
            con.addError('You cannot delete this record pleasecontact admin for more details!');
        }
    }
    
    

}