/* Manually transcribed and visually checked: Seabergh (2010), Tables 1–3.
   Values are prototype scale. Null means unreported, never zero. */
(function(r){const storm=[
[5,1.9,5.9,37,1.5,0,235],[6,2.1,5.9,35,1.8,0,84],[7,2.3,5.9,32,2.6,0,84],[8,2.5,6.7,18,3.3,0,84],[9,2.7,6.7,355,3.4,84,84],[10,2.6,6.7,326,2.8,84,84],[11,2.3,6.7,308,2.2,84,84]
].map(([hour,H,T,dir,surge,actual,tested])=>({hour,H,T,dir,surge,actual,tested}));
const cases=[
[425,'347',[-1.22,.06,1.22],[-1.10,.03,1.10],[-1.13,.03,1.13]],
[425,'153',[-1.28,.09,1.28],[-1.31,.06,1.31],[-1.37,.03,1.37]],
[425,'116',[-1.55,.06,1.55],[-1.31,.06,1.31],[-1.31,.09,1.34]],
[425,'81',[-1.71,.06,1.71],[-1.40,.03,1.40],null],
[425,'28',[-2.38,.27,2.38],null,null],
[425,'Debris 1',[-1.65,.03,1.65],[-1.16,.03,1.16],[-1.28,.03,1.28]],
[425,'Debris 2',[-2.41,.43,2.44],[-1.46,0,1.46],null],
[623,'347',[-1.92,.15,1.92],[-1.71,.03,1.71],[-1.77,.03,1.77]],
[623,'153',[-2.10,.09,2.10],[-2.10,.06,2.10],[-1.92,.06,1.92]],
[623,'116',[-2.26,.09,2.26],[-2.59,.09,2.59],[-2.32,.18,2.35]],
[623,'Debris 1',[-2.35,.12,2.35],[-1.86,.06,1.86],[-1.98,0,1.98]],
[623,'Debris 2',[-3.45,.40,3.48],[-2.26,.09,2.26],[-1.16,.09,1.19]],
[822,'347',[-2.29,.18,2.32],[-2.04,.06,2.04],[-2.23,.06,2.26]],
[822,'153',[-3.48,-.03,3.48],[-2.74,.09,2.74],[-2.87,.18,2.87]],
[822,'116',[-2.74,.12,2.74],[-3.20,.12,3.20],[-2.56,.21,2.56]]
].map(([Q,restriction,...probes])=>({Q,restriction,probes}));
function continuity(Q,block){if(!Number.isFinite(Q)||Q<84||Q>822||!Number.isFinite(block)||block<0||block>75)throw Error('Outside playground range');let area=339*(1-block/100);return {Q,block,area,V:Q/area}}
const api={storm,cases,continuity,scale:{length:50,time:Math.sqrt(50),flow:50**2.5}};r.PaperData=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
