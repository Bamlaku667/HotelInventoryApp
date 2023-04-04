import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { InitService } from './init.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit , OnInit{
  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent)
    componentRef.instance.hotelName = 'Hilton'
  }
  title = 'hotelInventoryApp';
  role = 'admin';
  @ViewChild ('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', {static: true}) name!: ElementRef;
  constructor(private initService: InitService) {
  }

  ngOnInit() {
    const elementRef = this.name.nativeElement.innerText = 'hilton hotel';
    console.log(this.initService.config);

  }
  
}
