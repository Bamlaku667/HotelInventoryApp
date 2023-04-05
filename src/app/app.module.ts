import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { APP_CONFIG, APP_CONFIG_SERVICE } from './AppConfig/appconfig.service';
import { Local_STORAGE_SERVICE, Session_STORAGE_SERVICE } from './StorageConfig/localstorage.service';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';




export function initFactory(initService : InitService) {
  return () => initService.init();
}
@NgModule({
  declarations: [
    // any component, directives and pipes
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    DashboardComponent,
    NotfoundComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    LoginComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ToastrModule.forRoot()
    
    ],
  providers: [
    {
      provide: APP_CONFIG_SERVICE,
      useValue: APP_CONFIG
    },
    {
      provide: Local_STORAGE_SERVICE,
      useValue: window.localStorage
    },
    {provide: Session_STORAGE_SERVICE, 
    useValue: window.sessionStorage}, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: RequestInterceptor,
      multi: true,
    }, 
    {
      provide: APP_INITIALIZER,  
      useFactory: initFactory, 
      deps: [InitService], 
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
