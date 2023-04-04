import { HttpEventType } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Head, Observable, of, Subject } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms'
import { RoomsService } from './services/rooms.service';
import { interval } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  ngAfterViewChecked(): void {

  }

 


  hotelName = 'Sarem';
  hiddenValue = false;
  roomList: RoomList[] = []
  selectedRoom!: RoomList;
  totalBytes = 0;
  @ViewChild (HeaderComponent, ) headerComponent!: HeaderComponent;
  @ViewChildren (HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  stream  = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    observer.error('error');  

  })
  rooms: Room = {
    totalRooms: 20,
    bookedRooms: 10,
    availableRooms: 10
  }

  error  = new Subject<string>();
  getError$ = this.error.asObservable()
  

  rooms$ = this.roomService.getRooms$.pipe(
    catchError((err) => {
      this.error.next(err.message);
      return of([]);
    })
  );
 
  toggle() {
    this.hiddenValue = !this.hiddenValue;
  }

  ngOnInit(): void {
      this.roomService.getPhotos().subscribe(event => {
        switch(event.type) {
          case HttpEventType.Sent: {
            console.log('request has been made')
            break;
          };
          
          case HttpEventType.ResponseHeader: {
            console.log('request success')
            break;
          };

          case HttpEventType.DownloadProgress: {
            this.totalBytes += event.loaded;
            break;
          }

          case HttpEventType.Response: {
            console.log(event.body);
            break;
          }
        }
      });
      this.stream.subscribe(data => {console.log(data)})
      // this.roomService.getRooms$.subscribe(room => {
      //   this.roomList = room;
      // })
  }

  constructor (private roomService: RoomsService) {

  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerChildrenComponent.first.title = 'last - view'
    this.headerComponent.title = "Rooms View"
  }



  selectRoom(room: RoomList) {
    this.selectedRoom = room
  }

  addRoom() {

    const room: RoomList = {
      roomNumber: '2',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      rating: 3.45654,

    }
    this.roomService.addRoom(room).subscribe(data => {
      this.roomList = data
    })
  }

  editRoom() {

    const room: RoomList = {
      roomNumber: '2',
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      rating: 3.45654,

    }

    this.roomService.editRoom(room).subscribe(data => {this.roomList = data}); 

  }
  

  deletRoom() {
    this.roomService.deleteRoom('2').subscribe(data => this.roomList = data);
  }

}


