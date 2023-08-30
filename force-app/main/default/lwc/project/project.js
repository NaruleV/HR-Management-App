import { LightningElement } from 'lwc';
import { ShowToastevent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

import PROJECT_OBJECT from '@salesforce/schema/Project__c';
import PROJECT_NAME from '@salesforce/schema/Project__c.Name';
import PROJECT_DURATION from '@salesforce/schema/Project__c.Duration__c';
import PROJECT_STARTDATE from '@saleforce/schema/Project__c.Start_Date__c';
import PROJECT_BUDGET from '@slaesforce/schema/Project__c.Estimate.Budeget__c';
import PROJECT_ENDATE from '@salesforce/schema/Project__c.End_Date__c';
import PROJECT_CLIENT from '@salesforce/schema/Project__c.Client__c';
import PROJECT_STATUS from '@salesforce/schema/Project__c.Status__c';

export default class Project extends NavigationMixin (LightningElement) {
    ProjectObjectApi = PROJECT_OBJECT;
    ProjectID = "Fetched once the record is created";
    ProjectNameFiled = PROJECT_NAME;
    ProjectClientFiled = PROJECT_CLIENT;
    ProjectDurationFild = PROJECT_DURATION;
    ProjectStartDateFiled = PROJECT_STARTDATE;
    ProjectEndDateFiled = PROJECT_ENDATE;
    ProjectBudgetFiled = PROJECT_BUDGET;
    PRojectStatusFiled = PROJECT_STATUS;
    Project ={};

    redirect = true;
    restpage = false;

    handleSuccess(event){
        this.ProjectID = Event.detail.id;
        const events = new ShowToastevent({
            title: "Successful",
            message : "Project Record Created",
            varient : 'success'
        });
        this.dispatchedEvent(events);
        if(this.redirect == true){
        console.log('handleSuccess'+this.redirect);
        let consultantID = event.detail.id;
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:this.ProjectID,
                objectApiName:'PROJECT_OBJECT',
                actionName:'view'
            }
        })
    }
    if(this.resetpage== true){
        this.handeleReset();
        
    }


}
handleCancle (events){
    //var url = window.location.href;
    //var value =url.substr(0,url.lastIndexof('/')+1);
    //window.history.back();
    //this.template.querySelector('lightning-input-field').reset();
    //return false;
    const inputField = this.template.querySelectorAll(
        'lightning-input-field'
    );
    if(inputFields){
        inputFields.forEach(field => {
            field.reset();

        } );
    }
}
}
