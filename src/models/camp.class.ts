export class camp {
    itemNumber: string;
    supplier: string;
    weight: number;
    materialStandard: string;
    cost: number;
    number: number;
    numberOfRods: number;
   

    constructor(obj?: any) {
        this.itemNumber = obj ? obj.itemNumber : '';
        this.supplier = obj ? obj.supplier : '';
        this.materialStandard = obj ? obj.materialStandard : '';
        this.cost = obj ? obj.cost : '';
        this.weight = obj ? obj.weight : '';
        this.number = obj ? obj.number : '';
        this.numberOfRods = obj ? obj.numberOfRods : '';
    }

    public toJson() {
        return {
            itemNumber: this.itemNumber,
            supplier: this.supplier,
            weight: this.weight,
            materialStandard: this.materialStandard,
            cost: this.cost,
            number: this.number,
            numberOfRods: this.numberOfRods,
        };
    }
}