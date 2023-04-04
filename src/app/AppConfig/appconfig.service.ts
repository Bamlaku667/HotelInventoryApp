import { InjectionToken } from "@angular/core"
import { environment } from "src/environments/environment"
import { AppConfig } from "./app.interface"

export const APP_CONFIG_SERVICE = new InjectionToken<AppConfig>('app.config')

export const APP_CONFIG: AppConfig = {
    apiEndPoint: environment.apiEndpoint
}