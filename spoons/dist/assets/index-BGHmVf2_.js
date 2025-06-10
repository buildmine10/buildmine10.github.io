var Qd=Object.defineProperty;var $c=n=>{throw TypeError(n)};var tp=(n,t,e)=>t in n?Qd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ce=(n,t,e)=>tp(n,typeof t!="symbol"?t+"":t,e),Yc=(n,t,e)=>t.has(n)||$c("Cannot "+e);var mn=(n,t,e)=>(Yc(n,t,"read from private field"),e?e.call(n):t.get(n)),qc=(n,t,e)=>t.has(n)?$c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),jc=(n,t,e,i)=>(Yc(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var tl=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var n=0,t=arguments.length;t--;)n+=arguments[t]*arguments[t];return Math.sqrt(n)});function ep(){var n=new tl(2);return tl!=Float32Array&&(n[0]=0,n[1]=0),n}function Zc(n,t){var e=new tl(2);return e[0]=n,e[1]=t,e}(function(){var n=ep();return function(t,e,i,r,s,o){var a,l;for(e||(e=2),i||(i=0),r?l=Math.min(r*e+i,t.length):l=t.length,a=i;a<l;a+=e)n[0]=t[a],n[1]=t[a+1],s(n,n,o),t[a]=n[0],t[a+1]=n[1];return t}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="177",Mr={ROTATE:0,DOLLY:1,PAN:2},xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},np=0,Kc=1,ip=2,zh=1,rp=2,Kn=3,vi=0,en=1,Jn=2,We=0,Er=1,Jc=2,Qc=3,tu=4,kh=5,Qn=100,sp=101,op=102,ap=103,lp=104,el=200,cp=201,up=202,hp=203,nl=204,il=205,Hh=206,fp=207,Gh=208,dp=209,pp=210,mp=211,gp=212,_p=213,vp=214,rl=0,sl=1,ol=2,Pr=3,al=4,ll=5,cl=6,ul=7,Vh=0,xp=1,yp=2,gi=0,Sp=1,Mp=2,Ep=3,Tp=4,bp=5,Ap=6,wp=7,Wh=300,Cr=301,Dr=302,hl=303,fl=304,Go=306,os=1e3,Gi=1001,dl=1002,$e=1003,Rp=1004,ws=1005,On=1006,aa=1007,Vi=1008,zn=1009,Xh=1010,$h=1011,as=1012,tc=1013,qi=1014,Bn=1015,xi=1016,ec=1017,nc=1018,Ir=1020,Yh=35902,qh=1021,jh=1022,Dn=1023,ls=1026,Lr=1027,ic=1028,rc=1029,Zh=1030,sc=1031,oc=1033,ho=33776,fo=33777,po=33778,mo=33779,pl=35840,ml=35841,gl=35842,_l=35843,vl=36196,xl=37492,yl=37496,Sl=37808,Ml=37809,El=37810,Tl=37811,bl=37812,Al=37813,wl=37814,Rl=37815,Pl=37816,Cl=37817,Dl=37818,Il=37819,Ll=37820,Ul=37821,go=36492,Nl=36494,Fl=36495,Kh=36283,Ol=36284,Bl=36285,zl=36286,Pp=3200,Cp=3201,ac=0,Dp=1,di="",yn="srgb",Ur="srgb-linear",Mo="linear",le="srgb",er=7680,eu=519,Ip=512,Lp=513,Up=514,Jh=515,Np=516,Fp=517,Op=518,Bp=519,nu=35044,iu="300 es",ti=2e3,Eo=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const is=Math.PI/180,cs=180/Math.PI;function kr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function lc(n,t){return(n%t+t)%t}function zp(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function kp(n,t,e){return n!==t?(e-n)/(t-n):0}function rs(n,t,e){return(1-e)*n+e*t}function Hp(n,t,e,i){return rs(n,t,1-Math.exp(-e*i))}function Gp(n,t=1){return t-Math.abs(lc(n,t*2)-t)}function Vp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Wp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Xp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function $p(n,t){return n+Math.random()*(t-n)}function Yp(n){return n*(.5-Math.random())}function qp(n){n!==void 0&&(ru=n);let t=ru+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jp(n){return n*is}function Zp(n){return n*cs}function Kp(n){return(n&n-1)===0&&n!==0}function Jp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tm(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),u=s((t+i)/2),h=o((t+i)/2),c=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*h,l*c,l*f,a*u);break;case"YZY":n.set(l*f,a*h,l*c,a*u);break;case"ZXZ":n.set(l*c,l*f,a*h,a*u);break;case"XZX":n.set(a*h,l*_,l*d,a*u);break;case"YXY":n.set(l*d,a*h,l*_,a*u);break;case"ZYZ":n.set(l*_,l*d,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qh={DEG2RAD:is,RAD2DEG:cs,generateUUID:kr,clamp:Kt,euclideanModulo:lc,mapLinear:zp,inverseLerp:kp,lerp:rs,damp:Hp,pingpong:Gp,smoothstep:Vp,smootherstep:Wp,randInt:Xp,randFloat:$p,randFloatSpread:Yp,seededRandom:qp,degToRad:jp,radToDeg:Zp,isPowerOfTwo:Kp,ceilPowerOfTwo:Jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:tm,normalize:ze,denormalize:gr};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ji{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],u=i[r+1],h=i[r+2],c=i[r+3];const f=s[o+0],d=s[o+1],_=s[o+2],y=s[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=y;return}if(c!==y||l!==f||u!==d||h!==_){let m=1-a;const p=l*f+u*d+h*_+c*y,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const N=Math.sqrt(b),I=Math.atan2(N,p*w);m=Math.sin(m*I)/N,a=Math.sin(a*I)/N}const M=a*w;if(l=l*m+f*M,u=u*m+d*M,h=h*m+_*M,c=c*m+y*M,m===1-a){const N=1/Math.sqrt(l*l+u*u+h*h+c*c);l*=N,u*=N,h*=N,c*=N}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],h=i[r+3],c=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return t[e]=a*_+h*c+l*d-u*f,t[e+1]=l*_+h*f+u*c-a*d,t[e+2]=u*_+h*d+a*f-l*c,t[e+3]=h*_-a*c-l*f-u*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),h=a(r/2),c=a(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*c+u*d*_,this._y=u*d*c-f*h*_,this._z=u*h*_+f*d*c,this._w=u*h*c-f*d*_;break;case"YXZ":this._x=f*h*c+u*d*_,this._y=u*d*c-f*h*_,this._z=u*h*_-f*d*c,this._w=u*h*c+f*d*_;break;case"ZXY":this._x=f*h*c-u*d*_,this._y=u*d*c+f*h*_,this._z=u*h*_+f*d*c,this._w=u*h*c-f*d*_;break;case"ZYX":this._x=f*h*c-u*d*_,this._y=u*d*c+f*h*_,this._z=u*h*_-f*d*c,this._w=u*h*c+f*d*_;break;case"YZX":this._x=f*h*c+u*d*_,this._y=u*d*c+f*h*_,this._z=u*h*_-f*d*c,this._w=u*h*c-f*d*_;break;case"XZY":this._x=f*h*c-u*d*_,this._y=u*d*c-f*h*_,this._z=u*h*_+f*d*c,this._w=u*h*c+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],u=e[2],h=e[6],c=e[10],f=i+a+c;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>c){const d=2*Math.sqrt(1+i-a-c);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>c){const d=2*Math.sqrt(1+a-i-c);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+c-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,u=e._z,h=e._w;return this._x=i*h+o*a+r*u-s*l,this._y=r*h+o*l+s*a-i*u,this._z=s*h+o*u+i*l-r*a,this._w=o*h-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,a),c=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=o*c+this._w*f,this._x=i*c+this._x*f,this._y=r*c+this._y*f,this._z=s*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),h=2*(a*e-s*r),c=2*(s*i-o*e);return this.x=e+l*u+o*c-a*h,this.y=i+l*h+a*u-s*c,this.z=r+l*c+s*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new V,su=new ji;class Yt{constructor(t,e,i,r,s,o,a,l,u){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u)}set(t,e,i,r,s,o,a,l,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],h=i[4],c=i[7],f=i[2],d=i[5],_=i[8],y=r[0],m=r[3],p=r[6],w=r[1],b=r[4],M=r[7],N=r[2],I=r[5],D=r[8];return s[0]=o*y+a*w+l*N,s[3]=o*m+a*b+l*I,s[6]=o*p+a*M+l*D,s[1]=u*y+h*w+c*N,s[4]=u*m+h*b+c*I,s[7]=u*p+h*M+c*D,s[2]=f*y+d*w+_*N,s[5]=f*m+d*b+_*I,s[8]=f*p+d*M+_*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-i*s*h+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],c=h*o-a*u,f=a*l-h*s,d=u*s-o*l,_=e*c+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=c*y,t[1]=(r*u-h*i)*y,t[2]=(a*i-r*o)*y,t[3]=f*y,t[4]=(h*e-r*l)*y,t[5]=(r*s-a*e)*y,t[6]=d*y,t[7]=(i*l-u*e)*y,t[8]=(o*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ca.makeScale(t,e)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Yt;function tf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function To(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function em(){const n=To("canvas");return n.style.display="block",n}const ou={};function Tr(n){n in ou||(ou[n]=!0,console.warn(n))}function nm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function im(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const au=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){const n={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===le&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?Mo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ur]:{primaries:t,whitePoint:i,transfer:Mo,toXYZ:au,fromXYZ:lu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:au,fromXYZ:lu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const ne=sm();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let nr;class om{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{nr===void 0&&(nr=To("canvas")),nr.width=t.width,nr.height=t.height;const r=nr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=nr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=To("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ei(e[i]/255)*255):e[i]=ei(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let am=0;class cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ua(r[o].image)):s.push(ua(r[o]))}else s=ua(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?om.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lm=0;const ha=new V;class Ye extends Ji{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=Gi,r=Gi,s=On,o=Vi,a=Dn,l=zn,u=Ye.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=kr(),this.name="",this.source=new cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Wh;Ye.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,e=0,i=0,r=1){ye.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,u=l[0],h=l[4],c=l[8],f=l[1],d=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(c-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(c+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(u+1)/2,M=(d+1)/2,N=(p+1)/2,I=(h+f)/4,D=(c+y)/4,O=(_+m)/4;return b>M&&b>N?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=I/i,s=D/i):M>N?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=I/r,s=O/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=D/s,r=O/s),this.set(i,r,s,e),this}let w=Math.sqrt((m-_)*(m-_)+(c-y)*(c-y)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(c-y)/w,this.z=(f-h)/w,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends Ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Ye(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new cc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends cm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ef extends Ye{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class um extends Ye{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rs.copy(i.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),Ps.subVectors(this.max,Yr),ir.subVectors(t.a,Yr),rr.subVectors(t.b,Yr),sr.subVectors(t.c,Yr),ri.subVectors(rr,ir),si.subVectors(sr,rr),bi.subVectors(ir,sr);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-bi.z,bi.y,ri.z,0,-ri.x,si.z,0,-si.x,bi.z,0,-bi.x,-ri.y,ri.x,0,-si.y,si.x,0,-bi.y,bi.x,0];return!fa(e,ir,rr,sr,Ps)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,ir,rr,sr,Ps))?!1:(Cs.crossVectors(ri,si),e=[Cs.x,Cs.y,Cs.z],fa(e,ir,rr,sr,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new V,new V,new V,new V,new V,new V,new V,new V],bn=new V,Rs=new ds,ir=new V,rr=new V,sr=new V,ri=new V,si=new V,bi=new V,Yr=new V,Ps=new V,Cs=new V,Ai=new V;function fa(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ai.fromArray(n,s);const a=r.x*Math.abs(Ai.x)+r.y*Math.abs(Ai.y)+r.z*Math.abs(Ai.z),l=t.dot(Ai),u=e.dot(Ai),h=i.dot(Ai);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>a)return!1}return!0}const hm=new ds,qr=new V,da=new V;class Vo{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):hm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(qr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(da)),this.expandByPoint(qr.copy(t.center).sub(da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new V,pa=new V,Ds=new V,oi=new V,ma=new V,Is=new V,ga=new V;class uc{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){pa.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(pa);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=oi.dot(this.direction),l=-oi.dot(Ds),u=oi.lengthSq(),h=Math.abs(1-o*o);let c,f,d,_;if(h>0)if(c=o*l-a,f=o*a-l,_=s*h,c>=0)if(f>=-_)if(f<=_){const y=1/h;c*=y,f*=y,d=c*(c+o*f+2*a)+f*(o*c+f+2*l)+u}else f=s,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*l)+u;else f=-s,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*l)+u;else f<=-_?(c=Math.max(0,-(-o*s+a)),f=c>0?-s:Math.min(Math.max(-s,-l),s),d=-c*c+f*(f+2*l)+u):f<=_?(c=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+u):(c=Math.max(0,-(o*s+a)),f=c>0?s:Math.min(Math.max(-s,-l),s),d=-c*c+f*(f+2*l)+u);else f=o>0?-s:s,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(pa).addScaledVector(Ds,f),d}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const u=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(t.min.z-f.z)*c,l=(t.max.z-f.z)*c):(a=(t.max.z-f.z)*c,l=(t.min.z-f.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,i,r,s){ma.subVectors(e,t),Is.subVectors(i,t),ga.crossVectors(ma,Is);let o=this.direction.dot(ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);const l=a*this.direction.dot(Is.crossVectors(oi,Is));if(l<0)return null;const u=a*this.direction.dot(ma.cross(oi));if(u<0||l+u>o)return null;const h=-a*oi.dot(ga);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,r,s,o,a,l,u,h,c,f,d,_,y,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,u,h,c,f,d,_,y,m)}set(t,e,i,r,s,o,a,l,u,h,c,f,d,_,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=h,p[10]=c,p[14]=f,p[3]=d,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/or.setFromMatrixColumn(t,0).length(),s=1/or.setFromMatrixColumn(t,1).length(),o=1/or.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),c=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*c,_=a*h,y=a*c;e[0]=l*h,e[4]=-l*c,e[8]=u,e[1]=d+_*u,e[5]=f-y*u,e[9]=-a*l,e[2]=y-f*u,e[6]=_+d*u,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*c,_=u*h,y=u*c;e[0]=f+y*a,e[4]=_*a-d,e[8]=o*u,e[1]=o*c,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*c,_=u*h,y=u*c;e[0]=f-y*a,e[4]=-o*c,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*c,_=a*h,y=a*c;e[0]=l*h,e[4]=_*u-d,e[8]=f*u+y,e[1]=l*c,e[5]=y*u+f,e[9]=d*u-_,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*u,_=a*l,y=a*u;e[0]=l*h,e[4]=y-f*c,e[8]=_*c+d,e[1]=c,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=d*c+_,e[10]=f-y*c}else if(t.order==="XZY"){const f=o*l,d=o*u,_=a*l,y=a*u;e[0]=l*h,e[4]=-c,e[8]=u*h,e[1]=f*c+y,e[5]=o*h,e[9]=d*c-_,e[2]=_*c-d,e[6]=a*h,e[10]=y*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fm,t,dm)}lookAt(t,e,i){const r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ai.crossVectors(i,an),ai.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ai.crossVectors(i,an)),ai.normalize(),Ls.crossVectors(an,ai),r[0]=ai.x,r[4]=Ls.x,r[8]=an.x,r[1]=ai.y,r[5]=Ls.y,r[9]=an.y,r[2]=ai.z,r[6]=Ls.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],h=i[1],c=i[5],f=i[9],d=i[13],_=i[2],y=i[6],m=i[10],p=i[14],w=i[3],b=i[7],M=i[11],N=i[15],I=r[0],D=r[4],O=r[8],v=r[12],x=r[1],T=r[5],U=r[9],F=r[13],k=r[2],W=r[6],E=r[10],P=r[14],R=r[3],B=r[7],Y=r[11],K=r[15];return s[0]=o*I+a*x+l*k+u*R,s[4]=o*D+a*T+l*W+u*B,s[8]=o*O+a*U+l*E+u*Y,s[12]=o*v+a*F+l*P+u*K,s[1]=h*I+c*x+f*k+d*R,s[5]=h*D+c*T+f*W+d*B,s[9]=h*O+c*U+f*E+d*Y,s[13]=h*v+c*F+f*P+d*K,s[2]=_*I+y*x+m*k+p*R,s[6]=_*D+y*T+m*W+p*B,s[10]=_*O+y*U+m*E+p*Y,s[14]=_*v+y*F+m*P+p*K,s[3]=w*I+b*x+M*k+N*R,s[7]=w*D+b*T+M*W+N*B,s[11]=w*O+b*U+M*E+N*Y,s[15]=w*v+b*F+M*P+N*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],h=t[2],c=t[6],f=t[10],d=t[14],_=t[3],y=t[7],m=t[11],p=t[15];return _*(+s*l*c-r*u*c-s*a*f+i*u*f+r*a*d-i*l*d)+y*(+e*l*d-e*u*f+s*o*f-r*o*d+r*u*h-s*l*h)+m*(+e*u*c-e*a*d-s*o*c+i*o*d+s*a*h-i*u*h)+p*(-r*a*h-e*l*c+e*a*f+r*o*c-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],h=t[8],c=t[9],f=t[10],d=t[11],_=t[12],y=t[13],m=t[14],p=t[15],w=c*m*u-y*f*u+y*l*d-a*m*d-c*l*p+a*f*p,b=_*f*u-h*m*u-_*l*d+o*m*d+h*l*p-o*f*p,M=h*y*u-_*c*u+_*a*d-o*y*d-h*a*p+o*c*p,N=_*c*l-h*y*l-_*a*f+o*y*f+h*a*m-o*c*m,I=e*w+i*b+r*M+s*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return t[0]=w*D,t[1]=(y*f*s-c*m*s-y*r*d+i*m*d+c*r*p-i*f*p)*D,t[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*p+i*l*p)*D,t[3]=(c*l*s-a*f*s-c*r*u+i*f*u+a*r*d-i*l*d)*D,t[4]=b*D,t[5]=(h*m*s-_*f*s+_*r*d-e*m*d-h*r*p+e*f*p)*D,t[6]=(_*l*s-o*m*s-_*r*u+e*m*u+o*r*p-e*l*p)*D,t[7]=(o*f*s-h*l*s+h*r*u-e*f*u-o*r*d+e*l*d)*D,t[8]=M*D,t[9]=(_*c*s-h*y*s-_*i*d+e*y*d+h*i*p-e*c*p)*D,t[10]=(o*y*s-_*a*s+_*i*u-e*y*u-o*i*p+e*a*p)*D,t[11]=(h*a*s-o*c*s-h*i*u+e*c*u+o*i*d-e*a*d)*D,t[12]=N*D,t[13]=(h*y*r-_*c*r+_*i*f-e*y*f-h*i*m+e*c*m)*D,t[14]=(_*a*r-o*y*r-_*i*l+e*y*l+o*i*m-e*a*m)*D,t[15]=(o*c*r-h*a*r+h*i*l-e*c*l-o*i*f+e*a*f)*D,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,h=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,h*a+i,h*l-r*o,0,u*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,u=s+s,h=o+o,c=a+a,f=s*u,d=s*h,_=s*c,y=o*h,m=o*c,p=a*c,w=l*u,b=l*h,M=l*c,N=i.x,I=i.y,D=i.z;return r[0]=(1-(y+p))*N,r[1]=(d+M)*N,r[2]=(_-b)*N,r[3]=0,r[4]=(d-M)*I,r[5]=(1-(f+p))*I,r[6]=(m+w)*I,r[7]=0,r[8]=(_+b)*D,r[9]=(m-w)*D,r[10]=(1-(f+y))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=or.set(r[0],r[1],r[2]).length();const o=or.set(r[4],r[5],r[6]).length(),a=or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],An.copy(this);const u=1/s,h=1/o,c=1/a;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=c,An.elements[9]*=c,An.elements[10]*=c,e.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=ti){const l=this.elements,u=2*s/(e-t),h=2*s/(i-r),c=(e+t)/(e-t),f=(i+r)/(i-r);let d,_;if(a===ti)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Eo)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ti){const l=this.elements,u=1/(e-t),h=1/(i-r),c=1/(o-s),f=(e+t)*u,d=(i+r)*h;let _,y;if(a===ti)_=(o+s)*c,y=-2*c;else if(a===Eo)_=s*c,y=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const or=new V,An=new de,fm=new V(0,0,0),dm=new V(1,1,1),ai=new V,Ls=new V,an=new V,cu=new de,uu=new ji;class Hn{constructor(t=0,e=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],h=r[9],c=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pm=0;const hu=new V,ar=new ji,qn=new de,Us=new V,jr=new V,mm=new V,gm=new ji,fu=new V(1,0,0),du=new V(0,1,0),pu=new V(0,0,1),mu={type:"added"},_m={type:"removed"},lr={type:"childadded",child:null},_a={type:"childremoved",child:null};class Re extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new V,e=new Hn,i=new ji,r=new V(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new Yt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.multiply(ar),this}rotateOnWorldAxis(t,e){return ar.setFromAxisAngle(t,e),this.quaternion.premultiply(ar),this}rotateX(t){return this.rotateOnAxis(fu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Us.copy(t):Us.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(jr,Us,this.up):qn.lookAt(Us,jr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),ar.setFromRotationMatrix(qn),this.quaternion.premultiply(ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mu),lr.child=t,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_m),_a.child=t,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mu),lr.child=t,this.dispatchEvent(lr),lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,mm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const c=l[u];s(t.shapes,c)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),h=o(t.images),c=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),c.length>0&&(i.shapes=c),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const h=a[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Re.DEFAULT_UP=new V(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new V,jn=new V,va=new V,Zn=new V,cr=new V,ur=new V,gu=new V,xa=new V,ya=new V,Sa=new V,Ma=new ye,Ea=new ye,Ta=new ye;class Cn{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),wn.subVectors(t,e),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){wn.subVectors(r,e),jn.subVectors(i,e),va.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(jn),l=wn.dot(va),u=jn.dot(jn),h=jn.dot(va),c=o*u-a*a;if(c===0)return s.set(0,0,0),null;const f=1/c,d=(u*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return Ma.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),Ma.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,i),Ta.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ma,s.x),o.addScaledVector(Ea,s.y),o.addScaledVector(Ta,s.z),o}static isFrontFacing(t,e,i,r){return wn.subVectors(i,e),jn.subVectors(t,e),wn.cross(jn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),wn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Cn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;cr.subVectors(r,i),ur.subVectors(s,i),xa.subVectors(t,i);const l=cr.dot(xa),u=ur.dot(xa);if(l<=0&&u<=0)return e.copy(i);ya.subVectors(t,r);const h=cr.dot(ya),c=ur.dot(ya);if(h>=0&&c<=h)return e.copy(r);const f=l*c-h*u;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(cr,o);Sa.subVectors(t,s);const d=cr.dot(Sa),_=ur.dot(Sa);if(_>=0&&d<=_)return e.copy(s);const y=d*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),e.copy(i).addScaledVector(ur,a);const m=h*_-d*c;if(m<=0&&c-h>=0&&d-_>=0)return gu.subVectors(s,r),a=(c-h)/(c-h+(d-_)),e.copy(r).addScaledVector(gu,a);const p=1/(m+y+f);return o=y*p,a=f*p,e.copy(i).addScaledVector(cr,o).addScaledVector(ur,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function ba(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ne.workingColorSpace){if(t=lc(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ba(o,s,t+1/3),this.g=ba(o,s,t),this.b=ba(o,s,t-1/3)}return ne.colorSpaceToWorking(this,r),this}setStyle(t,e=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){const i=rf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return ne.workingToColorSpace(Ne.copy(this),t),Math.round(Kt(Ne.r*255,0,255))*65536+Math.round(Kt(Ne.g*255,0,255))*256+Math.round(Kt(Ne.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Ne.copy(this),e);const i=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const h=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=h<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=yn){ne.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,r=Ne.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Ns);const i=rs(li.h,Ns.h,e),r=rs(li.s,Ns.s,e),s=rs(li.l,Ns.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new te;te.NAMES=rf;let vm=0;class Qi extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Er,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=er,this.stencilZFail=er,this.stencilZPass=er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hc extends Qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new V,Fs=new Vt;let xm=0;class nn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),i=ze(i,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nu&&(t.usage=this.usage),t}}class sf extends nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class of extends nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class rn extends nn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let ym=0;const gn=new de,Aa=new Re,hr=new V,ln=new ds,Zr=new ds,we=new V;class sn extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?of:sf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rn(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(ln.min,Zr.min),ln.expandByPoint(we),we.addVectors(ln.max,Zr.max),ln.expandByPoint(we)):(ln.expandByPoint(Zr.min),ln.expandByPoint(Zr.max))}ln.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)we.fromBufferAttribute(a,u),l&&(hr.fromBufferAttribute(t,u),we.add(hr)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new V,l[O]=new V;const u=new V,h=new V,c=new V,f=new Vt,d=new Vt,_=new Vt,y=new V,m=new V;function p(O,v,x){u.fromBufferAttribute(i,O),h.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),f.fromBufferAttribute(s,O),d.fromBufferAttribute(s,v),_.fromBufferAttribute(s,x),h.sub(u),c.sub(u),d.sub(f),_.sub(f);const T=1/(d.x*_.y-_.x*d.y);isFinite(T)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(c,-d.y).multiplyScalar(T),m.copy(c).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(T),a[O].add(y),a[v].add(y),a[x].add(y),l[O].add(m),l[v].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,v=w.length;O<v;++O){const x=w[O],T=x.start,U=x.count;for(let F=T,k=T+U;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new V,M=new V,N=new V,I=new V;function D(O){N.fromBufferAttribute(r,O),I.copy(N);const v=a[O];b.copy(v),b.sub(N.multiplyScalar(N.dot(v))).normalize(),M.crossVectors(I,v);const T=M.dot(l[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,T)}for(let O=0,v=w.length;O<v;++O){const x=w[O],T=x.start,U=x.count;for(let F=T,k=T+U;F<k;F+=3)D(t.getX(F+0)),D(t.getX(F+1)),D(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,u=new V,h=new V,c=new V;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,s),c.subVectors(r,s),h.cross(c),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(h),l.add(h),u.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),c.subVectors(r,s),h.cross(c),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const u=a.array,h=a.itemSize,c=a.normalized,f=new u.constructor(l.length*h);let d=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*h;for(let p=0;p<h;p++)f[_++]=u[d++]}return new nn(f,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);e.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let h=0,c=u.length;h<c;h++){const f=u[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let c=0,f=u.length;c<f;c++){const d=u[c];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],c=s[u];for(let f=0,d=c.length;f<d;f++)h.push(c[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new de,wi=new uc,Os=new Vo,vu=new V,Bs=new V,zs=new V,ks=new V,wa=new V,Hs=new V,xu=new V,Gs=new V;class cn extends Re{constructor(t=new sn,e=new hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Hs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=a[l],c=s[l];h!==0&&(wa.fromBufferAttribute(c,t),o?Hs.addScaledVector(wa,h):Hs.addScaledVector(wa.sub(e),h))}e.add(Hs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Os.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Os,vu)===null||wi.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(_u.copy(s).invert(),wi.copy(t.ray).applyMatrix4(_u),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,c=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],p=o[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,N=b;M<N;M+=3){const I=a.getX(M),D=a.getX(M+1),O=a.getX(M+2);r=Vs(this,p,t,i,u,h,c,I,D,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const w=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);r=Vs(this,o,t,i,u,h,c,w,b,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const m=f[_],p=o[m.materialIndex],w=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,N=b;M<N;M+=3){const I=M,D=M+1,O=M+2;r=Vs(this,p,t,i,u,h,c,I,D,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=_,p=y;m<p;m+=3){const w=m,b=m+1,M=m+2;r=Vs(this,o,t,i,u,h,c,w,b,M),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Sm(n,t,e,i,r,s,o,a){let l;if(t.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===vi,a),l===null)return null;Gs.copy(a),Gs.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(Gs);return u<e.near||u>e.far?null:{distance:u,point:Gs.clone(),object:n}}function Vs(n,t,e,i,r,s,o,a,l,u){n.getVertexPosition(a,Bs),n.getVertexPosition(l,zs),n.getVertexPosition(u,ks);const h=Sm(n,t,e,i,Bs,zs,ks,xu);if(h){const c=new V;Cn.getBarycoord(xu,Bs,zs,ks,c),r&&(h.uv=Cn.getInterpolatedAttribute(r,a,l,u,c,new Vt)),s&&(h.uv1=Cn.getInterpolatedAttribute(s,a,l,u,c,new Vt)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,l,u,c,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new V,materialIndex:0};Cn.getNormal(Bs,zs,ks,f.normal),h.face=f,h.barycoord=c}return h}class ps extends sn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],c=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(u,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(c,2));function _(y,m,p,w,b,M,N,I,D,O,v){const x=M/D,T=N/O,U=M/2,F=N/2,k=I/2,W=D+1,E=O+1;let P=0,R=0;const B=new V;for(let Y=0;Y<E;Y++){const K=Y*T-F;for(let tt=0;tt<W;tt++){const at=tt*x-U;B[y]=at*w,B[m]=K*b,B[p]=k,u.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[p]=I>0?1:-1,h.push(B.x,B.y,B.z),c.push(tt/D),c.push(1-Y/O),P+=1}}for(let Y=0;Y<O;Y++)for(let K=0;K<D;K++){const tt=f+K+W*Y,at=f+K+W*(Y+1),X=f+(K+1)+W*(Y+1),Z=f+(K+1)+W*Y;l.push(tt,at,Z),l.push(at,X,Z),R+=6}a.addGroup(d,R,v),d+=R,f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=Nr(n[e]);for(const r in i)t[r]=i[r]}return t}function Mm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function af(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const yr={clone:Nr,merge:He};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends Qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=Mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class lf extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new V,yu=new Vt,Su=new Vt;class Sn extends lf{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,yu,Su),e.subVectors(Su,yu)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fr=-90,dr=1;class bm extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(fr,dr,t,e);r.layers=this.layers,this.add(r);const s=new Sn(fr,dr,t,e);s.layers=this.layers,this.add(s);const o=new Sn(fr,dr,t,e);o.layers=this.layers,this.add(o);const a=new Sn(fr,dr,t,e);a.layers=this.layers,this.add(a);const l=new Sn(fr,dr,t,e);l.layers=this.layers,this.add(l);const u=new Sn(fr,dr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const u of e)this.remove(u);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,h]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,u),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(c,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class cf extends Ye{constructor(t=[],e=Cr,i,r,s,o,a,l,u,h){super(t,e,i,r,s,o,a,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Am extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new cf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ps(5,5,5),s=new Qe({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:We});s.uniforms.tEquirect.value=e;const o=new cn(r,s),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=On),new bm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Ws extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(u,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],f=h.position.distanceTo(c.position),d=.02,_=.005;u.inputState.pinching&&f>d+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=d-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Rm extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pm extends Ye{constructor(t=null,e=1,i=1,r,s,o,a,l,u=$e,h=$e,c,f){super(null,o,a,l,u,h,r,s,c,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new V,Cm=new V,Dm=new Yt;class fi{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Pa.subVectors(i,e).cross(Cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Dm.getNormalMatrix(t),r=this.coplanarPoint(Pa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Vo,Xs=new V;class fc{constructor(t=new fi,e=new fi,i=new fi,r=new fi,s=new fi,o=new fi){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],h=r[5],c=r[6],f=r[7],d=r[8],_=r[9],y=r[10],m=r[11],p=r[12],w=r[13],b=r[14],M=r[15];if(i[0].setComponents(l-s,f-u,m-d,M-p).normalize(),i[1].setComponents(l+s,f+u,m+d,M+p).normalize(),i[2].setComponents(l+o,f+h,m+_,M+w).normalize(),i[3].setComponents(l-o,f-h,m-_,M-w).normalize(),i[4].setComponents(l-a,f-c,m-y,M-b).normalize(),e===ti)i[5].setComponents(l+a,f+c,m+y,M+b).normalize();else if(e===Eo)i[5].setComponents(a,c,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Xs.x=r.normal.x>0?t.max.x:t.min.x,Xs.y=r.normal.y>0?t.max.y:t.min.y,Xs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uf extends Qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bo=new V,Ao=new V,Mu=new de,Kr=new uc,$s=new Vo,Ca=new V,Eu=new V;class Im extends Re{constructor(t=new sn,e=new uf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)bo.fromBufferAttribute(e,r-1),Ao.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=bo.distanceTo(Ao);t.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(r),$s.radius+=s,t.ray.intersectsSphere($s)===!1)return;Mu.copy(r).invert(),Kr.copy(t.ray).applyMatrix4(Mu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=d,m=_-1;y<m;y+=u){const p=h.getX(y),w=h.getX(y+1),b=Ys(this,t,Kr,l,p,w,y);b&&e.push(b)}if(this.isLineLoop){const y=h.getX(_-1),m=h.getX(d),p=Ys(this,t,Kr,l,y,m,_-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=d,m=_-1;y<m;y+=u){const p=Ys(this,t,Kr,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){const y=Ys(this,t,Kr,l,_-1,d,_-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ys(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(bo.fromBufferAttribute(a,r),Ao.fromBufferAttribute(a,s),e.distanceSqToSegment(bo,Ao,Ca,Eu)>i)return;Ca.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ca);if(!(u<t.near||u>t.far))return{distance:u,point:Eu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class dc extends Ye{constructor(t,e,i=qi,r,s,o,a=$e,l=$e,u,h=ls,c=1){if(h!==ls&&h!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:c};super(f,r,s,o,a,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pc extends sn{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],c=[],f=[],d=[];let _=0;const y=[],m=i/2;let p=0;w(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(f,3)),this.setAttribute("uv",new rn(d,2));function w(){const M=new V,N=new V;let I=0;const D=(e-t)/i;for(let O=0;O<=s;O++){const v=[],x=O/s,T=x*(e-t)+t;for(let U=0;U<=r;U++){const F=U/r,k=F*l+a,W=Math.sin(k),E=Math.cos(k);N.x=T*W,N.y=-x*i+m,N.z=T*E,c.push(N.x,N.y,N.z),M.set(W,D,E).normalize(),f.push(M.x,M.y,M.z),d.push(F,1-x),v.push(_++)}y.push(v)}for(let O=0;O<r;O++)for(let v=0;v<s;v++){const x=y[v][O],T=y[v+1][O],U=y[v+1][O+1],F=y[v][O+1];(t>0||v!==0)&&(h.push(x,T,F),I+=3),(e>0||v!==s-1)&&(h.push(T,U,F),I+=3)}u.addGroup(p,I,0),p+=I}function b(M){const N=_,I=new Vt,D=new V;let O=0;const v=M===!0?t:e,x=M===!0?1:-1;for(let U=1;U<=r;U++)c.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),_++;const T=_;for(let U=0;U<=r;U++){const k=U/r*l+a,W=Math.cos(k),E=Math.sin(k);D.x=v*E,D.y=m*x,D.z=v*W,c.push(D.x,D.y,D.z),f.push(0,x,0),I.x=W*.5+.5,I.y=E*.5*x+.5,d.push(I.x,I.y),_++}for(let U=0;U<r;U++){const F=N+U,k=T+U;M===!0?h.push(k,k+1,F):h.push(k+1,k,F),O+=3}u.addGroup(p,O,M===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mc extends pc{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new mc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ms extends sn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),u=a+1,h=l+1,c=t/a,f=e/l,d=[],_=[],y=[],m=[];for(let p=0;p<h;p++){const w=p*f-o;for(let b=0;b<u;b++){const M=b*c-s;_.push(M,-w,0),y.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const b=w+u*p,M=w+u*(p+1),N=w+1+u*(p+1),I=w+1+u*p;d.push(b,M,I),d.push(M,N,I)}this.setIndex(d),this.setAttribute("position",new rn(_,3)),this.setAttribute("normal",new rn(y,3)),this.setAttribute("uv",new rn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}class hf extends Qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lm extends Qi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Um extends Qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nm extends Qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ff extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Da=new de,Tu=new V,bu=new V;class Fm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),Da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gc extends lf{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Om extends Fm{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bm extends ff{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Om}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zm extends ff{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class km extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Hm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Au();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Au(){return performance.now()}class wu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ru=new V;let qs,Ia;class df extends Re{constructor(t=new V(0,0,1),e=new V(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",qs===void 0&&(qs=new sn,qs.setAttribute("position",new rn([0,0,0,0,1,0],3)),Ia=new mc(.5,1,5,1),Ia.translate(0,-.5,0)),this.position.copy(e),this.line=new Im(qs,new uf({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new cn(Ia,new hc({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Ru.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Ru,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Gm extends Ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Pu(n,t,e,i){const r=Vm(i);switch(e){case qh:return n*t;case ic:return n*t/r.components*r.byteLength;case rc:return n*t/r.components*r.byteLength;case Zh:return n*t*2/r.components*r.byteLength;case sc:return n*t*2/r.components*r.byteLength;case jh:return n*t*3/r.components*r.byteLength;case Dn:return n*t*4/r.components*r.byteLength;case oc:return n*t*4/r.components*r.byteLength;case ho:case fo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ml:case _l:return Math.max(n,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(n,8)*Math.max(t,8)/2;case vl:case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case go:case Nl:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kh:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bl:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vm(n){switch(n){case zn:case Xh:return{byteLength:1,components:1};case as:case $h:case xi:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case qi:case tc:case Bn:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pf(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Wm(n){const t=new WeakMap;function e(a,l){const u=a.array,h=a.usage,c=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,h),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,l,u){const h=l.array,c=l.updateRanges;if(n.bindBuffer(u,a),c.length===0)n.bufferSubData(u,0,h);else{c.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<c.length;d++){const _=c[f],y=c[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,c[f]=y)}c.length=f+1;for(let d=0,_=c.length;d<_;d++){const y=c[d];n.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$m=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pg=`#define PI 3.141592653589793
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
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
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Wg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t_=`#if defined( USE_POINTS_UV )
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
#endif`,e_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,c_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d_=`#ifdef USE_NORMALMAP
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
#endif`,p_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,__=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,w_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
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
#endif`,U_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X_=`uniform sampler2D t2D;
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,K_=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J_=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Q_=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,s0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,o0=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,a0=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,l0=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,c0=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,u0=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,h0=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f0=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,d0=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,p0=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,m0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,g0=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,_0=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,v0=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,x0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,S0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,E0=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,qt={alphahash_fragment:Xm,alphahash_pars_fragment:$m,alphamap_fragment:Ym,alphamap_pars_fragment:qm,alphatest_fragment:jm,alphatest_pars_fragment:Zm,aomap_fragment:Km,aomap_pars_fragment:Jm,batching_pars_vertex:Qm,batching_vertex:tg,begin_vertex:eg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:rg,bumpmap_pars_fragment:sg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:ug,color_pars_fragment:hg,color_pars_vertex:fg,color_vertex:dg,common:pg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:_g,displacementmap_vertex:vg,emissivemap_fragment:xg,emissivemap_pars_fragment:yg,colorspace_fragment:Sg,colorspace_pars_fragment:Mg,envmap_fragment:Eg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:bg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Og,envmap_vertex:wg,fog_vertex:Rg,fog_pars_vertex:Pg,fog_fragment:Cg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Lg,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Ng,lights_pars_begin:Fg,lights_toon_fragment:Bg,lights_toon_pars_fragment:zg,lights_phong_fragment:kg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Wg,lights_fragment_maps:Xg,lights_fragment_end:$g,logdepthbuf_fragment:Yg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:Zg,map_fragment:Kg,map_pars_fragment:Jg,map_particle_fragment:Qg,map_particle_pars_fragment:t_,metalnessmap_fragment:e_,metalnessmap_pars_fragment:n_,morphinstance_vertex:i_,morphcolor_vertex:r_,morphnormal_vertex:s_,morphtarget_pars_vertex:o_,morphtarget_vertex:a_,normal_fragment_begin:l_,normal_fragment_maps:c_,normal_pars_fragment:u_,normal_pars_vertex:h_,normal_vertex:f_,normalmap_pars_fragment:d_,clearcoat_normal_fragment_begin:p_,clearcoat_normal_fragment_maps:m_,clearcoat_pars_fragment:g_,iridescence_pars_fragment:__,opaque_fragment:v_,packing:x_,premultiplied_alpha_fragment:y_,project_vertex:S_,dithering_fragment:M_,dithering_pars_fragment:E_,roughnessmap_fragment:T_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:A_,shadowmap_pars_vertex:w_,shadowmap_vertex:R_,shadowmask_pars_fragment:P_,skinbase_vertex:C_,skinning_pars_vertex:D_,skinning_vertex:I_,skinnormal_vertex:L_,specularmap_fragment:U_,specularmap_pars_fragment:N_,tonemapping_fragment:F_,tonemapping_pars_fragment:O_,transmission_fragment:B_,transmission_pars_fragment:z_,uv_pars_fragment:k_,uv_pars_vertex:H_,uv_vertex:G_,worldpos_vertex:V_,background_vert:W_,background_frag:X_,backgroundCube_vert:$_,backgroundCube_frag:Y_,cube_vert:q_,cube_frag:j_,depth_vert:Z_,depth_frag:K_,distanceRGBA_vert:J_,distanceRGBA_frag:Q_,equirect_vert:t0,equirect_frag:e0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:r0,meshbasic_frag:s0,meshlambert_vert:o0,meshlambert_frag:a0,meshmatcap_vert:l0,meshmatcap_frag:c0,meshnormal_vert:u0,meshnormal_frag:h0,meshphong_vert:f0,meshphong_frag:d0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:v0,points_frag:x0,shadow_vert:y0,shadow_frag:S0,sprite_vert:M0,sprite_frag:E0},gt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Nn={basic:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new te(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:He([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:He([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:He([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new te(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:He([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:He([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:He([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:He([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:He([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:He([gt.common,gt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:He([gt.lights,gt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Nn.physical={uniforms:He([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const js={r:0,b:0,g:0},Pi=new Hn,T0=new de;function b0(n,t,e,i,r,s,o){const a=new te(0);let l=s===!0?0:1,u,h,c=null,f=0,d=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function y(b){let M=!1;const N=_(b);N===null?p(a,l):N&&N.isColor&&(p(N,1),M=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,M){const N=_(M);N&&(N.isCubeTexture||N.mapping===Go)?(h===void 0&&(h=new cn(new ps(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Nr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Pi.copy(M.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(Pi)),h.material.toneMapped=ne.getTransfer(N.colorSpace)!==le,(c!==N||f!==N.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,c=N,f=N.version,d=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(u===void 0&&(u=new cn(new ms(2,2),new Qe({name:"BackgroundMaterial",uniforms:Nr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=N,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=ne.getTransfer(N.colorSpace)!==le,N.matrixAutoUpdate===!0&&N.updateMatrix(),u.material.uniforms.uvTransform.value.copy(N.matrix),(c!==N||f!==N.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,c=N,f=N.version,d=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function p(b,M){b.getRGB(js,af(n)),i.buffers.color.setClear(js.r,js.g,js.b,M,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:y,addToRenderList:m,dispose:w}}function A0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,T,U,F,k){let W=!1;const E=c(F,U,T);s!==E&&(s=E,u(s.object)),W=d(x,F,U,k),W&&_(x,F,U,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(x,T,U,F),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function u(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function c(x,T,U){const F=U.wireframe===!0;let k=i[x.id];k===void 0&&(k={},i[x.id]=k);let W=k[T.id];W===void 0&&(W={},k[T.id]=W);let E=W[F];return E===void 0&&(E=f(l()),W[F]=E),E}function f(x){const T=[],U=[],F=[];for(let k=0;k<e;k++)T[k]=0,U[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:F,object:x,attributes:{},index:null}}function d(x,T,U,F){const k=s.attributes,W=T.attributes;let E=0;const P=U.getAttributes();for(const R in P)if(P[R].location>=0){const Y=k[R];let K=W[R];if(K===void 0&&(R==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),R==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),Y===void 0||Y.attribute!==K||K&&Y.data!==K.data)return!0;E++}return s.attributesNum!==E||s.index!==F}function _(x,T,U,F){const k={},W=T.attributes;let E=0;const P=U.getAttributes();for(const R in P)if(P[R].location>=0){let Y=W[R];Y===void 0&&(R==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),R==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor));const K={};K.attribute=Y,Y&&Y.data&&(K.data=Y.data),k[R]=K,E++}s.attributes=k,s.attributesNum=E,s.index=F}function y(){const x=s.newAttributes;for(let T=0,U=x.length;T<U;T++)x[T]=0}function m(x){p(x,0)}function p(x,T){const U=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;U[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),k[x]!==T&&(n.vertexAttribDivisor(x,T),k[x]=T)}function w(){const x=s.newAttributes,T=s.enabledAttributes;for(let U=0,F=T.length;U<F;U++)T[U]!==x[U]&&(n.disableVertexAttribArray(U),T[U]=0)}function b(x,T,U,F,k,W,E){E===!0?n.vertexAttribIPointer(x,T,U,k,W):n.vertexAttribPointer(x,T,U,F,k,W)}function M(x,T,U,F){y();const k=F.attributes,W=U.getAttributes(),E=T.defaultAttributeValues;for(const P in W){const R=W[P];if(R.location>=0){let B=k[P];if(B===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(B=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(B=x.instanceColor)),B!==void 0){const Y=B.normalized,K=B.itemSize,tt=t.get(B);if(tt===void 0)continue;const at=tt.buffer,X=tt.type,Z=tt.bytesPerElement,ot=X===n.INT||X===n.UNSIGNED_INT||B.gpuType===tc;if(B.isInterleavedBufferAttribute){const it=B.data,lt=it.stride,It=B.offset;if(it.isInstancedInterleavedBuffer){for(let _t=0;_t<R.locationSize;_t++)p(R.location+_t,it.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let _t=0;_t<R.locationSize;_t++)m(R.location+_t);n.bindBuffer(n.ARRAY_BUFFER,at);for(let _t=0;_t<R.locationSize;_t++)b(R.location+_t,K/R.locationSize,X,Y,lt*Z,(It+K/R.locationSize*_t)*Z,ot)}else{if(B.isInstancedBufferAttribute){for(let it=0;it<R.locationSize;it++)p(R.location+it,B.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let it=0;it<R.locationSize;it++)m(R.location+it);n.bindBuffer(n.ARRAY_BUFFER,at);for(let it=0;it<R.locationSize;it++)b(R.location+it,K/R.locationSize,X,Y,K*Z,K/R.locationSize*it*Z,ot)}}else if(E!==void 0){const Y=E[P];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(R.location,Y);break;case 3:n.vertexAttrib3fv(R.location,Y);break;case 4:n.vertexAttrib4fv(R.location,Y);break;default:n.vertexAttrib1fv(R.location,Y)}}}}w()}function N(){O();for(const x in i){const T=i[x];for(const U in T){const F=T[U];for(const k in F)h(F[k].object),delete F[k];delete T[U]}delete i[x]}}function I(x){if(i[x.id]===void 0)return;const T=i[x.id];for(const U in T){const F=T[U];for(const k in F)h(F[k].object),delete F[k];delete T[U]}delete i[x.id]}function D(x){for(const T in i){const U=i[T];if(U[x.id]===void 0)continue;const F=U[x.id];for(const k in F)h(F[k].object),delete F[k];delete U[x.id]}}function O(){v(),o=!0,s!==r&&(s=r,u(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:v,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function w0(n,t,e){let i;function r(u){i=u}function s(u,h){n.drawArrays(i,u,h),e.update(h,i,1)}function o(u,h,c){c!==0&&(n.drawArraysInstanced(i,u,h,c),e.update(h,i,c))}function a(u,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,c);let d=0;for(let _=0;_<c;_++)d+=h[_];e.update(d,i,1)}function l(u,h,c,f){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<u.length;_++)o(u[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,c);let _=0;for(let y=0;y<c;y++)_+=h[y]*f[y];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function R0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Dn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const O=D===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==zn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Bn&&!O)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const c=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:c,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:N,maxSamples:I}}function P0(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new fi,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const d=c.length!==0||f||i!==0||r;return r=f,i=c.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,f){e=h(c,f,0)},this.setState=function(c,f,d){const _=c.clippingPlanes,y=c.clipIntersection,m=c.clipShadows,p=n.get(c);if(!r||_===null||_.length===0||s&&!m)s?h(null):u();else{const w=s?0:i,b=w*4;let M=p.clippingState||null;l.value=M,M=h(_,f,b,d);for(let N=0;N!==b;++N)M[N]=e[N];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(c,f,d,_){const y=c!==null?c.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=d+y*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=d;b!==y;++b,M+=4)o.copy(c[b]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function C0(n){let t=new WeakMap;function e(o,a){return a===hl?o.mapping=Cr:a===fl&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hl||a===fl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Am(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Sr=4,Cu=[.125,.215,.35,.446,.526,.582],Bi=20,La=new gc,Du=new te;let Ua=null,Na=0,Fa=0,Oa=!1;const Ni=(1+Math.sqrt(5))/2,pr=1/Ni,Iu=[new V(-Ni,pr,0),new V(Ni,pr,0),new V(-pr,0,Ni),new V(pr,0,Ni),new V(0,Ni,-pr),new V(0,Ni,pr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],D0=new V;class Lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=D0}=s;Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:xi,format:Dn,colorSpace:Ur,depthBuffer:!1},r=Uu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(s)),this._blurMaterial=L0(s,t,e)}return r}_compileMaterial(t){const e=new cn(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,i,r,s){const l=new Sn(90,1,e,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Du),c.toneMapping=gi,c.autoClear=!1;const _=new hc({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),y=new cn(new ps,_);let m=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(Du),m=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(l.up.set(0,u[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):b===1?(l.up.set(0,0,u[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,u[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));const M=this._cubeSize;Zs(r,b*M,w>2?M:0,M,M),c.setRenderTarget(r),m&&c.render(y,l),c.render(t,l)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=d,c.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Cr||t.mapping===Dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,La)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Iu[(r-s-1)%Iu.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new cn(this._lodPlanes[r],u),f=u.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Bi-1),y=s/_,m=isFinite(s)?1+Math.floor(h*y):Bi;m>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let w=0;for(let D=0;D<Bi;++D){const O=D/y,v=Math.exp(-O*O/2);p.push(v),D===0?w+=v:D<m&&(w+=2*v)}for(let D=0;D<p.length;D++)p[D]=p[D]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const M=this._sizeLods[r],N=3*M*(r>b-Sr?r-b+Sr:0),I=4*(this._cubeSize-M);Zs(e,N,I,3*M,2*M),l.setRenderTarget(e),l.render(c,La)}}function I0(n){const t=[],e=[],i=[];let r=n;const s=n-Sr+1+Cu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Sr?l=Cu[o-n+Sr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),h=-u,c=1+u,f=[h,h,c,h,c,c,h,h,c,c,h,c],d=6,_=6,y=3,m=2,p=1,w=new Float32Array(y*_*d),b=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let I=0;I<d;I++){const D=I%3*2/3-1,O=I>2?0:-1,v=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];w.set(v,y*_*I),b.set(f,m*_*I);const x=[I,I,I,I,I,I];M.set(x,p*_*I)}const N=new sn;N.setAttribute("position",new nn(w,y)),N.setAttribute("uv",new nn(b,m)),N.setAttribute("faceIndex",new nn(M,p)),t.push(N),r>Sr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Uu(n,t,e){const i=new kn(n,t,e);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function L0(n,t,e){const i=new Float32Array(Bi),r=new V(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function Nu(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:We,depthTest:!1,depthWrite:!1})}function Fu(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:We,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function U0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hl||l===fl,h=l===Cr||l===Dr;if(u||h){let c=t.get(a);const f=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Lu(n)),c=u?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{const d=a.image;return u&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new Lu(n)),c=u?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function r(a){let l=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function N0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Tr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function F0(n,t,e,i){const r={},s=new WeakMap;function o(c){const f=c.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(c,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(c){const f=c.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function u(c){const f=[],d=c.index,_=c.attributes.position;let y=0;if(d!==null){const w=d.array;y=d.version;for(let b=0,M=w.length;b<M;b+=3){const N=w[b+0],I=w[b+1],D=w[b+2];f.push(N,I,I,D,D,N)}}else if(_!==void 0){const w=_.array;y=_.version;for(let b=0,M=w.length/3-1;b<M;b+=3){const N=b+0,I=b+1,D=b+2;f.push(N,I,I,D,D,N)}}else return;const m=new(tf(f)?of:sf)(f,1);m.version=y;const p=s.get(c);p&&t.remove(p),s.set(c,m)}function h(c){const f=s.get(c);if(f){const d=c.index;d!==null&&f.version<d.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:h}}function O0(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),e.update(d,i,1)}function u(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,f*o,_),e.update(d,i,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function c(f,d,_,y){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,y,0,_);let p=0;for(let w=0;w<_;w++)p+=d[w]*y[w];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=c}function B0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function z0(n,t,e){const i=new WeakMap,r=new ye;function s(o,a,l){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==c){let x=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let N=a.attributes.position.count*M,I=1;N>t.maxTextureSize&&(I=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const D=new Float32Array(N*I*4*c),O=new ef(D,N,I,c);O.type=Bn,O.needsUpdate=!0;const v=M*4;for(let T=0;T<c;T++){const U=p[T],F=w[T],k=b[T],W=N*I*4*T;for(let E=0;E<U.count;E++){const P=E*v;_===!0&&(r.fromBufferAttribute(U,E),D[W+P+0]=r.x,D[W+P+1]=r.y,D[W+P+2]=r.z,D[W+P+3]=0),y===!0&&(r.fromBufferAttribute(F,E),D[W+P+4]=r.x,D[W+P+5]=r.y,D[W+P+6]=r.z,D[W+P+7]=0),m===!0&&(r.fromBufferAttribute(k,E),D[W+P+8]=r.x,D[W+P+9]=r.y,D[W+P+10]=r.z,D[W+P+11]=k.itemSize===4?r.w:1)}}f={count:c,texture:O,size:new Vt(N,I)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function k0(n,t,e,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,c=t.get(l,h);if(r.get(c)!==u&&(t.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:o}}const mf=new Ye,Ou=new dc(1,1),gf=new ef,_f=new um,vf=new cf,Bu=[],zu=[],ku=new Float32Array(16),Hu=new Float32Array(9),Gu=new Float32Array(4);function Hr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Bu[r];if(s===void 0&&(s=new Float32Array(r),Bu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Wo(n,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function H0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function G0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function W0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function X0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;Gu.set(i),n.uniformMatrix2fv(this.addr,!1,Gu),Ae(e,i)}}function $0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),Ae(e,i)}}function Y0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),Ae(e,i)}}function q0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function j0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function Z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function J0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function tv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function ev(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function nv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ou.compareFunction=Jh,s=Ou):s=mf,e.setTexture2D(t||s,r)}function iv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||_f,r)}function rv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||vf,r)}function sv(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||gf,r)}function ov(n){switch(n){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return W0;case 35674:return X0;case 35675:return $0;case 35676:return Y0;case 5124:case 35670:return q0;case 35667:case 35671:return j0;case 35668:case 35672:return Z0;case 35669:case 35673:return K0;case 5125:return J0;case 36294:return Q0;case 36295:return tv;case 36296:return ev;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}function av(n,t){n.uniform1fv(this.addr,t)}function lv(n,t){const e=Hr(t,this.size,2);n.uniform2fv(this.addr,e)}function cv(n,t){const e=Hr(t,this.size,3);n.uniform3fv(this.addr,e)}function uv(n,t){const e=Hr(t,this.size,4);n.uniform4fv(this.addr,e)}function hv(n,t){const e=Hr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function fv(n,t){const e=Hr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function dv(n,t){const e=Hr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function pv(n,t){n.uniform1iv(this.addr,t)}function mv(n,t){n.uniform2iv(this.addr,t)}function gv(n,t){n.uniform3iv(this.addr,t)}function _v(n,t){n.uniform4iv(this.addr,t)}function vv(n,t){n.uniform1uiv(this.addr,t)}function xv(n,t){n.uniform2uiv(this.addr,t)}function yv(n,t){n.uniform3uiv(this.addr,t)}function Sv(n,t){n.uniform4uiv(this.addr,t)}function Mv(n,t,e){const i=this.cache,r=t.length,s=Wo(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||mf,s[o])}function Ev(n,t,e){const i=this.cache,r=t.length,s=Wo(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||_f,s[o])}function Tv(n,t,e){const i=this.cache,r=t.length,s=Wo(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||vf,s[o])}function bv(n,t,e){const i=this.cache,r=t.length,s=Wo(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||gf,s[o])}function Av(n){switch(n){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return uv;case 35674:return hv;case 35675:return fv;case 35676:return dv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return xv;case 36295:return yv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return bv}}class wv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ov(e.type)}}class Rv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Av(e.type)}}class Pv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function Vu(n,t){n.seq.push(t),n.map[t.id]=t}function Cv(n,t,e){const i=n.name,r=i.length;for(Ba.lastIndex=0;;){const s=Ba.exec(i),o=Ba.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Vu(e,u===void 0?new wv(a,n,t):new Rv(a,n,t));break}else{let c=e.map[a];c===void 0&&(c=new Pv(a),Vu(e,c)),e=c}}}class _o{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Cv(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Wu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Dv=37297;let Iv=0;function Lv(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Xu=new Yt;function Uv(n){ne._getMatrix(Xu,ne.workingColorSpace,n);const t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case Mo:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function $u(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Lv(n.getShaderSource(t),o)}else return r}function Nv(n,t){const e=Uv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fv(n,t){let e;switch(t){case Sp:e="Linear";break;case Mp:e="Reinhard";break;case Ep:e="Cineon";break;case Tp:e="ACESFilmic";break;case Ap:e="AgX";break;case wp:e="Neutral";break;case bp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ks=new V;function Ov(){ne.getLuminanceCoefficients(Ks);const n=Ks.x.toFixed(4),t=Ks.y.toFixed(4),e=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ts).join(`
`)}function zv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ts(n){return n!==""}function Yu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(Hv,Vv)}const Gv=new Map;function Vv(n,t){let e=qt[t];if(e===void 0){const i=Gv.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}const Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(n){return n.replace(Wv,Xv)}function Xv(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $v(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cr:case Dr:t="ENVMAP_TYPE_CUBE";break;case Go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Dr:t="ENVMAP_MODE_REFRACTION";break}return t}function jv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vh:t="ENVMAP_BLENDING_MULTIPLY";break;case xp:t="ENVMAP_BLENDING_MIX";break;case yp:t="ENVMAP_BLENDING_ADD";break}return t}function Zv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Kv(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=$v(e),u=Yv(e),h=qv(e),c=jv(e),f=Zv(e),d=Bv(e),_=zv(s),y=r.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ts).join(`
`),p.length>0&&(p+=`
`)):(m=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),p=[Zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?qt.tonemapping_pars_fragment:"",e.toneMapping!==gi?Fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Nv("linearToOutputTexel",e.outputColorSpace),Ov(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ts).join(`
`)),o=kl(o),o=Yu(o,e),o=qu(o,e),a=kl(a),a=Yu(a,e),a=qu(a,e),o=ju(o),a=ju(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+o,M=w+p+a,N=Wu(r,r.VERTEX_SHADER,b),I=Wu(r,r.FRAGMENT_SHADER,M);r.attachShader(y,N),r.attachShader(y,I),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function D(T){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(y).trim(),F=r.getShaderInfoLog(N).trim(),k=r.getShaderInfoLog(I).trim();let W=!0,E=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,N,I);else{const P=$u(r,N,"vertex"),R=$u(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+P+`
`+R)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||k==="")&&(E=!1);E&&(T.diagnostics={runnable:W,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(N),r.deleteShader(I),O=new _o(r,y),v=kv(r,y)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Dv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=I,this}let Jv=0;class Qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new tx(t),e.set(t,i)),i}}class tx{constructor(t){this.id=Jv++,this.code=t,this.usedTimes=0}}function ex(n,t,e,i,r,s,o){const a=new nf,l=new Qv,u=new Set,h=[],c=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return u.add(v),v===0?"uv":`uv${v}`}function m(v,x,T,U,F){const k=U.fog,W=F.geometry,E=v.isMeshStandardMaterial?U.environment:null,P=(v.isMeshStandardMaterial?e:t).get(v.envMap||E),R=P&&P.mapping===Go?P.image.height:null,B=_[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Y=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,K=Y!==void 0?Y.length:0;let tt=0;W.morphAttributes.position!==void 0&&(tt=1),W.morphAttributes.normal!==void 0&&(tt=2),W.morphAttributes.color!==void 0&&(tt=3);let at,X,Z,ot;if(B){const oe=Nn[B];at=oe.vertexShader,X=oe.fragmentShader}else at=v.vertexShader,X=v.fragmentShader,l.update(v),Z=l.getVertexShaderID(v),ot=l.getFragmentShaderID(v);const it=n.getRenderTarget(),lt=n.state.buffers.depth.getReversed(),It=F.isInstancedMesh===!0,_t=F.isBatchedMesh===!0,Ht=!!v.map,Zt=!!v.matcap,Ct=!!P,L=!!v.aoMap,yt=!!v.lightMap,jt=!!v.bumpMap,St=!!v.normalMap,ht=!!v.displacementMap,Jt=!!v.emissiveMap,Lt=!!v.metalnessMap,Xt=!!v.roughnessMap,ge=v.anisotropy>0,C=v.clearcoat>0,S=v.dispersion>0,$=v.iridescence>0,Q=v.sheen>0,nt=v.transmission>0,J=ge&&!!v.anisotropyMap,At=C&&!!v.clearcoatMap,pt=C&&!!v.clearcoatNormalMap,Et=C&&!!v.clearcoatRoughnessMap,Dt=$&&!!v.iridescenceMap,st=$&&!!v.iridescenceThicknessMap,Mt=Q&&!!v.sheenColorMap,Bt=Q&&!!v.sheenRoughnessMap,Ft=!!v.specularMap,dt=!!v.specularColorMap,zt=!!v.specularIntensityMap,z=nt&&!!v.transmissionMap,mt=nt&&!!v.thicknessMap,rt=!!v.gradientMap,bt=!!v.alphaMap,ct=v.alphaTest>0,et=!!v.alphaHash,wt=!!v.extensions;let $t=gi;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&($t=n.toneMapping);const pe={shaderID:B,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:X,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:_t,batchingColor:_t&&F._colorsTexture!==null,instancing:It,instancingColor:It&&F.instanceColor!==null,instancingMorph:It&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ur,alphaToCoverage:!!v.alphaToCoverage,map:Ht,matcap:Zt,envMap:Ct,envMapMode:Ct&&P.mapping,envMapCubeUVHeight:R,aoMap:L,lightMap:yt,bumpMap:jt,normalMap:St,displacementMap:f&&ht,emissiveMap:Jt,normalMapObjectSpace:St&&v.normalMapType===Dp,normalMapTangentSpace:St&&v.normalMapType===ac,metalnessMap:Lt,roughnessMap:Xt,anisotropy:ge,anisotropyMap:J,clearcoat:C,clearcoatMap:At,clearcoatNormalMap:pt,clearcoatRoughnessMap:Et,dispersion:S,iridescence:$,iridescenceMap:Dt,iridescenceThicknessMap:st,sheen:Q,sheenColorMap:Mt,sheenRoughnessMap:Bt,specularMap:Ft,specularColorMap:dt,specularIntensityMap:zt,transmission:nt,transmissionMap:z,thicknessMap:mt,gradientMap:rt,opaque:v.transparent===!1&&v.blending===Er&&v.alphaToCoverage===!1,alphaMap:bt,alphaTest:ct,alphaHash:et,combine:v.combine,mapUv:Ht&&y(v.map.channel),aoMapUv:L&&y(v.aoMap.channel),lightMapUv:yt&&y(v.lightMap.channel),bumpMapUv:jt&&y(v.bumpMap.channel),normalMapUv:St&&y(v.normalMap.channel),displacementMapUv:ht&&y(v.displacementMap.channel),emissiveMapUv:Jt&&y(v.emissiveMap.channel),metalnessMapUv:Lt&&y(v.metalnessMap.channel),roughnessMapUv:Xt&&y(v.roughnessMap.channel),anisotropyMapUv:J&&y(v.anisotropyMap.channel),clearcoatMapUv:At&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:pt&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:st&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&y(v.sheenRoughnessMap.channel),specularMapUv:Ft&&y(v.specularMap.channel),specularColorMapUv:dt&&y(v.specularColorMap.channel),specularIntensityMapUv:zt&&y(v.specularIntensityMap.channel),transmissionMapUv:z&&y(v.transmissionMap.channel),thicknessMapUv:mt&&y(v.thicknessMap.channel),alphaMapUv:bt&&y(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||ge),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ht||bt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:lt,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:tt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:$t,decodeVideoTexture:Ht&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===le,decodeVideoTextureEmissive:Jt&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===le,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jn,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:wt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&v.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return pe.vertexUv1s=u.has(1),pe.vertexUv2s=u.has(2),pe.vertexUv3s=u.has(3),u.clear(),pe}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)x.push(T),x.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(w(x,v),b(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function w(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function b(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function M(v){const x=_[v.type];let T;if(x){const U=Nn[x];T=yr.clone(U.uniforms)}else T=v.uniforms;return T}function N(v,x){let T;for(let U=0,F=h.length;U<F;U++){const k=h[U];if(k.cacheKey===x){T=k,++T.usedTimes;break}}return T===void 0&&(T=new Kv(n,x,v,s),h.push(T)),T}function I(v){if(--v.usedTimes===0){const x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function D(v){l.remove(v)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:N,releaseProgram:I,releaseShaderCache:D,programs:h,dispose:O}}function nx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function ix(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ku(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ju(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(c,f,d,_,y,m){let p=n[t];return p===void 0?(p={id:c.id,object:c,geometry:f,material:d,groupOrder:_,renderOrder:c.renderOrder,z:y,group:m},n[t]=p):(p.id=c.id,p.object=c,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=c.renderOrder,p.z=y,p.group=m),t++,p}function a(c,f,d,_,y,m){const p=o(c,f,d,_,y,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(c,f,d,_,y,m){const p=o(c,f,d,_,y,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function u(c,f){e.length>1&&e.sort(c||ix),i.length>1&&i.sort(f||Ku),r.length>1&&r.sort(f||Ku)}function h(){for(let c=t,f=n.length;c<f;c++){const d=n[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:u}}function rx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ju,n.set(i,[o])):r>=s.length?(o=new Ju,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function sx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new te};break;case"SpotLight":e={position:new V,direction:new V,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function ox(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ax=0;function lx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cx(n){const t=new sx,e=ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new de,o=new de;function a(u){let h=0,c=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,_=0,y=0,m=0,p=0,w=0,b=0,M=0,N=0,I=0,D=0;u.sort(lx);for(let v=0,x=u.length;v<x;v++){const T=u[v],U=T.color,F=T.intensity,k=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=U.r*F,c+=U.g*F,f+=U.b*F;else if(T.isLightProbe){for(let E=0;E<9;E++)i.probe[E].addScaledVector(T.sh.coefficients[E],F);D++}else if(T.isDirectionalLight){const E=t.get(T);if(E.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const P=T.shadow,R=e.get(T);R.shadowIntensity=P.intensity,R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.directionalShadow[d]=R,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=T.shadow.matrix,w++}i.directional[d]=E,d++}else if(T.isSpotLight){const E=t.get(T);E.position.setFromMatrixPosition(T.matrixWorld),E.color.copy(U).multiplyScalar(F),E.distance=k,E.coneCos=Math.cos(T.angle),E.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),E.decay=T.decay,i.spot[y]=E;const P=T.shadow;if(T.map&&(i.spotLightMap[N]=T.map,N++,P.updateMatrices(T),T.castShadow&&I++),i.spotLightMatrix[y]=P.matrix,T.castShadow){const R=e.get(T);R.shadowIntensity=P.intensity,R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,i.spotShadow[y]=R,i.spotShadowMap[y]=W,M++}y++}else if(T.isRectAreaLight){const E=t.get(T);E.color.copy(U).multiplyScalar(F),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=E,m++}else if(T.isPointLight){const E=t.get(T);if(E.color.copy(T.color).multiplyScalar(T.intensity),E.distance=T.distance,E.decay=T.decay,T.castShadow){const P=T.shadow,R=e.get(T);R.shadowIntensity=P.intensity,R.shadowBias=P.bias,R.shadowNormalBias=P.normalBias,R.shadowRadius=P.radius,R.shadowMapSize=P.mapSize,R.shadowCameraNear=P.camera.near,R.shadowCameraFar=P.camera.far,i.pointShadow[_]=R,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=T.shadow.matrix,b++}i.point[_]=E,_++}else if(T.isHemisphereLight){const E=t.get(T);E.skyColor.copy(T.color).multiplyScalar(F),E.groundColor.copy(T.groundColor).multiplyScalar(F),i.hemi[p]=E,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=c,i.ambient[2]=f;const O=i.hash;(O.directionalLength!==d||O.pointLength!==_||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==w||O.numPointShadows!==b||O.numSpotShadows!==M||O.numSpotMaps!==N||O.numLightProbes!==D)&&(i.directional.length=d,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+N-I,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,O.directionalLength=d,O.pointLength=_,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=w,O.numPointShadows=b,O.numSpotShadows=M,O.numSpotMaps=N,O.numLightProbes=D,i.version=ax++)}function l(u,h){let c=0,f=0,d=0,_=0,y=0;const m=h.matrixWorldInverse;for(let p=0,w=u.length;p<w;p++){const b=u[p];if(b.isDirectionalLight){const M=i.directional[c];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),c++}else if(b.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Qu(n){const t=new cx(n),e=[],i=[];function r(h){u.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ux(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Qu(n),t.set(r,[a])):s>=o.length?(a=new Qu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function dx(n,t,e){let i=new fc;const r=new Vt,s=new Vt,o=new ye,a=new Um({depthPacking:Cp}),l=new Nm,u={},h=e.maxTextureSize,c={[vi]:en,[en]:vi,[Jn]:Jn},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:hx,fragmentShader:fx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new cn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let p=this.type;this.render=function(I,D,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const v=n.getRenderTarget(),x=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),U=n.state;U.setBlending(We),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==Kn&&this.type===Kn,k=p===Kn&&this.type!==Kn;for(let W=0,E=I.length;W<E;W++){const P=I[W],R=P.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;r.copy(R.mapSize);const B=R.getFrameExtents();if(r.multiply(B),s.copy(R.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/B.x),r.x=s.x*B.x,R.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/B.y),r.y=s.y*B.y,R.mapSize.y=s.y)),R.map===null||F===!0||k===!0){const K=this.type!==Kn?{minFilter:$e,magFilter:$e}:{};R.map!==null&&R.map.dispose(),R.map=new kn(r.x,r.y,K),R.map.texture.name=P.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const Y=R.getViewportCount();for(let K=0;K<Y;K++){const tt=R.getViewport(K);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),U.viewport(o),R.updateMatrices(P,K),i=R.getFrustum(),M(D,O,R.camera,P,this.type)}R.isPointLightShadow!==!0&&this.type===Kn&&w(R,O),R.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,x,T)};function w(I,D){const O=t.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new kn(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(D,null,O,f,y,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(D,null,O,d,y,null)}function b(I,D,O,v){let x=null;const T=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(T!==void 0)x=T;else if(x=O.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const U=x.uuid,F=D.uuid;let k=u[U];k===void 0&&(k={},u[U]=k);let W=k[F];W===void 0&&(W=x.clone(),k[F]=W,D.addEventListener("dispose",N)),x=W}if(x.visible=D.visible,x.wireframe=D.wireframe,v===Kn?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:c[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=n.properties.get(x);U.light=O}return x}function M(I,D,O,v,x){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===Kn)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const F=t.update(I),k=I.material;if(Array.isArray(k)){const W=F.groups;for(let E=0,P=W.length;E<P;E++){const R=W[E],B=k[R.materialIndex];if(B&&B.visible){const Y=b(I,B,v,x);I.onBeforeShadow(n,I,D,O,F,Y,R),n.renderBufferDirect(O,null,F,Y,I,R),I.onAfterShadow(n,I,D,O,F,Y,R)}}}else if(k.visible){const W=b(I,k,v,x);I.onBeforeShadow(n,I,D,O,F,W,null),n.renderBufferDirect(O,null,F,W,I,null),I.onAfterShadow(n,I,D,O,F,W,null)}}const U=I.children;for(let F=0,k=U.length;F<k;F++)M(U[F],D,O,v,x)}function N(I){I.target.removeEventListener("dispose",N);for(const O in u){const v=u[O],x=I.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const px={[rl]:sl,[ol]:cl,[al]:ul,[Pr]:ll,[sl]:rl,[cl]:ol,[ul]:al,[ll]:Pr};function mx(n,t){function e(){let z=!1;const mt=new ye;let rt=null;const bt=new ye(0,0,0,0);return{setMask:function(ct){rt!==ct&&!z&&(n.colorMask(ct,ct,ct,ct),rt=ct)},setLocked:function(ct){z=ct},setClear:function(ct,et,wt,$t,pe){pe===!0&&(ct*=$t,et*=$t,wt*=$t),mt.set(ct,et,wt,$t),bt.equals(mt)===!1&&(n.clearColor(ct,et,wt,$t),bt.copy(mt))},reset:function(){z=!1,rt=null,bt.set(-1,0,0,0)}}}function i(){let z=!1,mt=!1,rt=null,bt=null,ct=null;return{setReversed:function(et){if(mt!==et){const wt=t.get("EXT_clip_control");et?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),mt=et;const $t=ct;ct=null,this.setClear($t)}},getReversed:function(){return mt},setTest:function(et){et?it(n.DEPTH_TEST):lt(n.DEPTH_TEST)},setMask:function(et){rt!==et&&!z&&(n.depthMask(et),rt=et)},setFunc:function(et){if(mt&&(et=px[et]),bt!==et){switch(et){case rl:n.depthFunc(n.NEVER);break;case sl:n.depthFunc(n.ALWAYS);break;case ol:n.depthFunc(n.LESS);break;case Pr:n.depthFunc(n.LEQUAL);break;case al:n.depthFunc(n.EQUAL);break;case ll:n.depthFunc(n.GEQUAL);break;case cl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=et}},setLocked:function(et){z=et},setClear:function(et){ct!==et&&(mt&&(et=1-et),n.clearDepth(et),ct=et)},reset:function(){z=!1,rt=null,bt=null,ct=null,mt=!1}}}function r(){let z=!1,mt=null,rt=null,bt=null,ct=null,et=null,wt=null,$t=null,pe=null;return{setTest:function(oe){z||(oe?it(n.STENCIL_TEST):lt(n.STENCIL_TEST))},setMask:function(oe){mt!==oe&&!z&&(n.stencilMask(oe),mt=oe)},setFunc:function(oe,En,Xn){(rt!==oe||bt!==En||ct!==Xn)&&(n.stencilFunc(oe,En,Xn),rt=oe,bt=En,ct=Xn)},setOp:function(oe,En,Xn){(et!==oe||wt!==En||$t!==Xn)&&(n.stencilOp(oe,En,Xn),et=oe,wt=En,$t=Xn)},setLocked:function(oe){z=oe},setClear:function(oe){pe!==oe&&(n.clearStencil(oe),pe=oe)},reset:function(){z=!1,mt=null,rt=null,bt=null,ct=null,et=null,wt=null,$t=null,pe=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let h={},c={},f=new WeakMap,d=[],_=null,y=!1,m=null,p=null,w=null,b=null,M=null,N=null,I=null,D=new te(0,0,0),O=0,v=!1,x=null,T=null,U=null,F=null,k=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let E=!1,P=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(R)[1]),E=P>=1):R.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),E=P>=2);let B=null,Y={};const K=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),at=new ye().fromArray(K),X=new ye().fromArray(tt);function Z(z,mt,rt,bt){const ct=new Uint8Array(4),et=n.createTexture();n.bindTexture(z,et),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<rt;wt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(mt+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return et}const ot={};ot[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),ot[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ot[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(Pr),jt(!1),St(Kc),it(n.CULL_FACE),L(We);function it(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function lt(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function It(z,mt){return c[z]!==mt?(n.bindFramebuffer(z,mt),c[z]=mt,z===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=mt),z===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function _t(z,mt){let rt=d,bt=!1;if(z){rt=f.get(mt),rt===void 0&&(rt=[],f.set(mt,rt));const ct=z.textures;if(rt.length!==ct.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let et=0,wt=ct.length;et<wt;et++)rt[et]=n.COLOR_ATTACHMENT0+et;rt.length=ct.length,bt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,bt=!0);bt&&n.drawBuffers(rt)}function Ht(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const Zt={[Qn]:n.FUNC_ADD,[sp]:n.FUNC_SUBTRACT,[op]:n.FUNC_REVERSE_SUBTRACT};Zt[ap]=n.MIN,Zt[lp]=n.MAX;const Ct={[el]:n.ZERO,[cp]:n.ONE,[up]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[pp]:n.SRC_ALPHA_SATURATE,[Gh]:n.DST_COLOR,[Hh]:n.DST_ALPHA,[hp]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[dp]:n.ONE_MINUS_DST_COLOR,[fp]:n.ONE_MINUS_DST_ALPHA,[mp]:n.CONSTANT_COLOR,[gp]:n.ONE_MINUS_CONSTANT_COLOR,[_p]:n.CONSTANT_ALPHA,[vp]:n.ONE_MINUS_CONSTANT_ALPHA};function L(z,mt,rt,bt,ct,et,wt,$t,pe,oe){if(z===We){y===!0&&(lt(n.BLEND),y=!1);return}if(y===!1&&(it(n.BLEND),y=!0),z!==kh){if(z!==m||oe!==v){if((p!==Qn||M!==Qn)&&(n.blendEquation(n.FUNC_ADD),p=Qn,M=Qn),oe)switch(z){case Er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFunc(n.ONE,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,b=null,N=null,I=null,D.set(0,0,0),O=0,m=z,v=oe}return}ct=ct||mt,et=et||rt,wt=wt||bt,(mt!==p||ct!==M)&&(n.blendEquationSeparate(Zt[mt],Zt[ct]),p=mt,M=ct),(rt!==w||bt!==b||et!==N||wt!==I)&&(n.blendFuncSeparate(Ct[rt],Ct[bt],Ct[et],Ct[wt]),w=rt,b=bt,N=et,I=wt),($t.equals(D)===!1||pe!==O)&&(n.blendColor($t.r,$t.g,$t.b,pe),D.copy($t),O=pe),m=z,v=!1}function yt(z,mt){z.side===Jn?lt(n.CULL_FACE):it(n.CULL_FACE);let rt=z.side===en;mt&&(rt=!rt),jt(rt),z.blending===Er&&z.transparent===!1?L(We):L(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const bt=z.stencilWrite;a.setTest(bt),bt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Jt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function jt(z){x!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),x=z)}function St(z){z!==np?(it(n.CULL_FACE),z!==T&&(z===Kc?n.cullFace(n.BACK):z===ip?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):lt(n.CULL_FACE),T=z}function ht(z){z!==U&&(E&&n.lineWidth(z),U=z)}function Jt(z,mt,rt){z?(it(n.POLYGON_OFFSET_FILL),(F!==mt||k!==rt)&&(n.polygonOffset(mt,rt),F=mt,k=rt)):lt(n.POLYGON_OFFSET_FILL)}function Lt(z){z?it(n.SCISSOR_TEST):lt(n.SCISSOR_TEST)}function Xt(z){z===void 0&&(z=n.TEXTURE0+W-1),B!==z&&(n.activeTexture(z),B=z)}function ge(z,mt,rt){rt===void 0&&(B===null?rt=n.TEXTURE0+W-1:rt=B);let bt=Y[rt];bt===void 0&&(bt={type:void 0,texture:void 0},Y[rt]=bt),(bt.type!==z||bt.texture!==mt)&&(B!==rt&&(n.activeTexture(rt),B=rt),n.bindTexture(z,mt||ot[z]),bt.type=z,bt.texture=mt)}function C(){const z=Y[B];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Et(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(z){at.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),at.copy(z))}function Bt(z){X.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),X.copy(z))}function Ft(z,mt){let rt=u.get(mt);rt===void 0&&(rt=new WeakMap,u.set(mt,rt));let bt=rt.get(z);bt===void 0&&(bt=n.getUniformBlockIndex(mt,z.name),rt.set(z,bt))}function dt(z,mt){const bt=u.get(mt).get(z);l.get(mt)!==bt&&(n.uniformBlockBinding(mt,bt,z.__bindingPointIndex),l.set(mt,bt))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},B=null,Y={},c={},f=new WeakMap,d=[],_=null,y=!1,m=null,p=null,w=null,b=null,M=null,N=null,I=null,D=new te(0,0,0),O=0,v=!1,x=null,T=null,U=null,F=null,k=null,at.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:lt,bindFramebuffer:It,drawBuffers:_t,useProgram:Ht,setBlending:L,setMaterial:yt,setFlipSided:jt,setCullFace:St,setLineWidth:ht,setPolygonOffset:Jt,setScissorTest:Lt,activeTexture:Xt,bindTexture:ge,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:$,texImage2D:Dt,texImage3D:st,updateUBOMapping:Ft,uniformBlockBinding:dt,texStorage2D:pt,texStorage3D:Et,texSubImage2D:Q,texSubImage3D:nt,compressedTexSubImage2D:J,compressedTexSubImage3D:At,scissor:Mt,viewport:Bt,reset:zt}}function gx(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Vt,h=new WeakMap;let c;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return d?new OffscreenCanvas(C,S):To("canvas")}function y(C,S,$){let Q=1;const nt=ge(C);if((nt.width>$||nt.height>$)&&(Q=$/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*nt.width),At=Math.floor(Q*nt.height);c===void 0&&(c=_(J,At));const pt=S?_(J,At):c;return pt.width=J,pt.height=At,pt.getContext("2d").drawImage(C,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+At+")."),pt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,S,$,Q,nt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===n.RED&&($===n.FLOAT&&(J=n.R32F),$===n.HALF_FLOAT&&(J=n.R16F),$===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.R8UI),$===n.UNSIGNED_SHORT&&(J=n.R16UI),$===n.UNSIGNED_INT&&(J=n.R32UI),$===n.BYTE&&(J=n.R8I),$===n.SHORT&&(J=n.R16I),$===n.INT&&(J=n.R32I)),S===n.RG&&($===n.FLOAT&&(J=n.RG32F),$===n.HALF_FLOAT&&(J=n.RG16F),$===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RG8UI),$===n.UNSIGNED_SHORT&&(J=n.RG16UI),$===n.UNSIGNED_INT&&(J=n.RG32UI),$===n.BYTE&&(J=n.RG8I),$===n.SHORT&&(J=n.RG16I),$===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RGB8UI),$===n.UNSIGNED_SHORT&&(J=n.RGB16UI),$===n.UNSIGNED_INT&&(J=n.RGB32UI),$===n.BYTE&&(J=n.RGB8I),$===n.SHORT&&(J=n.RGB16I),$===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),$===n.UNSIGNED_INT&&(J=n.RGBA32UI),$===n.BYTE&&(J=n.RGBA8I),$===n.SHORT&&(J=n.RGBA16I),$===n.INT&&(J=n.RGBA32I)),S===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),S===n.RGBA){const At=nt?Mo:ne.getTransfer(Q);$===n.FLOAT&&(J=n.RGBA32F),$===n.HALF_FLOAT&&(J=n.RGBA16F),$===n.UNSIGNED_BYTE&&(J=At===le?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(C,S){let $;return C?S===null||S===qi||S===Ir?$=n.DEPTH24_STENCIL8:S===Bn?$=n.DEPTH32F_STENCIL8:S===as&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===Ir?$=n.DEPTH_COMPONENT24:S===Bn?$=n.DEPTH_COMPONENT32F:S===as&&($=n.DEPTH_COMPONENT16),$}function N(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==$e&&C.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function I(C){const S=C.target;S.removeEventListener("dispose",I),O(S),S.isVideoTexture&&h.delete(S)}function D(C){const S=C.target;S.removeEventListener("dispose",D),x(S)}function O(C){const S=i.get(C);if(S.__webglInit===void 0)return;const $=C.source,Q=f.get($);if(Q){const nt=Q[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&v(C),Object.keys(Q).length===0&&f.delete($)}i.remove(C)}function v(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const $=C.source,Q=f.get($);delete Q[S.__cacheKey],o.memory.textures--}function x(C){const S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let nt=0;nt<S.__webglFramebuffer[Q].length;nt++)n.deleteFramebuffer(S.__webglFramebuffer[Q][nt]);else n.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const $=C.textures;for(let Q=0,nt=$.length;Q<nt;Q++){const J=i.get($[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove($[Q])}i.remove(C)}let T=0;function U(){T=0}function F(){const C=T;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),T+=1,C}function k(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function W(C,S){const $=i.get(C);if(C.isVideoTexture&&Lt(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot($,C,S);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+S)}function E(C,S){const $=i.get(C);if(C.version>0&&$.__version!==C.version){ot($,C,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+S)}function P(C,S){const $=i.get(C);if(C.version>0&&$.__version!==C.version){ot($,C,S);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+S)}function R(C,S){const $=i.get(C);if(C.version>0&&$.__version!==C.version){it($,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+S)}const B={[os]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},Y={[$e]:n.NEAREST,[Rp]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[aa]:n.LINEAR_MIPMAP_NEAREST,[Vi]:n.LINEAR_MIPMAP_LINEAR},K={[Ip]:n.NEVER,[Bp]:n.ALWAYS,[Lp]:n.LESS,[Jh]:n.LEQUAL,[Up]:n.EQUAL,[Op]:n.GEQUAL,[Np]:n.GREATER,[Fp]:n.NOTEQUAL};function tt(C,S){if(S.type===Bn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===On||S.magFilter===aa||S.magFilter===ws||S.magFilter===Vi||S.minFilter===On||S.minFilter===aa||S.minFilter===ws||S.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,B[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,B[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,B[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Y[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Y[S.minFilter]),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===$e||S.minFilter!==ws&&S.minFilter!==Vi||S.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function at(C,S){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",I));const Q=S.source;let nt=f.get(Q);nt===void 0&&(nt={},f.set(Q,nt));const J=k(S);if(J!==C.__cacheKey){nt[J]===void 0&&(nt[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),nt[J].usedTimes++;const At=nt[C.__cacheKey];At!==void 0&&(nt[C.__cacheKey].usedTimes--,At.usedTimes===0&&v(S)),C.__cacheKey=J,C.__webglTexture=nt[J].texture}return $}function X(C,S,$){return Math.floor(Math.floor(C/$)/S)}function Z(C,S,$,Q){const J=C.updateRanges;if(J.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,$,Q,S.data);else{J.sort((st,Mt)=>st.start-Mt.start);let At=0;for(let st=1;st<J.length;st++){const Mt=J[At],Bt=J[st],Ft=Mt.start+Mt.count,dt=X(Bt.start,S.width,4),zt=X(Mt.start,S.width,4);Bt.start<=Ft+1&&dt===zt&&X(Bt.start+Bt.count-1,S.width,4)===dt?Mt.count=Math.max(Mt.count,Bt.start+Bt.count-Mt.start):(++At,J[At]=Bt)}J.length=At+1;const pt=n.getParameter(n.UNPACK_ROW_LENGTH),Et=n.getParameter(n.UNPACK_SKIP_PIXELS),Dt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let st=0,Mt=J.length;st<Mt;st++){const Bt=J[st],Ft=Math.floor(Bt.start/4),dt=Math.ceil(Bt.count/4),zt=Ft%S.width,z=Math.floor(Ft/S.width),mt=dt,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,zt,z,mt,rt,$,Q,S.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Et),n.pixelStorei(n.UNPACK_SKIP_ROWS,Dt)}}function ot(C,S,$){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);const nt=at(C,S),J=S.source;e.bindTexture(Q,C.__webglTexture,n.TEXTURE0+$);const At=i.get(J);if(J.version!==At.__version||nt===!0){e.activeTexture(n.TEXTURE0+$);const pt=ne.getPrimaries(ne.workingColorSpace),Et=S.colorSpace===di?null:ne.getPrimaries(S.colorSpace),Dt=S.colorSpace===di||pt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let st=y(S.image,!1,r.maxTextureSize);st=Xt(S,st);const Mt=s.convert(S.format,S.colorSpace),Bt=s.convert(S.type);let Ft=b(S.internalFormat,Mt,Bt,S.colorSpace,S.isVideoTexture);tt(Q,S);let dt;const zt=S.mipmaps,z=S.isVideoTexture!==!0,mt=At.__version===void 0||nt===!0,rt=J.dataReady,bt=N(S,st);if(S.isDepthTexture)Ft=M(S.format===Lr,S.type),mt&&(z?e.texStorage2D(n.TEXTURE_2D,1,Ft,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,Ft,st.width,st.height,0,Mt,Bt,null));else if(S.isDataTexture)if(zt.length>0){z&&mt&&e.texStorage2D(n.TEXTURE_2D,bt,Ft,zt[0].width,zt[0].height);for(let ct=0,et=zt.length;ct<et;ct++)dt=zt[ct],z?rt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,dt.width,dt.height,Mt,Bt,dt.data):e.texImage2D(n.TEXTURE_2D,ct,Ft,dt.width,dt.height,0,Mt,Bt,dt.data);S.generateMipmaps=!1}else z?(mt&&e.texStorage2D(n.TEXTURE_2D,bt,Ft,st.width,st.height),rt&&Z(S,st,Mt,Bt)):e.texImage2D(n.TEXTURE_2D,0,Ft,st.width,st.height,0,Mt,Bt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){z&&mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Ft,zt[0].width,zt[0].height,st.depth);for(let ct=0,et=zt.length;ct<et;ct++)if(dt=zt[ct],S.format!==Dn)if(Mt!==null)if(z){if(rt)if(S.layerUpdates.size>0){const wt=Pu(dt.width,dt.height,S.format,S.type);for(const $t of S.layerUpdates){const pe=dt.data.subarray($t*wt/dt.data.BYTES_PER_ELEMENT,($t+1)*wt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,$t,dt.width,dt.height,1,Mt,pe)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,dt.width,dt.height,st.depth,Mt,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,Ft,dt.width,dt.height,st.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,dt.width,dt.height,st.depth,Mt,Bt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,Ft,dt.width,dt.height,st.depth,0,Mt,Bt,dt.data)}else{z&&mt&&e.texStorage2D(n.TEXTURE_2D,bt,Ft,zt[0].width,zt[0].height);for(let ct=0,et=zt.length;ct<et;ct++)dt=zt[ct],S.format!==Dn?Mt!==null?z?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,dt.width,dt.height,Mt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,Ft,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?rt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,dt.width,dt.height,Mt,Bt,dt.data):e.texImage2D(n.TEXTURE_2D,ct,Ft,dt.width,dt.height,0,Mt,Bt,dt.data)}else if(S.isDataArrayTexture)if(z){if(mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Ft,st.width,st.height,st.depth),rt)if(S.layerUpdates.size>0){const ct=Pu(st.width,st.height,S.format,S.type);for(const et of S.layerUpdates){const wt=st.data.subarray(et*ct/st.data.BYTES_PER_ELEMENT,(et+1)*ct/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,st.width,st.height,1,Mt,Bt,wt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,Bt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,st.width,st.height,st.depth,0,Mt,Bt,st.data);else if(S.isData3DTexture)z?(mt&&e.texStorage3D(n.TEXTURE_3D,bt,Ft,st.width,st.height,st.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,Bt,st.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,st.width,st.height,st.depth,0,Mt,Bt,st.data);else if(S.isFramebufferTexture){if(mt)if(z)e.texStorage2D(n.TEXTURE_2D,bt,Ft,st.width,st.height);else{let ct=st.width,et=st.height;for(let wt=0;wt<bt;wt++)e.texImage2D(n.TEXTURE_2D,wt,Ft,ct,et,0,Mt,Bt,null),ct>>=1,et>>=1}}else if(zt.length>0){if(z&&mt){const ct=ge(zt[0]);e.texStorage2D(n.TEXTURE_2D,bt,Ft,ct.width,ct.height)}for(let ct=0,et=zt.length;ct<et;ct++)dt=zt[ct],z?rt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Mt,Bt,dt):e.texImage2D(n.TEXTURE_2D,ct,Ft,Mt,Bt,dt);S.generateMipmaps=!1}else if(z){if(mt){const ct=ge(st);e.texStorage2D(n.TEXTURE_2D,bt,Ft,ct.width,ct.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Bt,st)}else e.texImage2D(n.TEXTURE_2D,0,Ft,Mt,Bt,st);m(S)&&p(Q),At.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function it(C,S,$){if(S.image.length!==6)return;const Q=at(C,S),nt=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+$);const J=i.get(nt);if(nt.version!==J.__version||Q===!0){e.activeTexture(n.TEXTURE0+$);const At=ne.getPrimaries(ne.workingColorSpace),pt=S.colorSpace===di?null:ne.getPrimaries(S.colorSpace),Et=S.colorSpace===di||At===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Dt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let et=0;et<6;et++)!Dt&&!st?Mt[et]=y(S.image[et],!0,r.maxCubemapSize):Mt[et]=st?S.image[et].image:S.image[et],Mt[et]=Xt(S,Mt[et]);const Bt=Mt[0],Ft=s.convert(S.format,S.colorSpace),dt=s.convert(S.type),zt=b(S.internalFormat,Ft,dt,S.colorSpace),z=S.isVideoTexture!==!0,mt=J.__version===void 0||Q===!0,rt=nt.dataReady;let bt=N(S,Bt);tt(n.TEXTURE_CUBE_MAP,S);let ct;if(Dt){z&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,zt,Bt.width,Bt.height);for(let et=0;et<6;et++){ct=Mt[et].mipmaps;for(let wt=0;wt<ct.length;wt++){const $t=ct[wt];S.format!==Dn?Ft!==null?z?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,$t.width,$t.height,Ft,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,zt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,$t.width,$t.height,Ft,dt,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,zt,$t.width,$t.height,0,Ft,dt,$t.data)}}}else{if(ct=S.mipmaps,z&&mt){ct.length>0&&bt++;const et=ge(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,zt,et.width,et.height)}for(let et=0;et<6;et++)if(st){z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Mt[et].width,Mt[et].height,Ft,dt,Mt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,zt,Mt[et].width,Mt[et].height,0,Ft,dt,Mt[et].data);for(let wt=0;wt<ct.length;wt++){const pe=ct[wt].image[et].image;z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,pe.width,pe.height,Ft,dt,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,zt,pe.width,pe.height,0,Ft,dt,pe.data)}}else{z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ft,dt,Mt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,zt,Ft,dt,Mt[et]);for(let wt=0;wt<ct.length;wt++){const $t=ct[wt];z?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Ft,dt,$t.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,zt,Ft,dt,$t.image[et])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),J.__version=nt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function lt(C,S,$,Q,nt,J){const At=s.convert($.format,$.colorSpace),pt=s.convert($.type),Et=b($.internalFormat,At,pt,$.colorSpace),Dt=i.get(S),st=i.get($);if(st.__renderTarget=S,!Dt.__hasExternalTextures){const Mt=Math.max(1,S.width>>J),Bt=Math.max(1,S.height>>J);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,Et,Mt,Bt,S.depth,0,At,pt,null):e.texImage2D(nt,J,Et,Mt,Bt,0,At,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Jt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,nt,st.__webglTexture,0,ht(S)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,nt,st.__webglTexture,J),e.bindFramebuffer(n.FRAMEBUFFER,null)}function It(C,S,$){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer){const Q=S.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,J=M(S.stencilBuffer,nt),At=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=ht(S);Jt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,J,S.width,S.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,C)}else{const Q=S.textures;for(let nt=0;nt<Q.length;nt++){const J=Q[nt],At=s.convert(J.format,J.colorSpace),pt=s.convert(J.type),Et=b(J.internalFormat,At,pt,J.colorSpace),Dt=ht(S);$&&Jt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,Et,S.width,S.height):Jt(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt,Et,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Et,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _t(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const nt=Q.__webglTexture,J=ht(S);if(S.depthTexture.format===ls)Jt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(S.depthTexture.format===Lr)Jt(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ht(C){const S=i.get(C),$=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const nt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),S.__depthDisposeCallback=nt}S.__boundDepthTexture=Q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const Q=C.texture.mipmaps;Q&&Q.length>0?_t(S.__webglFramebuffer[0],C):_t(S.__webglFramebuffer,C)}else if($){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=n.createRenderbuffer(),It(S.__webglDepthbuffer[Q],C,!1);else{const nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}else{const Q=C.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),It(S.__webglDepthbuffer,C,!1);else{const nt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,nt,n.RENDERBUFFER,J)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(C,S,$){const Q=i.get(C);S!==void 0&&lt(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ht(C)}function Ct(C){const S=C.texture,$=i.get(C),Q=i.get(S);C.addEventListener("dispose",D);const nt=C.textures,J=C.isWebGLCubeRenderTarget===!0,At=nt.length>1;if(At||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,o.memory.textures++),J){$.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer[pt]=[];for(let Et=0;Et<S.mipmaps.length;Et++)$.__webglFramebuffer[pt][Et]=n.createFramebuffer()}else $.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){$.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)$.__webglFramebuffer[pt]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(At)for(let pt=0,Et=nt.length;pt<Et;pt++){const Dt=i.get(nt[pt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Jt(C)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pt=0;pt<nt.length;pt++){const Et=nt[pt];$.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[pt]);const Dt=s.convert(Et.format,Et.colorSpace),st=s.convert(Et.type),Mt=b(Et.internalFormat,Dt,st,Et.colorSpace,C.isXRRenderTarget===!0),Bt=ht(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Mt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,$.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),It($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),tt(n.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)lt($.__webglFramebuffer[pt][Et],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Et);else lt($.__webglFramebuffer[pt],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(S)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let pt=0,Et=nt.length;pt<Et;pt++){const Dt=nt[pt],st=i.get(Dt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),tt(n.TEXTURE_2D,Dt),lt($.__webglFramebuffer,C,Dt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),m(Dt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,Q.__webglTexture),tt(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)lt($.__webglFramebuffer[Et],C,S,n.COLOR_ATTACHMENT0,pt,Et);else lt($.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,pt,0);m(S)&&p(pt),e.unbindTexture()}C.depthBuffer&&Ht(C)}function L(C){const S=C.textures;for(let $=0,Q=S.length;$<Q;$++){const nt=S[$];if(m(nt)){const J=w(C),At=i.get(nt).__webglTexture;e.bindTexture(J,At),p(J),e.unbindTexture()}}}const yt=[],jt=[];function St(C){if(C.samples>0){if(Jt(C)===!1){const S=C.textures,$=C.width,Q=C.height;let nt=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(C),pt=S.length>1;if(pt)for(let Dt=0;Dt<S.length;Dt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);const Et=C.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Dt=0;Dt<S.length;Dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[Dt]);const st=i.get(S[Dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,$,Q,0,0,$,Q,nt,n.NEAREST),l===!0&&(yt.length=0,jt.length=0,yt.push(n.COLOR_ATTACHMENT0+Dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(yt.push(J),jt.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,jt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let Dt=0;Dt<S.length;Dt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.RENDERBUFFER,At.__webglColorRenderbuffer[Dt]);const st=i.get(S[Dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Dt,n.TEXTURE_2D,st,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ht(C){return Math.min(r.maxSamples,C.samples)}function Jt(C){const S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Lt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Xt(C,S){const $=C.colorSpace,Q=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==Ur&&$!==di&&(ne.getTransfer($)===le?(Q!==Dn||nt!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),S}function ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=E,this.setTexture3D=P,this.setTextureCube=R,this.rebindTextures=Zt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Jt}function _x(n,t){function e(i,r=di){let s;const o=ne.getTransfer(r);if(i===zn)return n.UNSIGNED_BYTE;if(i===ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return n.BYTE;if(i===$h)return n.SHORT;if(i===as)return n.UNSIGNED_SHORT;if(i===tc)return n.INT;if(i===qi)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===qh)return n.ALPHA;if(i===jh)return n.RGB;if(i===Dn)return n.RGBA;if(i===ls)return n.DEPTH_COMPONENT;if(i===Lr)return n.DEPTH_STENCIL;if(i===ic)return n.RED;if(i===rc)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===sc)return n.RG_INTEGER;if(i===oc)return n.RGBA_INTEGER;if(i===ho||i===fo||i===po||i===mo)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pl||i===ml||i===gl||i===_l)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===xl||i===yl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vl||i===xl)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sl||i===Ml||i===El||i===Tl||i===bl||i===Al||i===wl||i===Rl||i===Pl||i===Cl||i===Dl||i===Il||i===Ll||i===Ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===El)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Il)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===go||i===Nl||i===Fl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===go)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kh||i===Ol||i===Bl||i===zl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===go)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ol)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new Ye,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Qe({vertexShader:vx,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new cn(new ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends Ji{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,h=null,c=null,f=null,d=null,_=null;const y=new yx,m=e.getContextAttributes();let p=null,w=null;const b=[],M=[],N=new Vt;let I=null;const D=new Sn;D.viewport=new ye;const O=new Sn;O.viewport=new ye;const v=[D,O],x=new km;let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=b[X];return Z===void 0&&(Z=new Ra,b[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=b[X];return Z===void 0&&(Z=new Ra,b[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=b[X];return Z===void 0&&(Z=new Ra,b[X]=Z),Z.getHandSpace()};function F(X){const Z=M.indexOf(X.inputSource);if(Z===-1)return;const ot=b[Z];ot!==void 0&&(ot.update(X.inputSource,X.frame,u||o),ot.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",W);for(let X=0;X<b.length;X++){const Z=M[X];Z!==null&&(M[X]=null,b[X].disconnect(Z))}T=null,U=null,y.reset(),t.setRenderTarget(p),d=null,f=null,c=null,r=null,w=null,at.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",k),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,it=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?Lr:ls,it=m.stencil?Ir:qi);const It={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:s};c=new XRWebGLBinding(r,e),f=c.createProjectionLayer(It),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new kn(f.textureWidth,f.textureHeight,{format:Dn,type:zn,depthTexture:new dc(f.textureWidth,f.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new kn(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(X){for(let Z=0;Z<X.removed.length;Z++){const ot=X.removed[Z],it=M.indexOf(ot);it>=0&&(M[it]=null,b[it].disconnect(ot))}for(let Z=0;Z<X.added.length;Z++){const ot=X.added[Z];let it=M.indexOf(ot);if(it===-1){for(let It=0;It<b.length;It++)if(It>=M.length){M.push(ot),it=It;break}else if(M[It]===null){M[It]=ot,it=It;break}if(it===-1)break}const lt=b[it];lt&&lt.connect(ot)}}const E=new V,P=new V;function R(X,Z,ot){E.setFromMatrixPosition(Z.matrixWorld),P.setFromMatrixPosition(ot.matrixWorld);const it=E.distanceTo(P),lt=Z.projectionMatrix.elements,It=ot.projectionMatrix.elements,_t=lt[14]/(lt[10]-1),Ht=lt[14]/(lt[10]+1),Zt=(lt[9]+1)/lt[5],Ct=(lt[9]-1)/lt[5],L=(lt[8]-1)/lt[0],yt=(It[8]+1)/It[0],jt=_t*L,St=_t*yt,ht=it/(-L+yt),Jt=ht*-L;if(Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Jt),X.translateZ(ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),lt[10]===-1)X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Lt=_t+ht,Xt=Ht+ht,ge=jt-Jt,C=St+(it-Jt),S=Zt*Ht/Xt*Lt,$=Ct*Ht/Xt*Lt;X.projectionMatrix.makePerspective(ge,C,S,$,Lt,Xt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function B(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Z=X.near,ot=X.far;y.texture!==null&&(y.depthNear>0&&(Z=y.depthNear),y.depthFar>0&&(ot=y.depthFar)),x.near=O.near=D.near=Z,x.far=O.far=D.far=ot,(T!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,U=x.far),D.layers.mask=X.layers.mask|2,O.layers.mask=X.layers.mask|4,x.layers.mask=D.layers.mask|O.layers.mask;const it=X.parent,lt=x.cameras;B(x,it);for(let It=0;It<lt.length;It++)B(lt[It],it);lt.length===2?R(x,D,O):x.projectionMatrix.copy(D.projectionMatrix),Y(X,x,it)};function Y(X,Z,ot){ot===null?X.matrix.copy(Z.matrixWorld):(X.matrix.copy(ot.matrixWorld),X.matrix.invert(),X.matrix.multiply(Z.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Z.projectionMatrix),X.projectionMatrixInverse.copy(Z.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=cs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let K=null;function tt(X,Z){if(h=Z.getViewerPose(u||o),_=Z,h!==null){const ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let it=!1;ot.length!==x.cameras.length&&(x.cameras.length=0,it=!0);for(let _t=0;_t<ot.length;_t++){const Ht=ot[_t];let Zt=null;if(d!==null)Zt=d.getViewport(Ht);else{const L=c.getViewSubImage(f,Ht);Zt=L.viewport,_t===0&&(t.setRenderTargetTextures(w,L.colorTexture,L.depthStencilTexture),t.setRenderTarget(w))}let Ct=v[_t];Ct===void 0&&(Ct=new Sn,Ct.layers.enable(_t),Ct.viewport=new ye,v[_t]=Ct),Ct.matrix.fromArray(Ht.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Ht.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),_t===0&&(x.matrix.copy(Ct.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),it===!0&&x.cameras.push(Ct)}const lt=r.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&c){const _t=c.getDepthInformation(ot[0]);_t&&_t.isValid&&_t.texture&&y.init(t,_t,r.renderState)}}for(let ot=0;ot<b.length;ot++){const it=M[ot],lt=b[ot];it!==null&&lt!==void 0&&lt.update(it,Z,u||o)}K&&K(X,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const at=new pf;at.setAnimationLoop(tt),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}}const Ci=new Hn,Mx=new de;function Ex(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,af(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),c(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),b=w.envMap,M=w.envMapRotation;b&&(m.envMap.value=b,Ci.copy(M),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tx(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const M=b.program;i.uniformBlockBinding(w,M)}function u(w,b){let M=r[w.id];M===void 0&&(_(w),M=h(w),r[w.id]=M,w.addEventListener("dispose",m));const N=b.program;i.updateUBOMapping(w,N);const I=t.render.frame;s[w.id]!==I&&(f(w),s[w.id]=I)}function h(w){const b=c();w.__bindingPointIndex=b;const M=n.createBuffer(),N=w.__size,I=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,N,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function c(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=r[w.id],M=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,D=M.length;I<D;I++){const O=Array.isArray(M[I])?M[I]:[M[I]];for(let v=0,x=O.length;v<x;v++){const T=O[v];if(d(T,I,v,N)===!0){const U=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let W=0;W<F.length;W++){const E=F[W],P=y(E);typeof E=="number"||typeof E=="boolean"?(T.__data[0]=E,n.bufferSubData(n.UNIFORM_BUFFER,U+k,T.__data)):E.isMatrix3?(T.__data[0]=E.elements[0],T.__data[1]=E.elements[1],T.__data[2]=E.elements[2],T.__data[3]=0,T.__data[4]=E.elements[3],T.__data[5]=E.elements[4],T.__data[6]=E.elements[5],T.__data[7]=0,T.__data[8]=E.elements[6],T.__data[9]=E.elements[7],T.__data[10]=E.elements[8],T.__data[11]=0):(E.toArray(T.__data,k),k+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,b,M,N){const I=w.value,D=b+"_"+M;if(N[D]===void 0)return typeof I=="number"||typeof I=="boolean"?N[D]=I:N[D]=I.clone(),!0;{const O=N[D];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return N[D]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function _(w){const b=w.uniforms;let M=0;const N=16;for(let D=0,O=b.length;D<O;D++){const v=Array.isArray(b[D])?b[D]:[b[D]];for(let x=0,T=v.length;x<T;x++){const U=v[x],F=Array.isArray(U.value)?U.value:[U.value];for(let k=0,W=F.length;k<W;k++){const E=F[k],P=y(E),R=M%N,B=R%P.boundary,Y=R+B;M+=B,Y!==0&&N-Y<P.storage&&(M+=N-Y),U.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=P.storage}}}const I=M%N;return I>0&&(M+=N-I),w.__size=M,w.__cache={},this}function y(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class bx{constructor(t={}){const{canvas:e=em(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),y=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=yn;let I=0,D=0,O=null,v=-1,x=null;const T=new ye,U=new ye;let F=null;const k=new te(0);let W=0,E=e.width,P=e.height,R=1,B=null,Y=null;const K=new ye(0,0,E,P),tt=new ye(0,0,E,P);let at=!1;const X=new fc;let Z=!1,ot=!1;const it=new de,lt=new de,It=new V,_t=new ye,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Ct(){return O===null?R:1}let L=i;function yt(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ql}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",et,!1),L===null){const H="webgl2";if(L=yt(H,A),L===null)throw yt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let jt,St,ht,Jt,Lt,Xt,ge,C,S,$,Q,nt,J,At,pt,Et,Dt,st,Mt,Bt,Ft,dt,zt,z;function mt(){jt=new N0(L),jt.init(),dt=new _x(L,jt),St=new R0(L,jt,t,dt),ht=new mx(L,jt),St.reverseDepthBuffer&&f&&ht.buffers.depth.setReversed(!0),Jt=new B0(L),Lt=new nx,Xt=new gx(L,jt,ht,Lt,St,dt,Jt),ge=new C0(M),C=new U0(M),S=new Wm(L),zt=new A0(L,S),$=new F0(L,S,Jt,zt),Q=new k0(L,$,S,Jt),Mt=new z0(L,St,Xt),Et=new P0(Lt),nt=new ex(M,ge,C,jt,St,zt,Et),J=new Ex(M,Lt),At=new rx,pt=new ux(jt),st=new b0(M,ge,C,ht,Q,d,l),Dt=new dx(M,Q,St),z=new Tx(L,Jt,St,ht),Bt=new w0(L,jt,Jt),Ft=new O0(L,jt,Jt),Jt.programs=nt.programs,M.capabilities=St,M.extensions=jt,M.properties=Lt,M.renderLists=At,M.shadowMap=Dt,M.state=ht,M.info=Jt}mt();const rt=new Sx(M,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=jt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=jt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(A){A!==void 0&&(R=A,this.setSize(E,P,!1))},this.getSize=function(A){return A.set(E,P)},this.setSize=function(A,H,q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,P=H,e.width=Math.floor(A*R),e.height=Math.floor(H*R),q===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(E*R,P*R).floor()},this.setDrawingBufferSize=function(A,H,q){E=A,P=H,R=q,e.width=Math.floor(A*q),e.height=Math.floor(H*q),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,H,q,j){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,H,q,j),ht.viewport(T.copy(K).multiplyScalar(R).round())},this.getScissor=function(A){return A.copy(tt)},this.setScissor=function(A,H,q,j){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,H,q,j),ht.scissor(U.copy(tt).multiplyScalar(R).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){ht.setScissorTest(at=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,q=!0){let j=0;if(A){let G=!1;if(O!==null){const ut=O.texture.format;G=ut===oc||ut===sc||ut===rc}if(G){const ut=O.texture.type,vt=ut===zn||ut===qi||ut===as||ut===Ir||ut===ec||ut===nc,Rt=st.getClearColor(),Tt=st.getClearAlpha(),Gt=Rt.r,Wt=Rt.g,Ut=Rt.b;vt?(_[0]=Gt,_[1]=Wt,_[2]=Ut,_[3]=Tt,L.clearBufferuiv(L.COLOR,0,_)):(y[0]=Gt,y[1]=Wt,y[2]=Ut,y[3]=Tt,L.clearBufferiv(L.COLOR,0,y))}else j|=L.COLOR_BUFFER_BIT}H&&(j|=L.DEPTH_BUFFER_BIT),q&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",et,!1),st.dispose(),At.dispose(),pt.dispose(),Lt.dispose(),ge.dispose(),C.dispose(),Q.dispose(),zt.dispose(),z.dispose(),nt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",zc),rt.removeEventListener("sessionend",kc),Ei.stop()};function bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const A=Jt.autoReset,H=Dt.enabled,q=Dt.autoUpdate,j=Dt.needsUpdate,G=Dt.type;mt(),Jt.autoReset=A,Dt.enabled=H,Dt.autoUpdate=q,Dt.needsUpdate=j,Dt.type=G}function et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wt(A){const H=A.target;H.removeEventListener("dispose",wt),$t(H)}function $t(A){pe(A),Lt.remove(A)}function pe(A){const H=Lt.get(A).programs;H!==void 0&&(H.forEach(function(q){nt.releaseProgram(q)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,q,j,G,ut){H===null&&(H=Ht);const vt=G.isMesh&&G.matrixWorld.determinant()<0,Rt=Yd(A,H,q,j,G);ht.setMaterial(j,vt);let Tt=q.index,Gt=1;if(j.wireframe===!0){if(Tt=$.getWireframeAttribute(q),Tt===void 0)return;Gt=2}const Wt=q.drawRange,Ut=q.attributes.position;let Qt=Wt.start*Gt,ae=(Wt.start+Wt.count)*Gt;ut!==null&&(Qt=Math.max(Qt,ut.start*Gt),ae=Math.min(ae,(ut.start+ut.count)*Gt)),Tt!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,Tt.count)):Ut!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,Ut.count));const _e=ae-Qt;if(_e<0||_e===1/0)return;zt.setup(G,j,Rt,q,Tt);let xe,ee=Bt;if(Tt!==null&&(xe=S.get(Tt),ee=Ft,ee.setIndex(xe)),G.isMesh)j.wireframe===!0?(ht.setLineWidth(j.wireframeLinewidth*Ct()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(G.isLine){let Ot=j.linewidth;Ot===void 0&&(Ot=1),ht.setLineWidth(Ot*Ct()),G.isLineSegments?ee.setMode(L.LINES):G.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else G.isPoints?ee.setMode(L.POINTS):G.isSprite&&ee.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))ee.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ot=G._multiDrawStarts,Pe=G._multiDrawCounts,re=G._multiDrawCount,Tn=Tt?S.get(Tt).bytesPerElement:1,tr=Lt.get(j).currentProgram.getUniforms();for(let on=0;on<re;on++)tr.setValue(L,"_gl_DrawID",on),ee.render(Ot[on]/Tn,Pe[on])}else if(G.isInstancedMesh)ee.renderInstances(Qt,_e,G.count);else if(q.isInstancedBufferGeometry){const Ot=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,Ot);ee.renderInstances(Qt,_e,Pe)}else ee.render(Qt,_e)};function oe(A,H,q){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,As(A,H,q),A.side=vi,A.needsUpdate=!0,As(A,H,q),A.side=Jn):As(A,H,q)}this.compile=function(A,H,q=null){q===null&&(q=A),p=pt.get(q),p.init(H),b.push(p),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const j=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ut=G.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){const Rt=ut[vt];oe(Rt,q,G),j.add(Rt)}else oe(ut,q,G),j.add(ut)}),p=b.pop(),j},this.compileAsync=function(A,H,q=null){const j=this.compile(A,H,q);return new Promise(G=>{function ut(){if(j.forEach(function(vt){Lt.get(vt).currentProgram.isReady()&&j.delete(vt)}),j.size===0){G(A);return}setTimeout(ut,10)}jt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let En=null;function Xn(A){En&&En(A)}function zc(){Ei.stop()}function kc(){Ei.start()}const Ei=new pf;Ei.setAnimationLoop(Xn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){En=A,rt.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},rt.addEventListener("sessionstart",zc),rt.addEventListener("sessionend",kc),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(H),H=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,H,O),p=pt.get(A,b.length),p.init(H),b.push(p),lt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(lt),ot=this.localClippingEnabled,Z=Et.init(this.clippingPlanes,ot),m=At.get(A,w.length),m.init(),w.push(m),rt.enabled===!0&&rt.isPresenting===!0){const ut=M.xr.getDepthSensingMesh();ut!==null&&sa(ut,H,-1/0,M.sortObjects)}sa(A,H,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(B,Y),Zt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Zt&&st.addToRenderList(m,A),this.info.render.frame++,Z===!0&&Et.beginShadows();const q=p.state.shadowsArray;Dt.render(q,A,H),Z===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ut=H.cameras;if(G.length>0)for(let vt=0,Rt=ut.length;vt<Rt;vt++){const Tt=ut[vt];Gc(j,G,A,Tt)}Zt&&st.render(A);for(let vt=0,Rt=ut.length;vt<Rt;vt++){const Tt=ut[vt];Hc(m,A,Tt,Tt.viewport)}}else G.length>0&&Gc(j,G,A,H),Zt&&st.render(A),Hc(m,A,H);O!==null&&D===0&&(Xt.updateMultisampleRenderTarget(O),Xt.updateRenderTargetMipmap(O)),A.isScene===!0&&A.onAfterRender(M,A,H),zt.resetDefaultState(),v=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],Z===!0&&Et.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function sa(A,H,q,j){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){j&&_t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const vt=Q.update(A),Rt=A.material;Rt.visible&&m.push(A,vt,Rt,q,_t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){const vt=Q.update(A),Rt=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_t.copy(A.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),_t.copy(vt.boundingSphere.center)),_t.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(Rt)){const Tt=vt.groups;for(let Gt=0,Wt=Tt.length;Gt<Wt;Gt++){const Ut=Tt[Gt],Qt=Rt[Ut.materialIndex];Qt&&Qt.visible&&m.push(A,vt,Qt,q,_t.z,Ut)}}else Rt.visible&&m.push(A,vt,Rt,q,_t.z,null)}}const ut=A.children;for(let vt=0,Rt=ut.length;vt<Rt;vt++)sa(ut[vt],H,q,j)}function Hc(A,H,q,j){const G=A.opaque,ut=A.transmissive,vt=A.transparent;p.setupLightsView(q),Z===!0&&Et.setGlobalState(M.clippingPlanes,q),j&&ht.viewport(T.copy(j)),G.length>0&&bs(G,H,q),ut.length>0&&bs(ut,H,q),vt.length>0&&bs(vt,H,q),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Gc(A,H,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new kn(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?xi:zn,minFilter:Vi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ut=p.state.transmissionRenderTarget[j.id],vt=j.viewport||T;ut.setSize(vt.z*M.transmissionResolutionScale,vt.w*M.transmissionResolutionScale);const Rt=M.getRenderTarget();M.setRenderTarget(ut),M.getClearColor(k),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Zt&&st.render(q);const Tt=M.toneMapping;M.toneMapping=gi;const Gt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Z===!0&&Et.setGlobalState(M.clippingPlanes,j),bs(A,q,j),Xt.updateMultisampleRenderTarget(ut),Xt.updateRenderTargetMipmap(ut),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ut=0,Qt=H.length;Ut<Qt;Ut++){const ae=H[Ut],_e=ae.object,xe=ae.geometry,ee=ae.material,Ot=ae.group;if(ee.side===Jn&&_e.layers.test(j.layers)){const Pe=ee.side;ee.side=en,ee.needsUpdate=!0,Vc(_e,q,j,xe,ee,Ot),ee.side=Pe,ee.needsUpdate=!0,Wt=!0}}Wt===!0&&(Xt.updateMultisampleRenderTarget(ut),Xt.updateRenderTargetMipmap(ut))}M.setRenderTarget(Rt),M.setClearColor(k,W),Gt!==void 0&&(j.viewport=Gt),M.toneMapping=Tt}function bs(A,H,q){const j=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ut=A.length;G<ut;G++){const vt=A[G],Rt=vt.object,Tt=vt.geometry,Gt=vt.group;let Wt=vt.material;Wt.allowOverride===!0&&j!==null&&(Wt=j),Rt.layers.test(q.layers)&&Vc(Rt,H,q,Tt,Wt,Gt)}}function Vc(A,H,q,j,G,ut){A.onBeforeRender(M,H,q,j,G,ut),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(M,H,q,j,A,ut),G.transparent===!0&&G.side===Jn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,M.renderBufferDirect(q,H,j,G,A,ut),G.side=vi,G.needsUpdate=!0,M.renderBufferDirect(q,H,j,G,A,ut),G.side=Jn):M.renderBufferDirect(q,H,j,G,A,ut),A.onAfterRender(M,H,q,j,G,ut)}function As(A,H,q){H.isScene!==!0&&(H=Ht);const j=Lt.get(A),G=p.state.lights,ut=p.state.shadowsArray,vt=G.state.version,Rt=nt.getParameters(A,G.state,ut,H,q),Tt=nt.getProgramCacheKey(Rt);let Gt=j.programs;j.environment=A.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(A.isMeshStandardMaterial?C:ge).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",wt),Gt=new Map,j.programs=Gt);let Wt=Gt.get(Tt);if(Wt!==void 0){if(j.currentProgram===Wt&&j.lightsStateVersion===vt)return Xc(A,Rt),Wt}else Rt.uniforms=nt.getUniforms(A),A.onBeforeCompile(Rt,M),Wt=nt.acquireProgram(Rt,Tt),Gt.set(Tt,Wt),j.uniforms=Rt.uniforms;const Ut=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=Et.uniform),Xc(A,Rt),j.needsLights=jd(A),j.lightsStateVersion=vt,j.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.directionalShadowMap.value=G.state.directionalShadowMap,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotShadowMap.value=G.state.spotShadowMap,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMap.value=G.state.pointShadowMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Wt,j.uniformsList=null,Wt}function Wc(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=_o.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Xc(A,H){const q=Lt.get(A);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Yd(A,H,q,j,G){H.isScene!==!0&&(H=Ht),Xt.resetTextureUnits();const ut=H.fog,vt=j.isMeshStandardMaterial?H.environment:null,Rt=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ur,Tt=(j.isMeshStandardMaterial?C:ge).get(j.envMap||vt),Gt=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ut=!!q.morphAttributes.position,Qt=!!q.morphAttributes.normal,ae=!!q.morphAttributes.color;let _e=gi;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(_e=M.toneMapping);const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ee=xe!==void 0?xe.length:0,Ot=Lt.get(j),Pe=p.state.lights;if(Z===!0&&(ot===!0||A!==x)){const Be=A===x&&j.id===v;Et.setState(j,A,Be)}let re=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Pe.state.version||Ot.outputColorSpace!==Rt||G.isBatchedMesh&&Ot.batching===!1||!G.isBatchedMesh&&Ot.batching===!0||G.isBatchedMesh&&Ot.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ot.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ot.instancing===!1||!G.isInstancedMesh&&Ot.instancing===!0||G.isSkinnedMesh&&Ot.skinning===!1||!G.isSkinnedMesh&&Ot.skinning===!0||G.isInstancedMesh&&Ot.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ot.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ot.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ot.instancingMorph===!1&&G.morphTexture!==null||Ot.envMap!==Tt||j.fog===!0&&Ot.fog!==ut||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Et.numPlanes||Ot.numIntersection!==Et.numIntersection)||Ot.vertexAlphas!==Gt||Ot.vertexTangents!==Wt||Ot.morphTargets!==Ut||Ot.morphNormals!==Qt||Ot.morphColors!==ae||Ot.toneMapping!==_e||Ot.morphTargetsCount!==ee)&&(re=!0):(re=!0,Ot.__version=j.version);let Tn=Ot.currentProgram;re===!0&&(Tn=As(j,H,G));let tr=!1,on=!1,$r=!1;const me=Tn.getUniforms(),dn=Ot.uniforms;if(ht.useProgram(Tn.program)&&(tr=!0,on=!0,$r=!0),j.id!==v&&(v=j.id,on=!0),tr||x!==A){ht.buffers.depth.getReversed()?(it.copy(A.projectionMatrix),im(it),rm(it),me.setValue(L,"projectionMatrix",it)):me.setValue(L,"projectionMatrix",A.projectionMatrix),me.setValue(L,"viewMatrix",A.matrixWorldInverse);const qe=me.map.cameraPosition;qe!==void 0&&qe.setValue(L,It.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&me.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,on=!0,$r=!0)}if(G.isSkinnedMesh){me.setOptional(L,G,"bindMatrix"),me.setOptional(L,G,"bindMatrixInverse");const Be=G.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),me.setValue(L,"boneTexture",Be.boneTexture,Xt))}G.isBatchedMesh&&(me.setOptional(L,G,"batchingTexture"),me.setValue(L,"batchingTexture",G._matricesTexture,Xt),me.setOptional(L,G,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",G._indirectTexture,Xt),me.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",G._colorsTexture,Xt));const pn=q.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Mt.update(G,q,Tn),(on||Ot.receiveShadow!==G.receiveShadow)&&(Ot.receiveShadow=G.receiveShadow,me.setValue(L,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(dn.envMap.value=Tt,dn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(dn.envMapIntensity.value=H.environmentIntensity),on&&(me.setValue(L,"toneMappingExposure",M.toneMappingExposure),Ot.needsLights&&qd(dn,$r),ut&&j.fog===!0&&J.refreshFogUniforms(dn,ut),J.refreshMaterialUniforms(dn,j,R,P,p.state.transmissionRenderTarget[A.id]),_o.upload(L,Wc(Ot),dn,Xt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(_o.upload(L,Wc(Ot),dn,Xt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&me.setValue(L,"center",G.center),me.setValue(L,"modelViewMatrix",G.modelViewMatrix),me.setValue(L,"normalMatrix",G.normalMatrix),me.setValue(L,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Be=j.uniformsGroups;for(let qe=0,oa=Be.length;qe<oa;qe++){const Ti=Be[qe];z.update(Ti,Tn),z.bind(Ti,Tn)}}return Tn}function qd(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function jd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,H,q){const j=Lt.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Lt.get(A.texture).__webglTexture=H,Lt.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const q=Lt.get(A);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Zd=L.createFramebuffer();this.setRenderTarget=function(A,H=0,q=0){O=A,I=H,D=q;let j=!0,G=null,ut=!1,vt=!1;if(A){const Tt=Lt.get(A);if(Tt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(Tt.__webglFramebuffer===void 0)Xt.setupRenderTarget(A);else if(Tt.__hasExternalTextures)Xt.rebindTextures(A,Lt.get(A.texture).__webglTexture,Lt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ut=A.depthTexture;if(Tt.__boundDepthTexture!==Ut){if(Ut!==null&&Lt.has(Ut)&&(A.width!==Ut.image.width||A.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(vt=!0);const Wt=Lt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?G=Wt[H][q]:G=Wt[H],ut=!0):A.samples>0&&Xt.useMultisampledRTT(A)===!1?G=Lt.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?G=Wt[q]:G=Wt,T.copy(A.viewport),U.copy(A.scissor),F=A.scissorTest}else T.copy(K).multiplyScalar(R).floor(),U.copy(tt).multiplyScalar(R).floor(),F=at;if(q!==0&&(G=Zd),ht.bindFramebuffer(L.FRAMEBUFFER,G)&&j&&ht.drawBuffers(A,G),ht.viewport(T),ht.scissor(U),ht.setScissorTest(F),ut){const Tt=Lt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Tt.__webglTexture,q)}else if(vt){const Tt=Lt.get(A.texture),Gt=H;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tt.__webglTexture,q,Gt)}else if(A!==null&&q!==0){const Tt=Lt.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tt.__webglTexture,q)}v=-1},this.readRenderTargetPixels=function(A,H,q,j,G,ut,vt,Rt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt){ht.bindFramebuffer(L.FRAMEBUFFER,Tt);try{const Gt=A.textures[Rt],Wt=Gt.format,Ut=Gt.type;if(!St.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-j&&q>=0&&q<=A.height-G&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Rt),L.readPixels(H,q,j,G,dt.convert(Wt),dt.convert(Ut),ut))}finally{const Gt=O!==null?Lt.get(O).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(A,H,q,j,G,ut,vt,Rt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Lt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(Tt=Tt[vt]),Tt)if(H>=0&&H<=A.width-j&&q>=0&&q<=A.height-G){ht.bindFramebuffer(L.FRAMEBUFFER,Tt);const Gt=A.textures[Rt],Wt=Gt.format,Ut=Gt.type;if(!St.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Rt),L.readPixels(H,q,j,G,dt.convert(Wt),dt.convert(Ut),0);const ae=O!==null?Lt.get(O).__webglFramebuffer:null;ht.bindFramebuffer(L.FRAMEBUFFER,ae);const _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nm(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(Qt),L.deleteSync(_e),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,q=0){const j=Math.pow(2,-q),G=Math.floor(A.image.width*j),ut=Math.floor(A.image.height*j),vt=H!==null?H.x:0,Rt=H!==null?H.y:0;Xt.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,vt,Rt,G,ut),ht.unbindTexture()};const Kd=L.createFramebuffer(),Jd=L.createFramebuffer();this.copyTextureToTexture=function(A,H,q=null,j=null,G=0,ut=null){ut===null&&(G!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=G,G=0):ut=0);let vt,Rt,Tt,Gt,Wt,Ut,Qt,ae,_e;const xe=A.isCompressedTexture?A.mipmaps[ut]:A.image;if(q!==null)vt=q.max.x-q.min.x,Rt=q.max.y-q.min.y,Tt=q.isBox3?q.max.z-q.min.z:1,Gt=q.min.x,Wt=q.min.y,Ut=q.isBox3?q.min.z:0;else{const pn=Math.pow(2,-G);vt=Math.floor(xe.width*pn),Rt=Math.floor(xe.height*pn),A.isDataArrayTexture?Tt=xe.depth:A.isData3DTexture?Tt=Math.floor(xe.depth*pn):Tt=1,Gt=0,Wt=0,Ut=0}j!==null?(Qt=j.x,ae=j.y,_e=j.z):(Qt=0,ae=0,_e=0);const ee=dt.convert(H.format),Ot=dt.convert(H.type);let Pe;H.isData3DTexture?(Xt.setTexture3D(H,0),Pe=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Xt.setTexture2DArray(H,0),Pe=L.TEXTURE_2D_ARRAY):(Xt.setTexture2D(H,0),Pe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const re=L.getParameter(L.UNPACK_ROW_LENGTH),Tn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),tr=L.getParameter(L.UNPACK_SKIP_PIXELS),on=L.getParameter(L.UNPACK_SKIP_ROWS),$r=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Wt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ut);const me=A.isDataArrayTexture||A.isData3DTexture,dn=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const pn=Lt.get(A),Be=Lt.get(H),qe=Lt.get(pn.__renderTarget),oa=Lt.get(Be.__renderTarget);ht.bindFramebuffer(L.READ_FRAMEBUFFER,qe.__webglFramebuffer),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let Ti=0;Ti<Tt;Ti++)me&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.get(A).__webglTexture,G,Ut+Ti),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.get(H).__webglTexture,ut,_e+Ti)),L.blitFramebuffer(Gt,Wt,vt,Rt,Qt,ae,vt,Rt,L.DEPTH_BUFFER_BIT,L.NEAREST);ht.bindFramebuffer(L.READ_FRAMEBUFFER,null),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||Lt.has(A)){const pn=Lt.get(A),Be=Lt.get(H);ht.bindFramebuffer(L.READ_FRAMEBUFFER,Kd),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,Jd);for(let qe=0;qe<Tt;qe++)me?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pn.__webglTexture,G,Ut+qe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pn.__webglTexture,G),dn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,ut,_e+qe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Be.__webglTexture,ut),G!==0?L.blitFramebuffer(Gt,Wt,vt,Rt,Qt,ae,vt,Rt,L.COLOR_BUFFER_BIT,L.NEAREST):dn?L.copyTexSubImage3D(Pe,ut,Qt,ae,_e+qe,Gt,Wt,vt,Rt):L.copyTexSubImage2D(Pe,ut,Qt,ae,Gt,Wt,vt,Rt);ht.bindFramebuffer(L.READ_FRAMEBUFFER,null),ht.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Pe,ut,Qt,ae,_e,vt,Rt,Tt,ee,Ot,xe.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Pe,ut,Qt,ae,_e,vt,Rt,Tt,ee,xe.data):L.texSubImage3D(Pe,ut,Qt,ae,_e,vt,Rt,Tt,ee,Ot,xe):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,Qt,ae,vt,Rt,ee,Ot,xe.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,Qt,ae,xe.width,xe.height,ee,xe.data):L.texSubImage2D(L.TEXTURE_2D,ut,Qt,ae,vt,Rt,ee,Ot,xe);L.pixelStorei(L.UNPACK_ROW_LENGTH,re),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,tr),L.pixelStorei(L.UNPACK_SKIP_ROWS,on),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$r),ut===0&&H.generateMipmaps&&L.generateMipmap(Pe),ht.unbindTexture()},this.copyTextureToTexture3D=function(A,H,q=null,j=null,G=0){return Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,H,q,j,G)},this.initRenderTarget=function(A){Lt.get(A).__webglFramebuffer===void 0&&Xt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Xt.setTextureCube(A,0):A.isData3DTexture?Xt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Xt.setTexture2DArray(A,0):Xt.setTexture2D(A,0),ht.unbindTexture()},this.resetState=function(){I=0,D=0,O=null,ht.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}function Ax(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=xf(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=Dx(n,t,s,e)),n.length>80*e){a=1/0,l=1/0;let h=-1/0,c=-1/0;for(let f=e;f<r;f+=e){const d=n[f],_=n[f+1];d<a&&(a=d),_<l&&(l=_),d>h&&(h=d),_>c&&(c=_)}u=Math.max(h-a,c-l),u=u!==0?32767/u:0}return us(s,o,e,a,l,u,0),o}function xf(n,t,e,i,r){let s;if(r===Gx(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=th(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=th(o/i|0,n[o],n[o+1],s);return s&&Fr(s,s.next)&&(fs(s),s=s.next),s}function Zi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Fr(e,e.next)||ve(e.prev,e,e.next)===0)){if(fs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function us(n,t,e,i,r,s,o){if(!n)return;!o&&s&&Fx(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,u=n.next;if(s?Rx(n,i,r,s):wx(n)){t.push(l.i,n.i,u.i),fs(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=Px(Zi(n),t),us(n,t,e,i,r,s,2)):o===2&&Cx(n,t,e,i,r,s):us(Zi(n),t,e,i,r,s,1);break}}}function wx(n){const t=n.prev,e=n,i=n.next;if(ve(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,u=i.y,h=Math.min(r,s,o),c=Math.min(a,l,u),f=Math.max(r,s,o),d=Math.max(a,l,u);let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=c&&_.y<=d&&es(r,a,s,l,o,u,_.x,_.y)&&ve(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Rx(n,t,e,i){const r=n.prev,s=n,o=n.next;if(ve(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,h=r.y,c=s.y,f=o.y,d=Math.min(a,l,u),_=Math.min(h,c,f),y=Math.max(a,l,u),m=Math.max(h,c,f),p=Hl(d,_,t,e,i),w=Hl(y,m,t,e,i);let b=n.prevZ,M=n.nextZ;for(;b&&b.z>=p&&M&&M.z<=w;){if(b.x>=d&&b.x<=y&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&es(a,h,l,c,u,f,b.x,b.y)&&ve(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&es(a,h,l,c,u,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=y&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&es(a,h,l,c,u,f,b.x,b.y)&&ve(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=w;){if(M.x>=d&&M.x<=y&&M.y>=_&&M.y<=m&&M!==r&&M!==o&&es(a,h,l,c,u,f,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Px(n,t){let e=n;do{const i=e.prev,r=e.next.next;!Fr(i,r)&&Sf(i,e,e.next,r)&&hs(i,r)&&hs(r,i)&&(t.push(i.i,e.i,r.i),fs(e),fs(e.next),e=n=r),e=e.next}while(e!==n);return Zi(e)}function Cx(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zx(o,a)){let l=Mf(o,a);o=Zi(o,o.next),l=Zi(l,l.next),us(o,t,e,i,r,s,0),us(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Dx(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,u=xf(n,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(Bx(u))}r.sort(Ix);for(let s=0;s<r.length;s++)e=Lx(r[s],e);return e}function Ix(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function Lx(n,t){const e=Ux(n,t);if(!e)return t;const i=Mf(e,n);return Zi(i,i.next),Zi(e,e.next)}function Ux(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(Fr(n,e))return e;do{if(Fr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const c=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=i&&c>s&&(s=c,o=e.x<e.next.x?e:e.next,c===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,u=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&yf(r<u?i:s,r,l,u,r<u?s:i,r,e.x,e.y)){const c=Math.abs(r-e.y)/(i-e.x);hs(e,n)&&(c<h||c===h&&(e.x>o.x||e.x===o.x&&Nx(o,e)))&&(o=e,h=c)}e=e.next}while(e!==a);return o}function Nx(n,t){return ve(n.prev,n,t.prev)<0&&ve(t.next,n,n.next)<0}function Fx(n,t,e,i){let r=n;do r.z===0&&(r.z=Hl(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Ox(r)}function Ox(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let u=0;u<e&&(a++,o=o.nextZ,!!o);u++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function Hl(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Bx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function yf(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function es(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&yf(n,t,e,i,r,s,o,a)}function zx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!kx(n,t)&&(hs(n,t)&&hs(t,n)&&Hx(n,t)&&(ve(n.prev,n,t.prev)||ve(n,t.prev,t))||Fr(n,t)&&ve(n.prev,n,n.next)>0&&ve(t.prev,t,t.next)>0)}function ve(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Fr(n,t){return n.x===t.x&&n.y===t.y}function Sf(n,t,e,i){const r=Qs(ve(n,t,e)),s=Qs(ve(n,t,i)),o=Qs(ve(e,i,n)),a=Qs(ve(e,i,t));return!!(r!==s&&o!==a||r===0&&Js(n,e,t)||s===0&&Js(n,i,t)||o===0&&Js(e,n,i)||a===0&&Js(e,t,i))}function Js(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Qs(n){return n>0?1:n<0?-1:0}function kx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Sf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function hs(n,t){return ve(n.prev,n,n.next)<0?ve(n,t,n.next)>=0&&ve(n,n.prev,t)>=0:ve(n,t,n.prev)<0||ve(n,n.next,t)<0}function Hx(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Mf(n,t){const e=Gl(n.i,n.x,n.y),i=Gl(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function th(n,t,e,i){const r=Gl(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function fs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gx(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}function Vx(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new sn;let u=0;for(let h=0;h<n.length;++h){const c=n[h];let f=0;if(e!==(c.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in c.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(c.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==c.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in c.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(c.morphAttributes[d])}if(t){let d;if(e)d=c.index.count;else if(c.attributes.position!==void 0)d=c.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,h),u+=d}}if(e){let h=0;const c=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let _=0;_<d.count;++_)c.push(d.getX(_)+h);h+=n[f].attributes.position.count}l.setIndex(c)}for(const h in s){const c=eh(s[h]);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,c)}for(const h in o){const c=o[h][0].length;if(c===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<c;++f){const d=[];for(let y=0;y<o[h].length;++y)d.push(o[h][y][f]);const _=eh(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function eh(n){let t,e,i,r=-1,s=0;for(let u=0;u<n.length;++u){const h=n[u];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new nn(o,e,i);let l=0;for(let u=0;u<n.length;++u){const h=n[u];if(h.isInterleavedBufferAttribute){const c=l/e;for(let f=0,d=h.count;f<d;f++)for(let _=0;_<e;_++){const y=h.getComponent(f,_);a.setComponent(f+c,_,y)}}else o.set(h.array,l);l+=h.count*e}return r!==void 0&&(a.gpuType=r),a}let za=new Map,ka=new Map;const _r=.25,ns=1.75,nh=1.25,Jr=2.6,ih=.425,Wx=1.5,ui=.15,rh=.55,Xx=1.5,yi=.1;let Ha=[1,0,0],Ga=[0,0,1];function Ef(n,t){let e=[],i=n;for(let r=0;r<t.length;r++)e.push(i.length/3),i=i.concat(t[r]);return[i,Ax(i,e,3),e]}class Va{constructor(t,e){Ce(this,"cornerCount");Ce(this,"holeCount");this.cornerCount=t,this.holeCount=e}headBaseVertices(){let t=[[],[]],e=Math.exp(1-ns);const i=5,r=5;for(let s=0;s<i;s++){let o=s/i;t[0].push(o),t[0].push(-(Math.exp(o-ns)+_r)),t[0].push(0)}for(let s=0;s<r;s++){let o=s/r*Math.PI/2;t[0].push(o+1),t[0].push(-(e*Math.sin(o)+e+_r)),t[0].push(0)}for(let s=r-1;s>=0;s--){let o=s/r*Math.PI/2;t[1].push(o+1),t[1].push(e*Math.sin(o)+e+_r),t[1].push(0)}for(let s=i-1;s>=0;s--){let o=s/i;t[1].push(o),t[1].push(Math.exp(o-ns)+_r),t[1].push(0)}return t}headEndVertices(){let t=2*Math.exp(1-ns)+_r,e=[];const i=5;for(let r=i;r>0;r--){let s=r/i*Math.PI*.5;e.push(t*nh*Math.cos(s)+Math.PI*.5+1),this.cornerCount>1?e.push(t*-Math.pow(Math.sin(s),.2)):e.push(t*-Math.pow(Math.sin(s),.9)),e.push(0)}for(let r=0;r<=i;r++){let s=r/i*Math.PI*.5;e.push(t*nh*Math.cos(s)+Math.PI*.5+1),this.cornerCount>0?e.push(t*Math.pow(Math.sin(s),.2)):e.push(t*Math.pow(Math.sin(s),.9)),e.push(0)}return e}headOutsideVertices(){let t=this.headBaseVertices(),e=this.headEndVertices(),i=[];return i=i.concat(t[0]),i=i.concat(e),i=i.concat(t[1]),i}headHoleVertices(){if(this.holeCount==0)return[];if(this.holeCount==1){let t=[];t.push([]);const e=10;for(let i=0;i<e;i++){let r=i/e*Math.PI*2;t[0].push(.6*Math.cos(r)+Jr),t[0].push(.6*Math.sin(r)),t[0].push(0)}return t}else{let t=[];this.holeCount==2?t=[ih,-ih]:t=[rh,0,-rh];let e=Xx;this.holeCount==2&&(e=Wx);let i=[];for(let r=0;r<t.length;r++){i.push([]);const s=4;for(let o=0;o<=s;o++){let a=o/s*Math.PI*.5;i[i.length-1].push(ui*Math.cos(a)+.5*e+Jr),i[i.length-1].push(ui*Math.sin(a)+t[r]),i[i.length-1].push(0)}for(let o=0;o<s;o++){let a=o/s*Math.PI*.5;i[i.length-1].push(ui*Math.sin(-a)-.5*e+Jr),i[i.length-1].push(ui*Math.cos(-a)+t[r]),i[i.length-1].push(0)}for(let o=s;o>=0;o--){let a=o/s*Math.PI*.5;i[i.length-1].push(ui*Math.sin(-a)-.5*e+Jr),i[i.length-1].push(ui*-Math.cos(-a)+t[r]),i[i.length-1].push(0)}for(let o=s;o>=1;o--){let a=o/s*Math.PI*.5;i[i.length-1].push(ui*Math.cos(a)+.5*e+Jr),i[i.length-1].push(ui*-Math.sin(a)+t[r]),i[i.length-1].push(0)}}return i}}createGeometry(){let t=JSON.stringify(this);if(za.has(t)){let u=za.get(t);if(u==null)throw new Error("Should be impossible: oiubsvbfv");return u}let e=this.headOutsideVertices(),i=this.headHoleVertices(),r=Ef(e,i),s=r[0].length/3;r[1]=r[1].concat(r[1].map(u=>u+s).reverse()).reverse(),r[0]=r[0].concat(r[0]),r[0]=r[0].map((u,h)=>h%3==2?h<r[0].length/2?u-yi:u+yi:u);let o=0;r[2].push(s);for(let u=0;u<r[2].length;u++){let h=r[2][u];for(let c=o;c<h;c++)c==h-1?u!=0&&(r[1].push(o),r[1].push(c),r[1].push(c+s),r[1].push(o+s),r[1].push(o),r[1].push(c+s)):u==0?(r[1].push(c),r[1].push(c+1),r[1].push(c+s),r[1].push(c+1),r[1].push(c+1+s),r[1].push(c+s)):(r[1].push(c+1),r[1].push(c),r[1].push(c+s),r[1].push(c+1+s),r[1].push(c+1),r[1].push(c+s));o=h}let a=new Float32Array(r[0]);const l=new sn;return l.setAttribute("position",new nn(a,3)),l.setIndex(r[1]),l.computeVertexNormals(),za.set(t,l),l}get border(){return this.headOutsideVertices().filter((t,e)=>e%3!=2)}}const Un=Math.exp(-ns)+_r;class $x{constructor(t,e){Ce(this,"cornerCount");Ce(this,"holeCount");this.cornerCount=t,this.holeCount=e}handleOutsideVertices(){let t=[];t.push(0),t.push(Un),t.push(0);const e=10;for(let i=0;i<e;i++){let r=i/e*Math.PI*.5+Math.PI*.5;t.push((Un+.08)*Math.cos(r)-8),this.cornerCount>=1?t.push((Un+.08)*Math.pow(Math.sin(r),.2)):t.push((Un+.08)*Math.sin(r)),t.push(0)}for(let i=0;i<=e;i++){let r=i/e*Math.PI*.5+Math.PI;t.push((Un+.08)*Math.cos(r)-8),this.cornerCount==2?t.push((Un+.08)*-Math.pow(Math.abs(Math.sin(r)),.2)):t.push((Un+.08)*Math.sin(r)),t.push(0)}return t.push(0),t.push(-Un),t.push(0),t}handleHoleVertices(){if(this.holeCount==0)return[];{let t=[[]];for(let i=0;i<10;i++){let r=i/10*Math.PI*2;t[0].push(.3*(Un+.08)*Math.cos(r)-8),t[0].push(.3*(Un+.08)*Math.sin(r)),t[0].push(0)}return t}}createGeometry(){let t=JSON.stringify(this);if(ka.has(t)){let u=ka.get(t);if(u==null)throw new Error("Should be impossible: oiubsvbfv");return u}let e=this.handleOutsideVertices(),i=this.handleHoleVertices(),r=Ef(e,i),s=r[0].length/3;r[1]=r[1].concat(r[1].map(u=>u+s).reverse()).reverse(),r[0]=r[0].concat(r[0]),r[0]=r[0].map((u,h)=>h%3==2?h<r[0].length/2?u-yi:u+yi:u);let o=0;r[2].push(s);for(let u=0;u<r[2].length;u++){let h=r[2][u];for(let c=o;c<h;c++)c==h-1?u!=0&&(r[1].push(o),r[1].push(c),r[1].push(c+s),r[1].push(o+s),r[1].push(o),r[1].push(c+s)):u==0?(r[1].push(c),r[1].push(c+1),r[1].push(c+s),r[1].push(c+1),r[1].push(c+1+s),r[1].push(c+s)):(r[1].push(c+1),r[1].push(c),r[1].push(c+s),r[1].push(c+1+s),r[1].push(c+1),r[1].push(c+s));o=h}let a=new Float32Array(r[0]);const l=new sn;return l.setAttribute("position",new nn(a,3)),l.setIndex(r[1]),l.computeVertexNormals(),ka.set(t,l),l}get border(){return this.handleOutsideVertices().filter((t,e)=>e%3!=2)}}const Yx=new hf({vertexColors:!0,flatShading:!0});function qx(n){const t=n.getAttribute("position"),e=t.count,i=new Float32Array(e*3);for(let r=0;r<e;r++){const o=(t.getZ(r)+yi)/(2*yi),a=o*Ha[0]+(1-o)*Ga[0],l=o*Ha[1]+(1-o)*Ga[1],u=o*Ha[2]+(1-o)*Ga[2];i[r*3]=a,i[r*3+1]=l,i[r*3+2]=u}n.setAttribute("color",new nn(i,3))}class to{constructor(t,e){Ce(this,"head");Ce(this,"handle");Ce(this,"position",Zc(0,0));Ce(this,"_layer",0);Ce(this,"angle",0);Ce(this,"isUpsideDown",!1);this.head=t,this.handle=e}get model(){let t=this.head.createGeometry(),e=this.handle.createGeometry(),i=Vx([t,e],!1);i.computeVertexNormals(),qx(i),this.isUpsideDown&&i.applyMatrix4(new de().makeScale(1,-1,-1));let r=new cn(i,Yx);return r.rotateOnWorldAxis(new V(1,0,0),-Math.PI*.5),r.rotateOnWorldAxis(new V(0,1,0),this.angle),r.position.set(this.position[0],jx(this.layer),-this.position[1]),r.castShadow=!0,r.receiveShadow=!0,r}get direction(){return Zc(Math.cos(this.angle),Math.sin(this.angle))}set direction(t){this.angle=Math.atan2(t[1],t[0])}set layer(t){if(!Number.isInteger(t))throw new Error("Cannot set layer to a non-integer");if(t<0)throw new Error("The layer must be non-negative");this._layer=t}get layer(){return this._layer}get border(){let t=this.head.border.concat(this.handle.border),e=this.isUpsideDown?-1:1;for(let i=0;i<t.length;i+=2){let r=Math.cos(this.angle)*t[i]-e*Math.sin(this.angle)*t[i+1],s=Math.sin(this.angle)*t[i]+e*Math.cos(this.angle)*t[i+1];this.isUpsideDown?(t[i]=s,t[i+1]=r):(t[i]=r,t[i+1]=s)}return this.isUpsideDown&&t.reverse(),t.map((i,r)=>i+this.position[r%2])}}function jx(n){return yi+2*yi*n}var Wa,sh;function Zx(){if(sh)return Wa;sh=1,Wa={decomp:D,quickDecomp:T,isSimple:v,removeCollinearPoints:U,removeDuplicatePoints:F,makeCCW:_};function n(E,P,R){R=R||0;var B=[0,0],Y,K,tt,at,X,Z,ot;return Y=E[1][1]-E[0][1],K=E[0][0]-E[1][0],tt=Y*E[0][0]+K*E[0][1],at=P[1][1]-P[0][1],X=P[0][0]-P[1][0],Z=at*P[0][0]+X*P[0][1],ot=Y*X-at*K,k(ot,0,R)||(B[0]=(X*tt-K*Z)/ot,B[1]=(Y*Z-at*tt)/ot),B}function t(E,P,R,B){var Y=P[0]-E[0],K=P[1]-E[1],tt=B[0]-R[0],at=B[1]-R[1];if(tt*K-at*Y===0)return!1;var X=(Y*(R[1]-E[1])+K*(E[0]-R[0]))/(tt*K-at*Y),Z=(tt*(E[1]-R[1])+at*(R[0]-E[0]))/(at*Y-tt*K);return X>=0&&X<=1&&Z>=0&&Z<=1}function e(E,P,R){return(P[0]-E[0])*(R[1]-E[1])-(R[0]-E[0])*(P[1]-E[1])}function i(E,P,R){return e(E,P,R)>0}function r(E,P,R){return e(E,P,R)>=0}function s(E,P,R){return e(E,P,R)<0}function o(E,P,R){return e(E,P,R)<=0}var a=[],l=[];function u(E,P,R,B){if(B){var Y=a,K=l;Y[0]=P[0]-E[0],Y[1]=P[1]-E[1],K[0]=R[0]-P[0],K[1]=R[1]-P[1];var tt=Y[0]*K[0]+Y[1]*K[1],at=Math.sqrt(Y[0]*Y[0]+Y[1]*Y[1]),X=Math.sqrt(K[0]*K[0]+K[1]*K[1]),Z=Math.acos(tt/(at*X));return Z<B}else return e(E,P,R)===0}function h(E,P){var R=P[0]-E[0],B=P[1]-E[1];return R*R+B*B}function c(E,P){var R=E.length;return E[P<0?P%R+R:P%R]}function f(E){E.length=0}function d(E,P,R,B){for(var Y=R;Y<B;Y++)E.push(P[Y])}function _(E){for(var P=0,R=E,B=1;B<E.length;++B)(R[B][1]<R[P][1]||R[B][1]===R[P][1]&&R[B][0]>R[P][0])&&(P=B);return i(c(E,P-1),c(E,P),c(E,P+1))?!1:(y(E),!0)}function y(E){for(var P=[],R=E.length,B=0;B!==R;B++)P.push(E.pop());for(var B=0;B!==R;B++)E[B]=P[B]}function m(E,P){return s(c(E,P-1),c(E,P),c(E,P+1))}var p=[],w=[];function b(E,P,R){var B,Y,K=p,tt=w;if(r(c(E,P+1),c(E,P),c(E,R))&&o(c(E,P-1),c(E,P),c(E,R)))return!1;Y=h(c(E,P),c(E,R));for(var at=0;at!==E.length;++at)if(!((at+1)%E.length===P||at===P)&&r(c(E,P),c(E,R),c(E,at+1))&&o(c(E,P),c(E,R),c(E,at))&&(K[0]=c(E,P),K[1]=c(E,R),tt[0]=c(E,at),tt[1]=c(E,at+1),B=n(K,tt),h(c(E,P),B)<Y))return!1;return!0}function M(E,P,R){for(var B=0;B!==E.length;++B)if(!(B===P||B===R||(B+1)%E.length===P||(B+1)%E.length===R)&&t(c(E,P),c(E,R),c(E,B),c(E,B+1)))return!1;return!0}function N(E,P,R,B){var Y=B||[];if(f(Y),P<R)for(var K=P;K<=R;K++)Y.push(E[K]);else{for(var K=0;K<=R;K++)Y.push(E[K]);for(var K=P;K<E.length;K++)Y.push(E[K])}return Y}function I(E){for(var P=[],R=[],B=[],Y=[],K=Number.MAX_VALUE,tt=0;tt<E.length;++tt)if(m(E,tt)){for(var at=0;at<E.length;++at)if(b(E,tt,at)){R=I(N(E,tt,at,Y)),B=I(N(E,at,tt,Y));for(var X=0;X<B.length;X++)R.push(B[X]);R.length<K&&(P=R,K=R.length,P.push([c(E,tt),c(E,at)]))}}return P}function D(E){var P=I(E);return P.length>0?O(E,P):[E]}function O(E,P){if(P.length===0)return[E];if(P instanceof Array&&P.length&&P[0]instanceof Array&&P[0].length===2&&P[0][0]instanceof Array){for(var R=[E],B=0;B<P.length;B++)for(var Y=P[B],K=0;K<R.length;K++){var tt=R[K],at=O(tt,Y);if(at){R.splice(K,1),R.push(at[0],at[1]);break}}return R}else{var Y=P,B=E.indexOf(Y[0]),K=E.indexOf(Y[1]);return B!==-1&&K!==-1?[N(E,B,K),N(E,K,B)]:!1}}function v(E){var P=E,R;for(R=0;R<P.length-1;R++)for(var B=0;B<R-1;B++)if(t(P[R],P[R+1],P[B],P[B+1]))return!1;for(R=1;R<P.length-2;R++)if(t(P[0],P[P.length-1],P[R],P[R+1]))return!1;return!0}function x(E,P,R,B,Y){Y=Y||0;var K=P[1]-E[1],tt=E[0]-P[0],at=K*E[0]+tt*E[1],X=B[1]-R[1],Z=R[0]-B[0],ot=X*R[0]+Z*R[1],it=K*Z-X*tt;return k(it,0,Y)?[0,0]:[(Z*at-tt*ot)/it,(K*ot-X*at)/it]}function T(E,P,R,B,Y,K,tt){K=K||100,tt=tt||0,Y=Y||25,P=typeof P<"u"?P:[],R=R||[],B=B||[];var at=[0,0],X=[0,0],Z=[0,0],ot=0,it=0,lt=0,It=0,_t=0,Ht=0,Zt=0,Ct=[],L=[],yt=E,jt=E;if(jt.length<3)return P;if(tt++,tt>K)return console.warn("quickDecomp: max level ("+K+") reached."),P;for(var St=0;St<E.length;++St)if(m(yt,St)){R.push(yt[St]),ot=it=Number.MAX_VALUE;for(var ht=0;ht<E.length;++ht)i(c(yt,St-1),c(yt,St),c(yt,ht))&&o(c(yt,St-1),c(yt,St),c(yt,ht-1))&&(Z=x(c(yt,St-1),c(yt,St),c(yt,ht),c(yt,ht-1)),s(c(yt,St+1),c(yt,St),Z)&&(lt=h(yt[St],Z),lt<it&&(it=lt,X=Z,Ht=ht))),i(c(yt,St+1),c(yt,St),c(yt,ht+1))&&o(c(yt,St+1),c(yt,St),c(yt,ht))&&(Z=x(c(yt,St+1),c(yt,St),c(yt,ht),c(yt,ht+1)),i(c(yt,St-1),c(yt,St),Z)&&(lt=h(yt[St],Z),lt<ot&&(ot=lt,at=Z,_t=ht)));if(Ht===(_t+1)%E.length)Z[0]=(X[0]+at[0])/2,Z[1]=(X[1]+at[1])/2,B.push(Z),St<_t?(d(Ct,yt,St,_t+1),Ct.push(Z),L.push(Z),Ht!==0&&d(L,yt,Ht,yt.length),d(L,yt,0,St+1)):(St!==0&&d(Ct,yt,St,yt.length),d(Ct,yt,0,_t+1),Ct.push(Z),L.push(Z),d(L,yt,Ht,St+1));else{if(Ht>_t&&(_t+=E.length),It=Number.MAX_VALUE,_t<Ht)return P;for(var ht=Ht;ht<=_t;++ht)r(c(yt,St-1),c(yt,St),c(yt,ht))&&o(c(yt,St+1),c(yt,St),c(yt,ht))&&(lt=h(c(yt,St),c(yt,ht)),lt<It&&M(yt,St,ht)&&(It=lt,Zt=ht%E.length));St<Zt?(d(Ct,yt,St,Zt+1),Zt!==0&&d(L,yt,Zt,jt.length),d(L,yt,0,St+1)):(St!==0&&d(Ct,yt,St,jt.length),d(Ct,yt,0,Zt+1),d(L,yt,Zt,St+1))}return Ct.length<L.length?(T(Ct,P,R,B,Y,K,tt),T(L,P,R,B,Y,K,tt)):(T(L,P,R,B,Y,K,tt),T(Ct,P,R,B,Y,K,tt)),P}return P.push(E),P}function U(E,P){for(var R=0,B=E.length-1;E.length>3&&B>=0;--B)u(c(E,B-1),c(E,B),c(E,B+1),P)&&(E.splice(B%E.length,1),R++);return R}function F(E,P){for(var R=E.length-1;R>=1;--R)for(var B=E[R],Y=R-1;Y>=0;--Y)if(W(B,E[Y],P)){E.splice(R,1);continue}}function k(E,P,R){return R=R||0,Math.abs(E-P)<=R}function W(E,P,R){return k(E[0],P[0],R)&&k(E[1],P[1],R)}return Wa}var oh=Zx(),vo={exports:{}},Kx=vo.exports,ah;function Jx(){return ah||(ah=1,function(n,t){/** @preserve SAT.js - Version 0.9.0 - Copyright 2012 - 2021 - Jim Riecken <jimr@jimr.ca> - released under the MIT License. https://github.com/jriecken/sat-js */(function(e,i){n.exports=i()})(Kx,function(){var e={};function i(v,x){this.x=v||0,this.y=x||0}e.Vector=i,e.V=i,i.prototype.copy=i.prototype.copy=function(v){return this.x=v.x,this.y=v.y,this},i.prototype.clone=i.prototype.clone=function(){return new i(this.x,this.y)},i.prototype.perp=i.prototype.perp=function(){var v=this.x;return this.x=this.y,this.y=-v,this},i.prototype.rotate=i.prototype.rotate=function(v){var x=this.x,T=this.y;return this.x=x*Math.cos(v)-T*Math.sin(v),this.y=x*Math.sin(v)+T*Math.cos(v),this},i.prototype.reverse=i.prototype.reverse=function(){return this.x=-this.x,this.y=-this.y,this},i.prototype.normalize=i.prototype.normalize=function(){var v=this.len();return v>0&&(this.x=this.x/v,this.y=this.y/v),this},i.prototype.add=i.prototype.add=function(v){return this.x+=v.x,this.y+=v.y,this},i.prototype.sub=i.prototype.sub=function(v){return this.x-=v.x,this.y-=v.y,this},i.prototype.scale=i.prototype.scale=function(v,x){return this.x*=v,this.y*=typeof x<"u"?x:v,this},i.prototype.project=i.prototype.project=function(v){var x=this.dot(v)/v.len2();return this.x=x*v.x,this.y=x*v.y,this},i.prototype.projectN=i.prototype.projectN=function(v){var x=this.dot(v);return this.x=x*v.x,this.y=x*v.y,this},i.prototype.reflect=i.prototype.reflect=function(v){var x=this.x,T=this.y;return this.project(v).scale(2),this.x-=x,this.y-=T,this},i.prototype.reflectN=i.prototype.reflectN=function(v){var x=this.x,T=this.y;return this.projectN(v).scale(2),this.x-=x,this.y-=T,this},i.prototype.dot=i.prototype.dot=function(v){return this.x*v.x+this.y*v.y},i.prototype.len2=i.prototype.len2=function(){return this.dot(this)},i.prototype.len=i.prototype.len=function(){return Math.sqrt(this.len2())};function r(v,x){this.pos=v||new i,this.r=x||0,this.offset=new i}e.Circle=r,r.prototype.getAABBAsBox=r.prototype.getAABBAsBox=function(){var v=this.r,x=this.pos.clone().add(this.offset).sub(new i(v,v));return new o(x,v*2,v*2)},r.prototype.getAABB=r.prototype.getAABB=function(){return this.getAABBAsBox().toPolygon()},r.prototype.setOffset=r.prototype.setOffset=function(v){return this.offset=v,this};function s(v,x){this.pos=v||new i,this.angle=0,this.offset=new i,this.setPoints(x||[])}e.Polygon=s,s.prototype.setPoints=s.prototype.setPoints=function(v){var x=!this.points||this.points.length!==v.length;if(x){var T,U=this.calcPoints=[],F=this.edges=[],k=this.normals=[];for(T=0;T<v.length;T++){var W=v[T],E=T<v.length-1?v[T+1]:v[0];if(W!==E&&W.x===E.x&&W.y===E.y){v.splice(T,1),T-=1;continue}U.push(new i),F.push(new i),k.push(new i)}}return this.points=v,this._recalc(),this},s.prototype.setAngle=s.prototype.setAngle=function(v){return this.angle=v,this._recalc(),this},s.prototype.setOffset=s.prototype.setOffset=function(v){return this.offset=v,this._recalc(),this},s.prototype.rotate=s.prototype.rotate=function(v){for(var x=this.points,T=x.length,U=0;U<T;U++)x[U].rotate(v);return this._recalc(),this},s.prototype.translate=s.prototype.translate=function(v,x){for(var T=this.points,U=T.length,F=0;F<U;F++)T[F].x+=v,T[F].y+=x;return this._recalc(),this},s.prototype._recalc=function(){var v=this.calcPoints,x=this.edges,T=this.normals,U=this.points,F=this.offset,k=this.angle,W=U.length,E;for(E=0;E<W;E++){var P=v[E].copy(U[E]);P.x+=F.x,P.y+=F.y,k!==0&&P.rotate(k)}for(E=0;E<W;E++){var R=v[E],B=E<W-1?v[E+1]:v[0],Y=x[E].copy(B).sub(R);T[E].copy(Y).perp().normalize()}return this},s.prototype.getAABBAsBox=s.prototype.getAABBAsBox=function(){for(var v=this.calcPoints,x=v.length,T=v[0].x,U=v[0].y,F=v[0].x,k=v[0].y,W=1;W<x;W++){var E=v[W];E.x<T?T=E.x:E.x>F&&(F=E.x),E.y<U?U=E.y:E.y>k&&(k=E.y)}return new o(this.pos.clone().add(new i(T,U)),F-T,k-U)},s.prototype.getAABB=s.prototype.getAABB=function(){return this.getAABBAsBox().toPolygon()},s.prototype.getCentroid=s.prototype.getCentroid=function(){for(var v=this.calcPoints,x=v.length,T=0,U=0,F=0,k=0;k<x;k++){var W=v[k],E=k===x-1?v[0]:v[k+1],P=W.x*E.y-E.x*W.y;T+=(W.x+E.x)*P,U+=(W.y+E.y)*P,F+=P}return F=F*3,T=T/F,U=U/F,new i(T,U)};function o(v,x,T){this.pos=v||new i,this.w=x||0,this.h=T||0}e.Box=o,o.prototype.toPolygon=o.prototype.toPolygon=function(){var v=this.pos,x=this.w,T=this.h;return new s(new i(v.x,v.y),[new i,new i(x,0),new i(x,T),new i(0,T)])};function a(){this.a=null,this.b=null,this.overlapN=new i,this.overlapV=new i,this.clear()}e.Response=a,a.prototype.clear=a.prototype.clear=function(){return this.aInB=!0,this.bInA=!0,this.overlap=Number.MAX_VALUE,this};for(var l=[],u=0;u<10;u++)l.push(new i);for(var h=[],u=0;u<5;u++)h.push([]);var c=new a,f=new o(new i,1e-6,1e-6).toPolygon();function d(v,x,T){for(var U=Number.MAX_VALUE,F=-Number.MAX_VALUE,k=v.length,W=0;W<k;W++){var E=v[W].dot(x);E<U&&(U=E),E>F&&(F=E)}T[0]=U,T[1]=F}function _(v,x,T,U,F,k){var W=h.pop(),E=h.pop(),P=l.pop().copy(x).sub(v),R=P.dot(F);if(d(T,F,W),d(U,F,E),E[0]+=R,E[1]+=R,W[0]>E[1]||E[0]>W[1])return l.push(P),h.push(W),h.push(E),!0;if(k){var B=0;if(W[0]<E[0])if(k.aInB=!1,W[1]<E[1])B=W[1]-E[0],k.bInA=!1;else{var Y=W[1]-E[0],K=E[1]-W[0];B=Y<K?Y:-K}else if(k.bInA=!1,W[1]>E[1])B=W[0]-E[1],k.aInB=!1;else{var Y=W[1]-E[0],K=E[1]-W[0];B=Y<K?Y:-K}var tt=Math.abs(B);tt<k.overlap&&(k.overlap=tt,k.overlapN.copy(F),B<0&&k.overlapN.reverse())}return l.push(P),h.push(W),h.push(E),!1}e.isSeparatingAxis=_;function y(v,x){var T=v.len2(),U=x.dot(v);return U<0?m:U>T?w:p}var m=-1,p=0,w=1;function b(v,x){var T=l.pop().copy(v).sub(x.pos).sub(x.offset),U=x.r*x.r,F=T.len2();return l.push(T),F<=U}e.pointInCircle=b;function M(v,x){f.pos.copy(v),c.clear();var T=O(f,x,c);return T&&(T=c.aInB),T}e.pointInPolygon=M;function N(v,x,T){var U=l.pop().copy(x.pos).add(x.offset).sub(v.pos).sub(v.offset),F=v.r+x.r,k=F*F,W=U.len2();if(W>k)return l.push(U),!1;if(T){var E=Math.sqrt(W);T.a=v,T.b=x,T.overlap=F-E,T.overlapN.copy(U.normalize()),T.overlapV.copy(U).scale(T.overlap),T.aInB=v.r<=x.r&&E<=x.r-v.r,T.bInA=x.r<=v.r&&E<=v.r-x.r}return l.push(U),!0}e.testCircleCircle=N;function I(v,x,T){for(var U=l.pop().copy(x.pos).add(x.offset).sub(v.pos),F=x.r,k=F*F,W=v.calcPoints,E=W.length,P=l.pop(),R=l.pop(),B=0;B<E;B++){var Y=B===E-1?0:B+1,K=B===0?E-1:B-1,tt=0,at=null;P.copy(v.edges[B]),R.copy(U).sub(W[B]),T&&R.len2()>k&&(T.aInB=!1);var X=y(P,R);if(X===m){P.copy(v.edges[K]);var Z=l.pop().copy(U).sub(W[K]);if(X=y(P,Z),X===w){var ot=R.len();if(ot>F)return l.push(U),l.push(P),l.push(R),l.push(Z),!1;T&&(T.bInA=!1,at=R.normalize(),tt=F-ot)}l.push(Z)}else if(X===w){if(P.copy(v.edges[Y]),R.copy(U).sub(W[Y]),X=y(P,R),X===m){var ot=R.len();if(ot>F)return l.push(U),l.push(P),l.push(R),!1;T&&(T.bInA=!1,at=R.normalize(),tt=F-ot)}}else{var it=P.perp().normalize(),ot=R.dot(it),lt=Math.abs(ot);if(ot>0&&lt>F)return l.push(U),l.push(it),l.push(R),!1;T&&(at=it,tt=F-ot,(ot>=0||tt<2*F)&&(T.bInA=!1))}at&&T&&Math.abs(tt)<Math.abs(T.overlap)&&(T.overlap=tt,T.overlapN.copy(at))}return T&&(T.a=v,T.b=x,T.overlapV.copy(T.overlapN).scale(T.overlap)),l.push(U),l.push(P),l.push(R),!0}e.testPolygonCircle=I;function D(v,x,T){var U=I(x,v,T);if(U&&T){var F=T.a,k=T.aInB;T.overlapN.reverse(),T.overlapV.reverse(),T.a=T.b,T.b=F,T.aInB=T.bInA,T.bInA=k}return U}e.testCirclePolygon=D;function O(v,x,T){for(var U=v.calcPoints,F=U.length,k=x.calcPoints,W=k.length,E=0;E<F;E++)if(_(v.pos,x.pos,U,k,v.normals[E],T))return!1;for(var E=0;E<W;E++)if(_(v.pos,x.pos,U,k,x.normals[E],T))return!1;return T&&(T.a=v,T.b=x,T.overlapV.copy(T.overlapN).scale(T.overlap)),!0}return e.testPolygonPolygon=O,e})}(vo)),vo.exports}var Di=Jx();class Qx{constructor(t){Ce(this,"spoon");Ce(this,"spoonsBelow",[]);Ce(this,"spoonsAbove",[]);Ce(this,"layerBelow");Ce(this,"layerAbove");Ce(this,"layerCurrent");this.spoon=t}}function lh(n){let t=[];for(let e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}function ty(n){n.sort((r,s)=>r.layer-s.layer);let t=[],e=[],i=0;return n.forEach(r=>{i=r.layer,e.length<=i&&e.push([]);let s=new Qx(r);if(t.push(s),e[e.length-1].push(s),s.layerCurrent=e[e.length-1],e.length-2>=0){s.layerBelow=e[e.length-2];const a=oh.quickDecomp(lh(s.spoon.border));s.layerBelow!=null&&s.layerBelow.forEach(l=>{const h=oh.quickDecomp(lh(l.spoon.border));let c=!1;for(const f of a){const d=new Di.Polygon(new Di.Vector,f.map(_=>new Di.Vector(_[0],_[1])));for(const _ of h){const y=new Di.Polygon(new Di.Vector,_.map(m=>new Di.Vector(m[0],m[1])));if(Di.testPolygonPolygon(d,y)){c=!0;break}}if(c)break}c&&(s.spoonsBelow.push(l),l.spoonsAbove.push(s))})}}),t.forEach(r=>{r.spoon.layer+1<e.length&&(r.layerAbove=e[r.spoon.layer+1])}),{allSpoons:t,layers:e}}const ch={type:"change"},vc={type:"start"},Tf={type:"end"},eo=new uc,uh=new fi,ey=Math.cos(70*Qh.DEG2RAD),Ee=new V,je=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xa=1e-6;class ny extends Gm{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:xr.ROTATE,TWO:xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new ji,this._lastTargetPosition=new V,this._quat=new ji().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wu,this._sphericalDelta=new wu,this._scale=1,this._panOffset=new V,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new V,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ry.bind(this),this._onPointerDown=iy.bind(this),this._onPointerUp=sy.bind(this),this._onContextMenu=fy.bind(this),this._onMouseWheel=ly.bind(this),this._onKeyDown=cy.bind(this),this._onTouchStart=uy.bind(this),this._onTouchMove=hy.bind(this),this._onMouseDown=oy.bind(this),this._onMouseMove=ay.bind(this),this._interceptControlDown=dy.bind(this),this._interceptControlUp=py.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ch),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=je:i>Math.PI&&(i-=je),r<-Math.PI?r+=je:r>Math.PI&&(r-=je),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ee.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new V(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<ey?this.object.lookAt(this.target):(uh.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(uh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xa||this._lastTargetPosition.distanceToSquared(this.target)>Xa?(this.dispatchEvent(ch),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ee.copy(r).sub(this.target);let s=Ee.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function iy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ry(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function sy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tf),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function oy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ce.DOLLY;break;case Mr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}break;case Mr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(vc)}function ay(n){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ly(n){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(n.preventDefault(),this.dispatchEvent(vc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Tf))}function cy(n){this.enabled!==!1&&this._handleKeyDown(n)}function uy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ce.TOUCH_ROTATE;break;case xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ce.TOUCH_DOLLY_PAN;break;case xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(vc)}function hy(n){switch(this._trackPointer(n),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ce.NONE}}function fy(n){this.enabled!==!1&&n.preventDefault()}function dy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function py(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const xo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const my=new gc(-1,1,1,-1,0,1);class gy extends sn{constructor(){super(),this.setAttribute("position",new rn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rn([0,2,0,0,2,0],2))}}const _y=new gy;class bf{constructor(t){this._mesh=new cn(_y,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,my)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class vy extends gs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yr.clone(t.uniforms),this.material=new Qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new bf(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class hh extends gs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class xy extends gs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class yy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Vt);this._width=i.width,this._height=i.height,e=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vy(xo),this.copyPass.material.blending=We,this.clock=new Hm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hh!==void 0&&(o instanceof hh?i=!0:o instanceof xy&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sy extends gs{constructor(t,e,i=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new te}render(t,e,i){const r=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=r}}class My{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let i,r,s;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),u=Math.floor(e+a),h=(3-Math.sqrt(3))/6,c=(l+u)*h,f=l-c,d=u-c,_=t-f,y=e-d;let m,p;_>y?(m=1,p=0):(m=0,p=1);const w=_-m+h,b=y-p+h,M=_-1+2*h,N=y-1+2*h,I=l&255,D=u&255,O=this.perm[I+this.perm[D]]%12,v=this.perm[I+m+this.perm[D+p]]%12,x=this.perm[I+1+this.perm[D+1]]%12;let T=.5-_*_-y*y;T<0?i=0:(T*=T,i=T*T*this._dot(this.grad3[O],_,y));let U=.5-w*w-b*b;U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[v],w,b));let F=.5-M*M-N*N;return F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[x],M,N)),70*(i+r+s)}noise3d(t,e,i){let r,s,o,a;const u=(t+e+i)*.3333333333333333,h=Math.floor(t+u),c=Math.floor(e+u),f=Math.floor(i+u),d=1/6,_=(h+c+f)*d,y=h-_,m=c-_,p=f-_,w=t-y,b=e-m,M=i-p;let N,I,D,O,v,x;w>=b?b>=M?(N=1,I=0,D=0,O=1,v=1,x=0):w>=M?(N=1,I=0,D=0,O=1,v=0,x=1):(N=0,I=0,D=1,O=1,v=0,x=1):b<M?(N=0,I=0,D=1,O=0,v=1,x=1):w<M?(N=0,I=1,D=0,O=0,v=1,x=1):(N=0,I=1,D=0,O=1,v=1,x=0);const T=w-N+d,U=b-I+d,F=M-D+d,k=w-O+2*d,W=b-v+2*d,E=M-x+2*d,P=w-1+3*d,R=b-1+3*d,B=M-1+3*d,Y=h&255,K=c&255,tt=f&255,at=this.perm[Y+this.perm[K+this.perm[tt]]]%12,X=this.perm[Y+N+this.perm[K+I+this.perm[tt+D]]]%12,Z=this.perm[Y+O+this.perm[K+v+this.perm[tt+x]]]%12,ot=this.perm[Y+1+this.perm[K+1+this.perm[tt+1]]]%12;let it=.6-w*w-b*b-M*M;it<0?r=0:(it*=it,r=it*it*this._dot3(this.grad3[at],w,b,M));let lt=.6-T*T-U*U-F*F;lt<0?s=0:(lt*=lt,s=lt*lt*this._dot3(this.grad3[X],T,U,F));let It=.6-k*k-W*W-E*E;It<0?o=0:(It*=It,o=It*It*this._dot3(this.grad3[Z],k,W,E));let _t=.6-P*P-R*R-B*B;return _t<0?a=0:(_t*=_t,a=_t*_t*this._dot3(this.grad3[ot],P,R,B)),32*(r+s+o+a)}noise4d(t,e,i,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;let h,c,f,d,_;const y=(t+e+i+r)*l,m=Math.floor(t+y),p=Math.floor(e+y),w=Math.floor(i+y),b=Math.floor(r+y),M=(m+p+w+b)*u,N=m-M,I=p-M,D=w-M,O=b-M,v=t-N,x=e-I,T=i-D,U=r-O,F=v>x?32:0,k=v>T?16:0,W=x>T?8:0,E=v>U?4:0,P=x>U?2:0,R=T>U?1:0,B=F+k+W+E+P+R,Y=o[B][0]>=3?1:0,K=o[B][1]>=3?1:0,tt=o[B][2]>=3?1:0,at=o[B][3]>=3?1:0,X=o[B][0]>=2?1:0,Z=o[B][1]>=2?1:0,ot=o[B][2]>=2?1:0,it=o[B][3]>=2?1:0,lt=o[B][0]>=1?1:0,It=o[B][1]>=1?1:0,_t=o[B][2]>=1?1:0,Ht=o[B][3]>=1?1:0,Zt=v-Y+u,Ct=x-K+u,L=T-tt+u,yt=U-at+u,jt=v-X+2*u,St=x-Z+2*u,ht=T-ot+2*u,Jt=U-it+2*u,Lt=v-lt+3*u,Xt=x-It+3*u,ge=T-_t+3*u,C=U-Ht+3*u,S=v-1+4*u,$=x-1+4*u,Q=T-1+4*u,nt=U-1+4*u,J=m&255,At=p&255,pt=w&255,Et=b&255,Dt=a[J+a[At+a[pt+a[Et]]]]%32,st=a[J+Y+a[At+K+a[pt+tt+a[Et+at]]]]%32,Mt=a[J+X+a[At+Z+a[pt+ot+a[Et+it]]]]%32,Bt=a[J+lt+a[At+It+a[pt+_t+a[Et+Ht]]]]%32,Ft=a[J+1+a[At+1+a[pt+1+a[Et+1]]]]%32;let dt=.6-v*v-x*x-T*T-U*U;dt<0?h=0:(dt*=dt,h=dt*dt*this._dot4(s[Dt],v,x,T,U));let zt=.6-Zt*Zt-Ct*Ct-L*L-yt*yt;zt<0?c=0:(zt*=zt,c=zt*zt*this._dot4(s[st],Zt,Ct,L,yt));let z=.6-jt*jt-St*St-ht*ht-Jt*Jt;z<0?f=0:(z*=z,f=z*z*this._dot4(s[Mt],jt,St,ht,Jt));let mt=.6-Lt*Lt-Xt*Xt-ge*ge-C*C;mt<0?d=0:(mt*=mt,d=mt*mt*this._dot4(s[Bt],Lt,Xt,ge,C));let rt=.6-S*S-$*$-Q*Q-nt*nt;return rt<0?_=0:(rt*=rt,_=rt*rt*this._dot4(s[Ft],S,$,Q,nt)),27*(h+c+f+d+_)}_dot(t,e,i){return t[0]*e+t[1]*i}_dot3(t,e,i,r){return t[0]*e+t[1]*i+t[2]*r}_dot4(t,e,i,r,s){return t[0]*e+t[1]*i+t[2]*r+t[3]*s}}const no={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Vt},cameraProjectionMatrix:{value:new de},cameraInverseProjectionMatrix:{value:new de},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},io={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ro={uniforms:{tDiffuse:{value:null},resolution:{value:new Vt}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class pi extends gs{constructor(t,e,i=512,r=512,s=32){super(),this.width=i,this.height=r,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this._generateSampleKernel(s),this._generateRandomKernelRotations();const o=new dc;o.format=Lr,o.type=Ir,this.normalRenderTarget=new kn(this.width,this.height,{minFilter:$e,magFilter:$e,type:xi,depthTexture:o}),this.ssaoRenderTarget=new kn(this.width,this.height,{type:xi}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Qe({defines:Object.assign({},no.defines),uniforms:yr.clone(no.uniforms),vertexShader:no.vertexShader,fragmentShader:no.fragmentShader,blending:We}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Lm,this.normalMaterial.blending=We,this.blurMaterial=new Qe({defines:Object.assign({},ro.defines),uniforms:yr.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Qe({defines:Object.assign({},io.defines),uniforms:yr.clone(io.uniforms),vertexShader:io.vertexShader,fragmentShader:io.fragmentShader,blending:We}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Qe({uniforms:yr.clone(xo.uniforms),vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Gh,blendDst:el,blendEquation:Qn,blendSrcAlpha:Hh,blendDstAlpha:el,blendEquationAlpha:Qn}),this._fsQuad=new bf(null),this._originalClearColor=new te}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(t,e,i){switch(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case pi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case pi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case pi.OUTPUT.Depth:this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case pi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=We,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case pi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=kh,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}_renderPass(t,e,i,r,s){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,i,r,s){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,r=e.clearColor||r,s=e.clearAlpha||s,r!=null&&(t.setClearColor(r),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const r=new V;r.x=Math.random()*2-1,r.y=Math.random()*2-1,r.z=Math.random(),r.normalize();let s=i/t;s=Qh.lerp(.1,1,s*s),r.multiplyScalar(s),e.push(r)}}_generateRandomKernelRotations(){const i=new My,r=4*4,s=new Float32Array(r);for(let o=0;o<r;o++){const a=Math.random()*2-1,l=Math.random()*2-1,u=0;s[o]=i.noise3d(a,l,u)}this.noiseTexture=new Pm(s,4,4,ic,Bn),this.noiseTexture.wrapS=os,this.noiseTexture.wrapT=os,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){e.set(i,i.visible),(i.isPoints||i.isLine)&&(i.visible=!1)})}_restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){const r=e.get(i);i.visible=r}),e.clear()}}pi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Pt=globalThis,{Array:Ey,ArrayBuffer:wo,Date:Ty,FinalizationRegistry:Or,Float32Array:by,JSON:Ay,Map:Ln,Math:wy,Number:Af,Object:xc,Promise:Ry,Proxy:Xo,Reflect:Py,RegExp:mi,Set:Gr,String:hn,Symbol:Ar,Uint8Array:Vl,WeakMap:Gn,WeakSet:Vr}=globalThis,{Error:Ge,RangeError:Cy,ReferenceError:ss,SyntaxError:_s,TypeError:xt,AggregateError:$a}=globalThis,{assign:vs,create:Me,defineProperties:he,entries:tn,freeze:ft,getOwnPropertyDescriptor:Le,getOwnPropertyDescriptors:Vn,getOwnPropertyNames:Br,getPrototypeOf:fe,is:$o,keys:wf,prototype:Yo,preventExtensions:Dy,setPrototypeOf:Ro,values:Rf,fromEntries:xs}=xc,{species:Ya,toStringTag:Si,iterator:Fn,matchAll:Pf,unscopables:Iy,keyFor:Ly,for:Uy}=Ar,{isInteger:Ny}=Af,{stringify:Cf}=Ay,{defineProperty:Fy}=xc,se=(n,t,e)=>{const i=Fy(n,t,e);if(i!==n)throw xt(`Please report that the original defineProperty silently failed to set ${Cf(hn(t))}. (SES_DEFINE_PROPERTY_FAILED_SILENTLY)`);return i},{apply:Xe,construct:Po,get:Oy,getOwnPropertyDescriptor:By,has:Df,isExtensible:zy,ownKeys:ni,preventExtensions:ky,set:If}=Py,{isArray:Yi,prototype:fn}=Ey,{prototype:Co}=wo,{prototype:Wr}=Ln,{prototype:qo}=RegExp,{prototype:ys}=Gr,{prototype:Wn}=hn,{prototype:jo}=Gn,{prototype:Lf}=Vr,{prototype:Zo}=Function,{prototype:Uf}=Ry,{prototype:Nf}=fe(function*(){}),qa=fe(fe(fn.values())),Ff=fe(Vl.prototype),{bind:Wl}=Zo,Nt=Wl.bind(Wl.call),Ie=Nt(Yo.hasOwnProperty),Ki=Nt(fn.filter),_i=Nt(fn.forEach),Ko=Nt(fn.includes),Xr=Nt(fn.join),un=Nt(fn.map),Jo=Nt(fn.flatMap),Do=Nt(fn.pop),Oe=Nt(fn.push),Hy=Nt(fn.slice),Of=Nt(fn.some),Bf=Nt(fn.sort),Gy=Nt(fn[Fn]),Vy=Nt(Co.slice),Wy=Nt(Le(Co,"byteLength").get),Xy=Nt(Ff.set),Ze=Nt(Wr.set),ii=Nt(Wr.get),Qo=Nt(Wr.has),$y=Nt(Wr.delete),Yy=Nt(Wr.entries),qy=Nt(Wr[Fn]),yc=Nt(ys.add);Nt(ys.delete);const fh=Nt(ys.forEach),Sc=Nt(ys.has),jy=Nt(ys[Fn]),Mc=Nt(qo.test),Ec=Nt(qo.exec),Zy=Nt(qo[Pf]),zf=Nt(Wn.endsWith),kf=Nt(Wn.includes),Ky=Nt(Wn.indexOf);Nt(Wn.match);const Io=Nt(Nf.next),Hf=Nt(Nf.throw),Lo=Nt(Wn.replace),Jy=Nt(Wn.search),Tc=Nt(Wn.slice),bc=Nt(Wn.split),Gf=Nt(Wn.startsWith),Qy=Nt(Wn[Fn]),tS=Nt(jo.delete),ue=Nt(jo.get),wr=Nt(jo.has),Je=Nt(jo.set),ta=Nt(Lf.add),Ss=Nt(Lf.has),eS=Nt(Zo.toString),Vf=Nt(Wl);Nt(Uf.catch);const Wf=Nt(Uf.then),nS=Or&&Nt(Or.prototype.register);Or&&Nt(Or.prototype.unregister);const Mn=n=>xc(n)===n,ea=n=>n instanceof Ge,Xf=n=>n,Xl=eval,Ke=Function,iS=()=>{throw xt('Cannot eval with evalTaming set to "no-eval" (SES_NO_EVAL)')},hi=Le(Error("er1"),"stack"),ja=Le(xt("er2"),"stack");let $f,Yf;if(hi&&ja&&hi.get)if(typeof hi.get=="function"&&hi.get===ja.get&&typeof hi.set=="function"&&hi.set===ja.set)$f=ft(hi.get),Yf=ft(hi.set);else throw xt("Unexpected Error own stack accessor functions (SES_UNEXPECTED_ERROR_OWN_STACK_ACCESSOR)");const Za=$f,rS=Yf,sS=()=>{try{return new Ke("return (async function* AsyncGeneratorFunctionInstance() {})")()}catch(n){if(n.name==="SyntaxError")return;if(n.name==="EvalError")return async function*(){};throw n}},$l=sS();function oS(){return this}if(oS())throw xt("SES failed to initialize, sloppy mode (SES_NO_SLOPPY)");const{freeze:Fi}=Object,{apply:aS}=Reflect,Ac=n=>(t,...e)=>aS(n,t,e),lS=Ac(Array.prototype.push),dh=Ac(Array.prototype.includes),cS=Ac(String.prototype.split),Ii=JSON.stringify,so=(n,...t)=>{let e=n[0];for(let i=0;i<t.length;i+=1)e=`${e}${t[i]}${n[i+1]}`;throw Error(e)},qf=(n,t=!1)=>{const e=[],i=(a,l,u=void 0)=>{typeof a=="string"||so`Environment option name ${Ii(a)} must be a string.`,typeof l=="string"||so`Environment option default setting ${Ii(l)} must be a string.`;let h=l;const c=n.process||void 0,f=typeof c=="object"&&c.env||void 0;if(typeof f=="object"&&a in f){t||lS(e,a);const d=f[a];typeof d=="string"||so`Environment option named ${Ii(a)}, if present, must have a corresponding string value, got ${Ii(d)}`,h=d}return u===void 0||h===l||dh(u,h)||so`Unrecognized ${Ii(a)} value ${Ii(h)}. Expected one of ${Ii([l,...u])}`,h};Fi(i);const r=a=>{const l=i(a,"");return Fi(l===""?[]:cS(l,","))};Fi(r);const s=(a,l)=>dh(r(a),l),o=()=>Fi([...e]);return Fi(o),Fi({getEnvironmentOption:i,getEnvironmentOptionsList:r,environmentOptionsListHas:s,getCapturedEnvironmentOptionNames:o})};Fi(qf);const{getEnvironmentOption:ke,getEnvironmentOptionsList:bE,environmentOptionsListHas:AE}=qf(globalThis,!0),{setPrototypeOf:uS,getOwnPropertyDescriptors:hS}=Object,{apply:Ms}=Reflect,{prototype:jf}=ArrayBuffer,{slice:fS,transfer:Uo}=jf,Es=(n,t=void 0,e=void 0)=>Ms(fS,n,[t,e]);let No;if(Uo)No=n=>Ms(Uo,n,[]);else if(globalThis.structuredClone)No=n=>(Es(n,0,0),globalThis.structuredClone(n,{transfer:[n]}));else throw TypeError('Can only emulate immutable ArrayBuffer on a platform with either "structuredClone" or "ArrayBuffer.prototype.transfer"');var Ve;class Zf{constructor(t){qc(this,Ve);jc(this,Ve,No(t))}get byteLength(){return mn(this,Ve).byteLength}get detached(){return mn(this,Ve),!1}get maxByteLength(){return mn(this,Ve).byteLength}get resizable(){return mn(this,Ve),!1}get immutable(){return mn(this,Ve),!0}slice(t=void 0,e=void 0){return Es(mn(this,Ve),t,e)}sliceToImmutable(t=void 0,e=void 0){return Jf(mn(this,Ve),t,e)}resize(t=void 0){throw mn(this,Ve),TypeError("Cannot resize an immutable ArrayBuffer")}transfer(t=void 0){throw mn(this,Ve),TypeError("Cannot detach an immutable ArrayBuffer")}transferToFixedLength(t=void 0){throw mn(this,Ve),TypeError("Cannot detach an immutable ArrayBuffer")}transferToImmutable(t=void 0){throw mn(this,Ve),TypeError("Cannot detach an immutable ArrayBuffer")}}Ve=new WeakMap;const wc=Zf.prototype;delete wc.constructor;const{slice:{value:dS},immutable:{get:pS}}=hS(wc);uS(wc,jf);const Kf=(n,t=void 0)=>{if(t!==void 0)if(Uo)n=Ms(Uo,n,[t]);else{n=No(n);const i=n.byteLength;if(t<=i)n=Es(n,0,t);else{const r=new Uint8Array(n),s=new Uint8Array(t);s.set(r),n=s.buffer}}return new Zf(n)},mS=n=>{try{return Ms(pS,n,[])}catch(t){if(t instanceof TypeError)return Es(n,0,0),!1;throw t}},gS=(n,t=void 0,e=void 0)=>{try{return Ms(dS,n,[t,e])}catch(i){if(i instanceof TypeError)return Es(n,t,e);throw i}},Jf=(n,t=void 0,e=void 0)=>Kf(gS(n,t,e)),{getOwnPropertyDescriptors:_S,defineProperties:vS}=Object,{prototype:Qf}=ArrayBuffer,xS={transferToImmutable(n=void 0){return Kf(this,n)},sliceToImmutable(n=void 0,t=void 0){return Jf(this,n,t)},get immutable(){return mS(this)}};"sliceToImmutable"in Qf&&console.warn('About to overwrite a prior implementation of "sliceToImmutable"');vS(Qf,_S(xS));const Fo=n=>(n=`${n}`,n.length>=1&&kf("aeiouAEIOU",n[0])?`an ${n}`:`a ${n}`);ft(Fo);const td=(n,t=void 0)=>{const e=new Gr,i=(r,s)=>{switch(typeof s){case"object":{if(s===null)return null;if(Sc(e,s))return"[Seen]";if(yc(e,s),ea(s))return`[${s.name}: ${s.message}]`;if(Si in s)return`[${s[Si]}]`;if(Yi(s))return s;const o=wf(s);if(o.length<2)return s;let a=!0;for(let u=1;u<o.length;u+=1)if(o[u-1]>=o[u]){a=!1;break}if(a)return s;Bf(o);const l=un(o,u=>[u,s[u]]);return xs(l)}case"function":return`[Function ${s.name||"<anon>"}]`;case"string":return Gf(s,"[")?`[${s}]`:s;case"undefined":case"symbol":return`[${hn(s)}]`;case"bigint":return`[${s}n]`;case"number":return $o(s,NaN)?"[NaN]":s===1/0?"[Infinity]":s===-1/0?"[-Infinity]":s;default:return s}};try{return Cf(n,i,t)}catch{return"[Something that failed to stringify]"}};ft(td);const{isSafeInteger:yS}=Number,{freeze:vr}=Object,{toStringTag:SS}=Symbol,ph=n=>{const e={next:void 0,prev:void 0,data:n};return e.next=e,e.prev=e,e},mh=(n,t)=>{if(n===t)throw TypeError("Cannot splice a cell into itself");if(t.next!==t||t.prev!==t)throw TypeError("Expected self-linked cell");const e=t,i=n.next;return e.prev=n,e.next=i,n.next=e,i.prev=e,e},Ka=n=>{const{prev:t,next:e}=n;t.next=e,e.prev=t,n.prev=n,n.next=n},ed=n=>{if(!yS(n)||n<0)throw TypeError("keysBudget must be a safe non-negative integer number");const t=new WeakMap;let e=0;const i=ph(void 0),r=h=>{const c=t.get(h);if(!(c===void 0||c.data===void 0))return Ka(c),mh(i,c),c},s=h=>r(h)!==void 0;vr(s);const o=h=>{const c=r(h);return c&&c.data&&c.data.get(h)};vr(o);const a=(h,c)=>{if(n<1)return u;let f=r(h);if(f===void 0&&(f=ph(void 0),mh(i,f)),!f.data)for(e+=1,f.data=new WeakMap,t.set(h,f);e>n;){const d=i.prev;Ka(d),d.data=void 0,e-=1}return f.data.set(h,c),u};vr(a);const l=h=>{const c=t.get(h);return c===void 0||(Ka(c),t.delete(h),c.data===void 0)?!1:(c.data=void 0,e-=1,!0)};vr(l);const u=vr({has:s,get:o,set:a,delete:l,[SS]:"LRUCacheMap"});return u};vr(ed);const{freeze:yo}=Object,{isSafeInteger:MS}=Number,ES=1e3,TS=100,nd=(n=ES,t=TS)=>{if(!MS(t)||t<1)throw TypeError("argsPerErrorBudget must be a safe positive integer number");const e=ed(n),i=(s,o)=>{const a=e.get(s);a!==void 0?(a.length>=t&&a.shift(),a.push(o)):e.set(s,[o])};yo(i);const r=s=>{const o=e.get(s);return e.delete(s),o};return yo(r),yo({addLogArgs:i,takeLogArgsArray:r})};yo(nd);const zr=new Gn,ie=(n,t=void 0)=>{const e=ft({toString:ft(()=>td(n,t))});return Je(zr,e,n),e};ft(ie);const bS=ft(/^[\w:-]( ?[\w:-])*$/),Oo=(n,t=void 0)=>{if(typeof n!="string"||!Mc(bS,n))return ie(n,t);const e=ft({toString:ft(()=>n)});return Je(zr,e,n),e};ft(Oo);const na=new Gn,id=({template:n,args:t})=>{const e=[n[0]];for(let i=0;i<t.length;i+=1){const r=t[i];let s;wr(zr,r)?s=`${r}`:ea(r)?s=`(${Fo(r.name)})`:s=`(${Fo(typeof r)})`,Oe(e,s,n[i+1])}return Xr(e,"")},rd=ft({toString(){const n=ue(na,this);return n===void 0?"[Not a DetailsToken]":id(n)}});ft(rd.toString);const Fe=(n,...t)=>{const e=ft({__proto__:rd});return Je(na,e,{template:n,args:t}),e};ft(Fe);const sd=(n,...t)=>(t=un(t,e=>wr(zr,e)?e:ie(e)),Fe(n,...t));ft(sd);const od=({template:n,args:t})=>{const e=[n[0]];for(let i=0;i<t.length;i+=1){let r=t[i];wr(zr,r)&&(r=ue(zr,r));const s=Lo(Do(e)||"",/ $/,"");s!==""&&Oe(e,s);const o=Lo(n[i+1],/^ /,"");Oe(e,r,o)}return e[e.length-1]===""&&Do(e),e},So=new Gn;let Yl=0;const gh=new Gn,ad=(n,t=n.name)=>{let e=ue(gh,n);return e!==void 0||(Yl+=1,e=`${t}#${Yl}`,Je(gh,n,e)),e},AS=n=>{const t=Vn(n),{name:e,message:i,errors:r=void 0,cause:s=void 0,stack:o=void 0,...a}=t,l=ni(a);if(l.length>=1){for(const h of l)delete n[h];const u=Me(Yo,a);ia(n,Fe`originally with properties ${ie(u)}`)}for(const u of ni(n)){const h=t[u];h&&Ie(h,"get")&&se(n,u,{value:n[u]})}ft(n)},Pn=(n=Fe`Assert failed`,t=Pt.Error,{errorName:e=void 0,cause:i=void 0,errors:r=void 0,sanitize:s=!0}={})=>{typeof n=="string"&&(n=Fe([n]));const o=ue(na,n);if(o===void 0)throw xt(`unrecognized details ${ie(n)}`);const a=id(o),l=i&&{cause:i};let u;return typeof $a<"u"&&t===$a?u=$a(r||[],a,l):(u=t(a,l),r!==void 0&&se(u,"errors",{value:r,writable:!0,enumerable:!1,configurable:!0})),Je(So,u,od(o)),e!==void 0&&ad(u,e),s&&AS(u),u};ft(Pn);const{addLogArgs:wS,takeLogArgsArray:RS}=nd(),ql=new Gn,ia=(n,t)=>{typeof t=="string"&&(t=Fe([t]));const e=ue(na,t);if(e===void 0)throw xt(`unrecognized details ${ie(t)}`);const i=od(e),r=ue(ql,n);if(r!==void 0)for(const s of r)s(n,i);else wS(n,i)};ft(ia);const PS=n=>{if(!("stack"in n))return"";const t=`${n.stack}`,e=Ky(t,`
`);return Gf(t," ")||e===-1?t:Tc(t,e+1)},Bo={getStackString:Pt.getStackString||PS,tagError:n=>ad(n),resetErrorTagNum:()=>{Yl=0},getMessageLogArgs:n=>ue(So,n),takeMessageLogArgs:n=>{const t=ue(So,n);return tS(So,n),t},takeNoteLogArgsArray:(n,t)=>{const e=RS(n);if(t!==void 0){const i=ue(ql,n);i?Oe(i,t):Je(ql,n,[t])}return e||[]}};ft(Bo);const ra=(n=void 0,t=!1)=>{const e=t?sd:Fe,i=e`Check failed`,r=(c=i,f=void 0,d=void 0)=>{const _=Pn(c,f,d);throw n!==void 0&&n(_),_};ft(r);const s=(c,...f)=>r(e(c,...f));function o(c,f=void 0,d=void 0,_=void 0){c||r(f,d,_)}const a=(c,f,d=void 0,_=void 0,y=void 0)=>{$o(c,f)||r(d||e`Expected ${c} is same as ${f}`,_||Cy,y)};ft(a);const l=(c,f,d)=>{if(typeof c!==f){if(typeof f=="string"||s`${ie(f)} must be a string`,d===void 0){const _=Fo(f);d=e`${c} must be ${Oo(_)}`}r(d,xt)}};ft(l);const h=vs(o,{error:Pn,fail:r,equal:a,typeof:l,string:(c,f=void 0)=>l(c,"string",f),note:ia,details:e,Fail:s,quote:ie,bare:Oo,makeAssert:ra});return ft(h)};ft(ra);const Te=ra(),_h=Te.equal,ld=Le(Ff,Si);Te(ld);const cd=ld.get;Te(cd);const CS=n=>Xe(cd,n,[])!==void 0,DS=n=>{const t=+hn(n);return Ny(t)&&hn(t)===n},IS=n=>{Dy(n),_i(ni(n),t=>{const e=Le(n,t);Te(e),DS(t)||se(n,t,{...e,writable:!1,configurable:!1})})},LS=()=>{if(typeof Pt.harden=="function")return Pt.harden;const n=new Vr,{harden:t}={harden(e){const i=new Gr;function r(h){if(!Mn(h))return;const c=typeof h;if(c!=="object"&&c!=="function")throw xt(`Unexpected typeof: ${c}`);Ss(n,h)||Sc(i,h)||yc(i,h)}const s=h=>{CS(h)?IS(h):ft(h);const c=Vn(h),f=fe(h);r(f),_i(ni(c),d=>{const _=c[d];Ie(_,"value")?r(_.value):(r(_.get),r(_.set))})},o=Za===void 0&&rS===void 0?s:h=>{if(ea(h)){const c=Le(h,"stack");c&&c.get===Za&&c.configurable&&se(h,"stack",{value:Xe(Za,h,[])})}return s(h)},a=()=>{fh(i,o)},l=h=>{ta(n,h)},u=()=>{fh(i,l)};return r(e),a(),u(),e}};return t},ud=(n,t,e,i,{warn:r,error:s})=>{e||r(`Removing ${i}`);try{delete n[t]}catch(o){if(Ie(n,t)){if(typeof n=="function"&&t==="prototype"&&(n.prototype=void 0,n.prototype===void 0)){r(`Tolerating undeletable ${i} === undefined`);return}s(`failed to delete ${i}`,o)}else s(`deleting ${i} threw`,o);throw o}},hd={Infinity:1/0,NaN:NaN,undefined:void 0},fd={isFinite:"isFinite",isNaN:"isNaN",parseFloat:"parseFloat",parseInt:"parseInt",decodeURI:"decodeURI",decodeURIComponent:"decodeURIComponent",encodeURI:"encodeURI",encodeURIComponent:"encodeURIComponent",Array:"Array",ArrayBuffer:"ArrayBuffer",BigInt:"BigInt",BigInt64Array:"BigInt64Array",BigUint64Array:"BigUint64Array",Boolean:"Boolean",DataView:"DataView",EvalError:"EvalError",Float16Array:"Float16Array",Float32Array:"Float32Array",Float64Array:"Float64Array",Int8Array:"Int8Array",Int16Array:"Int16Array",Int32Array:"Int32Array",Map:"Map",Number:"Number",Object:"Object",Promise:"Promise",Proxy:"Proxy",RangeError:"RangeError",ReferenceError:"ReferenceError",Set:"Set",String:"String",SyntaxError:"SyntaxError",TypeError:"TypeError",Uint8Array:"Uint8Array",Uint8ClampedArray:"Uint8ClampedArray",Uint16Array:"Uint16Array",Uint32Array:"Uint32Array",URIError:"URIError",WeakMap:"WeakMap",WeakSet:"WeakSet",Iterator:"Iterator",AsyncIterator:"AsyncIterator",AggregateError:"AggregateError",JSON:"JSON",Reflect:"Reflect",escape:"escape",unescape:"unescape",ModuleSource:"ModuleSource",lockdown:"lockdown",harden:"harden",HandledPromise:"HandledPromise"},vh={Date:"%InitialDate%",Error:"%InitialError%",RegExp:"%InitialRegExp%",Math:"%InitialMath%",getStackString:"%InitialGetStackString%"},dd={Date:"%SharedDate%",Error:"%SharedError%",RegExp:"%SharedRegExp%",Symbol:"%SharedSymbol%",Math:"%SharedMath%"},pd=[EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError];typeof AggregateError<"u"&&Oe(pd,AggregateError);const zo={"[[Proto]]":"%FunctionPrototype%",length:"number",name:"string"},US={"[[Proto]]":"%AsyncFunctionPrototype%"},g=zo,xh=US,kt={get:g,set:"undefined"},Rn={get:g,set:g},NS=function(){};_i(["caller","arguments"],n=>{try{NS[n]}catch(t){t.message==="Restricted in strict mode"&&(zo[n]=Rn)}});const yh=n=>n===kt||n===Rn;function Li(n){return{"[[Proto]]":"%SharedError%",prototype:n}}function Ui(n){return{"[[Proto]]":"%ErrorPrototype%",constructor:n,message:"string",name:"string",toString:!1,cause:!1}}function _n(n){return{"[[Proto]]":"%TypedArray%",BYTES_PER_ELEMENT:"number",prototype:n}}function vn(n){return{"[[Proto]]":"%TypedArrayPrototype%",BYTES_PER_ELEMENT:"number",constructor:n}}const Sh={E:"number",LN10:"number",LN2:"number",LOG10E:"number",LOG2E:"number",PI:"number",SQRT1_2:"number",SQRT2:"number","@@toStringTag":"string",abs:g,acos:g,acosh:g,asin:g,asinh:g,atan:g,atanh:g,atan2:g,cbrt:g,ceil:g,clz32:g,cos:g,cosh:g,exp:g,expm1:g,floor:g,fround:g,hypot:g,imul:g,log:g,log1p:g,log10:g,log2:g,max:g,min:g,pow:g,round:g,sign:g,sin:g,sinh:g,sqrt:g,tan:g,tanh:g,trunc:g,f16round:g,sumPrecise:g,idiv:!1,idivmod:!1,imod:!1,imuldiv:!1,irem:!1,mod:!1,irandom:!1},ko={"[[Proto]]":null,"%ThrowTypeError%":g,Infinity:"number",NaN:"number",undefined:"undefined","%UniqueEval%":g,isFinite:g,isNaN:g,parseFloat:g,parseInt:g,decodeURI:g,decodeURIComponent:g,encodeURI:g,encodeURIComponent:g,Object:{"[[Proto]]":"%FunctionPrototype%",assign:g,create:g,defineProperties:g,defineProperty:g,entries:g,freeze:g,fromEntries:g,getOwnPropertyDescriptor:g,getOwnPropertyDescriptors:g,getOwnPropertyNames:g,getOwnPropertySymbols:g,getPrototypeOf:g,is:g,isExtensible:g,isFrozen:g,isSealed:g,keys:g,preventExtensions:g,prototype:"%ObjectPrototype%",seal:g,setPrototypeOf:g,values:g,hasOwn:g,groupBy:g,__getClass:!1},"%ObjectPrototype%":{"[[Proto]]":null,constructor:"Object",hasOwnProperty:g,isPrototypeOf:g,propertyIsEnumerable:g,toLocaleString:g,toString:g,valueOf:g,"--proto--":Rn,__defineGetter__:g,__defineSetter__:g,__lookupGetter__:g,__lookupSetter__:g},"%UniqueFunction%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%FunctionPrototype%"},"%InertFunction%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%FunctionPrototype%"},"%FunctionPrototype%":{apply:g,bind:g,call:g,constructor:"%InertFunction%",toString:g,"@@hasInstance":g,caller:!1,arguments:!1,fileName:!1,lineNumber:!1},Boolean:{"[[Proto]]":"%FunctionPrototype%",prototype:"%BooleanPrototype%"},"%BooleanPrototype%":{constructor:"Boolean",toString:g,valueOf:g},"%SharedSymbol%":{"[[Proto]]":"%FunctionPrototype%",asyncIterator:"symbol",for:g,hasInstance:"symbol",isConcatSpreadable:"symbol",iterator:"symbol",keyFor:g,match:"symbol",matchAll:"symbol",prototype:"%SymbolPrototype%",replace:"symbol",search:"symbol",species:"symbol",split:"symbol",toPrimitive:"symbol",toStringTag:"symbol",unscopables:"symbol",asyncDispose:"symbol",dispose:"symbol",useSimple:!1,useSetter:!1,operatorSet:!1},"%SymbolPrototype%":{constructor:"%SharedSymbol%",description:kt,toString:g,valueOf:g,"@@toPrimitive":g,"@@toStringTag":"string"},"%InitialError%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%ErrorPrototype%",captureStackTrace:g,stackTraceLimit:Rn,prepareStackTrace:Rn,isError:g},"%SharedError%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%ErrorPrototype%",captureStackTrace:g,stackTraceLimit:Rn,prepareStackTrace:Rn,isError:g},"%ErrorPrototype%":{constructor:"%SharedError%",message:"string",name:"string",toString:g,at:!1,stack:Rn,cause:!1},EvalError:Li("%EvalErrorPrototype%"),RangeError:Li("%RangeErrorPrototype%"),ReferenceError:Li("%ReferenceErrorPrototype%"),SyntaxError:Li("%SyntaxErrorPrototype%"),TypeError:Li("%TypeErrorPrototype%"),URIError:Li("%URIErrorPrototype%"),AggregateError:Li("%AggregateErrorPrototype%"),"%EvalErrorPrototype%":Ui("EvalError"),"%RangeErrorPrototype%":Ui("RangeError"),"%ReferenceErrorPrototype%":Ui("ReferenceError"),"%SyntaxErrorPrototype%":Ui("SyntaxError"),"%TypeErrorPrototype%":Ui("TypeError"),"%URIErrorPrototype%":Ui("URIError"),"%AggregateErrorPrototype%":Ui("AggregateError"),Number:{"[[Proto]]":"%FunctionPrototype%",EPSILON:"number",isFinite:g,isInteger:g,isNaN:g,isSafeInteger:g,MAX_SAFE_INTEGER:"number",MAX_VALUE:"number",MIN_SAFE_INTEGER:"number",MIN_VALUE:"number",NaN:"number",NEGATIVE_INFINITY:"number",parseFloat:g,parseInt:g,POSITIVE_INFINITY:"number",prototype:"%NumberPrototype%"},"%NumberPrototype%":{constructor:"Number",toExponential:g,toFixed:g,toLocaleString:g,toPrecision:g,toString:g,valueOf:g},BigInt:{"[[Proto]]":"%FunctionPrototype%",asIntN:g,asUintN:g,prototype:"%BigIntPrototype%",bitLength:!1,fromArrayBuffer:!1,tdiv:!1,fdiv:!1,cdiv:!1,ediv:!1,tdivrem:!1,fdivrem:!1,cdivrem:!1,edivrem:!1,sqrt:!1,sqrtrem:!1,floorLog2:!1,ctz:!1},"%BigIntPrototype%":{constructor:"BigInt",toLocaleString:g,toString:g,valueOf:g,"@@toStringTag":"string"},"%InitialMath%":{...Sh,random:g},"%SharedMath%":{...Sh,random:g},"%InitialDate%":{"[[Proto]]":"%FunctionPrototype%",now:g,parse:g,prototype:"%DatePrototype%",UTC:g},"%SharedDate%":{"[[Proto]]":"%FunctionPrototype%",now:g,parse:g,prototype:"%DatePrototype%",UTC:g},"%DatePrototype%":{constructor:"%SharedDate%",getDate:g,getDay:g,getFullYear:g,getHours:g,getMilliseconds:g,getMinutes:g,getMonth:g,getSeconds:g,getTime:g,getTimezoneOffset:g,getUTCDate:g,getUTCDay:g,getUTCFullYear:g,getUTCHours:g,getUTCMilliseconds:g,getUTCMinutes:g,getUTCMonth:g,getUTCSeconds:g,setDate:g,setFullYear:g,setHours:g,setMilliseconds:g,setMinutes:g,setMonth:g,setSeconds:g,setTime:g,setUTCDate:g,setUTCFullYear:g,setUTCHours:g,setUTCMilliseconds:g,setUTCMinutes:g,setUTCMonth:g,setUTCSeconds:g,toDateString:g,toISOString:g,toJSON:g,toLocaleDateString:g,toLocaleString:g,toLocaleTimeString:g,toString:g,toTimeString:g,toUTCString:g,valueOf:g,"@@toPrimitive":g,getYear:g,setYear:g,toGMTString:g},String:{"[[Proto]]":"%FunctionPrototype%",fromCharCode:g,fromCodePoint:g,prototype:"%StringPrototype%",raw:g,fromArrayBuffer:!1},"%StringPrototype%":{length:"number",charAt:g,charCodeAt:g,codePointAt:g,concat:g,constructor:"String",endsWith:g,includes:g,indexOf:g,lastIndexOf:g,localeCompare:g,match:g,matchAll:g,normalize:g,padEnd:g,padStart:g,repeat:g,replace:g,replaceAll:g,search:g,slice:g,split:g,startsWith:g,substring:g,toLocaleLowerCase:g,toLocaleUpperCase:g,toLowerCase:g,toString:g,toUpperCase:g,trim:g,trimEnd:g,trimStart:g,valueOf:g,"@@iterator":g,at:g,isWellFormed:g,toWellFormed:g,unicodeSets:g,substr:g,anchor:g,big:g,blink:g,bold:g,fixed:g,fontcolor:g,fontsize:g,italics:g,link:g,small:g,strike:g,sub:g,sup:g,trimLeft:g,trimRight:g,compare:!1,__quote:!1},"%StringIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:g,"@@toStringTag":"string"},"%InitialRegExp%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%RegExpPrototype%","@@species":kt,escape:g,input:!1,$_:!1,lastMatch:!1,"$&":!1,lastParen:!1,"$+":!1,leftContext:!1,"$`":!1,rightContext:!1,"$'":!1,$1:!1,$2:!1,$3:!1,$4:!1,$5:!1,$6:!1,$7:!1,$8:!1,$9:!1},"%SharedRegExp%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%RegExpPrototype%","@@species":kt,escape:g},"%RegExpPrototype%":{constructor:"%SharedRegExp%",exec:g,dotAll:kt,flags:kt,global:kt,hasIndices:kt,ignoreCase:kt,"@@match":g,"@@matchAll":g,multiline:kt,"@@replace":g,"@@search":g,source:kt,"@@split":g,sticky:kt,test:g,toString:g,unicode:kt,unicodeSets:kt,compile:!1},"%RegExpStringIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:g,"@@toStringTag":"string"},Array:{"[[Proto]]":"%FunctionPrototype%",from:g,isArray:g,of:g,prototype:"%ArrayPrototype%","@@species":kt,at:g,fromAsync:g},"%ArrayPrototype%":{length:"number",concat:g,constructor:"Array",copyWithin:g,entries:g,every:g,fill:g,filter:g,find:g,findIndex:g,flat:g,flatMap:g,forEach:g,includes:g,indexOf:g,join:g,keys:g,lastIndexOf:g,map:g,pop:g,push:g,reduce:g,reduceRight:g,reverse:g,shift:g,slice:g,some:g,sort:g,splice:g,toLocaleString:g,toString:g,unshift:g,values:g,"@@iterator":g,"@@unscopables":{"[[Proto]]":null,copyWithin:"boolean",entries:"boolean",fill:"boolean",find:"boolean",findIndex:"boolean",flat:"boolean",flatMap:"boolean",includes:"boolean",keys:"boolean",values:"boolean",at:"boolean",findLast:"boolean",findLastIndex:"boolean",toReversed:"boolean",toSorted:"boolean",toSpliced:"boolean",with:"boolean",group:"boolean",groupToMap:"boolean",groupBy:"boolean"},findLast:g,findLastIndex:g,toReversed:g,toSorted:g,toSpliced:g,with:g,group:g,groupToMap:g,groupBy:g,at:g},"%ArrayIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:g,"@@toStringTag":"string"},"%TypedArray%":{"[[Proto]]":"%FunctionPrototype%",from:g,of:g,prototype:"%TypedArrayPrototype%","@@species":kt},"%TypedArrayPrototype%":{buffer:kt,byteLength:kt,byteOffset:kt,constructor:"%TypedArray%",copyWithin:g,entries:g,every:g,fill:g,filter:g,find:g,findIndex:g,forEach:g,includes:g,indexOf:g,join:g,keys:g,lastIndexOf:g,length:kt,map:g,reduce:g,reduceRight:g,reverse:g,set:g,slice:g,some:g,sort:g,subarray:g,toLocaleString:g,toString:g,values:g,"@@iterator":g,"@@toStringTag":kt,at:g,findLast:g,findLastIndex:g,toReversed:g,toSorted:g,with:g},BigInt64Array:_n("%BigInt64ArrayPrototype%"),BigUint64Array:_n("%BigUint64ArrayPrototype%"),Float16Array:_n("%Float16ArrayPrototype%"),Float32Array:_n("%Float32ArrayPrototype%"),Float64Array:_n("%Float64ArrayPrototype%"),Int16Array:_n("%Int16ArrayPrototype%"),Int32Array:_n("%Int32ArrayPrototype%"),Int8Array:_n("%Int8ArrayPrototype%"),Uint16Array:_n("%Uint16ArrayPrototype%"),Uint32Array:_n("%Uint32ArrayPrototype%"),Uint8ClampedArray:_n("%Uint8ClampedArrayPrototype%"),Uint8Array:{..._n("%Uint8ArrayPrototype%"),fromBase64:g,fromHex:g},"%BigInt64ArrayPrototype%":vn("BigInt64Array"),"%BigUint64ArrayPrototype%":vn("BigUint64Array"),"%Float16ArrayPrototype%":vn("Float16Array"),"%Float32ArrayPrototype%":vn("Float32Array"),"%Float64ArrayPrototype%":vn("Float64Array"),"%Int16ArrayPrototype%":vn("Int16Array"),"%Int32ArrayPrototype%":vn("Int32Array"),"%Int8ArrayPrototype%":vn("Int8Array"),"%Uint16ArrayPrototype%":vn("Uint16Array"),"%Uint32ArrayPrototype%":vn("Uint32Array"),"%Uint8ClampedArrayPrototype%":vn("Uint8ClampedArray"),"%Uint8ArrayPrototype%":{...vn("Uint8Array"),setFromBase64:g,setFromHex:g,toBase64:g,toHex:g},Map:{"[[Proto]]":"%FunctionPrototype%","@@species":kt,prototype:"%MapPrototype%",groupBy:g},"%MapPrototype%":{clear:g,constructor:"Map",delete:g,entries:g,forEach:g,get:g,has:g,keys:g,set:g,size:kt,values:g,"@@iterator":g,"@@toStringTag":"string"},"%MapIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:g,"@@toStringTag":"string"},Set:{"[[Proto]]":"%FunctionPrototype%",prototype:"%SetPrototype%","@@species":kt,groupBy:!1},"%SetPrototype%":{add:g,clear:g,constructor:"Set",delete:g,entries:g,forEach:g,has:g,keys:g,size:kt,values:g,"@@iterator":g,"@@toStringTag":"string",intersection:g,union:g,difference:g,symmetricDifference:g,isSubsetOf:g,isSupersetOf:g,isDisjointFrom:g},"%SetIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:g,"@@toStringTag":"string"},WeakMap:{"[[Proto]]":"%FunctionPrototype%",prototype:"%WeakMapPrototype%"},"%WeakMapPrototype%":{constructor:"WeakMap",delete:g,get:g,has:g,set:g,"@@toStringTag":"string"},WeakSet:{"[[Proto]]":"%FunctionPrototype%",prototype:"%WeakSetPrototype%"},"%WeakSetPrototype%":{add:g,constructor:"WeakSet",delete:g,has:g,"@@toStringTag":"string"},ArrayBuffer:{"[[Proto]]":"%FunctionPrototype%",isView:g,prototype:"%ArrayBufferPrototype%","@@species":kt,fromString:!1,fromBigInt:!1},"%ArrayBufferPrototype%":{byteLength:kt,constructor:"ArrayBuffer",slice:g,"@@toStringTag":"string",concat:!1,transfer:g,resize:g,resizable:kt,maxByteLength:kt,transferToFixedLength:g,detached:kt,transferToImmutable:g,sliceToImmutable:g,immutable:kt},"%ImmutableArrayBufferPrototype%":{"[[Proto]]":"%ArrayBufferPrototype%",byteLength:kt,slice:g,transfer:g,resize:g,resizable:kt,maxByteLength:kt,transferToFixedLength:g,detached:kt,transferToImmutable:g,sliceToImmutable:g,immutable:kt},SharedArrayBuffer:!1,"%SharedArrayBufferPrototype%":!1,DataView:{"[[Proto]]":"%FunctionPrototype%",BYTES_PER_ELEMENT:"number",prototype:"%DataViewPrototype%"},"%DataViewPrototype%":{buffer:kt,byteLength:kt,byteOffset:kt,constructor:"DataView",getBigInt64:g,getBigUint64:g,getFloat16:g,getFloat32:g,getFloat64:g,getInt8:g,getInt16:g,getInt32:g,getUint8:g,getUint16:g,getUint32:g,setBigInt64:g,setBigUint64:g,setFloat16:g,setFloat32:g,setFloat64:g,setInt8:g,setInt16:g,setInt32:g,setUint8:g,setUint16:g,setUint32:g,"@@toStringTag":"string"},Atomics:!1,JSON:{parse:g,stringify:g,"@@toStringTag":"string",rawJSON:g,isRawJSON:g},Iterator:{"[[Proto]]":"%FunctionPrototype%",prototype:"%IteratorPrototype%",from:g,zip:g,zipKeyed:g,concat:g},"%IteratorPrototype%":{"@@iterator":g,constructor:"Iterator",map:g,filter:g,take:g,drop:g,flatMap:g,reduce:g,toArray:g,forEach:g,some:g,every:g,find:g,"@@toStringTag":"string",toAsync:g,"@@dispose":!1},"%WrapForValidIteratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:g,return:g},"%IteratorHelperPrototype%":{"[[Proto]]":"%IteratorPrototype%",next:g,return:g,"@@toStringTag":"string"},AsyncIterator:{"[[Proto]]":"%FunctionPrototype%",prototype:"%AsyncIteratorPrototype%",from:g},"%AsyncIteratorPrototype%":{"@@asyncIterator":g,constructor:"AsyncIterator",map:g,filter:g,take:g,drop:g,flatMap:g,reduce:g,toArray:g,forEach:g,some:g,every:g,find:g,"@@toStringTag":"string","@@asyncDispose":!1},"%WrapForValidAsyncIteratorPrototype%":{"[[Proto]]":"%AsyncIteratorPrototype%",next:g,return:g},"%AsyncIteratorHelperPrototype%":{"[[Proto]]":"%AsyncIteratorPrototype%",next:g,return:g,"@@toStringTag":"string"},"%InertGeneratorFunction%":{"[[Proto]]":"%InertFunction%",prototype:"%Generator%"},"%Generator%":{"[[Proto]]":"%FunctionPrototype%",constructor:"%InertGeneratorFunction%",prototype:"%GeneratorPrototype%","@@toStringTag":"string"},"%InertAsyncGeneratorFunction%":{"[[Proto]]":"%InertFunction%",prototype:"%AsyncGenerator%"},"%AsyncGenerator%":{"[[Proto]]":"%FunctionPrototype%",constructor:"%InertAsyncGeneratorFunction%",prototype:"%AsyncGeneratorPrototype%",length:"number","@@toStringTag":"string"},"%GeneratorPrototype%":{"[[Proto]]":"%IteratorPrototype%",constructor:"%Generator%",next:g,return:g,throw:g,"@@toStringTag":"string"},"%AsyncGeneratorPrototype%":{"[[Proto]]":"%AsyncIteratorPrototype%",constructor:"%AsyncGenerator%",next:g,return:g,throw:g,"@@toStringTag":"string"},HandledPromise:{"[[Proto]]":"Promise",applyFunction:g,applyFunctionSendOnly:g,applyMethod:g,applyMethodSendOnly:g,get:g,getSendOnly:g,prototype:"%PromisePrototype%",resolve:g},ModuleSource:{"[[Proto]]":"%AbstractModuleSource%",prototype:"%ModuleSourcePrototype%"},"%ModuleSourcePrototype%":{"[[Proto]]":"%AbstractModuleSourcePrototype%",constructor:"ModuleSource","@@toStringTag":"string",bindings:kt,needsImport:kt,needsImportMeta:kt,imports:kt,exports:kt,reexports:kt},"%AbstractModuleSource%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%AbstractModuleSourcePrototype%"},"%AbstractModuleSourcePrototype%":{constructor:"%AbstractModuleSource%"},Promise:{"[[Proto]]":"%FunctionPrototype%",all:g,allSettled:g,any:g,prototype:"%PromisePrototype%",race:g,reject:g,resolve:g,withResolvers:g,"@@species":kt,try:g},"%PromisePrototype%":{catch:g,constructor:"Promise",finally:g,then:g,"@@toStringTag":"string","UniqueSymbol(async_id_symbol)":Rn,"UniqueSymbol(trigger_async_id_symbol)":Rn,"UniqueSymbol(destroyed)":Rn},"%InertAsyncFunction%":{"[[Proto]]":"%InertFunction%",prototype:"%AsyncFunctionPrototype%"},"%AsyncFunctionPrototype%":{"[[Proto]]":"%FunctionPrototype%",constructor:"%InertAsyncFunction%",length:"number","@@toStringTag":"string"},Reflect:{apply:g,construct:g,defineProperty:g,deleteProperty:g,get:g,getOwnPropertyDescriptor:g,getPrototypeOf:g,has:g,isExtensible:g,ownKeys:g,preventExtensions:g,set:g,setPrototypeOf:g,"@@toStringTag":"string"},Proxy:{"[[Proto]]":"%FunctionPrototype%",revocable:g},escape:g,unescape:g,"%UniqueCompartment%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%CompartmentPrototype%",toString:g},"%InertCompartment%":{"[[Proto]]":"%FunctionPrototype%",prototype:"%CompartmentPrototype%",toString:g},"%CompartmentPrototype%":{constructor:"%InertCompartment%",evaluate:g,globalThis:kt,name:kt,import:xh,load:xh,importNow:g,module:g,"@@toStringTag":"string"},lockdown:g,harden:{...g,isFake:"boolean"},"%InitialGetStackString%":g},FS=n=>typeof n=="function";function OS(n,t,e){if(Ie(n,t)){const i=Le(n,t);if(!i||!$o(i.value,e.value)||i.get!==e.get||i.set!==e.set||i.writable!==e.writable||i.enumerable!==e.enumerable||i.configurable!==e.configurable)throw xt(`Conflicting definitions of ${t}`)}se(n,t,e)}function BS(n,t){for(const[e,i]of tn(t))OS(n,e,i)}function md(n,t){const e={__proto__:null};for(const[i,r]of tn(t))Ie(n,i)&&(e[r]=n[i]);return e}const gd=n=>{const t=Me(null);let e;const i=l=>{BS(t,Vn(l))};ft(i);const r=()=>{for(const[l,u]of tn(t)){if(!Mn(u)||!Ie(u,"prototype"))continue;const h=ko[l];if(typeof h!="object")throw xt(`Expected permit object at permits.${l}`);const c=h.prototype;if(!c){ud(u,"prototype",!1,`${l}.prototype`,n);continue}if(typeof c!="string"||!Ie(ko,c))throw xt(`Unrecognized ${l}.prototype permits entry`);const f=u.prototype;if(Ie(t,c)){if(t[c]!==f)throw xt(`Conflicting bindings of ${c}`);continue}t[c]=f}};ft(r);const s=()=>(ft(t),e=new Vr(Ki(Rf(t),FS)),t);ft(s);const o=l=>{if(!e)throw xt("isPseudoNative can only be called after finalIntrinsics");return Ss(e,l)};ft(o);const a={addIntrinsics:i,completePrototypes:r,finalIntrinsics:s,isPseudoNative:o};return ft(a),i(hd),i(md(Pt,fd)),a},zS=(n,t)=>{const{addIntrinsics:e,finalIntrinsics:i}=gd(t);return e(md(n,dd)),i()};function kS(n,t,e){const i=["undefined","boolean","number","string","symbol"],r=new Ln(Ar?un(Ki(tn(ko["%SharedSymbol%"]),([c,f])=>f==="symbol"&&typeof Ar[c]=="symbol"),([c])=>[Ar[c],`@@${c}`]):[]);function s(c,f){if(typeof f=="string")return f;const d=ii(r,f);if(typeof f=="symbol"){if(d)return d;{const _=Ly(f);return _!==void 0?`RegisteredSymbol(${_})`:`Unique${hn(f)}`}}throw xt(`Unexpected property name type ${c} ${f}`)}function o(c,f,d){if(!Mn(f))throw xt(`Object expected: ${c}, ${f}, ${d}`);const _=fe(f);if(!(_===null&&d===null)){if(d!==void 0&&typeof d!="string")throw xt(`Malformed permit ${c}.__proto__`);if(_!==n[d||"%ObjectPrototype%"])throw xt(`Unexpected [[Prototype]] at ${c}.__proto__ (expected ${d||"%ObjectPrototype%"})`)}}function a(c,f,d,_){if(typeof _=="object")return h(c,f,_),!0;if(_===!1)return!1;if(typeof _=="string"){if(d==="prototype"||d==="constructor"){if(Ie(n,_)){if(f!==n[_])throw xt(`Does not match permit for ${c}`);return!0}}else if(Ko(i,_)){if(typeof f!==_)throw xt(`At ${c} expected ${_} not ${typeof f}`);return!0}}throw xt(`Unexpected property ${d} with permit ${_} at ${c}`)}function l(c,f,d,_){const y=Le(f,d);if(!y)throw xt(`Property ${d} not found at ${c}`);if(Ie(y,"value")){if(yh(_))throw xt(`Accessor expected at ${c}`);return a(c,y.value,d,_)}if(!yh(_))throw xt(`Accessor not expected at ${c}`);return a(`${c}<get>`,y.get,d,_.get)&&a(`${c}<set>`,y.set,d,_.set)}function u(c,f,d){const _=d==="__proto__"?"--proto--":d;if(Ie(f,_))return f[_];if(typeof c=="function"&&Ie(zo,_))return zo[_]}function h(c,f,d){if(f==null)return;const _=d["[[Proto]]"];o(c,f,_),typeof f=="function"&&t(f);for(const y of ni(f)){const m=s(c,y),p=`${c}.${m}`,w=u(f,d,m);(!w||!l(p,f,y,w))&&ud(f,y,w===!1,p,e)}}h("intrinsics",n,ko)}function HS(){try{Ke.prototype.constructor("return 1")}catch{return ft({})}const n={};function t(e,i,r){let s;try{s=(0,eval)(r)}catch(l){if(l instanceof _s)return;throw l}const o=fe(s),a=function(){throw xt("Function.prototype.constructor is not a valid constructor.")};he(a,{prototype:{value:o},name:{value:e,writable:!1,enumerable:!1,configurable:!0}}),he(o,{constructor:{value:a}}),a!==Ke.prototype.constructor&&Ro(a,Ke.prototype.constructor),n[i]=a}return t("Function","%InertFunction%","(function(){})"),t("GeneratorFunction","%InertGeneratorFunction%","(function*(){})"),t("AsyncFunction","%InertAsyncFunction%","(async function(){})"),$l!==void 0&&t("AsyncGeneratorFunction","%InertAsyncGeneratorFunction%","(async function*(){})"),n}function GS(){const n=Ty,t=n.prototype,e={now(){throw xt("secure mode Calling %SharedDate%.now() throws")}},i=({powers:o="none"}={})=>{let a;return o==="original"?a=function(...u){return new.target===void 0?Xe(n,void 0,u):Po(n,u,new.target)}:a=function(...u){if(new.target===void 0)throw xt("secure mode Calling %SharedDate% constructor as a function throws");if(u.length===0)throw xt("secure mode Calling new %SharedDate%() with no arguments throws");return Po(n,u,new.target)},he(a,{length:{value:7},prototype:{value:t,writable:!1,enumerable:!1,configurable:!1},parse:{value:n.parse,writable:!0,enumerable:!1,configurable:!0},UTC:{value:n.UTC,writable:!0,enumerable:!1,configurable:!0}}),a},r=i({powers:"original"}),s=i({powers:"none"});return he(r,{now:{value:n.now,writable:!0,enumerable:!1,configurable:!0}}),he(s,{now:{value:e.now,writable:!0,enumerable:!1,configurable:!0}}),he(t,{constructor:{value:s}}),{"%InitialDate%":r,"%SharedDate%":s}}function VS(){const n=wy,t=n,{random:e,...i}=Vn(n),s=Me(Yo,{...i,random:{value:{random(){throw xt("secure mode %SharedMath%.random() throws")}}.random,writable:!0,enumerable:!1,configurable:!0}});return{"%InitialMath%":t,"%SharedMath%":s}}function WS(n="safe"){const t=mi.prototype,e=(s={})=>{const o=function(...l){return new.target===void 0?mi(...l):Po(mi,l,new.target)};if(he(o,{length:{value:2},prototype:{value:t,writable:!1,enumerable:!1,configurable:!1}}),Ya){const a=Le(mi,Ya);if(!a)throw xt("no RegExp[Symbol.species] descriptor");he(o,{[Ya]:a})}return o},i=e(),r=e();return n!=="unsafe"&&delete t.compile,he(t,{constructor:{value:r}}),{"%InitialRegExp%":i,"%SharedRegExp%":r}}const XS={"%ObjectPrototype%":{toString:!0},"%FunctionPrototype%":{toString:!0},"%ErrorPrototype%":{name:!0},"%IteratorPrototype%":{toString:!0,constructor:!0,[Si]:!0}},_d={"%ObjectPrototype%":{toString:!0,valueOf:!0},"%ArrayPrototype%":{toString:!0,push:!0,concat:!0,[Fn]:!0},"%FunctionPrototype%":{constructor:!0,bind:!0,toString:!0},"%ErrorPrototype%":{constructor:!0,message:!0,name:!0,toString:!0},"%TypeErrorPrototype%":{constructor:!0,message:!0,name:!0},"%SyntaxErrorPrototype%":{message:!0,name:!0},"%RangeErrorPrototype%":{message:!0,name:!0},"%URIErrorPrototype%":{message:!0,name:!0},"%EvalErrorPrototype%":{message:!0,name:!0},"%ReferenceErrorPrototype%":{message:!0,name:!0},"%AggregateErrorPrototype%":{message:!0,name:!0},"%PromisePrototype%":{constructor:!0},"%TypedArrayPrototype%":"*","%Generator%":{constructor:!0,name:!0,toString:!0},"%IteratorPrototype%":{toString:!0,constructor:!0,[Si]:!0}},$S={..._d,"%ObjectPrototype%":"*","%TypedArrayPrototype%":"*","%MapPrototype%":"*","%SetPrototype%":"*"};function YS(n,t,{warn:e},i=[]){const r=new Gr(i);function s(h,c,f,d){if("value"in d&&d.configurable){const{value:_}=d,y=Sc(r,f),{get:m,set:p}=Le({get[f](){return _},set[f](w){if(c===this)throw xt(`Cannot assign to read only property '${hn(f)}' of '${h}'`);Ie(this,f)?this[f]=w:(y&&e(xt(`Override property ${f}`)),se(this,f,{value:w,writable:!0,enumerable:!0,configurable:!0}))}},f);se(m,"originalValue",{value:_,writable:!1,enumerable:!1,configurable:!1}),se(c,f,{get:m,set:p,enumerable:d.enumerable,configurable:d.configurable})}}function o(h,c,f){const d=Le(c,f);d&&s(h,c,f,d)}function a(h,c){const f=Vn(c);f&&_i(ni(f),d=>s(h,c,d,f[d]))}function l(h,c,f){for(const d of ni(f)){const _=Le(c,d);if(!_||_.get||_.set)continue;const y=`${h}.${hn(d)}`,m=f[d];if(m===!0)o(y,c,d);else if(m==="*")a(y,_.value);else if(Mn(m))l(y,_.value,m);else throw xt(`Unexpected override enablement plan ${y}`)}}let u;switch(t){case"min":{u=XS;break}case"moderate":{u=_d;break}case"severe":{u=$S;break}default:throw xt(`unrecognized overrideTaming ${t}`)}l("root",n,u)}const{Fail:jl,quote:Ho}=Te,qS=/^(\w*[a-z])Locale([A-Z]\w*)$/,vd={localeCompare(n){if(this===null||this===void 0)throw xt('Cannot localeCompare with null or undefined "this" value');const t=`${this}`,e=`${n}`;return t<e?-1:t>e?1:(t===e||jl`expected ${Ho(t)} and ${Ho(e)} to compare`,0)},toString(){return`${this}`}},jS=vd.localeCompare,ZS=vd.toString;function KS(n,t="safe"){if(t!=="unsafe"){se(hn.prototype,"localeCompare",{value:jS});for(const e of Br(n)){const i=n[e];if(Mn(i))for(const r of Br(i)){const s=Ec(qS,r);if(s){typeof i[r]=="function"||jl`expected ${Ho(r)} to be a function`;const o=`${s[1]}${s[2]}`,a=i[o];typeof a=="function"||jl`function ${Ho(o)} not found`,se(i,r,{value:a})}}}se(Af.prototype,"toLocaleString",{value:ZS})}}const JS=n=>({eval(e){return typeof e!="string"?e:n(e)}}).eval,{Fail:Mh}=Te,QS=n=>{const t=function(i){const r=`${Do(arguments)||""}`,s=`${Xr(arguments,",")}`;new Ke(s,""),new Ke(r);const o=`(function anonymous(${s}
) {
${r}
})`;return n(o)};return he(t,{prototype:{value:Ke.prototype,writable:!1,enumerable:!1,configurable:!1}}),fe(Ke)===Ke.prototype||Mh`Function prototype is the same accross compartments`,fe(t)===Ke.prototype||Mh`Function constructor prototype is the same across compartments`,t},tM=n=>{se(n,Iy,ft(vs(Me(null),{set:ft(()=>{throw xt("Cannot set Symbol.unscopables of a Compartment's globalThis")}),enumerable:!1,configurable:!1})))},xd=n=>{for(const[t,e]of tn(hd))se(n,t,{value:e,writable:!1,enumerable:!1,configurable:!1})},yd=(n,{intrinsics:t,newGlobalPropertyNames:e,makeCompartmentConstructor:i,markVirtualizedNativeFunction:r,parentCompartment:s})=>{for(const[a,l]of tn(fd))Ie(t,l)&&se(n,a,{value:t[l],writable:!0,enumerable:!1,configurable:!0});for(const[a,l]of tn(e))Ie(t,l)&&se(n,a,{value:t[l],writable:!0,enumerable:!1,configurable:!0});const o={globalThis:n};o.Compartment=ft(i(i,t,r,{parentCompartment:s,enforceNew:!0}));for(const[a,l]of tn(o))se(n,a,{value:l,writable:!0,enumerable:!1,configurable:!0}),typeof l=="function"&&r(l)},Zl=(n,t,e)=>{{const i=ft(JS(t));e(i),se(n,"eval",{value:i,writable:!0,enumerable:!1,configurable:!0})}{const i=ft(QS(t));e(i),se(n,"Function",{value:i,writable:!0,enumerable:!1,configurable:!0})}},{Fail:eM,quote:Sd}=Te,Md=ft({__proto__:null}),Ed=new Xo(Md,ft({get(n,t){eM`Please report unexpected scope handler trap: ${Sd(hn(t))}`}})),nM={get(n,t){},set(n,t,e){throw ss(`${hn(t)} is not defined`)},has(n,t){return!0},getPrototypeOf(n){return null},getOwnPropertyDescriptor(n,t){const e=Sd(hn(t));console.warn(`getOwnPropertyDescriptor trap on scopeTerminatorHandler for ${e}`,xt().stack)},ownKeys(n){return[]}},Td=ft(Me(Ed,Vn(nM))),iM=new Xo(Md,Td),rM=ft({__proto__:null}),bd=n=>{const t={...Td,set(r,s,o){return If(n,s,o)},has(r,s){return!0}},e=ft(Me(Ed,Vn(t)));return new Xo(rM,e)};ft(bd);const{Fail:sM}=Te,oM=()=>{const n=Me(null),t=ft({eval:{get(){return delete n.eval,Xl},enumerable:!1,configurable:!0}}),e={evalScope:n,allowNextEvalToBeUnsafe(){const{revoked:i}=e;i!==null&&sM`a handler did not reset allowNextEvalToBeUnsafe ${i.err}`,he(n,t)},revoked:null};return e},Eh="\\s*[@#]\\s*([a-zA-Z][a-zA-Z0-9]*)\\s*=\\s*([^\\s\\*]*)",aM=new mi(`(?:\\s*//${Eh}|/\\*${Eh}\\s*\\*/)\\s*$`),Rc=n=>{let t="<unknown>";for(;n.length>0;){const e=Ec(aM,n);if(e===null)break;n=Tc(n,0,n.length-e[0].length),e[3]==="sourceURL"?t=e[4]:e[1]==="sourceURL"&&(t=e[2])}return t};function Pc(n,t){const e=Jy(n,t);if(e<0)return-1;const i=n[e]===`
`?1:0;return bc(Tc(n,0,e),`
`).length+i}const Ad=new mi("(?:<!--|-->)","g"),wd=n=>{const t=Pc(n,Ad);if(t<0)return n;const e=Rc(n);throw _s(`Possible HTML comment rejected at ${e}:${t}. (SES_HTML_COMMENT_REJECTED)`)},Rd=n=>Lo(n,Ad,e=>e[0]==="<"?"< ! --":"-- >"),Pd=new mi("(^|[^.]|\\.\\.\\.)\\bimport(\\s*(?:\\(|/[/*]))","g"),Cd=n=>{const t=Pc(n,Pd);if(t<0)return n;const e=Rc(n);throw _s(`Possible import expression rejected at ${e}:${t}. (SES_IMPORT_REJECTED)`)},Dd=n=>Lo(n,Pd,(e,i,r)=>`${i}__import__${r}`),lM=new mi("(^|[^.])\\beval(\\s*\\()","g"),Id=n=>{const t=Pc(n,lM);if(t<0)return n;const e=Rc(n);throw _s(`Possible direct eval expression rejected at ${e}:${t}. (SES_EVAL_REJECTED)`)},Ld=n=>(n=wd(n),n=Cd(n),n),Ud=(n,t)=>{for(let e=0,i=t.length;e<i;e+=1){const r=t[e];n=r(n)}return n};ft({rejectHtmlComments:ft(wd),evadeHtmlCommentTest:ft(Rd),rejectImportExpressions:ft(Cd),evadeImportExpressionTest:ft(Dd),rejectSomeDirectEvalExpressions:ft(Id),mandatoryTransforms:ft(Ld),applyTransforms:ft(Ud)});const cM=["await","break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield","let","static","enum","implements","package","protected","interface","private","public","await","null","true","false","this","arguments"],uM=/^[a-zA-Z_$][\w$]*$/,Th=n=>n!=="eval"&&!Ko(cM,n)&&Mc(uM,n);function bh(n,t){const e=Le(n,t);return e&&e.configurable===!1&&e.writable===!1&&Ie(e,"value")}const hM=(n,t={})=>{const e=Br(n),i=Br(t),r=Ki(i,o=>Th(o)&&bh(t,o));return{globalObjectConstants:Ki(e,o=>!Ko(i,o)&&Th(o)&&bh(n,o)),moduleLexicalConstants:r}};function Ah(n,t){return n.length===0?"":`const {${Xr(n,",")}} = this.${t};`}const fM=n=>{const{globalObjectConstants:t,moduleLexicalConstants:e}=hM(n.globalObject,n.moduleLexicals),i=Ah(t,"globalObject"),r=Ah(e,"moduleLexicals"),s=Ke(`
    with (this.scopeTerminator) {
      with (this.globalObject) {
        with (this.moduleLexicals) {
          with (this.evalScope) {
            ${i}
            ${r}
            return function() {
              'use strict';
              return eval(arguments[0]);
            };
          }
        }
      }
    }
  `);return Xe(s,n,[])},{Fail:dM}=Te,Cc=({globalObject:n,moduleLexicals:t={},globalTransforms:e=[],sloppyGlobalsMode:i=!1})=>{const r=i?bd(n):iM,s=oM(),{evalScope:o}=s,a=ft({evalScope:o,moduleLexicals:t,globalObject:n,scopeTerminator:r});let l;const u=()=>{l||(l=fM(a))};return{safeEvaluate:(c,f)=>{const{localTransforms:d=[]}=f||{};u(),c=Ud(c,Jo([d,e,[Ld]],Xf));let _;try{return s.allowNextEvalToBeUnsafe(),Xe(l,n,[c])}catch(y){throw _=y,y}finally{const y="eval"in o;delete o.eval,y&&(s.revoked={err:_},dM`handler did not reset allowNextEvalToBeUnsafe ${_}`)}}}},pM=") { [native code] }";let Ja;const Nd=()=>{if(Ja===void 0){const n=new Vr;se(Zo,"toString",{value:{toString(){const e=eS(this);return zf(e,pM)||!Ss(n,this)?e:`function ${this.name}() { [native code] }`}}.toString}),Ja=ft(e=>ta(n,e))}return Ja};function mM(n="safe"){if(n==="unsafe")return;const t=Pt.process||void 0;if(typeof t=="object"){const e=Le(t,"domain");if(e!==void 0&&e.get!==void 0)throw xt("SES failed to lockdown, Node.js domains have been initialized (SES_NO_DOMAINS)");se(t,"domain",{value:null,configurable:!1,writable:!1,enumerable:!1})}}const gM=()=>{const n={},t=Pt.ModuleSource;if(t!==void 0){let i=function(){};var e=i;n.ModuleSource=t;const r=fe(t);r===Zo?(Ro(t,i),n["%AbstractModuleSource%"]=i,n["%AbstractModuleSourcePrototype%"]=i.prototype):(n["%AbstractModuleSource%"]=r,n["%AbstractModuleSourcePrototype%"]=r.prototype);const s=t.prototype;s!==void 0&&(n["%ModuleSourcePrototype%"]=s,fe(s)===Yo&&Ro(t.prototype,i.prototype))}return n},zi=(n,t)=>se(t,"name",{value:n}),Dc=ft([["debug","debug"],["log","log"],["info","info"],["warn","warn"],["error","error"],["trace","log"],["dirxml","log"],["group","log"],["groupCollapsed","log"]]),Ic=ft([["assert","error"],["timeLog","log"],["clear",void 0],["count","info"],["countReset",void 0],["dir","log"],["groupEnd","log"],["table","log"],["time","info"],["timeEnd","info"],["profile",void 0],["profileEnd",void 0],["timeStamp",void 0]]);ft([...Dc,...Ic]);const Oi={NOTE:"ERROR_NOTE:",MESSAGE:"ERROR_MESSAGE:",CAUSE:"cause:",ERRORS:"errors:"};ft(Oi);const Lc=(n,t)=>{if(!n)return;const{getStackString:e,tagError:i,takeMessageLogArgs:r,takeNoteLogArgsArray:s}=t,o=(m,p)=>un(m,b=>ea(b)?(Oe(p,b),`(${i(b)})`):b),a=(m,p,w,b,M)=>{const N=i(p),I=w===Oi.MESSAGE?`${N}:`:`${N} ${w}`,D=o(b,M);n[m](I,...D)},l=(m,p,w=void 0)=>{if(p.length===0)return;if(p.length===1&&w===void 0){c(m,p[0]);return}let b;p.length===1?b="Nested error":b=`Nested ${p.length} errors`,w!==void 0&&(b=`${b} under ${w}`),n.group(b);try{for(const M of p)c(m,M)}finally{n.groupEnd&&n.groupEnd()}},u=new Vr,h=m=>(p,w)=>{const b=[];a(m,p,Oi.NOTE,w,b),l(m,b,i(p))},c=(m,p)=>{if(Ss(u,p))return;const w=i(p);ta(u,p);const b=[],M=r(p),N=s(p,h(m));M===void 0?n[m](`${w}:`,p.message):a(m,p,Oi.MESSAGE,M,b);let I=e(p);typeof I=="string"&&I.length>=1&&!zf(I,`
`)&&(I+=`
`),n[m](I),p.cause&&a(m,p,Oi.CAUSE,[p.cause],b),p.errors&&a(m,p,Oi.ERRORS,p.errors,b);for(const D of N)a(m,p,Oi.NOTE,D,b);l(m,b,w)},f=un(Dc,([m,p])=>{const w=zi(m,(...b)=>{const M=[],N=o(b,M);n[m]&&n[m](...N),l(m,M)});return[m,ft(w)]}),d=Ki(Ic,([m,p])=>m in n),_=un(d,([m,p])=>{const w=zi(m,(...b)=>{n[m](...b)});return[m,ft(w)]}),y=xs([...f,..._]);return ft(y)};ft(Lc);const _M=(n,t,e)=>{const[i,...r]=bc(n,t),s=Jo(r,o=>[t,...e,o]);return["",i,...s]},Fd=n=>ft(e=>{const i=[],r=(...a)=>(i.length>0&&(a=Jo(a,l=>typeof l=="string"&&kf(l,`
`)?_M(l,`
`,i):[l]),a=[...i,...a]),e(...a)),s=xs([...un(Dc,([a])=>[a,zi(a,(...l)=>r(...l))]),...un(Ic,([a])=>[a,zi(a,(...l)=>r(a,...l))])]);for(const a of["group","groupCollapsed"])s[a]?s[a]=zi(a,(...l)=>{l.length>=1&&r(...l),Oe(i," ")}):s[a]=zi(a,()=>{});return s.groupEnd=zi("groupEnd",s.groupEnd?(...a)=>{Do(i)}:()=>{}),harden(s),Lc(s,n)});ft(Fd);const wh=n=>{if(Or===void 0)return;let t=0;const e=new Ln,i=h=>{$y(e,h)},r=new Gn,s=h=>{if(Qo(e,h)){const c=ii(e,h);i(h),n(c)}},o=new Or(s);return{rejectionHandledHandler:h=>{const c=ue(r,h);i(c)},unhandledRejectionHandler:(h,c)=>{t+=1;const f=t;Ze(e,f,h),Je(r,c,f),nS(o,c,f,c)},processTerminationHandler:()=>{for(const[h,c]of Yy(e))i(h),n(c)}}},Rh=n=>{throw xt(n)},Ph=(n,t)=>ft((...e)=>Xe(n,t,e)),vM=(n="safe",t="platform",e="report",i=void 0)=>{let r;i===void 0?r=Bo:r={...Bo,getStackString:i};const s=typeof Pt.console<"u"?Pt.console:typeof Pt.print=="function"?(u=>ft({debug:u,log:u,info:u,warn:u,error:u}))(Ph(Pt.print)):void 0;if(s&&s.log)for(const u of["warn","error"])s[u]||se(s,u,{value:Ph(s.log,s)});const o=n==="unsafe"?s:Lc(s,r),a=Pt.process||void 0;if(t!=="none"&&typeof a=="object"&&typeof a.on=="function"){let u;if(t==="platform"||t==="exit"){const{exit:h}=a;typeof h=="function"||Rh("missing process.exit"),u=()=>h(a.exitCode||-1)}else t==="abort"&&(u=a.abort,typeof u=="function"||Rh("missing process.abort"));a.on("uncaughtException",h=>{o.error("SES_UNCAUGHT_EXCEPTION:",h),u&&u()})}if(e!=="none"&&typeof a=="object"&&typeof a.on=="function"){const h=wh(c=>{o.error("SES_UNHANDLED_REJECTION:",c)});h&&(a.on("unhandledRejection",h.unhandledRejectionHandler),a.on("rejectionHandled",h.rejectionHandledHandler),a.on("exit",h.processTerminationHandler))}const l=Pt.window||void 0;if(t!=="none"&&typeof l=="object"&&typeof l.addEventListener=="function"&&l.addEventListener("error",u=>{u.preventDefault(),o.error("SES_UNCAUGHT_EXCEPTION:",u.error),(t==="exit"||t==="abort")&&(l.location.href="about:blank")}),e!=="none"&&typeof l=="object"&&typeof l.addEventListener=="function"){const h=wh(c=>{o.error("SES_UNHANDLED_REJECTION:",c)});h&&(l.addEventListener("unhandledrejection",c=>{c.preventDefault(),h.unhandledRejectionHandler(c.reason,c.promise)}),l.addEventListener("rejectionhandled",c=>{c.preventDefault(),h.rejectionHandledHandler(c.promise)}),l.addEventListener("beforeunload",c=>{h.processTerminationHandler()}))}return{console:o}},xM=["getTypeName","getFunctionName","getMethodName","getFileName","getLineNumber","getColumnNumber","getEvalOrigin","isToplevel","isEval","isNative","isConstructor","isAsync","getPosition","getScriptNameOrSourceURL","toString"],yM=n=>{const e=xs(un(xM,i=>{const r=n[i];return[i,()=>Xe(r,n,[])]}));return Me(e,{})},SM=n=>un(n,yM),MM=/\/node_modules\//,EM=/^(?:node:)?internal\//,TM=/\/packages\/ses\/src\/error\/assert\.js$/,bM=/\/packages\/eventual-send\/src\//,AM=/\/packages\/ses-ava\/src\/ses-ava-test\.js$/,wM=[MM,EM,TM,bM,AM],RM=n=>{if(!n)return!0;for(const t of wM)if(Mc(t,n))return!1;return!0},PM=/^((?:.*[( ])?)[:/\w_-]*\/\.\.\.\/(.+)$/,CM=/^((?:.*[( ])?)\.\.\.\/(.+)$/,DM=/^((?:.*[( ])?)[:/\w_-]*\/(packages\/.+)$/,IM=/^((?:.*[( ])?)file:\/\/([^/].*)$/,LM=[PM,CM,DM,IM],UM=n=>{for(const t of LM){const e=Ec(t,n);if(e)return Xr(Hy(e,1),"")}return n},NM=(n,t,e,i)=>{if(e==="unsafe-debug")throw xt("internal: v8+unsafe-debug special case should already be done");const r=n.captureStackTrace,s=i==="concise"||i==="omit-frames",o=i==="concise"||i==="shorten-paths",a=y=>s?RM(y.getFileName()):!0,l=y=>{let m=`${y}`;return o&&(m=UM(m)),`
  at ${m}`},u=(y,m)=>Xr(un(Ki(m,a),l),""),h=new Gn,c={captureStackTrace(y,m=c.captureStackTrace){if(typeof r=="function"){Xe(r,n,[y,m]);return}If(y,"stack","")},getStackString(y){let m=ue(h,y);if(m===void 0&&(y.stack,m=ue(h,y),m||(m={stackString:""},Je(h,y,m))),m.stackString!==void 0)return m.stackString;const p=u(y,m.callSites);return Je(h,y,{stackString:p}),p},prepareStackTrace(y,m){if(e==="unsafe"){const p=u(y,m);return Je(h,y,{stackString:p}),`${y}${p}`}else return Je(h,y,{callSites:m}),""}},f=c.prepareStackTrace;n.prepareStackTrace=f;const d=new Vr([f]),_=y=>{if(Ss(d,y))return y;const m={prepareStackTrace(p,w){return Je(h,p,{callSites:w}),y(p,SM(w))}};return ta(d,m.prepareStackTrace),m.prepareStackTrace};return he(t,{captureStackTrace:{value:c.captureStackTrace,writable:!0,enumerable:!1,configurable:!0},prepareStackTrace:{get(){return n.prepareStackTrace},set(y){if(typeof y=="function"){const m=_(y);n.prepareStackTrace=m}else n.prepareStackTrace=f},enumerable:!1,configurable:!0}}),c.getStackString},Ch=Le(Ge.prototype,"stack"),Dh=Ch&&Ch.get,FM={getStackString(n){return typeof Dh=="function"?Xe(Dh,n,[]):"stack"in n?`${n.stack}`:""}};let oo=FM.getStackString;function OM(n="safe",t="concise"){const e=Ge.prototype,{captureStackTrace:i}=Ge,r=typeof i=="function"?"v8":"unknown",s=(l={})=>{const u=function(...c){let f;return new.target===void 0?f=Xe(Ge,this,c):f=Po(Ge,c,new.target),r==="v8"&&Xe(i,Ge,[f,u]),f};return he(u,{length:{value:1},prototype:{value:e,writable:!1,enumerable:!1,configurable:!1}}),u},o=s({}),a=s({});he(e,{constructor:{value:a}});for(const l of pd)Ro(l,a);if(he(o,{stackTraceLimit:{get(){if(typeof Ge.stackTraceLimit=="number")return Ge.stackTraceLimit},set(l){if(typeof l=="number"&&typeof Ge.stackTraceLimit=="number"){Ge.stackTraceLimit=l;return}},enumerable:!1,configurable:!0}}),n==="unsafe-debug"&&r==="v8"){he(o,{prepareStackTrace:{get(){return Ge.prepareStackTrace},set(u){Ge.prepareStackTrace=u},enumerable:!1,configurable:!0},captureStackTrace:{value:Ge.captureStackTrace,writable:!0,enumerable:!1,configurable:!0}});const l=Vn(o);return he(a,{stackTraceLimit:l.stackTraceLimit,prepareStackTrace:l.prepareStackTrace,captureStackTrace:l.captureStackTrace}),{"%InitialGetStackString%":oo,"%InitialError%":o,"%SharedError%":a}}return he(a,{stackTraceLimit:{get(){},set(l){},enumerable:!1,configurable:!0}}),r==="v8"&&he(a,{prepareStackTrace:{get(){return()=>""},set(l){},enumerable:!1,configurable:!0},captureStackTrace:{value:(l,u)=>{se(l,"stack",{value:""})},writable:!1,enumerable:!1,configurable:!0}}),r==="v8"?oo=NM(Ge,o,n,t):n==="unsafe"||n==="unsafe-debug"?he(e,{stack:{get(){return oo(this)},set(l){he(this,{stack:{value:l,writable:!0,enumerable:!0,configurable:!0}})}}}):he(e,{stack:{get(){return`${this}`},set(l){he(this,{stack:{value:l,writable:!0,enumerable:!0,configurable:!0}})}}}),{"%InitialGetStackString%":oo,"%InitialError%":o,"%SharedError%":a}}const BM=()=>{},zM=async(n,t,e)=>{await null;const i=n(...t);let r=Io(i);for(;!r.done;)try{const s=await r.value;r=Io(i,s)}catch(s){r=Hf(i,e(s))}return r.value},kM=(n,t)=>{const e=n(...t);let i=Io(e);for(;!i.done;)try{i=Io(e,i.value)}catch(r){i=Hf(e,r)}return i.value},HM=(n,t)=>ft({compartment:n,specifier:t}),GM=(n,t,e)=>{const i=Me(null);for(const r of n){const s=t(r,e);i[r]=s}return ft(i)},Qr=(n,t,e,i,r,s,o,a,l)=>{const{resolveHook:u,name:h}=ue(n,e),{imports:c}=r;if(!Yi(c)||Of(c,_=>typeof _!="string"))throw Pn(Fe`Invalid module source: 'imports' must be an array of strings, got ${c} for module ${ie(i)} of compartment ${ie(h)}`);const f=GM(c,u,i),d=ft({compartment:e,moduleSource:r,moduleSpecifier:i,resolvedImports:f,importMeta:l});for(const _ of Rf(f))s(Rr,[n,t,e,_,s,o,a]);return d};function*VM(n,t,e,i,r,s,o){const{importHook:a,importNowHook:l,moduleMap:u,moduleMapHook:h,moduleRecords:c,parentCompartment:f}=ue(n,e);if(Qo(c,i))return ii(c,i);let d=u[i];if(d===void 0&&h!==void 0&&(d=h(i)),d===void 0){const _=s(a,l);if(_===void 0){const y=s("importHook","importNowHook");throw Pn(Fe`${Oo(y)} needed to load module ${ie(i)} in compartment ${ie(e.name)}`)}d=_(i),wr(t,d)||(d=yield d)}if(typeof d=="string")throw Pn(Fe`Cannot map module ${ie(i)} to ${ie(d)} in parent compartment, use {source} module descriptor`,xt);if(Mn(d)){let _=ue(t,d);if(_!==void 0&&(d=_),d.namespace!==void 0){if(typeof d.namespace=="string"){const{compartment:p=f,namespace:w}=d;if(!Mn(p)||!wr(n,p))throw Pn(Fe`Invalid compartment in module descriptor for specifier ${ie(i)} in compartment ${ie(e.name)}`);const b=yield Rr(n,t,p,w,r,s,o);return Ze(c,i,b),b}if(Mn(d.namespace)){const{namespace:p}=d;if(_=ue(t,p),_!==void 0)d=_;else{const w=Br(p),N=Qr(n,t,e,i,{imports:[],exports:w,execute(I){for(const D of w)I[D]=p[D]}},r,s,o,void 0);return Ze(c,i,N),N}}else throw Pn(Fe`Invalid compartment in module descriptor for specifier ${ie(i)} in compartment ${ie(e.name)}`)}if(d.source!==void 0)if(typeof d.source=="string"){const{source:p,specifier:w=i,compartment:b=f,importMeta:M=void 0}=d,N=yield Rr(n,t,b,p,r,s,o),{moduleSource:I}=N,D=Qr(n,t,e,w,I,r,s,o,M);return Ze(c,i,D),D}else{const{source:p,specifier:w=i,importMeta:b}=d,M=Qr(n,t,e,w,p,r,s,o,b);return Ze(c,i,M),M}if(d.archive!==void 0)throw Pn(Fe`Unsupported archive module descriptor for specifier ${ie(i)} in compartment ${ie(e.name)}`);if(d.record!==void 0){const{compartment:p=e,specifier:w=i,record:b,importMeta:M}=d,N=Qr(n,t,p,w,b,r,s,o,M);return Ze(c,i,N),Ze(c,w,N),N}if(d.compartment!==void 0&&d.specifier!==void 0){if(!Mn(d.compartment)||!wr(n,d.compartment)||typeof d.specifier!="string")throw Pn(Fe`Invalid compartment in module descriptor for specifier ${ie(i)} in compartment ${ie(e.name)}`);const p=yield Rr(n,t,d.compartment,d.specifier,r,s,o);return Ze(c,i,p),p}const m=Qr(n,t,e,i,d,r,s,o);return Ze(c,i,m),m}else throw Pn(Fe`module descriptor must be a string or object for specifier ${ie(i)} in compartment ${ie(e.name)}`)}const Rr=(n,t,e,i,r,s,o)=>{const{name:a}=ue(n,e);let l=ii(o,e);l===void 0&&(l=new Ln,Ze(o,e,l));let u=ii(l,i);return u!==void 0||(u=s(zM,kM)(VM,[n,t,e,i,r,s,o],h=>{throw ia(h,Fe`${h.message}, loading ${ie(i)} in compartment ${ie(a)}`),h}),Ze(l,i,u)),u},WM=(n=[])=>{const t=new Gr;return{enqueueJob:(r,s)=>{yc(t,Wf(r(...s),BM,o=>{Oe(n,o)}))},drainQueue:async()=>{await null;for(const r of t)await r},errors:n}},XM=(n=[])=>{let t=[],e=[];const i=(s,o)=>{Oe(e,[s,o])},r=()=>{for(const[s,o]of t)try{s(...o)}catch(a){Oe(n,a)}t=e,e=[],t.length>0&&r()};return{enqueueJob:i,drainQueue:r,errors:n}},Od=({errors:n,errorPrefix:t})=>{if(n.length>0){const e=ke("COMPARTMENT_LOAD_ERRORS","",["verbose"])==="verbose";throw xt(`${t} (${n.length} underlying failures: ${Xr(un(n,i=>i.message+(e?i.stack:"")),", ")}`)}},$M=(n,t)=>t,YM=(n,t)=>n,Kl=async(n,t,e,i)=>{const{name:r}=ue(n,e),s=new Ln,{enqueueJob:o,drainQueue:a,errors:l}=WM();o(Rr,[n,t,e,i,o,YM,s]),await a(),Od({errors:l,errorPrefix:`Failed to load module ${ie(i)} in package ${ie(r)}`})},qM=(n,t,e,i)=>{const{name:r}=ue(n,e),s=new Ln,{enqueueJob:o,drainQueue:a,errors:l}=XM();o(Rr,[n,t,e,i,o,$M,s]),a(),Od({errors:l,errorPrefix:`Failed to load module ${ie(i)} in package ${ie(r)}`})},{quote:mr}=Te,jM=()=>{let n=!1;const t=Me(null,{[Si]:{value:"Module",writable:!1,enumerable:!1,configurable:!1}});return ft({activate(){n=!0},exportsTarget:t,exportsProxy:new Xo(t,{get(e,i,r){if(!n)throw xt(`Cannot get property ${mr(i)} of module exports namespace, the module has not yet begun to execute`);return Oy(t,i,r)},set(e,i,r){throw xt(`Cannot set property ${mr(i)} of module exports namespace`)},has(e,i){if(!n)throw xt(`Cannot check property ${mr(i)}, the module has not yet begun to execute`);return Df(t,i)},deleteProperty(e,i){throw xt(`Cannot delete property ${mr(i)}s of module exports namespace`)},ownKeys(e){if(!n)throw xt("Cannot enumerate keys, the module has not yet begun to execute");return ni(t)},getOwnPropertyDescriptor(e,i){if(!n)throw xt(`Cannot get own property descriptor ${mr(i)}, the module has not yet begun to execute`);return By(t,i)},preventExtensions(e){if(!n)throw xt("Cannot prevent extensions of module exports namespace, the module has not yet begun to execute");return ky(t)},isExtensible(){if(!n)throw xt("Cannot check extensibility of module exports namespace, the module has not yet begun to execute");return zy(t)},getPrototypeOf(e){return null},setPrototypeOf(e,i){throw xt("Cannot set prototype of module exports namespace")},defineProperty(e,i,r){throw xt(`Cannot define property ${mr(i)} of module exports namespace`)},apply(e,i,r){throw xt("Cannot call module exports namespace, it is not a function")},construct(e,i){throw xt("Cannot construct module exports namespace, it is not a constructor")}})})},Uc=(n,t,e,i)=>{const{deferredExports:r}=t;if(!Qo(r,i)){const s=jM();Je(e,s.exportsProxy,HM(n,i)),Ze(r,i,s)}return ii(r,i)},ZM=(n,t)=>{const{sloppyGlobalsMode:e=!1,__moduleShimLexicals__:i=void 0}=t;let r;if(i===void 0&&!e)({safeEvaluate:r}=n);else{let{globalTransforms:s}=n;const{globalObject:o}=n;let a;i!==void 0&&(s=void 0,a=Me(null,Vn(i))),{safeEvaluate:r}=Cc({globalObject:o,moduleLexicals:a,globalTransforms:s,sloppyGlobalsMode:e})}return{safeEvaluate:r}},Bd=(n,t,e)=>{if(typeof t!="string")throw xt("first argument of evaluate() must be a string");const{transforms:i=[],__evadeHtmlCommentTest__:r=!1,__evadeImportExpressionTest__:s=!1,__rejectSomeDirectEvalExpressions__:o=!0}=e,a=[...i];r===!0&&Oe(a,Rd),s===!0&&Oe(a,Dd),o===!0&&Oe(a,Id);const{safeEvaluate:l}=ZM(n,e);return l(t,{localTransforms:a})},{quote:ao}=Te,KM=(n,t,e,i,r,s)=>{const{exportsProxy:o,exportsTarget:a,activate:l}=Uc(e,ue(n,e),i,r),u=Me(null);if(t.exports){if(!Yi(t.exports)||Of(t.exports,c=>typeof c!="string"))throw xt(`SES virtual module source "exports" property must be an array of strings for module ${r}`);_i(t.exports,c=>{let f=a[c];const d=[];se(a,c,{get:()=>f,set:m=>{f=m;for(const p of d)p(m)},enumerable:!0,configurable:!1}),u[c]=m=>{Oe(d,m),m(f)}}),u["*"]=c=>{c(a)}}const h={activated:!1};return ft({notifiers:u,exportsProxy:o,execute(){if(Df(h,"errorFromExecute"))throw h.errorFromExecute;if(!h.activated){l(),h.activated=!0;try{t.execute(a,e,s)}catch(c){throw h.errorFromExecute=c,c}}}})},JM=(n,t,e,i)=>{const{compartment:r,moduleSpecifier:s,moduleSource:o,importMeta:a}=e,{reexports:l=[],__syncModuleProgram__:u,__fixedExportMap__:h={},__liveExportMap__:c={},__reexportMap__:f={},__needsImport__:d=!1,__needsImportMeta__:_=!1,__syncModuleFunctor__:y}=o,m=ue(n,r),{__shimTransforms__:p,resolveHook:w,importMetaHook:b,compartmentImport:M}=m,{exportsProxy:N,exportsTarget:I,activate:D}=Uc(r,m,t,s),O=Me(null),v=Me(null),x=Me(null),T=Me(null),U=Me(null);a&&vs(U,a),_&&b&&b(s,U);let F;d&&(F=async tt=>M(w(tt,s)));const k=Me(null),W=Me(null);_i(tn(h),([tt,[at]])=>{let X=k[at];if(!X){let Z,ot=!0,it=[];const lt=()=>{if(ot)throw ss(`binding ${ao(at)} not yet initialized`);return Z},It=ft(Ht=>{if(!ot)throw xt(`Internal: binding ${ao(at)} already initialized`);Z=Ht;const Zt=it;it=null,ot=!1;for(const Ct of Zt||[])Ct(Ht);return Ht});X={get:lt,notify:Ht=>{Ht!==It&&(ot?Oe(it||[],Ht):Ht(Z))}},k[at]=X,x[at]=It}O[tt]={get:X.get,set:void 0,enumerable:!0,configurable:!1},W[tt]=X.notify}),_i(tn(c),([tt,[at,X]])=>{let Z=k[at];if(!Z){let ot,it=!0;const lt=[],It=()=>{if(it)throw ss(`binding ${ao(tt)} not yet initialized`);return ot},_t=ft(Ct=>{ot=Ct,it=!1;for(const L of lt)L(Ct)}),Ht=Ct=>{if(it)throw ss(`binding ${ao(at)} not yet initialized`);ot=Ct;for(const L of lt)L(Ct)};Z={get:It,notify:Ct=>{Ct!==_t&&(Oe(lt,Ct),it||Ct(ot))}},k[at]=Z,X&&se(v,at,{get:It,set:Ht,enumerable:!0,configurable:!1}),T[at]=_t}O[tt]={get:Z.get,set:void 0,enumerable:!0,configurable:!1},W[tt]=Z.notify});const E=tt=>{tt(I)};W["*"]=E;function P(tt){const at=Me(null);at.default=!1;for(const[X,Z]of tt){const ot=ii(i,X);ot.execute();const{notifiers:it}=ot;for(const[lt,It]of Z){const _t=it[lt];if(!_t)throw _s(`The requested module '${X}' does not provide an export named '${lt}'`);for(const Ht of It)_t(Ht)}if(Ko(l,X))for(const[lt,It]of tn(it))at[lt]===void 0?at[lt]=It:at[lt]=!1;if(f[X])for(const[lt,It]of f[X])at[It]=it[lt]}for(const[X,Z]of tn(at))if(!W[X]&&Z!==!1){W[X]=Z;let ot;Z(lt=>ot=lt),O[X]={get(){return ot},set:void 0,enumerable:!0,configurable:!1}}_i(Bf(wf(O)),X=>se(I,X,O[X])),ft(I),D()}let R;y!==void 0?R=y:R=Bd(m,u,{globalObject:r.globalThis,transforms:p,__moduleShimLexicals__:v});let B=!1,Y;function K(){if(R){const tt=R;R=null;try{tt(ft({imports:ft(P),onceVar:ft(x),liveVar:ft(T),import:F,importMeta:U}))}catch(at){B=!0,Y=at}}if(B)throw Y}return ft({notifiers:W,exportsProxy:N,execute:K})},{Fail:Wi,quote:De}=Te,Nc=(n,t,e,i)=>{const{name:r,moduleRecords:s}=ue(n,e),o=ii(s,i);if(o===void 0)throw ss(`Missing link to module ${De(i)} from compartment ${De(r)}`);return rE(n,t,o)};function QM(n){return typeof n.__syncModuleProgram__=="string"}function tE(n,t){const{__fixedExportMap__:e,__liveExportMap__:i}=n;Mn(e)||Wi`Property '__fixedExportMap__' of a precompiled module source must be an object, got ${De(e)}, for module ${De(t)}`,Mn(i)||Wi`Property '__liveExportMap__' of a precompiled module source must be an object, got ${De(i)}, for module ${De(t)}`}function eE(n){return typeof n.execute=="function"}function nE(n,t){const{exports:e}=n;Yi(e)||Wi`Invalid module source: 'exports' of a virtual module source must be an array, got ${De(e)}, for module ${De(t)}`}function iE(n,t){Mn(n)||Wi`Invalid module source: must be of type object, got ${De(n)}, for module ${De(t)}`;const{imports:e,exports:i,reexports:r=[]}=n;Yi(e)||Wi`Invalid module source: 'imports' must be an array, got ${De(e)}, for module ${De(t)}`,Yi(i)||Wi`Invalid module source: 'exports' must be an array, got ${De(i)}, for module ${De(t)}`,Yi(r)||Wi`Invalid module source: 'reexports' must be an array if present, got ${De(r)}, for module ${De(t)}`}const rE=(n,t,e)=>{const{compartment:i,moduleSpecifier:r,resolvedImports:s,moduleSource:o}=e,{instances:a}=ue(n,i);if(Qo(a,r))return ii(a,r);iE(o,r);const l=new Ln;let u;if(QM(o))tE(o,r),u=JM(n,t,e,l);else if(eE(o))nE(o,r),u=KM(n,o,i,t,r,s);else throw xt(`Invalid module source, got ${De(o)}`);Ze(a,r,u);for(const[h,c]of tn(s)){const f=Nc(n,t,i,c);Ze(l,h,f)}return u},Xi=new Gn,xn=new Gn,Fc=function(t={},e={},i={}){throw xt("Compartment.prototype.constructor is not a valid constructor.")},Ih=(n,t)=>{const{execute:e,exportsProxy:i}=Nc(xn,Xi,n,t);return e(),i},Oc={constructor:Fc,get globalThis(){return ue(xn,this).globalObject},get name(){return ue(xn,this).name},evaluate(n,t={}){const e=ue(xn,this);return Bd(e,n,t)},module(n){if(typeof n!="string")throw xt("first argument of module() must be a string");const{exportsProxy:t}=Uc(this,ue(xn,this),Xi,n);return t},async import(n){const{noNamespaceBox:t}=ue(xn,this);if(typeof n!="string")throw xt("first argument of import() must be a string");return Wf(Kl(xn,Xi,this,n),()=>{const e=Ih(this,n);return t?e:{namespace:e}})},async load(n){if(typeof n!="string")throw xt("first argument of load() must be a string");return Kl(xn,Xi,this,n)},importNow(n){if(typeof n!="string")throw xt("first argument of importNow() must be a string");return qM(xn,Xi,this,n),Ih(this,n)}};he(Oc,{[Si]:{value:"Compartment",writable:!1,enumerable:!1,configurable:!0}});he(Fc,{prototype:{value:Oc}});const sE=(...n)=>{if(n.length===0)return{};if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&"__options__"in n[0]){const{__options__:t,...e}=n[0];return Te(t===!0,`Compartment constructor only supports true __options__ sigil, got ${t}`),e}else{const[t={},e={},i={}]=n;return _h(i.modules,void 0,"Compartment constructor must receive either a module map argument or modules option, not both"),_h(i.globals,void 0,"Compartment constructor must receive either globals argument or option, not both"),{...i,globals:t,modules:e}}},Jl=(n,t,e,{parentCompartment:i=void 0,enforceNew:r=!1}={})=>{function s(...o){if(r&&new.target===void 0)throw xt("Class constructor Compartment cannot be invoked without 'new'");const{name:a="<unknown>",transforms:l=[],__shimTransforms__:u=[],globals:h={},modules:c={},resolveHook:f,importHook:d,importNowHook:_,moduleMapHook:y,importMetaHook:m,__noNamespaceBox__:p=!1}=sE(...o),w=Jo([l,u],Xf),b={__proto__:null,...h},M={__proto__:null,...c},N=new Ln,I=new Ln,D=new Ln,O={},v=this;tM(O),xd(O);const{safeEvaluate:x}=Cc({globalObject:O,globalTransforms:w,sloppyGlobalsMode:!1});yd(O,{intrinsics:t,newGlobalPropertyNames:dd,makeCompartmentConstructor:n,parentCompartment:this,markVirtualizedNativeFunction:e}),Zl(O,x,e),vs(O,b);const T=async U=>{if(typeof f!="function")throw xt(`Compartment does not support dynamic import: no configured resolveHook for compartment ${ie(a)}`);await Kl(xn,Xi,v,U);const{execute:F,exportsProxy:k}=Nc(xn,Xi,v,U);return F(),k};Je(xn,this,{name:`${a}`,globalTransforms:w,globalObject:O,safeEvaluate:x,resolveHook:f,importHook:d,importNowHook:_,moduleMap:M,moduleMapHook:y,importMetaHook:m,moduleRecords:N,__shimTransforms__:u,deferredExports:D,instances:I,parentCompartment:i,noNamespaceBox:p,compartmentImport:T})}return s.prototype=Oc,s};function Qa(n){return fe(n).constructor}function oE(){return arguments}const aE=()=>{const n=Ke.prototype.constructor,t=Le(oE(),"callee"),e=t&&t.get,i=Qy(new hn),r=fe(i),s=qo[Pf]&&Zy(/./),o=s&&fe(s),a=Gy([]),l=fe(a),u=fe(by),h=qy(new Ln),c=fe(h),f=jy(new Gr),d=fe(f),_=fe(l);function*y(){}const m=Qa(y),p=m.prototype;async function w(){}const b=Qa(w),M={"%InertFunction%":n,"%ArrayIteratorPrototype%":l,"%InertAsyncFunction%":b,"%Generator%":p,"%InertGeneratorFunction%":m,"%IteratorPrototype%":_,"%MapIteratorPrototype%":c,"%RegExpStringIteratorPrototype%":o,"%SetIteratorPrototype%":d,"%StringIteratorPrototype%":r,"%ThrowTypeError%":e,"%TypedArray%":u,"%InertCompartment%":Fc};if($l!==void 0){const O=Qa($l),v=O.prototype,x=v.prototype,T=fe(x);vs(M,{"%AsyncGenerator%":v,"%InertAsyncGeneratorFunction%":O,"%AsyncGeneratorPrototype%":x,"%AsyncIteratorPrototype%":T})}Pt.Iterator&&(M["%IteratorHelperPrototype%"]=fe(Pt.Iterator.from([]).take(0)),M["%WrapForValidIteratorPrototype%"]=fe(Pt.Iterator.from({next(){return{value:void 0}}}))),Pt.AsyncIterator&&(M["%AsyncIteratorHelperPrototype%"]=fe(Pt.AsyncIterator.from([]).take(0)),M["%WrapForValidAsyncIteratorPrototype%"]=fe(Pt.AsyncIterator.from({next(){}})));const I=new wo(0).sliceToImmutable(),D=fe(I);return D!==wo.prototype&&(M["%ImmutableArrayBufferPrototype%"]=D),M},zd=(n,t)=>{if(t==="safe"||(Object.isExtensible=()=>!1,Object.isFrozen=()=>!0,Object.isSealed=()=>!0,Reflect.isExtensible=()=>!1,n.isFake))return n;const e=i=>i;return e.isFake=!0,ft(e)};ft(zd);const lE=()=>{const n=Ar,t=n.prototype,e=Vf(Ar,void 0);he(t,{constructor:{value:e}});const i=tn(Vn(n)),r=xs(un(i,([s,o])=>[s,{...o,configurable:!0}]));return he(e,r),{"%SharedSymbol%":e}},cE=n=>{try{return n(),!1}catch{return!0}},Lh=(n,t,e)=>{if(n===void 0)return!1;const i=Le(n,t);if(!i||"value"in i)return!1;const{get:r,set:s}=i;if(typeof r!="function"||typeof s!="function"||r()!==e||Xe(r,n,[])!==e)return!1;const o="Seems to be a setter",a={__proto__:null};if(Xe(s,a,[o]),a[t]!==o)return!1;const l={__proto__:n};return Xe(s,l,[o]),l[t]!==o||!cE(()=>Xe(s,n,[e]))||"originalValue"in r||i.configurable===!1?!1:(se(n,t,{value:e,writable:!0,enumerable:i.enumerable,configurable:!0}),!0)},uE=n=>{Lh(n["%IteratorPrototype%"],"constructor",n.Iterator),Lh(n["%IteratorPrototype%"],Si,"Iterator")},hE=()=>{const n=qa[Fn];se(qa,Fn,{configurable:!0,get(){return n},set(t){this!==qa&&(Ie(this,Fn)&&(this[Fn]=t),se(this,Fn,{value:t,writable:!0,enumerable:!0,configurable:!0}))}})},fE=()=>{if(typeof Co.transfer=="function")return{};const n=Pt.structuredClone;return typeof n!="function"?{}:(se(Co,"transfer",{value:{transfer(e=void 0){const i=Wy(this);if(e===void 0||e===i)return n(this,{transfer:[this]});if(typeof e!="number")throw xt("transfer newLength if provided must be a number");if(e>i){const r=new wo(e),s=new Vl(this),o=new Vl(r);return Xy(o,s),n(this,{transfer:[this]}),r}else{const r=Vy(this,0,e);return n(this,{transfer:[this]}),r}}}.transfer,writable:!0,enumerable:!1,configurable:!0}),{})},lo=n=>{let t=!1;const e=(...i)=>{t?n(" ",...i):n(...i)};return{warn(...i){e(...i)},error(...i){e(...i)},groupCollapsed(...i){Te(!t),n(...i),t=!0},groupEnd(){t=!1}}},Uh=()=>{},kd=n=>{if(n==="none")return lo(Uh);if(n==="console"||Pt.window===Pt||Pt.importScripts!==void 0)return console;if(Pt.console!==void 0){const t=Pt.console,e=Vf(t.error,t);return lo(e)}return Pt.print!==void 0?lo(Pt.print):lo(Uh)},Nh=(n,t,e)=>{const{warn:i,error:r,groupCollapsed:s,groupEnd:o}=t,a=s&&o;let l=!1;try{return e({warn(...u){a&&!l&&(s(n),l=!0),i(...u)},error(...u){a&&!l&&(s(n),l=!0),r(...u)}})}finally{a&&l&&(o(),l=!1)}},{Fail:dE,details:Fh,quote:pE}=Te;let co,uo;const mE=LS(),gE=()=>{let n;try{n=Ke("return true")()}catch{n=!1}let t;try{t=Xl("true")}catch{t=!1}let e;return n&&t&&(e=Ke("eval","SES_changed",`        eval("SES_changed = true");
        return SES_changed;
      `)(Xl,!1),e||delete Pt.SES_changed),{functionAllowed:n,evalAllowed:t,directEvalAllowed:e}},Hd=(n={})=>{const{errorTaming:t=ke("LOCKDOWN_ERROR_TAMING","safe",["unsafe","unsafe-debug"]),errorTrapping:e=ke("LOCKDOWN_ERROR_TRAPPING","platform",["none","report","abort","exit"]),reporting:i=ke("LOCKDOWN_REPORTING","platform",["console","none"]),unhandledRejectionTrapping:r=ke("LOCKDOWN_UNHANDLED_REJECTION_TRAPPING","report",["none"]),regExpTaming:s=ke("LOCKDOWN_REGEXP_TAMING","safe",["unsafe"]),localeTaming:o=ke("LOCKDOWN_LOCALE_TAMING","safe",["unsafe"]),consoleTaming:a=ke("LOCKDOWN_CONSOLE_TAMING","safe",["unsafe"]),overrideTaming:l=ke("LOCKDOWN_OVERRIDE_TAMING","moderate",["min","severe"]),stackFiltering:u=ke("LOCKDOWN_STACK_FILTERING","concise",["omit-frames","shorten-paths","verbose"]),domainTaming:h=ke("LOCKDOWN_DOMAIN_TAMING","safe",["unsafe"]),evalTaming:c=ke("LOCKDOWN_EVAL_TAMING","safe-eval",["unsafe-eval","no-eval","safeEval","unsafeEval","noEval"]),overrideDebug:f=Ki(bc(ke("LOCKDOWN_OVERRIDE_DEBUG",""),","),B=>B!==""),legacyRegeneratorRuntimeTaming:d=ke("LOCKDOWN_LEGACY_REGENERATOR_RUNTIME_TAMING","safe",["unsafe-ignore"]),__hardenTaming__:_=ke("LOCKDOWN_HARDEN_TAMING","safe",["unsafe"]),dateTaming:y,mathTaming:m,...p}=n,w=ni(p);w.length===0||dE`lockdown(): non supported option ${pE(w)}`;const b=kd(i),{warn:M}=b;y!==void 0&&M("SES The 'dateTaming' option is deprecated and does nothing. In the future specifying it will be an error."),m!==void 0&&M("SES The 'mathTaming' option is deprecated and does nothing. In the future specifying it will be an error."),co===void 0||Te.fail(Fh`Already locked down at ${co} (SES_ALREADY_LOCKED_DOWN)`,xt),co=xt("Prior lockdown (SES_ALREADY_LOCKED_DOWN)"),co.stack;const{functionAllowed:N,evalAllowed:I,directEvalAllowed:D}=gE();if(D===!1&&c==="safe-eval"&&(N||I))throw xt("SES cannot initialize unless 'eval' is the original intrinsic 'eval', suitable for direct eval (dynamically scoped eval) (SES_DIRECT_EVAL)");if(Pt.Function.prototype.constructor!==Pt.Function&&typeof Pt.harden=="function"&&typeof Pt.lockdown=="function"&&Pt.Date.prototype.constructor!==Pt.Date&&typeof Pt.Date.now=="function"&&$o(Pt.Date.prototype.constructor.now(),NaN))throw xt("Already locked down but not by this SES instance (SES_MULTIPLE_INSTANCES)");mM(h);const v=Nd(),{addIntrinsics:x,completePrototypes:T,finalIntrinsics:U}=gd(b),F=zd(mE,_);x({harden:F}),x(HS()),x(GS()),x(OM(t,u)),x(VS()),x(WS(s)),x(lE()),x(fE()),x(gM()),x(aE()),T();const k=U(),W={__proto__:null};typeof Pt.Buffer=="function"&&(W.Buffer=Pt.Buffer);let E;t==="safe"&&(E=k["%InitialGetStackString%"]);const P=vM(a,e,r,E);if(Pt.console=P.console,typeof P.console._times=="object"&&(W.SafeMap=fe(P.console._times)),(t==="unsafe"||t==="unsafe-debug")&&Pt.assert===Te&&(Pt.assert=ra(void 0,!0)),KS(k,o),uE(k),Nh("SES Removing unpermitted intrinsics",b,B=>kS(k,v,B)),xd(Pt),yd(Pt,{intrinsics:k,newGlobalPropertyNames:vh,makeCompartmentConstructor:Jl,markVirtualizedNativeFunction:v}),c==="no-eval"||c==="noEval")Zl(Pt,iS,v);else if(c==="safe-eval"||c==="safeEval"){const{safeEvaluate:B}=Cc({globalObject:Pt});Zl(Pt,B,v)}return()=>{uo===void 0||Te.fail(Fh`Already locked down at ${uo} (SES_ALREADY_LOCKED_DOWN)`,xt),uo=xt("Prior lockdown (SES_ALREADY_LOCKED_DOWN)"),uo.stack,Nh("SES Enabling property overrides",b,Y=>YS(k,l,Y,f)),d==="unsafe-ignore"&&hE();const B={intrinsics:k,hostIntrinsics:W,globals:{Function:Pt.Function,eval:Pt.eval,Compartment:Pt.Compartment,Symbol:Pt.Symbol}};for(const Y of Br(vh))B.globals[Y]=Pt[Y];return F(B),F}};Pt.lockdown=n=>{const t=Hd(n);Pt.harden=t()};Pt.repairIntrinsics=n=>{const t=Hd(n);Pt.hardenIntrinsics=()=>{Pt.harden=t()}};const _E=Nd(),vE=kd("none");Pt.Compartment=Jl(Jl,zS(Pt,vE),_E,{enforceNew:!0});Pt.assert=Te;const xE=Fd(Bo),yE=Uy("MAKE_CAUSAL_CONSOLE_FROM_LOGGER_KEY_FOR_SES_AVA");Pt[yE]=xE;let Oh=!1;function SE(n,t,e){Oh||(lockdown(),Oh=!0);const i=harden({allSpoons:t,layers:e,Math}),r=`() => { ${n} }`,s=new Compartment(i);try{const o=s.evaluate(r);if(typeof o!="function")throw new Error("User code must return a function");return o()}catch(o){throw new Error(`User code failed: ${o.message}`)}}function Bh(n,t){let e=ty(t);return SE(n,e.allSpoons,e.layers)}const In=new Rm,Mi=[600,400],$i=new Sn(75,Mi[0]/Mi[1],.1,1e3),Ts=new bx;Ts.setSize(Mi[0],Mi[1]);{let n=document.getElementById("viewport");if(n==null)throw new Error("No DOM element with the id app exists. This is supposed to exist.");n.appendChild(Ts.domElement)}const Gd=1,Vd=new V(1,.5,1),ki=new df(new V(1,0,0),Vd,Gd,16711680);In.add(ki);const Hi=new df(new V(0,0,-1),Vd,Gd,65280);In.add(Hi);{ki.renderOrder=999,Hi.renderOrder=999,ki.cone.renderOrder=999,Hi.cone.renderOrder=999,ki.line.renderOrder=999,Hi.line.renderOrder=999;{let n=ki.cone.material,t=ki.line.material;n.depthTest=!1,n.depthWrite=!1,t.depthTest=!1,t.depthWrite=!1}{let n=Hi.cone.material,t=Hi.line.material;n.depthTest=!1,n.depthWrite=!1,t.depthTest=!1,t.depthWrite=!1}}const Wd=new yy(Ts),ME=new Sy(In,$i);Wd.addPass(ME);const Bc=new pi(In,$i,Mi[0],Mi[1]);Bc.kernelRadius=16;Bc.minDistance=.005;Bc.maxDistance=.1;function Xd(){requestAnimationFrame(Xd);let n=new V($i.position.x,$i.position.y,$i.position.z);const t=new V;$i.getWorldDirection(t);let i=new V(0,1,0).cross(t).normalize(),r=new V(t.x,t.y,t.z);r.cross(i).normalize();let s=Mi[1]/Mi[0],o=1.5;n.add(t.multiplyScalar(3)).add(i.multiplyScalar(o)).add(r.multiplyScalar(o*s)),ki.position.set(n.x,n.y,n.z),Hi.position.set(n.x,n.y,n.z),Wd.render()}Xd();{let n=new Va(1,0),t=new Va(1,1),e=new Va(1,2),i=new $x(0,1),r=new to(n,i),s=new to(e,i),o=new to(n,i),a=new to(t,i);r.layer=0,s.layer=0,o.layer=1,a.layer=1,s.position[1]=4,o.angle=Math.PI/2,a.angle=Math.PI/2,o.position[0]=0,a.position[0]=-4,o.position[1]=3,a.position[1]=3,o.isUpsideDown=!0,In.add(r.model),In.add(s.model),In.add(o.model),In.add(a.model);const l=`
    function grade(spoon){
      let holes = spoon.spoon.head.holeCount + spoon.spoon.handle.holeCount;

      if(spoon.spoonsBelow.length > 0){
        return holes * spoon.spoonsBelow.reduce((sum, spoon)=>{
            return grade(spoon) + sum;
          }, 0);
      }else{
        return holes;
      }
    }

    return layers[layers.length -1].reduce((sum, spoon)=>{
      return grade(spoon) + sum;
    }, 0);
  `,u=document.getElementById("codeinput");u!=null&&(u.value=l,console.log(u.value),u.oninput=()=>{const f=Bh(u.value,[r,s,o,a]);let d=document.getElementById("info");d!=null&&(d.innerHTML=f.toFixed(5))},u.addEventListener("keydown",f=>{if(f.key==="Tab"){f.preventDefault();const d=u.selectionStart,_=u.selectionEnd;u.value=u.value.substring(0,d)+"	"+u.value.substring(_),u.selectionStart=u.selectionEnd=d+1}}));const h=Bh(l,[r,s,o,a]);let c=document.getElementById("info");c!=null&&(c.innerHTML=h.toFixed(5))}{const n=new Bm(16777215,1);n.position.set(5,10,7.5),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.camera.near=.5,n.shadow.camera.far=50;const t=10;n.shadow.camera.left=-t,n.shadow.camera.right=t,n.shadow.camera.top=t,n.shadow.camera.bottom=-t,In.add(n),Ts.shadowMap.enabled=!0}const $d=new ny($i,Ts.domElement);$d.target.set(-2,0,0);$d.update();const EE=new zm(16777215,.3);In.add(EE);{const n=new cn(new ms(200,200),new hf({color:8421504,depthWrite:!0,depthTest:!0}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.renderOrder=0,In.add(n)}
