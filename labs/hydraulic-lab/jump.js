/* Rectangular short hydraulic jump: hydrostatic end sections, beta=alpha=1.
   Tailwater placement and roller shape are illustrations, not a spatial solver. */
(function(root){const g=9.81,b=.3;
function section(Q,y){return {y,V:Q/(b*y),Fr:Q/(b*y*Math.sqrt(g*y)),E:y+Q*Q/(2*g*b*b*y*y),M:y*y/2+Q*Q/(g*b*b*y)}}
function solve({Q=.009,y1=.018,ratio=1}={}){if(![Q,y1,ratio].every(Number.isFinite)||Q<=0||Q>.025||y1<.005||y1>.15||ratio<.6||ratio>1.4)throw Error('Inputs outside supported range.');let a=section(Q,y1),active=a.Fr>1,y2=active?y1/2*(Math.sqrt(1+8*a.Fr*a.Fr)-1):y1,c=section(Q,y2),loss=active?(y2-y1)**3/(4*y1*y2):0,tail=ratio*y2,status=!active?'No hydraulic jump':ratio<.98?'Swept downstream':ratio>1.02?'Submerged / pushed upstream':'Matched tailwater',type=!active?'Subcritical approach':a.Fr<1.7?'Undular':a.Fr<2.5?'Weak':a.Fr<4.5?'Oscillating':a.Fr<9?'Steady':'Strong',length=6*y2,start=ratio<.98?4.4:ratio>1.02?.7:1.35;
let profile=Array.from({length:431},(_,i)=>{let x=i/100,t=Math.max(0,Math.min(1,(x-start)/length)),y=active?y1+(tail-y1)*t*t*(3-2*t):y1,bed=(4.3-x)*.002;return {x,bed,hump:0,water:bed+y,depth:y}});
return {Q,b,y1,y2,ratio,tail,active,a,c,loss,efficiency:loss/a.E*100,status,type,length,start,profile,withinFlume:Math.max(y1,tail)<=.45}}
function measure(Q,values){if(!Array.isArray(values)||values.length!==6||values.some(v=>!Number.isFinite(v)))throw Error('Enter all six readings.');let [x0,y0,x1,y1,x2,y2]=values;if(!(0<=x0&&x0<x1&&x1<x2&&x2<=4.3)||[y0,y1,y2].some(y=>y<=0||y>.45))throw Error('Use 0 ≤ x0 < x1 < x2 ≤ 4.30 m and depths between 0 and 0.45 m.');let a=section(Q,y1),c=section(Q,y2);return {x0,y0,x1,y1,x2,y2,a,c,length:x2-x1,energyLoss:a.E-c.E,totalHeadLoss:a.E-c.E+.002*(x2-x1),momentumError:(c.M-a.M)/a.M*100}}
root.JumpLab={solve,measure};if(typeof module!=='undefined')module.exports=root.JumpLab;
})(typeof window!=='undefined'?window:globalThis);
