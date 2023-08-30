import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastevent';
import { NavigationMixin } from 'lightning/navigation';

import CLIENT_OBJECT from '@salesforce/schema/Client__c';
import CLIENT_NAME from '@salesforce/schema/Client__c.Name';
import CLIENT_COMPANY from '@salesforce/schema/Client__c.Company__c';
import CLIENT_WEBSITE from '@salesforce/schema/Client__c.Website__c';
import CLIENT_STREETADDR from '@salesforce/schema/Client__c.Street_Address__c';
import CLIENT_STATE from '@salesforce/schema/Client__c.State__c';
import CLIENT_CITY from '@salesforce/schema/Client__c.City__c';
import CLIENT_PHONE from '@salesforce/schema/Client__c.Phone__c';
import CLIENT_FAX from '@salesforce/schema/Client__c.Fax__c';
import CLIENT_POSTALCODE from '@salesforce/schema/Client__c.Postal_Code__c';



export default class Client extends NavigationMixin (LightningElement) {
    ClientObjectApi = CLIENT_OBJECT;
    ClientID = "Fetched once the record is created";
    ClientNameField = CLIENT_NAME;
    ClientCompanyField = CLIENT_COMPANY;
    ClientWebsiteField = CLIENT_WEBSITE;
    ClientStreetAddrField = CLIENT_STREETADDR;
    ClientStateField = CLIENT_STATE;
    ClientCityField = CLIENT_CITY;
    ClientPostalCodeField = CLIENT_POSTALCODE;
    ClientFaxField = CLIENT_FAX;
    ClientFaxField = CLIENT_PHONE;
    Client={};

    redirect = true;
    resetpage = false;
    handleSuccess (event){
        this.pastInfoID = event.detail.id;
        const events = new ShowToastEvent ({
            title : "Successful",
            message : "Past Information Created",
            varient : 'success'

        });
        this.dispatchedEvent(events);
        if(this.redirect == true){
            console.log('handleSuccess'+this.redirect);
            let PconsultantID = event.detail.id;
            this[NavigationMixin.Navigate]({
                type : 'standard__recordPage',
                attributes : {
                    recordId:ClientID,
                    objectApiName : 'CLIENT_OBJECT',
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