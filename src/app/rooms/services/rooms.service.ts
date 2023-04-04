import { Inject, Injectable, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import {} from '../../../environments/environment'
import { environment } from 'src/environments/environment.prod';
import { APP_CONFIG_SERVICE } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/app.interface';
import { Local_STORAGE_SERVICE, Session_STORAGE_SERVICE } from 'src/app/StorageConfig/localstorage.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { share, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService{

  constructor(@Inject(APP_CONFIG_SERVICE) private config: AppConfig , private http: HttpClient) { 
    console.log(config.apiEndPoint)
    console.log("rooms service is initialized")
    
  }
  
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
  )


  

  getRooms() {
    console.log(this.http.get<RoomList[]>('/api/rooms'));
    return this.http.get<RoomList[]>('/api/rooms');
  }
  

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room)
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room)
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }

  getPhotos( ) {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }

  getPhotos$ = this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(
    shareReplay(1),
  );
}






























// {
//   roomNumber: 101,
//   roomType: 'double bed room',
//   amenities: 'air conditioner , shower, bath',
//   price: 650,
//   checkInTime: new Date('04-Nov-2001'),
//   checkOuttime: new Date('05-Nov-2001'),
//   photos: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
// }, {
//   roomNumber: 102,
//   roomType: 'Single bed room',
//   amenities: 'air conditioner , shower, bath',
//   price: 450,
//   checkInTime: new Date('06-Nov-2001'),
//   checkOuttime: new Date('07-Nov-2001'),
//   photos: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
// }, {
//   roomNumber: 103,
//   roomType: 'Double master bed',
//   amenities: 'air conditioner , shower, bath',
//   price: 1000,
//   checkInTime: new Date('04-Nov-2001'),
//   checkOuttime: new Date('05-Nov-2001'),
//   photos: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
// }