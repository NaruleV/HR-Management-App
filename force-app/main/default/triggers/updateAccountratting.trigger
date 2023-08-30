trigger updateAccountratting on Account (before insert,before update) {
    for(Account a : trigger.new){
        if(a.rating == 'Hot'){
            a.industry = 'Banking';
                } else{a.industry = 'Education';
                    
                }
    }
}