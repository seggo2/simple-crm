export class User {

    firstName: string;
    lastName: string;
    birtDate: number;
    street: string;
    zipCode: number;
    city: string;




    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birtDate = obj ? obj.birtDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }
}