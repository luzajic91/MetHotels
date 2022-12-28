export class Accomodation {
    
    beds: number;
    price: number;
    minibar: boolean;

    constructor(beds: number, price: number, minibar?: boolean) {
        if (minibar != null && minibar != false) {
            this.beds = beds;
            this.price = price * 1.5;
        } else {
            this.beds = beds;
            this.price = price;
        }
    }

    pricePerBed(): number {
        return this.price/this.beds;
    } 
}
    