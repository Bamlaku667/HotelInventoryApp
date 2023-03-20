import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { 
    console.log("rooms service is initialized")
  }

  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'double bed room',
      amenities: 'air conditioner , shower, bath',
      price: 650,
      checkInTime: new Date('04-Nov-2001'),
      checkOuttime: new Date('05-Nov-2001'),
      photos: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    }, {
      roomNumber: 102,
      roomType: 'Single bed room',
      amenities: 'air conditioner , shower, bath',
      price: 450,
      checkInTime: new Date('06-Nov-2001'),
      checkOuttime: new Date('07-Nov-2001'),
      photos: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    }, {
      roomNumber: 103,
      roomType: 'Double master bed',
      amenities: 'air conditioner , shower, bath',
      price: 1000,
      checkInTime: new Date('04-Nov-2001'),
      checkOuttime: new Date('05-Nov-2001'),
      photos: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    }
  ]

  getRooms() {
    return this.roomList;
  }
}
