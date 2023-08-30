trigger updateAccountratting2 on Account (before insert,before update) {
    updateAccountonInsert.updateAccountActive(Trigger.new);
  

}