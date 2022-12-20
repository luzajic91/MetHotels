export class Accomodation {
    
    beds: number;
    price: number;

    constructor(beds: number, price: number) {
        this.beds = beds;
        this.price = price;
    }
    pricePerBed(): number {
        return this.price/this.beds;
    }
        
}
    