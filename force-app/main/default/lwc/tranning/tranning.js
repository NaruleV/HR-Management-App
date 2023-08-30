import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

import TRAINING_OBJECT from '@salesforce/schema/training__c';
import TRAINING_NAME from '@salesforce/schema/training __c.Name';
import TRAINING_COORDINATOR from '@salesforce/schema/training__c TRAINING _Coordinator__c';
import TRAINING_STARTDATE from '@salesforce/schema/training__c.Start_Date__c';
import TRAINING_ENDDATE from '@salesforce/schema/training__c.End_Date__c';
import TRAINING_TECHNOLOGY from '@salesforce/schema/training__c.Technology__c';
import TRAININGS from '@salesforce/schema/training__c.Trainings__c';
import TRAINING_STATUS from '@salesforce/schema/training__c.Status__c';

export default class Tranning extends NavigationMixin (LightningElement) {
 TRAININGObjectApi = TRAINING_OBJECT;
 TRAININGID = "Fetched once the record is Created";
 TRAININGNameField = TRAINING_NAME;
 TRAININGCoordinator = TRAININ_COORDINATOR;
 TRAININGStartDate = TRAINING_STARTDATE;
 TRAININGEndDate = TRAINING_ENDDATE;
 TRAININGTechnologyField = TRAINING_TECHNOLOGY;
 TRAININGsField = TRAININGS;
 TRAININGStatusField = TRAINING_STATUS;
 TRAINING = {};


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