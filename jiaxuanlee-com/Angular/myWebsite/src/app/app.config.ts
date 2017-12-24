import { InjectionToken } from "@angular/core";

export const appConfig = new InjectionToken<string>(`appConfig`);

export interface myAppConfig{
    isDev:boolean;
    serverURL:string;
    carousel:{[key:string]:any}
}

export const AppConfigJSON:myAppConfig = {
    isDev:true,
    serverURL:``,
    carousel:{
        imgURL:``
    }
} 

