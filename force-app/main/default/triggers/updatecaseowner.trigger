trigger updatecaseowner on Case (before insert) {
    //ID queue = [SELECT Id, Name, Type FROM Group where name = 'Pune service queue' and type='queue'].id;
  Group objGrp = [SELECT Id, Name, Type FROM Group where name = 'Pune service queue' and type='queue'];
    ID queueID = objGrp.Id;
    for(case c : trigger.new){
        if(c.origin == 'Phone'){
            //1.Assign the case owner as pune service queue
            c.ownerid = queueID;          
             //selected id,name ,type from group where name ='pune servoice queue' and type = 'queue'
             //2.update the expected closed date to 2 days from today
             c.Expected_Closed_Date__c = system.today() + 2;
              
        }
    }

}