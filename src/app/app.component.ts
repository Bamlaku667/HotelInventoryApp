import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.hotelName = 'Hilton';
  }
  title = 'hotelInventoryApp';
  role = 'admin';
  @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true }) name!: ElementRef;
  constructor(
    private initService: InitService,
    private configService: ConfigService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.router.events.subscribe((event) => {console.log(event)});
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => console.log(event));
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => console.log(event));
    const elementRef = (this.name.nativeElement.innerText = 'hilton hotel');
    console.log(this.initService.config);
  }
}
