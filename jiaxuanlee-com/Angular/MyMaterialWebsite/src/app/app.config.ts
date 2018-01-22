import { InjectionToken } from "@angular/core";

export const appConfig = new InjectionToken<string>(`appConfig`);

export interface myAppConfig{
    lang:string;
    isDev:boolean;
    serverURL:string;
    carousel:{[key:string]:any};
    layout:{[key:string]:any};
    footer:{[key:string]:any};
    header:{[key:string]:any};
}
const $asssets = `./assets/`;
const $asssetsImg = `./assets/img/`;
const dict = {
    cn:{
        header:{
            items:{
                '1':"首页",
                '11':"首页1",
                '12':"首页2",
                '2':"豆瓣电影",
                '21':"最新电影",
                '22':"电影排行",
                '3':"举例说明",
            }
        }
    },
    en:{
        header:{
            items:{
                '1':"Home",
                '11':"Home1",
                '12':"Home2",
                '2':"Movies",
                '21':"Latest Movies",
                '22':"Top Movies",
                '3':"For Example",
            }
        }
    }
}

export class AppConfig implements myAppConfig{
    lang = "cn";
    isDev = true;
    serverURL = ``;
    carousel = {
        slides:[
            {imgURL:`${$asssetsImg}carousel/slide1.jpg`,active:true},
            {imgURL:`${$asssetsImg}carousel/slide2.jpg`,active:false},
            {imgURL:`${$asssetsImg}carousel/slide3.jpg`,active:false}
        ],
        imgResolution:{
            width:1920,
            height:1080,
        }
    };
    layout = {
        breakpoints:{
            xs:`(max-width: 575.99px) and (orientation: portrait), (max-width: 575.99px) and (orientation: landscape)`,
            sm:`(min-width: 576px) and (max-width: 767.99px) and (orientation: portrait), (min-width: 576px) and (max-width: 767.99px) and (orientation: landscape)`,
            md:`(min-width: 768px) and (max-width: 991.99px) and (orientation: portrait), (min-width: 768px) and (max-width: 991.99px) and (orientation: landscape)`,
            lg:`(min-width: 992px) and (max-width: 1199.99px) and (orientation: portrait), (min-width: 992px) and (max-width: 1199.99px) and (orientation: landscape)`,
            xl:`(min-width: 1200px) and (orientation: portrait), (min-width: 1200px) and (orientation: landscape)`,
        }
    };
    footer = {
        height:72
    };
    header = {
        isDragable:false,
        items:[
            {id:'index',text:dict[this.lang].header.items['1'],subItems:[dict[this.lang].header.items['11'],dict[this.lang].header.items['12']]},
            {id:'movies',text:dict[this.lang].header.items['2'],subItems:[dict[this.lang].header.items['21'],dict[this.lang].header.items['22']]},
            {id:'form',text:dict[this.lang].header.items['3'],subItems:null},
        ]
    };
    constructor(){
        console.log(`app 配置`);
    }
    
    changeLang(l:string){
        this.lang = l;
        this.header = {
            isDragable:false,
            items:[
                {id:'index',text:dict[this.lang].header.items['1'],subItems:[dict[this.lang].header.items['11'],dict[this.lang].header.items['12']]},
                {id:'movies',text:dict[this.lang].header.items['2'],subItems:[dict[this.lang].header.items['21'],dict[this.lang].header.items['22']]},
                {id:'form',text:dict[this.lang].header.items['3'],subItems:null},
            ]
        };
    }
} 
export let AppConfigJSON = new AppConfig();
