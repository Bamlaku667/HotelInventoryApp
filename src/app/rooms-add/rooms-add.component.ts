import { Component } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { RoomsService } from '../rooms/services/rooms.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss'],
})
export class RoomsAddComponent {
  successMessage: string = '';
  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    checkinTime: new Date(),
    photos: '',
    rating: 0,
  };

  constructor(private roomService: RoomsService, private toastrService: ToastrService) {}

  AddRoom(roomsForm : NgForm) {
    this.roomService
      .addRoom(this.room)
      .subscribe((data) => 
      {
        (this.toastrService.success  ('Room Added Successfully') )
        roomsForm.reset();
      });
  
  }
}
