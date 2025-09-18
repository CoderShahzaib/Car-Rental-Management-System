export class CarModel {
    carId: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    dailyRate: number;
    regNo: string;
    carImage: string;

    constructor(){
        this.carId = 0;
        this.brand = "";
        this.model = "";
        this.year = 0;
        this.color = "";
        this.dailyRate = 0;
        this.regNo = "";
        this.carImage = "";
    }
}

export interface APIResponse {
    message: string;
    result: boolean;
    data: any;
}