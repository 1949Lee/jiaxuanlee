import { InjectionToken } from "@angular/core";

export const appConfig = new InjectionToken<string>(`appConfig`);

export interface myAppConfig {
    lang: string;
    isDev: boolean;
    serverURL: string;
    carousel: { [key: string]: any };
    layout: { [key: string]: any };
    footer: { [key: string]: any };
    header: { [key: string]: any };
}
const $asssets = `./assets/`;
const $asssetsImg = `./assets/img/`;
const dict = {
    cn: {
        app: {
            title: '镜中之人'
        },
        header: {
            items: {
                '1': "首页",
                '11': "首页1",
                '12': "首页2",
                '2': "网易音乐",
                '21': "最新歌曲",
                '22': "歌曲排行",
                '3': "举例说明",
            }
        },
        indexTab: {
            title: `最火的技术，最新的开始`,
            subTitle: `移动开发的热度逐渐退去，但对于程序员来说，人工智能时代已经来临。`,
            textFooter: `了解更多`,
            tab: [
                {
                    id: "Angular",
                    title: `NGULAR`,
                    subTitle: `一套框架，多种平台，移动端 & 桌面端`,
                    text: `学会用Angular构建应用，然后把这些代码和能力复用在多种多种不同平台的应用上 —— Web、移动 Web、移动应用、原生应用和桌面原生应用。<br>
                    通过Web Worker和服务端渲染，达到在如今(以及未来）的Web平台上所能达到的最高速度。<br>
                    Angular让你有效掌控可伸缩性。基于RxJS、Immutable.js和其它推送模型，能适应海量数据需求。<br>
                    从原型到全球部署，Angular都能带给你支撑Google大型应用的那些高延展性基础设施与技术。`,
                },
                {
                    id: "React",
                    title: `React`,
                    subTitle: `用于用户界面构建的JavaScript库`,
                    text: `react可以使构建交互UI的过程变得简单。对于你的应用里面的每个状态视图，当数据变化的时候，React都会及时并且正确有效率地进行对其更新。<br>
                    用react构建封装的组件来管理自己的状态，然后组合它们以创建复杂的UI。<br>
                    我们不对您的技术堆栈的其余部分做出假设，因此您可以在react中开发新功能，而无需重写现有代码。react也可以在服务器上使用Node和功能移动应用。即使用React Native进行渲染。`,
                },
                {
                    id: "Vue.js",
                    title: `Vue.js`,
                    subTitle: `渐进式JavaScript框架`,
                    text: `已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。
                    20kB min+gzip 运行大小，超快虚拟DOM，最省心的优化。`,
                },
                {
                    id: "Python",
                    title: `python`,
                    subTitle: `让你快速工作，更有效地整合系统`,
                    text: `Ruby on Rails 最火的那几年，有人问Python 之父吉多·范罗苏姆怎么看，他说：”Python 不需要杀手级应用，因为如果是这样的话，Python 在其它方面的作用就被忽略了。” Python 在网络爬虫、数据分析、AI、机器学习、Web开发、金融、运维、测试等多个领域都有不俗的表现，从来没有哪一种语言可以同时在这么多领域扎根。<br>
                    Google为使用Python创建了大量的指南和教程。至少在开发者的领域，google持续贡献了大量文档和支持工具，并一直在为python免费做广告。<br>
                    无论如何，这对初学者来说是一种很好的语言，现在很多年轻的开发者都开始学习Python。而即便在这种情况下，有经验的开发人员也没有忽视，因为Python总能带给你很多能做的事。`,
                },
            ],
        },
        music:{
            text:{
                pageSum:'每页显示',
                prevPage:'上一页',
                nextPage:'下一页',
                firstPage:'首页',
                lastPage:'尾页',
            }
        }
    },
    en: {
        app: {
            title: 'Man in The Mirror'
        },
        header: {
            items: {
                '1': "Home",
                '11': "Home1",
                '12': "Home2",
                '2': "Music",
                '21': "Latest Songs",
                '22': "Top Songs",
                '3': "For Example",
            }
        },
        indexTab: {
            title: `The top tech, the new beginning`,
            subTitle: `The popularity of mobile development receded, but for programmers, the AI era has come.`,
            textFooter: `Learn More`,
            tab: [
                {
                    id: "Angular",
                    title: `NGULAR`,
                    subTitle: `One framework.Mobile & desktop`,
                    text: `Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.<br>
                    Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.<br>
                    Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.<br>
                    From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.<br>`,
                },
                {
                    id: "React",
                    title: `React`,
                    subTitle: `A JavaScript library for building user interfaces`,
                    text: `React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.<br>
                    Build encapsulated components that manage their own state, then compose them to make complex UIs.<br>
                    We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.React can also render on the server using Node and power mobile apps using React Native.`,
                },
                {
                    id: "Vue.js",
                    title: `Vue.js`,
                    subTitle: `The Progressive JavaScript Framework`,
                    text: `Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!
                    An incrementally adoptable ecosystem that scales between a library and a full-featured framework.
                    20KB min+gzip Runtime,Blazing Fast Virtual DOM,Minimal Optimization Efforts.`,
                },
                {
                    id: "Python",
                    title: `python`,
                    subTitle: `Lets you work quickly and integrate systems more effectively.`,
                    text: `In the hottest years of Ruby on Rails, someone asked how the father of Python, Guido Van Rösum, said: "Python does not require killer apps, because if that's the case, Python's role in other aspects is Ignored. "Python has done well in many areas such as web crawler, data analytics, AI, machine learning, web development, finance, operations and maintenance, and testing. No language has ever taken root in so many fields .<br>
                    Google has created a great deal of tutorials and tutorials for using Python. At least in the developer space, google continues to contribute a wealth of documentation and support tools and has been advertising free for python.<br>
                    Anyway, this is a good language for beginners and many young developers are now learning Python. Even in this case, experienced developers are not overlooked, because Python always brings you a lot of things to do.`,
                },
            ],
        },
        music:{
            text:{
                pageSum:'Each page show',
                prevPage:'Previous Page',
                nextPage:'Next Page',
                firstPage:'First Page',
                lastPage:'Last Page',
            }
        }
    }
}


const quote = [
    {
        en: `Bad programmers worry about the code. Good programmers worry about data structures and their relationships.`,
        cn: `坏的程序员担心代码， 好的程序员担心数据结构及其关系。`,
        author: [`Linus Torvalds`, `林纳斯·托瓦兹`],
        honor: `Linux、Git之父`,
        active: true,
    },
    {
        en: `Talk is cheap. Show me the code.`,
        cn: `空谈是不值钱的。给我看你的代码就好。`,
        author: [`Linus Torvalds`, `林纳斯·托瓦兹`],
        honor: `Linux、Git之父`,
        active: false,
    },
    {
        en: `Really, I’m not out to destroy Microsoft. That will just be a completely unintentional side effect.`,
        cn: `真的，我没打算要摧毁微软。这种结果将会是完全无意中产生的副作用。`,
        author: [`Linus Torvalds`, `林纳斯·托瓦兹`],
        honor: `Linux、Git之父`,
        active: false,
    }
];

export class AppConfig implements myAppConfig {
    lang = "cn";
    isDev = true;
    app = {
        title: dict[this.lang].app.title
    }
    assets = {
        assets: `./assets`,
        asssetsImg: `${$asssets}img`,
        asssetsImgTech: `${$asssets}img/tech`,
    }
    serverURL = ``;
    musicURL = `https://musicapi.jiaxuanlee.com`;
    carousel = {
        slides: [
            { imgURL: `${$asssetsImg}carousel/slide1.jpg`, active: true },
            { imgURL: `${$asssetsImg}carousel/slide2.jpg`, active: false },
            { imgURL: `${$asssetsImg}carousel/slide3.jpg`, active: false }
        ],
        imgResolution: {
            width: 1920,
            height: 1080,
        }
    };
    layout = {
        breakpoints: {
            xs: `(max-width: 575.99px) and (orientation: portrait), (max-width: 575.99px) and (orientation: landscape)`,
            sm: `(min-width: 576px) and (max-width: 767.99px) and (orientation: portrait), (min-width: 576px) and (max-width: 767.99px) and (orientation: landscape)`,
            md: `(min-width: 768px) and (max-width: 991.99px) and (orientation: portrait), (min-width: 768px) and (max-width: 991.99px) and (orientation: landscape)`,
            lg: `(min-width: 992px) and (max-width: 1199.99px) and (orientation: portrait), (min-width: 992px) and (max-width: 1199.99px) and (orientation: landscape)`,
            xl: `(min-width: 1200px) and (orientation: portrait), (min-width: 1200px) and (orientation: landscape)`,
        }//实际使用的见layout/bootstrap-break-points/bootstrap-break-points.moudule.ts中的配置
    };
    footer = {
        height: 72
    };
    header: any;
    quote = quote;
    indexTab: any;
    breakpoints = {
        'xs': '(max-width: 575.99px) and (orientation: portrait), (max-width: 575.99px) and (orientation: landscape)',
        'sm': '(min-width: 576px) and (max-width: 767.99px) and (orientation: portrait), (min-width: 576px) and (max-width: 767.99px) and (orientation: landscape)',
        'md': '(min-width: 768px) and (max-width: 991.99px) and (orientation: portrait), (min-width: 768px) and (max-width: 991.99px) and (orientation: landscape)',
        'lg': '(min-width: 992px) and (max-width: 1199.99px) and (orientation: portrait), (min-width: 992px) and (max-width: 1199.99px) and (orientation: landscape)',
        'xl': '(min-width: 1200px) and (orientation: portrait), (min-width: 1200px) and (orientation: landscape)'
    };
    music = {
        limits:[10,20,30],
        text:{},
        total:500
    };
    paginator = {
        text:{},
        shownSum:5,
        type:1,
        showSkipTo:true
    };

    constructor() {
        this.header = this.resetHeader();
        this.indexTab = this.resetIndexTab();
        this.app = this.resetApp();
        this.music.text = this.resetMusicText();
        this.paginator.text = this.resetPaginatorText();
    }

    resetHeader() {
        return {
            isDragable: false,
            height: 64,
            items: [
                {
                    id: 'index', text: dict[this.lang].header.items['1'],
                    active: true,
                    path: 'index',
                    icon: 'fas fa-home',
                    subItems: null
                },
                {
                    id: 'music', text: dict[this.lang].header.items['2'],
                    active: false,
                    icon: 'fas fa-film',
                    subItems: [
                        { text: dict[this.lang].header.items['21'], icon: 'fas fa-newspaper', path: 'music/latest' },
                        { text: dict[this.lang].header.items['22'], icon: 'fas fa-trophy', path: 'music/top' }
                    ]
                },
                {
                    id: 'form', text: dict[this.lang].header.items['3'],
                    active: false,
                    icon: 'fas fa-thumbs-up',
                    subItems: null,
                    path:"form"
                },
            ]
        };
    }

    resetApp() {
        return {
            title: dict[this.lang].app.title
        };
    }

    resetIndexTab() {
        return {
            title: dict[this.lang].indexTab.title,
            subTitle: dict[this.lang].indexTab.subTitle,
            textFooter: dict[this.lang].indexTab.textFooter,
            tab: [
                {
                    id: "Angular",
                    class: 'Angular',
                    url: `https://angular.io/`,
                    active: true,
                    title: dict[this.lang].indexTab.tab[0].title,
                    subTitle: dict[this.lang].indexTab.tab[0].subTitle,
                    text: dict[this.lang].indexTab.tab[0].text,
                    logo: `fab fa-angular`,
                    img: `/angular.svg`,
                },
                {
                    id: "React",
                    class: 'React',
                    url: `https://reactjs.org/`,
                    active: false,
                    title: dict[this.lang].indexTab.tab[1].title,
                    subTitle: dict[this.lang].indexTab.tab[1].subTitle,
                    text: dict[this.lang].indexTab.tab[1].text,
                    logo: `fab fa-react`,
                    img: `/react.svg`,
                },
                {
                    id: "Vue.js",
                    class: 'Vuejs',
                    url: `https://vuejs.org/`,
                    active: false,
                    title: dict[this.lang].indexTab.tab[2].title,
                    subTitle: dict[this.lang].indexTab.tab[2].subTitle,
                    text: dict[this.lang].indexTab.tab[2].text,
                    logo: `fab fa-vuejs`,
                    img: `/vuejs.svg`,
                },
                {
                    id: "Python",
                    class: 'Python',
                    url: `https://www.python.org/`,
                    active: false,
                    title: dict[this.lang].indexTab.tab[3].title,
                    subTitle: dict[this.lang].indexTab.tab[3].subTitle,
                    text: dict[this.lang].indexTab.tab[3].text,
                    logo: `fab fa-python`,
                    img: `/python.svg`,
                },
            ],
        };
    }

    resetMusicText(){
        return {
            pageSum:dict[this.lang].music.text.pageSum,
            nextPage:dict[this.lang].music.text.nextPage,
            prevPage:dict[this.lang].music.text.prevPage,
            firstPage:dict[this.lang].music.text.firstPage,
            lastPage:dict[this.lang].music.text.lastPage
        };
    }

    resetPaginatorText(){
        return {
            nextPage:dict[this.lang].music.text.nextPage,
            prevPage:dict[this.lang].music.text.prevPage,
            firstPage:dict[this.lang].music.text.firstPage,
            lastPage:dict[this.lang].music.text.lastPage
        }
    }

    changeLang(l: string) {
        this.lang = l;
        this.header = this.resetHeader();
        this.indexTab = this.resetIndexTab();
        this.app = this.resetApp();
        this.music.text = this.resetMusicText();
        this.paginator.text = this.resetPaginatorText();
    }
}
export let AppConfigJSON = new AppConfig();
