(()=>{var ad="179";var od=0,$l=1,ld=2;var Ql=1,za=2,Sn=3,xn=0,Ze=1,Ee=2,_i=0,Es=1,th=2,eh=3,nh=4,hd=5,Nr=100,cd=101,ud=102,dd=103,pd=104,fd=200,md=201,gd=202,_d=203,vd=204,yd=205,Md=206,Sd=207,xd=208,Td=209,Ed=210,wd=211,bd=212,Ad=213,Rd=214,Va=0,Ha=1,Ga=2,ws=3,ka=4,Wa=5,Xa=6,qa=7,Cd=0,Ld=1,Id=2,Xn=0,Pd=1,Ud=2,Nd=3,Ya=4,Dd=5,Fd=6,Od=7;var Dr=301,Zi=302,Za=303,Ja=304,bs=306,fn=1000,Ji=1001,ja=1002,qn=1003,Ka=1004;var ji=1005;var He=1006,Fr=1007;var Yn=1008;var vi=1009,Bd=1010,zd=1011,As=1012,ih=1013,Or=1014,yi=1015,Rs=1016,rh=1017,sh=1018,Br=1020,Vd=35902,Hd=1021,Gd=1022,Tn=1023,$a=1026,Cs=1027,kd=1028,ah=1029,Wd=1030,oh=1031;var lh=1033,Qa=33776,to=33777,eo=33778,no=33779,hh=35840,ch=35841,uh=35842,dh=35843,ph=36196,fh=37492,mh=37496,gh=37808,_h=37809,vh=37810,yh=37811,Mh=37812,Sh=37813,xh=37814,Th=37815,Eh=37816,wh=37817,bh=37818,Ah=37819,Rh=37820,Ch=37821,io=36492,Lh=36494,Ih=36495,Xd=36283,Ph=36284,Uh=36285,Nh=36286,Zn=2200,zr=2201;var Dh=2300,ro=2301;var Fh=0,Ls=1,Vr=2;var qd=3201;var Yd=0,Zd=1,Jn="",me="srgb",Oe="srgb-linear",Oh="linear",ee="srgb";var Jd=512,jd=513,Kd=514,Bh=515,$d=516,Qd=517,tp=518,ep=519;var zh="300 es",Vh=2000;class jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n!==void 0&&(n[t]!==void 0&&n[t].indexOf(e)!==-1)}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}var Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=1234567,Cr=Math.PI/180,Wi=180/Math.PI;function en(){let t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Le[255&t]+Le[t>>8&255]+Le[t>>16&255]+Le[t>>24&255]+"-"+Le[255&e]+Le[e>>8&255]+"-"+Le[e>>16&15|64]+Le[e>>24&255]+"-"+Le[63&n|128]+Le[n>>8&255]+"-"+Le[n>>16&255]+Le[n>>24&255]+Le[255&i]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Nt(t,e,n){return Math.max(e,Math.min(n,t))}function Zl(t,e){return(t%e+e)%e}function vs(t,e,n){return(1-n)*t+n*e}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(4294967295*t);case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int32Array:return Math.round(2147483647*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw Error("Invalid component type.")}}var Hh={DEG2RAD:Cr,RAD2DEG:Wi,generateUUID:en,clamp:Nt,euclideanModulo:Zl,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:vs,damp:function(t,e,n,i){return vs(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(Zl(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(0.5-Math.random())},seededRandom:function(t){t!==void 0&&(gu=t);let e=gu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*Cr},radToDeg:function(t){return t*Wi},isPowerOfTwo:function(t){return!(t&t-1)&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let{cos:s,sin:a}=Math,o=s(n/2),l=a(n/2),h=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*c,l*d,l*u,o*h);break;case"YZY":t.set(l*u,o*c,l*d,o*h);break;case"ZXZ":t.set(l*d,l*u,o*c,o*h);break;case"XZX":t.set(o*c,l*g,l*p,o*h);break;case"YXY":t.set(l*p,o*c,l*g,o*h);break;case"ZYZ":t.set(l*g,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:$t,denormalize:pn};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],h=n[i+2],c=n[i+3],d=r[s+0],u=r[s+1],p=r[s+2],g=r[s+3];if(a===0)return t[e+0]=o,t[e+1]=l,t[e+2]=h,void(t[e+3]=c);if(a===1)return t[e+0]=d,t[e+1]=u,t[e+2]=p,void(t[e+3]=g);if(c!==g||o!==d||l!==u||h!==p){let m=1-a,f=o*d+l*u+h*p+c*g,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let S=Math.sqrt(y),R=Math.atan2(S,f*v);m=Math.sin(m*R)/S,a=Math.sin(a*R)/S}let _=a*v;if(o=o*m+d*_,l=l*m+u*_,h=h*m+p*_,c=c*m+g*_,m===1-a){let S=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=S,l*=S,h*=S,c*=S}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,i,r,s){let a=n[i],o=n[i+1],l=n[i+2],h=n[i+3],c=r[s],d=r[s+1],u=r[s+2],p=r[s+3];return t[e]=a*p+h*c+o*u-l*d,t[e+1]=o*p+h*d+l*c-a*u,t[e+2]=l*p+h*u+a*d-o*c,t[e+3]=h*p-a*c-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:r,_order:s}=t,a=Math.cos,o=Math.sin,l=a(n/2),h=a(i/2),c=a(r/2),d=o(n/2),u=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10],d=n+a+c;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(h-o)*u,this._y=(r-l)*u,this._z=(s-i)*u}else if(n>a&&n>c){let u=2*Math.sqrt(1+n-a-c);this._w=(h-o)/u,this._x=0.25*u,this._y=(i+s)/u,this._z=(r+l)/u}else if(a>c){let u=2*Math.sqrt(1+a-n-c);this._w=(r-l)/u,this._x=(i+s)/u,this._y=0.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-n-a);this._w=(s-i)/u,this._x=(r+l)/u,this._y=(o+h)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<0.00000001?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:r,_w:s}=t,a=e._x,o=e._y,l=e._z,h=e._w;return this._x=n*h+s*a+i*l-r*o,this._y=i*h+s*o+r*a-n*l,this._z=r*h+s*l+n*o-i*a,this._w=s*h-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,s=this._w,a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;let o=1-a*a;if(o<=Number.EPSILON){let u=1-e;return this._w=u*s+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,a),c=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=s*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=2*(s*i-a*n),h=2*(a*e-r*i),c=2*(r*n-s*e);return this.x=e+o*l+s*c-a*h,this.y=n+o*h+a*l-r*c,this.z=i+o*c+r*h-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:r}=t,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=2*Math.random()-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ml=new T,_u=new xe;class Ut{constructor(t,e,n,i,r,s,a,o,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,o,l)}set(t,e,n,i,r,s,a,o,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=o,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],h=n[4],c=n[7],d=n[2],u=n[5],p=n[8],g=i[0],m=i[3],f=i[6],v=i[1],y=i[4],_=i[7],S=i[2],R=i[5],A=i[8];return r[0]=s*g+a*v+o*S,r[3]=s*m+a*y+o*R,r[6]=s*f+a*_+o*A,r[1]=l*g+h*v+c*S,r[4]=l*m+h*y+c*R,r[7]=l*f+h*_+c*A,r[2]=d*g+u*v+p*S,r[5]=d*m+u*y+p*R,r[8]=d*f+u*_+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8];return e*s*h-e*a*l-n*r*h+n*a*o+i*r*l-i*s*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8],c=h*s-a*l,d=a*o-h*r,u=l*r-s*o,p=e*c+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=c*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*s)*g,t[3]=d*g,t[4]=(h*e-i*o)*g,t[5]=(i*r-a*e)*g,t[6]=u*g,t[7]=(n*o-l*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){let o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gl.makeScale(t,e)),this}rotate(t){return this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var gl=new Ut;function Gh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ir(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function np(){let t=Ir("canvas");return t.style.display="block",t}var vu={};function Xi(t){t in vu||(vu[t]=!0,console.warn(t))}function ip(t,e,n){return new Promise(function(i,r){setTimeout(function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}},n)})}var yu=new Ut().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Mu=new Ut().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function cm(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a?(this.spaces[s].transfer==="srgb"&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Lr(r.r),r.g=Lr(r.g),r.b=Lr(r.b)),r):r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?"linear":this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:yu,fromXYZ:Mu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:yu,fromXYZ:Mu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var kt=cm();function Hn(t){return t<0.04045?0.0773993808*t:Math.pow(0.9478672986*t+0.0521327014,2.4)}function Lr(t){return t<0.0031308?12.92*t:1.055*Math.pow(t,0.41666)-0.055}var dr;class kh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{dr===void 0&&(dr=Ir("canvas")),dr.width=t.width,dr.height=t.height;let i=dr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=dr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=255*Hn(r[s]/255);return n.putImageData(i,0,0),e}if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(255*Hn(e[n]/255)):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var um=0;class Is{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=en(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(_l(i[s].image)):r.push(_l(i[s]))}else r=_l(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function _l(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dm=0,vl=new T;class he extends jn{constructor(t=he.DEFAULT_IMAGE,e=he.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=he.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=en(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n:console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`)}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}he.DEFAULT_IMAGE=null,he.DEFAULT_MAPPING=300,he.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<0.0001?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,s=0.01,a=0.1,o=t.elements,l=o[0],h=o[4],c=o[8],d=o[1],u=o[5],p=o[9],g=o[2],m=o[6],f=o[10];if(Math.abs(h-d)<0.01&&Math.abs(c-g)<0.01&&Math.abs(p-m)<0.01){if(Math.abs(h+d)<0.1&&Math.abs(c+g)<0.1&&Math.abs(p+m)<0.1&&Math.abs(l+u+f-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(u+1)/2,S=(f+1)/2,R=(h+d)/4,A=(c+g)/4,I=(p+m)/4;return y>_&&y>S?y<0.01?(n=0,i=0.707106781,r=0.707106781):(n=Math.sqrt(y),i=R/n,r=A/n):_>S?_<0.01?(n=0.707106781,i=0,r=0.707106781):(i=Math.sqrt(_),n=R/i,r=I/i):S<0.01?(n=0.707106781,i=0.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=I/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(c-g)*(c-g)+(d-h)*(d-h));return Math.abs(v)<0.001&&(v=1),this.x=(m-p)/v,this.y=(c-g)/v,this.z=(d-h)/v,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this.w=Nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this.w=Nt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wh extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new he(i);this.textures=[];let s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Wh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class so extends he{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xh extends he{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pe{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,cn):cn.fromBufferAttribute(r,s),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}let i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),ia.subVectors(this.max,as),pr.subVectors(t.a,as),fr.subVectors(t.b,as),mr.subVectors(t.c,as),li.subVectors(fr,pr),hi.subVectors(mr,fr),Vi.subVectors(pr,mr);let e=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Vi.z,Vi.y,li.z,0,-li.x,hi.z,0,-hi.x,Vi.z,0,-Vi.x,-li.y,li.x,0,-hi.y,hi.x,0,-Vi.y,Vi.x,0];return!!yl(e,pr,fr,mr,ia)&&(e=[1,0,0,0,1,0,0,0,1],!!yl(e,pr,fr,mr,ia)&&(ra.crossVectors(li,hi),e=[ra.x,ra.y,ra.z],yl(e,pr,fr,mr,ia)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=0.5*this.getSize(cn).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Nn=[new T,new T,new T,new T,new T,new T,new T,new T],cn=new T,na=new Pe,pr=new T,fr=new T,mr=new T,li=new T,hi=new T,Vi=new T,as=new T,ia=new T,ra=new T,Hi=new T;function yl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Hi.fromArray(t,s);let o=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=e.dot(Hi),h=n.dot(Hi),c=i.dot(Hi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var pm=new Pe,os=new T,Ml=new T;class Ge{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);let e=os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=0.5*(n-this.radius);this.center.addScaledVector(os,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Ml)),this.expandByPoint(os.copy(t.center).sub(Ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Dn=new T,Sl=new T,sa=new T,ci=new T,xl=new T,aa=new T,Tl=new T;class Hr{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sl.copy(t).add(e).multiplyScalar(0.5),sa.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Sl);let r=0.5*t.distanceTo(e),s=-this.direction.dot(sa),a=ci.dot(this.direction),o=-ci.dot(sa),l=ci.lengthSq(),h=Math.abs(1-s*s),c,d,u,p;if(h>0)if(c=s*o-a,d=s*a-o,p=r*h,c>=0)if(d>=-p)if(d<=p){let g=1/h;c*=g,d*=g,u=c*(c+s*d+2*a)+d*(s*c+d+2*o)+l}else d=r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;else d=-r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-s*r+a)),d=c>0?-r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(c=Math.max(0,-(s*r+a)),d=c>0?r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l);else d=s>0?-r:r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Sl).addScaledVector(sa,d),u}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);let n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(i>r)return null;let s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return!(t.radius<0)&&this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,s=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,s=(t.min.y-d.y)*h),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),c>=0?(a=(t.min.z-d.z)*c,o=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,o=(t.min.z-d.z)*c),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,r){xl.subVectors(e,t),aa.subVectors(n,t),Tl.crossVectors(xl,aa);let s,a=this.direction.dot(Tl);if(a>0){if(i)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}ci.subVectors(this.origin,t);let o=s*this.direction.dot(aa.crossVectors(ci,aa));if(o<0)return null;let l=s*this.direction.dot(xl.cross(ci));if(l<0)return null;if(o+l>a)return null;let h=-s*ci.dot(Tl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(t,e,n,i,r,s,a,o,l,h,c,d,u,p,g,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,o,l,h,c,d,u,p,g,m)}set(t,e,n,i,r,s,a,o,l,h,c,d,u,p,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=h,f[10]=c,f[14]=d,f[3]=u,f[7]=p,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/gr.setFromMatrixColumn(t,0).length(),r=1/gr.setFromMatrixColumn(t,1).length(),s=1/gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),h=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let d=s*h,u=s*c,p=a*h,g=a*c;e[0]=o*h,e[4]=-o*c,e[8]=l,e[1]=u+p*l,e[5]=d-g*l,e[9]=-a*o,e[2]=g-d*l,e[6]=p+u*l,e[10]=s*o}else if(t.order==="YXZ"){let d=o*h,u=o*c,p=l*h,g=l*c;e[0]=d+g*a,e[4]=p*a-u,e[8]=s*l,e[1]=s*c,e[5]=s*h,e[9]=-a,e[2]=u*a-p,e[6]=g+d*a,e[10]=s*o}else if(t.order==="ZXY"){let d=o*h,u=o*c,p=l*h,g=l*c;e[0]=d-g*a,e[4]=-s*c,e[8]=p+u*a,e[1]=u+p*a,e[5]=s*h,e[9]=g-d*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(t.order==="ZYX"){let d=s*h,u=s*c,p=a*h,g=a*c;e[0]=o*h,e[4]=p*l-u,e[8]=d*l+g,e[1]=o*c,e[5]=g*l+d,e[9]=u*l-p,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(t.order==="YZX"){let d=s*o,u=s*l,p=a*o,g=a*l;e[0]=o*h,e[4]=g-d*c,e[8]=p*c+u,e[1]=c,e[5]=s*h,e[9]=-a*h,e[2]=-l*h,e[6]=u*c+p,e[10]=d-g*c}else if(t.order==="XZY"){let d=s*o,u=s*l,p=a*o,g=a*l;e[0]=o*h,e[4]=-c,e[8]=l*h,e[1]=d*c+g,e[5]=s*h,e[9]=u*c-p,e[2]=p*c-u,e[6]=a*h,e[10]=g*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fm,t,mm)}lookAt(t,e,n){let i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),ui.crossVectors(n,We),ui.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=0.0001:We.z+=0.0001,We.normalize(),ui.crossVectors(n,We)),ui.normalize(),oa.crossVectors(We,ui),i[0]=ui.x,i[4]=oa.x,i[8]=We.x,i[1]=ui.y,i[5]=oa.y,i[9]=We.y,i[2]=ui.z,i[6]=oa.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],h=n[1],c=n[5],d=n[9],u=n[13],p=n[2],g=n[6],m=n[10],f=n[14],v=n[3],y=n[7],_=n[11],S=n[15],R=i[0],A=i[4],I=i[8],V=i[12],U=i[1],F=i[5],k=i[9],W=i[13],Y=i[2],H=i[6],J=i[10],K=i[14],et=i[3],nt=i[7],dt=i[11],yt=i[15];return r[0]=s*R+a*U+o*Y+l*et,r[4]=s*A+a*F+o*H+l*nt,r[8]=s*I+a*k+o*J+l*dt,r[12]=s*V+a*W+o*K+l*yt,r[1]=h*R+c*U+d*Y+u*et,r[5]=h*A+c*F+d*H+u*nt,r[9]=h*I+c*k+d*J+u*dt,r[13]=h*V+c*W+d*K+u*yt,r[2]=p*R+g*U+m*Y+f*et,r[6]=p*A+g*F+m*H+f*nt,r[10]=p*I+g*k+m*J+f*dt,r[14]=p*V+g*W+m*K+f*yt,r[3]=v*R+y*U+_*Y+S*et,r[7]=v*A+y*F+_*H+S*nt,r[11]=v*I+y*k+_*J+S*dt,r[15]=v*V+y*W+_*K+S*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],h=t[2],c=t[6],d=t[10],u=t[14];return t[3]*(+r*o*c-i*l*c-r*a*d+n*l*d+i*a*u-n*o*u)+t[7]*(+e*o*u-e*l*d+r*s*d-i*s*u+i*l*h-r*o*h)+t[11]*(+e*l*c-e*a*u-r*s*c+n*s*u+r*a*h-n*l*h)+t[15]*(-i*a*h-e*o*c+e*a*d+i*s*c-n*s*d+n*o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8],c=t[9],d=t[10],u=t[11],p=t[12],g=t[13],m=t[14],f=t[15],v=c*m*l-g*d*l+g*o*u-a*m*u-c*o*f+a*d*f,y=p*d*l-h*m*l-p*o*u+s*m*u+h*o*f-s*d*f,_=h*g*l-p*c*l+p*a*u-s*g*u-h*a*f+s*c*f,S=p*c*o-h*g*o-p*a*d+s*g*d+h*a*m-s*c*m,R=e*v+n*y+i*_+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return t[0]=v*A,t[1]=(g*d*r-c*m*r-g*i*u+n*m*u+c*i*f-n*d*f)*A,t[2]=(a*m*r-g*o*r+g*i*l-n*m*l-a*i*f+n*o*f)*A,t[3]=(c*o*r-a*d*r-c*i*l+n*d*l+a*i*u-n*o*u)*A,t[4]=y*A,t[5]=(h*m*r-p*d*r+p*i*u-e*m*u-h*i*f+e*d*f)*A,t[6]=(p*o*r-s*m*r-p*i*l+e*m*l+s*i*f-e*o*f)*A,t[7]=(s*d*r-h*o*r+h*i*l-e*d*l-s*i*u+e*o*u)*A,t[8]=_*A,t[9]=(p*c*r-h*g*r-p*n*u+e*g*u+h*n*f-e*c*f)*A,t[10]=(s*g*r-p*a*r+p*n*l-e*g*l-s*n*f+e*a*f)*A,t[11]=(h*a*r-s*c*r-h*n*l+e*c*l+s*n*u-e*a*u)*A,t[12]=S*A,t[13]=(h*g*i-p*c*i+p*n*d-e*g*d-h*n*m+e*c*m)*A,t[14]=(p*a*i-s*g*i-p*n*o+e*g*o+s*n*m-e*a*m)*A,t[15]=(s*c*i-h*a*i+h*n*o-e*c*o-s*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,h=r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,h*a+n,h*o-i*s,0,l*o-i*a,h*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,h=s+s,c=a+a,d=r*l,u=r*h,p=r*c,g=s*h,m=s*c,f=a*c,v=o*l,y=o*h,_=o*c,S=n.x,R=n.y,A=n.z;return i[0]=(1-(g+f))*S,i[1]=(u+_)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(u-_)*R,i[5]=(1-(d+f))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(p+y)*A,i[9]=(m-v)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=gr.set(i[0],i[1],i[2]).length(),s=gr.set(i[4],i[5],i[6]).length(),a=gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);let o=1/r,l=1/s,h=1/a;return un.elements[0]*=o,un.elements[1]*=o,un.elements[2]*=o,un.elements[4]*=l,un.elements[5]*=l,un.elements[6]*=l,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,e.setFromRotationMatrix(un),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=2000,o=!1){let l=this.elements,h=2*r/(e-t),c=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,g;if(o)p=r/(s-r),g=s*r/(s-r);else if(a===2000)p=-(s+r)/(s-r),g=-2*s*r/(s-r);else{if(a!==2001)throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);p=-s/(s-r),g=-s*r/(s-r)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=2000,o=!1){let l=this.elements,h=2/(e-t),c=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,g;if(o)p=1/(s-r),g=s/(s-r);else if(a===2000)p=-2/(s-r),g=-(s+r)/(s-r);else{if(a!==2001)throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);p=-1/(s-r),g=-r/(s-r)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=c,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var gr=new T,un=new Et,fm=new T(0,0,0),mm=new T(1,1,1),ui=new T,oa=new T,We=new T,Su=new Et,xu=new xe;class nn{constructor(t=0,e=0,n=0,i=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],h=i[9],c=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<0.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<0.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<0.9999999?(this._y=Math.atan2(-c,u),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Nt(c,-1,1)),Math.abs(c)<0.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Nt(o,-1,1)),Math.abs(o)<0.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Nt(s,-1,1)),Math.abs(s)<0.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xu.setFromEuler(this),this.setFromQuaternion(xu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class ao{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return!!(this.mask&1<<t)}}var gm=0,Tu=new T,_r=new xe,Fn=new Et,la=new T,ls=new T,_m=new T,vm=new xe,Eu=new T(1,0,0),wu=new T(0,1,0),bu=new T(0,0,1),Au={type:"added"},ym={type:"removed"},vr={type:"childadded",child:null},El={type:"childremoved",child:null};class te extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=en(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=te.DEFAULT_UP.clone();let t=new T,e=new nn,n=new xe,i=new T(1,1,1);e._onChange(function(){n.setFromEuler(e,!1)}),n._onChange(function(){e.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ut}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _r.setFromAxisAngle(t,e),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,e){return _r.setFromAxisAngle(t,e),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(Eu,t)}rotateY(t){return this.rotateOnAxis(wu,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return Tu.copy(t).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eu,t)}translateY(t){return this.translateOnAxis(wu,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?la.copy(t):la.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ls,la,this.up):Fn.lookAt(la,ls,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),_r.setFromRotationMatrix(Fn),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ym),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,_m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,vm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,h=o.length;l<h;l++){let c=o[l];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(t.materials,this.material[o]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(r(t.animations,o))}}if(e){let a=s(t.geometries),o=s(t.materials),l=s(t.textures),h=s(t.images),c=s(t.shapes),d=s(t.skeletons),u=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function s(a){let o=[];for(let l in a){let h=a[l];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}te.DEFAULT_UP=new T(0,1,0),te.DEFAULT_MATRIX_AUTO_UPDATE=!0,te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new T,On=new T,wl=new T,Bn=new T,yr=new T,Mr=new T,Ru=new T,bl=new T,Al=new T,Rl=new T,Cl=new Zt,Ll=new Zt,Il=new Zt;class Ve{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){dn.subVectors(i,e),On.subVectors(n,e),wl.subVectors(t,e);let s=dn.dot(dn),a=dn.dot(On),o=dn.dot(wl),l=On.dot(On),h=On.dot(wl),c=s*l-a*a;if(c===0)return r.set(0,0,0),null;let d=1/c,u=(l*o-a*h)*d,p=(s*h-a*o)*d;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)!==null&&(Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1)}static getInterpolation(t,e,n,i,r,s,a,o){return this.getBarycoord(t,e,n,i,Bn)===null?(o.x=0,o.y=0,("z"in o)&&(o.z=0),("w"in o)&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Bn.x),o.addScaledVector(s,Bn.y),o.addScaledVector(a,Bn.z),o)}static getInterpolatedAttribute(t,e,n,i,r,s){return Cl.setScalar(0),Ll.setScalar(0),Il.setScalar(0),Cl.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,n),Il.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(Cl,r.x),s.addScaledVector(Ll,r.y),s.addScaledVector(Il,r.z),s}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),On.subVectors(t,e),dn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),0.5*dn.cross(On).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,s,a;yr.subVectors(i,n),Mr.subVectors(r,n),bl.subVectors(t,n);let o=yr.dot(bl),l=Mr.dot(bl);if(o<=0&&l<=0)return e.copy(n);Al.subVectors(t,i);let h=yr.dot(Al),c=Mr.dot(Al);if(h>=0&&c<=h)return e.copy(i);let d=o*c-h*l;if(d<=0&&o>=0&&h<=0)return s=o/(o-h),e.copy(n).addScaledVector(yr,s);Rl.subVectors(t,r);let u=yr.dot(Rl),p=Mr.dot(Rl);if(p>=0&&u<=p)return e.copy(r);let g=u*l-o*p;if(g<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Mr,a);let m=h*p-u*c;if(m<=0&&c-h>=0&&u-p>=0)return Ru.subVectors(r,i),a=(c-h)/(c-h+(u-p)),e.copy(i).addScaledVector(Ru,a);let f=1/(m+g+d);return s=g*f,a=d*f,e.copy(n).addScaledVector(yr,s).addScaledVector(Mr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ha={h:0,s:0,l:0};function Pl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<0.16666666666666666?t+6*(e-t)*n:n<0.5?e:n<0.6666666666666666?t+6*(e-t)*(0.6666666666666666-n):t}class mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=kt.workingColorSpace){if(t=Zl(t,1),e=Nt(e,0,1),n=Nt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=0.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Pl(s,r,t+0.3333333333333333),this.g=Pl(s,r,t),this.b=Pl(s,r,t-0.3333333333333333)}return kt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=rp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return kt.workingToColorSpace(Ie.copy(this),t),65536*Math.round(Nt(255*Ie.r,0,255))+256*Math.round(Nt(255*Ie.g,0,255))+Math.round(Nt(255*Ie.b,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.workingToColorSpace(Ie.copy(this),e);let{r:n,g:i,b:r}=Ie,s=Math.max(n,i,r),a=Math.min(n,i,r),o,l,h=(a+s)/2;if(a===s)o=0,l=0;else{let c=s-a;switch(l=h<=0.5?c/(s+a):c/(2-s-a),s){case n:o=(i-r)/c+(i<r?6:0);break;case i:o=(r-n)/c+2;break;case r:o=(n-i)/c+4}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t="srgb"){kt.workingToColorSpace(Ie.copy(this),t);let{r:e,g:n,b:i}=Ie;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(ha);let n=vs(di.h,ha.h,e),i=vs(di.s,ha.s,e),r=vs(di.l,ha.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ie=new mt;mt.NAMES=rp;var Mm=0;class Be extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=en(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(r){let s=[];for(let a in r){let o=r[a];delete o.metadata,s.push(o)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class we extends Be{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var R_=Sm();function Sm(){let t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,r[l]=-h-1,r[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,r[l]=13,r[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var fe=new T,ca=new rt,xm=0;class ae{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ca.fromBufferAttribute(this,e),ca.applyMatrix3(t),this.setXY(e,ca.x,ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class oo extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lo extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class wt extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Tm=0,tn=new Et,Ul=new te,Sr=new T,Xe=new Pe,hs=new Pe,Se=new T;class Jt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=en(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new((Gh(t))?lo:oo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ge);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let a=e[r];hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Xe.min,hs.min),Xe.expandByPoint(Se),Se.addVectors(Xe.max,hs.max),Xe.expandByPoint(Se)):(Xe.expandByPoint(hs.min),Xe.expandByPoint(hs.max))}Xe.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,s=e.length;r<s;r++){let a=e[r],o=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),o&&(Sr.fromBufferAttribute(t,l),Se.add(Sr)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let{position:n,normal:i,uv:r}=e;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),a=[],o=[];for(let I=0;I<n.count;I++)a[I]=new T,o[I]=new T;let l=new T,h=new T,c=new T,d=new rt,u=new rt,p=new rt,g=new T,m=new T;function f(I,V,U){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,V),c.fromBufferAttribute(n,U),d.fromBufferAttribute(r,I),u.fromBufferAttribute(r,V),p.fromBufferAttribute(r,U),h.sub(l),c.sub(l),u.sub(d),p.sub(d);let F=1/(u.x*p.y-p.x*u.y);isFinite(F)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(c,-u.y).multiplyScalar(F),m.copy(c).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(F),a[I].add(g),a[V].add(g),a[U].add(g),o[I].add(m),o[V].add(m),o[U].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,V=v.length;I<V;++I){let U=v[I],F=U.start;for(let k=F,W=F+U.count;k<W;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let y=new T,_=new T,S=new T,R=new T;function A(I){S.fromBufferAttribute(i,I),R.copy(S);let V=a[I];y.copy(V),y.sub(S.multiplyScalar(S.dot(V))).normalize(),_.crossVectors(R,V);let U=_.dot(o[I])<0?-1:1;s.setXYZW(I,y.x,y.y,y.z,U)}for(let I=0,V=v.length;I<V;++I){let U=v[I],F=U.start;for(let k=F,W=F+U.count;k<W;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,s=new T,a=new T,o=new T,l=new T,h=new T,c=new T;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),h.subVectors(s,r),c.subVectors(i,r),h.cross(c),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),o.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),h.subVectors(s,r),c.subVectors(i,r),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:h,normalized:c}=a,d=new l.constructor(o.length*h),u=0,p=0;for(let g=0,m=o.length;g<m;g++){u=a.isInterleavedBufferAttribute?o[g]*a.data.stride+a.offset:o[g]*h;for(let f=0;f<h;f++)d[p++]=l[u++]}return new ae(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Jt,n=this.index.array,i=this.attributes;for(let a in i){let o=t(i[a],n);e.setAttribute(a,o)}let r=this.morphAttributes;for(let a in r){let o=[],l=r[a];for(let h=0,c=l.length;h<c;h++){let d=t(l[h],n);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,o=s.length;a<o;a++){let l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},r=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],h=[];for(let c=0,d=l.length;c<d;c++){let u=l[c];h.push(u.toJSON(t.data))}h.length>0&&(i[o]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],c=r[l];for(let d=0,u=c.length;d<u;d++)h.push(c[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let l=0,h=s.length;l<h;l++){let c=s[l];this.addGroup(c.start,c.count,c.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Cu=new Et,Gi=new Hr,ua=new Ge,Lu=new T,da=new T,pa=new T,fa=new T,Nl=new T,ma=new T,Iu=new T,ga=new T;class ce extends te{constructor(t=new Jt,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ma.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let h=a[o],c=r[o];h!==0&&(Nl.fromBufferAttribute(c,t),s?ma.addScaledVector(Nl,h):ma.addScaledVector(Nl.sub(e),h))}e.add(ma)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),ua.containsPoint(Gi.origin)===!1){if(Gi.intersectSphere(ua,Lu)===null)return;if(Gi.origin.distanceToSquared(Lu)>(t.far-t.near)**2)return}Cu.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Cu),n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(t,e,Gi)}}_computeIntersections(t,e,n){let i,r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let m=d[p],f=s[m.materialIndex];for(let v=Math.max(m.start,u.start),y=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));v<y;v+=3)i=_a(this,f,t,n,l,h,c,a.getX(v),a.getX(v+1),a.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}else for(let p=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);p<g;p+=3)i=_a(this,s,t,n,l,h,c,a.getX(p),a.getX(p+1),a.getX(p+2)),i&&(i.faceIndex=Math.floor(p/3),e.push(i));else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let m=d[p],f=s[m.materialIndex];for(let v=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));v<y;v+=3)i=_a(this,f,t,n,l,h,c,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}else for(let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);p<g;p+=3)i=_a(this,s,t,n,l,h,c,p,p+1,p+2),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}function _a(t,e,n,i,r,s,a,o,l,h){t.getVertexPosition(o,da),t.getVertexPosition(l,pa),t.getVertexPosition(h,fa);let c=function(d,u,p,g,m,f,v,y){let _;if(_=u.side===1?g.intersectTriangle(v,f,m,!0,y):g.intersectTriangle(m,f,v,u.side===0,y),_===null)return null;ga.copy(y),ga.applyMatrix4(d.matrixWorld);let S=p.ray.origin.distanceTo(ga);return S<p.near||S>p.far?null:{distance:S,point:ga.clone(),object:d}}(t,e,n,i,da,pa,fa,Iu);if(c){let d=new T;Ve.getBarycoord(Iu,da,pa,fa,d),r&&(c.uv=Ve.getInterpolatedAttribute(r,o,l,h,d,new rt)),s&&(c.uv1=Ve.getInterpolatedAttribute(s,o,l,h,d,new rt)),a&&(c.normal=Ve.getInterpolatedAttribute(a,o,l,h,d,new T),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new T,materialIndex:0};Ve.getNormal(da,pa,fa,u.normal),c.face=u,c.barycoord=d}return c}class $n extends Jt{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let o=[],l=[],h=[],c=[],d=0,u=0;function p(g,m,f,v,y,_,S,R,A,I,V){let U=_/A,F=S/I,k=_/2,W=S/2,Y=R/2,H=A+1,J=I+1,K=0,et=0,nt=new T;for(let dt=0;dt<J;dt++){let yt=dt*F-W;for(let tt=0;tt<H;tt++){let Z=tt*U-k;nt[g]=Z*v,nt[m]=yt*y,nt[f]=Y,l.push(nt.x,nt.y,nt.z),nt[g]=0,nt[m]=0,nt[f]=R>0?1:-1,h.push(nt.x,nt.y,nt.z),c.push(tt/A),c.push(1-dt/I),K+=1}}for(let dt=0;dt<I;dt++)for(let yt=0;yt<A;yt++){let tt=d+yt+H*dt,Z=d+yt+H*(dt+1),gt=d+(yt+1)+H*(dt+1),pt=d+(yt+1)+H*dt;o.push(tt,Z,pt),o.push(Z,gt,pt),et+=6}a.addGroup(u,et,V),u+=et,d+=K}p("z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new wt(l,3)),this.setAttribute("normal",new wt(h,3)),this.setAttribute("uv",new wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ue(t){let e={};for(let n=0;n<t.length;n++){let i=Ki(t[n]);for(let r in i)e[r]=i[r]}return e}function qh(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}var sp={clone:Ki,merge:Ue};class En extends Be{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=function(e){let n=[];for(let i=0;i<e.length;i++)n.push(e[i].clone());return n}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ps extends te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var pi=new T,Pu=new rt,Uu=new rt;class ge extends Ps{constructor(t=50,e=1,n=0.1,i=2000){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=2*Wi*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(0.5*Cr*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*Wi*Math.atan(Math.tan(0.5*Cr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Uu),e.subVectors(Uu,Pu)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(0.5*Cr*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-0.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=s;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var xr=-90;class Yh extends te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ge(xr,1,t,e);i.layers=this.layers,this.add(i);let r=new ge(xr,1,t,e);r.layers=this.layers,this.add(r);let s=new ge(xr,1,t,e);s.layers=this.layers,this.add(s);let a=new ge(xr,1,t,e);a.layers=this.layers,this.add(a);let o=new ge(xr,1,t,e);o.layers=this.layers,this.add(o);let l=new ge(xr,1,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else{if(t!==2001)throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1)}for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,s,a,o,l,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(c,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ho extends he{constructor(t=[],e=301,n,i,r,s,a,o,l,h){super(t,e,n,i,r,s,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ho(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $n(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;let s=new ce(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Yh(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}class qe extends te{constructor(){super(),this.isGroup=!0,this.type="Group"}}var Em={type:"move"};class Us{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=0.02,p=0.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class co extends te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gr{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=en()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=en()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var Fe=new T;class gi{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kr extends Be{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Tr,cs=new T,Er=new T,wr=new T,br=new rt,us=new rt,ap=new Et,va=new T,ds=new T,ya=new T,Nu=new rt,Dl=new rt,Du=new rt;class Ns extends te{constructor(t=new kr){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new Jt;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new Gr(e,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new gi(n,3,0,!1)),Tr.setAttribute("uv",new gi(n,2,3,!1))}this.geometry=Tr,this.material=t,this.center=new rt(0.5,0.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Er.setFromMatrixScale(this.matrixWorld),ap.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Er.multiplyScalar(-wr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let s=this.center;Ma(va.set(-0.5,-0.5,0),wr,s,Er,i,r),Ma(ds.set(0.5,-0.5,0),wr,s,Er,i,r),Ma(ya.set(0.5,0.5,0),wr,s,Er,i,r),Nu.set(0,0),Dl.set(1,0),Du.set(1,1);let a=t.ray.intersectTriangle(va,ds,ya,!1,cs);if(a===null&&(Ma(ds.set(-0.5,0.5,0),wr,s,Er,i,r),Dl.set(0,1),a=t.ray.intersectTriangle(va,ya,ds,!1,cs),a===null))return;let o=t.ray.origin.distanceTo(cs);o<t.near||o>t.far||e.push({distance:o,point:cs.clone(),uv:Ve.getInterpolation(cs,va,ds,ya,Nu,Dl,Du,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ma(t,e,n,i,r,s){br.subVectors(t,n).addScalar(0.5).multiply(i),r!==void 0?(us.x=s*br.x-r*br.y,us.y=r*br.x+s*br.y):us.copy(br),t.copy(e),t.x+=us.x,t.y+=us.y,t.applyMatrix4(ap)}var C_=new T,L_=new T;var Fu=new T,Ou=new Zt,Bu=new Zt,wm=new T,zu=new Et,Sa=new T,Fl=new Ge,Vu=new Et,Ol=new Hr;class uo extends ce{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Et,this.bindMatrixInverse=new Et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pe),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ge),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(i),t.ray.intersectsSphere(Fl)!==!1&&(Vu.copy(i).invert(),Ol.copy(t.ray).applyMatrix4(Vu),this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1||this._computeIntersections(t,e,Ol)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Zt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Ou.fromBufferAttribute(i.attributes.skinIndex,t),Bu.fromBufferAttribute(i.attributes.skinWeight,t),Fu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=Bu.getComponent(r);if(s!==0){let a=Ou.getComponent(r);zu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(wm.copy(Fu).applyMatrix4(zu),s)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ds extends te{constructor(){super(),this.isBone=!0,this.type="Bone"}}class po extends he{constructor(t=null,e=1,n=1,i,r,s,a,o,l=1003,h=1003,c,d){super(null,s,a,o,l,h,i,r,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var Hu=new Et,bm=new Et;class Fs{constructor(t=[],e=[]){this.uuid=en(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Et)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Et;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){let a=t[r]?t[r].matrixWorld:bm;Hu.multiplyMatrices(a,e[r]),Hu.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fs(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=4*Math.ceil(t/4),t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new po(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Ds),this.bones.push(s),this.boneInverses.push(new Et().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.bones.push(s.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}}class qi extends ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var Ar=new Et,Gu=new Et,xa=[],ku=new Pe,Am=new Et,ps=new ce,fs=new Ge;class fo extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qi(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Am)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),ku.copy(t.boundingBox).applyMatrix4(Ar),this.boundingBox.union(ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ge),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ar),fs.copy(t.boundingSphere).applyMatrix4(Ar),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=t*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=i[r+s]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ar),Gu.multiplyMatrices(n,Ar),ps.matrixWorld=Gu,ps.raycast(t,xa);for(let s=0,a=xa.length;s<a;s++){let o=xa[s];o.instanceId=r,o.object=this,e.push(o)}xa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qi(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new po(new Float32Array(i*this.count),i,this.count,1028,1015));let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<n.length;l++)s+=n[l];let a=this.geometry.morphTargetsRelative?1:1-s,o=i*t;r[o]=a,r.set(n,o+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}var Bl=new T,Rm=new T,Cm=new Ut;class Vn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Bl.subVectors(n,e).cross(Rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cm.getNormalMatrix(t),i=this.coplanarPoint(Bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var ki=new Ge,Lm=new rt(0.5,0.5),Ta=new T;class $i{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,r=new Vn,s=new Vn){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],h=r[4],c=r[5],d=r[6],u=r[7],p=r[8],g=r[9],m=r[10],f=r[11],v=r[12],y=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,u-h,f-p,S-v).normalize(),i[1].setComponents(l+s,u+h,f+p,S+v).normalize(),i[2].setComponents(l+a,u+c,f+g,S+y).normalize(),i[3].setComponents(l-a,u-c,f-g,S-y).normalize(),n)i[4].setComponents(o,d,m,_).normalize(),i[5].setComponents(l-o,u-d,f-m,S-_).normalize();else if(i[4].setComponents(l-o,u-d,f-m,S-_).normalize(),e===2000)i[5].setComponents(l+o,u+d,f+m,S+_).normalize();else{if(e!==2001)throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(o,d,m,_).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);let e=Lm.distanceTo(t.center);return ki.radius=0.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ta.x=i.normal.x>0?t.max.x:t.min.x,Ta.y=i.normal.y>0?t.max.y:t.min.y,Ta.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var _n=new Et,vn=new $i;class mo{constructor(){this.coordinateSystem=2000}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(_n.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),vn.setFromProjectionMatrix(_n,i.coordinateSystem,i.reversedDepth),vn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(_n.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),vn.setFromProjectionMatrix(_n,i.coordinateSystem,i.reversedDepth),vn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(_n.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),vn.setFromProjectionMatrix(_n,i.coordinateSystem,i.reversedDepth),vn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(_n.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),vn.setFromProjectionMatrix(_n,i.coordinateSystem,i.reversedDepth),vn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(_n.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),vn.setFromProjectionMatrix(_n,i.coordinateSystem,i.reversedDepth),vn.containsPoint(t))return!0}return!1}clone(){return new mo}}class op{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];s.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}var I_=new Et,P_=new mt(1,1,1),U_=new $i,N_=new mo,D_=new Pe,F_=new Ge,O_=new T,B_=new T,z_=new T,V_=new op,H_=new ce;class Qi extends Be{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var Da=new T,Fa=new T,Wu=new Et,ms=new Hr,Ea=new Ge,zl=new T,Xu=new T;class Wr extends te{constructor(t=new Jt,e=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Da.fromBufferAttribute(e,i-1),Fa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Da.distanceTo(Fa);t.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;Wu.copy(i).invert(),ms.copy(t.ray).applyMatrix4(Wu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,h=n.index,c=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let p=d,g=u-1;p<g;p+=l){let m=h.getX(p),f=h.getX(p+1),v=wa(this,t,ms,o,m,f,p);v&&e.push(v)}if(this.isLineLoop){let p=h.getX(u-1),g=h.getX(d),m=wa(this,t,ms,o,p,g,u-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let p=d,g=u-1;p<g;p+=l){let m=wa(this,t,ms,o,p,p+1,p);m&&e.push(m)}if(this.isLineLoop){let p=wa(this,t,ms,o,u-1,d,u-1);p&&e.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function wa(t,e,n,i,r,s,a){let o=t.geometry.attributes.position;if(Da.fromBufferAttribute(o,r),Fa.fromBufferAttribute(o,s),n.distanceSqToSegment(Da,Fa,zl,Xu)>i)return;zl.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(zl);return l<e.near||l>e.far?void 0:{distance:l,point:Xu.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var qu=new T,Yu=new T;class Xr extends Wr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)qu.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qu.distanceTo(Yu);t.setAttribute("lineDistance",new wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class go extends Wr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Mi extends Be{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Zu=new Et,Jl=new Hr,ba=new Ge,Aa=new T;class tr extends te{constructor(t=new Jt,e=new Mi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=r,t.ray.intersectsSphere(ba)===!1)return;Zu.copy(i).invert(),Jl.copy(t.ray).applyMatrix4(Zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null)for(let c=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);c<d;c++){let u=l.getX(c);Aa.fromBufferAttribute(h,u),Ju(Aa,u,o,i,t,e,this)}else for(let c=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);c<d;c++)Aa.fromBufferAttribute(h,c),Ju(Aa,c,o,i,t,e,this)}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function Ju(t,e,n,i,r,s,a){let o=Jl.distanceSqToPoint(t);if(o<n){let l=new T;Jl.closestPointToPoint(t,l),l.applyMatrix4(i);let h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class wn extends he{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends he{constructor(t,e,n=1014,i,r,s,a=1003,o=1003,l,h=1026,c=1){if(h!==1026&&h!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:c},i,r,s,a,o,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vo extends Jt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],a=[],o=[],l=[],h=e/2,c=Math.PI/2*t,d=e,u=2*c+d,p=2*n+r,g=i+1,m=new T,f=new T;for(let v=0;v<=p;v++){let y=0,_=0,S=0,R=0;if(v<=n){let V=v/n,U=V*Math.PI/2;_=-h-t*Math.cos(U),S=t*Math.sin(U),R=-t*Math.cos(U),y=V*c}else if(v<=n+r){let V=(v-n)/r;_=V*e-h,S=t,R=0,y=c+V*d}else{let V=(v-n-r)/n,U=V*Math.PI/2;_=h+t*Math.sin(U),S=t*Math.cos(U),R=t*Math.sin(U),y=c+d+V*c}let A=Math.max(0,Math.min(1,y/u)),I=0;v===0?I=0.5/i:v===p&&(I=-0.5/i);for(let V=0;V<=i;V++){let U=V/i,F=U*Math.PI*2,k=Math.sin(F),W=Math.cos(F);f.x=-S*W,f.y=_,f.z=S*k,a.push(f.x,f.y,f.z),m.set(-S*W,R,S*k),m.normalize(),o.push(m.x,m.y,m.z),l.push(U+I,A)}if(v>0){let V=(v-1)*g;for(let U=0;U<i;U++){let F=V+U,k=V+U+1,W=v*g+U,Y=v*g+U+1;s.push(F,k,W),s.push(k,Y,W)}}}this.setIndex(s),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(o,3)),this.setAttribute("uv",new wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class yo extends Jt{constructor(t=1,e=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],s=[],a=[],o=[],l=new T,h=new rt;s.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let c=0,d=3;c<=e;c++,d+=3){let u=n+c/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(s[d]/t+1)/2,h.y=(s[d+1]/t+1)/2,o.push(h.x,h.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(a,3)),this.setAttribute("uv",new wt(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Os extends Jt{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],c=[],d=[],u=[],p=0,g=[],m=n/2,f=0;function v(y){let _=p,S=new rt,R=new T,A=0,I=y===!0?t:e,V=y===!0?1:-1;for(let F=1;F<=i;F++)c.push(0,m*V,0),d.push(0,V,0),u.push(0.5,0.5),p++;let U=p;for(let F=0;F<=i;F++){let k=F/i*o+a,W=Math.cos(k),Y=Math.sin(k);R.x=I*Y,R.y=m*V,R.z=I*W,c.push(R.x,R.y,R.z),d.push(0,V,0),S.x=0.5*W+0.5,S.y=0.5*Y*V+0.5,u.push(S.x,S.y),p++}for(let F=0;F<i;F++){let k=_+F,W=U+F;y===!0?h.push(W,W+1,k):h.push(W+1,W,k),A+=3}l.addGroup(f,A,y===!0?1:2),f+=A}(function(){let y=new T,_=new T,S=0,R=(e-t)/n;for(let A=0;A<=r;A++){let I=[],V=A/r,U=V*(e-t)+t;for(let F=0;F<=i;F++){let k=F/i,W=k*o+a,Y=Math.sin(W),H=Math.cos(W);_.x=U*Y,_.y=-V*n+m,_.z=U*H,c.push(_.x,_.y,_.z),y.set(Y,R,H).normalize(),d.push(y.x,y.y,y.z),u.push(k,1-V),I.push(p++)}g.push(I)}for(let A=0;A<i;A++)for(let I=0;I<r;I++){let V=g[I][A],U=g[I+1][A],F=g[I+1][A+1],k=g[I][A+1];(t>0||I!==0)&&(h.push(V,U,k),S+=3),(e>0||I!==r-1)&&(h.push(U,F,k),S+=3)}l.addGroup(f,S,0),f+=S})(),s===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mo extends Os{constructor(t=1,e=1,n=32,i=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(t){return new Mo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Si extends Jt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],s=[];function a(u,p,g,m){let f=m+1,v=[];for(let y=0;y<=f;y++){v[y]=[];let _=u.clone().lerp(g,y/f),S=p.clone().lerp(g,y/f),R=f-y;for(let A=0;A<=R;A++)v[y][A]=A===0&&y===f?_:_.clone().lerp(S,A/R)}for(let y=0;y<f;y++)for(let _=0;_<2*(f-y)-1;_++){let S=Math.floor(_/2);_%2==0?(o(v[y][S+1]),o(v[y+1][S]),o(v[y][S])):(o(v[y][S+1]),o(v[y+1][S+1]),o(v[y+1][S]))}}function o(u){r.push(u.x,u.y,u.z)}function l(u,p){let g=3*u;p.x=t[g+0],p.y=t[g+1],p.z=t[g+2]}function h(u,p,g,m){m<0&&u.x===1&&(s[p]=u.x-1),g.x===0&&g.z===0&&(s[p]=m/2/Math.PI+0.5)}function c(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let p=new T,g=new T,m=new T;for(let f=0;f<e.length;f+=3)l(e[f+0],p),l(e[f+1],g),l(e[f+2],m),a(p,g,m,u)})(i),function(u){let p=new T;for(let g=0;g<r.length;g+=3)p.x=r[g+0],p.y=r[g+1],p.z=r[g+2],p.normalize().multiplyScalar(u),r[g+0]=p.x,r[g+1]=p.y,r[g+2]=p.z}(n),function(){let u=new T;for(let p=0;p<r.length;p+=3){u.x=r[p+0],u.y=r[p+1],u.z=r[p+2];let g=c(u)/2/Math.PI+0.5,m=d(u)/Math.PI+0.5;s.push(g,1-m)}(function(){let p=new T,g=new T,m=new T,f=new T,v=new rt,y=new rt,_=new rt;for(let S=0,R=0;S<r.length;S+=9,R+=6){p.set(r[S+0],r[S+1],r[S+2]),g.set(r[S+3],r[S+4],r[S+5]),m.set(r[S+6],r[S+7],r[S+8]),v.set(s[R+0],s[R+1]),y.set(s[R+2],s[R+3]),_.set(s[R+4],s[R+5]),f.copy(p).add(g).add(m).divideScalar(3);let A=c(f);h(v,R+0,p,A),h(y,R+2,g,A),h(_,R+4,m,A)}})(),function(){for(let p=0;p<s.length;p+=6){let g=s[p+0],m=s[p+2],f=s[p+4],v=Math.max(g,m,f),y=Math.min(g,m,f);v>0.9&&y<0.1&&(g<0.2&&(s[p+0]+=1),m<0.2&&(s[p+2]+=1),f<0.2&&(s[p+4]+=1))}}()}(),this.setAttribute("position",new wt(r,3)),this.setAttribute("normal",new wt(r.slice(),3)),this.setAttribute("uv",new wt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.vertices,t.indices,t.radius,t.details)}}class So extends Si{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new So(t.radius,t.detail)}}var Ra=new T,Ca=new T,Vl=new T,La=new Ve;class Jh extends Jt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Cr*e),s=t.getIndex(),a=t.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],h=["a","b","c"],c=[,,,],d={},u=[];for(let p=0;p<o;p+=3){s?(l[0]=s.getX(p),l[1]=s.getX(p+1),l[2]=s.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:g,b:m,c:f}=La;if(g.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),La.getNormal(Vl),c[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,c[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,c[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,c[0]!==c[1]&&c[1]!==c[2]&&c[2]!==c[0])for(let v=0;v<3;v++){let y=(v+1)%3,_=c[v],S=c[y],R=La[h[v]],A=La[h[y]],I=`${_}_${S}`,V=`${S}_${_}`;V in d&&d[V]?(Vl.dot(d[V].normal)<=r&&(u.push(R.x,R.y,R.z),u.push(A.x,A.y,A.z)),d[V]=null):(I in d)||(d[I]={index0:l[v],index1:l[y],normal:Vl.clone()})}}for(let p in d)if(d[p]){let{index0:g,index1:m}=d[p];Ra.fromBufferAttribute(a,g),Ca.fromBufferAttribute(a,m),u.push(Ra.x,Ra.y,Ra.z),u.push(Ca.x,Ca.y,Ca.z)}this.setAttribute("position",new wt(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,s;s=e||t*n[r-1];let a,o=0,l=r-1;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),a=n[i]-s,a<0)o=i+1;else{if(!(a>0)){l=i;break}l=i-1}if(i=l,n[i]===s)return i/(r-1);let h=n[i];return(i+(s-h)/(n[i+1]-h))/(r-1)}getTangent(t,e){let i=t-0.0001,r=t+0.0001;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new rt:new T);return o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new T,i=[],r=[],s=[],a=new T,o=new Et;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new T)}r[0]=new T,s[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),c<=l&&(l=c,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Nt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(a,p))}s[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Nt(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(o.makeRotationAxis(i[p],u*p)),s[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bs extends rn{constructor(t=0,e=0,n=1,i=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new rt){let n=e,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),this.aClockwise!==!0||s||(r===i?r=-i:r-=i);let a=this.aStartAngle+t*r,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jh extends Bs{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Kh(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){r(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,d){let u=(a-s)/h-(o-s)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,p*=c,r(a,o,u,p)},calc:function(s){let a=s*s;return t+e*s+n*a+i*(a*s)}}}var Ia=new T,Hl=new Kh,Gl=new Kh,kl=new Kh;class $h extends rn{constructor(t=[],e=!1,n="centripetal",i=0.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,a,o,l=Math.floor(s),h=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1),this.closed||l>0?a=i[(l-1)%r]:(Ia.subVectors(i[0],i[1]).add(i[0]),a=Ia);let c=i[l%r],d=i[(l+1)%r];if(this.closed||l+2<r?o=i[(l+2)%r]:(Ia.subVectors(i[r-1],i[r-2]).add(i[r-1]),o=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,p=Math.pow(a.distanceToSquared(c),u),g=Math.pow(c.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(o),u);g<0.0001&&(g=1),p<0.0001&&(p=g),m<0.0001&&(m=g),Hl.initNonuniformCatmullRom(a.x,c.x,d.x,o.x,p,g,m),Gl.initNonuniformCatmullRom(a.y,c.y,d.y,o.y,p,g,m),kl.initNonuniformCatmullRom(a.z,c.z,d.z,o.z,p,g,m)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(a.x,c.x,d.x,o.x,this.tension),Gl.initCatmullRom(a.y,c.y,d.y,o.y,this.tension),kl.initCatmullRom(a.z,c.z,d.z,o.z,this.tension));return n.set(Hl.calc(h),Gl.calc(h),kl.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ju(t,e,n,i,r){let s=0.5*(i-e),a=0.5*(r-n),o=t*t;return(2*n-2*i+s+a)*(t*o)+(-3*n+3*i-2*s-a)*o+s*t+n}function ys(t,e,n,i){return function(r,s){let a=1-r;return a*a*s}(t,e)+function(r,s){return 2*(1-r)*r*s}(t,n)+function(r,s){return r*r*s}(t,i)}function Ms(t,e,n,i,r){return function(s,a){let o=1-s;return o*o*o*a}(t,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(t,n)+function(s,a){return 3*(1-s)*s*s*a}(t,i)+function(s,a){return s*s*s*a}(t,r)}class xo extends rn{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Ms(t,i.x,r.x,s.x,a.x),Ms(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qh extends rn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Ms(t,i.x,r.x,s.x,a.x),Ms(t,i.y,r.y,s.y,a.y),Ms(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class To extends rn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tc extends rn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eo extends rn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(ys(t,i.x,r.x,s.x),ys(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wo extends rn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(ys(t,i.x,r.x,s.x),ys(t,i.y,r.y,s.y),ys(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bo extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,o=i[s===0?s:s-1],l=i[s],h=i[s>i.length-2?i.length-1:s+1],c=i[s>i.length-3?i.length-1:s+2];return n.set(ju(a,o.x,l.x,h.x,c.x),ju(a,o.y,l.y,h.y,c.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var Oa=Object.freeze({__proto__:null,ArcCurve:jh,CatmullRomCurve3:$h,CubicBezierCurve:xo,CubicBezierCurve3:Qh,EllipseCurve:Bs,LineCurve:To,LineCurve3:tc,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:wo,SplineCurve:bo});class ec extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let s=i[r]-n,a=this.curves[r],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],a=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let l=0;l<o.length;l++){let h=o[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Oa[i.type]().fromJSON(i))}return this}}class Ba extends ec{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new To(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Eo(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){let a=new xo(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,s,a,o),this}absellipse(t,e,n,i,r,s,a,o){let l=new Bs(t,e,n,i,r,s,a,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ao extends Ba{constructor(t){super(t),this.uuid=en(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ba().fromJSON(i))}return this}}function Im(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=Ku(t,0,r,n,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,h;if(i&&(s=function(c,d,u,p){let g=[];for(let m=0,f=d.length;m<f;m++){let v=Ku(c,d[m]*p,m<f-1?d[m+1]*p:c.length,p,!1);v===v.next&&(v.steiner=!0),g.push(zm(v))}g.sort(Fm);for(let m=0;m<g.length;m++)u=Om(g[m],u);return u}(t,e,s,n)),t.length>80*n){o=1/0,l=1/0;let c=-1/0,d=-1/0;for(let u=n;u<r;u+=n){let p=t[u],g=t[u+1];p<o&&(o=p),g<l&&(l=g),p>c&&(c=p),g>d&&(d=g)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return Ss(s,a,n,o,l,h,0),a}function Ku(t,e,n,i,r){let s;if(r===function(a,o,l,h){let c=0;for(let d=o,u=l-h;d<l;d+=h)c+=(a[u]-a[d])*(a[d+1]+a[u+1]),u=d;return c}(t,e,n,i)>0)for(let a=e;a<n;a+=i)s=$u(a/i|0,t[a],t[a+1],s);else for(let a=n-i;a>=e;a-=i)s=$u(a/i|0,t[a],t[a+1],s);return s&&Pr(s,s.next)&&(Ts(s),s=s.next),s}function Yi(t,e){if(!t)return t;e||(e=t);let n,i=t;do if(n=!1,i.steiner||!Pr(i,i.next)&&se(i.prev,i,i.next)!==0)i=i.next;else{if(Ts(i),i=e=i.prev,i===i.next)break;n=!0}while(n||i!==e);return e}function Ss(t,e,n,i,r,s,a){if(!t)return;!a&&s&&function(l,h,c,d){let u=l;do u.z===0&&(u.z=jl(u.x,u.y,h,c,d)),u.prevZ=u.prev,u.nextZ=u.next,u=u.next;while(u!==l);u.prevZ.nextZ=null,u.prevZ=null,function(p){let g,m=1;do{let f,v=p;p=null;let y=null;for(g=0;v;){g++;let _=v,S=0;for(let A=0;A<m&&(S++,_=_.nextZ,_);A++);let R=m;for(;S>0||R>0&&_;)S!==0&&(R===0||!_||v.z<=_.z)?(f=v,v=v.nextZ,S--):(f=_,_=_.nextZ,R--),y?y.nextZ=f:p=f,f.prevZ=y,y=f;v=_}y.nextZ=null,m*=2}while(g>1)}(u)}(t,i,r,s);let o=t;for(;t.prev!==t.next;){let{prev:l,next:h}=t;if(s?Um(t,i,r,s):Pm(t))e.push(l.i,t.i,h.i),Ts(t),t=h.next,o=h.next;else if((t=h)===o){a?a===1?Ss(t=Nm(Yi(t),e),e,n,i,r,s,2):a===2&&Dm(t,e,n,i,r,s):Ss(Yi(t),e,n,i,r,s,1);break}}}function Pm(t){let e=t.prev,n=t,i=t.next;if(se(e,n,i)>=0)return!1;let r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,h=i.y,c=Math.min(r,s,a),d=Math.min(o,l,h),u=Math.max(r,s,a),p=Math.max(o,l,h),g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=p&&_s(r,o,s,l,a,h,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Um(t,e,n,i){let r=t.prev,s=t,a=t.next;if(se(r,s,a)>=0)return!1;let o=r.x,l=s.x,h=a.x,c=r.y,d=s.y,u=a.y,p=Math.min(o,l,h),g=Math.min(c,d,u),m=Math.max(o,l,h),f=Math.max(c,d,u),v=jl(p,g,e,n,i),y=jl(m,f,e,n,i),_=t.prevZ,S=t.nextZ;for(;_&&_.z>=v&&S&&S.z<=y;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=f&&_!==r&&_!==a&&_s(o,c,l,d,h,u,_.x,_.y)&&se(_.prev,_,_.next)>=0)return!1;if(_=_.prevZ,S.x>=p&&S.x<=m&&S.y>=g&&S.y<=f&&S!==r&&S!==a&&_s(o,c,l,d,h,u,S.x,S.y)&&se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}for(;_&&_.z>=v;){if(_.x>=p&&_.x<=m&&_.y>=g&&_.y<=f&&_!==r&&_!==a&&_s(o,c,l,d,h,u,_.x,_.y)&&se(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=y;){if(S.x>=p&&S.x<=m&&S.y>=g&&S.y<=f&&S!==r&&S!==a&&_s(o,c,l,d,h,u,S.x,S.y)&&se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Nm(t,e){let n=t;do{let i=n.prev,r=n.next.next;!Pr(i,r)&&hp(i,n,n.next,r)&&xs(i,r)&&xs(r,i)&&(e.push(i.i,n.i,r.i),Ts(n),Ts(n.next),n=t=r),n=n.next}while(n!==t);return Yi(n)}function Dm(t,e,n,i,r,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vm(a,o)){let l=cp(a,o);return a=Yi(a,a.next),l=Yi(l,l.next),Ss(a,e,n,i,r,s,0),void Ss(l,e,n,i,r,s,0)}o=o.next}a=a.next}while(a!==t)}function Fm(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0))n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x);return n}function Om(t,e){let n=function(r,s){let a=s,o=r.x,l=r.y,h,c=-1/0;if(Pr(r,a))return a;do{if(Pr(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>c&&(c=m,h=a.x<a.next.x?a:a.next,m===o))return h}a=a.next}while(a!==s);if(!h)return null;let d=h,u=h.x,p=h.y,g=1/0;a=h;do{if(o>=a.x&&a.x>=u&&o!==a.x&&lp(l<p?o:c,l,u,p,l<p?c:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);xs(a,r)&&(m<g||m===g&&(a.x>h.x||a.x===h.x&&Bm(h,a)))&&(h=a,g=m)}a=a.next}while(a!==d);return h}(t,e);if(!n)return e;let i=cp(n,t);return Yi(i,i.next),Yi(n,n.next)}function Bm(t,e){return se(t.prev,t,e.prev)<0&&se(e.next,t,t.next)<0}function jl(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function zm(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function lp(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function _s(t,e,n,i,r,s,a,o){return!(t===a&&e===o)&&lp(t,e,n,i,r,s,a,o)}function Vm(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(n,i){let r=n;do{if(r.i!==n.i&&r.next.i!==n.i&&r.i!==i.i&&r.next.i!==i.i&&hp(r,r.next,n,i))return!0;r=r.next}while(r!==n);return!1}(t,e)&&(xs(t,e)&&xs(e,t)&&function(n,i){let r=n,s=!1,a=(n.x+i.x)/2,o=(n.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==n);return s}(t,e)&&(se(t.prev,t,e.prev)||se(t,e.prev,e))||Pr(t,e)&&se(t.prev,t,t.next)>0&&se(e.prev,e,e.next)>0)}function se(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Pr(t,e){return t.x===e.x&&t.y===e.y}function hp(t,e,n,i){let r=Ua(se(t,e,n)),s=Ua(se(t,e,i)),a=Ua(se(n,i,t)),o=Ua(se(n,i,e));return r!==s&&a!==o||(!(r!==0||!Pa(t,n,e))||(!(s!==0||!Pa(t,i,e))||(!(a!==0||!Pa(n,t,i))||!(o!==0||!Pa(n,e,i)))))}function Pa(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ua(t){return t>0?1:t<0?-1:0}function xs(t,e){return se(t.prev,t,t.next)<0?se(t,e,t.next)>=0&&se(t,t.prev,e)>=0:se(t,e,t.prev)<0||se(t,t.next,e)<0}function cp(t,e){let n=Kl(t.i,t.x,t.y),i=Kl(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function $u(t,e,n,i){let r=Kl(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ts(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Kl(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}class up{static triangulate(t,e,n=2){return Im(t,e,n)}}class yn{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return 0.5*n}static isClockWise(t){return yn.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Qu(t),td(n,t);let s=t.length;e.forEach(Qu);for(let o=0;o<e.length;o++)i.push(s),s+=e[o].length,td(n,e[o]);let a=up.triangulate(n,i);for(let o=0;o<a.length;o+=3)r.push(a.slice(o,o+3));return r}}function Qu(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function td(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Ro extends Jt{constructor(t=new Ao([new rt(0.5,0.5),new rt(-0.5,0.5),new rt(-0.5,-0.5),new rt(0.5,-0.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,o=t.length;a<o;a++)s(t[a]);function s(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,c=e.depth!==void 0?e.depth:1,d=e.bevelEnabled===void 0||e.bevelEnabled,u=e.bevelThickness!==void 0?e.bevelThickness:0.2,p=e.bevelSize!==void 0?e.bevelSize:u-0.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Hm,y,_,S,R,A,I=!1;f&&(y=f.getSpacedPoints(h),I=!0,d=!1,_=f.computeFrenetFrames(h,!1),S=new T,R=new T,A=new T),d||(m=0,u=0,p=0,g=0);let V=a.extractPoints(l),U=V.shape,F=V.holes;if(!yn.isClockWise(U)){U=U.reverse();for(let C=0,O=F.length;C<O;C++){let M=F[C];yn.isClockWise(M)&&(F[C]=M.reverse())}}function k(C){let M=C[0];for(let L=1;L<=C.length;L++){let E=L%C.length,P=C[E],D=P.x-M.x,B=P.y-M.y,z=D*D+B*B,st=Math.max(Math.abs(P.x),Math.abs(P.y),Math.abs(M.x),Math.abs(M.y));z<=0.000000000000000000010000000000000001*st*st?(C.splice(E,1),L--):M=P}}k(U),F.forEach(k);let W=F.length,Y=U;for(let C=0;C<W;C++){let O=F[C];U=U.concat(O)}function H(C,O,M){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(O,M)}let J=U.length;function K(C,O,M){let L,E,P,D=C.x-O.x,B=C.y-O.y,z=M.x-C.x,st=M.y-C.y,lt=D*D+B*B,j=D*st-B*z;if(Math.abs(j)>Number.EPSILON){let it=Math.sqrt(lt),_t=Math.sqrt(z*z+st*st),Tt=O.x-B/it,Pt=O.y+D/it,Bt=((M.x-st/_t-Tt)*st-(M.y+z/_t-Pt)*z)/(D*st-B*z);L=Tt+D*Bt-C.x,E=Pt+B*Bt-C.y;let Ct=L*L+E*E;if(Ct<=2)return new rt(L,E);P=Math.sqrt(Ct/2)}else{let it=!1;D>Number.EPSILON?z>Number.EPSILON&&(it=!0):D<-Number.EPSILON?z<-Number.EPSILON&&(it=!0):Math.sign(B)===Math.sign(st)&&(it=!0),it?(L=-B,E=D,P=Math.sqrt(lt)):(L=D,E=B,P=Math.sqrt(lt/2))}return new rt(L/P,E/P)}let et=[];for(let C=0,O=Y.length,M=O-1,L=C+1;C<O;C++,M++,L++)M===O&&(M=0),L===O&&(L=0),et[C]=K(Y[C],Y[M],Y[L]);let nt=[],dt,yt,tt=et.concat();for(let C=0,O=W;C<O;C++){let M=F[C];dt=[];for(let L=0,E=M.length,P=E-1,D=L+1;L<E;L++,P++,D++)P===E&&(P=0),D===E&&(D=0),dt[L]=K(M[L],M[P],M[D]);nt.push(dt),tt=tt.concat(dt)}if(m===0)yt=yn.triangulateShape(Y,F);else{let C=[],O=[];for(let M=0;M<m;M++){let L=M/m,E=u*Math.cos(L*Math.PI/2),P=p*Math.sin(L*Math.PI/2)+g;for(let D=0,B=Y.length;D<B;D++){let z=H(Y[D],et[D],P);ct(z.x,z.y,-E),L===0&&C.push(z)}for(let D=0,B=W;D<B;D++){let z=F[D];dt=nt[D];let st=[];for(let lt=0,j=z.length;lt<j;lt++){let it=H(z[lt],dt[lt],P);ct(it.x,it.y,-E),L===0&&st.push(it)}L===0&&O.push(st)}}yt=yn.triangulateShape(C,O)}let Z=yt.length,gt=p+g;for(let C=0;C<J;C++){let O=d?H(U[C],tt[C],gt):U[C];I?(R.copy(_.normals[0]).multiplyScalar(O.x),S.copy(_.binormals[0]).multiplyScalar(O.y),A.copy(y[0]).add(R).add(S),ct(A.x,A.y,A.z)):ct(O.x,O.y,0)}for(let C=1;C<=h;C++)for(let O=0;O<J;O++){let M=d?H(U[O],tt[O],gt):U[O];I?(R.copy(_.normals[C]).multiplyScalar(M.x),S.copy(_.binormals[C]).multiplyScalar(M.y),A.copy(y[C]).add(R).add(S),ct(A.x,A.y,A.z)):ct(M.x,M.y,c/h*C)}for(let C=m-1;C>=0;C--){let O=C/m,M=u*Math.cos(O*Math.PI/2),L=p*Math.sin(O*Math.PI/2)+g;for(let E=0,P=Y.length;E<P;E++){let D=H(Y[E],et[E],L);ct(D.x,D.y,c+M)}for(let E=0,P=F.length;E<P;E++){let D=F[E];dt=nt[E];for(let B=0,z=D.length;B<z;B++){let st=H(D[B],dt[B],L);I?ct(st.x,st.y+y[h-1].y,y[h-1].x+M):ct(st.x,st.y,c+M)}}}function pt(C,O){let M=C.length;for(;--M>=0;){let L=M,E=M-1;E<0&&(E=C.length-1);for(let P=0,D=h+2*m;P<D;P++){let B=J*P,z=J*(P+1);bt(O+L+B,O+E+B,O+E+z,O+L+z)}}}function ct(C,O,M){o.push(C),o.push(O),o.push(M)}function ot(C,O,M){b(C),b(O),b(M);let L=i.length/3,E=v.generateTopUV(n,i,L-3,L-2,L-1);x(E[0]),x(E[1]),x(E[2])}function bt(C,O,M,L){b(C),b(O),b(L),b(O),b(M),b(L);let E=i.length/3,P=v.generateSideWallUV(n,i,E-6,E-3,E-2,E-1);x(P[0]),x(P[1]),x(P[3]),x(P[1]),x(P[2]),x(P[3])}function b(C){i.push(o[3*C+0]),i.push(o[3*C+1]),i.push(o[3*C+2])}function x(C){r.push(C.x),r.push(C.y)}(function(){let C=i.length/3;if(d){let O=0,M=J*O;for(let L=0;L<Z;L++){let E=yt[L];ot(E[2]+M,E[1]+M,E[0]+M)}O=h+2*m,M=J*O;for(let L=0;L<Z;L++){let E=yt[L];ot(E[0]+M,E[1]+M,E[2]+M)}}else{for(let O=0;O<Z;O++){let M=yt[O];ot(M[2],M[1],M[0])}for(let O=0;O<Z;O++){let M=yt[O];ot(M[0]+J*h,M[1]+J*h,M[2]+J*h)}}n.addGroup(C,i.length/3-C,0)})(),function(){let C=i.length/3,O=0;pt(Y,O),O+=Y.length;for(let M=0,L=F.length;M<L;M++){let E=F[M];pt(E,O),O+=E.length}n.addGroup(C,i.length/3-C,1)}()}this.setAttribute("position",new wt(i,3)),this.setAttribute("uv",new wt(r,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,n,i){if(i.shapes=[],Array.isArray(e))for(let r=0,s=e.length;r<s;r++){let a=e[r];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Oa[i.type]().fromJSON(i)),new Ro(n,t.options)}}var Hm={generateTopUV:function(t,e,n,i,r){let s=e[3*n],a=e[3*n+1],o=e[3*i],l=e[3*i+1],h=e[3*r],c=e[3*r+1];return[new rt(s,a),new rt(o,l),new rt(h,c)]},generateSideWallUV:function(t,e,n,i,r,s){let a=e[3*n],o=e[3*n+1],l=e[3*n+2],h=e[3*i],c=e[3*i+1],d=e[3*i+2],u=e[3*r],p=e[3*r+1],g=e[3*r+2],m=e[3*s],f=e[3*s+1],v=e[3*s+2];return Math.abs(o-c)<Math.abs(a-h)?[new rt(a,1-l),new rt(h,1-d),new rt(u,1-g),new rt(m,1-v)]:[new rt(o,1-l),new rt(c,1-d),new rt(p,1-g),new rt(f,1-v)]}};class Co extends Si{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Co(t.radius,t.detail)}}class Lo extends Jt{constructor(t=[new rt(0,-0.5),new rt(0.5,0),new rt(0,0.5)],e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Nt(i,0,2*Math.PI);let r=[],s=[],a=[],o=[],l=[],h=1/e,c=new T,d=new rt,u=new T,p=new T,g=new T,m=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,u.x=1*f,u.y=-m,u.z=0*f,g.copy(u),u.normalize(),o.push(u.x,u.y,u.z);break;case t.length-1:o.push(g.x,g.y,g.z);break;default:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,u.x=1*f,u.y=-m,u.z=0*f,p.copy(u),u.x+=g.x,u.y+=g.y,u.z+=g.z,u.normalize(),o.push(u.x,u.y,u.z),g.copy(p)}for(let v=0;v<=e;v++){let y=n+v*h*i,_=Math.sin(y),S=Math.cos(y);for(let R=0;R<=t.length-1;R++){c.x=t[R].x*_,c.y=t[R].y,c.z=t[R].x*S,s.push(c.x,c.y,c.z),d.x=v/e,d.y=R/(t.length-1),a.push(d.x,d.y);let A=o[3*R+0]*_,I=o[3*R+1],V=o[3*R+0]*S;l.push(A,I,V)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let _=y+v*t.length,S=_,R=_+t.length,A=_+t.length+1,I=_+1;r.push(S,R,I),r.push(A,I,R)}this.setIndex(r),this.setAttribute("position",new wt(s,3)),this.setAttribute("uv",new wt(a,2)),this.setAttribute("normal",new wt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.points,t.segments,t.phiStart,t.phiLength)}}class Io extends Si{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Io(t.radius,t.detail)}}class Qn extends Jt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,h=o+1,c=t/a,d=e/o,u=[],p=[],g=[],m=[];for(let f=0;f<h;f++){let v=f*d-s;for(let y=0;y<l;y++){let _=y*c-r;p.push(_,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-f/o)}}for(let f=0;f<o;f++)for(let v=0;v<a;v++){let y=v+l*f,_=v+l*(f+1),S=v+1+l*(f+1),R=v+1+l*f;u.push(y,_,R),u.push(_,S,R)}this.setIndex(u),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Po extends Jt{constructor(t=0.5,e=1,n=32,i=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n);let a=[],o=[],l=[],h=[],c=t,d=(e-t)/(i=Math.max(1,i)),u=new T,p=new rt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let f=r+m/n*s;u.x=c*Math.cos(f),u.y=c*Math.sin(f),o.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}c+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let f=0;f<n;f++){let v=f+m,y=v,_=v+n+1,S=v+n+2,R=v+1;a.push(y,_,R),a.push(_,S,R)}}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Uo extends Jt{constructor(t=new Ao([new rt(0,0.5),new rt(-0.5,-0.5),new rt(0.5,-0.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],s=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,o,h),a+=o,o=0;function l(h){let c=i.length/3,d=h.extractPoints(e),u=d.shape,p=d.holes;yn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,f=p.length;m<f;m++){let v=p[m];yn.isClockWise(v)===!0&&(p[m]=v.reverse())}let g=yn.triangulateShape(u,p);for(let m=0,f=p.length;m<f;m++){let v=p[m];u=u.concat(v)}for(let m=0,f=u.length;m<f;m++){let v=u[m];i.push(v.x,v.y,0),r.push(0,0,1),s.push(v.x,v.y)}for(let m=0,f=g.length;m<f;m++){let v=g[m],y=v[0]+c,_=v[1]+c,S=v[2]+c;n.push(y,_,S),o+=3}}this.setIndex(n),this.setAttribute("position",new wt(i,3)),this.setAttribute("normal",new wt(r,3)),this.setAttribute("uv",new wt(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n}(this.parameters.shapes,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let s=e[t.shapes[i]];n.push(s)}return new Uo(n,t.curveSegments)}}class No extends Jt{constructor(t=1,e=32,n=16,i=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(s+a,Math.PI),l=0,h=[],c=new T,d=new T,u=[],p=[],g=[],m=[];for(let f=0;f<=n;f++){let v=[],y=f/n,_=0;f===0&&s===0?_=0.5/e:f===n&&o===Math.PI&&(_=-0.5/e);for(let S=0;S<=e;S++){let R=S/e;c.x=-t*Math.cos(i+R*r)*Math.sin(s+y*a),c.y=t*Math.cos(s+y*a),c.z=t*Math.sin(i+R*r)*Math.sin(s+y*a),p.push(c.x,c.y,c.z),d.copy(c).normalize(),g.push(d.x,d.y,d.z),m.push(R+_,1-y),v.push(l++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let y=h[f][v+1],_=h[f][v],S=h[f+1][v],R=h[f+1][v+1];(f!==0||s>0)&&u.push(y,_,R),(f!==n-1||o<Math.PI)&&u.push(_,S,R)}this.setIndex(u),this.setAttribute("position",new wt(p,3)),this.setAttribute("normal",new wt(g,3)),this.setAttribute("uv",new wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Do extends Si{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Do(t.radius,t.detail)}}class Fo extends Jt{constructor(t=1,e=0.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let s=[],a=[],o=[],l=[],h=new T,c=new T,d=new T;for(let u=0;u<=n;u++)for(let p=0;p<=i;p++){let g=p/i*r,m=u/n*Math.PI*2;c.x=(t+e*Math.cos(m))*Math.cos(g),c.y=(t+e*Math.cos(m))*Math.sin(g),c.z=e*Math.sin(m),a.push(c.x,c.y,c.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(c,h).normalize(),o.push(d.x,d.y,d.z),l.push(p/i),l.push(u/n)}for(let u=1;u<=n;u++)for(let p=1;p<=i;p++){let g=(i+1)*u+p-1,m=(i+1)*(u-1)+p-1,f=(i+1)*(u-1)+p,v=(i+1)*u+p;s.push(g,m,v),s.push(m,f,v)}this.setIndex(s),this.setAttribute("position",new wt(a,3)),this.setAttribute("normal",new wt(o,3)),this.setAttribute("uv",new wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Oo extends Jt{constructor(t=1,e=0.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],h=[],c=new T,d=new T,u=new T,p=new T,g=new T,m=new T,f=new T;for(let y=0;y<=n;++y){let _=y/n*r*Math.PI*2;v(_,r,s,t,u),v(_+0.01,r,s,t,p),m.subVectors(p,u),f.addVectors(p,u),g.crossVectors(m,f),f.crossVectors(g,m),g.normalize(),f.normalize();for(let S=0;S<=i;++S){let R=S/i*Math.PI*2,A=-e*Math.cos(R),I=e*Math.sin(R);c.x=u.x+(A*f.x+I*g.x),c.y=u.y+(A*f.y+I*g.y),c.z=u.z+(A*f.z+I*g.z),o.push(c.x,c.y,c.z),d.subVectors(c,u).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(S/i)}}for(let y=1;y<=n;y++)for(let _=1;_<=i;_++){let S=(i+1)*(y-1)+(_-1),R=(i+1)*y+(_-1),A=(i+1)*y+_,I=(i+1)*(y-1)+_;a.push(S,R,I),a.push(R,A,I)}function v(y,_,S,R,A){let I=Math.cos(y),V=Math.sin(y),U=S/_*y,F=Math.cos(U);A.x=R*(2+F)*0.5*I,A.y=R*(2+F)*V*0.5,A.z=R*Math.sin(U)*0.5}this.setIndex(a),this.setAttribute("position",new wt(o,3)),this.setAttribute("normal",new wt(l,3)),this.setAttribute("uv",new wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Bo extends Jt{constructor(t=new wo(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let s=t.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new T,o=new T,l=new rt,h=new T,c=[],d=[],u=[],p=[];function g(m){h=t.getPointAt(m/e,h);let f=s.normals[m],v=s.binormals[m];for(let y=0;y<=i;y++){let _=y/i*Math.PI*2,S=Math.sin(_),R=-Math.cos(_);o.x=R*f.x+S*v.x,o.y=R*f.y+S*v.y,o.z=R*f.z+S*v.z,o.normalize(),d.push(o.x,o.y,o.z),a.x=h.x+n*o.x,a.y=h.y+n*o.y,a.z=h.z+n*o.z,c.push(a.x,a.y,a.z)}}(function(){for(let m=0;m<e;m++)g(m);g(r===!1?e:0),function(){for(let m=0;m<=e;m++)for(let f=0;f<=i;f++)l.x=m/e,l.y=f/i,u.push(l.x,l.y)}(),function(){for(let m=1;m<=e;m++)for(let f=1;f<=i;f++){let v=(i+1)*(m-1)+(f-1),y=(i+1)*m+(f-1),_=(i+1)*m+f,S=(i+1)*(m-1)+f;p.push(v,y,S),p.push(y,_,S)}}()})(),this.setIndex(p),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Bo(new Oa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class nc extends Jt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new T,r=new T;if(t.index!==null){let s=t.attributes.position,a=t.index,o=t.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start;for(let u=d,p=d+c.count;u<p;u+=3)for(let g=0;g<3;g++){let m=a.getX(u+g),f=a.getX(u+(g+1)%3);i.fromBufferAttribute(s,m),r.fromBufferAttribute(s,f),ed(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let s=t.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){let h=3*a+l,c=3*a+(l+1)%3;i.fromBufferAttribute(s,h),r.fromBufferAttribute(s,c),ed(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new wt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ed(t,e,n){let i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)!==!0&&n.has(r)!==!0&&(n.add(i),n.add(r),!0)}var G_=Object.freeze({__proto__:null,BoxGeometry:$n,CapsuleGeometry:vo,CircleGeometry:yo,ConeGeometry:Mo,CylinderGeometry:Os,DodecahedronGeometry:So,EdgesGeometry:Jh,ExtrudeGeometry:Ro,IcosahedronGeometry:Co,LatheGeometry:Lo,OctahedronGeometry:Io,PlaneGeometry:Qn,PolyhedronGeometry:Si,RingGeometry:Po,ShapeGeometry:Uo,SphereGeometry:No,TetrahedronGeometry:Do,TorusGeometry:Fo,TorusKnotGeometry:Oo,TubeGeometry:Bo,WireframeGeometry:nc});class xi extends Be{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Je extends xi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class zo extends Be{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ic extends Be{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rc extends Be{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Na(t,e){return t&&t.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t):t}function Gm(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function km(t){let e=t.length,n=Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(function(i,r){return t[i]-t[r]}),n}function nd(t,e,n){let i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){let o=n[s]*e;for(let l=0;l!==e;++l)r[a++]=t[o+l]}return r}function dp(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),n.push(...a)),s=t[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),n.push(a)),s=t[r++];while(s!==void 0)}class Ti{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break n}break t}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class sc extends Ti{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:s=t,o=2*n-e;break;case 2402:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}let l=0.5*(n-e),h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),g=p*p,m=g*p,f=-d*m+2*d*g-d*p,v=(1+d)*m+(-1.5-2*d)*g+(-0.5+d)*p+1,y=(-1-u)*m+(1.5+u)*g+0.5*p,_=u*m-u*g;for(let S=0;S!==a;++S)r[S]=f*s[h+S]+v*s[l+S]+y*s[o+S]+_*s[c+S];return r}}class Vo extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=(n-e)/(i-e),c=1-h;for(let d=0;d!==a;++d)r[d]=s[l+d]*c+s[o+d]*h;return r}}class ac extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ye{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Na(e,this.TimeBufferType),this.values=Na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Na(t.times,Array),values:Na(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){let o=n[a];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&Gm(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,r=t.length-1,s=1;for(let a=1;a<r;++a){let o=!1,l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{let h=a*n,c=h-n,d=h+n;for(let u=0;u!==n;++u){let p=e[h+u];if(p!==e[c+u]||p!==e[d+u]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];let h=a*n,c=s*n;for(let d=0;d!==n;++d)e[c+d]=e[h+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=new this.constructor(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Ye.prototype.ValueTypeName="",Ye.prototype.TimeBufferType=Float32Array,Ye.prototype.ValueBufferType=Float32Array,Ye.prototype.DefaultInterpolation=2301;class fi extends Ye{constructor(t,e,n){super(t,e,n)}}fi.prototype.ValueTypeName="bool",fi.prototype.ValueBufferType=Array,fi.prototype.DefaultInterpolation=2300,fi.prototype.InterpolantFactoryMethodLinear=void 0,fi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ho extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}Ho.prototype.ValueTypeName="color";class Gn extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}Gn.prototype.ValueTypeName="number";class oc extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)xe.slerpFlat(r,0,s,l-a,s,l,o);return r}}class kn extends Ye{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new oc(this.times,this.values,this.getValueSize(),t)}}kn.prototype.ValueTypeName="quaternion",kn.prototype.InterpolantFactoryMethodSmooth=void 0;class mi extends Ye{constructor(t,e,n){super(t,e,n)}}mi.prototype.ValueTypeName="string",mi.prototype.ValueBufferType=Array,mi.prototype.DefaultInterpolation=2300,mi.prototype.InterpolantFactoryMethodLinear=void 0,mi.prototype.InterpolantFactoryMethodSmooth=void 0;class Wn extends Ye{constructor(t,e,n,i){super(t,e,n,i)}}Wn.prototype.ValueTypeName="vector";class Ur{constructor(t="",e=-1,n=[],i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=en(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,a=n.length;s!==a;++s)e.push(Wm(n[s]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(Ye.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,s=[];for(let a=0;a<r;a++){let o=[],l=[];o.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=km(o);o=nd(o,1,h),l=nd(l,1,h),i||o[0]!==0||(o.push(r),l.push(l[0])),s.push(new Gn(".morphTargetInfluences["+e[a].name+"]",o,l).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=t.length;a<o;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let c=h[1],d=i[c];d||(i[c]=d=[]),d.push(l)}}let s=[];for(let a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return s}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,c,d,u,p){if(d.length!==0){let g=[],m=[];dp(d,g,m,u),g.length!==0&&p.push(new h(c,g,m))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode,o=t.length||-1,l=t.hierarchy||[];for(let h=0;h<l.length;h++){let c=l[h].keys;if(c&&c.length!==0)if(c[0].morphTargets){let d={},u;for(u=0;u<c.length;u++)if(c[u].morphTargets)for(let p=0;p<c[u].morphTargets.length;p++)d[c[u].morphTargets[p]]=-1;for(let p in d){let g=[],m=[];for(let f=0;f!==c[u].morphTargets.length;++f){let v=c[u];g.push(v.time),m.push(v.morphTarget===p?1:0)}i.push(new Gn(".morphTargetInfluence["+p+"]",g,m))}o=d.length*s}else{let d=".bones["+e[h].name+"]";n(Wn,d+".position",c,"pos",i),n(kn,d+".quaternion",c,"rot",i),n(Wn,d+".scale",c,"scl",i)}}if(i.length===0)return null;return new this(r,o,i,a)}resetDuration(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){let i=this.tracks[e];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wm(t){if(t.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gn;case"vector":case"vector2":case"vector3":case"vector4":return Wn;case"color":return Ho;case"quaternion":return kn;case"bool":case"boolean":return fi;case"string":return mi}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}(t.type);if(t.times===void 0){let n=[],i=[];dp(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var Mn={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class lc{constructor(t,e,n){let i=this,r,s=!1,a=0,o=0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var pp=new lc;class ti{constructor(t){this.manager=t!==void 0?t:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var zn={};class fp extends Error{constructor(t,e){super(t),this.response=e}}class zs extends ti{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Mn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(zn[t]!==void 0)return void zn[t].push({onLoad:e,onProgress:n,onError:i});zn[t]=[],zn[t].push({onLoad:e,onProgress:n,onError:i});let s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then((l)=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=zn[t],c=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,g=0,m=new ReadableStream({start(f){(function v(){c.read().then(({done:y,value:_})=>{if(y)f.close();else{g+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:u});for(let R=0,A=h.length;R<A;R++){let I=h[R];I.onProgress&&I.onProgress(S)}f.enqueue(_),v()}},(y)=>{f.error(y)})})()}});return new Response(m)}throw new fp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((h)=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),c=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(c);return l.arrayBuffer().then((u)=>d.decode(u))}}}).then((l)=>{Mn.add(`file:${t}`,l);let h=zn[t];delete zn[t];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onLoad&&u.onLoad(l)}}).catch((l)=>{let h=zn[t];if(h===void 0)throw this.manager.itemError(t),l;delete zn[t];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onError&&u.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Rr=new WeakMap;class hc extends ti{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Mn.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let c=Rr.get(s);c===void 0&&(c=[],Rr.set(s,c)),c.push({onLoad:e,onError:i})}return s}let a=Ir("img");function o(){h(),e&&e(this);let c=Rr.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}Rr.delete(this),r.manager.itemEnd(t)}function l(c){h(),i&&i(c),Mn.remove(`image:${t}`);let d=Rr.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(c)}Rr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mn.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Go extends ti{constructor(t){super(t)}load(t,e,n,i){let r=new he,s=new hc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class qr extends te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ko extends qr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}var Wl=new Et,id=new T,rd=new T;class Wo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rd),e.updateMatrixWorld(),Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1):n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(Wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class mp extends Wo{constructor(){super(new ge(50,1,0.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=2*Wi*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Xo extends qr{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new mp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}var sd=new Et,gs=new T,Xl=new T;class gp extends Wo{constructor(){super(new ge(90,1,0.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(gs),Xl.copy(n.position),Xl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xl),n.updateMatrixWorld(),i.makeTranslation(-gs.x,-gs.y,-gs.z),sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd,n.coordinateSystem,n.reversedDepth)}}class er extends qr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gp}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Yr extends Ps{constructor(t=-1,e=1,n=1,i=-1,r=0.1,s=2000){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _p extends Wo{constructor(){super(new Yr(-5,5,5,-5,0.5,500)),this.isDirectionalLightShadow=!0}}class Ei extends qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.shadow=new _p}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wi{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}var ql=new WeakMap;class qo extends ti{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=Mn.get(`image-bitmap:${t}`);if(s!==void 0)return r.manager.itemStart(t),s.then?void s.then((l)=>{if(ql.has(s)!==!0)return e&&e(l),r.manager.itemEnd(t),l;i&&i(ql.get(s)),r.manager.itemError(t),r.manager.itemEnd(t)}):(setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s);let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Mn.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),ql.set(o,l),Mn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Mn.add(`image-bitmap:${t}`,o),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var k_=new Et,W_=new Et,X_=new Et;class cc extends ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Yo{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}var q_=new T,Y_=new xe,Z_=new T,J_=new T,j_=new T;var K_=new T,$_=new xe,Q_=new T,tv=new T;class uc{constructor(t,e,n){let i,r,s;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=e}else{s+=e;let a=e/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let o=e*this._origIndex;this._mixBufferRegion(n,i,o,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let o=e,l=e+e;o!==l;++o)if(n[o]!==n[o+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=0.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]}_slerp(t,e,n,i){xe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let s=this._workIndex*r;xe.multiplyQuaternionsFlat(t,s,t,e,t,n),xe.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){let s=1-i;for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]*s+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let s=0;s!==r;++s){let a=e+s;t[a]=t[a]+t[n+s]*i}}}var dc="\\[\\]\\.:\\/",Xm=new RegExp("["+dc+"]","g"),Yl="[^"+dc+"]",qm="[^"+dc.replace("\\.","")+"]",Ym=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Yl)+/(WCOD+)?/.source.replace("WCOD",qm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl)+"$"),Zm=["material","materials","bones","map"];class Yt{constructor(t,e,n){this.path=e,this.parsedPath=n||Yt.parseTrackName(e),this.node=Yt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Yt.Composite(t,e,n):new Yt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xm,"")}static parseTrackName(t){let e=Ym.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Zm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let a=r[s];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=Yt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n]}if(l!==void 0){if(t[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[l]}}let s=t[i];if(s===void 0){let l=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t)}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Yt.Composite=class{constructor(t,e,n){let i=n||Yt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray],Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class pc{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,s=r.length,a=Array(s),o={endingStart:2400,endingEnd:2400};for(let l=0;l!==s;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,s=r/i,a=i/r;t.warp(1,s,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,s=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let{parameterPositions:o,sampleValues:l}=a;return o[0]=r,o[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return void this._updateWeight(t);let r=this._startTime;if(r!==null){let o=(t-r)*n;o<0||n===0?e=0:(this._startTime=null,e=n*o)}e*=this._updateTimeScale(t);let s=this._updateTime(e),a=this._updateWeight(t);if(a>0){let o=this._interpolants,l=this._propertyBindings;if(this.blendMode===2501)for(let h=0,c=o.length;h!==c;++h)o[h].evaluate(s),l[h].accumulateAdditive(a);else for(let h=0,c=o.length;h!==c;++h)o[h].evaluate(s),l[h].accumulate(i,a)}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null)e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,s=n===2202;if(t===0)return r===-1||!s||1&~r?i:e-i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else{if(!(i<0)){this.time=i;break t}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(o===1){let l=t<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&!(1&~r))return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=t?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=e?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);let{parameterPositions:a,sampleValues:o}=s;return a[0]=r,o[0]=e,a[1]=r+t,o[1]=n,this}}var Jm=new Float32Array(1);class Zo extends jn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,o=n.uuid,l=this._bindingsByRootAndName,h=l[o];h===void 0&&(h={},l[o]=h);for(let c=0;c!==r;++c){let d=i[c],u=d.name,p=h[u];if(p!==void 0)++p.referenceCount,s[c]=p;else{if(p=s[c],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,u));continue}let g=e&&e._propertyBindings[c].binding.parsedPath;p=new uc(Yt.create(n,u,g),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,u),s[c]=p}a[c].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{let a=s.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),t._byClipCacheIndex=null,delete a.actionByRoot[(t._localRoot||this._root).uuid],o.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=t._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new Vo(new Float32Array(2),new Float32Array(2),1,Jm),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,s=typeof t=="string"?Ur.findByName(i,t):t,a=s!==null?s.uuid:t,o=this._actionsByClip[a],l=null;if(n===void 0&&(n=s!==null?s.blendMode:2500),o!==void 0){let c=o.actionByRoot[r];if(c!==void 0&&c.blendMode===n)return c;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let h=new pc(this,s,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Ur.findByName(n,t):t,s=r?r.uuid:t,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,s);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let a=0,o=s.length;a!==o;++a){let l=s[a];this._deactivateAction(l);let h=l._cacheIndex,c=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=h,e[h]=c,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let r in n){let s=n[r].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let i=this._bindingsByRootAndName[e];if(i!==void 0)for(let r in i){let s=i[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}var ev=new Et;var nv=new rt;var iv=new T,rv=new T,sv=new T,av=new T,ov=new T,lv=new T,hv=new T;var cv=new T;var uv=new T,dv=new Et,pv=new Et;var fv=new T,mv=new mt,gv=new mt;var _v=new T,vv=new T,yv=new T;var Mv=new T,Sv=new Ps;var xv=new Pe;var Tv=new T;function fc(t,e,n,i){let r=function(s){switch(s){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${s}.`)}(i);switch(n){case 1021:return t*e;case 1028:case 1029:return t*e/r.components*r.byteLength;case 1030:case 1031:return t*e*2/r.components*r.byteLength;case 1022:return t*e*3/r.components*r.byteLength;case 1023:case 1033:return t*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");function Hp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Km(t){let e=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let i=e.get(n);i&&(t.deleteBuffer(i.buffer),e.delete(n))},update:function(n,i){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let s=e.get(n);return void((!s||s.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}let r=e.get(n);if(r===void 0)e.set(n,function(s,a){let{array:o,usage:l}=s,h=o.byteLength,c=t.createBuffer(),d;if(t.bindBuffer(a,c),t.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=t.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?t.HALF_FLOAT:t.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=t.SHORT;else if(o instanceof Uint32Array)d=t.UNSIGNED_INT;else if(o instanceof Int32Array)d=t.INT;else if(o instanceof Int8Array)d=t.BYTE;else if(o instanceof Uint8Array)d=t.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=t.UNSIGNED_BYTE}return{buffer:c,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:h}}(n,i));else if(r.version<n.version){if(r.size!==n.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let{array:l,updateRanges:h}=a;if(t.bindBuffer(o,s),h.length===0)t.bufferSubData(o,0,l);else{h.sort((d,u)=>d.start-u.start);let c=0;for(let d=1;d<h.length;d++){let u=h[c],p=h[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++c,h[c]=p)}h.length=c+1;for(let d=0,u=h.length;d<u;d++){let p=h[d];t.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,n,i),r.version=n.version}}}}var Dt={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ut={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new rt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},bn={basic:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new mt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:Ue([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:Ue([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new mt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:Ue([ut.points,ut.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:Ue([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:Ue([ut.common,ut.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:Ue([ut.sprite,ut.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:Ue([ut.common,ut.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:Ue([ut.lights,ut.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};bn.physical={uniforms:Ue([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};var Jo={r:0,b:0,g:0},nr=new nn,$m=new Et;function Qm(t,e,n,i,r,s,a){let o=new mt(0),l,h,c=s===!0?0:1,d=null,u=0,p=null;function g(f){let v=f.isScene===!0?f.background:null;if(v&&v.isTexture)v=(f.backgroundBlurriness>0?n:e).get(v);return v}function m(f,v){f.getRGB(Jo,qh(t)),i.buffers.color.setClear(Jo.r,Jo.g,Jo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(f,v=1){o.set(f),c=v,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,m(o,c)},render:function(f){let v=!1,y=g(f);y===null?m(o,c):y&&y.isColor&&(m(y,1),v=!0);let _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))},addToRenderList:function(f,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===bs)?(h===void 0&&(h=new ce(new $n(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ki(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(_,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),nr.copy(v.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(nr)),h.material.toneMapped=kt.getTransfer(y.colorSpace)!==ee,d===y&&u===y.version&&p===t.toneMapping||(h.material.needsUpdate=!0,d=y,u=y.version,p=t.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ce(new Qn(2,2),new En({name:"BackgroundMaterial",uniforms:Ki(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=kt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),d===y&&u===y.version&&p===t.toneMapping||(l.material.needsUpdate=!0,d=y,u=y.version,p=t.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function tg(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,a=!1;function o(v){return t.bindVertexArray(v)}function l(v){return t.deleteVertexArray(v)}function h(v){let y=[],_=[],S=[];for(let R=0;R<n;R++)y[R]=0,_[R]=0,S[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:_,attributeDivisors:S,object:v,attributes:{},index:null}}function c(){let v=s.newAttributes;for(let y=0,_=v.length;y<_;y++)v[y]=0}function d(v){u(v,0)}function u(v,y){let{newAttributes:_,enabledAttributes:S,attributeDivisors:R}=s;_[v]=1,S[v]===0&&(t.enableVertexAttribArray(v),S[v]=1),R[v]!==y&&(t.vertexAttribDivisor(v,y),R[v]=y)}function p(){let{newAttributes:v,enabledAttributes:y}=s;for(let _=0,S=y.length;_<S;_++)y[_]!==v[_]&&(t.disableVertexAttribArray(_),y[_]=0)}function g(v,y,_,S,R,A,I){I===!0?t.vertexAttribIPointer(v,y,_,R,A):t.vertexAttribPointer(v,y,_,S,R,A)}function m(){f(),a=!0,s!==r&&(s=r,o(s.object))}function f(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(v,y,_,S,R){let A=!1,I=function(V,U,F){let k=F.wireframe===!0,W=i[V.id];W===void 0&&(W={},i[V.id]=W);let Y=W[U.id];Y===void 0&&(Y={},W[U.id]=Y);let H=Y[k];return H===void 0&&(H=h(t.createVertexArray()),Y[k]=H),H}(S,_,y);s!==I&&(s=I,o(s.object)),A=function(V,U,F,k){let W=s.attributes,Y=U.attributes,H=0,J=F.getAttributes();for(let K in J)if(J[K].location>=0){let et=W[K],nt=Y[K];if(nt===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&(nt=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&(nt=V.instanceColor)),et===void 0)return!0;if(et.attribute!==nt)return!0;if(nt&&et.data!==nt.data)return!0;H++}return s.attributesNum!==H||s.index!==k}(v,S,_,R),A&&function(V,U,F,k){let W={},Y=U.attributes,H=0,J=F.getAttributes();for(let K in J)if(J[K].location>=0){let et=Y[K];et===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&(et=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&(et=V.instanceColor));let nt={};nt.attribute=et,et&&et.data&&(nt.data=et.data),W[K]=nt,H++}s.attributes=W,s.attributesNum=H,s.index=k}(v,S,_,R),R!==null&&e.update(R,t.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,function(V,U,F,k){c();let W=k.attributes,Y=F.getAttributes(),H=U.defaultAttributeValues;for(let J in Y){let K=Y[J];if(K.location>=0){let et=W[J];if(et===void 0&&(J==="instanceMatrix"&&V.instanceMatrix&&(et=V.instanceMatrix),J==="instanceColor"&&V.instanceColor&&(et=V.instanceColor)),et!==void 0){let{normalized:nt,itemSize:dt}=et,yt=e.get(et);if(yt===void 0)continue;let{buffer:tt,type:Z,bytesPerElement:gt}=yt,pt=Z===t.INT||Z===t.UNSIGNED_INT||et.gpuType===ih;if(et.isInterleavedBufferAttribute){let ct=et.data,ot=ct.stride,bt=et.offset;if(ct.isInstancedInterleavedBuffer){for(let b=0;b<K.locationSize;b++)u(K.location+b,ct.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let b=0;b<K.locationSize;b++)d(K.location+b);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let b=0;b<K.locationSize;b++)g(K.location+b,dt/K.locationSize,Z,nt,ot*gt,(bt+dt/K.locationSize*b)*gt,pt)}else{if(et.isInstancedBufferAttribute){for(let ct=0;ct<K.locationSize;ct++)u(K.location+ct,et.meshPerAttribute);V.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ct=0;ct<K.locationSize;ct++)d(K.location+ct);t.bindBuffer(t.ARRAY_BUFFER,tt);for(let ct=0;ct<K.locationSize;ct++)g(K.location+ct,dt/K.locationSize,Z,nt,dt*gt,dt/K.locationSize*ct*gt,pt)}}else if(H!==void 0){let nt=H[J];if(nt!==void 0)switch(nt.length){case 2:t.vertexAttrib2fv(K.location,nt);break;case 3:t.vertexAttrib3fv(K.location,nt);break;case 4:t.vertexAttrib4fv(K.location,nt);break;default:t.vertexAttrib1fv(K.location,nt)}}}}p()}(v,y,_,S),R!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:m,resetDefaultState:f,dispose:function(){m();for(let v in i){let y=i[v];for(let _ in y){let S=y[_];for(let R in S)l(S[R].object),delete S[R];delete y[_]}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let y=i[v.id];for(let _ in y){let S=y[_];for(let R in S)l(S[R].object),delete S[R];delete y[_]}delete i[v.id]},releaseStatesOfProgram:function(v){for(let y in i){let _=i[y];if(_[v.id]===void 0)continue;let S=_[v.id];for(let R in S)l(S[R].object),delete S[R];delete _[v.id]}},initAttributes:c,enableAttribute:d,disableUnusedAttributes:p}}function eg(t,e,n){let i;function r(s,a,o){o!==0&&(t.drawArraysInstanced(i,s,a,o),n.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){t.drawArrays(i,s,a),n.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let h=0;h<o;h++)l+=a[h];n.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<s.length;c++)r(s[c],a[c],l[c]);else{h.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let c=0;for(let d=0;d<o;d++)c+=a[d]*l[d];n.update(c,i,1)}}}function ng(t,e,n,i){let r;function s(u){if(u==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=n.precision!==void 0?n.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(u){return u===Tn||i.convert(u)===t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==vi&&i.convert(u)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==yi&&!p)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxCubemapSize:t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:t.getParameter(t.MAX_VERTEX_ATTRIBS),maxVertexUniforms:t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:t.getParameter(t.MAX_VARYING_VECTORS),maxFragmentUniforms:t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:t.getParameter(t.MAX_SAMPLES)}}function ig(t){let e=this,n=null,i=0,r=!1,s=!1,a=new Vn,o=new Ut,l={value:null,needsUpdate:!1};function h(c,d,u,p){let g=c!==null?c.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let f=u+4*g,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=u;y!==g;++y,_+=4)a.copy(c[y]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let u=c.length!==0||d||i!==0||r;return r=d,i=c.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){n=h(c,d,0)},this.setState=function(c,d,u){let{clippingPlanes:p,clipIntersection:g,clipShadows:m}=c,f=t.get(c);if(!r||p===null||p.length===0||s&&!m)s?h(null):function(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let v=s?0:i,y=4*v,_=f.clippingState||null;l.value=_,_=h(p,d,y,u);for(let S=0;S!==y;++S)_[S]=n[S];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}}}function rg(t){let e=new WeakMap;function n(r,s){return s===Za?r.mapping=Dr:s===Ja&&(r.mapping=Zi),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Za||s===Ja){if(e.has(r))return n(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Zh(a.height);return o.fromEquirectangularTexture(t,r),e.set(r,o),r.addEventListener("dispose",i),n(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var vp=[0.125,0.215,0.35,0.446,0.526,0.582],Vs=20,mc=new Yr,yp=new mt,gc=null,_c=0,vc=0,yc=!1,rr=(1+Math.sqrt(5))/2,Zr=1/rr,Mp=[new T(-rr,Zr,0),new T(rr,Zr,0),new T(-Zr,0,rr),new T(Zr,0,rr),new T(0,rr,-Zr),new T(0,rr,Zr),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],sg=new T;class Sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=0.1,i=100,r={}){let{size:s=256,position:a=sg}=r;gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gc,_c,vc),this._renderer.xr.enabled=yc,t.scissorTest=!1,jo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dr||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),vc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Rs,format:Tn,colorSpace:Oe,depthBuffer:!1},i=Sp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){let a=[],o=[],l=[],h=s,c=s-4+1+vp.length;for(let d=0;d<c;d++){let u=Math.pow(2,h);o.push(u);let p=1/u;d>s-4?p=vp[d-s+4-1]:d===0&&(p=0),l.push(p);let g=1/(u-2),m=-g,f=1+g,v=[m,m,f,m,f,f,m,m,f,f,m,f],y=6,_=6,S=3,R=2,A=1,I=new Float32Array(S*_*y),V=new Float32Array(R*_*y),U=new Float32Array(A*_*y);for(let k=0;k<y;k++){let W=k%3*2/3-1,Y=k>2?0:-1,H=[W,Y,0,W+0.6666666666666666,Y,0,W+0.6666666666666666,Y+1,0,W,Y,0,W+0.6666666666666666,Y+1,0,W,Y+1,0];I.set(H,S*_*k),V.set(v,R*_*k);let J=[k,k,k,k,k,k];U.set(J,A*_*k)}let F=new Jt;F.setAttribute("position",new ae(I,S)),F.setAttribute("uv",new ae(V,R)),F.setAttribute("faceIndex",new ae(U,A)),a.push(F),h>4&&h--}return{lodPlanes:a,sizeLods:o,sigmas:l}}(r)),this._blurMaterial=function(s,a,o){let l=new Float32Array(Vs),h=new T(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/o,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}(r,t,e)}return i}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,mc)}_sceneToCubeUV(t,e,n,i,r){let s=new ge(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(yp),l.toneMapping=Xn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new we({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),u=new ce(new $n,d),p=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,p=!0):(d.color.copy(yp),p=!0);for(let m=0;m<6;m++){let f=m%3;f===0?(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[m],r.y,r.z)):f===1?(s.up.set(0,0,a[m]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[m],r.z)):(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[m]));let v=this._cubeSize;jo(i,f*v,m>2?v:0,v,v),l.setRenderTarget(i),p&&l.render(u,s),l.render(t,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=c,l.autoClear=h,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Dr||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());let r=i?this._cubemapMaterial:this._equirectMaterial,s=new ce(this._lodPlanes[0],r);r.uniforms.envMap.value=t;let a=this._cubeSize;jo(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(s,mc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mp[(i-r-1)%Mp.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,i,r){let s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ce(this._lodPlanes[i],l),c=l.uniforms,d=this._sizeLods[n]-1,u=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,p=r/u,g=isFinite(r)?1+Math.floor(3*p):Vs;g>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],f=0;for(let _=0;_<Vs;++_){let S=_/p,R=Math.exp(-S*S/2);m.push(R),_===0?f+=R:_<g&&(f+=2*R)}for(let _=0;_<m.length;_++)m[_]=m[_]/f;c.envMap.value=t.texture,c.samples.value=g,c.weights.value=m,c.latitudinal.value=s==="latitudinal",a&&(c.poleAxis.value=a);let{_lodMax:v}=this;c.dTheta.value=u,c.mipInt.value=v-n;let y=this._sizeLods[i];jo(e,3*y*(i>v-4?i-v+4:0),4*(this._cubeSize-y),3*y,2*y),o.setRenderTarget(e),o.render(h,mc)}}function Sp(t,e,n){let i=new Kn(t,e,n);return i.texture.mapping=bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xp(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Tp(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Tc(){return`

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
	`}function ag(t){let e=new WeakMap,n=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Za||s===Ja,o=s===Dr||s===Zi;if(a||o){let l=e.get(r),h=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==h)return n===null&&(n=new Sc(t)),l=a?n.fromEquirectangular(r,l):n.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let c=r.image;return a&&c&&c.height>0||o&&c&&function(d){let u=0,p=6;for(let g=0;g<p;g++)d[g]!==void 0&&u++;return u===p}(c)?(n===null&&(n=new Sc(t)),l=a?n.fromEquirectangular(r):n.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",i),l.texture):null}}}return r},dispose:function(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function og(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Xi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lg(t,e,n,i){let r={},s=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let d in h.attributes)e.remove(h.attributes[d]);h.removeEventListener("dispose",a),delete r[h.id];let c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(l){let h=[],c=l.index,d=l.attributes.position,u=0;if(c!==null){let m=c.array;u=c.version;for(let f=0,v=m.length;f<v;f+=3){let y=m[f+0],_=m[f+1],S=m[f+2];h.push(y,_,_,S,S,y)}}else{if(d===void 0)return;{let m=d.array;u=d.version;for(let f=0,v=m.length/3-1;f<v;f+=3){let y=f+0,_=f+1,S=f+2;h.push(y,_,_,S,S,y)}}}let p=new((Gh(h))?lo:oo)(h,1);p.version=u;let g=s.get(l);g&&e.remove(g),s.set(l,p)}return{get:function(l,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h},update:function(l){let h=l.attributes;for(let c in h)e.update(h[c],t.ARRAY_BUFFER)},getWireframeAttribute:function(l){let h=s.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return s.get(l)}}}function hg(t,e,n){let i,r,s;function a(o,l,h){h!==0&&(t.drawElementsInstanced(i,l,r,o*s,h),n.update(l,i,h))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){t.drawElements(i,l,r,o*s),n.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,h);let c=0;for(let d=0;d<h;d++)c+=l[d];n.update(c,i,1)},this.renderMultiDrawInstances=function(o,l,h,c){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,l[u],c[u]);else{d.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p]*c[p];n.update(u,i,1)}}}function cg(t){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3);break;case t.LINES:e.lines+=r*(n/2);break;case t.LINE_STRIP:e.lines+=r*(n-1);break;case t.LINE_LOOP:e.lines+=r*n;break;case t.POINTS:e.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function ug(t,e,n){let i=new WeakMap,r=new Zt;return{update:function(s,a,o){let l=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==c){let V=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;u===!0&&(y=1),p===!0&&(y=2),g===!0&&(y=3);let _=a.attributes.position.count*y,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let R=new Float32Array(_*S*4*c),A=new so(R,_,S,c);A.type=yi,A.needsUpdate=!0;let I=4*y;for(let U=0;U<c;U++){let F=m[U],k=f[U],W=v[U],Y=_*S*4*U;for(let H=0;H<F.count;H++){let J=H*I;u===!0&&(r.fromBufferAttribute(F,H),R[Y+J+0]=r.x,R[Y+J+1]=r.y,R[Y+J+2]=r.z,R[Y+J+3]=0),p===!0&&(r.fromBufferAttribute(k,H),R[Y+J+4]=r.x,R[Y+J+5]=r.y,R[Y+J+6]=r.z,R[Y+J+7]=0),g===!0&&(r.fromBufferAttribute(W,H),R[Y+J+8]=r.x,R[Y+J+9]=r.y,R[Y+J+10]=r.z,R[Y+J+11]=W.itemSize===4?r.w:1)}}d={count:c,texture:A,size:new rt(_,S)},i.set(a,d),a.addEventListener("dispose",V)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let u=0;for(let g=0;g<l.length;g++)u+=l[g];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(t,"morphTargetBaseInfluence",p),o.getUniforms().setValue(t,"morphTargetInfluences",l)}o.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}}}function dg(t,e,n,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),n.remove(o.instanceMatrix),o.instanceColor!==null&&n.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(r.get(h)!==o&&(e.update(h),r.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,t.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;r.get(c)!==o&&(c.update(),r.set(c,o))}return h},dispose:function(){r=new WeakMap}}}var Gp=new he,Ep=new _o(1,1),kp=new so,Wp=new Xh,Xp=new ho,wp=[],bp=[],Ap=new Float32Array(16),Rp=new Float32Array(9),Cp=new Float32Array(4);function Jr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=wp[r];if(s===void 0&&(s=new Float32Array(r),wp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function _e(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ve(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function $o(t,e){let n=bp[e];n===void 0&&(n=new Int32Array(e),bp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_e(n,e))return;t.uniform2fv(this.addr,e),ve(n,e)}}function mg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_e(n,e))return;t.uniform3fv(this.addr,e),ve(n,e)}}function gg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_e(n,e))return;t.uniform4fv(this.addr,e),ve(n,e)}}function _g(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ve(n,e)}else{if(_e(n,i))return;Cp.set(i),t.uniformMatrix2fv(this.addr,!1,Cp),ve(n,i)}}function vg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ve(n,e)}else{if(_e(n,i))return;Rp.set(i),t.uniformMatrix3fv(this.addr,!1,Rp),ve(n,i)}}function yg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(_e(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ve(n,e)}else{if(_e(n,i))return;Ap.set(i),t.uniformMatrix4fv(this.addr,!1,Ap),ve(n,i)}}function Mg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Sg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_e(n,e))return;t.uniform2iv(this.addr,e),ve(n,e)}}function xg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_e(n,e))return;t.uniform3iv(this.addr,e),ve(n,e)}}function Tg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_e(n,e))return;t.uniform4iv(this.addr,e),ve(n,e)}}function Eg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function wg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_e(n,e))return;t.uniform2uiv(this.addr,e),ve(n,e)}}function bg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_e(n,e))return;t.uniform3uiv(this.addr,e),ve(n,e)}}function Ag(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_e(n,e))return;t.uniform4uiv(this.addr,e),ve(n,e)}}function Rg(t,e,n){let i=this.cache,r=n.allocateTextureUnit(),s;i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),this.type===t.SAMPLER_2D_SHADOW?(Ep.compareFunction=Bh,s=Ep):s=Gp,n.setTexture2D(e||s,r)}function Cg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Wp,r)}function Lg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Xp,r)}function Ig(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kp,r)}function Pg(t,e){t.uniform1fv(this.addr,e)}function Ug(t,e){let n=Jr(e,this.size,2);t.uniform2fv(this.addr,n)}function Ng(t,e){let n=Jr(e,this.size,3);t.uniform3fv(this.addr,n)}function Dg(t,e){let n=Jr(e,this.size,4);t.uniform4fv(this.addr,n)}function Fg(t,e){let n=Jr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Og(t,e){let n=Jr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Bg(t,e){let n=Jr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zg(t,e){t.uniform1iv(this.addr,e)}function Vg(t,e){t.uniform2iv(this.addr,e)}function Hg(t,e){t.uniform3iv(this.addr,e)}function Gg(t,e){t.uniform4iv(this.addr,e)}function kg(t,e){t.uniform1uiv(this.addr,e)}function Wg(t,e){t.uniform2uiv(this.addr,e)}function Xg(t,e){t.uniform3uiv(this.addr,e)}function qg(t,e){t.uniform4uiv(this.addr,e)}function Yg(t,e,n){let i=this.cache,r=e.length,s=$o(n,r);_e(i,s)||(t.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Gp,s[a])}function Zg(t,e,n){let i=this.cache,r=e.length,s=$o(n,r);_e(i,s)||(t.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Wp,s[a])}function Jg(t,e,n){let i=this.cache,r=e.length,s=$o(n,r);_e(i,s)||(t.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Xp,s[a])}function jg(t,e,n){let i=this.cache,r=e.length,s=$o(n,r);_e(i,s)||(t.uniform1iv(this.addr,s),ve(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||kp,s[a])}class qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=function(i){switch(i){case 5126:return pg;case 35664:return fg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return xg;case 35669:case 35673:return Tg;case 5125:return Eg;case 36294:return wg;case 36295:return bg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}(e.type)}}class Yp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(i){switch(i){case 5126:return Pg;case 35664:return Ug;case 35665:return Ng;case 35666:return Dg;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return Vg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return kg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return jg}}(e.type)}}class Zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let a=i[r];a.setValue(t,e[a.id],n)}}}var Mc=/(\w+)(\])?(\[|\.)?/g;function Lp(t,e){t.seq.push(e),t.map[e.id]=e}function Kg(t,e,n){let i=t.name,r=i.length;for(Mc.lastIndex=0;;){let s=Mc.exec(i),a=Mc.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===r){Lp(n,h===void 0?new qp(o,t,e):new Yp(o,t,e));break}{let c=n.map[o];c===void 0&&(c=new Zp(o),Lp(n,c)),n=c}}}class Gs{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i);Kg(r,t.getUniformLocation(e,r.name),this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){let a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.id in e&&n.push(s)}return n}}function Ip(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var $g=0,Pp=new Ut;function Up(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+function(o,l){let h=o.split(`
`),c=[],d=Math.max(l-6,0),u=Math.min(l+6,h.length);for(let p=d;p<u;p++){let g=p+1;c.push(`${g===l?">":" "} ${g}: ${h[p]}`)}return c.join(`
`)}(t.getShaderSource(e),a)}return r}function Qg(t,e){let n=function(i){kt._getMatrix(Pp,kt.workingColorSpace,i);let r=`mat3( ${Pp.elements.map((s)=>s.toFixed(4))} )`;switch(kt.getTransfer(i)){case Oh:return[r,"LinearTransferOETF"];case ee:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}}(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function t0(t,e){let n;switch(e){case Pd:n="Linear";break;case Ud:n="Reinhard";break;case Nd:n="Cineon";break;case Ya:n="ACESFilmic";break;case Fd:n="AgX";break;case Od:n="Neutral";break;case Dd:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ko=new T;function e0(){return kt.getLuminanceCoefficients(Ko),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ko.x.toFixed(4)}, ${Ko.y.toFixed(4)}, ${Ko.z.toFixed(4)} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Hs(t){return t!==""}function Np(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(t){return t.replace(n0,r0)}var i0=new Map;function r0(t,e){let n=Dt[e];if(n===void 0){let i=i0.get(e);if(i===void 0)throw Error("Can not resolve #include <"+e+">");n=Dt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return xc(n)}var s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(t){return t.replace(s0,a0)}function a0(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Op(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function o0(t,e,n,i){let r=t.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,l=function(k){let W="SHADOWMAP_TYPE_BASIC";return k.shadowMapType===Ql?W="SHADOWMAP_TYPE_PCF":k.shadowMapType===za?W="SHADOWMAP_TYPE_PCF_SOFT":k.shadowMapType===Sn&&(W="SHADOWMAP_TYPE_VSM"),W}(n),h=function(k){let W="ENVMAP_TYPE_CUBE";if(k.envMap)switch(k.envMapMode){case Dr:case Zi:W="ENVMAP_TYPE_CUBE";break;case bs:W="ENVMAP_TYPE_CUBE_UV"}return W}(n),c=function(k){let W="ENVMAP_MODE_REFLECTION";return k.envMap&&k.envMapMode===Zi&&(W="ENVMAP_MODE_REFRACTION"),W}(n),d=function(k){let W="ENVMAP_BLENDING_NONE";if(k.envMap)switch(k.combine){case Cd:W="ENVMAP_BLENDING_MULTIPLY";break;case Ld:W="ENVMAP_BLENDING_MIX";break;case Id:W="ENVMAP_BLENDING_ADD"}return W}(n),u=function(k){let W=k.envMapCubeUVHeight;if(W===null)return null;let Y=Math.log2(W)-2,H=1/W;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:H,maxMip:Y}}(n),p=function(k){return[k.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",k.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}(n),g=function(k){let W=[];for(let Y in k){let H=k[Y];H!==!1&&W.push("#define "+Y+" "+H)}return W.join(`
`)}(s),m=r.createProgram(),f,v,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Hs).join(`
`),f.length>0&&(f+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Hs).join(`
`),v.length>0&&(v+=`
`)):(f=[Op(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),v=[Op(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xn?"#define TONE_MAPPING":"",n.toneMapping!==Xn?Dt.tonemapping_pars_fragment:"",n.toneMapping!==Xn?t0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,Qg("linearToOutputTexel",n.outputColorSpace),e0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hs).join(`
`)),a=xc(a),a=Np(a,n),a=Dp(a,n),o=xc(o),o=Np(o,n),o=Dp(o,n),a=Fp(a),o=Fp(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",n.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let _=y+f+a,S=y+v+o,R=Ip(r,r.VERTEX_SHADER,_),A=Ip(r,r.FRAGMENT_SHADER,S);function I(k){if(t.debug.checkShaderErrors){let W=r.getProgramInfoLog(m)||"",Y=r.getShaderInfoLog(R)||"",H=r.getShaderInfoLog(A)||"",J=W.trim(),K=Y.trim(),et=H.trim(),nt=!0,dt=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(nt=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,R,A);else{let yt=Up(r,R,"vertex"),tt=Up(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+yt+`
`+tt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):K!==""&&et!==""||(dt=!1);dt&&(k.diagnostics={runnable:nt,programLog:J,vertexShader:{log:K,prefix:f},fragmentShader:{log:et,prefix:v}})}r.deleteShader(R),r.deleteShader(A),V=new Gs(r,m),U=function(W,Y){let H={},J=W.getProgramParameter(Y,W.ACTIVE_ATTRIBUTES);for(let K=0;K<J;K++){let et=W.getActiveAttrib(Y,K),nt=et.name,dt=1;et.type===W.FLOAT_MAT2&&(dt=2),et.type===W.FLOAT_MAT3&&(dt=3),et.type===W.FLOAT_MAT4&&(dt=4),H[nt]={type:et.type,location:W.getAttribLocation(Y,nt),locationSize:dt}}return H}(r,m)}let V,U;r.attachShader(m,R),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return V===void 0&&I(this),V},this.getAttributes=function(){return U===void 0&&I(this),U};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(m,37297)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$g++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}var l0=0;class Jp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jp(t),e.set(t,n)),n}}class jp{constructor(t){this.id=l0++,this.code=t,this.usedTimes=0}}function h0(t,e,n,i,r,s,a){let o=new ao,l=new Jp,h=new Set,c=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return h.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,v,y,_,S){let R=_.fog,A=S.geometry,I=f.isMeshStandardMaterial?_.environment:null,V=(f.isMeshStandardMaterial?n:e).get(f.envMap||I),U=V&&V.mapping===bs?V.image.height:null,F=g[f.type];f.precision!==null&&(p=r.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let k=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,W=k!==void 0?k.length:0,Y,H,J,K,et=0;if(A.morphAttributes.position!==void 0&&(et=1),A.morphAttributes.normal!==void 0&&(et=2),A.morphAttributes.color!==void 0&&(et=3),F){let qt=bn[F];Y=qt.vertexShader,H=qt.fragmentShader}else Y=f.vertexShader,H=f.fragmentShader,l.update(f),J=l.getVertexShaderID(f),K=l.getFragmentShaderID(f);let nt=t.getRenderTarget(),dt=t.state.buffers.depth.getReversed(),yt=S.isInstancedMesh===!0,tt=S.isBatchedMesh===!0,Z=!!f.map,gt=!!f.matcap,pt=!!V,ct=!!f.aoMap,ot=!!f.lightMap,bt=!!f.bumpMap,b=!!f.normalMap,x=!!f.displacementMap,C=!!f.emissiveMap,O=!!f.metalnessMap,M=!!f.roughnessMap,L=f.anisotropy>0,E=f.clearcoat>0,P=f.dispersion>0,D=f.iridescence>0,B=f.sheen>0,z=f.transmission>0,st=L&&!!f.anisotropyMap,lt=E&&!!f.clearcoatMap,j=E&&!!f.clearcoatNormalMap,it=E&&!!f.clearcoatRoughnessMap,_t=D&&!!f.iridescenceMap,Tt=D&&!!f.iridescenceThicknessMap,Pt=B&&!!f.sheenColorMap,Bt=B&&!!f.sheenRoughnessMap,Ct=!!f.specularMap,$=!!f.specularColorMap,ht=!!f.specularIntensityMap,St=z&&!!f.transmissionMap,Ce=z&&!!f.thicknessMap,Mt=!!f.gradientMap,zt=!!f.alphaMap,Wt=f.alphaTest>0,si=!!f.alphaHash,N=!!f.extensions,De=Xn;f.toneMapped&&(nt!==null&&nt.isXRRenderTarget!==!0||(De=t.toneMapping));let Me={shaderID:F,shaderType:f.type,shaderName:f.name,vertexShader:Y,fragmentShader:H,defines:f.defines,customVertexShaderID:J,customFragmentShaderID:K,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:tt,batchingColor:tt&&S._colorsTexture!==null,instancing:yt,instancingColor:yt&&S.instanceColor!==null,instancingMorph:yt&&S.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:nt===null?t.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Oe,alphaToCoverage:!!f.alphaToCoverage,map:Z,matcap:gt,envMap:pt,envMapMode:pt&&V.mapping,envMapCubeUVHeight:U,aoMap:ct,lightMap:ot,bumpMap:bt,normalMap:b,displacementMap:u&&x,emissiveMap:C,normalMapObjectSpace:b&&f.normalMapType===Zd,normalMapTangentSpace:b&&f.normalMapType===Yd,metalnessMap:O,roughnessMap:M,anisotropy:L,anisotropyMap:st,clearcoat:E,clearcoatMap:lt,clearcoatNormalMap:j,clearcoatRoughnessMap:it,dispersion:P,iridescence:D,iridescenceMap:_t,iridescenceThicknessMap:Tt,sheen:B,sheenColorMap:Pt,sheenRoughnessMap:Bt,specularMap:Ct,specularColorMap:$,specularIntensityMap:ht,transmission:z,transmissionMap:St,thicknessMap:Ce,gradientMap:Mt,opaque:f.transparent===!1&&f.blending===Es&&f.alphaToCoverage===!1,alphaMap:zt,alphaTest:Wt,alphaHash:si,combine:f.combine,mapUv:Z&&m(f.map.channel),aoMapUv:ct&&m(f.aoMap.channel),lightMapUv:ot&&m(f.lightMap.channel),bumpMapUv:bt&&m(f.bumpMap.channel),normalMapUv:b&&m(f.normalMap.channel),displacementMapUv:x&&m(f.displacementMap.channel),emissiveMapUv:C&&m(f.emissiveMap.channel),metalnessMapUv:O&&m(f.metalnessMap.channel),roughnessMapUv:M&&m(f.roughnessMap.channel),anisotropyMapUv:st&&m(f.anisotropyMap.channel),clearcoatMapUv:lt&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:j&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&m(f.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&m(f.sheenRoughnessMap.channel),specularMapUv:Ct&&m(f.specularMap.channel),specularColorMapUv:$&&m(f.specularColorMap.channel),specularIntensityMapUv:ht&&m(f.specularIntensityMap.channel),transmissionMapUv:St&&m(f.transmissionMap.channel),thicknessMapUv:Ce&&m(f.thicknessMap.channel),alphaMapUv:zt&&m(f.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(b||L),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!A.attributes.uv&&(Z||zt),fog:!!R,useFog:f.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:S.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:et,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:t.shadowMap.enabled&&y.length>0,shadowMapType:t.shadowMap.type,toneMapping:De,decodeVideoTexture:Z&&f.map.isVideoTexture===!0&&kt.getTransfer(f.map.colorSpace)===ee,decodeVideoTextureEmissive:C&&f.emissiveMap.isVideoTexture===!0&&kt.getTransfer(f.emissiveMap.colorSpace)===ee,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Ee,flipSided:f.side===Ze,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:N&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(N&&f.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Me.vertexUv1s=h.has(1),Me.vertexUv2s=h.has(2),Me.vertexUv3s=h.has(3),h.clear(),Me},getProgramCacheKey:function(f){let v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(let y in f.defines)v.push(y),v.push(f.defines[y]);return f.isRawShaderMaterial===!1&&(function(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}(v,f),function(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}(v,f),v.push(t.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()},getUniforms:function(f){let v=g[f.type],y;if(v){let _=bn[v];y=sp.clone(_.uniforms)}else y=f.uniforms;return y},acquireProgram:function(f,v){let y;for(let _=0,S=c.length;_<S;_++){let R=c[_];if(R.cacheKey===v){y=R,++y.usedTimes;break}}return y===void 0&&(y=new o0(t,v,f,s),c.push(y)),y},releaseProgram:function(f){if(--f.usedTimes===0){let v=c.indexOf(f);c[v]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:c,dispose:function(){l.dispose()}}}function c0(){let t=new WeakMap;return{has:function(e){return t.has(e)},get:function(e){let n=t.get(e);return n===void 0&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=i},dispose:function(){t=new WeakMap}}}function u0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Bp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zp(){let t=[],e=0,n=[],i=[],r=[];function s(a,o,l,h,c,d){let u=t[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:d},t[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=h,u.renderOrder=a.renderOrder,u.z=c,u.group=d),e++,u}return{opaque:n,transmissive:i,transparent:r,init:function(){e=0,n.length=0,i.length=0,r.length=0},push:function(a,o,l,h,c,d){let u=s(a,o,l,h,c,d);l.transmission>0?i.push(u):l.transparent===!0?r.push(u):n.push(u)},unshift:function(a,o,l,h,c,d){let u=s(a,o,l,h,c,d);l.transmission>0?i.unshift(u):l.transparent===!0?r.unshift(u):n.unshift(u)},finish:function(){for(let a=e,o=t.length;a<o;a++){let l=t[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){n.length>1&&n.sort(a||u0),i.length>1&&i.sort(o||Bp),r.length>1&&r.sort(o||Bp)}}}function d0(){let t=new WeakMap;return{get:function(e,n){let i=t.get(e),r;return i===void 0?(r=new zp,t.set(e,[r])):n>=i.length?(r=new zp,i.push(r)):r=i[n],r},dispose:function(){t=new WeakMap}}}function p0(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new T,color:new mt};break;case"SpotLight":n={position:new T,direction:new T,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new T,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new T,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new T,halfWidth:new T,halfHeight:new T}}return t[e.id]=n,n}}}var f0=0;function m0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function g0(t){let e=new p0,n=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1000}}return o[l.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new T);let r=new T,s=new Et,a=new Et;return{setup:function(o){let l=0,h=0,c=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,u=0,p=0,g=0,m=0,f=0,v=0,y=0,_=0,S=0,R=0;o.sort(m0);for(let I=0,V=o.length;I<V;I++){let U=o[I],F=U.color,k=U.intensity,W=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)l+=F.r*k,h+=F.g*k,c+=F.b*k;else if(U.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(U.sh.coefficients[H],k);R++}else if(U.isDirectionalLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let J=U.shadow,K=n.get(U);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.directionalShadow[d]=K,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=U.shadow.matrix,f++}i.directional[d]=H,d++}else if(U.isSpotLight){let H=e.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(F).multiplyScalar(k),H.distance=W,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,i.spot[p]=H;let J=U.shadow;if(U.map&&(i.spotLightMap[_]=U.map,_++,J.updateMatrices(U),U.castShadow&&S++),i.spotLightMatrix[p]=J.matrix,U.castShadow){let K=n.get(U);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=Y,y++}p++}else if(U.isRectAreaLight){let H=e.get(U);H.color.copy(F).multiplyScalar(k),H.halfWidth.set(0.5*U.width,0,0),H.halfHeight.set(0,0.5*U.height,0),i.rectArea[g]=H,g++}else if(U.isPointLight){let H=e.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),H.distance=U.distance,H.decay=U.decay,U.castShadow){let J=U.shadow,K=n.get(U);K.shadowIntensity=J.intensity,K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,i.pointShadow[u]=K,i.pointShadowMap[u]=Y,i.pointShadowMatrix[u]=U.shadow.matrix,v++}i.point[u]=H,u++}else if(U.isHemisphereLight){let H=e.get(U);H.skyColor.copy(U.color).multiplyScalar(k),H.groundColor.copy(U.groundColor).multiplyScalar(k),i.hemi[m]=H,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=c;let A=i.hash;A.directionalLength===d&&A.pointLength===u&&A.spotLength===p&&A.rectAreaLength===g&&A.hemiLength===m&&A.numDirectionalShadows===f&&A.numPointShadows===v&&A.numSpotShadows===y&&A.numSpotMaps===_&&A.numLightProbes===R||(i.directional.length=d,i.spot.length=p,i.rectArea.length=g,i.point.length=u,i.hemi.length=m,i.directionalShadow.length=f,i.directionalShadowMap.length=f,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=f,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+_-S,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=R,A.directionalLength=d,A.pointLength=u,A.spotLength=p,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=f,A.numPointShadows=v,A.numSpotShadows=y,A.numSpotMaps=_,A.numLightProbes=R,i.version=f0++)},setupView:function(o,l){let h=0,c=0,d=0,u=0,p=0,g=l.matrixWorldInverse;for(let m=0,f=o.length;m<f;m++){let v=o[m];if(v.isDirectionalLight){let y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(v.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let y=i.rectArea[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(0.5*v.width,0,0),y.halfHeight.set(0,0.5*v.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),u++}else if(v.isPointLight){let y=i.point[c];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),c++}else if(v.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),p++}}},state:i}}function Vp(t){let e=new g0(t),n=[],i=[],r={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,n.length=0,i.length=0},state:r,setupLights:function(){e.setup(n)},setupLightsView:function(s){e.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function _0(t){let e=new WeakMap;return{get:function(n,i=0){let r=e.get(n),s;return r===void 0?(s=new Vp(t),e.set(n,[s])):i>=r.length?(s=new Vp(t),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}function v0(t,e,n){let i=new $i,r=new rt,s=new rt,a=new Zt,o=new ic({depthPacking:qd}),l=new rc,h={},c=n.maxTextureSize,d={[xn]:Ze,[Ze]:xn,[Ee]:Ee},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new ae(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let m=new ce(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let v=this.type;function y(A,I){let V=e.update(m);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kn(r.x,r.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(I,null,V,u,m,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(I,null,V,p,m,null)}function _(A,I,V,U){let F=null,k=V.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)F=k;else if(F=V.isPointLight===!0?l:o,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let W=F.uuid,Y=I.uuid,H=h[W];H===void 0&&(H={},h[W]=H);let J=H[Y];J===void 0&&(J=F.clone(),H[Y]=J,I.addEventListener("dispose",R)),F=J}if(F.visible=I.visible,F.wireframe=I.wireframe,F.side=U===Sn?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:d[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaToCoverage===!0?0.5:I.alphaTest,F.map=I.map,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,V.isPointLight===!0&&F.isMeshDistanceMaterial===!0)t.properties.get(F).light=V;return F}function S(A,I,V,U,F){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Sn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld);let W=e.update(A),Y=A.material;if(Array.isArray(Y)){let H=W.groups;for(let J=0,K=H.length;J<K;J++){let et=H[J],nt=Y[et.materialIndex];if(nt&&nt.visible){let dt=_(A,nt,U,F);A.onBeforeShadow(t,A,I,V,W,dt,et),t.renderBufferDirect(V,null,W,dt,A,et),A.onAfterShadow(t,A,I,V,W,dt,et)}}}else if(Y.visible){let H=_(A,Y,U,F);A.onBeforeShadow(t,A,I,V,W,H,null),t.renderBufferDirect(V,null,W,H,A,null),A.onAfterShadow(t,A,I,V,W,H,null)}}let k=A.children;for(let W=0,Y=k.length;W<Y;W++)S(k[W],I,V,U,F)}function R(A){A.target.removeEventListener("dispose",R);for(let I in h){let V=h[I],U=A.target.uuid;if(U in V)V[U].dispose(),delete V[U]}}this.render=function(A,I,V){if(f.enabled===!1)return;if(f.autoUpdate===!1&&f.needsUpdate===!1)return;if(A.length===0)return;let U=t.getRenderTarget(),F=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),W=t.state;W.setBlending(_i),W.buffers.depth.getReversed()?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let Y=v!==Sn&&this.type===Sn,H=v===Sn&&this.type!==Sn;for(let J=0,K=A.length;J<K;J++){let et=A[J],nt=et.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;r.copy(nt.mapSize);let dt=nt.getFrameExtents();if(r.multiply(dt),s.copy(nt.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/dt.x),r.x=s.x*dt.x,nt.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/dt.y),r.y=s.y*dt.y,nt.mapSize.y=s.y)),nt.map===null||Y===!0||H===!0){let tt=this.type!==Sn?{minFilter:qn,magFilter:qn}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Kn(r.x,r.y,tt),nt.map.texture.name=et.name+".shadowMap",nt.camera.updateProjectionMatrix()}t.setRenderTarget(nt.map),t.clear();let yt=nt.getViewportCount();for(let tt=0;tt<yt;tt++){let Z=nt.getViewport(tt);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),W.viewport(a),nt.updateMatrices(et,tt),i=nt.getFrustum(),S(I,V,nt.camera,et,this.type)}nt.isPointLightShadow!==!0&&this.type===Sn&&y(nt,V),nt.needsUpdate=!1}v=this.type,f.needsUpdate=!1,t.setRenderTarget(U,F,k)}}var y0={[Va]:Ha,[Ga]:Xa,[ka]:qa,[ws]:Wa,[Ha]:Va,[Xa]:Ga,[qa]:ka,[Wa]:ws};function M0(t,e){let n=new function(){let M=!1,L=new Zt,E=null,P=new Zt(0,0,0,0);return{setMask:function(D){E===D||M||(t.colorMask(D,D,D,D),E=D)},setLocked:function(D){M=D},setClear:function(D,B,z,st,lt){lt===!0&&(D*=st,B*=st,z*=st),L.set(D,B,z,st),P.equals(L)===!1&&(t.clearColor(D,B,z,st),P.copy(L))},reset:function(){M=!1,E=null,P.set(-1,0,0,0)}}},i=new function(){let M=!1,L=!1,E=null,P=null,D=null;return{setReversed:function(B){if(L!==B){let z=e.get("EXT_clip_control");B?z.clipControlEXT(z.LOWER_LEFT_EXT,z.ZERO_TO_ONE_EXT):z.clipControlEXT(z.LOWER_LEFT_EXT,z.NEGATIVE_ONE_TO_ONE_EXT),L=B;let st=D;D=null,this.setClear(st)}},getReversed:function(){return L},setTest:function(B){B?pt(t.DEPTH_TEST):ct(t.DEPTH_TEST)},setMask:function(B){E===B||M||(t.depthMask(B),E=B)},setFunc:function(B){if(L&&(B=y0[B]),P!==B){switch(B){case Va:t.depthFunc(t.NEVER);break;case Ha:t.depthFunc(t.ALWAYS);break;case Ga:t.depthFunc(t.LESS);break;case ws:t.depthFunc(t.LEQUAL);break;case ka:t.depthFunc(t.EQUAL);break;case Wa:t.depthFunc(t.GEQUAL);break;case Xa:t.depthFunc(t.GREATER);break;case qa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}P=B}},setLocked:function(B){M=B},setClear:function(B){D!==B&&(L&&(B=1-B),t.clearDepth(B),D=B)},reset:function(){M=!1,E=null,P=null,D=null,L=!1}}},r=new function(){let M=!1,L=null,E=null,P=null,D=null,B=null,z=null,st=null,lt=null;return{setTest:function(j){M||(j?pt(t.STENCIL_TEST):ct(t.STENCIL_TEST))},setMask:function(j){L===j||M||(t.stencilMask(j),L=j)},setFunc:function(j,it,_t){E===j&&P===it&&D===_t||(t.stencilFunc(j,it,_t),E=j,P=it,D=_t)},setOp:function(j,it,_t){B===j&&z===it&&st===_t||(t.stencilOp(j,it,_t),B=j,z=it,st=_t)},setLocked:function(j){M=j},setClear:function(j){lt!==j&&(t.clearStencil(j),lt=j)},reset:function(){M=!1,L=null,E=null,P=null,D=null,B=null,z=null,st=null,lt=null}}},s=new WeakMap,a=new WeakMap,o={},l={},h=new WeakMap,c=[],d=null,u=!1,p=null,g=null,m=null,f=null,v=null,y=null,_=null,S=new mt(0,0,0),R=0,A=!1,I=null,V=null,U=null,F=null,k=null,W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,H=0,J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=H>=2);let K=null,et={},nt=t.getParameter(t.SCISSOR_BOX),dt=t.getParameter(t.VIEWPORT),yt=new Zt().fromArray(nt),tt=new Zt().fromArray(dt);function Z(M,L,E,P){let D=new Uint8Array(4),B=t.createTexture();t.bindTexture(M,B),t.texParameteri(M,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(M,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let z=0;z<E;z++)M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?t.texImage3D(L,0,t.RGBA,1,1,P,0,t.RGBA,t.UNSIGNED_BYTE,D):t.texImage2D(L+z,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,D);return B}let gt={};function pt(M){o[M]!==!0&&(t.enable(M),o[M]=!0)}function ct(M){o[M]!==!1&&(t.disable(M),o[M]=!1)}gt[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),gt[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),gt[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),i.setClear(1),r.setClear(0),pt(t.DEPTH_TEST),i.setFunc(ws),x(!1),C($l),pt(t.CULL_FACE),b(_i);let ot={[Nr]:t.FUNC_ADD,[cd]:t.FUNC_SUBTRACT,[ud]:t.FUNC_REVERSE_SUBTRACT};ot[dd]=t.MIN,ot[pd]=t.MAX;let bt={[fd]:t.ZERO,[md]:t.ONE,[gd]:t.SRC_COLOR,[vd]:t.SRC_ALPHA,[Ed]:t.SRC_ALPHA_SATURATE,[xd]:t.DST_COLOR,[Md]:t.DST_ALPHA,[_d]:t.ONE_MINUS_SRC_COLOR,[yd]:t.ONE_MINUS_SRC_ALPHA,[Td]:t.ONE_MINUS_DST_COLOR,[Sd]:t.ONE_MINUS_DST_ALPHA,[wd]:t.CONSTANT_COLOR,[bd]:t.ONE_MINUS_CONSTANT_COLOR,[Ad]:t.CONSTANT_ALPHA,[Rd]:t.ONE_MINUS_CONSTANT_ALPHA};function b(M,L,E,P,D,B,z,st,lt,j){if(M!==_i){if(u===!1&&(pt(t.BLEND),u=!0),M===hd)D=D||L,B=B||E,z=z||P,L===g&&D===v||(t.blendEquationSeparate(ot[L],ot[D]),g=L,v=D),E===m&&P===f&&B===y&&z===_||(t.blendFuncSeparate(bt[E],bt[P],bt[B],bt[z]),m=E,f=P,y=B,_=z),st.equals(S)!==!1&&lt===R||(t.blendColor(st.r,st.g,st.b,lt),S.copy(st),R=lt),p=M,A=!1;else if(M!==p||j!==A){if(g===Nr&&v===Nr||(t.blendEquation(t.FUNC_ADD),g=Nr,v=Nr),j)switch(M){case Es:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFunc(t.ONE,t.ONE);break;case eh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case Es:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case th:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case eh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}m=null,f=null,y=null,_=null,S.set(0,0,0),R=0,p=M,A=j}}else u===!0&&(ct(t.BLEND),u=!1)}function x(M){I!==M&&(M?t.frontFace(t.CW):t.frontFace(t.CCW),I=M)}function C(M){M!==od?(pt(t.CULL_FACE),M!==V&&(M===$l?t.cullFace(t.BACK):M===ld?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ct(t.CULL_FACE),V=M}function O(M,L,E){M?(pt(t.POLYGON_OFFSET_FILL),F===L&&k===E||(t.polygonOffset(L,E),F=L,k=E)):ct(t.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:i,stencil:r},enable:pt,disable:ct,bindFramebuffer:function(M,L){return l[M]!==L&&(t.bindFramebuffer(M,L),l[M]=L,M===t.DRAW_FRAMEBUFFER&&(l[t.FRAMEBUFFER]=L),M===t.FRAMEBUFFER&&(l[t.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(M,L){let E=c,P=!1;if(M){E=h.get(L),E===void 0&&(E=[],h.set(L,E));let D=M.textures;if(E.length!==D.length||E[0]!==t.COLOR_ATTACHMENT0){for(let B=0,z=D.length;B<z;B++)E[B]=t.COLOR_ATTACHMENT0+B;E.length=D.length,P=!0}}else E[0]!==t.BACK&&(E[0]=t.BACK,P=!0);P&&t.drawBuffers(E)},useProgram:function(M){return d!==M&&(t.useProgram(M),d=M,!0)},setBlending:b,setMaterial:function(M,L){M.side===Ee?ct(t.CULL_FACE):pt(t.CULL_FACE);let E=M.side===Ze;L&&(E=!E),x(E),M.blending===Es&&M.transparent===!1?b(_i):b(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),i.setFunc(M.depthFunc),i.setTest(M.depthTest),i.setMask(M.depthWrite),n.setMask(M.colorWrite);let P=M.stencilWrite;r.setTest(P),P&&(r.setMask(M.stencilWriteMask),r.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),r.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),O(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?pt(t.SAMPLE_ALPHA_TO_COVERAGE):ct(t.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:x,setCullFace:C,setLineWidth:function(M){M!==U&&(Y&&t.lineWidth(M),U=M)},setPolygonOffset:O,setScissorTest:function(M){M?pt(t.SCISSOR_TEST):ct(t.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=t.TEXTURE0+W-1),K!==M&&(t.activeTexture(M),K=M)},bindTexture:function(M,L,E){E===void 0&&(E=K===null?t.TEXTURE0+W-1:K);let P=et[E];P===void 0&&(P={type:void 0,texture:void 0},et[E]=P),P.type===M&&P.texture===L||(K!==E&&(t.activeTexture(E),K=E),t.bindTexture(M,L||gt[M]),P.type=M,P.texture=L)},unbindTexture:function(){let M=et[K];M!==void 0&&M.type!==void 0&&(t.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{t.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{t.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{t.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,L){let E=a.get(L);E===void 0&&(E=new WeakMap,a.set(L,E));let P=E.get(M);P===void 0&&(P=t.getUniformBlockIndex(L,M.name),E.set(M,P))},uniformBlockBinding:function(M,L){let E=a.get(L).get(M);s.get(L)!==E&&(t.uniformBlockBinding(L,E,M.__bindingPointIndex),s.set(L,E))},texStorage2D:function(){try{t.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{t.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{t.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{t.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){yt.equals(M)===!1&&(t.scissor(M.x,M.y,M.z,M.w),yt.copy(M))},viewport:function(M){tt.equals(M)===!1&&(t.viewport(M.x,M.y,M.z,M.w),tt.copy(M))},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),i.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),o={},K=null,et={},l={},h=new WeakMap,c=[],d=null,u=!1,p=null,g=null,m=null,f=null,v=null,y=null,_=null,S=new mt(0,0,0),R=0,A=!1,I=null,V=null,U=null,F=null,k=null,yt.set(0,0,t.canvas.width,t.canvas.height),tt.set(0,0,t.canvas.width,t.canvas.height),n.reset(),i.reset(),r.reset()}}}function S0(t,e,n,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new rt,c=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function g(b,x){return p?new OffscreenCanvas(b,x):Ir("canvas")}function m(b,x,C){let O=1,M=bt(b);if((M.width>C||M.height>C)&&(O=C/Math.max(M.width,M.height)),O<1){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let L=Math.floor(O*M.width),E=Math.floor(O*M.height);d===void 0&&(d=g(L,E));let P=x?g(L,E):d;return P.width=L,P.height=E,P.getContext("2d").drawImage(b,0,0,L,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+L+"x"+E+")."),P}return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),b}return b}function f(b){return b.generateMipmaps}function v(b){t.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(b,x,C,O,M=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let L=x;if(x===t.RED&&(C===t.FLOAT&&(L=t.R32F),C===t.HALF_FLOAT&&(L=t.R16F),C===t.UNSIGNED_BYTE&&(L=t.R8)),x===t.RED_INTEGER&&(C===t.UNSIGNED_BYTE&&(L=t.R8UI),C===t.UNSIGNED_SHORT&&(L=t.R16UI),C===t.UNSIGNED_INT&&(L=t.R32UI),C===t.BYTE&&(L=t.R8I),C===t.SHORT&&(L=t.R16I),C===t.INT&&(L=t.R32I)),x===t.RG&&(C===t.FLOAT&&(L=t.RG32F),C===t.HALF_FLOAT&&(L=t.RG16F),C===t.UNSIGNED_BYTE&&(L=t.RG8)),x===t.RG_INTEGER&&(C===t.UNSIGNED_BYTE&&(L=t.RG8UI),C===t.UNSIGNED_SHORT&&(L=t.RG16UI),C===t.UNSIGNED_INT&&(L=t.RG32UI),C===t.BYTE&&(L=t.RG8I),C===t.SHORT&&(L=t.RG16I),C===t.INT&&(L=t.RG32I)),x===t.RGB_INTEGER&&(C===t.UNSIGNED_BYTE&&(L=t.RGB8UI),C===t.UNSIGNED_SHORT&&(L=t.RGB16UI),C===t.UNSIGNED_INT&&(L=t.RGB32UI),C===t.BYTE&&(L=t.RGB8I),C===t.SHORT&&(L=t.RGB16I),C===t.INT&&(L=t.RGB32I)),x===t.RGBA_INTEGER&&(C===t.UNSIGNED_BYTE&&(L=t.RGBA8UI),C===t.UNSIGNED_SHORT&&(L=t.RGBA16UI),C===t.UNSIGNED_INT&&(L=t.RGBA32UI),C===t.BYTE&&(L=t.RGBA8I),C===t.SHORT&&(L=t.RGBA16I),C===t.INT&&(L=t.RGBA32I)),x===t.RGB&&C===t.UNSIGNED_INT_5_9_9_9_REV&&(L=t.RGB9_E5),x===t.RGBA){let E=M?Oh:kt.getTransfer(O);C===t.FLOAT&&(L=t.RGBA32F),C===t.HALF_FLOAT&&(L=t.RGBA16F),C===t.UNSIGNED_BYTE&&(L=E===ee?t.SRGB8_ALPHA8:t.RGBA8),C===t.UNSIGNED_SHORT_4_4_4_4&&(L=t.RGBA4),C===t.UNSIGNED_SHORT_5_5_5_1&&(L=t.RGB5_A1)}return L!==t.R16F&&L!==t.R32F&&L!==t.RG16F&&L!==t.RG32F&&L!==t.RGBA16F&&L!==t.RGBA32F||e.get("EXT_color_buffer_float"),L}function S(b,x){let C;return b?x===null||x===Or||x===Br?C=t.DEPTH24_STENCIL8:x===yi?C=t.DEPTH32F_STENCIL8:x===As&&(C=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Or||x===Br?C=t.DEPTH_COMPONENT24:x===yi?C=t.DEPTH_COMPONENT32F:x===As&&(C=t.DEPTH_COMPONENT16),C}function R(b,x){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==qn&&b.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){let x=b.target;x.removeEventListener("dispose",A),function(C){let O=i.get(C);if(O.__webglInit===void 0)return;let M=C.source,L=u.get(M);if(L){let E=L[O.__cacheKey];E.usedTimes--,E.usedTimes===0&&V(C),Object.keys(L).length===0&&u.delete(M)}i.remove(C)}(x),x.isVideoTexture&&c.delete(x)}function I(b){let x=b.target;x.removeEventListener("dispose",I),function(C){let O=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(O.__webglFramebuffer[L]))for(let E=0;E<O.__webglFramebuffer[L].length;E++)t.deleteFramebuffer(O.__webglFramebuffer[L][E]);else t.deleteFramebuffer(O.__webglFramebuffer[L]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[L])}else{if(Array.isArray(O.__webglFramebuffer))for(let L=0;L<O.__webglFramebuffer.length;L++)t.deleteFramebuffer(O.__webglFramebuffer[L]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let L=0;L<O.__webglColorRenderbuffer.length;L++)O.__webglColorRenderbuffer[L]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[L]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let M=C.textures;for(let L=0,E=M.length;L<E;L++){let P=i.get(M[L]);P.__webglTexture&&(t.deleteTexture(P.__webglTexture),a.memory.textures--),i.remove(M[L])}i.remove(C)}(x)}function V(b){let x=i.get(b);t.deleteTexture(x.__webglTexture);let C=b.source;delete u.get(C)[x.__cacheKey],a.memory.textures--}let U=0;function F(b,x){let C=i.get(b);if(b.isVideoTexture&&function(O){let M=a.render.frame;c.get(O)!==M&&(c.set(O,M),O.update())}(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&C.__version!==b.version){let O=b.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void et(C,b,x);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else b.isExternalTexture&&(C.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,C.__webglTexture,t.TEXTURE0+x)}let k={[fn]:t.REPEAT,[Ji]:t.CLAMP_TO_EDGE,[ja]:t.MIRRORED_REPEAT},W={[qn]:t.NEAREST,[Ka]:t.NEAREST_MIPMAP_NEAREST,[ji]:t.NEAREST_MIPMAP_LINEAR,[He]:t.LINEAR,[Fr]:t.LINEAR_MIPMAP_NEAREST,[Yn]:t.LINEAR_MIPMAP_LINEAR},Y={[Jd]:t.NEVER,[ep]:t.ALWAYS,[jd]:t.LESS,[Bh]:t.LEQUAL,[Kd]:t.EQUAL,[tp]:t.GEQUAL,[$d]:t.GREATER,[Qd]:t.NOTEQUAL};function H(b,x){if(x.type!==yi||e.has("OES_texture_float_linear")!==!1||x.magFilter!==He&&x.magFilter!==Fr&&x.magFilter!==ji&&x.magFilter!==Yn&&x.minFilter!==He&&x.minFilter!==Fr&&x.minFilter!==ji&&x.minFilter!==Yn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,k[x.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,k[x.wrapT]),b!==t.TEXTURE_3D&&b!==t.TEXTURE_2D_ARRAY||t.texParameteri(b,t.TEXTURE_WRAP_R,k[x.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,W[x.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,W[x.minFilter]),x.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Y[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qn)return;if(x.minFilter!==ji&&x.minFilter!==Yn)return;if(x.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function J(b,x){let C=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));let O=x.source,M=u.get(O);M===void 0&&(M={},u.set(O,M));let L=function(E){let P=[];return P.push(E.wrapS),P.push(E.wrapT),P.push(E.wrapR||0),P.push(E.magFilter),P.push(E.minFilter),P.push(E.anisotropy),P.push(E.internalFormat),P.push(E.format),P.push(E.type),P.push(E.generateMipmaps),P.push(E.premultiplyAlpha),P.push(E.flipY),P.push(E.unpackAlignment),P.push(E.colorSpace),P.join()}(x);if(L!==b.__cacheKey){M[L]===void 0&&(M[L]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,C=!0),M[L].usedTimes++;let E=M[b.__cacheKey];E!==void 0&&(M[b.__cacheKey].usedTimes--,E.usedTimes===0&&V(x)),b.__cacheKey=L,b.__webglTexture=M[L].texture}return C}function K(b,x,C){return Math.floor(Math.floor(b/C)/x)}function et(b,x,C){let O=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=t.TEXTURE_3D);let M=J(b,x),L=x.source;n.bindTexture(O,b.__webglTexture,t.TEXTURE0+C);let E=i.get(L);if(L.version!==E.__version||M===!0){n.activeTexture(t.TEXTURE0+C);let P=kt.getPrimaries(kt.workingColorSpace),D=x.colorSpace===Jn?null:kt.getPrimaries(x.colorSpace),B=x.colorSpace===Jn||P===D?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let z=m(x.image,!1,r.maxTextureSize);z=ot(x,z);let st=s.convert(x.format,x.colorSpace),lt=s.convert(x.type),j,it=_(x.internalFormat,st,lt,x.colorSpace,x.isVideoTexture);H(O,x);let _t=x.mipmaps,Tt=x.isVideoTexture!==!0,Pt=E.__version===void 0||M===!0,Bt=L.dataReady,Ct=R(x,z);if(x.isDepthTexture)it=S(x.format===Cs,x.type),Pt&&(Tt?n.texStorage2D(t.TEXTURE_2D,1,it,z.width,z.height):n.texImage2D(t.TEXTURE_2D,0,it,z.width,z.height,0,st,lt,null));else if(x.isDataTexture)if(_t.length>0){Tt&&Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,it,_t[0].width,_t[0].height);for(let $=0,ht=_t.length;$<ht;$++)j=_t[$],Tt?Bt&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,j.width,j.height,st,lt,j.data):n.texImage2D(t.TEXTURE_2D,$,it,j.width,j.height,0,st,lt,j.data);x.generateMipmaps=!1}else Tt?(Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,it,z.width,z.height),Bt&&function($,ht,St,Ce){let Mt=$.updateRanges;if(Mt.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,ht.width,ht.height,St,Ce,ht.data);else{Mt.sort((De,Me)=>De.start-Me.start);let zt=0;for(let De=1;De<Mt.length;De++){let Me=Mt[zt],qt=Mt[De],Di=Me.start+Me.count,Fi=K(qt.start,ht.width,4),Oi=K(Me.start,ht.width,4);qt.start<=Di+1&&Fi===Oi&&K(qt.start+qt.count-1,ht.width,4)===Fi?Me.count=Math.max(Me.count,qt.start+qt.count-Me.start):(++zt,Mt[zt]=qt)}Mt.length=zt+1;let Wt=t.getParameter(t.UNPACK_ROW_LENGTH),si=t.getParameter(t.UNPACK_SKIP_PIXELS),N=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,ht.width);for(let De=0,Me=Mt.length;De<Me;De++){let qt=Mt[De],Di=Math.floor(qt.start/4),Fi=Math.ceil(qt.count/4),Oi=Di%ht.width,rs=Math.floor(Di/ht.width),Ks=Fi;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Oi),t.pixelStorei(t.UNPACK_SKIP_ROWS,rs),n.texSubImage2D(t.TEXTURE_2D,0,Oi,rs,Ks,1,St,Ce,ht.data)}$.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Wt),t.pixelStorei(t.UNPACK_SKIP_PIXELS,si),t.pixelStorei(t.UNPACK_SKIP_ROWS,N)}}(x,z,st,lt)):n.texImage2D(t.TEXTURE_2D,0,it,z.width,z.height,0,st,lt,z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Tt&&Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ct,it,_t[0].width,_t[0].height,z.depth);for(let $=0,ht=_t.length;$<ht;$++)if(j=_t[$],x.format!==Tn)if(st!==null)if(Tt){if(Bt)if(x.layerUpdates.size>0){let St=fc(j.width,j.height,x.format,x.type);for(let Ce of x.layerUpdates){let Mt=j.data.subarray(Ce*St/j.data.BYTES_PER_ELEMENT,(Ce+1)*St/j.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Ce,j.width,j.height,1,st,Mt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,j.width,j.height,z.depth,st,j.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,it,j.width,j.height,z.depth,0,j.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?Bt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,j.width,j.height,z.depth,st,lt,j.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,it,j.width,j.height,z.depth,0,st,lt,j.data)}else{Tt&&Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,it,_t[0].width,_t[0].height);for(let $=0,ht=_t.length;$<ht;$++)j=_t[$],x.format!==Tn?st!==null?Tt?Bt&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,j.width,j.height,st,j.data):n.compressedTexImage2D(t.TEXTURE_2D,$,it,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?Bt&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,j.width,j.height,st,lt,j.data):n.texImage2D(t.TEXTURE_2D,$,it,j.width,j.height,0,st,lt,j.data)}else if(x.isDataArrayTexture)if(Tt){if(Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ct,it,z.width,z.height,z.depth),Bt)if(x.layerUpdates.size>0){let $=fc(z.width,z.height,x.format,x.type);for(let ht of x.layerUpdates){let St=z.data.subarray(ht*$/z.data.BYTES_PER_ELEMENT,(ht+1)*$/z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ht,z.width,z.height,1,st,lt,St)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,st,lt,z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,it,z.width,z.height,z.depth,0,st,lt,z.data);else if(x.isData3DTexture)Tt?(Pt&&n.texStorage3D(t.TEXTURE_3D,Ct,it,z.width,z.height,z.depth),Bt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,st,lt,z.data)):n.texImage3D(t.TEXTURE_3D,0,it,z.width,z.height,z.depth,0,st,lt,z.data);else if(x.isFramebufferTexture){if(Pt)if(Tt)n.texStorage2D(t.TEXTURE_2D,Ct,it,z.width,z.height);else{let{width:$,height:ht}=z;for(let St=0;St<Ct;St++)n.texImage2D(t.TEXTURE_2D,St,it,$,ht,0,st,lt,null),$>>=1,ht>>=1}}else if(_t.length>0){if(Tt&&Pt){let $=bt(_t[0]);n.texStorage2D(t.TEXTURE_2D,Ct,it,$.width,$.height)}for(let $=0,ht=_t.length;$<ht;$++)j=_t[$],Tt?Bt&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,st,lt,j):n.texImage2D(t.TEXTURE_2D,$,it,st,lt,j);x.generateMipmaps=!1}else if(Tt){if(Pt){let $=bt(z);n.texStorage2D(t.TEXTURE_2D,Ct,it,$.width,$.height)}Bt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,st,lt,z)}else n.texImage2D(t.TEXTURE_2D,0,it,st,lt,z);f(x)&&v(O),E.__version=L.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function nt(b,x,C,O,M,L){let E=s.convert(C.format,C.colorSpace),P=s.convert(C.type),D=_(C.internalFormat,E,P,C.colorSpace),B=i.get(x),z=i.get(C);if(z.__renderTarget=x,!B.__hasExternalTextures){let st=Math.max(1,x.width>>L),lt=Math.max(1,x.height>>L);M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?n.texImage3D(M,L,D,st,lt,x.depth,0,E,P,null):n.texImage2D(M,L,D,st,lt,0,E,P,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),ct(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,M,z.__webglTexture,0,pt(x)):(M===t.TEXTURE_2D||M>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&M<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,M,z.__webglTexture,L),n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(b,x,C){if(t.bindRenderbuffer(t.RENDERBUFFER,b),x.depthBuffer){let O=x.depthTexture,M=O&&O.isDepthTexture?O.type:null,L=S(x.stencilBuffer,M),E=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,P=pt(x);ct(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P,L,x.width,x.height):C?t.renderbufferStorageMultisample(t.RENDERBUFFER,P,L,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,L,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,E,t.RENDERBUFFER,b)}else{let O=x.textures;for(let M=0;M<O.length;M++){let L=O[M],E=s.convert(L.format,L.colorSpace),P=s.convert(L.type),D=_(L.internalFormat,E,P,L.colorSpace),B=pt(x);C&&ct(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,B,D,x.width,x.height):ct(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,B,D,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,D,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function yt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!x.depthTexture||!x.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let C=i.get(x.depthTexture);C.__renderTarget=x,C.__webglTexture&&x.depthTexture.image.width===x.width&&x.depthTexture.image.height===x.height||(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);let O=C.__webglTexture,M=pt(x);if(x.depthTexture.format===$a)ct(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0,M):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0);else{if(x.depthTexture.format!==Cs)throw Error("Unknown depthTexture format");ct(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0,M):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0)}}function tt(b){let x=i.get(b),C=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let O=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){let M=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",M)};O.addEventListener("dispose",M),x.__depthDisposeCallback=M}x.__boundDepthTexture=O}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(C)throw Error("target.depthTexture not supported in Cube render targets");let O=b.texture.mipmaps;O&&O.length>0?yt(x.__webglFramebuffer[0],b):yt(x.__webglFramebuffer,b)}else if(C){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=t.createRenderbuffer(),dt(x.__webglDepthbuffer[O],b,!1);else{let M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,L=x.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,L),t.framebufferRenderbuffer(t.FRAMEBUFFER,M,t.RENDERBUFFER,L)}}else{let O=b.texture.mipmaps;if(O&&O.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),dt(x.__webglDepthbuffer,b,!1);else{let M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,L=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,L),t.framebufferRenderbuffer(t.FRAMEBUFFER,M,t.RENDERBUFFER,L)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}let Z=[],gt=[];function pt(b){return Math.min(r.maxSamples,b.samples)}function ct(b){let x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ot(b,x){let{colorSpace:C,format:O,type:M}=b;return b.isCompressedTexture===!0||b.isVideoTexture===!0||C!==Oe&&C!==Jn&&(kt.getTransfer(C)===ee?O===Tn&&M===vi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),x}function bt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=function(){let b=U;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b},this.resetTextureUnits=function(){U=0},this.setTexture2D=F,this.setTexture2DArray=function(b,x){let C=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&C.__version!==b.version?et(C,b,x):n.bindTexture(t.TEXTURE_2D_ARRAY,C.__webglTexture,t.TEXTURE0+x)},this.setTexture3D=function(b,x){let C=i.get(b);b.isRenderTargetTexture===!1&&b.version>0&&C.__version!==b.version?et(C,b,x):n.bindTexture(t.TEXTURE_3D,C.__webglTexture,t.TEXTURE0+x)},this.setTextureCube=function(b,x){let C=i.get(b);b.version>0&&C.__version!==b.version?function(O,M,L){if(M.image.length!==6)return;let E=J(O,M),P=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+L);let D=i.get(P);if(P.version!==D.__version||E===!0){n.activeTexture(t.TEXTURE0+L);let B=kt.getPrimaries(kt.workingColorSpace),z=M.colorSpace===Jn?null:kt.getPrimaries(M.colorSpace),st=M.colorSpace===Jn||B===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let lt=M.isCompressedTexture||M.image[0].isCompressedTexture,j=M.image[0]&&M.image[0].isDataTexture,it=[];for(let Mt=0;Mt<6;Mt++)it[Mt]=lt||j?j?M.image[Mt].image:M.image[Mt]:m(M.image[Mt],!0,r.maxCubemapSize),it[Mt]=ot(M,it[Mt]);let _t=it[0],Tt=s.convert(M.format,M.colorSpace),Pt=s.convert(M.type),Bt=_(M.internalFormat,Tt,Pt,M.colorSpace),Ct=M.isVideoTexture!==!0,$=D.__version===void 0||E===!0,ht=P.dataReady,St,Ce=R(M,_t);if(H(t.TEXTURE_CUBE_MAP,M),lt){Ct&&$&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,Bt,_t.width,_t.height);for(let Mt=0;Mt<6;Mt++){St=it[Mt].mipmaps;for(let zt=0;zt<St.length;zt++){let Wt=St[zt];M.format!==Tn?Tt!==null?Ct?ht&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt,0,0,Wt.width,Wt.height,Tt,Wt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt,Bt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt,0,0,Wt.width,Wt.height,Tt,Pt,Wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt,Bt,Wt.width,Wt.height,0,Tt,Pt,Wt.data)}}}else{if(St=M.mipmaps,Ct&&$){St.length>0&&Ce++;let Mt=bt(it[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,Bt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(j){Ct?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,it[Mt].width,it[Mt].height,Tt,Pt,it[Mt].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Bt,it[Mt].width,it[Mt].height,0,Tt,Pt,it[Mt].data);for(let zt=0;zt<St.length;zt++){let Wt=St[zt].image[Mt].image;Ct?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt+1,0,0,Wt.width,Wt.height,Tt,Pt,Wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt+1,Bt,Wt.width,Wt.height,0,Tt,Pt,Wt.data)}}else{Ct?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Tt,Pt,it[Mt]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Bt,Tt,Pt,it[Mt]);for(let zt=0;zt<St.length;zt++){let Wt=St[zt];Ct?ht&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt+1,0,0,Tt,Pt,Wt.image[Mt]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt+1,Bt,Tt,Pt,Wt.image[Mt])}}}f(M)&&v(t.TEXTURE_CUBE_MAP),D.__version=P.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}(C,b,x):n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+x)},this.rebindTextures=function(b,x,C){let O=i.get(b);x!==void 0&&nt(O.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),C!==void 0&&tt(b)},this.setupRenderTarget=function(b){let x=b.texture,C=i.get(b),O=i.get(x);b.addEventListener("dispose",I);let M=b.textures,L=b.isWebGLCubeRenderTarget===!0,E=M.length>1;if(E||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=x.version,a.memory.textures++),L){C.__webglFramebuffer=[];for(let P=0;P<6;P++)if(x.mipmaps&&x.mipmaps.length>0){C.__webglFramebuffer[P]=[];for(let D=0;D<x.mipmaps.length;D++)C.__webglFramebuffer[P][D]=t.createFramebuffer()}else C.__webglFramebuffer[P]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){C.__webglFramebuffer=[];for(let P=0;P<x.mipmaps.length;P++)C.__webglFramebuffer[P]=t.createFramebuffer()}else C.__webglFramebuffer=t.createFramebuffer();if(E)for(let P=0,D=M.length;P<D;P++){let B=i.get(M[P]);B.__webglTexture===void 0&&(B.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&ct(b)===!1){C.__webglMultisampledFramebuffer=t.createFramebuffer(),C.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let P=0;P<M.length;P++){let D=M[P];C.__webglColorRenderbuffer[P]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,C.__webglColorRenderbuffer[P]);let B=s.convert(D.format,D.colorSpace),z=s.convert(D.type),st=_(D.internalFormat,B,z,D.colorSpace,b.isXRRenderTarget===!0),lt=pt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,lt,st,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+P,t.RENDERBUFFER,C.__webglColorRenderbuffer[P])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(C.__webglDepthRenderbuffer=t.createRenderbuffer(),dt(C.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(L){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),H(t.TEXTURE_CUBE_MAP,x);for(let P=0;P<6;P++)if(x.mipmaps&&x.mipmaps.length>0)for(let D=0;D<x.mipmaps.length;D++)nt(C.__webglFramebuffer[P][D],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+P,D);else nt(C.__webglFramebuffer[P],b,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);f(x)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(E){for(let P=0,D=M.length;P<D;P++){let B=M[P],z=i.get(B),st=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(st=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(st,z.__webglTexture),H(st,B),nt(C.__webglFramebuffer,b,B,t.COLOR_ATTACHMENT0+P,st,0),f(B)&&v(st)}n.unbindTexture()}else{let P=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(P=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(P,O.__webglTexture),H(P,x),x.mipmaps&&x.mipmaps.length>0)for(let D=0;D<x.mipmaps.length;D++)nt(C.__webglFramebuffer[D],b,x,t.COLOR_ATTACHMENT0,P,D);else nt(C.__webglFramebuffer,b,x,t.COLOR_ATTACHMENT0,P,0);f(x)&&v(P),n.unbindTexture()}b.depthBuffer&&tt(b)},this.updateRenderTargetMipmap=function(b){let x=b.textures;for(let C=0,O=x.length;C<O;C++){let M=x[C];if(f(M)){let L=y(b),E=i.get(M).__webglTexture;n.bindTexture(L,E),v(L),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(b.samples>0){if(ct(b)===!1){let{textures:x,width:C,height:O}=b,M=t.COLOR_BUFFER_BIT,L=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,E=i.get(b),P=x.length>1;if(P)for(let B=0;B<x.length;B++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer);let D=b.texture.mipmaps;D&&D.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let B=0;B<x.length;B++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(M|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(M|=t.STENCIL_BUFFER_BIT)),P){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,E.__webglColorRenderbuffer[B]);let z=i.get(x[B]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,z,0)}t.blitFramebuffer(0,0,C,O,0,0,C,O,M,t.NEAREST),l===!0&&(Z.length=0,gt.length=0,Z.push(t.COLOR_ATTACHMENT0+B),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Z.push(L),gt.push(L),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,gt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),P)for(let B=0;B<x.length;B++){n.bindFramebuffer(t.FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.RENDERBUFFER,E.__webglColorRenderbuffer[B]);let z=i.get(x[B]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.TEXTURE_2D,z,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let x=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}},this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=ct}function x0(t,e){return{convert:function(n,i=Jn){let r,s=kt.getTransfer(i);if(n===vi)return t.UNSIGNED_BYTE;if(n===rh)return t.UNSIGNED_SHORT_4_4_4_4;if(n===sh)return t.UNSIGNED_SHORT_5_5_5_1;if(n===Vd)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return t.BYTE;if(n===zd)return t.SHORT;if(n===As)return t.UNSIGNED_SHORT;if(n===ih)return t.INT;if(n===Or)return t.UNSIGNED_INT;if(n===yi)return t.FLOAT;if(n===Rs)return t.HALF_FLOAT;if(n===Hd)return t.ALPHA;if(n===Gd)return t.RGB;if(n===Tn)return t.RGBA;if(n===$a)return t.DEPTH_COMPONENT;if(n===Cs)return t.DEPTH_STENCIL;if(n===kd)return t.RED;if(n===ah)return t.RED_INTEGER;if(n===Wd)return t.RG;if(n===oh)return t.RG_INTEGER;if(n===lh)return t.RGBA_INTEGER;if(n===Qa||n===to||n===eo||n===no)if(s===ee){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(n===Qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(n===Qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===hh||n===ch||n===uh||n===dh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(n===hh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===ph||n===fh||n===mh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(n===ph||n===fh)return s===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(n===gh||n===_h||n===vh||n===yh||n===Mh||n===Sh||n===xh||n===Th||n===Eh||n===wh||n===bh||n===Ah||n===Rh||n===Ch){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(n===gh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_h)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ah)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ch)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===io||n===Lh||n===Ih){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(n===io)return s===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ih)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===Xd||n===Ph||n===Uh||n===Nh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Br?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}}}class Ec extends he{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}class Kp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ec(t.texture);t.depthNear===e.depthNear&&t.depthFar===e.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $p extends jn{constructor(t,e){super();let n=this,i=null,r=1,s=null,a="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,g=new Kp,m={},f=e.getContextAttributes(),v=null,y=null,_=[],S=[],R=new rt,A=null,I=new ge;I.viewport=new Zt;let V=new ge;V.viewport=new Zt;let U=[I,V],F=new cc,k=null,W=null;function Y(tt){let Z=S.indexOf(tt.inputSource);if(Z===-1)return;let gt=_[Z];gt!==void 0&&(gt.update(tt.inputSource,tt.frame,l||s),gt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function H(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",J);for(let tt=0;tt<_.length;tt++){let Z=S[tt];Z!==null&&(S[tt]=null,_[tt].disconnect(Z))}k=null,W=null,g.reset();for(let tt in m)delete m[tt];t.setRenderTarget(v),u=null,d=null,c=null,i=null,y=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function J(tt){for(let Z=0;Z<tt.removed.length;Z++){let gt=tt.removed[Z],pt=S.indexOf(gt);pt>=0&&(S[pt]=null,_[pt].disconnect(gt))}for(let Z=0;Z<tt.added.length;Z++){let gt=tt.added[Z],pt=S.indexOf(gt);if(pt===-1){for(let ot=0;ot<_.length;ot++){if(ot>=S.length){S.push(gt),pt=ot;break}if(S[ot]===null){S[ot]=gt,pt=ot;break}}if(pt===-1)break}let ct=_[pt];ct&&ct.connect(gt)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Z=_[tt];return Z===void 0&&(Z=new Us,_[tt]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(tt){let Z=_[tt];return Z===void 0&&(Z=new Us,_[tt]=Z),Z.getGripSpace()},this.getHand=function(tt){let Z=_[tt];return Z===void 0&&(Z=new Us,_[tt]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(tt){if(i=tt,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",H),i.addEventListener("inputsourceschange",J),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&(c=new XRWebGLBinding(i,e)),c!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,gt=null,pt=null;f.depth&&(pt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=f.stencil?Cs:$a,gt=f.stencil?Br:Or);let ct={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};d=c.createProjectionLayer(ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Kn(d.textureWidth,d.textureHeight,{format:Tn,type:vi,depthTexture:new _o(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Z={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Kn(u.framebufferWidth,u.framebufferHeight,{format:Tn,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),yt.setContext(i),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let K=new T,et=new T;function nt(tt,Z){Z===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Z.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(i===null)return;let{near:Z,far:gt}=tt;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(gt=g.depthFar)),F.near=V.near=I.near=Z,F.far=V.far=I.far=gt,k===F.near&&W===F.far||(i.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,W=F.far),F.layers.mask=6|tt.layers.mask,I.layers.mask=3&F.layers.mask,V.layers.mask=5&F.layers.mask;let pt=tt.parent,ct=F.cameras;nt(F,pt);for(let ot=0;ot<ct.length;ot++)nt(ct[ot],pt);ct.length===2?function(ot,bt,b){K.setFromMatrixPosition(bt.matrixWorld),et.setFromMatrixPosition(b.matrixWorld);let x=K.distanceTo(et),C=bt.projectionMatrix.elements,O=b.projectionMatrix.elements,M=C[14]/(C[10]-1),L=C[14]/(C[10]+1),E=(C[9]+1)/C[5],P=(C[9]-1)/C[5],D=(C[8]-1)/C[0],B=(O[8]+1)/O[0],z=M*D,st=M*B,lt=x/(-D+B),j=lt*-D;if(bt.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(j),ot.translateZ(lt),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),C[10]===-1)ot.projectionMatrix.copy(bt.projectionMatrix),ot.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{let it=M+lt,_t=L+lt,Tt=z-j,Pt=st+(x-j),Bt=E*L/_t*it,Ct=P*L/_t*it;ot.projectionMatrix.makePerspective(Tt,Pt,Bt,Ct,it,_t),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}(F,I,V):F.projectionMatrix.copy(I.projectionMatrix),function(ot,bt,b){b===null?ot.matrix.copy(bt.matrixWorld):(ot.matrix.copy(b.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(bt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(bt.projectionMatrix),ot.projectionMatrixInverse.copy(bt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=2*Wi*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}(tt,F,pt)},this.getCamera=function(){return F},this.getFoveation=function(){if(d!==null||u!==null)return o},this.setFoveation=function(tt){o=tt,d!==null&&(d.fixedFoveation=tt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=tt)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(tt){return m[tt]};let dt=null,yt=new Hp;yt.setAnimationLoop(function(tt,Z){if(h=Z.getViewerPose(l||s),p=Z,h!==null){let gt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let pt=!1;gt.length!==F.cameras.length&&(F.cameras.length=0,pt=!0);for(let ot=0;ot<gt.length;ot++){let bt=gt[ot],b=null;if(u!==null)b=u.getViewport(bt);else{let C=c.getViewSubImage(d,bt);b=C.viewport,ot===0&&(t.setRenderTargetTextures(y,C.colorTexture,C.depthStencilTexture),t.setRenderTarget(y))}let x=U[ot];x===void 0&&(x=new ge,x.layers.enable(ot),x.viewport=new Zt,U[ot]=x),x.matrix.fromArray(bt.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.projectionMatrix.fromArray(bt.projectionMatrix),x.projectionMatrixInverse.copy(x.projectionMatrix).invert(),x.viewport.set(b.x,b.y,b.width,b.height),ot===0&&(F.matrix.copy(x.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),pt===!0&&F.cameras.push(x)}let ct=i.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&c){let ot=c.getDepthInformation(gt[0]);ot&&ot.isValid&&ot.texture&&g.init(ot,i.renderState)}if(ct&&ct.includes("camera-access")&&(t.state.unbindTexture(),c))for(let ot=0;ot<gt.length;ot++){let bt=gt[ot].camera;if(bt){let b=m[bt];b||(b=new Ec,m[bt]=b);let x=c.getCameraImage(bt);b.sourceTexture=x}}}for(let gt=0;gt<_.length;gt++){let pt=S[gt],ct=_[gt];pt!==null&&ct!==void 0&&ct.update(pt,Z,l||s)}dt&&dt(tt,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),p=null}),this.setAnimationLoop=function(tt){dt=tt},this.dispose=function(){}}}var ir=new nn,T0=new Et;function E0(t,e){function n(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,n(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,n(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,n(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Ze&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,n(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Ze&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,n(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,n(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,ir.copy(l),ir.x*=-1,ir.y*=-1,ir.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),r.envMapRotation.value.setFromMatrix4(T0.makeRotationFromEuler(ir)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,qh(t)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}(r,s)):s.isMeshPhongMaterial?(i(r,s),function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,0.0001)}(r,s)):s.isMeshStandardMaterial?(i(r,s),function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,h.roughnessMapTransform)),c.envMap&&(h.envMapIntensity.value=c.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(h,c,d){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ze&&h.clearcoatNormalScale.value.negate())),c.dispersion>0&&(h.dispersion.value=c.dispersion),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=d.texture,h.transmissionSamplerSize.value.set(d.width,d.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,h.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),function(h,c){c.matcap&&(h.matcap.value=c.matcap)}(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),function(h,c){let d=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(d.matrixWorld),h.nearDistance.value=d.shadow.camera.near,h.farDistance.value=d.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,n(c.map,h.mapTransform))}(r,s),s.isLineDashedMaterial&&function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}(r,s)):s.isPointsMaterial?function(h,c,d,u){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*d,h.scale.value=0.5*u,c.map&&(h.map.value=c.map,n(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,n(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,n(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,n(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function w0(t,e,n,i){let r={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,g){let m=d.value,f=u+"_"+p;if(g[f]===void 0)return g[f]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let v=g[f];if(typeof m=="number"||typeof m=="boolean"){if(v!==m)return g[f]=m,!0}else if(v.equals(m)===!1)return v.copy(m),!0}return!1}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),t.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=r[d.id];p===void 0&&(function(f){let v=f.uniforms,y=0,_=16;for(let R=0,A=v.length;R<A;R++){let I=Array.isArray(v[R])?v[R]:[v[R]];for(let V=0,U=I.length;V<U;V++){let F=I[V],k=Array.isArray(F.value)?F.value:[F.value];for(let W=0,Y=k.length;W<Y;W++){let H=h(k[W]),J=y%_,K=J%H.boundary,et=J+K;y+=K,et!==0&&_-et<H.storage&&(y+=_-et),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=H.storage}}}let S=y%_;S>0&&(y+=_-S),f.__size=y,f.__cache={}}(d),p=function(f){let v=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=v;let y=t.createBuffer(),_=f.__size,S=f.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,_,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}(d),r[d.id]=p,d.addEventListener("dispose",c));let g=u.program;i.updateUBOMapping(d,g);let m=e.render.frame;s[d.id]!==m&&(function(f){let v=r[f.id],y=f.uniforms,_=f.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let S=0,R=y.length;S<R;S++){let A=Array.isArray(y[S])?y[S]:[y[S]];for(let I=0,V=A.length;I<V;I++){let U=A[I];if(l(U,S,I,_)===!0){let F=U.__offset,k=Array.isArray(U.value)?U.value:[U.value],W=0;for(let Y=0;Y<k.length;Y++){let H=k[Y],J=h(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,F+W,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}(d),s[d.id]=m)},dispose:function(){for(let d in r)t.deleteBuffer(r[d]);a=[],r={},s={}}}}class wc{constructor(t={}){let{canvas:e=np(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=t,u;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=s;let p=new Uint32Array(4),g=new Int32Array(4),m=null,f=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,S=!1;this._outputColorSpace=me;let R=0,A=0,I=null,V=-1,U=null,F=new Zt,k=new Zt,W=null,Y=new mt(0),H=0,J=e.width,K=e.height,et=1,nt=null,dt=null,yt=new Zt(0,0,J,K),tt=new Zt(0,0,J,K),Z=!1,gt=new $i,pt=!1,ct=!1,ot=new Et,bt=new T,b=new Zt,x={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},C=!1;function O(){return I===null?et:1}let M,L,E,P,D,B,z,st,lt,j,it,_t,Tt,Pt,Bt,Ct,$,ht,St,Ce,Mt,zt,Wt,si,N=n;function De(w,G){return e.getContext(w,G)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ad}`),e.addEventListener("webglcontextlost",Di,!1),e.addEventListener("webglcontextrestored",Fi,!1),e.addEventListener("webglcontextcreationerror",Oi,!1),N===null){if(N=De("webgl2",w),N===null)throw De("webgl2")?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}function Me(){M=new og(N),M.init(),zt=new x0(N,M),L=new ng(N,M,t,zt),E=new M0(N,M),L.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),P=new cg(N),D=new c0,B=new S0(N,M,E,D,L,zt,P),z=new rg(_),st=new ag(_),lt=new Km(N),Wt=new tg(N,lt),j=new lg(N,lt,P,Wt),it=new dg(N,j,lt,P),St=new ug(N,L,B),Ct=new ig(D),_t=new h0(_,z,st,M,L,Wt,Ct),Tt=new E0(_,D),Pt=new d0,Bt=new _0(M),ht=new Qm(_,z,st,E,it,u,o),$=new v0(_,it,L),si=new w0(N,P,L,E),Ce=new eg(N,M,P),Mt=new hg(N,M,P),P.programs=_t.programs,_.capabilities=L,_.extensions=M,_.properties=D,_.renderLists=Pt,_.shadowMap=$,_.state=E,_.info=P}Me();let qt=new $p(_,N);function Di(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Fi(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let w=P.autoReset,G=$.enabled,q=$.autoUpdate,Q=$.needsUpdate,X=$.type;Me(),P.autoReset=w,$.enabled=G,$.autoUpdate=q,$.needsUpdate=Q,$.type=X}function Oi(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rs(w){let G=w.target;G.removeEventListener("dispose",rs),function(q){(function(Q){let X=D.get(Q).programs;X!==void 0&&(X.forEach(function(at){_t.releaseProgram(at)}),Q.isShaderMaterial&&_t.releaseShaderCache(Q))})(q),D.remove(q)}(G)}function Ks(w,G,q){w.transparent===!0&&w.side===Ee&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,ta(w,G,q),w.side=xn,w.needsUpdate=!0,ta(w,G,q),w.side=Ee):ta(w,G,q)}this.xr=qt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=M.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=M.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(J,K,!1))},this.getSize=function(w){return w.set(J,K)},this.setSize=function(w,G,q=!0){qt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(J=w,K=G,e.width=Math.floor(w*et),e.height=Math.floor(G*et),q===!0&&(e.style.width=w+"px",e.style.height=G+"px"),this.setViewport(0,0,w,G))},this.getDrawingBufferSize=function(w){return w.set(J*et,K*et).floor()},this.setDrawingBufferSize=function(w,G,q){J=w,K=G,et=q,e.width=Math.floor(w*q),e.height=Math.floor(G*q),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(F)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,G,q,Q){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,G,q,Q),E.viewport(F.copy(yt).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(tt)},this.setScissor=function(w,G,q,Q){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,G,q,Q),E.scissor(k.copy(tt).multiplyScalar(et).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){E.setScissorTest(Z=w)},this.setOpaqueSort=function(w){nt=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,q=!0){let Q=0;if(w){let X=!1;if(I!==null){let at=I.texture.format;X=at===lh||at===oh||at===ah}if(X){let at=I.texture.type,ft=at===vi||at===Or||at===As||at===Br||at===rh||at===sh,vt=ht.getClearColor(),xt=ht.getClearAlpha(),At=vt.r,Lt=vt.g,Rt=vt.b;ft?(p[0]=At,p[1]=Lt,p[2]=Rt,p[3]=xt,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=At,g[1]=Lt,g[2]=Rt,g[3]=xt,N.clearBufferiv(N.COLOR,0,g))}else Q|=N.COLOR_BUFFER_BIT}G&&(Q|=N.DEPTH_BUFFER_BIT),q&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Di,!1),e.removeEventListener("webglcontextrestored",Fi,!1),e.removeEventListener("webglcontextcreationerror",Oi,!1),ht.dispose(),Pt.dispose(),Bt.dispose(),D.dispose(),z.dispose(),st.dispose(),it.dispose(),Wt.dispose(),si.dispose(),_t.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",su),qt.removeEventListener("sessionend",au),Bi.stop()},this.renderBufferDirect=function(w,G,q,Q,X,at){G===null&&(G=x);let ft=X.isMesh&&X.matrixWorld.determinant()<0,vt=function(Ht,re,Te,Ot,It){re.isScene!==!0&&(re=x),B.resetTextureUnits();let on=re.fog,cl=Ot.isMeshStandardMaterial?re.environment:null,ea=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Oe,ai=(Ot.isMeshStandardMaterial?st:z).get(Ot.envMap||cl),mn=Ot.vertexColors===!0&&!!Te.attributes.color&&Te.attributes.color.itemSize===4,cr=!!Te.attributes.tangent&&(!!Ot.normalMap||Ot.anisotropy>0),Un=!!Te.morphAttributes.position,ul=!!Te.morphAttributes.normal,ur=!!Te.morphAttributes.color,du=Xn;Ot.toneMapped&&(I!==null&&I.isXRRenderTarget!==!0||(du=_.toneMapping));let pu=Te.morphAttributes.position||Te.morphAttributes.normal||Te.morphAttributes.color,om=pu!==void 0?pu.length:0,Gt=D.get(Ot),lm=f.state.lights;if(pt===!0&&(ct===!0||Ht!==U)){let Qe=Ht===U&&Ot.id===V;Ct.setState(Ot,Ht,Qe)}let ln=!1;Ot.version===Gt.__version?Gt.needsLights&&Gt.lightsStateVersion!==lm.state.version||Gt.outputColorSpace!==ea||It.isBatchedMesh&&Gt.batching===!1?ln=!0:It.isBatchedMesh||Gt.batching!==!0?It.isBatchedMesh&&Gt.batchingColor===!0&&It.colorTexture===null||It.isBatchedMesh&&Gt.batchingColor===!1&&It.colorTexture!==null||It.isInstancedMesh&&Gt.instancing===!1?ln=!0:It.isInstancedMesh||Gt.instancing!==!0?It.isSkinnedMesh&&Gt.skinning===!1?ln=!0:It.isSkinnedMesh||Gt.skinning!==!0?It.isInstancedMesh&&Gt.instancingColor===!0&&It.instanceColor===null||It.isInstancedMesh&&Gt.instancingColor===!1&&It.instanceColor!==null||It.isInstancedMesh&&Gt.instancingMorph===!0&&It.morphTexture===null||It.isInstancedMesh&&Gt.instancingMorph===!1&&It.morphTexture!==null||Gt.envMap!==ai||Ot.fog===!0&&Gt.fog!==on?ln=!0:Gt.numClippingPlanes===void 0||Gt.numClippingPlanes===Ct.numPlanes&&Gt.numIntersection===Ct.numIntersection?(Gt.vertexAlphas!==mn||Gt.vertexTangents!==cr||Gt.morphTargets!==Un||Gt.morphNormals!==ul||Gt.morphColors!==ur||Gt.toneMapping!==du||Gt.morphTargetsCount!==om)&&(ln=!0):ln=!0:ln=!0:ln=!0:ln=!0:(ln=!0,Gt.__version=Ot.version);let zi=Gt.currentProgram;ln===!0&&(zi=ta(Ot,re,It));let fu=!1,ss=!1,dl=!1,pe=zi.getUniforms(),oi=Gt.uniforms;if(E.useProgram(zi.program)&&(fu=!0,ss=!0,dl=!0),Ot.id!==V&&(V=Ot.id,ss=!0),fu||U!==Ht){E.buffers.depth.getReversed()&&Ht.reversedDepth!==!0&&(Ht._reversedDepth=!0,Ht.updateProjectionMatrix()),pe.setValue(N,"projectionMatrix",Ht.projectionMatrix),pe.setValue(N,"viewMatrix",Ht.matrixWorldInverse);let Qe=pe.map.cameraPosition;Qe!==void 0&&Qe.setValue(N,bt.setFromMatrixPosition(Ht.matrixWorld)),L.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(Ht.far+1)/Math.LN2)),(Ot.isMeshPhongMaterial||Ot.isMeshToonMaterial||Ot.isMeshLambertMaterial||Ot.isMeshBasicMaterial||Ot.isMeshStandardMaterial||Ot.isShaderMaterial)&&pe.setValue(N,"isOrthographic",Ht.isOrthographicCamera===!0),U!==Ht&&(U=Ht,ss=!0,dl=!0)}if(It.isSkinnedMesh){pe.setOptional(N,It,"bindMatrix"),pe.setOptional(N,It,"bindMatrixInverse");let Qe=It.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),pe.setValue(N,"boneTexture",Qe.boneTexture,B))}It.isBatchedMesh&&(pe.setOptional(N,It,"batchingTexture"),pe.setValue(N,"batchingTexture",It._matricesTexture,B),pe.setOptional(N,It,"batchingIdTexture"),pe.setValue(N,"batchingIdTexture",It._indirectTexture,B),pe.setOptional(N,It,"batchingColorTexture"),It._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",It._colorsTexture,B));let pl=Te.morphAttributes;pl.position===void 0&&pl.normal===void 0&&pl.color===void 0||St.update(It,Te,zi),(ss||Gt.receiveShadow!==It.receiveShadow)&&(Gt.receiveShadow=It.receiveShadow,pe.setValue(N,"receiveShadow",It.receiveShadow)),Ot.isMeshGouraudMaterial&&Ot.envMap!==null&&(oi.envMap.value=ai,oi.flipEnvMap.value=ai.isCubeTexture&&ai.isRenderTargetTexture===!1?-1:1),Ot.isMeshStandardMaterial&&Ot.envMap===null&&re.environment!==null&&(oi.envMapIntensity.value=re.environmentIntensity),ss&&(pe.setValue(N,"toneMappingExposure",_.toneMappingExposure),Gt.needsLights&&(hn=dl,(gn=oi).ambientLightColor.needsUpdate=hn,gn.lightProbe.needsUpdate=hn,gn.directionalLights.needsUpdate=hn,gn.directionalLightShadows.needsUpdate=hn,gn.pointLights.needsUpdate=hn,gn.pointLightShadows.needsUpdate=hn,gn.spotLights.needsUpdate=hn,gn.spotLightShadows.needsUpdate=hn,gn.rectAreaLights.needsUpdate=hn,gn.hemisphereLights.needsUpdate=hn),on&&Ot.fog===!0&&Tt.refreshFogUniforms(oi,on),Tt.refreshMaterialUniforms(oi,Ot,et,K,f.state.transmissionRenderTarget[Ht.id]),Gs.upload(N,cu(Gt),oi,B));var gn,hn;if(Ot.isShaderMaterial&&Ot.uniformsNeedUpdate===!0&&(Gs.upload(N,cu(Gt),oi,B),Ot.uniformsNeedUpdate=!1),Ot.isSpriteMaterial&&pe.setValue(N,"center",It.center),pe.setValue(N,"modelViewMatrix",It.modelViewMatrix),pe.setValue(N,"normalMatrix",It.normalMatrix),pe.setValue(N,"modelMatrix",It.matrixWorld),Ot.isShaderMaterial||Ot.isRawShaderMaterial){let Qe=Ot.uniformsGroups;for(let fl=0,hm=Qe.length;fl<hm;fl++){let mu=Qe[fl];si.update(mu,zi),si.bind(mu,zi)}}return zi}(w,G,q,Q,X);E.setMaterial(Q,ft);let xt=q.index,At=1;if(Q.wireframe===!0){if(xt=j.getWireframeAttribute(q),xt===void 0)return;At=2}let Lt=q.drawRange,Rt=q.attributes.position,Ft=Lt.start*At,ne=(Lt.start+Lt.count)*At;at!==null&&(Ft=Math.max(Ft,at.start*At),ne=Math.min(ne,(at.start+at.count)*At)),xt!==null?(Ft=Math.max(Ft,0),ne=Math.min(ne,xt.count)):Rt!=null&&(Ft=Math.max(Ft,0),ne=Math.min(ne,Rt.count));let oe=ne-Ft;if(oe<0||oe===1/0)return;let de;Wt.setup(X,Q,vt,q,xt);let ie=Ce;if(xt!==null&&(de=lt.get(xt),ie=Mt,ie.setIndex(de)),X.isMesh)Q.wireframe===!0?(E.setLineWidth(Q.wireframeLinewidth*O()),ie.setMode(N.LINES)):ie.setMode(N.TRIANGLES);else if(X.isLine){let Ht=Q.linewidth;Ht===void 0&&(Ht=1),E.setLineWidth(Ht*O()),X.isLineSegments?ie.setMode(N.LINES):X.isLineLoop?ie.setMode(N.LINE_LOOP):ie.setMode(N.LINE_STRIP)}else X.isPoints?ie.setMode(N.POINTS):X.isSprite&&ie.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(M.get("WEBGL_multi_draw"))ie.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let{_multiDrawStarts:Ht,_multiDrawCounts:re,_multiDrawCount:Te}=X,Ot=xt?lt.get(xt).bytesPerElement:1,It=D.get(Q).currentProgram.getUniforms();for(let on=0;on<Te;on++)It.setValue(N,"_gl_DrawID",on),ie.render(Ht[on]/Ot,re[on])}else if(X.isInstancedMesh)ie.renderInstances(Ft,oe,X.count);else if(q.isInstancedBufferGeometry){let Ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,re=Math.min(q.instanceCount,Ht);ie.renderInstances(Ft,oe,re)}else ie.render(Ft,oe)},this.compile=function(w,G,q=null){q===null&&(q=w),f=Bt.get(q),f.init(G),y.push(f),q.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights();let Q=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let at=X.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){let vt=at[ft];Ks(vt,q,X),Q.add(vt)}else Ks(at,q,X),Q.add(at)}),f=y.pop(),Q},this.compileAsync=function(w,G,q=null){let Q=this.compile(w,G,q);return new Promise((X)=>{function at(){Q.forEach(function(ft){D.get(ft).currentProgram.isReady()&&Q.delete(ft)}),Q.size!==0?setTimeout(at,10):X(w)}M.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let $s=null;function su(){Bi.stop()}function au(){Bi.start()}let Bi=new Hp;function hl(w,G,q,Q){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||gt.intersectsSprite(w)){Q&&b.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ot);let at=it.update(w),ft=w.material;ft.visible&&m.push(w,at,ft,q,b.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||gt.intersectsObject(w))){let at=it.update(w),ft=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),b.copy(w.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),b.copy(at.boundingSphere.center)),b.applyMatrix4(w.matrixWorld).applyMatrix4(ot)),Array.isArray(ft)){let vt=at.groups;for(let xt=0,At=vt.length;xt<At;xt++){let Lt=vt[xt],Rt=ft[Lt.materialIndex];Rt&&Rt.visible&&m.push(w,at,Rt,q,b.z,Lt)}}else ft.visible&&m.push(w,at,ft,q,b.z,null)}}let X=w.children;for(let at=0,ft=X.length;at<ft;at++)hl(X[at],G,q,Q)}function ou(w,G,q,Q){let{opaque:X,transmissive:at,transparent:ft}=w;f.setupLightsView(q),pt===!0&&Ct.setGlobalState(_.clippingPlanes,q),Q&&E.viewport(F.copy(Q)),X.length>0&&Qs(X,G,q),at.length>0&&Qs(at,G,q),ft.length>0&&Qs(ft,G,q),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function lu(w,G,q,Q){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new Kn(1,1,{generateMipmaps:!0,type:M.has("EXT_color_buffer_half_float")||M.has("EXT_color_buffer_float")?Rs:vi,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));let X=f.state.transmissionRenderTarget[Q.id],at=Q.viewport||F;X.setSize(at.z*_.transmissionResolutionScale,at.w*_.transmissionResolutionScale);let ft=_.getRenderTarget(),vt=_.getActiveCubeFace(),xt=_.getActiveMipmapLevel();_.setRenderTarget(X),_.getClearColor(Y),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,0.5),_.clear(),C&&ht.render(q);let At=_.toneMapping;_.toneMapping=Xn;let Lt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),pt===!0&&Ct.setGlobalState(_.clippingPlanes,Q),Qs(w,q,Q),B.updateMultisampleRenderTarget(X),B.updateRenderTargetMipmap(X),M.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Ft=0,ne=G.length;Ft<ne;Ft++){let oe=G[Ft],de=oe.object,ie=oe.geometry,Ht=oe.material,re=oe.group;if(Ht.side===Ee&&de.layers.test(Q.layers)){let Te=Ht.side;Ht.side=Ze,Ht.needsUpdate=!0,hu(de,q,Q,ie,Ht,re),Ht.side=Te,Ht.needsUpdate=!0,Rt=!0}}Rt===!0&&(B.updateMultisampleRenderTarget(X),B.updateRenderTargetMipmap(X))}_.setRenderTarget(ft,vt,xt),_.setClearColor(Y,H),Lt!==void 0&&(Q.viewport=Lt),_.toneMapping=At}function Qs(w,G,q){let Q=G.isScene===!0?G.overrideMaterial:null;for(let X=0,at=w.length;X<at;X++){let ft=w[X],vt=ft.object,xt=ft.geometry,At=ft.group,Lt=ft.material;Lt.allowOverride===!0&&Q!==null&&(Lt=Q),vt.layers.test(q.layers)&&hu(vt,G,q,xt,Lt,At)}}function hu(w,G,q,Q,X,at){w.onBeforeRender(_,G,q,Q,X,at),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(_,G,q,Q,w,at),X.transparent===!0&&X.side===Ee&&X.forceSinglePass===!1?(X.side=Ze,X.needsUpdate=!0,_.renderBufferDirect(q,G,Q,X,w,at),X.side=xn,X.needsUpdate=!0,_.renderBufferDirect(q,G,Q,X,w,at),X.side=Ee):_.renderBufferDirect(q,G,Q,X,w,at),w.onAfterRender(_,G,q,Q,X,at)}function ta(w,G,q){G.isScene!==!0&&(G=x);let Q=D.get(w),X=f.state.lights,at=f.state.shadowsArray,ft=X.state.version,vt=_t.getParameters(w,X.state,at,G,q),xt=_t.getProgramCacheKey(vt),At=Q.programs;Q.environment=w.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(w.isMeshStandardMaterial?st:z).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,At===void 0&&(w.addEventListener("dispose",rs),At=new Map,Q.programs=At);let Lt=At.get(xt);if(Lt!==void 0){if(Q.currentProgram===Lt&&Q.lightsStateVersion===ft)return uu(w,vt),Lt}else vt.uniforms=_t.getUniforms(w),w.onBeforeCompile(vt,_),Lt=_t.acquireProgram(vt,xt),At.set(xt,Lt),Q.uniforms=vt.uniforms;let Rt=Q.uniforms;return(w.isShaderMaterial||w.isRawShaderMaterial)&&w.clipping!==!0||(Rt.clippingPlanes=Ct.uniform),uu(w,vt),Q.needsLights=function(Ft){return Ft.isMeshLambertMaterial||Ft.isMeshToonMaterial||Ft.isMeshPhongMaterial||Ft.isMeshStandardMaterial||Ft.isShadowMaterial||Ft.isShaderMaterial&&Ft.lights===!0}(w),Q.lightsStateVersion=ft,Q.needsLights&&(Rt.ambientLightColor.value=X.state.ambient,Rt.lightProbe.value=X.state.probe,Rt.directionalLights.value=X.state.directional,Rt.directionalLightShadows.value=X.state.directionalShadow,Rt.spotLights.value=X.state.spot,Rt.spotLightShadows.value=X.state.spotShadow,Rt.rectAreaLights.value=X.state.rectArea,Rt.ltc_1.value=X.state.rectAreaLTC1,Rt.ltc_2.value=X.state.rectAreaLTC2,Rt.pointLights.value=X.state.point,Rt.pointLightShadows.value=X.state.pointShadow,Rt.hemisphereLights.value=X.state.hemi,Rt.directionalShadowMap.value=X.state.directionalShadowMap,Rt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Rt.spotShadowMap.value=X.state.spotShadowMap,Rt.spotLightMatrix.value=X.state.spotLightMatrix,Rt.spotLightMap.value=X.state.spotLightMap,Rt.pointShadowMap.value=X.state.pointShadowMap,Rt.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=Lt,Q.uniformsList=null,Lt}function cu(w){if(w.uniformsList===null){let G=w.currentProgram.getUniforms();w.uniformsList=Gs.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function uu(w,G){let q=D.get(w);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}Bi.setAnimationLoop(function(w){$s&&$s(w)}),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(w){$s=w,qt.setAnimationLoop(w),w===null?Bi.stop():Bi.start()},qt.addEventListener("sessionstart",su),qt.addEventListener("sessionend",au),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(G),G=qt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,G,I),f=Bt.get(w,y.length),f.init(G),y.push(f),ot.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),gt.setFromProjectionMatrix(ot,Vh,G.reversedDepth),ct=this.localClippingEnabled,pt=Ct.init(this.clippingPlanes,ct),m=Pt.get(w,v.length),m.init(),v.push(m),qt.enabled===!0&&qt.isPresenting===!0){let at=_.xr.getDepthSensingMesh();at!==null&&hl(at,G,-1/0,_.sortObjects)}hl(w,G,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(nt,dt),C=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,C&&ht.addToRenderList(m,w),this.info.render.frame++,pt===!0&&Ct.beginShadows();let q=f.state.shadowsArray;$.render(q,w,G),pt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let{opaque:Q,transmissive:X}=m;if(f.setupLights(),G.isArrayCamera){let at=G.cameras;if(X.length>0)for(let ft=0,vt=at.length;ft<vt;ft++)lu(Q,X,w,at[ft]);C&&ht.render(w);for(let ft=0,vt=at.length;ft<vt;ft++){let xt=at[ft];ou(m,w,xt,xt.viewport)}}else X.length>0&&lu(Q,X,w,G),C&&ht.render(w),ou(m,w,G);I!==null&&A===0&&(B.updateMultisampleRenderTarget(I),B.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,G),Wt.resetDefaultState(),V=-1,U=null,y.pop(),y.length>0?(f=y[y.length-1],pt===!0&&Ct.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,G,q){let Q=D.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),D.get(w.texture).__webglTexture=G,D.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:q,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){let q=D.get(w);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};let rm=N.createFramebuffer();this.setRenderTarget=function(w,G=0,q=0){I=w,R=G,A=q;let Q=!0,X=null,at=!1,ft=!1;if(w){let vt=D.get(w);if(vt.__useDefaultFramebuffer!==void 0)E.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(vt.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(vt.__hasExternalTextures)B.rebindTextures(w,D.get(w.texture).__webglTexture,D.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Lt=w.depthTexture;if(vt.__boundDepthTexture!==Lt){if(Lt!==null&&D.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}let xt=w.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ft=!0);let At=D.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(X=Array.isArray(At[G])?At[G][q]:At[G],at=!0):X=w.samples>0&&B.useMultisampledRTT(w)===!1?D.get(w).__webglMultisampledFramebuffer:Array.isArray(At)?At[q]:At,F.copy(w.viewport),k.copy(w.scissor),W=w.scissorTest}else F.copy(yt).multiplyScalar(et).floor(),k.copy(tt).multiplyScalar(et).floor(),W=Z;if(q!==0&&(X=rm),E.bindFramebuffer(N.FRAMEBUFFER,X)&&Q&&E.drawBuffers(w,X),E.viewport(F),E.scissor(k),E.setScissorTest(W),at){let vt=D.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,vt.__webglTexture,q)}else if(ft){let vt=G;for(let xt=0;xt<w.textures.length;xt++){let At=D.get(w.textures[xt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xt,At.__webglTexture,q,vt)}}else if(w!==null&&q!==0){let vt=D.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vt.__webglTexture,q)}V=-1},this.readRenderTargetPixels=function(w,G,q,Q,X,at,ft,vt=0){if(!w||!w.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=D.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){E.bindFramebuffer(N.FRAMEBUFFER,xt);try{let At=w.textures[vt],Lt=At.format,Rt=At.type;if(!L.textureFormatReadable(Lt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Rt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=w.width-Q&&q>=0&&q<=w.height-X&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+vt),N.readPixels(G,q,Q,X,zt.convert(Lt),zt.convert(Rt),at))}finally{let At=I!==null?D.get(I).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,G,q,Q,X,at,ft,vt=0){if(!w||!w.isWebGLRenderTarget)throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=D.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){if(G>=0&&G<=w.width-Q&&q>=0&&q<=w.height-X){E.bindFramebuffer(N.FRAMEBUFFER,xt);let At=w.textures[vt],Lt=At.format,Rt=At.type;if(!L.textureFormatReadable(Lt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Rt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.bufferData(N.PIXEL_PACK_BUFFER,at.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+vt),N.readPixels(G,q,Q,X,zt.convert(Lt),zt.convert(Rt),0);let ne=I!==null?D.get(I).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,ne);let oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ip(N,oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,at),N.deleteBuffer(Ft),N.deleteSync(oe),at}throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,G=null,q=0){let Q=Math.pow(2,-q),X=Math.floor(w.image.width*Q),at=Math.floor(w.image.height*Q),ft=G!==null?G.x:0,vt=G!==null?G.y:0;B.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ft,vt,X,at),E.unbindTexture()};let sm=N.createFramebuffer(),am=N.createFramebuffer();this.copyTextureToTexture=function(w,G,q=null,Q=null,X=0,at=null){let ft,vt,xt,At,Lt,Rt,Ft,ne,oe;at===null&&(X!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=X,X=0):at=0);let de=w.isCompressedTexture?w.mipmaps[at]:w.image;if(q!==null)ft=q.max.x-q.min.x,vt=q.max.y-q.min.y,xt=q.isBox3?q.max.z-q.min.z:1,At=q.min.x,Lt=q.min.y,Rt=q.isBox3?q.min.z:0;else{let mn=Math.pow(2,-X);ft=Math.floor(de.width*mn),vt=Math.floor(de.height*mn),xt=w.isDataArrayTexture?de.depth:w.isData3DTexture?Math.floor(de.depth*mn):1,At=0,Lt=0,Rt=0}Q!==null?(Ft=Q.x,ne=Q.y,oe=Q.z):(Ft=0,ne=0,oe=0);let ie=zt.convert(G.format),Ht=zt.convert(G.type),re;G.isData3DTexture?(B.setTexture3D(G,0),re=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(B.setTexture2DArray(G,0),re=N.TEXTURE_2D_ARRAY):(B.setTexture2D(G,0),re=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);let Te=N.getParameter(N.UNPACK_ROW_LENGTH),Ot=N.getParameter(N.UNPACK_IMAGE_HEIGHT),It=N.getParameter(N.UNPACK_SKIP_PIXELS),on=N.getParameter(N.UNPACK_SKIP_ROWS),cl=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,At),N.pixelStorei(N.UNPACK_SKIP_ROWS,Lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Rt);let ea=w.isDataArrayTexture||w.isData3DTexture,ai=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){let mn=D.get(w),cr=D.get(G),Un=D.get(mn.__renderTarget),ul=D.get(cr.__renderTarget);E.bindFramebuffer(N.READ_FRAMEBUFFER,Un.__webglFramebuffer),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,ul.__webglFramebuffer);for(let ur=0;ur<xt;ur++)ea&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,D.get(w).__webglTexture,X,Rt+ur),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,D.get(G).__webglTexture,at,oe+ur)),N.blitFramebuffer(At,Lt,ft,vt,Ft,ne,ft,vt,N.DEPTH_BUFFER_BIT,N.NEAREST);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||D.has(w)){let mn=D.get(w),cr=D.get(G);E.bindFramebuffer(N.READ_FRAMEBUFFER,sm),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,am);for(let Un=0;Un<xt;Un++)ea?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mn.__webglTexture,X,Rt+Un):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mn.__webglTexture,X),ai?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,cr.__webglTexture,at,oe+Un):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,cr.__webglTexture,at),X!==0?N.blitFramebuffer(At,Lt,ft,vt,Ft,ne,ft,vt,N.COLOR_BUFFER_BIT,N.NEAREST):ai?N.copyTexSubImage3D(re,at,Ft,ne,oe+Un,At,Lt,ft,vt):N.copyTexSubImage2D(re,at,Ft,ne,At,Lt,ft,vt);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ai?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(re,at,Ft,ne,oe,ft,vt,xt,ie,Ht,de.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(re,at,Ft,ne,oe,ft,vt,xt,ie,de.data):N.texSubImage3D(re,at,Ft,ne,oe,ft,vt,xt,ie,Ht,de):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,at,Ft,ne,ft,vt,ie,Ht,de.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,at,Ft,ne,de.width,de.height,ie,de.data):N.texSubImage2D(N.TEXTURE_2D,at,Ft,ne,ft,vt,ie,Ht,de);N.pixelStorei(N.UNPACK_ROW_LENGTH,Te),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ot),N.pixelStorei(N.UNPACK_SKIP_PIXELS,It),N.pixelStorei(N.UNPACK_SKIP_ROWS,on),N.pixelStorei(N.UNPACK_SKIP_IMAGES,cl),at===0&&G.generateMipmaps&&N.generateMipmap(re),E.unbindTexture()},this.copyTextureToTexture3D=function(w,G,q=null,Q=null,X=0){return Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,G,q,Q,X)},this.initRenderTarget=function(w){D.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){R=0,A=0,I=null,E.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vh}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=kt._getUnpackColorSpace()}}function bc(t,e){if(e===Fh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===Vr||e===Ls){let n=t.getIndex();if(n===null){let a=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);t.setIndex(a),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,r=[];if(e===Vr)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)if(a%2===0)r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2));else r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a));if(r.length/3!==i)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}class Pc extends ti{constructor(t){super(t);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new of(e)}),this.register(function(e){return new lf(e)}),this.register(function(e){return new _f(e)}),this.register(function(e){return new vf(e)}),this.register(function(e){return new yf(e)}),this.register(function(e){return new cf(e)}),this.register(function(e){return new uf(e)}),this.register(function(e){return new df(e)}),this.register(function(e){return new pf(e)}),this.register(function(e){return new af(e)}),this.register(function(e){return new ff(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new gf(e)}),this.register(function(e){return new mf(e)}),this.register(function(e){return new rf(e)}),this.register(function(e){return new Mf(e)}),this.register(function(e){return new Sf(e)})}load(t,e,n,i){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=wi.extractUrlBase(t);s=wi.resolveURL(l,this.path)}else s=wi.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){if(i)i(l);else console.error(l);r.manager.itemError(t),r.manager.itemEnd(t)},o=new zs(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{r.parse(l,s,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){if(this.pluginCallbacks.indexOf(t)===-1)this.pluginCallbacks.push(t);return this}unregister(t){if(this.pluginCallbacks.indexOf(t)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1);return this}parse(t,e,n,i){let r,s={},a={},o=new TextDecoder;if(typeof t==="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(o.decode(new Uint8Array(t,0,4))===xf){try{s[Vt.KHR_BINARY_GLTF]=new Tf(t)}catch(c){if(i)i(c);return}r=JSON.parse(s[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){if(i)i(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Rf(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let c=this.pluginCallbacks[h](l);if(!c.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");a[c.name]=c,s[c.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let c=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(c){case Vt.KHR_MATERIALS_UNLIT:s[c]=new sf;break;case Vt.KHR_DRACO_MESH_COMPRESSION:s[c]=new Ef(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:s[c]=new wf;break;case Vt.KHR_MESH_QUANTIZATION:s[c]=new bf;break;default:if(d.indexOf(c)>=0&&a[c]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function b0(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}var Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rf{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new mt(16777215);if(o.color!==void 0)h.setRGB(o.color[0],o.color[1],o.color[2],Oe);let c=o.range!==void 0?o.range:0;switch(o.type){case"directional":l=new Ei(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new er(h),l.distance=c;break;case"spot":l=new Xo(h),l.distance=c,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,l.angle=o.spot.outerConeAngle,l.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}if(l.position.set(0,0,0),ei(l,o),o.intensity!==void 0)l.intensity=o.intensity;return l.name=e.createUniqueName(o.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t!=="light")return;return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;if(a===void 0)return null;return this._loadLight(a).then(function(o){return n._getNodeRef(e.cache,a,o)})}}class sf{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return we}extendParams(t,e,n){let i=[];t.color=new mt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],Oe),t.opacity=s[3]}if(r.baseColorTexture!==void 0)i.push(n.assignTexture(t,"map",r.baseColorTexture,me))}return Promise.all(i)}}class af{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;if(r!==void 0)e.emissiveIntensity=r;return Promise.resolve()}}class of{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0)e.clearcoat=s.clearcoatFactor;if(s.clearcoatTexture!==void 0)r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture));if(s.clearcoatRoughnessFactor!==void 0)e.clearcoatRoughness=s.clearcoatRoughnessFactor;if(s.clearcoatRoughnessTexture!==void 0)r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture));if(s.clearcoatNormalTexture!==void 0){if(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0){let a=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new rt(a,a)}}return Promise.all(r)}}class lf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class hf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.iridescenceFactor!==void 0)e.iridescence=s.iridescenceFactor;if(s.iridescenceTexture!==void 0)r.push(n.assignTexture(e,"iridescenceMap",s.iridescenceTexture));if(s.iridescenceIor!==void 0)e.iridescenceIOR=s.iridescenceIor;if(e.iridescenceThicknessRange===void 0)e.iridescenceThicknessRange=[100,400];if(s.iridescenceThicknessMinimum!==void 0)e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum;if(s.iridescenceThicknessMaximum!==void 0)e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum;if(s.iridescenceThicknessTexture!==void 0)r.push(n.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture));return Promise.all(r)}}class cf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new mt(0,0,0),e.sheenRoughness=0,e.sheen=1;let s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){let a=s.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Oe)}if(s.sheenRoughnessFactor!==void 0)e.sheenRoughness=s.sheenRoughnessFactor;if(s.sheenColorTexture!==void 0)r.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,me));if(s.sheenRoughnessTexture!==void 0)r.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture));return Promise.all(r)}}class uf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.transmissionFactor!==void 0)e.transmission=s.transmissionFactor;if(s.transmissionTexture!==void 0)r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture));return Promise.all(r)}}class df{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0)r.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture));e.attenuationDistance=s.attenuationDistance||1/0;let a=s.attenuationColor||[1,1,1];return e.attenuationColor=new mt().setRGB(a[0],a[1],a[2],Oe),Promise.all(r)}}class pf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ff{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0)r.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));let a=s.specularColorFactor||[1,1,1];if(e.specularColor=new mt().setRGB(a[0],a[1],a[2],Oe),s.specularColorTexture!==void 0)r.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,me));return Promise.all(r)}}class mf{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0)r.push(n.assignTexture(e,"bumpMap",s.bumpTexture));return Promise.all(r)}}class gf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Je}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.anisotropyStrength!==void 0)e.anisotropy=s.anisotropyStrength;if(s.anisotropyRotation!==void 0)e.anisotropyRotation=s.anisotropyRotation;if(s.anisotropyTexture!==void 0)r.push(n.assignTexture(e,"anisotropyMap",s.anisotropyTexture));return Promise.all(r)}}class _f{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],s=e.options.ktx2Loader;if(!s)if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return e.loadTextureImage(t,r.source,s)}}class vf{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let s=r.extensions[e],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);if(l!==null)o=l}return n.loadTextureImage(t,s.source,o)}}class yf{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let s=r.extensions[e],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);if(l!==null)o=l}return n.loadTextureImage(t,s.source,o)}}class Mf{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported)if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(a){let o=i.byteOffset||0,l=i.byteLength||0,h=i.count,c=i.byteStride,d=new Uint8Array(a,o,l);if(s.decodeGltfBufferAsync)return s.decodeGltfBufferAsync(h,c,d,i.mode,i.filter).then(function(u){return u.buffer});else return s.ready.then(function(){let u=new ArrayBuffer(h*c);return s.decodeGltfBuffer(new Uint8Array(u),h,c,d,i.mode,i.filter),u})})}else return null}}class Sf{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==sn.TRIANGLES&&l.mode!==sn.TRIANGLE_STRIP&&l.mode!==sn.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=n.extensions[this.name].attributes,a=[],o={};for(let l in s)a.push(this.parser.getDependency("accessor",s[l]).then((h)=>{return o[l]=h,o[l]}));if(a.length<1)return null;return a.push(this.parser.createNodeMesh(t)),Promise.all(a).then((l)=>{let h=l.pop(),c=h.isGroup?h.children:[h],d=l[0].count,u=[];for(let p of c){let g=new Et,m=new T,f=new xe,v=new T(1,1,1),y=new fo(p.geometry,p.material,d);for(let _=0;_<d;_++){if(o.TRANSLATION)m.fromBufferAttribute(o.TRANSLATION,_);if(o.ROTATION)f.fromBufferAttribute(o.ROTATION,_);if(o.SCALE)v.fromBufferAttribute(o.SCALE,_);y.setMatrixAt(_,g.compose(m,f,v))}for(let _ in o)if(_==="_COLOR_0"){let S=o[_];y.instanceColor=new qi(S.array,S.itemSize,S.normalized)}else if(_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE")p.geometry.setAttribute(_,o[_]);te.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),u.push(y)}if(h.isGroup)return h.clear(),h.add(...u),h;return u[0]})}}var xf="glTF",Ws=12,Qp={JSON:1313821514,BIN:5130562};class Tf{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==xf)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ws,r=new DataView(t,Ws),s=0;while(s<i){let a=r.getUint32(s,!0);s+=4;let o=r.getUint32(s,!0);if(s+=4,o===Qp.JSON){let l=new Uint8Array(t,Ws+s,a);this.content=n.decode(l)}else if(o===Qp.BIN){let l=Ws+s;this.body=t.slice(l,l+a)}s+=a}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class Ef{constructor(t,e){if(!e)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,a={},o={},l={};for(let h in s){let c=Lc[h]||h.toLowerCase();a[c]=s[h]}for(let h in t.attributes){let c=Lc[h]||h.toLowerCase();if(s[h]!==void 0){let d=n.accessors[t.attributes[h]],u=jr[d.componentType];l[c]=u.name,o[c]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(c,d){i.decodeDracoFile(h,function(u){for(let p in u.attributes){let g=u.attributes[p],m=o[p];if(m!==void 0)g.normalized=m}c(u)},a,l,Oe,d)})})}}class wf{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0)t.channel=e.texCoord;if(e.offset!==void 0)t.offset.fromArray(e.offset);if(e.rotation!==void 0)t.rotation=e.rotation;if(e.scale!==void 0)t.repeat.fromArray(e.scale);return t.needsUpdate=!0,t}}class bf{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class Uc extends Ti{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let s=0;s!==i;s++)e[s]=n[r+s];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,h=i-e,c=(n-e)/h,d=c*c,u=d*c,p=t*l,g=p-l,m=-2*u+3*d,f=u-d,v=1-m,y=f-d+c;for(let _=0;_!==a;_++){let S=s[g+_+a],R=s[g+_+o]*h,A=s[p+_+a],I=s[p+_]*h;r[_]=v*S+y*R+m*A+f*I}return r}}var A0=new xe;class Af extends Uc{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return A0.fromArray(r).normalize().toArray(r),r}}var sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tf={9728:qn,9729:He,9984:Ka,9985:Fr,9986:ji,9987:Yn},ef={33071:Ji,33648:ja,10497:fn},Ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},R0={CUBICSPLINE:void 0,LINEAR:ro,STEP:Dh},Rc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function C0(t){if(t.DefaultMaterial===void 0)t.DefaultMaterial=new xi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn});return t.DefaultMaterial}function sr(t,e,n){for(let i in n.extensions)if(t[i]===void 0)e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i]}function ei(t,e){if(e.extras!==void 0)if(typeof e.extras==="object")Object.assign(t.userData,e.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras)}function L0(t,e,n){let i=!1,r=!1,s=!1;for(let h=0,c=e.length;h<c;h++){let d=e[h];if(d.POSITION!==void 0)i=!0;if(d.NORMAL!==void 0)r=!0;if(d.COLOR_0!==void 0)s=!0;if(i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);let a=[],o=[],l=[];for(let h=0,c=e.length;h<c;h++){let d=e[h];if(i){let u=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):t.attributes.position;a.push(u)}if(r){let u=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):t.attributes.normal;o.push(u)}if(s){let u=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):t.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){let c=h[0],d=h[1],u=h[2];if(i)t.morphAttributes.position=c;if(r)t.morphAttributes.normal=d;if(s)t.morphAttributes.color=u;return t.morphTargetsRelative=!0,t})}function I0(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function P0(t){let e,n=t.extensions&&t.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(n)e="draco:"+n.bufferView+":"+n.indices+":"+Cc(n.attributes);else e=t.indices+":"+Cc(t.attributes)+":"+t.mode;if(t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+Cc(t.targets[i]);return e}function Cc(t){let e="",n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Ic(t){switch(t){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function U0(t){if(t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0)return"image/webp";if(t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var N0=new Et;class Rf{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new b0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,s=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let o=a.match(/Version\/(\d+)/);i=n&&o?parseInt(o[1],10):-1,r=a.indexOf("Firefox")>-1,s=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||n&&i<17||r&&s<98)this.textureLoader=new Go(this.options.manager);else this.textureLoader=new qo(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){let a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return sr(r,a,i),ei(a,i),Promise.all(n._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){for(let o of a.scenes)o.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let s=e[i].joints;for(let a=0,o=s.length;a<o;a++)t[s[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let s=t[i];if(s.mesh!==void 0){if(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0)n[s.mesh].isSkinnedMesh=!0}if(s.camera!==void 0)this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){if(e===void 0)return;if(t.refs[e]===void 0)t.refs[e]=t.uses[e]=0;t.refs[e]++}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(s,a)=>{let o=this.associations.get(s);if(o!=null)this.associations.set(a,o);for(let[l,h]of s.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);if(r)n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,s){return n.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,s){n.load(wi.resolveURL(e.uri,i.path),r,void 0,function(){s(Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let s=Ac[i.type],a=jr[i.componentType],o=i.normalized===!0,l=new a(i.count*s);return Promise.resolve(new ae(l,s,o))}let r=[];if(i.bufferView!==void 0)r.push(this.getDependency("bufferView",i.bufferView));else r.push(null);if(i.sparse!==void 0)r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView));return Promise.all(r).then(function(s){let a=s[0],o=Ac[i.type],l=jr[i.componentType],h=l.BYTES_PER_ELEMENT,c=h*o,d=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,g,m;if(u&&u!==c){let f=Math.floor(d/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,y=e.cache.get(v);if(!y)g=new l(a,f*u,i.count*u/h),y=new Gr(g,u/h),e.cache.add(v,y);m=new gi(y,o,d%u/h,p)}else{if(a===null)g=new l(i.count*o);else g=new l(a,d,i.count*o);m=new ae(g,o,p)}if(i.sparse!==void 0){let f=Ac.SCALAR,v=jr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,S=new v(s[1],y,i.sparse.count*f),R=new l(s[2],_,i.sparse.count*o);if(a!==null)m=new ae(m.array.slice(),m.itemSize,m.normalized);m.normalized=!1;for(let A=0,I=S.length;A<I;A++){let V=S[A];if(m.setX(V,R[A*o]),o>=2)m.setY(V,R[A*o+1]);if(o>=3)m.setZ(V,R[A*o+2]);if(o>=4)m.setW(V,R[A*o+3]);if(o>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,s=e.images[r],a=this.textureLoader;if(s.uri){let o=n.manager.getHandler(s.uri);if(o!==null)a=o}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,s=r.textures[t],a=r.images[e],o=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(e,n).then(function(h){if(h.flipY=!1,h.name=s.name||a.name||"",h.name===""&&typeof a.uri==="string"&&a.uri.startsWith("data:image/")===!1)h.name=a.uri;let d=(r.samplers||{})[s.sampler]||{};return h.magFilter=tf[d.magFilter]||He,h.minFilter=tf[d.minFilter]||Yn,h.wrapS=ef[d.wrapS]||fn,h.wrapT=ef[d.wrapT]||fn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qn&&h.minFilter!==He,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then((c)=>c.clone());let s=i.images[t],a=self.URL||self.webkitURL,o=s.uri||"",l=!1;if(s.bufferView!==void 0)o=n.getDependency("bufferView",s.bufferView).then(function(c){l=!0;let d=new Blob([c],{type:s.mimeType});return o=a.createObjectURL(d),o});else if(s.uri===void 0)throw Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(c){return new Promise(function(d,u){let p=d;if(e.isImageBitmapLoader===!0)p=function(g){let m=new he(g);m.needsUpdate=!0,d(m)};e.load(wi.resolveURL(c,r.path),p,void 0,u)})}).then(function(c){if(l===!0)a.revokeObjectURL(o);return ei(c,s),c.userData.mimeType=s.mimeType||U0(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),c});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0)s=s.clone(),s.channel=n.texCoord;if(r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let o=r.associations.get(s);s=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,o)}}if(i!==void 0)s.colorSpace=i;return t[e]=s,s})}assignFinalMaterial(t){let{geometry:e,material:n}=t,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,o=this.cache.get(a);if(!o)o=new Mi,Be.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,o.sizeAttenuation=!1,this.cache.add(a,o);n=o}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,o=this.cache.get(a);if(!o)o=new Qi,Be.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,this.cache.add(a,o);n=o}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";if(i)a+="derivative-tangents:";if(r)a+="vertex-colors:";if(s)a+="flat-shading:";let o=this.cache.get(a);if(!o){if(o=n.clone(),r)o.vertexColors=!0;if(s)o.flatShading=!0;if(i){if(o.normalScale)o.normalScale.y*=-1;if(o.clearcoatNormalScale)o.clearcoatNormalScale.y*=-1}this.cache.add(a,o),this.associations.set(o,this.associations.get(n))}n=o}t.material=n}getMaterialType(){return xi}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],s,a={},o=r.extensions||{},l=[];if(o[Vt.KHR_MATERIALS_UNLIT]){let c=i[Vt.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),l.push(c.extendParams(a,r,e))}else{let c=r.pbrMetallicRoughness||{};if(a.color=new mt(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){let d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Oe),a.opacity=d[3]}if(c.baseColorTexture!==void 0)l.push(e.assignTexture(a,"map",c.baseColorTexture,me));if(a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0)l.push(e.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture));s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}if(r.doubleSided===!0)a.side=Ee;let h=r.alphaMode||Rc.OPAQUE;if(h===Rc.BLEND)a.transparent=!0,a.depthWrite=!1;else if(a.transparent=!1,h===Rc.MASK)a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&s!==we){if(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new rt(1,1),r.normalTexture.scale!==void 0){let c=r.normalTexture.scale;a.normalScale.set(c,c)}}if(r.occlusionTexture!==void 0&&s!==we){if(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)a.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&s!==we){let c=r.emissiveFactor;a.emissive=new mt().setRGB(c[0],c[1],c[2],Oe)}if(r.emissiveTexture!==void 0&&s!==we)l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,me));return Promise.all(l).then(function(){let c=new s(a);if(r.name)c.name=r.name;if(ei(c,r),e.associations.set(c,{materials:t}),r.extensions)sr(i,c,r);return c})}createUniqueName(t){let e=Yt.sanitizeNodeName(t||"");if(e in this.nodeNamesUsed)return e+"_"+ ++this.nodeNamesUsed[e];else return this.nodeNamesUsed[e]=0,e}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(o){return nf(o,a,e)})}let s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a],h=P0(l),c=i[h];if(c)s.push(c.promise);else{let d;if(l.extensions&&l.extensions[Vt.KHR_DRACO_MESH_COMPRESSION])d=r(l);else d=nf(new Jt,l,e);i[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],s=r.primitives,a=[];for(let o=0,l=s.length;o<l;o++){let h=s[o].material===void 0?C0(this.cache):this.getDependency("material",s[o].material);a.push(h)}return a.push(e.loadGeometries(s)),Promise.all(a).then(function(o){let l=o.slice(0,o.length-1),h=o[o.length-1],c=[];for(let u=0,p=h.length;u<p;u++){let g=h[u],m=s[u],f,v=l[u];if(m.mode===sn.TRIANGLES||m.mode===sn.TRIANGLE_STRIP||m.mode===sn.TRIANGLE_FAN||m.mode===void 0){if(f=r.isSkinnedMesh===!0?new uo(g,v):new ce(g,v),f.isSkinnedMesh===!0)f.normalizeSkinWeights();if(m.mode===sn.TRIANGLE_STRIP)f.geometry=bc(f.geometry,Ls);else if(m.mode===sn.TRIANGLE_FAN)f.geometry=bc(f.geometry,Vr)}else if(m.mode===sn.LINES)f=new Xr(g,v);else if(m.mode===sn.LINE_STRIP)f=new Wr(g,v);else if(m.mode===sn.LINE_LOOP)f=new go(g,v);else if(m.mode===sn.POINTS)f=new tr(g,v);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);if(Object.keys(f.geometry.morphAttributes).length>0)I0(f,r);if(f.name=e.createUniqueName(r.name||"mesh_"+t),ei(f,r),m.extensions)sr(i,f,m);e.assignFinalMaterial(f),c.push(f)}for(let u=0,p=c.length;u<p;u++)e.associations.set(c[u],{meshes:t,primitives:u});if(c.length===1){if(r.extensions)sr(i,c[0],r);return c[0]}let d=new qe;if(r.extensions)sr(i,d,r);e.associations.set(d,{meshes:t});for(let u=0,p=c.length;u<p;u++)d.add(c[u]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(n.type==="perspective")e=new ge(Hh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2000000);else if(n.type==="orthographic")e=new Yr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar);if(n.name)e.name=this.createUniqueName(n.name);return ei(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));if(e.inverseBindMatrices!==void 0)n.push(this.getDependency("accessor",e.inverseBindMatrices));else n.push(null);return Promise.all(n).then(function(i){let r=i.pop(),s=i,a=[],o=[];for(let l=0,h=s.length;l<h;l++){let c=s[l];if(c){a.push(c);let d=new Et;if(r!==null)d.fromArray(r.array,l*16);o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Fs(a,o)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,s=[],a=[],o=[],l=[],h=[];for(let c=0,d=i.channels.length;c<d;c++){let u=i.channels[c],p=i.samplers[u.sampler],g=u.target,m=g.node,f=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;if(g.node===void 0)continue;s.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),o.push(this.getDependency("accessor",v)),l.push(p),h.push(g)}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(c){let d=c[0],u=c[1],p=c[2],g=c[3],m=c[4],f=[];for(let v=0,y=d.length;v<y;v++){let _=d[v],S=u[v],R=p[v],A=g[v],I=m[v];if(_===void 0)continue;if(_.updateMatrix)_.updateMatrix();let V=n._createAnimationTracks(_,S,R,A,I);if(V)for(let U=0;U<V.length;U++)f.push(V[U])}return new Ur(r,void 0,f)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];if(i.mesh===void 0)return null;return n.getDependency("mesh",i.mesh).then(function(r){let s=n._getNodeRef(n.meshCache,i.mesh,r);if(i.weights!==void 0)s.traverse(function(a){if(!a.isMesh)return;for(let o=0,l=i.weights.length;o<l;o++)a.morphTargetInfluences[o]=i.weights[o]});return s})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),s=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)s.push(n.getDependency("node",a[l]));let o=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),o]).then(function(l){let h=l[0],c=l[1],d=l[2];if(d!==null)h.traverse(function(u){if(!u.isSkinnedMesh)return;u.bind(d,N0)});for(let u=0,p=c.length;u<p;u++)h.add(c[u]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],s=r.name?i.createUniqueName(r.name):"",a=[],o=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});if(o)a.push(o);if(r.camera!==void 0)a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)}));return i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0)h=new Ds;else if(l.length>1)h=new qe;else if(l.length===1)h=l[0];else h=new te;if(h!==l[0])for(let c=0,d=l.length;c<d;c++)h.add(l[c]);if(r.name)h.userData.name=r.name,h.name=s;if(ei(h,r),r.extensions)sr(n,h,r);if(r.matrix!==void 0){let c=new Et;c.fromArray(r.matrix),h.applyMatrix4(c)}else{if(r.translation!==void 0)h.position.fromArray(r.translation);if(r.rotation!==void 0)h.quaternion.fromArray(r.rotation);if(r.scale!==void 0)h.scale.fromArray(r.scale)}if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let c=i.associations.get(h);i.associations.set(h,{...c})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new qe;if(n.name)r.name=i.createUniqueName(n.name);if(ei(r,n),n.extensions)sr(e,r,n);let s=n.nodes||[],a=[];for(let o=0,l=s.length;o<l;o++)a.push(i.getDependency("node",s[o]));return Promise.all(a).then(function(o){for(let h=0,c=o.length;h<c;h++)r.add(o[h]);let l=(h)=>{let c=new Map;for(let[d,u]of i.associations)if(d instanceof Be||d instanceof he)c.set(d,u);return h.traverse((d)=>{let u=i.associations.get(d);if(u!=null)c.set(d,u)}),c};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let s=[],a=t.name?t.name:t.uuid,o=[];if(bi[r.path]===bi.weights)t.traverse(function(d){if(d.morphTargetInfluences)o.push(d.name?d.name:d.uuid)});else o.push(a);let l;switch(bi[r.path]){case bi.weights:l=Gn;break;case bi.rotation:l=kn;break;case bi.translation:case bi.scale:l=Wn;break;default:switch(n.itemSize){case 1:l=Gn;break;case 2:case 3:default:l=Wn;break}break}let h=i.interpolation!==void 0?R0[i.interpolation]:ro,c=this._getArrayFromAccessor(n);for(let d=0,u=o.length;d<u;d++){let p=new l(o[d]+"."+bi[r.path],e.array,c,h);if(i.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(p);s.push(p)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Ic(e.constructor),i=new Float32Array(e.length);for(let r=0,s=e.length;r<s;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){return new(this instanceof kn?Af:Uc)(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function D0(t,e,n){let i=e.attributes,r=new Pe;if(i.POSITION!==void 0){let o=n.json.accessors[i.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(r.set(new T(l[0],l[1],l[2]),new T(h[0],h[1],h[2])),o.normalized){let c=Ic(jr[o.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new T,l=new T;for(let h=0,c=s.length;h<c;h++){let d=s[h];if(d.POSITION!==void 0){let u=n.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){let m=Ic(jr[u.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}t.boundingBox=r;let a=new Ge;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=a}function nf(t,e,n){let i=e.attributes,r=[];function s(a,o){return n.getDependency("accessor",a).then(function(l){t.setAttribute(o,l)})}for(let a in i){let o=Lc[a]||a.toLowerCase();if(o in t.attributes)continue;r.push(s(i[a],o))}if(e.indices!==void 0&&!t.index){let a=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});r.push(a)}if(kt.workingColorSpace!==Oe&&"COLOR_0"in i)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${kt.workingColorSpace}" not supported.`);return ei(t,e),D0(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?L0(t,e.targets,n):t})}function Kr(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n}function Xs(t){let e=t>>>0;return()=>{return e=e*1664525+1013904223>>>0,e/4294967296}}function $r(t,{repeatX:e=1,repeatY:n=1,srgb:i=!0}={}){let r=new wn(t);return r.wrapS=fn,r.wrapT=fn,r.repeat.set(e,n),r.colorSpace=i?me:Jn,r.anisotropy=4,r.needsUpdate=!0,r}function F0(){let t=Kr(512,512),e=t.getContext("2d"),n=Xs(1024),i=e.createLinearGradient(0,0,512,0);i.addColorStop(0,"#ead8c7"),i.addColorStop(0.5,"#f0e0d0"),i.addColorStop(1,"#e7d4c2"),e.fillStyle=i,e.fillRect(0,0,512,512);let r=4,s=512/r;for(let a=0;a<r;a+=1){let o=(n()-0.5)*10;e.fillStyle=o>0?`rgba(255,248,240,${Math.abs(o)/180})`:`rgba(130,96,70,${Math.abs(o)/180})`,e.fillRect(0,a*s,512,s),e.fillStyle="rgba(140,104,78,0.13)",e.fillRect(0,a*s,512,1.5)}for(let a=0;a<240;a+=1){let o=n()*512,l=1.2+n()*2.8,h=0.008+n()*0.014,c=n()*Math.PI*2;e.strokeStyle=a%3===0?`rgba(165,126,96,${0.04+n()*0.06})`:`rgba(255,248,238,${0.05+n()*0.05})`,e.lineWidth=0.7+n()*1.4,e.beginPath();for(let d=0;d<=512;d+=16){let u=o+Math.sin(d*h+c)*l;if(d===0)e.moveTo(d,u);else e.lineTo(d,u)}e.stroke()}return $r(t,{repeatX:2,repeatY:2})}function O0(){let t=Kr(512,512),e=t.getContext("2d"),n=Xs(2048);e.fillStyle="#c8ab96",e.fillRect(0,0,512,512);let i=8,r=512/i;for(let s=0;s<i;s+=1){let a=s%2*180;for(let o=-1;o<3;o+=1){let l=o*256+a,h=192+Math.floor((n()-0.5)*18);e.fillStyle=`rgb(${h}, ${Math.floor(h*0.85)}, ${Math.floor(h*0.74)})`,e.fillRect(l,s*r,254,r-2);for(let c=0;c<9;c+=1){let d=s*r+4+n()*(r-8);e.strokeStyle=`rgba(125,90,68,${0.06+n()*0.07})`,e.lineWidth=1,e.beginPath(),e.moveTo(l+2,d),e.lineTo(l+252,d+(n()-0.5)*3),e.stroke()}}e.fillStyle="rgba(92,66,52,0.18)",e.fillRect(0,s*r+r-2,512,2)}return $r(t,{repeatX:4,repeatY:4})}function B0(){let t=Kr(256,256),e=t.getContext("2d"),n=Xs(3072);e.fillStyle="#e5d8ee",e.fillRect(0,0,256,256);for(let i=0;i<256;i+=4)for(let r=0;r<256;r+=4){let s=(r+i)/4%2===0,a=(n()-0.5)*12,o=s?236:222,l=Math.min(255,Math.max(0,o+a)),h=Math.min(255,Math.max(0,o-10+a)),c=Math.min(255,Math.max(0,o+12+a));e.fillStyle=`rgb(${l|0},${h|0},${c|0})`,e.fillRect(r,i,4,4)}e.strokeStyle="rgba(255,255,255,0.14)",e.lineWidth=1;for(let i=2;i<256;i+=8)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();return $r(t,{repeatX:6,repeatY:6})}function z0(){let t=Kr(256,256),e=t.getContext("2d"),n=Xs(4096);e.fillStyle="#ece9f5",e.fillRect(0,0,256,256);for(let i=0;i<3600;i+=1){let r=n()*256,s=n()*256,a=1+n()*2.5;e.fillStyle=n()>0.5?"rgba(255,255,255,0.08)":"rgba(170,160,198,0.06)",e.fillRect(r,s,a,a)}return $r(t,{repeatX:4,repeatY:4})}function V0(){let t=Kr(256,256),e=t.getContext("2d"),n=128,i=128,r=e.createRadialGradient(128,128,12,128,128,124);return r.addColorStop(0,"#805236"),r.addColorStop(0.7,"#583420"),r.addColorStop(1,"#3b2113"),e.fillStyle=r,e.fillRect(0,0,256,256),e.strokeStyle="rgba(248,236,222,0.52)",e.lineWidth=8,e.beginPath(),e.arc(128,128,66,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(252,243,234,0.88)",e.beginPath(),e.moveTo(128,162),e.bezierCurveTo(80,132,84,86,128,112),e.bezierCurveTo(172,86,176,132,128,162),e.fill(),$r(t,{repeatX:1,repeatY:1})}function H0(){let t=Kr(1024,680),e=t.getContext("2d"),n=Xs(7777);e.save(),e.translate(512,0),e.scale(-1,1);let i=e.createLinearGradient(0,0,0,680);i.addColorStop(0,"#2a2252"),i.addColorStop(0.42,"#6d4b8e"),i.addColorStop(0.72,"#e88eb2"),i.addColorStop(1,"#ffd0be"),e.fillStyle=i,e.fillRect(0,0,512,680);for(let c=0;c<65;c+=1){let d=20+n()*472,u=20+n()*290,p=0.8+n()*2;e.fillStyle=`rgba(255,248,255,${0.35+n()*0.65})`,e.beginPath(),e.arc(d,u,p,0,Math.PI*2),e.fill()}e.save(),e.beginPath(),e.arc(256,305,118,0,Math.PI*2),e.clip();let r=e.createLinearGradient(0,185,0,425);r.addColorStop(0,"#fff4dc"),r.addColorStop(0.5,"#ffb5cc"),r.addColorStop(1,"#ff77a8"),e.fillStyle=r,e.fillRect(130,180,260,250),e.fillStyle="#5c3c7e";for(let c=318;c<420;c+=18)e.fillRect(130,c,260,4+(c-318)*0.05);e.restore(),e.fillStyle="rgba(255,222,238,0.34)";for(let[c,d,u,p]of[[125,255,86,16],[390,225,92,18],[210,390,115,14]])e.beginPath(),e.ellipse(c,d,u,p,0,0,Math.PI*2),e.fill();let s=[[12,430,58,250],[64,390,62,290],[118,450,52,230],[166,368,70,312],[232,412,54,268],[282,355,68,325],[346,405,58,275],[398,376,62,304],[452,432,56,248]];for(let[c,d,u,p]of s){e.fillStyle="#241c44",e.fillRect(c,d,u,p);for(let g=d+16;g<620;g+=16)for(let m=c+9;m<c+u-12;m+=14)if(n()<0.52)e.fillStyle=n()<0.55?"#ffaad0":n()<0.7?"#8ef0ff":"#ffe8a8",e.fillRect(m,g,7,8)}e.strokeStyle="rgba(255,244,252,0.55)",e.lineWidth=3,e.strokeRect(24,24,464,632),e.fillStyle="rgba(255,250,255,0.92)",e.font='600 28px -apple-system, "SF Pro Rounded", sans-serif',e.textAlign="center",e.fillText("MIDNIGHT LO-FI",256,86),e.fillStyle="rgba(255,216,238,0.82)",e.font='500 15px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("WITH SNOZZY  ·  VOL. 01",256,114),e.fillStyle="rgba(255,244,250,0.82)",e.font='500 14px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("SIDE A  ·  RAINY WINDOW SESSIONS",256,632),e.restore();let a=e.createLinearGradient(512,0,1024,680);a.addColorStop(0,"#f5ecfa"),a.addColorStop(0.55,"#e8e0f8"),a.addColorStop(1,"#dce8fa"),e.fillStyle=a,e.fillRect(512,0,512,680);let o=e.createLinearGradient(512,110,512,540);o.addColorStop(0,"#6a5b9e"),o.addColorStop(0.55,"#b689c8"),o.addColorStop(1,"#f7bfd6"),e.fillStyle=o,e.beginPath(),e.arc(768,280,165,Math.PI,0),e.lineTo(933,520),e.lineTo(603,520),e.closePath(),e.fill();let l=[];for(let c=0;c<8;c+=1){let d=-Math.PI*0.85+c/7*Math.PI*1.15;l.push([768+Math.cos(d)*105,315+Math.sin(d)*95])}e.strokeStyle="rgba(255,242,208,0.68)",e.lineWidth=2,e.beginPath(),l.forEach(([c,d],u)=>u===0?e.moveTo(c,d):e.lineTo(c,d)),e.stroke();for(let[c,d]of l)e.fillStyle="#fff9e6",e.beginPath(),e.arc(c,d,5,0,Math.PI*2),e.fill();e.fillStyle="#fff7e6",e.beginPath(),e.arc(768,245,42,0,Math.PI*2),e.fill(),e.fillStyle="#8b6eb3",e.beginPath(),e.arc(786,236,35,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,214,232,0.88)";for(let[c,d,u]of[[650,440,0.4],[840,400,-0.5],[730,480,0.9],[875,470,0.2]])e.save(),e.translate(c,d),e.rotate(u),e.beginPath(),e.ellipse(0,0,11,6,0,0,Math.PI*2),e.fill(),e.restore();e.strokeStyle="rgba(116,96,158,0.28)",e.lineWidth=2,e.strokeRect(540,32,456,616),e.fillStyle="#4f4074",e.font='600 22px -apple-system, "SF Pro Rounded", sans-serif',e.textAlign="center",e.fillText("TWELVE SONGS",768,578),e.fillStyle="#7e6ca6",e.font='500 13px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("STARLIGHT CONSTELLATION  ·  EDITION 2026",768,606);let h=$r(t,{repeatX:1,repeatY:1});return h.wrapS=Ji,h.wrapT=Ji,h.flipY=!1,h}function Cf(){let t={wood:F0(),floor:O0(),rug:B0(),wall:z0(),coffee_liquid:V0(),poster_atlas:H0()};return{textures:t,dispose(){Object.values(t).forEach((e)=>e?.dispose?.())}}}var Nc=["typing","composing","researching","planning","resting"];function Dc(t,e,n=!1){let i=document.createElement("canvas");i.width=t,i.height=e;let r=i.getContext("2d"),s=new wn(i);if(s.colorSpace=me,s.flipY=!1,n)s.wrapS=fn,s.repeat.x=-1,s.offset.x=1;return s.minFilter=He,s.magFilter=He,{canvas:i,ctx:r,texture:s}}function ni(t,e,n,i,r,s){t.beginPath(),t.roundRect(e,n,i,r,s)}function G0(t,e,n,i,r,s){let a=s||r.activity||"typing",o=r.beatPulse||0,l=t.createLinearGradient(0,0,e,n);l.addColorStop(0,"#14172b"),l.addColorStop(1,"#1d1935"),t.fillStyle=l,t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(0,0,e,26);for(let[c,d]of[["#ff7ca8",0],["#ffd27d",1],["#7ce8c8",2]].map(([u,p])=>[p,u]))t.fillStyle=d,t.beginPath(),t.arc(16+c*14,13,4.2,0,Math.PI*2),t.fill();t.fillStyle="rgba(235,232,255,0.72)",t.font='600 11px -apple-system, "SF Pro Rounded", sans-serif';let h={typing:"SnozzyRoom3D.swift — WithSnozzy",composing:"Track_04_RainyWindow.daw — Lo-Fi Synth",researching:"Music Theory · Extended Jazz Chords",planning:"Today Focus & Tasks",resting:"Ambient Mode · Take a Breath",takingBreak:"Break Time · Warm Coffee"};if(t.textAlign="left",t.fillText(h[a]||h.typing,64,17),a==="composing"){t.fillStyle="rgba(255,255,255,0.04)",t.fillRect(10,34,48,n-46);for(let p=0;p<11;p+=1){let g=38+p*24;t.fillStyle=p%2===0?"rgba(255,255,255,0.045)":"rgba(255,255,255,0.015)",t.fillRect(62,g,e-74,21),t.fillStyle=[1,3,6,8,10].includes(p)?"#3b3556":"#dcd6f5",t.fillRect(14,g+2,40,17)}let c=i*38%(e-80),d=[[0,2,68,"#ff9bc4"],[82,4,54,"#7ce8ff"],[150,1,76,"#c7a4ff"],[238,5,62,"#ff9bc4"],[312,3,88,"#95f2d8"],[40,7,94,"#a6b8ff"],[188,6,72,"#ffd0a6"],[290,8,64,"#ff9bc4"],[380,2,58,"#7ce8ff"]];for(let[p,g,m,f]of d){let v=66+(p-c+(e-74))%(e-74),y=40+g*24,_=Math.min(m,e-14-v);if(_>6)t.fillStyle=f,ni(t,v,y,_,17,5),t.fill()}let u=68+i*95%(e-86);t.strokeStyle="#ff95c8",t.lineWidth=2,t.beginPath(),t.moveTo(u,34),t.lineTo(u,n-12),t.stroke()}else if(a==="planning")[{title:"TODAY",accent:"#ff96c2",items:["Finish 3D shaders","Record synth chord","Warm latte break"]},{title:"IN PROGRESS",accent:"#7ce8ff",items:["WithSnozzy Steam build","Album track #4 mix"]}].forEach((d,u)=>{let p=18+u*242;t.fillStyle="rgba(255,255,255,0.05)",ni(t,p,40,228,n-56,12),t.fill(),t.fillStyle=d.accent,t.font="700 11px -apple-system, sans-serif",t.fillText(d.title,p+14,62),d.items.forEach((g,m)=>{let f=76+m*62;t.fillStyle="rgba(255,255,255,0.075)",ni(t,p+12,f,204,50,9),t.fill(),t.fillStyle=d.accent,t.beginPath(),t.arc(p+28,f+25,6,0,Math.PI*2),t.fill(),t.fillStyle="rgba(250,246,255,0.88)",t.font="500 12px -apple-system, sans-serif",t.fillText(g,p+44,f+29)})});else if(a==="researching"){t.fillStyle="rgba(255,255,255,0.06)",ni(t,18,38,e-36,26,8),t.fill(),t.fillStyle="rgba(170,218,255,0.82)",t.font="500 11px -apple-system, monospace",t.fillText("https://lofi.notes/chords/maj9-voicings",30,55),t.fillStyle="#f5d4ff",t.font='700 18px -apple-system, "SF Pro Rounded", sans-serif',t.fillText("Dreamy Lo-Fi Voicings",24,98),t.strokeStyle="#7ce8ff",t.lineWidth=2.5,t.beginPath();for(let c=24;c<e-24;c+=6){let d=165+Math.sin(c*0.035+i*2.4)*24+Math.cos(c*0.07-i)*10;if(c===24)t.moveTo(c,d);else t.lineTo(c,d)}t.stroke();for(let c=0;c<4;c+=1)t.fillStyle="rgba(230,226,255,0.22)",ni(t,24,218+c*20,c===3?260:420,8,4),t.fill()}else if(a==="resting"||a==="takingBreak"){let c=new Date,d=String(c.getHours()).padStart(2,"0"),u=String(c.getMinutes()).padStart(2,"0"),p=t.createRadialGradient(e*0.5,n*0.52,16,e*0.5,n*0.52,175);p.addColorStop(0,`rgba(255,152,208,${0.26+o*0.14})`),p.addColorStop(1,"rgba(20,23,43,0)"),t.fillStyle=p,t.fillRect(0,26,e,n-26),t.textAlign="center",t.fillStyle="#fff5fb",t.font='700 72px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`${d}:${u}`,e*0.5,n*0.56),t.fillStyle="rgba(220,210,255,0.72)",t.font='500 14px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(a==="takingBreak"?"☕  warm coffee break  ·  with snozzy":"✦  stay cozy  ·  lo-fi companion",e*0.5,n*0.72),t.textAlign="left"}else{t.fillStyle="rgba(255,255,255,0.035)",t.fillRect(0,26,98,n-26),["Room.swift","Shader.glsl","LifeRig.js","Synth.dsp","Album.json"].forEach((p,g)=>{if(g===1)t.fillStyle="rgba(255,154,205,0.18)",ni(t,8,38+g*24,82,20,5),t.fill();t.fillStyle=g===1?"#ffd8ec":"rgba(210,208,238,0.52)",t.font="500 10.5px -apple-system, monospace",t.fillText(p,16,52+g*24)});let d=[[["#ff93c8","struct "],["#87ebff","LofiRoom"],["#e8e4ff"," {"]],[["#c7a4ff","  let "],["#e8e4ff","mood = "],["#ffd594",".brightCyber"]],[["#c7a4ff","  let "],["#e8e4ff","bpm  = "],["#92f5d2","76.0"]],[["#ff93c8","  func "],["#87ebff","render"],["#e8e4ff","(dt: Double) {"]],[["#92f5d2","    // soft pastel rim + snow"]],[["#e8e4ff","    sky.blend(hour: "],["#ffd594","sceneHour"],["#e8e4ff",")"]],[["#e8e4ff","    snozzy.updateSpringHair(dt)"]],[["#e8e4ff","    coffee.emitSteam(warmth: "],["#ffd594","1.0"],["#e8e4ff",")"]],[["#ff93c8","    return "],["#87ebff","cozyFrame"],["#e8e4ff","()"]],[["#e8e4ff","  }"]],[["#e8e4ff","}"]]],u=Math.floor(i*0.9)%d.length;d.forEach((p,g)=>{let m=52+g*22;if(g===u)t.fillStyle="rgba(130,190,255,0.09)",t.fillRect(104,m-14,e-114,19);t.fillStyle="rgba(180,175,215,0.34)",t.font="500 11px ui-monospace, Menlo, monospace",t.fillText(String(g+1).padStart(2," "),108,m);let f=132;for(let[v,y]of p)t.fillStyle=v,t.fillText(y,f,m),f+=t.measureText(y).width;if(g===u&&Math.floor(i*2.4)%2===0)t.fillStyle="#ff96c8",t.fillRect(f+2,m-11,7,13)})}t.fillStyle="rgba(255,156,208,0.16)",t.fillRect(0,n-18,e,18),t.fillStyle="rgba(255,226,242,0.85)",t.font="600 9.5px -apple-system, monospace",t.fillText(`● LIVE  ·  ${String(a).toUpperCase()}  ·  ${r.isPlaying?"♪ PLAYING":"QUIET"}`,12,n-6)}function k0(t,e,n,i,r){let s=Boolean(r.isPlaying),a=r.beatPulse||0,o=Math.max(0,Math.min(12,Number(r.playableTracks||0))),l=t.createLinearGradient(0,0,e,n);l.addColorStop(0,"#181530"),l.addColorStop(1,"#261b42"),t.fillStyle=l,t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(0,0,e,34),t.fillStyle=s?"#ff94c8":"#96a2cf",t.beginPath(),t.arc(18,17,5,0,Math.PI*2),t.fill(),t.fillStyle="#f5efff",t.font='600 12px -apple-system, "SF Pro Rounded", sans-serif',t.textAlign="left",t.fillText(r.trackTitle||(s?"Lo-Fi Radio · Chill":"Music Paused"),32,21);let h=18,c=18,d=10,u=4,p=n-54;for(let S=0;S<h;S+=1){let R=s?0.28+0.42*Math.abs(Math.sin(i*4.4+S*0.55))+0.3*a*Math.cos(S*0.4):0.08+0.04*Math.sin(i*1.2+S*0.7),A=Math.max(6,Math.min(110,R*108)),I=t.createLinearGradient(0,p-A,0,p);I.addColorStop(0,"#84eeff"),I.addColorStop(0.55,"#c9a0ff"),I.addColorStop(1,"#ff8fc4"),t.fillStyle=I,ni(t,c+S*(d+u),p-A,d,A,4),t.fill()}let g=e-62,m=108,f=36;t.strokeStyle="rgba(255,255,255,0.12)",t.lineWidth=7,t.beginPath(),t.arc(g,m,f,0,Math.PI*2),t.stroke();let v=r.focusPhase||"idle",y=v==="work"?"#ff90c4":v==="idle"?"#b8a4ff":"#7ef0d2",_=v==="idle"?0.35+0.15*Math.sin(i*0.6):0.72;t.strokeStyle=y,t.lineCap="round",t.beginPath(),t.arc(g,m,f,-Math.PI/2,-Math.PI/2+Math.PI*2*_),t.stroke(),t.textAlign="center",t.fillStyle="#fff5fb",t.font='700 12px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(v==="work"?"FOCUS":v==="idle"?"COZY":"BREAK",g,m+4),t.textAlign="left",t.fillStyle="rgba(230,220,255,0.68)",t.font='500 10px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`ALBUM  ${o} / 12`,18,n-20);for(let S=0;S<12;S+=1)t.fillStyle=S<o?"#ffd98a":"rgba(255,255,255,0.18)",t.beginPath(),t.arc(116+S*19,n-24,S<o?4:2.6,0,Math.PI*2),t.fill()}function W0(t,e,n,i,r){let s=t.createLinearGradient(0,0,e,n);s.addColorStop(0,"#362a64"),s.addColorStop(0.55,"#6a4d8e"),s.addColorStop(1,"#d98eb4"),t.fillStyle=s,t.fillRect(0,0,e,n);let a=new Date,o=String(a.getHours()).padStart(2,"0"),l=String(a.getMinutes()).padStart(2,"0");t.textAlign="center",t.fillStyle="#ffffff",t.font='700 38px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`${o}:${l}`,e*0.5,86),[{name:"Snozzy ♪",text:r.isPlaying?"这首鼓点很舒服呢":"要不要放点轻音乐？"},{name:"Focus",text:r.focusPhase==="work"?"专注进行中 ✨":"记得喝一口温咖啡 ☕"}].forEach((d,u)=>{let p=122+u*74;t.fillStyle="rgba(255,255,255,0.22)",ni(t,14,p,e-28,60,14),t.fill(),t.textAlign="left",t.fillStyle="#fff5fb",t.font='700 12px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(d.name,26,p+22),t.fillStyle="rgba(255,248,255,0.88)",t.font='500 11px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(d.text,26,p+43)});let c=0.5+0.5*Math.sin(i*2.5);t.fillStyle=`rgba(255,255,255,${0.45+0.35*c})`,ni(t,e*0.5-32,n-18,64,5,2.5),t.fill()}function Lf(){let t=Dc(512,320,!0),e=Dc(384,256,!0),n=Dc(192,320,!1),i=0,r=999,s=-1;function a(o){let l=s>=0?Nc[s]:null;G0(t.ctx,t.canvas.width,t.canvas.height,i,o,l),k0(e.ctx,e.canvas.width,e.canvas.height,i,o),W0(n.ctx,n.canvas.width,n.canvas.height,i,o),t.texture.needsUpdate=!0,e.texture.needsUpdate=!0,n.texture.needsUpdate=!0}return{textures:{screen_main:t.texture,screen_side:e.texture,screen_phone:n.texture},cycleMainMode(o){return s=(s+1)%Nc.length,a(o),Nc[s]},update(o,l,h=!1){if(i+=o,r+=o,!h&&r<0.085)return;r=0,a(l)},dispose(){t.texture.dispose(),e.texture.dispose(),n.texture.dispose()}}}function X0(t){let e=(t?.name||"").toLowerCase();return/hair|eyelash|eyeline|brow/.test(e)}function q0(t){let e=(t?.name||"").toLowerCase();return/eye|highlight|iris/.test(e)}function Y0(t){let e=(t?.name||"").toLowerCase();return/face_00_skin/.test(e)}function Z0(t){return!(t?.name||"").startsWith("Room3D_")}function J0(t){if(!t)return null;return t.colorSpace=me,t.needsUpdate=!0,t}function j0(t,e){let n=X0(t),i=q0(t),r=Y0(t),s=J0(t.map||null),a=t.alphaMap||null,o=i?0.14:0.28,l=(t.color?.clone?.()||new mt(16777215)).multiplyScalar(o),h=new zo({color:l,map:s,alphaMap:a,emissive:new mt(16777215),emissiveMap:s,emissiveIntensity:i?0.88:0.72,transparent:Boolean(t.transparent)||n,alphaTest:n?0.35:t.alphaTest||0,depthWrite:!0,side:Ee});return h.onBeforeCompile=(c)=>{c.uniforms.uRimColor=e.uRimColor,c.uniforms.uRimStrength=e.uRimStrength,c.uniforms.uMoodTint=e.uMoodTint,c.uniforms.uBlush=e.uBlush,c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
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
         #include <dithering_fragment>`)},h.customProgramCacheKey=()=>`snozzy-anime-${i?"eye":r?"face":"std"}`,h.name=`${t.name||"Material"}_AnimeCel`,h.userData.phase0Unlit=!0,h.userData.phase0Character=!0,h.userData.phase0SourceName=t.name||"",h.userData.phase0AlphaMode=n?"MASK(alphaTest=0.35)":t.transparent?"BLEND":"OPAQUE",h}function K0(t,e,n,i){let r=t.name||"",s=r.replace(/^Room3D_/,""),a=s==="screen_main"||s==="screen_side"||s==="screen_phone",o=s==="led_pink"||s==="led_cyan"||s==="lamp_bulb",l=t.color?.clone?.()||new mt(16777215),h=t.map||null,c=typeof t.roughness==="number"?t.roughness:0.72,d=typeof t.metalness==="number"?t.metalness:0.04,u=t.emissive?.clone?.()||new mt(0),p=null,g=typeof t.emissiveIntensity==="number"?t.emissiveIntensity:0;if(s==="wood"&&e.wood)h=e.wood,l.setHex(16777215),c=0.56;else if(s==="floor"&&e.floor)h=e.floor,l.setHex(16777215),c=0.62;else if(s==="rug"&&e.rug)h=e.rug,l.setHex(15985400),c=0.94;else if(s==="wall"&&e.wall)h=e.wall,l.setHex(16777215),c=0.88;else if(s==="coffee_liquid"&&e.coffee_liquid)h=e.coffee_liquid,l.setHex(16777215),c=0.22;else if(s==="poster_atlas"&&e.poster_atlas)h=e.poster_atlas,l.setHex(16777215),c=0.5,u.setHex(16777215),p=e.poster_atlas,g=0.14;else if(s==="ceramic")c=0.24,d=0.04;else if(s==="metal")c=0.34,d=0.55;else if(a&&n[s])h=n[s],l.setHex(16777215),u.setHex(16777215),p=n[s],g=0.95,c=0.18,d=0.06;else if(s==="led_pink")u.setHex(16744132),g=1.65,c=0.28;else if(s==="led_cyan")u.setHex(7005951),g=1.55,c=0.28;else if(s==="lamp_bulb")u.setHex(16766095),g=2,c=0.25;let m=new xi({color:l,map:h,roughness:c,metalness:d,emissive:u,emissiveMap:p,emissiveIntensity:g,transparent:Boolean(t.transparent),alphaTest:t.alphaTest||0,side:a?xn:Ee});if(m.name=`${r||"RoomMat"}_PBR`,m.userData.phase0Character=!1,m.userData.phase0SourceName=r,m.userData.room3dKey=s,o||a)i.set(s,m);return m}function If(t,e,n){let i={uRimColor:{value:new mt(16761572)},uRimStrength:{value:0.72},uMoodTint:{value:new mt(16777215)},uBlush:{value:0}},r=new Map,s=new Map,a=new Map;return t.traverse((o)=>{if(!o.isMesh)return;let h=(Array.isArray(o.material)?o.material:[o.material]).map((c)=>{if(!c)return c;let d=Z0(c),u=c.uuid,p=s.get(u);if(!p)p=d?j0(c,i):K0(c,e,n,a),s.set(u,p);return r.set(p.uuid,p),p});if(o.material=Array.isArray(o.material)?h:h[0],o.isSkinnedMesh)o.frustumCulled=!1,o.castShadow=!0,o.receiveShadow=!1;else{let c=o.name||"",d=/^(Floor|Rug|Wall|Baseboard|Wainscot|Ceiling|DeskMat)/.test(c),u=/(LED|Glow|Bulb|Fairy|Screen|Orb|Crystal)/.test(c);o.castShadow=!d&&!u,o.receiveShadow=!u}}),{materials:[...r.values()],sharedUniforms:i,emissiveRegistry:a}}var Ai=[{hour:1.5,bg:1447728,skyTop:"#0d1236",skyMid:"#24235e",skyBot:"#6a4892",hemiSky:9348848,hemiGround:2497594,hemiInt:0.82,keyColor:11980031,keyInt:0.92,keyPos:[-1.1,2.45,1.85],winColor:8694015,winInt:0.58,fillColor:16032980,fillInt:0.36,lampInt:1.85,lampColor:16762496,rimColor:16757472,rimStrength:0.85,moodTint:15592191,ledScale:1.25,starsAlpha:0.96,cityLit:1,exposure:0.98},{hour:7,bg:2761794,skyTop:"#4e5b9c",skyMid:"#c88bb8",skyBot:"#ffd4b8",hemiSky:16768978,hemiGround:5390942,hemiInt:1.05,keyColor:16767166,keyInt:1.28,keyPos:[-1.3,2.55,1.95],winColor:16762012,winInt:0.78,fillColor:12243199,fillInt:0.42,lampInt:0.75,lampColor:16765594,rimColor:16764080,rimStrength:0.72,moodTint:16775412,ledScale:0.72,starsAlpha:0.24,cityLit:0.35,exposure:0.98},{hour:13,bg:3885163,skyTop:"#5ca2ee",skyMid:"#a2d2ff",skyBot:"#eef5ff",hemiSky:15923199,hemiGround:6971518,hemiInt:1.18,keyColor:16775920,keyInt:1.48,keyPos:[-1.2,2.7,1.9],winColor:14348543,winInt:0.75,fillColor:13164031,fillInt:0.46,lampInt:0.25,lampColor:16769722,rimColor:15135487,rimStrength:0.52,moodTint:16777215,ledScale:0.45,starsAlpha:0,cityLit:0.06,exposure:0.96},{hour:19.2,bg:2629181,skyTop:"#242264",skyMid:"#9c5294",skyBot:"#ffaa88",hemiSky:16302264,hemiGround:4008526,hemiInt:0.94,keyColor:16760482,keyInt:1.18,keyPos:[-1.2,2.4,1.85],winColor:16749692,winInt:0.8,fillColor:10006783,fillInt:0.4,lampInt:1.45,lampColor:16760950,rimColor:16757448,rimStrength:0.88,moodTint:16773356,ledScale:1.08,starsAlpha:0.62,cityLit:0.82,exposure:0.98}];function je(t,e,n){return t+(e-t)*n}function An(t,e,n,i=new mt){let r=new mt(t),s=new mt(e);return i.copy(r).lerp(s,n)}function Fc(t,e,n){return`#${An(t,e,n).getHexString()}`}function $0(t){let e=(Number(t)%24+24)%24,n=Ai[Ai.length-1],i=Ai[0],r=i.hour+24-n.hour,s=e>=n.hour?e-n.hour:e+24-n.hour;for(let l=0;l<Ai.length-1;l+=1)if(e>=Ai[l].hour&&e<=Ai[l+1].hour){n=Ai[l],i=Ai[l+1],r=i.hour-n.hour,s=e-n.hour;break}let a=Math.max(0,Math.min(1,r>0?s/r:0)),o=a*a*(3-2*a);return{bg:An(n.bg,i.bg,o),skyTop:Fc(n.skyTop,i.skyTop,o),skyMid:Fc(n.skyMid,i.skyMid,o),skyBot:Fc(n.skyBot,i.skyBot,o),hemiSky:An(n.hemiSky,i.hemiSky,o),hemiGround:An(n.hemiGround,i.hemiGround,o),hemiInt:je(n.hemiInt,i.hemiInt,o),keyColor:An(n.keyColor,i.keyColor,o),keyInt:je(n.keyInt,i.keyInt,o),keyPos:[je(n.keyPos[0],i.keyPos[0],o),je(n.keyPos[1],i.keyPos[1],o),je(n.keyPos[2],i.keyPos[2],o)],winColor:An(n.winColor,i.winColor,o),winInt:je(n.winInt,i.winInt,o),fillColor:An(n.fillColor,i.fillColor,o),fillInt:je(n.fillInt,i.fillInt,o),lampInt:je(n.lampInt,i.lampInt,o),lampColor:An(n.lampColor,i.lampColor,o),rimColor:An(n.rimColor,i.rimColor,o),rimStrength:je(n.rimStrength,i.rimStrength,o),moodTint:An(n.moodTint,i.moodTint,o),ledScale:je(n.ledScale,i.ledScale,o),starsAlpha:je(n.starsAlpha,i.starsAlpha,o),cityLit:je(n.cityLit,i.cityLit,o),exposure:je(n.exposure,i.exposure,o)}}function Oc(t,e){let n=document.createElement("canvas");n.width=64,n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(32,32,2,32,32,30);r.addColorStop(0,t),r.addColorStop(0.5,t),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,64,64);let s=new wn(n);return s.colorSpace=me,s}function Q0(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d");e.fillStyle="#ff98cc",e.shadowColor="#ffc8e6",e.shadowBlur=10,e.beginPath(),e.moveTo(32,50),e.bezierCurveTo(10,34,10,14,32,24),e.bezierCurveTo(54,14,54,34,32,50),e.fill();let n=new wn(t);return n.colorSpace=me,n}function Pf(t,e,n,i){let r=new qe;r.name="AtmosphereSystem",t.add(r),e.shadowMap.enabled=!0,e.shadowMap.type=za;let s=new ko(13161983,3418184,1.35);r.add(s);let a=new Ei(16770772,1.85);a.position.set(-1.6,2.8,-2.5),a.target.position.set(0,0.82,0.32),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.near=0.5,a.shadow.camera.far=9,a.shadow.camera.left=-2.2,a.shadow.camera.right=2.2,a.shadow.camera.top=2.2,a.shadow.camera.bottom=-1.6,a.shadow.bias=-0.0007,a.shadow.normalBias=0.022,r.add(a),r.add(a.target);let o=new Ei(16757914,0.95);o.position.set(-1.15,2.05,-2.35),o.target.position.set(0,0.92,0.35),r.add(o),r.add(o.target);let l=new Ei(13162751,0.65);l.position.set(2.2,1.9,2.8),r.add(l);let h=new er(16763778,2.4,3.8,1.6);h.position.set(0.72,1.14,0.32),r.add(h);let c=new er(16753884,0.85,3.2,1.8);c.position.set(-0.25,1.05,0.58),r.add(c);let d=document.createElement("canvas");d.width=512,d.height=384;let u=d.getContext("2d"),p=new wn(d);p.colorSpace=me;let g=new ce(new Qn(7.6,5.2),new we({map:p,fog:!1}));g.position.set(-0.9,1.8,-5.8),r.add(g);let m=new qe,f=new we({color:2235714}),v=new we({color:16765608,transparent:!0,opacity:0.9}),y=new we({color:9367807,transparent:!0,opacity:0.85}),_=new we({color:16750796,transparent:!0,opacity:0.85});[[-3.1,0,-5,0.52,1.55,0.32],[-2.52,0,-4.4,0.44,1.72,0.3],[-2.02,0,-4.8,0.46,1.42,0.32],[-1.54,0,-4.2,0.42,1.62,0.3],[-1.08,0,-4.6,0.48,1.48,0.32],[-0.58,0,-4.3,0.44,1.66,0.3],[-0.1,0,-4.9,0.5,1.38,0.32],[0.42,0,-4.5,0.46,1.58,0.3]].forEach(([E,P,D,B,z,st],lt)=>{let j=new ce(new $n(B,z,st),f);j.position.set(E,P+z*0.5,D),m.add(j);for(let it=0;it<5;it+=1){let _t=z-0.14-it*0.12;if(_t<0.92)continue;for(let Tt=-1;Tt<=1;Tt+=1){if((it*3+Tt+lt)%3===0)continue;let Pt=(it+Tt+lt)%5===0?_:(it+lt)%4===0?y:v,Bt=new ce(new Qn(0.055,0.036),Pt);Bt.position.set(E+Tt*(B*0.25),_t,D+st*0.5+0.01),m.add(Bt)}}}),r.add(m);let R=160,A=new Jt,I=new Float32Array(R*6),V=[];for(let E=0;E<R;E+=1){let P=-2.2+Math.random()*2.6,D=0.8+Math.random()*2,B=-1.62-Math.random()*1.1,z=2.6+Math.random()*1.4;V.push({x:P,y:D,z:B,speed:z}),I[E*6+0]=P,I[E*6+1]=D,I[E*6+2]=B,I[E*6+3]=P-0.025,I[E*6+4]=D-0.14,I[E*6+5]=B}A.setAttribute("position",new ae(I,3));let U=new Xr(A,new Qi({color:12378879,transparent:!0,opacity:0.48}));U.visible=!1,r.add(U);let F=120,k=new Jt,W=new Float32Array(F*3),Y=[];for(let E=0;E<F;E+=1){let P=-2.1+Math.random()*2.4,D=0.85+Math.random()*1.9,B=-1.58-Math.random()*1.2;Y.push({x:P,y:D,z:B,speed:0.26+Math.random()*0.24,phase:Math.random()*6.28}),W[E*3+0]=P,W[E*3+1]=D,W[E*3+2]=B}k.setAttribute("position",new ae(W,3));let H=Oc("rgba(255,255,255,0.95)","rgba(220,238,255,0)"),J=new tr(k,new Mi({map:H,size:0.048,transparent:!0,opacity:0.85,depthWrite:!1}));J.visible=!1,r.add(J);let K=Oc("rgba(255,248,244,0.34)","rgba(255,248,244,0)"),et=[];for(let E=0;E<12;E+=1){let P=new Ns(new kr({map:K,transparent:!0,opacity:0,depthWrite:!1}));P.scale.set(0.06,0.06,1),r.add(P),et.push({sprite:P,age:E/12*2.4,life:2.4,drift:(Math.random()-0.5)*0.025})}let nt=34,dt=new Jt,yt=new Float32Array(nt*3),tt=[];for(let E=0;E<nt;E+=1){let P=-1.2+Math.random()*2.4,D=0.78+Math.random()*1.35,B=-1+Math.random()*1.9;tt.push({x:P,y:D,z:B,phase:Math.random()*6.28,speed:0.2+Math.random()*0.3}),yt[E*3+0]=P,yt[E*3+1]=D,yt[E*3+2]=B}dt.setAttribute("position",new ae(yt,3));let Z=Oc("rgba(255,242,216,0.75)","rgba(255,220,245,0)"),gt=new tr(dt,new Mi({map:Z,size:0.028,transparent:!0,opacity:0.55,depthWrite:!1}));r.add(gt);let pt=Q0(),ct=[];for(let E=0;E<14;E+=1){let P=new Ns(new kr({map:pt,transparent:!0,opacity:0,depthWrite:!1}));P.visible=!1,r.add(P),ct.push({sprite:P,active:!1,age:0,life:1.5,vx:0,vy:0,vz:0})}let ot=[[186,152],[208,138],[234,146],[254,128],[278,138],[302,122],[324,140],[344,132],[362,154],[336,170],[306,162],[272,168]],bt="",b=0,x=!0,C=0,O=[7005951,16748240,13149439,8844744,16765576];function M(E,P){let{width:D,height:B}=d,z=u.createLinearGradient(0,0,0,B);if(z.addColorStop(0,E.skyTop),z.addColorStop(0.54,E.skyMid),z.addColorStop(1,E.skyBot),u.fillStyle=z,u.fillRect(0,0,D,B),P.weather==="rain")u.fillStyle="rgba(28,36,58,0.28)",u.fillRect(0,0,D,B);let st=(Number(P.sceneHour??20)%24+24)%24;if(st<6.5||st>18.2){let it=u.createRadialGradient(198,152,6,198,152,52);it.addColorStop(0,"rgba(255,248,225,0.92)"),it.addColorStop(0.45,"rgba(255,230,245,0.28)"),it.addColorStop(1,"rgba(255,230,245,0)"),u.fillStyle=it,u.beginPath(),u.arc(198,152,52,0,Math.PI*2),u.fill(),u.fillStyle="#fff9e6",u.beginPath(),u.arc(198,152,17,0,Math.PI*2),u.fill()}else{let lt=180+(st-6.5)/11.7*165,j=175-Math.sin((st-6.5)/11.7*Math.PI)*44,it=u.createRadialGradient(lt,j,6,lt,j,74);it.addColorStop(0,"rgba(255,250,224,0.94)"),it.addColorStop(0.4,"rgba(255,212,188,0.34)"),it.addColorStop(1,"rgba(255,212,188,0)"),u.fillStyle=it,u.beginPath(),u.arc(lt,j,74,0,Math.PI*2),u.fill()}u.fillStyle=st<6.5||st>19.5?"rgba(165,148,215,0.14)":"rgba(255,248,255,0.24)";for(let lt=0;lt<4;lt+=1){let j=(lt*155+b*(4+lt))%(D+160)-80,it=148+lt%2*42;u.beginPath(),u.ellipse(j,it,78,18,0,0,Math.PI*2),u.fill()}if(E.starsAlpha>0.05){u.fillStyle=`rgba(255,250,255,${0.55*E.starsAlpha})`;for(let j=0;j<42;j+=1){let it=(j*97+31)%D,_t=(j*53+17)%190,Tt=0.65+0.35*Math.sin(b*2.1+j);u.globalAlpha=E.starsAlpha*Tt,u.beginPath(),u.arc(it,_t,1.3+j%2*0.7,0,Math.PI*2),u.fill()}u.globalAlpha=1;let lt=Math.max(0,Math.min(12,Number(P.playableTracks||0)));if(lt>0){u.strokeStyle=`rgba(255,236,184,${0.48*E.starsAlpha})`,u.lineWidth=1.4,u.beginPath();for(let j=0;j<lt;j+=1){let[it,_t]=ot[j];if(j===0)u.moveTo(it,_t);else u.lineTo(it,_t)}u.stroke();for(let j=0;j<lt;j+=1){let[it,_t]=ot[j];u.fillStyle=`rgba(255,245,204,${0.95*E.starsAlpha})`,u.beginPath(),u.arc(it,_t,3.2,0,Math.PI*2),u.fill()}}}p.needsUpdate=!0}let L=new T;return{toggleLamp(){return x=!x,x},isLampOn(){return x},cycleCrystalColor(){C=(C+1)%O.length;let E=i.get("led_cyan");if(E)E.emissive.setHex(O[C]);return O[C]},spawnHearts(E,P=7){let D=0;for(let B of ct){if(B.active)continue;if(B.active=!0,B.age=0,B.life=1.15+Math.random()*0.55,B.sprite.position.set(E.x+(Math.random()-0.5)*0.22,E.y+0.08+Math.random()*0.08,E.z+(Math.random()-0.5)*0.14),B.vx=(Math.random()-0.5)*0.16,B.vy=0.26+Math.random()*0.18,B.vz=(Math.random()-0.5)*0.1,B.sprite.scale.set(0.055,0.055,1),B.sprite.visible=!0,D+=1,D>=P)break}},setLowPower(E){e.shadowMap.enabled=!E,a.castShadow=!E},update(E,P,D){b+=E;let B=Number.isFinite(Number(P.sceneHour))?Number(P.sceneHour):20.5,z=$0(B);t.background=z.bg,e.toneMappingExposure=z.exposure,s.color.copy(z.hemiSky),s.groundColor.copy(z.hemiGround),s.intensity=z.hemiInt,a.color.copy(z.keyColor),a.intensity=z.keyInt*(P.weather==="rain"?0.78:1),a.position.set(z.keyPos[0],z.keyPos[1],z.keyPos[2]),o.color.copy(z.winColor),o.intensity=z.winInt*(P.weather==="rain"?0.55:1),l.color.copy(z.fillColor),l.intensity=z.fillInt;let st=x?1:0.05;h.color.copy(z.lampColor),h.intensity=z.lampInt*st;let lt=Number(P.beatPulse||0);c.intensity=(0.72+lt*0.45)*z.ledScale,n.uRimColor.value.copy(z.rimColor),n.uRimStrength.value=z.rimStrength,n.uMoodTint.value.copy(z.moodTint);let j=i.get("led_pink");if(j)j.emissiveIntensity=(1.35+lt*0.75)*z.ledScale;let it=i.get("led_cyan");if(it)it.emissiveIntensity=(1.25+lt*0.55)*z.ledScale;let _t=i.get("lamp_bulb");if(_t)_t.emissiveIntensity=x?1.2+z.lampInt*0.45:0.08;f.color.copy(z.bg).multiplyScalar(0.85),v.opacity=0.08+z.cityLit*0.85,y.opacity=0.06+z.cityLit*0.78,_.opacity=0.06+z.cityLit*0.78;let Tt=`${Math.round(B*10)}|${P.weather}|${P.playableTracks||0}|${Math.floor(b*4)}`;if(Tt!==bt)bt=Tt,M(z,P);let Pt=P.weather||"clear";if(U.visible=Pt==="rain",J.visible=Pt==="snow",Pt==="rain"){let $=A.attributes.position.array;for(let ht=0;ht<R;ht+=1){let St=V[ht];if(St.y-=St.speed*E,St.x-=0.45*E,St.y<0.72)St.y=2.65+Math.random()*0.3,St.x=-2.1+Math.random()*2.5;$[ht*6+0]=St.x,$[ht*6+1]=St.y,$[ht*6+2]=St.z,$[ht*6+3]=St.x-0.028,$[ht*6+4]=St.y-0.14,$[ht*6+5]=St.z}A.attributes.position.needsUpdate=!0}else if(Pt==="snow"){let $=k.attributes.position.array;for(let ht=0;ht<F;ht+=1){let St=Y[ht];if(St.y-=St.speed*E,St.x+=Math.sin(b*1.4+St.phase)*0.12*E,St.y<0.78)St.y=2.65+Math.random()*0.25,St.x=-2+Math.random()*2.3;$[ht*3+0]=St.x,$[ht*3+1]=St.y,$[ht*3+2]=St.z}k.attributes.position.needsUpdate=!0}let Bt=D?.getObjectByName("Prop_Coffee");if(Bt){Bt.getWorldPosition(L);for(let $ of et){if($.age+=E,$.age>=$.life)$.age-=$.life;let ht=$.age/$.life;$.sprite.position.set(L.x+Math.sin(b*1.6+ht*5)*0.014+$.drift*ht*12,L.y+0.06+ht*0.24,L.z+Math.cos(b*1.3+ht*4)*0.012);let St=0.045+ht*0.09;$.sprite.scale.set(St,St,1),$.sprite.material.opacity=Math.sin(ht*Math.PI)*0.36}}let Ct=dt.attributes.position.array;for(let $=0;$<nt;$+=1){let ht=tt[$];Ct[$*3+0]=ht.x+Math.sin(b*ht.speed+ht.phase)*0.06,Ct[$*3+1]=ht.y+Math.cos(b*ht.speed*0.8+ht.phase)*0.04,Ct[$*3+2]=ht.z}dt.attributes.position.needsUpdate=!0;for(let $ of ct){if(!$.active)continue;if($.age+=E,$.age>=$.life){$.active=!1,$.sprite.visible=!1;continue}let ht=$.age/$.life;$.sprite.position.x+=$.vx*E,$.sprite.position.y+=$.vy*E,$.sprite.position.z+=$.vz*E;let St=0.055*(1+Math.sin(ht*Math.PI)*0.35);$.sprite.scale.set(St,St,1),$.sprite.material.opacity=ht<0.2?ht/0.2:(1-ht)/0.8}},dispose(){p.dispose(),H.dispose(),K.dispose(),Z.dispose(),pt.dispose(),r.traverse((E)=>{if(E.geometry?.dispose?.(),Array.isArray(E.material))E.material.forEach((P)=>P?.dispose?.());else E.material?.dispose?.()})}}}var Ci=24,or=0.32,Bc=document.getElementById("room-canvas"),t_=document.getElementById("room-root"),Yc=document.getElementById("room-loading"),Zc=document.getElementById("room-error"),Uf=document.getElementById("room-error-message"),Nf=document.getElementById("room-status"),Kt=(t,e={})=>{let n={type:t,...e};if(window.webkit?.messageHandlers?.room)window.webkit.messageHandlers.room.postMessage(n)},ze=window.__withSnozzy3DManifest||{},il=window.__withSnozzy3DAssetURL,Qo=window.__withSnozzy3DAssetDataURL,Qt=window.__withSnozzy3DDiagnostic||null,Jc=new Yo,el=[],ts=[],zc=0,Vc=null,Hc=null,Xt=new Map,Re=new Map,rl=null,Ae="",sl="typing_loop",$e=null,lr=null,ue,le,Li,Rn,jt,Ne=!1,ke=!1,Qr=!1,jc=0,e_=performance.now(),nl=null,Gc=performance.now(),kc=0,al=0,Wf=null,Xf=null,Pn=null,qs=[],is=0,Kc=[],qf=new Map,ye=null,be=0,Yf=0,an=0,es=0,ar=0,Zs=!1,Cn=null,Ke=!1,ns=null,Ri=[],Ln=null,Zf=null,$c=null,ii=null,ri=null,Df=null,Ff=null,In={sceneHour:19.6,weather:"clear",isPlaying:!0,beatPulse:0,focusPhase:"idle",activity:"typing",mood:0.62,drowsy:0,sheIsTalking:!1,celebration:0,playableTracks:5,trackTitle:"Lo-Fi Radio · Chill"},Qc=0.025,Of={coffee_once:{startFrame:56,endFrame:120,hand:"J_Bip_R_Hand",prop:"Prop_Coffee",companion:"coffee_once_PropMotion"},phone_once:{startFrame:52,endFrame:128,hand:"J_Bip_L_Hand",prop:"Prop_Phone",companion:"phone_once_PropMotion"}},Wc=["Index","Middle","Ring","Little"],Xc=["L","R"],Ys=0.005,Bf=0.01,n_={typing:[30000,90000],idle:[45000,150000],coffee:[240000,600000],phone:[360000,900000],stand:[480000,1200000]},tu=[{name:"typing_loop",probability:0.68},{name:"idle_seated_loop",probability:0.22},{name:"coffee_once",probability:0.04},{name:"phone_once",probability:0.04},{name:"stand_stretch_once",probability:0.02}];function i_(t,e){return t+Math.random()*(e-t)}function Js(){if(ye!==null)clearTimeout(ye),ye=null}function eu(){if(ns!==null)clearTimeout(ns),ns=null}function Jf(){be+=1,Js(),Cn=null,an=0,es=0,Zs=!1}function r_(){let t=Math.random(),e=0;for(let n of tu)if(e+=n.probability,t<e)return n.name;return tu.at(-1).name}function Ii(t=null,e=null){if(Qt&&!Ke||Ne||ke||$e||ye!==null)return;let n=e||Cn||r_(),i=Xt.has(n)?n:Xt.has("typing_loop")?"typing_loop":Xt.has("idle_seated_loop")?"idle_seated_loop":null;if(!i)return;Cn=i;let r=i==="typing_loop"?"typing":i==="idle_seated_loop"?"idle":i==="coffee_once"?"coffee":i==="phone_once"?"phone":"stand",[s,a]=n_[r];an=Math.max(0,Number(t??i_(s,a))),Yf=performance.now();let o=be;ye=setTimeout(()=>{if(ye=null,Cn=null,Ne||ke||o!==be)return;if(Ke)Ri.push("timerFired");if(Ni(i,{manual:!1,routine:!0})&&!$e&&!Ke)Ii()},an)}function zf(){if(Qt&&!Ke||Ne)return;if(Js(),be+=1,ar+=1,an=0,es=0,Cn=null,$e)Zs=!0;else Zs=!1,Ii()}function s_(){if(Qt&&!Ke||ke||ye===null)return;let t=Math.max(0,performance.now()-Yf);an=Math.max(0,an-t),es=performance.now(),be+=1,Js()}function a_(){if(Qt&&!Ke||ke||Ne||ye!==null)return;Ii(an||null,Cn)}function jf(t=40,e=!1,n=null){if(Qt&&!e||Ne||ke||Ke||$e)return!1;let i=Math.max(15,Math.min(5000,Number(t)||40));eu(),Js(),be+=1,Cn=null,an=0,es=0,Ke=!0,Ri=[],Ln=null;let r={requestedDelayMs:i,scheduled:!1,timerFired:!1,actionBefore:Ae,actionAfter:null,eventsBefore:0,eventsAfter:0,passed:!1},s={pauseSuspends:!1,resumeRestores:!1,remainingMs:0,passed:!1},a={started:!1,resetCountBefore:ar,resetCountAfter:ar,generationBefore:be,generationAfter:be,generationAdvanced:!1,timerScheduled:!1,timerReordered:!1,pendingName:null,passed:!1},o={scheduled:!1,generationBefore:be,generationAfter:be,timerCanceled:!1,timerFiredBefore:0,timerFiredAfter:0,noNewTimerFired:!1,actionBefore:Ae,actionAfter:null,actionUnchanged:!1,oldGenerationSuppressed:!1,callbackSuppressed:!1,passed:!1};Ii(i,"typing_loop"),r.scheduled=ye!==null,r.eventsBefore=Ri.length,iu(!0),s.remainingMs=an,s.pauseSuspends=ye===null&&an>0,iu(!1),s.resumeRestores=ye!==null;let l=()=>{if(Ne||!Ke)return;eu(),r.eventsAfter=Ri.length,r.timerFired=Ri.slice(r.eventsBefore).includes("timerFired"),r.actionAfter=Ae,r.passed=r.scheduled&&r.timerFired,o.timerFiredAfter=Ri.length,o.actionAfter=Ae,o.actionUnchanged=o.actionBefore===o.actionAfter,o.noNewTimerFired=o.timerFiredAfter===o.timerFiredBefore,o.oldGenerationSuppressed=o.generationAfter>o.generationBefore,o.callbackSuppressed=o.noNewTimerFired&&o.actionUnchanged&&ye===null,o.passed=o.scheduled&&o.timerCanceled&&o.generationAfter>o.generationBefore&&o.callbackSuppressed;let c=s.pauseSuspends&&s.resumeRestores,d=a.started&&a.resetCountAfter>a.resetCountBefore&&a.generationAfter>a.generationBefore&&a.timerScheduled&&a.passed,u=o.callbackSuppressed;if(Ke=!1,Cn=null,an=0,es=0,Ln={requestedDelayMs:i,schedule:{...r},pauseResume:{...s,passed:c},manualReorder:{...a,passed:d},teardownCancel:{...o},callbackSuppressed:u,scheduled:r.scheduled,accelerated:a.timerScheduled,pauseSuspends:s.pauseSuspends,resumeRestores:s.resumeRestores,manualReset:d,timerFired:r.timerFired,passed:r.passed&&c&&d&&o.passed&&u},!Qt)Ii();if(Kt("routineProbe",{result:Ln}),typeof n==="function")n(Ln)},h=()=>{if(Ne||!Ke)return;let c=ar,d=be,u=Ni("typing_loop",{manual:!0});a.started=u,a.resetCountBefore=c,a.resetCountAfter=ar,a.generationBefore=d,a.generationAfter=be,a.generationAdvanced=be>d,a.timerScheduled=ye!==null,a.timerReordered=a.timerScheduled&&a.generationAdvanced,a.pendingName=Cn,a.passed=u&&ar===c+1&&be>d&&ye!==null&&a.timerReordered,Js(),be+=1,Cn=null,an=0,es=0,o.generationBefore=be,o.actionBefore=Ae;let p=Ri.length;Ii(i,"typing_loop"),o.scheduled=ye!==null,o.timerFiredBefore=p;let g=ye;Jf(),o.generationAfter=be,o.timerCanceled=g!==null&&ye===null,ns=setTimeout(l,i+40)};return ns=setTimeout(()=>{if(ns=null,Ne||!Ke)return;if(Ri.slice(r.eventsBefore).includes("timerFired")){h();return}h()},i+40),!0}function Kf(){if(nl===null)return;try{globalThis.createImageBitmap=nl}catch(t){}nl=null}function Vf(t){if(!t?.index)return Math.floor((t?.attributes?.position?.count||0)/3);return Math.floor(t.index.count/3)}function o_(t,e){let n=0,i=0,r=0,s=0,a=0,o=new Set,l=[];t.traverse((m)=>{if(n+=1,m.isBone)s+=1;if(!m.isMesh)return;if(i+=1,r+=Vf(m.geometry),m.morphTargetDictionary)Object.keys(m.morphTargetDictionary).forEach((f)=>o.add(f));if(m.isSkinnedMesh&&m.skeleton)a=Math.max(a,m.skeleton.bones.length);l.push({name:m.name,triangles:Vf(m.geometry),materialCount:Array.isArray(m.material)?m.material.length:1,morphTargetCount:m.morphTargetDictionary?Object.keys(m.morphTargetDictionary).length:0,skinned:Boolean(m.isSkinnedMesh)})});let h=new Pe().setFromObject(t),c=h.getSize(new T),d=h.getCenter(new T),u=e.filter((m)=>m.transparent||m.alphaTest>0),p=e.map((m)=>{let f=m.map||null,v=f?.image||null,y=f?.source?.data||null;return{name:m.userData.phase0SourceName||m.name,runtimeName:m.name,type:m.type,role:m.userData.phase0Character?"character":"scene",unlit:Boolean(m.userData.phase0Unlit),map:{present:Boolean(f),uuid:f?.uuid||null,imageName:v?.name||null,imageSourceUUID:f?.source?.uuid||null,imageSourceType:y?.constructor?.name||null,width:v?.width||v?.videoWidth||null,height:v?.height||v?.videoHeight||null,colorSpace:f?.colorSpace||null},alphaMapPresent:Boolean(m.alphaMap),alphaTest:m.alphaTest,transparent:m.transparent,depthWrite:m.depthWrite}}),g=p.filter((m)=>m.role==="character");return{nodeCount:n,meshCount:i,boneCount:s,skeletonBoneCount:a,morphTargetCount:o.size,triangleCount:r,materialCount:e.length,characterMaterialCount:g.length,unlitCharacterMaterialCount:g.filter((m)=>m.unlit).length,characterMaterials:g,materialRuntime:p,alphaMaterialCount:u.length,alphaMaterials:u.map((m)=>({name:m.userData.phase0SourceName||m.name,transparent:m.transparent,alphaTest:m.alphaTest,depthWrite:m.depthWrite,side:m.side===Ee?"DoubleSide":"FrontSide",toon:Boolean(m.userData.phase0Toon),unlit:Boolean(m.userData.phase0Unlit),mapPresent:Boolean(m.map),mapColorSpace:m.map?.colorSpace||null,alphaMode:m.userData.phase0AlphaMode||(m.transparent?"BLEND":"MASK")})),meshes:l,bounds:{min:h.min.toArray(),max:h.max.toArray(),size:c.toArray(),center:d.toArray()},rootScale:t.scale.toArray()}}function l_(){let t=le.getContext(),e=le.domElement.width,n=le.domElement.height,i=new Uint8Array(e*n*4);return t.readPixels(0,0,e,n,t.RGBA,t.UNSIGNED_BYTE,i),i}function $f(t,e){if(!t||!e||t.length!==e.length)return{changedPixels:0,meanAbsoluteChannelDiff:0,maxChannelDiff:0};let n=0,i=0,r=0;for(let s=0;s<t.length;s+=4){let a=0;for(let o=0;o<4;o+=1){let l=Math.abs(t[s+o]-e[s+o]);a=Math.max(a,l),i+=l,r=Math.max(r,l)}if(a>2)n+=1}return{changedPixels:n,changedPixelRatio:n/(t.length/4),meanAbsoluteChannelDiff:i/t.length,maxChannelDiff:r}}function ru(t){le.render(Li,Rn);let e=le.domElement.toDataURL("image/png"),n=l_();if(t==="idle")Vc=n,Wf=n;if(t==="typing")Hc=n,Xf=n;if(Kt("screenshot",{name:t,dataURL:e}),Vc&&Hc){let i=$f(Vc,Hc);Kt("pixelDiff",{pixelDiff:i})}}function nu(t=null){let e=Xt.get("typing_loop");if(!is||!e)return;let n=t??(performance.now()-is)/1000;if(n>or+0.08)return;if(Kc.some((i)=>Math.abs(i.elapsedSeconds-n)<0.01))return;Kc.push({elapsedSeconds:n,idleWeight:Xt.get("idle_seated_loop")?.getEffectiveWeight?.()||0,typingWeight:e.getEffectiveWeight(),idleTimeSeconds:Xt.get("idle_seated_loop")?.time||0,typingTimeSeconds:e.time})}function h_(t,e,n,i=null){let r=[...Xt.entries()].map(([d,u])=>({name:d,weight:Number(u.getEffectiveWeight?.()||0)})).filter((d)=>d.weight>0.001).sort((d,u)=>u.weight-d.weight),s=r.find((d)=>d.name===t),a=i||null,o=r.filter((d)=>d.name!==t&&d.name!==a),l=a?r.find((d)=>d.name===a):null,h=Boolean(s)&&Math.abs(s.weight-1)<=0.03&&!o.length&&(!a||Boolean(l)),c={action:t,screenshot:e,timeSeconds:n,active:r,mainWeight:s?.weight||0,companion:l?.name||null,companionWeight:l?.weight||0,isolatedPass:h};return qs.push(c),Kt("diagnostic",{phase:"sampleWeights",...c}),c}function Qf(t){let e=t.name.lastIndexOf(".");if(e<=0||!jt)return!1;let n=t.name.slice(0,e),i=jt.getObjectByName(n);return Boolean(i?.isBone)}function c_(t){return{sourceClipCount:t.length,clips:t.map((e)=>({name:e.name,durationSeconds:e.duration,trackCount:e.tracks.length,boneTrackCount:e.tracks.filter(Qf).length,hasPropTracks:e.tracks.some((n)=>/Prop_|Keyboard|Monitor|Coffee|Phone/.test(n.name)),loop:Boolean(Re.get(e.name)?.loop)})),sourceFrameRate:Ci}}function u_(){let t=el.filter((o)=>o>100),e=el.filter((o)=>o<=100),n=[...e].sort((o,l)=>o-l),i=[...el].sort((o,l)=>o-l),r=(o,l)=>o.length?o[Math.min(o.length-1,Math.floor(o.length*l))]:0,s=ts.length>1?ts.at(-1)-ts[0]:0,a=e.reduce((o,l)=>o+l,0);return{frames:jc,durationSeconds:s/1000,fps:a>0?e.length*1000/a:0,activeIntervalCount:e.length,warmupExcludedIntervalCount:t.length,warmupExcludedIntervalsMs:t.slice(0,12),frameTimeMs:{min:n[0]||0,median:r(n,0.5),p95:r(n,0.95),max:n.at(-1)||0},rawFrameTimeMs:{min:i[0]||0,median:r(i,0.5),p95:r(i,0.95),max:i.at(-1)||0}}}function d_(){let t=le?.getContext?.(),e=window.__roomMetrics||{},n=[...Re.values()].map((Z)=>({name:Z.name,durationSeconds:Z.duration,trackCount:Z.tracks.length,boneTrackCount:Z.tracks.filter(Qf).length,loop:Boolean(Re.get(Z.name)?.loop),actionCreated:Xt.has(Z.name)})),i=$f(Wf,Xf),r=ze.validation||{},s=Array.isArray(r.requiredClips)?r.requiredClips:[],a=new Set(Xt.keys()),o=s.filter((Z)=>!a.has(Z)),l=Number(ze.counts?.boneCount||0),h=Number(ze.counts?.morphTargetCount||0),c=Number(ze.counts?.materialCount||0),d=Number(ze.validation?.maxMaterials??ze.budgets?.maxMaterials),u=Number.isFinite(d)&&e.materialCount<=d,p=["coffee_once","phone_once"].filter((Z)=>a.has(Z)).map((Z)=>`${Z}_PropMotion`).filter((Z)=>a.has(Z)),g=["coffee_once","phone_once"].filter((Z)=>a.has(Z)&&!a.has(`${Z}_PropMotion`)),m=window.__runtimeContactMeasurement||Zf||{},f=m.source==="runtimeAnimationSample"&&m.pass===!0&&m.restoredToTyping===!0,v=new Map((ze.clips||[]).map((Z)=>[Z.name,Z])),y=v.get("coffee_once")?.contact||{},_=v.get("phone_once")?.contact||{},S=v.get("typing_loop")||{},R=S.contact||{},A=(Z)=>typeof Z==="number"&&Number.isFinite(Z),I=(Z)=>{let gt=Z?.toleranceMeters,pt=Z?.wristToSocketMinMeters,ct=Z?.wristToSocketMaxMeters,ot=Z?.grabSampleCount,bt=Z?.trajectoryMaxMeters;return A(gt)&&gt>0&&A(pt)&&pt>=0&&pt<=gt&&A(ct)&&ct>=0&&ct<=gt&&A(ot)&&ot>0&&A(bt)&&bt>0},V=I(y)&&I(_),U=S.keyboardContact,F=U?.maxFingerTipPlaneErrorMeters,k=U?.sampleCount,W=A(F)&&F<=0.025&&A(k)&&k>0,Y=Boolean(ze.validation?.contactContract)&&V&&W,H=window.__roomCameraContract||{},J=H.source==="manifest"&&Array.isArray(H.position)&&H.position.length===3&&Array.isArray(H.target)&&H.target.length===3&&Number.isFinite(Number(H.fov)),K=!Qt||qs.length>0&&qs.every((Z)=>Z.isolatedPass),et=u_(),nt=Qt?Number(i.changedPixelRatio||0)>0.00001&&Number(i.maxChannelDiff||0)>2:!0,dt={enabled:!Boolean(Qt),productionOnly:!0,distribution:tu,timerActive:ye!==null,supportsTimerCancellation:!0,manualResetCount:ar,pauseSuspends:!0,resumeRestores:!0,supportsDisposeCancellation:!0,disposeCancellationObserved:Ln?.teardownCancel?.passed===!0&&Ln?.teardownCancel?.callbackSuppressed===!0,probe:Ln,state:Ne?"disposed":ke?"paused":$e?"deferred_for_one_shot":ye!==null?"scheduled":"idle"},yt=dt.productionOnly&&dt.supportsTimerCancellation&&dt.supportsDisposeCancellation&&Ln?.passed===!0,tt={webgl:Boolean(t),skeleton:e.skeletonBoneCount>=l&&e.boneCount>=l,morphTargets:e.morphTargetCount>=h,materials:e.characterMaterialCount>=Math.min(c,20)&&u,routineScheduler:yt,triangles:e.triangleCount<=Number(r.maxTriangles||200000),requiredClips:o.length===0,propCompanionActions:g.length===0,runtimeContact:f,manifestContact:Y,cameraContract:J,isolatedCaptureActions:K,actionBindings:s.every((Z)=>a.has(Z)),pixelAnimation:nt,activeFrameTiming:Qt?.performance?et.activeIntervalCount>=5&&Number(et.frameTimeMs.p95||0)<=100:!0};return{status:Object.values(tt).every(Boolean)?"PASS":"FAIL",runtime:"WKWebView + vendored Three.js + GLTFLoader",assetURL:il,loadMilliseconds:performance.now()-e_,webgl:t?{renderer:t.getParameter(t.RENDERER),vendor:t.getParameter(t.VENDOR),version:t.getParameter(t.VERSION),shadingLanguageVersion:t.getParameter(t.SHADING_LANGUAGE_VERSION)}:null,counts:e,animation:{clips:n,activeAction:Ae,crossfadeSeconds:or,crossfadeSamples:Kc},camera:H,diagnosticActiveWeights:qs,activeFPS:Qt?.performance?et.fps:al,renderLoopFPS:al,frameTiming:et,pixelDiff:i,gates:tt,failedGates:Object.entries(tt).filter(([,Z])=>!Z).map(([Z])=>Z),missingClips:o,companionGates:p,companionMissing:g,runtimeContact:m,contact:{contractPass:V,source:m.source||null,runtime:m,typingKeyboardPass:W,contract:ze.validation?.contactContract||null,coffee:y,phone:_,typing:R,keyboardDistanceMeters:F,keyboardSampleCount:k,maxMaterials:d,runtimeMaterialCount:e.materialCount,materialCountBudgetPass:u},manifestExpected:ze.counts||{},routineScheduler:dt,requiredClips:s,textureLoader:window.__roomTextureLoader||null,diagnostics:Qt?{requestedActions:Qt.actions||[],screenshots:Qt.screenshots!==!1,performance:Boolean(Qt.performance),activeWeights:qs}:null}}function ol(){if(!Qt||Pn==="done")return;Pn="done";let t=d_();Kt("report",{report:t}),Kt("done",{report:t})}function tm(){if(Ne)return;if(jc===0)Kt("firstFrame",{width:le.domElement.width,height:le.domElement.height});let t=performance.now();if(zc)el.push(t-zc);if(zc=t,ts.push(t),jc+=1,ts.length>300)ts.shift();let e=Math.min(Jc.getDelta(),0.1);if(!ke){if(ue)ue.update(e);if(ii?.update(e,In),ri?.update(e,In,jt),le.render(Li,Rn),kc+=1,t-Gc>=1000)al=kc*1000/(t-Gc),kc=0,Gc=t,Kt("status",{message:`${Ae||"准备中"} · ${Math.round(al)} FPS`,action:Ae});if(nu(),Qt)y_(t)}setTimeout(tm,16.666666666666668)}function em(t,e=Ae){if(Nf)Nf.textContent=t;Kt("status",{message:t,action:e})}function ll(t){let e=String(t||"").trim();return{idle:"idle_seated_loop",typing:"typing_loop",coffee:"coffee_once",phone:"phone_once",stand:"stand_stretch_once",stretch:"stand_stretch_once",chin_rest:"chin_rest_loop",closeup:"chin_rest_loop",listen:"listen_music_loop",drowsy:"drowsy_nod_loop",pet:"pet_happy_once",write:"write_note_once"}[e]||e}function Ni(t,e={}){let n=ll(t),i=Xt.get(n);if(!i)return js(`动作「${n}」不在当前 GLB 中`),!1;let r=rl;if(r===i&&i.isRunning()){if(e.manual)zf();return!0}if($e&&$e!==i)$e.stop(),$e=null;if(hr(),i.reset(),Re.get(n)?.loop)i.setLoop(zr,1/0).clampWhenFinished=!1;else i.setLoop(Zn,1).clampWhenFinished=!0,$e=i;if(i.setEffectiveWeight(1).play(),r&&r!==i)r.crossFadeTo(i,or,!1),is=performance.now();if(rl=i,Ae=n,Re.get(n)?.loop)sl=n;if(em(e.manual?`正在${Re.get(n)?.label||n}`:Re.get(n)?.label||n,n),e.manual)Kt("action",{name:n,manual:!0});let s={coffee_once:"coffee_once_PropMotion",phone_once:"phone_once_PropMotion",write_note_once:"write_note_once_PropMotion"}[n];if(s&&Xt.has(s))Pi("Prop_Coffee"),Pi("Prop_Phone"),Pi("Prop_Pen"),lr=Xt.get(s),lr.reset().setLoop(Zn,1).setEffectiveWeight(1).play();if(e.manual)zf();return!0}function p_(t){if(t!==$e)return;$e=null,hr();let e=Xt.has(sl)?sl:"typing_loop";if(Ni(e,{manual:!1}),Zs)Zs=!1;Ii()}function qc(t,e){let n=t.getObjectByName(e);if(!n)return;qf.set(e,{position:n.position.clone(),quaternion:n.quaternion.clone(),scale:n.scale.clone()})}function Pi(t){let e=jt?.getObjectByName(t),n=qf.get(t);if(!e||!n)return;e.position.copy(n.position),e.quaternion.copy(n.quaternion),e.scale.copy(n.scale),e.updateMatrixWorld(!0)}function hr(){lr?.stop?.(),lr=null,Pi("Prop_Coffee"),Pi("Prop_Phone"),Pi("Prop_Pen")}function Ui(t){return Boolean(t)&&Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z)}function nm(t,e=null){if(!ue||!jt)return{pass:!1,reason:"missing_runtime_state"};let n=Xt.get(t);if(!n)return{pass:!1,reason:`missing_action:${t}`};if(e&&!Xt.has(e))return{pass:!1,reason:`missing_action:${e}`};ue.stopAllAction(),Xt.forEach((r)=>{r.stop(),r.reset(),r.enabled=!1,r.setEffectiveWeight(0)}),hr(),n.enabled=!0,n.setLoop(Zn,1),n.clampWhenFinished=!0,n.setEffectiveWeight(1).play();let i=null;if(e)i=Xt.get(e),i.enabled=!0,i.setLoop(Zn,1),i.clampWhenFinished=!0,i.setEffectiveWeight(1).play();return{pass:!0,action:n,companion:i}}function Hf(){let t=Xt.get("typing_loop");if(!t||!ue||!jt)return!1;return ue.stopAllAction(),Xt.forEach((e)=>{e.stop(),e.reset(),e.enabled=!1,e.setEffectiveWeight(0)}),hr(),t.enabled=!0,t.setLoop(zr,1/0),t.clampWhenFinished=!1,t.setEffectiveWeight(1).play(),t.time=0,ue.update(0),jt.updateMatrixWorld(!0),rl=t,Ae="typing_loop",sl="typing_loop",$e=null,is=0,!0}function Gf(t,e){let n=(ze.clips||[]).find((S)=>S.name===t),i=n?.contact?.holdFrameWindow,r=Array.isArray(i)&&i.length===2?Number(i[0]):e.startFrame,s=Array.isArray(i)&&i.length===2?Number(i[1]):e.endFrame,a=n?.contact?.handLocalGripPoint,o=Array.isArray(a)&&a.length===3?new T(Number(a[0]),Number(a[1]),Number(a[2])):null,l={action:t,companion:e.companion,hand:e.hand,prop:e.prop,startFrame:r,endFrame:s,fps:Ci,toleranceMeters:Qc,source:"runtimeAnimationSample",sampleCount:0,maxWorldDistanceMeters:null,minWorldDistanceMeters:null,pass:!1};if(!jt||!ue)return{...l,reason:"missing_runtime_state"};let h=jt.getObjectByName(e.hand),c=jt.getObjectByName(e.prop);if(!h||!c)return{...l,reason:`missing_node:${!h?e.hand:e.prop}`};let d=nm(t,e.companion);if(!d.pass)return{...l,reason:d.reason};let u=0,p=1/0,g=[],m=new T,f=new T,v=Number(Re.get(t)?.duration);if(!Number.isFinite(v)||v<=0)return{...l,reason:`invalid_duration:${t}`};for(let S=r;S<=s;S+=1){let R=S/Ci;if(!Number.isFinite(R)||R<0||R>v+1/Ci)return{...l,reason:`invalid_time:${S}`};if(d.action.time=Math.min(R,v),d.companion)d.companion.time=Math.min(R,v);if(ue.update(0),jt.updateMatrixWorld(!0),o)m.copy(o).applyMatrix4(h.matrixWorld);else h.getWorldPosition(m);if(c.getWorldPosition(f),!Ui(m)||!Ui(f))return{...l,reason:`non_finite_position:${S}`};let A=m.distanceTo(f);if(!Number.isFinite(A))return{...l,reason:`non_finite_distance:${S}`};u=Math.max(u,A),p=Math.min(p,A),g.push({frame:S,timeSeconds:R,worldDistanceMeters:A})}let y=[...Xt.entries()].filter(([,S])=>S.getEffectiveWeight()>0.001).map(([S])=>S).sort(),_=y.length===1+(d.companion?1:0)&&y.includes(t)&&(!d.companion||y.includes(e.companion));return{...l,sampleCount:g.length,maxWorldDistanceMeters:u,minWorldDistanceMeters:p,isolatedActions:y,isolatedPass:_,samples:g,pass:_&&g.length===s-r+1&&u<=Qc}}function f_(t){if(!t)return{pass:!1,reason:"missing_node:Keyboard"};let e=[];if(t.traverse((l)=>{if(l.isMesh&&l.geometry)e.push(l)}),t.isMesh&&t.geometry&&!e.includes(t))e.push(t);if(e.length===0)return{pass:!1,reason:"missing_mesh:Keyboard"};t.updateMatrixWorld(!0);let n=t.getWorldPosition(new T),r=t.getWorldQuaternion(new xe).clone().invert(),s=new T(1/0,1/0,1/0),a=new T(-1/0,-1/0,-1/0),o=new T;for(let l of e){let h=l.geometry;if(!h.boundingBox)h.computeBoundingBox();let c=h.boundingBox;if(!c||!Ui(c.min)||!Ui(c.max))return{pass:!1,reason:`invalid_geometry_bbox:${l.name||"Keyboard"}`};for(let d of[c.min.x,c.max.x])for(let u of[c.min.y,c.max.y])for(let p of[c.min.z,c.max.z]){if(o.set(d,u,p).applyMatrix4(l.matrixWorld).sub(n).applyQuaternion(r),!Ui(o))return{pass:!1,reason:"non_finite_keyboard_bbox"};s.min(o),a.max(o)}}if(![s.x,s.y,s.z,a.x,a.y,a.z].every(Number.isFinite)||a.x<s.x||a.y<s.y||a.z<s.z)return{pass:!1,reason:"invalid_keyboard_basis"};return{pass:!0,origin:n,inverseRotation:r,min:s,max:a,footprint:{minX:s.x-Ys,maxX:a.x+Ys,minY:s.y-Ys,maxY:a.y+Ys},topZ:a.z,meshNames:e.map((l)=>l.name||"Keyboard"),basis:"Keyboard world rotation only; child mesh geometry bbox"}}function m_(t){if(t?.parent?.isBone){let i=new T,r=new T;t.parent.getWorldPosition(i),t.getWorldPosition(r);let s=r.clone().add(r.clone().sub(i).multiplyScalar(0.78));return Ui(s)?s:null}let e=t?.position?.length?.();if(!Number.isFinite(e)||e<=0)return null;let n=new T(0,e,0).applyMatrix4(t.matrixWorld);return Ui(n)?n:null}function g_(){let t={action:"typing_loop",source:"runtimeAnimationSample",fps:Ci,tipMethod:"local +Y × distal bone local offset length",distalBones:Xc.flatMap((f)=>Wc.map((v)=>`J_Bip_${f}_${v}3`)),footprintPaddingMeters:Ys,topToleranceMeters:Bf,sampleCount:0,frameStart:0,frameEnd:null,pass:!1};if(!jt||!ue)return{...t,reason:"missing_runtime_state"};let e=Xt.get("typing_loop"),n=jt.getObjectByName("Keyboard");if(!e)return{...t,reason:"missing_action:typing_loop"};if(!n)return{...t,reason:"missing_node:Keyboard"};let i=f_(n);if(!i.pass)return{...t,reason:i.reason};let r={};for(let f of Xc){r[f]={};for(let v of Wc){let y=`J_Bip_${f}_${v}3`,_=jt.getObjectByName(y);if(!_?.isBone)return{...t,reason:`missing_node:${y}`};let S=_.position.length();if(!Number.isFinite(S)||S<0.005||S>0.05)return{...t,reason:`invalid_bone_length:${y}`};r[f][v]=_}}let s=Number(Re.get("typing_loop")?.duration);if(!Number.isFinite(s)||s<=0)return{...t,reason:"invalid_duration:typing_loop"};let a=Math.round(s*Ci),o=nm("typing_loop");if(!o.pass)return{...t,reason:o.reason};let l=new T,h=0,c=0,d=0,u=[],p=[];for(let f=0;f<=a;f+=1){let v=f/Ci;if(!Number.isFinite(v)||v<0||v>s+1/Ci)return{...t,reason:`invalid_time:${f}`,frameEnd:a};e.time=Math.min(v,s),ue.update(0),jt.updateMatrixWorld(!0);let y={frame:f,timeSeconds:v,hands:{}},_=!0;for(let S of Xc){let R=null;for(let I of Wc){let V=r[S][I],U=m_(V);if(!U)return{...t,reason:`non_finite_tip:${f}`,frameEnd:a};l.copy(U);let F=l.clone().sub(i.origin).applyQuaternion(i.inverseRotation);if(!Ui(F))return{...t,reason:`non_finite_keyboard_tip:${f}`,frameEnd:a};let k=Math.abs(F.z-i.topZ),W=Math.max(i.footprint.minX-F.x,F.x-i.footprint.maxX,i.footprint.minY-F.y,F.y-i.footprint.maxY,0),Y={finger:I,tipKeyboardBasis:F.toArray(),topDistanceMeters:k,footprintOverflowMeters:W,withinFootprint:W<=0,withinTopTolerance:k<=Bf},H=Y.withinFootprint&&Y.withinTopTolerance,J=R?.withinFootprint&&R?.withinTopTolerance;if(!R||H&&!J||!J&&k<R.topDistanceMeters)R=Y}let A=Boolean(R?.withinFootprint&&R?.withinTopTolerance);_=_&&A,h=Math.max(h,R?.topDistanceMeters||0),c=Math.max(c,R?.footprintOverflowMeters||0),y.hands[S]={...R,pass:A}}if(_)d+=1;else u.push(f);p.push(y)}let g=[...Xt.entries()].filter(([,f])=>f.getEffectiveWeight()>0.001).map(([f])=>f).sort(),m=g.length===1&&g[0]==="typing_loop";return{...t,frameEnd:a,sampleCount:p.length,validFrameCount:d,failedFrames:u,maxFingerTipTopDistanceMeters:h,maxFootprintOverflowMeters:c,isolatedActions:g,isolatedPass:m,keyboardBasis:{min:i.min.toArray(),max:i.max.toArray(),topZ:i.topZ,footprint:i.footprint,meshNames:i.meshNames,basis:i.basis},samples:p,pass:m&&p.length===a+1&&d===p.length}}function __(){let t={source:"runtimeAnimationSample",pass:!1,restoredToTyping:!1,toleranceMeters:Qc,coffee:null,phone:null,typing:null};try{t.coffee=Gf("coffee_once",Of.coffee_once),t.phone=Gf("phone_once",Of.phone_once),t.typing=g_(),t.restoredToTyping=Hf(),t.pass=Boolean(t.coffee?.pass&&t.phone?.pass&&t.typing?.pass&&t.restoredToTyping)}catch(e){t.error=String(e?.message||e),t.pass=!1,t.restoredToTyping=Hf()}return Zf=t,window.__runtimeContactMeasurement=t,Kt("runtimeContact",{measurement:t}),t}function v_(t){ue=new Zo(jt),Re.clear(),Xt.clear();let e=Array.isArray(ze.clips)?ze.clips:[];t.animations.forEach((s)=>{let a=e.find((l)=>l.name===s.name)||{name:s.name,loop:/loop/i.test(s.name),label:s.name};Re.set(s.name,{...a,duration:s.duration,tracks:s.tracks});let o=ue.clipAction(s);o.setLoop(a.loop?zr:Zn,a.loop?1/0:1),o.clampWhenFinished=!a.loop,o.enabled=!0,o.setEffectiveWeight(0),Xt.set(s.name,o)}),ue.addEventListener("finished",(s)=>p_(s.action));let n=c_(t.animations);window.__roomAnimation=n,Kt("setup",{animation:n,counts:window.__roomMetrics});let r=(Qt&&Xt.has("idle_seated_loop")?"idle_seated_loop":null)||(Xt.has("typing_loop")?"typing_loop":t.animations[0]?.name||"");if(!r||!Ni(r))throw Error("GLB 没有可播放动作");if(__(),window.__roomStartedAt=performance.now(),Qt)M_();else setTimeout(()=>{if(ue)ue.setTime(0);jt.updateMatrixWorld(!0),le.render(Li,Rn)},16),Ii();window.__roomReady=!0,Yc?.classList.add("hidden"),Kt("ready",{counts:window.__roomMetrics,animation:n}),em("已就绪 · 正在打字",Ae)}function y_(t){if(!Qt||Pn==="done")return;let e=t-(is||t);if(Pn==="idle")return;if(Pn==="typing"&&e>850)if(ru("typing"),(Array.isArray(Qt.actions)?Qt.actions:[]).length>0)im(0);else ol()}function tl(t,e,n=t){if(!Xt.has(t))return!1;ue.stopAllAction(),Xt.forEach((s)=>{s.stop(),s.reset(),s.enabled=!1,s.setEffectiveWeight(0)}),hr();let i=Xt.get(t);i.enabled=!0,i.setLoop(Re.get(t)?.loop?zr:Zn,Re.get(t)?.loop?1/0:1),i.clampWhenFinished=!Re.get(t)?.loop,i.setEffectiveWeight(1).play(),rl=i,Ae=t;let r={coffee_once:"coffee_once_PropMotion",phone_once:"phone_once_PropMotion",write_note_once:"write_note_once_PropMotion"}[t];if(r&&Xt.has(r)){let s=Xt.get(r);s.enabled=!0,s.setLoop(Zn,1).clampWhenFinished=!0,s.setEffectiveWeight(1).play(),lr=s}if(i.time=Math.max(0,Math.min(e,Number(Re.get(t)?.duration||1))),lr)lr.time=i.time;return ue.update(0),jt.updateMatrixWorld(!0),ii?.update(0.1,In,!0),ri?.update(0.016,In,jt),le.render(Li,Rn),h_(t,n,i.time,r),ru(n),!0}function M_(){Pn="deterministic";let t=Xt.has("idle_seated_loop")?"idle_seated_loop":Ae,e=Xt.has("typing_loop")?"typing_loop":Ae;if(!t||!e){js("诊断缺少 idle/typing 动作");return}tl(t,0.22,"idle"),Ni(e,{manual:!0}),is=performance.now(),ue.update(or*0.5),nu(or*0.5),ue.update(or*0.5),nu(or),tl(e,1.85,"typing"),(Array.isArray(Qt?.actions)?Qt.actions:[]).forEach((r)=>{let s=ll(r),a=Number(Re.get(s)?.duration||1),o=s==="coffee_once"?Math.min(a*0.55,a-0.05):s==="phone_once"?Math.min(a*0.5,a-0.05):s==="stand_stretch_once"?Math.min(a*0.53,a-0.05):Math.min(a*0.45,a-0.05);tl(s,o,s),hr(),Pi("Prop_Coffee"),Pi("Prop_Phone")}),tl(e,0.15,"typing_return"),hr();let i=()=>{if(Ne)return;if(Pn="routineProbe",jf(40,!0,()=>{if(!Ne)ol()}))return;Ln={requestedDelayMs:40,schedule:{scheduled:!1,timerFired:!1,passed:!1},pauseResume:{pauseSuspends:!1,resumeRestores:!1,passed:!1},manualReorder:{started:!1,timerScheduled:!1,passed:!1},teardownCancel:{scheduled:!1,timerCanceled:!1,callbackSuppressed:!1,passed:!1},callbackSuppressed:!1,scheduled:!1,accelerated:!1,pauseSuspends:!1,resumeRestores:!1,manualReset:!1,timerFired:!1,passed:!1},Kt("routineProbe",{result:Ln}),ol()};if(Qt?.performance)Pn="performance",setTimeout(()=>{i()},2200);else i()}function S_(t){switch(ll(t)){case"coffee_once":return 2900;case"phone_once":return 2400;case"stand_stretch_once":return 4200;default:return 1100}}function im(t){let e=Array.isArray(Qt?.actions)?Qt.actions:[];if(t>=e.length){Kt("diagnostic",{phase:"done"}),ol();return}let n=ll(e[t]);Kt("diagnostic",{phase:"start",index:t,name:n}),Pn=`action:${t}:playing`,Ni(n,{manual:!0});let i=S_(n),r=Number(Re.get(n)?.duration||1)*1000;setTimeout(()=>{if(Ne)return;Kt("diagnostic",{phase:"capture",index:t,name:n}),ru(n),Kt("diagnostic",{phase:"afterCapture",index:t,name:n}),Pn=`action:${t}:captured`},i),setTimeout(()=>{if(Ne)return;Kt("diagnostic",{phase:"next",index:t,name:n}),im(t+1)},Math.max(i,r)+450)}function x_(){let t=Qr?1:Math.min(window.devicePixelRatio||1,2);le?.setPixelRatio(t)}function iu(t){let e=Boolean(t);if(e===ke)return;if(e)s_(),ke=!0,Jc.stop();else ke=!1,Jc.start(),a_();t_?.classList.toggle("paused",ke),Kt("status",{paused:ke,lowPower:Qr,message:ke?"已暂停":Ae})}function T_(){let t=ze.camera||ze.room?.camera||null;if(t?.position&&t?.target){let e=(n)=>[Number(n[0]),Number(n[2]),-Number(n[1])];return{position:e(t.position),target:e(t.target),fov:Number(t.fovDegrees||t.fov||32),source:"manifest"}}return{position:[2.88,2.35,4.05],target:[0,1.02,0.18],fov:31,source:"Blender authored fallback"}}function E_(){let t=T_();return Rn=new ge(t.fov,window.innerWidth/window.innerHeight,0.01,100),Rn.position.fromArray(t.position),Rn.lookAt(new T().fromArray(t.target)),Rn.updateProjectionMatrix(),window.__roomCameraContract=t,t}function w_(t){Qr=Boolean(t),x_(),ri?.setLowPower(Qr),Kt("status",{paused:ke,lowPower:Qr,message:Qr?"省电模式":Ae})}function js(t){let e=String(t||"3D 房间加载失败");if(Yc)Yc.classList.add("hidden");if(Zc)Zc.classList.remove("hidden");if(Uf)Uf.textContent=e;Kt("error",{message:e})}function b_(){if(Ne)return;Ne=!0,Jf(),eu(),Ke=!1,ue?.stopAllAction(),jt?.traverse((t)=>{if(t.geometry?.dispose)t.geometry.dispose();(Array.isArray(t.material)?t.material:[t.material]).forEach((n)=>n?.dispose?.())}),$c?.dispose?.(),ii?.dispose?.(),ri?.dispose?.(),le?.dispose(),le?.forceContextLoss?.(),Kt("disposed")}window.__withSnozzy3DCommand=(t)=>{if(typeof t==="string")return Ni(t,{manual:!0});if(!t||typeof t!=="object")return!1;if(t.type==="action")return Ni(t.name,{manual:!0});if(t.type==="state"&&t.state&&typeof t.state==="object")return Object.assign(In,t.state),ii?.update(0.1,In,!0),ri?.update(0.016,In,jt),!0;if(t.type==="toggleLamp")return ri?ri.toggleLamp():!1;if(t.type==="cycleMonitor")return ii?Boolean(ii.cycleMainMode(In)):!1;if(t.type==="pause")return iu(t.value);if(t.type==="lowPower")return w_(t.value);if(t.type==="routineProbe"){let e=t.allowDiagnostic===!0||t.diagnostic===!0;return jf(t.delayMs,e)}if(t.type==="dispose")return b_();return!1};function A_(t,e){window.__roomMetrics=e,v_(t),setTimeout(tm,16)}function kf(t){Kf(),Kt("stage",{name:"setup_enter"}),jt=t.scene,qc(jt,"Prop_Coffee"),qc(jt,"Prop_Phone"),qc(jt,"Prop_Pen"),Li=new co,Li.background=new mt(1447728),le=new wc({canvas:Bc,antialias:!0,alpha:!1,preserveDrawingBuffer:Boolean(Qt)}),le.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),le.setSize(window.innerWidth,window.innerHeight,!1),le.outputColorSpace=me,le.toneMapping=Ya,le.toneMappingExposure=1.12,Kt("stage",{name:"renderer_ready"}),$c=Cf(),ii=Lf();let e=If(jt,$c.textures,ii.textures),{materials:n}=e;Df=e.sharedUniforms,Ff=e.emissiveRegistry,ri=Pf(Li,le,Df,Ff),Kt("stage",{name:"materials_ready",count:n.length}),jt.rotation.x=-Math.PI/2,Li.add(jt),jt.updateMatrixWorld(!0),ii.update(0.1,In,!0),ri.update(0.016,In,jt);let i=E_(),r=o_(jt,n);Kt("stage",{name:"metrics_ready"}),r.materialCount=n.length,window.addEventListener("resize",()=>{le.setSize(window.innerWidth,window.innerHeight,!1),Rn.aspect=window.innerWidth/window.innerHeight,Rn.updateProjectionMatrix()}),Bc.addEventListener("webglcontextlost",(s)=>{s.preventDefault(),js("图形上下文丢失，请切回 2.5D 后重试。")},!1),Bc.addEventListener("webglcontextrestored",()=>{Zc?.classList.add("hidden"),Kt("status",{message:"图形上下文已恢复"})},!1),r.cameraContract=i,A_(t,r),Kt("stage",{name:"animation_started"})}Kt("boot",{assetURL:il});if(!il&&!Qo)js("没有找到 SnozzyRoom3D.glb");else{nl=globalThis.createImageBitmap;try{globalThis.createImageBitmap=void 0}catch(n){}let t=new Pc;window.__roomTextureLoader="TextureLoader (createImageBitmap disabled until parse complete)";let e=(n)=>{Kf(),js(`GLB 加载失败：${n?.message||String(n)}`)};if(Qo){let n=Qo.indexOf(",");try{let i=Uint8Array.from(atob(Qo.slice(n+1)),(r)=>r.charCodeAt(0));t.parse(i.buffer,"",kf,e)}catch(i){e(i)}}else t.load(il,kf,void 0,e)}})();
