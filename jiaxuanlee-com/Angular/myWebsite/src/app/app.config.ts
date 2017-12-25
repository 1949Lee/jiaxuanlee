import { InjectionToken } from "@angular/core";

export const appConfig = new InjectionToken<string>(`appConfig`);

export interface myAppConfig{
    isDev:boolean;
    serverURL:string;
    carousel:{[key:string]:any}
}
const $asssets = `./assets/`;
const $asssetsImg = `./assets/img/`;

export const AppConfigJSON:myAppConfig = {
    isDev:true,
    serverURL:``,
    carousel:{
        imgURL:[
            `${$asssetsImg}carousel/slide1.jpg`,
            `${$asssetsImg}carousel/slide2.jpg`,
            `${$asssetsImg}carousel/slide3.jpg`,
        ],
        imgResolution:{
            width:1920,
            height:1080,
        }
    }
} 

