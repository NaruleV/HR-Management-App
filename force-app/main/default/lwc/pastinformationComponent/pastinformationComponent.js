import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastevent';
import { NavigationMixin } from 'lightning/navigation';

import  PASTINFO_OBJECT from '@salesforce/schema/Past_Information__c';
import PASTINFO_NAME from '@salesforce/schema/Past_Information__c.Name';
import PASTINFO_PCONSULTANT from '@salesforce/schema/Past_Information__c.PConsultant__c';

import PASTINFO_ENDDATE from '@salesforce/schema/Past_Information_c.End_Date__c';
import PASTINFO_STARTDATE from '@salesforce/schema/Past_Information__c.Start_Date__c';
import PASTINFO_FEEDBACK from '@salesforce/schema/Past_Information__c.Feedback__c';
import PASTINFO_ELIGIBLETOHIRE from '@salesforce/schema/Past_Information__c.Eligible_to_Hire__c';



export default class PastinformationComponent extends NavigationMixin (LightningElement) {
    PastInformationObjectApi = PASTINFO_OBJECT;
    PastInfoID = "Auto Fetched after save";
    PastInfoField = PASTINFO_NAME;
    PastInfoConsultant = PASTINFO_PCONSULTANT;
    PastInfoCompany = PASTINFO_COMPANY;
    PastInfoFeedback = PASTINFO_FEEDBACK;
    PastInfoStartDate = PASTINFO_STARTDATE;
    PastInfoEndDate = PASTINFO_ENDDATE;
    PastInfoEligiblebletoHire = PASTINFO_ELIGIBLETOHIRE;

    redirect = true;
    resetpage = false;
    handleSuccess (event){
        this.pastInfoID = event.detail.id;
        const events = new ShowToastEvent ({
            title : "Successful",
            message : "Past Information Created",
            varient : 'success'

        });
        this.dispatchedEvent(event);
        if(this.redirect == true){
            console.log('handleSuccess'+this.redirect);
            let PconsultantID = event.detail.id;
            this[NavigationMixin.Navigate]({
                type : 'standard__recordPage',
                attributes : {
                    recordId:this.pastInfoID,
                    objectApiName : 'PASTINFO_OBJECT',
                    action : 'view'
                }
            })
        }
        if(this.resetpage== true){
            this.handeleReset();
            
        }


    }
    handleCancle (event){
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
