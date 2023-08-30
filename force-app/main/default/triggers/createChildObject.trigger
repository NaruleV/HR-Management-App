trigger createChildObject on Account (after insert) {
    list<contact> conlist = new list<contact>();
    for(Account a : trigger.new){
        if(a.rating == 'Hot'){
            contact con= new contact();
            con.lastname = a.name;
            con.AccountId = a.id;
            conlist.add(con);
            
            
        }
        insert conlist;
    }

}