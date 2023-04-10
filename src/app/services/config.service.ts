import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';


@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  constructor(@Inject(RouteConfigToken) private config : RouteConfig) { 
    console.log("configService Initialized");
    console.log(this.config);
  }
}
