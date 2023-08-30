trigger showErrorOnIndustryBanking on Account (before insert) {
    for(Account a : trigger.new){
        if(a.rating == 'Cold' && a.industry == 'Banking'){
            a.addError('You Cannot Create This Record');
        }
    }

}