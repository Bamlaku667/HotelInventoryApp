import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './emailvalidator/emailvalidator.directive';
// import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';




export function initFactory(initService : InitService) {
  return () => initService.init();
}
@NgModule({
  declarations: [
    // any component, directives and pipes
    AppComponent,
    ContainerComponent,
    EmployeeComponent,
    AppNavComponent,
    DashboardComponent,
    NotfoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    // RoomsModule,
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
    ToastrModule.forRoot(),
    HeaderModule
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
