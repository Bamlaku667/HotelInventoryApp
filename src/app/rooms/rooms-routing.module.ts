import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from '../rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms.component';
import { RoomsBookingComponent } from '../rooms-booking/rooms-booking.component';

const routes: Routes = [
  {path: 'rooms', component: RoomsComponent}, 
  {path: 'addroom', component: RoomsAddComponent},
  {path: 'rooms/:id', component: RoomsBookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
