(()=>{var Pa="160",Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xc=0,eo=1,vc=2;var El=1,yc=2,pn=3,tn=0,_t=1,Yt=2;var An=0,Li=1,to=2,no=3,io=4,Lc=5,kn=100,Mc=101,Sc=102,so=103,ro=104,bc=200,Ec=201,wc=202,Tc=203,Jr=204,Kr=205,Ac=206,Rc=207,Cc=208,Pc=209,Ic=210,Dc=211,Uc=212,Nc=213,Fc=214,Oc=0,Bc=1,zc=2,Ps=3,kc=4,Vc=5,Hc=6,Gc=7,wl=0,Wc=1,Xc=2,Rn=0,qc=1,Yc=2,Zc=3,$c=4,Jc=5,Kc=6;var Tl=300,bi=301,Ei=302,jr=303,Qr=304,ir=306,ea=1e3,Zt=1001,ta=1002,Tt=1003,ao=1004;var vr=1005;var zt=1006,jc=1007;var qi=1008;var Cn=1009,Qc=1010,eh=1011,Ia=1012,Al=1013,wn=1014,Tn=1015,Yi=1016,Rl=1017,Cl=1018,Hn=1020,th=1021,$t=1023,nh=1024,ih=1025,Gn=1026,wi=1027,sh=1028,Pl=1029,rh=1030,Il=1031,Dl=1033,yr=33776,Lr=33777,Mr=33778,Sr=33779,oo=35840,lo=35841,co=35842,ho=35843,Ul=36196,uo=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,xo=37812,vo=37813,yo=37814,Lo=37815,Mo=37816,So=37817,bo=37818,Eo=37819,wo=37820,To=37821,br=36492,Ao=36494,Ro=36495,ah=36283,Co=36284,Po=36285,Io=36286;var Is=2300,Ds=2301,Er=2302,Do=2400,Uo=2401,No=2402;var Nl=3e3,Wn=3001,oh=3200,lh=3201,Fl=0,ch=1,kt="",ct="srgb",_n="srgb-linear",Da="display-p3",sr="display-p3-linear",Us="linear",nt="srgb",Ns="rec709",Fs="p3";var ti=7680,rr=7681;var Ol=34055,Bl=34056;var zl=517;var Os=519,hh=512,uh=513,dh=514,kl=515,fh=516,ph=517,mh=518,gh=519,Fo=35044;var Oo="300 es",na=1035,mn=2e3,Bs=2001,nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bo=1234567,Hi=Math.PI/180,Zi=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function Ua(i,e){return(i%e+e)%e}function _h(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xh(i,e,t){return i!==e?(t-i)/(e-i):0}function Gi(i,e,t){return(1-t)*i+t*e}function vh(i,e,t,n){return Gi(i,e,1-Math.exp(-t*n))}function yh(i,e=1){return e-Math.abs(Ua(i,e*2)-e)}function Lh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Sh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bh(i,e){return i+Math.random()*(e-i)}function Eh(i){return i*(.5-Math.random())}function wh(i){i!==void 0&&(Bo=i);let e=Bo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Th(i){return i*Hi}function Ah(i){return i*Zi}function ia(i){return(i&i-1)===0&&i!==0}function Rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ch(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vl={DEG2RAD:Hi,RAD2DEG:Zi,generateUUID:Pi,clamp:Lt,euclideanModulo:Ua,mapLinear:_h,inverseLerp:xh,lerp:Gi,damp:vh,pingpong:yh,smoothstep:Lh,smootherstep:Mh,randInt:Sh,randFloat:bh,randFloatSpread:Eh,seededRandom:wh,degToRad:Th,radToDeg:Ah,isPowerOfTwo:ia,ceilPowerOfTwo:Rh,floorPowerOfTwo:zs,setQuaternionFromProperEuler:Ch,normalize:Et,denormalize:_i},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],u=s[6],S=s[1],v=s[4],T=s[7],C=s[2],A=s[5],w=s[8];return r[0]=o*_+a*S+l*C,r[3]=o*p+a*v+l*A,r[6]=o*u+a*T+l*w,r[1]=c*_+h*S+d*C,r[4]=c*p+h*v+d*A,r[7]=c*u+h*T+d*w,r[2]=f*_+m*S+g*C,r[5]=f*p+m*v+g*A,r[8]=f*u+m*T+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wr.makeScale(e,t)),this}rotate(e){return this.premultiply(wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wr=new We;function Hl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ph(){let i=ks("canvas");return i.style.display="block",i}var zo={};function Wi(i){i in zo||(zo[i]=!0,console.warn(i))}var ko=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vo=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[_n]:{transfer:Us,primaries:Ns,toReference:i=>i,fromReference:i=>i},[ct]:{transfer:nt,primaries:Ns,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[sr]:{transfer:Us,primaries:Fs,toReference:i=>i.applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(ko)},[Da]:{transfer:nt,primaries:Fs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Vo),fromReference:i=>i.applyMatrix3(ko).convertLinearToSRGB()}},Ih=new Set([_n,sr]),Ke={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ih.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ls[e].toReference,s=ls[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ls[i].primaries},getTransfer:function(i){return i===kt?Us:ls[i].transfer}};function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ni,Vs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=ks("canvas")),ni.width=e.width,ni.height=e.height;let n=ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dh=0,Hs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ar(s[o].image)):r.push(Ar(s[o]))}else r=Ar(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ar(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Vs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uh=0,Jt=class i extends nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Zt,s=Zt,r=zt,o=qi,a=$t,l=Cn,c=i.DEFAULT_ANISOTROPY,h=kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Pi(),this.name="",this.source=new Hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Wn?ct:kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?Wn:Nl}set encoding(e){Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Wn?ct:kt}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Tl;Jt.DEFAULT_ANISOTROPY=1;var et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,T=(m+1)/2,C=(u+1)/2,A=(h+f)/4,w=(d+_)/4,Y=(g+p)/4;return v>T&&v>C?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=w/n):T>C?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=Y/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=Y/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends nn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Wn?ct:kt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Jt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Hs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends sa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gs=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ra=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-a,u=l*f+c*m+h*g+d*_,S=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let C=Math.sqrt(v),A=Math.atan2(C,u*S);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}let T=a*S;if(l=l*p+f*T,c=c*p+m*T,h=h*p+g*T,d=d*p+_*T,p===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*m-c*f,e[t+1]=l*g+h*f+c*d-a*m,e[t+2]=c*g+h*m+a*f-l*d,e[t+3]=h*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ho.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rr=new D,Ho=new Kt,Xn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wt):Wt.fromBufferAttribute(r,o),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),hs.subVectors(this.max,Oi),ii.subVectors(e.a,Oi),si.subVectors(e.b,Oi),ri.subVectors(e.c,Oi),Ln.subVectors(si,ii),Mn.subVectors(ri,si),Nn.subVectors(ii,ri);let t=[0,-Ln.z,Ln.y,0,-Mn.z,Mn.y,0,-Nn.z,Nn.y,Ln.z,0,-Ln.x,Mn.z,0,-Mn.x,Nn.z,0,-Nn.x,-Ln.y,Ln.x,0,-Mn.y,Mn.x,0,-Nn.y,Nn.x,0];return!Cr(t,ii,si,ri,hs)||(t=[1,0,0,0,1,0,0,0,1],!Cr(t,ii,si,ri,hs))?!1:(us.crossVectors(Ln,Mn),t=[us.x,us.y,us.z],Cr(t,ii,si,ri,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},cn=[new D,new D,new D,new D,new D,new D,new D,new D],Wt=new D,cs=new Xn,ii=new D,si=new D,ri=new D,Ln=new D,Mn=new D,Nn=new D,Oi=new D,hs=new D,us=new D,Fn=new D;function Cr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fn.fromArray(i,r);let a=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),l=e.dot(Fn),c=t.dot(Fn),h=n.dot(Fn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Nh=new Xn,Bi=new D,Pr=new D,$i=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);let t=Bi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(Pr)),this.expandByPoint(Bi.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hn=new D,Ir=new D,ds=new D,Sn=new D,Dr=new D,fs=new D,Ur=new D,Ji=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ir.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Ir);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ds),a=Sn.dot(this.direction),l=-Sn.dot(ds),c=Sn.lengthSq(),h=Math.abs(1-o*o),d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ir).addScaledVector(ds,f),m}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,s,r){Dr.subVectors(t,e),fs.subVectors(n,e),Ur.crossVectors(Dr,fs);let o=this.direction.dot(Ur),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);let l=a*this.direction.dot(fs.crossVectors(Sn,fs));if(l<0)return null;let c=a*this.direction.dot(Dr.cross(Sn));if(c<0||l+c>o)return null;let h=-a*Sn.dot(Ur);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,f,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,d,f,m,g,_,p){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),o=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,m=l*d,g=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fh,e,Oh)}lookAt(e,t,n){let s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),bn.crossVectors(n,Ut),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),bn.crossVectors(n,Ut)),bn.normalize(),ps.crossVectors(Ut,bn),s[0]=bn.x,s[4]=ps.x,s[8]=Ut.x,s[1]=bn.y,s[5]=ps.y,s[9]=Ut.y,s[2]=bn.z,s[6]=ps.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],S=n[3],v=n[7],T=n[11],C=n[15],A=s[0],w=s[4],Y=s[8],L=s[12],b=s[1],V=s[5],K=s[9],ae=s[13],P=s[2],F=s[6],W=s[10],$=s[14],X=s[3],q=s[7],Q=s[11],te=s[15];return r[0]=o*A+a*b+l*P+c*X,r[4]=o*w+a*V+l*F+c*q,r[8]=o*Y+a*K+l*W+c*Q,r[12]=o*L+a*ae+l*$+c*te,r[1]=h*A+d*b+f*P+m*X,r[5]=h*w+d*V+f*F+m*q,r[9]=h*Y+d*K+f*W+m*Q,r[13]=h*L+d*ae+f*$+m*te,r[2]=g*A+_*b+p*P+u*X,r[6]=g*w+_*V+p*F+u*q,r[10]=g*Y+_*K+p*W+u*Q,r[14]=g*L+_*ae+p*$+u*te,r[3]=S*A+v*b+T*P+C*X,r[7]=S*w+v*V+T*F+C*q,r[11]=S*Y+v*K+T*W+C*Q,r[15]=S*L+v*ae+T*$+C*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],S=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,T=h*_*c-g*d*c+g*a*m-o*_*m-h*a*u+o*d*u,C=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,A=t*S+n*v+s*T+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return e[0]=S*w,e[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*u-n*f*u)*w,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*u+n*l*u)*w,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*w,e[4]=v*w,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*u+t*f*u)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*u-t*l*u)*w,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*m+t*l*m)*w,e[8]=T*w,e[9]=(g*d*r-h*_*r-g*n*m+t*_*m+h*n*u-t*d*u)*w,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*u+t*a*u)*w,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*m-t*a*m)*w,e[12]=C*w,e[13]=(h*_*s-g*d*s+g*n*f-t*_*f-h*n*p+t*d*p)*w,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*w,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,S=l*c,v=l*h,T=l*d,C=n.x,A=n.y,w=n.z;return s[0]=(1-(_+u))*C,s[1]=(m+T)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(m-T)*A,s[5]=(1-(f+u))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(g+v)*w,s[9]=(p-S)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ai.set(s[0],s[1],s[2]).length(),o=ai.set(s[4],s[5],s[6]).length(),a=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);let c=1/r,h=1/o,d=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=d,Xt.elements[9]*=d,Xt.elements[10]*=d,t.setFromRotationMatrix(Xt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=mn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,g;if(a===mn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),f=(t+e)*c,m=(n+s)*h,g,_;if(a===mn)g=(o+r)*d,_=-2*d;else if(a===Bs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ai=new D,Xt=new ht,Fh=new D(0,0,0),Oh=new D(1,1,1),bn=new D,ps=new D,Ut=new D,Go=new ht,Wo=new Kt,Ws=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Go.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Go,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ws.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bh=0,Xo=new D,oi=new Kt,un=new ht,ms=new D,zi=new D,zh=new D,kh=new Kt,qo=new D(1,0,0),Yo=new D(0,1,0),Zo=new D(0,0,1),Vh={type:"added"},Hh={type:"removed"},Ct=class i extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Ws,n=new Kt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.multiply(oi),this}rotateOnWorldAxis(e,t){return oi.setFromAxisAngle(e,t),this.quaternion.premultiply(oi),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(Yo,e)}rotateZ(e){return this.rotateOnAxis(Zo,e)}translateOnAxis(e,t){return Xo.copy(e).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(Yo,e)}translateZ(e){return this.translateOnAxis(Zo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(zi,ms,this.up):un.lookAt(ms,zi,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(un),this.quaternion.premultiply(oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=new D,dn=new D,Nr=new D,fn=new D,li=new D,ci=new D,$o=new D,Fr=new D,Or=new D,Br=new D,gs=!1,xi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),qt.subVectors(e,t),s.cross(qt);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){qt.subVectors(s,t),dn.subVectors(n,t),Nr.subVectors(e,t);let o=qt.dot(qt),a=qt.dot(dn),l=qt.dot(Nr),c=dn.dot(dn),h=dn.dot(Nr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,s,r,o,a,l){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static isFrontFacing(e,t,n,s){return qt.subVectors(n,t),dn.subVectors(e,t),qt.cross(dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),qt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;li.subVectors(s,n),ci.subVectors(r,n),Fr.subVectors(e,n);let l=li.dot(Fr),c=ci.dot(Fr);if(l<=0&&c<=0)return t.copy(n);Or.subVectors(e,s);let h=li.dot(Or),d=ci.dot(Or);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(li,o);Br.subVectors(e,r);let m=li.dot(Br),g=ci.dot(Br);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ci,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return $o.subVectors(r,s),a=(d-h)/(d-h+(m-g)),t.copy(s).addScaledVector($o,a);let u=1/(p+_+f);return o=_*u,a=f*u,t.copy(n).addScaledVector(li,o).addScaledVector(ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},_s={h:0,s:0,l:0};function zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Ua(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zr(o,r,e+1/3),this.g=zr(o,r,e),this.b=zr(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){let n=Gl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Ke.fromWorkingColorSpace(yt.copy(this),e),Math.round(Lt(yt.r*255,0,255))*65536+Math.round(Lt(yt.g*255,0,255))*256+Math.round(Lt(yt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(yt.copy(this),t);let n=yt.r,s=yt.g,r=yt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=ct){Ke.fromWorkingColorSpace(yt.copy(this),e);let t=yt.r,n=yt.g,s=yt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(_s);let n=Gi(En.h,_s.h,t),s=Gi(En.s,_s.s,t),r=Gi(En.l,_s.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yt=new ze;ze.NAMES=Gl;var Gh=0,qn=class extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Li,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Kr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Os,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Kr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Os&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var lt=new D,xs=new Ne,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}};var qs=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ys=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Rt=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Wh=0,Bt=new ht,kr=new Ct,hi=new D,Nt=new Xn,ki=new Xn,gt=new D,Vt=class i extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hl(e)?Ys:qs)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,ki.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,ki.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(ki.min),Nt.expandByPoint(ki.max))}Nt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gt.fromBufferAttribute(a,c),l&&(hi.fromBufferAttribute(e,c),gt.add(hi)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new D,h[b]=new D;let d=new D,f=new D,m=new D,g=new Ne,_=new Ne,p=new Ne,u=new D,S=new D;function v(b,V,K){d.fromArray(s,b*3),f.fromArray(s,V*3),m.fromArray(s,K*3),g.fromArray(o,b*2),_.fromArray(o,V*2),p.fromArray(o,K*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);let ae=1/(_.x*p.y-p.x*_.y);isFinite(ae)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ae),S.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(ae),c[b].add(u),c[V].add(u),c[K].add(u),h[b].add(S),h[V].add(S),h[K].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,V=T.length;b<V;++b){let K=T[b],ae=K.start,P=K.count;for(let F=ae,W=ae+P;F<W;F+=3)v(n[F+0],n[F+1],n[F+2])}let C=new D,A=new D,w=new D,Y=new D;function L(b){w.fromArray(r,b*3),Y.copy(w);let V=c[b];C.copy(V),C.sub(w.multiplyScalar(w.dot(V))).normalize(),A.crossVectors(Y,V);let ae=A.dot(h[b])<0?-1:1;l[b*4]=C.x,l[b*4+1]=C.y,l[b*4+2]=C.z,l[b*4+3]=ae}for(let b=0,V=T.length;b<V;++b){let K=T[b],ae=K.start,P=K.count;for(let F=ae,W=ae+P;F<W;F+=3)L(n[F+0]),L(n[F+1]),L(n[F+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new At(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jo=new ht,On=new Ji,vs=new $i,Ko=new D,ui=new D,di=new D,fi=new D,Vr=new D,ys=new D,Ls=new Ne,Ms=new Ne,Ss=new Ne,jo=new D,Qo=new D,el=new D,bs=new D,Es=new D,Ze=class extends Ct{constructor(e=new Vt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Vr.fromBufferAttribute(d,e),o?ys.addScaledVector(Vr,h):ys.addScaledVector(Vr.sub(t),h))}t.add(ys)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),On.copy(e.ray).recast(e.near),!(vs.containsPoint(On.origin)===!1&&(On.intersectSphere(vs,Ko)===null||On.origin.distanceToSquared(Ko)>(e.far-e.near)**2))&&(Jo.copy(r).invert(),On.copy(e.ray).applyMatrix4(Jo),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=o[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,C=v;T<C;T+=3){let A=a.getX(T),w=a.getX(T+1),Y=a.getX(T+2);s=ws(this,u,e,n,c,h,d,A,w,Y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let S=a.getX(p),v=a.getX(p+1),T=a.getX(p+2);s=ws(this,o,e,n,c,h,d,S,v,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=o[p.materialIndex],S=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=S,C=v;T<C;T+=3){let A=T,w=T+1,Y=T+2;s=ws(this,u,e,n,c,h,d,A,w,Y),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let S=p,v=p+1,T=p+2;s=ws(this,o,e,n,c,h,d,S,v,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Xh(i,e,t,n,s,r,o,a){let l;if(e.side===_t?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===tn,a),l===null)return null;Es.copy(a),Es.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:i}}function ws(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ui),i.getVertexPosition(l,di),i.getVertexPosition(c,fi);let h=Xh(i,e,t,n,ui,di,fi,bs);if(h){s&&(Ls.fromBufferAttribute(s,a),Ms.fromBufferAttribute(s,l),Ss.fromBufferAttribute(s,c),h.uv=xi.getInterpolation(bs,ui,di,fi,Ls,Ms,Ss,new Ne)),r&&(Ls.fromBufferAttribute(r,a),Ms.fromBufferAttribute(r,l),Ss.fromBufferAttribute(r,c),h.uv1=xi.getInterpolation(bs,ui,di,fi,Ls,Ms,Ss,new Ne),h.uv2=h.uv1),o&&(jo.fromBufferAttribute(o,a),Qo.fromBufferAttribute(o,l),el.fromBufferAttribute(o,c),h.normal=xi.getInterpolation(bs,ui,di,fi,jo,Qo,el,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new D,materialIndex:0};xi.getNormal(ui,di,fi,d.normal),h.face=d}return h}var Yn=class i extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(d,2));function g(_,p,u,S,v,T,C,A,w,Y,L){let b=T/w,V=C/Y,K=T/2,ae=C/2,P=A/2,F=w+1,W=Y+1,$=0,X=0,q=new D;for(let Q=0;Q<W;Q++){let te=Q*V-ae;for(let ue=0;ue<F;ue++){let G=ue*b-K;q[_]=G*S,q[p]=te*v,q[u]=P,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[u]=A>0?1:-1,h.push(q.x,q.y,q.z),d.push(ue/w),d.push(1-Q/Y),$+=1}}for(let Q=0;Q<Y;Q++)for(let te=0;te<w;te++){let ue=f+te+F*Q,G=f+te+F*(Q+1),J=f+(te+1)+F*(Q+1),de=f+(te+1)+F*Q;l.push(ue,G,de),l.push(G,J,de),X+=6}a.addGroup(m,X,L),m+=X,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ti(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function wt(i){let e={};for(let t=0;t<i.length;t++){let n=Ti(i[t]);for(let s in n)e[s]=n[s]}return e}function qh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wl(i){return i.getRenderTarget()===null?i.outputColorSpace:Ke.workingColorSpace}var Yh={clone:Ti,merge:wt},Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,vn=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=qh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Zs=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mt=class extends Zs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pi=-90,mi=1,aa=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mt(pi,mi,e,t);s.layers=this.layers,this.add(s);let r=new Mt(pi,mi,e,t);r.layers=this.layers,this.add(r);let o=new Mt(pi,mi,e,t);o.layers=this.layers,this.add(o);let a=new Mt(pi,mi,e,t);a.layers=this.layers,this.add(a);let l=new Mt(pi,mi,e,t);l.layers=this.layers,this.add(l);let c=new Mt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},$s=class extends Jt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oa=class extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Wn?ct:kt),this.texture=new $s(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yn(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_t,blending:An});r.uniforms.tEquirect.value=t;let o=new Ze(s,r),a=t.minFilter;return t.minFilter===qi&&(t.minFilter=zt),new aa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Hr=new D,Jh=new D,Kh=new We,Pt=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Hr.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Hr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kh.getNormalMatrix(e),s=this.coplanarPoint(Hr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bn=new $i,Ts=new D,Ki=class{constructor(e=new Pt,t=new Pt,n=new Pt,s=new Pt,r=new Pt,o=new Pt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],S=s[13],v=s[14],T=s[15];if(n[0].setComponents(l-r,f-c,p-m,T-u).normalize(),n[1].setComponents(l+r,f+c,p+m,T+u).normalize(),n[2].setComponents(l+o,f+h,p+g,T+S).normalize(),n[3].setComponents(l-o,f-h,p-g,T-S).normalize(),n[4].setComponents(l-a,f-d,p-_,T-v).normalize(),t===mn)n[5].setComponents(l+a,f+d,p+_,T+v).normalize();else if(t===Bs)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){return Bn.center.set(0,0,0),Bn.radius=.7071067811865476,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ts.x=s.normal.x>0?e.max.x:e.min.x,Ts.y=s.normal.y>0?e.max.y:e.min.y,Ts.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Xl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jh(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&g.length===0&&i.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let u=g[_];t?i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):i.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var ji=class i extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){let S=u*f-o;for(let v=0;v<c;v++){let T=v*d-r;g.push(T,-S,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<a;S++){let v=S+c*u,T=S+c*(u+1),C=S+1+c*(u+1),A=S+1+c*u;m.push(v,T,A),m.push(T,C,A)}this.setIndex(m),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Su=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ju=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ld=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Od=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,af=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Qh,alphahash_pars_fragment:eu,alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:su,aomap_fragment:ru,aomap_pars_fragment:au,batching_pars_vertex:ou,batching_vertex:lu,begin_vertex:cu,beginnormal_vertex:hu,bsdfs:uu,iridescence_fragment:du,bumpmap_pars_fragment:fu,clipping_planes_fragment:pu,clipping_planes_pars_fragment:mu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:_u,color_fragment:xu,color_pars_fragment:vu,color_pars_vertex:yu,color_vertex:Lu,common:Mu,cube_uv_reflection_fragment:Su,defaultnormal_vertex:bu,displacementmap_pars_vertex:Eu,displacementmap_vertex:wu,emissivemap_fragment:Tu,emissivemap_pars_fragment:Au,colorspace_fragment:Ru,colorspace_pars_fragment:Cu,envmap_fragment:Pu,envmap_common_pars_fragment:Iu,envmap_pars_fragment:Du,envmap_pars_vertex:Uu,envmap_physical_pars_fragment:qu,envmap_vertex:Nu,fog_vertex:Fu,fog_pars_vertex:Ou,fog_fragment:Bu,fog_pars_fragment:zu,gradientmap_pars_fragment:ku,lightmap_fragment:Vu,lightmap_pars_fragment:Hu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Wu,lights_pars_begin:Xu,lights_toon_fragment:Yu,lights_toon_pars_fragment:Zu,lights_phong_fragment:$u,lights_phong_pars_fragment:Ju,lights_physical_fragment:Ku,lights_physical_pars_fragment:ju,lights_fragment_begin:Qu,lights_fragment_maps:ed,lights_fragment_end:td,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:sd,logdepthbuf_vertex:rd,map_fragment:ad,map_pars_fragment:od,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:hd,metalnessmap_pars_fragment:ud,morphcolor_vertex:dd,morphnormal_vertex:fd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:xd,normal_pars_vertex:vd,normal_vertex:yd,normalmap_pars_fragment:Ld,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:Sd,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Ed,opaque_fragment:wd,packing:Td,premultiplied_alpha_fragment:Ad,project_vertex:Rd,dithering_fragment:Cd,dithering_pars_fragment:Pd,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Nd,shadowmap_vertex:Fd,shadowmask_pars_fragment:Od,skinbase_vertex:Bd,skinning_pars_vertex:zd,skinning_vertex:kd,skinnormal_vertex:Vd,specularmap_fragment:Hd,specularmap_pars_fragment:Gd,tonemapping_fragment:Wd,tonemapping_pars_fragment:Xd,transmission_fragment:qd,transmission_pars_fragment:Yd,uv_pars_fragment:Zd,uv_pars_vertex:$d,uv_vertex:Jd,worldpos_vertex:Kd,background_vert:jd,background_frag:Qd,backgroundCube_vert:ef,backgroundCube_frag:tf,cube_vert:nf,cube_frag:sf,depth_vert:rf,depth_frag:af,distanceRGBA_vert:of,distanceRGBA_frag:lf,equirect_vert:cf,equirect_frag:hf,linedashed_vert:uf,linedashed_frag:df,meshbasic_vert:ff,meshbasic_frag:pf,meshlambert_vert:mf,meshlambert_frag:gf,meshmatcap_vert:_f,meshmatcap_frag:xf,meshnormal_vert:vf,meshnormal_frag:yf,meshphong_vert:Lf,meshphong_frag:Mf,meshphysical_vert:Sf,meshphysical_frag:bf,meshtoon_vert:Ef,meshtoon_frag:wf,points_vert:Tf,points_frag:Af,shadow_vert:Rf,shadow_frag:Cf,sprite_vert:Pf,sprite_frag:If},ce={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},en={basic:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:wt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:wt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:wt([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:wt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:wt([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:wt([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:wt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:wt([ce.lights,ce.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};en.physical={uniforms:wt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var As={r:0,b:0,g:0};function Df(i,e,t,n,s,r,o){let a=new ze(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let S=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ir)?(h===void 0&&(h=new Ze(new Yn(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ti(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(v.colorSpace)!==nt,(d!==v||f!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ze(new ji(2,2),new vn({name:"BackgroundMaterial",uniforms:Ti(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(As,Wl(i)),n.buffers.color.setClear(As.r,As.g,As.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Uf(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(P,F,W,$,X){let q=!1;if(o){let Q=_($,W,F);c!==Q&&(c=Q,m(c.object)),q=u(P,$,W,X),q&&S(P,$,W,X)}else{let Q=F.wireframe===!0;(c.geometry!==$.id||c.program!==W.id||c.wireframe!==Q)&&(c.geometry=$.id,c.program=W.id,c.wireframe=Q,q=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,Y(P,F,W,$),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,F,W){let $=W.wireframe===!0,X=a[P.id];X===void 0&&(X={},a[P.id]=X);let q=X[F.id];q===void 0&&(q={},X[F.id]=q);let Q=q[$];return Q===void 0&&(Q=p(f()),q[$]=Q),Q}function p(P){let F=[],W=[],$=[];for(let X=0;X<s;X++)F[X]=0,W[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:$,object:P,attributes:{},index:null}}function u(P,F,W,$){let X=c.attributes,q=F.attributes,Q=0,te=W.getAttributes();for(let ue in te)if(te[ue].location>=0){let J=X[ue],de=q[ue];if(de===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;Q++}return c.attributesNum!==Q||c.index!==$}function S(P,F,W,$){let X={},q=F.attributes,Q=0,te=W.getAttributes();for(let ue in te)if(te[ue].location>=0){let J=q[ue];J===void 0&&(ue==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ue==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let de={};de.attribute=J,J&&J.data&&(de.data=J.data),X[ue]=de,Q++}c.attributes=X,c.attributesNum=Q,c.index=$}function v(){let P=c.newAttributes;for(let F=0,W=P.length;F<W;F++)P[F]=0}function T(P){C(P,0)}function C(P,F){let W=c.newAttributes,$=c.enabledAttributes,X=c.attributeDivisors;W[P]=1,$[P]===0&&(i.enableVertexAttribArray(P),$[P]=1),X[P]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),X[P]=F)}function A(){let P=c.newAttributes,F=c.enabledAttributes;for(let W=0,$=F.length;W<$;W++)F[W]!==P[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function w(P,F,W,$,X,q,Q){Q===!0?i.vertexAttribIPointer(P,F,W,X,q):i.vertexAttribPointer(P,F,W,$,X,q)}function Y(P,F,W,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let X=$.attributes,q=W.getAttributes(),Q=F.defaultAttributeValues;for(let te in q){let ue=q[te];if(ue.location>=0){let G=X[te];if(G===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let J=G.normalized,de=G.itemSize,_e=t.get(G);if(_e===void 0)continue;let fe=_e.buffer,Te=_e.type,Re=_e.bytesPerElement,we=n.isWebGL2===!0&&(Te===i.INT||Te===i.UNSIGNED_INT||G.gpuType===Al);if(G.isInterleavedBufferAttribute){let Xe=G.data,N=Xe.stride,at=G.offset;if(Xe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<ue.locationSize;Ee++)C(ue.location+Ee,Xe.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Ee=0;Ee<ue.locationSize;Ee++)T(ue.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Ee=0;Ee<ue.locationSize;Ee++)w(ue.location+Ee,de/ue.locationSize,Te,J,N*Re,(at+de/ue.locationSize*Ee)*Re,we)}else{if(G.isInstancedBufferAttribute){for(let Xe=0;Xe<ue.locationSize;Xe++)C(ue.location+Xe,G.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Xe=0;Xe<ue.locationSize;Xe++)T(ue.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,fe);for(let Xe=0;Xe<ue.locationSize;Xe++)w(ue.location+Xe,de/ue.locationSize,Te,J,de*Re,de/ue.locationSize*Xe*Re,we)}}else if(Q!==void 0){let J=Q[te];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(ue.location,J);break;case 3:i.vertexAttrib3fv(ue.location,J);break;case 4:i.vertexAttrib4fv(ue.location,J);break;default:i.vertexAttrib1fv(ue.location,J)}}}}A()}function L(){K();for(let P in a){let F=a[P];for(let W in F){let $=F[W];for(let X in $)g($[X].object),delete $[X];delete F[W]}delete a[P]}}function b(P){if(a[P.id]===void 0)return;let F=a[P.id];for(let W in F){let $=F[W];for(let X in $)g($[X].object),delete $[X];delete F[W]}delete a[P.id]}function V(P){for(let F in a){let W=a[F];if(W[P.id]===void 0)continue;let $=W[P.id];for(let X in $)g($[X].object),delete $[X];delete W[P.id]}}function K(){ae(),h=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:ae,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:T,disableUnusedAttributes:A}}function Nf(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ff(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=o||e.has("OES_texture_float"),C=v&&T,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:A}}function Of(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Pt,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,v=S*4,T=u.clippingState||null;l.value=T,T=h(g,f,v,m);for(let C=0;C!==v;++C)T[C]=t[C];u.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let u=m+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,T=m;v!==_;++v,T+=4)o.copy(d[v]).applyMatrix4(S,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Bf(i){let e=new WeakMap;function t(o,a){return a===jr?o.mapping=bi:a===Qr&&(o.mapping=Ei),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jr||a===Qr)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new oa(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Js=class extends Zs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vi=4,tl=[.125,.215,.35,.446,.526,.582],Vn=20,Gr=new Js,nl=new ze,Wr=null,Xr=0,qr=0,zn=(1+Math.sqrt(5))/2,gi=1/zn,il=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,zn,gi),new D(0,zn,-gi),new D(gi,0,zn),new D(-gi,0,zn),new D(zn,gi,0),new D(-zn,gi,0)],Ai=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr,Xr,qr),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Yi,format:$t,colorSpace:_n,depthBuffer:!1},s=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zf(r)),this._blurMaterial=kf(r,e,t)}return s}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,n,s){let a=new Mt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(nl),h.toneMapping=Rn,h.autoClear=!1;let m=new Pn({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),g=new Ze(new Yn,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(nl),_=!0);for(let u=0;u<6;u++){let S=u%3;S===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):S===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;Rs(s,S*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bi||e.mapping===Ei;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=il[(s-1)%il.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ze(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Vn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Vn;p>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);let u=[],S=0;for(let w=0;w<Vn;++w){let Y=w/_,L=Math.exp(-Y*Y/2);u.push(L),w===0?S+=L:w<p&&(S+=2*L)}for(let w=0;w<u.length;w++)u[w]=u[w]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let T=this._sizeLods[s],C=3*T*(s>v-vi?s-v+vi:0),A=4*(this._cubeSize-T);Rs(t,C,A,3*T,2*T),l.setRenderTarget(t),l.render(d,Gr)}};function zf(i){let e=[],t=[],n=[],s=i,r=i-vi+1+tl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-vi?l=tl[o-i+vi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,S=new Float32Array(_*g*m),v=new Float32Array(p*g*m),T=new Float32Array(u*g*m);for(let A=0;A<m;A++){let w=A%3*2/3-1,Y=A>2?0:-1,L=[w,Y,0,w+2/3,Y,0,w+2/3,Y+1,0,w,Y,0,w+2/3,Y+1,0,w,Y+1,0];S.set(L,_*g*A),v.set(f,p*g*A);let b=[A,A,A,A,A,A];T.set(b,u*g*A)}let C=new Vt;C.setAttribute("position",new At(S,_)),C.setAttribute("uv",new At(v,p)),C.setAttribute("faceIndex",new At(T,u)),e.push(C),s>vi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(i,e,t){let n=new xn(i,e,t);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kf(i,e,t){let n=new Float32Array(Vn),s=new D(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function rl(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function al(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===jr||l===Qr,h=l===bi||l===Ei;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ai(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Ai(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hf(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gf(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let S=m.array;_=m.version;for(let v=0,T=S.length;v<T;v+=3){let C=S[v+0],A=S[v+1],w=S[v+2];f.push(C,A,A,w,w,C)}}else if(g!==void 0){let S=g.array;_=g.version;for(let v=0,T=S.length/3-1;v<T;v+=3){let C=v+0,A=v+1,w=v+2;f.push(C,A,A,w,w,C)}}else return;let p=new(Hl(f)?Ys:qs)(f,1);p.version=_;let u=r.get(d);u&&e.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wf(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*l,_),t.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let u=0;for(let S=0;S<_;S++)u+=g[S];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Xf(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function qf(i,e){return i[0]-e[0]}function Yf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Zf(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let P=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],Y=0;S===!0&&(Y=1),v===!0&&(Y=2),T===!0&&(Y=3);let L=h.attributes.position.count*Y,b=1;L>e.maxTextureSize&&(b=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);let V=new Float32Array(L*b*4*g),K=new Gs(V,L,b,g);K.type=Tn,K.needsUpdate=!0;let ae=Y*4;for(let F=0;F<g;F++){let W=C[F],$=A[F],X=w[F],q=L*b*4*F;for(let Q=0;Q<W.count;Q++){let te=Q*ae;S===!0&&(o.fromBufferAttribute(W,Q),V[q+te+0]=o.x,V[q+te+1]=o.y,V[q+te+2]=o.z,V[q+te+3]=0),v===!0&&(o.fromBufferAttribute($,Q),V[q+te+4]=o.x,V[q+te+5]=o.y,V[q+te+6]=o.z,V[q+te+7]=0),T===!0&&(o.fromBufferAttribute(X,Q),V[q+te+8]=o.x,V[q+te+9]=o.y,V[q+te+10]=o.z,V[q+te+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:K,size:new Ne(L,b)},r.set(h,_),h.addEventListener("dispose",P)}let p=0;for(let S=0;S<f.length;S++)p+=f[S];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<m;v++){let T=g[v];T[0]=v,T[1]=f[v]}g.sort(Yf);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(qf);let _=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let T=a[v],C=T[0],A=T[1];C!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+v)!==_[C]&&h.setAttribute("morphTarget"+v,_[C]),p&&h.getAttribute("morphNormal"+v)!==p[C]&&h.setAttribute("morphNormal"+v,p[C]),s[v]=A,u+=A):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let S=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",S),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function $f(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ks=class extends Jt{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Gn,h!==Gn&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gn&&(n=wn),n===void 0&&h===wi&&(n=Hn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ql=new Jt,Yl=new Ks(1,1);Yl.compareFunction=kl;var Zl=new Gs,$l=new ra,Jl=new $s,ol=[],ll=[],cl=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function Ii(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ol[s];if(r===void 0&&(r=new Float32Array(s),ol[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ar(i,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jf(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function jf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function Qf(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function ep(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),dt(t,n)}}function tp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;hl.set(n),i.uniformMatrix3fv(this.addr,!1,hl),dt(t,n)}}function np(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),dt(t,n)}}function ip(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function rp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function op(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function cp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function hp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function up(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Yl:ql;t.setTexture2D(e||r,s)}function dp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$l,s)}function fp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jl,s)}function pp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zl,s)}function mp(i){switch(i){case 5126:return Jf;case 35664:return Kf;case 35665:return jf;case 35666:return Qf;case 35674:return ep;case 35675:return tp;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return sp;case 35668:case 35672:return rp;case 35669:case 35673:return ap;case 5125:return op;case 36294:return lp;case 36295:return cp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return pp}}function gp(i,e){i.uniform1fv(this.addr,e)}function _p(i,e){let t=Ii(e,this.size,2);i.uniform2fv(this.addr,t)}function xp(i,e){let t=Ii(e,this.size,3);i.uniform3fv(this.addr,t)}function vp(i,e){let t=Ii(e,this.size,4);i.uniform4fv(this.addr,t)}function yp(i,e){let t=Ii(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lp(i,e){let t=Ii(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mp(i,e){let t=Ii(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sp(i,e){i.uniform1iv(this.addr,e)}function bp(i,e){i.uniform2iv(this.addr,e)}function Ep(i,e){i.uniform3iv(this.addr,e)}function wp(i,e){i.uniform4iv(this.addr,e)}function Tp(i,e){i.uniform1uiv(this.addr,e)}function Ap(i,e){i.uniform2uiv(this.addr,e)}function Rp(i,e){i.uniform3uiv(this.addr,e)}function Cp(i,e){i.uniform4uiv(this.addr,e)}function Pp(i,e,t){let n=this.cache,s=e.length,r=ar(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ql,r[o])}function Ip(i,e,t){let n=this.cache,s=e.length,r=ar(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||$l,r[o])}function Dp(i,e,t){let n=this.cache,s=e.length,r=ar(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jl,r[o])}function Up(i,e,t){let n=this.cache,s=e.length,r=ar(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Zl,r[o])}function Np(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return xp;case 35666:return vp;case 35674:return yp;case 35675:return Lp;case 35676:return Mp;case 5124:case 35670:return Sp;case 35667:case 35671:return bp;case 35668:case 35672:return Ep;case 35669:case 35673:return wp;case 5125:return Tp;case 36294:return Ap;case 36295:return Rp;case 36296:return Cp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Ip;case 35680:case 36300:case 36308:case 36293:return Dp;case 36289:case 36303:case 36311:case 36292:return Up}}var la=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mp(t.type)}},ca=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Np(t.type)}},ha=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Yr=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function Fp(i,e,t){let n=i.name,s=n.length;for(Yr.lastIndex=0;;){let r=Yr.exec(n),o=Yr.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){dl(t,c===void 0?new la(a,i,e):new ca(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new ha(a),dl(t,d)),t=d}}}var Si=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Fp(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function fl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Op=37297,Bp=0;function zp(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kp(i){let e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(i),n;switch(e===t?n="":e===Fs&&t===Ns?n="LinearDisplayP3ToLinearSRGB":e===Ns&&t===Fs&&(n="LinearSRGBToLinearDisplayP3"),i){case _n:case sr:return[n,"LinearTransferOETF"];case ct:case Da:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zp(i.getShaderSource(e),o)}else return s}function Vp(i,e){let t=kp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hp(i,e){let t;switch(e){case qc:t="Linear";break;case Yc:t="Reinhard";break;case Zc:t="OptimizedCineon";break;case $c:t="ACESFilmic";break;case Kc:t="AgX";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yi).join(`
`)}function Wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(yi).join(`
`)}function Xp(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qp(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function yi(i){return i!==""}function ml(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(i){return i.replace(Yp,$p)}var Zp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $p(i,e){let t=Be[e];if(t===void 0){let n=Zp.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ua(t)}var Jp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(Jp,Kp)}function Kp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Ei:e="ENVMAP_TYPE_CUBE";break;case ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function em(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function tm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Wc:e="ENVMAP_BLENDING_MIX";break;case Xc:e="ENVMAP_BLENDING_ADD";break}return e}function nm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function im(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=jp(t),c=Qp(t),h=em(t),d=tm(t),f=nm(t),m=t.isWebGL2?"":Gp(t),g=Wp(t),_=Xp(r),p=s.createProgram(),u,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yi).join(`
`),u.length>0&&(u+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(yi).join(`
`),S.length>0&&(S+=`
`)):(u=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yi).join(`
`),S=[m,xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Hp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Vp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yi).join(`
`)),o=ua(o),o=ml(o,t),o=gl(o,t),a=ua(a),a=ml(a,t),a=gl(a,t),o=_l(o),a=_l(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=v+u+o,C=v+S+a,A=fl(s,s.VERTEX_SHADER,T),w=fl(s,s.FRAGMENT_SHADER,C);s.attachShader(p,A),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function Y(K){if(i.debug.checkShaderErrors){let ae=s.getProgramInfoLog(p).trim(),P=s.getShaderInfoLog(A).trim(),F=s.getShaderInfoLog(w).trim(),W=!0,$=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,A,w);else{let X=pl(s,A,"vertex"),q=pl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+X+`
`+q)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(P===""||F==="")&&($=!1);$&&(K.diagnostics={runnable:W,programLog:ae,vertexShader:{log:P,prefix:u},fragmentShader:{log:F,prefix:S}})}s.deleteShader(A),s.deleteShader(w),L=new Si(s,p),b=qp(s,p)}let L;this.getUniforms=function(){return L===void 0&&Y(this),L};let b;this.getAttributes=function(){return b===void 0&&Y(this),b};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,Op)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bp++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}var sm=0,da=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fa(e),t.set(e,n)),n}},fa=class{constructor(e){this.id=sm++,this.code=e,this.usedTimes=0}};function rm(i,e,t,n,s,r,o){let a=new Xs,l=new da,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(L){return L===0?"uv":`uv${L}`}function p(L,b,V,K,ae){let P=K.fog,F=ae.geometry,W=L.isMeshStandardMaterial?K.environment:null,$=(L.isMeshStandardMaterial?t:e).get(L.envMap||W),X=$&&$.mapping===ir?$.image.height:null,q=g[L.type];L.precision!==null&&(m=s.getMaxPrecision(L.precision),m!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",m,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=Q!==void 0?Q.length:0,ue=0;F.morphAttributes.position!==void 0&&(ue=1),F.morphAttributes.normal!==void 0&&(ue=2),F.morphAttributes.color!==void 0&&(ue=3);let G,J,de,_e;if(q){let St=en[q];G=St.vertexShader,J=St.fragmentShader}else G=L.vertexShader,J=L.fragmentShader,l.update(L),de=l.getVertexShaderID(L),_e=l.getFragmentShaderID(L);let fe=i.getRenderTarget(),Te=ae.isInstancedMesh===!0,Re=ae.isBatchedMesh===!0,we=!!L.map,Xe=!!L.matcap,N=!!$,at=!!L.aoMap,Ee=!!L.lightMap,Ce=!!L.bumpMap,xe=!!L.normalMap,je=!!L.displacementMap,Ue=!!L.emissiveMap,M=!!L.metalnessMap,x=!!L.roughnessMap,I=L.anisotropy>0,z=L.clearcoat>0,k=L.iridescence>0,Z=L.sheen>0,me=L.transmission>0,ne=I&&!!L.anisotropyMap,he=z&&!!L.clearcoatMap,ye=z&&!!L.clearcoatNormalMap,Ie=z&&!!L.clearcoatRoughnessMap,ee=k&&!!L.iridescenceMap,qe=k&&!!L.iridescenceThicknessMap,E=Z&&!!L.sheenColorMap,j=Z&&!!L.sheenRoughnessMap,le=!!L.specularMap,ie=!!L.specularColorMap,Me=!!L.specularIntensityMap,He=me&&!!L.transmissionMap,Ye=me&&!!L.thicknessMap,ke=!!L.gradientMap,oe=!!L.alphaMap,R=L.alphaTest>0,se=!!L.alphaHash,re=!!L.extensions,Ae=!!F.attributes.uv1,Se=!!F.attributes.uv2,$e=!!F.attributes.uv3,Je=Rn;return L.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:h,shaderID:q,shaderType:L.type,shaderName:L.name,vertexShader:G,fragmentShader:J,defines:L.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:m,batching:Re,instancing:Te,instancingColor:Te&&ae.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:_n,map:we,matcap:Xe,envMap:N,envMapMode:N&&$.mapping,envMapCubeUVHeight:X,aoMap:at,lightMap:Ee,bumpMap:Ce,normalMap:xe,displacementMap:f&&je,emissiveMap:Ue,normalMapObjectSpace:xe&&L.normalMapType===ch,normalMapTangentSpace:xe&&L.normalMapType===Fl,metalnessMap:M,roughnessMap:x,anisotropy:I,anisotropyMap:ne,clearcoat:z,clearcoatMap:he,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ie,iridescence:k,iridescenceMap:ee,iridescenceThicknessMap:qe,sheen:Z,sheenColorMap:E,sheenRoughnessMap:j,specularMap:le,specularColorMap:ie,specularIntensityMap:Me,transmission:me,transmissionMap:He,thicknessMap:Ye,gradientMap:ke,opaque:L.transparent===!1&&L.blending===Li,alphaMap:oe,alphaTest:R,alphaHash:se,combine:L.combine,mapUv:we&&_(L.map.channel),aoMapUv:at&&_(L.aoMap.channel),lightMapUv:Ee&&_(L.lightMap.channel),bumpMapUv:Ce&&_(L.bumpMap.channel),normalMapUv:xe&&_(L.normalMap.channel),displacementMapUv:je&&_(L.displacementMap.channel),emissiveMapUv:Ue&&_(L.emissiveMap.channel),metalnessMapUv:M&&_(L.metalnessMap.channel),roughnessMapUv:x&&_(L.roughnessMap.channel),anisotropyMapUv:ne&&_(L.anisotropyMap.channel),clearcoatMapUv:he&&_(L.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(L.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(L.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&_(L.iridescenceThicknessMap.channel),sheenColorMapUv:E&&_(L.sheenColorMap.channel),sheenRoughnessMapUv:j&&_(L.sheenRoughnessMap.channel),specularMapUv:le&&_(L.specularMap.channel),specularColorMapUv:ie&&_(L.specularColorMap.channel),specularIntensityMapUv:Me&&_(L.specularIntensityMap.channel),transmissionMapUv:He&&_(L.transmissionMap.channel),thicknessMapUv:Ye&&_(L.thicknessMap.channel),alphaMapUv:oe&&_(L.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||I),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Se,vertexUv3s:$e,pointsUvs:ae.isPoints===!0&&!!F.attributes.uv&&(we||oe),fog:!!P,useFog:L.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ae.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&L.map.isVideoTexture===!0&&Ke.getTransfer(L.map.colorSpace)===nt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Yt,flipSided:L.side===_t,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionDerivatives:re&&L.extensions.derivatives===!0,extensionFragDepth:re&&L.extensions.fragDepth===!0,extensionDrawBuffers:re&&L.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&L.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&L.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()}}function u(L){let b=[];if(L.shaderID?b.push(L.shaderID):(b.push(L.customVertexShaderID),b.push(L.customFragmentShaderID)),L.defines!==void 0)for(let V in L.defines)b.push(V),b.push(L.defines[V]);return L.isRawShaderMaterial===!1&&(S(b,L),v(b,L),b.push(i.outputColorSpace)),b.push(L.customProgramCacheKey),b.join()}function S(L,b){L.push(b.precision),L.push(b.outputColorSpace),L.push(b.envMapMode),L.push(b.envMapCubeUVHeight),L.push(b.mapUv),L.push(b.alphaMapUv),L.push(b.lightMapUv),L.push(b.aoMapUv),L.push(b.bumpMapUv),L.push(b.normalMapUv),L.push(b.displacementMapUv),L.push(b.emissiveMapUv),L.push(b.metalnessMapUv),L.push(b.roughnessMapUv),L.push(b.anisotropyMapUv),L.push(b.clearcoatMapUv),L.push(b.clearcoatNormalMapUv),L.push(b.clearcoatRoughnessMapUv),L.push(b.iridescenceMapUv),L.push(b.iridescenceThicknessMapUv),L.push(b.sheenColorMapUv),L.push(b.sheenRoughnessMapUv),L.push(b.specularMapUv),L.push(b.specularColorMapUv),L.push(b.specularIntensityMapUv),L.push(b.transmissionMapUv),L.push(b.thicknessMapUv),L.push(b.combine),L.push(b.fogExp2),L.push(b.sizeAttenuation),L.push(b.morphTargetsCount),L.push(b.morphAttributeCount),L.push(b.numDirLights),L.push(b.numPointLights),L.push(b.numSpotLights),L.push(b.numSpotLightMaps),L.push(b.numHemiLights),L.push(b.numRectAreaLights),L.push(b.numDirLightShadows),L.push(b.numPointLightShadows),L.push(b.numSpotLightShadows),L.push(b.numSpotLightShadowsWithMaps),L.push(b.numLightProbes),L.push(b.shadowMapType),L.push(b.toneMapping),L.push(b.numClippingPlanes),L.push(b.numClipIntersection),L.push(b.depthPacking)}function v(L,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),L.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),L.push(a.mask)}function T(L){let b=g[L.type],V;if(b){let K=en[b];V=Yh.clone(K.uniforms)}else V=L.uniforms;return V}function C(L,b){let V;for(let K=0,ae=c.length;K<ae;K++){let P=c[K];if(P.cacheKey===b){V=P,++V.usedTimes;break}}return V===void 0&&(V=new im(i,b,L,r),c.push(V)),V}function A(L){if(--L.usedTimes===0){let b=c.indexOf(L);c[b]=c[c.length-1],c.pop(),L.destroy()}}function w(L){l.remove(L)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:T,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:Y}}function am(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yl(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,m,g,_,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),e++,u}function a(d,f,m,g,_,p){let u=o(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,f,m,g,_,p){let u=o(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||om),n.length>1&&n.sort(f||vl),s.length>1&&s.sort(f||vl)}function h(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function lm(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new yl,i.set(n,[o])):s>=r.length?(o=new yl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ze};break;case"SpotLight":t={position:new D,direction:new D,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function hm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var um=0;function dm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fm(i,e){let t=new cm,n=hm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,o=new ht,a=new ht;function l(h,d){let f=0,m=0,g=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let _=0,p=0,u=0,S=0,v=0,T=0,C=0,A=0,w=0,Y=0,L=0;h.sort(dm);let b=d===!0?Math.PI:1;for(let K=0,ae=h.length;K<ae;K++){let P=h[K],F=P.color,W=P.intensity,$=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*W*b,m+=F.g*W*b,g+=F.b*W*b;else if(P.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(P.sh.coefficients[q],W);L++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){let Q=P.shadow,te=n.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.directionalShadow[_]=te,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=P.shadow.matrix,T++}s.directional[_]=q,_++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(W*b),q.distance=$,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,s.spot[u]=q;let Q=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,Q.updateMatrices(P),P.castShadow&&Y++),s.spotLightMatrix[u]=Q.matrix,P.castShadow){let te=n.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,s.spotShadow[u]=te,s.spotShadowMap[u]=X,A++}u++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(F).multiplyScalar(W),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),s.rectArea[S]=q,S++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*b),q.distance=P.distance,q.decay=P.decay,P.castShadow){let Q=P.shadow,te=n.get(P);te.shadowBias=Q.bias,te.shadowNormalBias=Q.normalBias,te.shadowRadius=Q.radius,te.shadowMapSize=Q.mapSize,te.shadowCameraNear=Q.camera.near,te.shadowCameraFar=Q.camera.far,s.pointShadow[p]=te,s.pointShadowMap[p]=X,s.pointShadowMatrix[p]=P.shadow.matrix,C++}s.point[p]=q,p++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(W*b),q.groundColor.copy(P.groundColor).multiplyScalar(W*b),s.hemi[v]=q,v++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let V=s.hash;(V.directionalLength!==_||V.pointLength!==p||V.spotLength!==u||V.rectAreaLength!==S||V.hemiLength!==v||V.numDirectionalShadows!==T||V.numPointShadows!==C||V.numSpotShadows!==A||V.numSpotMaps!==w||V.numLightProbes!==L)&&(s.directional.length=_,s.spot.length=u,s.rectArea.length=S,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+w-Y,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=Y,s.numLightProbes=L,V.directionalLength=_,V.pointLength=p,V.spotLength=u,V.rectAreaLength=S,V.hemiLength=v,V.numDirectionalShadows=T,V.numPointShadows=C,V.numSpotShadows=A,V.numSpotMaps=w,V.numLightProbes=L,s.version=um++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0,u=d.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){let T=h[S];if(T.isDirectionalLight){let C=s.directional[f];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),f++}else if(T.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(u),g++}else if(T.isRectAreaLight){let C=s.rectArea[_];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(T.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){let C=s.point[m];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){let C=s.hemi[p];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function Ll(i,e){let t=new fm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function pm(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Ll(i,e),t.set(r,[l])):o>=a.length?(l=new Ll(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var pa=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ma=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _m(i,e,t){let n=new Ki,s=new Ne,r=new Ne,o=new et,a=new pa({depthPacking:lh}),l=new ma,c={},h=t.maxTextureSize,d={[tn]:_t,[_t]:tn,[Yt]:Yt},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:mm,fragmentShader:gm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Vt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ze(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let u=this.type;this.render=function(A,w,Y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let L=i.getRenderTarget(),b=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),K=i.state;K.setBlending(An),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);let ae=u!==pn&&this.type===pn,P=u===pn&&this.type!==pn;for(let F=0,W=A.length;F<W;F++){let $=A[F],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let q=X.getFrameExtents();if(s.multiply(q),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,X.mapSize.y=r.y)),X.map===null||ae===!0||P===!0){let te=this.type!==pn?{minFilter:Tt,magFilter:Tt}:{};X.map!==null&&X.map.dispose(),X.map=new xn(s.x,s.y,te),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let Q=X.getViewportCount();for(let te=0;te<Q;te++){let ue=X.getViewport(te);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),K.viewport(o),X.updateMatrices($,te),n=X.getFrustum(),T(w,Y,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===pn&&S(X,Y),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(L,b,V)};function S(A,w){let Y=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new xn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,Y,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,Y,m,_,null)}function v(A,w,Y,L){let b=null,V=Y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(V!==void 0)b=V;else if(b=Y.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let K=b.uuid,ae=w.uuid,P=c[K];P===void 0&&(P={},c[K]=P);let F=P[ae];F===void 0&&(F=b.clone(),P[ae]=F,w.addEventListener("dispose",C)),b=F}if(b.visible=w.visible,b.wireframe=w.wireframe,L===pn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,Y.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let K=i.properties.get(b);K.light=Y}return b}function T(A,w,Y,L,b){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld);let ae=e.update(A),P=A.material;if(Array.isArray(P)){let F=ae.groups;for(let W=0,$=F.length;W<$;W++){let X=F[W],q=P[X.materialIndex];if(q&&q.visible){let Q=v(A,q,L,b);A.onBeforeShadow(i,A,w,Y,ae,Q,X),i.renderBufferDirect(Y,null,ae,Q,A,X),A.onAfterShadow(i,A,w,Y,ae,Q,X)}}}else if(P.visible){let F=v(A,P,L,b);A.onBeforeShadow(i,A,w,Y,ae,F,null),i.renderBufferDirect(Y,null,ae,F,A,null),A.onAfterShadow(i,A,w,Y,ae,F,null)}}let K=A.children;for(let ae=0,P=K.length;ae<P;ae++)T(K[ae],w,Y,L,b)}function C(A){A.target.removeEventListener("dispose",C);for(let Y in c){let L=c[Y],b=A.target.uuid;b in L&&(L[b].dispose(),delete L[b])}}}function xm(i,e,t){let n=t.isWebGL2;function s(){let R=!1,se=new et,re=null,Ae=new et(0,0,0,0);return{setMask:function(Se){re!==Se&&!R&&(i.colorMask(Se,Se,Se,Se),re=Se)},setLocked:function(Se){R=Se},setClear:function(Se,$e,Je,pt,St){St===!0&&(Se*=pt,$e*=pt,Je*=pt),se.set(Se,$e,Je,pt),Ae.equals(se)===!1&&(i.clearColor(Se,$e,Je,pt),Ae.copy(se))},reset:function(){R=!1,re=null,Ae.set(-1,0,0,0)}}}function r(){let R=!1,se=null,re=null,Ae=null;return{setTest:function(Se){Se?Re(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Se){se!==Se&&!R&&(i.depthMask(Se),se=Se)},setFunc:function(Se){if(re!==Se){switch(Se){case Oc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Hc:i.depthFunc(i.GREATER);break;case Gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Se}},setLocked:function(Se){R=Se},setClear:function(Se){Ae!==Se&&(i.clearDepth(Se),Ae=Se)},reset:function(){R=!1,se=null,re=null,Ae=null}}}function o(){let R=!1,se=null,re=null,Ae=null,Se=null,$e=null,Je=null,pt=null,St=null;return{setTest:function(Qe){R||(Qe?Re(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!R&&(i.stencilMask(Qe),se=Qe)},setFunc:function(Qe,bt,Qt){(re!==Qe||Ae!==bt||Se!==Qt)&&(i.stencilFunc(Qe,bt,Qt),re=Qe,Ae=bt,Se=Qt)},setOp:function(Qe,bt,Qt){($e!==Qe||Je!==bt||pt!==Qt)&&(i.stencilOp(Qe,bt,Qt),$e=Qe,Je=bt,pt=Qt)},setLocked:function(Qe){R=Qe},setClear:function(Qe){St!==Qe&&(i.clearStencil(Qe),St=Qe)},reset:function(){R=!1,se=null,re=null,Ae=null,Se=null,$e=null,Je=null,pt=null,St=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,u=!1,S=null,v=null,T=null,C=null,A=null,w=null,Y=null,L=new ze(0,0,0),b=0,V=!1,K=null,ae=null,P=null,F=null,W=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,q=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),X=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),X=q>=2);let te=null,ue={},G=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),de=new et().fromArray(G),_e=new et().fromArray(J);function fe(R,se,re,Ae){let Se=new Uint8Array(4),$e=i.createTexture();i.bindTexture(R,$e),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<re;Je++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(se+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return $e}let Te={};Te[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(i.DEPTH_TEST),l.setFunc(Ps),Ue(!1),M(eo),Re(i.CULL_FACE),xe(An);function Re(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function we(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function Xe(R,se){return m[R]!==se?(i.bindFramebuffer(R,se),m[R]=se,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=se),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function N(R,se){let re=_,Ae=!1;if(R)if(re=g.get(se),re===void 0&&(re=[],g.set(se,re)),R.isWebGLMultipleRenderTargets){let Se=R.texture;if(re.length!==Se.length||re[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,Je=Se.length;$e<Je;$e++)re[$e]=i.COLOR_ATTACHMENT0+$e;re.length=Se.length,Ae=!0}}else re[0]!==i.COLOR_ATTACHMENT0&&(re[0]=i.COLOR_ATTACHMENT0,Ae=!0);else re[0]!==i.BACK&&(re[0]=i.BACK,Ae=!0);Ae&&(t.isWebGL2?i.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function at(R){return p!==R?(i.useProgram(R),p=R,!0):!1}let Ee={[kn]:i.FUNC_ADD,[Mc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};if(n)Ee[so]=i.MIN,Ee[ro]=i.MAX;else{let R=e.get("EXT_blend_minmax");R!==null&&(Ee[so]=R.MIN_EXT,Ee[ro]=R.MAX_EXT)}let Ce={[bc]:i.ZERO,[Ec]:i.ONE,[wc]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[Ic]:i.SRC_ALPHA_SATURATE,[Cc]:i.DST_COLOR,[Ac]:i.DST_ALPHA,[Tc]:i.ONE_MINUS_SRC_COLOR,[Kr]:i.ONE_MINUS_SRC_ALPHA,[Pc]:i.ONE_MINUS_DST_COLOR,[Rc]:i.ONE_MINUS_DST_ALPHA,[Dc]:i.CONSTANT_COLOR,[Uc]:i.ONE_MINUS_CONSTANT_COLOR,[Nc]:i.CONSTANT_ALPHA,[Fc]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(R,se,re,Ae,Se,$e,Je,pt,St,Qe){if(R===An){u===!0&&(we(i.BLEND),u=!1);return}if(u===!1&&(Re(i.BLEND),u=!0),R!==Lc){if(R!==S||Qe!==V){if((v!==kn||A!==kn)&&(i.blendEquation(i.FUNC_ADD),v=kn,A=kn),Qe)switch(R){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.ONE,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case to:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case no:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case io:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,C=null,w=null,Y=null,L.set(0,0,0),b=0,S=R,V=Qe}return}Se=Se||se,$e=$e||re,Je=Je||Ae,(se!==v||Se!==A)&&(i.blendEquationSeparate(Ee[se],Ee[Se]),v=se,A=Se),(re!==T||Ae!==C||$e!==w||Je!==Y)&&(i.blendFuncSeparate(Ce[re],Ce[Ae],Ce[$e],Ce[Je]),T=re,C=Ae,w=$e,Y=Je),(pt.equals(L)===!1||St!==b)&&(i.blendColor(pt.r,pt.g,pt.b,St),L.copy(pt),b=St),S=R,V=!1}function je(R,se){R.side===Yt?we(i.CULL_FACE):Re(i.CULL_FACE);let re=R.side===_t;se&&(re=!re),Ue(re),R.blending===Li&&R.transparent===!1?xe(An):xe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);let Ae=R.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),I(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Re(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(R){K!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),K=R)}function M(R){R!==xc?(Re(i.CULL_FACE),R!==ae&&(R===eo?i.cullFace(i.BACK):R===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),ae=R}function x(R){R!==P&&(X&&i.lineWidth(R),P=R)}function I(R,se,re){R?(Re(i.POLYGON_OFFSET_FILL),(F!==se||W!==re)&&(i.polygonOffset(se,re),F=se,W=re)):we(i.POLYGON_OFFSET_FILL)}function z(R){R?Re(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function k(R){R===void 0&&(R=i.TEXTURE0+$-1),te!==R&&(i.activeTexture(R),te=R)}function Z(R,se,re){re===void 0&&(te===null?re=i.TEXTURE0+$-1:re=te);let Ae=ue[re];Ae===void 0&&(Ae={type:void 0,texture:void 0},ue[re]=Ae),(Ae.type!==R||Ae.texture!==se)&&(te!==re&&(i.activeTexture(re),te=re),i.bindTexture(R,se||Te[R]),Ae.type=R,Ae.texture=se)}function me(){let R=ue[te];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function E(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(R){de.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),de.copy(R))}function He(R){_e.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),_e.copy(R))}function Ye(R,se){let re=d.get(se);re===void 0&&(re=new WeakMap,d.set(se,re));let Ae=re.get(R);Ae===void 0&&(Ae=i.getUniformBlockIndex(se,R.name),re.set(R,Ae))}function ke(R,se){let Ae=d.get(se).get(R);h.get(se)!==Ae&&(i.uniformBlockBinding(se,Ae,R.__bindingPointIndex),h.set(se,Ae))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},te=null,ue={},m={},g=new WeakMap,_=[],p=null,u=!1,S=null,v=null,T=null,C=null,A=null,w=null,Y=null,L=new ze(0,0,0),b=0,V=!1,K=null,ae=null,P=null,F=null,W=null,de.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:we,bindFramebuffer:Xe,drawBuffers:N,useProgram:at,setBlending:xe,setMaterial:je,setFlipSided:Ue,setCullFace:M,setLineWidth:x,setPolygonOffset:I,setScissorTest:z,activeTexture:k,bindTexture:Z,unbindTexture:me,compressedTexImage2D:ne,compressedTexImage3D:he,texImage2D:le,texImage3D:ie,updateUBOMapping:Ye,uniformBlockBinding:ke,texStorage2D:E,texStorage3D:j,texSubImage2D:ye,texSubImage3D:Ie,compressedTexSubImage2D:ee,compressedTexSubImage3D:qe,scissor:Me,viewport:He,reset:oe}}function vm(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,x){return m?new OffscreenCanvas(M,x):ks("canvas")}function _(M,x,I,z){let k=1;if((M.width>z||M.height>z)&&(k=z/Math.max(M.width,M.height)),k<1||x===!0)if(typeof HTMLImageElement!="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&M instanceof ImageBitmap){let Z=x?zs:Math.floor,me=Z(k*M.width),ne=Z(k*M.height);d===void 0&&(d=g(me,ne));let he=I?g(me,ne):d;return he.width=me,he.height=ne,he.getContext("2d").drawImage(M,0,0,me,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+me+"x"+ne+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return ia(M.width)&&ia(M.height)}function u(M){return a?!1:M.wrapS!==Zt||M.wrapT!==Zt||M.minFilter!==Tt&&M.minFilter!==zt}function S(M,x){return M.generateMipmaps&&x&&M.minFilter!==Tt&&M.minFilter!==zt}function v(M){i.generateMipmap(M)}function T(M,x,I,z,k=!1){if(a===!1)return x;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=x;if(x===i.RED&&(I===i.FLOAT&&(Z=i.R32F),I===i.HALF_FLOAT&&(Z=i.R16F),I===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(Z=i.R8UI),I===i.UNSIGNED_SHORT&&(Z=i.R16UI),I===i.UNSIGNED_INT&&(Z=i.R32UI),I===i.BYTE&&(Z=i.R8I),I===i.SHORT&&(Z=i.R16I),I===i.INT&&(Z=i.R32I)),x===i.RG&&(I===i.FLOAT&&(Z=i.RG32F),I===i.HALF_FLOAT&&(Z=i.RG16F),I===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RGBA){let me=k?Us:Ke.getTransfer(z);I===i.FLOAT&&(Z=i.RGBA32F),I===i.HALF_FLOAT&&(Z=i.RGBA16F),I===i.UNSIGNED_BYTE&&(Z=me===nt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function C(M,x,I){return S(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==Tt&&M.minFilter!==zt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){return M===Tt||M===ao||M===vr?i.NEAREST:i.LINEAR}function w(M){let x=M.target;x.removeEventListener("dispose",w),L(x),x.isVideoTexture&&h.delete(x)}function Y(M){let x=M.target;x.removeEventListener("dispose",Y),V(x)}function L(M){let x=n.get(M);if(x.__webglInit===void 0)return;let I=M.source,z=f.get(I);if(z){let k=z[x.__cacheKey];k.usedTimes--,k.usedTimes===0&&b(M),Object.keys(z).length===0&&f.delete(I)}n.remove(M)}function b(M){let x=n.get(M);i.deleteTexture(x.__webglTexture);let I=M.source,z=f.get(I);delete z[x.__cacheKey],o.memory.textures--}function V(M){let x=M.texture,I=n.get(M),z=n.get(x);if(z.__webglTexture!==void 0&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(I.__webglFramebuffer[k]))for(let Z=0;Z<I.__webglFramebuffer[k].length;Z++)i.deleteFramebuffer(I.__webglFramebuffer[k][Z]);else i.deleteFramebuffer(I.__webglFramebuffer[k]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[k])}else{if(Array.isArray(I.__webglFramebuffer))for(let k=0;k<I.__webglFramebuffer.length;k++)i.deleteFramebuffer(I.__webglFramebuffer[k]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let k=0;k<I.__webglColorRenderbuffer.length;k++)I.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[k]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let k=0,Z=x.length;k<Z;k++){let me=n.get(x[k]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(x[k])}n.remove(x),n.remove(M)}let K=0;function ae(){K=0}function P(){let M=K;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),K+=1,M}function F(M){let x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function W(M,x){let I=n.get(M);if(M.isVideoTexture&&je(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){let z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(I,M,x);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+x)}function $(M,x){let I=n.get(M);if(M.version>0&&I.__version!==M.version){de(I,M,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+x)}function X(M,x){let I=n.get(M);if(M.version>0&&I.__version!==M.version){de(I,M,x);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+x)}function q(M,x){let I=n.get(M);if(M.version>0&&I.__version!==M.version){_e(I,M,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+x)}let Q={[ea]:i.REPEAT,[Zt]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},te={[Tt]:i.NEAREST,[ao]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[jc]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},ue={[hh]:i.NEVER,[gh]:i.ALWAYS,[uh]:i.LESS,[kl]:i.LEQUAL,[dh]:i.EQUAL,[mh]:i.GEQUAL,[fh]:i.GREATER,[ph]:i.NOTEQUAL};function G(M,x,I){if(I?(i.texParameteri(M,i.TEXTURE_WRAP_S,Q[x.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,Q[x.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,Q[x.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,te[x.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,te[x.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Zt||x.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Tt&&x.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let z=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Tt||x.minFilter!==vr&&x.minFilter!==qi||x.type===Tn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Yi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(M,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function J(M,x){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",w));let z=x.source,k=f.get(z);k===void 0&&(k={},f.set(z,k));let Z=F(x);if(Z!==M.__cacheKey){k[Z]===void 0&&(k[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),k[Z].usedTimes++;let me=k[M.__cacheKey];me!==void 0&&(k[M.__cacheKey].usedTimes--,me.usedTimes===0&&b(x)),M.__cacheKey=Z,M.__webglTexture=k[Z].texture}return I}function de(M,x,I){let z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=i.TEXTURE_3D);let k=J(M,x),Z=x.source;t.bindTexture(z,M.__webglTexture,i.TEXTURE0+I);let me=n.get(Z);if(Z.version!==me.__version||k===!0){t.activeTexture(i.TEXTURE0+I);let ne=Ke.getPrimaries(Ke.workingColorSpace),he=x.colorSpace===kt?null:Ke.getPrimaries(x.colorSpace),ye=x.colorSpace===kt||ne===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Ie=u(x)&&p(x.image)===!1,ee=_(x.image,Ie,!1,s.maxTextureSize);ee=Ue(x,ee);let qe=p(ee)||a,E=r.convert(x.format,x.colorSpace),j=r.convert(x.type),le=T(x.internalFormat,E,j,x.colorSpace,x.isVideoTexture);G(z,x,qe);let ie,Me=x.mipmaps,He=a&&x.isVideoTexture!==!0&&le!==Ul,Ye=me.__version===void 0||k===!0,ke=C(x,ee,qe);if(x.isDepthTexture)le=i.DEPTH_COMPONENT,a?x.type===Tn?le=i.DEPTH_COMPONENT32F:x.type===wn?le=i.DEPTH_COMPONENT24:x.type===Hn?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:x.type===Tn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Gn&&le===i.DEPTH_COMPONENT&&x.type!==Ia&&x.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=wn,j=r.convert(x.type)),x.format===wi&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,x.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Hn,j=r.convert(x.type))),Ye&&(He?t.texStorage2D(i.TEXTURE_2D,1,le,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,le,ee.width,ee.height,0,E,j,null));else if(x.isDataTexture)if(Me.length>0&&qe){He&&Ye&&t.texStorage2D(i.TEXTURE_2D,ke,le,Me[0].width,Me[0].height);for(let oe=0,R=Me.length;oe<R;oe++)ie=Me[oe],He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ie.width,ie.height,E,j,ie.data):t.texImage2D(i.TEXTURE_2D,oe,le,ie.width,ie.height,0,E,j,ie.data);x.generateMipmaps=!1}else He?(Ye&&t.texStorage2D(i.TEXTURE_2D,ke,le,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,E,j,ee.data)):t.texImage2D(i.TEXTURE_2D,0,le,ee.width,ee.height,0,E,j,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){He&&Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,le,Me[0].width,Me[0].height,ee.depth);for(let oe=0,R=Me.length;oe<R;oe++)ie=Me[oe],x.format!==$t?E!==null?He?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ie.width,ie.height,ee.depth,E,ie.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,le,ie.width,ie.height,ee.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,ie.width,ie.height,ee.depth,E,j,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,le,ie.width,ie.height,ee.depth,0,E,j,ie.data)}else{He&&Ye&&t.texStorage2D(i.TEXTURE_2D,ke,le,Me[0].width,Me[0].height);for(let oe=0,R=Me.length;oe<R;oe++)ie=Me[oe],x.format!==$t?E!==null?He?t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,ie.width,ie.height,E,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,le,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ie.width,ie.height,E,j,ie.data):t.texImage2D(i.TEXTURE_2D,oe,le,ie.width,ie.height,0,E,j,ie.data)}else if(x.isDataArrayTexture)He?(Ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,le,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,E,j,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,ee.width,ee.height,ee.depth,0,E,j,ee.data);else if(x.isData3DTexture)He?(Ye&&t.texStorage3D(i.TEXTURE_3D,ke,le,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,E,j,ee.data)):t.texImage3D(i.TEXTURE_3D,0,le,ee.width,ee.height,ee.depth,0,E,j,ee.data);else if(x.isFramebufferTexture){if(Ye)if(He)t.texStorage2D(i.TEXTURE_2D,ke,le,ee.width,ee.height);else{let oe=ee.width,R=ee.height;for(let se=0;se<ke;se++)t.texImage2D(i.TEXTURE_2D,se,le,oe,R,0,E,j,null),oe>>=1,R>>=1}}else if(Me.length>0&&qe){He&&Ye&&t.texStorage2D(i.TEXTURE_2D,ke,le,Me[0].width,Me[0].height);for(let oe=0,R=Me.length;oe<R;oe++)ie=Me[oe],He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,E,j,ie):t.texImage2D(i.TEXTURE_2D,oe,le,E,j,ie);x.generateMipmaps=!1}else He?(Ye&&t.texStorage2D(i.TEXTURE_2D,ke,le,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,E,j,ee)):t.texImage2D(i.TEXTURE_2D,0,le,E,j,ee);S(x,qe)&&v(z),me.__version=Z.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function _e(M,x,I){if(x.image.length!==6)return;let z=J(M,x),k=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+I);let Z=n.get(k);if(k.version!==Z.__version||z===!0){t.activeTexture(i.TEXTURE0+I);let me=Ke.getPrimaries(Ke.workingColorSpace),ne=x.colorSpace===kt?null:Ke.getPrimaries(x.colorSpace),he=x.colorSpace===kt||me===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ye=x.isCompressedTexture||x.image[0].isCompressedTexture,Ie=x.image[0]&&x.image[0].isDataTexture,ee=[];for(let oe=0;oe<6;oe++)!ye&&!Ie?ee[oe]=_(x.image[oe],!1,!0,s.maxCubemapSize):ee[oe]=Ie?x.image[oe].image:x.image[oe],ee[oe]=Ue(x,ee[oe]);let qe=ee[0],E=p(qe)||a,j=r.convert(x.format,x.colorSpace),le=r.convert(x.type),ie=T(x.internalFormat,j,le,x.colorSpace),Me=a&&x.isVideoTexture!==!0,He=Z.__version===void 0||z===!0,Ye=C(x,qe,E);G(i.TEXTURE_CUBE_MAP,x,E);let ke;if(ye){Me&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,ie,qe.width,qe.height);for(let oe=0;oe<6;oe++){ke=ee[oe].mipmaps;for(let R=0;R<ke.length;R++){let se=ke[R];x.format!==$t?j!==null?Me?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,R,0,0,se.width,se.height,j,se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,R,ie,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,R,0,0,se.width,se.height,j,le,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,R,ie,se.width,se.height,0,j,le,se.data)}}}else{ke=x.mipmaps,Me&&He&&(ke.length>0&&Ye++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,ie,ee[0].width,ee[0].height));for(let oe=0;oe<6;oe++)if(Ie){Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ee[oe].width,ee[oe].height,j,le,ee[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ie,ee[oe].width,ee[oe].height,0,j,le,ee[oe].data);for(let R=0;R<ke.length;R++){let re=ke[R].image[oe].image;Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,R+1,0,0,re.width,re.height,j,le,re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,R+1,ie,re.width,re.height,0,j,le,re.data)}}else{Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,j,le,ee[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ie,j,le,ee[oe]);for(let R=0;R<ke.length;R++){let se=ke[R];Me?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,R+1,0,0,j,le,se.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,R+1,ie,j,le,se.image[oe])}}}S(x,E)&&v(i.TEXTURE_CUBE_MAP),Z.__version=k.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function fe(M,x,I,z,k,Z){let me=r.convert(I.format,I.colorSpace),ne=r.convert(I.type),he=T(I.internalFormat,me,ne,I.colorSpace);if(!n.get(x).__hasExternalTextures){let Ie=Math.max(1,x.width>>Z),ee=Math.max(1,x.height>>Z);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,Z,he,Ie,ee,x.depth,0,me,ne,null):t.texImage2D(k,Z,he,Ie,ee,0,me,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),xe(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,k,n.get(I).__webglTexture,0,Ce(x)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,k,n.get(I).__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(M,x,I){if(i.bindRenderbuffer(i.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let z=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||xe(x)){let k=x.depthTexture;k&&k.isDepthTexture&&(k.type===Tn?z=i.DEPTH_COMPONENT32F:k.type===wn&&(z=i.DEPTH_COMPONENT24));let Z=Ce(x);xe(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,z,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,z,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,z,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){let z=Ce(x);I&&xe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,z,i.DEPTH24_STENCIL8,x.width,x.height):xe(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let k=0;k<z.length;k++){let Z=z[k],me=r.convert(Z.format,Z.colorSpace),ne=r.convert(Z.type),he=T(Z.internalFormat,me,ne,Z.colorSpace),ye=Ce(x);I&&xe(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,he,x.width,x.height):xe(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);let z=n.get(x.depthTexture).__webglTexture,k=Ce(x);if(x.depthTexture.format===Gn)xe(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(x.depthTexture.format===wi)xe(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function we(M){let x=n.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Re(x.__webglFramebuffer,M)}else if(I){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]=i.createRenderbuffer(),Te(x.__webglDepthbuffer[z],M,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Te(x.__webglDepthbuffer,M,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(M,x,I){let z=n.get(M);x!==void 0&&fe(z.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&we(M)}function N(M){let x=M.texture,I=n.get(M),z=n.get(x);M.addEventListener("dispose",Y),M.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=x.version,o.memory.textures++);let k=M.isWebGLCubeRenderTarget===!0,Z=M.isWebGLMultipleRenderTargets===!0,me=p(M)||a;if(k){I.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(a&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ne]=[];for(let he=0;he<x.mipmaps.length;he++)I.__webglFramebuffer[ne][he]=i.createFramebuffer()}else I.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)I.__webglFramebuffer[ne]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Z)if(s.drawBuffers){let ne=M.texture;for(let he=0,ye=ne.length;he<ye;he++){let Ie=n.get(ne[he]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&xe(M)===!1){let ne=Z?x:[x];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){let ye=ne[he];I.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[he]);let Ie=r.convert(ye.format,ye.colorSpace),ee=r.convert(ye.type),qe=T(ye.internalFormat,Ie,ee,ye.colorSpace,M.isXRRenderTarget===!0),E=Ce(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,E,qe,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,I.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),G(i.TEXTURE_CUBE_MAP,x,me);for(let ne=0;ne<6;ne++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)fe(I.__webglFramebuffer[ne][he],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else fe(I.__webglFramebuffer[ne],M,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);S(x,me)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){let ne=M.texture;for(let he=0,ye=ne.length;he<ye;he++){let Ie=ne[he],ee=n.get(Ie);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),G(i.TEXTURE_2D,Ie,me),fe(I.__webglFramebuffer,M,Ie,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),S(Ie,me)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?ne=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,z.__webglTexture),G(ne,x,me),a&&x.mipmaps&&x.mipmaps.length>0)for(let he=0;he<x.mipmaps.length;he++)fe(I.__webglFramebuffer[he],M,x,i.COLOR_ATTACHMENT0,ne,he);else fe(I.__webglFramebuffer,M,x,i.COLOR_ATTACHMENT0,ne,0);S(x,me)&&v(ne),t.unbindTexture()}M.depthBuffer&&we(M)}function at(M){let x=p(M)||a,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let z=0,k=I.length;z<k;z++){let Z=I[z];if(S(Z,x)){let me=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ne=n.get(Z).__webglTexture;t.bindTexture(me,ne),v(me),t.unbindTexture()}}}function Ee(M){if(a&&M.samples>0&&xe(M)===!1){let x=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,z=M.height,k=i.COLOR_BUFFER_BIT,Z=[],me=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=n.get(M),he=M.isWebGLMultipleRenderTargets===!0;if(he)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){Z.push(i.COLOR_ATTACHMENT0+ye),M.depthBuffer&&Z.push(me);let Ie=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(Ie===!1&&(M.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),he&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ne.__webglColorRenderbuffer[ye]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[me]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[me])),he){let ee=n.get(x[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,I,z,0,0,I,z,k,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ne.__webglColorRenderbuffer[ye]);let Ie=n.get(x[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Ce(M){return Math.min(s.maxSamples,M.samples)}function xe(M){let x=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function je(M){let x=o.render.frame;h.get(M)!==x&&(h.set(M,x),M.update())}function Ue(M,x){let I=M.colorSpace,z=M.format,k=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===na||I!==_n&&I!==kt&&(Ke.getTransfer(I)===nt?a===!1?e.has("EXT_sRGB")===!0&&z===$t?(M.format=na,M.minFilter=zt,M.generateMipmaps=!1):x=Vs.sRGBToLinear(x):(z!==$t||k!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}this.allocateTextureUnit=P,this.resetTextureUnits=ae,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=Xe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=xe}function ym(i,e,t){let n=t.isWebGL2;function s(r,o=kt){let a,l=Ke.getTransfer(o);if(r===Cn)return i.UNSIGNED_BYTE;if(r===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Qc)return i.BYTE;if(r===eh)return i.SHORT;if(r===Ia)return i.UNSIGNED_SHORT;if(r===Al)return i.INT;if(r===wn)return i.UNSIGNED_INT;if(r===Tn)return i.FLOAT;if(r===Yi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===th)return i.ALPHA;if(r===$t)return i.RGBA;if(r===nh)return i.LUMINANCE;if(r===ih)return i.LUMINANCE_ALPHA;if(r===Gn)return i.DEPTH_COMPONENT;if(r===wi)return i.DEPTH_STENCIL;if(r===na)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===sh)return i.RED;if(r===Pl)return i.RED_INTEGER;if(r===rh)return i.RG;if(r===Il)return i.RG_INTEGER;if(r===Dl)return i.RGBA_INTEGER;if(r===yr||r===Lr||r===Mr||r===Sr)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Lr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===oo||r===lo||r===co||r===ho)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ho)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ul)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===uo||r===fo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===uo)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===po||r===mo||r===go||r===_o||r===xo||r===vo||r===yo||r===Lo||r===Mo||r===So||r===bo||r===Eo||r===wo||r===To)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===po)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===go)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_o)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===So)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Eo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wo)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===To)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===br||r===Ao||r===Ro)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===br)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ro)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ah||r===Co||r===Po||r===Io)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===br)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Po)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Io)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Hn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var ga=class extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gn=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lm={type:"move"},Xi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_a=class extends nn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,_=t.getContextAttributes(),p=null,u=null,S=[],v=[],T=new Ne,C=null,A=new Mt;A.layers.enable(1),A.viewport=new et;let w=new Mt;w.layers.enable(2),w.viewport=new et;let Y=[A,w],L=new ga;L.layers.enable(1),L.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=S[G];return J===void 0&&(J=new Xi,S[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=S[G];return J===void 0&&(J=new Xi,S[G]=J),J.getGripSpace()},this.getHand=function(G){let J=S[G];return J===void 0&&(J=new Xi,S[G]=J),J.getHandSpace()};function K(G){let J=v.indexOf(G.inputSource);if(J===-1)return;let de=S[J];de!==void 0&&(de.update(G.inputSource,G.frame,c||o),de.dispatchEvent({type:G.type,data:G.inputSource}))}function ae(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",P);for(let G=0;G<S.length;G++){let J=v[G];J!==null&&(v[G]=null,S[G].disconnect(J))}b=null,V=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new xn(m.framebufferWidth,m.framebufferHeight,{format:$t,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,de=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?wi:Gn,de=_.stencil?Hn:wn);let fe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new xn(f.textureWidth,f.textureHeight,{format:$t,type:Cn,depthTexture:new Ks(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Te=e.properties.get(u);Te.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(G){for(let J=0;J<G.removed.length;J++){let de=G.removed[J],_e=v.indexOf(de);_e>=0&&(v[_e]=null,S[_e].disconnect(de))}for(let J=0;J<G.added.length;J++){let de=G.added[J],_e=v.indexOf(de);if(_e===-1){for(let Te=0;Te<S.length;Te++)if(Te>=v.length){v.push(de),_e=Te;break}else if(v[Te]===null){v[Te]=de,_e=Te;break}if(_e===-1)break}let fe=S[_e];fe&&fe.connect(de)}}let F=new D,W=new D;function $(G,J,de){F.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(de.matrixWorld);let _e=F.distanceTo(W),fe=J.projectionMatrix.elements,Te=de.projectionMatrix.elements,Re=fe[14]/(fe[10]-1),we=fe[14]/(fe[10]+1),Xe=(fe[9]+1)/fe[5],N=(fe[9]-1)/fe[5],at=(fe[8]-1)/fe[0],Ee=(Te[8]+1)/Te[0],Ce=Re*at,xe=Re*Ee,je=_e/(-at+Ee),Ue=je*-at;J.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ue),G.translateZ(je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let M=Re+je,x=we+je,I=Ce-Ue,z=xe+(_e-Ue),k=Xe*we/x*M,Z=N*we/x*M;G.projectionMatrix.makePerspective(I,z,k,Z,M,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function X(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;L.near=w.near=A.near=G.near,L.far=w.far=A.far=G.far,(b!==L.near||V!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),b=L.near,V=L.far);let J=G.parent,de=L.cameras;X(L,J);for(let _e=0;_e<de.length;_e++)X(de[_e],J);de.length===2?$(L,A,w):L.projectionMatrix.copy(A.projectionMatrix),q(G,L,J)};function q(G,J,de){de===null?G.matrix.copy(J.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(J.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(J.projectionMatrix),G.projectionMatrixInverse.copy(J.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Zi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let Q=null;function te(G,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let de=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;de.length!==L.cameras.length&&(L.cameras.length=0,_e=!0);for(let fe=0;fe<de.length;fe++){let Te=de[fe],Re=null;if(m!==null)Re=m.getViewport(Te);else{let Xe=d.getViewSubImage(f,Te);Re=Xe.viewport,fe===0&&(e.setRenderTargetTextures(u,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(u))}let we=Y[fe];we===void 0&&(we=new Mt,we.layers.enable(fe),we.viewport=new et,Y[fe]=we),we.matrix.fromArray(Te.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Te.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Re.x,Re.y,Re.width,Re.height),fe===0&&(L.matrix.copy(we.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),_e===!0&&L.cameras.push(we)}}for(let de=0;de<S.length;de++){let _e=v[de],fe=S[de];_e!==null&&fe!==void 0&&fe.update(_e,J,c||o)}Q&&Q(G,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let ue=new Xl;ue.setAnimationLoop(te),this.setAnimationLoop=function(G){Q=G},this.dispose=function(){}}};function Mm(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Wl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,S,v,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,S,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===_t&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===_t&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let S=e.get(u).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,S,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=v*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_t&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let S=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sm(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,v){let T=v.program;n.uniformBlockBinding(S,T)}function c(S,v){let T=s[S.id];T===void 0&&(g(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",p));let C=v.program;n.updateUBOMapping(S,C);let A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){let v=d();S.__bindingPointIndex=v;let T=i.createBuffer(),C=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,T),T}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let v=s[S.id],T=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,w=T.length;A<w;A++){let Y=Array.isArray(T[A])?T[A]:[T[A]];for(let L=0,b=Y.length;L<b;L++){let V=Y[L];if(m(V,A,L,C)===!0){let K=V.__offset,ae=Array.isArray(V.value)?V.value:[V.value],P=0;for(let F=0;F<ae.length;F++){let W=ae[F],$=_(W);typeof W=="number"||typeof W=="boolean"?(V.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,K+P,V.__data)):W.isMatrix3?(V.__data[0]=W.elements[0],V.__data[1]=W.elements[1],V.__data[2]=W.elements[2],V.__data[3]=0,V.__data[4]=W.elements[3],V.__data[5]=W.elements[4],V.__data[6]=W.elements[5],V.__data[7]=0,V.__data[8]=W.elements[6],V.__data[9]=W.elements[7],V.__data[10]=W.elements[8],V.__data[11]=0):(W.toArray(V.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,K,V.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,v,T,C){let A=S.value,w=v+"_"+T;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{let Y=C[w];if(typeof A=="number"||typeof A=="boolean"){if(Y!==A)return C[w]=A,!0}else if(Y.equals(A)===!1)return Y.copy(A),!0}return!1}function g(S){let v=S.uniforms,T=0,C=16;for(let w=0,Y=v.length;w<Y;w++){let L=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,V=L.length;b<V;b++){let K=L[b],ae=Array.isArray(K.value)?K.value:[K.value];for(let P=0,F=ae.length;P<F;P++){let W=ae[P],$=_(W),X=T%C;X!==0&&C-X<$.boundary&&(T+=C-X),K.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=T,T+=$.storage}}}let A=T%C;return A>0&&(T+=C-A),S.__size=T,S.__cache={},this}function _(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){let v=S.target;v.removeEventListener("dispose",p);let T=o.indexOf(v.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Qi=class{constructor(e={}){let{canvas:t=Ph(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,u=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=Rn,this.toneMappingExposure=1;let v=this,T=!1,C=0,A=0,w=null,Y=-1,L=null,b=new et,V=new et,K=null,ae=new ze(0),P=0,F=t.width,W=t.height,$=1,X=null,q=null,Q=new et(0,0,F,W),te=new et(0,0,F,W),ue=!1,G=new Ki,J=!1,de=!1,_e=null,fe=new ht,Te=new Ne,Re=new D,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return w===null?$:1}let N=n;function at(y,U){for(let B=0;B<y.length;B++){let H=y[B],O=t.getContext(H,U);if(O!==null)return O}return null}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pa}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){let U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),N=at(U,y),N===null)throw at(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ee,Ce,xe,je,Ue,M,x,I,z,k,Z,me,ne,he,ye,Ie,ee,qe,E,j,le,ie,Me,He;function Ye(){Ee=new Hf(N),Ce=new Ff(N,Ee,e),Ee.init(Ce),ie=new ym(N,Ee,Ce),xe=new xm(N,Ee,Ce),je=new Xf(N),Ue=new am,M=new vm(N,Ee,xe,Ue,Ce,ie,je),x=new Bf(v),I=new Vf(v),z=new jh(N,Ce),Me=new Uf(N,Ee,z,Ce),k=new Gf(N,z,je,Me),Z=new $f(N,k,z,je),E=new Zf(N,Ce,M),Ie=new Of(Ue),me=new rm(v,x,I,Ee,Ce,Me,Ie),ne=new Mm(v,Ue),he=new lm,ye=new pm(Ee,Ce),qe=new Df(v,x,I,xe,Z,f,l),ee=new _m(v,Z,Ce),He=new Sm(N,je,Ce,xe),j=new Nf(N,Ee,je,Ce),le=new Wf(N,Ee,je,Ce),je.programs=me.programs,v.capabilities=Ce,v.extensions=Ee,v.properties=Ue,v.renderLists=he,v.shadowMap=ee,v.state=xe,v.info=je}Ye();let ke=new _a(v,N);this.xr=ke,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let y=Ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(F,W,!1))},this.getSize=function(y){return y.set(F,W)},this.setSize=function(y,U,B=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=y,W=U,t.width=Math.floor(y*$),t.height=Math.floor(U*$),B===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(F*$,W*$).floor()},this.setDrawingBufferSize=function(y,U,B){F=y,W=U,$=B,t.width=Math.floor(y*B),t.height=Math.floor(U*B),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(Q)},this.setViewport=function(y,U,B,H){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,U,B,H),xe.viewport(b.copy(Q).multiplyScalar($).floor())},this.getScissor=function(y){return y.copy(te)},this.setScissor=function(y,U,B,H){y.isVector4?te.set(y.x,y.y,y.z,y.w):te.set(y,U,B,H),xe.scissor(V.copy(te).multiplyScalar($).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(y){xe.setScissorTest(ue=y)},this.setOpaqueSort=function(y){X=y},this.setTransparentSort=function(y){q=y},this.getClearColor=function(y){return y.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(y=!0,U=!0,B=!0){let H=0;if(y){let O=!1;if(w!==null){let ge=w.texture.format;O=ge===Dl||ge===Il||ge===Pl}if(O){let ge=w.texture.type,be=ge===Cn||ge===wn||ge===Ia||ge===Hn||ge===Rl||ge===Cl,Pe=qe.getClearColor(),De=qe.getClearAlpha(),Ve=Pe.r,Fe=Pe.g,Oe=Pe.b;be?(m[0]=Ve,m[1]=Fe,m[2]=Oe,m[3]=De,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=Ve,g[1]=Fe,g[2]=Oe,g[3]=De,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT),B&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",se,!1),he.dispose(),ye.dispose(),Ue.dispose(),x.dispose(),I.dispose(),Z.dispose(),Me.dispose(),He.dispose(),me.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",St),ke.removeEventListener("sessionend",Qe),_e&&(_e.dispose(),_e=null),bt.stop()};function oe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let y=je.autoReset,U=ee.enabled,B=ee.autoUpdate,H=ee.needsUpdate,O=ee.type;Ye(),je.autoReset=y,ee.enabled=U,ee.autoUpdate=B,ee.needsUpdate=H,ee.type=O}function se(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function re(y){let U=y.target;U.removeEventListener("dispose",re),Ae(U)}function Ae(y){Se(y),Ue.remove(y)}function Se(y){let U=Ue.get(y).programs;U!==void 0&&(U.forEach(function(B){me.releaseProgram(B)}),y.isShaderMaterial&&me.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,B,H,O,ge){U===null&&(U=we);let be=O.isMesh&&O.matrixWorld.determinant()<0,Pe=pc(y,U,B,H,O);xe.setMaterial(H,be);let De=B.index,Ve=1;if(H.wireframe===!0){if(De=k.getWireframeAttribute(B),De===void 0)return;Ve=2}let Fe=B.drawRange,Oe=B.attributes.position,ot=Fe.start*Ve,Dt=(Fe.start+Fe.count)*Ve;ge!==null&&(ot=Math.max(ot,ge.start*Ve),Dt=Math.min(Dt,(ge.start+ge.count)*Ve)),De!==null?(ot=Math.max(ot,0),Dt=Math.min(Dt,De.count)):Oe!=null&&(ot=Math.max(ot,0),Dt=Math.min(Dt,Oe.count));let mt=Dt-ot;if(mt<0||mt===1/0)return;Me.setup(O,H,Pe,B,De);let ln,st=j;if(De!==null&&(ln=z.get(De),st=le,st.setIndex(ln)),O.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*Xe()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(O.isLine){let Ge=H.linewidth;Ge===void 0&&(Ge=1),xe.setLineWidth(Ge*Xe()),O.isLineSegments?st.setMode(N.LINES):O.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else O.isPoints?st.setMode(N.POINTS):O.isSprite&&st.setMode(N.TRIANGLES);if(O.isBatchedMesh)st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)st.renderInstances(ot,mt,O.count);else if(B.isInstancedBufferGeometry){let Ge=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,mr=Math.min(B.instanceCount,Ge);st.renderInstances(ot,mt,mr)}else st.render(ot,mt)};function $e(y,U,B){y.transparent===!0&&y.side===Yt&&y.forceSinglePass===!1?(y.side=_t,y.needsUpdate=!0,os(y,U,B),y.side=tn,y.needsUpdate=!0,os(y,U,B),y.side=Yt):os(y,U,B)}this.compile=function(y,U,B=null){B===null&&(B=y),p=ye.get(B),p.init(),S.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),y!==B&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(v._useLegacyLights);let H=new Set;return y.traverse(function(O){let ge=O.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let Pe=ge[be];$e(Pe,B,O),H.add(Pe)}else $e(ge,B,O),H.add(ge)}),S.pop(),p=null,H},this.compileAsync=function(y,U,B=null){let H=this.compile(y,U,B);return new Promise(O=>{function ge(){if(H.forEach(function(be){Ue.get(be).currentProgram.isReady()&&H.delete(be)}),H.size===0){O(y);return}setTimeout(ge,10)}Ee.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Je=null;function pt(y){Je&&Je(y)}function St(){bt.stop()}function Qe(){bt.start()}let bt=new Xl;bt.setAnimationLoop(pt),typeof self!="undefined"&&bt.setContext(self),this.setAnimationLoop=function(y){Je=y,ke.setAnimationLoop(y),y===null?bt.stop():bt.start()},ke.addEventListener("sessionstart",St),ke.addEventListener("sessionend",Qe),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(U),U=ke.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,U,w),p=ye.get(y,S.length),p.init(),S.push(p),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G.setFromProjectionMatrix(fe),de=this.localClippingEnabled,J=Ie.init(this.clippingPlanes,de),_=he.get(y,u.length),_.init(),u.push(_),Qt(y,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,q),this.info.render.frame++,J===!0&&Ie.beginShadows();let B=p.state.shadowsArray;if(ee.render(B,y,U),J===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(_,y),p.setupLights(v._useLegacyLights),U.isArrayCamera){let H=U.cameras;for(let O=0,ge=H.length;O<ge;O++){let be=H[O];Za(_,y,be,be.viewport)}}else Za(_,y,U);w!==null&&(M.updateMultisampleRenderTarget(w),M.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(v,y,U),Me.resetDefaultState(),Y=-1,L=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Qt(y,U,B,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)B=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||G.intersectsSprite(y)){H&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(fe);let be=Z.update(y),Pe=y.material;Pe.visible&&_.push(y,be,Pe,B,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||G.intersectsObject(y))){let be=Z.update(y),Pe=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Re.copy(be.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(fe)),Array.isArray(Pe)){let De=be.groups;for(let Ve=0,Fe=De.length;Ve<Fe;Ve++){let Oe=De[Ve],ot=Pe[Oe.materialIndex];ot&&ot.visible&&_.push(y,be,ot,B,Re.z,Oe)}}else Pe.visible&&_.push(y,be,Pe,B,Re.z,null)}}let ge=y.children;for(let be=0,Pe=ge.length;be<Pe;be++)Qt(ge[be],U,B,H)}function Za(y,U,B,H){let O=y.opaque,ge=y.transmissive,be=y.transparent;p.setupLightsView(B),J===!0&&Ie.setGlobalState(v.clippingPlanes,B),ge.length>0&&fc(O,ge,U,B),H&&xe.viewport(b.copy(H)),O.length>0&&as(O,U,B),ge.length>0&&as(ge,U,B),be.length>0&&as(be,U,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function fc(y,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let ge=Ce.isWebGL2;_e===null&&(_e=new xn(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Yi:Cn,minFilter:qi,samples:ge?4:0})),v.getDrawingBufferSize(Te),ge?_e.setSize(Te.x,Te.y):_e.setSize(zs(Te.x),zs(Te.y));let be=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(ae),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Pe=v.toneMapping;v.toneMapping=Rn,as(y,B,H),M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e);let De=!1;for(let Ve=0,Fe=U.length;Ve<Fe;Ve++){let Oe=U[Ve],ot=Oe.object,Dt=Oe.geometry,mt=Oe.material,ln=Oe.group;if(mt.side===Yt&&ot.layers.test(H.layers)){let st=mt.side;mt.side=_t,mt.needsUpdate=!0,$a(ot,B,H,Dt,mt,ln),mt.side=st,mt.needsUpdate=!0,De=!0}}De===!0&&(M.updateMultisampleRenderTarget(_e),M.updateRenderTargetMipmap(_e)),v.setRenderTarget(be),v.setClearColor(ae,P),v.toneMapping=Pe}function as(y,U,B){let H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ge=y.length;O<ge;O++){let be=y[O],Pe=be.object,De=be.geometry,Ve=H===null?be.material:H,Fe=be.group;Pe.layers.test(B.layers)&&$a(Pe,U,B,De,Ve,Fe)}}function $a(y,U,B,H,O,ge){y.onBeforeRender(v,U,B,H,O,ge),y.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(v,U,B,H,y,ge),O.transparent===!0&&O.side===Yt&&O.forceSinglePass===!1?(O.side=_t,O.needsUpdate=!0,v.renderBufferDirect(B,U,H,O,y,ge),O.side=tn,O.needsUpdate=!0,v.renderBufferDirect(B,U,H,O,y,ge),O.side=Yt):v.renderBufferDirect(B,U,H,O,y,ge),y.onAfterRender(v,U,B,H,O,ge)}function os(y,U,B){U.isScene!==!0&&(U=we);let H=Ue.get(y),O=p.state.lights,ge=p.state.shadowsArray,be=O.state.version,Pe=me.getParameters(y,O.state,ge,U,B),De=me.getProgramCacheKey(Pe),Ve=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?I:x).get(y.envMap||H.environment),Ve===void 0&&(y.addEventListener("dispose",re),Ve=new Map,H.programs=Ve);let Fe=Ve.get(De);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===be)return Ka(y,Pe),Fe}else Pe.uniforms=me.getUniforms(y),y.onBuild(B,Pe,v),y.onBeforeCompile(Pe,v),Fe=me.acquireProgram(Pe,De),Ve.set(De,Fe),H.uniforms=Pe.uniforms;let Oe=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=Ie.uniform),Ka(y,Pe),H.needsLights=gc(y),H.lightsStateVersion=be,H.needsLights&&(Oe.ambientLightColor.value=O.state.ambient,Oe.lightProbe.value=O.state.probe,Oe.directionalLights.value=O.state.directional,Oe.directionalLightShadows.value=O.state.directionalShadow,Oe.spotLights.value=O.state.spot,Oe.spotLightShadows.value=O.state.spotShadow,Oe.rectAreaLights.value=O.state.rectArea,Oe.ltc_1.value=O.state.rectAreaLTC1,Oe.ltc_2.value=O.state.rectAreaLTC2,Oe.pointLights.value=O.state.point,Oe.pointLightShadows.value=O.state.pointShadow,Oe.hemisphereLights.value=O.state.hemi,Oe.directionalShadowMap.value=O.state.directionalShadowMap,Oe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Oe.spotShadowMap.value=O.state.spotShadowMap,Oe.spotLightMatrix.value=O.state.spotLightMatrix,Oe.spotLightMap.value=O.state.spotLightMap,Oe.pointShadowMap.value=O.state.pointShadowMap,Oe.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Fe,H.uniformsList=null,Fe}function Ja(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Si.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Ka(y,U){let B=Ue.get(y);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function pc(y,U,B,H,O){U.isScene!==!0&&(U=we),M.resetTextureUnits();let ge=U.fog,be=H.isMeshStandardMaterial?U.environment:null,Pe=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:_n,De=(H.isMeshStandardMaterial?I:x).get(H.envMap||be),Ve=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Oe=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,Dt=!!B.morphAttributes.color,mt=Rn;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=v.toneMapping);let ln=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=ln!==void 0?ln.length:0,Ge=Ue.get(H),mr=p.state.lights;if(J===!0&&(de===!0||y!==L)){let Ot=y===L&&H.id===Y;Ie.setState(H,y,Ot)}let rt=!1;H.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==mr.state.version||Ge.outputColorSpace!==Pe||O.isBatchedMesh&&Ge.batching===!1||!O.isBatchedMesh&&Ge.batching===!0||O.isInstancedMesh&&Ge.instancing===!1||!O.isInstancedMesh&&Ge.instancing===!0||O.isSkinnedMesh&&Ge.skinning===!1||!O.isSkinnedMesh&&Ge.skinning===!0||O.isInstancedMesh&&Ge.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ge.instancingColor===!1&&O.instanceColor!==null||Ge.envMap!==De||H.fog===!0&&Ge.fog!==ge||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ie.numPlanes||Ge.numIntersection!==Ie.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==Fe||Ge.morphTargets!==Oe||Ge.morphNormals!==ot||Ge.morphColors!==Dt||Ge.toneMapping!==mt||Ce.isWebGL2===!0&&Ge.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Ge.__version=H.version);let Dn=Ge.currentProgram;rt===!0&&(Dn=os(H,U,O));let ja=!1,Fi=!1,gr=!1,xt=Dn.getUniforms(),Un=Ge.uniforms;if(xe.useProgram(Dn.program)&&(ja=!0,Fi=!0,gr=!0),H.id!==Y&&(Y=H.id,Fi=!0),ja||L!==y){xt.setValue(N,"projectionMatrix",y.projectionMatrix),xt.setValue(N,"viewMatrix",y.matrixWorldInverse);let Ot=xt.map.cameraPosition;Ot!==void 0&&Ot.setValue(N,Re.setFromMatrixPosition(y.matrixWorld)),Ce.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(N,"isOrthographic",y.isOrthographicCamera===!0),L!==y&&(L=y,Fi=!0,gr=!0)}if(O.isSkinnedMesh){xt.setOptional(N,O,"bindMatrix"),xt.setOptional(N,O,"bindMatrixInverse");let Ot=O.skeleton;Ot&&(Ce.floatVertexTextures?(Ot.boneTexture===null&&Ot.computeBoneTexture(),xt.setValue(N,"boneTexture",Ot.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(xt.setOptional(N,O,"batchingTexture"),xt.setValue(N,"batchingTexture",O._matricesTexture,M));let _r=B.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0&&Ce.isWebGL2===!0)&&E.update(O,B,Dn),(Fi||Ge.receiveShadow!==O.receiveShadow)&&(Ge.receiveShadow=O.receiveShadow,xt.setValue(N,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Un.envMap.value=De,Un.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Fi&&(xt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&mc(Un,gr),ge&&H.fog===!0&&ne.refreshFogUniforms(Un,ge),ne.refreshMaterialUniforms(Un,H,$,W,_e),Si.upload(N,Ja(Ge),Un,M)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Si.upload(N,Ja(Ge),Un,M),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(N,"center",O.center),xt.setValue(N,"modelViewMatrix",O.modelViewMatrix),xt.setValue(N,"normalMatrix",O.normalMatrix),xt.setValue(N,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Ot=H.uniformsGroups;for(let xr=0,_c=Ot.length;xr<_c;xr++)if(Ce.isWebGL2){let Qa=Ot[xr];He.update(Qa,Dn),He.bind(Qa,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function mc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function gc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,U,B){Ue.get(y.texture).__webglTexture=U,Ue.get(y.depthTexture).__webglTexture=B;let H=Ue.get(y);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){let B=Ue.get(y);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,B=0){w=y,C=U,A=B;let H=!0,O=null,ge=!1,be=!1;if(y){let De=Ue.get(y);De.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):De.__webglFramebuffer===void 0?M.setupRenderTarget(y):De.__hasExternalTextures&&M.rebindTextures(y,Ue.get(y.texture).__webglTexture,Ue.get(y.depthTexture).__webglTexture);let Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);let Fe=Ue.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?O=Fe[U][B]:O=Fe[U],ge=!0):Ce.isWebGL2&&y.samples>0&&M.useMultisampledRTT(y)===!1?O=Ue.get(y).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[B]:O=Fe,b.copy(y.viewport),V.copy(y.scissor),K=y.scissorTest}else b.copy(Q).multiplyScalar($).floor(),V.copy(te).multiplyScalar($).floor(),K=ue;if(xe.bindFramebuffer(N.FRAMEBUFFER,O)&&Ce.drawBuffers&&H&&xe.drawBuffers(y,O),xe.viewport(b),xe.scissor(V),xe.setScissorTest(K),ge){let De=Ue.get(y.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,De.__webglTexture,B)}else if(be){let De=Ue.get(y.texture),Ve=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,B||0,Ve)}Y=-1},this.readRenderTargetPixels=function(y,U,B,H,O,ge,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ue.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){xe.bindFramebuffer(N.FRAMEBUFFER,Pe);try{let De=y.texture,Ve=De.format,Fe=De.type;if(Ve!==$t&&ie.convert(Ve)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Fe===Yi&&(Ee.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Fe!==Cn&&ie.convert(Fe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Tn&&(Ce.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&B>=0&&B<=y.height-O&&N.readPixels(U,B,H,O,ie.convert(Ve),ie.convert(Fe),ge)}finally{let De=w!==null?Ue.get(w).__webglFramebuffer:null;xe.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(y,U,B=0){let H=Math.pow(2,-B),O=Math.floor(U.image.width*H),ge=Math.floor(U.image.height*H);M.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,y.x,y.y,O,ge),xe.unbindTexture()},this.copyTextureToTexture=function(y,U,B,H=0){let O=U.image.width,ge=U.image.height,be=ie.convert(B.format),Pe=ie.convert(B.type);M.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,y.x,y.y,O,ge,be,Pe,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,be,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,y.x,y.y,be,Pe,U.image),H===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(y,U,B,H,O=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ge=y.max.x-y.min.x+1,be=y.max.y-y.min.y+1,Pe=y.max.z-y.min.z+1,De=ie.convert(H.format),Ve=ie.convert(H.type),Fe;if(H.isData3DTexture)M.setTexture3D(H,0),Fe=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)M.setTexture2DArray(H,0),Fe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let Oe=N.getParameter(N.UNPACK_ROW_LENGTH),ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Dt=N.getParameter(N.UNPACK_SKIP_PIXELS),mt=N.getParameter(N.UNPACK_SKIP_ROWS),ln=N.getParameter(N.UNPACK_SKIP_IMAGES),st=B.isCompressedTexture?B.mipmaps[O]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,st.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,st.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,y.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,y.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,y.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Fe,O,U.x,U.y,U.z,ge,be,Pe,De,Ve,st.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Fe,O,U.x,U.y,U.z,ge,be,Pe,De,st.data)):N.texSubImage3D(Fe,O,U.x,U.y,U.z,ge,be,Pe,De,Ve,st),N.pixelStorei(N.UNPACK_ROW_LENGTH,Oe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),N.pixelStorei(N.UNPACK_SKIP_ROWS,mt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ln),O===0&&H.generateMipmaps&&N.generateMipmap(Fe),xe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),xe.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,xe.reset(),Me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Da?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===sr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?Wn:Nl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Wn?ct:_n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},xa=class extends Qi{};xa.prototype.isWebGL1Renderer=!0;var Ri=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var js=class i extends Vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new D,f=new D,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){let S=[],v=u/n,T=0;u===0&&o===0?T=.5/t:u===n&&l===Math.PI&&(T=-.5/t);for(let C=0;C<=t;C++){let A=C/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+T,1-v),S.push(c++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){let v=h[u][S+1],T=h[u][S],C=h[u+1][S],A=h[u+1][S+1];(u!==0||o>0)&&m.push(v,T,A),(u!==n-1||l<Math.PI)&&m.push(T,C,A)}this.setIndex(m),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zn=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Cs(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},va=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Do,endingEnd:Do}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uo:r=e,a=2*t-n;break;case No:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uo:o=e,l=2*n-t;break;case No:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,u=-f*p+2*f*_-f*g,S=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-m)*p+(1.5+m)*_+.5*g,T=m*p-m*_;for(let C=0;C!==a;++C)r[C]=u*o[h+C]+S*o[c+C]+v*o[l+C]+T*o[d+C];return r}},ya=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},La=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cs(t,this.TimeBufferType),this.values=Cs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cs(e.times,Array),values:Cs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new va(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case Er:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return Er}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&bm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Er,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[f+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Ds;var $n=class extends jt{};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Is;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends jt{};Ma.prototype.ValueTypeName="color";var Sa=class extends jt{};Sa.prototype.ValueTypeName="number";var ba=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Kt.slerpFlat(r,0,o,c-a,o,c,l);return r}},es=class extends jt{InterpolantFactoryMethodLinear(e){return new ba(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=Ds;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends jt{};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Is;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends jt{};Ea.prototype.ValueTypeName="vector";var wa=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Em=new wa,Ta=class{constructor(e){this.manager=e!==void 0?e:Em,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Qs=class extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zr=new ht,Ml=new D,Sl=new D,er=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),Zr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bl=new ht,Vi=new D,$r=new D,Aa=class extends er{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vi),$r.copy(n.position),$r.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($r),n.updateMatrixWorld(),s.makeTranslation(-Vi.x,-Vi.y,-Vi.z),bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl)}},tr=class extends ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Aa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ra=class extends er{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nr=class extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Ra}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fa="\\[\\]\\.:\\/",wm=new RegExp("["+Fa+"]","g"),Oa="[^"+Fa+"]",Tm="[^"+Fa.replace("\\.","")+"]",Am=/((?:WC+[\/:])*)/.source.replace("WC",Oa),Rm=/(WCOD+)?/.source.replace("WCOD",Tm),Cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oa),Pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oa),Im=new RegExp("^"+Am+Rm+Cm+Pm+"$"),Dm=["material","materials","bones","map"],Ca=class{constructor(e,t,n){let s=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},it=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wm,"")}static parseTrackName(e){let t=Im.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=Ca;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zm=new Float32Array(1);var sn=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);var Kl={type:"change"},Ba={type:"start"},jl={type:"end"},or=new Ji,Ql=new Pt,Nm=Math.cos(70*Vl.DEG2RAD),lr=class extends nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:rn.ROTATE,TWO:rn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Z),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Z),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kl),n.update(),r=s.NONE},this.update=function(){let E=new D,j=new Kt().setFromUnitVectors(e.up,new D(0,1,0)),le=j.clone().invert(),ie=new D,Me=new Kt,He=new D,Ye=2*Math.PI;return function(oe=null){let R=n.object.position;E.copy(R).sub(n.target),E.applyQuaternion(j),a.setFromVector3(E),n.autoRotate&&r===s.NONE&&V(L(oe)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let se=n.minAzimuthAngle,re=n.maxAzimuthAngle;isFinite(se)&&isFinite(re)&&(se<-Math.PI?se+=Ye:se>Math.PI&&(se-=Ye),re<-Math.PI?re+=Ye:re>Math.PI&&(re-=Ye),se<=re?a.theta=Math.max(se,Math.min(re,a.theta)):a.theta=a.theta>(se+re)/2?Math.max(se,a.theta):Math.min(re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&A||n.object.isOrthographicCamera?a.radius=q(a.radius):a.radius=q(a.radius*c),E.setFromSpherical(a),E.applyQuaternion(le),R.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ae=!1;if(n.zoomToCursor&&A){let Se=null;if(n.object.isPerspectiveCamera){let $e=E.length();Se=q($e*c);let Je=$e-Se;n.object.position.addScaledVector(T,Je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let $e=new D(C.x,C.y,0);$e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ae=!0;let Je=new D(C.x,C.y,0);Je.unproject(n.object),n.object.position.sub(Je).add($e),n.object.updateMatrixWorld(),Se=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Se!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Se).add(n.object.position):(or.origin.copy(n.object.position),or.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(or.direction))<Nm?e.lookAt(n.target):(Ql.setFromNormalAndCoplanarPoint(n.object.up,n.target),or.intersectPlane(Ql,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ae=!0);return c=1,A=!1,Ae||ie.distanceToSquared(n.object.position)>o||8*(1-Me.dot(n.object.quaternion))>o||He.distanceToSquared(n.target)>0?(n.dispatchEvent(Kl),ie.copy(n.object.position),Me.copy(n.object.quaternion),He.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",he),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",x),n.domElement.removeEventListener("wheel",k),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",x),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Z),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new sn,l=new sn,c=1,h=new D,d=new Ne,f=new Ne,m=new Ne,g=new Ne,_=new Ne,p=new Ne,u=new Ne,S=new Ne,v=new Ne,T=new D,C=new Ne,A=!1,w=[],Y={};function L(E){return E!==null?2*Math.PI/60*n.autoRotateSpeed*E:2*Math.PI/60/60*n.autoRotateSpeed}function b(E){let j=Math.abs(E)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*j)}function V(E){l.theta-=E}function K(E){l.phi-=E}let ae=function(){let E=new D;return function(le,ie){E.setFromMatrixColumn(ie,0),E.multiplyScalar(-le),h.add(E)}}(),P=function(){let E=new D;return function(le,ie){n.screenSpacePanning===!0?E.setFromMatrixColumn(ie,1):(E.setFromMatrixColumn(ie,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(le),h.add(E)}}(),F=function(){let E=new D;return function(le,ie){let Me=n.domElement;if(n.object.isPerspectiveCamera){let He=n.object.position;E.copy(He).sub(n.target);let Ye=E.length();Ye*=Math.tan(n.object.fov/2*Math.PI/180),ae(2*le*Ye/Me.clientHeight,n.object.matrix),P(2*ie*Ye/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ae(le*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),P(ie*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function W(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(E){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(E,j){if(!n.zoomToCursor)return;A=!0;let le=n.domElement.getBoundingClientRect(),ie=E-le.left,Me=j-le.top,He=le.width,Ye=le.height;C.x=ie/He*2-1,C.y=-(Me/Ye)*2+1,T.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function q(E){return Math.max(n.minDistance,Math.min(n.maxDistance,E))}function Q(E){d.set(E.clientX,E.clientY)}function te(E){X(E.clientX,E.clientX),u.set(E.clientX,E.clientY)}function ue(E){g.set(E.clientX,E.clientY)}function G(E){f.set(E.clientX,E.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);let j=n.domElement;V(2*Math.PI*m.x/j.clientHeight),K(2*Math.PI*m.y/j.clientHeight),d.copy(f),n.update()}function J(E){S.set(E.clientX,E.clientY),v.subVectors(S,u),v.y>0?W(b(v.y)):v.y<0&&$(b(v.y)),u.copy(S),n.update()}function de(E){_.set(E.clientX,E.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(_),n.update()}function _e(E){X(E.clientX,E.clientY),E.deltaY<0?$(b(E.deltaY)):E.deltaY>0&&W(b(E.deltaY)),n.update()}function fe(E){let j=!1;switch(E.code){case n.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),j=!0;break}j&&(E.preventDefault(),n.update())}function Te(E){if(w.length===1)d.set(E.pageX,E.pageY);else{let j=qe(E),le=.5*(E.pageX+j.x),ie=.5*(E.pageY+j.y);d.set(le,ie)}}function Re(E){if(w.length===1)g.set(E.pageX,E.pageY);else{let j=qe(E),le=.5*(E.pageX+j.x),ie=.5*(E.pageY+j.y);g.set(le,ie)}}function we(E){let j=qe(E),le=E.pageX-j.x,ie=E.pageY-j.y,Me=Math.sqrt(le*le+ie*ie);u.set(0,Me)}function Xe(E){n.enableZoom&&we(E),n.enablePan&&Re(E)}function N(E){n.enableZoom&&we(E),n.enableRotate&&Te(E)}function at(E){if(w.length==1)f.set(E.pageX,E.pageY);else{let le=qe(E),ie=.5*(E.pageX+le.x),Me=.5*(E.pageY+le.y);f.set(ie,Me)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);let j=n.domElement;V(2*Math.PI*m.x/j.clientHeight),K(2*Math.PI*m.y/j.clientHeight),d.copy(f)}function Ee(E){if(w.length===1)_.set(E.pageX,E.pageY);else{let j=qe(E),le=.5*(E.pageX+j.x),ie=.5*(E.pageY+j.y);_.set(le,ie)}p.subVectors(_,g).multiplyScalar(n.panSpeed),F(p.x,p.y),g.copy(_)}function Ce(E){let j=qe(E),le=E.pageX-j.x,ie=E.pageY-j.y,Me=Math.sqrt(le*le+ie*ie);S.set(0,Me),v.set(0,Math.pow(S.y/u.y,n.zoomSpeed)),W(v.y),u.copy(S);let He=(E.pageX+j.x)*.5,Ye=(E.pageY+j.y)*.5;X(He,Ye)}function xe(E){n.enableZoom&&Ce(E),n.enablePan&&Ee(E)}function je(E){n.enableZoom&&Ce(E),n.enableRotate&&at(E)}function Ue(E){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",M),n.domElement.addEventListener("pointerup",x)),ye(E),E.pointerType==="touch"?me(E):I(E))}function M(E){n.enabled!==!1&&(E.pointerType==="touch"?ne(E):z(E))}function x(E){Ie(E),w.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",M),n.domElement.removeEventListener("pointerup",x)),n.dispatchEvent(jl),r=s.NONE}function I(E){let j;switch(E.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Kn.DOLLY:if(n.enableZoom===!1)return;te(E),r=s.DOLLY;break;case Kn.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;ue(E),r=s.PAN}else{if(n.enableRotate===!1)return;Q(E),r=s.ROTATE}break;case Kn.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;Q(E),r=s.ROTATE}else{if(n.enablePan===!1)return;ue(E),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ba)}function z(E){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;G(E);break;case s.DOLLY:if(n.enableZoom===!1)return;J(E);break;case s.PAN:if(n.enablePan===!1)return;de(E);break}}function k(E){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(E.preventDefault(),n.dispatchEvent(Ba),_e(E),n.dispatchEvent(jl))}function Z(E){n.enabled===!1||n.enablePan===!1||fe(E)}function me(E){switch(ee(E),w.length){case 1:switch(n.touches.ONE){case rn.ROTATE:if(n.enableRotate===!1)return;Te(E),r=s.TOUCH_ROTATE;break;case rn.PAN:if(n.enablePan===!1)return;Re(E),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case rn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Xe(E),r=s.TOUCH_DOLLY_PAN;break;case rn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(E),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ba)}function ne(E){switch(ee(E),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;at(E),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ee(E),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(E),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;je(E),n.update();break;default:r=s.NONE}}function he(E){n.enabled!==!1&&E.preventDefault()}function ye(E){w.push(E.pointerId)}function Ie(E){delete Y[E.pointerId];for(let j=0;j<w.length;j++)if(w[j]==E.pointerId){w.splice(j,1);return}}function ee(E){let j=Y[E.pointerId];j===void 0&&(j=new Ne,Y[E.pointerId]=j),j.set(E.pageX,E.pageY)}function qe(E){let j=E.pointerId===w[0]?w[1]:w[0];return Y[j]}n.domElement.addEventListener("contextmenu",he),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",x),n.domElement.addEventListener("wheel",k,{passive:!1}),this.update()}};var cr=class extends Ri{constructor(e=null){super();let t=new Yn;t.deleteAttribute("uv");let n=new Zn({side:_t}),s=new Zn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new tr(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ze(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Ze(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ze(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Ze(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Ze(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let f=new Ze(t,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let m=new Ze(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let g=new Ze(t,Di(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Ze(t,Di(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let p=new Ze(t,Di(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let u=new Ze(t,Di(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let S=new Ze(t,Di(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);let v=new Ze(t,Di(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Di(i){let e=new Pn;return e.color.setScalar(i),e}var ns={limit:113,stages:[{code:"F1",no:1,short:"Blade",title:"Blade thickness",filament:"red PLA",colour:"#C8302C",ids:["F1-V1","F1-V2","F1-V3","F1-V4","F1-V5"],paras:["Blade thickness ran from 5.0 to 11.0 mm. Thicker blades cut body stress from 171 to 84 MPa but raised ISO stiffness by 62%."],decision:"Kept 9.5 mm (94 MPa, safety factor 1.80). 8.0 mm passed by only 3%, too little margin before pores were cut.",gauge:"Body peak, 2 to 10 mm above the potting level"},{code:"F2",no:2,short:"Neck",title:"Neck diameter",filament:"pink PLA",colour:"#F0A2BC",ids:["F2-V1","F2-V2","F2-V3","F2-V4","F2-V5"],paras:["Every stage 1 blade still failed at its \xD812 neck. Widening it from \xD810 to \xD814 mm cut mid-neck stress from 258 to 98 MPa, but the oscillation angle fell from 141\xB0 to 124\xB0, close to the 120\xB0 minimum (Yoshimine, 2005)."],decision:"Kept \xD814 mm: the only neck under the limit (98 MPa, safety factor 1.74).",gauge:"Mid-neck peak, 16 to 19 mm from the head centre"},{code:"MR1",no:3,short:"Strategy",title:"Reduction strategy",filament:"orange PLA",colour:"#EE8A20",ids:["MR1-V1","MR1-V2","MR1-V3","MR1-V4","MR1-V5"],paras:["Four ways to remove the same 10.3% of volume, against the solid V1. Each lattice put a pore in the calcar load path (189 to 210 MPa); the open window overloaded its rails (270 MPa)."],decision:"None passed. Kept the graded lattice and moved its pores in stage 4.",gauge:"Peak in the porous zone"},{code:"MR2",no:4,short:"Lattice",title:"Load-informed lattice",filament:"yellow PLA",colour:"#F0C21C",ids:["MR2-V1","MR2-V2","MR2-V3","MR2-V4","MR2-V5","MR2-REF"],paras:["Pores go only where the solid stem\u2019s own ISO stress is below a threshold \u03C4. At \u03C4 = 25 MPa the lattice peak fell from 210 to 96 MPa at equal mass; a uniform lattice with the same 64 pores matched it."],decision:"Kept \u03C4 = 25 MPa: 10.1% of volume removed, still under the limit.",gauge:"Peak in the lattice zone"},{code:"FV",no:5,short:"Fit",title:"Fit and fatigue fixes",filament:"brown PLA, FV6 green",colour:"#6F4E3D",ids:["FV1","FV2","FV3","FV4","FV5","FV6"],paras:["In the femur model the stage 4 stem breached the cortex, seated its collar poorly and missed the head centre by 4.7 mm. Six cumulative fixes followed.","The neck\u2013collar corner, excluded earlier as a singularity, now counted: FV1 peaked there at 313 MPa, and FV2 to FV5 still sat 2 to 5% over."],decision:"FV6 passes every region: worst 102.5 MPa, safety factor 1.66.",gauge:"Worst decision region of each variant"}],variants:{"F1-V1":{id:"F1-V1",stage:"F1",title:"5.0 mm blade",status:"fail",chip:"Over limit",sig:171.04,facts:[["Safety factor","0.99"],["ISO stiffness","8.83 kN/mm"]],note:null,sil:{w:35.1,h:124.1,d:"M9.1,1L1,6.2L11.7,22.9L11.7,23L11.5,23.2L5.9,26.8L6.8,28.2L8.8,37L10.3,45.4L10.5,46.3L11.7,55.5L12.5,65.2L12.8,73.7L12.8,73.7L12.7,83.1L12.7,83.1L12.7,83.9L12.5,86.8L12.3,92L12.2,92L12.2,92.6L12.2,92.9L11.3,101.7L10.3,108.4L10.2,109.1L10,110.6L9.9,111L8.2,119.5L8,120.6L8.1,121.1L8.2,121.5L8.5,122L8.8,122.4L9.2,122.7L9.6,123L10.2,123.1L10.7,123.1L11.4,122.9L11.9,122.6L12.4,122.1L12.7,121.7L12.8,121.3L12.8,121.2L13.1,120.1L19.3,97.6L34.1,44.1L34,43.4L34,42.9L33.8,41.7L33.8,41.2L33.6,40L33.5,39.5L33.1,36.1L33,35.6L32.8,34.4L32.8,33.9L32.3,30.5L30.9,19.2L30.7,18.5L30.3,17.6L29.9,17L29.5,16.6L28.9,16.2L28.1,15.8L26.6,15.5L25.7,14.1L20.1,17.7L19.9,17.8L19.8,17.8L9.4,1.5L9.1,1Z",p:[]},colour:"#C8302C",kb:28,fa:.713,deformed:!0,gauge:null},"F1-V2":{id:"F1-V2",stage:"F1",title:"6.5 mm blade",status:"fail",chip:"Over limit",sig:133.08,facts:[["Safety factor","1.28"],["ISO stiffness","10.53 kN/mm"]],note:null,sil:{w:35.1,h:124.1,d:"M9.1,1L1,6.2L11.7,22.9L11.7,23L11.5,23.2L5.9,26.8L6.8,28.2L8.8,37L10.3,45.4L10.5,46.3L11.7,55.5L12.5,65.2L12.8,73.7L12.8,73.7L12.7,83.1L12.7,83.1L12.7,83.9L12.5,86.8L12.3,92L12.2,92L12.2,92.6L12.2,92.9L11.3,101.7L10.3,108.4L10.2,109.1L10,110.6L9.9,111L8.2,119.5L8,120.6L8.1,121.1L8.2,121.5L8.5,122L8.8,122.4L9.2,122.7L9.6,123L10.2,123.1L10.7,123.1L11.4,122.9L11.9,122.6L12.4,122.1L12.7,121.7L12.8,121.3L12.8,121.2L13.1,120.1L19.3,97.6L34.1,44.1L34,43.4L34,42.9L33.8,41.7L33.8,41.2L33.6,40L33.5,39.5L33.1,36.1L33,35.6L32.8,34.4L32.8,33.9L32.3,30.5L30.9,19.2L30.7,18.5L30.3,17.6L29.9,17L29.5,16.6L28.9,16.2L28.1,15.8L26.6,15.5L25.7,14.1L20.1,17.7L19.9,17.8L19.8,17.8L9.4,1.5L9.1,1Z",p:[]},colour:"#C8302C",kb:35,fa:.715,deformed:!0,gauge:null},"F1-V3":{id:"F1-V3",stage:"F1",title:"8.0 mm blade",status:"pass",chip:"Pass",sig:109.7,facts:[["Safety factor","1.55"],["ISO stiffness","11.99 kN/mm"]],note:null,sil:{w:35.1,h:124.1,d:"M9.1,1L1,6.2L11.7,22.9L11.7,23L11.5,23.2L5.9,26.8L6.8,28.2L8.8,37L10.3,45.4L10.5,46.3L11.7,55.5L12.5,65.2L12.8,73.7L12.8,73.7L12.7,83.1L12.7,83.1L12.7,83.9L12.5,86.8L12.3,92L12.2,92L12.2,92.6L12.2,92.9L11.3,101.7L10.3,108.4L10.2,109.1L10,110.6L9.9,111L8.2,119.5L8,120.6L8.1,121.1L8.2,121.5L8.5,122L8.8,122.4L9.2,122.7L9.6,123L10.2,123.1L10.7,123.1L11.4,122.9L11.9,122.6L12.4,122.1L12.7,121.7L12.8,121.3L12.8,121.2L13.1,120.1L19.3,97.6L34.1,44.1L34,43.4L34,42.9L33.8,41.7L33.8,41.2L33.6,40L33.5,39.5L33.1,36.1L33,35.6L32.8,34.4L32.8,33.9L32.3,30.5L30.9,19.2L30.7,18.5L30.3,17.6L29.9,17L29.5,16.6L28.9,16.2L28.1,15.8L26.6,15.5L25.7,14.1L20.1,17.7L19.9,17.8L19.8,17.8L9.4,1.5L9.1,1Z",p:[]},colour:"#C8302C",kb:35,fa:.72,deformed:!0,gauge:null},"F1-V4":{id:"F1-V4",stage:"F1",title:"9.5 mm blade",status:"sel",chip:"Selected",sig:94.35,facts:[["Safety factor","1.80"],["ISO stiffness","13.25 kN/mm"]],note:null,sil:{w:35.1,h:124.1,d:"M9.1,1L1,6.2L11.7,22.9L11.7,23L11.5,23.2L5.9,26.8L6.8,28.2L8.8,37L10.3,45.4L10.5,46.3L11.7,55.5L12.5,65.2L12.8,73.7L12.8,73.7L12.7,83.1L12.7,83.1L12.7,83.9L12.5,86.8L12.3,92L12.2,92L12.2,92.6L12.2,92.9L11.3,101.7L10.3,108.4L10.2,109.1L10,110.6L9.9,111L8.2,119.5L8,120.6L8.1,121.1L8.2,121.5L8.5,122L8.8,122.4L9.2,122.7L9.6,123L10.2,123.1L10.7,123.1L11.4,122.9L11.9,122.6L12.4,122.1L12.7,121.7L12.8,121.3L12.8,121.2L13.1,120.1L19.3,97.6L34.1,44.1L34,43.4L34,42.9L33.8,41.7L33.8,41.2L33.6,40L33.5,39.5L33.1,36.1L33,35.6L32.8,34.4L32.8,33.9L32.3,30.5L30.9,19.2L30.7,18.5L30.3,17.6L29.9,17L29.5,16.6L28.9,16.2L28.1,15.8L26.6,15.5L25.7,14.1L20.1,17.7L19.9,17.8L19.8,17.8L9.4,1.5L9.1,1Z",p:[]},colour:"#35A262",kb:35,fa:.722,deformed:!0,gauge:null},"F1-V5":{id:"F1-V5",stage:"F1",title:"11.0 mm blade",status:"pass",chip:"Pass",sig:83.67,facts:[["Safety factor","2.03"],["ISO stiffness","14.30 kN/mm"]],note:null,sil:{w:35.1,h:124.1,d:"M9.1,1L1,6.2L11.7,22.9L11.7,23L11.5,23.2L5.9,26.8L6.8,28.2L8.8,37L10.3,45.4L10.5,46.3L11.7,55.5L12.5,65.2L12.8,73.7L12.8,73.7L12.7,83.1L12.7,83.1L12.7,83.9L12.5,86.8L12.3,92L12.2,92L12.2,92.6L12.2,92.9L11.3,101.7L10.3,108.4L10.2,109.1L10,110.6L9.9,111L8.2,119.5L8,120.6L8.1,121.1L8.2,121.5L8.5,122L8.8,122.4L9.2,122.7L9.6,123L10.2,123.1L10.7,123.1L11.4,122.9L11.9,122.6L12.4,122.1L12.7,121.7L12.8,121.3L12.8,121.2L13.1,120.1L19.3,97.6L34.1,44.1L34,43.4L34,42.9L33.8,41.7L33.8,41.2L33.6,40L33.5,39.5L33.1,36.1L33,35.6L32.8,34.4L32.8,33.9L32.3,30.5L30.9,19.2L30.7,18.5L30.3,17.6L29.9,17L29.5,16.6L28.9,16.2L28.1,15.8L26.6,15.5L25.7,14.1L20.1,17.7L19.9,17.8L19.8,17.8L9.4,1.5L9.1,1Z",p:[]},colour:"#C8302C",kb:35,fa:.724,deformed:!0,gauge:null},"F2-V1":{id:"F2-V1",stage:"F2",title:"\xD810 mm neck",status:"fail",chip:"Over limit",sig:257.8,facts:[["Safety factor","0.66"],["Oscillation angle","141\xB0"]],note:null,sil:{w:34.5,h:123.7,d:"M7.7,1L1,5.3L11.2,21.2L11.4,21.5L11.5,21.9L11.4,22.2L11.2,22.5L5.2,26.3L6.1,27.7L7.5,33.8L8.1,36.6L9.7,45.5L11,55.1L11.1,57L11.8,64.2L12.1,73.3L12.1,73.3L12.1,75L12.1,75L12,83.4L12,83.4L11.8,86.9L11.7,89.8L11.6,92.1L10.6,101.5L9.8,106.9L9.5,109L9.2,110.7L7.4,120.1L7.4,120.7L7.5,121.1L7.7,121.5L8,121.9L8.6,122.3L9,122.5L9.4,122.6L9.9,122.7L10.7,122.5L11.1,122.3L11.3,122.1L11.7,121.8L11.9,121.4L12.1,120.9L30.7,53.5L32.8,46L33,45.4L33.4,43.9L33.5,43.4L33.2,41.7L33.2,41.2L32.9,39.5L32.9,39.1L32.6,37.4L32.6,36.9L32.3,35.2L32.3,34.7L32,33L32,32.5L31.8,30.8L31.7,30.4L31.5,28.7L31.4,28.2L31.2,26.5L30.1,18.6L29.9,17.7L29.7,17.2L29.2,16.5L28.8,16.1L28.3,15.8L27.8,15.5L27.3,15.3L25.9,15L25,13.7L19.2,17.4L18.9,17.5L18.6,17.5L18.2,17.3L8.2,1.6Z",p:[]},colour:"#F0A2BC",kb:43,fa:.593,deformed:!1,gauge:null},"F2-V2":{id:"F2-V2",stage:"F2",title:"\xD811 mm neck",status:"fail",chip:"Over limit",sig:194.31,facts:[["Safety factor","0.87"],["Oscillation angle","137\xB0"]],note:null,sil:{w:34.8,h:123.8,d:"M8.4,1L1,5.7L11.2,21.7L11.4,22.1L11.5,22.3L11.4,22.6L11.3,22.9L11.1,23L5.6,26.5L6.4,27.9L6.5,28L6.8,29.8L8.5,36.9L10,45.2L10.1,45.8L11.4,55.5L11.5,57.4L12.1,64.6L12.1,65.5L12.2,65.5L12.4,72.2L12.4,73.1L12.4,81L12.4,81.1L12.4,83.4L12.4,83.4L11.9,92.5L11.8,93.2L10.9,101.6L9.7,110L9.6,110.7L7.7,120.2L7.7,120.8L7.8,121.3L8.2,121.9L8.5,122.3L8.9,122.5L9.5,122.8L9.8,122.8L10.5,122.8L11,122.7L11.7,122.3L12.2,121.7L12.4,121.1L29.7,58.5L31.4,52.5L31.6,51.9L31.8,51L32,50.4L32.3,49.5L32.4,48.9L33.7,44.4L33.8,43.8L33.7,43L33.6,42.6L33.4,41.4L33.4,40.9L33.2,39.2L33.1,38.7L32.9,37L32.8,36.5L32.6,34.8L32.5,34.3L32.4,33.1L32.3,32.6L32.1,30.9L32,30.5L31.8,28.8L30.5,18.9L30.3,18.1L29.9,17.3L29.5,16.8L29.2,16.4L28.5,15.9L27.8,15.6L26.2,15.3L26,15L25.4,14L25.3,13.9L19.7,17.5L19.2,17.5L18.9,17.4L18.6,17L8.4,1Z",p:[]},colour:"#F0A2BC",kb:43,fa:.593,deformed:!1,gauge:null},"F2-V3":{id:"F2-V3",stage:"F2",title:"\xD812 mm neck",status:"fail",chip:"Over limit",sig:151.34,facts:[["Safety factor","1.12"],["Oscillation angle","133\xB0"]],note:null,sil:{w:35.1,h:124.1,d:"M9.1,1L1,6.2L11.2,22.1L11.4,22.5L11.5,22.8L11.4,23.1L11.2,23.4L5.9,26.8L6.8,28.2L8.8,37L10.3,45.4L10.5,46.3L11.7,55.5L12.5,65.2L12.8,73.7L12.8,73.7L12.7,83.1L12.7,83.1L12.7,83.9L12.5,86.8L12.3,92L12.2,92L12.2,92.6L12.2,92.9L11.3,101.7L10.3,108.4L10.2,109.1L10,110.6L9.9,111L8.2,119.5L8,120.6L8.1,121.1L8.2,121.5L8.5,122L8.8,122.4L9.2,122.7L9.6,123L10.2,123.1L10.7,123.1L11.4,122.9L11.9,122.6L12.4,122.1L12.7,121.7L12.8,121.3L12.8,121.2L13.1,120.1L19.3,97.6L34.1,44.1L34,43.4L34,42.9L33.8,41.7L33.8,41.2L33.6,40L33.5,39.5L33.1,36.1L33,35.6L32.8,34.4L32.8,33.9L32.3,30.5L30.9,19.2L30.7,18.5L30.3,17.6L29.9,17L29.5,16.6L28.9,16.2L28.1,15.8L26.6,15.5L25.7,14.1L20.5,17.5L20.3,17.5L19.9,17.5L19.6,17.4L19.4,17.1L9.4,1.5L9.1,1Z",p:[]},colour:"#F0A2BC",kb:43,fa:.593,deformed:!1,gauge:null},"F2-V4":{id:"F2-V4",stage:"F2",title:"\xD813 mm neck",status:"fail",chip:"Over limit",sig:120.46,facts:[["Safety factor","1.41"],["Oscillation angle","129\xB0"]],note:null,sil:{w:35.5,h:124.3,d:"M9.7,1L1,6.6L11.2,22.5L11.4,23L11.5,23.2L11.4,23.4L11.3,23.7L11.1,23.9L6.2,26.9L6.2,27L7.1,28.3L7.2,28.6L9.2,37.3L10.8,46.4L12,55.9L12.7,64.6L12.8,65L12.9,67.5L12.9,67.6L13.1,72.6L13.1,73.5L13.1,81.7L13.1,81.7L13.1,83.8L13,83.9L12.6,93L11.6,102.1L10.4,110L10.3,110.7L8.4,120.7L8.4,121.2L8.4,121.5L8.7,122L8.9,122.4L9.4,122.8L9.9,123.1L10.6,123.3L11,123.3L11.6,123.2L12.1,123L12.3,122.8L12.6,122.5L12.9,122.1L13.1,121.5L30.3,59.3L31.6,54.8L31.7,54.2L32,53.3L32.1,52.7L33.4,48.2L33.5,47.6L34.4,44.6L34.5,44.2L34,40.8L34,40.3L33.8,39.1L33.7,38.6L33.5,37.4L33.5,36.9L33,33.5L33,33.1L32.8,31.9L32.8,31.4L32.3,28L31.2,19.3L31.1,18.7L30.8,18L30.3,17.3L30.1,17.1L29.7,16.7L29.3,16.4L29,16.3L28.3,16L26.9,15.7L26.8,15.6L26,14.3L21.1,17.5L21,17.5L20.6,17.5L20.3,17.4L20.1,17.2L9.9,1.1Z",p:[]},colour:"#F0A2BC",kb:43,fa:.593,deformed:!1,gauge:null},"F2-V5":{id:"F2-V5",stage:"F2",title:"\xD814 mm neck",status:"sel",chip:"Selected",sig:97.56,facts:[["Safety factor","1.74"],["Oscillation angle","124\xB0"]],note:null,sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.2,22.9L11.4,23.3L11.5,23.6L11.4,24L11.3,24.2L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.7L9.5,37.6L11,46L11.1,46.5L12.4,55.9L13.2,65.6L13.3,68.9L13.3,69L13.3,71.5L13.4,71.5L13.4,74L13.5,74L13.4,83.8L13.2,87.9L12.9,93.1L11.9,102.4L11.4,105.6L10.6,111.4L8.7,120.7L8.7,121.5L8.8,121.8L9.1,122.4L9.4,122.8L9.7,123.1L10.2,123.3L10.7,123.5L11.2,123.5L11.7,123.5L12.1,123.3L12.3,123.2L12.8,122.9L13.2,122.4L13.4,122L13.5,121.7L17.5,107L18,105.5L20.2,97.4L34.8,44.5L31.6,20.1L31.5,19.6L31.3,18.8L31,18.1L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.6,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.3,17.5L21,17.4L20.8,17.2L10.6,1.2Z",p:[]},colour:"#35A262",kb:43,fa:.593,deformed:!1,gauge:null},"MR1-V1":{id:"MR1-V1",stage:"MR1",title:"Solid",status:"ref",chip:"Reference",sig:51.59,facts:[["Safety factor","2.37"],["Medial rail peak","72 MPa"],["ISO stiffness","17.20 kN/mm"]],note:"Nothing removed. The reference for this stage.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.4L9.4,122.8L10,123.2L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L13,122.6L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[]},colour:"#EE8A20",kb:49,fa:.593,deformed:!1,gauge:"Peak in the region the lattices perforate, here still solid"},"MR1-V2":{id:"MR1-V2",stage:"MR1",title:"Uniform lattice",status:"fail",chip:"Over limit",sig:190.75,facts:[["Safety factor","0.89"],["Medial rail peak","90 MPa"],["ISO stiffness","15.18 kN/mm"],["Volume removed","10.3%"],["Stiffness vs solid","\u221211.7%"]],note:"Relative density 0.49 throughout.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[24.9,58.8,.74],[22.4,58.4,.74],[19.9,57.9,.74],[17.4,57.5,.74],[27.8,56.7,.74],[25.3,56.3,.74],[22.8,55.9,.75],[20.3,55.4,.74],[17.8,55,.74],[28.2,54.2,.74],[25.7,53.8,.74],[23.2,53.4,.74],[20.8,52.9,.74],[18.2,52.5,.74],[15.8,52,.74],[28.7,51.7,.74],[26.2,51.3,.74],[23.7,50.9,.75],[21.2,50.4,.74],[18.7,50,.74],[16.2,49.5,.74],[29.1,49.2,.74],[26.6,48.8,.74],[24.1,48.4,.74],[21.6,47.9,.74],[19.1,47.5,.74],[16.6,47,.74],[29.6,46.8,.74],[27.1,46.3,.74],[24.6,45.9,.74],[22.1,45.4,.74],[19.6,45,.74],[17.1,44.5,.74],[30,44.3,.74],[14.6,44.1,.75],[27.5,43.8,.74],[25,43.4,.74],[22.5,42.9,.74],[20,42.5,.74],[17.5,42.1,.74],[30.4,41.8,.74],[15,41.6,.74],[27.9,41.3,.74],[25.4,40.9,.75],[22.9,40.5,.74],[20.4,40,.74],[18,39.6,.74],[15.5,39.1,.74],[28.4,38.8,.75],[25.9,38.4,.74],[23.4,38,.74],[20.9,37.5,.74],[18.4,37.1,.74],[15.9,36.6,.74],[28.8,36.3,.75],[13.4,36.2,.74],[26.3,35.9,.74],[23.8,35.5,.74],[21.3,35,.74],[18.8,34.6,.74],[16.3,34.1,.74]]},colour:"#EE8A20",kb:238,fa:.593,deformed:!1,gauge:null},"MR1-V3":{id:"MR1-V3",stage:"MR1",title:"Graded lattice",status:"sel",chip:"Kept",sig:209.56,facts:[["Safety factor","0.81"],["Medial rail peak","86 MPa"],["ISO stiffness","15.21 kN/mm"],["Volume removed","10.3%"],["Stiffness vs solid","\u221211.5%"]],note:"Relative density 0.40 to 0.60, most porous proximally.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[24.9,58.8,.64],[22.4,58.4,.64],[19.9,57.9,.64],[17.4,57.5,.64],[27.8,56.7,.66],[25.3,56.3,.66],[22.8,55.9,.66],[20.3,55.4,.66],[17.8,55,.66],[28.2,54.2,.68],[25.7,53.8,.68],[23.2,53.4,.68],[20.7,52.9,.68],[18.2,52.5,.68],[15.8,52,.68],[28.7,51.7,.7],[26.2,51.3,.7],[23.7,50.9,.7],[21.2,50.4,.7],[18.7,50,.7],[16.2,49.5,.7],[29.1,49.2,.73],[26.6,48.8,.72],[24.1,48.4,.73],[21.6,47.9,.72],[19.1,47.5,.73],[16.6,47,.72],[29.6,46.8,.75],[27.1,46.3,.75],[24.6,45.9,.75],[22.1,45.4,.74],[19.6,45,.75],[17.1,44.6,.75],[30,44.3,.77],[14.6,44.1,.75],[27.5,43.8,.77],[25,43.4,.77],[22.5,42.9,.77],[20,42.5,.77],[17.5,42.1,.77],[30.4,41.8,.79],[15,41.6,.77],[27.9,41.3,.79],[25.4,40.9,.79],[22.9,40.5,.79],[20.4,40,.79],[17.9,39.6,.79],[15.5,39.1,.79],[28.4,38.8,.81],[25.9,38.4,.81],[23.4,38,.81],[20.9,37.5,.81],[18.4,37.1,.81],[15.9,36.6,.81],[28.8,36.3,.84],[13.4,36.2,.81],[26.3,35.9,.84],[23.8,35.5,.84],[21.3,35,.84],[18.8,34.6,.84],[16.3,34.1,.84]]},colour:"#35A262",kb:260,fa:.593,deformed:!1,gauge:null},"MR1-V4":{id:"MR1-V4",stage:"MR1",title:"Inverted gradient",status:"fail",chip:"Over limit",sig:188.66,facts:[["Safety factor","0.90"],["Medial rail peak","95 MPa"],["ISO stiffness","15.10 kN/mm"],["Volume removed","10.3%"],["Stiffness vs solid","\u221212.2%"]],note:"Relative density 0.59 to 0.39, most porous distally.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[24.9,58.8,.85],[22.4,58.4,.85],[19.9,57.9,.85],[17.4,57.5,.85],[27.8,56.7,.83],[25.3,56.3,.83],[22.8,55.9,.83],[20.3,55.4,.83],[17.8,55,.83],[28.2,54.2,.81],[25.7,53.8,.81],[23.2,53.4,.81],[20.7,52.9,.81],[18.2,52.5,.81],[15.8,52,.81],[28.7,51.8,.78],[26.2,51.3,.78],[23.7,50.9,.79],[21.2,50.4,.78],[18.7,50,.78],[16.2,49.5,.78],[29.1,49.2,.76],[26.6,48.8,.76],[24.1,48.4,.76],[21.6,47.9,.76],[19.1,47.5,.76],[16.6,47,.76],[29.6,46.8,.74],[27.1,46.3,.74],[24.6,45.9,.74],[22.1,45.4,.74],[19.6,45,.74],[17.1,44.6,.74],[30,44.3,.72],[14.6,44.1,.74],[27.5,43.8,.72],[25,43.4,.72],[22.5,42.9,.72],[20,42.5,.72],[17.5,42.1,.72],[30.4,41.8,.7],[15,41.6,.72],[27.9,41.3,.7],[25.4,40.9,.69],[22.9,40.5,.7],[20.4,40,.7],[17.9,39.6,.7],[15.5,39.1,.69],[28.4,38.8,.67],[25.9,38.4,.67],[23.4,38,.67],[20.9,37.5,.67],[18.4,37.1,.67],[15.9,36.6,.67],[28.8,36.3,.65],[13.4,36.2,.67],[26.3,35.9,.65],[23.8,35.5,.65],[21.3,35,.65],[18.8,34.6,.65],[16.3,34.1,.65]]},colour:"#EE8A20",kb:261,fa:.593,deformed:!1,gauge:null},"MR1-V5":{id:"MR1-V5",stage:"MR1",title:"Open window",status:"fail",chip:"Over limit",sig:270.21,facts:[["Safety factor","0.63"],["Medial rail peak","211 MPa"],["ISO stiffness","12.56 kN/mm"],["Volume removed","10.3%"],["Stiffness vs solid","\u221227.0%"]],note:"One macro-void between two rails.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.4L9.4,122.8L10,123.2L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L13,122.6L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1ZM13.3,42.6L13.4,42.3L13.5,42.3L13.6,42L14.1,41.6L14.6,41.3L15.3,41.1L30.1,41.1L30.4,41.2L30.9,41.4L31.4,41.7L31.8,42.2L32.1,42.6L32.2,43.1L32.4,44.4L30.7,50.2L30.6,50.5L30.3,50.9L29.9,51.3L29.7,51.3L29.5,51.5L28.8,51.6L16,51.6L15.4,51.5L14.7,51L14.3,50.5L14,49.9L13.1,43.9L13.1,43.2Z",p:[]},colour:"#EE8A20",kb:51,fa:.593,deformed:!1,gauge:null},"MR2-V1":{id:"MR2-V1",stage:"MR2",title:"\u03C4 = 20 MPa",status:"pass",chip:"Pass",sig:83.88,facts:[["Safety factor","2.03"],["Medial rail peak","76 MPa"],["Pores","50"],["Volume removed","7.6%"],["Stiffness vs solid","\u22123.6%"]],note:"Pores only where the solid stem\u2019s ISO stress is below 20 MPa.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[22.4,58.4,.74],[25.3,56.3,.7],[22.8,55.9,.75],[25.7,53.8,.7],[23.2,53.4,.76],[26.2,51.3,.71],[23.7,50.9,.77],[21.2,50.4,.7],[26.6,48.8,.71],[24.1,48.4,.77],[21.6,47.9,.72],[29.6,46.8,.66],[27.1,46.3,.71],[24.6,45.9,.77],[22.1,45.4,.74],[30,44.3,.66],[27.5,43.8,.72],[25,43.4,.78],[22.5,42.9,.76],[20,42.5,.69],[30.4,41.8,.67],[27.9,41.3,.72],[25.4,40.9,.78],[22.9,40.5,.77],[20.4,40,.7],[28.4,38.8,.71],[25.9,38.4,.77],[23.4,38,.79],[20.9,37.5,.73],[28.8,36.3,.7],[26.3,35.9,.76],[23.8,35.5,.81],[21.3,35,.75],[29.2,33.8,.69],[26.8,33.4,.74],[24.3,33,.79],[21.8,32.5,.78],[19.3,32.1,.69],[29.7,31.4,.67],[27.2,30.9,.71],[24.7,30.5,.75],[22.2,30,.78],[19.7,29.6,.72],[27.6,28.4,.69],[25.1,28,.7],[22.6,27.5,.72],[20.1,27.1,.71],[28.1,25.9,.68],[25.6,25.5,.65],[28.5,23.4,.69]]},colour:"#F0C21C",kb:258,fa:.593,deformed:!1,gauge:null},"MR2-V2":{id:"MR2-V2",stage:"MR2",title:"\u03C4 = 25 MPa",status:"sel",chip:"Selected",sig:95.6,facts:[["Safety factor","1.78"],["Medial rail peak","79 MPa"],["Pores","64"],["Volume removed","10.1%"],["Stiffness vs solid","\u22126.1%"]],note:"Pores only where the solid stem\u2019s ISO stress is below 25 MPa.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[24.9,58.8,.71],[22.4,58.4,.76],[25.3,56.3,.72],[22.8,55.9,.77],[20.3,55.4,.68],[25.7,53.8,.73],[23.2,53.4,.78],[20.7,52.9,.71],[28.7,51.8,.67],[26.2,51.3,.74],[23.7,50.9,.78],[21.2,50.4,.73],[29.1,49.2,.69],[26.6,48.8,.74],[24.1,48.4,.78],[21.6,47.9,.74],[19.1,47.5,.68],[29.6,46.8,.69],[27.1,46.3,.74],[24.6,45.9,.79],[22.1,45.4,.76],[19.6,45,.7],[30,44.3,.69],[27.5,43.8,.74],[25,43.4,.79],[22.5,42.9,.78],[20,42.5,.72],[30.4,41.8,.7],[27.9,41.3,.74],[25.4,40.9,.79],[22.9,40.5,.79],[20.4,40,.73],[17.9,39.6,.67],[28.4,38.8,.74],[25.9,38.4,.78],[23.4,38,.8],[20.9,37.5,.75],[18.4,37.1,.69],[28.8,36.3,.73],[26.3,35.9,.77],[23.8,35.5,.81],[21.3,35,.76],[18.8,34.6,.7],[29.2,33.8,.72],[26.8,33.4,.76],[24.3,33,.8],[21.8,32.5,.79],[19.3,32.1,.72],[29.7,31.3,.71],[27.2,30.9,.74],[24.7,30.5,.77],[22.2,30,.8],[19.7,29.6,.74],[27.6,28.4,.72],[25.1,28,.73],[22.6,27.5,.74],[20.1,27.1,.74],[28.1,25.9,.71],[25.6,25.5,.69],[23.1,25,.68],[20.6,24.6,.67],[28.5,23.4,.72],[26,23,.68],[26.5,20.5,.71]]},colour:"#35A262",kb:335,fa:.593,deformed:!1,gauge:null},"MR2-V3":{id:"MR2-V3",stage:"MR2",title:"\u03C4 = 30 MPa",status:"fail",chip:"Over limit",sig:114.48,facts:[["Safety factor","1.48"],["Medial rail peak","81 MPa"],["Pores","74"],["Volume removed","11.9%"],["Stiffness vs solid","\u22129.0%"]],note:"Pores only where the solid stem\u2019s ISO stress is below 30 MPa.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[24.9,58.8,.73],[22.4,58.4,.77],[19.9,57.9,.68],[25.3,56.3,.74],[22.8,55.9,.78],[20.3,55.4,.7],[28.2,54.2,.68],[25.7,53.8,.75],[23.2,53.4,.79],[20.7,52.9,.73],[28.7,51.7,.7],[26.2,51.3,.75],[23.7,50.9,.79],[21.2,50.4,.74],[18.7,50,.68],[29.1,49.2,.71],[26.6,48.8,.75],[24.1,48.4,.79],[21.6,47.9,.76],[19.1,47.5,.7],[29.6,46.8,.72],[27.1,46.3,.75],[24.6,45.9,.79],[22.1,45.4,.77],[19.6,45,.72],[17.1,44.6,.66],[30,44.3,.72],[27.5,43.8,.76],[25,43.4,.8],[22.5,42.9,.79],[20,42.5,.74],[17.5,42.1,.69],[30.4,41.8,.72],[27.9,41.3,.76],[25.4,40.9,.8],[22.9,40.5,.8],[20.4,40,.75],[17.9,39.6,.7],[15.5,39.1,.66],[28.4,38.8,.75],[25.9,38.4,.79],[23.4,38,.81],[20.9,37.5,.76],[18.4,37.1,.71],[15.9,36.6,.67],[28.8,36.3,.75],[26.3,35.9,.78],[23.8,35.5,.81],[21.3,35,.78],[18.8,34.6,.72],[16.3,34.1,.67],[29.2,33.8,.73],[26.8,33.4,.77],[24.3,33,.8],[21.8,32.5,.8],[19.3,32.1,.74],[16.8,31.6,.67],[29.7,31.3,.73],[27.2,30.9,.75],[24.7,30.5,.78],[22.2,30,.8],[19.7,29.6,.76],[27.6,28.4,.74],[25.1,28,.74],[22.6,27.5,.76],[20.1,27.1,.75],[28.1,25.9,.73],[25.6,25.5,.72],[23.1,25,.7],[20.6,24.6,.7],[28.5,23.4,.74],[26,23,.7],[23.5,22.5,.66],[26.5,20.5,.73]]},colour:"#F0C21C",kb:389,fa:.593,deformed:!1,gauge:null},"MR2-V4":{id:"MR2-V4",stage:"MR2",title:"\u03C4 = 35 MPa",status:"fail",chip:"Over limit",sig:172.16,facts:[["Safety factor","0.99"],["Medial rail peak","83 MPa"],["Pores","80"],["Volume removed","13.1%"],["Stiffness vs solid","\u221211.9%"]],note:"Pores only where the solid stem\u2019s ISO stress is below 35 MPa.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[24.9,58.8,.75],[22.4,58.4,.78],[19.9,57.9,.7],[27.8,56.7,.68],[25.3,56.3,.76],[22.8,55.9,.79],[20.3,55.4,.72],[28.2,54.2,.7],[25.7,53.8,.76],[23.2,53.4,.79],[20.7,52.9,.74],[18.2,52.5,.68],[28.7,51.8,.72],[26.2,51.3,.77],[23.7,50.9,.8],[21.2,50.4,.76],[18.7,50,.7],[29.1,49.2,.73],[26.6,48.8,.77],[24.1,48.4,.8],[21.6,47.9,.77],[19.1,47.5,.72],[16.6,47,.67],[29.6,46.8,.73],[27.1,46.3,.76],[24.6,45.9,.8],[22.1,45.4,.78],[19.6,45,.74],[17.1,44.6,.69],[30,44.3,.73],[27.5,43.8,.77],[25,43.4,.8],[22.5,42.9,.79],[20,42.5,.75],[17.5,42.1,.71],[30.4,41.8,.74],[15,41.6,.67],[27.9,41.3,.77],[25.4,40.9,.8],[22.9,40.4,.8],[20.4,40,.76],[17.9,39.6,.72],[15.5,39.1,.68],[28.4,38.8,.76],[25.9,38.4,.8],[23.4,38,.81],[20.9,37.5,.77],[18.4,37.1,.73],[15.9,36.6,.69],[28.8,36.3,.76],[13.4,36.2,.67],[26.3,35.9,.79],[23.8,35.5,.82],[21.3,35,.78],[18.8,34.6,.74],[16.3,34.1,.69],[29.2,33.8,.75],[13.8,33.7,.66],[26.8,33.4,.78],[24.3,33,.81],[21.8,32.5,.8],[19.3,32.1,.75],[16.8,31.6,.69],[27.2,30.9,.77],[24.7,30.5,.79],[22.2,30,.81],[19.7,29.6,.77],[17.2,29.1,.69],[27.6,28.4,.75],[25.1,28,.76],[22.6,27.5,.77],[20.1,27.1,.77],[17.7,26.6,.7],[28.1,25.9,.74],[25.6,25.5,.73],[23.1,25,.72],[20.6,24.6,.72],[28.5,23.4,.75],[26,23,.72],[23.5,22.5,.69]]},colour:"#F0C21C",kb:423,fa:.593,deformed:!1,gauge:null},"MR2-V5":{id:"MR2-V5",stage:"MR2",title:"\u03C4 = 40 MPa",status:"fail",chip:"Over limit",sig:171.6,facts:[["Safety factor","0.99"],["Medial rail peak","86 MPa"],["Pores","84"],["Volume removed","14.0%"],["Stiffness vs solid","\u221214.1%"]],note:"Pores only where the solid stem\u2019s ISO stress is below 40 MPa.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[24.9,58.8,.76],[22.4,58.4,.79],[19.9,57.9,.72],[27.8,56.7,.7],[25.3,56.3,.77],[22.8,55.9,.79],[20.3,55.4,.74],[17.8,55,.68],[28.2,54.2,.72],[25.7,53.8,.77],[23.2,53.4,.8],[20.7,52.9,.75],[18.2,52.5,.7],[28.7,51.8,.73],[26.2,51.3,.77],[23.7,50.9,.8],[21.2,50.4,.77],[18.7,50,.72],[16.2,49.5,.67],[29.1,49.2,.74],[26.6,48.8,.77],[24.1,48.4,.8],[21.6,47.9,.78],[19.1,47.5,.74],[16.6,47,.69],[29.6,46.8,.74],[27.1,46.3,.77],[24.6,45.9,.8],[22.1,45.4,.79],[19.6,45,.75],[17.1,44.6,.71],[30,44.3,.75],[14.6,44.1,.67],[27.5,43.8,.78],[25,43.4,.8],[22.5,42.9,.8],[20,42.5,.76],[17.5,42.1,.72],[30.4,41.8,.75],[15,41.6,.69],[27.9,41.3,.78],[25.4,40.9,.81],[22.9,40.5,.8],[20.4,40,.77],[17.9,39.6,.73],[15.5,39.1,.7],[28.4,38.8,.77],[25.9,38.4,.8],[23.4,38,.81],[20.9,37.5,.78],[18.4,37.1,.74],[15.9,36.6,.71],[28.8,36.3,.77],[13.4,36.2,.68],[26.3,35.9,.8],[23.8,35.5,.82],[21.3,35,.79],[18.8,34.6,.75],[16.3,34.1,.71],[29.2,33.8,.76],[13.8,33.7,.68],[26.8,33.4,.79],[24.3,33,.81],[21.8,32.5,.81],[19.3,32.1,.76],[16.8,31.6,.71],[14.3,31.2,.66],[27.2,30.9,.77],[24.7,30.5,.79],[22.2,30,.81],[19.7,29.6,.78],[17.2,29.1,.71],[27.6,28.4,.76],[25.1,28,.77],[22.6,27.5,.78],[20.1,27.1,.77],[17.7,26.6,.71],[28.1,25.9,.76],[25.6,25.5,.75],[23.1,25,.73],[20.6,24.6,.73],[28.5,23.4,.76],[26,23,.74],[23.5,22.5,.7]]},colour:"#F0C21C",kb:353,fa:.593,deformed:!1,gauge:null},"MR2-REF":{id:"MR2-REF",stage:"MR2",title:"Uniform twin of V2",status:"ref",chip:"Control",sig:95.83,facts:[["Safety factor","1.77"],["Medial rail peak","78 MPa"],["Pores","64"],["Volume removed","10.1%"],["Stiffness vs solid","\u22126.2%"]],note:"The same 64 pore positions as MR2-V2 at one uniform size (relative density 0.52). A simulation control, not mounted on the poster.",sil:{w:35.8,h:124.5,d:"M10.4,1L1,7L11.3,23.2L11.4,23.6L11.4,23.9L11.3,24.1L11.1,24.3L6.6,27.2L7.4,28.5L7.5,28.6L12.3,56L12.9,71.9L13,72.8L13,73.6L13,73.7L13.1,75.3L13.1,75.3L13.1,76.2L13.2,77L13.2,77.8L13.2,77.9L13.2,78.7L13.2,79.5L13.2,80.4L13.3,81.2L13.3,82.1L13.4,82.9L13.4,84.2L11.9,102.4L9.5,116.5L9.1,118.8L9,119L8.7,121.1L8.8,121.7L8.9,122L9.1,122.5L9.4,122.8L9.8,123.1L10.4,123.4L10.8,123.5L11.4,123.5L12.1,123.3L12.6,123L12.9,122.8L13.2,122.4L13.4,121.8L32.1,54.1L33.8,48.1L34,47.5L34.2,46.6L34.4,46L34.8,44.5L34,38.5L33.7,36.3L31.6,20.3L31.6,19.8L31.4,19L31.2,18.4L30.9,17.9L30.6,17.4L30.1,17L29.6,16.6L29.1,16.4L28.7,16.2L27.2,15.9L26.4,14.6L21.8,17.5L21.6,17.5L21.2,17.5L21,17.4L20.8,17.2L10.5,1.1Z",p:[[24.9,58.8,.71],[22.4,58.4,.72],[25.3,56.3,.72],[22.8,55.9,.72],[20.3,55.4,.72],[25.7,53.8,.71],[23.2,53.4,.72],[20.7,52.9,.72],[28.7,51.8,.71],[26.2,51.3,.71],[23.7,50.9,.71],[21.2,50.4,.72],[29.1,49.2,.72],[26.6,48.8,.72],[24.1,48.4,.72],[21.6,47.9,.72],[19.1,47.5,.72],[29.6,46.8,.72],[27.1,46.3,.72],[24.6,45.9,.72],[22.1,45.4,.72],[19.6,45,.72],[30,44.3,.72],[27.5,43.8,.72],[25,43.4,.72],[22.5,42.9,.72],[20,42.5,.72],[30.4,41.8,.71],[27.9,41.3,.72],[25.4,40.9,.72],[22.9,40.5,.71],[20.4,40,.72],[17.9,39.6,.72],[28.4,38.8,.72],[25.9,38.4,.72],[23.4,38,.72],[20.9,37.5,.72],[18.4,37.1,.72],[28.8,36.3,.72],[26.3,35.9,.72],[23.8,35.5,.71],[21.3,35,.72],[18.8,34.6,.72],[29.2,33.8,.72],[26.8,33.4,.72],[24.3,33,.72],[21.8,32.5,.72],[19.3,32.1,.72],[29.7,31.3,.72],[27.2,30.9,.71],[24.7,30.5,.72],[22.2,30,.72],[19.7,29.6,.72],[27.6,28.4,.72],[25.1,28,.71],[22.6,27.5,.72],[20.1,27.1,.72],[28.1,25.9,.72],[25.6,25.5,.72],[23.1,25,.72],[20.6,24.6,.72],[28.5,23.4,.72],[26,23,.72],[26.5,20.5,.72]]},colour:"#9AA6B8",kb:247,fa:.593,deformed:!1,gauge:null},FV1:{id:"FV1",stage:"FV",title:"Fit-corrected",status:"fail",chip:"Over limit",sig:312.6,facts:[["Safety factor","0.54"],["ISO stiffness","14.35 kN/mm"],["Mass in TNTZO","142.2 g"],["Governing region","neck-collar junction"]],note:"Medial border inset and edges rounded so the stem stays inside the cortex. It kept the 1 mm neck\u2013collar fillet from stage 4, which peaked at 313 MPa once that corner counted.",sil:{w:43.1,h:132.7,d:"M8.7,1L7.5,1.5L6.7,2L5.9,2.5L5.2,3L3.8,4.5L3.2,5.2L2.7,6L2.1,7.2L1.8,7.8L1.5,8.8L1.3,9.6L1.1,10.6L1,11.5L1,13.3L1.2,14.4L1.4,15.4L1.7,16.4L2,17.1L2.6,18.1L2.9,18.7L3.6,19.6L4.1,20.3L5,21.2L5.6,21.7L5.8,21.8L6.6,22.3L7.3,22.8L8.2,23.2L9.7,23.8L12.5,22L12.6,22L18.4,31.1L18.7,31.6L18.7,32.1L18.6,32.3L18.4,32.5L13.8,35.4L14.7,36.7L15.7,36.1L15.8,36.1L16.4,38.8L17.6,45.3L17.9,47.4L18.9,53.2L19.5,57L20.1,61.8L20.3,65.4L20.4,72.5L20.4,72.5L20.4,74.2L20.6,76.1L20.6,79.3L20.7,79.3L20.7,85.2L20.8,85.3L20.6,92.9L20.6,92.9L20.3,99.5L19.8,105.8L19,112.4L17.8,119.8L16.9,124.8L16,128.9L16,129.7L16.1,130L16.2,130.2L16.5,130.8L16.9,131.2L17.4,131.5L18,131.7L18.8,131.7L19.3,131.5L19.9,131.2L20.4,130.7L20.7,129.9L21.1,128.4L21.6,126.9L22.9,121.8L23.4,120.3L25.2,113.7L25.6,112.2L27,107.1L42.1,52.7L38.8,27.6L38.7,27.3L38.5,26.6L38.2,26.1L37.9,25.7L37.6,25.4L36.8,24.8L36.1,24.5L34.5,24.1L33.6,22.8L29,25.7L28.5,25.7L28.3,25.6L28,25.4L22.1,16L22.1,15.9L22.5,15.6L24.8,14.2L25,12.9L24.9,11.1L24.7,9.8L24.6,9L24.2,7.9L23.9,7.2L23.4,6.3L22.9,5.4L21.7,3.9L21,3.3L20.2,2.6L19.4,2.1L18.7,1.6L17.3,1Z",p:[[32.1,67,.71],[29.6,66.5,.76],[32.6,64.5,.72],[30.1,64,.77],[27.6,63.6,.68],[33,62,.73],[30.5,61.6,.78],[28,61.1,.7],[35.9,60,.67],[33.5,59.5,.74],[30.9,59.1,.78],[28.5,58.6,.73],[36.4,57.5,.69],[33.9,57,.74],[31.4,56.6,.79],[28.9,56.1,.74],[26.4,55.7,.68],[36.8,55,.69],[34.3,54.5,.74],[31.8,54.1,.79],[29.3,53.6,.76],[26.8,53.2,.7],[37.3,52.5,.7],[34.8,52,.74],[32.3,51.6,.79],[29.8,51.1,.78],[27.3,50.7,.72],[37.7,50,.7],[35.2,49.5,.74],[32.7,49.1,.79],[30.2,48.6,.79],[27.7,48.2,.73],[25.2,47.8,.67],[35.6,47,.74],[33.1,46.6,.79],[30.7,46.1,.8],[28.2,45.7,.75],[25.7,45.3,.69],[36.1,44.5,.73],[33.6,44.1,.78],[31.1,43.6,.81],[28.6,43.2,.76],[26.1,42.8,.7],[36.5,42,.72],[34,41.6,.76],[31.5,41.2,.8],[29.1,40.7,.79],[26.6,40.3,.72],[37,39.5,.71],[34.5,39.1,.74],[32,38.7,.77],[29.5,38.2,.8],[27,37.8,.74],[34.9,36.6,.72],[32.4,36.2,.73],[29.9,35.7,.75],[27.4,35.3,.74],[35.4,34.1,.71],[32.9,33.7,.69],[30.4,33.2,.68],[27.9,32.8,.67],[35.8,31.6,.72],[33.3,31.2,.68],[33.7,28.7,.71]]},colour:"#6F4E3D",kb:384,fa:.593,deformed:!1,gauge:null},FV2:{id:"FV2",stage:"FV",title:"Neck flared",status:"fail",chip:"Over limit",sig:118.09,facts:[["Safety factor","1.44"],["ISO stiffness","17.43 kN/mm"],["Mass in TNTZO","147.8 g"],["Governing region","neck-collar junction"]],note:"Flared neck root with an R2 fillet, replacing the 1 mm neck\u2013collar fillet.",sil:{w:43.1,h:132.7,d:"M8.7,1L7.5,1.5L6.7,2L5.9,2.5L5.2,3L3.8,4.5L3.2,5.2L2.7,6L2.1,7.2L1.8,7.8L1.5,8.8L1.3,9.6L1.1,10.6L1,11.5L1,13.3L1.2,14.4L1.5,15.8L2,17.1L2.6,18.1L3.1,19L3.7,19.8L4.1,20.3L5,21.2L5.6,21.7L5.8,21.8L6.6,22.3L7.3,22.8L8.2,23.2L9.7,23.8L12.5,22L12.6,22L13,22.7L16,31.2L16.2,31.9L16.2,32.2L16.2,32.5L15.9,33L15.5,33.4L13.4,34.7L14.7,36.7L15.7,36.1L15.8,36.1L15.8,36.2L16.7,40.6L18.9,53.2L19.7,58.4L20.1,62.1L20.1,63.2L20.3,65.4L20.4,72.5L20.4,72.5L20.4,74.2L20.6,76.1L20.6,79.3L20.7,79.3L20.7,80.5L20.7,80.5L20.8,86.4L20.7,86.5L20.6,92.9L20.6,92.9L20.3,99.5L19.8,105.5L19,112.4L18.9,113L18,118.7L16.9,124.8L16,128.9L16,129.7L16.1,130L16.2,130.2L16.5,130.8L16.9,131.2L17.4,131.5L18,131.7L18.8,131.7L19.3,131.5L19.9,131.2L20.4,130.7L20.7,129.9L21.1,128.4L21.6,126.9L22.9,121.8L23.4,120.3L25.2,113.7L25.6,112.2L27,107.1L42.1,52.7L38.8,27.6L38.7,27.3L38.5,26.6L38.2,26.1L37.9,25.7L37.6,25.4L36.8,24.8L36.1,24.5L34.5,24.1L33.2,22.1L33,22.2L31.2,23.3L30.8,23.6L30.4,23.7L30.1,23.7L29.5,23.5L29.2,23.2L28.1,22.2L22.4,16.6L22.1,16.1L22.1,15.9L24.8,14.2L25,12.9L25,11.6L24.9,10.8L24.7,9.8L24.6,9L24.2,7.9L23.9,7.2L23.4,6.3L22.9,5.4L22.3,4.6L21.7,3.9L21,3.3L20.2,2.6L19.4,2.1L18.7,1.6L17.3,1Z",p:[[32.1,67,.71],[29.6,66.5,.76],[32.6,64.5,.72],[30.1,64,.77],[27.6,63.6,.68],[33,62,.73],[30.5,61.6,.78],[28,61.1,.7],[35.9,60,.67],[33.5,59.5,.74],[30.9,59.1,.78],[28.5,58.6,.73],[36.4,57.5,.69],[33.9,57,.74],[31.4,56.6,.79],[28.9,56.1,.74],[26.4,55.7,.68],[36.8,55,.69],[34.3,54.5,.74],[31.8,54.1,.79],[29.3,53.6,.76],[26.8,53.2,.7],[37.3,52.5,.7],[34.8,52,.74],[32.3,51.6,.79],[29.8,51.1,.78],[27.3,50.7,.72],[37.7,50,.7],[35.2,49.5,.74],[32.7,49.1,.79],[30.2,48.6,.79],[27.7,48.2,.73],[25.2,47.8,.67],[35.6,47,.74],[33.1,46.6,.79],[30.7,46.1,.8],[28.2,45.7,.75],[25.7,45.3,.69],[36.1,44.5,.73],[33.6,44.1,.78],[31.1,43.6,.81],[28.6,43.2,.76],[26.1,42.8,.7],[36.5,42,.72],[34,41.6,.76],[31.5,41.2,.8],[29.1,40.7,.79],[26.6,40.3,.72],[37,39.5,.71],[34.5,39.1,.74],[32,38.7,.77],[29.5,38.2,.8],[27,37.8,.74],[34.9,36.6,.72],[32.4,36.2,.73],[29.9,35.7,.75],[27.4,35.3,.74],[35.4,34.1,.71],[32.9,33.7,.69],[30.4,33.2,.68],[27.9,32.8,.67],[35.8,31.6,.72],[33.3,31.2,.68],[33.7,28.7,.71]]},colour:"#6F4E3D",kb:392,fa:.593,deformed:!1,gauge:null},FV3:{id:"FV3",stage:"FV",title:"Calcar collar",status:"fail",chip:"Over limit",sig:115.8,facts:[["Safety factor","1.47"],["ISO stiffness","17.44 kN/mm"],["Mass in TNTZO","149.9 g"],["Governing region","neck-collar junction"]],note:"A patient-matched 3 mm collar on the calcar.",sil:{w:43.1,h:132.7,d:"M8.7,1L7.5,1.5L6.7,2L5.9,2.5L5.2,3L3.8,4.5L3.2,5.2L2.7,6L2.1,7.2L1.8,7.8L1.5,8.8L1.3,9.6L1.1,10.6L1,11.5L1,13.3L1.2,14.4L1.5,15.8L2,17.1L2.6,18.1L3.1,19L3.7,19.8L4.1,20.3L5,21.2L5.6,21.7L5.8,21.8L6.6,22.3L7.3,22.8L8.2,23.2L9.7,23.8L12.5,22L12.6,22L13,22.7L14.8,27.7L16,31.1L16.2,31.9L16.2,32.3L16.2,32.5L15.9,33L15.5,33.4L13.8,34.4L13.6,34.6L13.5,34.8L13.5,35.3L13.5,35.4L14.4,36.9L14.5,36.9L15.7,36.1L15.8,36.1L15.8,36.2L16.7,40.4L18.9,53.2L19.7,58.4L20.1,62.1L20.1,63.2L20.3,65.4L20.4,72.5L20.4,72.5L20.4,74.2L20.6,76.1L20.6,79.3L20.7,79.3L20.7,80.5L20.7,80.5L20.8,86.4L20.7,86.5L20.6,92.9L20.6,92.9L20.3,99.5L19.8,105.5L19,112.4L18.9,113L18,118.7L16.9,124.8L16,128.9L16,129.7L16.1,130L16.2,130.2L16.5,130.8L16.9,131.2L17.4,131.5L18,131.7L18.8,131.7L19.3,131.5L19.9,131.2L20.4,130.7L20.7,129.9L21.1,128.4L21.6,126.9L22.9,121.8L23.4,120.3L25.2,113.7L25.6,112.2L27,107.1L42.1,52.7L38.7,27.3L38.5,26.6L38.1,26.1L37.8,25.5L37.2,25L36.8,24.8L36.1,24.5L34.6,24.1L34.6,24L39.1,21.2L39.1,21.1L38.4,20.1L38.2,19.8L37.9,19.5L37.8,19.5L37.3,19.5L31.1,23.4L30.8,23.6L30.4,23.7L29.9,23.6L29.5,23.5L29.2,23.2L22.4,16.6L22.1,16L22.1,15.9L22.5,15.6L24.8,14.2L25,12.9L25,11.6L24.9,10.8L24.6,9.3L24.2,7.9L23.9,7.2L23.4,6.3L22.9,5.4L21.7,3.9L21,3.3L20.2,2.6L19.7,2.2L18.7,1.6L17.3,1Z",p:[[32.1,67,.71],[29.6,66.5,.76],[32.6,64.5,.72],[30.1,64,.77],[27.6,63.6,.68],[33,62,.73],[30.5,61.6,.78],[28,61.1,.7],[35.9,60,.67],[33.5,59.5,.74],[30.9,59.1,.78],[28.5,58.6,.73],[36.4,57.5,.69],[33.9,57,.74],[31.4,56.6,.79],[28.9,56.1,.74],[26.4,55.7,.68],[36.8,55,.69],[34.3,54.5,.74],[31.8,54.1,.79],[29.3,53.6,.76],[26.8,53.2,.7],[37.3,52.5,.7],[34.8,52,.74],[32.3,51.6,.79],[29.8,51.1,.78],[27.3,50.7,.72],[37.7,50,.7],[35.2,49.5,.74],[32.7,49.1,.79],[30.2,48.6,.79],[27.7,48.2,.73],[25.2,47.8,.67],[35.6,47,.74],[33.1,46.6,.79],[30.7,46.1,.8],[28.2,45.7,.75],[25.7,45.3,.69],[36.1,44.5,.73],[33.6,44.1,.78],[31.1,43.6,.81],[28.6,43.2,.76],[26.1,42.8,.7],[36.5,42,.72],[34,41.6,.76],[31.5,41.2,.8],[29.1,40.7,.79],[26.6,40.3,.72],[37,39.5,.71],[34.5,39.1,.74],[32,38.7,.77],[29.5,38.2,.8],[27,37.8,.74],[34.9,36.6,.72],[32.4,36.2,.73],[29.9,35.7,.75],[27.4,35.3,.74],[35.4,34.1,.71],[32.9,33.7,.69],[30.4,33.2,.68],[27.9,32.8,.67],[35.8,31.6,.72],[33.3,31.2,.68],[33.7,28.7,.71]]},colour:"#6F4E3D",kb:401,fa:.593,deformed:!1,gauge:null},FV4:{id:"FV4",stage:"FV",title:"Distal relief",status:"fail",chip:"Over limit",sig:116.98,facts:[["Safety factor","1.45"],["ISO stiffness","17.44 kN/mm"],["Mass in TNTZO","143.8 g"],["Governing region","neck-collar junction"]],note:"Distal third freed in the canal.",sil:{w:43.1,h:132.7,d:"M8.7,1L7.5,1.5L6.7,2L5.9,2.5L5.2,3L3.8,4.5L3.2,5.2L2.7,6L2.1,7.2L1.8,7.8L1.5,8.8L1.3,9.6L1.1,10.6L1,11.5L1,13.3L1.2,14.4L1.5,15.8L2,17.1L2.6,18.1L3.1,19L3.7,19.8L4.1,20.3L5,21.2L5.6,21.7L5.8,21.8L6.6,22.3L7.3,22.8L8.2,23.2L9.7,23.8L12.5,22L12.6,22L13,22.7L14.8,27.7L16,31.1L16.2,31.9L16.2,32.3L16.2,32.5L15.9,33L15.5,33.4L13.8,34.4L13.6,34.6L13.5,34.8L13.5,35.3L13.5,35.4L14.4,36.9L14.5,36.9L15.7,36.1L15.8,36.1L15.8,36.2L16.6,39.6L17.5,44.7L18.9,53.2L19.7,58.4L20.1,62.1L20.2,64.9L20.3,65.5L20.4,72.5L20.4,72.5L20.4,74.2L20.6,76.1L20.7,80.7L20.7,80.7L20.7,88.1L20.7,88.1L20.6,92.7L20.6,92.8L20.6,93.5L20.6,93.5L20.3,99L19.8,105.2L19,112.1L18.1,117.9L18.1,118.3L17.2,123.1L16.5,126.9L16,128.9L16,129.7L16.1,130L16.3,130.6L16.5,130.8L17,131.3L17.5,131.6L18,131.7L18.8,131.7L19.3,131.5L19.9,131.2L20.4,130.7L20.6,130.2L20.7,129.9L22.3,124.1L22.4,123.8L22.6,123L22.7,122L23.1,117.7L23.6,115L24.6,110.6L25.9,105.7L27.3,100.7L28.6,97.1L29.5,94.9L30.5,92.7L31.4,90.8L31.9,89.5L32.2,88.5L42.1,52.7L38.7,27.3L38.5,26.6L38.2,26.1L37.8,25.5L37.2,25.1L36.8,24.8L36.4,24.6L35.7,24.4L34.6,24.1L34.6,24L39.1,21.2L39.1,21.1L38.4,20.1L38.2,19.8L37.9,19.5L37.8,19.5L37.3,19.5L31.1,23.4L30.8,23.6L30.4,23.7L29.9,23.6L29.5,23.5L29.2,23.2L22.4,16.6L22.1,16L22.1,15.9L22.5,15.6L24.8,14.2L25,12.9L25,11.6L24.9,10.8L24.6,9.3L24.2,7.9L23.9,7.2L23.4,6.3L22.9,5.4L21.7,3.9L21,3.3L20.2,2.6L19.7,2.2L18.7,1.6L17.3,1Z",p:[[32.1,67,.71],[29.6,66.5,.76],[32.6,64.5,.72],[30.1,64,.77],[27.6,63.6,.68],[33,62,.73],[30.5,61.6,.78],[28,61.1,.7],[35.9,60,.67],[33.5,59.5,.74],[30.9,59.1,.78],[28.5,58.6,.73],[36.4,57.5,.69],[33.9,57,.74],[31.4,56.6,.79],[28.9,56.1,.74],[26.4,55.7,.68],[36.8,55,.69],[34.3,54.5,.74],[31.8,54.1,.79],[29.3,53.6,.76],[26.8,53.2,.7],[37.3,52.5,.7],[34.8,52,.74],[32.3,51.6,.79],[29.8,51.1,.78],[27.3,50.7,.72],[37.7,50,.7],[35.2,49.5,.74],[32.7,49.1,.79],[30.2,48.6,.79],[27.7,48.2,.73],[25.2,47.8,.67],[35.6,47,.74],[33.1,46.6,.79],[30.7,46.1,.8],[28.2,45.7,.75],[25.7,45.3,.69],[36.1,44.5,.73],[33.6,44.1,.78],[31.1,43.6,.81],[28.6,43.2,.76],[26.1,42.8,.7],[36.5,42,.72],[34,41.6,.76],[31.5,41.2,.8],[29.1,40.7,.79],[26.6,40.3,.72],[37,39.5,.71],[34.5,39.1,.74],[32,38.7,.77],[29.5,38.2,.8],[27,37.8,.74],[34.9,36.6,.72],[32.4,36.2,.73],[29.9,35.7,.75],[27.4,35.3,.74],[35.4,34.1,.71],[32.9,33.7,.69],[30.4,33.2,.68],[27.9,32.8,.67],[35.8,31.6,.72],[33.3,31.2,.68],[33.7,28.7,.71]]},colour:"#6F4E3D",kb:407,fa:.593,deformed:!1,gauge:null},FV5:{id:"FV5",stage:"FV",title:"Offset restored",status:"fail",chip:"Over limit",sig:117.36,facts:[["Safety factor","1.45"],["ISO stiffness","15.38 kN/mm"],["Mass in TNTZO","150.9 g"],["Governing region","lattice zone"]],note:"Neck 4.6 mm longer, back to the native head centre.",sil:{w:45,h:135.8,d:"M8.7,1L7.5,1.5L6.7,2L5.9,2.5L5.2,3L3.8,4.5L3.2,5.2L2.7,6L2.1,7.2L1.8,7.8L1.5,8.8L1.3,9.6L1.1,10.6L1,11.5L1,13.3L1.2,14.4L1.5,15.8L2,17.1L2.6,18.1L3.1,19L3.7,19.8L4.1,20.3L5,21.2L5.6,21.7L5.8,21.8L6.6,22.3L7.3,22.8L8.2,23.2L9.7,23.8L12.5,22L12.6,22L13,22.7L17.6,35.2L17.7,35.5L17.6,35.8L17.5,36.1L17.3,36.5L17,36.8L15.8,37.5L15.6,37.7L15.5,38L15.5,38.4L15.6,38.6L16.4,40L16.5,40L17.6,39.2L17.8,39.2L18.4,42.2L20.5,53.7L21.6,61.1L22.1,65.3L22.2,68.2L22.3,68.8L22.3,69.5L22.3,69.5L22.3,76.1L22.4,76.2L22.5,78.8L22.6,80.8L22.7,85.9L22.7,86L22.7,92.7L22.7,92.7L22.4,100.9L21.8,107.9L21,114.9L20,121.7L19.1,126.7L18,132.3L18,132.8L18.1,133.2L18.4,133.8L18.6,134.1L19.1,134.4L19.7,134.7L20,134.8L20.7,134.8L21.4,134.6L21.9,134.3L22.3,133.9L22.6,133.4L22.7,133.1L24.3,127.1L24.5,126.3L24.7,125L25.1,120.7L25.5,118.2L25.8,116.9L25.9,116.8L26.6,113.7L27.3,110.8L29.2,104.1L30.4,100.5L31.6,97.7L32.2,96.4L32.4,95.9L32.5,95.7L33.3,94.2L33.8,92.7L34.1,91.8L43.5,57.8L43.9,56.3L44,55.9L44,55.6L40.8,31.7L40.8,31.2L40.6,30.3L40.4,29.7L39.9,28.8L39.6,28.5L39.2,28.2L38.4,27.7L37.7,27.5L36.6,27.2L36.6,27.1L36.8,27L41.1,24.3L41.1,24.2L40.3,23L40,22.7L39.8,22.6L39.2,22.6L33.4,26.3L33.2,26.4L32.7,26.4L32.3,26.3L31.9,26.1L22.4,16.6L22.1,16L22.1,15.9L22.5,15.6L24.8,14.2L25,12.9L25,11.6L24.9,10.8L24.6,9.3L24.2,7.9L23.9,7.2L23.4,6.3L22.9,5.4L21.7,3.9L21,3.3L20.2,2.6L19.7,2.2L18.7,1.6L17.3,1Z",p:[[32,67.2,.77],[29.6,66.7,.68],[35,65.1,.73],[32.5,64.7,.78],[30,64.2,.71],[37.9,63,.67],[35.4,62.6,.74],[32.9,62.2,.78],[30.4,61.7,.73],[38.4,60.5,.68],[35.9,60.1,.74],[33.4,59.7,.79],[30.9,59.2,.74],[28.4,58.8,.68],[38.8,58.1,.69],[36.3,57.6,.74],[33.8,57.2,.79],[31.3,56.7,.76],[28.8,56.3,.7],[39.2,55.6,.7],[36.8,55.1,.74],[34.2,54.7,.79],[31.8,54.2,.78],[29.3,53.8,.72],[39.7,53.1,.7],[37.2,52.6,.74],[34.7,52.2,.79],[32.2,51.8,.79],[29.7,51.3,.73],[27.2,50.9,.67],[37.6,50.1,.74],[35.1,49.7,.79],[32.6,49.2,.8],[30.1,48.8,.75],[27.6,48.4,.69],[38.1,47.6,.73],[35.6,47.2,.78],[33.1,46.8,.81],[30.6,46.3,.76],[28.1,45.9,.7],[38.5,45.1,.71],[36,44.7,.76],[33.5,44.3,.8],[31,43.8,.79],[28.5,43.4,.72],[39,42.6,.71],[36.5,42.2,.74],[34,41.8,.77],[31.5,41.3,.8],[29,40.9,.74],[36.9,39.7,.72],[34.4,39.3,.73],[31.9,38.8,.74],[29.4,38.4,.74],[37.3,37.2,.71],[34.8,36.8,.69],[32.3,36.3,.68],[29.9,35.9,.68],[37.8,34.7,.72],[35.3,34.3,.68],[35.7,31.8,.71]]},colour:"#6F4E3D",kb:392,fa:.593,deformed:!1,gauge:null},FV6:{id:"FV6",stage:"FV",title:"Root relief",status:"sel",chip:"Final design",sig:102.49,facts:[["Safety factor","1.66"],["ISO stiffness","15.69 kN/mm"],["Mass in TNTZO","151.9 g"],["Governing region","body 2 to 10 mm above potting"]],note:"Neck root widened to 24 mm. The final design.",sil:{w:37.8,h:127.6,d:"M10.4,1L1,7L5.6,14.3L6,14.9L6.6,16.5L7.9,20.2L8.9,23.8L9.4,25.7L9.8,27.5L9.8,27.9L9.6,28.3L9.4,28.7L9.1,29L8.2,29.5L8,29.8L8,30.1L9.2,31.8L10.4,31L10.5,31.1L11.3,34.6L12.2,40L13.6,48.3L14.4,53.3L14.8,57L14.9,60.5L15,60.5L15,61.4L15,61.4L15,66.4L15.1,66.5L15.1,69.3L15.1,69.3L15.2,71.3L15.3,72.7L15.4,77.7L15.4,77.7L15.4,81.7L15.4,81.7L15.4,84.1L15.4,84.1L15.3,87.9L15.3,87.9L15.2,89.5L15,93.3L14.9,94.9L14.4,100.8L13.5,108.2L13.4,108.4L12.9,112L12,117.1L11.4,120.3L10.7,123.5L10.6,124.1L10.7,124.6L10.8,125.2L11.1,125.7L11.4,126L11.8,126.3L12.3,126.5L12.7,126.6L13.1,126.6L13.7,126.5L14.5,126.2L15.1,125.6L15.4,124.9L16.9,119.2L17.2,118.2L17.4,116.7L17.4,116.4L17.8,112.7L18.2,110.2L18.8,107.3L20,102.7L21.8,96.2L23,92.6L23.9,90.3L26,86L26.7,83.8L36.8,47.6L36.6,46.9L36.6,46.4L36.5,45.6L36.5,45.2L36.3,44.4L36.3,43.9L36.2,43.2L36.1,42.7L35.9,41.5L35.9,41L33.4,22.2L33.2,21.6L32.9,21L32.5,20.5L31.9,20L31.5,19.7L30.8,19.4L30.1,19.2L29.4,19.1L29.4,19L29.4,18.9L29.5,18.8L33.2,16.5L33.8,16.1L33.8,16.1L32.7,14.4L32.5,14.2L32.4,14.2L31.9,14.4L26.7,17.7L26.3,17.8L26,17.8L25.7,17.8L25.2,17.5L23.8,16.5L22.3,15.3L19.8,13L17.8,11.2L15.4,8.7Z",p:[[24.8,59,.77],[22.3,58.5,.68],[27.7,56.9,.73],[25.2,56.5,.78],[22.7,56,.7],[30.6,54.9,.67],[28.1,54.4,.74],[25.6,54,.78],[23.1,53.5,.73],[31.1,52.4,.69],[28.6,51.9,.74],[26.1,51.5,.78],[23.6,51,.74],[21.1,50.6,.68],[31.5,49.9,.69],[29,49.4,.74],[26.5,49,.79],[24,48.6,.76],[21.5,48.1,.7],[32,47.4,.69],[29.5,46.9,.74],[27,46.5,.79],[24.5,46.1,.78],[22,45.6,.72],[32.4,44.9,.7],[29.9,44.5,.74],[27.4,44,.79],[24.9,43.6,.79],[22.4,43.1,.73],[19.9,42.7,.67],[30.4,42,.74],[27.9,41.5,.79],[25.4,41.1,.8],[22.9,40.6,.75],[20.4,40.2,.69],[30.8,39.5,.73],[28.3,39,.78],[25.8,38.6,.81],[23.3,38.1,.76],[20.8,37.7,.7],[31.2,37,.72],[28.7,36.5,.76],[26.2,36.1,.8],[23.7,35.6,.79],[21.2,35.2,.72],[31.7,34.5,.71],[29.2,34,.74],[26.7,33.6,.77],[24.2,33.1,.8],[21.7,32.7,.74],[29.6,31.5,.72],[27.1,31.1,.73],[24.6,30.6,.74],[22.1,30.2,.74],[30.1,29,.71],[27.6,28.6,.69],[25.1,28.2,.68],[22.6,27.7,.67],[30.5,26.6,.72],[28,26.1,.68],[28.4,23.6,.71]]},colour:"#35A262",kb:347,fa:.593,deformed:!1,gauge:null}},femur:{levels:[-175.71,-150.71,-111.71,-72.71,-34.51],xc:29.13,zc:.006,anchors:{1:[59,-53.6,.01],2:[52.5,-92.2,.01],3:[48.1,-131.2,.01],5:[9,-131.2,.01],6:[12.4,-92.2,.01],7:[8.4,-53.6,.01],4:[6,-163.2,.01]},bounds:[[8.3,-190.8,-23.7],[66.7,-.3,16.4]],rot:7.5,zones:["lateral proximal","lateral middle","lateral distal","below the tip","medial distal","medial middle","calcar"],ssi:{tntzo:[25.8,2.8,1.6,2.1,1.2,13.9,48.4],ti64:[43.9,8.8,1.7,2.1,1.2,18.1,65.2]},mean:{tntzo:"13.7",ti64:"20.2"},ser7:{tntzo:"0.27",ti64:"0.12"},collar:{tntzo:"33.4",ti64:"22.4"},peak:{tntzo:"87",ti64:"84"},solid7:51.1,graded_uniform:.16},final:{mass:"151.9",lighter:"9.0",softer:"6.4"}};var Le=(i,e=document)=>e.querySelector(i),za=(i,e=document)=>Array.from(e.querySelectorAll(i)),ft=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),an=(i,e,t)=>Math.min(t,Math.max(e,i)),Fm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,on=ns.variants,rc=ns.stages,tt=ns.femur,ec=ns.limit,Wa=i=>rc.find(e=>e.code===i),Om=i=>i.toLowerCase(),Bm=i=>{let e=(i||"").replace(/^#/,"").toLowerCase();return e==="femur"?"femur":Object.keys(on).find(t=>t.toLowerCase()===e)||null},ve={mode:"evo",vid:"FV6",sliceDir:"z",slice:0,finish:"print",alloy:"tntzo",cut:42,zones:!0,canc:!0,spin:!1},Gt=new Map,jn=new Map;window.__TNTZO_MESH=(i,e)=>{let t=jn.get(i);t&&(jn.delete(i),t.resolve(e))};function tc(i){let e=atob(i),t=e.length,n=new Uint8Array(t);for(let s=0;s<t;s++)n[s]=e.charCodeAt(s);return n}function zm(i,e,t){let n=e.length/3,s=i.length/3,r=Math.cos(t*Math.PI/180),o=new Float32Array(n*3),a=new Float32Array(n*3);for(let g=0;g<n;g++){let _=e[3*g]*3,p=e[3*g+1]*3,u=e[3*g+2]*3,S=i[p]-i[_],v=i[p+1]-i[_+1],T=i[p+2]-i[_+2],C=i[u]-i[_],A=i[u+1]-i[_+1],w=i[u+2]-i[_+2],Y=v*w-T*A,L=T*C-S*w,b=S*A-v*C,V=Math.hypot(Y,L,b)||1;o[3*g]=Y,o[3*g+1]=L,o[3*g+2]=b,a[3*g]=Y/V,a[3*g+1]=L/V,a[3*g+2]=b/V}let l=new Uint32Array(s+1);for(let g=0;g<e.length;g++)l[e[g]+1]++;for(let g=0;g<s;g++)l[g+1]+=l[g];let c=l.slice(0,s),h=new Uint32Array(e.length);for(let g=0;g<n;g++)for(let _=0;_<3;_++)h[c[e[3*g+_]]++]=g;let d=new Float32Array(n*9),f=new Float32Array(n*9);for(let g=0;g<n;g++){let _=a[3*g],p=a[3*g+1],u=a[3*g+2];for(let S=0;S<3;S++){let v=e[3*g+S],T=0,C=0,A=0;for(let L=l[v];L<l[v+1];L++){let b=h[L]*3;a[b]*_+a[b+1]*p+a[b+2]*u>=r&&(T+=o[b],C+=o[b+1],A+=o[b+2])}let w=Math.hypot(T,C,A)||1,Y=9*g+3*S;f[Y]=T/w,f[Y+1]=C/w,f[Y+2]=A/w,d[Y]=i[3*v],d[Y+1]=i[3*v+1],d[Y+2]=i[3*v+2]}}let m=new Vt;return m.setAttribute("position",new At(d,3)),m.setAttribute("normal",new At(f,3)),m.computeBoundingSphere(),m}function km(i){let e=new Uint16Array(tc(i.v).buffer),t=tc(i.i).buffer,n=i.i32?new Uint32Array(t):new Uint16Array(t),s=i.s/65535,r=new Float32Array(e.length);for(let a=0;a<e.length;a+=3)r[a]=i.min[0]+e[a]*s,r[a+1]=i.min[1]+e[a+1]*s,r[a+2]=i.min[2]+e[a+2]*s;let o={};for(let[a,l,c]of i.groups)o[a]=zm(r,n.subarray(l,l+c),a==="cortical"||a==="cancellous"?62:40);return o}function ka(i){if(Gt.has(i)){let o=Gt.get(i);return Gt.delete(i),Gt.set(i,o),Promise.resolve(o)}if(jn.has(i))return jn.get(i).promise;let e,t,n=new Promise((o,a)=>{e=o,t=a});jn.set(i,{promise:n,resolve:e,reject:t});let s=document.createElement("script");s.src="m/"+i.toLowerCase()+".js",s.async=!0;let r=()=>{jn.has(i)&&(jn.delete(i),t(new Error("Model file did not load"))),s.remove()};return s.onerror=r,s.onload=()=>setTimeout(r,0),document.head.appendChild(s),n.then(o=>{let a=km(o);if(Gt.set(i,a),Gt.size>9){for(let l of Gt.keys())if(l!=="femur"&&l!=="FV6"&&l!==i){Object.values(Gt.get(l)).forEach(c=>c.dispose()),Gt.delete(l);break}}return a})}var Va=new Map,Qn=new Map;window.__TNTZO_IMG=(i,e)=>{let t=Qn.get(i);t&&(Qn.delete(i),Va.set(i,e),t.resolve(e))};function Ha(i,e){if(Va.has(i))return Promise.resolve(Va.get(i));if(Qn.has(i))return Qn.get(i).promise;let t,n,s=new Promise((a,l)=>{t=a,n=l});Qn.set(i,{promise:s,resolve:t,reject:n});let r=document.createElement("script");r.src=e||"m/fea_"+i.toLowerCase()+".js",r.async=!0;let o=()=>{Qn.has(i)&&(Qn.delete(i),n(new Error("Image did not load"))),r.remove()};return r.onerror=o,r.onload=()=>setTimeout(o,0),document.head.appendChild(r),s}var fr={w:3508,h:2481},Ht=0,hr=null,is=null,It=null,rs=()=>({dlg:Le("#drw-dlg"),body:Le("#drw-body"),img:Le("#drw-full")});function yn(){let{body:i}=rs();return Math.max(120,Math.min(i.clientWidth-16,(i.clientHeight-16)*fr.w/fr.h))}function Ga(){return Math.max(yn()*1.5,2800)}function Ft(i,e,t){let{body:n,img:s}=rs(),r=yn();i=an(i,r,Ga());let o=n.getBoundingClientRect(),a=s.getBoundingClientRect();e==null&&(e=n.clientWidth/2,t=n.clientHeight/2);let l=a.width?an((o.left+e-a.left)/a.width,0,1):.5,c=a.height?an((o.top+t-a.top)/a.height,0,1):.5,h=i*fr.h/fr.w;s.style.width=i.toFixed(1)+"px",s.style.height=h.toFixed(1)+"px",Ht=i;let d=s.getBoundingClientRect();n.scrollLeft+=d.left+l*i-(o.left+e),n.scrollTop+=d.top+c*h-(o.top+t);let f=i>r+1;n.classList.toggle("zoomed",f),Le("#drw-in").disabled=i>=Ga()-1,Le("#drw-out").disabled=!f,Le("#drw-fit").disabled=!f}function Vm(i){let{dlg:e,body:t,img:n}=rs();hr=i||document.activeElement;try{e.showModal()}catch{e.setAttribute("open","")}document.body.classList.add("dlg-open"),requestAnimationFrame(()=>{Ft(yn());try{t.focus({preventScroll:!0})}catch{}}),n.getAttribute("src")||Ha("drw-full","m/drw_fv6_full.js").then(s=>{n.src=s,n.hidden=!1;let r=Le("#drw-load");r&&r.remove(),requestAnimationFrame(()=>Ft(Ht||yn()))}).catch(()=>{let s=Le("#drw-load");s&&(s.textContent="The drawing did not load. Close this and try again.")})}function Hm(){let{dlg:i}=rs();if(i.open)try{i.close()}catch{i.removeAttribute("open")}}function Gm(){let{dlg:i,body:e,img:t}=rs();if(!i)return;document.addEventListener("click",o=>{let a=o.target.closest("[data-open-drawing]");a&&(o.preventDefault(),Vm(a))}),i.addEventListener("close",()=>{if(i.removeAttribute("open"),document.body.classList.remove("dlg-open"),hr&&hr.isConnected)try{hr.focus({preventScroll:!0})}catch{}}),Le("#drw-close").addEventListener("click",Hm),Le("#drw-in").addEventListener("click",()=>Ft(Ht*1.6)),Le("#drw-out").addEventListener("click",()=>Ft(Ht/1.6)),Le("#drw-fit").addEventListener("click",()=>Ft(yn())),i.addEventListener("keydown",o=>{o.key==="+"||o.key==="="?(o.preventDefault(),Ft(Ht*1.6)):o.key==="-"||o.key==="_"?(o.preventDefault(),Ft(Ht/1.6)):o.key==="0"&&(o.preventDefault(),Ft(yn()))}),t.addEventListener("click",o=>{if(It&&It.moved)return;let a=e.getBoundingClientRect();Ht>=Ga()-1?Ft(yn()):Ft(Ht*2,o.clientX-a.left,o.clientY-a.top)}),e.addEventListener("pointerdown",o=>{if(o.pointerType!=="mouse"||o.button!==0||!e.classList.contains("zoomed")){It=null;return}It={x:o.clientX,y:o.clientY,sl:e.scrollLeft,st:e.scrollTop,moved:!1,id:o.pointerId}}),e.addEventListener("pointermove",o=>{if(!It||o.pointerId!==It.id)return;let a=o.clientX-It.x,l=o.clientY-It.y;if(!It.moved&&Math.abs(a)+Math.abs(l)>4){It.moved=!0,e.classList.add("dragging");try{e.setPointerCapture(o.pointerId)}catch{}}It.moved&&(e.scrollLeft=It.sl-a,e.scrollTop=It.st-l)});let n=()=>{e.classList.remove("dragging"),setTimeout(()=>{It=null},0)};e.addEventListener("pointerup",n),e.addEventListener("pointercancel",n);let s=o=>Math.hypot(o[0].clientX-o[1].clientX,o[0].clientY-o[1].clientY);e.addEventListener("touchstart",o=>{o.touches.length===2&&(is={d:s(o.touches),w:Ht})},{passive:!0}),e.addEventListener("touchmove",o=>{if(!is||o.touches.length!==2)return;o.preventDefault();let a=e.getBoundingClientRect(),l=o.touches;Ft(is.w*s(l)/is.d,(l[0].clientX+l[1].clientX)/2-a.left,(l[0].clientY+l[1].clientY)/2-a.top)},{passive:!1}),e.addEventListener("touchend",o=>{o.touches.length<2&&(is=null)},{passive:!0}),e.addEventListener("wheel",o=>{if(!o.ctrlKey)return;o.preventDefault();let a=e.getBoundingClientRect();Ft(Ht*Math.exp(-o.deltaY*.01),o.clientX-a.left,o.clientY-a.top)},{passive:!1}),window.addEventListener("resize",()=>{if(i.open){let o=Ht<=yn()+2;Ft(o?yn():Ht)}});let r=document.documentElement.dataset.drawing;if(r){let o=Le("#drw-pdf");o.href=r,o.hidden=!1}}var pe=null,In=new Vt,pr=1e5;function ac(i){let e=[[0,"#EFE8D8"],[12,"#F4D49A"],[28,"#F0A860"],[46,"#DE6E3C"],[64,"#B9381F"],[80,"#8E2418"]],t=0;for(;t<e.length-2&&i>e[t+1][0];)t++;let n=an((i-e[t][0])/(e[t+1][0]-e[t][0]),0,1);return new ze(e[t][1]).lerp(new ze(e[t+1][1]),n)}function nc(i){return"#"+ac(i).getHexString(ct)}function Wm(){let i=Le("#gl"),e;try{e=new Qi({canvas:i,antialias:!0,alpha:!0,stencil:!0,powerPreference:"high-performance"})}catch{return null}if(!e.getContext())return null;e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.localClippingEnabled=!0,e.setClearColor(0,0);let t=new Ri,n=new Ai(e);t.environment=n.fromScene(new cr,.04).texture,n.dispose();let s=new Mt(30,1,10,6e3);t.add(s);let r=new nr(16777215,2.3);r.position.set(.55,.85,1),s.add(r),s.add(r.target),r.target.position.set(0,0,-1),t.add(new Qs(16777215,12897240,.7));let o=new lr(s,i);o.enableDamping=!0,o.dampingFactor=.09,o.rotateSpeed=.85,o.zoomSpeed=.9,o.autoRotateSpeed=1.6,o.touches={ONE:rn.ROTATE,TWO:rn.DOLLY_PAN};let a=I=>new Zn(I),l=(I,z)=>[[_t,Ol],[tn,Bl]].map(([k,Z])=>{let me=new Pn({depthWrite:!1,depthTest:!1,colorWrite:!1,stencilWrite:!0,stencilFunc:Os,side:k,clippingPlanes:[I],stencilFail:Z,stencilZFail:Z,stencilZPass:Z}),ne=new Ze(In,me);return ne.renderOrder=z,ne}),c={side:Yt,stencilWrite:!0,stencilRef:0,stencilFunc:zl,stencilFail:rr,stencilZFail:rr,stencilZPass:rr},h=(I,z,k)=>{let Z=new Ze(k||new ji(900,900),I);return Z.renderOrder=z+.1,Z.onAfterRender=me=>me.clearStencil(),Z},d=new Pt(new D(0,0,-1),pr),f=a({color:"#888888",roughness:.6,metalness:0,envMapIntensity:.6,clippingPlanes:[d]}),m=a({color:"#888888",roughness:.6,metalness:0,envMapIntensity:.6,clippingPlanes:[d]}),g=new Ze(In,f),_=new Ze(In,m);g.renderOrder=_.renderOrder=10;let p=l(d,1),u=l(d,2),S=a({color:"#666666",roughness:.9,metalness:0,envMapIntensity:.35,...c}),v=a({color:"#666666",roughness:.9,metalness:0,envMapIntensity:.35,...c}),T=h(S,1),C=h(v,2),A=new gn;A.add(g,_,...p,T,...u,C),t.add(A);let w=new Pt(new D(0,0,-1),pr),Y={uZoneOn:{value:1},uLev:{value:new et(tt.levels[0],tt.levels[1],tt.levels[2],tt.levels[3])},uLev4:{value:tt.levels[4]},uXc:{value:tt.xc}};for(let I=1;I<=7;I++)Y["uZ"+I]={value:new ze("#EFE8D8")};let L=I=>{let z=a(I);return z.onBeforeCompile=k=>{Object.assign(k.uniforms,Y),k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vZp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vZp = position;`),k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vZp;
uniform float uZoneOn; uniform vec4 uLev; uniform float uLev4; uniform float uXc;
uniform vec3 uZ1; uniform vec3 uZ2; uniform vec3 uZ3; uniform vec3 uZ4; uniform vec3 uZ5; uniform vec3 uZ6; uniform vec3 uZ7;`).replace("#include <color_fragment>",`#include <color_fragment>
        if (uZoneOn > 0.5 && vZp.y > uLev.x && vZp.y <= uLev4) {
          bool lat = vZp.x > uXc; vec3 zc;
          if (vZp.y <= uLev.y) zc = uZ4;
          else if (vZp.y <= uLev.z) zc = lat ? uZ3 : uZ5;
          else if (vZp.y <= uLev.w) zc = lat ? uZ2 : uZ6;
          else zc = lat ? uZ1 : uZ7;
          float e = min(min(abs(vZp.y - uLev.x), abs(vZp.y - uLev.y)), min(min(abs(vZp.y - uLev.z), abs(vZp.y - uLev.w)), abs(vZp.y - uLev4)));
          diffuseColor.rgb = mix(zc, vec3(0.012, 0.022, 0.05), e < 0.35 ? 0.55 : 0.0);
        }`)},z.customProgramCacheKey=()=>"zones",z},V=L({color:"#EFE8D8",roughness:.82,metalness:0,envMapIntensity:.45,clippingPlanes:[w]}),K=a({color:"#DDBFA2",roughness:.95,metalness:0,envMapIntensity:.3,clippingPlanes:[w]}),ae=new Ze(In,V),P=new Ze(In,K);ae.renderOrder=P.renderOrder=10;let F=l(w,1),W=l(w,2),$=new Vt,X=[tt.bounds[0][0]-12,tt.bounds[0][1]-6,tt.bounds[1][0]+12,tt.bounds[1][1]+6];$.setAttribute("position",new Rt([X[0],X[1],0,X[2],X[1],0,X[2],X[3],0,X[0],X[3],0],3)),$.setAttribute("normal",new Rt([0,0,1,0,0,1,0,0,1,0,0,1],3)),$.setIndex([0,1,2,0,2,3]);let q=h(L({color:"#E6DDC8",roughness:.9,metalness:0,envMapIntensity:.3,...c}),1,$),Q=h(a({color:"#E8CDB2",roughness:.95,metalness:0,envMapIntensity:.25,...c}),2,$),te=a({color:"#AEB4BD",roughness:.4,metalness:.9,envMapIntensity:1}),ue=new Ze(In,te);ue.rotation.z=tt.rot*Math.PI/180,ue.renderOrder=10;let G=new Ze(new js(15,56,36),a({color:"#F1F3F6",roughness:.3,metalness:.82,envMapIntensity:1.5}));G.renderOrder=10;let J=new gn;J.add(ae,P,...F,q,...W,Q,ue,G),J.visible=!1,t.add(J);let de={evo:{c:new D(12,-70,0),hh:90,hw:31,theta:.5,phi:1.36},femur:{c:new D(26,-88,0),hh:108,hw:46,theta:.3,phi:1.42}},_e=!0,fe=null,Te=null,Re=I=>{let z=Math.tan(s.fov*Math.PI/360);return Math.max(I.hh/z,I.hw/(z*s.aspect))*1.1};function we(I,z={}){var ye,Ie;let k=de[I],Z=z.dist||Re(k),me=(ye=z.theta)!=null?ye:k.theta,ne=(Ie=z.phi)!=null?Ie:k.phi,he=new D().setFromSphericalCoords(Z,ne,me).add(k.c);o.minDistance=Re(k)*.22,o.maxDistance=Re(k)*2.6,Te={mode:I,d:Re(k)},z.animate&&!Fm?fe={t0:performance.now(),dur:520,p0:s.position.clone(),p1:he,c0:o.target.clone(),c1:k.c.clone()}:(s.position.copy(he),o.target.copy(k.c),o.update()),_e=!0}function Xe(I){let z=an((I-fe.t0)/fe.dur,0,1),k=z<.5?2*z*z:1-Math.pow(-2*z+2,2)/2,Z=fe.p0.clone().sub(fe.c0),me=fe.p1.clone().sub(fe.c1),ne=new sn().setFromVector3(Z),he=new sn().setFromVector3(me),ye=he.theta-ne.theta;ye>Math.PI&&(ye-=2*Math.PI),ye<-Math.PI&&(ye+=2*Math.PI);let Ie=new sn(ne.radius+(he.radius-ne.radius)*k,ne.phi+(he.phi-ne.phi)*k,ne.theta+ye*k);o.target.lerpVectors(fe.c0,fe.c1,k),s.position.setFromSpherical(Ie).add(o.target),z>=1&&(fe=null),_e=!0}o.addEventListener("change",()=>{_e=!0}),o.addEventListener("start",()=>{fe=null,document.body.classList.add("touched")}),i.tabIndex=0,i.addEventListener("keydown",I=>{let z=new sn().setFromVector3(s.position.clone().sub(o.target)),k=I.key,Z=!0;k==="ArrowLeft"?z.theta-=.15:k==="ArrowRight"?z.theta+=.15:k==="ArrowUp"?z.phi=an(z.phi-.12,.08,Math.PI-.08):k==="ArrowDown"?z.phi=an(z.phi+.12,.08,Math.PI-.08):k==="+"||k==="="?z.radius=an(z.radius*.88,o.minDistance,o.maxDistance):k==="-"||k==="_"?z.radius=an(z.radius/.88,o.minDistance,o.maxDistance):Z=!1,Z&&(I.preventDefault(),fe=null,s.position.setFromSpherical(z).add(o.target),o.update(),_e=!0,document.body.classList.add("touched"))}),i.addEventListener("webglcontextrestored",()=>{_e=!0}),document.addEventListener("visibilitychange",()=>{_e=!0});let N=Le("#stage-view");function at(){let I=Math.max(1,N.clientWidth),z=Math.max(1,N.clientHeight);if(e.setSize(I,z,!1),s.aspect=I/z,s.updateProjectionMatrix(),_e=!0,Te&&!fe){let k=Re(de[Te.mode]),Z=k/Te.d;Math.abs(Z-1)>.04&&(s.position.sub(o.target).multiplyScalar(Z).add(o.target),o.minDistance=k*.22,o.maxDistance=k*2.6,Te.d=k,o.update())}}new ResizeObserver(at).observe(N),at();let Ee=Le("#ztags"),Ce={},xe=new D;for(let I=1;I<=7;I++){let z=document.createElement("div");z.className="ztag",z.innerHTML=`<b>${I}</b><span></span>`,Ee.appendChild(z),Ce[I]=z}let je=Le("#scalebar"),Ue=Le("#scalebar span");function M(){let I=N.clientWidth,z=N.clientHeight;if(ve.mode==="femur")for(let ne=1;ne<=7;ne++){let he=tt.anchors[ne];xe.set(tt.xc,he[1],he[2]).project(s);let ye=xe.x;xe.set(he[0],he[1],he[2]).project(s),Ce[ne].style.transform=`translate(${(xe.x+1)/2*I}px, ${(1-xe.y)/2*z}px) translate(${xe.x<ye?"-100%":"0"}, -50%)`}let k=s.position.distanceTo(o.target),Z=z/2/(Math.tan(s.fov*Math.PI/360)*k),me=[5,10,20,50,100].find(ne=>ne*Z>=44)||100;je.style.width=(me*Z).toFixed(1)+"px",Ue.textContent=me+" mm"}function x(I){requestAnimationFrame(x),fe&&Xe(I),(o.update()||_e)&&(_e=!1,e.render(t,s),M())}return requestAnimationFrame(x),{renderer:e,scene:t,camera:s,controls:o,evo:A,fem:J,stem:g,head:_,stemSt:p,headSt:u,stemCap:T,headCap:C,stemMat:f,headMat:m,stemCapMat:S,headCapMat:v,slicePlane:d,cort:ae,canc:P,cortSt:F,cancSt:W,cortCap:q,cancCap:Q,bonePlane:w,fstem:ue,fstemMat:te,ZU:Y,setView:we,FRAME:de,redraw(){_e=!0}}}function ur(){if(!pe)return;let i=ve.mode==="evo"&&ve.slice>0,e=ve.slice/100,t=pe.head.geometry!==In,n=pe.slicePlane;if(!i)n.normal.set(0,0,-1),n.constant=pr;else if(ve.sliceDir==="z"){let s=pe.stem.geometry.boundingBox||(pe.stem.geometry.computeBoundingBox(),pe.stem.geometry.boundingBox),r=(t?15:s.max.z)+.05,o=(t?-15:s.min.z)-.05,a=r-(r-o)*e;n.normal.set(0,0,-1),n.constant=a;for(let l of[pe.stemCap,pe.headCap])l.rotation.set(0,0,0),l.position.set(12,-70,a)}else{let s=pe.stem.geometry.boundingBox||(pe.stem.geometry.computeBoundingBox(),pe.stem.geometry.boundingBox),r=(t?15:s.max.y)+.05,o=s.min.y-.05,a=r-(r-o)*e;n.normal.set(0,-1,0),n.constant=a;for(let l of[pe.stemCap,pe.headCap])l.rotation.set(-Math.PI/2,0,0),l.position.set(12,a,0)}for(let s of[...pe.stemSt,pe.stemCap])s.visible=i;for(let s of[...pe.headSt,pe.headCap])s.visible=i&&t;pe.redraw()}function oc(){if(!pe)return;let i=on[ve.vid],e=ve.finish==="ti",t=new ze(e?"#AEB4BD":i.colour);pe.stemMat.color.copy(t),pe.stemMat.metalness=e?.9:0,pe.stemMat.roughness=e?.4:.6,pe.stemMat.envMapIntensity=e?1:.6,pe.headMat.color.set(e?"#F1F3F6":i.colour),pe.headMat.metalness=e?.82:0,pe.headMat.roughness=e?.3:.6,pe.headMat.envMapIntensity=e?1.5:.6;let n=new ze("#FFFFFF");pe.stemCapMat.color.copy(t).lerp(n,e?.6:.5),pe.headCapMat.color.copy(pe.headMat.color).lerp(n,e?.6:.5),pe.redraw()}function Ui(){if(!pe)return;let i=tt.ssi[ve.alloy];for(let r=1;r<=7;r++)pe.ZU["uZ"+r].value.copy(ac(i[r-1]));pe.ZU.uZoneOn.value=ve.zones?1:0,pe.fstemMat.color.set(ve.alloy==="tntzo"?"#9FB1CC":"#C9B79C");let e=tt.bounds[1][2]+1,t=tt.bounds[0][2]-1,n=ve.cut>0,s=e-(e-t)*(ve.cut/100);pe.bonePlane.constant=n?s:pr,pe.cortCap.position.z=s,pe.cancCap.position.z=s;for(let r of[...pe.cortSt,pe.cortCap])r.visible=n;pe.canc.visible=ve.canc;for(let r of[...pe.cancSt,pe.cancCap])r.visible=n&&ve.canc;pe.redraw()}function Xa(i,e=""){let t=i.sil,n=t.p.map(s=>`<circle cx="${s[0]}" cy="${s[1]}" r="${s[2]}"></circle>`).join("");return`<svg class="sil ${e}" viewBox="0 0 ${t.w} ${t.h}" aria-hidden="true" style="--c:${i.colour}"><path d="${t.d}" fill-rule="evenodd"></path><g class="pores">${n}</g></svg>`}function Xm(){let i=on[ve.vid].stage;Le("#stages").innerHTML=rc.map(e=>`<button type="button" class="stagebtn" data-stage="${e.code}" aria-pressed="${e.code===i}"><span class="n">${e.no}</span><span class="t">${ft(e.short)}</span></button>`).join("")}function qm(){let i=Wa(on[ve.vid].stage);Le("#thumbs").style.setProperty("--n",i.ids.length),Le("#thumbs").innerHTML=i.ids.map(e=>{let t=on[e],n=e.replace(/^.*-/,"").replace(/^FV/,"FV");return`<button type="button" class="thumb st-${t.status}" data-vid="${e}" aria-pressed="${e===ve.vid}" aria-label="${ft(e+", "+t.title+", "+t.chip)}">${Xa(t)}<span class="lab">${ft(n)}</span><span class="dot" aria-hidden="true"></span></button>`}).join("")}function Ym(){let i=on[ve.vid],e=Wa(i.stage),t=320,n=an(i.sig/t*100,0,100),s=ec/t*100,r=i.sig>ec,o=i.status==="ref"&&!r?"ref":r?"bad":i.status==="sel"?"good":"ok",a=`SOLIDWORKS von Mises stress plot of ${i.id} in the ISO 7206-4 style test, 0 to 150 megapascals`;Le("#vcard").innerHTML=`
    <div class="vhead"><div><div class="vid">${ft(i.id)}</div><h2>${ft(i.title)}</h2></div><span class="chip chip-${i.status}${i.chip==="Kept"?" chip-kept":""}">${ft(i.chip)}</span></div>
    ${i.note?`<p class="vnote">${ft(i.note)}</p>`:""}
    <div class="vgrid">
      <figure class="fea">
        <div class="feaimg" style="aspect-ratio:${i.fa}"><img id="fea-img" alt="${ft(a)}" hidden><span class="feaload" id="fea-load">Loading plot</span></div>
        <figcaption><span class="rampbar" aria-hidden="true"></span><span class="rl"><span>0</span><span>150 MPa</span></span>
          <span>Von Mises above the potting, ISO set-up${i.deformed?"; deformed shape, exaggerated":""}</span></figcaption>
      </figure>
      <div class="vright">
        <div class="gauge tone-${o}" role="img" aria-label="Peak von Mises stress ${i.sig.toFixed(0)} megapascals against a limit of 113">
          <div class="gtop"><span class="glab">Peak stress</span><span class="gval">${i.sig.toFixed(0)}<small> MPa</small></span></div>
          <div class="gtrack"><div class="gbar" style="width:${n.toFixed(1)}%"></div><div class="glim" style="left:${s.toFixed(2)}%"></div></div>
          <div class="gaxis"><span>0</span><span class="glimlab" style="left:${s.toFixed(2)}%">113 limit</span><span>320</span></div>
          <p class="gnote">${ft(i.gauge||e.gauge)}.</p>
        </div>
        <dl class="facts">${i.facts.map(c=>`<div><dt>${ft(c[0])}</dt><dd>${ft(c[1])}</dd></div>`).join("")}</dl>
      </div>
    </div>${i.id==="FV6"?`
    <button type="button" class="drwtile" data-open-drawing aria-haspopup="dialog">
      <span class="drwthumb"><img id="drw-thumb" alt="" hidden><span class="feaload" id="drw-thumb-load">Loading drawing</span></span>
      <span class="drwtext"><span class="glab">Engineering drawing</span><b>PS2-42722-FV6-001</b>
        <span><span class="nb">149.4 mm</span> long, <span class="nb">35.4 mm</span> offset, <span class="nb">137.5\xB0</span> neck-shaft angle</span>
        <span class="drwcta">Open full screen</span></span>
    </button>`:""}`,i.id==="FV6"&&Ha("drw-thumb","m/drw_fv6.js").then(c=>{let h=Le("#drw-thumb");if(!h)return;h.src=c,h.hidden=!1;let d=Le("#drw-thumb-load");d&&d.remove()}).catch(()=>{let c=Le("#drw-thumb-load");c&&(c.textContent="Drawing did not load")});let l=i.id;Ha(l).then(c=>{if(ve.vid!==l||ve.mode!=="evo")return;let h=Le("#fea-img"),d=Le("#fea-load");h&&(h.src=c,h.hidden=!1,d&&d.remove())}).catch(()=>{let c=Le("#fea-load");c&&ve.vid===l&&(c.textContent="Plot did not load")}),Le("#story").innerHTML=`
    <div class="eyebrow"><span class="tagk">Stage ${e.no} of 5</span><span class="fdot" style="background:${e.colour}"></span><span>printed in ${ft(e.filament)}</span></div>
    <h3>${ft(e.title)}</h3>${e.paras.map(c=>`<p>${ft(c)}</p>`).join("")}
    <p class="decision"><span aria-hidden="true">\u2192</span><span>${ft(e.decision)}</span></p>`,Le("#hud-id").textContent=i.id,Le("#hud-title").textContent=i.title}function lc(){let i=ve.alloy,e=i==="tntzo"?"ti64":"tntzo",t={tntzo:"TNTZO",ti64:'<span class="nb">Ti-6Al-4V</span>'};Le("#fstat").innerHTML=`<div class="big" style="color:${nc(tt.ssi[i][6])}">${tt.ssi[i][6].toFixed(0)}%</div>
    <div class="bigsub"><b>Calcar stress shielding with ${t[i]}</b><br>Zone 7, against the intact femur. ${t[e]} gives ${tt.ssi[e][6].toFixed(0)}% on the same FV6 geometry.</div>`,Le("#zrows").innerHTML=tt.zones.map((n,s)=>{let r=tt.ssi.tntzo[s],o=tt.ssi.ti64[s];return`<div class="zrow"><span class="zn">${s+1}</span><span class="zname">${ft(n)}</span>
      <span class="zbars"><span class="zb tn${i==="tntzo"?" on":""}" style="width:${r/70*100}%"></span><span class="zb ti${i==="ti64"?" on":""}" style="width:${o/70*100}%"></span></span>
      <span class="zv"><b class="${i==="tntzo"?"on":""}">${r.toFixed(1)}</b><b class="${i==="ti64"?"on":""}">${o.toFixed(1)}</b></span></div>`}).join(""),Le("#fmean").innerHTML=`Mean of zones 1 to 7: ${ft(String(tt.mean.tntzo))}% with TNTZO, ${ft(String(tt.mean.ti64))}% with <span class="nb">Ti-6Al-4V</span>.`;for(let n=1;n<=7;n++){let s=Le("#ztags").children[n-1];s.querySelector("span").textContent=tt.ssi[i][n-1].toFixed(0)+"%",s.style.setProperty("--zc",nc(tt.ssi[i][n-1]))}Le("#hud-id").textContent="FV6",Le("#hud-title").textContent="In the femur, "+(i==="tntzo"?"TNTZO":"Ti-6Al-4V")}function ei(){Le("#tab-evo").setAttribute("aria-selected",ve.mode==="evo"),Le("#tab-femur").setAttribute("aria-selected",ve.mode==="femur"),Le("#view-evo").hidden=ve.mode!=="evo",Le("#view-femur").hidden=ve.mode!=="femur",Le("#tools-evo").hidden=ve.mode!=="evo",Le("#tools-femur").hidden=ve.mode!=="femur",document.body.dataset.mode=ve.mode,za("[data-slicedir]").forEach(i=>i.setAttribute("aria-pressed",i.dataset.slicedir===ve.sliceDir)),za("[data-finish]").forEach(i=>i.setAttribute("aria-pressed",i.dataset.finish===ve.finish)),za("[data-alloy]").forEach(i=>i.setAttribute("aria-pressed",i.dataset.alloy===ve.alloy)),Le("#btn-spin").setAttribute("aria-pressed",ve.spin),Le("#slice").value=ve.slice,Le("#cut").value=ve.cut,Le("#chk-zones").checked=ve.zones,Le("#chk-canc").checked=ve.canc,Le("#finish-seg").hidden=ve.mode!=="evo"}var Ni=0,qa=()=>Le("#loading");function cc(i){let e=qa();e.innerHTML=`<span class="spin" aria-hidden="true"></span><span>${ft(i)}</span>`,e.hidden=!1}function hc(){qa().hidden=!0}function uc(i){let e=qa();e.hidden=!1,e.innerHTML='<span>That model did not load. Check the connection.</span><button type="button" class="mini" id="retry">Try again</button>',Le("#retry").addEventListener("click",i,{once:!0})}function ss(i,e={}){let t=ve.mode;if(ve.mode="evo",ve.vid=i,Xm(),qm(),Ym(),ei(),e.silent||dc(Om(i)),!pe){Le("#nogl-fig").innerHTML=Xa(on[i],"big");return}pe.fem.visible=!1,pe.evo.visible=!0,(t!=="evo"||e.first)&&pe.setView("evo",{animate:!e.first});let n=++Ni;Gt.has(i)||cc(`Loading ${i} \xB7 ${on[i].kb} KB`),ka(i).then(s=>{if(n!==Ni)return;let r=(o,a)=>o.forEach(l=>{l.geometry=a});r([pe.stem,...pe.stemSt],s.stem),s.stem.boundingBox||s.stem.computeBoundingBox(),r([pe.head,...pe.headSt],s.head||In),pe.head.visible=!!s.head,oc(),ur(),hc()}).catch(()=>{n===Ni&&uc(()=>ss(i,{silent:!0}))})}function Ya(i={}){let e=ve.mode;if(ve.mode="femur",lc(),ei(),i.silent||dc("femur"),!pe){Le("#nogl-fig").innerHTML=Xa(on.FV6,"big");return}pe.evo.visible=!1,pe.fem.visible=!0,(e!=="femur"||i.first)&&pe.setView("femur",{animate:!i.first});let t=++Ni;(!Gt.has("femur")||!Gt.has("FV6"))&&cc("Loading the femur and FV6 \xB7 430 KB"),Promise.all([ka("femur"),ka("FV6")]).then(([n,s])=>{t===Ni&&([pe.cort,...pe.cortSt].forEach(r=>{r.geometry=n.cortical}),[pe.canc,...pe.cancSt].forEach(r=>{r.geometry=n.cancellous}),pe.fstem.geometry=s.stem,Ui(),hc())}).catch(()=>{t===Ni&&uc(()=>Ya({silent:!0}))})}var dr=null;function dc(i){dr="#"+i;try{location.hash!==dr&&location.replace(dr)}catch{}}function ic(i){let e=Bm(location.hash);e==="femur"?Ya({silent:!0,first:i}):ss(e||ve.vid,{silent:!0,first:i})}function sc(){pe=Wm(),pe||document.body.classList.add("nogl"),Gm();let i=document.documentElement.dataset.pdf;if(i){let e=Le("#pdf-link");e&&(e.querySelector("a").href=i,e.hidden=!1)}Le("#panel").addEventListener("click",e=>{let t=e.target.closest("button");if(t)if(t.dataset.stage){let n=Wa(t.dataset.stage);ss(n.ids.find(s=>on[s].status==="sel")||n.ids[0])}else t.dataset.vid?ss(t.dataset.vid):t.id==="tab-evo"?ss(ve.vid):t.id==="tab-femur"&&Ya()}),Le("#stage").addEventListener("click",e=>{let t=e.target.closest("button");t&&(t.dataset.slicedir?(ve.sliceDir=t.dataset.slicedir,ve.slice===0&&(ve.slice=ve.sliceDir==="z"?35:30),ei(),ur(),pe&&pe.setView("evo",ve.sliceDir==="y"?{theta:.55,phi:.78,animate:!0}:{theta:.35,phi:1.3,animate:!0})):t.dataset.finish?(ve.finish=t.dataset.finish,ei(),oc()):t.dataset.alloy?(ve.alloy=t.dataset.alloy,lc(),ei(),Ui()):t.id==="btn-spin"?(ve.spin=!ve.spin,pe&&(pe.controls.autoRotate=ve.spin,pe.redraw()),ei()):t.id==="btn-reset"&&(ve.mode==="evo"?(ve.slice=0,ur()):(ve.cut=42,Ui()),ei(),pe&&pe.setView(ve.mode,{animate:!0})))}),Le("#slice").addEventListener("input",e=>{ve.slice=+e.target.value,ur()}),Le("#cut").addEventListener("input",e=>{ve.cut=+e.target.value,Ui()}),Le("#chk-zones").addEventListener("change",e=>{ve.zones=e.target.checked,document.body.classList.toggle("nozones",!ve.zones),Ui()}),Le("#chk-canc").addEventListener("change",e=>{ve.canc=e.target.checked,Ui()}),window.addEventListener("hashchange",()=>{location.hash!==dr&&ic(!1)}),ic(!0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",sc):sc();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
