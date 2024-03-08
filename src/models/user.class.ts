export class User {
    firstName: string;
    lastName: string;
    birtDate: number;
    street: string;
    zipCode: number;
    city: string;
    email: string;
    position: string
    phoneNumber: number
    salaryYear: number
    insurance: number
    workPlace: string
    dayIssue: number

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birtDate = obj ? obj.birtDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
        this.position = obj ? obj.position : '';
        this.phoneNumber = obj ? obj.phoneNumber : '';
        this.salaryYear = obj ? obj.salaryYear : '';
        this.insurance = obj ? obj.insurance : '';
        this.workPlace = obj ? obj.workPlace : '';
        this.dayIssue = obj ? obj.dayIssue : '';

    }

    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birtDate: this.birtDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email,
            position: this.position,
            phoneNumber: this.phoneNumber,
            salaryYear: this.salaryYear,
            insurance: this.insurance,
            workPlace: this.workPlace,
            dayIssue: this.dayIssue,
        };
    }
}