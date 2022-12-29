import { RoomService } from "../services/room.service";

export class Accomodation {
    
    beds: number;
    price: number;
    minibar: boolean;
    nights: number;
    totalPrice: number;
    roomService = new RoomService();

    constructor(beds: number, nights: number, minibar?: boolean) {
        if (minibar != null && minibar != false) {
            this.beds = beds;
            this.price = 150*beds;
            this.nights = nights;
        } else {
            this.beds = beds;
            this.price = 100*beds;
            this.nights = nights;
        }
        this.totalPrice = this.roomService.getPrice(this.nights, this.beds)
    }

    pricePerBed(): number {
        return this.price;
    } 
}
    