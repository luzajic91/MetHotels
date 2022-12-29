import { Injectable } from "@angular/core";

@Injectable()
export class RoomService {
    
    getPrice(numberOfNights: number, price: number): number {
        return numberOfNights*price;
    }
}