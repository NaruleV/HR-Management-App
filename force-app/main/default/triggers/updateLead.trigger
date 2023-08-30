trigger updateLead on Lead (before insert,before update) {
    for(Lead l : trigger.new){
        if(l.leadsource == 'web'){
            l.rating = 'warm';
        }
    }
    

}