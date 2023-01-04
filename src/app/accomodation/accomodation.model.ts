import { RoomService } from "../services/room.service";

export class Accomodation {
    
    id: number;
    beds: number;
    price: number;
    minibar: boolean;
    nights: number;
    totalPrice: number;
    roomService = new RoomService();

    constructor(id: number, beds: number, nights: number, minibar?: boolean) {
        //this.id = Math.floor(Math.random() * 100) + 1;
        this.id = id;
        if (minibar != null && minibar != false) {
            this.beds = beds;
            this.price = 150*beds;
            this.nights = nights;
            this.minibar = true;
        } else {
            this.beds = beds;
            this.price = 100*beds;
            this.nights = nights;
            this.minibar = false;
        }
        this.totalPrice = this.roomService.getPrice(this.nights, this.price)
    }

    pricePerBed(): number {
        return this.price;
    } 
}
    