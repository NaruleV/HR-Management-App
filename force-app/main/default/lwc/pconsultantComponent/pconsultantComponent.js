import { LightningElement,track } from 'lwc';
import { ShoetoastEvent } from 'lightning/platformShowToastEvent';
import PCONSULTANT_OBJECT from '@salesforce/schema/PConsultant__c';
import PCONSULTANT_NAME from '@salesforce/schema/PConsultant__c.Name';
import PCONSULTANT_EMAIL from '@salesforce/schema/PConsultant__c.Email__c'
import PCONSULTANT_DOJ from '@salesforce/schema/PConsultant__c.Date_of_Joining__c';
import PCONSULTANT_AADHARCARD from '@salesforce/schema/PConsultant__c.AadharCard_Number__c';
import PCONSULTANT_PANCARD from '@salesforce/schema/PConsultant__c.Pan_Card__c';
import PCONSULTANT_PHONE from '@salesforce/schema/PConsultant__c.Phone__c';
import PCONSULTANT_TYPE from '@salesforce/schema/PConsultant__c.Type__c';
import PCONSULTANT_SUPERVISOR from '@salesforce/schema/PConsultant__c.Supervisor__c';
import PCONSULTANT_SUPERVISOREMAIL from '@salesforce/schema/PConsultant__c.Sup_Email__c';
import PCONSULTANT_DOB from '@salesforce/schema/PConsultant__c.Date_of_Birth__c';
import PCONSULTANT_STATUS from '@salesforce/schema/PConsultant__c.Status__c';
import getPConsultants from '@salesforce/apex/ConsultantLookupController.getPConsultants';

export default class PConsultantComponent extends LightningElement {
    PConsultantObjectApi = PCONSULTANT_OBJECT;
    ConNameFiled = PCONSULTANT_NAME;
    ConEmailField = PCONSULTANT_EMAIL;
    ConDOJFiled = PCONSULTANT_DOJ;
    ConDOBField = PCONSULTANT_DOB;
    ConAadharNumberFiled = PCONSULTANT_AADHARCARD;
    ConPANnumberFiled = PCONSULTANT_PANCARD;
    ConPhonenumberField = PCONSULTANT_PHONE;
    ConTypeField = PCONSULTANT_TYPE;
    ConSupervisorFiled = PCONSULTANT_SUPERVISOR;
    ConSupervisorEmailField = PCONSULTANT_SUPERVISOREMAIL;
    ConStatusFiled = PCONSULTANT_STATUS;
    PConsultantID = "Fetched once the record is created";
    pconsultant={};
    pconsultantData;

    handleSuccess(events){
        this.pconsultantID = event.detail.id;
        const event =  new ShowtoastEvent({
            title: "Successful",
            message : "Consultant Record Created",
            varient : 'success'
        });
        this.dispatchEvent(events);
    }
    handlechange(event){
        let targetId = event.target.value
        console.log('targetId : ' + targetId);
        getPConsultants({ })
        .then((data) => {
            console.log(data);
            //this,consultantData = data;
            console.log('this.pconsultantData', this.pconsultant);
            this.dispatchEvent(
                new ShoetoastEvent({
                    title: "Lookup data loaded Successfully",
                    message: "",
                    varient: "success"
                })
            );
        })
        .catch((error) => {
            console.log(error.message);
            this.dispatchEvent(
                new ShoetoastEvent({
                    title: "Unable to load consultant",
                    message: error.message,
                    varient: "error"
                })
            );
        });
    }

}

