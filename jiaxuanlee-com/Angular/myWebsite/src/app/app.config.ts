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
        slides:[
            {imgURL:`${$asssetsImg}carousel/slide1.jpg`,active:true},
            {imgURL:`${$asssetsImg}carousel/slide2.jpg`,active:false},
            {imgURL:`${$asssetsImg}carousel/slide3.jpg`,active:false}
        ],
        imgResolution:{
            width:1920,
            height:1080,
        }
    }
} 

