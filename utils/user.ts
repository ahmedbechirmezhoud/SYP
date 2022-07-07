export const userData= {
    "email": null,
    "NotificationToken": null,
    "Notifications" : [],
    "FirstName": null,
    "LastName" :null,
    "Gender": null,
    "DateofBirth": null,	
    "PassportNumber":null, 
    "CountryOfResidence"  :null, 
  }

export interface User {
    email: string
    IEEEID: string
    NotificationToken?: string
    Notifications?: Notification[]
    FirstName?: string
    LastName?: string
    Gender?: string
    DateofBirth?: string
    PassportNumber?: string
    CountryOfResidence?: string
  }
  
  export interface Notification{
    title: string
    message: string
  }
  

class CurrentUserStructure{
    
    email= null
    IEEEID= null
    NotificationToken= null
    Notifications= []
    FirstName= null
    LastName= null
    Gender= null
    DateofBirth= null
    PassportNumber= null
    CountryOfResidence= null

    loginJson(data: User){
        Object.assign(this, {...userData, ...data});
    }

    logout(){
        Object.assign(this, {...userData});
    }

    updateInfo(data: User){
        Object.assign(this, data);
    }
}

export var CurrentUser = new CurrentUserStructure();
