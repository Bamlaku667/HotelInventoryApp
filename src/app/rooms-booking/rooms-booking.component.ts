import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit, AfterViewInit {

  id$ = this.router.paramMap.pipe(map(params => params.get('id')) );
  constructor(private router: ActivatedRoute, private configService: ConfigService) {}

  ngOnInit(): void {
    console.log('booking');
  }

  ngAfterViewInit(): void {
    console.log('after view init')
  }

}
