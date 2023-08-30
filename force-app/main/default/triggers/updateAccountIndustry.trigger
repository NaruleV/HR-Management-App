//Requirement: If a new account is created or updated,if the 
//rating is 'cold',update the industry to 'Banking'
trigger updateAccountIndustry on Account (before insert) {
    for(Account a: trigger.new){
        if(a.rating == 'Cold'){
            a.industry = 'Banking';
        }
    }

}