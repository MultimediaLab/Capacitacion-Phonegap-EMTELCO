
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'personaje'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",900,function(sym,e){sym.play(100);});
//Edge binding end
})("personaje");
//Edge symbol end:'personaje'
})(jQuery,AdobeEdge,"EDGE-14959193");