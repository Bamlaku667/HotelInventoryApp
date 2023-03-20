import { AfterViewChecked, AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Head } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms'
import { RoomsService } from './services/rooms.service';

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
  @ViewChild (HeaderComponent, ) headerComponent!: HeaderComponent;
  @ViewChildren (HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  rooms: Room = {
    totalRooms: 20,
    bookedRooms: 10,
    availableRooms: 10
  }


  toggle() {
    this.hiddenValue = !this.hiddenValue;
  }

  ngOnInit(): void {
      this.roomList = this.roomService.getRooms();
   
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

}


