(()=>{var ud="179";var dd=0,nh=1,pd=2;var ih=1,Ga=2,En=3,wn=0,je=1,be=2,Mi=0,As=1,rh=2,sh=3,ah=4,fd=5,Fr=100,md=101,gd=102,_d=103,vd=104,yd=200,Md=201,Sd=202,xd=203,Td=204,Ed=205,wd=206,bd=207,Ad=208,Rd=209,Cd=210,Id=211,Ld=212,Pd=213,Ud=214,ka=0,Wa=1,Xa=2,Rs=3,qa=4,Ya=5,Za=6,Ja=7,Nd=0,Dd=1,Fd=2,Zn=0,Od=1,Bd=2,zd=3,ja=4,Vd=5,Hd=6,Gd=7;var Or=301,ji=302,Ka=303,$a=304,Cs=306,_n=1000,Ki=1001,Qa=1002,Jn=1003,to=1004;var $i=1005;var ke=1006,Br=1007;var jn=1008;var Si=1009,kd=1010,Wd=1011,Is=1012,oh=1013,zr=1014,xi=1015,Ls=1016,lh=1017,hh=1018,Vr=1020,Xd=35902,qd=1021,Yd=1022,bn=1023,eo=1026,Ps=1027,Zd=1028,ch=1029,Jd=1030,uh=1031;var dh=1033,no=33776,io=33777,ro=33778,so=33779,ph=35840,fh=35841,mh=35842,gh=35843,_h=36196,vh=37492,yh=37496,Mh=37808,Sh=37809,xh=37810,Th=37811,Eh=37812,wh=37813,bh=37814,Ah=37815,Rh=37816,Ch=37817,Ih=37818,Lh=37819,Ph=37820,Uh=37821,ao=36492,Nh=36494,Dh=36495,jd=36283,Fh=36284,Oh=36285,Bh=36286,Kn=2200,Hr=2201;var zh=2300,oo=2301;var Vh=0,Us=1,Gr=2;var Kd=3201;var $d=0,Qd=1,$n="",ge="srgb",Be="srgb-linear",Hh="linear",ee="srgb";var tp=512,ep=513,np=514,Gh=515,ip=516,rp=517,sp=518,ap=519;var kh="300 es",Wh=2000;class Qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n!==void 0&&(n[t]!==void 0&&n[t].indexOf(e)!==-1)}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}var Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,Lr=Math.PI/180,qi=180/Math.PI;function an(){let t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Le[255&t]+Le[t>>8&255]+Le[t>>16&255]+Le[t>>24&255]+"-"+Le[255&e]+Le[e>>8&255]+"-"+Le[e>>16&15|64]+Le[e>>24&255]+"-"+Le[63&n|128]+Le[n>>8&255]+"-"+Le[n>>16&255]+Le[n>>24&255]+Le[255&i]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Nt(t,e,n){return Math.max(e,Math.min(n,t))}function $l(t,e){return(t%e+e)%e}function Ss(t,e,n){return(1-n)*t+n*e}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(4294967295*t);case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int32Array:return Math.round(2147483647*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw Error("Invalid component type.")}}var Ns={DEG2RAD:Lr,RAD2DEG:qi,generateUUID:an,clamp:Nt,euclideanModulo:$l,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:Ss,damp:function(t,e,n,i){return Ss(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs($l(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(0.5-Math.random())},seededRandom:function(t){t!==void 0&&(Su=t);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*Lr},radToDeg:function(t){return t*qi},isPowerOfTwo:function(t){return!(t&t-1)&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let{cos:s,sin:a}=Math,o=s(n/2),l=a(n/2),h=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*c,l*d,l*u,o*h);break;case"YZY":t.set(l*u,o*c,l*d,o*h);break;case"ZXZ":t.set(l*d,l*u,o*c,o*h);break;case"XZX":t.set(o*c,l*_,l*p,o*h);break;case"YXY":t.set(l*p,o*c,l*_,o*h);break;case"ZYZ":t.set(l*_,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:$t,denormalize:gn};class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],h=n[i+2],c=n[i+3],d=r[s+0],u=r[s+1],p=r[s+2],_=r[s+3];if(a===0)return t[e+0]=o,t[e+1]=l,t[e+2]=h,void(t[e+3]=c);if(a===1)return t[e+0]=d,t[e+1]=u,t[e+2]=p,void(t[e+3]=_);if(c!==_||o!==d||l!==u||h!==p){let m=1-a,f=o*d+l*u+h*p+c*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let S=Math.sqrt(y),C=Math.atan2(S,f*v);m=Math.sin(m*C)/S,a=Math.sin(a*C)/S}let g=a*v;if(o=o*m+d*g,l=l*m+u*g,h=h*m+p*g,c=c*m+_*g,m===1-a){let S=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=S,l*=S,h*=S,c*=S}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,i,r,s){let a=n[i],o=n[i+1],l=n[i+2],h=n[i+3],c=r[s],d=r[s+1],u=r[s+2],p=r[s+3];return t[e]=a*p+h*c+o*u-l*d,t[e+1]=o*p+h*d+l*c-a*u,t[e+2]=l*p+h*u+a*d-o*c,t[e+3]=h*p-a*c-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:r,_order:s}=t,a=Math.cos,o=Math.sin,l=a(n/2),h=a(i/2),c=a(r/2),d=o(n/2),u=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10],d=n+a+c;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(h-o)*u,this._y=(r-l)*u,this._z=(s-i)*u}else if(n>a&&n>c){let u=2*Math.sqrt(1+n-a-c);this._w=(h-o)/u,this._x=0.25*u,this._y=(i+s)/u,this._z=(r+l)/u}else if(a>c){let u=2*Math.sqrt(1+a-n-c);this._w=(r-l)/u,this._x=(i+s)/u,this._y=0.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-n-a);this._w=(s-i)/u,this._x=(r+l)/u,this._y=(o+h)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<0.00000001?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:r,_w:s}=t,a=e._x,o=e._y,l=e._z,h=e._w;return this._x=n*h+s*a+i*l-r*o,this._y=i*h+s*o+r*a-n*l,this._z=r*h+s*l+n*o-i*a,this._w=s*h-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,s=this._w,a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;let o=1-a*a;if(o<=Number.EPSILON){let u=1-e;return this._w=u*s+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,a),c=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=s*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=2*(s*i-a*n),h=2*(a*e-r*i),c=2*(r*n-s*e);return this.x=e+o*l+s*c-a*h,this.y=n+o*h+a*l-r*c,this.z=i+o*c+r*h-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:r}=t,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yl.copy(this).projectOnVector(t),this.sub(yl)}reflect(t){return this.sub(yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=2*Math.random()-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var yl=new T,xu=new me;class Ut{constructor(t,e,n,i,r,s,a,o,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,o,l)}set(t,e,n,i,r,s,a,o,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=o,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],h=n[4],c=n[7],d=n[2],u=n[5],p=n[8],_=i[0],m=i[3],f=i[6],v=i[1],y=i[4],g=i[7],S=i[2],C=i[5],A=i[8];return r[0]=s*_+a*v+o*S,r[3]=s*m+a*y+o*C,r[6]=s*f+a*g+o*A,r[1]=l*_+h*v+c*S,r[4]=l*m+h*y+c*C,r[7]=l*f+h*g+c*A,r[2]=d*_+u*v+p*S,r[5]=d*m+u*y+p*C,r[8]=d*f+u*g+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8];return e*s*h-e*a*l-n*r*h+n*a*o+i*r*l-i*s*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8],c=h*s-a*l,d=a*o-h*r,u=l*r-s*o,p=e*c+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=c*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*s)*_,t[3]=d*_,t[4]=(h*e-i*o)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*o-l*e)*_,t[8]=(s*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){let o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ml.makeScale(t,e)),this}rotate(t){return this.premultiply(Ml.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Ml=new Ut;function Xh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ur(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function op(){let t=Ur("canvas");return t.style.display="block",t}var Tu={};function Yi(t){t in Tu||(Tu[t]=!0,console.warn(t))}function lp(t,e,n){return new Promise(function(i,r){setTimeout(function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}},n)})}var Eu=new Ut().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),wu=new Ut().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function mm(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a?(this.spaces[s].transfer==="srgb"&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b)),r):r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?"linear":this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Eu,fromXYZ:wu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var kt=mm();function Wn(t){return t<0.04045?0.0773993808*t:Math.pow(0.9478672986*t+0.0521327014,2.4)}function Pr(t){return t<0.0031308?12.92*t:1.055*Math.pow(t,0.41666)-0.055}var fr;class qh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fr===void 0&&(fr=Ur("canvas")),fr.width=t.width,fr.height=t.height;let i=fr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=255*Wn(r[s]/255);return n.putImageData(i,0,0),e}if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(255*Wn(e[n]/255)):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var gm=0;class Ds{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=an(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Sl(i[s].image)):r.push(Sl(i[s]))}else r=Sl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Sl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _m=0,xl=new T;class he extends Qn{constructor(t=he.DEFAULT_IMAGE,e=he.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=he.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=an(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n:console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`)}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}he.DEFAULT_IMAGE=null,he.DEFAULT_MAPPING=300,he.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<0.0001?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,s=0.01,a=0.1,o=t.elements,l=o[0],h=o[4],c=o[8],d=o[1],u=o[5],p=o[9],_=o[2],m=o[6],f=o[10];if(Math.abs(h-d)<0.01&&Math.abs(c-_)<0.01&&Math.abs(p-m)<0.01){if(Math.abs(h+d)<0.1&&Math.abs(c+_)<0.1&&Math.abs(p+m)<0.1&&Math.abs(l+u+f-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,g=(u+1)/2,S=(f+1)/2,C=(h+d)/4,A=(c+_)/4,L=(p+m)/4;return y>g&&y>S?y<0.01?(n=0,i=0.707106781,r=0.707106781):(n=Math.sqrt(y),i=C/n,r=A/n):g>S?g<0.01?(n=0.707106781,i=0,r=0.707106781):(i=Math.sqrt(g),n=C/i,r=L/i):S<0.01?(n=0.707106781,i=0.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=L/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(c-_)*(c-_)+(d-h)*(d-h));return Math.abs(v)<0.001&&(v=1),this.x=(m-p)/v,this.y=(c-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this.w=Nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this.w=Nt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yh extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new he(i);this.textures=[];let s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Yh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lo extends he{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zh extends he{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,pn):pn.fromBufferAttribute(r,s),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}let i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),aa.subVectors(this.max,hs),mr.subVectors(t.a,hs),gr.subVectors(t.b,hs),_r.subVectors(t.c,hs),ui.subVectors(gr,mr),di.subVectors(_r,gr),Gi.subVectors(mr,_r);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Gi.z,Gi.y,ui.z,0,-ui.x,di.z,0,-di.x,Gi.z,0,-Gi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Gi.y,Gi.x,0];return!!Tl(e,mr,gr,_r,aa)&&(e=[1,0,0,0,1,0,0,0,1],!!Tl(e,mr,gr,_r,aa)&&(oa.crossVectors(ui,di),e=[oa.x,oa.y,oa.z],Tl(e,mr,gr,_r,aa)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=0.5*this.getSize(pn).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var On=[new T,new T,new T,new T,new T,new T,new T,new T],pn=new T,sa=new Ue,mr=new T,gr=new T,_r=new T,ui=new T,di=new T,Gi=new T,hs=new T,aa=new T,oa=new T,ki=new T;function Tl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ki.fromArray(t,s);let o=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=e.dot(ki),h=n.dot(ki),c=i.dot(ki);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var vm=new Ue,cs=new T,El=new T;class We{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=0.5*(n-this.radius);this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(El.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(El)),this.expandByPoint(cs.copy(t.center).sub(El))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Bn=new T,wl=new T,la=new T,pi=new T,bl=new T,ha=new T,Al=new T;class kr{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wl.copy(t).add(e).multiplyScalar(0.5),la.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(wl);let r=0.5*t.distanceTo(e),s=-this.direction.dot(la),a=pi.dot(this.direction),o=-pi.dot(la),l=pi.lengthSq(),h=Math.abs(1-s*s),c,d,u,p;if(h>0)if(c=s*o-a,d=s*a-o,p=r*h,c>=0)if(d>=-p)if(d<=p){let _=1/h;c*=_,d*=_,u=c*(c+s*d+2*a)+d*(s*c+d+2*o)+l}else d=r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;else d=-r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-s*r+a)),d=c>0?-r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(c=Math.max(0,-(s*r+a)),d=c>0?r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l);else d=s>0?-r:r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(wl).addScaledVector(la,d),u}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(i>r)return null;let s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return!(t.radius<0)&&this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,s=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,s=(t.min.y-d.y)*h),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),c>=0?(a=(t.min.z-d.z)*c,o=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,o=(t.min.z-d.z)*c),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,r){bl.subVectors(e,t),ha.subVectors(n,t),Al.crossVectors(bl,ha);let s,a=this.direction.dot(Al);if(a>0){if(i)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}pi.subVectors(this.origin,t);let o=s*this.direction.dot(ha.crossVectors(pi,ha));if(o<0)return null;let l=s*this.direction.dot(bl.cross(pi));if(l<0)return null;if(o+l>a)return null;let h=-s*pi.dot(Al);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(t,e,n,i,r,s,a,o,l,h,c,d,u,p,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,o,l,h,c,d,u,p,_,m)}set(t,e,n,i,r,s,a,o,l,h,c,d,u,p,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=h,f[10]=c,f[14]=d,f[3]=u,f[7]=p,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/vr.setFromMatrixColumn(t,0).length(),r=1/vr.setFromMatrixColumn(t,1).length(),s=1/vr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),h=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let d=s*h,u=s*c,p=a*h,_=a*c;e[0]=o*h,e[4]=-o*c,e[8]=l,e[1]=u+p*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=p+u*l,e[10]=s*o}else if(t.order==="YXZ"){let d=o*h,u=o*c,p=l*h,_=l*c;e[0]=d+_*a,e[4]=p*a-u,e[8]=s*l,e[1]=s*c,e[5]=s*h,e[9]=-a,e[2]=u*a-p,e[6]=_+d*a,e[10]=s*o}else if(t.order==="ZXY"){let d=o*h,u=o*c,p=l*h,_=l*c;e[0]=d-_*a,e[4]=-s*c,e[8]=p+u*a,e[1]=u+p*a,e[5]=s*h,e[9]=_-d*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(t.order==="ZYX"){let d=s*h,u=s*c,p=a*h,_=a*c;e[0]=o*h,e[4]=p*l-u,e[8]=d*l+_,e[1]=o*c,e[5]=_*l+d,e[9]=u*l-p,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(t.order==="YZX"){let d=s*o,u=s*l,p=a*o,_=a*l;e[0]=o*h,e[4]=_-d*c,e[8]=p*c+u,e[1]=c,e[5]=s*h,e[9]=-a*h,e[2]=-l*h,e[6]=u*c+p,e[10]=d-_*c}else if(t.order==="XZY"){let d=s*o,u=s*l,p=a*o,_=a*l;e[0]=o*h,e[4]=-c,e[8]=l*h,e[1]=d*c+_,e[5]=s*h,e[9]=u*c-p,e[2]=p*c-u,e[6]=a*h,e[10]=_*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ym,t,Mm)}lookAt(t,e,n){let i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),fi.crossVectors(n,qe),fi.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=0.0001:qe.z+=0.0001,qe.normalize(),fi.crossVectors(n,qe)),fi.normalize(),ca.crossVectors(qe,fi),i[0]=fi.x,i[4]=ca.x,i[8]=qe.x,i[1]=fi.y,i[5]=ca.y,i[9]=qe.y,i[2]=fi.z,i[6]=ca.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],h=n[1],c=n[5],d=n[9],u=n[13],p=n[2],_=n[6],m=n[10],f=n[14],v=n[3],y=n[7],g=n[11],S=n[15],C=i[0],A=i[4],L=i[8],V=i[12],P=i[1],D=i[5],B=i[9],X=i[13],K=i[2],k=i[6],$=i[10],G=i[14],q=i[3],Z=i[7],ht=i[11],ft=i[15];return r[0]=s*C+a*P+o*K+l*q,r[4]=s*A+a*D+o*k+l*Z,r[8]=s*L+a*B+o*$+l*ht,r[12]=s*V+a*X+o*G+l*ft,r[1]=h*C+c*P+d*K+u*q,r[5]=h*A+c*D+d*k+u*Z,r[9]=h*L+c*B+d*$+u*ht,r[13]=h*V+c*X+d*G+u*ft,r[2]=p*C+_*P+m*K+f*q,r[6]=p*A+_*D+m*k+f*Z,r[10]=p*L+_*B+m*$+f*ht,r[14]=p*V+_*X+m*G+f*ft,r[3]=v*C+y*P+g*K+S*q,r[7]=v*A+y*D+g*k+S*Z,r[11]=v*L+y*B+g*$+S*ht,r[15]=v*V+y*X+g*G+S*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],h=t[2],c=t[6],d=t[10],u=t[14];return t[3]*(+r*o*c-i*l*c-r*a*d+n*l*d+i*a*u-n*o*u)+t[7]*(+e*o*u-e*l*d+r*s*d-i*s*u+i*l*h-r*o*h)+t[11]*(+e*l*c-e*a*u-r*s*c+n*s*u+r*a*h-n*l*h)+t[15]*(-i*a*h-e*o*c+e*a*d+i*s*c-n*s*d+n*o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8],c=t[9],d=t[10],u=t[11],p=t[12],_=t[13],m=t[14],f=t[15],v=c*m*l-_*d*l+_*o*u-a*m*u-c*o*f+a*d*f,y=p*d*l-h*m*l-p*o*u+s*m*u+h*o*f-s*d*f,g=h*_*l-p*c*l+p*a*u-s*_*u-h*a*f+s*c*f,S=p*c*o-h*_*o-p*a*d+s*_*d+h*a*m-s*c*m,C=e*v+n*y+i*g+r*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return t[0]=v*A,t[1]=(_*d*r-c*m*r-_*i*u+n*m*u+c*i*f-n*d*f)*A,t[2]=(a*m*r-_*o*r+_*i*l-n*m*l-a*i*f+n*o*f)*A,t[3]=(c*o*r-a*d*r-c*i*l+n*d*l+a*i*u-n*o*u)*A,t[4]=y*A,t[5]=(h*m*r-p*d*r+p*i*u-e*m*u-h*i*f+e*d*f)*A,t[6]=(p*o*r-s*m*r-p*i*l+e*m*l+s*i*f-e*o*f)*A,t[7]=(s*d*r-h*o*r+h*i*l-e*d*l-s*i*u+e*o*u)*A,t[8]=g*A,t[9]=(p*c*r-h*_*r-p*n*u+e*_*u+h*n*f-e*c*f)*A,t[10]=(s*_*r-p*a*r+p*n*l-e*_*l-s*n*f+e*a*f)*A,t[11]=(h*a*r-s*c*r-h*n*l+e*c*l+s*n*u-e*a*u)*A,t[12]=S*A,t[13]=(h*_*i-p*c*i+p*n*d-e*_*d-h*n*m+e*c*m)*A,t[14]=(p*a*i-s*_*i-p*n*o+e*_*o+s*n*m-e*a*m)*A,t[15]=(s*c*i-h*a*i+h*n*o-e*c*o-s*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,h=r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,h*a+n,h*o-i*s,0,l*o-i*a,h*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,h=s+s,c=a+a,d=r*l,u=r*h,p=r*c,_=s*h,m=s*c,f=a*c,v=o*l,y=o*h,g=o*c,S=n.x,C=n.y,A=n.z;return i[0]=(1-(_+f))*S,i[1]=(u+g)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(u-g)*C,i[5]=(1-(d+f))*C,i[6]=(m+v)*C,i[7]=0,i[8]=(p+y)*A,i[9]=(m-v)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=vr.set(i[0],i[1],i[2]).length(),s=vr.set(i[4],i[5],i[6]).length(),a=vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);let o=1/r,l=1/s,h=1/a;return fn.elements[0]*=o,fn.elements[1]*=o,fn.elements[2]*=o,fn.elements[4]*=l,fn.elements[5]*=l,fn.elements[6]*=l,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=2000,o=!1){let l=this.elements,h=2*r/(e-t),c=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,_;if(o)p=r/(s-r),_=s*r/(s-r);else if(a===2000)p=-(s+r)/(s-r),_=-2*s*r/(s-r);else{if(a!==2001)throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);p=-s/(s-r),_=-s*r/(s-r)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=2000,o=!1){let l=this.elements,h=2/(e-t),c=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,_;if(o)p=1/(s-r),_=s/(s-r);else if(a===2000)p=-2/(s-r),_=-(s+r)/(s-r);else{if(a!==2001)throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);p=-1/(s-r),_=-r/(s-r)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=c,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var vr=new T,fn=new wt,ym=new T(0,0,0),Mm=new T(1,1,1),fi=new T,ca=new T,qe=new T,bu=new wt,Au=new me;class Ge{constructor(t=0,e=0,n=0,i=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],h=i[9],c=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<0.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<0.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<0.9999999?(this._y=Math.atan2(-c,u),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Nt(c,-1,1)),Math.abs(c)<0.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Nt(o,-1,1)),Math.abs(o)<0.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Nt(s,-1,1)),Math.abs(s)<0.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Au.setFromEuler(this),this.setFromQuaternion(Au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return!!(this.mask&1<<t)}}var Sm=0,Ru=new T,yr=new me,zn=new wt,ua=new T,us=new T,xm=new T,Tm=new me,Cu=new T(1,0,0),Iu=new T(0,1,0),Lu=new T(0,0,1),Pu={type:"added"},Em={type:"removed"},Mr={type:"childadded",child:null},Rl={type:"childremoved",child:null};class te extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=te.DEFAULT_UP.clone();let t=new T,e=new Ge,n=new me,i=new T(1,1,1);e._onChange(function(){n.setFromEuler(e,!1)}),n._onChange(function(){e.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ut}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Lu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(us,ua,this.up):zn.lookAt(ua,us,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),yr.setFromRotationMatrix(zn),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),Rl.child=t,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pu),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,xm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,h=o.length;l<h;l++){let c=o[l];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(t.materials,this.material[o]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(r(t.animations,o))}}if(e){let a=s(t.geometries),o=s(t.materials),l=s(t.textures),h=s(t.images),c=s(t.shapes),d=s(t.skeletons),u=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function s(a){let o=[];for(let l in a){let h=a[l];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}te.DEFAULT_UP=new T(0,1,0),te.DEFAULT_MATRIX_AUTO_UPDATE=!0,te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new T,Vn=new T,Cl=new T,Hn=new T,Sr=new T,xr=new T,Uu=new T,Il=new T,Ll=new T,Pl=new T,Ul=new Zt,Nl=new Zt,Dl=new Zt;class He{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){mn.subVectors(i,e),Vn.subVectors(n,e),Cl.subVectors(t,e);let s=mn.dot(mn),a=mn.dot(Vn),o=mn.dot(Cl),l=Vn.dot(Vn),h=Vn.dot(Cl),c=s*l-a*a;if(c===0)return r.set(0,0,0),null;let d=1/c,u=(l*o-a*h)*d,p=(s*h-a*o)*d;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)!==null&&(Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1)}static getInterpolation(t,e,n,i,r,s,a,o){return this.getBarycoord(t,e,n,i,Hn)===null?(o.x=0,o.y=0,("z"in o)&&(o.z=0),("w"in o)&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Hn.x),o.addScaledVector(s,Hn.y),o.addScaledVector(a,Hn.z),o)}static getInterpolatedAttribute(t,e,n,i,r,s){return Ul.setScalar(0),Nl.setScalar(0),Dl.setScalar(0),Ul.fromBufferAttribute(t,e),Nl.fromBufferAttribute(t,n),Dl.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(Ul,r.x),s.addScaledVector(Nl,r.y),s.addScaledVector(Dl,r.z),s}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),Vn.subVectors(t,e),mn.cross(Vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),0.5*mn.cross(Vn).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,s,a;Sr.subVectors(i,n),xr.subVectors(r,n),Il.subVectors(t,n);let o=Sr.dot(Il),l=xr.dot(Il);if(o<=0&&l<=0)return e.copy(n);Ll.subVectors(t,i);let h=Sr.dot(Ll),c=xr.dot(Ll);if(h>=0&&c<=h)return e.copy(i);let d=o*c-h*l;if(d<=0&&o>=0&&h<=0)return s=o/(o-h),e.copy(n).addScaledVector(Sr,s);Pl.subVectors(t,r);let u=Sr.dot(Pl),p=xr.dot(Pl);if(p>=0&&u<=p)return e.copy(r);let _=u*l-o*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(xr,a);let m=h*p-u*c;if(m<=0&&c-h>=0&&u-p>=0)return Uu.subVectors(r,i),a=(c-h)/(c-h+(u-p)),e.copy(i).addScaledVector(Uu,a);let f=1/(m+_+d);return s=_*f,a=d*f,e.copy(n).addScaledVector(Sr,s).addScaledVector(xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Fl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<0.16666666666666666?t+6*(e-t)*n:n<0.5?e:n<0.6666666666666666?t+6*(e-t)*(0.6666666666666666-n):t}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=kt.workingColorSpace){if(t=$l(t,1),e=Nt(e,0,1),n=Nt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=0.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Fl(s,r,t+0.3333333333333333),this.g=Fl(s,r,t),this.b=Fl(s,r,t-0.3333333333333333)}return kt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=hp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Pr(t.r),this.g=Pr(t.g),this.b=Pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return kt.workingToColorSpace(Pe.copy(this),t),65536*Math.round(Nt(255*Pe.r,0,255))+256*Math.round(Nt(255*Pe.g,0,255))+Math.round(Nt(255*Pe.b,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(Pe.copy(this),e);let{r:n,g:i,b:r}=Pe,s=Math.max(n,i,r),a=Math.min(n,i,r),o,l,h=(a+s)/2;if(a===s)o=0,l=0;else{let c=s-a;switch(l=h<=0.5?c/(s+a):c/(2-s-a),s){case n:o=(i-r)/c+(i<r?6:0);break;case i:o=(r-n)/c+2;break;case r:o=(n-i)/c+4}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t="srgb"){kt.workingToColorSpace(Pe.copy(this),t);let{r:e,g:n,b:i}=Pe;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(da);let n=Ss(mi.h,da.h,e),i=Ss(mi.s,da.s,e),r=Ss(mi.l,da.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Pe=new vt;vt.NAMES=hp;var wm=0;class ze extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=an(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(r){let s=[];for(let a in r){let o=r[a];delete o.metadata,s.push(o)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ae extends ze{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var U_=bm();function bm(){let t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,r[l]=-h-1,r[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,r[l]=13,r[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var fe=new T,pa=new st,Am=0;class ae{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Am++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pa.fromBufferAttribute(this,e),pa.applyMatrix3(t),this.setXY(e,pa.x,pa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class co extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uo extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class bt extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Rm=0,sn=new wt,Ol=new te,Tr=new T,Ye=new Ue,ds=new Ue,Te=new T;class Jt extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new((Xh(t))?uo:co)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Ol.lookAt(t),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new We);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let a=e[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ye.min,ds.min),Ye.expandByPoint(Te),Te.addVectors(Ye.max,ds.max),Ye.expandByPoint(Te)):(Ye.expandByPoint(ds.min),Ye.expandByPoint(ds.max))}Ye.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,s=e.length;r<s;r++){let a=e[r],o=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Te.fromBufferAttribute(a,l),o&&(Tr.fromBufferAttribute(t,l),Te.add(Tr)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let{position:n,normal:i,uv:r}=e;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),a=[],o=[];for(let L=0;L<n.count;L++)a[L]=new T,o[L]=new T;let l=new T,h=new T,c=new T,d=new st,u=new st,p=new st,_=new T,m=new T;function f(L,V,P){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,V),c.fromBufferAttribute(n,P),d.fromBufferAttribute(r,L),u.fromBufferAttribute(r,V),p.fromBufferAttribute(r,P),h.sub(l),c.sub(l),u.sub(d),p.sub(d);let D=1/(u.x*p.y-p.x*u.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(c,-u.y).multiplyScalar(D),m.copy(c).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(D),a[L].add(_),a[V].add(_),a[P].add(_),o[L].add(m),o[V].add(m),o[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,V=v.length;L<V;++L){let P=v[L],D=P.start;for(let B=D,X=D+P.count;B<X;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let y=new T,g=new T,S=new T,C=new T;function A(L){S.fromBufferAttribute(i,L),C.copy(S);let V=a[L];y.copy(V),y.sub(S.multiplyScalar(S.dot(V))).normalize(),g.crossVectors(C,V);let P=g.dot(o[L])<0?-1:1;s.setXYZW(L,y.x,y.y,y.z,P)}for(let L=0,V=v.length;L<V;++L){let P=v[L],D=P.start;for(let B=D,X=D+P.count;B<X;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,s=new T,a=new T,o=new T,l=new T,h=new T,c=new T;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,m),h.subVectors(s,r),c.subVectors(i,r),h.cross(c),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),o.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),h.subVectors(s,r),c.subVectors(i,r),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:h,normalized:c}=a,d=new l.constructor(o.length*h),u=0,p=0;for(let _=0,m=o.length;_<m;_++){u=a.isInterleavedBufferAttribute?o[_]*a.data.stride+a.offset:o[_]*h;for(let f=0;f<h;f++)d[p++]=l[u++]}return new ae(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Jt,n=this.index.array,i=this.attributes;for(let a in i){let o=t(i[a],n);e.setAttribute(a,o)}let r=this.morphAttributes;for(let a in r){let o=[],l=r[a];for(let h=0,c=l.length;h<c;h++){let d=t(l[h],n);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,o=s.length;a<o;a++){let l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},r=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],h=[];for(let c=0,d=l.length;c<d;c++){let u=l[c];h.push(u.toJSON(t.data))}h.length>0&&(i[o]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],c=r[l];for(let d=0,u=c.length;d<u;d++)h.push(c[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let l=0,h=s.length;l<h;l++){let c=s[l];this.addGroup(c.start,c.count,c.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Nu=new wt,Wi=new kr,fa=new We,Du=new T,ma=new T,ga=new T,_a=new T,Bl=new T,va=new T,Fu=new T,ya=new T;class ce extends te{constructor(t=new Jt,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let h=a[o],c=r[o];h!==0&&(Bl.fromBufferAttribute(c,t),s?va.addScaledVector(Bl,h):va.addScaledVector(Bl.sub(e),h))}e.add(va)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),fa.containsPoint(Wi.origin)===!1){if(Wi.intersectSphere(fa,Du)===null)return;if(Wi.origin.distanceToSquared(Du)>(t.far-t.near)**2)return}Nu.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Nu),n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(t,e,Wi)}}_computeIntersections(t,e,n){let i,r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){let m=d[p],f=s[m.materialIndex];for(let v=Math.max(m.start,u.start),y=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));v<y;v+=3)i=Ma(this,f,t,n,l,h,c,a.getX(v),a.getX(v+1),a.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}else for(let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);p<_;p+=3)i=Ma(this,s,t,n,l,h,c,a.getX(p),a.getX(p+1),a.getX(p+2)),i&&(i.faceIndex=Math.floor(p/3),e.push(i));else if(o!==void 0)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){let m=d[p],f=s[m.materialIndex];for(let v=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));v<y;v+=3)i=Ma(this,f,t,n,l,h,c,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}else for(let p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);p<_;p+=3)i=Ma(this,s,t,n,l,h,c,p,p+1,p+2),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}function Ma(t,e,n,i,r,s,a,o,l,h){t.getVertexPosition(o,ma),t.getVertexPosition(l,ga),t.getVertexPosition(h,_a);let c=function(d,u,p,_,m,f,v,y){let g;if(g=u.side===1?_.intersectTriangle(v,f,m,!0,y):_.intersectTriangle(m,f,v,u.side===0,y),g===null)return null;ya.copy(y),ya.applyMatrix4(d.matrixWorld);let S=p.ray.origin.distanceTo(ya);return S<p.near||S>p.far?null:{distance:S,point:ya.clone(),object:d}}(t,e,n,i,ma,ga,_a,Fu);if(c){let d=new T;He.getBarycoord(Fu,ma,ga,_a,d),r&&(c.uv=He.getInterpolatedAttribute(r,o,l,h,d,new st)),s&&(c.uv1=He.getInterpolatedAttribute(s,o,l,h,d,new st)),a&&(c.normal=He.getInterpolatedAttribute(a,o,l,h,d,new T),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new T,materialIndex:0};He.getNormal(ma,ga,_a,u.normal),c.face=u,c.barycoord=d}return c}class ei extends Jt{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let o=[],l=[],h=[],c=[],d=0,u=0;function p(_,m,f,v,y,g,S,C,A,L,V){let P=g/A,D=S/L,B=g/2,X=S/2,K=C/2,k=A+1,$=L+1,G=0,q=0,Z=new T;for(let ht=0;ht<$;ht++){let ft=ht*D-X;for(let Q=0;Q<k;Q++){let J=Q*P-B;Z[_]=J*v,Z[m]=ft*y,Z[f]=K,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[f]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),c.push(Q/A),c.push(1-ht/L),G+=1}}for(let ht=0;ht<L;ht++)for(let ft=0;ft<A;ft++){let Q=d+ft+k*ht,J=d+ft+k*(ht+1),mt=d+(ft+1)+k*(ht+1),ot=d+(ft+1)+k*ht;o.push(Q,J,ot),o.push(J,mt,ot),q+=6}a.addGroup(u,q,V),u+=q,d+=G}p("z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ne(t){let e={};for(let n=0;n<t.length;n++){let i=Qi(t[n]);for(let r in i)e[r]=i[r]}return e}function Jh(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}var cp={clone:Qi,merge:Ne};class An extends ze{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=function(e){let n=[];for(let i=0;i<e.length;i++)n.push(e[i].clone());return n}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fs extends te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var gi=new T,Ou=new st,Bu=new st;class _e extends Fs{constructor(t=50,e=1,n=0.1,i=2000){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=2*qi*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(0.5*Lr*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*qi*Math.atan(Math.tan(0.5*Lr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Ou,Bu),e.subVectors(Bu,Ou)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(0.5*Lr*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-0.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=s;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var Er=-90;class jh extends te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _e(Er,1,t,e);i.layers=this.layers,this.add(i);let r=new _e(Er,1,t,e);r.layers=this.layers,this.add(r);let s=new _e(Er,1,t,e);s.layers=this.layers,this.add(s);let a=new _e(Er,1,t,e);a.layers=this.layers,this.add(a);let o=new _e(Er,1,t,e);o.layers=this.layers,this.add(o);let l=new _e(Er,1,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else{if(t!==2001)throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1)}for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,s,a,o,l,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(c,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class po extends he{constructor(t=[],e=301,n,i,r,s,a,o,l,h){super(t,e,n,i,r,s,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kh extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new po(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ei(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;let s=new ce(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new jh(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}class Ze extends te{constructor(){super(),this.isGroup=!0,this.type="Group"}}var Cm={type:"move"};class Os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=0.02,p=0.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class fo extends te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wr{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var Oe=new T;class yi{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xr extends ze{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var wr,ps=new T,br=new T,Ar=new T,Rr=new st,fs=new st,up=new wt,Sa=new T,ms=new T,xa=new T,zu=new st,zl=new st,Vu=new st;class Bs extends te{constructor(t=new Xr){if(super(),this.isSprite=!0,this.type="Sprite",wr===void 0){wr=new Jt;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new Wr(e,5);wr.setIndex([0,1,2,0,2,3]),wr.setAttribute("position",new yi(n,3,0,!1)),wr.setAttribute("uv",new yi(n,2,3,!1))}this.geometry=wr,this.material=t,this.center=new st(0.5,0.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),br.setFromMatrixScale(this.matrixWorld),up.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&br.multiplyScalar(-Ar.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let s=this.center;Ta(Sa.set(-0.5,-0.5,0),Ar,s,br,i,r),Ta(ms.set(0.5,-0.5,0),Ar,s,br,i,r),Ta(xa.set(0.5,0.5,0),Ar,s,br,i,r),zu.set(0,0),zl.set(1,0),Vu.set(1,1);let a=t.ray.intersectTriangle(Sa,ms,xa,!1,ps);if(a===null&&(Ta(ms.set(-0.5,0.5,0),Ar,s,br,i,r),zl.set(0,1),a=t.ray.intersectTriangle(Sa,xa,ms,!1,ps),a===null))return;let o=t.ray.origin.distanceTo(ps);o<t.near||o>t.far||e.push({distance:o,point:ps.clone(),uv:He.getInterpolation(ps,Sa,ms,xa,zu,zl,Vu,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ta(t,e,n,i,r,s){Rr.subVectors(t,n).addScalar(0.5).multiply(i),r!==void 0?(fs.x=s*Rr.x-r*Rr.y,fs.y=r*Rr.x+s*Rr.y):fs.copy(Rr),t.copy(e),t.x+=fs.x,t.y+=fs.y,t.applyMatrix4(up)}var N_=new T,D_=new T;var Hu=new T,Gu=new Zt,ku=new Zt,Im=new T,Wu=new wt,Ea=new T,Vl=new We,Xu=new wt,Hl=new kr;class mo extends ce{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ue),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ea),this.boundingBox.expandByPoint(Ea)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new We),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ea),this.boundingSphere.expandByPoint(Ea)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vl.copy(this.boundingSphere),Vl.applyMatrix4(i),t.ray.intersectsSphere(Vl)!==!1&&(Xu.copy(i).invert(),Hl.copy(t.ray).applyMatrix4(Xu),this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1||this._computeIntersections(t,e,Hl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Zt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Gu.fromBufferAttribute(i.attributes.skinIndex,t),ku.fromBufferAttribute(i.attributes.skinWeight,t),Hu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=ku.getComponent(r);if(s!==0){let a=Gu.getComponent(r);Wu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Im.copy(Hu).applyMatrix4(Wu),s)}}return e.applyMatrix4(this.bindMatrixInverse)}}class zs extends te{constructor(){super(),this.isBone=!0,this.type="Bone"}}class go extends he{constructor(t=null,e=1,n=1,i,r,s,a,o,l=1003,h=1003,c,d){super(null,s,a,o,l,h,i,r,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var qu=new wt,Lm=new wt;class Vs{constructor(t=[],e=[]){this.uuid=an(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new wt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){let a=t[r]?t[r].matrixWorld:Lm;qu.multiplyMatrices(a,e[r]),qu.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vs(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=4*Math.ceil(t/4),t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new go(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new zs),this.bones.push(s),this.boneInverses.push(new wt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.bones.push(s.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}}class Zi extends ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var Cr=new wt,Yu=new wt,wa=[],Zu=new Ue,Pm=new wt,gs=new ce,_s=new We;class _o extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),Zu.copy(t.boundingBox).applyMatrix4(Cr),this.boundingBox.union(Zu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new We),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),_s.copy(t.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=t*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=i[r+s]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Cr),Yu.multiplyMatrices(n,Cr),gs.matrixWorld=Yu,gs.raycast(t,wa);for(let s=0,a=wa.length;s<a;s++){let o=wa[s];o.instanceId=r,o.object=this,e.push(o)}wa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new go(new Float32Array(i*this.count),i,this.count,1028,1015));let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<n.length;l++)s+=n[l];let a=this.geometry.morphTargetsRelative?1:1-s,o=i*t;r[o]=a,r.set(n,o+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}var Gl=new T,Um=new T,Nm=new Ut;class kn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Gl.subVectors(n,e).cross(Um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nm.getNormalMatrix(t),i=this.coplanarPoint(Gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var Xi=new We,Dm=new st(0.5,0.5),ba=new T;class tr{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,s=new kn){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],h=r[4],c=r[5],d=r[6],u=r[7],p=r[8],_=r[9],m=r[10],f=r[11],v=r[12],y=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,u-h,f-p,S-v).normalize(),i[1].setComponents(l+s,u+h,f+p,S+v).normalize(),i[2].setComponents(l+a,u+c,f+_,S+y).normalize(),i[3].setComponents(l-a,u-c,f-_,S-y).normalize(),n)i[4].setComponents(o,d,m,g).normalize(),i[5].setComponents(l-o,u-d,f-m,S-g).normalize();else if(i[4].setComponents(l-o,u-d,f-m,S-g).normalize(),e===2000)i[5].setComponents(l+o,u+d,f+m,S+g).normalize();else{if(e!==2001)throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(o,d,m,g).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=Dm.distanceTo(t.center);return Xi.radius=0.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ba.x=i.normal.x>0?t.max.x:t.min.x,ba.y=i.normal.y>0?t.max.y:t.min.y,ba.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var Mn=new wt,Sn=new tr;class vo{constructor(){this.coordinateSystem=2000}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(Mn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Sn.setFromProjectionMatrix(Mn,i.coordinateSystem,i.reversedDepth),Sn.containsPoint(t))return!0}return!1}clone(){return new vo}}class dp{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];s.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}var F_=new wt,O_=new vt(1,1,1),B_=new tr,z_=new vo,V_=new Ue,H_=new We,G_=new T,k_=new T,W_=new T,X_=new dp,q_=new ce;class er extends ze{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var Ba=new T,za=new T,Ju=new wt,vs=new kr,Aa=new We,kl=new T,ju=new T;class qr extends te{constructor(t=new Jt,e=new er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ba.fromBufferAttribute(e,i-1),za.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ba.distanceTo(za);t.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;Ju.copy(i).invert(),vs.copy(t.ray).applyMatrix4(Ju);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,h=n.index,c=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let p=d,_=u-1;p<_;p+=l){let m=h.getX(p),f=h.getX(p+1),v=Ra(this,t,vs,o,m,f,p);v&&e.push(v)}if(this.isLineLoop){let p=h.getX(u-1),_=h.getX(d),m=Ra(this,t,vs,o,p,_,u-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let p=d,_=u-1;p<_;p+=l){let m=Ra(this,t,vs,o,p,p+1,p);m&&e.push(m)}if(this.isLineLoop){let p=Ra(this,t,vs,o,u-1,d,u-1);p&&e.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function Ra(t,e,n,i,r,s,a){let o=t.geometry.attributes.position;if(Ba.fromBufferAttribute(o,r),za.fromBufferAttribute(o,s),n.distanceSqToSegment(Ba,za,kl,ju)>i)return;kl.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(kl);return l<e.near||l>e.far?void 0:{distance:l,point:ju.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var Ku=new T,$u=new T;class Yr extends qr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Ku.fromBufferAttribute(e,i),$u.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ku.distanceTo($u);t.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yo extends qr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ti extends ze{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Qu=new wt,Ql=new kr,Ca=new We,Ia=new T;class nr extends te{constructor(t=new Jt,e=new Ti){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(i),Ca.radius+=r,t.ray.intersectsSphere(Ca)===!1)return;Qu.copy(i).invert(),Ql.copy(t.ray).applyMatrix4(Qu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null)for(let c=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);c<d;c++){let u=l.getX(c);Ia.fromBufferAttribute(h,u),td(Ia,u,o,i,t,e,this)}else for(let c=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);c<d;c++)Ia.fromBufferAttribute(h,c),td(Ia,c,o,i,t,e,this)}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function td(t,e,n,i,r,s,a){let o=Ql.distanceSqToPoint(t);if(o<n){let l=new T;Ql.closestPointToPoint(t,l),l.applyMatrix4(i);let h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Rn extends he{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mo extends he{constructor(t,e,n=1014,i,r,s,a=1003,o=1003,l,h=1026,c=1){if(h!==1026&&h!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:c},i,r,s,a,o,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class So extends Jt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],a=[],o=[],l=[],h=e/2,c=Math.PI/2*t,d=e,u=2*c+d,p=2*n+r,_=i+1,m=new T,f=new T;for(let v=0;v<=p;v++){let y=0,g=0,S=0,C=0;if(v<=n){let V=v/n,P=V*Math.PI/2;g=-h-t*Math.cos(P),S=t*Math.sin(P),C=-t*Math.cos(P),y=V*c}else if(v<=n+r){let V=(v-n)/r;g=V*e-h,S=t,C=0,y=c+V*d}else{let V=(v-n-r)/n,P=V*Math.PI/2;g=h+t*Math.sin(P),S=t*Math.cos(P),C=t*Math.sin(P),y=c+d+V*c}let A=Math.max(0,Math.min(1,y/u)),L=0;v===0?L=0.5/i:v===p&&(L=-0.5/i);for(let V=0;V<=i;V++){let P=V/i,D=P*Math.PI*2,B=Math.sin(D),X=Math.cos(D);f.x=-S*X,f.y=g,f.z=S*B,a.push(f.x,f.y,f.z),m.set(-S*X,C,S*B),m.normalize(),o.push(m.x,m.y,m.z),l.push(P+L,A)}if(v>0){let V=(v-1)*_;for(let P=0;P<i;P++){let D=V+P,B=V+P+1,X=v*_+P,K=v*_+P+1;s.push(D,B,X),s.push(B,K,X)}}}this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new So(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class xo extends Jt{constructor(t=1,e=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],s=[],a=[],o=[],l=new T,h=new st;s.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let c=0,d=3;c<=e;c++,d+=3){let u=n+c/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(s[d]/t+1)/2,h.y=(s[d+1]/t+1)/2,o.push(h.x,h.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Hs extends Jt{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],c=[],d=[],u=[],p=0,_=[],m=n/2,f=0;function v(y){let g=p,S=new st,C=new T,A=0,L=y===!0?t:e,V=y===!0?1:-1;for(let D=1;D<=i;D++)c.push(0,m*V,0),d.push(0,V,0),u.push(0.5,0.5),p++;let P=p;for(let D=0;D<=i;D++){let B=D/i*o+a,X=Math.cos(B),K=Math.sin(B);C.x=L*K,C.y=m*V,C.z=L*X,c.push(C.x,C.y,C.z),d.push(0,V,0),S.x=0.5*X+0.5,S.y=0.5*K*V+0.5,u.push(S.x,S.y),p++}for(let D=0;D<i;D++){let B=g+D,X=P+D;y===!0?h.push(X,X+1,B):h.push(X+1,X,B),A+=3}l.addGroup(f,A,y===!0?1:2),f+=A}(function(){let y=new T,g=new T,S=0,C=(e-t)/n;for(let A=0;A<=r;A++){let L=[],V=A/r,P=V*(e-t)+t;for(let D=0;D<=i;D++){let B=D/i,X=B*o+a,K=Math.sin(X),k=Math.cos(X);g.x=P*K,g.y=-V*n+m,g.z=P*k,c.push(g.x,g.y,g.z),y.set(K,C,k).normalize(),d.push(y.x,y.y,y.z),u.push(B,1-V),L.push(p++)}_.push(L)}for(let A=0;A<i;A++)for(let L=0;L<r;L++){let V=_[L][A],P=_[L+1][A],D=_[L+1][A+1],B=_[L][A+1];(t>0||L!==0)&&(h.push(V,P,B),S+=3),(e>0||L!==r-1)&&(h.push(P,D,B),S+=3)}l.addGroup(f,S,0),f+=S})(),s===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class To extends Hs{constructor(t=1,e=1,n=32,i=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(t){return new To(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ei extends Jt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],s=[];function a(u,p,_,m){let f=m+1,v=[];for(let y=0;y<=f;y++){v[y]=[];let g=u.clone().lerp(_,y/f),S=p.clone().lerp(_,y/f),C=f-y;for(let A=0;A<=C;A++)v[y][A]=A===0&&y===f?g:g.clone().lerp(S,A/C)}for(let y=0;y<f;y++)for(let g=0;g<2*(f-y)-1;g++){let S=Math.floor(g/2);g%2==0?(o(v[y][S+1]),o(v[y+1][S]),o(v[y][S])):(o(v[y][S+1]),o(v[y+1][S+1]),o(v[y+1][S]))}}function o(u){r.push(u.x,u.y,u.z)}function l(u,p){let _=3*u;p.x=t[_+0],p.y=t[_+1],p.z=t[_+2]}function h(u,p,_,m){m<0&&u.x===1&&(s[p]=u.x-1),_.x===0&&_.z===0&&(s[p]=m/2/Math.PI+0.5)}function c(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let p=new T,_=new T,m=new T;for(let f=0;f<e.length;f+=3)l(e[f+0],p),l(e[f+1],_),l(e[f+2],m),a(p,_,m,u)})(i),function(u){let p=new T;for(let _=0;_<r.length;_+=3)p.x=r[_+0],p.y=r[_+1],p.z=r[_+2],p.normalize().multiplyScalar(u),r[_+0]=p.x,r[_+1]=p.y,r[_+2]=p.z}(n),function(){let u=new T;for(let p=0;p<r.length;p+=3){u.x=r[p+0],u.y=r[p+1],u.z=r[p+2];let _=c(u)/2/Math.PI+0.5,m=d(u)/Math.PI+0.5;s.push(_,1-m)}(function(){let p=new T,_=new T,m=new T,f=new T,v=new st,y=new st,g=new st;for(let S=0,C=0;S<r.length;S+=9,C+=6){p.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),m.set(r[S+6],r[S+7],r[S+8]),v.set(s[C+0],s[C+1]),y.set(s[C+2],s[C+3]),g.set(s[C+4],s[C+5]),f.copy(p).add(_).add(m).divideScalar(3);let A=c(f);h(v,C+0,p,A),h(y,C+2,_,A),h(g,C+4,m,A)}})(),function(){for(let p=0;p<s.length;p+=6){let _=s[p+0],m=s[p+2],f=s[p+4],v=Math.max(_,m,f),y=Math.min(_,m,f);v>0.9&&y<0.1&&(_<0.2&&(s[p+0]+=1),m<0.2&&(s[p+2]+=1),f<0.2&&(s[p+4]+=1))}}()}(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.vertices,t.indices,t.radius,t.details)}}class Eo extends Ei{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Eo(t.radius,t.detail)}}var La=new T,Pa=new T,Wl=new T,Ua=new He;class $h extends Jt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Lr*e),s=t.getIndex(),a=t.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],h=["a","b","c"],c=[,,,],d={},u=[];for(let p=0;p<o;p+=3){s?(l[0]=s.getX(p),l[1]=s.getX(p+1),l[2]=s.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:_,b:m,c:f}=Ua;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),Ua.getNormal(Wl),c[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,c[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,c[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,c[0]!==c[1]&&c[1]!==c[2]&&c[2]!==c[0])for(let v=0;v<3;v++){let y=(v+1)%3,g=c[v],S=c[y],C=Ua[h[v]],A=Ua[h[y]],L=`${g}_${S}`,V=`${S}_${g}`;V in d&&d[V]?(Wl.dot(d[V].normal)<=r&&(u.push(C.x,C.y,C.z),u.push(A.x,A.y,A.z)),d[V]=null):(L in d)||(d[L]={index0:l[v],index1:l[y],normal:Wl.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:m}=d[p];La.fromBufferAttribute(a,_),Pa.fromBufferAttribute(a,m),u.push(La.x,La.y,La.z),u.push(Pa.x,Pa.y,Pa.z)}this.setAttribute("position",new bt(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,s;s=e||t*n[r-1];let a,o=0,l=r-1;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),a=n[i]-s,a<0)o=i+1;else{if(!(a>0)){l=i;break}l=i-1}if(i=l,n[i]===s)return i/(r-1);let h=n[i];return(i+(s-h)/(n[i+1]-h))/(r-1)}getTangent(t,e){let i=t-0.0001,r=t+0.0001;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new st:new T);return o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new T,i=[],r=[],s=[],a=new T,o=new wt;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new T)}r[0]=new T,s[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),c<=l&&(l=c,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Nt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(a,p))}s[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Nt(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(o.makeRotationAxis(i[p],u*p)),s[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Gs extends on{constructor(t=0,e=0,n=1,i=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new st){let n=e,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),this.aClockwise!==!0||s||(r===i?r=-i:r-=i);let a=this.aStartAngle+t*r,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qh extends Gs{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){r(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,d){let u=(a-s)/h-(o-s)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,p*=c,r(a,o,u,p)},calc:function(s){let a=s*s;return t+e*s+n*a+i*(a*s)}}}var Na=new T,Xl=new tc,ql=new tc,Yl=new tc;class ec extends on{constructor(t=[],e=!1,n="centripetal",i=0.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,a,o,l=Math.floor(s),h=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1),this.closed||l>0?a=i[(l-1)%r]:(Na.subVectors(i[0],i[1]).add(i[0]),a=Na);let c=i[l%r],d=i[(l+1)%r];if(this.closed||l+2<r?o=i[(l+2)%r]:(Na.subVectors(i[r-1],i[r-2]).add(i[r-1]),o=Na),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,p=Math.pow(a.distanceToSquared(c),u),_=Math.pow(c.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(o),u);_<0.0001&&(_=1),p<0.0001&&(p=_),m<0.0001&&(m=_),Xl.initNonuniformCatmullRom(a.x,c.x,d.x,o.x,p,_,m),ql.initNonuniformCatmullRom(a.y,c.y,d.y,o.y,p,_,m),Yl.initNonuniformCatmullRom(a.z,c.z,d.z,o.z,p,_,m)}else this.curveType==="catmullrom"&&(Xl.initCatmullRom(a.x,c.x,d.x,o.x,this.tension),ql.initCatmullRom(a.y,c.y,d.y,o.y,this.tension),Yl.initCatmullRom(a.z,c.z,d.z,o.z,this.tension));return n.set(Xl.calc(h),ql.calc(h),Yl.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ed(t,e,n,i,r){let s=0.5*(i-e),a=0.5*(r-n),o=t*t;return(2*n-2*i+s+a)*(t*o)+(-3*n+3*i-2*s-a)*o+s*t+n}function xs(t,e,n,i){return function(r,s){let a=1-r;return a*a*s}(t,e)+function(r,s){return 2*(1-r)*r*s}(t,n)+function(r,s){return r*r*s}(t,i)}function Ts(t,e,n,i,r){return function(s,a){let o=1-s;return o*o*o*a}(t,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(t,n)+function(s,a){return 3*(1-s)*s*s*a}(t,i)+function(s,a){return s*s*s*a}(t,r)}class wo extends on{constructor(t=new st,e=new st,n=new st,i=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Ts(t,i.x,r.x,s.x,a.x),Ts(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nc extends on{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Ts(t,i.x,r.x,s.x,a.x),Ts(t,i.y,r.y,s.y,a.y),Ts(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bo extends on{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ic extends on{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ao extends on{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(xs(t,i.x,r.x,s.x),xs(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ro extends on{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(xs(t,i.x,r.x,s.x),xs(t,i.y,r.y,s.y),xs(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Co extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,o=i[s===0?s:s-1],l=i[s],h=i[s>i.length-2?i.length-1:s+1],c=i[s>i.length-3?i.length-1:s+2];return n.set(ed(a,o.x,l.x,h.x,c.x),ed(a,o.y,l.y,h.y,c.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new st().fromArray(i))}return this}}var Va=Object.freeze({__proto__:null,ArcCurve:Qh,CatmullRomCurve3:ec,CubicBezierCurve:wo,CubicBezierCurve3:nc,EllipseCurve:Gs,LineCurve:bo,LineCurve3:ic,QuadraticBezierCurve:Ao,QuadraticBezierCurve3:Ro,SplineCurve:Co});class rc extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Va[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let s=i[r]-n,a=this.curves[r],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],a=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let l=0;l<o.length;l++){let h=o[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Va[i.type]().fromJSON(i))}return this}}class Ha extends rc{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new bo(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ao(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){let a=new wo(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Co(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,s,a,o),this}absellipse(t,e,n,i,r,s,a,o){let l=new Gs(t,e,n,i,r,s,a,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Io extends Ha{constructor(t){super(t),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ha().fromJSON(i))}return this}}function Fm(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=nd(t,0,r,n,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,h;if(i&&(s=function(c,d,u,p){let _=[];for(let m=0,f=d.length;m<f;m++){let v=nd(c,d[m]*p,m<f-1?d[m+1]*p:c.length,p,!1);v===v.next&&(v.steiner=!0),_.push(Wm(v))}_.sort(Hm);for(let m=0;m<_.length;m++)u=Gm(_[m],u);return u}(t,e,s,n)),t.length>80*n){o=1/0,l=1/0;let c=-1/0,d=-1/0;for(let u=n;u<r;u+=n){let p=t[u],_=t[u+1];p<o&&(o=p),_<l&&(l=_),p>c&&(c=p),_>d&&(d=_)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return Es(s,a,n,o,l,h,0),a}function nd(t,e,n,i,r){let s;if(r===function(a,o,l,h){let c=0;for(let d=o,u=l-h;d<l;d+=h)c+=(a[u]-a[d])*(a[d+1]+a[u+1]),u=d;return c}(t,e,n,i)>0)for(let a=e;a<n;a+=i)s=id(a/i|0,t[a],t[a+1],s);else for(let a=n-i;a>=e;a-=i)s=id(a/i|0,t[a],t[a+1],s);return s&&Nr(s,s.next)&&(bs(s),s=s.next),s}function Ji(t,e){if(!t)return t;e||(e=t);let n,i=t;do if(n=!1,i.steiner||!Nr(i,i.next)&&se(i.prev,i,i.next)!==0)i=i.next;else{if(bs(i),i=e=i.prev,i===i.next)break;n=!0}while(n||i!==e);return e}function Es(t,e,n,i,r,s,a){if(!t)return;!a&&s&&function(l,h,c,d){let u=l;do u.z===0&&(u.z=th(u.x,u.y,h,c,d)),u.prevZ=u.prev,u.nextZ=u.next,u=u.next;while(u!==l);u.prevZ.nextZ=null,u.prevZ=null,function(p){let _,m=1;do{let f,v=p;p=null;let y=null;for(_=0;v;){_++;let g=v,S=0;for(let A=0;A<m&&(S++,g=g.nextZ,g);A++);let C=m;for(;S>0||C>0&&g;)S!==0&&(C===0||!g||v.z<=g.z)?(f=v,v=v.nextZ,S--):(f=g,g=g.nextZ,C--),y?y.nextZ=f:p=f,f.prevZ=y,y=f;v=g}y.nextZ=null,m*=2}while(_>1)}(u)}(t,i,r,s);let o=t;for(;t.prev!==t.next;){let{prev:l,next:h}=t;if(s?Bm(t,i,r,s):Om(t))e.push(l.i,t.i,h.i),bs(t),t=h.next,o=h.next;else if((t=h)===o){a?a===1?Es(t=zm(Ji(t),e),e,n,i,r,s,2):a===2&&Vm(t,e,n,i,r,s):Es(Ji(t),e,n,i,r,s,1);break}}}function Om(t){let e=t.prev,n=t,i=t.next;if(se(e,n,i)>=0)return!1;let r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,h=i.y,c=Math.min(r,s,a),d=Math.min(o,l,h),u=Math.max(r,s,a),p=Math.max(o,l,h),_=i.next;for(;_!==e;){if(_.x>=c&&_.x<=u&&_.y>=d&&_.y<=p&&Ms(r,o,s,l,a,h,_.x,_.y)&&se(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Bm(t,e,n,i){let r=t.prev,s=t,a=t.next;if(se(r,s,a)>=0)return!1;let o=r.x,l=s.x,h=a.x,c=r.y,d=s.y,u=a.y,p=Math.min(o,l,h),_=Math.min(c,d,u),m=Math.max(o,l,h),f=Math.max(c,d,u),v=th(p,_,e,n,i),y=th(m,f,e,n,i),g=t.prevZ,S=t.nextZ;for(;g&&g.z>=v&&S&&S.z<=y;){if(g.x>=p&&g.x<=m&&g.y>=_&&g.y<=f&&g!==r&&g!==a&&Ms(o,c,l,d,h,u,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;if(g=g.prevZ,S.x>=p&&S.x<=m&&S.y>=_&&S.y<=f&&S!==r&&S!==a&&Ms(o,c,l,d,h,u,S.x,S.y)&&se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}for(;g&&g.z>=v;){if(g.x>=p&&g.x<=m&&g.y>=_&&g.y<=f&&g!==r&&g!==a&&Ms(o,c,l,d,h,u,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;S&&S.z<=y;){if(S.x>=p&&S.x<=m&&S.y>=_&&S.y<=f&&S!==r&&S!==a&&Ms(o,c,l,d,h,u,S.x,S.y)&&se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function zm(t,e){let n=t;do{let i=n.prev,r=n.next.next;!Nr(i,r)&&fp(i,n,n.next,r)&&ws(i,r)&&ws(r,i)&&(e.push(i.i,n.i,r.i),bs(n),bs(n.next),n=t=r),n=n.next}while(n!==t);return Ji(n)}function Vm(t,e,n,i,r,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xm(a,o)){let l=mp(a,o);return a=Ji(a,a.next),l=Ji(l,l.next),Es(a,e,n,i,r,s,0),void Es(l,e,n,i,r,s,0)}o=o.next}a=a.next}while(a!==t)}function Hm(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0))n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x);return n}function Gm(t,e){let n=function(r,s){let a=s,o=r.x,l=r.y,h,c=-1/0;if(Nr(r,a))return a;do{if(Nr(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>c&&(c=m,h=a.x<a.next.x?a:a.next,m===o))return h}a=a.next}while(a!==s);if(!h)return null;let d=h,u=h.x,p=h.y,_=1/0;a=h;do{if(o>=a.x&&a.x>=u&&o!==a.x&&pp(l<p?o:c,l,u,p,l<p?c:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);ws(a,r)&&(m<_||m===_&&(a.x>h.x||a.x===h.x&&km(h,a)))&&(h=a,_=m)}a=a.next}while(a!==d);return h}(t,e);if(!n)return e;let i=mp(n,t);return Ji(i,i.next),Ji(n,n.next)}function km(t,e){return se(t.prev,t,e.prev)<0&&se(e.next,t,t.next)<0}function th(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Wm(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function pp(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function Ms(t,e,n,i,r,s,a,o){return!(t===a&&e===o)&&pp(t,e,n,i,r,s,a,o)}function Xm(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(n,i){let r=n;do{if(r.i!==n.i&&r.next.i!==n.i&&r.i!==i.i&&r.next.i!==i.i&&fp(r,r.next,n,i))return!0;r=r.next}while(r!==n);return!1}(t,e)&&(ws(t,e)&&ws(e,t)&&function(n,i){let r=n,s=!1,a=(n.x+i.x)/2,o=(n.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==n);return s}(t,e)&&(se(t.prev,t,e.prev)||se(t,e.prev,e))||Nr(t,e)&&se(t.prev,t,t.next)>0&&se(e.prev,e,e.next)>0)}function se(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Nr(t,e){return t.x===e.x&&t.y===e.y}function fp(t,e,n,i){let r=Fa(se(t,e,n)),s=Fa(se(t,e,i)),a=Fa(se(n,i,t)),o=Fa(se(n,i,e));return r!==s&&a!==o||(!(r!==0||!Da(t,n,e))||(!(s!==0||!Da(t,i,e))||(!(a!==0||!Da(n,t,i))||!(o!==0||!Da(n,e,i)))))}function Da(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Fa(t){return t>0?1:t<0?-1:0}function ws(t,e){return se(t.prev,t,t.next)<0?se(t,e,t.next)>=0&&se(t,t.prev,e)>=0:se(t,e,t.prev)<0||se(t,t.next,e)<0}function mp(t,e){let n=eh(t.i,t.x,t.y),i=eh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function id(t,e,n,i){let r=eh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function bs(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function eh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}class gp{static triangulate(t,e,n=2){return Fm(t,e,n)}}class xn{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return 0.5*n}static isClockWise(t){return xn.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];rd(t),sd(n,t);let s=t.length;e.forEach(rd);for(let o=0;o<e.length;o++)i.push(s),s+=e[o].length,sd(n,e[o]);let a=gp.triangulate(n,i);for(let o=0;o<a.length;o+=3)r.push(a.slice(o,o+3));return r}}function rd(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function sd(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Lo extends Jt{constructor(t=new Io([new st(0.5,0.5),new st(-0.5,0.5),new st(-0.5,-0.5),new st(0.5,-0.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,o=t.length;a<o;a++)s(t[a]);function s(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,c=e.depth!==void 0?e.depth:1,d=e.bevelEnabled===void 0||e.bevelEnabled,u=e.bevelThickness!==void 0?e.bevelThickness:0.2,p=e.bevelSize!==void 0?e.bevelSize:u-0.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:qm,y,g,S,C,A,L=!1;f&&(y=f.getSpacedPoints(h),L=!0,d=!1,g=f.computeFrenetFrames(h,!1),S=new T,C=new T,A=new T),d||(m=0,u=0,p=0,_=0);let V=a.extractPoints(l),P=V.shape,D=V.holes;if(!xn.isClockWise(P)){P=P.reverse();for(let R=0,F=D.length;R<F;R++){let M=D[R];xn.isClockWise(M)&&(D[R]=M.reverse())}}function B(R){let M=R[0];for(let I=1;I<=R.length;I++){let E=I%R.length,U=R[E],O=U.x-M.x,z=U.y-M.y,H=O*O+z*z,at=Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(M.x),Math.abs(M.y));H<=0.000000000000000000010000000000000001*at*at?(R.splice(E,1),I--):M=U}}B(P),D.forEach(B);let X=D.length,K=P;for(let R=0;R<X;R++){let F=D[R];P=P.concat(F)}function k(R,F,M){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(F,M)}let $=P.length;function G(R,F,M){let I,E,U,O=R.x-F.x,z=R.y-F.y,H=M.x-R.x,at=M.y-R.y,ut=O*O+z*z,tt=O*at-z*H;if(Math.abs(tt)>Number.EPSILON){let rt=Math.sqrt(ut),yt=Math.sqrt(H*H+at*at),Et=F.x-z/rt,Pt=F.y+O/rt,Bt=((M.x-at/yt-Et)*at-(M.y+H/yt-Pt)*H)/(O*at-z*H);I=Et+O*Bt-R.x,E=Pt+z*Bt-R.y;let Ct=I*I+E*E;if(Ct<=2)return new st(I,E);U=Math.sqrt(Ct/2)}else{let rt=!1;O>Number.EPSILON?H>Number.EPSILON&&(rt=!0):O<-Number.EPSILON?H<-Number.EPSILON&&(rt=!0):Math.sign(z)===Math.sign(at)&&(rt=!0),rt?(I=-z,E=O,U=Math.sqrt(ut)):(I=O,E=z,U=Math.sqrt(ut/2))}return new st(I/U,E/U)}let q=[];for(let R=0,F=K.length,M=F-1,I=R+1;R<F;R++,M++,I++)M===F&&(M=0),I===F&&(I=0),q[R]=G(K[R],K[M],K[I]);let Z=[],ht,ft,Q=q.concat();for(let R=0,F=X;R<F;R++){let M=D[R];ht=[];for(let I=0,E=M.length,U=E-1,O=I+1;I<E;I++,U++,O++)U===E&&(U=0),O===E&&(O=0),ht[I]=G(M[I],M[U],M[O]);Z.push(ht),Q=Q.concat(ht)}if(m===0)ft=xn.triangulateShape(K,D);else{let R=[],F=[];for(let M=0;M<m;M++){let I=M/m,E=u*Math.cos(I*Math.PI/2),U=p*Math.sin(I*Math.PI/2)+_;for(let O=0,z=K.length;O<z;O++){let H=k(K[O],q[O],U);it(H.x,H.y,-E),I===0&&R.push(H)}for(let O=0,z=X;O<z;O++){let H=D[O];ht=Z[O];let at=[];for(let ut=0,tt=H.length;ut<tt;ut++){let rt=k(H[ut],ht[ut],U);it(rt.x,rt.y,-E),I===0&&at.push(rt)}I===0&&F.push(at)}}ft=xn.triangulateShape(R,F)}let J=ft.length,mt=p+_;for(let R=0;R<$;R++){let F=d?k(P[R],Q[R],mt):P[R];L?(C.copy(g.normals[0]).multiplyScalar(F.x),S.copy(g.binormals[0]).multiplyScalar(F.y),A.copy(y[0]).add(C).add(S),it(A.x,A.y,A.z)):it(F.x,F.y,0)}for(let R=1;R<=h;R++)for(let F=0;F<$;F++){let M=d?k(P[F],Q[F],mt):P[F];L?(C.copy(g.normals[R]).multiplyScalar(M.x),S.copy(g.binormals[R]).multiplyScalar(M.y),A.copy(y[R]).add(C).add(S),it(A.x,A.y,A.z)):it(M.x,M.y,c/h*R)}for(let R=m-1;R>=0;R--){let F=R/m,M=u*Math.cos(F*Math.PI/2),I=p*Math.sin(F*Math.PI/2)+_;for(let E=0,U=K.length;E<U;E++){let O=k(K[E],q[E],I);it(O.x,O.y,c+M)}for(let E=0,U=D.length;E<U;E++){let O=D[E];ht=Z[E];for(let z=0,H=O.length;z<H;z++){let at=k(O[z],ht[z],I);L?it(at.x,at.y+y[h-1].y,y[h-1].x+M):it(at.x,at.y,c+M)}}}function ot(R,F){let M=R.length;for(;--M>=0;){let I=M,E=M-1;E<0&&(E=R.length-1);for(let U=0,O=h+2*m;U<O;U++){let z=$*U,H=$*(U+1);gt(F+I+z,F+E+z,F+E+H,F+I+H)}}}function it(R,F,M){o.push(R),o.push(F),o.push(M)}function lt(R,F,M){b(R),b(F),b(M);let I=i.length/3,E=v.generateTopUV(n,i,I-3,I-2,I-1);x(E[0]),x(E[1]),x(E[2])}function gt(R,F,M,I){b(R),b(F),b(I),b(F),b(M),b(I);let E=i.length/3,U=v.generateSideWallUV(n,i,E-6,E-3,E-2,E-1);x(U[0]),x(U[1]),x(U[3]),x(U[1]),x(U[2]),x(U[3])}function b(R){i.push(o[3*R+0]),i.push(o[3*R+1]),i.push(o[3*R+2])}function x(R){r.push(R.x),r.push(R.y)}(function(){let R=i.length/3;if(d){let F=0,M=$*F;for(let I=0;I<J;I++){let E=ft[I];lt(E[2]+M,E[1]+M,E[0]+M)}F=h+2*m,M=$*F;for(let I=0;I<J;I++){let E=ft[I];lt(E[0]+M,E[1]+M,E[2]+M)}}else{for(let F=0;F<J;F++){let M=ft[F];lt(M[2],M[1],M[0])}for(let F=0;F<J;F++){let M=ft[F];lt(M[0]+$*h,M[1]+$*h,M[2]+$*h)}}n.addGroup(R,i.length/3-R,0)})(),function(){let R=i.length/3,F=0;ot(K,F),F+=K.length;for(let M=0,I=D.length;M<I;M++){let E=D[M];ot(E,F),F+=E.length}n.addGroup(R,i.length/3-R,1)}()}this.setAttribute("position",new bt(i,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,n,i){if(i.shapes=[],Array.isArray(e))for(let r=0,s=e.length;r<s;r++){let a=e[r];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Va[i.type]().fromJSON(i)),new Lo(n,t.options)}}var qm={generateTopUV:function(t,e,n,i,r){let s=e[3*n],a=e[3*n+1],o=e[3*i],l=e[3*i+1],h=e[3*r],c=e[3*r+1];return[new st(s,a),new st(o,l),new st(h,c)]},generateSideWallUV:function(t,e,n,i,r,s){let a=e[3*n],o=e[3*n+1],l=e[3*n+2],h=e[3*i],c=e[3*i+1],d=e[3*i+2],u=e[3*r],p=e[3*r+1],_=e[3*r+2],m=e[3*s],f=e[3*s+1],v=e[3*s+2];return Math.abs(o-c)<Math.abs(a-h)?[new st(a,1-l),new st(h,1-d),new st(u,1-_),new st(m,1-v)]:[new st(o,1-l),new st(c,1-d),new st(p,1-_),new st(f,1-v)]}};class Po extends Ei{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Po(t.radius,t.detail)}}class Uo extends Jt{constructor(t=[new st(0,-0.5),new st(0.5,0),new st(0,0.5)],e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Nt(i,0,2*Math.PI);let r=[],s=[],a=[],o=[],l=[],h=1/e,c=new T,d=new st,u=new T,p=new T,_=new T,m=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,u.x=1*f,u.y=-m,u.z=0*f,_.copy(u),u.normalize(),o.push(u.x,u.y,u.z);break;case t.length-1:o.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,u.x=1*f,u.y=-m,u.z=0*f,p.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),o.push(u.x,u.y,u.z),_.copy(p)}for(let v=0;v<=e;v++){let y=n+v*h*i,g=Math.sin(y),S=Math.cos(y);for(let C=0;C<=t.length-1;C++){c.x=t[C].x*g,c.y=t[C].y,c.z=t[C].x*S,s.push(c.x,c.y,c.z),d.x=v/e,d.y=C/(t.length-1),a.push(d.x,d.y);let A=o[3*C+0]*g,L=o[3*C+1],V=o[3*C+0]*S;l.push(A,L,V)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let g=y+v*t.length,S=g,C=g+t.length,A=g+t.length+1,L=g+1;r.push(S,C,L),r.push(A,L,C)}this.setIndex(r),this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(a,2)),this.setAttribute("normal",new bt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.points,t.segments,t.phiStart,t.phiLength)}}class No extends Ei{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new No(t.radius,t.detail)}}class ni extends Jt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,h=o+1,c=t/a,d=e/o,u=[],p=[],_=[],m=[];for(let f=0;f<h;f++){let v=f*d-s;for(let y=0;y<l;y++){let g=y*c-r;p.push(g,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-f/o)}}for(let f=0;f<o;f++)for(let v=0;v<a;v++){let y=v+l*f,g=v+l*(f+1),S=v+1+l*(f+1),C=v+1+l*f;u.push(y,g,C),u.push(g,S,C)}this.setIndex(u),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ni(t.width,t.height,t.widthSegments,t.heightSegments)}}class Do extends Jt{constructor(t=0.5,e=1,n=32,i=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n);let a=[],o=[],l=[],h=[],c=t,d=(e-t)/(i=Math.max(1,i)),u=new T,p=new st;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let f=r+m/n*s;u.x=c*Math.cos(f),u.y=c*Math.sin(f),o.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}c+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let f=0;f<n;f++){let v=f+m,y=v,g=v+n+1,S=v+n+2,C=v+1;a.push(y,g,C),a.push(g,S,C)}}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fo extends Jt{constructor(t=new Io([new st(0,0.5),new st(-0.5,-0.5),new st(0.5,-0.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],s=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,o,h),a+=o,o=0;function l(h){let c=i.length/3,d=h.extractPoints(e),u=d.shape,p=d.holes;xn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,f=p.length;m<f;m++){let v=p[m];xn.isClockWise(v)===!0&&(p[m]=v.reverse())}let _=xn.triangulateShape(u,p);for(let m=0,f=p.length;m<f;m++){let v=p[m];u=u.concat(v)}for(let m=0,f=u.length;m<f;m++){let v=u[m];i.push(v.x,v.y,0),r.push(0,0,1),s.push(v.x,v.y)}for(let m=0,f=_.length;m<f;m++){let v=_[m],y=v[0]+c,g=v[1]+c,S=v[2]+c;n.push(y,g,S),o+=3}}this.setIndex(n),this.setAttribute("position",new bt(i,3)),this.setAttribute("normal",new bt(r,3)),this.setAttribute("uv",new bt(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n}(this.parameters.shapes,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let s=e[t.shapes[i]];n.push(s)}return new Fo(n,t.curveSegments)}}class Oo extends Jt{constructor(t=1,e=32,n=16,i=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(s+a,Math.PI),l=0,h=[],c=new T,d=new T,u=[],p=[],_=[],m=[];for(let f=0;f<=n;f++){let v=[],y=f/n,g=0;f===0&&s===0?g=0.5/e:f===n&&o===Math.PI&&(g=-0.5/e);for(let S=0;S<=e;S++){let C=S/e;c.x=-t*Math.cos(i+C*r)*Math.sin(s+y*a),c.y=t*Math.cos(s+y*a),c.z=t*Math.sin(i+C*r)*Math.sin(s+y*a),p.push(c.x,c.y,c.z),d.copy(c).normalize(),_.push(d.x,d.y,d.z),m.push(C+g,1-y),v.push(l++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let y=h[f][v+1],g=h[f][v],S=h[f+1][v],C=h[f+1][v+1];(f!==0||s>0)&&u.push(y,g,C),(f!==n-1||o<Math.PI)&&u.push(g,S,C)}this.setIndex(u),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bo extends Ei{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bo(t.radius,t.detail)}}class zo extends Jt{constructor(t=1,e=0.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let s=[],a=[],o=[],l=[],h=new T,c=new T,d=new T;for(let u=0;u<=n;u++)for(let p=0;p<=i;p++){let _=p/i*r,m=u/n*Math.PI*2;c.x=(t+e*Math.cos(m))*Math.cos(_),c.y=(t+e*Math.cos(m))*Math.sin(_),c.z=e*Math.sin(m),a.push(c.x,c.y,c.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(c,h).normalize(),o.push(d.x,d.y,d.z),l.push(p/i),l.push(u/n)}for(let u=1;u<=n;u++)for(let p=1;p<=i;p++){let _=(i+1)*u+p-1,m=(i+1)*(u-1)+p-1,f=(i+1)*(u-1)+p,v=(i+1)*u+p;s.push(_,m,v),s.push(m,f,v)}this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vo extends Jt{constructor(t=1,e=0.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],h=[],c=new T,d=new T,u=new T,p=new T,_=new T,m=new T,f=new T;for(let y=0;y<=n;++y){let g=y/n*r*Math.PI*2;v(g,r,s,t,u),v(g+0.01,r,s,t,p),m.subVectors(p,u),f.addVectors(p,u),_.crossVectors(m,f),f.crossVectors(_,m),_.normalize(),f.normalize();for(let S=0;S<=i;++S){let C=S/i*Math.PI*2,A=-e*Math.cos(C),L=e*Math.sin(C);c.x=u.x+(A*f.x+L*_.x),c.y=u.y+(A*f.y+L*_.y),c.z=u.z+(A*f.z+L*_.z),o.push(c.x,c.y,c.z),d.subVectors(c,u).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(S/i)}}for(let y=1;y<=n;y++)for(let g=1;g<=i;g++){let S=(i+1)*(y-1)+(g-1),C=(i+1)*y+(g-1),A=(i+1)*y+g,L=(i+1)*(y-1)+g;a.push(S,C,L),a.push(C,A,L)}function v(y,g,S,C,A){let L=Math.cos(y),V=Math.sin(y),P=S/g*y,D=Math.cos(P);A.x=C*(2+D)*0.5*L,A.y=C*(2+D)*V*0.5,A.z=C*Math.sin(P)*0.5}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Ho extends Jt{constructor(t=new Ro(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let s=t.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new T,o=new T,l=new st,h=new T,c=[],d=[],u=[],p=[];function _(m){h=t.getPointAt(m/e,h);let f=s.normals[m],v=s.binormals[m];for(let y=0;y<=i;y++){let g=y/i*Math.PI*2,S=Math.sin(g),C=-Math.cos(g);o.x=C*f.x+S*v.x,o.y=C*f.y+S*v.y,o.z=C*f.z+S*v.z,o.normalize(),d.push(o.x,o.y,o.z),a.x=h.x+n*o.x,a.y=h.y+n*o.y,a.z=h.z+n*o.z,c.push(a.x,a.y,a.z)}}(function(){for(let m=0;m<e;m++)_(m);_(r===!1?e:0),function(){for(let m=0;m<=e;m++)for(let f=0;f<=i;f++)l.x=m/e,l.y=f/i,u.push(l.x,l.y)}(),function(){for(let m=1;m<=e;m++)for(let f=1;f<=i;f++){let v=(i+1)*(m-1)+(f-1),y=(i+1)*m+(f-1),g=(i+1)*m+f,S=(i+1)*(m-1)+f;p.push(v,y,S),p.push(y,g,S)}}()})(),this.setIndex(p),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ho(new Va[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class sc extends Jt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new T,r=new T;if(t.index!==null){let s=t.attributes.position,a=t.index,o=t.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start;for(let u=d,p=d+c.count;u<p;u+=3)for(let _=0;_<3;_++){let m=a.getX(u+_),f=a.getX(u+(_+1)%3);i.fromBufferAttribute(s,m),r.fromBufferAttribute(s,f),ad(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let s=t.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){let h=3*a+l,c=3*a+(l+1)%3;i.fromBufferAttribute(s,h),r.fromBufferAttribute(s,c),ad(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new bt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ad(t,e,n){let i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)!==!0&&n.has(r)!==!0&&(n.add(i),n.add(r),!0)}var Y_=Object.freeze({__proto__:null,BoxGeometry:ei,CapsuleGeometry:So,CircleGeometry:xo,ConeGeometry:To,CylinderGeometry:Hs,DodecahedronGeometry:Eo,EdgesGeometry:$h,ExtrudeGeometry:Lo,IcosahedronGeometry:Po,LatheGeometry:Uo,OctahedronGeometry:No,PlaneGeometry:ni,PolyhedronGeometry:Ei,RingGeometry:Do,ShapeGeometry:Fo,SphereGeometry:Oo,TetrahedronGeometry:Bo,TorusGeometry:zo,TorusKnotGeometry:Vo,TubeGeometry:Ho,WireframeGeometry:sc});class wi extends ze{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ke extends wi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Go extends ze{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ac extends ze{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oc extends ze{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Oa(t,e){return t&&t.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t):t}function Ym(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Zm(t){let e=t.length,n=Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(function(i,r){return t[i]-t[r]}),n}function od(t,e,n){let i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){let o=n[s]*e;for(let l=0;l!==e;++l)r[a++]=t[o+l]}return r}function _p(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),n.push(...a)),s=t[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),n.push(a)),s=t[r++];while(s!==void 0)}class bi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break n}break t}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class lc extends bi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:s=t,o=2*n-e;break;case 2402:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}let l=0.5*(n-e),h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,f=-d*m+2*d*_-d*p,v=(1+d)*m+(-1.5-2*d)*_+(-0.5+d)*p+1,y=(-1-u)*m+(1.5+u)*_+0.5*p,g=u*m-u*_;for(let S=0;S!==a;++S)r[S]=f*s[h+S]+v*s[l+S]+y*s[o+S]+g*s[c+S];return r}}class ko extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=(n-e)/(i-e),c=1-h;for(let d=0;d!==a;++d)r[d]=s[l+d]*c+s[o+d]*h;return r}}class hc extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Je{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oa(e,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oa(t.times,Array),values:Oa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){let o=n[a];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&Ym(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,r=t.length-1,s=1;for(let a=1;a<r;++a){let o=!1,l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{let h=a*n,c=h-n,d=h+n;for(let u=0;u!==n;++u){let p=e[h+u];if(p!==e[c+u]||p!==e[d+u]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];let h=a*n,c=s*n;for(let d=0;d!==n;++d)e[c+d]=e[h+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=new this.constructor(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Je.prototype.ValueTypeName="",Je.prototype.TimeBufferType=Float32Array,Je.prototype.ValueBufferType=Float32Array,Je.prototype.DefaultInterpolation=2301;class _i extends Je{constructor(t,e,n){super(t,e,n)}}_i.prototype.ValueTypeName="bool",_i.prototype.ValueBufferType=Array,_i.prototype.DefaultInterpolation=2300,_i.prototype.InterpolantFactoryMethodLinear=void 0,_i.prototype.InterpolantFactoryMethodSmooth=void 0;class Wo extends Je{constructor(t,e,n,i){super(t,e,n,i)}}Wo.prototype.ValueTypeName="color";class Xn extends Je{constructor(t,e,n,i){super(t,e,n,i)}}Xn.prototype.ValueTypeName="number";class cc extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)me.slerpFlat(r,0,s,l-a,s,l,o);return r}}class qn extends Je{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}}qn.prototype.ValueTypeName="quaternion",qn.prototype.InterpolantFactoryMethodSmooth=void 0;class vi extends Je{constructor(t,e,n){super(t,e,n)}}vi.prototype.ValueTypeName="string",vi.prototype.ValueBufferType=Array,vi.prototype.DefaultInterpolation=2300,vi.prototype.InterpolantFactoryMethodLinear=void 0,vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Yn extends Je{constructor(t,e,n,i){super(t,e,n,i)}}Yn.prototype.ValueTypeName="vector";class Dr{constructor(t="",e=-1,n=[],i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,a=n.length;s!==a;++s)e.push(Jm(n[s]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(Je.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,s=[];for(let a=0;a<r;a++){let o=[],l=[];o.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Zm(o);o=od(o,1,h),l=od(l,1,h),i||o[0]!==0||(o.push(r),l.push(l[0])),s.push(new Xn(".morphTargetInfluences["+e[a].name+"]",o,l).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=t.length;a<o;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let c=h[1],d=i[c];d||(i[c]=d=[]),d.push(l)}}let s=[];for(let a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return s}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,c,d,u,p){if(d.length!==0){let _=[],m=[];_p(d,_,m,u),_.length!==0&&p.push(new h(c,_,m))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode,o=t.length||-1,l=t.hierarchy||[];for(let h=0;h<l.length;h++){let c=l[h].keys;if(c&&c.length!==0)if(c[0].morphTargets){let d={},u;for(u=0;u<c.length;u++)if(c[u].morphTargets)for(let p=0;p<c[u].morphTargets.length;p++)d[c[u].morphTargets[p]]=-1;for(let p in d){let _=[],m=[];for(let f=0;f!==c[u].morphTargets.length;++f){let v=c[u];_.push(v.time),m.push(v.morphTarget===p?1:0)}i.push(new Xn(".morphTargetInfluence["+p+"]",_,m))}o=d.length*s}else{let d=".bones["+e[h].name+"]";n(Yn,d+".position",c,"pos",i),n(qn,d+".quaternion",c,"rot",i),n(Yn,d+".scale",c,"scl",i)}}if(i.length===0)return null;return new this(r,o,i,a)}resetDuration(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){let i=this.tracks[e];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jm(t){if(t.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xn;case"vector":case"vector2":case"vector3":case"vector4":return Yn;case"color":return Wo;case"quaternion":return qn;case"bool":case"boolean":return _i;case"string":return vi}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}(t.type);if(t.times===void 0){let n=[],i=[];_p(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var Tn={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class uc{constructor(t,e,n){let i=this,r,s=!1,a=0,o=0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var vp=new uc;class ii{constructor(t){this.manager=t!==void 0?t:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gn={};class yp extends Error{constructor(t,e){super(t),this.response=e}}class ks extends ii{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Tn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Gn[t]!==void 0)return void Gn[t].push({onLoad:e,onProgress:n,onError:i});Gn[t]=[],Gn[t].push({onLoad:e,onProgress:n,onError:i});let s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then((l)=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Gn[t],c=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,_=0,m=new ReadableStream({start(f){(function v(){c.read().then(({done:y,value:g})=>{if(y)f.close();else{_+=g.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:u});for(let C=0,A=h.length;C<A;C++){let L=h[C];L.onProgress&&L.onProgress(S)}f.enqueue(g),v()}},(y)=>{f.error(y)})})()}});return new Response(m)}throw new yp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((h)=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),c=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(c);return l.arrayBuffer().then((u)=>d.decode(u))}}}).then((l)=>{Tn.add(`file:${t}`,l);let h=Gn[t];delete Gn[t];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onLoad&&u.onLoad(l)}}).catch((l)=>{let h=Gn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Gn[t];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onError&&u.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Ir=new WeakMap;class dc extends ii{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Tn.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let c=Ir.get(s);c===void 0&&(c=[],Ir.set(s,c)),c.push({onLoad:e,onError:i})}return s}let a=Ur("img");function o(){h(),e&&e(this);let c=Ir.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}Ir.delete(this),r.manager.itemEnd(t)}function l(c){h(),i&&i(c),Tn.remove(`image:${t}`);let d=Ir.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(c)}Ir.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Tn.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Xo extends ii{constructor(t){super(t)}load(t,e,n,i){let r=new he,s=new dc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Zr extends te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qo extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}var Zl=new wt,ld=new T,hd=new T;class Yo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ld.setFromMatrixPosition(t.matrixWorld),e.position.copy(ld),hd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hd),e.updateMatrixWorld(),Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1):n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(Zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mp extends Yo{constructor(){super(new _e(50,1,0.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=2*qi*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zo extends Zr{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Mp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}var cd=new wt,ys=new T,Jl=new T;class Sp extends Yo{constructor(){super(new _e(90,1,0.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(ys),Jl.copy(n.position),Jl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jl),n.updateMatrixWorld(),i.makeTranslation(-ys.x,-ys.y,-ys.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd,n.coordinateSystem,n.reversedDepth)}}class ir extends Zr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sp}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jr extends Fs{constructor(t=-1,e=1,n=1,i=-1,r=0.1,s=2000){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xp extends Yo{constructor(){super(new Jr(-5,5,5,-5,0.5,500)),this.isDirectionalLightShadow=!0}}class Ai extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.shadow=new xp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ri{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}var jl=new WeakMap;class Jo extends ii{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Tn.get(`image-bitmap:${t}`);if(s!==void 0)return r.manager.itemStart(t),s.then?void s.then((l)=>{if(jl.has(s)!==!0)return e&&e(l),r.manager.itemEnd(t),l;i&&i(jl.get(s)),r.manager.itemError(t),r.manager.itemEnd(t)}):(setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s);let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Tn.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),jl.set(o,l),Tn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Tn.add(`image-bitmap:${t}`,o),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Z_=new wt,J_=new wt,j_=new wt;class pc extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class jo{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}var K_=new T,$_=new me,Q_=new T,tv=new T,ev=new T;var nv=new T,iv=new me,rv=new T,sv=new T;class fc{constructor(t,e,n){let i,r,s;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=e}else{s+=e;let a=e/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let o=e*this._origIndex;this._mixBufferRegion(n,i,o,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let o=e,l=e+e;o!==l;++o)if(n[o]!==n[o+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=0.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]}_slerp(t,e,n,i){me.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let s=this._workIndex*r;me.multiplyQuaternionsFlat(t,s,t,e,t,n),me.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){let s=1-i;for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]*s+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let s=0;s!==r;++s){let a=e+s;t[a]=t[a]+t[n+s]*i}}}var mc="\\[\\]\\.:\\/",jm=new RegExp("["+mc+"]","g"),Kl="[^"+mc+"]",Km="[^"+mc.replace("\\.","")+"]",$m=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Kl)+/(WCOD+)?/.source.replace("WCOD",Km)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kl)+"$"),Qm=["material","materials","bones","map"];class Yt{constructor(t,e,n){this.path=e,this.parsedPath=n||Yt.parseTrackName(e),this.node=Yt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Yt.Composite(t,e,n):new Yt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jm,"")}static parseTrackName(t){let e=$m.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let a=r[s];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=Yt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n]}if(l!==void 0){if(t[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[l]}}let s=t[i];if(s===void 0){let l=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t)}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Yt.Composite=class{constructor(t,e,n){let i=n||Yt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray],Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gc{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,s=r.length,a=Array(s),o={endingStart:2400,endingEnd:2400};for(let l=0;l!==s;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,s=r/i,a=i/r;t.warp(1,s,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,s=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let{parameterPositions:o,sampleValues:l}=a;return o[0]=r,o[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return void this._updateWeight(t);let r=this._startTime;if(r!==null){let o=(t-r)*n;o<0||n===0?e=0:(this._startTime=null,e=n*o)}e*=this._updateTimeScale(t);let s=this._updateTime(e),a=this._updateWeight(t);if(a>0){let o=this._interpolants,l=this._propertyBindings;if(this.blendMode===2501)for(let h=0,c=o.length;h!==c;++h)o[h].evaluate(s),l[h].accumulateAdditive(a);else for(let h=0,c=o.length;h!==c;++h)o[h].evaluate(s),l[h].accumulate(i,a)}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null)e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,s=n===2202;if(t===0)return r===-1||!s||1&~r?i:e-i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else{if(!(i<0)){this.time=i;break t}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(o===1){let l=t<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&!(1&~r))return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=t?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=e?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);let{parameterPositions:a,sampleValues:o}=s;return a[0]=r,o[0]=e,a[1]=r+t,o[1]=n,this}}var tg=new Float32Array(1);class Ko extends Qn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,o=n.uuid,l=this._bindingsByRootAndName,h=l[o];h===void 0&&(h={},l[o]=h);for(let c=0;c!==r;++c){let d=i[c],u=d.name,p=h[u];if(p!==void 0)++p.referenceCount,s[c]=p;else{if(p=s[c],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,u));continue}let _=e&&e._propertyBindings[c].binding.parsedPath;p=new fc(Yt.create(n,u,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,u),s[c]=p}a[c].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{let a=s.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),t._byClipCacheIndex=null,delete a.actionByRoot[(t._localRoot||this._root).uuid],o.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=t._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new ko(new Float32Array(2),new Float32Array(2),1,tg),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,s=typeof t=="string"?Dr.findByName(i,t):t,a=s!==null?s.uuid:t,o=this._actionsByClip[a],l=null;if(n===void 0&&(n=s!==null?s.blendMode:2500),o!==void 0){let c=o.actionByRoot[r];if(c!==void 0&&c.blendMode===n)return c;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let h=new gc(this,s,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Dr.findByName(n,t):t,s=r?r.uuid:t,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,s);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let a=0,o=s.length;a!==o;++a){let l=s[a];this._deactivateAction(l);let h=l._cacheIndex,c=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=h,e[h]=c,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let r in n){let s=n[r].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let i=this._bindingsByRootAndName[e];if(i!==void 0)for(let r in i){let s=i[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}var av=new wt;var ov=new st;var lv=new T,hv=new T,cv=new T,uv=new T,dv=new T,pv=new T,fv=new T;var mv=new T;var gv=new T,_v=new wt,vv=new wt;var yv=new T,Mv=new vt,Sv=new vt;var xv=new T,Tv=new T,Ev=new T;var wv=new T,bv=new Fs;var Av=new Ue;var Rv=new T;function _c(t,e,n,i){let r=function(s){switch(s){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${s}.`)}(i);switch(n){case 1021:return t*e;case 1028:case 1029:return t*e/r.components*r.byteLength;case 1030:case 1031:return t*e*2/r.components*r.byteLength;case 1022:return t*e*3/r.components*r.byteLength;case 1023:case 1033:return t*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");function qp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ng(t){let e=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let i=e.get(n);i&&(t.deleteBuffer(i.buffer),e.delete(n))},update:function(n,i){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let s=e.get(n);return void((!s||s.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}let r=e.get(n);if(r===void 0)e.set(n,function(s,a){let{array:o,usage:l}=s,h=o.byteLength,c=t.createBuffer(),d;if(t.bindBuffer(a,c),t.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=t.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?t.HALF_FLOAT:t.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=t.SHORT;else if(o instanceof Uint32Array)d=t.UNSIGNED_INT;else if(o instanceof Int32Array)d=t.INT;else if(o instanceof Int8Array)d=t.BYTE;else if(o instanceof Uint8Array)d=t.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=t.UNSIGNED_BYTE}return{buffer:c,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:h}}(n,i));else if(r.version<n.version){if(r.size!==n.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let{array:l,updateRanges:h}=a;if(t.bindBuffer(o,s),h.length===0)t.bufferSubData(o,0,l);else{h.sort((d,u)=>d.start-u.start);let c=0;for(let d=1;d<h.length;d++){let u=h[c],p=h[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++c,h[c]=p)}h.length=c+1;for(let d=0,u=h.length;d<u;d++){let p=h[d];t.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,n,i),r.version=n.version}}}}var Dt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},pt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new st(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Cn={basic:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ne([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ne([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ne([pt.points,pt.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ne([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ne([pt.common,pt.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ne([pt.sprite,pt.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ne([pt.common,pt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ne([pt.lights,pt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};Cn.physical={uniforms:Ne([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var $o={r:0,b:0,g:0},rr=new Ge,ig=new wt;function rg(t,e,n,i,r,s,a){let o=new vt(0),l,h,c=s===!0?0:1,d=null,u=0,p=null;function _(f){let v=f.isScene===!0?f.background:null;if(v&&v.isTexture)v=(f.backgroundBlurriness>0?n:e).get(v);return v}function m(f,v){f.getRGB($o,Jh(t)),i.buffers.color.setClear($o.r,$o.g,$o.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(f,v=1){o.set(f),c=v,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,m(o,c)},render:function(f){let v=!1,y=_(f);y===null?m(o,c):y&&y.isColor&&(m(y,1),v=!0);let g=t.xr.getEnvironmentBlendMode();g==="additive"?i.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))},addToRenderList:function(f,v){let y=_(v);y&&(y.isCubeTexture||y.mapping===Cs)?(h===void 0&&(h=new ce(new ei(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Qi(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(g,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),rr.copy(v.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ig.makeRotationFromEuler(rr)),h.material.toneMapped=kt.getTransfer(y.colorSpace)!==ee,d===y&&u===y.version&&p===t.toneMapping||(h.material.needsUpdate=!0,d=y,u=y.version,p=t.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ce(new ni(2,2),new An({name:"BackgroundMaterial",uniforms:Qi(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=kt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),d===y&&u===y.version&&p===t.toneMapping||(l.material.needsUpdate=!0,d=y,u=y.version,p=t.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function sg(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,a=!1;function o(v){return t.bindVertexArray(v)}function l(v){return t.deleteVertexArray(v)}function h(v){let y=[],g=[],S=[];for(let C=0;C<n;C++)y[C]=0,g[C]=0,S[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:g,attributeDivisors:S,object:v,attributes:{},index:null}}function c(){let v=s.newAttributes;for(let y=0,g=v.length;y<g;y++)v[y]=0}function d(v){u(v,0)}function u(v,y){let{newAttributes:g,enabledAttributes:S,attributeDivisors:C}=s;g[v]=1,S[v]===0&&(t.enableVertexAttribArray(v),S[v]=1),C[v]!==y&&(t.vertexAttribDivisor(v,y),C[v]=y)}function p(){let{newAttributes:v,enabledAttributes:y}=s;for(let g=0,S=y.length;g<S;g++)y[g]!==v[g]&&(t.disableVertexAttribArray(g),y[g]=0)}function _(v,y,g,S,C,A,L){L===!0?t.vertexAttribIPointer(v,y,g,C,A):t.vertexAttribPointer(v,y,g,S,C,A)}function m(){f(),a=!0,s!==r&&(s=r,o(s.object))}function f(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(v,y,g,S,C){let A=!1,L=function(V,P,D){let B=D.wireframe===!0,X=i[V.id];X===void 0&&(X={},i[V.id]=X);let K=X[P.id];K===void 0&&(K={},X[P.id]=K);let k=K[B];return k===void 0&&(k=h(t.createVertexArray()),K[B]=k),k}(S,g,y);s!==L&&(s=L,o(s.object)),A=function(V,P,D,B){let X=s.attributes,K=P.attributes,k=0,$=D.getAttributes();for(let G in $)if($[G].location>=0){let q=X[G],Z=K[G];if(Z===void 0&&(G==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),G==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor)),q===void 0)return!0;if(q.attribute!==Z)return!0;if(Z&&q.data!==Z.data)return!0;k++}return s.attributesNum!==k||s.index!==B}(v,S,g,C),A&&function(V,P,D,B){let X={},K=P.attributes,k=0,$=D.getAttributes();for(let G in $)if($[G].location>=0){let q=K[G];q===void 0&&(G==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),G==="instanceColor"&&V.instanceColor&&(q=V.instanceColor));let Z={};Z.attribute=q,q&&q.data&&(Z.data=q.data),X[G]=Z,k++}s.attributes=X,s.attributesNum=k,s.index=B}(v,S,g,C),C!==null&&e.update(C,t.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,function(V,P,D,B){c();let X=B.attributes,K=D.getAttributes(),k=P.defaultAttributeValues;for(let $ in K){let G=K[$];if(G.location>=0){let q=X[$];if(q===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(q=V.instanceColor)),q!==void 0){let{normalized:Z,itemSize:ht}=q,ft=e.get(q);if(ft===void 0)continue;let{buffer:Q,type:J,bytesPerElement:mt}=ft,ot=J===t.INT||J===t.UNSIGNED_INT||q.gpuType===oh;if(q.isInterleavedBufferAttribute){let it=q.data,lt=it.stride,gt=q.offset;if(it.isInstancedInterleavedBuffer){for(let b=0;b<G.locationSize;b++)u(G.location+b,it.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let b=0;b<G.locationSize;b++)d(G.location+b);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let b=0;b<G.locationSize;b++)_(G.location+b,ht/G.locationSize,J,Z,lt*mt,(gt+ht/G.locationSize*b)*mt,ot)}else{if(q.isInstancedBufferAttribute){for(let it=0;it<G.locationSize;it++)u(G.location+it,q.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let it=0;it<G.locationSize;it++)d(G.location+it);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let it=0;it<G.locationSize;it++)_(G.location+it,ht/G.locationSize,J,Z,ht*mt,ht/G.locationSize*it*mt,ot)}}else if(k!==void 0){let Z=k[$];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(G.location,Z);break;case 3:t.vertexAttrib3fv(G.location,Z);break;case 4:t.vertexAttrib4fv(G.location,Z);break;default:t.vertexAttrib1fv(G.location,Z)}}}}p()}(v,y,g,S),C!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))},reset:m,resetDefaultState:f,dispose:function(){m();for(let v in i){let y=i[v];for(let g in y){let S=y[g];for(let C in S)l(S[C].object),delete S[C];delete y[g]}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let y=i[v.id];for(let g in y){let S=y[g];for(let C in S)l(S[C].object),delete S[C];delete y[g]}delete i[v.id]},releaseStatesOfProgram:function(v){for(let y in i){let g=i[y];if(g[v.id]===void 0)continue;let S=g[v.id];for(let C in S)l(S[C].object),delete S[C];delete g[v.id]}},initAttributes:c,enableAttribute:d,disableUnusedAttributes:p}}function ag(t,e,n){let i;function r(s,a,o){o!==0&&(t.drawArraysInstanced(i,s,a,o),n.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){t.drawArrays(i,s,a),n.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let h=0;h<o;h++)l+=a[h];n.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<s.length;c++)r(s[c],a[c],l[c]);else{h.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let c=0;for(let d=0;d<o;d++)c+=a[d]*l[d];n.update(c,i,1)}}}function og(t,e,n,i){let r;function s(u){if(u==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=n.precision!==void 0?n.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(u){return u===bn||i.convert(u)===t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Si&&i.convert(u)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==xi&&!p)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxCubemapSize:t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:t.getParameter(t.MAX_VERTEX_ATTRIBS),maxVertexUniforms:t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:t.getParameter(t.MAX_VARYING_VECTORS),maxFragmentUniforms:t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:t.getParameter(t.MAX_SAMPLES)}}function lg(t){let e=this,n=null,i=0,r=!1,s=!1,a=new kn,o=new Ut,l={value:null,needsUpdate:!1};function h(c,d,u,p){let _=c!==null?c.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let f=u+4*_,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,g=u;y!==_;++y,g+=4)a.copy(c[y]).applyMatrix4(v,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let u=c.length!==0||d||i!==0||r;return r=d,i=c.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){n=h(c,d,0)},this.setState=function(c,d,u){let{clippingPlanes:p,clipIntersection:_,clipShadows:m}=c,f=t.get(c);if(!r||p===null||p.length===0||s&&!m)s?h(null):function(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let v=s?0:i,y=4*v,g=f.clippingState||null;l.value=g,g=h(p,d,y,u);for(let S=0;S!==y;++S)g[S]=n[S];f.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}}}function hg(t){let e=new WeakMap;function n(r,s){return s===Ka?r.mapping=Or:s===$a&&(r.mapping=ji),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Ka||s===$a){if(e.has(r))return n(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Kh(a.height);return o.fromEquirectangularTexture(t,r),e.set(r,o),r.addEventListener("dispose",i),n(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Tp=[0.125,0.215,0.35,0.446,0.526,0.582],Ws=20,vc=new Jr,Ep=new vt,yc=null,Mc=0,Sc=0,xc=!1,ar=(1+Math.sqrt(5))/2,jr=1/ar,wp=[new T(-ar,jr,0),new T(ar,jr,0),new T(-jr,0,ar),new T(jr,0,ar),new T(0,ar,-jr),new T(0,ar,jr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],cg=new T;class Ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=0.1,i=100,r={}){let{size:s=256,position:a=cg}=r;yc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,Mc,Sc),this._renderer.xr.enabled=xc,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Or||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Ls,format:bn,colorSpace:Be,depthBuffer:!1},i=bp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){let a=[],o=[],l=[],h=s,c=s-4+1+Tp.length;for(let d=0;d<c;d++){let u=Math.pow(2,h);o.push(u);let p=1/u;d>s-4?p=Tp[d-s+4-1]:d===0&&(p=0),l.push(p);let _=1/(u-2),m=-_,f=1+_,v=[m,m,f,m,f,f,m,m,f,f,m,f],y=6,g=6,S=3,C=2,A=1,L=new Float32Array(S*g*y),V=new Float32Array(C*g*y),P=new Float32Array(A*g*y);for(let B=0;B<y;B++){let X=B%3*2/3-1,K=B>2?0:-1,k=[X,K,0,X+0.6666666666666666,K,0,X+0.6666666666666666,K+1,0,X,K,0,X+0.6666666666666666,K+1,0,X,K+1,0];L.set(k,S*g*B),V.set(v,C*g*B);let $=[B,B,B,B,B,B];P.set($,A*g*B)}let D=new Jt;D.setAttribute("position",new ae(L,S)),D.setAttribute("uv",new ae(V,C)),D.setAttribute("faceIndex",new ae(P,A)),a.push(D),h>4&&h--}return{lodPlanes:a,sizeLods:o,sigmas:l}}(r)),this._blurMaterial=function(s,a,o){let l=new Float32Array(Ws),h=new T(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/o,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}(r,t,e)}return i}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,vc)}_sceneToCubeUV(t,e,n,i,r){let s=new _e(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Ep),l.toneMapping=Zn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new Ae({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),u=new ce(new ei,d),p=!1,_=t.background;_?_.isColor&&(d.color.copy(_),t.background=null,p=!0):(d.color.copy(Ep),p=!0);for(let m=0;m<6;m++){let f=m%3;f===0?(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[m],r.y,r.z)):f===1?(s.up.set(0,0,a[m]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[m],r.z)):(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[m]));let v=this._cubeSize;Qo(i,f*v,m>2?v:0,v,v),l.setRenderTarget(i),p&&l.render(u,s),l.render(t,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=c,l.autoClear=h,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Or||t.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());let r=i?this._cubemapMaterial:this._equirectMaterial,s=new ce(this._lodPlanes[0],r);r.uniforms.envMap.value=t;let a=this._cubeSize;Qo(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(s,vc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wp[(i-r-1)%wp.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,i,r){let s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ce(this._lodPlanes[i],l),c=l.uniforms,d=this._sizeLods[n]-1,u=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,p=r/u,_=isFinite(r)?1+Math.floor(3*p):Ws;_>Ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],f=0;for(let g=0;g<Ws;++g){let S=g/p,C=Math.exp(-S*S/2);m.push(C),g===0?f+=C:g<_&&(f+=2*C)}for(let g=0;g<m.length;g++)m[g]=m[g]/f;c.envMap.value=t.texture,c.samples.value=_,c.weights.value=m,c.latitudinal.value=s==="latitudinal",a&&(c.poleAxis.value=a);let{_lodMax:v}=this;c.dTheta.value=u,c.mipInt.value=v-n;let y=this._sizeLods[i];Qo(e,3*y*(i>v-4?i-v+4:0),4*(this._cubeSize-y),3*y,2*y),o.setRenderTarget(e),o.render(h,vc)}}function bp(t,e,n){let i=new ti(t,e,n);return i.texture.mapping=Cs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ap(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Rp(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function ug(t){let e=new WeakMap,n=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Ka||s===$a,o=s===Or||s===ji;if(a||o){let l=e.get(r),h=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==h)return n===null&&(n=new Ec(t)),l=a?n.fromEquirectangular(r,l):n.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let c=r.image;return a&&c&&c.height>0||o&&c&&function(d){let u=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&u++;return u===p}(c)?(n===null&&(n=new Ec(t)),l=a?n.fromEquirectangular(r):n.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",i),l.texture):null}}}return r},dispose:function(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function dg(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Yi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pg(t,e,n,i){let r={},s=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let d in h.attributes)e.remove(h.attributes[d]);h.removeEventListener("dispose",a),delete r[h.id];let c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(l){let h=[],c=l.index,d=l.attributes.position,u=0;if(c!==null){let m=c.array;u=c.version;for(let f=0,v=m.length;f<v;f+=3){let y=m[f+0],g=m[f+1],S=m[f+2];h.push(y,g,g,S,S,y)}}else{if(d===void 0)return;{let m=d.array;u=d.version;for(let f=0,v=m.length/3-1;f<v;f+=3){let y=f+0,g=f+1,S=f+2;h.push(y,g,g,S,S,y)}}}let p=new((Xh(h))?uo:co)(h,1);p.version=u;let _=s.get(l);_&&e.remove(_),s.set(l,p)}return{get:function(l,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h},update:function(l){let h=l.attributes;for(let c in h)e.update(h[c],t.ARRAY_BUFFER)},getWireframeAttribute:function(l){let h=s.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return s.get(l)}}}function fg(t,e,n){let i,r,s;function a(o,l,h){h!==0&&(t.drawElementsInstanced(i,l,r,o*s,h),n.update(l,i,h))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){t.drawElements(i,l,r,o*s),n.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,h);let c=0;for(let d=0;d<h;d++)c+=l[d];n.update(c,i,1)},this.renderMultiDrawInstances=function(o,l,h,c){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,l[u],c[u]);else{d.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p]*c[p];n.update(u,i,1)}}}function mg(t){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3);break;case t.LINES:e.lines+=r*(n/2);break;case t.LINE_STRIP:e.lines+=r*(n-1);break;case t.LINE_LOOP:e.lines+=r*n;break;case t.POINTS:e.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function gg(t,e,n){let i=new WeakMap,r=new Zt;return{update:function(s,a,o){let l=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==c){let V=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;u===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let g=a.attributes.position.count*y,S=1;g>e.maxTextureSize&&(S=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let C=new Float32Array(g*S*4*c),A=new lo(C,g,S,c);A.type=xi,A.needsUpdate=!0;let L=4*y;for(let P=0;P<c;P++){let D=m[P],B=f[P],X=v[P],K=g*S*4*P;for(let k=0;k<D.count;k++){let $=k*L;u===!0&&(r.fromBufferAttribute(D,k),C[K+$+0]=r.x,C[K+$+1]=r.y,C[K+$+2]=r.z,C[K+$+3]=0),p===!0&&(r.fromBufferAttribute(B,k),C[K+$+4]=r.x,C[K+$+5]=r.y,C[K+$+6]=r.z,C[K+$+7]=0),_===!0&&(r.fromBufferAttribute(X,k),C[K+$+8]=r.x,C[K+$+9]=r.y,C[K+$+10]=r.z,C[K+$+11]=X.itemSize===4?r.w:1)}}d={count:c,texture:A,size:new st(g,S)},i.set(a,d),a.addEventListener("dispose",V)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(t,"morphTargetBaseInfluence",p),o.getUniforms().setValue(t,"morphTargetInfluences",l)}o.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}}}function _g(t,e,n,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),n.remove(o.instanceMatrix),o.instanceColor!==null&&n.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(r.get(h)!==o&&(e.update(h),r.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,t.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;r.get(c)!==o&&(c.update(),r.set(c,o))}return h},dispose:function(){r=new WeakMap}}}var Yp=new he,Cp=new Mo(1,1),Zp=new lo,Jp=new Zh,jp=new po,Ip=[],Lp=[],Pp=new Float32Array(16),Up=new Float32Array(9),Np=new Float32Array(4);function Kr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Ip[r];if(s===void 0&&(s=new Float32Array(r),Ip[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function ve(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ye(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function el(t,e){let n=Lp[e];n===void 0&&(n=new Int32Array(e),Lp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ve(n,e))return;t.uniform2fv(this.addr,e),ye(n,e)}}function Mg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ve(n,e))return;t.uniform3fv(this.addr,e),ye(n,e)}}function Sg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ve(n,e))return;t.uniform4fv(this.addr,e),ye(n,e)}}function xg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ve(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ye(n,e)}else{if(ve(n,i))return;Np.set(i),t.uniformMatrix2fv(this.addr,!1,Np),ye(n,i)}}function Tg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ve(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ye(n,e)}else{if(ve(n,i))return;Up.set(i),t.uniformMatrix3fv(this.addr,!1,Up),ye(n,i)}}function Eg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ve(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ye(n,e)}else{if(ve(n,i))return;Pp.set(i),t.uniformMatrix4fv(this.addr,!1,Pp),ye(n,i)}}function wg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ve(n,e))return;t.uniform2iv(this.addr,e),ye(n,e)}}function Ag(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ve(n,e))return;t.uniform3iv(this.addr,e),ye(n,e)}}function Rg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ve(n,e))return;t.uniform4iv(this.addr,e),ye(n,e)}}function Cg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ig(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ve(n,e))return;t.uniform2uiv(this.addr,e),ye(n,e)}}function Lg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ve(n,e))return;t.uniform3uiv(this.addr,e),ye(n,e)}}function Pg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ve(n,e))return;t.uniform4uiv(this.addr,e),ye(n,e)}}function Ug(t,e,n){let i=this.cache,r=n.allocateTextureUnit(),s;i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),this.type===t.SAMPLER_2D_SHADOW?(Cp.compareFunction=Gh,s=Cp):s=Yp,n.setTexture2D(e||s,r)}function Ng(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jp,r)}function Dg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jp,r)}function Fg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zp,r)}function Og(t,e){t.uniform1fv(this.addr,e)}function Bg(t,e){let n=Kr(e,this.size,2);t.uniform2fv(this.addr,n)}function zg(t,e){let n=Kr(e,this.size,3);t.uniform3fv(this.addr,n)}function Vg(t,e){let n=Kr(e,this.size,4);t.uniform4fv(this.addr,n)}function Hg(t,e){let n=Kr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Gg(t,e){let n=Kr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function kg(t,e){let n=Kr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Wg(t,e){t.uniform1iv(this.addr,e)}function Xg(t,e){t.uniform2iv(this.addr,e)}function qg(t,e){t.uniform3iv(this.addr,e)}function Yg(t,e){t.uniform4iv(this.addr,e)}function Zg(t,e){t.uniform1uiv(this.addr,e)}function Jg(t,e){t.uniform2uiv(this.addr,e)}function jg(t,e){t.uniform3uiv(this.addr,e)}function Kg(t,e){t.uniform4uiv(this.addr,e)}function $g(t,e,n){let i=this.cache,r=e.length,s=el(n,r);ve(i,s)||(t.uniform1iv(this.addr,s),ye(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Yp,s[a])}function Qg(t,e,n){let i=this.cache,r=e.length,s=el(n,r);ve(i,s)||(t.uniform1iv(this.addr,s),ye(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Jp,s[a])}function t0(t,e,n){let i=this.cache,r=e.length,s=el(n,r);ve(i,s)||(t.uniform1iv(this.addr,s),ye(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||jp,s[a])}function e0(t,e,n){let i=this.cache,r=e.length,s=el(n,r);ve(i,s)||(t.uniform1iv(this.addr,s),ye(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Zp,s[a])}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=function(i){switch(i){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return xg;case 35675:return Tg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return bg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Ig;case 36295:return Lg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Fg}}(e.type)}}class $p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return Vg;case 35674:return Hg;case 35675:return Gg;case 35676:return kg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Jg;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}(e.type)}}class Qp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let a=i[r];a.setValue(t,e[a.id],n)}}}var Tc=/(\w+)(\])?(\[|\.)?/g;function Dp(t,e){t.seq.push(e),t.map[e.id]=e}function n0(t,e,n){let i=t.name,r=i.length;for(Tc.lastIndex=0;;){let s=Tc.exec(i),a=Tc.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===r){Dp(n,h===void 0?new Kp(o,t,e):new $p(o,t,e));break}{let c=n.map[o];c===void 0&&(c=new Qp(o),Dp(n,c)),n=c}}}class qs{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i);n0(r,t.getUniformLocation(e,r.name),this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){let a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.id in e&&n.push(s)}return n}}function Fp(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var i0=0,Op=new Ut;function Bp(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+function(o,l){let h=o.split(`
`),c=[],d=Math.max(l-6,0),u=Math.min(l+6,h.length);for(let p=d;p<u;p++){let _=p+1;c.push(`${_===l?">":" "} ${_}: ${h[p]}`)}return c.join(`
`)}(t.getShaderSource(e),a)}return r}function r0(t,e){let n=function(i){kt._getMatrix(Op,kt.workingColorSpace,i);let r=`mat3( ${Op.elements.map((s)=>s.toFixed(4))} )`;switch(kt.getTransfer(i)){case Hh:return[r,"LinearTransferOETF"];case ee:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}}(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function s0(t,e){let n;switch(e){case Od:n="Linear";break;case Bd:n="Reinhard";break;case zd:n="Cineon";break;case ja:n="ACESFilmic";break;case Hd:n="AgX";break;case Gd:n="Neutral";break;case Vd:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var tl=new T;function a0(){return kt.getLuminanceCoefficients(tl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${tl.x.toFixed(4)}, ${tl.y.toFixed(4)}, ${tl.z.toFixed(4)} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Xs(t){return t!==""}function zp(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(t){return t.replace(o0,h0)}var l0=new Map;function h0(t,e){let n=Dt[e];if(n===void 0){let i=l0.get(e);if(i===void 0)throw Error("Can not resolve #include <"+e+">");n=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return wc(n)}var c0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(t){return t.replace(c0,u0)}function u0(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function d0(t,e,n,i){let r=t.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,l=function(B){let X="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===ih?X="SHADOWMAP_TYPE_PCF":B.shadowMapType===Ga?X="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===En&&(X="SHADOWMAP_TYPE_VSM"),X}(n),h=function(B){let X="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case Or:case ji:X="ENVMAP_TYPE_CUBE";break;case Cs:X="ENVMAP_TYPE_CUBE_UV"}return X}(n),c=function(B){let X="ENVMAP_MODE_REFLECTION";return B.envMap&&B.envMapMode===ji&&(X="ENVMAP_MODE_REFRACTION"),X}(n),d=function(B){let X="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case Nd:X="ENVMAP_BLENDING_MULTIPLY";break;case Dd:X="ENVMAP_BLENDING_MIX";break;case Fd:X="ENVMAP_BLENDING_ADD"}return X}(n),u=function(B){let X=B.envMapCubeUVHeight;if(X===null)return null;let K=Math.log2(X)-2,k=1/X;return{texelWidth:1/(3*Math.max(Math.pow(2,K),112)),texelHeight:k,maxMip:K}}(n),p=function(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}(n),_=function(B){let X=[];for(let K in B){let k=B[K];k!==!1&&X.push("#define "+K+" "+k)}return X.join(`
`)}(s),m=r.createProgram(),f,v,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),f.length>0&&(f+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),v.length>0&&(v+=`
`)):(f=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),v=[Gp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zn?"#define TONE_MAPPING":"",n.toneMapping!==Zn?Dt.tonemapping_pars_fragment:"",n.toneMapping!==Zn?s0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,r0("linearToOutputTexel",n.outputColorSpace),a0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),a=wc(a),a=zp(a,n),a=Vp(a,n),o=wc(o),o=zp(o,n),o=Vp(o,n),a=Hp(a),o=Hp(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",n.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let g=y+f+a,S=y+v+o,C=Fp(r,r.VERTEX_SHADER,g),A=Fp(r,r.FRAGMENT_SHADER,S);function L(B){if(t.debug.checkShaderErrors){let X=r.getProgramInfoLog(m)||"",K=r.getShaderInfoLog(C)||"",k=r.getShaderInfoLog(A)||"",$=X.trim(),G=K.trim(),q=k.trim(),Z=!0,ht=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,A);else{let ft=Bp(r,C,"vertex"),Q=Bp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+ft+`
`+Q)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):G!==""&&q!==""||(ht=!1);ht&&(B.diagnostics={runnable:Z,programLog:$,vertexShader:{log:G,prefix:f},fragmentShader:{log:q,prefix:v}})}r.deleteShader(C),r.deleteShader(A),V=new qs(r,m),P=function(X,K){let k={},$=X.getProgramParameter(K,X.ACTIVE_ATTRIBUTES);for(let G=0;G<$;G++){let q=X.getActiveAttrib(K,G),Z=q.name,ht=1;q.type===X.FLOAT_MAT2&&(ht=2),q.type===X.FLOAT_MAT3&&(ht=3),q.type===X.FLOAT_MAT4&&(ht=4),k[Z]={type:q.type,location:X.getAttribLocation(K,Z),locationSize:ht}}return k}(r,m)}let V,P;r.attachShader(m,C),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return V===void 0&&L(this),V},this.getAttributes=function(){return P===void 0&&L(this),P};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(m,37297)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=i0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=A,this}var p0=0;class tf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ef(t),e.set(t,n)),n}}class ef{constructor(t){this.id=p0++,this.code=t,this.usedTimes=0}}function f0(t,e,n,i,r,s,a){let o=new ho,l=new tf,h=new Set,c=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return h.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,v,y,g,S){let C=g.fog,A=S.geometry,L=f.isMeshStandardMaterial?g.environment:null,V=(f.isMeshStandardMaterial?n:e).get(f.envMap||L),P=V&&V.mapping===Cs?V.image.height:null,D=_[f.type];f.precision!==null&&(p=r.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let B=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,X=B!==void 0?B.length:0,K,k,$,G,q=0;if(A.morphAttributes.position!==void 0&&(q=1),A.morphAttributes.normal!==void 0&&(q=2),A.morphAttributes.color!==void 0&&(q=3),D){let qt=Cn[D];K=qt.vertexShader,k=qt.fragmentShader}else K=f.vertexShader,k=f.fragmentShader,l.update(f),$=l.getVertexShaderID(f),G=l.getFragmentShaderID(f);let Z=t.getRenderTarget(),ht=t.state.buffers.depth.getReversed(),ft=S.isInstancedMesh===!0,Q=S.isBatchedMesh===!0,J=!!f.map,mt=!!f.matcap,ot=!!V,it=!!f.aoMap,lt=!!f.lightMap,gt=!!f.bumpMap,b=!!f.normalMap,x=!!f.displacementMap,R=!!f.emissiveMap,F=!!f.metalnessMap,M=!!f.roughnessMap,I=f.anisotropy>0,E=f.clearcoat>0,U=f.dispersion>0,O=f.iridescence>0,z=f.sheen>0,H=f.transmission>0,at=I&&!!f.anisotropyMap,ut=E&&!!f.clearcoatMap,tt=E&&!!f.clearcoatNormalMap,rt=E&&!!f.clearcoatRoughnessMap,yt=O&&!!f.iridescenceMap,Et=O&&!!f.iridescenceThicknessMap,Pt=z&&!!f.sheenColorMap,Bt=z&&!!f.sheenRoughnessMap,Ct=!!f.specularMap,et=!!f.specularColorMap,dt=!!f.specularIntensityMap,xt=H&&!!f.transmissionMap,Ie=H&&!!f.thicknessMap,St=!!f.gradientMap,zt=!!f.alphaMap,Wt=f.alphaTest>0,li=!!f.alphaHash,N=!!f.extensions,Fe=Zn;f.toneMapped&&(Z!==null&&Z.isXRRenderTarget!==!0||(Fe=t.toneMapping));let xe={shaderID:D,shaderType:f.type,shaderName:f.name,vertexShader:K,fragmentShader:k,defines:f.defines,customVertexShaderID:$,customFragmentShaderID:G,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:Q,batchingColor:Q&&S._colorsTexture!==null,instancing:ft,instancingColor:ft&&S.instanceColor!==null,instancingMorph:ft&&S.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Be,alphaToCoverage:!!f.alphaToCoverage,map:J,matcap:mt,envMap:ot,envMapMode:ot&&V.mapping,envMapCubeUVHeight:P,aoMap:it,lightMap:lt,bumpMap:gt,normalMap:b,displacementMap:u&&x,emissiveMap:R,normalMapObjectSpace:b&&f.normalMapType===Qd,normalMapTangentSpace:b&&f.normalMapType===$d,metalnessMap:F,roughnessMap:M,anisotropy:I,anisotropyMap:at,clearcoat:E,clearcoatMap:ut,clearcoatNormalMap:tt,clearcoatRoughnessMap:rt,dispersion:U,iridescence:O,iridescenceMap:yt,iridescenceThicknessMap:Et,sheen:z,sheenColorMap:Pt,sheenRoughnessMap:Bt,specularMap:Ct,specularColorMap:et,specularIntensityMap:dt,transmission:H,transmissionMap:xt,thicknessMap:Ie,gradientMap:St,opaque:f.transparent===!1&&f.blending===As&&f.alphaToCoverage===!1,alphaMap:zt,alphaTest:Wt,alphaHash:li,combine:f.combine,mapUv:J&&m(f.map.channel),aoMapUv:it&&m(f.aoMap.channel),lightMapUv:lt&&m(f.lightMap.channel),bumpMapUv:gt&&m(f.bumpMap.channel),normalMapUv:b&&m(f.normalMap.channel),displacementMapUv:x&&m(f.displacementMap.channel),emissiveMapUv:R&&m(f.emissiveMap.channel),metalnessMapUv:F&&m(f.metalnessMap.channel),roughnessMapUv:M&&m(f.roughnessMap.channel),anisotropyMapUv:at&&m(f.anisotropyMap.channel),clearcoatMapUv:ut&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&m(f.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&m(f.sheenRoughnessMap.channel),specularMapUv:Ct&&m(f.specularMap.channel),specularColorMapUv:et&&m(f.specularColorMap.channel),specularIntensityMapUv:dt&&m(f.specularIntensityMap.channel),transmissionMapUv:xt&&m(f.transmissionMap.channel),thicknessMapUv:Ie&&m(f.thicknessMap.channel),alphaMapUv:zt&&m(f.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(b||I),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!A.attributes.uv&&(J||zt),fog:!!C,useFog:f.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:S.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:q,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:t.shadowMap.enabled&&y.length>0,shadowMapType:t.shadowMap.type,toneMapping:Fe,decodeVideoTexture:J&&f.map.isVideoTexture===!0&&kt.getTransfer(f.map.colorSpace)===ee,decodeVideoTextureEmissive:R&&f.emissiveMap.isVideoTexture===!0&&kt.getTransfer(f.emissiveMap.colorSpace)===ee,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===be,flipSided:f.side===je,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:N&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(N&&f.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return xe.vertexUv1s=h.has(1),xe.vertexUv2s=h.has(2),xe.vertexUv3s=h.has(3),h.clear(),xe},getProgramCacheKey:function(f){let v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(let y in f.defines)v.push(y),v.push(f.defines[y]);return f.isRawShaderMaterial===!1&&(function(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)}(v,f),function(y,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),g.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),y.push(o.mask)}(v,f),v.push(t.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()},getUniforms:function(f){let v=_[f.type],y;if(v){let g=Cn[v];y=cp.clone(g.uniforms)}else y=f.uniforms;return y},acquireProgram:function(f,v){let y;for(let g=0,S=c.length;g<S;g++){let C=c[g];if(C.cacheKey===v){y=C,++y.usedTimes;break}}return y===void 0&&(y=new d0(t,v,f,s),c.push(y)),y},releaseProgram:function(f){if(--f.usedTimes===0){let v=c.indexOf(f);c[v]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function m0(){let t=new WeakMap;return{has:function(e){return t.has(e)},get:function(e){let n=t.get(e);return n===void 0&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=i},dispose:function(){t=new WeakMap}}}function g0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function kp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Wp(){let t=[],e=0,n=[],i=[],r=[];function s(a,o,l,h,c,d){let u=t[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:d},t[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=h,u.renderOrder=a.renderOrder,u.z=c,u.group=d),e++,u}return{opaque:n,transmissive:i,transparent:r,init:function(){e=0,n.length=0,i.length=0,r.length=0},push:function(a,o,l,h,c,d){let u=s(a,o,l,h,c,d);l.transmission>0?i.push(u):l.transparent===!0?r.push(u):n.push(u)},unshift:function(a,o,l,h,c,d){let u=s(a,o,l,h,c,d);l.transmission>0?i.unshift(u):l.transparent===!0?r.unshift(u):n.unshift(u)},finish:function(){for(let a=e,o=t.length;a<o;a++){let l=t[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){n.length>1&&n.sort(a||g0),i.length>1&&i.sort(o||kp),r.length>1&&r.sort(o||kp)}}}function _0(){let t=new WeakMap;return{get:function(e,n){let i=t.get(e),r;return i===void 0?(r=new Wp,t.set(e,[r])):n>=i.length?(r=new Wp,i.push(r)):r=i[n],r},dispose:function(){t=new WeakMap}}}function v0(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new T,color:new vt};break;case"SpotLight":n={position:new T,direction:new T,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new T,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new T,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new T,halfWidth:new T,halfHeight:new T}}return t[e.id]=n,n}}}var y0=0;function M0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function S0(t){let e=new v0,n=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1000}}return o[l.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new T);let r=new T,s=new wt,a=new wt;return{setup:function(o){let l=0,h=0,c=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,u=0,p=0,_=0,m=0,f=0,v=0,y=0,g=0,S=0,C=0;o.sort(M0);for(let L=0,V=o.length;L<V;L++){let P=o[L],D=P.color,B=P.intensity,X=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=D.r*B,h+=D.g*B,c+=D.b*B;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],B);C++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,G=n.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=P.shadow.matrix,f++}i.directional[d]=k,d++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(B),k.distance=X,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[p]=k;let $=P.shadow;if(P.map&&(i.spotLightMap[g]=P.map,g++,$.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[p]=$.matrix,P.castShadow){let G=n.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[p]=G,i.spotShadowMap[p]=K,y++}p++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(D).multiplyScalar(B),k.halfWidth.set(0.5*P.width,0,0),k.halfHeight.set(0,0.5*P.height,0),i.rectArea[_]=k,_++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let $=P.shadow,G=n.get(P);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[u]=G,i.pointShadowMap[u]=K,i.pointShadowMatrix[u]=P.shadow.matrix,v++}i.point[u]=k,u++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(B),k.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[m]=k,m++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=c;let A=i.hash;A.directionalLength===d&&A.pointLength===u&&A.spotLength===p&&A.rectAreaLength===_&&A.hemiLength===m&&A.numDirectionalShadows===f&&A.numPointShadows===v&&A.numSpotShadows===y&&A.numSpotMaps===g&&A.numLightProbes===C||(i.directional.length=d,i.spot.length=p,i.rectArea.length=_,i.point.length=u,i.hemi.length=m,i.directionalShadow.length=f,i.directionalShadowMap.length=f,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=f,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+g-S,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=C,A.directionalLength=d,A.pointLength=u,A.spotLength=p,A.rectAreaLength=_,A.hemiLength=m,A.numDirectionalShadows=f,A.numPointShadows=v,A.numSpotShadows=y,A.numSpotMaps=g,A.numLightProbes=C,i.version=y0++)},setupView:function(o,l){let h=0,c=0,d=0,u=0,p=0,_=l.matrixWorldInverse;for(let m=0,f=o.length;m<f;m++){let v=o[m];if(v.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(v.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(v.isRectAreaLight){let y=i.rectArea[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),a.identity(),s.copy(v.matrixWorld),s.premultiply(_),a.extractRotation(s),y.halfWidth.set(0.5*v.width,0,0),y.halfHeight.set(0,0.5*v.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),u++}else if(v.isPointLight){let y=i.point[c];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),c++}else if(v.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(_),p++}}},state:i}}function Xp(t){let e=new S0(t),n=[],i=[],r={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,n.length=0,i.length=0},state:r,setupLights:function(){e.setup(n)},setupLightsView:function(s){e.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function x0(t){let e=new WeakMap;return{get:function(n,i=0){let r=e.get(n),s;return r===void 0?(s=new Xp(t),e.set(n,[s])):i>=r.length?(s=new Xp(t),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}function T0(t,e,n){let i=new tr,r=new st,s=new st,a=new Zt,o=new ac({depthPacking:Kd}),l=new oc,h={},c=n.maxTextureSize,d={[wn]:je,[je]:wn,[be]:be},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Jt;_.setAttribute("position",new ae(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let m=new ce(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ih;let v=this.type;function y(A,L){let V=e.update(m);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(r.x,r.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(L,null,V,u,m,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(L,null,V,p,m,null)}function g(A,L,V,P){let D=null,B=V.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)D=B;else if(D=V.isPointLight===!0?l:o,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let X=D.uuid,K=L.uuid,k=h[X];k===void 0&&(k={},h[X]=k);let $=k[K];$===void 0&&($=D.clone(),k[K]=$,L.addEventListener("dispose",C)),D=$}if(D.visible=L.visible,D.wireframe=L.wireframe,D.side=P===En?L.shadowSide!==null?L.shadowSide:L.side:L.shadowSide!==null?L.shadowSide:d[L.side],D.alphaMap=L.alphaMap,D.alphaTest=L.alphaToCoverage===!0?0.5:L.alphaTest,D.map=L.map,D.clipShadows=L.clipShadows,D.clippingPlanes=L.clippingPlanes,D.clipIntersection=L.clipIntersection,D.displacementMap=L.displacementMap,D.displacementScale=L.displacementScale,D.displacementBias=L.displacementBias,D.wireframeLinewidth=L.wireframeLinewidth,D.linewidth=L.linewidth,V.isPointLight===!0&&D.isMeshDistanceMaterial===!0)t.properties.get(D).light=V;return D}function S(A,L,V,P,D){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===En)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld);let X=e.update(A),K=A.material;if(Array.isArray(K)){let k=X.groups;for(let $=0,G=k.length;$<G;$++){let q=k[$],Z=K[q.materialIndex];if(Z&&Z.visible){let ht=g(A,Z,P,D);A.onBeforeShadow(t,A,L,V,X,ht,q),t.renderBufferDirect(V,null,X,ht,A,q),A.onAfterShadow(t,A,L,V,X,ht,q)}}}else if(K.visible){let k=g(A,K,P,D);A.onBeforeShadow(t,A,L,V,X,k,null),t.renderBufferDirect(V,null,X,k,A,null),A.onAfterShadow(t,A,L,V,X,k,null)}}let B=A.children;for(let X=0,K=B.length;X<K;X++)S(B[X],L,V,P,D)}function C(A){A.target.removeEventListener("dispose",C);for(let L in h){let V=h[L],P=A.target.uuid;if(P in V)V[P].dispose(),delete V[P]}}this.render=function(A,L,V){if(f.enabled===!1)return;if(f.autoUpdate===!1&&f.needsUpdate===!1)return;if(A.length===0)return;let P=t.getRenderTarget(),D=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),X=t.state;X.setBlending(Mi),X.buffers.depth.getReversed()?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let K=v!==En&&this.type===En,k=v===En&&this.type!==En;for(let $=0,G=A.length;$<G;$++){let q=A[$],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let ht=Z.getFrameExtents();if(r.multiply(ht),s.copy(Z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ht.x),r.x=s.x*ht.x,Z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ht.y),r.y=s.y*ht.y,Z.mapSize.y=s.y)),Z.map===null||K===!0||k===!0){let Q=this.type!==En?{minFilter:Jn,magFilter:Jn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ti(r.x,r.y,Q),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}t.setRenderTarget(Z.map),t.clear();let ft=Z.getViewportCount();for(let Q=0;Q<ft;Q++){let J=Z.getViewport(Q);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),X.viewport(a),Z.updateMatrices(q,Q),i=Z.getFrustum(),S(L,V,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===En&&y(Z,V),Z.needsUpdate=!1}v=this.type,f.needsUpdate=!1,t.setRenderTarget(P,D,B)}}var E0={[ka]:Wa,[Xa]:Za,[qa]:Ja,[Rs]:Ya,[Wa]:ka,[Za]:Xa,[Ja]:qa,[Ya]:Rs};function w0(t,e){let n=new function(){let M=!1,I=new Zt,E=null,U=new Zt(0,0,0,0);return{setMask:function(O){E===O||M||(t.colorMask(O,O,O,O),E=O)},setLocked:function(O){M=O},setClear:function(O,z,H,at,ut){ut===!0&&(O*=at,z*=at,H*=at),I.set(O,z,H,at),U.equals(I)===!1&&(t.clearColor(O,z,H,at),U.copy(I))},reset:function(){M=!1,E=null,U.set(-1,0,0,0)}}},i=new function(){let M=!1,I=!1,E=null,U=null,O=null;return{setReversed:function(z){if(I!==z){let H=e.get("EXT_clip_control");z?H.clipControlEXT(H.LOWER_LEFT_EXT,H.ZERO_TO_ONE_EXT):H.clipControlEXT(H.LOWER_LEFT_EXT,H.NEGATIVE_ONE_TO_ONE_EXT),I=z;let at=O;O=null,this.setClear(at)}},getReversed:function(){return I},setTest:function(z){z?ot(t.DEPTH_TEST):it(t.DEPTH_TEST)},setMask:function(z){E===z||M||(t.depthMask(z),E=z)},setFunc:function(z){if(I&&(z=E0[z]),U!==z){switch(z){case ka:t.depthFunc(t.NEVER);break;case Wa:t.depthFunc(t.ALWAYS);break;case Xa:t.depthFunc(t.LESS);break;case Rs:t.depthFunc(t.LEQUAL);break;case qa:t.depthFunc(t.EQUAL);break;case Ya:t.depthFunc(t.GEQUAL);break;case Za:t.depthFunc(t.GREATER);break;case Ja:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}U=z}},setLocked:function(z){M=z},setClear:function(z){O!==z&&(I&&(z=1-z),t.clearDepth(z),O=z)},reset:function(){M=!1,E=null,U=null,O=null,I=!1}}},r=new function(){let M=!1,I=null,E=null,U=null,O=null,z=null,H=null,at=null,ut=null;return{setTest:function(tt){M||(tt?ot(t.STENCIL_TEST):it(t.STENCIL_TEST))},setMask:function(tt){I===tt||M||(t.stencilMask(tt),I=tt)},setFunc:function(tt,rt,yt){E===tt&&U===rt&&O===yt||(t.stencilFunc(tt,rt,yt),E=tt,U=rt,O=yt)},setOp:function(tt,rt,yt){z===tt&&H===rt&&at===yt||(t.stencilOp(tt,rt,yt),z=tt,H=rt,at=yt)},setLocked:function(tt){M=tt},setClear:function(tt){ut!==tt&&(t.clearStencil(tt),ut=tt)},reset:function(){M=!1,I=null,E=null,U=null,O=null,z=null,H=null,at=null,ut=null}}},s=new WeakMap,a=new WeakMap,o={},l={},h=new WeakMap,c=[],d=null,u=!1,p=null,_=null,m=null,f=null,v=null,y=null,g=null,S=new vt(0,0,0),C=0,A=!1,L=null,V=null,P=null,D=null,B=null,X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,k=0,$=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),K=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=k>=2);let G=null,q={},Z=t.getParameter(t.SCISSOR_BOX),ht=t.getParameter(t.VIEWPORT),ft=new Zt().fromArray(Z),Q=new Zt().fromArray(ht);function J(M,I,E,U){let O=new Uint8Array(4),z=t.createTexture();t.bindTexture(M,z),t.texParameteri(M,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(M,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let H=0;H<E;H++)M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?t.texImage3D(I,0,t.RGBA,1,1,U,0,t.RGBA,t.UNSIGNED_BYTE,O):t.texImage2D(I+H,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,O);return z}let mt={};function ot(M){o[M]!==!0&&(t.enable(M),o[M]=!0)}function it(M){o[M]!==!1&&(t.disable(M),o[M]=!1)}mt[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),mt[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),mt[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),i.setClear(1),r.setClear(0),ot(t.DEPTH_TEST),i.setFunc(Rs),x(!1),R(nh),ot(t.CULL_FACE),b(Mi);let lt={[Fr]:t.FUNC_ADD,[md]:t.FUNC_SUBTRACT,[gd]:t.FUNC_REVERSE_SUBTRACT};lt[_d]=t.MIN,lt[vd]=t.MAX;let gt={[yd]:t.ZERO,[Md]:t.ONE,[Sd]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[Cd]:t.SRC_ALPHA_SATURATE,[Ad]:t.DST_COLOR,[wd]:t.DST_ALPHA,[xd]:t.ONE_MINUS_SRC_COLOR,[Ed]:t.ONE_MINUS_SRC_ALPHA,[Rd]:t.ONE_MINUS_DST_COLOR,[bd]:t.ONE_MINUS_DST_ALPHA,[Id]:t.CONSTANT_COLOR,[Ld]:t.ONE_MINUS_CONSTANT_COLOR,[Pd]:t.CONSTANT_ALPHA,[Ud]:t.ONE_MINUS_CONSTANT_ALPHA};function b(M,I,E,U,O,z,H,at,ut,tt){if(M!==Mi){if(u===!1&&(ot(t.BLEND),u=!0),M===fd)O=O||I,z=z||E,H=H||U,I===_&&O===v||(t.blendEquationSeparate(lt[I],lt[O]),_=I,v=O),E===m&&U===f&&z===y&&H===g||(t.blendFuncSeparate(gt[E],gt[U],gt[z],gt[H]),m=E,f=U,y=z,g=H),at.equals(S)!==!1&&ut===C||(t.blendColor(at.r,at.g,at.b,ut),S.copy(at),C=ut),p=M,A=!1;else if(M!==p||tt!==A){if(_===Fr&&v===Fr||(t.blendEquation(t.FUNC_ADD),_=Fr,v=Fr),tt)switch(M){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rh:t.blendFunc(t.ONE,t.ONE);break;case sh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ah:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}m=null,f=null,y=null,g=null,S.set(0,0,0),C=0,p=M,A=tt}}else u===!0&&(it(t.BLEND),u=!1)}function x(M){L!==M&&(M?t.frontFace(t.CW):t.frontFace(t.CCW),L=M)}function R(M){M!==dd?(ot(t.CULL_FACE),M!==V&&(M===nh?t.cullFace(t.BACK):M===pd?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):it(t.CULL_FACE),V=M}function F(M,I,E){M?(ot(t.POLYGON_OFFSET_FILL),D===I&&B===E||(t.polygonOffset(I,E),D=I,B=E)):it(t.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:i,stencil:r},enable:ot,disable:it,bindFramebuffer:function(M,I){return l[M]!==I&&(t.bindFramebuffer(M,I),l[M]=I,M===t.DRAW_FRAMEBUFFER&&(l[t.FRAMEBUFFER]=I),M===t.FRAMEBUFFER&&(l[t.DRAW_FRAMEBUFFER]=I),!0)},drawBuffers:function(M,I){let E=c,U=!1;if(M){E=h.get(I),E===void 0&&(E=[],h.set(I,E));let O=M.textures;if(E.length!==O.length||E[0]!==t.COLOR_ATTACHMENT0){for(let z=0,H=O.length;z<H;z++)E[z]=t.COLOR_ATTACHMENT0+z;E.length=O.length,U=!0}}else E[0]!==t.BACK&&(E[0]=t.BACK,U=!0);U&&t.drawBuffers(E)},useProgram:function(M){return d!==M&&(t.useProgram(M),d=M,!0)},setBlending:b,setMaterial:function(M,I){M.side===be?it(t.CULL_FACE):ot(t.CULL_FACE);let E=M.side===je;I&&(E=!E),x(E),M.blending===As&&M.transparent===!1?b(Mi):b(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),i.setFunc(M.depthFunc),i.setTest(M.depthTest),i.setMask(M.depthWrite),n.setMask(M.colorWrite);let U=M.stencilWrite;r.setTest(U),U&&(r.setMask(M.stencilWriteMask),r.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),r.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),F(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?ot(t.SAMPLE_ALPHA_TO_COVERAGE):it(t.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:x,setCullFace:R,setLineWidth:function(M){M!==P&&(K&&t.lineWidth(M),P=M)},setPolygonOffset:F,setScissorTest:function(M){M?ot(t.SCISSOR_TEST):it(t.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=t.TEXTURE0+X-1),G!==M&&(t.activeTexture(M),G=M)},bindTexture:function(M,I,E){E===void 0&&(E=G===null?t.TEXTURE0+X-1:G);let U=q[E];U===void 0&&(U={type:void 0,texture:void 0},q[E]=U),U.type===M&&U.texture===I||(G!==E&&(t.activeTexture(E),G=E),t.bindTexture(M,I||mt[M]),U.type=M,U.texture=I)},unbindTexture:function(){let M=q[G];M!==void 0&&M.type!==void 0&&(t.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{t.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{t.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{t.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,I){let E=a.get(I);E===void 0&&(E=new WeakMap,a.set(I,E));let U=E.get(M);U===void 0&&(U=t.getUniformBlockIndex(I,M.name),E.set(M,U))},uniformBlockBinding:function(M,I){let E=a.get(I).get(M);s.get(I)!==E&&(t.uniformBlockBinding(I,E,M.__bindingPointIndex),s.set(I,E))},texStorage2D:function(){try{t.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{t.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{t.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{t.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){ft.equals(M)===!1&&(t.scissor(M.x,M.y,M.z,M.w),ft.copy(M))},viewport:function(M){Q.equals(M)===!1&&(t.viewport(M.x,M.y,M.z,M.w),Q.copy(M))},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),i.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),o={},G=null,q={},l={},h=new WeakMap,c=[],d=null,u=!1,p=null,_=null,m=null,f=null,v=null,y=null,g=null,S=new vt(0,0,0),C=0,A=!1,L=null,V=null,P=null,D=null,B=null,ft.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),n.reset(),i.reset(),r.reset()}}}function b0(t,e,n,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new st,c=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function _(b,x){return p?new OffscreenCanvas(b,x):Ur("canvas")}function m(b,x,R){let F=1,M=gt(b);if((M.width>R||M.height>R)&&(F=R/Math.max(M.width,M.height)),F<1){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let I=Math.floor(F*M.width),E=Math.floor(F*M.height);d===void 0&&(d=_(I,E));let U=x?_(I,E):d;return U.width=I,U.height=E,U.getContext("2d").drawImage(b,0,0,I,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+I+"x"+E+")."),U}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),b}return b}function f(b){return b.generateMipmaps}function v(b){t.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(b,x,R,F,M=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let I=x;if(x===t.RED&&(R===t.FLOAT&&(I=t.R32F),R===t.HALF_FLOAT&&(I=t.R16F),R===t.UNSIGNED_BYTE&&(I=t.R8)),x===t.RED_INTEGER&&(R===t.UNSIGNED_BYTE&&(I=t.R8UI),R===t.UNSIGNED_SHORT&&(I=t.R16UI),R===t.UNSIGNED_INT&&(I=t.R32UI),R===t.BYTE&&(I=t.R8I),R===t.SHORT&&(I=t.R16I),R===t.INT&&(I=t.R32I)),x===t.RG&&(R===t.FLOAT&&(I=t.RG32F),R===t.HALF_FLOAT&&(I=t.RG16F),R===t.UNSIGNED_BYTE&&(I=t.RG8)),x===t.RG_INTEGER&&(R===t.UNSIGNED_BYTE&&(I=t.RG8UI),R===t.UNSIGNED_SHORT&&(I=t.RG16UI),R===t.UNSIGNED_INT&&(I=t.RG32UI),R===t.BYTE&&(I=t.RG8I),R===t.SHORT&&(I=t.RG16I),R===t.INT&&(I=t.RG32I)),x===t.RGB_INTEGER&&(R===t.UNSIGNED_BYTE&&(I=t.RGB8UI),R===t.UNSIGNED_SHORT&&(I=t.RGB16UI),R===t.UNSIGNED_INT&&(I=t.RGB32UI),R===t.BYTE&&(I=t.RGB8I),R===t.SHORT&&(I=t.RGB16I),R===t.INT&&(I=t.RGB32I)),x===t.RGBA_INTEGER&&(R===t.UNSIGNED_BYTE&&(I=t.RGBA8UI),R===t.UNSIGNED_SHORT&&(I=t.RGBA16UI),R===t.UNSIGNED_INT&&(I=t.RGBA32UI),R===t.BYTE&&(I=t.RGBA8I),R===t.SHORT&&(I=t.RGBA16I),R===t.INT&&(I=t.RGBA32I)),x===t.RGB&&R===t.UNSIGNED_INT_5_9_9_9_REV&&(I=t.RGB9_E5),x===t.RGBA){let E=M?Hh:kt.getTransfer(F);R===t.FLOAT&&(I=t.RGBA32F),R===t.HALF_FLOAT&&(I=t.RGBA16F),R===t.UNSIGNED_BYTE&&(I=E===ee?t.SRGB8_ALPHA8:t.RGBA8),R===t.UNSIGNED_SHORT_4_4_4_4&&(I=t.RGBA4),R===t.UNSIGNED_SHORT_5_5_5_1&&(I=t.RGB5_A1)}return I!==t.R16F&&I!==t.R32F&&I!==t.RG16F&&I!==t.RG32F&&I!==t.RGBA16F&&I!==t.RGBA32F||e.get("EXT_color_buffer_float"),I}function S(b,x){let R;return b?x===null||x===zr||x===Vr?R=t.DEPTH24_STENCIL8:x===xi?R=t.DEPTH32F_STENCIL8:x===Is&&(R=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zr||x===Vr?R=t.DEPTH_COMPONENT24:x===xi?R=t.DEPTH_COMPONENT32F:x===Is&&(R=t.DEPTH_COMPONENT16),R}function C(b,x){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Jn&&b.minFilter!==ke?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){let x=b.target;x.removeEventListener("dispose",A),function(R){let F=i.get(R);if(F.__webglInit===void 0)return;let M=R.source,I=u.get(M);if(I){let E=I[F.__cacheKey];E.usedTimes--,E.usedTimes===0&&V(R),Object.keys(I).length===0&&u.delete(M)}i.remove(R)}(x),x.isVideoTexture&&c.delete(x)}function L(b){let x=b.target;x.removeEventListener("dispose",L),function(R){let F=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(F.__webglFramebuffer[I]))for(let E=0;E<F.__webglFramebuffer[I].length;E++)t.deleteFramebuffer(F.__webglFramebuffer[I][E]);else t.deleteFramebuffer(F.__webglFramebuffer[I]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[I])}else{if(Array.isArray(F.__webglFramebuffer))for(let I=0;I<F.__webglFramebuffer.length;I++)t.deleteFramebuffer(F.__webglFramebuffer[I]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let I=0;I<F.__webglColorRenderbuffer.length;I++)F.__webglColorRenderbuffer[I]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[I]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let M=R.textures;for(let I=0,E=M.length;I<E;I++){let U=i.get(M[I]);U.__webglTexture&&(t.deleteTexture(U.__webglTexture),a.memory.textures--),i.remove(M[I])}i.remove(R)}(x)}function V(b){let x=i.get(b);t.deleteTexture(x.__webglTexture);let R=b.source;delete u.get(R)[x.__cacheKey],a.memory.textures--}let P=0;function D(b,x){let R=i.get(b);if(b.isVideoTexture&&function(F){let M=a.render.frame;c.get(F)!==M&&(c.set(F,M),F.update())}(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&R.__version!==b.version){let F=b.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(F.complete!==!1)return void q(R,b,x);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else b.isExternalTexture&&(R.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,R.__webglTexture,t.TEXTURE0+x)}let B={[_n]:t.REPEAT,[Ki]:t.CLAMP_TO_EDGE,[Qa]:t.MIRRORED_REPEAT},X={[Jn]:t.NEAREST,[to]:t.NEAREST_MIPMAP_NEAREST,[$i]:t.NEAREST_MIPMAP_LINEAR,[ke]:t.LINEAR,[Br]:t.LINEAR_MIPMAP_NEAREST,[jn]:t.LINEAR_MIPMAP_LINEAR},K={[tp]:t.NEVER,[ap]:t.ALWAYS,[ep]:t.LESS,[Gh]:t.LEQUAL,[np]:t.EQUAL,[sp]:t.GEQUAL,[ip]:t.GREATER,[rp]:t.NOTEQUAL};function k(b,x){if(x.type!==xi||e.has("OES_texture_float_linear")!==!1||x.magFilter!==ke&&x.magFilter!==Br&&x.magFilter!==$i&&x.magFilter!==jn&&x.minFilter!==ke&&x.minFilter!==Br&&x.minFilter!==$i&&x.minFilter!==jn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,B[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,B[x.wrapT]),b!==t.TEXTURE_3D&&b!==t.TEXTURE_2D_ARRAY||t.texParameteri(b,t.TEXTURE_WRAP_R,B[x.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,X[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,X[x.minFilter]),x.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,K[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jn)return;if(x.minFilter!==$i&&x.minFilter!==jn)return;if(x.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function $(b,x){let R=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));let F=x.source,M=u.get(F);M===void 0&&(M={},u.set(F,M));let I=function(E){let U=[];return U.push(E.wrapS),U.push(E.wrapT),U.push(E.wrapR||0),U.push(E.magFilter),U.push(E.minFilter),U.push(E.anisotropy),U.push(E.internalFormat),U.push(E.format),U.push(E.type),U.push(E.generateMipmaps),U.push(E.premultiplyAlpha),U.push(E.flipY),U.push(E.unpackAlignment),U.push(E.colorSpace),U.join()}(x);if(I!==b.__cacheKey){M[I]===void 0&&(M[I]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,R=!0),M[I].usedTimes++;let E=M[b.__cacheKey];E!==void 0&&(M[b.__cacheKey].usedTimes--,E.usedTimes===0&&V(x)),b.__cacheKey=I,b.__webglTexture=M[I].texture}return R}function G(b,x,R){return Math.floor(Math.floor(b/R)/x)}function q(b,x,R){let F=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(F=t.TEXTURE_3D);let M=$(b,x),I=x.source;n.bindTexture(F,b.__webglTexture,t.TEXTURE0+R);let E=i.get(I);if(I.version!==E.__version||M===!0){n.activeTexture(t.TEXTURE0+R);let U=kt.getPrimaries(kt.workingColorSpace),O=x.colorSpace===$n?null:kt.getPrimaries(x.colorSpace),z=x.colorSpace===$n||U===O?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,z);let H=m(x.image,!1,r.maxTextureSize);H=lt(x,H);let at=s.convert(x.format,x.colorSpace),ut=s.convert(x.type),tt,rt=g(x.internalFormat,at,ut,x.colorSpace,x.isVideoTexture);k(F,x);let yt=x.mipmaps,Et=x.isVideoTexture!==!0,Pt=E.__version===void 0||M===!0,Bt=I.dataReady,Ct=C(x,H);if(x.isDepthTexture)rt=S(x.format===Ps,x.type),Pt&&(Et?n.texStorage2D(t.TEXTURE_2D,1,rt,H.width,H.height):n.texImage2D(t.TEXTURE_2D,0,rt,H.width,H.height,0,at,ut,null));else if(x.isDataTexture)if(yt.length>0){Et&&Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,rt,yt[0].width,yt[0].height);for(let et=0,dt=yt.length;et<dt;et++)tt=yt[et],Et?Bt&&n.texSubImage2D(t.TEXTURE_2D,et,0,0,tt.width,tt.height,at,ut,tt.data):n.texImage2D(t.TEXTURE_2D,et,rt,tt.width,tt.height,0,at,ut,tt.data);x.generateMipmaps=!1}else Et?(Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,rt,H.width,H.height),Bt&&function(et,dt,xt,Ie){let St=et.updateRanges;if(St.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,dt.width,dt.height,xt,Ie,dt.data);else{St.sort((Fe,xe)=>Fe.start-xe.start);let zt=0;for(let Fe=1;Fe<St.length;Fe++){let xe=St[zt],qt=St[Fe],Oi=xe.start+xe.count,Bi=G(qt.start,dt.width,4),zi=G(xe.start,dt.width,4);qt.start<=Oi+1&&Bi===zi&&G(qt.start+qt.count-1,dt.width,4)===Bi?xe.count=Math.max(xe.count,qt.start+qt.count-xe.start):(++zt,St[zt]=qt)}St.length=zt+1;let Wt=t.getParameter(t.UNPACK_ROW_LENGTH),li=t.getParameter(t.UNPACK_SKIP_PIXELS),N=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,dt.width);for(let Fe=0,xe=St.length;Fe<xe;Fe++){let qt=St[Fe],Oi=Math.floor(qt.start/4),Bi=Math.ceil(qt.count/4),zi=Oi%dt.width,os=Math.floor(Oi/dt.width),ta=Bi;t.pixelStorei(t.UNPACK_SKIP_PIXELS,zi),t.pixelStorei(t.UNPACK_SKIP_ROWS,os),n.texSubImage2D(t.TEXTURE_2D,0,zi,os,ta,1,xt,Ie,dt.data)}et.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Wt),t.pixelStorei(t.UNPACK_SKIP_PIXELS,li),t.pixelStorei(t.UNPACK_SKIP_ROWS,N)}}(x,H,at,ut)):n.texImage2D(t.TEXTURE_2D,0,rt,H.width,H.height,0,at,ut,H.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Et&&Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ct,rt,yt[0].width,yt[0].height,H.depth);for(let et=0,dt=yt.length;et<dt;et++)if(tt=yt[et],x.format!==bn)if(at!==null)if(Et){if(Bt)if(x.layerUpdates.size>0){let xt=_c(tt.width,tt.height,x.format,x.type);for(let Ie of x.layerUpdates){let St=tt.data.subarray(Ie*xt/tt.data.BYTES_PER_ELEMENT,(Ie+1)*xt/tt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,Ie,tt.width,tt.height,1,at,St)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,0,tt.width,tt.height,H.depth,at,tt.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,et,rt,tt.width,tt.height,H.depth,0,tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?Bt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,0,tt.width,tt.height,H.depth,at,ut,tt.data):n.texImage3D(t.TEXTURE_2D_ARRAY,et,rt,tt.width,tt.height,H.depth,0,at,ut,tt.data)}else{Et&&Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,rt,yt[0].width,yt[0].height);for(let et=0,dt=yt.length;et<dt;et++)tt=yt[et],x.format!==bn?at!==null?Et?Bt&&n.compressedTexSubImage2D(t.TEXTURE_2D,et,0,0,tt.width,tt.height,at,tt.data):n.compressedTexImage2D(t.TEXTURE_2D,et,rt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?Bt&&n.texSubImage2D(t.TEXTURE_2D,et,0,0,tt.width,tt.height,at,ut,tt.data):n.texImage2D(t.TEXTURE_2D,et,rt,tt.width,tt.height,0,at,ut,tt.data)}else if(x.isDataArrayTexture)if(Et){if(Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ct,rt,H.width,H.height,H.depth),Bt)if(x.layerUpdates.size>0){let et=_c(H.width,H.height,x.format,x.type);for(let dt of x.layerUpdates){let xt=H.data.subarray(dt*et/H.data.BYTES_PER_ELEMENT,(dt+1)*et/H.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,dt,H.width,H.height,1,at,ut,xt)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,at,ut,H.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,rt,H.width,H.height,H.depth,0,at,ut,H.data);else if(x.isData3DTexture)Et?(Pt&&n.texStorage3D(t.TEXTURE_3D,Ct,rt,H.width,H.height,H.depth),Bt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,at,ut,H.data)):n.texImage3D(t.TEXTURE_3D,0,rt,H.width,H.height,H.depth,0,at,ut,H.data);else if(x.isFramebufferTexture){if(Pt)if(Et)n.texStorage2D(t.TEXTURE_2D,Ct,rt,H.width,H.height);else{let{width:et,height:dt}=H;for(let xt=0;xt<Ct;xt++)n.texImage2D(t.TEXTURE_2D,xt,rt,et,dt,0,at,ut,null),et>>=1,dt>>=1}}else if(yt.length>0){if(Et&&Pt){let et=gt(yt[0]);n.texStorage2D(t.TEXTURE_2D,Ct,rt,et.width,et.height)}for(let et=0,dt=yt.length;et<dt;et++)tt=yt[et],Et?Bt&&n.texSubImage2D(t.TEXTURE_2D,et,0,0,at,ut,tt):n.texImage2D(t.TEXTURE_2D,et,rt,at,ut,tt);x.generateMipmaps=!1}else if(Et){if(Pt){let et=gt(H);n.texStorage2D(t.TEXTURE_2D,Ct,rt,et.width,et.height)}Bt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,at,ut,H)}else n.texImage2D(t.TEXTURE_2D,0,rt,at,ut,H);f(x)&&v(F),E.__version=I.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Z(b,x,R,F,M,I){let E=s.convert(R.format,R.colorSpace),U=s.convert(R.type),O=g(R.internalFormat,E,U,R.colorSpace),z=i.get(x),H=i.get(R);if(H.__renderTarget=x,!z.__hasExternalTextures){let at=Math.max(1,x.width>>I),ut=Math.max(1,x.height>>I);M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?n.texImage3D(M,I,O,at,ut,x.depth,0,E,U,null):n.texImage2D(M,I,O,at,ut,0,E,U,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),it(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,M,H.__webglTexture,0,ot(x)):(M===t.TEXTURE_2D||M>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&M<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,M,H.__webglTexture,I),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(b,x,R){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer){let F=x.depthTexture,M=F&&F.isDepthTexture?F.type:null,I=S(x.stencilBuffer,M),E=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,U=ot(x);it(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,U,I,x.width,x.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,U,I,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,I,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,E,t.RENDERBUFFER,b)}else{let F=x.textures;for(let M=0;M<F.length;M++){let I=F[M],E=s.convert(I.format,I.colorSpace),U=s.convert(I.type),O=g(I.internalFormat,E,U,I.colorSpace),z=ot(x);R&&it(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,z,O,x.width,x.height):it(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,z,O,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,O,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ft(b,x){if(x&&x.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!x.depthTexture||!x.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let R=i.get(x.depthTexture);R.__renderTarget=x,R.__webglTexture&&x.depthTexture.image.width===x.width&&x.depthTexture.image.height===x.height||(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),D(x.depthTexture,0);let F=R.__webglTexture,M=ot(x);if(x.depthTexture.format===eo)it(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,M):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else{if(x.depthTexture.format!==Ps)throw Error("Unknown depthTexture format");it(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,M):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0)}}function Q(b){let x=i.get(b),R=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let F=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),F){let M=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,F.removeEventListener("dispose",M)};F.addEventListener("dispose",M),x.__depthDisposeCallback=M}x.__boundDepthTexture=F}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw Error("target.depthTexture not supported in Cube render targets");let F=b.texture.mipmaps;F&&F.length>0?ft(x.__webglFramebuffer[0],b):ft(x.__webglFramebuffer,b)}else if(R){x.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[F]),x.__webglDepthbuffer[F]===void 0)x.__webglDepthbuffer[F]=t.createRenderbuffer(),ht(x.__webglDepthbuffer[F],b,!1);else{let M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,I=x.__webglDepthbuffer[F];t.bindRenderbuffer(t.RENDERBUFFER,I),t.framebufferRenderbuffer(t.FRAMEBUFFER,M,t.RENDERBUFFER,I)}}else{let F=b.texture.mipmaps;if(F&&F.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ht(x.__webglDepthbuffer,b,!1);else{let M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,I=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,I),t.framebufferRenderbuffer(t.FRAMEBUFFER,M,t.RENDERBUFFER,I)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}let J=[],mt=[];function ot(b){return Math.min(r.maxSamples,b.samples)}function it(b){let x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function lt(b,x){let{colorSpace:R,format:F,type:M}=b;return b.isCompressedTexture===!0||b.isVideoTexture===!0||R!==Be&&R!==$n&&(kt.getTransfer(R)===ee?F===bn&&M===Si||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),x}function gt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=function(){let b=P;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),P+=1,b},this.resetTextureUnits=function(){P=0},this.setTexture2D=D,this.setTexture2DArray=function(b,x){let R=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&R.__version!==b.version?q(R,b,x):n.bindTexture(t.TEXTURE_2D_ARRAY,R.__webglTexture,t.TEXTURE0+x)},this.setTexture3D=function(b,x){let R=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&R.__version!==b.version?q(R,b,x):n.bindTexture(t.TEXTURE_3D,R.__webglTexture,t.TEXTURE0+x)},this.setTextureCube=function(b,x){let R=i.get(b);b.version>0&&R.__version!==b.version?function(F,M,I){if(M.image.length!==6)return;let E=$(F,M),U=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+I);let O=i.get(U);if(U.version!==O.__version||E===!0){n.activeTexture(t.TEXTURE0+I);let z=kt.getPrimaries(kt.workingColorSpace),H=M.colorSpace===$n?null:kt.getPrimaries(M.colorSpace),at=M.colorSpace===$n||z===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,rt=[];for(let St=0;St<6;St++)rt[St]=ut||tt?tt?M.image[St].image:M.image[St]:m(M.image[St],!0,r.maxCubemapSize),rt[St]=lt(M,rt[St]);let yt=rt[0],Et=s.convert(M.format,M.colorSpace),Pt=s.convert(M.type),Bt=g(M.internalFormat,Et,Pt,M.colorSpace),Ct=M.isVideoTexture!==!0,et=O.__version===void 0||E===!0,dt=U.dataReady,xt,Ie=C(M,yt);if(k(t.TEXTURE_CUBE_MAP,M),ut){Ct&&et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,Bt,yt.width,yt.height);for(let St=0;St<6;St++){xt=rt[St].mipmaps;for(let zt=0;zt<xt.length;zt++){let Wt=xt[zt];M.format!==bn?Et!==null?Ct?dt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,0,0,Wt.width,Wt.height,Et,Wt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,Bt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,0,0,Wt.width,Wt.height,Et,Pt,Wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,Bt,Wt.width,Wt.height,0,Et,Pt,Wt.data)}}}else{if(xt=M.mipmaps,Ct&&et){xt.length>0&&Ie++;let St=gt(rt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,Bt,St.width,St.height)}for(let St=0;St<6;St++)if(tt){Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,rt[St].width,rt[St].height,Et,Pt,rt[St].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Bt,rt[St].width,rt[St].height,0,Et,Pt,rt[St].data);for(let zt=0;zt<xt.length;zt++){let Wt=xt[zt].image[St].image;Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,0,0,Wt.width,Wt.height,Et,Pt,Wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,Bt,Wt.width,Wt.height,0,Et,Pt,Wt.data)}}else{Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Et,Pt,rt[St]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Bt,Et,Pt,rt[St]);for(let zt=0;zt<xt.length;zt++){let Wt=xt[zt];Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,0,0,Et,Pt,Wt.image[St]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,Bt,Et,Pt,Wt.image[St])}}}f(M)&&v(t.TEXTURE_CUBE_MAP),O.__version=U.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}(R,b,x):n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+x)},this.rebindTextures=function(b,x,R){let F=i.get(b);x!==void 0&&Z(F.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),R!==void 0&&Q(b)},this.setupRenderTarget=function(b){let x=b.texture,R=i.get(b),F=i.get(x);b.addEventListener("dispose",L);let M=b.textures,I=b.isWebGLCubeRenderTarget===!0,E=M.length>1;if(E||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=x.version,a.memory.textures++),I){R.__webglFramebuffer=[];for(let U=0;U<6;U++)if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer[U]=[];for(let O=0;O<x.mipmaps.length;O++)R.__webglFramebuffer[U][O]=t.createFramebuffer()}else R.__webglFramebuffer[U]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){R.__webglFramebuffer=[];for(let U=0;U<x.mipmaps.length;U++)R.__webglFramebuffer[U]=t.createFramebuffer()}else R.__webglFramebuffer=t.createFramebuffer();if(E)for(let U=0,O=M.length;U<O;U++){let z=i.get(M[U]);z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&it(b)===!1){R.__webglMultisampledFramebuffer=t.createFramebuffer(),R.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let U=0;U<M.length;U++){let O=M[U];R.__webglColorRenderbuffer[U]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,R.__webglColorRenderbuffer[U]);let z=s.convert(O.format,O.colorSpace),H=s.convert(O.type),at=g(O.internalFormat,z,H,O.colorSpace,b.isXRRenderTarget===!0),ut=ot(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ut,at,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,R.__webglColorRenderbuffer[U])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(R.__webglDepthRenderbuffer=t.createRenderbuffer(),ht(R.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(I){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),k(t.TEXTURE_CUBE_MAP,x);for(let U=0;U<6;U++)if(x.mipmaps&&x.mipmaps.length>0)for(let O=0;O<x.mipmaps.length;O++)Z(R.__webglFramebuffer[U][O],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,O);else Z(R.__webglFramebuffer[U],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);f(x)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(E){for(let U=0,O=M.length;U<O;U++){let z=M[U],H=i.get(z),at=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(at,H.__webglTexture),k(at,z),Z(R.__webglFramebuffer,b,z,t.COLOR_ATTACHMENT0+U,at,0),f(z)&&v(at)}n.unbindTexture()}else{let U=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(U=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(U,F.__webglTexture),k(U,x),x.mipmaps&&x.mipmaps.length>0)for(let O=0;O<x.mipmaps.length;O++)Z(R.__webglFramebuffer[O],b,x,t.COLOR_ATTACHMENT0,U,O);else Z(R.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,U,0);f(x)&&v(U),n.unbindTexture()}b.depthBuffer&&Q(b)},this.updateRenderTargetMipmap=function(b){let x=b.textures;for(let R=0,F=x.length;R<F;R++){let M=x[R];if(f(M)){let I=y(b),E=i.get(M).__webglTexture;n.bindTexture(I,E),v(I),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(b.samples>0){if(it(b)===!1){let{textures:x,width:R,height:F}=b,M=t.COLOR_BUFFER_BIT,I=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,E=i.get(b),U=x.length>1;if(U)for(let z=0;z<x.length;z++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer);let O=b.texture.mipmaps;O&&O.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let z=0;z<x.length;z++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(M|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(M|=t.STENCIL_BUFFER_BIT)),U){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,E.__webglColorRenderbuffer[z]);let H=i.get(x[z]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,H,0)}t.blitFramebuffer(0,0,R,F,0,0,R,F,M,t.NEAREST),l===!0&&(J.length=0,mt.length=0,J.push(t.COLOR_ATTACHMENT0+z),b.depthBuffer&&b.resolveDepthBuffer===!1&&(J.push(I),mt.push(I),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),U)for(let z=0;z<x.length;z++){n.bindFramebuffer(t.FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,E.__webglColorRenderbuffer[z]);let H=i.get(x[z]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D,H,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}},this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=it}function A0(t,e){return{convert:function(n,i=$n){let r,s=kt.getTransfer(i);if(n===Si)return t.UNSIGNED_BYTE;if(n===lh)return t.UNSIGNED_SHORT_4_4_4_4;if(n===hh)return t.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===kd)return t.BYTE;if(n===Wd)return t.SHORT;if(n===Is)return t.UNSIGNED_SHORT;if(n===oh)return t.INT;if(n===zr)return t.UNSIGNED_INT;if(n===xi)return t.FLOAT;if(n===Ls)return t.HALF_FLOAT;if(n===qd)return t.ALPHA;if(n===Yd)return t.RGB;if(n===bn)return t.RGBA;if(n===eo)return t.DEPTH_COMPONENT;if(n===Ps)return t.DEPTH_STENCIL;if(n===Zd)return t.RED;if(n===ch)return t.RED_INTEGER;if(n===Jd)return t.RG;if(n===uh)return t.RG_INTEGER;if(n===dh)return t.RGBA_INTEGER;if(n===no||n===io||n===ro||n===so)if(s===ee){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===ph||n===fh||n===mh||n===gh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(n===ph)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===_h||n===vh||n===yh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(n===_h||n===vh)return s===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(n===Mh||n===Sh||n===xh||n===Th||n===Eh||n===wh||n===bh||n===Ah||n===Rh||n===Ch||n===Ih||n===Lh||n===Ph||n===Uh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(n===Mh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Th)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ah)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ch)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===ao||n===Nh||n===Dh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(n===ao)return s===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===jd||n===Fh||n===Oh||n===Bh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Vr?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}}}class Ac extends he{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}class nf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ac(t.texture);t.depthNear===e.depthNear&&t.depthFar===e.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rf extends Qn{constructor(t,e){super();let n=this,i=null,r=1,s=null,a="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,_=new nf,m={},f=e.getContextAttributes(),v=null,y=null,g=[],S=[],C=new st,A=null,L=new _e;L.viewport=new Zt;let V=new _e;V.viewport=new Zt;let P=[L,V],D=new pc,B=null,X=null;function K(Q){let J=S.indexOf(Q.inputSource);if(J===-1)return;let mt=g[J];mt!==void 0&&(mt.update(Q.inputSource,Q.frame,l||s),mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function k(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",$);for(let Q=0;Q<g.length;Q++){let J=S[Q];J!==null&&(S[Q]=null,g[Q].disconnect(J))}B=null,X=null,_.reset();for(let Q in m)delete m[Q];t.setRenderTarget(v),u=null,d=null,c=null,i=null,y=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}function $(Q){for(let J=0;J<Q.removed.length;J++){let mt=Q.removed[J],ot=S.indexOf(mt);ot>=0&&(S[ot]=null,g[ot].disconnect(mt))}for(let J=0;J<Q.added.length;J++){let mt=Q.added[J],ot=S.indexOf(mt);if(ot===-1){for(let lt=0;lt<g.length;lt++){if(lt>=S.length){S.push(mt),ot=lt;break}if(S[lt]===null){S[lt]=mt,ot=lt;break}}if(ot===-1)break}let it=g[ot];it&&it.connect(mt)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let J=g[Q];return J===void 0&&(J=new Os,g[Q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Q){let J=g[Q];return J===void 0&&(J=new Os,g[Q]=J),J.getGripSpace()},this.getHand=function(Q){let J=g[Q];return J===void 0&&(J=new Os,g[Q]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",k),i.addEventListener("inputsourceschange",$),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),typeof XRWebGLBinding<"u"&&(c=new XRWebGLBinding(i,e)),c!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,mt=null,ot=null;f.depth&&(ot=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=f.stencil?Ps:eo,mt=f.stencil?Vr:zr);let it={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=c.createProjectionLayer(it),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ti(d.textureWidth,d.textureHeight,{format:bn,type:Si,depthTexture:new Mo(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ti(u.framebufferWidth,u.framebufferHeight,{format:bn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let G=new T,q=new T;function Z(Q,J){J===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(J.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let{near:J,far:mt}=Q;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),D.near=V.near=L.near=J,D.far=V.far=L.far=mt,B===D.near&&X===D.far||(i.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,X=D.far),D.layers.mask=6|Q.layers.mask,L.layers.mask=3&D.layers.mask,V.layers.mask=5&D.layers.mask;let ot=Q.parent,it=D.cameras;Z(D,ot);for(let lt=0;lt<it.length;lt++)Z(it[lt],ot);it.length===2?function(lt,gt,b){G.setFromMatrixPosition(gt.matrixWorld),q.setFromMatrixPosition(b.matrixWorld);let x=G.distanceTo(q),R=gt.projectionMatrix.elements,F=b.projectionMatrix.elements,M=R[14]/(R[10]-1),I=R[14]/(R[10]+1),E=(R[9]+1)/R[5],U=(R[9]-1)/R[5],O=(R[8]-1)/R[0],z=(F[8]+1)/F[0],H=M*O,at=M*z,ut=x/(-O+z),tt=ut*-O;if(gt.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(tt),lt.translateZ(ut),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),R[10]===-1)lt.projectionMatrix.copy(gt.projectionMatrix),lt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let rt=M+ut,yt=I+ut,Et=H-tt,Pt=at+(x-tt),Bt=E*I/yt*rt,Ct=U*I/yt*rt;lt.projectionMatrix.makePerspective(Et,Pt,Bt,Ct,rt,yt),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}(D,L,V):D.projectionMatrix.copy(L.projectionMatrix),function(lt,gt,b){b===null?lt.matrix.copy(gt.matrixWorld):(lt.matrix.copy(b.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(gt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(gt.projectionMatrix),lt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=2*qi*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}(Q,D,ot)},this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||u!==null)return o},this.setFoveation=function(Q){o=Q,d!==null&&(d.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function(Q){return m[Q]};let ht=null,ft=new qp;ft.setAnimationLoop(function(Q,J){if(h=J.getViewerPose(l||s),p=J,h!==null){let mt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let ot=!1;mt.length!==D.cameras.length&&(D.cameras.length=0,ot=!0);for(let lt=0;lt<mt.length;lt++){let gt=mt[lt],b=null;if(u!==null)b=u.getViewport(gt);else{let R=c.getViewSubImage(d,gt);b=R.viewport,lt===0&&(t.setRenderTargetTextures(y,R.colorTexture,R.depthStencilTexture),t.setRenderTarget(y))}let x=P[lt];x===void 0&&(x=new _e,x.layers.enable(lt),x.viewport=new Zt,P[lt]=x),x.matrix.fromArray(gt.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.projectionMatrix.fromArray(gt.projectionMatrix),x.projectionMatrixInverse.copy(x.projectionMatrix).invert(),x.viewport.set(b.x,b.y,b.width,b.height),lt===0&&(D.matrix.copy(x.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ot===!0&&D.cameras.push(x)}let it=i.enabledFeatures;if(it&&it.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&c){let lt=c.getDepthInformation(mt[0]);lt&&lt.isValid&&lt.texture&&_.init(lt,i.renderState)}if(it&&it.includes("camera-access")&&(t.state.unbindTexture(),c))for(let lt=0;lt<mt.length;lt++){let gt=mt[lt].camera;if(gt){let b=m[gt];b||(b=new Ac,m[gt]=b);let x=c.getCameraImage(gt);b.sourceTexture=x}}}for(let mt=0;mt<g.length;mt++){let ot=S[mt],it=g[mt];ot!==null&&it!==void 0&&it.update(ot,J,l||s)}ht&&ht(Q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}),this.setAnimationLoop=function(Q){ht=Q},this.dispose=function(){}}}var sr=new Ge,R0=new wt;function C0(t,e){function n(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,n(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,n(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,n(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===je&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,n(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===je&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,n(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,n(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,sr.copy(l),sr.x*=-1,sr.y*=-1,sr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),r.envMapRotation.value.setFromMatrix4(R0.makeRotationFromEuler(sr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Jh(t)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}(r,s)):s.isMeshPhongMaterial?(i(r,s),function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,0.0001)}(r,s)):s.isMeshStandardMaterial?(i(r,s),function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,h.roughnessMapTransform)),c.envMap&&(h.envMapIntensity.value=c.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(h,c,d){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===je&&h.clearcoatNormalScale.value.negate())),c.dispersion>0&&(h.dispersion.value=c.dispersion),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=d.texture,h.transmissionSamplerSize.value.set(d.width,d.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,h.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),function(h,c){c.matcap&&(h.matcap.value=c.matcap)}(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),function(h,c){let d=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(d.matrixWorld),h.nearDistance.value=d.shadow.camera.near,h.farDistance.value=d.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,n(c.map,h.mapTransform))}(r,s),s.isLineDashedMaterial&&function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}(r,s)):s.isPointsMaterial?function(h,c,d,u){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*d,h.scale.value=0.5*u,c.map&&(h.map.value=c.map,n(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,n(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,n(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,n(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function I0(t,e,n,i){let r={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,_){let m=d.value,f=u+"_"+p;if(_[f]===void 0)return _[f]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let v=_[f];if(typeof m=="number"||typeof m=="boolean"){if(v!==m)return _[f]=m,!0}else if(v.equals(m)===!1)return v.copy(m),!0}return!1}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),t.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=r[d.id];p===void 0&&(function(f){let v=f.uniforms,y=0,g=16;for(let C=0,A=v.length;C<A;C++){let L=Array.isArray(v[C])?v[C]:[v[C]];for(let V=0,P=L.length;V<P;V++){let D=L[V],B=Array.isArray(D.value)?D.value:[D.value];for(let X=0,K=B.length;X<K;X++){let k=h(B[X]),$=y%g,G=$%k.boundary,q=$+G;y+=G,q!==0&&g-q<k.storage&&(y+=g-q),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=k.storage}}}let S=y%g;S>0&&(y+=g-S),f.__size=y,f.__cache={}}(d),p=function(f){let v=function(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=v;let y=t.createBuffer(),g=f.__size,S=f.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,g,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}(d),r[d.id]=p,d.addEventListener("dispose",c));let _=u.program;i.updateUBOMapping(d,_);let m=e.render.frame;s[d.id]!==m&&(function(f){let v=r[f.id],y=f.uniforms,g=f.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let S=0,C=y.length;S<C;S++){let A=Array.isArray(y[S])?y[S]:[y[S]];for(let L=0,V=A.length;L<V;L++){let P=A[L];if(l(P,S,L,g)===!0){let D=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],X=0;for(let K=0;K<B.length;K++){let k=B[K],$=h(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,D+X,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}(d),s[d.id]=m)},dispose:function(){for(let d in r)t.deleteBuffer(r[d]);a=[],r={},s={}}}}class Rc{constructor(t={}){let{canvas:e=op(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=t,u;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=s;let p=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,S=!1;this._outputColorSpace=ge;let C=0,A=0,L=null,V=-1,P=null,D=new Zt,B=new Zt,X=null,K=new vt(0),k=0,$=e.width,G=e.height,q=1,Z=null,ht=null,ft=new Zt(0,0,$,G),Q=new Zt(0,0,$,G),J=!1,mt=new tr,ot=!1,it=!1,lt=new wt,gt=new T,b=new Zt,x={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},R=!1;function F(){return L===null?q:1}let M,I,E,U,O,z,H,at,ut,tt,rt,yt,Et,Pt,Bt,Ct,et,dt,xt,Ie,St,zt,Wt,li,N=n;function Fe(w,W){return e.getContext(w,W)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ud}`),e.addEventListener("webglcontextlost",Oi,!1),e.addEventListener("webglcontextrestored",Bi,!1),e.addEventListener("webglcontextcreationerror",zi,!1),N===null){if(N=Fe("webgl2",w),N===null)throw Fe("webgl2")?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}function xe(){M=new dg(N),M.init(),zt=new A0(N,M),I=new og(N,M,t,zt),E=new w0(N,M),I.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),U=new mg(N),O=new m0,z=new b0(N,M,E,O,I,zt,U),H=new hg(g),at=new ug(g),ut=new ng(N),Wt=new sg(N,ut),tt=new pg(N,ut,U,Wt),rt=new _g(N,tt,ut,U),xt=new gg(N,I,z),Ct=new lg(O),yt=new f0(g,H,at,M,I,Wt,Ct),Et=new C0(g,O),Pt=new _0,Bt=new x0(M),dt=new rg(g,H,at,E,rt,u,o),et=new T0(g,rt,I),li=new I0(N,U,I,E),Ie=new ag(N,M,U),St=new fg(N,M,U),U.programs=yt.programs,g.capabilities=I,g.extensions=M,g.properties=O,g.renderLists=Pt,g.shadowMap=et,g.state=E,g.info=U}xe();let qt=new rf(g,N);function Oi(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Bi(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let w=U.autoReset,W=et.enabled,j=et.autoUpdate,nt=et.needsUpdate,Y=et.type;xe(),U.autoReset=w,et.enabled=W,et.autoUpdate=j,et.needsUpdate=nt,et.type=Y}function zi(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function os(w){let W=w.target;W.removeEventListener("dispose",os),function(j){(function(nt){let Y=O.get(nt).programs;Y!==void 0&&(Y.forEach(function(ct){yt.releaseProgram(ct)}),nt.isShaderMaterial&&yt.releaseShaderCache(nt))})(j),O.remove(j)}(W)}function ta(w,W,j){w.transparent===!0&&w.side===be&&w.forceSinglePass===!1?(w.side=je,w.needsUpdate=!0,ia(w,W,j),w.side=wn,w.needsUpdate=!0,ia(w,W,j),w.side=be):ia(w,W,j)}this.xr=qt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=M.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=M.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize($,G,!1))},this.getSize=function(w){return w.set($,G)},this.setSize=function(w,W,j=!0){qt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=w,G=W,e.width=Math.floor(w*q),e.height=Math.floor(W*q),j===!0&&(e.style.width=w+"px",e.style.height=W+"px"),this.setViewport(0,0,w,W))},this.getDrawingBufferSize=function(w){return w.set($*q,G*q).floor()},this.setDrawingBufferSize=function(w,W,j){$=w,G=W,q=j,e.width=Math.floor(w*j),e.height=Math.floor(W*j),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,W,j,nt){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,W,j,nt),E.viewport(D.copy(ft).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,W,j,nt){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,W,j,nt),E.scissor(B.copy(Q).multiplyScalar(q).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(w){E.setScissorTest(J=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,j=!0){let nt=0;if(w){let Y=!1;if(L!==null){let ct=L.texture.format;Y=ct===dh||ct===uh||ct===ch}if(Y){let ct=L.texture.type,_t=ct===Si||ct===zr||ct===Is||ct===Vr||ct===lh||ct===hh,Mt=dt.getClearColor(),Tt=dt.getClearAlpha(),At=Mt.r,It=Mt.g,Rt=Mt.b;_t?(p[0]=At,p[1]=It,p[2]=Rt,p[3]=Tt,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=At,_[1]=It,_[2]=Rt,_[3]=Tt,N.clearBufferiv(N.COLOR,0,_))}else nt|=N.COLOR_BUFFER_BIT}W&&(nt|=N.DEPTH_BUFFER_BIT),j&&(nt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oi,!1),e.removeEventListener("webglcontextrestored",Bi,!1),e.removeEventListener("webglcontextcreationerror",zi,!1),dt.dispose(),Pt.dispose(),Bt.dispose(),O.dispose(),H.dispose(),at.dispose(),rt.dispose(),Wt.dispose(),li.dispose(),yt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",cu),qt.removeEventListener("sessionend",uu),Vi.stop()},this.renderBufferDirect=function(w,W,j,nt,Y,ct){W===null&&(W=x);let _t=Y.isMesh&&Y.matrixWorld.determinant()<0,Mt=function(Ht,re,we,Ot,Lt){re.isScene!==!0&&(re=x),z.resetTextureUnits();let cn=re.fog,fl=Ot.isMeshStandardMaterial?re.environment:null,ra=L===null?g.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Be,hi=(Ot.isMeshStandardMaterial?at:H).get(Ot.envMap||fl),vn=Ot.vertexColors===!0&&!!we.attributes.color&&we.attributes.color.itemSize===4,dr=!!we.attributes.tangent&&(!!Ot.normalMap||Ot.anisotropy>0),Fn=!!we.morphAttributes.position,ml=!!we.morphAttributes.normal,pr=!!we.morphAttributes.color,_u=Zn;Ot.toneMapped&&(L!==null&&L.isXRRenderTarget!==!0||(_u=g.toneMapping));let vu=we.morphAttributes.position||we.morphAttributes.normal||we.morphAttributes.color,dm=vu!==void 0?vu.length:0,Gt=O.get(Ot),pm=f.state.lights;if(ot===!0&&(it===!0||Ht!==P)){let rn=Ht===P&&Ot.id===V;Ct.setState(Ot,Ht,rn)}let un=!1;Ot.version===Gt.__version?Gt.needsLights&&Gt.lightsStateVersion!==pm.state.version||Gt.outputColorSpace!==ra||Lt.isBatchedMesh&&Gt.batching===!1?un=!0:Lt.isBatchedMesh||Gt.batching!==!0?Lt.isBatchedMesh&&Gt.batchingColor===!0&&Lt.colorTexture===null||Lt.isBatchedMesh&&Gt.batchingColor===!1&&Lt.colorTexture!==null||Lt.isInstancedMesh&&Gt.instancing===!1?un=!0:Lt.isInstancedMesh||Gt.instancing!==!0?Lt.isSkinnedMesh&&Gt.skinning===!1?un=!0:Lt.isSkinnedMesh||Gt.skinning!==!0?Lt.isInstancedMesh&&Gt.instancingColor===!0&&Lt.instanceColor===null||Lt.isInstancedMesh&&Gt.instancingColor===!1&&Lt.instanceColor!==null||Lt.isInstancedMesh&&Gt.instancingMorph===!0&&Lt.morphTexture===null||Lt.isInstancedMesh&&Gt.instancingMorph===!1&&Lt.morphTexture!==null||Gt.envMap!==hi||Ot.fog===!0&&Gt.fog!==cn?un=!0:Gt.numClippingPlanes===void 0||Gt.numClippingPlanes===Ct.numPlanes&&Gt.numIntersection===Ct.numIntersection?(Gt.vertexAlphas!==vn||Gt.vertexTangents!==dr||Gt.morphTargets!==Fn||Gt.morphNormals!==ml||Gt.morphColors!==pr||Gt.toneMapping!==_u||Gt.morphTargetsCount!==dm)&&(un=!0):un=!0:un=!0:un=!0:un=!0:(un=!0,Gt.__version=Ot.version);let Hi=Gt.currentProgram;un===!0&&(Hi=ia(Ot,re,Lt));let yu=!1,ls=!1,gl=!1,pe=Hi.getUniforms(),ci=Gt.uniforms;if(E.useProgram(Hi.program)&&(yu=!0,ls=!0,gl=!0),Ot.id!==V&&(V=Ot.id,ls=!0),yu||P!==Ht){E.buffers.depth.getReversed()&&Ht.reversedDepth!==!0&&(Ht._reversedDepth=!0,Ht.updateProjectionMatrix()),pe.setValue(N,"projectionMatrix",Ht.projectionMatrix),pe.setValue(N,"viewMatrix",Ht.matrixWorldInverse);let rn=pe.map.cameraPosition;rn!==void 0&&rn.setValue(N,gt.setFromMatrixPosition(Ht.matrixWorld)),I.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(Ht.far+1)/Math.LN2)),(Ot.isMeshPhongMaterial||Ot.isMeshToonMaterial||Ot.isMeshLambertMaterial||Ot.isMeshBasicMaterial||Ot.isMeshStandardMaterial||Ot.isShaderMaterial)&&pe.setValue(N,"isOrthographic",Ht.isOrthographicCamera===!0),P!==Ht&&(P=Ht,ls=!0,gl=!0)}if(Lt.isSkinnedMesh){pe.setOptional(N,Lt,"bindMatrix"),pe.setOptional(N,Lt,"bindMatrixInverse");let rn=Lt.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),pe.setValue(N,"boneTexture",rn.boneTexture,z))}Lt.isBatchedMesh&&(pe.setOptional(N,Lt,"batchingTexture"),pe.setValue(N,"batchingTexture",Lt._matricesTexture,z),pe.setOptional(N,Lt,"batchingIdTexture"),pe.setValue(N,"batchingIdTexture",Lt._indirectTexture,z),pe.setOptional(N,Lt,"batchingColorTexture"),Lt._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",Lt._colorsTexture,z));let _l=we.morphAttributes;_l.position===void 0&&_l.normal===void 0&&_l.color===void 0||xt.update(Lt,we,Hi),(ls||Gt.receiveShadow!==Lt.receiveShadow)&&(Gt.receiveShadow=Lt.receiveShadow,pe.setValue(N,"receiveShadow",Lt.receiveShadow)),Ot.isMeshGouraudMaterial&&Ot.envMap!==null&&(ci.envMap.value=hi,ci.flipEnvMap.value=hi.isCubeTexture&&hi.isRenderTargetTexture===!1?-1:1),Ot.isMeshStandardMaterial&&Ot.envMap===null&&re.environment!==null&&(ci.envMapIntensity.value=re.environmentIntensity),ls&&(pe.setValue(N,"toneMappingExposure",g.toneMappingExposure),Gt.needsLights&&(dn=gl,(yn=ci).ambientLightColor.needsUpdate=dn,yn.lightProbe.needsUpdate=dn,yn.directionalLights.needsUpdate=dn,yn.directionalLightShadows.needsUpdate=dn,yn.pointLights.needsUpdate=dn,yn.pointLightShadows.needsUpdate=dn,yn.spotLights.needsUpdate=dn,yn.spotLightShadows.needsUpdate=dn,yn.rectAreaLights.needsUpdate=dn,yn.hemisphereLights.needsUpdate=dn),cn&&Ot.fog===!0&&Et.refreshFogUniforms(ci,cn),Et.refreshMaterialUniforms(ci,Ot,q,G,f.state.transmissionRenderTarget[Ht.id]),qs.upload(N,mu(Gt),ci,z));var yn,dn;if(Ot.isShaderMaterial&&Ot.uniformsNeedUpdate===!0&&(qs.upload(N,mu(Gt),ci,z),Ot.uniformsNeedUpdate=!1),Ot.isSpriteMaterial&&pe.setValue(N,"center",Lt.center),pe.setValue(N,"modelViewMatrix",Lt.modelViewMatrix),pe.setValue(N,"normalMatrix",Lt.normalMatrix),pe.setValue(N,"modelMatrix",Lt.matrixWorld),Ot.isShaderMaterial||Ot.isRawShaderMaterial){let rn=Ot.uniformsGroups;for(let vl=0,fm=rn.length;vl<fm;vl++){let Mu=rn[vl];li.update(Mu,Hi),li.bind(Mu,Hi)}}return Hi}(w,W,j,nt,Y);E.setMaterial(nt,_t);let Tt=j.index,At=1;if(nt.wireframe===!0){if(Tt=tt.getWireframeAttribute(j),Tt===void 0)return;At=2}let It=j.drawRange,Rt=j.attributes.position,Ft=It.start*At,ne=(It.start+It.count)*At;ct!==null&&(Ft=Math.max(Ft,ct.start*At),ne=Math.min(ne,(ct.start+ct.count)*At)),Tt!==null?(Ft=Math.max(Ft,0),ne=Math.min(ne,Tt.count)):Rt!=null&&(Ft=Math.max(Ft,0),ne=Math.min(ne,Rt.count));let oe=ne-Ft;if(oe<0||oe===1/0)return;let de;Wt.setup(Y,nt,Mt,j,Tt);let ie=Ie;if(Tt!==null&&(de=ut.get(Tt),ie=St,ie.setIndex(de)),Y.isMesh)nt.wireframe===!0?(E.setLineWidth(nt.wireframeLinewidth*F()),ie.setMode(N.LINES)):ie.setMode(N.TRIANGLES);else if(Y.isLine){let Ht=nt.linewidth;Ht===void 0&&(Ht=1),E.setLineWidth(Ht*F()),Y.isLineSegments?ie.setMode(N.LINES):Y.isLineLoop?ie.setMode(N.LINE_LOOP):ie.setMode(N.LINE_STRIP)}else Y.isPoints?ie.setMode(N.POINTS):Y.isSprite&&ie.setMode(N.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Yi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(M.get("WEBGL_multi_draw"))ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let{_multiDrawStarts:Ht,_multiDrawCounts:re,_multiDrawCount:we}=Y,Ot=Tt?ut.get(Tt).bytesPerElement:1,Lt=O.get(nt).currentProgram.getUniforms();for(let cn=0;cn<we;cn++)Lt.setValue(N,"_gl_DrawID",cn),ie.render(Ht[cn]/Ot,re[cn])}else if(Y.isInstancedMesh)ie.renderInstances(Ft,oe,Y.count);else if(j.isInstancedBufferGeometry){let Ht=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,re=Math.min(j.instanceCount,Ht);ie.renderInstances(Ft,oe,re)}else ie.render(Ft,oe)},this.compile=function(w,W,j=null){j===null&&(j=w),f=Bt.get(j),f.init(W),y.push(f),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),w!==j&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights();let nt=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ct=Y.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let Mt=ct[_t];ta(Mt,j,Y),nt.add(Mt)}else ta(ct,j,Y),nt.add(ct)}),f=y.pop(),nt},this.compileAsync=function(w,W,j=null){let nt=this.compile(w,W,j);return new Promise((Y)=>{function ct(){nt.forEach(function(_t){O.get(_t).currentProgram.isReady()&&nt.delete(_t)}),nt.size!==0?setTimeout(ct,10):Y(w)}M.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ea=null;function cu(){Vi.stop()}function uu(){Vi.start()}let Vi=new qp;function pl(w,W,j,nt){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||mt.intersectsSprite(w)){nt&&b.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);let ct=rt.update(w),_t=w.material;_t.visible&&m.push(w,ct,_t,j,b.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||mt.intersectsObject(w))){let ct=rt.update(w),_t=w.material;if(nt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),b.copy(w.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),b.copy(ct.boundingSphere.center)),b.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(_t)){let Mt=ct.groups;for(let Tt=0,At=Mt.length;Tt<At;Tt++){let It=Mt[Tt],Rt=_t[It.materialIndex];Rt&&Rt.visible&&m.push(w,ct,Rt,j,b.z,It)}}else _t.visible&&m.push(w,ct,_t,j,b.z,null)}}let Y=w.children;for(let ct=0,_t=Y.length;ct<_t;ct++)pl(Y[ct],W,j,nt)}function du(w,W,j,nt){let{opaque:Y,transmissive:ct,transparent:_t}=w;f.setupLightsView(j),ot===!0&&Ct.setGlobalState(g.clippingPlanes,j),nt&&E.viewport(D.copy(nt)),Y.length>0&&na(Y,W,j),ct.length>0&&na(ct,W,j),_t.length>0&&na(_t,W,j),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function pu(w,W,j,nt){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[nt.id]===void 0&&(f.state.transmissionRenderTarget[nt.id]=new ti(1,1,{generateMipmaps:!0,type:M.has("EXT_color_buffer_half_float")||M.has("EXT_color_buffer_float")?Ls:Si,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));let Y=f.state.transmissionRenderTarget[nt.id],ct=nt.viewport||D;Y.setSize(ct.z*g.transmissionResolutionScale,ct.w*g.transmissionResolutionScale);let _t=g.getRenderTarget(),Mt=g.getActiveCubeFace(),Tt=g.getActiveMipmapLevel();g.setRenderTarget(Y),g.getClearColor(K),k=g.getClearAlpha(),k<1&&g.setClearColor(16777215,0.5),g.clear(),R&&dt.render(j);let At=g.toneMapping;g.toneMapping=Zn;let It=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),f.setupLightsView(nt),ot===!0&&Ct.setGlobalState(g.clippingPlanes,nt),na(w,j,nt),z.updateMultisampleRenderTarget(Y),z.updateRenderTargetMipmap(Y),M.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Ft=0,ne=W.length;Ft<ne;Ft++){let oe=W[Ft],de=oe.object,ie=oe.geometry,Ht=oe.material,re=oe.group;if(Ht.side===be&&de.layers.test(nt.layers)){let we=Ht.side;Ht.side=je,Ht.needsUpdate=!0,fu(de,j,nt,ie,Ht,re),Ht.side=we,Ht.needsUpdate=!0,Rt=!0}}Rt===!0&&(z.updateMultisampleRenderTarget(Y),z.updateRenderTargetMipmap(Y))}g.setRenderTarget(_t,Mt,Tt),g.setClearColor(K,k),It!==void 0&&(nt.viewport=It),g.toneMapping=At}function na(w,W,j){let nt=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,ct=w.length;Y<ct;Y++){let _t=w[Y],Mt=_t.object,Tt=_t.geometry,At=_t.group,It=_t.material;It.allowOverride===!0&&nt!==null&&(It=nt),Mt.layers.test(j.layers)&&fu(Mt,W,j,Tt,It,At)}}function fu(w,W,j,nt,Y,ct){w.onBeforeRender(g,W,j,nt,Y,ct),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(g,W,j,nt,w,ct),Y.transparent===!0&&Y.side===be&&Y.forceSinglePass===!1?(Y.side=je,Y.needsUpdate=!0,g.renderBufferDirect(j,W,nt,Y,w,ct),Y.side=wn,Y.needsUpdate=!0,g.renderBufferDirect(j,W,nt,Y,w,ct),Y.side=be):g.renderBufferDirect(j,W,nt,Y,w,ct),w.onAfterRender(g,W,j,nt,Y,ct)}function ia(w,W,j){W.isScene!==!0&&(W=x);let nt=O.get(w),Y=f.state.lights,ct=f.state.shadowsArray,_t=Y.state.version,Mt=yt.getParameters(w,Y.state,ct,W,j),Tt=yt.getProgramCacheKey(Mt),At=nt.programs;nt.environment=w.isMeshStandardMaterial?W.environment:null,nt.fog=W.fog,nt.envMap=(w.isMeshStandardMaterial?at:H).get(w.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,At===void 0&&(w.addEventListener("dispose",os),At=new Map,nt.programs=At);let It=At.get(Tt);if(It!==void 0){if(nt.currentProgram===It&&nt.lightsStateVersion===_t)return gu(w,Mt),It}else Mt.uniforms=yt.getUniforms(w),w.onBeforeCompile(Mt,g),It=yt.acquireProgram(Mt,Tt),At.set(Tt,It),nt.uniforms=Mt.uniforms;let Rt=nt.uniforms;return(w.isShaderMaterial||w.isRawShaderMaterial)&&w.clipping!==!0||(Rt.clippingPlanes=Ct.uniform),gu(w,Mt),nt.needsLights=function(Ft){return Ft.isMeshLambertMaterial||Ft.isMeshToonMaterial||Ft.isMeshPhongMaterial||Ft.isMeshStandardMaterial||Ft.isShadowMaterial||Ft.isShaderMaterial&&Ft.lights===!0}(w),nt.lightsStateVersion=_t,nt.needsLights&&(Rt.ambientLightColor.value=Y.state.ambient,Rt.lightProbe.value=Y.state.probe,Rt.directionalLights.value=Y.state.directional,Rt.directionalLightShadows.value=Y.state.directionalShadow,Rt.spotLights.value=Y.state.spot,Rt.spotLightShadows.value=Y.state.spotShadow,Rt.rectAreaLights.value=Y.state.rectArea,Rt.ltc_1.value=Y.state.rectAreaLTC1,Rt.ltc_2.value=Y.state.rectAreaLTC2,Rt.pointLights.value=Y.state.point,Rt.pointLightShadows.value=Y.state.pointShadow,Rt.hemisphereLights.value=Y.state.hemi,Rt.directionalShadowMap.value=Y.state.directionalShadowMap,Rt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Rt.spotShadowMap.value=Y.state.spotShadowMap,Rt.spotLightMatrix.value=Y.state.spotLightMatrix,Rt.spotLightMap.value=Y.state.spotLightMap,Rt.pointShadowMap.value=Y.state.pointShadowMap,Rt.pointShadowMatrix.value=Y.state.pointShadowMatrix),nt.currentProgram=It,nt.uniformsList=null,It}function mu(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=qs.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function gu(w,W){let j=O.get(w);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}Vi.setAnimationLoop(function(w){ea&&ea(w)}),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(w){ea=w,qt.setAnimationLoop(w),w===null?Vi.stop():Vi.start()},qt.addEventListener("sessionstart",cu),qt.addEventListener("sessionend",uu),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(W),W=qt.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,W,L),f=Bt.get(w,y.length),f.init(W),y.push(f),lt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),mt.setFromProjectionMatrix(lt,Wh,W.reversedDepth),it=this.localClippingEnabled,ot=Ct.init(this.clippingPlanes,it),m=Pt.get(w,v.length),m.init(),v.push(m),qt.enabled===!0&&qt.isPresenting===!0){let ct=g.xr.getDepthSensingMesh();ct!==null&&pl(ct,W,-1/0,g.sortObjects)}pl(w,W,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(Z,ht),R=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,R&&dt.addToRenderList(m,w),this.info.render.frame++,ot===!0&&Ct.beginShadows();let j=f.state.shadowsArray;et.render(j,w,W),ot===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let{opaque:nt,transmissive:Y}=m;if(f.setupLights(),W.isArrayCamera){let ct=W.cameras;if(Y.length>0)for(let _t=0,Mt=ct.length;_t<Mt;_t++)pu(nt,Y,w,ct[_t]);R&&dt.render(w);for(let _t=0,Mt=ct.length;_t<Mt;_t++){let Tt=ct[_t];du(m,w,Tt,Tt.viewport)}}else Y.length>0&&pu(nt,Y,w,W),R&&dt.render(w),du(m,w,W);L!==null&&A===0&&(z.updateMultisampleRenderTarget(L),z.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(g,w,W),Wt.resetDefaultState(),V=-1,P=null,y.pop(),y.length>0?(f=y[y.length-1],ot===!0&&Ct.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,W,j){let nt=O.get(w);nt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),O.get(w.texture).__webglTexture=W,O.get(w.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:j,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){let j=O.get(w);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0};let hm=N.createFramebuffer();this.setRenderTarget=function(w,W=0,j=0){L=w,C=W,A=j;let nt=!0,Y=null,ct=!1,_t=!1;if(w){let Mt=O.get(w);if(Mt.__useDefaultFramebuffer!==void 0)E.bindFramebuffer(N.FRAMEBUFFER,null),nt=!1;else if(Mt.__webglFramebuffer===void 0)z.setupRenderTarget(w);else if(Mt.__hasExternalTextures)z.rebindTextures(w,O.get(w.texture).__webglTexture,O.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let It=w.depthTexture;if(Mt.__boundDepthTexture!==It){if(It!==null&&O.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(w)}}let Tt=w.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(_t=!0);let At=O.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Y=Array.isArray(At[W])?At[W][j]:At[W],ct=!0):Y=w.samples>0&&z.useMultisampledRTT(w)===!1?O.get(w).__webglMultisampledFramebuffer:Array.isArray(At)?At[j]:At,D.copy(w.viewport),B.copy(w.scissor),X=w.scissorTest}else D.copy(ft).multiplyScalar(q).floor(),B.copy(Q).multiplyScalar(q).floor(),X=J;if(j!==0&&(Y=hm),E.bindFramebuffer(N.FRAMEBUFFER,Y)&&nt&&E.drawBuffers(w,Y),E.viewport(D),E.scissor(B),E.setScissorTest(X),ct){let Mt=O.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Mt.__webglTexture,j)}else if(_t){let Mt=W;for(let Tt=0;Tt<w.textures.length;Tt++){let At=O.get(w.textures[Tt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Tt,At.__webglTexture,j,Mt)}}else if(w!==null&&j!==0){let Mt=O.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mt.__webglTexture,j)}V=-1},this.readRenderTargetPixels=function(w,W,j,nt,Y,ct,_t,Mt=0){if(!w||!w.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=O.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){E.bindFramebuffer(N.FRAMEBUFFER,Tt);try{let At=w.textures[Mt],It=At.format,Rt=At.type;if(!I.textureFormatReadable(It))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(Rt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=w.width-nt&&j>=0&&j<=w.height-Y&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt),N.readPixels(W,j,nt,Y,zt.convert(It),zt.convert(Rt),ct))}finally{let At=L!==null?O.get(L).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,W,j,nt,Y,ct,_t,Mt=0){if(!w||!w.isWebGLRenderTarget)throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=O.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){if(W>=0&&W<=w.width-nt&&j>=0&&j<=w.height-Y){E.bindFramebuffer(N.FRAMEBUFFER,Tt);let At=w.textures[Mt],It=At.format,Rt=At.type;if(!I.textureFormatReadable(It))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(Rt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.bufferData(N.PIXEL_PACK_BUFFER,ct.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt),N.readPixels(W,j,nt,Y,zt.convert(It),zt.convert(Rt),0);let ne=L!==null?O.get(L).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,ne);let oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await lp(N,oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ct),N.deleteBuffer(Ft),N.deleteSync(oe),ct}throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,W=null,j=0){let nt=Math.pow(2,-j),Y=Math.floor(w.image.width*nt),ct=Math.floor(w.image.height*nt),_t=W!==null?W.x:0,Mt=W!==null?W.y:0;z.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,j,0,0,_t,Mt,Y,ct),E.unbindTexture()};let cm=N.createFramebuffer(),um=N.createFramebuffer();this.copyTextureToTexture=function(w,W,j=null,nt=null,Y=0,ct=null){let _t,Mt,Tt,At,It,Rt,Ft,ne,oe;ct===null&&(Y!==0?(Yi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=Y,Y=0):ct=0);let de=w.isCompressedTexture?w.mipmaps[ct]:w.image;if(j!==null)_t=j.max.x-j.min.x,Mt=j.max.y-j.min.y,Tt=j.isBox3?j.max.z-j.min.z:1,At=j.min.x,It=j.min.y,Rt=j.isBox3?j.min.z:0;else{let vn=Math.pow(2,-Y);_t=Math.floor(de.width*vn),Mt=Math.floor(de.height*vn),Tt=w.isDataArrayTexture?de.depth:w.isData3DTexture?Math.floor(de.depth*vn):1,At=0,It=0,Rt=0}nt!==null?(Ft=nt.x,ne=nt.y,oe=nt.z):(Ft=0,ne=0,oe=0);let ie=zt.convert(W.format),Ht=zt.convert(W.type),re;W.isData3DTexture?(z.setTexture3D(W,0),re=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(z.setTexture2DArray(W,0),re=N.TEXTURE_2D_ARRAY):(z.setTexture2D(W,0),re=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);let we=N.getParameter(N.UNPACK_ROW_LENGTH),Ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Lt=N.getParameter(N.UNPACK_SKIP_PIXELS),cn=N.getParameter(N.UNPACK_SKIP_ROWS),fl=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,At),N.pixelStorei(N.UNPACK_SKIP_ROWS,It),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Rt);let ra=w.isDataArrayTexture||w.isData3DTexture,hi=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){let vn=O.get(w),dr=O.get(W),Fn=O.get(vn.__renderTarget),ml=O.get(dr.__renderTarget);E.bindFramebuffer(N.READ_FRAMEBUFFER,Fn.__webglFramebuffer),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,ml.__webglFramebuffer);for(let pr=0;pr<Tt;pr++)ra&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,O.get(w).__webglTexture,Y,Rt+pr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,O.get(W).__webglTexture,ct,oe+pr)),N.blitFramebuffer(At,It,_t,Mt,Ft,ne,_t,Mt,N.DEPTH_BUFFER_BIT,N.NEAREST);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||O.has(w)){let vn=O.get(w),dr=O.get(W);E.bindFramebuffer(N.READ_FRAMEBUFFER,cm),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,um);for(let Fn=0;Fn<Tt;Fn++)ra?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vn.__webglTexture,Y,Rt+Fn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vn.__webglTexture,Y),hi?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dr.__webglTexture,ct,oe+Fn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dr.__webglTexture,ct),Y!==0?N.blitFramebuffer(At,It,_t,Mt,Ft,ne,_t,Mt,N.COLOR_BUFFER_BIT,N.NEAREST):hi?N.copyTexSubImage3D(re,ct,Ft,ne,oe+Fn,At,It,_t,Mt):N.copyTexSubImage2D(re,ct,Ft,ne,At,It,_t,Mt);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else hi?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(re,ct,Ft,ne,oe,_t,Mt,Tt,ie,Ht,de.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(re,ct,Ft,ne,oe,_t,Mt,Tt,ie,de.data):N.texSubImage3D(re,ct,Ft,ne,oe,_t,Mt,Tt,ie,Ht,de):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ct,Ft,ne,_t,Mt,ie,Ht,de.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ct,Ft,ne,de.width,de.height,ie,de.data):N.texSubImage2D(N.TEXTURE_2D,ct,Ft,ne,_t,Mt,ie,Ht,de);N.pixelStorei(N.UNPACK_ROW_LENGTH,we),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Lt),N.pixelStorei(N.UNPACK_SKIP_ROWS,cn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fl),ct===0&&W.generateMipmaps&&N.generateMipmap(re),E.unbindTexture()},this.copyTextureToTexture3D=function(w,W,j=null,nt=null,Y=0){return Yi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,j,nt,Y)},this.initRenderTarget=function(w){O.get(w).__webglFramebuffer===void 0&&z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?z.setTextureCube(w,0):w.isData3DTexture?z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?z.setTexture2DArray(w,0):z.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){C=0,A=0,L=null,E.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wh}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}function Cc(t,e){if(e===Vh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===Gr||e===Us){let n=t.getIndex();if(n===null){let a=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);t.setIndex(a),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,r=[];if(e===Gr)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)if(a%2===0)r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2));else r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a));if(r.length/3!==i)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}class Dc extends ii{constructor(t){super(t);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new df(e)}),this.register(function(e){return new pf(e)}),this.register(function(e){return new xf(e)}),this.register(function(e){return new Tf(e)}),this.register(function(e){return new Ef(e)}),this.register(function(e){return new mf(e)}),this.register(function(e){return new gf(e)}),this.register(function(e){return new _f(e)}),this.register(function(e){return new vf(e)}),this.register(function(e){return new uf(e)}),this.register(function(e){return new yf(e)}),this.register(function(e){return new ff(e)}),this.register(function(e){return new Sf(e)}),this.register(function(e){return new Mf(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new wf(e)}),this.register(function(e){return new bf(e)})}load(t,e,n,i){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=Ri.extractUrlBase(t);s=Ri.resolveURL(l,this.path)}else s=Ri.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){if(i)i(l);else console.error(l);r.manager.itemError(t),r.manager.itemEnd(t)},o=new ks(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{r.parse(l,s,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){if(this.pluginCallbacks.indexOf(t)===-1)this.pluginCallbacks.push(t);return this}unregister(t){if(this.pluginCallbacks.indexOf(t)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1);return this}parse(t,e,n,i){let r,s={},a={},o=new TextDecoder;if(typeof t==="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(o.decode(new Uint8Array(t,0,4))===Af){try{s[Vt.KHR_BINARY_GLTF]=new Rf(t)}catch(c){if(i)i(c);return}r=JSON.parse(s[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){if(i)i(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Uf(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let c=this.pluginCallbacks[h](l);if(!c.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");a[c.name]=c,s[c.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let c=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(c){case Vt.KHR_MATERIALS_UNLIT:s[c]=new cf;break;case Vt.KHR_DRACO_MESH_COMPRESSION:s[c]=new Cf(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:s[c]=new If;break;case Vt.KHR_MESH_QUANTIZATION:s[c]=new Lf;break;default:if(d.indexOf(c)>=0&&a[c]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function L0(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}var Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hf{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new vt(16777215);if(o.color!==void 0)h.setRGB(o.color[0],o.color[1],o.color[2],Be);let c=o.range!==void 0?o.range:0;switch(o.type){case"directional":l=new Ai(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ir(h),l.distance=c;break;case"spot":l=new Zo(h),l.distance=c,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,l.angle=o.spot.outerConeAngle,l.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}if(l.position.set(0,0,0),ri(l,o),o.intensity!==void 0)l.intensity=o.intensity;return l.name=e.createUniqueName(o.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t!=="light")return;return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;if(a===void 0)return null;return this._loadLight(a).then(function(o){return n._getNodeRef(e.cache,a,o)})}}class cf{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ae}extendParams(t,e,n){let i=[];t.color=new vt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],Be),t.opacity=s[3]}if(r.baseColorTexture!==void 0)i.push(n.assignTexture(t,"map",r.baseColorTexture,ge))}return Promise.all(i)}}class uf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;if(r!==void 0)e.emissiveIntensity=r;return Promise.resolve()}}class df{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0)e.clearcoat=s.clearcoatFactor;if(s.clearcoatTexture!==void 0)r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture));if(s.clearcoatRoughnessFactor!==void 0)e.clearcoatRoughness=s.clearcoatRoughnessFactor;if(s.clearcoatRoughnessTexture!==void 0)r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture));if(s.clearcoatNormalTexture!==void 0){if(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0){let a=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new st(a,a)}}return Promise.all(r)}}class pf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ff{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.iridescenceFactor!==void 0)e.iridescence=s.iridescenceFactor;if(s.iridescenceTexture!==void 0)r.push(n.assignTexture(e,"iridescenceMap",s.iridescenceTexture));if(s.iridescenceIor!==void 0)e.iridescenceIOR=s.iridescenceIor;if(e.iridescenceThicknessRange===void 0)e.iridescenceThicknessRange=[100,400];if(s.iridescenceThicknessMinimum!==void 0)e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum;if(s.iridescenceThicknessMaximum!==void 0)e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum;if(s.iridescenceThicknessTexture!==void 0)r.push(n.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture));return Promise.all(r)}}class mf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new vt(0,0,0),e.sheenRoughness=0,e.sheen=1;let s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){let a=s.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Be)}if(s.sheenRoughnessFactor!==void 0)e.sheenRoughness=s.sheenRoughnessFactor;if(s.sheenColorTexture!==void 0)r.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,ge));if(s.sheenRoughnessTexture!==void 0)r.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture));return Promise.all(r)}}class gf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.transmissionFactor!==void 0)e.transmission=s.transmissionFactor;if(s.transmissionTexture!==void 0)r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture));return Promise.all(r)}}class _f{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0)r.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture));e.attenuationDistance=s.attenuationDistance||1/0;let a=s.attenuationColor||[1,1,1];return e.attenuationColor=new vt().setRGB(a[0],a[1],a[2],Be),Promise.all(r)}}class vf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class yf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0)r.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));let a=s.specularColorFactor||[1,1,1];if(e.specularColor=new vt().setRGB(a[0],a[1],a[2],Be),s.specularColorTexture!==void 0)r.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,ge));return Promise.all(r)}}class Mf{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0)r.push(n.assignTexture(e,"bumpMap",s.bumpTexture));return Promise.all(r)}}class Sf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Ke}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.anisotropyStrength!==void 0)e.anisotropy=s.anisotropyStrength;if(s.anisotropyRotation!==void 0)e.anisotropyRotation=s.anisotropyRotation;if(s.anisotropyTexture!==void 0)r.push(n.assignTexture(e,"anisotropyMap",s.anisotropyTexture));return Promise.all(r)}}class xf{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],s=e.options.ktx2Loader;if(!s)if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return e.loadTextureImage(t,r.source,s)}}class Tf{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let s=r.extensions[e],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);if(l!==null)o=l}return n.loadTextureImage(t,s.source,o)}}class Ef{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let s=r.extensions[e],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);if(l!==null)o=l}return n.loadTextureImage(t,s.source,o)}}class wf{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported)if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(a){let o=i.byteOffset||0,l=i.byteLength||0,h=i.count,c=i.byteStride,d=new Uint8Array(a,o,l);if(s.decodeGltfBufferAsync)return s.decodeGltfBufferAsync(h,c,d,i.mode,i.filter).then(function(u){return u.buffer});else return s.ready.then(function(){let u=new ArrayBuffer(h*c);return s.decodeGltfBuffer(new Uint8Array(u),h,c,d,i.mode,i.filter),u})})}else return null}}class bf{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ln.TRIANGLES&&l.mode!==ln.TRIANGLE_STRIP&&l.mode!==ln.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=n.extensions[this.name].attributes,a=[],o={};for(let l in s)a.push(this.parser.getDependency("accessor",s[l]).then((h)=>{return o[l]=h,o[l]}));if(a.length<1)return null;return a.push(this.parser.createNodeMesh(t)),Promise.all(a).then((l)=>{let h=l.pop(),c=h.isGroup?h.children:[h],d=l[0].count,u=[];for(let p of c){let _=new wt,m=new T,f=new me,v=new T(1,1,1),y=new _o(p.geometry,p.material,d);for(let g=0;g<d;g++){if(o.TRANSLATION)m.fromBufferAttribute(o.TRANSLATION,g);if(o.ROTATION)f.fromBufferAttribute(o.ROTATION,g);if(o.SCALE)v.fromBufferAttribute(o.SCALE,g);y.setMatrixAt(g,_.compose(m,f,v))}for(let g in o)if(g==="_COLOR_0"){let S=o[g];y.instanceColor=new Zi(S.array,S.itemSize,S.normalized)}else if(g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE")p.geometry.setAttribute(g,o[g]);te.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),u.push(y)}if(h.isGroup)return h.clear(),h.add(...u),h;return u[0]})}}var Af="glTF",Ys=12,sf={JSON:1313821514,BIN:5130562};class Rf{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Af)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ys,r=new DataView(t,Ys),s=0;while(s<i){let a=r.getUint32(s,!0);s+=4;let o=r.getUint32(s,!0);if(s+=4,o===sf.JSON){let l=new Uint8Array(t,Ys+s,a);this.content=n.decode(l)}else if(o===sf.BIN){let l=Ys+s;this.body=t.slice(l,l+a)}s+=a}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class Cf{constructor(t,e){if(!e)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,a={},o={},l={};for(let h in s){let c=Uc[h]||h.toLowerCase();a[c]=s[h]}for(let h in t.attributes){let c=Uc[h]||h.toLowerCase();if(s[h]!==void 0){let d=n.accessors[t.attributes[h]],u=Qr[d.componentType];l[c]=u.name,o[c]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(c,d){i.decodeDracoFile(h,function(u){for(let p in u.attributes){let _=u.attributes[p],m=o[p];if(m!==void 0)_.normalized=m}c(u)},a,l,Be,d)})})}}class If{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0)t.channel=e.texCoord;if(e.offset!==void 0)t.offset.fromArray(e.offset);if(e.rotation!==void 0)t.rotation=e.rotation;if(e.scale!==void 0)t.repeat.fromArray(e.scale);return t.needsUpdate=!0,t}}class Lf{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class Fc extends bi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let s=0;s!==i;s++)e[s]=n[r+s];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,h=i-e,c=(n-e)/h,d=c*c,u=d*c,p=t*l,_=p-l,m=-2*u+3*d,f=u-d,v=1-m,y=f-d+c;for(let g=0;g!==a;g++){let S=s[_+g+a],C=s[_+g+o]*h,A=s[p+g+a],L=s[p+g]*h;r[g]=v*S+y*C+m*A+f*L}return r}}var P0=new me;class Pf extends Fc{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return P0.fromArray(r).normalize().toArray(r),r}}var ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},af={9728:Jn,9729:ke,9984:to,9985:Br,9986:$i,9987:jn},of={33071:Ki,33648:Qa,10497:_n},Ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U0={CUBICSPLINE:void 0,LINEAR:oo,STEP:zh},Lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function N0(t){if(t.DefaultMaterial===void 0)t.DefaultMaterial=new wi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:wn});return t.DefaultMaterial}function or(t,e,n){for(let i in n.extensions)if(t[i]===void 0)e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i]}function ri(t,e){if(e.extras!==void 0)if(typeof e.extras==="object")Object.assign(t.userData,e.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras)}function D0(t,e,n){let i=!1,r=!1,s=!1;for(let h=0,c=e.length;h<c;h++){let d=e[h];if(d.POSITION!==void 0)i=!0;if(d.NORMAL!==void 0)r=!0;if(d.COLOR_0!==void 0)s=!0;if(i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);let a=[],o=[],l=[];for(let h=0,c=e.length;h<c;h++){let d=e[h];if(i){let u=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):t.attributes.position;a.push(u)}if(r){let u=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):t.attributes.normal;o.push(u)}if(s){let u=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):t.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){let c=h[0],d=h[1],u=h[2];if(i)t.morphAttributes.position=c;if(r)t.morphAttributes.normal=d;if(s)t.morphAttributes.color=u;return t.morphTargetsRelative=!0,t})}function F0(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function O0(t){let e,n=t.extensions&&t.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(n)e="draco:"+n.bufferView+":"+n.indices+":"+Pc(n.attributes);else e=t.indices+":"+Pc(t.attributes)+":"+t.mode;if(t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+Pc(t.targets[i]);return e}function Pc(t){let e="",n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Nc(t){switch(t){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B0(t){if(t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0)return"image/webp";if(t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var z0=new wt;class Uf{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new L0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,s=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let o=a.match(/Version\/(\d+)/);i=n&&o?parseInt(o[1],10):-1,r=a.indexOf("Firefox")>-1,s=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||n&&i<17||r&&s<98)this.textureLoader=new Xo(this.options.manager);else this.textureLoader=new Jo(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ks(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){let a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return or(r,a,i),ri(a,i),Promise.all(n._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){for(let o of a.scenes)o.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let s=e[i].joints;for(let a=0,o=s.length;a<o;a++)t[s[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let s=t[i];if(s.mesh!==void 0){if(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0)n[s.mesh].isSkinnedMesh=!0}if(s.camera!==void 0)this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){if(e===void 0)return;if(t.refs[e]===void 0)t.refs[e]=t.uses[e]=0;t.refs[e]++}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(s,a)=>{let o=this.associations.get(s);if(o!=null)this.associations.set(a,o);for(let[l,h]of s.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);if(r)n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,s){return n.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,s){n.load(Ri.resolveURL(e.uri,i.path),r,void 0,function(){s(Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let s=Ic[i.type],a=Qr[i.componentType],o=i.normalized===!0,l=new a(i.count*s);return Promise.resolve(new ae(l,s,o))}let r=[];if(i.bufferView!==void 0)r.push(this.getDependency("bufferView",i.bufferView));else r.push(null);if(i.sparse!==void 0)r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView));return Promise.all(r).then(function(s){let a=s[0],o=Ic[i.type],l=Qr[i.componentType],h=l.BYTES_PER_ELEMENT,c=h*o,d=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,m;if(u&&u!==c){let f=Math.floor(d/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,y=e.cache.get(v);if(!y)_=new l(a,f*u,i.count*u/h),y=new Wr(_,u/h),e.cache.add(v,y);m=new yi(y,o,d%u/h,p)}else{if(a===null)_=new l(i.count*o);else _=new l(a,d,i.count*o);m=new ae(_,o,p)}if(i.sparse!==void 0){let f=Ic.SCALAR,v=Qr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,g=i.sparse.values.byteOffset||0,S=new v(s[1],y,i.sparse.count*f),C=new l(s[2],g,i.sparse.count*o);if(a!==null)m=new ae(m.array.slice(),m.itemSize,m.normalized);m.normalized=!1;for(let A=0,L=S.length;A<L;A++){let V=S[A];if(m.setX(V,C[A*o]),o>=2)m.setY(V,C[A*o+1]);if(o>=3)m.setZ(V,C[A*o+2]);if(o>=4)m.setW(V,C[A*o+3]);if(o>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,s=e.images[r],a=this.textureLoader;if(s.uri){let o=n.manager.getHandler(s.uri);if(o!==null)a=o}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,s=r.textures[t],a=r.images[e],o=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(e,n).then(function(h){if(h.flipY=!1,h.name=s.name||a.name||"",h.name===""&&typeof a.uri==="string"&&a.uri.startsWith("data:image/")===!1)h.name=a.uri;let d=(r.samplers||{})[s.sampler]||{};return h.magFilter=af[d.magFilter]||ke,h.minFilter=af[d.minFilter]||jn,h.wrapS=of[d.wrapS]||_n,h.wrapT=of[d.wrapT]||_n,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jn&&h.minFilter!==ke,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then((c)=>c.clone());let s=i.images[t],a=self.URL||self.webkitURL,o=s.uri||"",l=!1;if(s.bufferView!==void 0)o=n.getDependency("bufferView",s.bufferView).then(function(c){l=!0;let d=new Blob([c],{type:s.mimeType});return o=a.createObjectURL(d),o});else if(s.uri===void 0)throw Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(c){return new Promise(function(d,u){let p=d;if(e.isImageBitmapLoader===!0)p=function(_){let m=new he(_);m.needsUpdate=!0,d(m)};e.load(Ri.resolveURL(c,r.path),p,void 0,u)})}).then(function(c){if(l===!0)a.revokeObjectURL(o);return ri(c,s),c.userData.mimeType=s.mimeType||B0(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),c});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0)s=s.clone(),s.channel=n.texCoord;if(r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let o=r.associations.get(s);s=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,o)}}if(i!==void 0)s.colorSpace=i;return t[e]=s,s})}assignFinalMaterial(t){let{geometry:e,material:n}=t,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,o=this.cache.get(a);if(!o)o=new Ti,ze.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,o.sizeAttenuation=!1,this.cache.add(a,o);n=o}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,o=this.cache.get(a);if(!o)o=new er,ze.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,this.cache.add(a,o);n=o}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";if(i)a+="derivative-tangents:";if(r)a+="vertex-colors:";if(s)a+="flat-shading:";let o=this.cache.get(a);if(!o){if(o=n.clone(),r)o.vertexColors=!0;if(s)o.flatShading=!0;if(i){if(o.normalScale)o.normalScale.y*=-1;if(o.clearcoatNormalScale)o.clearcoatNormalScale.y*=-1}this.cache.add(a,o),this.associations.set(o,this.associations.get(n))}n=o}t.material=n}getMaterialType(){return wi}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],s,a={},o=r.extensions||{},l=[];if(o[Vt.KHR_MATERIALS_UNLIT]){let c=i[Vt.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),l.push(c.extendParams(a,r,e))}else{let c=r.pbrMetallicRoughness||{};if(a.color=new vt(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){let d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Be),a.opacity=d[3]}if(c.baseColorTexture!==void 0)l.push(e.assignTexture(a,"map",c.baseColorTexture,ge));if(a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0)l.push(e.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture));s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}if(r.doubleSided===!0)a.side=be;let h=r.alphaMode||Lc.OPAQUE;if(h===Lc.BLEND)a.transparent=!0,a.depthWrite=!1;else if(a.transparent=!1,h===Lc.MASK)a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&s!==Ae){if(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new st(1,1),r.normalTexture.scale!==void 0){let c=r.normalTexture.scale;a.normalScale.set(c,c)}}if(r.occlusionTexture!==void 0&&s!==Ae){if(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)a.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&s!==Ae){let c=r.emissiveFactor;a.emissive=new vt().setRGB(c[0],c[1],c[2],Be)}if(r.emissiveTexture!==void 0&&s!==Ae)l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ge));return Promise.all(l).then(function(){let c=new s(a);if(r.name)c.name=r.name;if(ri(c,r),e.associations.set(c,{materials:t}),r.extensions)or(i,c,r);return c})}createUniqueName(t){let e=Yt.sanitizeNodeName(t||"");if(e in this.nodeNamesUsed)return e+"_"+ ++this.nodeNamesUsed[e];else return this.nodeNamesUsed[e]=0,e}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(o){return lf(o,a,e)})}let s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a],h=O0(l),c=i[h];if(c)s.push(c.promise);else{let d;if(l.extensions&&l.extensions[Vt.KHR_DRACO_MESH_COMPRESSION])d=r(l);else d=lf(new Jt,l,e);i[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],s=r.primitives,a=[];for(let o=0,l=s.length;o<l;o++){let h=s[o].material===void 0?N0(this.cache):this.getDependency("material",s[o].material);a.push(h)}return a.push(e.loadGeometries(s)),Promise.all(a).then(function(o){let l=o.slice(0,o.length-1),h=o[o.length-1],c=[];for(let u=0,p=h.length;u<p;u++){let _=h[u],m=s[u],f,v=l[u];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0){if(f=r.isSkinnedMesh===!0?new mo(_,v):new ce(_,v),f.isSkinnedMesh===!0)f.normalizeSkinWeights();if(m.mode===ln.TRIANGLE_STRIP)f.geometry=Cc(f.geometry,Us);else if(m.mode===ln.TRIANGLE_FAN)f.geometry=Cc(f.geometry,Gr)}else if(m.mode===ln.LINES)f=new Yr(_,v);else if(m.mode===ln.LINE_STRIP)f=new qr(_,v);else if(m.mode===ln.LINE_LOOP)f=new yo(_,v);else if(m.mode===ln.POINTS)f=new nr(_,v);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);if(Object.keys(f.geometry.morphAttributes).length>0)F0(f,r);if(f.name=e.createUniqueName(r.name||"mesh_"+t),ri(f,r),m.extensions)or(i,f,m);e.assignFinalMaterial(f),c.push(f)}for(let u=0,p=c.length;u<p;u++)e.associations.set(c[u],{meshes:t,primitives:u});if(c.length===1){if(r.extensions)or(i,c[0],r);return c[0]}let d=new Ze;if(r.extensions)or(i,d,r);e.associations.set(d,{meshes:t});for(let u=0,p=c.length;u<p;u++)d.add(c[u]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(n.type==="perspective")e=new _e(Ns.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2000000);else if(n.type==="orthographic")e=new Jr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar);if(n.name)e.name=this.createUniqueName(n.name);return ri(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));if(e.inverseBindMatrices!==void 0)n.push(this.getDependency("accessor",e.inverseBindMatrices));else n.push(null);return Promise.all(n).then(function(i){let r=i.pop(),s=i,a=[],o=[];for(let l=0,h=s.length;l<h;l++){let c=s[l];if(c){a.push(c);let d=new wt;if(r!==null)d.fromArray(r.array,l*16);o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Vs(a,o)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,s=[],a=[],o=[],l=[],h=[];for(let c=0,d=i.channels.length;c<d;c++){let u=i.channels[c],p=i.samplers[u.sampler],_=u.target,m=_.node,f=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;if(_.node===void 0)continue;s.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),o.push(this.getDependency("accessor",v)),l.push(p),h.push(_)}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(c){let d=c[0],u=c[1],p=c[2],_=c[3],m=c[4],f=[];for(let v=0,y=d.length;v<y;v++){let g=d[v],S=u[v],C=p[v],A=_[v],L=m[v];if(g===void 0)continue;if(g.updateMatrix)g.updateMatrix();let V=n._createAnimationTracks(g,S,C,A,L);if(V)for(let P=0;P<V.length;P++)f.push(V[P])}return new Dr(r,void 0,f)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];if(i.mesh===void 0)return null;return n.getDependency("mesh",i.mesh).then(function(r){let s=n._getNodeRef(n.meshCache,i.mesh,r);if(i.weights!==void 0)s.traverse(function(a){if(!a.isMesh)return;for(let o=0,l=i.weights.length;o<l;o++)a.morphTargetInfluences[o]=i.weights[o]});return s})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),s=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)s.push(n.getDependency("node",a[l]));let o=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),o]).then(function(l){let h=l[0],c=l[1],d=l[2];if(d!==null)h.traverse(function(u){if(!u.isSkinnedMesh)return;u.bind(d,z0)});for(let u=0,p=c.length;u<p;u++)h.add(c[u]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],s=r.name?i.createUniqueName(r.name):"",a=[],o=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});if(o)a.push(o);if(r.camera!==void 0)a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)}));return i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0)h=new zs;else if(l.length>1)h=new Ze;else if(l.length===1)h=l[0];else h=new te;if(h!==l[0])for(let c=0,d=l.length;c<d;c++)h.add(l[c]);if(r.name)h.userData.name=r.name,h.name=s;if(ri(h,r),r.extensions)or(n,h,r);if(r.matrix!==void 0){let c=new wt;c.fromArray(r.matrix),h.applyMatrix4(c)}else{if(r.translation!==void 0)h.position.fromArray(r.translation);if(r.rotation!==void 0)h.quaternion.fromArray(r.rotation);if(r.scale!==void 0)h.scale.fromArray(r.scale)}if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let c=i.associations.get(h);i.associations.set(h,{...c})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new Ze;if(n.name)r.name=i.createUniqueName(n.name);if(ri(r,n),n.extensions)or(e,r,n);let s=n.nodes||[],a=[];for(let o=0,l=s.length;o<l;o++)a.push(i.getDependency("node",s[o]));return Promise.all(a).then(function(o){for(let h=0,c=o.length;h<c;h++)r.add(o[h]);let l=(h)=>{let c=new Map;for(let[d,u]of i.associations)if(d instanceof ze||d instanceof he)c.set(d,u);return h.traverse((d)=>{let u=i.associations.get(d);if(u!=null)c.set(d,u)}),c};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let s=[],a=t.name?t.name:t.uuid,o=[];if(Ci[r.path]===Ci.weights)t.traverse(function(d){if(d.morphTargetInfluences)o.push(d.name?d.name:d.uuid)});else o.push(a);let l;switch(Ci[r.path]){case Ci.weights:l=Xn;break;case Ci.rotation:l=qn;break;case Ci.translation:case Ci.scale:l=Yn;break;default:switch(n.itemSize){case 1:l=Xn;break;case 2:case 3:default:l=Yn;break}break}let h=i.interpolation!==void 0?U0[i.interpolation]:oo,c=this._getArrayFromAccessor(n);for(let d=0,u=o.length;d<u;d++){let p=new l(o[d]+"."+Ci[r.path],e.array,c,h);if(i.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(p);s.push(p)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Nc(e.constructor),i=new Float32Array(e.length);for(let r=0,s=e.length;r<s;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){return new(this instanceof qn?Pf:Fc)(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function V0(t,e,n){let i=e.attributes,r=new Ue;if(i.POSITION!==void 0){let o=n.json.accessors[i.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(r.set(new T(l[0],l[1],l[2]),new T(h[0],h[1],h[2])),o.normalized){let c=Nc(Qr[o.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new T,l=new T;for(let h=0,c=s.length;h<c;h++){let d=s[h];if(d.POSITION!==void 0){let u=n.json.accessors[d.POSITION],p=u.min,_=u.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),u.normalized){let m=Nc(Qr[u.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}t.boundingBox=r;let a=new We;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=a}function lf(t,e,n){let i=e.attributes,r=[];function s(a,o){return n.getDependency("accessor",a).then(function(l){t.setAttribute(o,l)})}for(let a in i){let o=Uc[a]||a.toLowerCase();if(o in t.attributes)continue;r.push(s(i[a],o))}if(e.indices!==void 0&&!t.index){let a=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});r.push(a)}if(kt.workingColorSpace!==Be&&"COLOR_0"in i)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${kt.workingColorSpace}" not supported.`);return ri(t,e),V0(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?D0(t,e.targets,n):t})}function ts(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n}function Zs(t){let e=t>>>0;return()=>{return e=e*1664525+1013904223>>>0,e/4294967296}}function es(t,{repeatX:e=1,repeatY:n=1,srgb:i=!0}={}){let r=new Rn(t);return r.wrapS=_n,r.wrapT=_n,r.repeat.set(e,n),r.colorSpace=i?ge:$n,r.anisotropy=4,r.needsUpdate=!0,r}function H0(){let t=ts(512,512),e=t.getContext("2d"),n=Zs(1024),i=e.createLinearGradient(0,0,512,0);i.addColorStop(0,"#ead8c7"),i.addColorStop(0.5,"#f0e0d0"),i.addColorStop(1,"#e7d4c2"),e.fillStyle=i,e.fillRect(0,0,512,512);let r=4,s=512/r;for(let a=0;a<r;a+=1){let o=(n()-0.5)*10;e.fillStyle=o>0?`rgba(255,248,240,${Math.abs(o)/180})`:`rgba(130,96,70,${Math.abs(o)/180})`,e.fillRect(0,a*s,512,s),e.fillStyle="rgba(140,104,78,0.13)",e.fillRect(0,a*s,512,1.5)}for(let a=0;a<240;a+=1){let o=n()*512,l=1.2+n()*2.8,h=0.008+n()*0.014,c=n()*Math.PI*2;e.strokeStyle=a%3===0?`rgba(165,126,96,${0.04+n()*0.06})`:`rgba(255,248,238,${0.05+n()*0.05})`,e.lineWidth=0.7+n()*1.4,e.beginPath();for(let d=0;d<=512;d+=16){let u=o+Math.sin(d*h+c)*l;if(d===0)e.moveTo(d,u);else e.lineTo(d,u)}e.stroke()}return es(t,{repeatX:2,repeatY:2})}function G0(){let t=ts(512,512),e=t.getContext("2d"),n=Zs(2048);e.fillStyle="#c8ab96",e.fillRect(0,0,512,512);let i=8,r=512/i;for(let s=0;s<i;s+=1){let a=s%2*180;for(let o=-1;o<3;o+=1){let l=o*256+a,h=192+Math.floor((n()-0.5)*18);e.fillStyle=`rgb(${h}, ${Math.floor(h*0.85)}, ${Math.floor(h*0.74)})`,e.fillRect(l,s*r,254,r-2);for(let c=0;c<9;c+=1){let d=s*r+4+n()*(r-8);e.strokeStyle=`rgba(125,90,68,${0.06+n()*0.07})`,e.lineWidth=1,e.beginPath(),e.moveTo(l+2,d),e.lineTo(l+252,d+(n()-0.5)*3),e.stroke()}}e.fillStyle="rgba(92,66,52,0.18)",e.fillRect(0,s*r+r-2,512,2)}return es(t,{repeatX:4,repeatY:4})}function k0(){let t=ts(256,256),e=t.getContext("2d"),n=Zs(3072);e.fillStyle="#e5d8ee",e.fillRect(0,0,256,256);for(let i=0;i<256;i+=4)for(let r=0;r<256;r+=4){let s=(r+i)/4%2===0,a=(n()-0.5)*12,o=s?236:222,l=Math.min(255,Math.max(0,o+a)),h=Math.min(255,Math.max(0,o-10+a)),c=Math.min(255,Math.max(0,o+12+a));e.fillStyle=`rgb(${l|0},${h|0},${c|0})`,e.fillRect(r,i,4,4)}e.strokeStyle="rgba(255,255,255,0.14)",e.lineWidth=1;for(let i=2;i<256;i+=8)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();return es(t,{repeatX:6,repeatY:6})}function W0(){let t=ts(256,256),e=t.getContext("2d"),n=Zs(4096);e.fillStyle="#ece9f5",e.fillRect(0,0,256,256);for(let i=0;i<3600;i+=1){let r=n()*256,s=n()*256,a=1+n()*2.5;e.fillStyle=n()>0.5?"rgba(255,255,255,0.08)":"rgba(170,160,198,0.06)",e.fillRect(r,s,a,a)}return es(t,{repeatX:4,repeatY:4})}function X0(){let t=ts(256,256),e=t.getContext("2d"),n=128,i=128,r=e.createRadialGradient(128,128,12,128,128,124);return r.addColorStop(0,"#805236"),r.addColorStop(0.7,"#583420"),r.addColorStop(1,"#3b2113"),e.fillStyle=r,e.fillRect(0,0,256,256),e.strokeStyle="rgba(248,236,222,0.52)",e.lineWidth=8,e.beginPath(),e.arc(128,128,66,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(252,243,234,0.88)",e.beginPath(),e.moveTo(128,162),e.bezierCurveTo(80,132,84,86,128,112),e.bezierCurveTo(172,86,176,132,128,162),e.fill(),es(t,{repeatX:1,repeatY:1})}function q0(){let t=ts(1024,680),e=t.getContext("2d"),n=Zs(7777);e.save(),e.translate(512,0),e.scale(-1,1);let i=e.createLinearGradient(0,0,0,680);i.addColorStop(0,"#2a2252"),i.addColorStop(0.42,"#6d4b8e"),i.addColorStop(0.72,"#e88eb2"),i.addColorStop(1,"#ffd0be"),e.fillStyle=i,e.fillRect(0,0,512,680);for(let c=0;c<65;c+=1){let d=20+n()*472,u=20+n()*290,p=0.8+n()*2;e.fillStyle=`rgba(255,248,255,${0.35+n()*0.65})`,e.beginPath(),e.arc(d,u,p,0,Math.PI*2),e.fill()}e.save(),e.beginPath(),e.arc(256,305,118,0,Math.PI*2),e.clip();let r=e.createLinearGradient(0,185,0,425);r.addColorStop(0,"#fff4dc"),r.addColorStop(0.5,"#ffb5cc"),r.addColorStop(1,"#ff77a8"),e.fillStyle=r,e.fillRect(130,180,260,250),e.fillStyle="#5c3c7e";for(let c=318;c<420;c+=18)e.fillRect(130,c,260,4+(c-318)*0.05);e.restore(),e.fillStyle="rgba(255,222,238,0.34)";for(let[c,d,u,p]of[[125,255,86,16],[390,225,92,18],[210,390,115,14]])e.beginPath(),e.ellipse(c,d,u,p,0,0,Math.PI*2),e.fill();let s=[[12,430,58,250],[64,390,62,290],[118,450,52,230],[166,368,70,312],[232,412,54,268],[282,355,68,325],[346,405,58,275],[398,376,62,304],[452,432,56,248]];for(let[c,d,u,p]of s){e.fillStyle="#241c44",e.fillRect(c,d,u,p);for(let _=d+16;_<620;_+=16)for(let m=c+9;m<c+u-12;m+=14)if(n()<0.52)e.fillStyle=n()<0.55?"#ffaad0":n()<0.7?"#8ef0ff":"#ffe8a8",e.fillRect(m,_,7,8)}e.strokeStyle="rgba(255,244,252,0.55)",e.lineWidth=3,e.strokeRect(24,24,464,632),e.fillStyle="rgba(255,250,255,0.92)",e.font='600 28px -apple-system, "SF Pro Rounded", sans-serif',e.textAlign="center",e.fillText("MIDNIGHT LO-FI",256,86),e.fillStyle="rgba(255,216,238,0.82)",e.font='500 15px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("WITH SNOZZY  ·  VOL. 01",256,114),e.fillStyle="rgba(255,244,250,0.82)",e.font='500 14px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("SIDE A  ·  RAINY WINDOW SESSIONS",256,632),e.restore();let a=e.createLinearGradient(512,0,1024,680);a.addColorStop(0,"#f5ecfa"),a.addColorStop(0.55,"#e8e0f8"),a.addColorStop(1,"#dce8fa"),e.fillStyle=a,e.fillRect(512,0,512,680);let o=e.createLinearGradient(512,110,512,540);o.addColorStop(0,"#6a5b9e"),o.addColorStop(0.55,"#b689c8"),o.addColorStop(1,"#f7bfd6"),e.fillStyle=o,e.beginPath(),e.arc(768,280,165,Math.PI,0),e.lineTo(933,520),e.lineTo(603,520),e.closePath(),e.fill();let l=[];for(let c=0;c<8;c+=1){let d=-Math.PI*0.85+c/7*Math.PI*1.15;l.push([768+Math.cos(d)*105,315+Math.sin(d)*95])}e.strokeStyle="rgba(255,242,208,0.68)",e.lineWidth=2,e.beginPath(),l.forEach(([c,d],u)=>u===0?e.moveTo(c,d):e.lineTo(c,d)),e.stroke();for(let[c,d]of l)e.fillStyle="#fff9e6",e.beginPath(),e.arc(c,d,5,0,Math.PI*2),e.fill();e.fillStyle="#fff7e6",e.beginPath(),e.arc(768,245,42,0,Math.PI*2),e.fill(),e.fillStyle="#8b6eb3",e.beginPath(),e.arc(786,236,35,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,214,232,0.88)";for(let[c,d,u]of[[650,440,0.4],[840,400,-0.5],[730,480,0.9],[875,470,0.2]])e.save(),e.translate(c,d),e.rotate(u),e.beginPath(),e.ellipse(0,0,11,6,0,0,Math.PI*2),e.fill(),e.restore();e.strokeStyle="rgba(116,96,158,0.28)",e.lineWidth=2,e.strokeRect(540,32,456,616),e.fillStyle="#4f4074",e.font='600 22px -apple-system, "SF Pro Rounded", sans-serif',e.textAlign="center",e.fillText("TWELVE SONGS",768,578),e.fillStyle="#7e6ca6",e.font='500 13px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("STARLIGHT CONSTELLATION  ·  EDITION 2026",768,606);let h=es(t,{repeatX:1,repeatY:1});return h.wrapS=Ki,h.wrapT=Ki,h.flipY=!1,h}function Nf(){let t={wood:H0(),floor:G0(),rug:k0(),wall:W0(),coffee_liquid:X0(),poster_atlas:q0()};return{textures:t,dispose(){Object.values(t).forEach((e)=>e?.dispose?.())}}}var Oc=["typing","composing","researching","planning","resting"];function Bc(t,e,n=!1){let i=document.createElement("canvas");i.width=t,i.height=e;let r=i.getContext("2d"),s=new Rn(i);if(s.colorSpace=ge,s.flipY=!1,n)s.wrapS=_n,s.repeat.x=-1,s.offset.x=1;return s.minFilter=ke,s.magFilter=ke,{canvas:i,ctx:r,texture:s}}function si(t,e,n,i,r,s){t.beginPath(),t.roundRect(e,n,i,r,s)}function Y0(t,e,n,i,r,s){let a=s||r.activity||"typing",o=r.beatPulse||0,l=t.createLinearGradient(0,0,e,n);l.addColorStop(0,"#14172b"),l.addColorStop(1,"#1d1935"),t.fillStyle=l,t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(0,0,e,26);for(let[c,d]of[["#ff7ca8",0],["#ffd27d",1],["#7ce8c8",2]].map(([u,p])=>[p,u]))t.fillStyle=d,t.beginPath(),t.arc(16+c*14,13,4.2,0,Math.PI*2),t.fill();t.fillStyle="rgba(235,232,255,0.72)",t.font='600 11px -apple-system, "SF Pro Rounded", sans-serif';let h={typing:"SnozzyRoom3D.swift — WithSnozzy",composing:"Track_04_RainyWindow.daw — Lo-Fi Synth",researching:"Music Theory · Extended Jazz Chords",planning:"Today Focus & Tasks",resting:"Ambient Mode · Take a Breath",takingBreak:"Break Time · Warm Coffee"};if(t.textAlign="left",t.fillText(h[a]||h.typing,64,17),a==="composing"){t.fillStyle="rgba(255,255,255,0.04)",t.fillRect(10,34,48,n-46);for(let p=0;p<11;p+=1){let _=38+p*24;t.fillStyle=p%2===0?"rgba(255,255,255,0.045)":"rgba(255,255,255,0.015)",t.fillRect(62,_,e-74,21),t.fillStyle=[1,3,6,8,10].includes(p)?"#3b3556":"#dcd6f5",t.fillRect(14,_+2,40,17)}let c=i*38%(e-80),d=[[0,2,68,"#ff9bc4"],[82,4,54,"#7ce8ff"],[150,1,76,"#c7a4ff"],[238,5,62,"#ff9bc4"],[312,3,88,"#95f2d8"],[40,7,94,"#a6b8ff"],[188,6,72,"#ffd0a6"],[290,8,64,"#ff9bc4"],[380,2,58,"#7ce8ff"]];for(let[p,_,m,f]of d){let v=66+(p-c+(e-74))%(e-74),y=40+_*24,g=Math.min(m,e-14-v);if(g>6)t.fillStyle=f,si(t,v,y,g,17,5),t.fill()}let u=68+i*95%(e-86);t.strokeStyle="#ff95c8",t.lineWidth=2,t.beginPath(),t.moveTo(u,34),t.lineTo(u,n-12),t.stroke()}else if(a==="planning")[{title:"TODAY",accent:"#ff96c2",items:["Finish 3D shaders","Record synth chord","Warm latte break"]},{title:"IN PROGRESS",accent:"#7ce8ff",items:["WithSnozzy Steam build","Album track #4 mix"]}].forEach((d,u)=>{let p=18+u*242;t.fillStyle="rgba(255,255,255,0.05)",si(t,p,40,228,n-56,12),t.fill(),t.fillStyle=d.accent,t.font="700 11px -apple-system, sans-serif",t.fillText(d.title,p+14,62),d.items.forEach((_,m)=>{let f=76+m*62;t.fillStyle="rgba(255,255,255,0.075)",si(t,p+12,f,204,50,9),t.fill(),t.fillStyle=d.accent,t.beginPath(),t.arc(p+28,f+25,6,0,Math.PI*2),t.fill(),t.fillStyle="rgba(250,246,255,0.88)",t.font="500 12px -apple-system, sans-serif",t.fillText(_,p+44,f+29)})});else if(a==="researching"){t.fillStyle="rgba(255,255,255,0.06)",si(t,18,38,e-36,26,8),t.fill(),t.fillStyle="rgba(170,218,255,0.82)",t.font="500 11px -apple-system, monospace",t.fillText("https://lofi.notes/chords/maj9-voicings",30,55),t.fillStyle="#f5d4ff",t.font='700 18px -apple-system, "SF Pro Rounded", sans-serif',t.fillText("Dreamy Lo-Fi Voicings",24,98),t.strokeStyle="#7ce8ff",t.lineWidth=2.5,t.beginPath();for(let c=24;c<e-24;c+=6){let d=165+Math.sin(c*0.035+i*2.4)*24+Math.cos(c*0.07-i)*10;if(c===24)t.moveTo(c,d);else t.lineTo(c,d)}t.stroke();for(let c=0;c<4;c+=1)t.fillStyle="rgba(230,226,255,0.22)",si(t,24,218+c*20,c===3?260:420,8,4),t.fill()}else if(a==="resting"||a==="takingBreak"){let c=new Date,d=String(c.getHours()).padStart(2,"0"),u=String(c.getMinutes()).padStart(2,"0"),p=t.createRadialGradient(e*0.5,n*0.52,16,e*0.5,n*0.52,175);p.addColorStop(0,`rgba(255,152,208,${0.26+o*0.14})`),p.addColorStop(1,"rgba(20,23,43,0)"),t.fillStyle=p,t.fillRect(0,26,e,n-26),t.textAlign="center",t.fillStyle="#fff5fb",t.font='700 72px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`${d}:${u}`,e*0.5,n*0.56),t.fillStyle="rgba(220,210,255,0.72)",t.font='500 14px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(a==="takingBreak"?"☕  warm coffee break  ·  with snozzy":"✦  stay cozy  ·  lo-fi companion",e*0.5,n*0.72),t.textAlign="left"}else{t.fillStyle="rgba(255,255,255,0.035)",t.fillRect(0,26,98,n-26),["Room.swift","Shader.glsl","LifeRig.js","Synth.dsp","Album.json"].forEach((p,_)=>{if(_===1)t.fillStyle="rgba(255,154,205,0.18)",si(t,8,38+_*24,82,20,5),t.fill();t.fillStyle=_===1?"#ffd8ec":"rgba(210,208,238,0.52)",t.font="500 10.5px -apple-system, monospace",t.fillText(p,16,52+_*24)});let d=[[["#ff93c8","struct "],["#87ebff","LofiRoom"],["#e8e4ff"," {"]],[["#c7a4ff","  let "],["#e8e4ff","mood = "],["#ffd594",".brightCyber"]],[["#c7a4ff","  let "],["#e8e4ff","bpm  = "],["#92f5d2","76.0"]],[["#ff93c8","  func "],["#87ebff","render"],["#e8e4ff","(dt: Double) {"]],[["#92f5d2","    // soft pastel rim + snow"]],[["#e8e4ff","    sky.blend(hour: "],["#ffd594","sceneHour"],["#e8e4ff",")"]],[["#e8e4ff","    snozzy.updateSpringHair(dt)"]],[["#e8e4ff","    coffee.emitSteam(warmth: "],["#ffd594","1.0"],["#e8e4ff",")"]],[["#ff93c8","    return "],["#87ebff","cozyFrame"],["#e8e4ff","()"]],[["#e8e4ff","  }"]],[["#e8e4ff","}"]]],u=Math.floor(i*0.9)%d.length;d.forEach((p,_)=>{let m=52+_*22;if(_===u)t.fillStyle="rgba(130,190,255,0.09)",t.fillRect(104,m-14,e-114,19);t.fillStyle="rgba(180,175,215,0.34)",t.font="500 11px ui-monospace, Menlo, monospace",t.fillText(String(_+1).padStart(2," "),108,m);let f=132;for(let[v,y]of p)t.fillStyle=v,t.fillText(y,f,m),f+=t.measureText(y).width;if(_===u&&Math.floor(i*2.4)%2===0)t.fillStyle="#ff96c8",t.fillRect(f+2,m-11,7,13)})}t.fillStyle="rgba(255,156,208,0.16)",t.fillRect(0,n-18,e,18),t.fillStyle="rgba(255,226,242,0.85)",t.font="600 9.5px -apple-system, monospace",t.fillText(`● LIVE  ·  ${String(a).toUpperCase()}  ·  ${r.isPlaying?"♪ PLAYING":"QUIET"}`,12,n-6)}function Z0(t,e,n,i,r){let s=Boolean(r.isPlaying),a=r.beatPulse||0,o=Math.max(0,Math.min(12,Number(r.playableTracks||0))),l=t.createLinearGradient(0,0,e,n);l.addColorStop(0,"#181530"),l.addColorStop(1,"#261b42"),t.fillStyle=l,t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(0,0,e,34),t.fillStyle=s?"#ff94c8":"#96a2cf",t.beginPath(),t.arc(18,17,5,0,Math.PI*2),t.fill(),t.fillStyle="#f5efff",t.font='600 12px -apple-system, "SF Pro Rounded", sans-serif',t.textAlign="left",t.fillText(r.trackTitle||(s?"Lo-Fi Radio · Chill":"Music Paused"),32,21);let h=18,c=18,d=10,u=4,p=n-54;for(let S=0;S<h;S+=1){let C=s?0.28+0.42*Math.abs(Math.sin(i*4.4+S*0.55))+0.3*a*Math.cos(S*0.4):0.08+0.04*Math.sin(i*1.2+S*0.7),A=Math.max(6,Math.min(110,C*108)),L=t.createLinearGradient(0,p-A,0,p);L.addColorStop(0,"#84eeff"),L.addColorStop(0.55,"#c9a0ff"),L.addColorStop(1,"#ff8fc4"),t.fillStyle=L,si(t,c+S*(d+u),p-A,d,A,4),t.fill()}let _=e-62,m=108,f=36;t.strokeStyle="rgba(255,255,255,0.12)",t.lineWidth=7,t.beginPath(),t.arc(_,m,f,0,Math.PI*2),t.stroke();let v=r.focusPhase||"idle",y=v==="work"?"#ff90c4":v==="idle"?"#b8a4ff":"#7ef0d2",g=v==="idle"?0.35+0.15*Math.sin(i*0.6):0.72;t.strokeStyle=y,t.lineCap="round",t.beginPath(),t.arc(_,m,f,-Math.PI/2,-Math.PI/2+Math.PI*2*g),t.stroke(),t.textAlign="center",t.fillStyle="#fff5fb",t.font='700 12px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(v==="work"?"FOCUS":v==="idle"?"COZY":"BREAK",_,m+4),t.textAlign="left",t.fillStyle="rgba(230,220,255,0.68)",t.font='500 10px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`ALBUM  ${o} / 12`,18,n-20);for(let S=0;S<12;S+=1)t.fillStyle=S<o?"#ffd98a":"rgba(255,255,255,0.18)",t.beginPath(),t.arc(116+S*19,n-24,S<o?4:2.6,0,Math.PI*2),t.fill()}function J0(t,e,n,i,r){let s=t.createLinearGradient(0,0,e,n);s.addColorStop(0,"#362a64"),s.addColorStop(0.55,"#6a4d8e"),s.addColorStop(1,"#d98eb4"),t.fillStyle=s,t.fillRect(0,0,e,n);let a=new Date,o=String(a.getHours()).padStart(2,"0"),l=String(a.getMinutes()).padStart(2,"0");t.textAlign="center",t.fillStyle="#ffffff",t.font='700 38px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`${o}:${l}`,e*0.5,86),[{name:"Snozzy ♪",text:r.isPlaying?"这首鼓点很舒服呢":"要不要放点轻音乐？"},{name:"Focus",text:r.focusPhase==="work"?"专注进行中 ✨":"记得喝一口温咖啡 ☕"}].forEach((d,u)=>{let p=122+u*74;t.fillStyle="rgba(255,255,255,0.22)",si(t,14,p,e-28,60,14),t.fill(),t.textAlign="left",t.fillStyle="#fff5fb",t.font='700 12px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(d.name,26,p+22),t.fillStyle="rgba(255,248,255,0.88)",t.font='500 11px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(d.text,26,p+43)});let c=0.5+0.5*Math.sin(i*2.5);t.fillStyle=`rgba(255,255,255,${0.45+0.35*c})`,si(t,e*0.5-32,n-18,64,5,2.5),t.fill()}function Df(){let t=Bc(512,320,!0),e=Bc(384,256,!0),n=Bc(192,320,!1),i=0,r=999,s=-1;function a(o){let l=s>=0?Oc[s]:null;Y0(t.ctx,t.canvas.width,t.canvas.height,i,o,l),Z0(e.ctx,e.canvas.width,e.canvas.height,i,o),J0(n.ctx,n.canvas.width,n.canvas.height,i,o),t.texture.needsUpdate=!0,e.texture.needsUpdate=!0,n.texture.needsUpdate=!0}return{textures:{screen_main:t.texture,screen_side:e.texture,screen_phone:n.texture},cycleMainMode(o){return s=(s+1)%Oc.length,a(o),Oc[s]},update(o,l,h=!1){if(i+=o,r+=o,!h&&r<0.085)return;r=0,a(l)},dispose(){t.texture.dispose(),e.texture.dispose(),n.texture.dispose()}}}function j0(t){let e=(t?.name||"").toLowerCase();return/hair|eyelash|eyeline|brow/.test(e)}function K0(t){let e=(t?.name||"").toLowerCase();return/eye|highlight|iris/.test(e)}function $0(t){let e=(t?.name||"").toLowerCase();return/face_00_skin/.test(e)}function Q0(t){return!(t?.name||"").startsWith("Room3D_")}function t_(t){if(!t)return null;return t.colorSpace=ge,t.needsUpdate=!0,t}function e_(t,e){let n=j0(t),i=K0(t),r=$0(t),s=t_(t.map||null),a=t.alphaMap||null,o=i?0.14:0.28,l=(t.color?.clone?.()||new vt(16777215)).multiplyScalar(o),h=new Go({color:l,map:s,alphaMap:a,emissive:new vt(16777215),emissiveMap:s,emissiveIntensity:i?0.88:0.72,transparent:Boolean(t.transparent)||n,alphaTest:n?0.35:t.alphaTest||0,depthWrite:!0,side:be});return h.onBeforeCompile=(c)=>{c.uniforms.uRimColor=e.uRimColor,c.uniforms.uRimStrength=e.uRimStrength,c.uniforms.uMoodTint=e.uMoodTint,c.uniforms.uBlush=e.uBlush,c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 uRimColor;
        uniform float uRimStrength;
        uniform vec3 uMoodTint;
        uniform float uBlush;`).replace("#include <dithering_fragment>",`vec3 viewDirAnime = normalize(vViewPosition);
         vec3 normAnime = normalize(vNormal);
         float ndv = clamp(abs(dot(normAnime, viewDirAnime)), 0.0, 1.0);
         float rim = pow(1.0 - ndv, 3.2) * uRimStrength;
         gl_FragColor.rgb *= uMoodTint;
         gl_FragColor.rgb += uRimColor * rim * ${i?"0.06":"0.22"};
         ${r?"gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(1.06, 0.88, 0.93) + vec3(0.05, 0.0, 0.02), uBlush * 0.45);":""}
         #include <dithering_fragment>`)},h.customProgramCacheKey=()=>`snozzy-anime-${i?"eye":r?"face":"std"}`,h.name=`${t.name||"Material"}_AnimeCel`,h.userData.phase0Unlit=!0,h.userData.phase0Character=!0,h.userData.phase0SourceName=t.name||"",h.userData.phase0AlphaMode=n?"MASK(alphaTest=0.35)":t.transparent?"BLEND":"OPAQUE",h}function n_(t,e,n,i){let r=t.name||"",s=r.replace(/^Room3D_/,""),a=s==="screen_main"||s==="screen_side"||s==="screen_phone",o=s==="led_pink"||s==="led_cyan"||s==="lamp_bulb",l=t.color?.clone?.()||new vt(16777215),h=t.map||null,c=typeof t.roughness==="number"?t.roughness:0.72,d=typeof t.metalness==="number"?t.metalness:0.04,u=t.emissive?.clone?.()||new vt(0),p=null,_=typeof t.emissiveIntensity==="number"?t.emissiveIntensity:0;if(s==="wood"&&e.wood)h=e.wood,l.setHex(16777215),c=0.56;else if(s==="floor"&&e.floor)h=e.floor,l.setHex(16777215),c=0.62;else if(s==="rug"&&e.rug)h=e.rug,l.setHex(15985400),c=0.94;else if(s==="wall"&&e.wall)h=e.wall,l.setHex(16777215),c=0.88;else if(s==="coffee_liquid"&&e.coffee_liquid)h=e.coffee_liquid,l.setHex(16777215),c=0.22;else if(s==="poster_atlas"&&e.poster_atlas)h=e.poster_atlas,l.setHex(16777215),c=0.5,u.setHex(16777215),p=e.poster_atlas,_=0.14;else if(s==="ceramic")c=0.24,d=0.04;else if(s==="metal")c=0.34,d=0.55;else if(a&&n[s])h=n[s],l.setHex(16777215),u.setHex(16777215),p=n[s],_=0.95,c=0.18,d=0.06;else if(s==="led_pink")u.setHex(16744132),_=1.65,c=0.28;else if(s==="led_cyan")u.setHex(7005951),_=1.55,c=0.28;else if(s==="lamp_bulb")u.setHex(16766095),_=2,c=0.25;let m=new wi({color:l,map:h,roughness:c,metalness:d,emissive:u,emissiveMap:p,emissiveIntensity:_,transparent:Boolean(t.transparent),alphaTest:t.alphaTest||0,side:a?wn:be});if(m.name=`${r||"RoomMat"}_PBR`,m.userData.phase0Character=!1,m.userData.phase0SourceName=r,m.userData.room3dKey=s,o||a)i.set(s,m);return m}function Ff(t,e,n){let i={uRimColor:{value:new vt(16761572)},uRimStrength:{value:0.72},uMoodTint:{value:new vt(16777215)},uBlush:{value:0}},r=new Map,s=new Map,a=new Map;return t.traverse((o)=>{if(!o.isMesh)return;let h=(Array.isArray(o.material)?o.material:[o.material]).map((c)=>{if(!c)return c;let d=Q0(c),u=c.uuid,p=s.get(u);if(!p)p=d?e_(c,i):n_(c,e,n,a),s.set(u,p);return r.set(p.uuid,p),p});if(o.material=Array.isArray(o.material)?h:h[0],o.isSkinnedMesh)o.frustumCulled=!1,o.castShadow=!0,o.receiveShadow=!1;else{let c=o.name||"",d=/^(Floor|Rug|Wall|Baseboard|Wainscot|Ceiling|DeskMat)/.test(c),u=/(LED|Glow|Bulb|Fairy|Screen|Orb|Crystal)/.test(c);o.castShadow=!d&&!u,o.receiveShadow=!u}}),{materials:[...r.values()],sharedUniforms:i,emissiveRegistry:a}}var Ii=[{hour:1.5,bg:1447728,skyTop:"#0d1236",skyMid:"#24235e",skyBot:"#6a4892",hemiSky:9348848,hemiGround:2497594,hemiInt:0.82,keyColor:11980031,keyInt:0.92,keyPos:[-1.1,2.45,1.85],winColor:8694015,winInt:0.58,fillColor:16032980,fillInt:0.36,lampInt:1.85,lampColor:16762496,rimColor:16757472,rimStrength:0.85,moodTint:15592191,ledScale:1.25,starsAlpha:0.96,cityLit:1,exposure:0.98},{hour:7,bg:2761794,skyTop:"#4e5b9c",skyMid:"#c88bb8",skyBot:"#ffd4b8",hemiSky:16768978,hemiGround:5390942,hemiInt:1.05,keyColor:16767166,keyInt:1.28,keyPos:[-1.3,2.55,1.95],winColor:16762012,winInt:0.78,fillColor:12243199,fillInt:0.42,lampInt:0.75,lampColor:16765594,rimColor:16764080,rimStrength:0.72,moodTint:16775412,ledScale:0.72,starsAlpha:0.24,cityLit:0.35,exposure:0.98},{hour:13,bg:3885163,skyTop:"#5ca2ee",skyMid:"#a2d2ff",skyBot:"#eef5ff",hemiSky:15923199,hemiGround:6971518,hemiInt:1.18,keyColor:16775920,keyInt:1.48,keyPos:[-1.2,2.7,1.9],winColor:14348543,winInt:0.75,fillColor:13164031,fillInt:0.46,lampInt:0.25,lampColor:16769722,rimColor:15135487,rimStrength:0.52,moodTint:16777215,ledScale:0.45,starsAlpha:0,cityLit:0.06,exposure:0.96},{hour:19.2,bg:2629181,skyTop:"#242264",skyMid:"#9c5294",skyBot:"#ffaa88",hemiSky:16302264,hemiGround:4008526,hemiInt:0.94,keyColor:16760482,keyInt:1.18,keyPos:[-1.2,2.4,1.85],winColor:16749692,winInt:0.8,fillColor:10006783,fillInt:0.4,lampInt:1.45,lampColor:16760950,rimColor:16757448,rimStrength:0.88,moodTint:16773356,ledScale:1.08,starsAlpha:0.62,cityLit:0.82,exposure:0.98}];function $e(t,e,n){return t+(e-t)*n}function In(t,e,n,i=new vt){let r=new vt(t),s=new vt(e);return i.copy(r).lerp(s,n)}function zc(t,e,n){return`#${In(t,e,n).getHexString()}`}function i_(t){let e=(Number(t)%24+24)%24,n=Ii[Ii.length-1],i=Ii[0],r=i.hour+24-n.hour,s=e>=n.hour?e-n.hour:e+24-n.hour;for(let l=0;l<Ii.length-1;l+=1)if(e>=Ii[l].hour&&e<=Ii[l+1].hour){n=Ii[l],i=Ii[l+1],r=i.hour-n.hour,s=e-n.hour;break}let a=Math.max(0,Math.min(1,r>0?s/r:0)),o=a*a*(3-2*a);return{bg:In(n.bg,i.bg,o),skyTop:zc(n.skyTop,i.skyTop,o),skyMid:zc(n.skyMid,i.skyMid,o),skyBot:zc(n.skyBot,i.skyBot,o),hemiSky:In(n.hemiSky,i.hemiSky,o),hemiGround:In(n.hemiGround,i.hemiGround,o),hemiInt:$e(n.hemiInt,i.hemiInt,o),keyColor:In(n.keyColor,i.keyColor,o),keyInt:$e(n.keyInt,i.keyInt,o),keyPos:[$e(n.keyPos[0],i.keyPos[0],o),$e(n.keyPos[1],i.keyPos[1],o),$e(n.keyPos[2],i.keyPos[2],o)],winColor:In(n.winColor,i.winColor,o),winInt:$e(n.winInt,i.winInt,o),fillColor:In(n.fillColor,i.fillColor,o),fillInt:$e(n.fillInt,i.fillInt,o),lampInt:$e(n.lampInt,i.lampInt,o),lampColor:In(n.lampColor,i.lampColor,o),rimColor:In(n.rimColor,i.rimColor,o),rimStrength:$e(n.rimStrength,i.rimStrength,o),moodTint:In(n.moodTint,i.moodTint,o),ledScale:$e(n.ledScale,i.ledScale,o),starsAlpha:$e(n.starsAlpha,i.starsAlpha,o),cityLit:$e(n.cityLit,i.cityLit,o),exposure:$e(n.exposure,i.exposure,o)}}function Vc(t,e){let n=document.createElement("canvas");n.width=64,n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(32,32,2,32,32,30);r.addColorStop(0,t),r.addColorStop(0.5,t),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,64,64);let s=new Rn(n);return s.colorSpace=ge,s}function r_(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d");e.fillStyle="#ff98cc",e.shadowColor="#ffc8e6",e.shadowBlur=10,e.beginPath(),e.moveTo(32,50),e.bezierCurveTo(10,34,10,14,32,24),e.bezierCurveTo(54,14,54,34,32,50),e.fill();let n=new Rn(t);return n.colorSpace=ge,n}function Of(t,e,n,i){let r=new Ze;r.name="AtmosphereSystem",t.add(r),e.shadowMap.enabled=!0,e.shadowMap.type=Ga;let s=new qo(13161983,3418184,1.35);r.add(s);let a=new Ai(16770772,1.85);a.position.set(-1.6,2.8,-2.5),a.target.position.set(0,0.82,0.32),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.near=0.5,a.shadow.camera.far=9,a.shadow.camera.left=-2.2,a.shadow.camera.right=2.2,a.shadow.camera.top=2.2,a.shadow.camera.bottom=-1.6,a.shadow.bias=-0.0007,a.shadow.normalBias=0.022,r.add(a),r.add(a.target);let o=new Ai(16757914,0.95);o.position.set(-1.15,2.05,-2.35),o.target.position.set(0,0.92,0.35),r.add(o),r.add(o.target);let l=new Ai(13162751,0.65);l.position.set(2.2,1.9,2.8),r.add(l);let h=new ir(16763778,2.4,3.8,1.6);h.position.set(0.72,1.14,0.32),r.add(h);let c=new ir(16753884,0.85,3.2,1.8);c.position.set(-0.25,1.05,0.58),r.add(c);let d=document.createElement("canvas");d.width=512,d.height=384;let u=d.getContext("2d"),p=new Rn(d);p.colorSpace=ge;let _=new ce(new ni(7.6,5.2),new Ae({map:p,fog:!1}));_.position.set(-0.9,1.8,-5.8),r.add(_);let m=new Ze,f=new Ae({color:2235714}),v=new Ae({color:16765608,transparent:!0,opacity:0.9}),y=new Ae({color:9367807,transparent:!0,opacity:0.85}),g=new Ae({color:16750796,transparent:!0,opacity:0.85});[[-3.1,0,-5,0.52,1.55,0.32],[-2.52,0,-4.4,0.44,1.72,0.3],[-2.02,0,-4.8,0.46,1.42,0.32],[-1.54,0,-4.2,0.42,1.62,0.3],[-1.08,0,-4.6,0.48,1.48,0.32],[-0.58,0,-4.3,0.44,1.66,0.3],[-0.1,0,-4.9,0.5,1.38,0.32],[0.42,0,-4.5,0.46,1.58,0.3]].forEach(([E,U,O,z,H,at],ut)=>{let tt=new ce(new ei(z,H,at),f);tt.position.set(E,U+H*0.5,O),m.add(tt);for(let rt=0;rt<5;rt+=1){let yt=H-0.14-rt*0.12;if(yt<0.92)continue;for(let Et=-1;Et<=1;Et+=1){if((rt*3+Et+ut)%3===0)continue;let Pt=(rt+Et+ut)%5===0?g:(rt+ut)%4===0?y:v,Bt=new ce(new ni(0.055,0.036),Pt);Bt.position.set(E+Et*(z*0.25),yt,O+at*0.5+0.01),m.add(Bt)}}}),r.add(m);let C=160,A=new Jt,L=new Float32Array(C*6),V=[];for(let E=0;E<C;E+=1){let U=-2.2+Math.random()*2.6,O=0.8+Math.random()*2,z=-1.62-Math.random()*1.1,H=2.6+Math.random()*1.4;V.push({x:U,y:O,z,speed:H}),L[E*6+0]=U,L[E*6+1]=O,L[E*6+2]=z,L[E*6+3]=U-0.025,L[E*6+4]=O-0.14,L[E*6+5]=z}A.setAttribute("position",new ae(L,3));let P=new Yr(A,new er({color:12378879,transparent:!0,opacity:0.48}));P.visible=!1,r.add(P);let D=120,B=new Jt,X=new Float32Array(D*3),K=[];for(let E=0;E<D;E+=1){let U=-2.1+Math.random()*2.4,O=0.85+Math.random()*1.9,z=-1.58-Math.random()*1.2;K.push({x:U,y:O,z,speed:0.26+Math.random()*0.24,phase:Math.random()*6.28}),X[E*3+0]=U,X[E*3+1]=O,X[E*3+2]=z}B.setAttribute("position",new ae(X,3));let k=Vc("rgba(255,255,255,0.95)","rgba(220,238,255,0)"),$=new nr(B,new Ti({map:k,size:0.048,transparent:!0,opacity:0.85,depthWrite:!1}));$.visible=!1,r.add($);let G=Vc("rgba(255,248,244,0.34)","rgba(255,248,244,0)"),q=[];for(let E=0;E<12;E+=1){let U=new Bs(new Xr({map:G,transparent:!0,opacity:0,depthWrite:!1}));U.scale.set(0.06,0.06,1),r.add(U),q.push({sprite:U,age:E/12*2.4,life:2.4,drift:(Math.random()-0.5)*0.025})}let Z=34,ht=new Jt,ft=new Float32Array(Z*3),Q=[];for(let E=0;E<Z;E+=1){let U=-1.2+Math.random()*2.4,O=0.78+Math.random()*1.35,z=-1+Math.random()*1.9;Q.push({x:U,y:O,z,phase:Math.random()*6.28,speed:0.2+Math.random()*0.3}),ft[E*3+0]=U,ft[E*3+1]=O,ft[E*3+2]=z}ht.setAttribute("position",new ae(ft,3));let J=Vc("rgba(255,242,216,0.75)","rgba(255,220,245,0)"),mt=new nr(ht,new Ti({map:J,size:0.028,transparent:!0,opacity:0.55,depthWrite:!1}));r.add(mt);let ot=r_(),it=[];for(let E=0;E<14;E+=1){let U=new Bs(new Xr({map:ot,transparent:!0,opacity:0,depthWrite:!1}));U.visible=!1,r.add(U),it.push({sprite:U,active:!1,age:0,life:1.5,vx:0,vy:0,vz:0})}let lt=[[186,152],[208,138],[234,146],[254,128],[278,138],[302,122],[324,140],[344,132],[362,154],[336,170],[306,162],[272,168]],gt="",b=0,x=!0,R=0,F=[7005951,16748240,13149439,8844744,16765576];function M(E,U){let{width:O,height:z}=d,H=u.createLinearGradient(0,0,0,z);if(H.addColorStop(0,E.skyTop),H.addColorStop(0.54,E.skyMid),H.addColorStop(1,E.skyBot),u.fillStyle=H,u.fillRect(0,0,O,z),U.weather==="rain")u.fillStyle="rgba(28,36,58,0.28)",u.fillRect(0,0,O,z);let at=(Number(U.sceneHour??20)%24+24)%24;if(at<6.5||at>18.2){let rt=u.createRadialGradient(198,152,6,198,152,52);rt.addColorStop(0,"rgba(255,248,225,0.92)"),rt.addColorStop(0.45,"rgba(255,230,245,0.28)"),rt.addColorStop(1,"rgba(255,230,245,0)"),u.fillStyle=rt,u.beginPath(),u.arc(198,152,52,0,Math.PI*2),u.fill(),u.fillStyle="#fff9e6",u.beginPath(),u.arc(198,152,17,0,Math.PI*2),u.fill()}else{let ut=180+(at-6.5)/11.7*165,tt=175-Math.sin((at-6.5)/11.7*Math.PI)*44,rt=u.createRadialGradient(ut,tt,6,ut,tt,74);rt.addColorStop(0,"rgba(255,250,224,0.94)"),rt.addColorStop(0.4,"rgba(255,212,188,0.34)"),rt.addColorStop(1,"rgba(255,212,188,0)"),u.fillStyle=rt,u.beginPath(),u.arc(ut,tt,74,0,Math.PI*2),u.fill()}u.fillStyle=at<6.5||at>19.5?"rgba(165,148,215,0.14)":"rgba(255,248,255,0.24)";for(let ut=0;ut<4;ut+=1){let tt=(ut*155+b*(4+ut))%(O+160)-80,rt=148+ut%2*42;u.beginPath(),u.ellipse(tt,rt,78,18,0,0,Math.PI*2),u.fill()}if(E.starsAlpha>0.05){u.fillStyle=`rgba(255,250,255,${0.55*E.starsAlpha})`;for(let tt=0;tt<42;tt+=1){let rt=(tt*97+31)%O,yt=(tt*53+17)%190,Et=0.65+0.35*Math.sin(b*2.1+tt);u.globalAlpha=E.starsAlpha*Et,u.beginPath(),u.arc(rt,yt,1.3+tt%2*0.7,0,Math.PI*2),u.fill()}u.globalAlpha=1;let ut=Math.max(0,Math.min(12,Number(U.playableTracks||0)));if(ut>0){u.strokeStyle=`rgba(255,236,184,${0.48*E.starsAlpha})`,u.lineWidth=1.4,u.beginPath();for(let tt=0;tt<ut;tt+=1){let[rt,yt]=lt[tt];if(tt===0)u.moveTo(rt,yt);else u.lineTo(rt,yt)}u.stroke();for(let tt=0;tt<ut;tt+=1){let[rt,yt]=lt[tt];u.fillStyle=`rgba(255,245,204,${0.95*E.starsAlpha})`,u.beginPath(),u.arc(rt,yt,3.2,0,Math.PI*2),u.fill()}}}p.needsUpdate=!0}let I=new T;return{toggleLamp(){return x=!x,x},isLampOn(){return x},cycleCrystalColor(){R=(R+1)%F.length;let E=i.get("led_cyan");if(E)E.emissive.setHex(F[R]);return F[R]},spawnHearts(E,U=7){let O=0;for(let z of it){if(z.active)continue;if(z.active=!0,z.age=0,z.life=1.15+Math.random()*0.55,z.sprite.position.set(E.x+(Math.random()-0.5)*0.22,E.y+0.08+Math.random()*0.08,E.z+(Math.random()-0.5)*0.14),z.vx=(Math.random()-0.5)*0.16,z.vy=0.26+Math.random()*0.18,z.vz=(Math.random()-0.5)*0.1,z.sprite.scale.set(0.055,0.055,1),z.sprite.visible=!0,O+=1,O>=U)break}},setLowPower(E){e.shadowMap.enabled=!E,a.castShadow=!E},update(E,U,O){b+=E;let z=Number.isFinite(Number(U.sceneHour))?Number(U.sceneHour):20.5,H=i_(z);t.background=H.bg,e.toneMappingExposure=H.exposure,s.color.copy(H.hemiSky),s.groundColor.copy(H.hemiGround),s.intensity=H.hemiInt,a.color.copy(H.keyColor),a.intensity=H.keyInt*(U.weather==="rain"?0.78:1),a.position.set(H.keyPos[0],H.keyPos[1],H.keyPos[2]),o.color.copy(H.winColor),o.intensity=H.winInt*(U.weather==="rain"?0.55:1),l.color.copy(H.fillColor),l.intensity=H.fillInt;let at=x?1:0.05;h.color.copy(H.lampColor),h.intensity=H.lampInt*at;let ut=Number(U.beatPulse||0);c.intensity=(0.72+ut*0.45)*H.ledScale,n.uRimColor.value.copy(H.rimColor),n.uRimStrength.value=H.rimStrength,n.uMoodTint.value.copy(H.moodTint);let tt=i.get("led_pink");if(tt)tt.emissiveIntensity=(1.35+ut*0.75)*H.ledScale;let rt=i.get("led_cyan");if(rt)rt.emissiveIntensity=(1.25+ut*0.55)*H.ledScale;let yt=i.get("lamp_bulb");if(yt)yt.emissiveIntensity=x?1.2+H.lampInt*0.45:0.08;f.color.copy(H.bg).multiplyScalar(0.85),v.opacity=0.08+H.cityLit*0.85,y.opacity=0.06+H.cityLit*0.78,g.opacity=0.06+H.cityLit*0.78;let Et=`${Math.round(z*10)}|${U.weather}|${U.playableTracks||0}|${Math.floor(b*4)}`;if(Et!==gt)gt=Et,M(H,U);let Pt=U.weather||"clear";if(P.visible=Pt==="rain",$.visible=Pt==="snow",Pt==="rain"){let et=A.attributes.position.array;for(let dt=0;dt<C;dt+=1){let xt=V[dt];if(xt.y-=xt.speed*E,xt.x-=0.45*E,xt.y<0.72)xt.y=2.65+Math.random()*0.3,xt.x=-2.1+Math.random()*2.5;et[dt*6+0]=xt.x,et[dt*6+1]=xt.y,et[dt*6+2]=xt.z,et[dt*6+3]=xt.x-0.028,et[dt*6+4]=xt.y-0.14,et[dt*6+5]=xt.z}A.attributes.position.needsUpdate=!0}else if(Pt==="snow"){let et=B.attributes.position.array;for(let dt=0;dt<D;dt+=1){let xt=K[dt];if(xt.y-=xt.speed*E,xt.x+=Math.sin(b*1.4+xt.phase)*0.12*E,xt.y<0.78)xt.y=2.65+Math.random()*0.25,xt.x=-2+Math.random()*2.3;et[dt*3+0]=xt.x,et[dt*3+1]=xt.y,et[dt*3+2]=xt.z}B.attributes.position.needsUpdate=!0}let Bt=O?.getObjectByName("Prop_Coffee");if(Bt){Bt.getWorldPosition(I);for(let et of q){if(et.age+=E,et.age>=et.life)et.age-=et.life;let dt=et.age/et.life;et.sprite.position.set(I.x+Math.sin(b*1.6+dt*5)*0.014+et.drift*dt*12,I.y+0.06+dt*0.24,I.z+Math.cos(b*1.3+dt*4)*0.012);let xt=0.045+dt*0.09;et.sprite.scale.set(xt,xt,1),et.sprite.material.opacity=Math.sin(dt*Math.PI)*0.36}}let Ct=ht.attributes.position.array;for(let et=0;et<Z;et+=1){let dt=Q[et];Ct[et*3+0]=dt.x+Math.sin(b*dt.speed+dt.phase)*0.06,Ct[et*3+1]=dt.y+Math.cos(b*dt.speed*0.8+dt.phase)*0.04,Ct[et*3+2]=dt.z}ht.attributes.position.needsUpdate=!0;for(let et of it){if(!et.active)continue;if(et.age+=E,et.age>=et.life){et.active=!1,et.sprite.visible=!1;continue}let dt=et.age/et.life;et.sprite.position.x+=et.vx*E,et.sprite.position.y+=et.vy*E,et.sprite.position.z+=et.vz*E;let xt=0.055*(1+Math.sin(dt*Math.PI)*0.35);et.sprite.scale.set(xt,xt,1),et.sprite.material.opacity=dt<0.2?dt/0.2:(1-dt)/0.8}},dispose(){p.dispose(),k.dispose(),G.dispose(),J.dispose(),ot.dispose(),r.traverse((E)=>{if(E.geometry?.dispose?.(),Array.isArray(E.material))E.material.forEach((U)=>U?.dispose?.());else E.material?.dispose?.()})}}}var Hc=["Fcl_MTH_A","Fcl_MTH_I","Fcl_MTH_U","Fcl_MTH_E","Fcl_MTH_O"];function Me(t,e,n){return Math.max(e,Math.min(n,t))}function nl(t,e,n,i){return Ns.lerp(t,e,1-Math.exp(-n*Math.max(0,i)))}function Bf(t,e){let n=[],i=[],r=[],s=[],a=null,o=null,l=null,h=null;t.traverse((G)=>{if(G.isMesh&&G.morphTargetDictionary&&G.morphTargetInfluences)n.push(G);let q=G.name||"";if(G.isBone){if(q==="J_Bip_C_Head")a=G;if(q==="J_Adj_L_FaceEye"||q==="J_Adj_R_FaceEye")r.push({bone:G,restQ:G.quaternion.clone()});if(q.startsWith("J_Sec_Hair")&&!q.endsWith("_end")){let Z=q.match(/J_Sec_Hair(\d+)/),ht=Z?Number(Z[1]):1;i.push({bone:G,restQ:G.quaternion.clone(),depth:ht,seed:i.length*1.37%6.28,ax:0,az:0,vx:0,vz:0})}if(/^J_Opt_C_FoxTail[345]_01$/.test(q))s.push(G)}if(q==="Headphones_3D")o=G;if(q==="Headphones_Glow")l=G;if(q==="VinylDisc")h=G});let c=new Map,d=new Map,u=1.4,p=-1,_=!1,m={x:0,y:0,active:!1},f={x:0,y:0},v=new T,y=new T,g=new T,S=!1,C=0,A=0,L=0,V=new Ge(0,0,0,"XYZ"),P=new me,D=new T;function B(G,q){let Z=d.get(G)||0;d.set(G,Math.max(Z,Me(q,0,1)))}function X(G,q,Z){d.clear();let ht=Me(Number(q.mood??0.6),0,1),ft=Me(Number(q.drowsy??0),0,1),Q=Me(Number(q.celebration??0),0,1),J=Boolean(q.sheIsTalking);if(C>0)C=Math.max(0,C-G);let mt=Z==="pet_happy_once"?1:Math.min(1,C/1.2);B("Fcl_MTH_Fun",0.14+ht*0.18),B("Fcl_BRW_Fun",0.1+ht*0.12);let ot=!1,it=0.06+ht*0.08;if(mt>0.05)B("Fcl_EYE_Joy",0.9*mt),B("Fcl_MTH_Joy",0.68*mt),B("Fcl_BRW_Joy",0.55*mt),it=Math.max(it,0.92*mt),ot=mt>0.5;else if(Q>0.05)B("Fcl_EYE_Joy",0.85*Q),B("Fcl_MTH_Joy",0.72*Q),B("Fcl_BRW_Joy",0.48*Q),it=Math.max(it,0.7*Q),ot=Q>0.5;else if(Z==="coffee_once")B("Fcl_EYE_Close",0.46),B("Fcl_MTH_Fun",0.42),B("Fcl_BRW_Fun",0.34),it=Math.max(it,0.28),ot=!0;else if(Z==="stand_stretch_once")B("Fcl_EYE_Fun",0.72),B("Fcl_MTH_O",0.36),B("Fcl_BRW_Fun",0.38),it=Math.max(it,0.24),ot=!0;else if(Z==="chin_rest_loop")B("Fcl_EYE_Fun",0.24),B("Fcl_MTH_Fun",0.46),B("Fcl_BRW_Fun",0.28),it=Math.max(it,0.36);else if(Z==="listen_music_loop")B("Fcl_EYE_Close",0.34),B("Fcl_MTH_Fun",0.38),B("Fcl_BRW_Fun",0.26);else if(Z==="drowsy_nod_loop"||ft>0.25){let gt=Z==="drowsy_nod_loop"?Math.max(0.75,ft):ft;B("Fcl_EYE_Close",0.78*gt),B("Fcl_MTH_Small",0.24*gt),ot=gt>0.65}else if(Z==="phone_once"||Z==="write_note_once")B("Fcl_MTH_Fun",0.28),B("Fcl_BRW_Fun",0.18);if(!ot){if(p>=0)if(p+=G/0.15,p>=1)if(p=-1,_)_=!1,u=0.14;else u=2.6+Math.random()*3.6,_=Math.random()<0.18;else{let gt=Math.sin(p*Math.PI);B("Fcl_EYE_Close",gt*0.96)}else if(u-=G,u<=0)p=0}if(J){let gt=A*8.2,b=Math.floor(gt)%Hc.length,x=Math.max(0,Math.sin((gt-Math.floor(gt))*Math.PI)),R=0.32+0.42*(0.5+0.5*Math.sin(A*3.7));B(Hc[b],x*R),B("Fcl_MTH_Fun",0.22)}if(L=nl(L,it,5.5,G),e?.uBlush)e.uBlush.value=L;let lt=new Set([...c.keys(),...d.keys()]);for(let gt of lt){let b=c.get(gt)||0,x=d.get(gt)||0,R=gt==="Fcl_EYE_Close"?28:J&&Hc.includes(gt)?22:9,F=nl(b,x,R,G);if(F<0.001&&x===0)c.delete(gt);else c.set(gt,F)}for(let gt of n){let{morphTargetDictionary:b,morphTargetInfluences:x}=gt;for(let R of Object.keys(b)){let F=b[R];x[F]=c.get(R)||0}}}function K(G,q,Z){let ht=0,ft=0;if(q==="chin_rest_loop"||q==="pet_happy_once")ht=m.active?m.x*0.55:0.05,ft=m.active?m.y*0.45:0.05;else if(q==="phone_once"||q==="write_note_once")ht=0.25,ft=-0.35;else if(m.active)ht=m.x*0.65,ft=m.y*0.48;else ht=-0.22+Math.sin(A*0.7)*0.1,ft=-0.05+Math.cos(A*0.55)*0.06;f.x=nl(f.x,Me(ht,-1,1),6.5,G),f.y=nl(f.y,Me(ft,-1,1),6.5,G);for(let Q of r)V.set(Me(-f.y*0.085,-0.1,0.1),0,Me(f.x*0.12,-0.14,0.14)),P.setFromEuler(V),Q.bone.quaternion.copy(Q.restQ).multiply(P);if(Z&&a&&m.active&&(q==="idle_seated_loop"||q==="typing_loop"||q==="chin_rest_loop"))V.set(Me(-f.y*0.055,-0.07,0.07),Me(f.x*0.075,-0.09,0.09),0),P.setFromEuler(V),a.quaternion.multiply(P)}function k(G,q){if(!a||i.length===0)return;if(a.getWorldPosition(y),S&&G>0.0005)g.subVectors(y,v).divideScalar(Math.max(G,0.016)),g.clampLength(0,1.8);else g.set(0,0,0),S=!0;v.copy(y);let Z=Math.min(G,0.033),ht=Number(q.beatPulse||0),ft=26,Q=5.4;for(let ot of i){let it=0.55+ot.depth*0.45,lt=Math.sin(A*1.45+ot.seed)*0.024*it+Math.sin(A*2.8+ot.seed)*0.012*ht*it,gt=Math.cos(A*1.25+ot.seed*1.3)*0.02*it,b=Me(lt-g.z*0.22*it-g.y*0.14*it,-0.34,0.34),x=Me(gt+g.x*0.25*it,-0.34,0.34),R=(b-ot.ax)*ft-ot.vx*Q,F=(x-ot.az)*ft-ot.vz*Q;ot.vx+=R*Z,ot.vz+=F*Z,ot.ax=Me(ot.ax+ot.vx*Z,-0.42,0.42),ot.az=Me(ot.az+ot.vz*Z,-0.42,0.42),V.set(ot.ax,0,ot.az),P.setFromEuler(V),ot.bone.quaternion.copy(ot.restQ).multiply(P)}let J=Me(Number(q.mood??0.6),0,1),mt=0.035+J*0.035+ht*0.04;s.forEach((ot,it)=>{let lt=Math.sin(A*(2.6+J*1.4)+it*0.7)*mt;V.set(0,0,lt),P.setFromEuler(V),ot.quaternion.multiply(P)})}function $(G,q,Z){let ht=Boolean(q.isPlaying)||Z==="listen_music_loop";if(o)o.visible=ht;if(l)l.visible=ht;if(h&&q.isPlaying)h.rotateZ(G*0.85)}return{setPointer(G,q,Z=!0){m.x=Me(G,-1,1),m.y=Me(q,-1,1),m.active=Boolean(Z)},triggerPet(){C=3.2},getHeadWorldPosition(G=new T){if(!a)return G.set(0,1.15,0);return a.getWorldPosition(G),G},getHeadScreenPoint(G){if(!a||!G)return{x:0.52,y:0.3};return a.getWorldPosition(D),D.y+=0.24,D.project(G),{x:Me((D.x+1)*0.5,0.14,0.86),y:Me((1-D.y)*0.5,0.1,0.72)}},update(G,q,Z,{allowAdditiveHead:ht=!0}={}){A+=G,X(G,q,Z),K(G,Z,ht),k(G,q),$(G,q,Z)}}}var Pi=24,hr=0.32,Gc=document.getElementById("room-canvas"),s_=document.getElementById("room-root"),$c=document.getElementById("room-loading"),Qc=document.getElementById("room-error"),zf=document.getElementById("room-error-message"),Vf=document.getElementById("room-status"),Kt=(t,e={})=>{let n={type:t,...e};if(window.webkit?.messageHandlers?.room)window.webkit.messageHandlers.room.postMessage(n)},Ve=window.__withSnozzy3DManifest||{},ol=window.__withSnozzy3DAssetURL,il=window.__withSnozzy3DAssetDataURL,Qt=window.__withSnozzy3DDiagnostic||null,tu=new jo,sl=[],is=[],kc=0,Wc=null,Xc=null,Xt=new Map,Ce=new Map,ll=null,Ee="",hl="typing_loop",tn=null,cr=null,ue,le,Ui,Ln,jt,De=!1,Xe=!1,ns=!1,eu=0,a_=performance.now(),al=null,qc=performance.now(),Yc=0,cl=0,Jf=null,jf=null,Nn=null,Js=[],as=0,nu=[],Kf=new Map,Se=null,Re=0,$f=0,hn=0,rs=0,lr=0,Ks=!1,Pn=null,Qe=!1,ss=null,Li=[],Un=null,Qf=null,iu=null,ai=null,en=null,Dn=null,Zc=null,Hf=null,nn={sceneHour:19.6,weather:"clear",isPlaying:!0,beatPulse:0,focusPhase:"idle",activity:"typing",mood:0.62,drowsy:0,sheIsTalking:!1,celebration:0,playableTracks:5,trackTitle:"Lo-Fi Radio · Chill"},ru=0.025,Gf={coffee_once:{startFrame:56,endFrame:120,hand:"J_Bip_R_Hand",prop:"Prop_Coffee",companion:"coffee_once_PropMotion"},phone_once:{startFrame:52,endFrame:128,hand:"J_Bip_L_Hand",prop:"Prop_Phone",companion:"phone_once_PropMotion"}},Jc=["Index","Middle","Ring","Little"],jc=["L","R"],js=0.005,kf=0.01,o_={typing:[30000,90000],idle:[45000,150000],coffee:[240000,600000],phone:[360000,900000],stand:[480000,1200000]},su=[{name:"typing_loop",probability:0.68},{name:"idle_seated_loop",probability:0.22},{name:"coffee_once",probability:0.04},{name:"phone_once",probability:0.04},{name:"stand_stretch_once",probability:0.02}];function l_(t,e){return t+Math.random()*(e-t)}function $s(){if(Se!==null)clearTimeout(Se),Se=null}function au(){if(ss!==null)clearTimeout(ss),ss=null}function tm(){Re+=1,$s(),Pn=null,hn=0,rs=0,Ks=!1}function h_(){let t=Math.random(),e=0;for(let n of su)if(e+=n.probability,t<e)return n.name;return su.at(-1).name}function Ni(t=null,e=null){if(Qt&&!Qe||De||Xe||tn||Se!==null)return;let n=e||Pn||h_(),i=Xt.has(n)?n:Xt.has("typing_loop")?"typing_loop":Xt.has("idle_seated_loop")?"idle_seated_loop":null;if(!i)return;Pn=i;let r=i==="typing_loop"?"typing":i==="idle_seated_loop"?"idle":i==="coffee_once"?"coffee":i==="phone_once"?"phone":"stand",[s,a]=o_[r];hn=Math.max(0,Number(t??l_(s,a))),$f=performance.now();let o=Re;Se=setTimeout(()=>{if(Se=null,Pn=null,De||Xe||o!==Re)return;if(Qe)Li.push("timerFired");if(oi(i,{manual:!1,routine:!0})&&!tn&&!Qe)Ni()},hn)}function Wf(){if(Qt&&!Qe||De)return;if($s(),Re+=1,lr+=1,hn=0,rs=0,Pn=null,tn)Ks=!0;else Ks=!1,Ni()}function c_(){if(Qt&&!Qe||Xe||Se===null)return;let t=Math.max(0,performance.now()-$f);hn=Math.max(0,hn-t),rs=performance.now(),Re+=1,$s()}function u_(){if(Qt&&!Qe||Xe||De||Se!==null)return;Ni(hn||null,Pn)}function em(t=40,e=!1,n=null){if(Qt&&!e||De||Xe||Qe||tn)return!1;let i=Math.max(15,Math.min(5000,Number(t)||40));au(),$s(),Re+=1,Pn=null,hn=0,rs=0,Qe=!0,Li=[],Un=null;let r={requestedDelayMs:i,scheduled:!1,timerFired:!1,actionBefore:Ee,actionAfter:null,eventsBefore:0,eventsAfter:0,passed:!1},s={pauseSuspends:!1,resumeRestores:!1,remainingMs:0,passed:!1},a={started:!1,resetCountBefore:lr,resetCountAfter:lr,generationBefore:Re,generationAfter:Re,generationAdvanced:!1,timerScheduled:!1,timerReordered:!1,pendingName:null,passed:!1},o={scheduled:!1,generationBefore:Re,generationAfter:Re,timerCanceled:!1,timerFiredBefore:0,timerFiredAfter:0,noNewTimerFired:!1,actionBefore:Ee,actionAfter:null,actionUnchanged:!1,oldGenerationSuppressed:!1,callbackSuppressed:!1,passed:!1};Ni(i,"typing_loop"),r.scheduled=Se!==null,r.eventsBefore=Li.length,lu(!0),s.remainingMs=hn,s.pauseSuspends=Se===null&&hn>0,lu(!1),s.resumeRestores=Se!==null;let l=()=>{if(De||!Qe)return;au(),r.eventsAfter=Li.length,r.timerFired=Li.slice(r.eventsBefore).includes("timerFired"),r.actionAfter=Ee,r.passed=r.scheduled&&r.timerFired,o.timerFiredAfter=Li.length,o.actionAfter=Ee,o.actionUnchanged=o.actionBefore===o.actionAfter,o.noNewTimerFired=o.timerFiredAfter===o.timerFiredBefore,o.oldGenerationSuppressed=o.generationAfter>o.generationBefore,o.callbackSuppressed=o.noNewTimerFired&&o.actionUnchanged&&Se===null,o.passed=o.scheduled&&o.timerCanceled&&o.generationAfter>o.generationBefore&&o.callbackSuppressed;let c=s.pauseSuspends&&s.resumeRestores,d=a.started&&a.resetCountAfter>a.resetCountBefore&&a.generationAfter>a.generationBefore&&a.timerScheduled&&a.passed,u=o.callbackSuppressed;if(Qe=!1,Pn=null,hn=0,rs=0,Un={requestedDelayMs:i,schedule:{...r},pauseResume:{...s,passed:c},manualReorder:{...a,passed:d},teardownCancel:{...o},callbackSuppressed:u,scheduled:r.scheduled,accelerated:a.timerScheduled,pauseSuspends:s.pauseSuspends,resumeRestores:s.resumeRestores,manualReset:d,timerFired:r.timerFired,passed:r.passed&&c&&d&&o.passed&&u},!Qt)Ni();if(Kt("routineProbe",{result:Un}),typeof n==="function")n(Un)},h=()=>{if(De||!Qe)return;let c=lr,d=Re,u=oi("typing_loop",{manual:!0});a.started=u,a.resetCountBefore=c,a.resetCountAfter=lr,a.generationBefore=d,a.generationAfter=Re,a.generationAdvanced=Re>d,a.timerScheduled=Se!==null,a.timerReordered=a.timerScheduled&&a.generationAdvanced,a.pendingName=Pn,a.passed=u&&lr===c+1&&Re>d&&Se!==null&&a.timerReordered,$s(),Re+=1,Pn=null,hn=0,rs=0,o.generationBefore=Re,o.actionBefore=Ee;let p=Li.length;Ni(i,"typing_loop"),o.scheduled=Se!==null,o.timerFiredBefore=p;let _=Se;tm(),o.generationAfter=Re,o.timerCanceled=_!==null&&Se===null,ss=setTimeout(l,i+40)};return ss=setTimeout(()=>{if(ss=null,De||!Qe)return;if(Li.slice(r.eventsBefore).includes("timerFired")){h();return}h()},i+40),!0}function nm(){if(al===null)return;try{globalThis.createImageBitmap=al}catch(t){}al=null}function Xf(t){if(!t?.index)return Math.floor((t?.attributes?.position?.count||0)/3);return Math.floor(t.index.count/3)}function d_(t,e){let n=0,i=0,r=0,s=0,a=0,o=new Set,l=[];t.traverse((m)=>{if(n+=1,m.isBone)s+=1;if(!m.isMesh)return;if(i+=1,r+=Xf(m.geometry),m.morphTargetDictionary)Object.keys(m.morphTargetDictionary).forEach((f)=>o.add(f));if(m.isSkinnedMesh&&m.skeleton)a=Math.max(a,m.skeleton.bones.length);l.push({name:m.name,triangles:Xf(m.geometry),materialCount:Array.isArray(m.material)?m.material.length:1,morphTargetCount:m.morphTargetDictionary?Object.keys(m.morphTargetDictionary).length:0,skinned:Boolean(m.isSkinnedMesh)})});let h=new Ue().setFromObject(t),c=h.getSize(new T),d=h.getCenter(new T),u=e.filter((m)=>m.transparent||m.alphaTest>0),p=e.map((m)=>{let f=m.map||null,v=f?.image||null,y=f?.source?.data||null;return{name:m.userData.phase0SourceName||m.name,runtimeName:m.name,type:m.type,role:m.userData.phase0Character?"character":"scene",unlit:Boolean(m.userData.phase0Unlit),map:{present:Boolean(f),uuid:f?.uuid||null,imageName:v?.name||null,imageSourceUUID:f?.source?.uuid||null,imageSourceType:y?.constructor?.name||null,width:v?.width||v?.videoWidth||null,height:v?.height||v?.videoHeight||null,colorSpace:f?.colorSpace||null},alphaMapPresent:Boolean(m.alphaMap),alphaTest:m.alphaTest,transparent:m.transparent,depthWrite:m.depthWrite}}),_=p.filter((m)=>m.role==="character");return{nodeCount:n,meshCount:i,boneCount:s,skeletonBoneCount:a,morphTargetCount:o.size,triangleCount:r,materialCount:e.length,characterMaterialCount:_.length,unlitCharacterMaterialCount:_.filter((m)=>m.unlit).length,characterMaterials:_,materialRuntime:p,alphaMaterialCount:u.length,alphaMaterials:u.map((m)=>({name:m.userData.phase0SourceName||m.name,transparent:m.transparent,alphaTest:m.alphaTest,depthWrite:m.depthWrite,side:m.side===be?"DoubleSide":"FrontSide",toon:Boolean(m.userData.phase0Toon),unlit:Boolean(m.userData.phase0Unlit),mapPresent:Boolean(m.map),mapColorSpace:m.map?.colorSpace||null,alphaMode:m.userData.phase0AlphaMode||(m.transparent?"BLEND":"MASK")})),meshes:l,bounds:{min:h.min.toArray(),max:h.max.toArray(),size:c.toArray(),center:d.toArray()},rootScale:t.scale.toArray()}}function p_(){let t=le.getContext(),e=le.domElement.width,n=le.domElement.height,i=new Uint8Array(e*n*4);return t.readPixels(0,0,e,n,t.RGBA,t.UNSIGNED_BYTE,i),i}function im(t,e){if(!t||!e||t.length!==e.length)return{changedPixels:0,meanAbsoluteChannelDiff:0,maxChannelDiff:0};let n=0,i=0,r=0;for(let s=0;s<t.length;s+=4){let a=0;for(let o=0;o<4;o+=1){let l=Math.abs(t[s+o]-e[s+o]);a=Math.max(a,l),i+=l,r=Math.max(r,l)}if(a>2)n+=1}return{changedPixels:n,changedPixelRatio:n/(t.length/4),meanAbsoluteChannelDiff:i/t.length,maxChannelDiff:r}}function hu(t){le.render(Ui,Ln);let e=le.domElement.toDataURL("image/png"),n=p_();if(t==="idle")Wc=n,Jf=n;if(t==="typing")Xc=n,jf=n;if(Kt("screenshot",{name:t,dataURL:e}),Wc&&Xc){let i=im(Wc,Xc);Kt("pixelDiff",{pixelDiff:i})}}function ou(t=null){let e=Xt.get("typing_loop");if(!as||!e)return;let n=t??(performance.now()-as)/1000;if(n>hr+0.08)return;if(nu.some((i)=>Math.abs(i.elapsedSeconds-n)<0.01))return;nu.push({elapsedSeconds:n,idleWeight:Xt.get("idle_seated_loop")?.getEffectiveWeight?.()||0,typingWeight:e.getEffectiveWeight(),idleTimeSeconds:Xt.get("idle_seated_loop")?.time||0,typingTimeSeconds:e.time})}function f_(t,e,n,i=null){let r=[...Xt.entries()].map(([d,u])=>({name:d,weight:Number(u.getEffectiveWeight?.()||0)})).filter((d)=>d.weight>0.001).sort((d,u)=>u.weight-d.weight),s=r.find((d)=>d.name===t),a=i||null,o=r.filter((d)=>d.name!==t&&d.name!==a),l=a?r.find((d)=>d.name===a):null,h=Boolean(s)&&Math.abs(s.weight-1)<=0.03&&!o.length&&(!a||Boolean(l)),c={action:t,screenshot:e,timeSeconds:n,active:r,mainWeight:s?.weight||0,companion:l?.name||null,companionWeight:l?.weight||0,isolatedPass:h};return Js.push(c),Kt("diagnostic",{phase:"sampleWeights",...c}),c}function rm(t){let e=t.name.lastIndexOf(".");if(e<=0||!jt)return!1;let n=t.name.slice(0,e),i=jt.getObjectByName(n);return Boolean(i?.isBone)}function m_(t){return{sourceClipCount:t.length,clips:t.map((e)=>({name:e.name,durationSeconds:e.duration,trackCount:e.tracks.length,boneTrackCount:e.tracks.filter(rm).length,hasPropTracks:e.tracks.some((n)=>/Prop_|Keyboard|Monitor|Coffee|Phone/.test(n.name)),loop:Boolean(Ce.get(e.name)?.loop)})),sourceFrameRate:Pi}}function g_(){let t=sl.filter((o)=>o>100),e=sl.filter((o)=>o<=100),n=[...e].sort((o,l)=>o-l),i=[...sl].sort((o,l)=>o-l),r=(o,l)=>o.length?o[Math.min(o.length-1,Math.floor(o.length*l))]:0,s=is.length>1?is.at(-1)-is[0]:0,a=e.reduce((o,l)=>o+l,0);return{frames:eu,durationSeconds:s/1000,fps:a>0?e.length*1000/a:0,activeIntervalCount:e.length,warmupExcludedIntervalCount:t.length,warmupExcludedIntervalsMs:t.slice(0,12),frameTimeMs:{min:n[0]||0,median:r(n,0.5),p95:r(n,0.95),max:n.at(-1)||0},rawFrameTimeMs:{min:i[0]||0,median:r(i,0.5),p95:r(i,0.95),max:i.at(-1)||0}}}function __(){let t=le?.getContext?.(),e=window.__roomMetrics||{},n=[...Ce.values()].map((J)=>({name:J.name,durationSeconds:J.duration,trackCount:J.tracks.length,boneTrackCount:J.tracks.filter(rm).length,loop:Boolean(Ce.get(J.name)?.loop),actionCreated:Xt.has(J.name)})),i=im(Jf,jf),r=Ve.validation||{},s=Array.isArray(r.requiredClips)?r.requiredClips:[],a=new Set(Xt.keys()),o=s.filter((J)=>!a.has(J)),l=Number(Ve.counts?.boneCount||0),h=Number(Ve.counts?.morphTargetCount||0),c=Number(Ve.counts?.materialCount||0),d=Number(Ve.validation?.maxMaterials??Ve.budgets?.maxMaterials),u=Number.isFinite(d)&&e.materialCount<=d,p=["coffee_once","phone_once"].filter((J)=>a.has(J)).map((J)=>`${J}_PropMotion`).filter((J)=>a.has(J)),_=["coffee_once","phone_once"].filter((J)=>a.has(J)&&!a.has(`${J}_PropMotion`)),m=window.__runtimeContactMeasurement||Qf||{},f=m.source==="runtimeAnimationSample"&&m.pass===!0&&m.restoredToTyping===!0,v=new Map((Ve.clips||[]).map((J)=>[J.name,J])),y=v.get("coffee_once")?.contact||{},g=v.get("phone_once")?.contact||{},S=v.get("typing_loop")||{},C=S.contact||{},A=(J)=>typeof J==="number"&&Number.isFinite(J),L=(J)=>{let mt=J?.toleranceMeters,ot=J?.wristToSocketMinMeters,it=J?.wristToSocketMaxMeters,lt=J?.grabSampleCount,gt=J?.trajectoryMaxMeters;return A(mt)&&mt>0&&A(ot)&&ot>=0&&ot<=mt&&A(it)&&it>=0&&it<=mt&&A(lt)&&lt>0&&A(gt)&&gt>0},V=L(y)&&L(g),P=S.keyboardContact,D=P?.maxFingerTipPlaneErrorMeters,B=P?.sampleCount,X=A(D)&&D<=0.025&&A(B)&&B>0,K=Boolean(Ve.validation?.contactContract)&&V&&X,k=window.__roomCameraContract||{},$=k.source==="manifest"&&Array.isArray(k.position)&&k.position.length===3&&Array.isArray(k.target)&&k.target.length===3&&Number.isFinite(Number(k.fov)),G=!Qt||Js.length>0&&Js.every((J)=>J.isolatedPass),q=g_(),Z=Qt?Number(i.changedPixelRatio||0)>0.00001&&Number(i.maxChannelDiff||0)>2:!0,ht={enabled:!Boolean(Qt),productionOnly:!0,distribution:su,timerActive:Se!==null,supportsTimerCancellation:!0,manualResetCount:lr,pauseSuspends:!0,resumeRestores:!0,supportsDisposeCancellation:!0,disposeCancellationObserved:Un?.teardownCancel?.passed===!0&&Un?.teardownCancel?.callbackSuppressed===!0,probe:Un,state:De?"disposed":Xe?"paused":tn?"deferred_for_one_shot":Se!==null?"scheduled":"idle"},ft=ht.productionOnly&&ht.supportsTimerCancellation&&ht.supportsDisposeCancellation&&Un?.passed===!0,Q={webgl:Boolean(t),skeleton:e.skeletonBoneCount>=l&&e.boneCount>=l,morphTargets:e.morphTargetCount>=h,materials:e.characterMaterialCount>=Math.min(c,20)&&u,routineScheduler:ft,triangles:e.triangleCount<=Number(r.maxTriangles||200000),requiredClips:o.length===0,propCompanionActions:_.length===0,runtimeContact:f,manifestContact:K,cameraContract:$,isolatedCaptureActions:G,actionBindings:s.every((J)=>a.has(J)),pixelAnimation:Z,activeFrameTiming:Qt?.performance?q.activeIntervalCount>=5&&Number(q.frameTimeMs.p95||0)<=100:!0};return{status:Object.values(Q).every(Boolean)?"PASS":"FAIL",runtime:"WKWebView + vendored Three.js + GLTFLoader",assetURL:ol,loadMilliseconds:performance.now()-a_,webgl:t?{renderer:t.getParameter(t.RENDERER),vendor:t.getParameter(t.VENDOR),version:t.getParameter(t.VERSION),shadingLanguageVersion:t.getParameter(t.SHADING_LANGUAGE_VERSION)}:null,counts:e,animation:{clips:n,activeAction:Ee,crossfadeSeconds:hr,crossfadeSamples:nu},camera:k,diagnosticActiveWeights:Js,activeFPS:Qt?.performance?q.fps:cl,renderLoopFPS:cl,frameTiming:q,pixelDiff:i,gates:Q,failedGates:Object.entries(Q).filter(([,J])=>!J).map(([J])=>J),missingClips:o,companionGates:p,companionMissing:_,runtimeContact:m,contact:{contractPass:V,source:m.source||null,runtime:m,typingKeyboardPass:X,contract:Ve.validation?.contactContract||null,coffee:y,phone:g,typing:C,keyboardDistanceMeters:D,keyboardSampleCount:B,maxMaterials:d,runtimeMaterialCount:e.materialCount,materialCountBudgetPass:u},manifestExpected:Ve.counts||{},routineScheduler:ht,requiredClips:s,textureLoader:window.__roomTextureLoader||null,diagnostics:Qt?{requestedActions:Qt.actions||[],screenshots:Qt.screenshots!==!1,performance:Boolean(Qt.performance),activeWeights:Js}:null}}function ul(){if(!Qt||Nn==="done")return;Nn="done";let t=__();Kt("report",{report:t}),Kt("done",{report:t})}function sm(){if(De)return;if(eu===0)Kt("firstFrame",{width:le.domElement.width,height:le.domElement.height});let t=performance.now();if(kc)sl.push(t-kc);if(kc=t,is.push(t),eu+=1,is.length>300)is.shift();let e=Math.min(tu.getDelta(),0.1);if(!Xe){if(ue)ue.update(e);if(Dn?.update(e,nn,Ee,{allowAdditiveHead:!Qt}),ai?.update(e,nn),en?.update(e,nn,jt),le.render(Ui,Ln),Yc+=1,t-qc>=1000)cl=Yc*1000/(t-qc),Yc=0,qc=t,Kt("status",{message:`${Ee||"准备中"} · ${Math.round(cl)} FPS`,action:Ee});if(ou(),Qt)E_(t)}setTimeout(sm,16.666666666666668)}function am(t,e=Ee){if(Vf)Vf.textContent=t;Kt("status",{message:t,action:e})}function dl(t){let e=String(t||"").trim();return{idle:"idle_seated_loop",typing:"typing_loop",coffee:"coffee_once",phone:"phone_once",stand:"stand_stretch_once",stretch:"stand_stretch_once",chin_rest:"chin_rest_loop",closeup:"chin_rest_loop",listen:"listen_music_loop",drowsy:"drowsy_nod_loop",pet:"pet_happy_once",write:"write_note_once"}[e]||e}function oi(t,e={}){let n=dl(t),i=Xt.get(n);if(!i)return Qs(`动作「${n}」不在当前 GLB 中`),!1;let r=ll;if(r===i&&i.isRunning()){if(e.manual)Wf();return!0}if(tn&&tn!==i)tn.stop(),tn=null;if(ur(),i.reset(),Ce.get(n)?.loop)i.setLoop(Hr,1/0).clampWhenFinished=!1;else i.setLoop(Kn,1).clampWhenFinished=!0,tn=i;if(i.setEffectiveWeight(1).play(),r&&r!==i)r.crossFadeTo(i,hr,!1),as=performance.now();if(ll=i,Ee=n,Ce.get(n)?.loop)hl=n;if(am(e.manual?`正在${Ce.get(n)?.label||n}`:Ce.get(n)?.label||n,n),n==="pet_happy_once"){if(Dn?.triggerPet(),Dn&&en)en.spawnHearts(Dn.getHeadWorldPosition())}if(e.manual)Kt("action",{name:n,manual:!0});let s={coffee_once:"coffee_once_PropMotion",phone_once:"phone_once_PropMotion",write_note_once:"write_note_once_PropMotion"}[n];if(s&&Xt.has(s))Di("Prop_Coffee"),Di("Prop_Phone"),Di("Prop_Pen"),cr=Xt.get(s),cr.reset().setLoop(Kn,1).setEffectiveWeight(1).play();if(e.manual)Wf();return!0}function v_(t){if(t!==tn)return;tn=null,ur();let e=Xt.has(hl)?hl:"typing_loop";if(oi(e,{manual:!1}),Ks)Ks=!1;Ni()}function Kc(t,e){let n=t.getObjectByName(e);if(!n)return;Kf.set(e,{position:n.position.clone(),quaternion:n.quaternion.clone(),scale:n.scale.clone()})}function Di(t){let e=jt?.getObjectByName(t),n=Kf.get(t);if(!e||!n)return;e.position.copy(n.position),e.quaternion.copy(n.quaternion),e.scale.copy(n.scale),e.updateMatrixWorld(!0)}function ur(){cr?.stop?.(),cr=null,Di("Prop_Coffee"),Di("Prop_Phone"),Di("Prop_Pen")}function Fi(t){return Boolean(t)&&Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z)}function om(t,e=null){if(!ue||!jt)return{pass:!1,reason:"missing_runtime_state"};let n=Xt.get(t);if(!n)return{pass:!1,reason:`missing_action:${t}`};if(e&&!Xt.has(e))return{pass:!1,reason:`missing_action:${e}`};ue.stopAllAction(),Xt.forEach((r)=>{r.stop(),r.reset(),r.enabled=!1,r.setEffectiveWeight(0)}),ur(),n.enabled=!0,n.setLoop(Kn,1),n.clampWhenFinished=!0,n.setEffectiveWeight(1).play();let i=null;if(e)i=Xt.get(e),i.enabled=!0,i.setLoop(Kn,1),i.clampWhenFinished=!0,i.setEffectiveWeight(1).play();return{pass:!0,action:n,companion:i}}function qf(){let t=Xt.get("typing_loop");if(!t||!ue||!jt)return!1;return ue.stopAllAction(),Xt.forEach((e)=>{e.stop(),e.reset(),e.enabled=!1,e.setEffectiveWeight(0)}),ur(),t.enabled=!0,t.setLoop(Hr,1/0),t.clampWhenFinished=!1,t.setEffectiveWeight(1).play(),t.time=0,ue.update(0),jt.updateMatrixWorld(!0),ll=t,Ee="typing_loop",hl="typing_loop",tn=null,as=0,!0}function Yf(t,e){let n=(Ve.clips||[]).find((S)=>S.name===t),i=n?.contact?.holdFrameWindow,r=Array.isArray(i)&&i.length===2?Number(i[0]):e.startFrame,s=Array.isArray(i)&&i.length===2?Number(i[1]):e.endFrame,a=n?.contact?.handLocalGripPoint,o=Array.isArray(a)&&a.length===3?new T(Number(a[0]),Number(a[1]),Number(a[2])):null,l={action:t,companion:e.companion,hand:e.hand,prop:e.prop,startFrame:r,endFrame:s,fps:Pi,toleranceMeters:ru,source:"runtimeAnimationSample",sampleCount:0,maxWorldDistanceMeters:null,minWorldDistanceMeters:null,pass:!1};if(!jt||!ue)return{...l,reason:"missing_runtime_state"};let h=jt.getObjectByName(e.hand),c=jt.getObjectByName(e.prop);if(!h||!c)return{...l,reason:`missing_node:${!h?e.hand:e.prop}`};let d=om(t,e.companion);if(!d.pass)return{...l,reason:d.reason};let u=0,p=1/0,_=[],m=new T,f=new T,v=Number(Ce.get(t)?.duration);if(!Number.isFinite(v)||v<=0)return{...l,reason:`invalid_duration:${t}`};for(let S=r;S<=s;S+=1){let C=S/Pi;if(!Number.isFinite(C)||C<0||C>v+1/Pi)return{...l,reason:`invalid_time:${S}`};if(d.action.time=Math.min(C,v),d.companion)d.companion.time=Math.min(C,v);if(ue.update(0),jt.updateMatrixWorld(!0),o)m.copy(o).applyMatrix4(h.matrixWorld);else h.getWorldPosition(m);if(c.getWorldPosition(f),!Fi(m)||!Fi(f))return{...l,reason:`non_finite_position:${S}`};let A=m.distanceTo(f);if(!Number.isFinite(A))return{...l,reason:`non_finite_distance:${S}`};u=Math.max(u,A),p=Math.min(p,A),_.push({frame:S,timeSeconds:C,worldDistanceMeters:A})}let y=[...Xt.entries()].filter(([,S])=>S.getEffectiveWeight()>0.001).map(([S])=>S).sort(),g=y.length===1+(d.companion?1:0)&&y.includes(t)&&(!d.companion||y.includes(e.companion));return{...l,sampleCount:_.length,maxWorldDistanceMeters:u,minWorldDistanceMeters:p,isolatedActions:y,isolatedPass:g,samples:_,pass:g&&_.length===s-r+1&&u<=ru}}function y_(t){if(!t)return{pass:!1,reason:"missing_node:Keyboard"};let e=[];if(t.traverse((l)=>{if(l.isMesh&&l.geometry)e.push(l)}),t.isMesh&&t.geometry&&!e.includes(t))e.push(t);if(e.length===0)return{pass:!1,reason:"missing_mesh:Keyboard"};t.updateMatrixWorld(!0);let n=t.getWorldPosition(new T),r=t.getWorldQuaternion(new me).clone().invert(),s=new T(1/0,1/0,1/0),a=new T(-1/0,-1/0,-1/0),o=new T;for(let l of e){let h=l.geometry;if(!h.boundingBox)h.computeBoundingBox();let c=h.boundingBox;if(!c||!Fi(c.min)||!Fi(c.max))return{pass:!1,reason:`invalid_geometry_bbox:${l.name||"Keyboard"}`};for(let d of[c.min.x,c.max.x])for(let u of[c.min.y,c.max.y])for(let p of[c.min.z,c.max.z]){if(o.set(d,u,p).applyMatrix4(l.matrixWorld).sub(n).applyQuaternion(r),!Fi(o))return{pass:!1,reason:"non_finite_keyboard_bbox"};s.min(o),a.max(o)}}if(![s.x,s.y,s.z,a.x,a.y,a.z].every(Number.isFinite)||a.x<s.x||a.y<s.y||a.z<s.z)return{pass:!1,reason:"invalid_keyboard_basis"};return{pass:!0,origin:n,inverseRotation:r,min:s,max:a,footprint:{minX:s.x-js,maxX:a.x+js,minY:s.y-js,maxY:a.y+js},topZ:a.z,meshNames:e.map((l)=>l.name||"Keyboard"),basis:"Keyboard world rotation only; child mesh geometry bbox"}}function M_(t){if(t?.parent?.isBone){let i=new T,r=new T;t.parent.getWorldPosition(i),t.getWorldPosition(r);let s=r.clone().add(r.clone().sub(i).multiplyScalar(0.78));return Fi(s)?s:null}let e=t?.position?.length?.();if(!Number.isFinite(e)||e<=0)return null;let n=new T(0,e,0).applyMatrix4(t.matrixWorld);return Fi(n)?n:null}function S_(){let t={action:"typing_loop",source:"runtimeAnimationSample",fps:Pi,tipMethod:"local +Y × distal bone local offset length",distalBones:jc.flatMap((f)=>Jc.map((v)=>`J_Bip_${f}_${v}3`)),footprintPaddingMeters:js,topToleranceMeters:kf,sampleCount:0,frameStart:0,frameEnd:null,pass:!1};if(!jt||!ue)return{...t,reason:"missing_runtime_state"};let e=Xt.get("typing_loop"),n=jt.getObjectByName("Keyboard");if(!e)return{...t,reason:"missing_action:typing_loop"};if(!n)return{...t,reason:"missing_node:Keyboard"};let i=y_(n);if(!i.pass)return{...t,reason:i.reason};let r={};for(let f of jc){r[f]={};for(let v of Jc){let y=`J_Bip_${f}_${v}3`,g=jt.getObjectByName(y);if(!g?.isBone)return{...t,reason:`missing_node:${y}`};let S=g.position.length();if(!Number.isFinite(S)||S<0.005||S>0.05)return{...t,reason:`invalid_bone_length:${y}`};r[f][v]=g}}let s=Number(Ce.get("typing_loop")?.duration);if(!Number.isFinite(s)||s<=0)return{...t,reason:"invalid_duration:typing_loop"};let a=Math.round(s*Pi),o=om("typing_loop");if(!o.pass)return{...t,reason:o.reason};let l=new T,h=0,c=0,d=0,u=[],p=[];for(let f=0;f<=a;f+=1){let v=f/Pi;if(!Number.isFinite(v)||v<0||v>s+1/Pi)return{...t,reason:`invalid_time:${f}`,frameEnd:a};e.time=Math.min(v,s),ue.update(0),jt.updateMatrixWorld(!0);let y={frame:f,timeSeconds:v,hands:{}},g=!0;for(let S of jc){let C=null;for(let L of Jc){let V=r[S][L],P=M_(V);if(!P)return{...t,reason:`non_finite_tip:${f}`,frameEnd:a};l.copy(P);let D=l.clone().sub(i.origin).applyQuaternion(i.inverseRotation);if(!Fi(D))return{...t,reason:`non_finite_keyboard_tip:${f}`,frameEnd:a};let B=Math.abs(D.z-i.topZ),X=Math.max(i.footprint.minX-D.x,D.x-i.footprint.maxX,i.footprint.minY-D.y,D.y-i.footprint.maxY,0),K={finger:L,tipKeyboardBasis:D.toArray(),topDistanceMeters:B,footprintOverflowMeters:X,withinFootprint:X<=0,withinTopTolerance:B<=kf},k=K.withinFootprint&&K.withinTopTolerance,$=C?.withinFootprint&&C?.withinTopTolerance;if(!C||k&&!$||!$&&B<C.topDistanceMeters)C=K}let A=Boolean(C?.withinFootprint&&C?.withinTopTolerance);g=g&&A,h=Math.max(h,C?.topDistanceMeters||0),c=Math.max(c,C?.footprintOverflowMeters||0),y.hands[S]={...C,pass:A}}if(g)d+=1;else u.push(f);p.push(y)}let _=[...Xt.entries()].filter(([,f])=>f.getEffectiveWeight()>0.001).map(([f])=>f).sort(),m=_.length===1&&_[0]==="typing_loop";return{...t,frameEnd:a,sampleCount:p.length,validFrameCount:d,failedFrames:u,maxFingerTipTopDistanceMeters:h,maxFootprintOverflowMeters:c,isolatedActions:_,isolatedPass:m,keyboardBasis:{min:i.min.toArray(),max:i.max.toArray(),topZ:i.topZ,footprint:i.footprint,meshNames:i.meshNames,basis:i.basis},samples:p,pass:m&&p.length===a+1&&d===p.length}}function x_(){let t={source:"runtimeAnimationSample",pass:!1,restoredToTyping:!1,toleranceMeters:ru,coffee:null,phone:null,typing:null};try{t.coffee=Yf("coffee_once",Gf.coffee_once),t.phone=Yf("phone_once",Gf.phone_once),t.typing=S_(),t.restoredToTyping=qf(),t.pass=Boolean(t.coffee?.pass&&t.phone?.pass&&t.typing?.pass&&t.restoredToTyping)}catch(e){t.error=String(e?.message||e),t.pass=!1,t.restoredToTyping=qf()}return Qf=t,window.__runtimeContactMeasurement=t,Kt("runtimeContact",{measurement:t}),t}function T_(t){ue=new Ko(jt),Ce.clear(),Xt.clear();let e=Array.isArray(Ve.clips)?Ve.clips:[];t.animations.forEach((s)=>{let a=e.find((l)=>l.name===s.name)||{name:s.name,loop:/loop/i.test(s.name),label:s.name};Ce.set(s.name,{...a,duration:s.duration,tracks:s.tracks});let o=ue.clipAction(s);o.setLoop(a.loop?Hr:Kn,a.loop?1/0:1),o.clampWhenFinished=!a.loop,o.enabled=!0,o.setEffectiveWeight(0),Xt.set(s.name,o)}),ue.addEventListener("finished",(s)=>v_(s.action));let n=m_(t.animations);window.__roomAnimation=n,Kt("setup",{animation:n,counts:window.__roomMetrics});let r=(Qt&&Xt.has("idle_seated_loop")?"idle_seated_loop":null)||(Xt.has("typing_loop")?"typing_loop":t.animations[0]?.name||"");if(!r||!oi(r))throw Error("GLB 没有可播放动作");if(x_(),window.__roomStartedAt=performance.now(),Qt)w_();else setTimeout(()=>{if(ue)ue.setTime(0);jt.updateMatrixWorld(!0),le.render(Ui,Ln)},16),Ni();window.__roomReady=!0,$c?.classList.add("hidden"),Kt("ready",{counts:window.__roomMetrics,animation:n}),am("已就绪 · 正在打字",Ee)}function E_(t){if(!Qt||Nn==="done")return;let e=t-(as||t);if(Nn==="idle")return;if(Nn==="typing"&&e>850)if(hu("typing"),(Array.isArray(Qt.actions)?Qt.actions:[]).length>0)lm(0);else ul()}function rl(t,e,n=t){if(!Xt.has(t))return!1;ue.stopAllAction(),Xt.forEach((s)=>{s.stop(),s.reset(),s.enabled=!1,s.setEffectiveWeight(0)}),ur();let i=Xt.get(t);i.enabled=!0,i.setLoop(Ce.get(t)?.loop?Hr:Kn,Ce.get(t)?.loop?1/0:1),i.clampWhenFinished=!Ce.get(t)?.loop,i.setEffectiveWeight(1).play(),ll=i,Ee=t;let r={coffee_once:"coffee_once_PropMotion",phone_once:"phone_once_PropMotion",write_note_once:"write_note_once_PropMotion"}[t];if(r&&Xt.has(r)){let s=Xt.get(r);s.enabled=!0,s.setLoop(Kn,1).clampWhenFinished=!0,s.setEffectiveWeight(1).play(),cr=s}if(i.time=Math.max(0,Math.min(e,Number(Ce.get(t)?.duration||1))),cr)cr.time=i.time;return ue.update(0),Dn?.update(0.05,nn,t,{allowAdditiveHead:!1}),jt.updateMatrixWorld(!0),ai?.update(0.1,nn,!0),en?.update(0.016,nn,jt),le.render(Ui,Ln),f_(t,n,i.time,r),hu(n),!0}function w_(){Nn="deterministic";let t=Xt.has("idle_seated_loop")?"idle_seated_loop":Ee,e=Xt.has("typing_loop")?"typing_loop":Ee;if(!t||!e){Qs("诊断缺少 idle/typing 动作");return}rl(t,0.22,"idle"),oi(e,{manual:!0}),as=performance.now(),ue.update(hr*0.5),ou(hr*0.5),ue.update(hr*0.5),ou(hr),rl(e,1.85,"typing"),(Array.isArray(Qt?.actions)?Qt.actions:[]).forEach((r)=>{let s=dl(r),a=Number(Ce.get(s)?.duration||1),o=s==="coffee_once"?Math.min(a*0.55,a-0.05):s==="phone_once"?Math.min(a*0.5,a-0.05):s==="stand_stretch_once"?Math.min(a*0.53,a-0.05):Math.min(a*0.45,a-0.05);rl(s,o,s),ur(),Di("Prop_Coffee"),Di("Prop_Phone")}),rl(e,0.15,"typing_return"),ur();let i=()=>{if(De)return;if(Nn="routineProbe",em(40,!0,()=>{if(!De)ul()}))return;Un={requestedDelayMs:40,schedule:{scheduled:!1,timerFired:!1,passed:!1},pauseResume:{pauseSuspends:!1,resumeRestores:!1,passed:!1},manualReorder:{started:!1,timerScheduled:!1,passed:!1},teardownCancel:{scheduled:!1,timerCanceled:!1,callbackSuppressed:!1,passed:!1},callbackSuppressed:!1,scheduled:!1,accelerated:!1,pauseSuspends:!1,resumeRestores:!1,manualReset:!1,timerFired:!1,passed:!1},Kt("routineProbe",{result:Un}),ul()};if(Qt?.performance)Nn="performance",setTimeout(()=>{i()},2200);else i()}function b_(t){switch(dl(t)){case"coffee_once":return 2900;case"phone_once":return 2400;case"stand_stretch_once":return 4200;default:return 1100}}function lm(t){let e=Array.isArray(Qt?.actions)?Qt.actions:[];if(t>=e.length){Kt("diagnostic",{phase:"done"}),ul();return}let n=dl(e[t]);Kt("diagnostic",{phase:"start",index:t,name:n}),Nn=`action:${t}:playing`,oi(n,{manual:!0});let i=b_(n),r=Number(Ce.get(n)?.duration||1)*1000;setTimeout(()=>{if(De)return;Kt("diagnostic",{phase:"capture",index:t,name:n}),hu(n),Kt("diagnostic",{phase:"afterCapture",index:t,name:n}),Nn=`action:${t}:captured`},i),setTimeout(()=>{if(De)return;Kt("diagnostic",{phase:"next",index:t,name:n}),lm(t+1)},Math.max(i,r)+450)}function A_(){let t=ns?1:Math.min(window.devicePixelRatio||1,2);le?.setPixelRatio(t)}function lu(t){let e=Boolean(t);if(e===Xe)return;if(e)c_(),Xe=!0,tu.stop();else Xe=!1,tu.start(),u_();s_?.classList.toggle("paused",Xe),Kt("status",{paused:Xe,lowPower:ns,message:Xe?"已暂停":Ee})}function R_(){let t=Ve.camera||Ve.room?.camera||null;if(t?.position&&t?.target){let e=(n)=>[Number(n[0]),Number(n[2]),-Number(n[1])];return{position:e(t.position),target:e(t.target),fov:Number(t.fovDegrees||t.fov||32),source:"manifest"}}return{position:[2.88,2.35,4.05],target:[0,1.02,0.18],fov:31,source:"Blender authored fallback"}}function C_(){let t=R_();return Ln=new _e(t.fov,window.innerWidth/window.innerHeight,0.01,100),Ln.position.fromArray(t.position),Ln.lookAt(new T().fromArray(t.target)),Ln.updateProjectionMatrix(),window.__roomCameraContract=t,t}function I_(t){ns=Boolean(t),A_(),en?.setLowPower(ns),Kt("status",{paused:Xe,lowPower:ns,message:ns?"省电模式":Ee})}function Qs(t){let e=String(t||"3D 房间加载失败");if($c)$c.classList.add("hidden");if(Qc)Qc.classList.remove("hidden");if(zf)zf.textContent=e;Kt("error",{message:e})}function L_(){if(De)return;De=!0,tm(),au(),Qe=!1,ue?.stopAllAction(),jt?.traverse((t)=>{if(t.geometry?.dispose)t.geometry.dispose();(Array.isArray(t.material)?t.material:[t.material]).forEach((n)=>n?.dispose?.())}),iu?.dispose?.(),ai?.dispose?.(),en?.dispose?.(),le?.dispose(),le?.forceContextLoss?.(),Kt("disposed")}window.__withSnozzy3DCommand=(t)=>{if(typeof t==="string")return oi(t,{manual:!0});if(!t||typeof t!=="object")return!1;if(t.type==="action")return oi(t.name,{manual:!0});if(t.type==="pet"){if(Dn?.triggerPet(),Dn&&en)en.spawnHearts(Dn.getHeadWorldPosition());return oi("pet_happy_once",{manual:!0})}if(t.type==="state"&&t.state&&typeof t.state==="object")return Object.assign(nn,t.state),ai?.update(0.1,nn,!0),en?.update(0.016,nn,jt),!0;if(t.type==="toggleLamp")return en?en.toggleLamp():!1;if(t.type==="cycleMonitor")return ai?Boolean(ai.cycleMainMode(nn)):!1;if(t.type==="pause")return lu(t.value);if(t.type==="lowPower")return I_(t.value);if(t.type==="routineProbe"){let e=t.allowDiagnostic===!0||t.diagnostic===!0;return em(t.delayMs,e)}if(t.type==="dispose")return L_();return!1};function P_(t,e){window.__roomMetrics=e,T_(t),setTimeout(sm,16)}function Zf(t){nm(),Kt("stage",{name:"setup_enter"}),jt=t.scene,Kc(jt,"Prop_Coffee"),Kc(jt,"Prop_Phone"),Kc(jt,"Prop_Pen"),Ui=new fo,Ui.background=new vt(1447728),le=new Rc({canvas:Gc,antialias:!0,alpha:!1,preserveDrawingBuffer:Boolean(Qt)}),le.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),le.setSize(window.innerWidth,window.innerHeight,!1),le.outputColorSpace=ge,le.toneMapping=ja,le.toneMappingExposure=1.12,Kt("stage",{name:"renderer_ready"}),iu=Nf(),ai=Df();let e=Ff(jt,iu.textures,ai.textures),{materials:n}=e;Zc=e.sharedUniforms,Hf=e.emissiveRegistry,en=Of(Ui,le,Zc,Hf),Dn=Bf(jt,Zc),Kt("stage",{name:"materials_ready",count:n.length}),jt.rotation.x=-Math.PI/2,Ui.add(jt),jt.updateMatrixWorld(!0),Dn.update(0.05,nn,"idle_seated_loop",{allowAdditiveHead:!1}),ai.update(0.1,nn,!0),en.update(0.016,nn,jt);let i=C_(),r=d_(jt,n);Kt("stage",{name:"metrics_ready"}),r.materialCount=n.length,window.addEventListener("resize",()=>{le.setSize(window.innerWidth,window.innerHeight,!1),Ln.aspect=window.innerWidth/window.innerHeight,Ln.updateProjectionMatrix()}),Gc.addEventListener("webglcontextlost",(s)=>{s.preventDefault(),Qs("图形上下文丢失，请切回 2.5D 后重试。")},!1),Gc.addEventListener("webglcontextrestored",()=>{Qc?.classList.add("hidden"),Kt("status",{message:"图形上下文已恢复"})},!1),r.cameraContract=i,P_(t,r),Kt("stage",{name:"animation_started"})}Kt("boot",{assetURL:ol});if(!ol&&!il)Qs("没有找到 SnozzyRoom3D.glb");else{al=globalThis.createImageBitmap;try{globalThis.createImageBitmap=void 0}catch(n){}let t=new Dc;window.__roomTextureLoader="TextureLoader (createImageBitmap disabled until parse complete)";let e=(n)=>{nm(),Qs(`GLB 加载失败：${n?.message||String(n)}`)};if(il){let n=il.indexOf(",");try{let i=Uint8Array.from(atob(il.slice(n+1)),(r)=>r.charCodeAt(0));t.parse(i.buffer,"",Zf,e)}catch(i){e(i)}}else t.load(ol,Zf,void 0,e)}})();
