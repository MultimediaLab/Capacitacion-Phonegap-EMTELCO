/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'cloud',
                type: 'image',
                rect: ['310px', '44px','206px','108px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"cloud.png",'0px','0px']
            },
            {
                id: 'edificionpng',
                type: 'image',
                rect: ['177px', '98px','385px','259px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"edificionpng.png",'0px','0px']
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['1px', '357px','550px','43px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'arbol',
                type: 'image',
                rect: ['7px', '141px','163px','238px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"arbol.png",'0px','0px']
            },
            {
                id: 'personaje',
                type: 'rect',
                rect: ['50', '219','auto','auto','auto', 'auto'],
                overflow: 'hidden'
            },
            {
                id: 'bubble2',
                display: 'none',
                type: 'image',
                rect: ['340px', '126px','195px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bubble2.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['390px', '180px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 0px 28px 0px)'],
                text: "HOLA !!!!<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [
            {
                id: 'personaje',
                symbolName: 'personaje'
            }
            ]
        },
    states: {
        "Base State": {
            "${_personaje}": [
                ["style", "top", '219px'],
                ["style", "left", '-130px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text2}": [
                ["style", "top", '180px'],
                ["style", "left", '390px'],
                ["style", "clip", [0,0,28,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bubble2}": [
                ["style", "top", '126px'],
                ["style", "height", '147px'],
                ["style", "display", 'none'],
                ["style", "left", '340px'],
                ["style", "width", '195px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["gradient", "background-image", [270,[['rgba(44,98,139,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "width", '550px']
            ],
            "${_edificionpng}": [
                ["style", "top", '98px'],
                ["style", "height", '259px'],
                ["style", "left", '177px'],
                ["style", "width", '385px']
            ],
            "${_cloud}": [
                ["style", "top", '44px'],
                ["style", "height", '108px'],
                ["style", "left", '310px'],
                ["style", "width", '206px']
            ],
            "${_arbol}": [
                ["style", "top", '140px'],
                ["style", "height", '238px'],
                ["style", "left", '7px'],
                ["style", "width", '163px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9000,
            autoPlay: true,
            timeline: [
                { id: "eid53", tween: [ "style", "${_Text2}", "clip", [0,95,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,28,0]}], position: 3750, duration: 1750 },
                { id: "eid62", tween: [ "style", "${_Text2}", "clip", [0,0,28,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,95,28,0]}], position: 5500, duration: 100 },
                { id: "eid35", tween: [ "style", "${_arbol}", "top", '140px', { fromValue: '140px'}], position: 3000, duration: 0 },
                { id: "eid43", tween: [ "style", "${_arbol}", "top", '140px', { fromValue: '140px'}], position: 6000, duration: 0 },
                { id: "eid50", tween: [ "style", "${_bubble2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_bubble2}", "display", 'block', { fromValue: 'none'}], position: 3750, duration: 0 },
                { id: "eid61", tween: [ "style", "${_bubble2}", "display", 'none', { fromValue: 'block'}], position: 5500, duration: 0 },
                { id: "eid31", tween: [ "style", "${_personaje}", "left", '244px', { fromValue: '-130px'}], position: 0, duration: 3000 },
                { id: "eid47", tween: [ "style", "${_personaje}", "left", '551px', { fromValue: '244px'}], position: 6000, duration: 3000 },
                { id: "eid40", tween: [ "style", "${_cloud}", "left", '262px', { fromValue: '310px'}], position: 0, duration: 3000 },
                { id: "eid48", tween: [ "style", "${_cloud}", "left", '204px', { fromValue: '262px'}], position: 6000, duration: 3000 },
                { id: "eid37", tween: [ "style", "${_edificionpng}", "left", '70px', { fromValue: '177px'}], position: 0, duration: 3000 },
                { id: "eid46", tween: [ "style", "${_edificionpng}", "left", '-96px', { fromValue: '70px'}], position: 6000, duration: 3000 },
                { id: "eid34", tween: [ "style", "${_arbol}", "left", '-178px', { fromValue: '7px'}], position: 0, duration: 3000 },
                { id: "eid42", tween: [ "style", "${_arbol}", "left", '-178px', { fromValue: '-178px'}], position: 6000, duration: 0 },
                { id: "eid32", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_personaje}', ['stop'] ], ""], position: 3000 },
                { id: "eid54", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_personaje}', ['boca abierta'] ], ""], position: 3750 },
                { id: "eid55", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_personaje}', ['stop'] ], ""], position: 4065 },
                { id: "eid56", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_personaje}', ['boca abierta'] ], ""], position: 4385 },
                { id: "eid57", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_personaje}', ['stop'] ], ""], position: 4700 },
                { id: "eid58", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_personaje}', ['boca abierta'] ], ""], position: 5098 },
                { id: "eid59", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_personaje}', ['stop'] ], ""], position: 5413 },
                { id: "eid60", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_personaje}', ['feliz'] ], ""], position: 5750 },
                { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_personaje}', ['caminar'] ], ""], position: 6000 }            ]
        }
    }
},
"personaje": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'Welcome_Spritesheet2',
                    type: 'image',
                    rect: ['0px', '0px', '1569px', '160px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/Welcome_Spritesheet.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Welcome_Spritesheet2}": [
                ["style", "top", '0px'],
                ["style", "height", '160px'],
                ["style", "left", '0px'],
                ["style", "width", '1569px']
            ],
            "${symbolSelector}": [
                ["style", "height", '175px'],
                ["style", "width", '120px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1300,
            autoPlay: true,
            labels: {
                "caminar": 100,
                "stop": 1000,
                "boca abierta": 1100,
                "boca cerrada": 1200,
                "feliz": 1300
            },
            timeline: [
                { id: "eid1", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-120px', { fromValue: '0px'}], position: 100, duration: 0 },
                { id: "eid7", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-240px', { fromValue: '-110px'}], position: 200, duration: 0 },
                { id: "eid8", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-360px', { fromValue: '-220px'}], position: 300, duration: 0 },
                { id: "eid14", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-480px', { fromValue: '-360px'}], position: 400, duration: 0 },
                { id: "eid15", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-600px', { fromValue: '-480px'}], position: 500, duration: 0 },
                { id: "eid16", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-720px', { fromValue: '-600px'}], position: 600, duration: 0 },
                { id: "eid17", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-840px', { fromValue: '-720px'}], position: 700, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-960px', { fromValue: '-840px'}], position: 800, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-1090px', { fromValue: '-960px'}], position: 1000, duration: 0 },
                { id: "eid20", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-1210px', { fromValue: '-1087px'}], position: 1100, duration: 0 },
                { id: "eid22", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-1330px', { fromValue: '-1200px'}], position: 1200, duration: 0 },
                { id: "eid23", tween: [ "style", "${_Welcome_Spritesheet2}", "left", '-1450px', { fromValue: '-1320px'}], position: 1300, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-14959193");
