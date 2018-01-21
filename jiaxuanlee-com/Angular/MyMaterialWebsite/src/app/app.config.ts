import { InjectionToken } from "@angular/core";

export const appConfig = new InjectionToken<string>(`appConfig`);

export interface myAppConfig{
    isDev:boolean;
    serverURL:string;
    carousel:{[key:string]:any};
    layout:{[key:string]:any};
    footer:{[key:string]:any};
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
    },
    layout:{
        breakpoints:{
            xs:`(max-width: 575.99px) and (orientation: portrait), (max-width: 575.99px) and (orientation: landscape)`,
            sm:`(min-width: 576px) and (max-width: 767.99px) and (orientation: portrait), (min-width: 576px) and (max-width: 767.99px) and (orientation: landscape)`,
            md:`(min-width: 768px) and (max-width: 991.99px) and (orientation: portrait), (min-width: 768px) and (max-width: 991.99px) and (orientation: landscape)`,
            lg:`(min-width: 992px) and (max-width: 1199.99px) and (orientation: portrait), (min-width: 992px) and (max-width: 1199.99px) and (orientation: landscape)`,
            xl:`(min-width: 1200px) and (orientation: portrait), (min-width: 1200px) and (orientation: landscape)`,
        }
    },
    footer:{
        height:72
    }
} 

