(()=>{var xd="179";var Td=0,ch=1,Ed=2;var uh=1,qa=2,bn=3,An=0,$e=1,be=2,Mi=0,Cs=1,dh=2,ph=3,fh=4,wd=5,zr=100,bd=101,Ad=102,Rd=103,Cd=104,Ld=200,Id=201,Pd=202,Ud=203,Nd=204,Fd=205,Dd=206,Od=207,Bd=208,zd=209,Vd=210,Hd=211,Gd=212,Wd=213,kd=214,Ya=0,Za=1,Ja=2,Ls=3,ja=4,Ka=5,$a=6,Qa=7,Xd=0,qd=1,Yd=2,jn=0,Zd=1,Jd=2,jd=3,to=4,Kd=5,$d=6,Qd=7;var Vr=301,Ki=302,eo=303,no=304,Is=306,yn=1000,$i=1001,io=1002,Kn=1003,ro=1004;var Qi=1005;var We=1006,Hr=1007;var $n=1008;var Si=1009,tp=1010,ep=1011,Ps=1012,mh=1013,Gr=1014,xi=1015,Us=1016,gh=1017,_h=1018,Wr=1020,np=35902,ip=1021,rp=1022,Rn=1023,so=1026,Ns=1027,sp=1028,vh=1029,ap=1030,yh=1031;var Mh=1033,ao=33776,oo=33777,lo=33778,ho=33779,Sh=35840,xh=35841,Th=35842,Eh=35843,wh=36196,bh=37492,Ah=37496,Rh=37808,Ch=37809,Lh=37810,Ih=37811,Ph=37812,Uh=37813,Nh=37814,Fh=37815,Dh=37816,Oh=37817,Bh=37818,zh=37819,Vh=37820,Hh=37821,co=36492,Gh=36494,Wh=36495,op=36283,kh=36284,Xh=36285,qh=36286,Qn=2200,kr=2201;var Yh=2300,uo=2301;var Zh=0,Fs=1,Xr=2;var lp=3201;var hp=0,cp=1,ti="",ge="srgb",ze="srgb-linear",Jh="linear",ee="srgb";var up=512,dp=513,pp=514,jh=515,fp=516,mp=517,gp=518,_p=519;var Kh="300 es",$h=2000;class ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n!==void 0&&(n[t]!==void 0&&n[t].indexOf(e)!==-1)}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}var Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=1234567,Nr=Math.PI/180,Yi=180/Math.PI;function ln(){let t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ie[255&t]+Ie[t>>8&255]+Ie[t>>16&255]+Ie[t>>24&255]+"-"+Ie[255&e]+Ie[e>>8&255]+"-"+Ie[e>>16&15|64]+Ie[e>>24&255]+"-"+Ie[63&n|128]+Ie[n>>8&255]+"-"+Ie[n>>16&255]+Ie[n>>24&255]+Ie[255&i]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Ut(t,e,n){return Math.max(e,Math.min(n,t))}function sh(t,e){return(t%e+e)%e}function Ts(t,e,n){return(1-n)*t+n*e}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(4294967295*t);case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int32Array:return Math.round(2147483647*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw Error("Invalid component type.")}}var tr={DEG2RAD:Nr,RAD2DEG:Yi,generateUUID:ln,clamp:Ut,euclideanModulo:sh,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:Ts,damp:function(t,e,n,i){return Ts(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(sh(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(0.5-Math.random())},seededRandom:function(t){t!==void 0&&(Lu=t);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*Nr},radToDeg:function(t){return t*Yi},isPowerOfTwo:function(t){return!(t&t-1)&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let{cos:s,sin:a}=Math,o=s(n/2),l=a(n/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*d,l*u,o*c);break;case"YZY":t.set(l*u,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*u,o*h,o*c);break;case"XZX":t.set(o*h,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Qt,denormalize:vn};class it{constructor(t=0,e=0){it.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],d=r[s+0],u=r[s+1],p=r[s+2],_=r[s+3];if(a===0)return t[e+0]=o,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(a===1)return t[e+0]=d,t[e+1]=u,t[e+2]=p,void(t[e+3]=_);if(h!==_||o!==d||l!==u||c!==p){let m=1-a,f=o*d+l*u+c*p+h*_,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let S=Math.sqrt(y),R=Math.atan2(S,f*v);m=Math.sin(m*R)/S,a=Math.sin(a*R)/S}let g=a*v;if(o=o*m+d*g,l=l*m+u*g,c=c*m+p*g,h=h*m+_*g,m===1-a){let S=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=S,l*=S,c*=S,h*=S}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,s){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=r[s],d=r[s+1],u=r[s+2],p=r[s+3];return t[e]=a*p+c*h+o*u-l*d,t[e+1]=o*p+c*d+l*h-a*u,t[e+2]=l*p+c*u+a*d-o*h,t[e+3]=c*p-a*h-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:r,_order:s}=t,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),h=a(r/2),d=o(n/2),u=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=n+a+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-o)*u,this._y=(r-l)*u,this._z=(s-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(c-o)/u,this._x=0.25*u,this._y=(i+s)/u,this._z=(r+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(r-l)/u,this._x=(i+s)/u,this._y=0.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(s-i)/u,this._x=(r+l)/u,this._y=(o+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<0.00000001?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:r,_w:s}=t,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,s=this._w,a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;let o=1-a*a;if(o<=Number.EPSILON){let u=1-e;return this._w=u*s+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Iu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=2*(s*i-a*n),c=2*(a*e-r*i),h=2*(r*n-s*e);return this.x=e+o*l+s*h-a*c,this.y=n+o*c+a*l-r*h,this.z=i+o*h+r*c-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:r}=t,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bl.copy(this).projectOnVector(t),this.sub(bl)}reflect(t){return this.sub(bl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=2*Math.random()-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var bl=new T,Iu=new me;class Nt{constructor(t,e,n,i,r,s,a,o,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,o,l)}set(t,e,n,i,r,s,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=n,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],d=n[2],u=n[5],p=n[8],_=i[0],m=i[3],f=i[6],v=i[1],y=i[4],g=i[7],S=i[2],R=i[5],w=i[8];return r[0]=s*_+a*v+o*S,r[3]=s*m+a*y+o*R,r[6]=s*f+a*g+o*w,r[1]=l*_+c*v+h*S,r[4]=l*m+c*y+h*R,r[7]=l*f+c*g+h*w,r[2]=d*_+u*v+p*S,r[5]=d*m+u*y+p*R,r[8]=d*f+u*g+p*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*s*c-e*a*l-n*r*c+n*a*o+i*r*l-i*s*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*s-a*l,d=a*o-c*r,u=l*r-s*o,p=e*h+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=h*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*s)*_,t[3]=d*_,t[4]=(c*e-i*o)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*o-l*e)*_,t[8]=(s*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){let o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Al.makeScale(t,e)),this}rotate(t){return this.premultiply(Al.makeRotation(-t)),this}translate(t,e){return this.premultiply(Al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Al=new Nt;function Qh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vp(){let t=Dr("canvas");return t.style.display="block",t}var Pu={};function Zi(t){t in Pu||(Pu[t]=!0,console.warn(t))}function yp(t,e,n){return new Promise(function(i,r){setTimeout(function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}},n)})}var Uu=new Nt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Nu=new Nt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Lm(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a?(this.spaces[s].transfer==="srgb"&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Fr(r.r),r.g=Fr(r.g),r.b=Fr(r.b)),r):r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?"linear":this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Uu,fromXYZ:Nu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Wt=Lm();function qn(t){return t<0.04045?0.0773993808*t:Math.pow(0.9478672986*t+0.0521327014,2.4)}function Fr(t){return t<0.0031308?12.92*t:1.055*Math.pow(t,0.41666)-0.055}var _r;class tc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_r===void 0&&(_r=Dr("canvas")),_r.width=t.width,_r.height=t.height;let i=_r.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=_r}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Dr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=255*qn(r[s]/255);return n.putImageData(i,0,0),e}if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(255*qn(e[n]/255)):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Im=0;class Ds{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Rl(i[s].image)):r.push(Rl(i[s]))}else r=Rl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tc.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pm=0,Cl=new T;class he extends ei{constructor(t=he.DEFAULT_IMAGE,e=he.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=he.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ln(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n:console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`)}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}he.DEFAULT_IMAGE=null,he.DEFAULT_MAPPING=300,he.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,i=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<0.0001?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,s=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],h=o[8],d=o[1],u=o[5],p=o[9],_=o[2],m=o[6],f=o[10];if(Math.abs(c-d)<0.01&&Math.abs(h-_)<0.01&&Math.abs(p-m)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+_)<0.1&&Math.abs(p+m)<0.1&&Math.abs(l+u+f-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,g=(u+1)/2,S=(f+1)/2,R=(c+d)/4,w=(h+_)/4,I=(p+m)/4;return y>g&&y>S?y<0.01?(n=0,i=0.707106781,r=0.707106781):(n=Math.sqrt(y),i=R/n,r=w/n):g>S?g<0.01?(n=0.707106781,i=0,r=0.707106781):(i=Math.sqrt(g),n=R/i,r=I/i):S<0.01?(n=0.707106781,i=0.707106781,r=0):(r=Math.sqrt(S),n=w/r,i=I/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(v)<0.001&&(v=1),this.x=(m-p)/v,this.y=(h-_)/v,this.z=(d-c)/v,this.w=Math.acos((l+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ec extends ei{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new he(i);this.textures=[];let s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends ec{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class po extends he{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nc extends he{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ue{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,mn):mn.fromBufferAttribute(r,s),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ha.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(t.matrixWorld),this.union(ha)}let i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),ca.subVectors(this.max,us),vr.subVectors(t.a,us),yr.subVectors(t.b,us),Mr.subVectors(t.c,us),ui.subVectors(yr,vr),di.subVectors(Mr,yr),Wi.subVectors(vr,Mr);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Wi.z,Wi.y,ui.z,0,-ui.x,di.z,0,-di.x,Wi.z,0,-Wi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Wi.y,Wi.x,0];return!!Ll(e,vr,yr,Mr,ca)&&(e=[1,0,0,0,1,0,0,0,1],!!Ll(e,vr,yr,Mr,ca)&&(ua.crossVectors(ui,di),e=[ua.x,ua.y,ua.z],Ll(e,vr,yr,Mr,ca)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=0.5*this.getSize(mn).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var zn=[new T,new T,new T,new T,new T,new T,new T,new T],mn=new T,ha=new Ue,vr=new T,yr=new T,Mr=new T,ui=new T,di=new T,Wi=new T,us=new T,ca=new T,ua=new T,ki=new T;function Ll(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ki.fromArray(t,s);let o=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),l=e.dot(ki),c=n.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Um=new Ue,ds=new T,Il=new T;class ke{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Um.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=0.5*(n-this.radius);this.center.addScaledVector(ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Il)),this.expandByPoint(ds.copy(t.center).sub(Il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Vn=new T,Pl=new T,da=new T,pi=new T,Ul=new T,pa=new T,Nl=new T;class er{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pl.copy(t).add(e).multiplyScalar(0.5),da.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Pl);let r=0.5*t.distanceTo(e),s=-this.direction.dot(da),a=pi.dot(this.direction),o=-pi.dot(da),l=pi.lengthSq(),c=Math.abs(1-s*s),h,d,u,p;if(c>0)if(h=s*o-a,d=s*a-o,p=r*c,h>=0)if(d>=-p)if(d<=p){let _=1/c;h*=_,d*=_,u=h*(h+s*d+2*a)+d*(s*h+d+2*o)+l}else d=r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d=-r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;else d<=-p?(h=Math.max(0,-(-s*r+a)),d=h>0?-r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(h=Math.max(0,-(s*r+a)),d=h>0?r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l);else d=s>0?-r:r,h=Math.max(0,-(s*d+a)),u=-h*h+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Pl).addScaledVector(da,d),u}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,r=t.radius*t.radius;if(i>r)return null;let s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return!(t.radius<0)&&this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),h>=0?(a=(t.min.z-d.z)*h,o=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,o=(t.min.z-d.z)*h),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,r){Ul.subVectors(e,t),pa.subVectors(n,t),Nl.crossVectors(Ul,pa);let s,a=this.direction.dot(Nl);if(a>0){if(i)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}pi.subVectors(this.origin,t);let o=s*this.direction.dot(pa.crossVectors(pi,pa));if(o<0)return null;let l=s*this.direction.dot(Ul.cross(pi));if(l<0)return null;if(o+l>a)return null;let c=-s*pi.dot(Nl);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(t,e,n,i,r,s,a,o,l,c,h,d,u,p,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,o,l,c,h,d,u,p,_,m)}set(t,e,n,i,r,s,a,o,l,c,h,d,u,p,_,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=s,f[9]=a,f[13]=o,f[2]=l,f[6]=c,f[10]=h,f[14]=d,f[3]=u,f[7]=p,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Sr.setFromMatrixColumn(t,0).length(),r=1/Sr.setFromMatrixColumn(t,1).length(),s=1/Sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=s*c,u=s*h,p=a*c,_=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=u+p*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=p+u*l,e[10]=s*o}else if(t.order==="YXZ"){let d=o*c,u=o*h,p=l*c,_=l*h;e[0]=d+_*a,e[4]=p*a-u,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-a,e[2]=u*a-p,e[6]=_+d*a,e[10]=s*o}else if(t.order==="ZXY"){let d=o*c,u=o*h,p=l*c,_=l*h;e[0]=d-_*a,e[4]=-s*h,e[8]=p+u*a,e[1]=u+p*a,e[5]=s*c,e[9]=_-d*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(t.order==="ZYX"){let d=s*c,u=s*h,p=a*c,_=a*h;e[0]=o*c,e[4]=p*l-u,e[8]=d*l+_,e[1]=o*h,e[5]=_*l+d,e[9]=u*l-p,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(t.order==="YZX"){let d=s*o,u=s*l,p=a*o,_=a*l;e[0]=o*c,e[4]=_-d*h,e[8]=p*h+u,e[1]=h,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=u*h+p,e[10]=d-_*h}else if(t.order==="XZY"){let d=s*o,u=s*l,p=a*o,_=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=d*h+_,e[5]=s*c,e[9]=u*h-p,e[2]=p*h-u,e[6]=a*c,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nm,t,Fm)}lookAt(t,e,n){let i=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),fi.crossVectors(n,Ze),fi.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=0.0001:Ze.z+=0.0001,Ze.normalize(),fi.crossVectors(n,Ze)),fi.normalize(),fa.crossVectors(Ze,fi),i[0]=fi.x,i[4]=fa.x,i[8]=Ze.x,i[1]=fi.y,i[5]=fa.y,i[9]=Ze.y,i[2]=fi.z,i[6]=fa.z,i[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],d=n[9],u=n[13],p=n[2],_=n[6],m=n[10],f=n[14],v=n[3],y=n[7],g=n[11],S=n[15],R=i[0],w=i[4],I=i[8],V=i[12],P=i[1],F=i[5],N=i[9],G=i[13],Z=i[2],X=i[6],j=i[10],k=i[14],B=i[3],q=i[7],at=i[11],ft=i[15];return r[0]=s*R+a*P+o*Z+l*B,r[4]=s*w+a*F+o*X+l*q,r[8]=s*I+a*N+o*j+l*at,r[12]=s*V+a*G+o*k+l*ft,r[1]=c*R+h*P+d*Z+u*B,r[5]=c*w+h*F+d*X+u*q,r[9]=c*I+h*N+d*j+u*at,r[13]=c*V+h*G+d*k+u*ft,r[2]=p*R+_*P+m*Z+f*B,r[6]=p*w+_*F+m*X+f*q,r[10]=p*I+_*N+m*j+f*at,r[14]=p*V+_*G+m*k+f*ft,r[3]=v*R+y*P+g*Z+S*B,r[7]=v*w+y*F+g*X+S*q,r[11]=v*I+y*N+g*j+S*at,r[15]=v*V+y*G+g*k+S*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],d=t[10],u=t[14];return t[3]*(+r*o*h-i*l*h-r*a*d+n*l*d+i*a*u-n*o*u)+t[7]*(+e*o*u-e*l*d+r*s*d-i*s*u+i*l*c-r*o*c)+t[11]*(+e*l*h-e*a*u-r*s*h+n*s*u+r*a*c-n*l*c)+t[15]*(-i*a*c-e*o*h+e*a*d+i*s*h-n*s*d+n*o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],u=t[11],p=t[12],_=t[13],m=t[14],f=t[15],v=h*m*l-_*d*l+_*o*u-a*m*u-h*o*f+a*d*f,y=p*d*l-c*m*l-p*o*u+s*m*u+c*o*f-s*d*f,g=c*_*l-p*h*l+p*a*u-s*_*u-c*a*f+s*h*f,S=p*h*o-c*_*o-p*a*d+s*_*d+c*a*m-s*h*m,R=e*v+n*y+i*g+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return t[0]=v*w,t[1]=(_*d*r-h*m*r-_*i*u+n*m*u+h*i*f-n*d*f)*w,t[2]=(a*m*r-_*o*r+_*i*l-n*m*l-a*i*f+n*o*f)*w,t[3]=(h*o*r-a*d*r-h*i*l+n*d*l+a*i*u-n*o*u)*w,t[4]=y*w,t[5]=(c*m*r-p*d*r+p*i*u-e*m*u-c*i*f+e*d*f)*w,t[6]=(p*o*r-s*m*r-p*i*l+e*m*l+s*i*f-e*o*f)*w,t[7]=(s*d*r-c*o*r+c*i*l-e*d*l-s*i*u+e*o*u)*w,t[8]=g*w,t[9]=(p*h*r-c*_*r-p*n*u+e*_*u+c*n*f-e*h*f)*w,t[10]=(s*_*r-p*a*r+p*n*l-e*_*l-s*n*f+e*a*f)*w,t[11]=(c*a*r-s*h*r-c*n*l+e*h*l+s*n*u-e*a*u)*w,t[12]=S*w,t[13]=(c*_*i-p*h*i+p*n*d-e*_*d-c*n*m+e*h*m)*w,t[14]=(p*a*i-s*_*i-p*n*o+e*_*o+s*n*m-e*a*m)*w,t[15]=(s*h*i-c*a*i+c*n*o-e*h*o-s*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,h=a+a,d=r*l,u=r*c,p=r*h,_=s*c,m=s*h,f=a*h,v=o*l,y=o*c,g=o*h,S=n.x,R=n.y,w=n.z;return i[0]=(1-(_+f))*S,i[1]=(u+g)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(u-g)*R,i[5]=(1-(d+f))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(p+y)*w,i[9]=(m-v)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Sr.set(i[0],i[1],i[2]).length(),s=Sr.set(i[4],i[5],i[6]).length(),a=Sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],gn.copy(this);let o=1/r,l=1/s,c=1/a;return gn.elements[0]*=o,gn.elements[1]*=o,gn.elements[2]*=o,gn.elements[4]*=l,gn.elements[5]*=l,gn.elements[6]*=l,gn.elements[8]*=c,gn.elements[9]*=c,gn.elements[10]*=c,e.setFromRotationMatrix(gn),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=2000,o=!1){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,_;if(o)p=r/(s-r),_=s*r/(s-r);else if(a===2000)p=-(s+r)/(s-r),_=-2*s*r/(s-r);else{if(a!==2001)throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);p=-s/(s-r),_=-s*r/(s-r)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=2000,o=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,_;if(o)p=1/(s-r),_=s/(s-r);else if(a===2000)p=-2/(s-r),_=-(s+r)/(s-r);else{if(a!==2001)throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);p=-1/(s-r),_=-r/(s-r)}return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Sr=new T,gn=new wt,Nm=new T(0,0,0),Fm=new T(1,1,1),fi=new T,fa=new T,Ze=new T,Fu=new wt,Du=new me;class Ge{constructor(t=0,e=0,n=0,i=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<0.9999999?(this._x=Math.atan2(-c,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<0.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<0.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<0.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ut(o,-1,1)),Math.abs(o)<0.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ut(s,-1,1)),Math.abs(s)<0.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Du.setFromEuler(this),this.setFromQuaternion(Du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class Os{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return!!(this.mask&1<<t)}}var Dm=0,Ou=new T,xr=new me,Hn=new wt,ma=new T,ps=new T,Om=new T,Bm=new me,Bu=new T(1,0,0),zu=new T(0,1,0),Vu=new T(0,0,1),Hu={type:"added"},zm={type:"removed"},Tr={type:"childadded",child:null},Fl={type:"childremoved",child:null};class te extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=te.DEFAULT_UP.clone();let t=new T,e=new Ge,n=new me,i=new T(1,1,1);e._onChange(function(){n.setFromEuler(e,!1)}),n._onChange(function(){e.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new Nt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(Bu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Vu,t)}translateOnAxis(t,e){return Ou.copy(t).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ma.copy(t):ma.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ps,ma,this.up):Hn.lookAt(ma,ps,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),xr.setFromRotationMatrix(Hn),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hu),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zm),Fl.child=t,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hu),Tr.child=t,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,Om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];r(t.shapes,h)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(t.materials,this.material[o]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(r(t.animations,o))}}if(e){let a=s(t.geometries),o=s(t.materials),l=s(t.textures),c=s(t.images),h=s(t.shapes),d=s(t.skeletons),u=s(t.animations),p=s(t.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function s(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}te.DEFAULT_UP=new T(0,1,0),te.DEFAULT_MATRIX_AUTO_UPDATE=!0,te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new T,Gn=new T,Dl=new T,Wn=new T,Er=new T,wr=new T,Gu=new T,Ol=new T,Bl=new T,zl=new T,Vl=new jt,Hl=new jt,Gl=new jt;class He{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){_n.subVectors(i,e),Gn.subVectors(n,e),Dl.subVectors(t,e);let s=_n.dot(_n),a=_n.dot(Gn),o=_n.dot(Dl),l=Gn.dot(Gn),c=Gn.dot(Dl),h=s*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,u=(l*o-a*c)*d,p=(s*c-a*o)*d;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Wn)!==null&&(Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1)}static getInterpolation(t,e,n,i,r,s,a,o){return this.getBarycoord(t,e,n,i,Wn)===null?(o.x=0,o.y=0,("z"in o)&&(o.z=0),("w"in o)&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Wn.x),o.addScaledVector(s,Wn.y),o.addScaledVector(a,Wn.z),o)}static getInterpolatedAttribute(t,e,n,i,r,s){return Vl.setScalar(0),Hl.setScalar(0),Gl.setScalar(0),Vl.fromBufferAttribute(t,e),Hl.fromBufferAttribute(t,n),Gl.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(Vl,r.x),s.addScaledVector(Hl,r.y),s.addScaledVector(Gl,r.z),s}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),Gn.subVectors(t,e),_n.cross(Gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),0.5*_n.cross(Gn).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,s,a;Er.subVectors(i,n),wr.subVectors(r,n),Ol.subVectors(t,n);let o=Er.dot(Ol),l=wr.dot(Ol);if(o<=0&&l<=0)return e.copy(n);Bl.subVectors(t,i);let c=Er.dot(Bl),h=wr.dot(Bl);if(c>=0&&h<=c)return e.copy(i);let d=o*h-c*l;if(d<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(n).addScaledVector(Er,s);zl.subVectors(t,r);let u=Er.dot(zl),p=wr.dot(zl);if(p>=0&&u<=p)return e.copy(r);let _=u*l-o*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(wr,a);let m=c*p-u*h;if(m<=0&&h-c>=0&&u-p>=0)return Gu.subVectors(r,i),a=(h-c)/(h-c+(u-p)),e.copy(i).addScaledVector(Gu,a);let f=1/(m+_+d);return s=_*f,a=d*f,e.copy(n).addScaledVector(Er,s).addScaledVector(wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function Wl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<0.16666666666666666?t+6*(e-t)*n:n<0.5?e:n<0.6666666666666666?t+6*(e-t)*(0.6666666666666666-n):t}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=sh(t,1),e=Ut(e,0,1),n=Ut(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=0.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Wl(s,r,t+0.3333333333333333),this.g=Wl(s,r,t),this.b=Wl(s,r,t-0.3333333333333333)}return Wt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Mp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Wt.workingToColorSpace(Pe.copy(this),t),65536*Math.round(Ut(255*Pe.r,0,255))+256*Math.round(Ut(255*Pe.g,0,255))+Math.round(Ut(255*Pe.b,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Pe.copy(this),e);let{r:n,g:i,b:r}=Pe,s=Math.max(n,i,r),a=Math.min(n,i,r),o,l,c=(a+s)/2;if(a===s)o=0,l=0;else{let h=s-a;switch(l=c<=0.5?h/(s+a):h/(2-s-a),s){case n:o=(i-r)/h+(i<r?6:0);break;case i:o=(r-n)/h+2;break;case r:o=(n-i)/h+4}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t="srgb"){Wt.workingToColorSpace(Pe.copy(this),t);let{r:e,g:n,b:i}=Pe;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(ga);let n=Ts(mi.h,ga.h,e),i=Ts(mi.s,ga.s,e),r=Ts(mi.l,ga.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Pe=new vt;vt.NAMES=Mp;var Vm=0;class Ve extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=ln(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(r){let s=[];for(let a in r){let o=r[a];delete o.metadata,s.push(o)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ae extends Ve{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var j_=Hm();function Hm(){let t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,r[l]=-c-1,r[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,r[l]=13,r[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var fe=new T,_a=new it,Gm=0;class ae{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class fo extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mo extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class bt extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Wm=0,on=new wt,kl=new te,br=new T,Je=new Ue,fs=new Ue,Te=new T;class Kt extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new((Qh(t))?mo:fo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return kl.lookAt(t),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new bt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ue);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(t){let n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let a=e[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Je.min,fs.min),Je.expandByPoint(Te),Te.addVectors(Je.max,fs.max),Je.expandByPoint(Te)):(Je.expandByPoint(fs.min),Je.expandByPoint(fs.max))}Je.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,s=e.length;r<s;r++){let a=e[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Te.fromBufferAttribute(a,l),o&&(br.fromBufferAttribute(t,l),Te.add(br)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let{position:n,normal:i,uv:r}=e;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),a=[],o=[];for(let I=0;I<n.count;I++)a[I]=new T,o[I]=new T;let l=new T,c=new T,h=new T,d=new it,u=new it,p=new it,_=new T,m=new T;function f(I,V,P){l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,V),h.fromBufferAttribute(n,P),d.fromBufferAttribute(r,I),u.fromBufferAttribute(r,V),p.fromBufferAttribute(r,P),c.sub(l),h.sub(l),u.sub(d),p.sub(d);let F=1/(u.x*p.y-p.x*u.y);isFinite(F)&&(_.copy(c).multiplyScalar(p.y).addScaledVector(h,-u.y).multiplyScalar(F),m.copy(h).multiplyScalar(u.x).addScaledVector(c,-p.x).multiplyScalar(F),a[I].add(_),a[V].add(_),a[P].add(_),o[I].add(m),o[V].add(m),o[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,V=v.length;I<V;++I){let P=v[I],F=P.start;for(let N=F,G=F+P.count;N<G;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new T,g=new T,S=new T,R=new T;function w(I){S.fromBufferAttribute(i,I),R.copy(S);let V=a[I];y.copy(V),y.sub(S.multiplyScalar(S.dot(V))).normalize(),g.crossVectors(R,V);let P=g.dot(o[I])<0?-1:1;s.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,V=v.length;I<V;++I){let P=v[I],F=P.start;for(let N=F,G=F+P.count;N<G;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,s=new T,a=new T,o=new T,l=new T,c=new T,h=new T;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,m),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),c.subVectors(s,r),h.subVectors(i,r),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:h}=a,d=new l.constructor(o.length*c),u=0,p=0;for(let _=0,m=o.length;_<m;_++){u=a.isInterleavedBufferAttribute?o[_]*a.data.stride+a.offset:o[_]*c;for(let f=0;f<c;f++)d[p++]=l[u++]}return new ae(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Kt,n=this.index.array,i=this.attributes;for(let a in i){let o=t(i[a],n);e.setAttribute(a,o)}let r=this.morphAttributes;for(let a in r){let o=[],l=r[a];for(let c=0,h=l.length;c<h;c++){let d=t(l[c],n);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,o=s.length;a<o;a++){let l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},r=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(t.data))}c.length>0&&(i[o]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let r=t.morphAttributes;for(let l in r){let c=[],h=r[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let l=0,c=s.length;l<c;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Wu=new wt,Xi=new er,va=new ke,ku=new T,ya=new T,Ma=new T,Sa=new T,Xl=new T,xa=new T,Xu=new T,Ta=new T;class ce extends te{constructor(t=new Kt,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){xa.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let c=a[o],h=r[o];c!==0&&(Xl.fromBufferAttribute(h,t),s?xa.addScaledVector(Xl,c):xa.addScaledVector(Xl.sub(e),c))}e.add(xa)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),va.containsPoint(Xi.origin)===!1){if(Xi.intersectSphere(va,ku)===null)return;if(Xi.origin.distanceToSquared(ku)>(t.far-t.near)**2)return}Wu.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(Wu),n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(t,e,Xi)}}_computeIntersections(t,e,n){let i,r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){let m=d[p],f=s[m.materialIndex];for(let v=Math.max(m.start,u.start),y=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));v<y;v+=3)i=Ea(this,f,t,n,l,c,h,a.getX(v),a.getX(v+1),a.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}else for(let p=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);p<_;p+=3)i=Ea(this,s,t,n,l,c,h,a.getX(p),a.getX(p+1),a.getX(p+2)),i&&(i.faceIndex=Math.floor(p/3),e.push(i));else if(o!==void 0)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){let m=d[p],f=s[m.materialIndex];for(let v=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));v<y;v+=3)i=Ea(this,f,t,n,l,c,h,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}else for(let p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);p<_;p+=3)i=Ea(this,s,t,n,l,c,h,p,p+1,p+2),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}function Ea(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ya),t.getVertexPosition(l,Ma),t.getVertexPosition(c,Sa);let h=function(d,u,p,_,m,f,v,y){let g;if(g=u.side===1?_.intersectTriangle(v,f,m,!0,y):_.intersectTriangle(m,f,v,u.side===0,y),g===null)return null;Ta.copy(y),Ta.applyMatrix4(d.matrixWorld);let S=p.ray.origin.distanceTo(Ta);return S<p.near||S>p.far?null:{distance:S,point:Ta.clone(),object:d}}(t,e,n,i,ya,Ma,Sa,Xu);if(h){let d=new T;He.getBarycoord(Xu,ya,Ma,Sa,d),r&&(h.uv=He.getInterpolatedAttribute(r,o,l,c,d,new it)),s&&(h.uv1=He.getInterpolatedAttribute(s,o,l,c,d,new it)),a&&(h.normal=He.getInterpolatedAttribute(a,o,l,c,d,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new T,materialIndex:0};He.getNormal(ya,Ma,Sa,u.normal),h.face=u,h.barycoord=d}return h}class ii extends Kt{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let o=[],l=[],c=[],h=[],d=0,u=0;function p(_,m,f,v,y,g,S,R,w,I,V){let P=g/w,F=S/I,N=g/2,G=S/2,Z=R/2,X=w+1,j=I+1,k=0,B=0,q=new T;for(let at=0;at<j;at++){let ft=at*F-G;for(let Q=0;Q<X;Q++){let K=Q*P-N;q[_]=K*v,q[m]=ft*y,q[f]=Z,l.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[f]=R>0?1:-1,c.push(q.x,q.y,q.z),h.push(Q/w),h.push(1-at/I),k+=1}}for(let at=0;at<I;at++)for(let ft=0;ft<w;ft++){let Q=d+ft+X*at,K=d+ft+X*(at+1),mt=d+(ft+1)+X*(at+1),lt=d+(ft+1)+X*at;o.push(Q,K,lt),o.push(K,mt,lt),B+=6}a.addGroup(u,B,V),u+=B,d+=k}p("z","y","x",-1,-1,n,e,t,s,r,0),p("z","y","x",1,-1,n,e,-t,s,r,1),p("x","z","y",1,1,t,n,e,i,s,2),p("x","z","y",1,-1,t,n,-e,i,s,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function nr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ne(t){let e={};for(let n=0;n<t.length;n++){let i=nr(t[n]);for(let r in i)e[r]=i[r]}return e}function ic(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}var Sp={clone:nr,merge:Ne};class Cn extends Ve{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=function(e){let n=[];for(let i=0;i<e.length;i++)n.push(e[i].clone());return n}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bs extends te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var gi=new T,qu=new it,Yu=new it;class _e extends Bs{constructor(t=50,e=1,n=0.1,i=2000){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=2*Yi*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(0.5*Nr*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*Yi*Math.atan(Math.tan(0.5*Nr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Yu),e.subVectors(Yu,qu)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(0.5*Nr*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-0.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=s;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var Ar=-90;class rc extends te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _e(Ar,1,t,e);i.layers=this.layers,this.add(i);let r=new _e(Ar,1,t,e);r.layers=this.layers,this.add(r);let s=new _e(Ar,1,t,e);s.layers=this.layers,this.add(s);let a=new _e(Ar,1,t,e);a.layers=this.layers,this.add(a);let o=new _e(Ar,1,t,e);o.layers=this.layers,this.add(o);let l=new _e(Ar,1,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else{if(t!==2001)throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1)}for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,s,a,o,l,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(h,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class go extends he{constructor(t=[],e=301,n,i,r,s,a,o,l,c){super(t,e,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sc extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new go(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ii(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;let s=new ce(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new rc(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}class je extends te{constructor(){super(),this.isGroup=!0,this.type="Group"}}var km={type:"move"};class zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,p=0.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(km)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class _o extends te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qr{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var Be=new T;class yi{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yr extends Ve{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var Rr,ms=new T,Cr=new T,Lr=new T,Ir=new it,gs=new it,xp=new wt,wa=new T,_s=new T,ba=new T,Zu=new it,ql=new it,Ju=new it;class Vs extends te{constructor(t=new Yr){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new Kt;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new qr(e,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new yi(n,3,0,!1)),Rr.setAttribute("uv",new yi(n,2,3,!1))}this.geometry=Rr,this.material=t,this.center=new it(0.5,0.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),xp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Lr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let s=this.center;Aa(wa.set(-0.5,-0.5,0),Lr,s,Cr,i,r),Aa(_s.set(0.5,-0.5,0),Lr,s,Cr,i,r),Aa(ba.set(0.5,0.5,0),Lr,s,Cr,i,r),Zu.set(0,0),ql.set(1,0),Ju.set(1,1);let a=t.ray.intersectTriangle(wa,_s,ba,!1,ms);if(a===null&&(Aa(_s.set(-0.5,0.5,0),Lr,s,Cr,i,r),ql.set(0,1),a=t.ray.intersectTriangle(wa,ba,_s,!1,ms),a===null))return;let o=t.ray.origin.distanceTo(ms);o<t.near||o>t.far||e.push({distance:o,point:ms.clone(),uv:He.getInterpolation(ms,wa,_s,ba,Zu,ql,Ju,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Aa(t,e,n,i,r,s){Ir.subVectors(t,n).addScalar(0.5).multiply(i),r!==void 0?(gs.x=s*Ir.x-r*Ir.y,gs.y=r*Ir.x+s*Ir.y):gs.copy(Ir),t.copy(e),t.x+=gs.x,t.y+=gs.y,t.applyMatrix4(xp)}var K_=new T,$_=new T;var ju=new T,Ku=new jt,$u=new jt,Xm=new T,Qu=new wt,Ra=new T,Yl=new ke,td=new wt,Zl=new er;class vo extends ce{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ue),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ke),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yl.copy(this.boundingSphere),Yl.applyMatrix4(i),t.ray.intersectsSphere(Yl)!==!1&&(td.copy(i).invert(),Zl.copy(t.ray).applyMatrix4(td),this.boundingBox!==null&&Zl.intersectsBox(this.boundingBox)===!1||this._computeIntersections(t,e,Zl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new jt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Ku.fromBufferAttribute(i.attributes.skinIndex,t),$u.fromBufferAttribute(i.attributes.skinWeight,t),ju.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=$u.getComponent(r);if(s!==0){let a=Ku.getComponent(r);Qu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Xm.copy(ju).applyMatrix4(Qu),s)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Hs extends te{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yo extends he{constructor(t=null,e=1,n=1,i,r,s,a,o,l=1003,c=1003,h,d){super(null,s,a,o,l,c,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var ed=new wt,qm=new wt;class Gs{constructor(t=[],e=[]){this.uuid=ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new wt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){let a=t[r]?t[r].matrixWorld:qm;ed.multiplyMatrices(a,e[r]),ed.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new Gs(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=4*Math.ceil(t/4),t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new yo(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Hs),this.bones.push(s),this.boneInverses.push(new wt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.bones.push(s.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ji extends ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var Pr=new wt,nd=new wt,Ca=[],id=new Ue,Ym=new wt,vs=new ce,ys=new ke;class Mo extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ym)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ue),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pr),id.copy(t.boundingBox).applyMatrix4(Pr),this.boundingBox.union(id)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ke),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Pr),ys.copy(t.boundingSphere).applyMatrix4(Pr),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=t*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=i[r+s]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Pr),nd.multiplyMatrices(n,Pr),vs.matrixWorld=nd,vs.raycast(t,Ca);for(let s=0,a=Ca.length;s<a;s++){let o=Ca[s];o.instanceId=r,o.object=this,e.push(o)}Ca.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new yo(new Float32Array(i*this.count),i,this.count,1028,1015));let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<n.length;l++)s+=n[l];let a=this.geometry.morphTargetsRelative?1:1-s,o=i*t;r[o]=a,r.set(n,o+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}var Jl=new T,Zm=new T,Jm=new Nt;class Xn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Jl.subVectors(n,e).cross(Zm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Jm.getNormalMatrix(t),i=this.coplanarPoint(Jl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var qi=new ke,jm=new it(0.5,0.5),La=new T;class ir{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,r=new Xn,s=new Xn){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],p=r[8],_=r[9],m=r[10],f=r[11],v=r[12],y=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,u-c,f-p,S-v).normalize(),i[1].setComponents(l+s,u+c,f+p,S+v).normalize(),i[2].setComponents(l+a,u+h,f+_,S+y).normalize(),i[3].setComponents(l-a,u-h,f-_,S-y).normalize(),n)i[4].setComponents(o,d,m,g).normalize(),i[5].setComponents(l-o,u-d,f-m,S-g).normalize();else if(i[4].setComponents(l-o,u-d,f-m,S-g).normalize(),e===2000)i[5].setComponents(l+o,u+d,f+m,S+g).normalize();else{if(e!==2001)throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(o,d,m,g).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=jm.distanceTo(t.center);return qi.radius=0.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(La.x=i.normal.x>0?t.max.x:t.min.x,La.y=i.normal.y>0?t.max.y:t.min.y,La.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(La)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var xn=new wt,Tn=new ir;class So{constructor(){this.coordinateSystem=2000}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(xn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Tn.setFromProjectionMatrix(xn,i.coordinateSystem,i.reversedDepth),Tn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(xn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Tn.setFromProjectionMatrix(xn,i.coordinateSystem,i.reversedDepth),Tn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(xn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Tn.setFromProjectionMatrix(xn,i.coordinateSystem,i.reversedDepth),Tn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(xn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Tn.setFromProjectionMatrix(xn,i.coordinateSystem,i.reversedDepth),Tn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(xn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Tn.setFromProjectionMatrix(xn,i.coordinateSystem,i.reversedDepth),Tn.containsPoint(t))return!0}return!1}clone(){return new So}}class Tp{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];s.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}var Q_=new wt,tv=new vt(1,1,1),ev=new ir,nv=new So,iv=new Ue,rv=new ke,sv=new T,av=new T,ov=new T,lv=new Tp,hv=new ce;class rr extends Ve{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var Ga=new T,Wa=new T,rd=new wt,Ms=new er,Ia=new ke,jl=new T,sd=new T;class Zr extends te{constructor(t=new Kt,e=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ga.fromBufferAttribute(e,i-1),Wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(Wa);t.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(i),Ia.radius+=r,t.ray.intersectsSphere(Ia)===!1)return;rd.copy(i).invert(),Ms.copy(t.ray).applyMatrix4(rd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let p=d,_=u-1;p<_;p+=l){let m=c.getX(p),f=c.getX(p+1),v=Pa(this,t,Ms,o,m,f,p);v&&e.push(v)}if(this.isLineLoop){let p=c.getX(u-1),_=c.getX(d),m=Pa(this,t,Ms,o,p,_,u-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let p=d,_=u-1;p<_;p+=l){let m=Pa(this,t,Ms,o,p,p+1,p);m&&e.push(m)}if(this.isLineLoop){let p=Pa(this,t,Ms,o,u-1,d,u-1);p&&e.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function Pa(t,e,n,i,r,s,a){let o=t.geometry.attributes.position;if(Ga.fromBufferAttribute(o,r),Wa.fromBufferAttribute(o,s),n.distanceSqToSegment(Ga,Wa,jl,sd)>i)return;jl.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(jl);return l<e.near||l>e.far?void 0:{distance:l,point:sd.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var ad=new T,od=new T;class Jr extends Zr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ad.fromBufferAttribute(e,i),od.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ad.distanceTo(od);t.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xo extends Zr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Ti extends Ve{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var ld=new wt,ah=new er,Ua=new ke,Na=new T;class sr extends te{constructor(t=new Kt,e=new Ti){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=r,t.ray.intersectsSphere(Ua)===!1)return;ld.copy(i).invert(),ah.copy(t.ray).applyMatrix4(ld);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(l!==null)for(let h=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);h<d;h++){let u=l.getX(h);Na.fromBufferAttribute(c,u),hd(Na,u,o,i,t,e,this)}else for(let h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);h<d;h++)Na.fromBufferAttribute(c,h),hd(Na,h,o,i,t,e,this)}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function hd(t,e,n,i,r,s,a){let o=ah.distanceSqToPoint(t);if(o<n){let l=new T;ah.closestPointToPoint(t,l),l.applyMatrix4(i);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ln extends he{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class To extends he{constructor(t,e,n=1014,i,r,s,a=1003,o=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:h},i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Eo extends Kt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],a=[],o=[],l=[],c=e/2,h=Math.PI/2*t,d=e,u=2*h+d,p=2*n+r,_=i+1,m=new T,f=new T;for(let v=0;v<=p;v++){let y=0,g=0,S=0,R=0;if(v<=n){let V=v/n,P=V*Math.PI/2;g=-c-t*Math.cos(P),S=t*Math.sin(P),R=-t*Math.cos(P),y=V*h}else if(v<=n+r){let V=(v-n)/r;g=V*e-c,S=t,R=0,y=h+V*d}else{let V=(v-n-r)/n,P=V*Math.PI/2;g=c+t*Math.sin(P),S=t*Math.cos(P),R=t*Math.sin(P),y=h+d+V*h}let w=Math.max(0,Math.min(1,y/u)),I=0;v===0?I=0.5/i:v===p&&(I=-0.5/i);for(let V=0;V<=i;V++){let P=V/i,F=P*Math.PI*2,N=Math.sin(F),G=Math.cos(F);f.x=-S*G,f.y=g,f.z=S*N,a.push(f.x,f.y,f.z),m.set(-S*G,R,S*N),m.normalize(),o.push(m.x,m.y,m.z),l.push(P+I,w)}if(v>0){let V=(v-1)*_;for(let P=0;P<i;P++){let F=V+P,N=V+P+1,G=v*_+P,Z=v*_+P+1;s.push(F,N,G),s.push(N,Z,G)}}}this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class wo extends Kt{constructor(t=1,e=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],s=[],a=[],o=[],l=new T,c=new it;s.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let h=0,d=3;h<=e;h++,d+=3){let u=n+h/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(s[d]/t+1)/2,c.y=(s[d+1]/t+1)/2,o.push(c.x,c.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(a,3)),this.setAttribute("uv",new bt(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ws extends Kt{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),r=Math.floor(r);let c=[],h=[],d=[],u=[],p=0,_=[],m=n/2,f=0;function v(y){let g=p,S=new it,R=new T,w=0,I=y===!0?t:e,V=y===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,m*V,0),d.push(0,V,0),u.push(0.5,0.5),p++;let P=p;for(let F=0;F<=i;F++){let N=F/i*o+a,G=Math.cos(N),Z=Math.sin(N);R.x=I*Z,R.y=m*V,R.z=I*G,h.push(R.x,R.y,R.z),d.push(0,V,0),S.x=0.5*G+0.5,S.y=0.5*Z*V+0.5,u.push(S.x,S.y),p++}for(let F=0;F<i;F++){let N=g+F,G=P+F;y===!0?c.push(G,G+1,N):c.push(G+1,G,N),w+=3}l.addGroup(f,w,y===!0?1:2),f+=w}(function(){let y=new T,g=new T,S=0,R=(e-t)/n;for(let w=0;w<=r;w++){let I=[],V=w/r,P=V*(e-t)+t;for(let F=0;F<=i;F++){let N=F/i,G=N*o+a,Z=Math.sin(G),X=Math.cos(G);g.x=P*Z,g.y=-V*n+m,g.z=P*X,h.push(g.x,g.y,g.z),y.set(Z,R,X).normalize(),d.push(y.x,y.y,y.z),u.push(N,1-V),I.push(p++)}_.push(I)}for(let w=0;w<i;w++)for(let I=0;I<r;I++){let V=_[I][w],P=_[I+1][w],F=_[I+1][w+1],N=_[I][w+1];(t>0||I!==0)&&(c.push(V,P,N),S+=3),(e>0||I!==r-1)&&(c.push(P,F,N),S+=3)}l.addGroup(f,S,0),f+=S})(),s===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bo extends Ws{constructor(t=1,e=1,n=32,i=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(t){return new bo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ei extends Kt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],s=[];function a(u,p,_,m){let f=m+1,v=[];for(let y=0;y<=f;y++){v[y]=[];let g=u.clone().lerp(_,y/f),S=p.clone().lerp(_,y/f),R=f-y;for(let w=0;w<=R;w++)v[y][w]=w===0&&y===f?g:g.clone().lerp(S,w/R)}for(let y=0;y<f;y++)for(let g=0;g<2*(f-y)-1;g++){let S=Math.floor(g/2);g%2==0?(o(v[y][S+1]),o(v[y+1][S]),o(v[y][S])):(o(v[y][S+1]),o(v[y+1][S+1]),o(v[y+1][S]))}}function o(u){r.push(u.x,u.y,u.z)}function l(u,p){let _=3*u;p.x=t[_+0],p.y=t[_+1],p.z=t[_+2]}function c(u,p,_,m){m<0&&u.x===1&&(s[p]=u.x-1),_.x===0&&_.z===0&&(s[p]=m/2/Math.PI+0.5)}function h(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let p=new T,_=new T,m=new T;for(let f=0;f<e.length;f+=3)l(e[f+0],p),l(e[f+1],_),l(e[f+2],m),a(p,_,m,u)})(i),function(u){let p=new T;for(let _=0;_<r.length;_+=3)p.x=r[_+0],p.y=r[_+1],p.z=r[_+2],p.normalize().multiplyScalar(u),r[_+0]=p.x,r[_+1]=p.y,r[_+2]=p.z}(n),function(){let u=new T;for(let p=0;p<r.length;p+=3){u.x=r[p+0],u.y=r[p+1],u.z=r[p+2];let _=h(u)/2/Math.PI+0.5,m=d(u)/Math.PI+0.5;s.push(_,1-m)}(function(){let p=new T,_=new T,m=new T,f=new T,v=new it,y=new it,g=new it;for(let S=0,R=0;S<r.length;S+=9,R+=6){p.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),m.set(r[S+6],r[S+7],r[S+8]),v.set(s[R+0],s[R+1]),y.set(s[R+2],s[R+3]),g.set(s[R+4],s[R+5]),f.copy(p).add(_).add(m).divideScalar(3);let w=h(f);c(v,R+0,p,w),c(y,R+2,_,w),c(g,R+4,m,w)}})(),function(){for(let p=0;p<s.length;p+=6){let _=s[p+0],m=s[p+2],f=s[p+4],v=Math.max(_,m,f),y=Math.min(_,m,f);v>0.9&&y<0.1&&(_<0.2&&(s[p+0]+=1),m<0.2&&(s[p+2]+=1),f<0.2&&(s[p+4]+=1))}}()}(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.vertices,t.indices,t.radius,t.details)}}class Ao extends Ei{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ao(t.radius,t.detail)}}var Fa=new T,Da=new T,Kl=new T,Oa=new He;class ac extends Kt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Nr*e),s=t.getIndex(),a=t.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],c=["a","b","c"],h=[,,,],d={},u=[];for(let p=0;p<o;p+=3){s?(l[0]=s.getX(p),l[1]=s.getX(p+1),l[2]=s.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:_,b:m,c:f}=Oa;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),f.fromBufferAttribute(a,l[2]),Oa.getNormal(Kl),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,h[0]!==h[1]&&h[1]!==h[2]&&h[2]!==h[0])for(let v=0;v<3;v++){let y=(v+1)%3,g=h[v],S=h[y],R=Oa[c[v]],w=Oa[c[y]],I=`${g}_${S}`,V=`${S}_${g}`;V in d&&d[V]?(Kl.dot(d[V].normal)<=r&&(u.push(R.x,R.y,R.z),u.push(w.x,w.y,w.z)),d[V]=null):(I in d)||(d[I]={index0:l[v],index1:l[y],normal:Kl.clone()})}}for(let p in d)if(d[p]){let{index0:_,index1:m}=d[p];Fa.fromBufferAttribute(a,_),Da.fromBufferAttribute(a,m),u.push(Fa.x,Fa.y,Fa.z),u.push(Da.x,Da.y,Da.z)}this.setAttribute("position",new bt(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,s;s=e||t*n[r-1];let a,o=0,l=r-1;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),a=n[i]-s,a<0)o=i+1;else{if(!(a>0)){l=i;break}l=i-1}if(i=l,n[i]===s)return i/(r-1);let c=n[i];return(i+(s-c)/(n[i+1]-c))/(r-1)}getTangent(t,e){let i=t-0.0001,r=t+0.0001;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new it:new T);return o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new T,i=[],r=[],s=[],a=new T,o=new wt;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new T)}r[0]=new T,s[0]=new T;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ut(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(a,p))}s[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Ut(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(o.makeRotationAxis(i[p],u*p)),s[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ks extends hn{constructor(t=0,e=0,n=1,i=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new it){let n=e,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),this.aClockwise!==!0||s||(r===i?r=-i:r-=i);let a=this.aStartAngle+t*r,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class oc extends ks{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function lc(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,r(a,o,u,p)},calc:function(s){let a=s*s;return t+e*s+n*a+i*(a*s)}}}var Ba=new T,$l=new lc,Ql=new lc,th=new lc;class hc extends hn{constructor(t=[],e=!1,n="centripetal",i=0.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,a,o,l=Math.floor(s),c=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1),this.closed||l>0?a=i[(l-1)%r]:(Ba.subVectors(i[0],i[1]).add(i[0]),a=Ba);let h=i[l%r],d=i[(l+1)%r];if(this.closed||l+2<r?o=i[(l+2)%r]:(Ba.subVectors(i[r-1],i[r-2]).add(i[r-1]),o=Ba),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,p=Math.pow(a.distanceToSquared(h),u),_=Math.pow(h.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(o),u);_<0.0001&&(_=1),p<0.0001&&(p=_),m<0.0001&&(m=_),$l.initNonuniformCatmullRom(a.x,h.x,d.x,o.x,p,_,m),Ql.initNonuniformCatmullRom(a.y,h.y,d.y,o.y,p,_,m),th.initNonuniformCatmullRom(a.z,h.z,d.z,o.z,p,_,m)}else this.curveType==="catmullrom"&&($l.initCatmullRom(a.x,h.x,d.x,o.x,this.tension),Ql.initCatmullRom(a.y,h.y,d.y,o.y,this.tension),th.initCatmullRom(a.z,h.z,d.z,o.z,this.tension));return n.set($l.calc(c),Ql.calc(c),th.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cd(t,e,n,i,r){let s=0.5*(i-e),a=0.5*(r-n),o=t*t;return(2*n-2*i+s+a)*(t*o)+(-3*n+3*i-2*s-a)*o+s*t+n}function Es(t,e,n,i){return function(r,s){let a=1-r;return a*a*s}(t,e)+function(r,s){return 2*(1-r)*r*s}(t,n)+function(r,s){return r*r*s}(t,i)}function ws(t,e,n,i,r){return function(s,a){let o=1-s;return o*o*o*a}(t,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(t,n)+function(s,a){return 3*(1-s)*s*s*a}(t,i)+function(s,a){return s*s*s*a}(t,r)}class Ro extends hn{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(ws(t,i.x,r.x,s.x,a.x),ws(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cc extends hn{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(ws(t,i.x,r.x,s.x,a.x),ws(t,i.y,r.y,s.y,a.y),ws(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Co extends hn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uc extends hn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lo extends hn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Es(t,i.x,r.x,s.x),Es(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Io extends hn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Es(t,i.x,r.x,s.x),Es(t,i.y,r.y,s.y),Es(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Po extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,o=i[s===0?s:s-1],l=i[s],c=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return n.set(cd(a,o.x,l.x,c.x,h.x),cd(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new it().fromArray(i))}return this}}var ka=Object.freeze({__proto__:null,ArcCurve:oc,CatmullRomCurve3:hc,CubicBezierCurve:Ro,CubicBezierCurve3:cc,EllipseCurve:ks,LineCurve:Co,LineCurve3:uc,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:Io,SplineCurve:Po});class dc extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ka[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let s=i[r]-n,a=this.curves[r],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],a=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ka[i.type]().fromJSON(i))}return this}}class Xa extends dc{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Co(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Lo(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){let a=new Ro(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Po(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,r,s,a,o),this}absellipse(t,e,n,i,r,s,a,o){let l=new ks(t,e,n,i,r,s,a,o);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Uo extends Xa{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Xa().fromJSON(i))}return this}}function Km(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=ud(t,0,r,n,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=function(h,d,u,p){let _=[];for(let m=0,f=d.length;m<f;m++){let v=ud(h,d[m]*p,m<f-1?d[m+1]*p:h.length,p,!1);v===v.next&&(v.steiner=!0),_.push(sg(v))}_.sort(ng);for(let m=0;m<_.length;m++)u=ig(_[m],u);return u}(t,e,s,n)),t.length>80*n){o=1/0,l=1/0;let h=-1/0,d=-1/0;for(let u=n;u<r;u+=n){let p=t[u],_=t[u+1];p<o&&(o=p),_<l&&(l=_),p>h&&(h=p),_>d&&(d=_)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return bs(s,a,n,o,l,c,0),a}function ud(t,e,n,i,r){let s;if(r===function(a,o,l,c){let h=0;for(let d=o,u=l-c;d<l;d+=c)h+=(a[u]-a[d])*(a[d+1]+a[u+1]),u=d;return h}(t,e,n,i)>0)for(let a=e;a<n;a+=i)s=dd(a/i|0,t[a],t[a+1],s);else for(let a=n-i;a>=e;a-=i)s=dd(a/i|0,t[a],t[a+1],s);return s&&Or(s,s.next)&&(Rs(s),s=s.next),s}function ji(t,e){if(!t)return t;e||(e=t);let n,i=t;do if(n=!1,i.steiner||!Or(i,i.next)&&se(i.prev,i,i.next)!==0)i=i.next;else{if(Rs(i),i=e=i.prev,i===i.next)break;n=!0}while(n||i!==e);return e}function bs(t,e,n,i,r,s,a){if(!t)return;!a&&s&&function(l,c,h,d){let u=l;do u.z===0&&(u.z=oh(u.x,u.y,c,h,d)),u.prevZ=u.prev,u.nextZ=u.next,u=u.next;while(u!==l);u.prevZ.nextZ=null,u.prevZ=null,function(p){let _,m=1;do{let f,v=p;p=null;let y=null;for(_=0;v;){_++;let g=v,S=0;for(let w=0;w<m&&(S++,g=g.nextZ,g);w++);let R=m;for(;S>0||R>0&&g;)S!==0&&(R===0||!g||v.z<=g.z)?(f=v,v=v.nextZ,S--):(f=g,g=g.nextZ,R--),y?y.nextZ=f:p=f,f.prevZ=y,y=f;v=g}y.nextZ=null,m*=2}while(_>1)}(u)}(t,i,r,s);let o=t;for(;t.prev!==t.next;){let{prev:l,next:c}=t;if(s?Qm(t,i,r,s):$m(t))e.push(l.i,t.i,c.i),Rs(t),t=c.next,o=c.next;else if((t=c)===o){a?a===1?bs(t=tg(ji(t),e),e,n,i,r,s,2):a===2&&eg(t,e,n,i,r,s):bs(ji(t),e,n,i,r,s,1);break}}}function $m(t){let e=t.prev,n=t,i=t.next;if(se(e,n,i)>=0)return!1;let r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=Math.min(r,s,a),d=Math.min(o,l,c),u=Math.max(r,s,a),p=Math.max(o,l,c),_=i.next;for(;_!==e;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=p&&xs(r,o,s,l,a,c,_.x,_.y)&&se(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Qm(t,e,n,i){let r=t.prev,s=t,a=t.next;if(se(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,p=Math.min(o,l,c),_=Math.min(h,d,u),m=Math.max(o,l,c),f=Math.max(h,d,u),v=oh(p,_,e,n,i),y=oh(m,f,e,n,i),g=t.prevZ,S=t.nextZ;for(;g&&g.z>=v&&S&&S.z<=y;){if(g.x>=p&&g.x<=m&&g.y>=_&&g.y<=f&&g!==r&&g!==a&&xs(o,h,l,d,c,u,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;if(g=g.prevZ,S.x>=p&&S.x<=m&&S.y>=_&&S.y<=f&&S!==r&&S!==a&&xs(o,h,l,d,c,u,S.x,S.y)&&se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}for(;g&&g.z>=v;){if(g.x>=p&&g.x<=m&&g.y>=_&&g.y<=f&&g!==r&&g!==a&&xs(o,h,l,d,c,u,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;S&&S.z<=y;){if(S.x>=p&&S.x<=m&&S.y>=_&&S.y<=f&&S!==r&&S!==a&&xs(o,h,l,d,c,u,S.x,S.y)&&se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function tg(t,e){let n=t;do{let i=n.prev,r=n.next.next;!Or(i,r)&&wp(i,n,n.next,r)&&As(i,r)&&As(r,i)&&(e.push(i.i,n.i,r.i),Rs(n),Rs(n.next),n=t=r),n=n.next}while(n!==t);return ji(n)}function eg(t,e,n,i,r,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ag(a,o)){let l=bp(a,o);return a=ji(a,a.next),l=ji(l,l.next),bs(a,e,n,i,r,s,0),void bs(l,e,n,i,r,s,0)}o=o.next}a=a.next}while(a!==t)}function ng(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0))n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x);return n}function ig(t,e){let n=function(r,s){let a=s,o=r.x,l=r.y,c,h=-1/0;if(Or(r,a))return a;do{if(Or(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>h&&(h=m,c=a.x<a.next.x?a:a.next,m===o))return c}a=a.next}while(a!==s);if(!c)return null;let d=c,u=c.x,p=c.y,_=1/0;a=c;do{if(o>=a.x&&a.x>=u&&o!==a.x&&Ep(l<p?o:h,l,u,p,l<p?h:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);As(a,r)&&(m<_||m===_&&(a.x>c.x||a.x===c.x&&rg(c,a)))&&(c=a,_=m)}a=a.next}while(a!==d);return c}(t,e);if(!n)return e;let i=bp(n,t);return ji(i,i.next),ji(n,n.next)}function rg(t,e){return se(t.prev,t,e.prev)<0&&se(e.next,t,t.next)<0}function oh(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function sg(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Ep(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function xs(t,e,n,i,r,s,a,o){return!(t===a&&e===o)&&Ep(t,e,n,i,r,s,a,o)}function ag(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(n,i){let r=n;do{if(r.i!==n.i&&r.next.i!==n.i&&r.i!==i.i&&r.next.i!==i.i&&wp(r,r.next,n,i))return!0;r=r.next}while(r!==n);return!1}(t,e)&&(As(t,e)&&As(e,t)&&function(n,i){let r=n,s=!1,a=(n.x+i.x)/2,o=(n.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==n);return s}(t,e)&&(se(t.prev,t,e.prev)||se(t,e.prev,e))||Or(t,e)&&se(t.prev,t,t.next)>0&&se(e.prev,e,e.next)>0)}function se(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Or(t,e){return t.x===e.x&&t.y===e.y}function wp(t,e,n,i){let r=Va(se(t,e,n)),s=Va(se(t,e,i)),a=Va(se(n,i,t)),o=Va(se(n,i,e));return r!==s&&a!==o||(!(r!==0||!za(t,n,e))||(!(s!==0||!za(t,i,e))||(!(a!==0||!za(n,t,i))||!(o!==0||!za(n,e,i)))))}function za(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Va(t){return t>0?1:t<0?-1:0}function As(t,e){return se(t.prev,t,t.next)<0?se(t,e,t.next)>=0&&se(t,t.prev,e)>=0:se(t,e,t.prev)<0||se(t,t.next,e)<0}function bp(t,e){let n=lh(t.i,t.x,t.y),i=lh(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function dd(t,e,n,i){let r=lh(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Rs(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function lh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}class Ap{static triangulate(t,e,n=2){return Km(t,e,n)}}class En{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return 0.5*n}static isClockWise(t){return En.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];pd(t),fd(n,t);let s=t.length;e.forEach(pd);for(let o=0;o<e.length;o++)i.push(s),s+=e[o].length,fd(n,e[o]);let a=Ap.triangulate(n,i);for(let o=0;o<a.length;o+=3)r.push(a.slice(o,o+3));return r}}function pd(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function fd(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class No extends Kt{constructor(t=new Uo([new it(0.5,0.5),new it(-0.5,0.5),new it(-0.5,-0.5),new it(0.5,-0.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,o=t.length;a<o;a++)s(t[a]);function s(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled===void 0||e.bevelEnabled,u=e.bevelThickness!==void 0?e.bevelThickness:0.2,p=e.bevelSize!==void 0?e.bevelSize:u-0.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:og,y,g,S,R,w,I=!1;f&&(y=f.getSpacedPoints(c),I=!0,d=!1,g=f.computeFrenetFrames(c,!1),S=new T,R=new T,w=new T),d||(m=0,u=0,p=0,_=0);let V=a.extractPoints(l),P=V.shape,F=V.holes;if(!En.isClockWise(P)){P=P.reverse();for(let C=0,O=F.length;C<O;C++){let M=F[C];En.isClockWise(M)&&(F[C]=M.reverse())}}function N(C){let M=C[0];for(let L=1;L<=C.length;L++){let E=L%C.length,U=C[E],z=U.x-M.x,H=U.y-M.y,W=z*z+H*H,ot=Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(M.x),Math.abs(M.y));W<=0.000000000000000000010000000000000001*ot*ot?(C.splice(E,1),L--):M=U}}N(P),F.forEach(N);let G=F.length,Z=P;for(let C=0;C<G;C++){let O=F[C];P=P.concat(O)}function X(C,O,M){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(O,M)}let j=P.length;function k(C,O,M){let L,E,U,z=C.x-O.x,H=C.y-O.y,W=M.x-C.x,ot=M.y-C.y,ut=z*z+H*H,tt=z*ot-H*W;if(Math.abs(tt)>Number.EPSILON){let st=Math.sqrt(ut),yt=Math.sqrt(W*W+ot*ot),Et=O.x-H/st,Pt=O.y+z/st,Bt=((M.x-ot/yt-Et)*ot-(M.y+W/yt-Pt)*W)/(z*ot-H*W);L=Et+z*Bt-C.x,E=Pt+H*Bt-C.y;let Ct=L*L+E*E;if(Ct<=2)return new it(L,E);U=Math.sqrt(Ct/2)}else{let st=!1;z>Number.EPSILON?W>Number.EPSILON&&(st=!0):z<-Number.EPSILON?W<-Number.EPSILON&&(st=!0):Math.sign(H)===Math.sign(ot)&&(st=!0),st?(L=-H,E=z,U=Math.sqrt(ut)):(L=z,E=H,U=Math.sqrt(ut/2))}return new it(L/U,E/U)}let B=[];for(let C=0,O=Z.length,M=O-1,L=C+1;C<O;C++,M++,L++)M===O&&(M=0),L===O&&(L=0),B[C]=k(Z[C],Z[M],Z[L]);let q=[],at,ft,Q=B.concat();for(let C=0,O=G;C<O;C++){let M=F[C];at=[];for(let L=0,E=M.length,U=E-1,z=L+1;L<E;L++,U++,z++)U===E&&(U=0),z===E&&(z=0),at[L]=k(M[L],M[U],M[z]);q.push(at),Q=Q.concat(at)}if(m===0)ft=En.triangulateShape(Z,F);else{let C=[],O=[];for(let M=0;M<m;M++){let L=M/m,E=u*Math.cos(L*Math.PI/2),U=p*Math.sin(L*Math.PI/2)+_;for(let z=0,H=Z.length;z<H;z++){let W=X(Z[z],B[z],U);rt(W.x,W.y,-E),L===0&&C.push(W)}for(let z=0,H=G;z<H;z++){let W=F[z];at=q[z];let ot=[];for(let ut=0,tt=W.length;ut<tt;ut++){let st=X(W[ut],at[ut],U);rt(st.x,st.y,-E),L===0&&ot.push(st)}L===0&&O.push(ot)}}ft=En.triangulateShape(C,O)}let K=ft.length,mt=p+_;for(let C=0;C<j;C++){let O=d?X(P[C],Q[C],mt):P[C];I?(R.copy(g.normals[0]).multiplyScalar(O.x),S.copy(g.binormals[0]).multiplyScalar(O.y),w.copy(y[0]).add(R).add(S),rt(w.x,w.y,w.z)):rt(O.x,O.y,0)}for(let C=1;C<=c;C++)for(let O=0;O<j;O++){let M=d?X(P[O],Q[O],mt):P[O];I?(R.copy(g.normals[C]).multiplyScalar(M.x),S.copy(g.binormals[C]).multiplyScalar(M.y),w.copy(y[C]).add(R).add(S),rt(w.x,w.y,w.z)):rt(M.x,M.y,h/c*C)}for(let C=m-1;C>=0;C--){let O=C/m,M=u*Math.cos(O*Math.PI/2),L=p*Math.sin(O*Math.PI/2)+_;for(let E=0,U=Z.length;E<U;E++){let z=X(Z[E],B[E],L);rt(z.x,z.y,h+M)}for(let E=0,U=F.length;E<U;E++){let z=F[E];at=q[E];for(let H=0,W=z.length;H<W;H++){let ot=X(z[H],at[H],L);I?rt(ot.x,ot.y+y[c-1].y,y[c-1].x+M):rt(ot.x,ot.y,h+M)}}}function lt(C,O){let M=C.length;for(;--M>=0;){let L=M,E=M-1;E<0&&(E=C.length-1);for(let U=0,z=c+2*m;U<z;U++){let H=j*U,W=j*(U+1);gt(O+L+H,O+E+H,O+E+W,O+L+W)}}}function rt(C,O,M){o.push(C),o.push(O),o.push(M)}function ht(C,O,M){A(C),A(O),A(M);let L=i.length/3,E=v.generateTopUV(n,i,L-3,L-2,L-1);x(E[0]),x(E[1]),x(E[2])}function gt(C,O,M,L){A(C),A(O),A(L),A(O),A(M),A(L);let E=i.length/3,U=v.generateSideWallUV(n,i,E-6,E-3,E-2,E-1);x(U[0]),x(U[1]),x(U[3]),x(U[1]),x(U[2]),x(U[3])}function A(C){i.push(o[3*C+0]),i.push(o[3*C+1]),i.push(o[3*C+2])}function x(C){r.push(C.x),r.push(C.y)}(function(){let C=i.length/3;if(d){let O=0,M=j*O;for(let L=0;L<K;L++){let E=ft[L];ht(E[2]+M,E[1]+M,E[0]+M)}O=c+2*m,M=j*O;for(let L=0;L<K;L++){let E=ft[L];ht(E[0]+M,E[1]+M,E[2]+M)}}else{for(let O=0;O<K;O++){let M=ft[O];ht(M[2],M[1],M[0])}for(let O=0;O<K;O++){let M=ft[O];ht(M[0]+j*c,M[1]+j*c,M[2]+j*c)}}n.addGroup(C,i.length/3-C,0)})(),function(){let C=i.length/3,O=0;lt(Z,O),O+=Z.length;for(let M=0,L=F.length;M<L;M++){let E=F[M];lt(E,O),O+=E.length}n.addGroup(C,i.length/3-C,1)}()}this.setAttribute("position",new bt(i,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,n,i){if(i.shapes=[],Array.isArray(e))for(let r=0,s=e.length;r<s;r++){let a=e[r];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ka[i.type]().fromJSON(i)),new No(n,t.options)}}var og={generateTopUV:function(t,e,n,i,r){let s=e[3*n],a=e[3*n+1],o=e[3*i],l=e[3*i+1],c=e[3*r],h=e[3*r+1];return[new it(s,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(t,e,n,i,r,s){let a=e[3*n],o=e[3*n+1],l=e[3*n+2],c=e[3*i],h=e[3*i+1],d=e[3*i+2],u=e[3*r],p=e[3*r+1],_=e[3*r+2],m=e[3*s],f=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-d),new it(u,1-_),new it(m,1-v)]:[new it(o,1-l),new it(h,1-d),new it(p,1-_),new it(f,1-v)]}};class Fo extends Ei{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fo(t.radius,t.detail)}}class Do extends Kt{constructor(t=[new it(0,-0.5),new it(0.5,0),new it(0,0.5)],e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ut(i,0,2*Math.PI);let r=[],s=[],a=[],o=[],l=[],c=1/e,h=new T,d=new it,u=new T,p=new T,_=new T,m=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,u.x=1*f,u.y=-m,u.z=0*f,_.copy(u),u.normalize(),o.push(u.x,u.y,u.z);break;case t.length-1:o.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,u.x=1*f,u.y=-m,u.z=0*f,p.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),o.push(u.x,u.y,u.z),_.copy(p)}for(let v=0;v<=e;v++){let y=n+v*c*i,g=Math.sin(y),S=Math.cos(y);for(let R=0;R<=t.length-1;R++){h.x=t[R].x*g,h.y=t[R].y,h.z=t[R].x*S,s.push(h.x,h.y,h.z),d.x=v/e,d.y=R/(t.length-1),a.push(d.x,d.y);let w=o[3*R+0]*g,I=o[3*R+1],V=o[3*R+0]*S;l.push(w,I,V)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let g=y+v*t.length,S=g,R=g+t.length,w=g+t.length+1,I=g+1;r.push(S,R,I),r.push(w,I,R)}this.setIndex(r),this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(a,2)),this.setAttribute("normal",new bt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.points,t.segments,t.phiStart,t.phiLength)}}class Oo extends Ei{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oo(t.radius,t.detail)}}class ri extends Kt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,d=e/o,u=[],p=[],_=[],m=[];for(let f=0;f<c;f++){let v=f*d-s;for(let y=0;y<l;y++){let g=y*h-r;p.push(g,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-f/o)}}for(let f=0;f<o;f++)for(let v=0;v<a;v++){let y=v+l*f,g=v+l*(f+1),S=v+1+l*(f+1),R=v+1+l*f;u.push(y,g,R),u.push(g,S,R)}this.setIndex(u),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bo extends Kt{constructor(t=0.5,e=1,n=32,i=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n);let a=[],o=[],l=[],c=[],h=t,d=(e-t)/(i=Math.max(1,i)),u=new T,p=new it;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let f=r+m/n*s;u.x=h*Math.cos(f),u.y=h*Math.sin(f),o.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,c.push(p.x,p.y)}h+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let f=0;f<n;f++){let v=f+m,y=v,g=v+n+1,S=v+n+2,R=v+1;a.push(y,g,R),a.push(g,S,R)}}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zo extends Kt{constructor(t=new Uo([new it(0,0.5),new it(-0.5,-0.5),new it(0.5,-0.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],s=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,o,c),a+=o,o=0;function l(c){let h=i.length/3,d=c.extractPoints(e),u=d.shape,p=d.holes;En.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,f=p.length;m<f;m++){let v=p[m];En.isClockWise(v)===!0&&(p[m]=v.reverse())}let _=En.triangulateShape(u,p);for(let m=0,f=p.length;m<f;m++){let v=p[m];u=u.concat(v)}for(let m=0,f=u.length;m<f;m++){let v=u[m];i.push(v.x,v.y,0),r.push(0,0,1),s.push(v.x,v.y)}for(let m=0,f=_.length;m<f;m++){let v=_[m],y=v[0]+h,g=v[1]+h,S=v[2]+h;n.push(y,g,S),o+=3}}this.setIndex(n),this.setAttribute("position",new bt(i,3)),this.setAttribute("normal",new bt(r,3)),this.setAttribute("uv",new bt(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n}(this.parameters.shapes,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let s=e[t.shapes[i]];n.push(s)}return new zo(n,t.curveSegments)}}class Vo extends Kt{constructor(t=1,e=32,n=16,i=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(s+a,Math.PI),l=0,c=[],h=new T,d=new T,u=[],p=[],_=[],m=[];for(let f=0;f<=n;f++){let v=[],y=f/n,g=0;f===0&&s===0?g=0.5/e:f===n&&o===Math.PI&&(g=-0.5/e);for(let S=0;S<=e;S++){let R=S/e;h.x=-t*Math.cos(i+R*r)*Math.sin(s+y*a),h.y=t*Math.cos(s+y*a),h.z=t*Math.sin(i+R*r)*Math.sin(s+y*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(R+g,1-y),v.push(l++)}c.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let y=c[f][v+1],g=c[f][v],S=c[f+1][v],R=c[f+1][v+1];(f!==0||s>0)&&u.push(y,g,R),(f!==n-1||o<Math.PI)&&u.push(g,S,R)}this.setIndex(u),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ho extends Ei{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ho(t.radius,t.detail)}}class Go extends Kt{constructor(t=1,e=0.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let s=[],a=[],o=[],l=[],c=new T,h=new T,d=new T;for(let u=0;u<=n;u++)for(let p=0;p<=i;p++){let _=p/i*r,m=u/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(h,c).normalize(),o.push(d.x,d.y,d.z),l.push(p/i),l.push(u/n)}for(let u=1;u<=n;u++)for(let p=1;p<=i;p++){let _=(i+1)*u+p-1,m=(i+1)*(u-1)+p-1,f=(i+1)*(u-1)+p,v=(i+1)*u+p;s.push(_,m,v),s.push(m,f,v)}this.setIndex(s),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wo extends Kt{constructor(t=1,e=0.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new T,d=new T,u=new T,p=new T,_=new T,m=new T,f=new T;for(let y=0;y<=n;++y){let g=y/n*r*Math.PI*2;v(g,r,s,t,u),v(g+0.01,r,s,t,p),m.subVectors(p,u),f.addVectors(p,u),_.crossVectors(m,f),f.crossVectors(_,m),_.normalize(),f.normalize();for(let S=0;S<=i;++S){let R=S/i*Math.PI*2,w=-e*Math.cos(R),I=e*Math.sin(R);h.x=u.x+(w*f.x+I*_.x),h.y=u.y+(w*f.y+I*_.y),h.z=u.z+(w*f.z+I*_.z),o.push(h.x,h.y,h.z),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(y/n),c.push(S/i)}}for(let y=1;y<=n;y++)for(let g=1;g<=i;g++){let S=(i+1)*(y-1)+(g-1),R=(i+1)*y+(g-1),w=(i+1)*y+g,I=(i+1)*(y-1)+g;a.push(S,R,I),a.push(R,w,I)}function v(y,g,S,R,w){let I=Math.cos(y),V=Math.sin(y),P=S/g*y,F=Math.cos(P);w.x=R*(2+F)*0.5*I,w.y=R*(2+F)*V*0.5,w.z=R*Math.sin(P)*0.5}this.setIndex(a),this.setAttribute("position",new bt(o,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class ko extends Kt{constructor(t=new Io(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let s=t.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new T,o=new T,l=new it,c=new T,h=[],d=[],u=[],p=[];function _(m){c=t.getPointAt(m/e,c);let f=s.normals[m],v=s.binormals[m];for(let y=0;y<=i;y++){let g=y/i*Math.PI*2,S=Math.sin(g),R=-Math.cos(g);o.x=R*f.x+S*v.x,o.y=R*f.y+S*v.y,o.z=R*f.z+S*v.z,o.normalize(),d.push(o.x,o.y,o.z),a.x=c.x+n*o.x,a.y=c.y+n*o.y,a.z=c.z+n*o.z,h.push(a.x,a.y,a.z)}}(function(){for(let m=0;m<e;m++)_(m);_(r===!1?e:0),function(){for(let m=0;m<=e;m++)for(let f=0;f<=i;f++)l.x=m/e,l.y=f/i,u.push(l.x,l.y)}(),function(){for(let m=1;m<=e;m++)for(let f=1;f<=i;f++){let v=(i+1)*(m-1)+(f-1),y=(i+1)*m+(f-1),g=(i+1)*m+f,S=(i+1)*(m-1)+f;p.push(v,y,S),p.push(y,g,S)}}()})(),this.setIndex(p),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ko(new ka[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class pc extends Kt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new T,r=new T;if(t.index!==null){let s=t.attributes.position,a=t.index,o=t.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,c=o.length;l<c;++l){let h=o[l],d=h.start;for(let u=d,p=d+h.count;u<p;u+=3)for(let _=0;_<3;_++){let m=a.getX(u+_),f=a.getX(u+(_+1)%3);i.fromBufferAttribute(s,m),r.fromBufferAttribute(s,f),md(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let s=t.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){let c=3*a+l,h=3*a+(l+1)%3;i.fromBufferAttribute(s,c),r.fromBufferAttribute(s,h),md(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new bt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function md(t,e,n){let i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)!==!0&&n.has(r)!==!0&&(n.add(i),n.add(r),!0)}var cv=Object.freeze({__proto__:null,BoxGeometry:ii,CapsuleGeometry:Eo,CircleGeometry:wo,ConeGeometry:bo,CylinderGeometry:Ws,DodecahedronGeometry:Ao,EdgesGeometry:ac,ExtrudeGeometry:No,IcosahedronGeometry:Fo,LatheGeometry:Do,OctahedronGeometry:Oo,PlaneGeometry:ri,PolyhedronGeometry:Ei,RingGeometry:Bo,ShapeGeometry:zo,SphereGeometry:Vo,TetrahedronGeometry:Ho,TorusGeometry:Go,TorusKnotGeometry:Wo,TubeGeometry:ko,WireframeGeometry:pc});class wi extends Ve{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qe extends wi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Xo extends Ve{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fc extends Ve{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mc extends Ve{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ha(t,e){return t&&t.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t):t}function lg(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function hg(t){let e=t.length,n=Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(function(i,r){return t[i]-t[r]}),n}function gd(t,e,n){let i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){let o=n[s]*e;for(let l=0;l!==e;++l)r[a++]=t[o+l]}return r}function Rp(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),n.push(...a)),s=t[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),n.push(a)),s=t[r++];while(s!==void 0)}class bi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break n}break t}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class gc extends bi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:s=t,o=2*n-e;break;case 2402:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}let l=0.5*(n-e),c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,f=-d*m+2*d*_-d*p,v=(1+d)*m+(-1.5-2*d)*_+(-0.5+d)*p+1,y=(-1-u)*m+(1.5+u)*_+0.5*p,g=u*m-u*_;for(let S=0;S!==a;++S)r[S]=f*s[c+S]+v*s[l+S]+y*s[o+S]+g*s[h+S];return r}}class qo extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*h+s[o+d]*c;return r}}class _c extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ke{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ha(e,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ha(t.times,Array),values:Ha(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){let o=n[a];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&lg(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,r=t.length-1,s=1;for(let a=1;a<r;++a){let o=!1,l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{let c=a*n,h=c-n,d=c+n;for(let u=0;u!==n;++u){let p=e[c+u];if(p!==e[h+u]||p!==e[d+u]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];let c=a*n,h=s*n;for(let d=0;d!==n;++d)e[h+d]=e[c+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=new this.constructor(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Ke.prototype.ValueTypeName="",Ke.prototype.TimeBufferType=Float32Array,Ke.prototype.ValueBufferType=Float32Array,Ke.prototype.DefaultInterpolation=2301;class _i extends Ke{constructor(t,e,n){super(t,e,n)}}_i.prototype.ValueTypeName="bool",_i.prototype.ValueBufferType=Array,_i.prototype.DefaultInterpolation=2300,_i.prototype.InterpolantFactoryMethodLinear=void 0,_i.prototype.InterpolantFactoryMethodSmooth=void 0;class Yo extends Ke{constructor(t,e,n,i){super(t,e,n,i)}}Yo.prototype.ValueTypeName="color";class Yn extends Ke{constructor(t,e,n,i){super(t,e,n,i)}}Yn.prototype.ValueTypeName="number";class vc extends bi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)me.slerpFlat(r,0,s,l-a,s,l,o);return r}}class Zn extends Ke{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new vc(this.times,this.values,this.getValueSize(),t)}}Zn.prototype.ValueTypeName="quaternion",Zn.prototype.InterpolantFactoryMethodSmooth=void 0;class vi extends Ke{constructor(t,e,n){super(t,e,n)}}vi.prototype.ValueTypeName="string",vi.prototype.ValueBufferType=Array,vi.prototype.DefaultInterpolation=2300,vi.prototype.InterpolantFactoryMethodLinear=void 0,vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Jn extends Ke{constructor(t,e,n,i){super(t,e,n,i)}}Jn.prototype.ValueTypeName="vector";class Br{constructor(t="",e=-1,n=[],i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,a=n.length;s!==a;++s)e.push(cg(n[s]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(Ke.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,s=[];for(let a=0;a<r;a++){let o=[],l=[];o.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let c=hg(o);o=gd(o,1,c),l=gd(l,1,c),i||o[0]!==0||(o.push(r),l.push(l[0])),s.push(new Yn(".morphTargetInfluences["+e[a].name+"]",o,l).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=t.length;a<o;a++){let l=t[a],c=l.name.match(r);if(c&&c.length>1){let h=c[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let s=[];for(let a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return s}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(c,h,d,u,p){if(d.length!==0){let _=[],m=[];Rp(d,_,m,u),_.length!==0&&p.push(new c(h,_,m))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode,o=t.length||-1,l=t.hierarchy||[];for(let c=0;c<l.length;c++){let h=l[c].keys;if(h&&h.length!==0)if(h[0].morphTargets){let d={},u;for(u=0;u<h.length;u++)if(h[u].morphTargets)for(let p=0;p<h[u].morphTargets.length;p++)d[h[u].morphTargets[p]]=-1;for(let p in d){let _=[],m=[];for(let f=0;f!==h[u].morphTargets.length;++f){let v=h[u];_.push(v.time),m.push(v.morphTarget===p?1:0)}i.push(new Yn(".morphTargetInfluence["+p+"]",_,m))}o=d.length*s}else{let d=".bones["+e[c].name+"]";n(Jn,d+".position",h,"pos",i),n(Zn,d+".quaternion",h,"rot",i),n(Jn,d+".scale",h,"scl",i)}}if(i.length===0)return null;return new this(r,o,i,a)}resetDuration(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){let i=this.tracks[e];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cg(t){if(t.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return Jn;case"color":return Yo;case"quaternion":return Zn;case"bool":case"boolean":return _i;case"string":return vi}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}(t.type);if(t.times===void 0){let n=[],i=[];Rp(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var wn={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class yc{constructor(t,e,n){let i=this,r,s=!1,a=0,o=0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(c){o++,s===!1&&i.onStart!==void 0&&i.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return r?r(c):c},this.setURLModifier=function(c){return r=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var Cp=new yc;class si{constructor(t){this.manager=t!==void 0?t:Cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}si.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn={};class Lp extends Error{constructor(t,e){super(t),this.response=e}}class Xs extends si{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=wn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(kn[t]!==void 0)return void kn[t].push({onLoad:e,onProgress:n,onError:i});kn[t]=[],kn[t].push({onLoad:e,onProgress:n,onError:i});let s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then((l)=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=kn[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,_=0,m=new ReadableStream({start(f){(function v(){h.read().then(({done:y,value:g})=>{if(y)f.close();else{_+=g.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:u});for(let R=0,w=c.length;R<w;R++){let I=c[R];I.onProgress&&I.onProgress(S)}f.enqueue(g),v()}},(y)=>{f.error(y)})})()}});return new Response(m)}throw new Lp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((c)=>new DOMParser().parseFromString(c,a));case"json":return l.json();default:if(a==="")return l.text();{let c=/charset="?([^;"\s]*)"?/i.exec(a),h=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then((u)=>d.decode(u))}}}).then((l)=>{wn.add(`file:${t}`,l);let c=kn[t];delete kn[t];for(let h=0,d=c.length;h<d;h++){let u=c[h];u.onLoad&&u.onLoad(l)}}).catch((l)=>{let c=kn[t];if(c===void 0)throw this.manager.itemError(t),l;delete kn[t];for(let h=0,d=c.length;h<d;h++){let u=c[h];u.onError&&u.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var Ur=new WeakMap;class Mc extends si{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=wn.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let h=Ur.get(s);h===void 0&&(h=[],Ur.set(s,h)),h.push({onLoad:e,onError:i})}return s}let a=Dr("img");function o(){c(),e&&e(this);let h=Ur.get(this)||[];for(let d=0;d<h.length;d++){let u=h[d];u.onLoad&&u.onLoad(this)}Ur.delete(this),r.manager.itemEnd(t)}function l(h){c(),i&&i(h),wn.remove(`image:${t}`);let d=Ur.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(h)}Ur.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),wn.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Zo extends si{constructor(t){super(t)}load(t,e,n,i){let r=new he,s=new Mc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class jr extends te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jo extends jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}var eh=new wt,_d=new T,vd=new T;class jo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;_d.setFromMatrixPosition(t.matrixWorld),e.position.copy(_d),vd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vd),e.updateMatrixWorld(),eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1):n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ip extends jo{constructor(){super(new _e(50,1,0.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=2*Yi*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ko extends jr{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Ip}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}var yd=new wt,Ss=new T,nh=new T;class Pp extends jo{constructor(){super(new _e(90,1,0.5,500)),this.isPointLightShadow=!0,this._frameExtents=new it(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ss),nh.copy(n.position),nh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nh),n.updateMatrixWorld(),i.makeTranslation(-Ss.x,-Ss.y,-Ss.z),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd,n.coordinateSystem,n.reversedDepth)}}class ar extends jr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Pp}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Kr extends Bs{constructor(t=-1,e=1,n=1,i=-1,r=0.1,s=2000){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Up extends jo{constructor(){super(new Kr(-5,5,5,-5,0.5,500)),this.isDirectionalLightShadow=!0}}class Ai extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(te.DEFAULT_UP),this.updateMatrix(),this.target=new te,this.shadow=new Up}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ri{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}var ih=new WeakMap;class $o extends si{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=wn.get(`image-bitmap:${t}`);if(s!==void 0)return r.manager.itemStart(t),s.then?void s.then((l)=>{if(ih.has(s)!==!0)return e&&e(l),r.manager.itemEnd(t),l;i&&i(ih.get(s)),r.manager.itemError(t),r.manager.itemEnd(t)}):(setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s);let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return wn.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),ih.set(o,l),wn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});wn.add(`image-bitmap:${t}`,o),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var uv=new wt,dv=new wt,pv=new wt;class Sc extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Qo{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}var fv=new T,mv=new me,gv=new T,_v=new T,vv=new T;var yv=new T,Mv=new me,Sv=new T,xv=new T;class xc{constructor(t,e,n){let i,r,s;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=e}else{s+=e;let a=e/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let o=e*this._origIndex;this._mixBufferRegion(n,i,o,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let o=e,l=e+e;o!==l;++o)if(n[o]!==n[o+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=0.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]}_slerp(t,e,n,i){me.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let s=this._workIndex*r;me.multiplyQuaternionsFlat(t,s,t,e,t,n),me.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){let s=1-i;for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]*s+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let s=0;s!==r;++s){let a=e+s;t[a]=t[a]+t[n+s]*i}}}var Tc="\\[\\]\\.:\\/",ug=new RegExp("["+Tc+"]","g"),rh="[^"+Tc+"]",dg="[^"+Tc.replace("\\.","")+"]",pg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",rh)+/(WCOD+)?/.source.replace("WCOD",dg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh)+"$"),fg=["material","materials","bones","map"];class Jt{constructor(t,e,n){this.path=e,this.parsedPath=n||Jt.parseTrackName(e),this.node=Jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Jt.Composite(t,e,n):new Jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ug,"")}static parseTrackName(t){let e=pg.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);fg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let a=r[s];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=Jt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n]}if(l!==void 0){if(t[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[l]}}let s=t[i];if(s===void 0){let l=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t)}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Jt.Composite=class{constructor(t,e,n){let i=n||Jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Jt.prototype.GetterByBindingType=[Jt.prototype._getValue_direct,Jt.prototype._getValue_array,Jt.prototype._getValue_arrayElement,Jt.prototype._getValue_toArray],Jt.prototype.SetterByBindingTypeAndVersioning=[[Jt.prototype._setValue_direct,Jt.prototype._setValue_direct_setNeedsUpdate,Jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_array,Jt.prototype._setValue_array_setNeedsUpdate,Jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_arrayElement,Jt.prototype._setValue_arrayElement_setNeedsUpdate,Jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Jt.prototype._setValue_fromArray,Jt.prototype._setValue_fromArray_setNeedsUpdate,Jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ec{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,s=r.length,a=Array(s),o={endingStart:2400,endingEnd:2400};for(let l=0;l!==s;++l){let c=r[l].createInterpolant(null);a[l]=c,c.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,s=r/i,a=i/r;t.warp(1,s,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,s=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let{parameterPositions:o,sampleValues:l}=a;return o[0]=r,o[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return void this._updateWeight(t);let r=this._startTime;if(r!==null){let o=(t-r)*n;o<0||n===0?e=0:(this._startTime=null,e=n*o)}e*=this._updateTimeScale(t);let s=this._updateTime(e),a=this._updateWeight(t);if(a>0){let o=this._interpolants,l=this._propertyBindings;if(this.blendMode===2501)for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(s),l[c].accumulateAdditive(a);else for(let c=0,h=o.length;c!==h;++c)o[c].evaluate(s),l[c].accumulate(i,a)}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null)e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,s=n===2202;if(t===0)return r===-1||!s||1&~r?i:e-i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else{if(!(i<0)){this.time=i;break t}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(o===1){let l=t<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&!(1&~r))return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=t?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=e?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);let{parameterPositions:a,sampleValues:o}=s;return a[0]=r,o[0]=e,a[1]=r+t,o[1]=n,this}}var mg=new Float32Array(1);class tl extends ei{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,o=n.uuid,l=this._bindingsByRootAndName,c=l[o];c===void 0&&(c={},l[o]=c);for(let h=0;h!==r;++h){let d=i[h],u=d.name,p=c[u];if(p!==void 0)++p.referenceCount,s[h]=p;else{if(p=s[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,o,u));continue}let _=e&&e._propertyBindings[h].binding.parsedPath;p=new xc(Jt.create(n,u,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,o,u),s[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{let a=s.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],c=t._byClipCacheIndex;l._byClipCacheIndex=c,o[c]=l,o.pop(),t._byClipCacheIndex=null,delete a.actionByRoot[(t._localRoot||this._root).uuid],o.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=t._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new qo(new Float32Array(2),new Float32Array(2),1,mg),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,s=typeof t=="string"?Br.findByName(i,t):t,a=s!==null?s.uuid:t,o=this._actionsByClip[a],l=null;if(n===void 0&&(n=s!==null?s.blendMode:2500),o!==void 0){let h=o.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let c=new Ec(this,s,e,n);return this._bindAction(c,l),this._addInactiveAction(c,a,r),c}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?Br.findByName(n,t):t,s=r?r.uuid:t,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,s);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let a=0,o=s.length;a!==o;++a){let l=s[a];this._deactivateAction(l);let c=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=c,e[c]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let r in n){let s=n[r].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let i=this._bindingsByRootAndName[e];if(i!==void 0)for(let r in i){let s=i[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}var Md=new wt;class el{constructor(t,e,n=0,i=1/0){this.ray=new er(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Md.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Md),this}intersectObject(t,e=!0,n=[]){return hh(t,this,n,e),n.sort(Sd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)hh(t[i],this,n,e);return n.sort(Sd),n}}function Sd(t,e){return t.distance-e.distance}function hh(t,e,n,i){let r=!0;if(t.layers.test(e.layers))t.raycast(e,n)===!1&&(r=!1);if(r===!0&&i===!0){let s=t.children;for(let a=0,o=s.length;a<o;a++)hh(s[a],e,n,!0)}}class qs{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ut(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ut(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}var Tv=new it;var Ev=new T,wv=new T,bv=new T,Av=new T,Rv=new T,Cv=new T,Lv=new T;var Iv=new T;var Pv=new T,Uv=new wt,Nv=new wt;var Fv=new T,Dv=new vt,Ov=new vt;var Bv=new T,zv=new T,Vv=new T;var Hv=new T,Gv=new Bs;var Wv=new Ue;var kv=new T;function wc(t,e,n,i){let r=function(s){switch(s){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${s}.`)}(i);switch(n){case 1021:return t*e;case 1028:case 1029:return t*e/r.components*r.byteLength;case 1030:case 1031:return t*e*2/r.components*r.byteLength;case 1022:return t*e*3/r.components*r.byteLength;case 1023:case 1033:return t*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");function rf(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _g(t){let e=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let i=e.get(n);i&&(t.deleteBuffer(i.buffer),e.delete(n))},update:function(n,i){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let s=e.get(n);return void((!s||s.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}let r=e.get(n);if(r===void 0)e.set(n,function(s,a){let{array:o,usage:l}=s,c=o.byteLength,h=t.createBuffer(),d;if(t.bindBuffer(a,h),t.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=t.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?t.HALF_FLOAT:t.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=t.SHORT;else if(o instanceof Uint32Array)d=t.UNSIGNED_INT;else if(o instanceof Int32Array)d=t.INT;else if(o instanceof Int8Array)d=t.BYTE;else if(o instanceof Uint8Array)d=t.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=t.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}}(n,i));else if(r.version<n.version){if(r.size!==n.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let{array:l,updateRanges:c}=a;if(t.bindBuffer(o,s),c.length===0)t.bufferSubData(o,0,l);else{c.sort((d,u)=>d.start-u.start);let h=0;for(let d=1;d<c.length;d++){let u=c[h],p=c[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,c[h]=p)}c.length=h+1;for(let d=0,u=c.length;d<u;d++){let p=c[d];t.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,n,i),r.version=n.version}}}}var Ft={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},pt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new it(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},In={basic:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ne([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ne([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ne([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new vt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ne([pt.points,pt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ne([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ne([pt.common,pt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ne([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ne([pt.sprite,pt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ne([pt.common,pt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ne([pt.lights,pt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};In.physical={uniforms:Ne([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var nl={r:0,b:0,g:0},or=new Ge,vg=new wt;function yg(t,e,n,i,r,s,a){let o=new vt(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function _(f){let v=f.isScene===!0?f.background:null;if(v&&v.isTexture)v=(f.backgroundBlurriness>0?n:e).get(v);return v}function m(f,v){f.getRGB(nl,ic(t)),i.buffers.color.setClear(nl.r,nl.g,nl.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(f,v=1){o.set(f),h=v,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,m(o,h)},render:function(f){let v=!1,y=_(f);y===null?m(o,h):y&&y.isColor&&(m(y,1),v=!0);let g=t.xr.getEnvironmentBlendMode();g==="additive"?i.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))},addToRenderList:function(f,v){let y=_(v);y&&(y.isCubeTexture||y.mapping===Is)?(c===void 0&&(c=new ce(new ii(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:nr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(g,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),or.copy(v.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(or)),c.material.toneMapped=Wt.getTransfer(y.colorSpace)!==ee,d===y&&u===y.version&&p===t.toneMapping||(c.material.needsUpdate=!0,d=y,u=y.version,p=t.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ce(new ri(2,2),new Cn({name:"BackgroundMaterial",uniforms:nr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(y.colorSpace)!==ee,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),d===y&&u===y.version&&p===t.toneMapping||(l.material.needsUpdate=!0,d=y,u=y.version,p=t.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function Mg(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=c(null),s=r,a=!1;function o(v){return t.bindVertexArray(v)}function l(v){return t.deleteVertexArray(v)}function c(v){let y=[],g=[],S=[];for(let R=0;R<n;R++)y[R]=0,g[R]=0,S[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:g,attributeDivisors:S,object:v,attributes:{},index:null}}function h(){let v=s.newAttributes;for(let y=0,g=v.length;y<g;y++)v[y]=0}function d(v){u(v,0)}function u(v,y){let{newAttributes:g,enabledAttributes:S,attributeDivisors:R}=s;g[v]=1,S[v]===0&&(t.enableVertexAttribArray(v),S[v]=1),R[v]!==y&&(t.vertexAttribDivisor(v,y),R[v]=y)}function p(){let{newAttributes:v,enabledAttributes:y}=s;for(let g=0,S=y.length;g<S;g++)y[g]!==v[g]&&(t.disableVertexAttribArray(g),y[g]=0)}function _(v,y,g,S,R,w,I){I===!0?t.vertexAttribIPointer(v,y,g,R,w):t.vertexAttribPointer(v,y,g,S,R,w)}function m(){f(),a=!0,s!==r&&(s=r,o(s.object))}function f(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(v,y,g,S,R){let w=!1,I=function(V,P,F){let N=F.wireframe===!0,G=i[V.id];G===void 0&&(G={},i[V.id]=G);let Z=G[P.id];Z===void 0&&(Z={},G[P.id]=Z);let X=Z[N];return X===void 0&&(X=c(t.createVertexArray()),Z[N]=X),X}(S,g,y);s!==I&&(s=I,o(s.object)),w=function(V,P,F,N){let G=s.attributes,Z=P.attributes,X=0,j=F.getAttributes();for(let k in j)if(j[k].location>=0){let B=G[k],q=Z[k];if(q===void 0&&(k==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),k==="instanceColor"&&V.instanceColor&&(q=V.instanceColor)),B===void 0)return!0;if(B.attribute!==q)return!0;if(q&&B.data!==q.data)return!0;X++}return s.attributesNum!==X||s.index!==N}(v,S,g,R),w&&function(V,P,F,N){let G={},Z=P.attributes,X=0,j=F.getAttributes();for(let k in j)if(j[k].location>=0){let B=Z[k];B===void 0&&(k==="instanceMatrix"&&V.instanceMatrix&&(B=V.instanceMatrix),k==="instanceColor"&&V.instanceColor&&(B=V.instanceColor));let q={};q.attribute=B,B&&B.data&&(q.data=B.data),G[k]=q,X++}s.attributes=G,s.attributesNum=X,s.index=N}(v,S,g,R),R!==null&&e.update(R,t.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,function(V,P,F,N){h();let G=N.attributes,Z=F.getAttributes(),X=P.defaultAttributeValues;for(let j in Z){let k=Z[j];if(k.location>=0){let B=G[j];if(B===void 0&&(j==="instanceMatrix"&&V.instanceMatrix&&(B=V.instanceMatrix),j==="instanceColor"&&V.instanceColor&&(B=V.instanceColor)),B!==void 0){let{normalized:q,itemSize:at}=B,ft=e.get(B);if(ft===void 0)continue;let{buffer:Q,type:K,bytesPerElement:mt}=ft,lt=K===t.INT||K===t.UNSIGNED_INT||B.gpuType===mh;if(B.isInterleavedBufferAttribute){let rt=B.data,ht=rt.stride,gt=B.offset;if(rt.isInstancedInterleavedBuffer){for(let A=0;A<k.locationSize;A++)u(k.location+A,rt.meshPerAttribute);V.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let A=0;A<k.locationSize;A++)d(k.location+A);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let A=0;A<k.locationSize;A++)_(k.location+A,at/k.locationSize,K,q,ht*mt,(gt+at/k.locationSize*A)*mt,lt)}else{if(B.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)u(k.location+rt,B.meshPerAttribute);V.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let rt=0;rt<k.locationSize;rt++)d(k.location+rt);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let rt=0;rt<k.locationSize;rt++)_(k.location+rt,at/k.locationSize,K,q,at*mt,at/k.locationSize*rt*mt,lt)}}else if(X!==void 0){let q=X[j];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(k.location,q);break;case 3:t.vertexAttrib3fv(k.location,q);break;case 4:t.vertexAttrib4fv(k.location,q);break;default:t.vertexAttrib1fv(k.location,q)}}}}p()}(v,y,g,S),R!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:m,resetDefaultState:f,dispose:function(){m();for(let v in i){let y=i[v];for(let g in y){let S=y[g];for(let R in S)l(S[R].object),delete S[R];delete y[g]}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let y=i[v.id];for(let g in y){let S=y[g];for(let R in S)l(S[R].object),delete S[R];delete y[g]}delete i[v.id]},releaseStatesOfProgram:function(v){for(let y in i){let g=i[y];if(g[v.id]===void 0)continue;let S=g[v.id];for(let R in S)l(S[R].object),delete S[R];delete g[v.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function Sg(t,e,n){let i;function r(s,a,o){o!==0&&(t.drawArraysInstanced(i,s,a,o),n.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){t.drawArrays(i,s,a),n.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];n.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)r(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*l[d];n.update(h,i,1)}}}function xg(t,e,n,i){let r;function s(u){if(u==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=n.precision!==void 0?n.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=n.logarithmicDepthBuffer===!0,c=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(u){return u===Rn||i.convert(u)===t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Si&&i.convert(u)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==xi&&!p)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxCubemapSize:t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:t.getParameter(t.MAX_VERTEX_ATTRIBS),maxVertexUniforms:t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:t.getParameter(t.MAX_VARYING_VECTORS),maxFragmentUniforms:t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:t.getParameter(t.MAX_SAMPLES)}}function Tg(t){let e=this,n=null,i=0,r=!1,s=!1,a=new Xn,o=new Nt,l={value:null,needsUpdate:!1};function c(h,d,u,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let f=u+4*_,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,g=u;y!==_;++y,g+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||r;return r=d,i=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,u){let{clippingPlanes:p,clipIntersection:_,clipShadows:m}=h,f=t.get(h);if(!r||p===null||p.length===0||s&&!m)s?c(null):function(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let v=s?0:i,y=4*v,g=f.clippingState||null;l.value=g,g=c(p,d,y,u);for(let S=0;S!==y;++S)g[S]=n[S];f.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}}}function Eg(t){let e=new WeakMap;function n(r,s){return s===eo?r.mapping=Vr:s===no&&(r.mapping=Ki),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===eo||s===no){if(e.has(r))return n(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new sc(a.height);return o.fromEquirectangularTexture(t,r),e.set(r,o),r.addEventListener("dispose",i),n(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Np=[0.125,0.215,0.35,0.446,0.526,0.582],Ys=20,bc=new Kr,Fp=new vt,Ac=null,Rc=0,Cc=0,Lc=!1,hr=(1+Math.sqrt(5))/2,$r=1/hr,Dp=[new T(-hr,$r,0),new T(hr,$r,0),new T(-$r,0,hr),new T($r,0,hr),new T(0,hr,-$r),new T(0,hr,$r),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],wg=new T;class Pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=0.1,i=100,r={}){let{size:s=256,position:a=wg}=r;Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,Rc,Cc),this._renderer.xr.enabled=Lc,t.scissorTest=!1,il(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vr||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Us,format:Rn,colorSpace:ze,depthBuffer:!1},i=Op(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){let a=[],o=[],l=[],c=s,h=s-4+1+Np.length;for(let d=0;d<h;d++){let u=Math.pow(2,c);o.push(u);let p=1/u;d>s-4?p=Np[d-s+4-1]:d===0&&(p=0),l.push(p);let _=1/(u-2),m=-_,f=1+_,v=[m,m,f,m,f,f,m,m,f,f,m,f],y=6,g=6,S=3,R=2,w=1,I=new Float32Array(S*g*y),V=new Float32Array(R*g*y),P=new Float32Array(w*g*y);for(let N=0;N<y;N++){let G=N%3*2/3-1,Z=N>2?0:-1,X=[G,Z,0,G+0.6666666666666666,Z,0,G+0.6666666666666666,Z+1,0,G,Z,0,G+0.6666666666666666,Z+1,0,G,Z+1,0];I.set(X,S*g*N),V.set(v,R*g*N);let j=[N,N,N,N,N,N];P.set(j,w*g*N)}let F=new Kt;F.setAttribute("position",new ae(I,S)),F.setAttribute("uv",new ae(V,R)),F.setAttribute("faceIndex",new ae(P,w)),a.push(F),c>4&&c--}return{lodPlanes:a,sizeLods:o,sigmas:l}}(r)),this._blurMaterial=function(s,a,o){let l=new Float32Array(Ys),c=new T(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ys,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/o,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}(r,t,e)}return i}_compileMaterial(t){let e=new ce(this._lodPlanes[0],t);this._renderer.compile(e,bc)}_sceneToCubeUV(t,e,n,i,r){let s=new _e(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Fp),l.toneMapping=jn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new Ae({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),u=new ce(new ii,d),p=!1,_=t.background;_?_.isColor&&(d.color.copy(_),t.background=null,p=!0):(d.color.copy(Fp),p=!0);for(let m=0;m<6;m++){let f=m%3;f===0?(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[m],r.y,r.z)):f===1?(s.up.set(0,0,a[m]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[m],r.z)):(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[m]));let v=this._cubeSize;il(i,f*v,m>2?v:0,v,v),l.setRenderTarget(i),p&&l.render(u,s),l.render(t,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Vr||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());let r=i?this._cubemapMaterial:this._equirectMaterial,s=new ce(this._lodPlanes[0],r);r.uniforms.envMap.value=t;let a=this._cubeSize;il(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(s,bc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dp[(i-r-1)%Dp.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,i,r){let s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new ce(this._lodPlanes[i],l),h=l.uniforms,d=this._sizeLods[n]-1,u=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,p=r/u,_=isFinite(r)?1+Math.floor(3*p):Ys;_>Ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],f=0;for(let g=0;g<Ys;++g){let S=g/p,R=Math.exp(-S*S/2);m.push(R),g===0?f+=R:g<_&&(f+=2*R)}for(let g=0;g<m.length;g++)m[g]=m[g]/f;h.envMap.value=t.texture,h.samples.value=_,h.weights.value=m,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:v}=this;h.dTheta.value=u,h.mipInt.value=v-n;let y=this._sizeLods[i];il(e,3*y*(i>v-4?i-v+4:0),4*(this._cubeSize-y),3*y,2*y),o.setRenderTarget(e),o.render(c,bc)}}function Op(t,e,n){let i=new ni(t,e,n);return i.texture.mapping=Is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Bp(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function zp(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function bg(t){let e=new WeakMap,n=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===eo||s===no,o=s===Vr||s===Ki;if(a||o){let l=e.get(r),c=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return n===null&&(n=new Pc(t)),l=a?n.fromEquirectangular(r,l):n.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&function(d){let u=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&u++;return u===p}(h)?(n===null&&(n=new Pc(t)),l=a?n.fromEquirectangular(r):n.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",i),l.texture):null}}}return r},dispose:function(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function Ag(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Zi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Rg(t,e,n,i){let r={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);c.removeEventListener("dispose",a),delete r[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,n.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let m=h.array;u=h.version;for(let f=0,v=m.length;f<v;f+=3){let y=m[f+0],g=m[f+1],S=m[f+2];c.push(y,g,g,S,S,y)}}else{if(d===void 0)return;{let m=d.array;u=d.version;for(let f=0,v=m.length/3-1;f<v;f+=3){let y=f+0,g=f+1,S=f+2;c.push(y,g,g,S,S,y)}}}let p=new((Qh(c))?mo:fo)(c,1);p.version=u;let _=s.get(l);_&&e.remove(_),s.set(l,p)}return{get:function(l,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,n.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],t.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Cg(t,e,n){let i,r,s;function a(o,l,c){c!==0&&(t.drawElementsInstanced(i,l,r,o*s,c),n.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){t.drawElements(i,l,r,o*s),n.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,c);let h=0;for(let d=0;d<c;d++)h+=l[d];n.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,l[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=l[p]*h[p];n.update(u,i,1)}}}function Lg(t){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3);break;case t.LINES:e.lines+=r*(n/2);break;case t.LINE_STRIP:e.lines+=r*(n-1);break;case t.LINE_LOOP:e.lines+=r*n;break;case t.POINTS:e.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Ig(t,e,n){let i=new WeakMap,r=new jt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,d=i.get(a);if(d===void 0||d.count!==h){let V=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;u===!0&&(y=1),p===!0&&(y=2),_===!0&&(y=3);let g=a.attributes.position.count*y,S=1;g>e.maxTextureSize&&(S=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let R=new Float32Array(g*S*4*h),w=new po(R,g,S,h);w.type=xi,w.needsUpdate=!0;let I=4*y;for(let P=0;P<h;P++){let F=m[P],N=f[P],G=v[P],Z=g*S*4*P;for(let X=0;X<F.count;X++){let j=X*I;u===!0&&(r.fromBufferAttribute(F,X),R[Z+j+0]=r.x,R[Z+j+1]=r.y,R[Z+j+2]=r.z,R[Z+j+3]=0),p===!0&&(r.fromBufferAttribute(N,X),R[Z+j+4]=r.x,R[Z+j+5]=r.y,R[Z+j+6]=r.z,R[Z+j+7]=0),_===!0&&(r.fromBufferAttribute(G,X),R[Z+j+8]=r.x,R[Z+j+9]=r.y,R[Z+j+10]=r.z,R[Z+j+11]=G.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new it(g,S)},i.set(a,d),a.addEventListener("dispose",V)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(t,"morphTargetBaseInfluence",p),o.getUniforms().setValue(t,"morphTargetInfluences",l)}o.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}}}function Pg(t,e,n,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),n.remove(o.instanceMatrix),o.instanceColor!==null&&n.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(r.get(c)!==o&&(e.update(c),r.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,t.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return c},dispose:function(){r=new WeakMap}}}var sf=new he,Vp=new To(1,1),af=new po,of=new nc,lf=new go,Hp=[],Gp=[],Wp=new Float32Array(16),kp=new Float32Array(9),Xp=new Float32Array(4);function Qr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Hp[r];if(s===void 0&&(s=new Float32Array(r),Hp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function ve(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ye(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sl(t,e){let n=Gp[e];n===void 0&&(n=new Int32Array(e),Gp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ug(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ng(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ve(n,e))return;t.uniform2fv(this.addr,e),ye(n,e)}}function Fg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ve(n,e))return;t.uniform3fv(this.addr,e),ye(n,e)}}function Dg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ve(n,e))return;t.uniform4fv(this.addr,e),ye(n,e)}}function Og(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ve(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ye(n,e)}else{if(ve(n,i))return;Xp.set(i),t.uniformMatrix2fv(this.addr,!1,Xp),ye(n,i)}}function Bg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ve(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ye(n,e)}else{if(ve(n,i))return;kp.set(i),t.uniformMatrix3fv(this.addr,!1,kp),ye(n,i)}}function zg(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ve(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ye(n,e)}else{if(ve(n,i))return;Wp.set(i),t.uniformMatrix4fv(this.addr,!1,Wp),ye(n,i)}}function Vg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Hg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ve(n,e))return;t.uniform2iv(this.addr,e),ye(n,e)}}function Gg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ve(n,e))return;t.uniform3iv(this.addr,e),ye(n,e)}}function Wg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ve(n,e))return;t.uniform4iv(this.addr,e),ye(n,e)}}function kg(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Xg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ve(n,e))return;t.uniform2uiv(this.addr,e),ye(n,e)}}function qg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ve(n,e))return;t.uniform3uiv(this.addr,e),ye(n,e)}}function Yg(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ve(n,e))return;t.uniform4uiv(this.addr,e),ye(n,e)}}function Zg(t,e,n){let i=this.cache,r=n.allocateTextureUnit(),s;i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),this.type===t.SAMPLER_2D_SHADOW?(Vp.compareFunction=jh,s=Vp):s=sf,n.setTexture2D(e||s,r)}function Jg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||of,r)}function jg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||lf,r)}function Kg(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||af,r)}function $g(t,e){t.uniform1fv(this.addr,e)}function Qg(t,e){let n=Qr(e,this.size,2);t.uniform2fv(this.addr,n)}function t0(t,e){let n=Qr(e,this.size,3);t.uniform3fv(this.addr,n)}function e0(t,e){let n=Qr(e,this.size,4);t.uniform4fv(this.addr,n)}function n0(t,e){let n=Qr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function i0(t,e){let n=Qr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function r0(t,e){let n=Qr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function s0(t,e){t.uniform1iv(this.addr,e)}function a0(t,e){t.uniform2iv(this.addr,e)}function o0(t,e){t.uniform3iv(this.addr,e)}function l0(t,e){t.uniform4iv(this.addr,e)}function h0(t,e){t.uniform1uiv(this.addr,e)}function c0(t,e){t.uniform2uiv(this.addr,e)}function u0(t,e){t.uniform3uiv(this.addr,e)}function d0(t,e){t.uniform4uiv(this.addr,e)}function p0(t,e,n){let i=this.cache,r=e.length,s=sl(n,r);ve(i,s)||(t.uniform1iv(this.addr,s),ye(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||sf,s[a])}function f0(t,e,n){let i=this.cache,r=e.length,s=sl(n,r);ve(i,s)||(t.uniform1iv(this.addr,s),ye(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||of,s[a])}function m0(t,e,n){let i=this.cache,r=e.length,s=sl(n,r);ve(i,s)||(t.uniform1iv(this.addr,s),ye(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||lf,s[a])}function g0(t,e,n){let i=this.cache,r=e.length,s=sl(n,r);ve(i,s)||(t.uniform1iv(this.addr,s),ye(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||af,s[a])}class hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=function(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return Fg;case 35666:return Dg;case 35674:return Og;case 35675:return Bg;case 35676:return zg;case 5124:case 35670:return Vg;case 35667:case 35671:return Hg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return kg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Kg}}(e.type)}}class cf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(i){switch(i){case 5126:return $g;case 35664:return Qg;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return r0;case 5124:case 35670:return s0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return h0;case 36294:return c0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}(e.type)}}class uf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let a=i[r];a.setValue(t,e[a.id],n)}}}var Ic=/(\w+)(\])?(\[|\.)?/g;function qp(t,e){t.seq.push(e),t.map[e.id]=e}function _0(t,e,n){let i=t.name,r=i.length;for(Ic.lastIndex=0;;){let s=Ic.exec(i),a=Ic.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===r){qp(n,c===void 0?new hf(o,t,e):new cf(o,t,e));break}{let h=n.map[o];h===void 0&&(h=new uf(o),qp(n,h)),n=h}}}class Js{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i);_0(r,t.getUniformLocation(e,r.name),this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){let a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.id in e&&n.push(s)}return n}}function Yp(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var v0=0,Zp=new Nt;function Jp(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let _=p+1;h.push(`${_===l?">":" "} ${_}: ${c[p]}`)}return h.join(`
`)}(t.getShaderSource(e),a)}return r}function y0(t,e){let n=function(i){Wt._getMatrix(Zp,Wt.workingColorSpace,i);let r=`mat3( ${Zp.elements.map((s)=>s.toFixed(4))} )`;switch(Wt.getTransfer(i)){case Jh:return[r,"LinearTransferOETF"];case ee:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}}(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function M0(t,e){let n;switch(e){case Zd:n="Linear";break;case Jd:n="Reinhard";break;case jd:n="Cineon";break;case to:n="ACESFilmic";break;case $d:n="AgX";break;case Qd:n="Neutral";break;case Kd:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var rl=new T;function S0(){return Wt.getLuminanceCoefficients(rl),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${rl.x.toFixed(4)}, ${rl.y.toFixed(4)}, ${rl.z.toFixed(4)} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Zs(t){return t!==""}function jp(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var x0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(t){return t.replace(x0,E0)}var T0=new Map;function E0(t,e){let n=Ft[e];if(n===void 0){let i=T0.get(e);if(i===void 0)throw Error("Can not resolve #include <"+e+">");n=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Uc(n)}var w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(t){return t.replace(w0,b0)}function b0(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function A0(t,e,n,i){let r=t.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,l=function(N){let G="SHADOWMAP_TYPE_BASIC";return N.shadowMapType===uh?G="SHADOWMAP_TYPE_PCF":N.shadowMapType===qa?G="SHADOWMAP_TYPE_PCF_SOFT":N.shadowMapType===bn&&(G="SHADOWMAP_TYPE_VSM"),G}(n),c=function(N){let G="ENVMAP_TYPE_CUBE";if(N.envMap)switch(N.envMapMode){case Vr:case Ki:G="ENVMAP_TYPE_CUBE";break;case Is:G="ENVMAP_TYPE_CUBE_UV"}return G}(n),h=function(N){let G="ENVMAP_MODE_REFLECTION";return N.envMap&&N.envMapMode===Ki&&(G="ENVMAP_MODE_REFRACTION"),G}(n),d=function(N){let G="ENVMAP_BLENDING_NONE";if(N.envMap)switch(N.combine){case Xd:G="ENVMAP_BLENDING_MULTIPLY";break;case qd:G="ENVMAP_BLENDING_MIX";break;case Yd:G="ENVMAP_BLENDING_ADD"}return G}(n),u=function(N){let G=N.envMapCubeUVHeight;if(G===null)return null;let Z=Math.log2(G)-2,X=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:X,maxMip:Z}}(n),p=function(N){return[N.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",N.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}(n),_=function(N){let G=[];for(let Z in N){let X=N[Z];X!==!1&&G.push("#define "+Z+" "+X)}return G.join(`
`)}(s),m=r.createProgram(),f,v,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zs).join(`
`),f.length>0&&(f+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Zs).join(`
`),v.length>0&&(v+=`
`)):(f=[Qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),v=[Qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==jn?"#define TONE_MAPPING":"",n.toneMapping!==jn?Ft.tonemapping_pars_fragment:"",n.toneMapping!==jn?M0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,y0("linearToOutputTexel",n.outputColorSpace),S0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zs).join(`
`)),a=Uc(a),a=jp(a,n),a=Kp(a,n),o=Uc(o),o=jp(o,n),o=Kp(o,n),a=$p(a),o=$p(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let g=y+f+a,S=y+v+o,R=Yp(r,r.VERTEX_SHADER,g),w=Yp(r,r.FRAGMENT_SHADER,S);function I(N){if(t.debug.checkShaderErrors){let G=r.getProgramInfoLog(m)||"",Z=r.getShaderInfoLog(R)||"",X=r.getShaderInfoLog(w)||"",j=G.trim(),k=Z.trim(),B=X.trim(),q=!0,at=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,R,w);else{let ft=Jp(r,R,"vertex"),Q=Jp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+ft+`
`+Q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):k!==""&&B!==""||(at=!1);at&&(N.diagnostics={runnable:q,programLog:j,vertexShader:{log:k,prefix:f},fragmentShader:{log:B,prefix:v}})}r.deleteShader(R),r.deleteShader(w),V=new Js(r,m),P=function(G,Z){let X={},j=G.getProgramParameter(Z,G.ACTIVE_ATTRIBUTES);for(let k=0;k<j;k++){let B=G.getActiveAttrib(Z,k),q=B.name,at=1;B.type===G.FLOAT_MAT2&&(at=2),B.type===G.FLOAT_MAT3&&(at=3),B.type===G.FLOAT_MAT4&&(at=4),X[q]={type:B.type,location:G.getAttribLocation(Z,q),locationSize:at}}return X}(r,m)}let V,P;r.attachShader(m,R),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return V===void 0&&I(this),V},this.getAttributes=function(){return P===void 0&&I(this),P};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(m,37297)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=v0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=w,this}var R0=0;class df{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pf(t),e.set(t,n)),n}}class pf{constructor(t){this.id=R0++,this.code=t,this.usedTimes=0}}function C0(t,e,n,i,r,s,a){let o=new Os,l=new df,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return c.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,v,y,g,S){let R=g.fog,w=S.geometry,I=f.isMeshStandardMaterial?g.environment:null,V=(f.isMeshStandardMaterial?n:e).get(f.envMap||I),P=V&&V.mapping===Is?V.image.height:null,F=_[f.type];f.precision!==null&&(p=r.getMaxPrecision(f.precision),p!==f.precision&&console.warn("THREE.WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let N=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,G=N!==void 0?N.length:0,Z,X,j,k,B=0;if(w.morphAttributes.position!==void 0&&(B=1),w.morphAttributes.normal!==void 0&&(B=2),w.morphAttributes.color!==void 0&&(B=3),F){let Zt=In[F];Z=Zt.vertexShader,X=Zt.fragmentShader}else Z=f.vertexShader,X=f.fragmentShader,l.update(f),j=l.getVertexShaderID(f),k=l.getFragmentShaderID(f);let q=t.getRenderTarget(),at=t.state.buffers.depth.getReversed(),ft=S.isInstancedMesh===!0,Q=S.isBatchedMesh===!0,K=!!f.map,mt=!!f.matcap,lt=!!V,rt=!!f.aoMap,ht=!!f.lightMap,gt=!!f.bumpMap,A=!!f.normalMap,x=!!f.displacementMap,C=!!f.emissiveMap,O=!!f.metalnessMap,M=!!f.roughnessMap,L=f.anisotropy>0,E=f.clearcoat>0,U=f.dispersion>0,z=f.iridescence>0,H=f.sheen>0,W=f.transmission>0,ot=L&&!!f.anisotropyMap,ut=E&&!!f.clearcoatMap,tt=E&&!!f.clearcoatNormalMap,st=E&&!!f.clearcoatRoughnessMap,yt=z&&!!f.iridescenceMap,Et=z&&!!f.iridescenceThicknessMap,Pt=H&&!!f.sheenColorMap,Bt=H&&!!f.sheenRoughnessMap,Ct=!!f.specularMap,et=!!f.specularColorMap,dt=!!f.specularIntensityMap,xt=W&&!!f.transmissionMap,Le=W&&!!f.thicknessMap,St=!!f.gradientMap,zt=!!f.alphaMap,kt=f.alphaTest>0,li=!!f.alphaHash,D=!!f.extensions,Oe=jn;f.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(Oe=t.toneMapping));let xe={shaderID:F,shaderType:f.type,shaderName:f.name,vertexShader:Z,fragmentShader:X,defines:f.defines,customVertexShaderID:j,customFragmentShaderID:k,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:Q,batchingColor:Q&&S._colorsTexture!==null,instancing:ft,instancingColor:ft&&S.instanceColor!==null,instancingMorph:ft&&S.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:q===null?t.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ze,alphaToCoverage:!!f.alphaToCoverage,map:K,matcap:mt,envMap:lt,envMapMode:lt&&V.mapping,envMapCubeUVHeight:P,aoMap:rt,lightMap:ht,bumpMap:gt,normalMap:A,displacementMap:u&&x,emissiveMap:C,normalMapObjectSpace:A&&f.normalMapType===cp,normalMapTangentSpace:A&&f.normalMapType===hp,metalnessMap:O,roughnessMap:M,anisotropy:L,anisotropyMap:ot,clearcoat:E,clearcoatMap:ut,clearcoatNormalMap:tt,clearcoatRoughnessMap:st,dispersion:U,iridescence:z,iridescenceMap:yt,iridescenceThicknessMap:Et,sheen:H,sheenColorMap:Pt,sheenRoughnessMap:Bt,specularMap:Ct,specularColorMap:et,specularIntensityMap:dt,transmission:W,transmissionMap:xt,thicknessMap:Le,gradientMap:St,opaque:f.transparent===!1&&f.blending===Cs&&f.alphaToCoverage===!1,alphaMap:zt,alphaTest:kt,alphaHash:li,combine:f.combine,mapUv:K&&m(f.map.channel),aoMapUv:rt&&m(f.aoMap.channel),lightMapUv:ht&&m(f.lightMap.channel),bumpMapUv:gt&&m(f.bumpMap.channel),normalMapUv:A&&m(f.normalMap.channel),displacementMapUv:x&&m(f.displacementMap.channel),emissiveMapUv:C&&m(f.emissiveMap.channel),metalnessMapUv:O&&m(f.metalnessMap.channel),roughnessMapUv:M&&m(f.roughnessMap.channel),anisotropyMapUv:ot&&m(f.anisotropyMap.channel),clearcoatMapUv:ut&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:tt&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&m(f.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&m(f.sheenRoughnessMap.channel),specularMapUv:Ct&&m(f.specularMap.channel),specularColorMapUv:et&&m(f.specularColorMap.channel),specularIntensityMapUv:dt&&m(f.specularIntensityMap.channel),transmissionMapUv:xt&&m(f.transmissionMap.channel),thicknessMapUv:Le&&m(f.thicknessMap.channel),alphaMapUv:zt&&m(f.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(A||L),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!w.attributes.uv&&(K||zt),fog:!!R,useFog:f.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:at,skinning:S.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:B,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:t.shadowMap.enabled&&y.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:K&&f.map.isVideoTexture===!0&&Wt.getTransfer(f.map.colorSpace)===ee,decodeVideoTextureEmissive:C&&f.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(f.emissiveMap.colorSpace)===ee,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===be,flipSided:f.side===$e,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:D&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(D&&f.extensions.multiDraw===!0||Q)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe},getProgramCacheKey:function(f){let v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(let y in f.defines)v.push(y),v.push(f.defines[y]);return f.isRawShaderMaterial===!1&&(function(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)}(v,f),function(y,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),g.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),y.push(o.mask)}(v,f),v.push(t.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()},getUniforms:function(f){let v=_[f.type],y;if(v){let g=In[v];y=Sp.clone(g.uniforms)}else y=f.uniforms;return y},acquireProgram:function(f,v){let y;for(let g=0,S=h.length;g<S;g++){let R=h[g];if(R.cacheKey===v){y=R,++y.usedTimes;break}}return y===void 0&&(y=new A0(t,v,f,s),h.push(y)),y},releaseProgram:function(f){if(--f.usedTimes===0){let v=h.indexOf(f);h[v]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){l.remove(f)},programs:h,dispose:function(){l.dispose()}}}function L0(){let t=new WeakMap;return{has:function(e){return t.has(e)},get:function(e){let n=t.get(e);return n===void 0&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=i},dispose:function(){t=new WeakMap}}}function I0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ef(){let t=[],e=0,n=[],i=[],r=[];function s(a,o,l,c,h,d){let u=t[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},t[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:n,transmissive:i,transparent:r,init:function(){e=0,n.length=0,i.length=0,r.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?i.push(u):l.transparent===!0?r.push(u):n.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?i.unshift(u):l.transparent===!0?r.unshift(u):n.unshift(u)},finish:function(){for(let a=e,o=t.length;a<o;a++){let l=t[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){n.length>1&&n.sort(a||I0),i.length>1&&i.sort(o||tf),r.length>1&&r.sort(o||tf)}}}function P0(){let t=new WeakMap;return{get:function(e,n){let i=t.get(e),r;return i===void 0?(r=new ef,t.set(e,[r])):n>=i.length?(r=new ef,i.push(r)):r=i[n],r},dispose:function(){t=new WeakMap}}}function U0(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new T,color:new vt};break;case"SpotLight":n={position:new T,direction:new T,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new T,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new T,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new T,halfWidth:new T,halfHeight:new T}}return t[e.id]=n,n}}}var N0=0;function F0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function D0(t){let e=new U0,n=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1000}}return o[l.id]=c,c}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new T);let r=new T,s=new wt,a=new wt;return{setup:function(o){let l=0,c=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,u=0,p=0,_=0,m=0,f=0,v=0,y=0,g=0,S=0,R=0;o.sort(F0);for(let I=0,V=o.length;I<V;I++){let P=o[I],F=P.color,N=P.intensity,G=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=F.r*N,c+=F.g*N,h+=F.b*N;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],N);R++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,k=n.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=P.shadow.matrix,f++}i.directional[d]=X,d++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(N),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[p]=X;let j=P.shadow;if(P.map&&(i.spotLightMap[g]=P.map,g++,j.updateMatrices(P),P.castShadow&&S++),i.spotLightMatrix[p]=j.matrix,P.castShadow){let k=n.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[p]=k,i.spotShadowMap[p]=Z,y++}p++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(F).multiplyScalar(N),X.halfWidth.set(0.5*P.width,0,0),X.halfHeight.set(0,0.5*P.height,0),i.rectArea[_]=X,_++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let j=P.shadow,k=n.get(P);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[u]=k,i.pointShadowMap[u]=Z,i.pointShadowMatrix[u]=P.shadow.matrix,v++}i.point[u]=X,u++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(N),X.groundColor.copy(P.groundColor).multiplyScalar(N),i.hemi[m]=X,m++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let w=i.hash;w.directionalLength===d&&w.pointLength===u&&w.spotLength===p&&w.rectAreaLength===_&&w.hemiLength===m&&w.numDirectionalShadows===f&&w.numPointShadows===v&&w.numSpotShadows===y&&w.numSpotMaps===g&&w.numLightProbes===R||(i.directional.length=d,i.spot.length=p,i.rectArea.length=_,i.point.length=u,i.hemi.length=m,i.directionalShadow.length=f,i.directionalShadowMap.length=f,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=f,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+g-S,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=R,w.directionalLength=d,w.pointLength=u,w.spotLength=p,w.rectAreaLength=_,w.hemiLength=m,w.numDirectionalShadows=f,w.numPointShadows=v,w.numSpotShadows=y,w.numSpotMaps=g,w.numLightProbes=R,i.version=N0++)},setupView:function(o,l){let c=0,h=0,d=0,u=0,p=0,_=l.matrixWorldInverse;for(let m=0,f=o.length;m<f;m++){let v=o[m];if(v.isDirectionalLight){let y=i.directional[c];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),c++}else if(v.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(v.isRectAreaLight){let y=i.rectArea[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),a.identity(),s.copy(v.matrixWorld),s.premultiply(_),a.extractRotation(s),y.halfWidth.set(0.5*v.width,0,0),y.halfHeight.set(0,0.5*v.height,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),u++}else if(v.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),h++}else if(v.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(_),p++}}},state:i}}function nf(t){let e=new D0(t),n=[],i=[],r={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,n.length=0,i.length=0},state:r,setupLights:function(){e.setup(n)},setupLightsView:function(s){e.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function O0(t){let e=new WeakMap;return{get:function(n,i=0){let r=e.get(n),s;return r===void 0?(s=new nf(t),e.set(n,[s])):i>=r.length?(s=new nf(t),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}function B0(t,e,n){let i=new ir,r=new it,s=new it,a=new jt,o=new fc({depthPacking:lp}),l=new mc,c={},h=n.maxTextureSize,d={[An]:$e,[$e]:An,[be]:be},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Kt;_.setAttribute("position",new ae(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let m=new ce(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uh;let v=this.type;function y(w,I){let V=e.update(m);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(I,null,V,u,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(I,null,V,p,m,null)}function g(w,I,V,P){let F=null,N=V.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)F=N;else if(F=V.isPointLight===!0?l:o,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let G=F.uuid,Z=I.uuid,X=c[G];X===void 0&&(X={},c[G]=X);let j=X[Z];j===void 0&&(j=F.clone(),X[Z]=j,I.addEventListener("dispose",R)),F=j}if(F.visible=I.visible,F.wireframe=I.wireframe,F.side=P===bn?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:d[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaToCoverage===!0?0.5:I.alphaTest,F.map=I.map,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,V.isPointLight===!0&&F.isMeshDistanceMaterial===!0)t.properties.get(F).light=V;return F}function S(w,I,V,P,F){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&F===bn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld);let G=e.update(w),Z=w.material;if(Array.isArray(Z)){let X=G.groups;for(let j=0,k=X.length;j<k;j++){let B=X[j],q=Z[B.materialIndex];if(q&&q.visible){let at=g(w,q,P,F);w.onBeforeShadow(t,w,I,V,G,at,B),t.renderBufferDirect(V,null,G,at,w,B),w.onAfterShadow(t,w,I,V,G,at,B)}}}else if(Z.visible){let X=g(w,Z,P,F);w.onBeforeShadow(t,w,I,V,G,X,null),t.renderBufferDirect(V,null,G,X,w,null),w.onAfterShadow(t,w,I,V,G,X,null)}}let N=w.children;for(let G=0,Z=N.length;G<Z;G++)S(N[G],I,V,P,F)}function R(w){w.target.removeEventListener("dispose",R);for(let I in c){let V=c[I],P=w.target.uuid;if(P in V)V[P].dispose(),delete V[P]}}this.render=function(w,I,V){if(f.enabled===!1)return;if(f.autoUpdate===!1&&f.needsUpdate===!1)return;if(w.length===0)return;let P=t.getRenderTarget(),F=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),G=t.state;G.setBlending(Mi),G.buffers.depth.getReversed()?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Z=v!==bn&&this.type===bn,X=v===bn&&this.type!==bn;for(let j=0,k=w.length;j<k;j++){let B=w[j],q=B.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);let at=q.getFrameExtents();if(r.multiply(at),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/at.x),r.x=s.x*at.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/at.y),r.y=s.y*at.y,q.mapSize.y=s.y)),q.map===null||Z===!0||X===!0){let Q=this.type!==bn?{minFilter:Kn,magFilter:Kn}:{};q.map!==null&&q.map.dispose(),q.map=new ni(r.x,r.y,Q),q.map.texture.name=B.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();let ft=q.getViewportCount();for(let Q=0;Q<ft;Q++){let K=q.getViewport(Q);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),G.viewport(a),q.updateMatrices(B,Q),i=q.getFrustum(),S(I,V,q.camera,B,this.type)}q.isPointLightShadow!==!0&&this.type===bn&&y(q,V),q.needsUpdate=!1}v=this.type,f.needsUpdate=!1,t.setRenderTarget(P,F,N)}}var z0={[Ya]:Za,[Ja]:$a,[ja]:Qa,[Ls]:Ka,[Za]:Ya,[$a]:Ja,[Qa]:ja,[Ka]:Ls};function V0(t,e){let n=new function(){let M=!1,L=new jt,E=null,U=new jt(0,0,0,0);return{setMask:function(z){E===z||M||(t.colorMask(z,z,z,z),E=z)},setLocked:function(z){M=z},setClear:function(z,H,W,ot,ut){ut===!0&&(z*=ot,H*=ot,W*=ot),L.set(z,H,W,ot),U.equals(L)===!1&&(t.clearColor(z,H,W,ot),U.copy(L))},reset:function(){M=!1,E=null,U.set(-1,0,0,0)}}},i=new function(){let M=!1,L=!1,E=null,U=null,z=null;return{setReversed:function(H){if(L!==H){let W=e.get("EXT_clip_control");H?W.clipControlEXT(W.LOWER_LEFT_EXT,W.ZERO_TO_ONE_EXT):W.clipControlEXT(W.LOWER_LEFT_EXT,W.NEGATIVE_ONE_TO_ONE_EXT),L=H;let ot=z;z=null,this.setClear(ot)}},getReversed:function(){return L},setTest:function(H){H?lt(t.DEPTH_TEST):rt(t.DEPTH_TEST)},setMask:function(H){E===H||M||(t.depthMask(H),E=H)},setFunc:function(H){if(L&&(H=z0[H]),U!==H){switch(H){case Ya:t.depthFunc(t.NEVER);break;case Za:t.depthFunc(t.ALWAYS);break;case Ja:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case ja:t.depthFunc(t.EQUAL);break;case Ka:t.depthFunc(t.GEQUAL);break;case $a:t.depthFunc(t.GREATER);break;case Qa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}U=H}},setLocked:function(H){M=H},setClear:function(H){z!==H&&(L&&(H=1-H),t.clearDepth(H),z=H)},reset:function(){M=!1,E=null,U=null,z=null,L=!1}}},r=new function(){let M=!1,L=null,E=null,U=null,z=null,H=null,W=null,ot=null,ut=null;return{setTest:function(tt){M||(tt?lt(t.STENCIL_TEST):rt(t.STENCIL_TEST))},setMask:function(tt){L===tt||M||(t.stencilMask(tt),L=tt)},setFunc:function(tt,st,yt){E===tt&&U===st&&z===yt||(t.stencilFunc(tt,st,yt),E=tt,U=st,z=yt)},setOp:function(tt,st,yt){H===tt&&W===st&&ot===yt||(t.stencilOp(tt,st,yt),H=tt,W=st,ot=yt)},setLocked:function(tt){M=tt},setClear:function(tt){ut!==tt&&(t.clearStencil(tt),ut=tt)},reset:function(){M=!1,L=null,E=null,U=null,z=null,H=null,W=null,ot=null,ut=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,_=null,m=null,f=null,v=null,y=null,g=null,S=new vt(0,0,0),R=0,w=!1,I=null,V=null,P=null,F=null,N=null,G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,X=0,j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=X>=2);let k=null,B={},q=t.getParameter(t.SCISSOR_BOX),at=t.getParameter(t.VIEWPORT),ft=new jt().fromArray(q),Q=new jt().fromArray(at);function K(M,L,E,U){let z=new Uint8Array(4),H=t.createTexture();t.bindTexture(M,H),t.texParameteri(M,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(M,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let W=0;W<E;W++)M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?t.texImage3D(L,0,t.RGBA,1,1,U,0,t.RGBA,t.UNSIGNED_BYTE,z):t.texImage2D(L+W,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,z);return H}let mt={};function lt(M){o[M]!==!0&&(t.enable(M),o[M]=!0)}function rt(M){o[M]!==!1&&(t.disable(M),o[M]=!1)}mt[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),mt[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),mt[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),i.setClear(1),r.setClear(0),lt(t.DEPTH_TEST),i.setFunc(Ls),x(!1),C(ch),lt(t.CULL_FACE),A(Mi);let ht={[zr]:t.FUNC_ADD,[bd]:t.FUNC_SUBTRACT,[Ad]:t.FUNC_REVERSE_SUBTRACT};ht[Rd]=t.MIN,ht[Cd]=t.MAX;let gt={[Ld]:t.ZERO,[Id]:t.ONE,[Pd]:t.SRC_COLOR,[Nd]:t.SRC_ALPHA,[Vd]:t.SRC_ALPHA_SATURATE,[Bd]:t.DST_COLOR,[Dd]:t.DST_ALPHA,[Ud]:t.ONE_MINUS_SRC_COLOR,[Fd]:t.ONE_MINUS_SRC_ALPHA,[zd]:t.ONE_MINUS_DST_COLOR,[Od]:t.ONE_MINUS_DST_ALPHA,[Hd]:t.CONSTANT_COLOR,[Gd]:t.ONE_MINUS_CONSTANT_COLOR,[Wd]:t.CONSTANT_ALPHA,[kd]:t.ONE_MINUS_CONSTANT_ALPHA};function A(M,L,E,U,z,H,W,ot,ut,tt){if(M!==Mi){if(u===!1&&(lt(t.BLEND),u=!0),M===wd)z=z||L,H=H||E,W=W||U,L===_&&z===v||(t.blendEquationSeparate(ht[L],ht[z]),_=L,v=z),E===m&&U===f&&H===y&&W===g||(t.blendFuncSeparate(gt[E],gt[U],gt[H],gt[W]),m=E,f=U,y=H,g=W),ot.equals(S)!==!1&&ut===R||(t.blendColor(ot.r,ot.g,ot.b,ut),S.copy(ot),R=ut),p=M,w=!1;else if(M!==p||tt!==w){if(_===zr&&v===zr||(t.blendEquation(t.FUNC_ADD),_=zr,v=zr),tt)switch(M){case Cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFunc(t.ONE,t.ONE);break;case ph:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case Cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ph:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}m=null,f=null,y=null,g=null,S.set(0,0,0),R=0,p=M,w=tt}}else u===!0&&(rt(t.BLEND),u=!1)}function x(M){I!==M&&(M?t.frontFace(t.CW):t.frontFace(t.CCW),I=M)}function C(M){M!==Td?(lt(t.CULL_FACE),M!==V&&(M===ch?t.cullFace(t.BACK):M===Ed?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):rt(t.CULL_FACE),V=M}function O(M,L,E){M?(lt(t.POLYGON_OFFSET_FILL),F===L&&N===E||(t.polygonOffset(L,E),F=L,N=E)):rt(t.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:i,stencil:r},enable:lt,disable:rt,bindFramebuffer:function(M,L){return l[M]!==L&&(t.bindFramebuffer(M,L),l[M]=L,M===t.DRAW_FRAMEBUFFER&&(l[t.FRAMEBUFFER]=L),M===t.FRAMEBUFFER&&(l[t.DRAW_FRAMEBUFFER]=L),!0)},drawBuffers:function(M,L){let E=h,U=!1;if(M){E=c.get(L),E===void 0&&(E=[],c.set(L,E));let z=M.textures;if(E.length!==z.length||E[0]!==t.COLOR_ATTACHMENT0){for(let H=0,W=z.length;H<W;H++)E[H]=t.COLOR_ATTACHMENT0+H;E.length=z.length,U=!0}}else E[0]!==t.BACK&&(E[0]=t.BACK,U=!0);U&&t.drawBuffers(E)},useProgram:function(M){return d!==M&&(t.useProgram(M),d=M,!0)},setBlending:A,setMaterial:function(M,L){M.side===be?rt(t.CULL_FACE):lt(t.CULL_FACE);let E=M.side===$e;L&&(E=!E),x(E),M.blending===Cs&&M.transparent===!1?A(Mi):A(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),i.setFunc(M.depthFunc),i.setTest(M.depthTest),i.setMask(M.depthWrite),n.setMask(M.colorWrite);let U=M.stencilWrite;r.setTest(U),U&&(r.setMask(M.stencilWriteMask),r.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),r.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),O(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?lt(t.SAMPLE_ALPHA_TO_COVERAGE):rt(t.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:x,setCullFace:C,setLineWidth:function(M){M!==P&&(Z&&t.lineWidth(M),P=M)},setPolygonOffset:O,setScissorTest:function(M){M?lt(t.SCISSOR_TEST):rt(t.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=t.TEXTURE0+G-1),k!==M&&(t.activeTexture(M),k=M)},bindTexture:function(M,L,E){E===void 0&&(E=k===null?t.TEXTURE0+G-1:k);let U=B[E];U===void 0&&(U={type:void 0,texture:void 0},B[E]=U),U.type===M&&U.texture===L||(k!==E&&(t.activeTexture(E),k=E),t.bindTexture(M,L||mt[M]),U.type=M,U.texture=L)},unbindTexture:function(){let M=B[k];M!==void 0&&M.type!==void 0&&(t.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{t.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{t.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{t.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,L){let E=a.get(L);E===void 0&&(E=new WeakMap,a.set(L,E));let U=E.get(M);U===void 0&&(U=t.getUniformBlockIndex(L,M.name),E.set(M,U))},uniformBlockBinding:function(M,L){let E=a.get(L).get(M);s.get(L)!==E&&(t.uniformBlockBinding(L,E,M.__bindingPointIndex),s.set(L,E))},texStorage2D:function(){try{t.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{t.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{t.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{t.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){ft.equals(M)===!1&&(t.scissor(M.x,M.y,M.z,M.w),ft.copy(M))},viewport:function(M){Q.equals(M)===!1&&(t.viewport(M.x,M.y,M.z,M.w),Q.copy(M))},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),i.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),o={},k=null,B={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,_=null,m=null,f=null,v=null,y=null,g=null,S=new vt(0,0,0),R=0,w=!1,I=null,V=null,P=null,F=null,N=null,ft.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),n.reset(),i.reset(),r.reset()}}}function H0(t,e,n,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function _(A,x){return p?new OffscreenCanvas(A,x):Dr("canvas")}function m(A,x,C){let O=1,M=gt(A);if((M.width>C||M.height>C)&&(O=C/Math.max(M.width,M.height)),O<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let L=Math.floor(O*M.width),E=Math.floor(O*M.height);d===void 0&&(d=_(L,E));let U=x?_(L,E):d;return U.width=L,U.height=E,U.getContext("2d").drawImage(A,0,0,L,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+L+"x"+E+")."),U}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),A}return A}function f(A){return A.generateMipmaps}function v(A){t.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(A,x,C,O,M=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let L=x;if(x===t.RED&&(C===t.FLOAT&&(L=t.R32F),C===t.HALF_FLOAT&&(L=t.R16F),C===t.UNSIGNED_BYTE&&(L=t.R8)),x===t.RED_INTEGER&&(C===t.UNSIGNED_BYTE&&(L=t.R8UI),C===t.UNSIGNED_SHORT&&(L=t.R16UI),C===t.UNSIGNED_INT&&(L=t.R32UI),C===t.BYTE&&(L=t.R8I),C===t.SHORT&&(L=t.R16I),C===t.INT&&(L=t.R32I)),x===t.RG&&(C===t.FLOAT&&(L=t.RG32F),C===t.HALF_FLOAT&&(L=t.RG16F),C===t.UNSIGNED_BYTE&&(L=t.RG8)),x===t.RG_INTEGER&&(C===t.UNSIGNED_BYTE&&(L=t.RG8UI),C===t.UNSIGNED_SHORT&&(L=t.RG16UI),C===t.UNSIGNED_INT&&(L=t.RG32UI),C===t.BYTE&&(L=t.RG8I),C===t.SHORT&&(L=t.RG16I),C===t.INT&&(L=t.RG32I)),x===t.RGB_INTEGER&&(C===t.UNSIGNED_BYTE&&(L=t.RGB8UI),C===t.UNSIGNED_SHORT&&(L=t.RGB16UI),C===t.UNSIGNED_INT&&(L=t.RGB32UI),C===t.BYTE&&(L=t.RGB8I),C===t.SHORT&&(L=t.RGB16I),C===t.INT&&(L=t.RGB32I)),x===t.RGBA_INTEGER&&(C===t.UNSIGNED_BYTE&&(L=t.RGBA8UI),C===t.UNSIGNED_SHORT&&(L=t.RGBA16UI),C===t.UNSIGNED_INT&&(L=t.RGBA32UI),C===t.BYTE&&(L=t.RGBA8I),C===t.SHORT&&(L=t.RGBA16I),C===t.INT&&(L=t.RGBA32I)),x===t.RGB&&C===t.UNSIGNED_INT_5_9_9_9_REV&&(L=t.RGB9_E5),x===t.RGBA){let E=M?Jh:Wt.getTransfer(O);C===t.FLOAT&&(L=t.RGBA32F),C===t.HALF_FLOAT&&(L=t.RGBA16F),C===t.UNSIGNED_BYTE&&(L=E===ee?t.SRGB8_ALPHA8:t.RGBA8),C===t.UNSIGNED_SHORT_4_4_4_4&&(L=t.RGBA4),C===t.UNSIGNED_SHORT_5_5_5_1&&(L=t.RGB5_A1)}return L!==t.R16F&&L!==t.R32F&&L!==t.RG16F&&L!==t.RG32F&&L!==t.RGBA16F&&L!==t.RGBA32F||e.get("EXT_color_buffer_float"),L}function S(A,x){let C;return A?x===null||x===Gr||x===Wr?C=t.DEPTH24_STENCIL8:x===xi?C=t.DEPTH32F_STENCIL8:x===Ps&&(C=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gr||x===Wr?C=t.DEPTH_COMPONENT24:x===xi?C=t.DEPTH_COMPONENT32F:x===Ps&&(C=t.DEPTH_COMPONENT16),C}function R(A,x){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Kn&&A.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){let x=A.target;x.removeEventListener("dispose",w),function(C){let O=i.get(C);if(O.__webglInit===void 0)return;let M=C.source,L=u.get(M);if(L){let E=L[O.__cacheKey];E.usedTimes--,E.usedTimes===0&&V(C),Object.keys(L).length===0&&u.delete(M)}i.remove(C)}(x),x.isVideoTexture&&h.delete(x)}function I(A){let x=A.target;x.removeEventListener("dispose",I),function(C){let O=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(O.__webglFramebuffer[L]))for(let E=0;E<O.__webglFramebuffer[L].length;E++)t.deleteFramebuffer(O.__webglFramebuffer[L][E]);else t.deleteFramebuffer(O.__webglFramebuffer[L]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[L])}else{if(Array.isArray(O.__webglFramebuffer))for(let L=0;L<O.__webglFramebuffer.length;L++)t.deleteFramebuffer(O.__webglFramebuffer[L]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let L=0;L<O.__webglColorRenderbuffer.length;L++)O.__webglColorRenderbuffer[L]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[L]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let M=C.textures;for(let L=0,E=M.length;L<E;L++){let U=i.get(M[L]);U.__webglTexture&&(t.deleteTexture(U.__webglTexture),a.memory.textures--),i.remove(M[L])}i.remove(C)}(x)}function V(A){let x=i.get(A);t.deleteTexture(x.__webglTexture);let C=A.source;delete u.get(C)[x.__cacheKey],a.memory.textures--}let P=0;function F(A,x){let C=i.get(A);if(A.isVideoTexture&&function(O){let M=a.render.frame;h.get(O)!==M&&(h.set(O,M),O.update())}(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&C.__version!==A.version){let O=A.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void B(C,A,x);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else A.isExternalTexture&&(C.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,C.__webglTexture,t.TEXTURE0+x)}let N={[yn]:t.REPEAT,[$i]:t.CLAMP_TO_EDGE,[io]:t.MIRRORED_REPEAT},G={[Kn]:t.NEAREST,[ro]:t.NEAREST_MIPMAP_NEAREST,[Qi]:t.NEAREST_MIPMAP_LINEAR,[We]:t.LINEAR,[Hr]:t.LINEAR_MIPMAP_NEAREST,[$n]:t.LINEAR_MIPMAP_LINEAR},Z={[up]:t.NEVER,[_p]:t.ALWAYS,[dp]:t.LESS,[jh]:t.LEQUAL,[pp]:t.EQUAL,[gp]:t.GEQUAL,[fp]:t.GREATER,[mp]:t.NOTEQUAL};function X(A,x){if(x.type!==xi||e.has("OES_texture_float_linear")!==!1||x.magFilter!==We&&x.magFilter!==Hr&&x.magFilter!==Qi&&x.magFilter!==$n&&x.minFilter!==We&&x.minFilter!==Hr&&x.minFilter!==Qi&&x.minFilter!==$n||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,N[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,N[x.wrapT]),A!==t.TEXTURE_3D&&A!==t.TEXTURE_2D_ARRAY||t.texParameteri(A,t.TEXTURE_WRAP_R,N[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,G[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,G[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Kn)return;if(x.minFilter!==Qi&&x.minFilter!==$n)return;if(x.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function j(A,x){let C=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));let O=x.source,M=u.get(O);M===void 0&&(M={},u.set(O,M));let L=function(E){let U=[];return U.push(E.wrapS),U.push(E.wrapT),U.push(E.wrapR||0),U.push(E.magFilter),U.push(E.minFilter),U.push(E.anisotropy),U.push(E.internalFormat),U.push(E.format),U.push(E.type),U.push(E.generateMipmaps),U.push(E.premultiplyAlpha),U.push(E.flipY),U.push(E.unpackAlignment),U.push(E.colorSpace),U.join()}(x);if(L!==A.__cacheKey){M[L]===void 0&&(M[L]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,C=!0),M[L].usedTimes++;let E=M[A.__cacheKey];E!==void 0&&(M[A.__cacheKey].usedTimes--,E.usedTimes===0&&V(x)),A.__cacheKey=L,A.__webglTexture=M[L].texture}return C}function k(A,x,C){return Math.floor(Math.floor(A/C)/x)}function B(A,x,C){let O=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=t.TEXTURE_3D);let M=j(A,x),L=x.source;n.bindTexture(O,A.__webglTexture,t.TEXTURE0+C);let E=i.get(L);if(L.version!==E.__version||M===!0){n.activeTexture(t.TEXTURE0+C);let U=Wt.getPrimaries(Wt.workingColorSpace),z=x.colorSpace===ti?null:Wt.getPrimaries(x.colorSpace),H=x.colorSpace===ti||U===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let W=m(x.image,!1,r.maxTextureSize);W=ht(x,W);let ot=s.convert(x.format,x.colorSpace),ut=s.convert(x.type),tt,st=g(x.internalFormat,ot,ut,x.colorSpace,x.isVideoTexture);X(O,x);let yt=x.mipmaps,Et=x.isVideoTexture!==!0,Pt=E.__version===void 0||M===!0,Bt=L.dataReady,Ct=R(x,W);if(x.isDepthTexture)st=S(x.format===Ns,x.type),Pt&&(Et?n.texStorage2D(t.TEXTURE_2D,1,st,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,st,W.width,W.height,0,ot,ut,null));else if(x.isDataTexture)if(yt.length>0){Et&&Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,st,yt[0].width,yt[0].height);for(let et=0,dt=yt.length;et<dt;et++)tt=yt[et],Et?Bt&&n.texSubImage2D(t.TEXTURE_2D,et,0,0,tt.width,tt.height,ot,ut,tt.data):n.texImage2D(t.TEXTURE_2D,et,st,tt.width,tt.height,0,ot,ut,tt.data);x.generateMipmaps=!1}else Et?(Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,st,W.width,W.height),Bt&&function(et,dt,xt,Le){let St=et.updateRanges;if(St.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,dt.width,dt.height,xt,Le,dt.data);else{St.sort((Oe,xe)=>Oe.start-xe.start);let zt=0;for(let Oe=1;Oe<St.length;Oe++){let xe=St[zt],Zt=St[Oe],Bi=xe.start+xe.count,zi=k(Zt.start,dt.width,4),Vi=k(xe.start,dt.width,4);Zt.start<=Bi+1&&zi===Vi&&k(Zt.start+Zt.count-1,dt.width,4)===zi?xe.count=Math.max(xe.count,Zt.start+Zt.count-xe.start):(++zt,St[zt]=Zt)}St.length=zt+1;let kt=t.getParameter(t.UNPACK_ROW_LENGTH),li=t.getParameter(t.UNPACK_SKIP_PIXELS),D=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,dt.width);for(let Oe=0,xe=St.length;Oe<xe;Oe++){let Zt=St[Oe],Bi=Math.floor(Zt.start/4),zi=Math.ceil(Zt.count/4),Vi=Bi%dt.width,hs=Math.floor(Bi/dt.width),ra=zi;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Vi),t.pixelStorei(t.UNPACK_SKIP_ROWS,hs),n.texSubImage2D(t.TEXTURE_2D,0,Vi,hs,ra,1,xt,Le,dt.data)}et.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,kt),t.pixelStorei(t.UNPACK_SKIP_PIXELS,li),t.pixelStorei(t.UNPACK_SKIP_ROWS,D)}}(x,W,ot,ut)):n.texImage2D(t.TEXTURE_2D,0,st,W.width,W.height,0,ot,ut,W.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Et&&Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ct,st,yt[0].width,yt[0].height,W.depth);for(let et=0,dt=yt.length;et<dt;et++)if(tt=yt[et],x.format!==Rn)if(ot!==null)if(Et){if(Bt)if(x.layerUpdates.size>0){let xt=wc(tt.width,tt.height,x.format,x.type);for(let Le of x.layerUpdates){let St=tt.data.subarray(Le*xt/tt.data.BYTES_PER_ELEMENT,(Le+1)*xt/tt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,Le,tt.width,tt.height,1,ot,St)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,0,tt.width,tt.height,W.depth,ot,tt.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,et,st,tt.width,tt.height,W.depth,0,tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?Bt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,et,0,0,0,tt.width,tt.height,W.depth,ot,ut,tt.data):n.texImage3D(t.TEXTURE_2D_ARRAY,et,st,tt.width,tt.height,W.depth,0,ot,ut,tt.data)}else{Et&&Pt&&n.texStorage2D(t.TEXTURE_2D,Ct,st,yt[0].width,yt[0].height);for(let et=0,dt=yt.length;et<dt;et++)tt=yt[et],x.format!==Rn?ot!==null?Et?Bt&&n.compressedTexSubImage2D(t.TEXTURE_2D,et,0,0,tt.width,tt.height,ot,tt.data):n.compressedTexImage2D(t.TEXTURE_2D,et,st,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?Bt&&n.texSubImage2D(t.TEXTURE_2D,et,0,0,tt.width,tt.height,ot,ut,tt.data):n.texImage2D(t.TEXTURE_2D,et,st,tt.width,tt.height,0,ot,ut,tt.data)}else if(x.isDataArrayTexture)if(Et){if(Pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ct,st,W.width,W.height,W.depth),Bt)if(x.layerUpdates.size>0){let et=wc(W.width,W.height,x.format,x.type);for(let dt of x.layerUpdates){let xt=W.data.subarray(dt*et/W.data.BYTES_PER_ELEMENT,(dt+1)*et/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,dt,W.width,W.height,1,ot,ut,xt)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,ot,ut,W.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,st,W.width,W.height,W.depth,0,ot,ut,W.data);else if(x.isData3DTexture)Et?(Pt&&n.texStorage3D(t.TEXTURE_3D,Ct,st,W.width,W.height,W.depth),Bt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,ot,ut,W.data)):n.texImage3D(t.TEXTURE_3D,0,st,W.width,W.height,W.depth,0,ot,ut,W.data);else if(x.isFramebufferTexture){if(Pt)if(Et)n.texStorage2D(t.TEXTURE_2D,Ct,st,W.width,W.height);else{let{width:et,height:dt}=W;for(let xt=0;xt<Ct;xt++)n.texImage2D(t.TEXTURE_2D,xt,st,et,dt,0,ot,ut,null),et>>=1,dt>>=1}}else if(yt.length>0){if(Et&&Pt){let et=gt(yt[0]);n.texStorage2D(t.TEXTURE_2D,Ct,st,et.width,et.height)}for(let et=0,dt=yt.length;et<dt;et++)tt=yt[et],Et?Bt&&n.texSubImage2D(t.TEXTURE_2D,et,0,0,ot,ut,tt):n.texImage2D(t.TEXTURE_2D,et,st,ot,ut,tt);x.generateMipmaps=!1}else if(Et){if(Pt){let et=gt(W);n.texStorage2D(t.TEXTURE_2D,Ct,st,et.width,et.height)}Bt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ot,ut,W)}else n.texImage2D(t.TEXTURE_2D,0,st,ot,ut,W);f(x)&&v(O),E.__version=L.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function q(A,x,C,O,M,L){let E=s.convert(C.format,C.colorSpace),U=s.convert(C.type),z=g(C.internalFormat,E,U,C.colorSpace),H=i.get(x),W=i.get(C);if(W.__renderTarget=x,!H.__hasExternalTextures){let ot=Math.max(1,x.width>>L),ut=Math.max(1,x.height>>L);M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY?n.texImage3D(M,L,z,ot,ut,x.depth,0,E,U,null):n.texImage2D(M,L,z,ot,ut,0,E,U,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,O,M,W.__webglTexture,0,lt(x)):(M===t.TEXTURE_2D||M>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&M<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,O,M,W.__webglTexture,L),n.bindFramebuffer(t.FRAMEBUFFER,null)}function at(A,x,C){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){let O=x.depthTexture,M=O&&O.isDepthTexture?O.type:null,L=S(x.stencilBuffer,M),E=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,U=lt(x);rt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,U,L,x.width,x.height):C?t.renderbufferStorageMultisample(t.RENDERBUFFER,U,L,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,L,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,E,t.RENDERBUFFER,A)}else{let O=x.textures;for(let M=0;M<O.length;M++){let L=O[M],E=s.convert(L.format,L.colorSpace),U=s.convert(L.type),z=g(L.internalFormat,E,U,L.colorSpace),H=lt(x);C&&rt(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,H,z,x.width,x.height):rt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,H,z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,z,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ft(A,x){if(x&&x.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!x.depthTexture||!x.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let C=i.get(x.depthTexture);C.__renderTarget=x,C.__webglTexture&&x.depthTexture.image.width===x.width&&x.depthTexture.image.height===x.height||(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);let O=C.__webglTexture,M=lt(x);if(x.depthTexture.format===so)rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0,M):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,O,0);else{if(x.depthTexture.format!==Ns)throw Error("Unknown depthTexture format");rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0,M):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,O,0)}}function Q(A){let x=i.get(A),C=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let O=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){let M=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",M)};O.addEventListener("dispose",M),x.__depthDisposeCallback=M}x.__boundDepthTexture=O}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(C)throw Error("target.depthTexture not supported in Cube render targets");let O=A.texture.mipmaps;O&&O.length>0?ft(x.__webglFramebuffer[0],A):ft(x.__webglFramebuffer,A)}else if(C){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=t.createRenderbuffer(),at(x.__webglDepthbuffer[O],A,!1);else{let M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,L=x.__webglDepthbuffer[O];t.bindRenderbuffer(t.RENDERBUFFER,L),t.framebufferRenderbuffer(t.FRAMEBUFFER,M,t.RENDERBUFFER,L)}}else{let O=A.texture.mipmaps;if(O&&O.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),at(x.__webglDepthbuffer,A,!1);else{let M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,L=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,L),t.framebufferRenderbuffer(t.FRAMEBUFFER,M,t.RENDERBUFFER,L)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}let K=[],mt=[];function lt(A){return Math.min(r.maxSamples,A.samples)}function rt(A){let x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ht(A,x){let{colorSpace:C,format:O,type:M}=A;return A.isCompressedTexture===!0||A.isVideoTexture===!0||C!==ze&&C!==ti&&(Wt.getTransfer(C)===ee?O===Rn&&M===Si||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),x}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A},this.resetTextureUnits=function(){P=0},this.setTexture2D=F,this.setTexture2DArray=function(A,x){let C=i.get(A);A.isRenderTargetTexture===!1&&A.version>0&&C.__version!==A.version?B(C,A,x):n.bindTexture(t.TEXTURE_2D_ARRAY,C.__webglTexture,t.TEXTURE0+x)},this.setTexture3D=function(A,x){let C=i.get(A);A.isRenderTargetTexture===!1&&A.version>0&&C.__version!==A.version?B(C,A,x):n.bindTexture(t.TEXTURE_3D,C.__webglTexture,t.TEXTURE0+x)},this.setTextureCube=function(A,x){let C=i.get(A);A.version>0&&C.__version!==A.version?function(O,M,L){if(M.image.length!==6)return;let E=j(O,M),U=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+L);let z=i.get(U);if(U.version!==z.__version||E===!0){n.activeTexture(t.TEXTURE0+L);let H=Wt.getPrimaries(Wt.workingColorSpace),W=M.colorSpace===ti?null:Wt.getPrimaries(M.colorSpace),ot=M.colorSpace===ti||H===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,st=[];for(let St=0;St<6;St++)st[St]=ut||tt?tt?M.image[St].image:M.image[St]:m(M.image[St],!0,r.maxCubemapSize),st[St]=ht(M,st[St]);let yt=st[0],Et=s.convert(M.format,M.colorSpace),Pt=s.convert(M.type),Bt=g(M.internalFormat,Et,Pt,M.colorSpace),Ct=M.isVideoTexture!==!0,et=z.__version===void 0||E===!0,dt=U.dataReady,xt,Le=R(M,yt);if(X(t.TEXTURE_CUBE_MAP,M),ut){Ct&&et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,Bt,yt.width,yt.height);for(let St=0;St<6;St++){xt=st[St].mipmaps;for(let zt=0;zt<xt.length;zt++){let kt=xt[zt];M.format!==Rn?Et!==null?Ct?dt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,0,0,kt.width,kt.height,Et,kt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,Bt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,0,0,kt.width,kt.height,Et,Pt,kt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt,Bt,kt.width,kt.height,0,Et,Pt,kt.data)}}}else{if(xt=M.mipmaps,Ct&&et){xt.length>0&&Le++;let St=gt(st[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,Bt,St.width,St.height)}for(let St=0;St<6;St++)if(tt){Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,st[St].width,st[St].height,Et,Pt,st[St].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Bt,st[St].width,st[St].height,0,Et,Pt,st[St].data);for(let zt=0;zt<xt.length;zt++){let kt=xt[zt].image[St].image;Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,0,0,kt.width,kt.height,Et,Pt,kt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,Bt,kt.width,kt.height,0,Et,Pt,kt.data)}}else{Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Et,Pt,st[St]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Bt,Et,Pt,st[St]);for(let zt=0;zt<xt.length;zt++){let kt=xt[zt];Ct?dt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,0,0,Et,Pt,kt.image[St]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+St,zt+1,Bt,Et,Pt,kt.image[St])}}}f(M)&&v(t.TEXTURE_CUBE_MAP),z.__version=U.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}(C,A,x):n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+x)},this.rebindTextures=function(A,x,C){let O=i.get(A);x!==void 0&&q(O.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),C!==void 0&&Q(A)},this.setupRenderTarget=function(A){let x=A.texture,C=i.get(A),O=i.get(x);A.addEventListener("dispose",I);let M=A.textures,L=A.isWebGLCubeRenderTarget===!0,E=M.length>1;if(E||(O.__webglTexture===void 0&&(O.__webglTexture=t.createTexture()),O.__version=x.version,a.memory.textures++),L){C.__webglFramebuffer=[];for(let U=0;U<6;U++)if(x.mipmaps&&x.mipmaps.length>0){C.__webglFramebuffer[U]=[];for(let z=0;z<x.mipmaps.length;z++)C.__webglFramebuffer[U][z]=t.createFramebuffer()}else C.__webglFramebuffer[U]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){C.__webglFramebuffer=[];for(let U=0;U<x.mipmaps.length;U++)C.__webglFramebuffer[U]=t.createFramebuffer()}else C.__webglFramebuffer=t.createFramebuffer();if(E)for(let U=0,z=M.length;U<z;U++){let H=i.get(M[U]);H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&rt(A)===!1){C.__webglMultisampledFramebuffer=t.createFramebuffer(),C.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let U=0;U<M.length;U++){let z=M[U];C.__webglColorRenderbuffer[U]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,C.__webglColorRenderbuffer[U]);let H=s.convert(z.format,z.colorSpace),W=s.convert(z.type),ot=g(z.internalFormat,H,W,z.colorSpace,A.isXRRenderTarget===!0),ut=lt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ut,ot,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+U,t.RENDERBUFFER,C.__webglColorRenderbuffer[U])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(C.__webglDepthRenderbuffer=t.createRenderbuffer(),at(C.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(L){n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture),X(t.TEXTURE_CUBE_MAP,x);for(let U=0;U<6;U++)if(x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)q(C.__webglFramebuffer[U][z],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,z);else q(C.__webglFramebuffer[U],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);f(x)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(E){for(let U=0,z=M.length;U<z;U++){let H=M[U],W=i.get(H),ot=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ot,W.__webglTexture),X(ot,H),q(C.__webglFramebuffer,A,H,t.COLOR_ATTACHMENT0+U,ot,0),f(H)&&v(ot)}n.unbindTexture()}else{let U=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(U=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(U,O.__webglTexture),X(U,x),x.mipmaps&&x.mipmaps.length>0)for(let z=0;z<x.mipmaps.length;z++)q(C.__webglFramebuffer[z],A,x,t.COLOR_ATTACHMENT0,U,z);else q(C.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,U,0);f(x)&&v(U),n.unbindTexture()}A.depthBuffer&&Q(A)},this.updateRenderTargetMipmap=function(A){let x=A.textures;for(let C=0,O=x.length;C<O;C++){let M=x[C];if(f(M)){let L=y(A),E=i.get(M).__webglTexture;n.bindTexture(L,E),v(L),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(rt(A)===!1){let{textures:x,width:C,height:O}=A,M=t.COLOR_BUFFER_BIT,L=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,E=i.get(A),U=x.length>1;if(U)for(let H=0;H<x.length;H++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer);let z=A.texture.mipmaps;z&&z.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let H=0;H<x.length;H++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(M|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(M|=t.STENCIL_BUFFER_BIT)),U){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,E.__webglColorRenderbuffer[H]);let W=i.get(x[H]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,W,0)}t.blitFramebuffer(0,0,C,O,0,0,C,O,M,t.NEAREST),l===!0&&(K.length=0,mt.length=0,K.push(t.COLOR_ATTACHMENT0+H),A.depthBuffer&&A.resolveDepthBuffer===!1&&(K.push(L),mt.push(L),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),U)for(let H=0;H<x.length;H++){n.bindFramebuffer(t.FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,E.__webglColorRenderbuffer[H]);let W=i.get(x[H]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.TEXTURE_2D,W,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}},this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=q,this.useMultisampledRTT=rt}function G0(t,e){return{convert:function(n,i=ti){let r,s=Wt.getTransfer(i);if(n===Si)return t.UNSIGNED_BYTE;if(n===gh)return t.UNSIGNED_SHORT_4_4_4_4;if(n===_h)return t.UNSIGNED_SHORT_5_5_5_1;if(n===np)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===tp)return t.BYTE;if(n===ep)return t.SHORT;if(n===Ps)return t.UNSIGNED_SHORT;if(n===mh)return t.INT;if(n===Gr)return t.UNSIGNED_INT;if(n===xi)return t.FLOAT;if(n===Us)return t.HALF_FLOAT;if(n===ip)return t.ALPHA;if(n===rp)return t.RGB;if(n===Rn)return t.RGBA;if(n===so)return t.DEPTH_COMPONENT;if(n===Ns)return t.DEPTH_STENCIL;if(n===sp)return t.RED;if(n===vh)return t.RED_INTEGER;if(n===ap)return t.RG;if(n===yh)return t.RG_INTEGER;if(n===Mh)return t.RGBA_INTEGER;if(n===ao||n===oo||n===lo||n===ho)if(s===ee){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(n===ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(n===ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===Sh||n===xh||n===Th||n===Eh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(n===Sh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===wh||n===bh||n===Ah){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(n===wh||n===bh)return s===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ah)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(n===Rh||n===Ch||n===Lh||n===Ih||n===Ph||n===Uh||n===Nh||n===Fh||n===Dh||n===Oh||n===Bh||n===zh||n===Vh||n===Hh){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(n===Rh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ch)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ih)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ph)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hh)return s===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===co||n===Gh||n===Wh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(n===co)return s===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===op||n===kh||n===Xh||n===qh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Wr?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}}}class Fc extends he{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}class ff{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fc(t.texture);t.depthNear===e.depthNear&&t.depthFar===e.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mf extends ei{constructor(t,e){super();let n=this,i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,p=null,_=new ff,m={},f=e.getContextAttributes(),v=null,y=null,g=[],S=[],R=new it,w=null,I=new _e;I.viewport=new jt;let V=new _e;V.viewport=new jt;let P=[I,V],F=new Sc,N=null,G=null;function Z(Q){let K=S.indexOf(Q.inputSource);if(K===-1)return;let mt=g[K];mt!==void 0&&(mt.update(Q.inputSource,Q.frame,l||s),mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",j);for(let Q=0;Q<g.length;Q++){let K=S[Q];K!==null&&(S[Q]=null,g[Q].disconnect(K))}N=null,G=null,_.reset();for(let Q in m)delete m[Q];t.setRenderTarget(v),u=null,d=null,h=null,i=null,y=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function j(Q){for(let K=0;K<Q.removed.length;K++){let mt=Q.removed[K],lt=S.indexOf(mt);lt>=0&&(S[lt]=null,g[lt].disconnect(mt))}for(let K=0;K<Q.added.length;K++){let mt=Q.added[K],lt=S.indexOf(mt);if(lt===-1){for(let ht=0;ht<g.length;ht++){if(ht>=S.length){S.push(mt),lt=ht;break}if(S[ht]===null){S[ht]=mt,lt=ht;break}}if(lt===-1)break}let rt=g[lt];rt&&rt.connect(mt)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let K=g[Q];return K===void 0&&(K=new zs,g[Q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Q){let K=g[Q];return K===void 0&&(K=new zs,g[Q]=K),K.getGripSpace()},this.getHand=function(Q){let K=g[Q];return K===void 0&&(K=new zs,g[Q]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",j),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(i,e)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,mt=null,lt=null;f.depth&&(lt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=f.stencil?Ns:so,mt=f.stencil?Wr:Gr);let rt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=h.createProjectionLayer(rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new ni(d.textureWidth,d.textureHeight,{format:Rn,type:Si,depthTexture:new To(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let K={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new ni(u.framebufferWidth,u.framebufferHeight,{format:Rn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let k=new T,B=new T;function q(Q,K){K===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(K.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let{near:K,far:mt}=Q;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),F.near=V.near=I.near=K,F.far=V.far=I.far=mt,N===F.near&&G===F.far||(i.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,G=F.far),F.layers.mask=6|Q.layers.mask,I.layers.mask=3&F.layers.mask,V.layers.mask=5&F.layers.mask;let lt=Q.parent,rt=F.cameras;q(F,lt);for(let ht=0;ht<rt.length;ht++)q(rt[ht],lt);rt.length===2?function(ht,gt,A){k.setFromMatrixPosition(gt.matrixWorld),B.setFromMatrixPosition(A.matrixWorld);let x=k.distanceTo(B),C=gt.projectionMatrix.elements,O=A.projectionMatrix.elements,M=C[14]/(C[10]-1),L=C[14]/(C[10]+1),E=(C[9]+1)/C[5],U=(C[9]-1)/C[5],z=(C[8]-1)/C[0],H=(O[8]+1)/O[0],W=M*z,ot=M*H,ut=x/(-z+H),tt=ut*-z;if(gt.matrixWorld.decompose(ht.position,ht.quaternion,ht.scale),ht.translateX(tt),ht.translateZ(ut),ht.matrixWorld.compose(ht.position,ht.quaternion,ht.scale),ht.matrixWorldInverse.copy(ht.matrixWorld).invert(),C[10]===-1)ht.projectionMatrix.copy(gt.projectionMatrix),ht.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let st=M+ut,yt=L+ut,Et=W-tt,Pt=ot+(x-tt),Bt=E*L/yt*st,Ct=U*L/yt*st;ht.projectionMatrix.makePerspective(Et,Pt,Bt,Ct,st,yt),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert()}}(F,I,V):F.projectionMatrix.copy(I.projectionMatrix),function(ht,gt,A){A===null?ht.matrix.copy(gt.matrixWorld):(ht.matrix.copy(A.matrixWorld),ht.matrix.invert(),ht.matrix.multiply(gt.matrixWorld)),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.updateMatrixWorld(!0),ht.projectionMatrix.copy(gt.projectionMatrix),ht.projectionMatrixInverse.copy(gt.projectionMatrixInverse),ht.isPerspectiveCamera&&(ht.fov=2*Yi*Math.atan(1/ht.projectionMatrix.elements[5]),ht.zoom=1)}(Q,F,lt)},this.getCamera=function(){return F},this.getFoveation=function(){if(d!==null||u!==null)return o},this.setFoveation=function(Q){o=Q,d!==null&&(d.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(Q){return m[Q]};let at=null,ft=new rf;ft.setAnimationLoop(function(Q,K){if(c=K.getViewerPose(l||s),p=K,c!==null){let mt=c.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let lt=!1;mt.length!==F.cameras.length&&(F.cameras.length=0,lt=!0);for(let ht=0;ht<mt.length;ht++){let gt=mt[ht],A=null;if(u!==null)A=u.getViewport(gt);else{let C=h.getViewSubImage(d,gt);A=C.viewport,ht===0&&(t.setRenderTargetTextures(y,C.colorTexture,C.depthStencilTexture),t.setRenderTarget(y))}let x=P[ht];x===void 0&&(x=new _e,x.layers.enable(ht),x.viewport=new jt,P[ht]=x),x.matrix.fromArray(gt.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.projectionMatrix.fromArray(gt.projectionMatrix),x.projectionMatrixInverse.copy(x.projectionMatrix).invert(),x.viewport.set(A.x,A.y,A.width,A.height),ht===0&&(F.matrix.copy(x.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),lt===!0&&F.cameras.push(x)}let rt=i.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){let ht=h.getDepthInformation(mt[0]);ht&&ht.isValid&&ht.texture&&_.init(ht,i.renderState)}if(rt&&rt.includes("camera-access")&&(t.state.unbindTexture(),h))for(let ht=0;ht<mt.length;ht++){let gt=mt[ht].camera;if(gt){let A=m[gt];A||(A=new Fc,m[gt]=A);let x=h.getCameraImage(gt);A.sourceTexture=x}}}for(let mt=0;mt<g.length;mt++){let lt=S[mt],rt=g[mt];lt!==null&&rt!==void 0&&rt.update(lt,K,l||s)}at&&at(Q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),p=null}),this.setAnimationLoop=function(Q){at=Q},this.dispose=function(){}}}var lr=new Ge,W0=new wt;function k0(t,e){function n(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,n(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,n(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,n(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===$e&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,n(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===$e&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,n(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,n(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,lr.copy(l),lr.x*=-1,lr.y*=-1,lr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),r.envMapRotation.value.setFromMatrix4(W0.makeRotationFromEuler(lr)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,ic(t)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(r,s)):s.isMeshPhongMaterial?(i(r,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,0.0001)}(r,s)):s.isMeshStandardMaterial?(i(r,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===$e&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,c.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,n(h.map,c.mapTransform))}(r,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(r,s)):s.isPointsMaterial?function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=0.5*u,h.map&&(c.map.value=h.map,n(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,n(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,n(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,n(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function X0(t,e,n,i){let r={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,_){let m=d.value,f=u+"_"+p;if(_[f]===void 0)return _[f]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let v=_[f];if(typeof m=="number"||typeof m=="boolean"){if(v!==m)return _[f]=m,!0}else if(v.equals(m)===!1)return v.copy(m),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),t.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=r[d.id];p===void 0&&(function(f){let v=f.uniforms,y=0,g=16;for(let R=0,w=v.length;R<w;R++){let I=Array.isArray(v[R])?v[R]:[v[R]];for(let V=0,P=I.length;V<P;V++){let F=I[V],N=Array.isArray(F.value)?F.value:[F.value];for(let G=0,Z=N.length;G<Z;G++){let X=c(N[G]),j=y%g,k=j%X.boundary,B=j+k;y+=k,B!==0&&g-B<X.storage&&(y+=g-B),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=X.storage}}}let S=y%g;S>0&&(y+=g-S),f.__size=y,f.__cache={}}(d),p=function(f){let v=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();f.__bindingPointIndex=v;let y=t.createBuffer(),g=f.__size,S=f.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,g,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}(d),r[d.id]=p,d.addEventListener("dispose",h));let _=u.program;i.updateUBOMapping(d,_);let m=e.render.frame;s[d.id]!==m&&(function(f){let v=r[f.id],y=f.uniforms,g=f.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let S=0,R=y.length;S<R;S++){let w=Array.isArray(y[S])?y[S]:[y[S]];for(let I=0,V=w.length;I<V;I++){let P=w[I];if(l(P,S,I,g)===!0){let F=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],G=0;for(let Z=0;Z<N.length;Z++){let X=N[Z],j=c(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,F+G,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}(d),s[d.id]=m)},dispose:function(){for(let d in r)t.deleteBuffer(r[d]);a=[],r={},s={}}}}class Dc{constructor(t={}){let{canvas:e=vp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t,u;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=s;let p=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,S=!1;this._outputColorSpace=ge;let R=0,w=0,I=null,V=-1,P=null,F=new jt,N=new jt,G=null,Z=new vt(0),X=0,j=e.width,k=e.height,B=1,q=null,at=null,ft=new jt(0,0,j,k),Q=new jt(0,0,j,k),K=!1,mt=new ir,lt=!1,rt=!1,ht=new wt,gt=new T,A=new jt,x={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},C=!1;function O(){return I===null?B:1}let M,L,E,U,z,H,W,ot,ut,tt,st,yt,Et,Pt,Bt,Ct,et,dt,xt,Le,St,zt,kt,li,D=n;function Oe(b,Y){return e.getContext(b,Y)}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xd}`),e.addEventListener("webglcontextlost",Bi,!1),e.addEventListener("webglcontextrestored",zi,!1),e.addEventListener("webglcontextcreationerror",Vi,!1),D===null){if(D=Oe("webgl2",b),D===null)throw Oe("webgl2")?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function xe(){M=new Ag(D),M.init(),zt=new G0(D,M),L=new xg(D,M,t,zt),E=new V0(D,M),L.reversedDepthBuffer&&d&&E.buffers.depth.setReversed(!0),U=new Lg(D),z=new L0,H=new H0(D,M,E,z,L,zt,U),W=new Eg(g),ot=new bg(g),ut=new _g(D),kt=new Mg(D,ut),tt=new Rg(D,ut,U,kt),st=new Pg(D,tt,ut,U),xt=new Ig(D,L,H),Ct=new Tg(z),yt=new C0(g,W,ot,M,L,kt,Ct),Et=new k0(g,z),Pt=new P0,Bt=new O0(M),dt=new yg(g,W,ot,E,st,u,o),et=new B0(g,st,L),li=new X0(D,U,L,E),Le=new Sg(D,M,U),St=new Cg(D,M,U),U.programs=yt.programs,g.capabilities=L,g.extensions=M,g.properties=z,g.renderLists=Pt,g.shadowMap=et,g.state=E,g.info=U}xe();let Zt=new mf(g,D);function Bi(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function zi(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let b=U.autoReset,Y=et.enabled,$=et.autoUpdate,nt=et.needsUpdate,J=et.type;xe(),U.autoReset=b,et.enabled=Y,et.autoUpdate=$,et.needsUpdate=nt,et.type=J}function Vi(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function hs(b){let Y=b.target;Y.removeEventListener("dispose",hs),function($){(function(nt){let J=z.get(nt).programs;J!==void 0&&(J.forEach(function(ct){yt.releaseProgram(ct)}),nt.isShaderMaterial&&yt.releaseShaderCache(nt))})($),z.remove($)}(Y)}function ra(b,Y,$){b.transparent===!0&&b.side===be&&b.forceSinglePass===!1?(b.side=$e,b.needsUpdate=!0,oa(b,Y,$),b.side=An,b.needsUpdate=!0,oa(b,Y,$),b.side=be):oa(b,Y,$)}this.xr=Zt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=M.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=M.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(j,k,!1))},this.getSize=function(b){return b.set(j,k)},this.setSize=function(b,Y,$=!0){Zt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(j=b,k=Y,e.width=Math.floor(b*B),e.height=Math.floor(Y*B),$===!0&&(e.style.width=b+"px",e.style.height=Y+"px"),this.setViewport(0,0,b,Y))},this.getDrawingBufferSize=function(b){return b.set(j*B,k*B).floor()},this.setDrawingBufferSize=function(b,Y,$){j=b,k=Y,B=$,e.width=Math.floor(b*$),e.height=Math.floor(Y*$),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(ft)},this.setViewport=function(b,Y,$,nt){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,Y,$,nt),E.viewport(F.copy(ft).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(Q)},this.setScissor=function(b,Y,$,nt){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,Y,$,nt),E.scissor(N.copy(Q).multiplyScalar(B).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(b){E.setScissorTest(K=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,$=!0){let nt=0;if(b){let J=!1;if(I!==null){let ct=I.texture.format;J=ct===Mh||ct===yh||ct===vh}if(J){let ct=I.texture.type,_t=ct===Si||ct===Gr||ct===Ps||ct===Wr||ct===gh||ct===_h,Mt=dt.getClearColor(),Tt=dt.getClearAlpha(),At=Mt.r,Lt=Mt.g,Rt=Mt.b;_t?(p[0]=At,p[1]=Lt,p[2]=Rt,p[3]=Tt,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=At,_[1]=Lt,_[2]=Rt,_[3]=Tt,D.clearBufferiv(D.COLOR,0,_))}else nt|=D.COLOR_BUFFER_BIT}Y&&(nt|=D.DEPTH_BUFFER_BIT),$&&(nt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Bi,!1),e.removeEventListener("webglcontextrestored",zi,!1),e.removeEventListener("webglcontextcreationerror",Vi,!1),dt.dispose(),Pt.dispose(),Bt.dispose(),z.dispose(),W.dispose(),ot.dispose(),st.dispose(),kt.dispose(),li.dispose(),yt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",yu),Zt.removeEventListener("sessionend",Mu),Hi.stop()},this.renderBufferDirect=function(b,Y,$,nt,J,ct){Y===null&&(Y=x);let _t=J.isMesh&&J.matrixWorld.determinant()<0,Mt=function(Ht,re,we,Ot,It){re.isScene!==!0&&(re=x),H.resetTextureUnits();let dn=re.fog,Sl=Ot.isMeshStandardMaterial?re.environment:null,la=I===null?g.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ze,hi=(Ot.isMeshStandardMaterial?ot:W).get(Ot.envMap||Sl),Mn=Ot.vertexColors===!0&&!!we.attributes.color&&we.attributes.color.itemSize===4,mr=!!we.attributes.tangent&&(!!Ot.normalMap||Ot.anisotropy>0),Bn=!!we.morphAttributes.position,xl=!!we.morphAttributes.normal,gr=!!we.morphAttributes.color,bu=jn;Ot.toneMapped&&(I!==null&&I.isXRRenderTarget!==!0||(bu=g.toneMapping));let Au=we.morphAttributes.position||we.morphAttributes.normal||we.morphAttributes.color,Am=Au!==void 0?Au.length:0,Gt=z.get(Ot),Rm=f.state.lights;if(lt===!0&&(rt===!0||Ht!==P)){let an=Ht===P&&Ot.id===V;Ct.setState(Ot,Ht,an)}let pn=!1;Ot.version===Gt.__version?Gt.needsLights&&Gt.lightsStateVersion!==Rm.state.version||Gt.outputColorSpace!==la||It.isBatchedMesh&&Gt.batching===!1?pn=!0:It.isBatchedMesh||Gt.batching!==!0?It.isBatchedMesh&&Gt.batchingColor===!0&&It.colorTexture===null||It.isBatchedMesh&&Gt.batchingColor===!1&&It.colorTexture!==null||It.isInstancedMesh&&Gt.instancing===!1?pn=!0:It.isInstancedMesh||Gt.instancing!==!0?It.isSkinnedMesh&&Gt.skinning===!1?pn=!0:It.isSkinnedMesh||Gt.skinning!==!0?It.isInstancedMesh&&Gt.instancingColor===!0&&It.instanceColor===null||It.isInstancedMesh&&Gt.instancingColor===!1&&It.instanceColor!==null||It.isInstancedMesh&&Gt.instancingMorph===!0&&It.morphTexture===null||It.isInstancedMesh&&Gt.instancingMorph===!1&&It.morphTexture!==null||Gt.envMap!==hi||Ot.fog===!0&&Gt.fog!==dn?pn=!0:Gt.numClippingPlanes===void 0||Gt.numClippingPlanes===Ct.numPlanes&&Gt.numIntersection===Ct.numIntersection?(Gt.vertexAlphas!==Mn||Gt.vertexTangents!==mr||Gt.morphTargets!==Bn||Gt.morphNormals!==xl||Gt.morphColors!==gr||Gt.toneMapping!==bu||Gt.morphTargetsCount!==Am)&&(pn=!0):pn=!0:pn=!0:pn=!0:pn=!0:(pn=!0,Gt.__version=Ot.version);let Gi=Gt.currentProgram;pn===!0&&(Gi=oa(Ot,re,It));let Ru=!1,cs=!1,Tl=!1,pe=Gi.getUniforms(),ci=Gt.uniforms;if(E.useProgram(Gi.program)&&(Ru=!0,cs=!0,Tl=!0),Ot.id!==V&&(V=Ot.id,cs=!0),Ru||P!==Ht){E.buffers.depth.getReversed()&&Ht.reversedDepth!==!0&&(Ht._reversedDepth=!0,Ht.updateProjectionMatrix()),pe.setValue(D,"projectionMatrix",Ht.projectionMatrix),pe.setValue(D,"viewMatrix",Ht.matrixWorldInverse);let an=pe.map.cameraPosition;an!==void 0&&an.setValue(D,gt.setFromMatrixPosition(Ht.matrixWorld)),L.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(Ht.far+1)/Math.LN2)),(Ot.isMeshPhongMaterial||Ot.isMeshToonMaterial||Ot.isMeshLambertMaterial||Ot.isMeshBasicMaterial||Ot.isMeshStandardMaterial||Ot.isShaderMaterial)&&pe.setValue(D,"isOrthographic",Ht.isOrthographicCamera===!0),P!==Ht&&(P=Ht,cs=!0,Tl=!0)}if(It.isSkinnedMesh){pe.setOptional(D,It,"bindMatrix"),pe.setOptional(D,It,"bindMatrixInverse");let an=It.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),pe.setValue(D,"boneTexture",an.boneTexture,H))}It.isBatchedMesh&&(pe.setOptional(D,It,"batchingTexture"),pe.setValue(D,"batchingTexture",It._matricesTexture,H),pe.setOptional(D,It,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",It._indirectTexture,H),pe.setOptional(D,It,"batchingColorTexture"),It._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",It._colorsTexture,H));let El=we.morphAttributes;El.position===void 0&&El.normal===void 0&&El.color===void 0||xt.update(It,we,Gi),(cs||Gt.receiveShadow!==It.receiveShadow)&&(Gt.receiveShadow=It.receiveShadow,pe.setValue(D,"receiveShadow",It.receiveShadow)),Ot.isMeshGouraudMaterial&&Ot.envMap!==null&&(ci.envMap.value=hi,ci.flipEnvMap.value=hi.isCubeTexture&&hi.isRenderTargetTexture===!1?-1:1),Ot.isMeshStandardMaterial&&Ot.envMap===null&&re.environment!==null&&(ci.envMapIntensity.value=re.environmentIntensity),cs&&(pe.setValue(D,"toneMappingExposure",g.toneMappingExposure),Gt.needsLights&&(fn=Tl,(Sn=ci).ambientLightColor.needsUpdate=fn,Sn.lightProbe.needsUpdate=fn,Sn.directionalLights.needsUpdate=fn,Sn.directionalLightShadows.needsUpdate=fn,Sn.pointLights.needsUpdate=fn,Sn.pointLightShadows.needsUpdate=fn,Sn.spotLights.needsUpdate=fn,Sn.spotLightShadows.needsUpdate=fn,Sn.rectAreaLights.needsUpdate=fn,Sn.hemisphereLights.needsUpdate=fn),dn&&Ot.fog===!0&&Et.refreshFogUniforms(ci,dn),Et.refreshMaterialUniforms(ci,Ot,B,k,f.state.transmissionRenderTarget[Ht.id]),Js.upload(D,Eu(Gt),ci,H));var Sn,fn;if(Ot.isShaderMaterial&&Ot.uniformsNeedUpdate===!0&&(Js.upload(D,Eu(Gt),ci,H),Ot.uniformsNeedUpdate=!1),Ot.isSpriteMaterial&&pe.setValue(D,"center",It.center),pe.setValue(D,"modelViewMatrix",It.modelViewMatrix),pe.setValue(D,"normalMatrix",It.normalMatrix),pe.setValue(D,"modelMatrix",It.matrixWorld),Ot.isShaderMaterial||Ot.isRawShaderMaterial){let an=Ot.uniformsGroups;for(let wl=0,Cm=an.length;wl<Cm;wl++){let Cu=an[wl];li.update(Cu,Gi),li.bind(Cu,Gi)}}return Gi}(b,Y,$,nt,J);E.setMaterial(nt,_t);let Tt=$.index,At=1;if(nt.wireframe===!0){if(Tt=tt.getWireframeAttribute($),Tt===void 0)return;At=2}let Lt=$.drawRange,Rt=$.attributes.position,Dt=Lt.start*At,ne=(Lt.start+Lt.count)*At;ct!==null&&(Dt=Math.max(Dt,ct.start*At),ne=Math.min(ne,(ct.start+ct.count)*At)),Tt!==null?(Dt=Math.max(Dt,0),ne=Math.min(ne,Tt.count)):Rt!=null&&(Dt=Math.max(Dt,0),ne=Math.min(ne,Rt.count));let oe=ne-Dt;if(oe<0||oe===1/0)return;let de;kt.setup(J,nt,Mt,$,Tt);let ie=Le;if(Tt!==null&&(de=ut.get(Tt),ie=St,ie.setIndex(de)),J.isMesh)nt.wireframe===!0?(E.setLineWidth(nt.wireframeLinewidth*O()),ie.setMode(D.LINES)):ie.setMode(D.TRIANGLES);else if(J.isLine){let Ht=nt.linewidth;Ht===void 0&&(Ht=1),E.setLineWidth(Ht*O()),J.isLineSegments?ie.setMode(D.LINES):J.isLineLoop?ie.setMode(D.LINE_LOOP):ie.setMode(D.LINE_STRIP)}else J.isPoints?ie.setMode(D.POINTS):J.isSprite&&ie.setMode(D.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(M.get("WEBGL_multi_draw"))ie.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let{_multiDrawStarts:Ht,_multiDrawCounts:re,_multiDrawCount:we}=J,Ot=Tt?ut.get(Tt).bytesPerElement:1,It=z.get(nt).currentProgram.getUniforms();for(let dn=0;dn<we;dn++)It.setValue(D,"_gl_DrawID",dn),ie.render(Ht[dn]/Ot,re[dn])}else if(J.isInstancedMesh)ie.renderInstances(Dt,oe,J.count);else if($.isInstancedBufferGeometry){let Ht=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,re=Math.min($.instanceCount,Ht);ie.renderInstances(Dt,oe,re)}else ie.render(Dt,oe)},this.compile=function(b,Y,$=null){$===null&&($=b),f=Bt.get($),f.init(Y),y.push(f),$.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),b!==$&&b.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(f.pushLight(J),J.castShadow&&f.pushShadow(J))}),f.setupLights();let nt=new Set;return b.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ct=J.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let Mt=ct[_t];ra(Mt,$,J),nt.add(Mt)}else ra(ct,$,J),nt.add(ct)}),f=y.pop(),nt},this.compileAsync=function(b,Y,$=null){let nt=this.compile(b,Y,$);return new Promise((J)=>{function ct(){nt.forEach(function(_t){z.get(_t).currentProgram.isReady()&&nt.delete(_t)}),nt.size!==0?setTimeout(ct,10):J(b)}M.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let sa=null;function yu(){Hi.stop()}function Mu(){Hi.start()}let Hi=new rf;function Ml(b,Y,$,nt){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||mt.intersectsSprite(b)){nt&&A.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);let ct=st.update(b),_t=b.material;_t.visible&&m.push(b,ct,_t,$,A.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||mt.intersectsObject(b))){let ct=st.update(b),_t=b.material;if(nt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),A.copy(b.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),A.copy(ct.boundingSphere.center)),A.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(_t)){let Mt=ct.groups;for(let Tt=0,At=Mt.length;Tt<At;Tt++){let Lt=Mt[Tt],Rt=_t[Lt.materialIndex];Rt&&Rt.visible&&m.push(b,ct,Rt,$,A.z,Lt)}}else _t.visible&&m.push(b,ct,_t,$,A.z,null)}}let J=b.children;for(let ct=0,_t=J.length;ct<_t;ct++)Ml(J[ct],Y,$,nt)}function Su(b,Y,$,nt){let{opaque:J,transmissive:ct,transparent:_t}=b;f.setupLightsView($),lt===!0&&Ct.setGlobalState(g.clippingPlanes,$),nt&&E.viewport(F.copy(nt)),J.length>0&&aa(J,Y,$),ct.length>0&&aa(ct,Y,$),_t.length>0&&aa(_t,Y,$),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function xu(b,Y,$,nt){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[nt.id]===void 0&&(f.state.transmissionRenderTarget[nt.id]=new ni(1,1,{generateMipmaps:!0,type:M.has("EXT_color_buffer_half_float")||M.has("EXT_color_buffer_float")?Us:Si,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let J=f.state.transmissionRenderTarget[nt.id],ct=nt.viewport||F;J.setSize(ct.z*g.transmissionResolutionScale,ct.w*g.transmissionResolutionScale);let _t=g.getRenderTarget(),Mt=g.getActiveCubeFace(),Tt=g.getActiveMipmapLevel();g.setRenderTarget(J),g.getClearColor(Z),X=g.getClearAlpha(),X<1&&g.setClearColor(16777215,0.5),g.clear(),C&&dt.render($);let At=g.toneMapping;g.toneMapping=jn;let Lt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),f.setupLightsView(nt),lt===!0&&Ct.setGlobalState(g.clippingPlanes,nt),aa(b,$,nt),H.updateMultisampleRenderTarget(J),H.updateRenderTargetMipmap(J),M.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Dt=0,ne=Y.length;Dt<ne;Dt++){let oe=Y[Dt],de=oe.object,ie=oe.geometry,Ht=oe.material,re=oe.group;if(Ht.side===be&&de.layers.test(nt.layers)){let we=Ht.side;Ht.side=$e,Ht.needsUpdate=!0,Tu(de,$,nt,ie,Ht,re),Ht.side=we,Ht.needsUpdate=!0,Rt=!0}}Rt===!0&&(H.updateMultisampleRenderTarget(J),H.updateRenderTargetMipmap(J))}g.setRenderTarget(_t,Mt,Tt),g.setClearColor(Z,X),Lt!==void 0&&(nt.viewport=Lt),g.toneMapping=At}function aa(b,Y,$){let nt=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,ct=b.length;J<ct;J++){let _t=b[J],Mt=_t.object,Tt=_t.geometry,At=_t.group,Lt=_t.material;Lt.allowOverride===!0&&nt!==null&&(Lt=nt),Mt.layers.test($.layers)&&Tu(Mt,Y,$,Tt,Lt,At)}}function Tu(b,Y,$,nt,J,ct){b.onBeforeRender(g,Y,$,nt,J,ct),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),J.onBeforeRender(g,Y,$,nt,b,ct),J.transparent===!0&&J.side===be&&J.forceSinglePass===!1?(J.side=$e,J.needsUpdate=!0,g.renderBufferDirect($,Y,nt,J,b,ct),J.side=An,J.needsUpdate=!0,g.renderBufferDirect($,Y,nt,J,b,ct),J.side=be):g.renderBufferDirect($,Y,nt,J,b,ct),b.onAfterRender(g,Y,$,nt,J,ct)}function oa(b,Y,$){Y.isScene!==!0&&(Y=x);let nt=z.get(b),J=f.state.lights,ct=f.state.shadowsArray,_t=J.state.version,Mt=yt.getParameters(b,J.state,ct,Y,$),Tt=yt.getProgramCacheKey(Mt),At=nt.programs;nt.environment=b.isMeshStandardMaterial?Y.environment:null,nt.fog=Y.fog,nt.envMap=(b.isMeshStandardMaterial?ot:W).get(b.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",hs),At=new Map,nt.programs=At);let Lt=At.get(Tt);if(Lt!==void 0){if(nt.currentProgram===Lt&&nt.lightsStateVersion===_t)return wu(b,Mt),Lt}else Mt.uniforms=yt.getUniforms(b),b.onBeforeCompile(Mt,g),Lt=yt.acquireProgram(Mt,Tt),At.set(Tt,Lt),nt.uniforms=Mt.uniforms;let Rt=nt.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(Rt.clippingPlanes=Ct.uniform),wu(b,Mt),nt.needsLights=function(Dt){return Dt.isMeshLambertMaterial||Dt.isMeshToonMaterial||Dt.isMeshPhongMaterial||Dt.isMeshStandardMaterial||Dt.isShadowMaterial||Dt.isShaderMaterial&&Dt.lights===!0}(b),nt.lightsStateVersion=_t,nt.needsLights&&(Rt.ambientLightColor.value=J.state.ambient,Rt.lightProbe.value=J.state.probe,Rt.directionalLights.value=J.state.directional,Rt.directionalLightShadows.value=J.state.directionalShadow,Rt.spotLights.value=J.state.spot,Rt.spotLightShadows.value=J.state.spotShadow,Rt.rectAreaLights.value=J.state.rectArea,Rt.ltc_1.value=J.state.rectAreaLTC1,Rt.ltc_2.value=J.state.rectAreaLTC2,Rt.pointLights.value=J.state.point,Rt.pointLightShadows.value=J.state.pointShadow,Rt.hemisphereLights.value=J.state.hemi,Rt.directionalShadowMap.value=J.state.directionalShadowMap,Rt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Rt.spotShadowMap.value=J.state.spotShadowMap,Rt.spotLightMatrix.value=J.state.spotLightMatrix,Rt.spotLightMap.value=J.state.spotLightMap,Rt.pointShadowMap.value=J.state.pointShadowMap,Rt.pointShadowMatrix.value=J.state.pointShadowMatrix),nt.currentProgram=Lt,nt.uniformsList=null,Lt}function Eu(b){if(b.uniformsList===null){let Y=b.currentProgram.getUniforms();b.uniformsList=Js.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function wu(b,Y){let $=z.get(b);$.outputColorSpace=Y.outputColorSpace,$.batching=Y.batching,$.batchingColor=Y.batchingColor,$.instancing=Y.instancing,$.instancingColor=Y.instancingColor,$.instancingMorph=Y.instancingMorph,$.skinning=Y.skinning,$.morphTargets=Y.morphTargets,$.morphNormals=Y.morphNormals,$.morphColors=Y.morphColors,$.morphTargetsCount=Y.morphTargetsCount,$.numClippingPlanes=Y.numClippingPlanes,$.numIntersection=Y.numClipIntersection,$.vertexAlphas=Y.vertexAlphas,$.vertexTangents=Y.vertexTangents,$.toneMapping=Y.toneMapping}Hi.setAnimationLoop(function(b){sa&&sa(b)}),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(b){sa=b,Zt.setAnimationLoop(b),b===null?Hi.stop():Hi.start()},Zt.addEventListener("sessionstart",yu),Zt.addEventListener("sessionend",Mu),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(Y),Y=Zt.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,Y,I),f=Bt.get(b,y.length),f.init(Y),y.push(f),ht.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),mt.setFromProjectionMatrix(ht,$h,Y.reversedDepth),rt=this.localClippingEnabled,lt=Ct.init(this.clippingPlanes,rt),m=Pt.get(b,v.length),m.init(),v.push(m),Zt.enabled===!0&&Zt.isPresenting===!0){let ct=g.xr.getDepthSensingMesh();ct!==null&&Ml(ct,Y,-1/0,g.sortObjects)}Ml(b,Y,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(q,at),C=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,C&&dt.addToRenderList(m,b),this.info.render.frame++,lt===!0&&Ct.beginShadows();let $=f.state.shadowsArray;et.render($,b,Y),lt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let{opaque:nt,transmissive:J}=m;if(f.setupLights(),Y.isArrayCamera){let ct=Y.cameras;if(J.length>0)for(let _t=0,Mt=ct.length;_t<Mt;_t++)xu(nt,J,b,ct[_t]);C&&dt.render(b);for(let _t=0,Mt=ct.length;_t<Mt;_t++){let Tt=ct[_t];Su(m,b,Tt,Tt.viewport)}}else J.length>0&&xu(nt,J,b,Y),C&&dt.render(b),Su(m,b,Y);I!==null&&w===0&&(H.updateMultisampleRenderTarget(I),H.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(g,b,Y),kt.resetDefaultState(),V=-1,P=null,y.pop(),y.length>0?(f=y[y.length-1],lt===!0&&Ct.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,Y,$){let nt=z.get(b);nt.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),z.get(b.texture).__webglTexture=Y,z.get(b.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:$,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){let $=z.get(b);$.__webglFramebuffer=Y,$.__useDefaultFramebuffer=Y===void 0};let Em=D.createFramebuffer();this.setRenderTarget=function(b,Y=0,$=0){I=b,R=Y,w=$;let nt=!0,J=null,ct=!1,_t=!1;if(b){let Mt=z.get(b);if(Mt.__useDefaultFramebuffer!==void 0)E.bindFramebuffer(D.FRAMEBUFFER,null),nt=!1;else if(Mt.__webglFramebuffer===void 0)H.setupRenderTarget(b);else if(Mt.__hasExternalTextures)H.rebindTextures(b,z.get(b.texture).__webglTexture,z.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Lt=b.depthTexture;if(Mt.__boundDepthTexture!==Lt){if(Lt!==null&&z.has(Lt)&&(b.width!==Lt.image.width||b.height!==Lt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(b)}}let Tt=b.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(_t=!0);let At=z.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(J=Array.isArray(At[Y])?At[Y][$]:At[Y],ct=!0):J=b.samples>0&&H.useMultisampledRTT(b)===!1?z.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?At[$]:At,F.copy(b.viewport),N.copy(b.scissor),G=b.scissorTest}else F.copy(ft).multiplyScalar(B).floor(),N.copy(Q).multiplyScalar(B).floor(),G=K;if($!==0&&(J=Em),E.bindFramebuffer(D.FRAMEBUFFER,J)&&nt&&E.drawBuffers(b,J),E.viewport(F),E.scissor(N),E.setScissorTest(G),ct){let Mt=z.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Mt.__webglTexture,$)}else if(_t){let Mt=Y;for(let Tt=0;Tt<b.textures.length;Tt++){let At=z.get(b.textures[Tt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Tt,At.__webglTexture,$,Mt)}}else if(b!==null&&$!==0){let Mt=z.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,$)}V=-1},this.readRenderTargetPixels=function(b,Y,$,nt,J,ct,_t,Mt=0){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){E.bindFramebuffer(D.FRAMEBUFFER,Tt);try{let At=b.textures[Mt],Lt=At.format,Rt=At.type;if(!L.textureFormatReadable(Lt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Rt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=b.width-nt&&$>=0&&$<=b.height-J&&(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt),D.readPixels(Y,$,nt,J,zt.convert(Lt),zt.convert(Rt),ct))}finally{let At=I!==null?z.get(I).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,Y,$,nt,J,ct,_t,Mt=0){if(!b||!b.isWebGLRenderTarget)throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=z.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){if(Y>=0&&Y<=b.width-nt&&$>=0&&$<=b.height-J){E.bindFramebuffer(D.FRAMEBUFFER,Tt);let At=b.textures[Mt],Lt=At.format,Rt=At.type;if(!L.textureFormatReadable(Lt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(Rt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt),D.readPixels(Y,$,nt,J,zt.convert(Lt),zt.convert(Rt),0);let ne=I!==null?z.get(I).__webglFramebuffer:null;E.bindFramebuffer(D.FRAMEBUFFER,ne);let oe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await yp(D,oe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Dt),D.deleteSync(oe),ct}throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Y=null,$=0){let nt=Math.pow(2,-$),J=Math.floor(b.image.width*nt),ct=Math.floor(b.image.height*nt),_t=Y!==null?Y.x:0,Mt=Y!==null?Y.y:0;H.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,_t,Mt,J,ct),E.unbindTexture()};let wm=D.createFramebuffer(),bm=D.createFramebuffer();this.copyTextureToTexture=function(b,Y,$=null,nt=null,J=0,ct=null){let _t,Mt,Tt,At,Lt,Rt,Dt,ne,oe;ct===null&&(J!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=J,J=0):ct=0);let de=b.isCompressedTexture?b.mipmaps[ct]:b.image;if($!==null)_t=$.max.x-$.min.x,Mt=$.max.y-$.min.y,Tt=$.isBox3?$.max.z-$.min.z:1,At=$.min.x,Lt=$.min.y,Rt=$.isBox3?$.min.z:0;else{let Mn=Math.pow(2,-J);_t=Math.floor(de.width*Mn),Mt=Math.floor(de.height*Mn),Tt=b.isDataArrayTexture?de.depth:b.isData3DTexture?Math.floor(de.depth*Mn):1,At=0,Lt=0,Rt=0}nt!==null?(Dt=nt.x,ne=nt.y,oe=nt.z):(Dt=0,ne=0,oe=0);let ie=zt.convert(Y.format),Ht=zt.convert(Y.type),re;Y.isData3DTexture?(H.setTexture3D(Y,0),re=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(H.setTexture2DArray(Y,0),re=D.TEXTURE_2D_ARRAY):(H.setTexture2D(Y,0),re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);let we=D.getParameter(D.UNPACK_ROW_LENGTH),Ot=D.getParameter(D.UNPACK_IMAGE_HEIGHT),It=D.getParameter(D.UNPACK_SKIP_PIXELS),dn=D.getParameter(D.UNPACK_SKIP_ROWS),Sl=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,At),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);let la=b.isDataArrayTexture||b.isData3DTexture,hi=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){let Mn=z.get(b),mr=z.get(Y),Bn=z.get(Mn.__renderTarget),xl=z.get(mr.__renderTarget);E.bindFramebuffer(D.READ_FRAMEBUFFER,Bn.__webglFramebuffer),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,xl.__webglFramebuffer);for(let gr=0;gr<Tt;gr++)la&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(b).__webglTexture,J,Rt+gr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,z.get(Y).__webglTexture,ct,oe+gr)),D.blitFramebuffer(At,Lt,_t,Mt,Dt,ne,_t,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(J!==0||b.isRenderTargetTexture||z.has(b)){let Mn=z.get(b),mr=z.get(Y);E.bindFramebuffer(D.READ_FRAMEBUFFER,wm),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,bm);for(let Bn=0;Bn<Tt;Bn++)la?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mn.__webglTexture,J,Rt+Bn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mn.__webglTexture,J),hi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mr.__webglTexture,ct,oe+Bn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mr.__webglTexture,ct),J!==0?D.blitFramebuffer(At,Lt,_t,Mt,Dt,ne,_t,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):hi?D.copyTexSubImage3D(re,ct,Dt,ne,oe+Bn,At,Lt,_t,Mt):D.copyTexSubImage2D(re,ct,Dt,ne,At,Lt,_t,Mt);E.bindFramebuffer(D.READ_FRAMEBUFFER,null),E.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else hi?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(re,ct,Dt,ne,oe,_t,Mt,Tt,ie,Ht,de.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(re,ct,Dt,ne,oe,_t,Mt,Tt,ie,de.data):D.texSubImage3D(re,ct,Dt,ne,oe,_t,Mt,Tt,ie,Ht,de):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,Dt,ne,_t,Mt,ie,Ht,de.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,Dt,ne,de.width,de.height,ie,de.data):D.texSubImage2D(D.TEXTURE_2D,ct,Dt,ne,_t,Mt,ie,Ht,de);D.pixelStorei(D.UNPACK_ROW_LENGTH,we),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,dn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Sl),ct===0&&Y.generateMipmaps&&D.generateMipmap(re),E.unbindTexture()},this.copyTextureToTexture3D=function(b,Y,$=null,nt=null,J=0){return Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Y,$,nt,J)},this.initRenderTarget=function(b){z.get(b).__webglFramebuffer===void 0&&H.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?H.setTextureCube(b,0):b.isData3DTexture?H.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?H.setTexture2DArray(b,0):H.setTexture2D(b,0),E.unbindTexture()},this.resetState=function(){R=0,w=0,I=null,E.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $h}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}function Oc(t,e){if(e===Zh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===Xr||e===Fs){let n=t.getIndex();if(n===null){let a=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);t.setIndex(a),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,r=[];if(e===Xr)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)if(a%2===0)r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2));else r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a));if(r.length/3!==i)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}class Wc extends si{constructor(t){super(t);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Tf(e)}),this.register(function(e){return new Ef(e)}),this.register(function(e){return new Uf(e)}),this.register(function(e){return new Nf(e)}),this.register(function(e){return new Ff(e)}),this.register(function(e){return new bf(e)}),this.register(function(e){return new Af(e)}),this.register(function(e){return new Rf(e)}),this.register(function(e){return new Cf(e)}),this.register(function(e){return new xf(e)}),this.register(function(e){return new Lf(e)}),this.register(function(e){return new wf(e)}),this.register(function(e){return new Pf(e)}),this.register(function(e){return new If(e)}),this.register(function(e){return new Mf(e)}),this.register(function(e){return new Df(e)}),this.register(function(e){return new Of(e)})}load(t,e,n,i){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=Ri.extractUrlBase(t);s=Ri.resolveURL(l,this.path)}else s=Ri.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){if(i)i(l);else console.error(l);r.manager.itemError(t),r.manager.itemEnd(t)},o=new Xs(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{r.parse(l,s,function(c){e(c),r.manager.itemEnd(t)},a)}catch(c){a(c)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){if(this.pluginCallbacks.indexOf(t)===-1)this.pluginCallbacks.push(t);return this}unregister(t){if(this.pluginCallbacks.indexOf(t)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1);return this}parse(t,e,n,i){let r,s={},a={},o=new TextDecoder;if(typeof t==="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(o.decode(new Uint8Array(t,0,4))===Bf){try{s[Vt.KHR_BINARY_GLTF]=new zf(t)}catch(h){if(i)i(h);return}r=JSON.parse(s[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){if(i)i(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new kf(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let h=this.pluginCallbacks[c](l);if(!h.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");a[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){let h=r.extensionsUsed[c],d=r.extensionsRequired||[];switch(h){case Vt.KHR_MATERIALS_UNLIT:s[h]=new Sf;break;case Vt.KHR_DRACO_MESH_COMPRESSION:s[h]=new Vf(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:s[h]=new Hf;break;case Vt.KHR_MESH_QUANTIZATION:s[h]=new Gf;break;default:if(d.indexOf(h)>=0&&a[h]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function q0(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}var Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Mf{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,c=new vt(16777215);if(o.color!==void 0)c.setRGB(o.color[0],o.color[1],o.color[2],ze);let h=o.range!==void 0?o.range:0;switch(o.type){case"directional":l=new Ai(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ar(c),l.distance=h;break;case"spot":l=new Ko(c),l.distance=h,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,l.angle=o.spot.outerConeAngle,l.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}if(l.position.set(0,0,0),ai(l,o),o.intensity!==void 0)l.intensity=o.intensity;return l.name=e.createUniqueName(o.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t!=="light")return;return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;if(a===void 0)return null;return this._loadLight(a).then(function(o){return n._getNodeRef(e.cache,a,o)})}}class Sf{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ae}extendParams(t,e,n){let i=[];t.color=new vt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],ze),t.opacity=s[3]}if(r.baseColorTexture!==void 0)i.push(n.assignTexture(t,"map",r.baseColorTexture,ge))}return Promise.all(i)}}class xf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;if(r!==void 0)e.emissiveIntensity=r;return Promise.resolve()}}class Tf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0)e.clearcoat=s.clearcoatFactor;if(s.clearcoatTexture!==void 0)r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture));if(s.clearcoatRoughnessFactor!==void 0)e.clearcoatRoughness=s.clearcoatRoughnessFactor;if(s.clearcoatRoughnessTexture!==void 0)r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture));if(s.clearcoatNormalTexture!==void 0){if(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0){let a=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new it(a,a)}}return Promise.all(r)}}class Ef{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class wf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.iridescenceFactor!==void 0)e.iridescence=s.iridescenceFactor;if(s.iridescenceTexture!==void 0)r.push(n.assignTexture(e,"iridescenceMap",s.iridescenceTexture));if(s.iridescenceIor!==void 0)e.iridescenceIOR=s.iridescenceIor;if(e.iridescenceThicknessRange===void 0)e.iridescenceThicknessRange=[100,400];if(s.iridescenceThicknessMinimum!==void 0)e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum;if(s.iridescenceThicknessMaximum!==void 0)e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum;if(s.iridescenceThicknessTexture!==void 0)r.push(n.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture));return Promise.all(r)}}class bf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new vt(0,0,0),e.sheenRoughness=0,e.sheen=1;let s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){let a=s.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ze)}if(s.sheenRoughnessFactor!==void 0)e.sheenRoughness=s.sheenRoughnessFactor;if(s.sheenColorTexture!==void 0)r.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,ge));if(s.sheenRoughnessTexture!==void 0)r.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture));return Promise.all(r)}}class Af{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.transmissionFactor!==void 0)e.transmission=s.transmissionFactor;if(s.transmissionTexture!==void 0)r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture));return Promise.all(r)}}class Rf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0)r.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture));e.attenuationDistance=s.attenuationDistance||1/0;let a=s.attenuationColor||[1,1,1];return e.attenuationColor=new vt().setRGB(a[0],a[1],a[2],ze),Promise.all(r)}}class Cf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Lf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0)r.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));let a=s.specularColorFactor||[1,1,1];if(e.specularColor=new vt().setRGB(a[0],a[1],a[2],ze),s.specularColorTexture!==void 0)r.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,ge));return Promise.all(r)}}class If{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0)r.push(n.assignTexture(e,"bumpMap",s.bumpTexture));return Promise.all(r)}}class Pf{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Qe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.anisotropyStrength!==void 0)e.anisotropy=s.anisotropyStrength;if(s.anisotropyRotation!==void 0)e.anisotropyRotation=s.anisotropyRotation;if(s.anisotropyTexture!==void 0)r.push(n.assignTexture(e,"anisotropyMap",s.anisotropyTexture));return Promise.all(r)}}class Uf{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],s=e.options.ktx2Loader;if(!s)if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return e.loadTextureImage(t,r.source,s)}}class Nf{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let s=r.extensions[e],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);if(l!==null)o=l}return n.loadTextureImage(t,s.source,o)}}class Ff{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let s=r.extensions[e],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);if(l!==null)o=l}return n.loadTextureImage(t,s.source,o)}}class Df{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported)if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(a){let o=i.byteOffset||0,l=i.byteLength||0,c=i.count,h=i.byteStride,d=new Uint8Array(a,o,l);if(s.decodeGltfBufferAsync)return s.decodeGltfBufferAsync(c,h,d,i.mode,i.filter).then(function(u){return u.buffer});else return s.ready.then(function(){let u=new ArrayBuffer(c*h);return s.decodeGltfBuffer(new Uint8Array(u),c,h,d,i.mode,i.filter),u})})}else return null}}class Of{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==cn.TRIANGLES&&l.mode!==cn.TRIANGLE_STRIP&&l.mode!==cn.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=n.extensions[this.name].attributes,a=[],o={};for(let l in s)a.push(this.parser.getDependency("accessor",s[l]).then((c)=>{return o[l]=c,o[l]}));if(a.length<1)return null;return a.push(this.parser.createNodeMesh(t)),Promise.all(a).then((l)=>{let c=l.pop(),h=c.isGroup?c.children:[c],d=l[0].count,u=[];for(let p of h){let _=new wt,m=new T,f=new me,v=new T(1,1,1),y=new Mo(p.geometry,p.material,d);for(let g=0;g<d;g++){if(o.TRANSLATION)m.fromBufferAttribute(o.TRANSLATION,g);if(o.ROTATION)f.fromBufferAttribute(o.ROTATION,g);if(o.SCALE)v.fromBufferAttribute(o.SCALE,g);y.setMatrixAt(g,_.compose(m,f,v))}for(let g in o)if(g==="_COLOR_0"){let S=o[g];y.instanceColor=new Ji(S.array,S.itemSize,S.normalized)}else if(g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE")p.geometry.setAttribute(g,o[g]);te.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),u.push(y)}if(c.isGroup)return c.clear(),c.add(...u),c;return u[0]})}}var Bf="glTF",js=12,gf={JSON:1313821514,BIN:5130562};class zf{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Bf)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-js,r=new DataView(t,js),s=0;while(s<i){let a=r.getUint32(s,!0);s+=4;let o=r.getUint32(s,!0);if(s+=4,o===gf.JSON){let l=new Uint8Array(t,js+s,a);this.content=n.decode(l)}else if(o===gf.BIN){let l=js+s;this.body=t.slice(l,l+a)}s+=a}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class Vf{constructor(t,e){if(!e)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,a={},o={},l={};for(let c in s){let h=Hc[c]||c.toLowerCase();a[h]=s[c]}for(let c in t.attributes){let h=Hc[c]||c.toLowerCase();if(s[c]!==void 0){let d=n.accessors[t.attributes[c]],u=ts[d.componentType];l[h]=u.name,o[h]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(c){return new Promise(function(h,d){i.decodeDracoFile(c,function(u){for(let p in u.attributes){let _=u.attributes[p],m=o[p];if(m!==void 0)_.normalized=m}h(u)},a,l,ze,d)})})}}class Hf{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0)t.channel=e.texCoord;if(e.offset!==void 0)t.offset.fromArray(e.offset);if(e.rotation!==void 0)t.rotation=e.rotation;if(e.scale!==void 0)t.repeat.fromArray(e.scale);return t.needsUpdate=!0,t}}class Gf{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class kc extends bi{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let s=0;s!==i;s++)e[s]=n[r+s];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,c=i-e,h=(n-e)/c,d=h*h,u=d*h,p=t*l,_=p-l,m=-2*u+3*d,f=u-d,v=1-m,y=f-d+h;for(let g=0;g!==a;g++){let S=s[_+g+a],R=s[_+g+o]*c,w=s[p+g+a],I=s[p+g]*c;r[g]=v*S+y*R+m*w+f*I}return r}}var Y0=new me;class Wf extends kc{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return Y0.fromArray(r).normalize().toArray(r),r}}var cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_f={9728:Kn,9729:We,9984:ro,9985:Hr,9986:Qi,9987:$n},vf={33071:$i,33648:io,10497:yn},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Z0={CUBICSPLINE:void 0,LINEAR:uo,STEP:Yh},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J0(t){if(t.DefaultMaterial===void 0)t.DefaultMaterial=new wi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An});return t.DefaultMaterial}function cr(t,e,n){for(let i in n.extensions)if(t[i]===void 0)e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i]}function ai(t,e){if(e.extras!==void 0)if(typeof e.extras==="object")Object.assign(t.userData,e.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras)}function j0(t,e,n){let i=!1,r=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0)i=!0;if(d.NORMAL!==void 0)r=!0;if(d.COLOR_0!==void 0)s=!0;if(i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(i){let u=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):t.attributes.position;a.push(u)}if(r){let u=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):t.attributes.normal;o.push(u)}if(s){let u=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):t.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];if(i)t.morphAttributes.position=h;if(r)t.morphAttributes.normal=d;if(s)t.morphAttributes.color=u;return t.morphTargetsRelative=!0,t})}function K0(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $0(t){let e,n=t.extensions&&t.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(n)e="draco:"+n.bufferView+":"+n.indices+":"+Vc(n.attributes);else e=t.indices+":"+Vc(t.attributes)+":"+t.mode;if(t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+Vc(t.targets[i]);return e}function Vc(t){let e="",n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Gc(t){switch(t){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Q0(t){if(t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0)return"image/webp";if(t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var t_=new wt;class kf{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new q0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,s=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let o=a.match(/Version\/(\d+)/);i=n&&o?parseInt(o[1],10):-1,r=a.indexOf("Firefox")>-1,s=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||n&&i<17||r&&s<98)this.textureLoader=new Zo(this.options.manager);else this.textureLoader=new $o(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){let a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return cr(r,a,i),ai(a,i),Promise.all(n._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){for(let o of a.scenes)o.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let s=e[i].joints;for(let a=0,o=s.length;a<o;a++)t[s[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let s=t[i];if(s.mesh!==void 0){if(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0)n[s.mesh].isSkinnedMesh=!0}if(s.camera!==void 0)this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){if(e===void 0)return;if(t.refs[e]===void 0)t.refs[e]=t.uses[e]=0;t.refs[e]++}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(s,a)=>{let o=this.associations.get(s);if(o!=null)this.associations.set(a,o);for(let[l,c]of s.children.entries())r(c,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);if(r)n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,s){return n.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,s){n.load(Ri.resolveURL(e.uri,i.path),r,void 0,function(){s(Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let s=Bc[i.type],a=ts[i.componentType],o=i.normalized===!0,l=new a(i.count*s);return Promise.resolve(new ae(l,s,o))}let r=[];if(i.bufferView!==void 0)r.push(this.getDependency("bufferView",i.bufferView));else r.push(null);if(i.sparse!==void 0)r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView));return Promise.all(r).then(function(s){let a=s[0],o=Bc[i.type],l=ts[i.componentType],c=l.BYTES_PER_ELEMENT,h=c*o,d=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,_,m;if(u&&u!==h){let f=Math.floor(d/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,y=e.cache.get(v);if(!y)_=new l(a,f*u,i.count*u/c),y=new qr(_,u/c),e.cache.add(v,y);m=new yi(y,o,d%u/c,p)}else{if(a===null)_=new l(i.count*o);else _=new l(a,d,i.count*o);m=new ae(_,o,p)}if(i.sparse!==void 0){let f=Bc.SCALAR,v=ts[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,g=i.sparse.values.byteOffset||0,S=new v(s[1],y,i.sparse.count*f),R=new l(s[2],g,i.sparse.count*o);if(a!==null)m=new ae(m.array.slice(),m.itemSize,m.normalized);m.normalized=!1;for(let w=0,I=S.length;w<I;w++){let V=S[w];if(m.setX(V,R[w*o]),o>=2)m.setY(V,R[w*o+1]);if(o>=3)m.setZ(V,R[w*o+2]);if(o>=4)m.setW(V,R[w*o+3]);if(o>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,s=e.images[r],a=this.textureLoader;if(s.uri){let o=n.manager.getHandler(s.uri);if(o!==null)a=o}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,s=r.textures[t],a=r.images[e],o=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(e,n).then(function(c){if(c.flipY=!1,c.name=s.name||a.name||"",c.name===""&&typeof a.uri==="string"&&a.uri.startsWith("data:image/")===!1)c.name=a.uri;let d=(r.samplers||{})[s.sampler]||{};return c.magFilter=_f[d.magFilter]||We,c.minFilter=_f[d.minFilter]||$n,c.wrapS=vf[d.wrapS]||yn,c.wrapT=vf[d.wrapT]||yn,c.generateMipmaps=!c.isCompressedTexture&&c.minFilter!==Kn&&c.minFilter!==We,i.associations.set(c,{textures:t}),c}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then((h)=>h.clone());let s=i.images[t],a=self.URL||self.webkitURL,o=s.uri||"",l=!1;if(s.bufferView!==void 0)o=n.getDependency("bufferView",s.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:s.mimeType});return o=a.createObjectURL(d),o});else if(s.uri===void 0)throw Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let c=Promise.resolve(o).then(function(h){return new Promise(function(d,u){let p=d;if(e.isImageBitmapLoader===!0)p=function(_){let m=new he(_);m.needsUpdate=!0,d(m)};e.load(Ri.resolveURL(h,r.path),p,void 0,u)})}).then(function(h){if(l===!0)a.revokeObjectURL(o);return ai(h,s),h.userData.mimeType=s.mimeType||Q0(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),h});return this.sourceCache[t]=c,c}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0)s=s.clone(),s.channel=n.texCoord;if(r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let o=r.associations.get(s);s=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,o)}}if(i!==void 0)s.colorSpace=i;return t[e]=s,s})}assignFinalMaterial(t){let{geometry:e,material:n}=t,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,o=this.cache.get(a);if(!o)o=new Ti,Ve.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,o.sizeAttenuation=!1,this.cache.add(a,o);n=o}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,o=this.cache.get(a);if(!o)o=new rr,Ve.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,this.cache.add(a,o);n=o}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";if(i)a+="derivative-tangents:";if(r)a+="vertex-colors:";if(s)a+="flat-shading:";let o=this.cache.get(a);if(!o){if(o=n.clone(),r)o.vertexColors=!0;if(s)o.flatShading=!0;if(i){if(o.normalScale)o.normalScale.y*=-1;if(o.clearcoatNormalScale)o.clearcoatNormalScale.y*=-1}this.cache.add(a,o),this.associations.set(o,this.associations.get(n))}n=o}t.material=n}getMaterialType(){return wi}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],s,a={},o=r.extensions||{},l=[];if(o[Vt.KHR_MATERIALS_UNLIT]){let h=i[Vt.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),l.push(h.extendParams(a,r,e))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new vt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ze),a.opacity=d[3]}if(h.baseColorTexture!==void 0)l.push(e.assignTexture(a,"map",h.baseColorTexture,ge));if(a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0)l.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture));s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}if(r.doubleSided===!0)a.side=be;let c=r.alphaMode||zc.OPAQUE;if(c===zc.BLEND)a.transparent=!0,a.depthWrite=!1;else if(a.transparent=!1,c===zc.MASK)a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&s!==Ae){if(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new it(1,1),r.normalTexture.scale!==void 0){let h=r.normalTexture.scale;a.normalScale.set(h,h)}}if(r.occlusionTexture!==void 0&&s!==Ae){if(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)a.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&s!==Ae){let h=r.emissiveFactor;a.emissive=new vt().setRGB(h[0],h[1],h[2],ze)}if(r.emissiveTexture!==void 0&&s!==Ae)l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ge));return Promise.all(l).then(function(){let h=new s(a);if(r.name)h.name=r.name;if(ai(h,r),e.associations.set(h,{materials:t}),r.extensions)cr(i,h,r);return h})}createUniqueName(t){let e=Jt.sanitizeNodeName(t||"");if(e in this.nodeNamesUsed)return e+"_"+ ++this.nodeNamesUsed[e];else return this.nodeNamesUsed[e]=0,e}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(o){return yf(o,a,e)})}let s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a],c=$0(l),h=i[c];if(h)s.push(h.promise);else{let d;if(l.extensions&&l.extensions[Vt.KHR_DRACO_MESH_COMPRESSION])d=r(l);else d=yf(new Kt,l,e);i[c]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],s=r.primitives,a=[];for(let o=0,l=s.length;o<l;o++){let c=s[o].material===void 0?J0(this.cache):this.getDependency("material",s[o].material);a.push(c)}return a.push(e.loadGeometries(s)),Promise.all(a).then(function(o){let l=o.slice(0,o.length-1),c=o[o.length-1],h=[];for(let u=0,p=c.length;u<p;u++){let _=c[u],m=s[u],f,v=l[u];if(m.mode===cn.TRIANGLES||m.mode===cn.TRIANGLE_STRIP||m.mode===cn.TRIANGLE_FAN||m.mode===void 0){if(f=r.isSkinnedMesh===!0?new vo(_,v):new ce(_,v),f.isSkinnedMesh===!0)f.normalizeSkinWeights();if(m.mode===cn.TRIANGLE_STRIP)f.geometry=Oc(f.geometry,Fs);else if(m.mode===cn.TRIANGLE_FAN)f.geometry=Oc(f.geometry,Xr)}else if(m.mode===cn.LINES)f=new Jr(_,v);else if(m.mode===cn.LINE_STRIP)f=new Zr(_,v);else if(m.mode===cn.LINE_LOOP)f=new xo(_,v);else if(m.mode===cn.POINTS)f=new sr(_,v);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);if(Object.keys(f.geometry.morphAttributes).length>0)K0(f,r);if(f.name=e.createUniqueName(r.name||"mesh_"+t),ai(f,r),m.extensions)cr(i,f,m);e.assignFinalMaterial(f),h.push(f)}for(let u=0,p=h.length;u<p;u++)e.associations.set(h[u],{meshes:t,primitives:u});if(h.length===1){if(r.extensions)cr(i,h[0],r);return h[0]}let d=new je;if(r.extensions)cr(i,d,r);e.associations.set(d,{meshes:t});for(let u=0,p=h.length;u<p;u++)d.add(h[u]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(n.type==="perspective")e=new _e(tr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2000000);else if(n.type==="orthographic")e=new Kr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar);if(n.name)e.name=this.createUniqueName(n.name);return ai(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));if(e.inverseBindMatrices!==void 0)n.push(this.getDependency("accessor",e.inverseBindMatrices));else n.push(null);return Promise.all(n).then(function(i){let r=i.pop(),s=i,a=[],o=[];for(let l=0,c=s.length;l<c;l++){let h=s[l];if(h){a.push(h);let d=new wt;if(r!==null)d.fromArray(r.array,l*16);o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Gs(a,o)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,s=[],a=[],o=[],l=[],c=[];for(let h=0,d=i.channels.length;h<d;h++){let u=i.channels[h],p=i.samplers[u.sampler],_=u.target,m=_.node,f=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;if(_.node===void 0)continue;s.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),o.push(this.getDependency("accessor",v)),l.push(p),c.push(_)}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(h){let d=h[0],u=h[1],p=h[2],_=h[3],m=h[4],f=[];for(let v=0,y=d.length;v<y;v++){let g=d[v],S=u[v],R=p[v],w=_[v],I=m[v];if(g===void 0)continue;if(g.updateMatrix)g.updateMatrix();let V=n._createAnimationTracks(g,S,R,w,I);if(V)for(let P=0;P<V.length;P++)f.push(V[P])}return new Br(r,void 0,f)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];if(i.mesh===void 0)return null;return n.getDependency("mesh",i.mesh).then(function(r){let s=n._getNodeRef(n.meshCache,i.mesh,r);if(i.weights!==void 0)s.traverse(function(a){if(!a.isMesh)return;for(let o=0,l=i.weights.length;o<l;o++)a.morphTargetInfluences[o]=i.weights[o]});return s})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),s=[],a=i.children||[];for(let l=0,c=a.length;l<c;l++)s.push(n.getDependency("node",a[l]));let o=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),o]).then(function(l){let c=l[0],h=l[1],d=l[2];if(d!==null)c.traverse(function(u){if(!u.isSkinnedMesh)return;u.bind(d,t_)});for(let u=0,p=h.length;u<p;u++)c.add(h[u]);return c})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],s=r.name?i.createUniqueName(r.name):"",a=[],o=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});if(o)a.push(o);if(r.camera!==void 0)a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)}));return i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let c;if(r.isBone===!0)c=new Hs;else if(l.length>1)c=new je;else if(l.length===1)c=l[0];else c=new te;if(c!==l[0])for(let h=0,d=l.length;h<d;h++)c.add(l[h]);if(r.name)c.userData.name=r.name,c.name=s;if(ai(c,r),r.extensions)cr(n,c,r);if(r.matrix!==void 0){let h=new wt;h.fromArray(r.matrix),c.applyMatrix4(h)}else{if(r.translation!==void 0)c.position.fromArray(r.translation);if(r.rotation!==void 0)c.quaternion.fromArray(r.rotation);if(r.scale!==void 0)c.scale.fromArray(r.scale)}if(!i.associations.has(c))i.associations.set(c,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(c);i.associations.set(c,{...h})}return i.associations.get(c).nodes=t,c}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new je;if(n.name)r.name=i.createUniqueName(n.name);if(ai(r,n),n.extensions)cr(e,r,n);let s=n.nodes||[],a=[];for(let o=0,l=s.length;o<l;o++)a.push(i.getDependency("node",s[o]));return Promise.all(a).then(function(o){for(let c=0,h=o.length;c<h;c++)r.add(o[c]);let l=(c)=>{let h=new Map;for(let[d,u]of i.associations)if(d instanceof Ve||d instanceof he)h.set(d,u);return c.traverse((d)=>{let u=i.associations.get(d);if(u!=null)h.set(d,u)}),h};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let s=[],a=t.name?t.name:t.uuid,o=[];if(Li[r.path]===Li.weights)t.traverse(function(d){if(d.morphTargetInfluences)o.push(d.name?d.name:d.uuid)});else o.push(a);let l;switch(Li[r.path]){case Li.weights:l=Yn;break;case Li.rotation:l=Zn;break;case Li.translation:case Li.scale:l=Jn;break;default:switch(n.itemSize){case 1:l=Yn;break;case 2:case 3:default:l=Jn;break}break}let c=i.interpolation!==void 0?Z0[i.interpolation]:uo,h=this._getArrayFromAccessor(n);for(let d=0,u=o.length;d<u;d++){let p=new l(o[d]+"."+Li[r.path],e.array,h,c);if(i.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(p);s.push(p)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Gc(e.constructor),i=new Float32Array(e.length);for(let r=0,s=e.length;r<s;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){return new(this instanceof Zn?Wf:kc)(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function e_(t,e,n){let i=e.attributes,r=new Ue;if(i.POSITION!==void 0){let o=n.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){let h=Gc(ts[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new T,l=new T;for(let c=0,h=s.length;c<h;c++){let d=s[c];if(d.POSITION!==void 0){let u=n.json.accessors[d.POSITION],p=u.min,_=u.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),u.normalized){let m=Gc(ts[u.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}t.boundingBox=r;let a=new ke;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=a}function yf(t,e,n){let i=e.attributes,r=[];function s(a,o){return n.getDependency("accessor",a).then(function(l){t.setAttribute(o,l)})}for(let a in i){let o=Hc[a]||a.toLowerCase();if(o in t.attributes)continue;r.push(s(i[a],o))}if(e.indices!==void 0&&!t.index){let a=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});r.push(a)}if(Wt.workingColorSpace!==ze&&"COLOR_0"in i)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Wt.workingColorSpace}" not supported.`);return ai(t,e),e_(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?j0(t,e.targets,n):t})}function es(t,e){let n=document.createElement("canvas");return n.width=t,n.height=e,n}function Ks(t){let e=t>>>0;return()=>{return e=e*1664525+1013904223>>>0,e/4294967296}}function ns(t,{repeatX:e=1,repeatY:n=1,srgb:i=!0}={}){let r=new Ln(t);return r.wrapS=yn,r.wrapT=yn,r.repeat.set(e,n),r.colorSpace=i?ge:ti,r.anisotropy=4,r.needsUpdate=!0,r}function n_(){let t=es(512,512),e=t.getContext("2d"),n=Ks(1024),i=e.createLinearGradient(0,0,512,0);i.addColorStop(0,"#ead8c7"),i.addColorStop(0.5,"#f0e0d0"),i.addColorStop(1,"#e7d4c2"),e.fillStyle=i,e.fillRect(0,0,512,512);let r=4,s=512/r;for(let a=0;a<r;a+=1){let o=(n()-0.5)*10;e.fillStyle=o>0?`rgba(255,248,240,${Math.abs(o)/180})`:`rgba(130,96,70,${Math.abs(o)/180})`,e.fillRect(0,a*s,512,s),e.fillStyle="rgba(140,104,78,0.13)",e.fillRect(0,a*s,512,1.5)}for(let a=0;a<240;a+=1){let o=n()*512,l=1.2+n()*2.8,c=0.008+n()*0.014,h=n()*Math.PI*2;e.strokeStyle=a%3===0?`rgba(165,126,96,${0.04+n()*0.06})`:`rgba(255,248,238,${0.05+n()*0.05})`,e.lineWidth=0.7+n()*1.4,e.beginPath();for(let d=0;d<=512;d+=16){let u=o+Math.sin(d*c+h)*l;if(d===0)e.moveTo(d,u);else e.lineTo(d,u)}e.stroke()}return ns(t,{repeatX:2,repeatY:2})}function i_(){let t=es(512,512),e=t.getContext("2d"),n=Ks(2048);e.fillStyle="#c8ab96",e.fillRect(0,0,512,512);let i=8,r=512/i;for(let s=0;s<i;s+=1){let a=s%2*180;for(let o=-1;o<3;o+=1){let l=o*256+a,c=192+Math.floor((n()-0.5)*18);e.fillStyle=`rgb(${c}, ${Math.floor(c*0.85)}, ${Math.floor(c*0.74)})`,e.fillRect(l,s*r,254,r-2);for(let h=0;h<9;h+=1){let d=s*r+4+n()*(r-8);e.strokeStyle=`rgba(125,90,68,${0.06+n()*0.07})`,e.lineWidth=1,e.beginPath(),e.moveTo(l+2,d),e.lineTo(l+252,d+(n()-0.5)*3),e.stroke()}}e.fillStyle="rgba(92,66,52,0.18)",e.fillRect(0,s*r+r-2,512,2)}return ns(t,{repeatX:4,repeatY:4})}function r_(){let t=es(256,256),e=t.getContext("2d"),n=Ks(3072);e.fillStyle="#e5d8ee",e.fillRect(0,0,256,256);for(let i=0;i<256;i+=4)for(let r=0;r<256;r+=4){let s=(r+i)/4%2===0,a=(n()-0.5)*12,o=s?236:222,l=Math.min(255,Math.max(0,o+a)),c=Math.min(255,Math.max(0,o-10+a)),h=Math.min(255,Math.max(0,o+12+a));e.fillStyle=`rgb(${l|0},${c|0},${h|0})`,e.fillRect(r,i,4,4)}e.strokeStyle="rgba(255,255,255,0.14)",e.lineWidth=1;for(let i=2;i<256;i+=8)e.beginPath(),e.moveTo(0,i),e.lineTo(256,i),e.stroke();return ns(t,{repeatX:6,repeatY:6})}function s_(){let t=es(256,256),e=t.getContext("2d"),n=Ks(4096);e.fillStyle="#ece9f5",e.fillRect(0,0,256,256);for(let i=0;i<3600;i+=1){let r=n()*256,s=n()*256,a=1+n()*2.5;e.fillStyle=n()>0.5?"rgba(255,255,255,0.08)":"rgba(170,160,198,0.06)",e.fillRect(r,s,a,a)}return ns(t,{repeatX:4,repeatY:4})}function a_(){let t=es(256,256),e=t.getContext("2d"),n=128,i=128,r=e.createRadialGradient(128,128,12,128,128,124);return r.addColorStop(0,"#805236"),r.addColorStop(0.7,"#583420"),r.addColorStop(1,"#3b2113"),e.fillStyle=r,e.fillRect(0,0,256,256),e.strokeStyle="rgba(248,236,222,0.52)",e.lineWidth=8,e.beginPath(),e.arc(128,128,66,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(252,243,234,0.88)",e.beginPath(),e.moveTo(128,162),e.bezierCurveTo(80,132,84,86,128,112),e.bezierCurveTo(172,86,176,132,128,162),e.fill(),ns(t,{repeatX:1,repeatY:1})}function o_(){let t=es(1024,680),e=t.getContext("2d"),n=Ks(7777);e.save(),e.translate(512,0),e.scale(-1,1);let i=e.createLinearGradient(0,0,0,680);i.addColorStop(0,"#2a2252"),i.addColorStop(0.42,"#6d4b8e"),i.addColorStop(0.72,"#e88eb2"),i.addColorStop(1,"#ffd0be"),e.fillStyle=i,e.fillRect(0,0,512,680);for(let h=0;h<65;h+=1){let d=20+n()*472,u=20+n()*290,p=0.8+n()*2;e.fillStyle=`rgba(255,248,255,${0.35+n()*0.65})`,e.beginPath(),e.arc(d,u,p,0,Math.PI*2),e.fill()}e.save(),e.beginPath(),e.arc(256,305,118,0,Math.PI*2),e.clip();let r=e.createLinearGradient(0,185,0,425);r.addColorStop(0,"#fff4dc"),r.addColorStop(0.5,"#ffb5cc"),r.addColorStop(1,"#ff77a8"),e.fillStyle=r,e.fillRect(130,180,260,250),e.fillStyle="#5c3c7e";for(let h=318;h<420;h+=18)e.fillRect(130,h,260,4+(h-318)*0.05);e.restore(),e.fillStyle="rgba(255,222,238,0.34)";for(let[h,d,u,p]of[[125,255,86,16],[390,225,92,18],[210,390,115,14]])e.beginPath(),e.ellipse(h,d,u,p,0,0,Math.PI*2),e.fill();let s=[[12,430,58,250],[64,390,62,290],[118,450,52,230],[166,368,70,312],[232,412,54,268],[282,355,68,325],[346,405,58,275],[398,376,62,304],[452,432,56,248]];for(let[h,d,u,p]of s){e.fillStyle="#241c44",e.fillRect(h,d,u,p);for(let _=d+16;_<620;_+=16)for(let m=h+9;m<h+u-12;m+=14)if(n()<0.52)e.fillStyle=n()<0.55?"#ffaad0":n()<0.7?"#8ef0ff":"#ffe8a8",e.fillRect(m,_,7,8)}e.strokeStyle="rgba(255,244,252,0.55)",e.lineWidth=3,e.strokeRect(24,24,464,632),e.fillStyle="rgba(255,250,255,0.92)",e.font='600 28px -apple-system, "SF Pro Rounded", sans-serif',e.textAlign="center",e.fillText("MIDNIGHT LO-FI",256,86),e.fillStyle="rgba(255,216,238,0.82)",e.font='500 15px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("WITH SNOZZY  ·  VOL. 01",256,114),e.fillStyle="rgba(255,244,250,0.82)",e.font='500 14px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("SIDE A  ·  RAINY WINDOW SESSIONS",256,632),e.restore();let a=e.createLinearGradient(512,0,1024,680);a.addColorStop(0,"#f5ecfa"),a.addColorStop(0.55,"#e8e0f8"),a.addColorStop(1,"#dce8fa"),e.fillStyle=a,e.fillRect(512,0,512,680);let o=e.createLinearGradient(512,110,512,540);o.addColorStop(0,"#6a5b9e"),o.addColorStop(0.55,"#b689c8"),o.addColorStop(1,"#f7bfd6"),e.fillStyle=o,e.beginPath(),e.arc(768,280,165,Math.PI,0),e.lineTo(933,520),e.lineTo(603,520),e.closePath(),e.fill();let l=[];for(let h=0;h<8;h+=1){let d=-Math.PI*0.85+h/7*Math.PI*1.15;l.push([768+Math.cos(d)*105,315+Math.sin(d)*95])}e.strokeStyle="rgba(255,242,208,0.68)",e.lineWidth=2,e.beginPath(),l.forEach(([h,d],u)=>u===0?e.moveTo(h,d):e.lineTo(h,d)),e.stroke();for(let[h,d]of l)e.fillStyle="#fff9e6",e.beginPath(),e.arc(h,d,5,0,Math.PI*2),e.fill();e.fillStyle="#fff7e6",e.beginPath(),e.arc(768,245,42,0,Math.PI*2),e.fill(),e.fillStyle="#8b6eb3",e.beginPath(),e.arc(786,236,35,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,214,232,0.88)";for(let[h,d,u]of[[650,440,0.4],[840,400,-0.5],[730,480,0.9],[875,470,0.2]])e.save(),e.translate(h,d),e.rotate(u),e.beginPath(),e.ellipse(0,0,11,6,0,0,Math.PI*2),e.fill(),e.restore();e.strokeStyle="rgba(116,96,158,0.28)",e.lineWidth=2,e.strokeRect(540,32,456,616),e.fillStyle="#4f4074",e.font='600 22px -apple-system, "SF Pro Rounded", sans-serif',e.textAlign="center",e.fillText("TWELVE SONGS",768,578),e.fillStyle="#7e6ca6",e.font='500 13px -apple-system, "SF Pro Rounded", sans-serif',e.fillText("STARLIGHT CONSTELLATION  ·  EDITION 2026",768,606);let c=ns(t,{repeatX:1,repeatY:1});return c.wrapS=$i,c.wrapT=$i,c.flipY=!1,c}function Xf(){let t={wood:n_(),floor:i_(),rug:r_(),wall:s_(),coffee_liquid:a_(),poster_atlas:o_()};return{textures:t,dispose(){Object.values(t).forEach((e)=>e?.dispose?.())}}}var Xc=["typing","composing","researching","planning","resting"];function qc(t,e,n=!1){let i=document.createElement("canvas");i.width=t,i.height=e;let r=i.getContext("2d"),s=new Ln(i);if(s.colorSpace=ge,s.flipY=!1,n)s.wrapS=yn,s.repeat.x=-1,s.offset.x=1;return s.minFilter=We,s.magFilter=We,{canvas:i,ctx:r,texture:s}}function oi(t,e,n,i,r,s){t.beginPath(),t.roundRect(e,n,i,r,s)}function l_(t,e,n,i,r,s){let a=s||r.activity||"typing",o=r.beatPulse||0,l=t.createLinearGradient(0,0,e,n);l.addColorStop(0,"#14172b"),l.addColorStop(1,"#1d1935"),t.fillStyle=l,t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(0,0,e,26);for(let[h,d]of[["#ff7ca8",0],["#ffd27d",1],["#7ce8c8",2]].map(([u,p])=>[p,u]))t.fillStyle=d,t.beginPath(),t.arc(16+h*14,13,4.2,0,Math.PI*2),t.fill();t.fillStyle="rgba(235,232,255,0.72)",t.font='600 11px -apple-system, "SF Pro Rounded", sans-serif';let c={typing:"SnozzyRoom3D.swift — WithSnozzy",composing:"Track_04_RainyWindow.daw — Lo-Fi Synth",researching:"Music Theory · Extended Jazz Chords",planning:"Today Focus & Tasks",resting:"Ambient Mode · Take a Breath",takingBreak:"Break Time · Warm Coffee"};if(t.textAlign="left",t.fillText(c[a]||c.typing,64,17),a==="composing"){t.fillStyle="rgba(255,255,255,0.04)",t.fillRect(10,34,48,n-46);for(let p=0;p<11;p+=1){let _=38+p*24;t.fillStyle=p%2===0?"rgba(255,255,255,0.045)":"rgba(255,255,255,0.015)",t.fillRect(62,_,e-74,21),t.fillStyle=[1,3,6,8,10].includes(p)?"#3b3556":"#dcd6f5",t.fillRect(14,_+2,40,17)}let h=i*38%(e-80),d=[[0,2,68,"#ff9bc4"],[82,4,54,"#7ce8ff"],[150,1,76,"#c7a4ff"],[238,5,62,"#ff9bc4"],[312,3,88,"#95f2d8"],[40,7,94,"#a6b8ff"],[188,6,72,"#ffd0a6"],[290,8,64,"#ff9bc4"],[380,2,58,"#7ce8ff"]];for(let[p,_,m,f]of d){let v=66+(p-h+(e-74))%(e-74),y=40+_*24,g=Math.min(m,e-14-v);if(g>6)t.fillStyle=f,oi(t,v,y,g,17,5),t.fill()}let u=68+i*95%(e-86);t.strokeStyle="#ff95c8",t.lineWidth=2,t.beginPath(),t.moveTo(u,34),t.lineTo(u,n-12),t.stroke()}else if(a==="planning")[{title:"TODAY",accent:"#ff96c2",items:["Finish 3D shaders","Record synth chord","Warm latte break"]},{title:"IN PROGRESS",accent:"#7ce8ff",items:["WithSnozzy Steam build","Album track #4 mix"]}].forEach((d,u)=>{let p=18+u*242;t.fillStyle="rgba(255,255,255,0.05)",oi(t,p,40,228,n-56,12),t.fill(),t.fillStyle=d.accent,t.font="700 11px -apple-system, sans-serif",t.fillText(d.title,p+14,62),d.items.forEach((_,m)=>{let f=76+m*62;t.fillStyle="rgba(255,255,255,0.075)",oi(t,p+12,f,204,50,9),t.fill(),t.fillStyle=d.accent,t.beginPath(),t.arc(p+28,f+25,6,0,Math.PI*2),t.fill(),t.fillStyle="rgba(250,246,255,0.88)",t.font="500 12px -apple-system, sans-serif",t.fillText(_,p+44,f+29)})});else if(a==="researching"){t.fillStyle="rgba(255,255,255,0.06)",oi(t,18,38,e-36,26,8),t.fill(),t.fillStyle="rgba(170,218,255,0.82)",t.font="500 11px -apple-system, monospace",t.fillText("https://lofi.notes/chords/maj9-voicings",30,55),t.fillStyle="#f5d4ff",t.font='700 18px -apple-system, "SF Pro Rounded", sans-serif',t.fillText("Dreamy Lo-Fi Voicings",24,98),t.strokeStyle="#7ce8ff",t.lineWidth=2.5,t.beginPath();for(let h=24;h<e-24;h+=6){let d=165+Math.sin(h*0.035+i*2.4)*24+Math.cos(h*0.07-i)*10;if(h===24)t.moveTo(h,d);else t.lineTo(h,d)}t.stroke();for(let h=0;h<4;h+=1)t.fillStyle="rgba(230,226,255,0.22)",oi(t,24,218+h*20,h===3?260:420,8,4),t.fill()}else if(a==="resting"||a==="takingBreak"){let h=new Date,d=String(h.getHours()).padStart(2,"0"),u=String(h.getMinutes()).padStart(2,"0"),p=t.createRadialGradient(e*0.5,n*0.52,16,e*0.5,n*0.52,175);p.addColorStop(0,`rgba(255,152,208,${0.26+o*0.14})`),p.addColorStop(1,"rgba(20,23,43,0)"),t.fillStyle=p,t.fillRect(0,26,e,n-26),t.textAlign="center",t.fillStyle="#fff5fb",t.font='700 72px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`${d}:${u}`,e*0.5,n*0.56),t.fillStyle="rgba(220,210,255,0.72)",t.font='500 14px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(a==="takingBreak"?"☕  warm coffee break  ·  with snozzy":"✦  stay cozy  ·  lo-fi companion",e*0.5,n*0.72),t.textAlign="left"}else{t.fillStyle="rgba(255,255,255,0.035)",t.fillRect(0,26,98,n-26),["Room.swift","Shader.glsl","LifeRig.js","Synth.dsp","Album.json"].forEach((p,_)=>{if(_===1)t.fillStyle="rgba(255,154,205,0.18)",oi(t,8,38+_*24,82,20,5),t.fill();t.fillStyle=_===1?"#ffd8ec":"rgba(210,208,238,0.52)",t.font="500 10.5px -apple-system, monospace",t.fillText(p,16,52+_*24)});let d=[[["#ff93c8","struct "],["#87ebff","LofiRoom"],["#e8e4ff"," {"]],[["#c7a4ff","  let "],["#e8e4ff","mood = "],["#ffd594",".brightCyber"]],[["#c7a4ff","  let "],["#e8e4ff","bpm  = "],["#92f5d2","76.0"]],[["#ff93c8","  func "],["#87ebff","render"],["#e8e4ff","(dt: Double) {"]],[["#92f5d2","    // soft pastel rim + snow"]],[["#e8e4ff","    sky.blend(hour: "],["#ffd594","sceneHour"],["#e8e4ff",")"]],[["#e8e4ff","    snozzy.updateSpringHair(dt)"]],[["#e8e4ff","    coffee.emitSteam(warmth: "],["#ffd594","1.0"],["#e8e4ff",")"]],[["#ff93c8","    return "],["#87ebff","cozyFrame"],["#e8e4ff","()"]],[["#e8e4ff","  }"]],[["#e8e4ff","}"]]],u=Math.floor(i*0.9)%d.length;d.forEach((p,_)=>{let m=52+_*22;if(_===u)t.fillStyle="rgba(130,190,255,0.09)",t.fillRect(104,m-14,e-114,19);t.fillStyle="rgba(180,175,215,0.34)",t.font="500 11px ui-monospace, Menlo, monospace",t.fillText(String(_+1).padStart(2," "),108,m);let f=132;for(let[v,y]of p)t.fillStyle=v,t.fillText(y,f,m),f+=t.measureText(y).width;if(_===u&&Math.floor(i*2.4)%2===0)t.fillStyle="#ff96c8",t.fillRect(f+2,m-11,7,13)})}t.fillStyle="rgba(255,156,208,0.16)",t.fillRect(0,n-18,e,18),t.fillStyle="rgba(255,226,242,0.85)",t.font="600 9.5px -apple-system, monospace",t.fillText(`● LIVE  ·  ${String(a).toUpperCase()}  ·  ${r.isPlaying?"♪ PLAYING":"QUIET"}`,12,n-6)}function h_(t,e,n,i,r){let s=Boolean(r.isPlaying),a=r.beatPulse||0,o=Math.max(0,Math.min(12,Number(r.playableTracks||0))),l=t.createLinearGradient(0,0,e,n);l.addColorStop(0,"#181530"),l.addColorStop(1,"#261b42"),t.fillStyle=l,t.fillRect(0,0,e,n),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(0,0,e,34),t.fillStyle=s?"#ff94c8":"#96a2cf",t.beginPath(),t.arc(18,17,5,0,Math.PI*2),t.fill(),t.fillStyle="#f5efff",t.font='600 12px -apple-system, "SF Pro Rounded", sans-serif',t.textAlign="left",t.fillText(r.trackTitle||(s?"Lo-Fi Radio · Chill":"Music Paused"),32,21);let c=18,h=18,d=10,u=4,p=n-54;for(let S=0;S<c;S+=1){let R=s?0.28+0.42*Math.abs(Math.sin(i*4.4+S*0.55))+0.3*a*Math.cos(S*0.4):0.08+0.04*Math.sin(i*1.2+S*0.7),w=Math.max(6,Math.min(110,R*108)),I=t.createLinearGradient(0,p-w,0,p);I.addColorStop(0,"#84eeff"),I.addColorStop(0.55,"#c9a0ff"),I.addColorStop(1,"#ff8fc4"),t.fillStyle=I,oi(t,h+S*(d+u),p-w,d,w,4),t.fill()}let _=e-62,m=108,f=36;t.strokeStyle="rgba(255,255,255,0.12)",t.lineWidth=7,t.beginPath(),t.arc(_,m,f,0,Math.PI*2),t.stroke();let v=r.focusPhase||"idle",y=v==="work"?"#ff90c4":v==="idle"?"#b8a4ff":"#7ef0d2",g=v==="idle"?0.35+0.15*Math.sin(i*0.6):0.72;t.strokeStyle=y,t.lineCap="round",t.beginPath(),t.arc(_,m,f,-Math.PI/2,-Math.PI/2+Math.PI*2*g),t.stroke(),t.textAlign="center",t.fillStyle="#fff5fb",t.font='700 12px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(v==="work"?"FOCUS":v==="idle"?"COZY":"BREAK",_,m+4),t.textAlign="left",t.fillStyle="rgba(230,220,255,0.68)",t.font='500 10px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`ALBUM  ${o} / 12`,18,n-20);for(let S=0;S<12;S+=1)t.fillStyle=S<o?"#ffd98a":"rgba(255,255,255,0.18)",t.beginPath(),t.arc(116+S*19,n-24,S<o?4:2.6,0,Math.PI*2),t.fill()}function c_(t,e,n,i,r){let s=t.createLinearGradient(0,0,e,n);s.addColorStop(0,"#362a64"),s.addColorStop(0.55,"#6a4d8e"),s.addColorStop(1,"#d98eb4"),t.fillStyle=s,t.fillRect(0,0,e,n);let a=new Date,o=String(a.getHours()).padStart(2,"0"),l=String(a.getMinutes()).padStart(2,"0");t.textAlign="center",t.fillStyle="#ffffff",t.font='700 38px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(`${o}:${l}`,e*0.5,86),[{name:"Snozzy ♪",text:r.isPlaying?"这首鼓点很舒服呢":"要不要放点轻音乐？"},{name:"Focus",text:r.focusPhase==="work"?"专注进行中 ✨":"记得喝一口温咖啡 ☕"}].forEach((d,u)=>{let p=122+u*74;t.fillStyle="rgba(255,255,255,0.22)",oi(t,14,p,e-28,60,14),t.fill(),t.textAlign="left",t.fillStyle="#fff5fb",t.font='700 12px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(d.name,26,p+22),t.fillStyle="rgba(255,248,255,0.88)",t.font='500 11px -apple-system, "SF Pro Rounded", sans-serif',t.fillText(d.text,26,p+43)});let h=0.5+0.5*Math.sin(i*2.5);t.fillStyle=`rgba(255,255,255,${0.45+0.35*h})`,oi(t,e*0.5-32,n-18,64,5,2.5),t.fill()}function qf(){let t=qc(512,320,!0),e=qc(384,256,!0),n=qc(192,320,!1),i=0,r=999,s=-1;function a(o){let l=s>=0?Xc[s]:null;l_(t.ctx,t.canvas.width,t.canvas.height,i,o,l),h_(e.ctx,e.canvas.width,e.canvas.height,i,o),c_(n.ctx,n.canvas.width,n.canvas.height,i,o),t.texture.needsUpdate=!0,e.texture.needsUpdate=!0,n.texture.needsUpdate=!0}return{textures:{screen_main:t.texture,screen_side:e.texture,screen_phone:n.texture},cycleMainMode(o){return s=(s+1)%Xc.length,a(o),Xc[s]},update(o,l,c=!1){if(i+=o,r+=o,!c&&r<0.085)return;r=0,a(l)},dispose(){t.texture.dispose(),e.texture.dispose(),n.texture.dispose()}}}function u_(t){let e=(t?.name||"").toLowerCase();return/hair|eyelash|eyeline|brow/.test(e)}function d_(t){let e=(t?.name||"").toLowerCase();return/eye|highlight|iris/.test(e)}function p_(t){let e=(t?.name||"").toLowerCase();return/face_00_skin/.test(e)}function f_(t){return!(t?.name||"").startsWith("Room3D_")}function m_(t){if(!t)return null;return t.colorSpace=ge,t.needsUpdate=!0,t}function g_(t,e){let n=u_(t),i=d_(t),r=p_(t),s=m_(t.map||null),a=t.alphaMap||null,o=i?0.14:0.28,l=(t.color?.clone?.()||new vt(16777215)).multiplyScalar(o),c=new Xo({color:l,map:s,alphaMap:a,emissive:new vt(16777215),emissiveMap:s,emissiveIntensity:i?0.88:0.72,transparent:Boolean(t.transparent)||n,alphaTest:n?0.35:t.alphaTest||0,depthWrite:!0,side:be});return c.onBeforeCompile=(h)=>{h.uniforms.uRimColor=e.uRimColor,h.uniforms.uRimStrength=e.uRimStrength,h.uniforms.uMoodTint=e.uMoodTint,h.uniforms.uBlush=e.uBlush,h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
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
         #include <dithering_fragment>`)},c.customProgramCacheKey=()=>`snozzy-anime-${i?"eye":r?"face":"std"}`,c.name=`${t.name||"Material"}_AnimeCel`,c.userData.phase0Unlit=!0,c.userData.phase0Character=!0,c.userData.phase0SourceName=t.name||"",c.userData.phase0AlphaMode=n?"MASK(alphaTest=0.35)":t.transparent?"BLEND":"OPAQUE",c}function __(t,e,n,i){let r=t.name||"",s=r.replace(/^Room3D_/,""),a=s==="screen_main"||s==="screen_side"||s==="screen_phone",o=s==="led_pink"||s==="led_cyan"||s==="lamp_bulb",l=t.color?.clone?.()||new vt(16777215),c=t.map||null,h=typeof t.roughness==="number"?t.roughness:0.72,d=typeof t.metalness==="number"?t.metalness:0.04,u=t.emissive?.clone?.()||new vt(0),p=null,_=typeof t.emissiveIntensity==="number"?t.emissiveIntensity:0;if(s==="wood"&&e.wood)c=e.wood,l.setHex(16777215),h=0.56;else if(s==="floor"&&e.floor)c=e.floor,l.setHex(16777215),h=0.62;else if(s==="rug"&&e.rug)c=e.rug,l.setHex(15985400),h=0.94;else if(s==="wall"&&e.wall)c=e.wall,l.setHex(16777215),h=0.88;else if(s==="coffee_liquid"&&e.coffee_liquid)c=e.coffee_liquid,l.setHex(16777215),h=0.22;else if(s==="poster_atlas"&&e.poster_atlas)c=e.poster_atlas,l.setHex(16777215),h=0.5,u.setHex(16777215),p=e.poster_atlas,_=0.14;else if(s==="ceramic")h=0.24,d=0.04;else if(s==="metal")h=0.34,d=0.55;else if(a&&n[s])c=n[s],l.setHex(16777215),u.setHex(16777215),p=n[s],_=0.95,h=0.18,d=0.06;else if(s==="led_pink")u.setHex(16744132),_=1.65,h=0.28;else if(s==="led_cyan")u.setHex(7005951),_=1.55,h=0.28;else if(s==="lamp_bulb")u.setHex(16766095),_=2,h=0.25;let m=new wi({color:l,map:c,roughness:h,metalness:d,emissive:u,emissiveMap:p,emissiveIntensity:_,transparent:Boolean(t.transparent),alphaTest:t.alphaTest||0,side:a?An:be});if(m.name=`${r||"RoomMat"}_PBR`,m.userData.phase0Character=!1,m.userData.phase0SourceName=r,m.userData.room3dKey=s,o||a)i.set(s,m);return m}function Yf(t,e,n){let i={uRimColor:{value:new vt(16761572)},uRimStrength:{value:0.72},uMoodTint:{value:new vt(16777215)},uBlush:{value:0}},r=new Map,s=new Map,a=new Map;return t.traverse((o)=>{if(!o.isMesh)return;let c=(Array.isArray(o.material)?o.material:[o.material]).map((h)=>{if(!h)return h;let d=f_(h),u=h.uuid,p=s.get(u);if(!p)p=d?g_(h,i):__(h,e,n,a),s.set(u,p);return r.set(p.uuid,p),p});if(o.material=Array.isArray(o.material)?c:c[0],o.isSkinnedMesh)o.frustumCulled=!1,o.castShadow=!0,o.receiveShadow=!1;else{let h=o.name||"",d=/^(Floor|Rug|Wall|Baseboard|Wainscot|Ceiling|DeskMat)/.test(h),u=/(LED|Glow|Bulb|Fairy|Screen|Orb|Crystal)/.test(h);o.castShadow=!d&&!u,o.receiveShadow=!u}}),{materials:[...r.values()],sharedUniforms:i,emissiveRegistry:a}}var Ii=[{hour:1.5,bg:1447728,skyTop:"#0d1236",skyMid:"#24235e",skyBot:"#6a4892",hemiSky:9348848,hemiGround:2497594,hemiInt:0.82,keyColor:11980031,keyInt:0.92,keyPos:[-1.1,2.45,1.85],winColor:8694015,winInt:0.58,fillColor:16032980,fillInt:0.36,lampInt:1.85,lampColor:16762496,rimColor:16757472,rimStrength:0.85,moodTint:15592191,ledScale:1.25,starsAlpha:0.96,cityLit:1,exposure:0.98},{hour:7,bg:2761794,skyTop:"#4e5b9c",skyMid:"#c88bb8",skyBot:"#ffd4b8",hemiSky:16768978,hemiGround:5390942,hemiInt:1.05,keyColor:16767166,keyInt:1.28,keyPos:[-1.3,2.55,1.95],winColor:16762012,winInt:0.78,fillColor:12243199,fillInt:0.42,lampInt:0.75,lampColor:16765594,rimColor:16764080,rimStrength:0.72,moodTint:16775412,ledScale:0.72,starsAlpha:0.24,cityLit:0.35,exposure:0.98},{hour:13,bg:3885163,skyTop:"#5ca2ee",skyMid:"#a2d2ff",skyBot:"#eef5ff",hemiSky:15923199,hemiGround:6971518,hemiInt:1.18,keyColor:16775920,keyInt:1.48,keyPos:[-1.2,2.7,1.9],winColor:14348543,winInt:0.75,fillColor:13164031,fillInt:0.46,lampInt:0.25,lampColor:16769722,rimColor:15135487,rimStrength:0.52,moodTint:16777215,ledScale:0.45,starsAlpha:0,cityLit:0.06,exposure:0.96},{hour:19.2,bg:2629181,skyTop:"#242264",skyMid:"#9c5294",skyBot:"#ffaa88",hemiSky:16302264,hemiGround:4008526,hemiInt:0.94,keyColor:16760482,keyInt:1.18,keyPos:[-1.2,2.4,1.85],winColor:16749692,winInt:0.8,fillColor:10006783,fillInt:0.4,lampInt:1.45,lampColor:16760950,rimColor:16757448,rimStrength:0.88,moodTint:16773356,ledScale:1.08,starsAlpha:0.62,cityLit:0.82,exposure:0.98}];function tn(t,e,n){return t+(e-t)*n}function Pn(t,e,n,i=new vt){let r=new vt(t),s=new vt(e);return i.copy(r).lerp(s,n)}function Yc(t,e,n){return`#${Pn(t,e,n).getHexString()}`}function v_(t){let e=(Number(t)%24+24)%24,n=Ii[Ii.length-1],i=Ii[0],r=i.hour+24-n.hour,s=e>=n.hour?e-n.hour:e+24-n.hour;for(let l=0;l<Ii.length-1;l+=1)if(e>=Ii[l].hour&&e<=Ii[l+1].hour){n=Ii[l],i=Ii[l+1],r=i.hour-n.hour,s=e-n.hour;break}let a=Math.max(0,Math.min(1,r>0?s/r:0)),o=a*a*(3-2*a);return{bg:Pn(n.bg,i.bg,o),skyTop:Yc(n.skyTop,i.skyTop,o),skyMid:Yc(n.skyMid,i.skyMid,o),skyBot:Yc(n.skyBot,i.skyBot,o),hemiSky:Pn(n.hemiSky,i.hemiSky,o),hemiGround:Pn(n.hemiGround,i.hemiGround,o),hemiInt:tn(n.hemiInt,i.hemiInt,o),keyColor:Pn(n.keyColor,i.keyColor,o),keyInt:tn(n.keyInt,i.keyInt,o),keyPos:[tn(n.keyPos[0],i.keyPos[0],o),tn(n.keyPos[1],i.keyPos[1],o),tn(n.keyPos[2],i.keyPos[2],o)],winColor:Pn(n.winColor,i.winColor,o),winInt:tn(n.winInt,i.winInt,o),fillColor:Pn(n.fillColor,i.fillColor,o),fillInt:tn(n.fillInt,i.fillInt,o),lampInt:tn(n.lampInt,i.lampInt,o),lampColor:Pn(n.lampColor,i.lampColor,o),rimColor:Pn(n.rimColor,i.rimColor,o),rimStrength:tn(n.rimStrength,i.rimStrength,o),moodTint:Pn(n.moodTint,i.moodTint,o),ledScale:tn(n.ledScale,i.ledScale,o),starsAlpha:tn(n.starsAlpha,i.starsAlpha,o),cityLit:tn(n.cityLit,i.cityLit,o),exposure:tn(n.exposure,i.exposure,o)}}function Zc(t,e){let n=document.createElement("canvas");n.width=64,n.height=64;let i=n.getContext("2d"),r=i.createRadialGradient(32,32,2,32,32,30);r.addColorStop(0,t),r.addColorStop(0.5,t),r.addColorStop(1,e),i.fillStyle=r,i.fillRect(0,0,64,64);let s=new Ln(n);return s.colorSpace=ge,s}function y_(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d");e.fillStyle="#ff98cc",e.shadowColor="#ffc8e6",e.shadowBlur=10,e.beginPath(),e.moveTo(32,50),e.bezierCurveTo(10,34,10,14,32,24),e.bezierCurveTo(54,14,54,34,32,50),e.fill();let n=new Ln(t);return n.colorSpace=ge,n}function Zf(t,e,n,i){let r=new je;r.name="AtmosphereSystem",t.add(r),e.shadowMap.enabled=!0,e.shadowMap.type=qa;let s=new Jo(13161983,3418184,1.35);r.add(s);let a=new Ai(16770772,1.85);a.position.set(-1.6,2.8,-2.5),a.target.position.set(0,0.82,0.32),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.near=0.5,a.shadow.camera.far=9,a.shadow.camera.left=-2.2,a.shadow.camera.right=2.2,a.shadow.camera.top=2.2,a.shadow.camera.bottom=-1.6,a.shadow.bias=-0.0007,a.shadow.normalBias=0.022,r.add(a),r.add(a.target);let o=new Ai(16757914,0.95);o.position.set(-1.15,2.05,-2.35),o.target.position.set(0,0.92,0.35),r.add(o),r.add(o.target);let l=new Ai(13162751,0.65);l.position.set(2.2,1.9,2.8),r.add(l);let c=new ar(16763778,2.4,3.8,1.6);c.position.set(0.72,1.14,0.32),r.add(c);let h=new ar(16753884,0.85,3.2,1.8);h.position.set(-0.25,1.05,0.58),r.add(h);let d=document.createElement("canvas");d.width=512,d.height=384;let u=d.getContext("2d"),p=new Ln(d);p.colorSpace=ge;let _=new ce(new ri(7.6,5.2),new Ae({map:p,fog:!1}));_.position.set(-0.9,1.8,-5.8),r.add(_);let m=new je,f=new Ae({color:2235714}),v=new Ae({color:16765608,transparent:!0,opacity:0.9}),y=new Ae({color:9367807,transparent:!0,opacity:0.85}),g=new Ae({color:16750796,transparent:!0,opacity:0.85});[[-3.1,0,-5,0.52,1.55,0.32],[-2.52,0,-4.4,0.44,1.72,0.3],[-2.02,0,-4.8,0.46,1.42,0.32],[-1.54,0,-4.2,0.42,1.62,0.3],[-1.08,0,-4.6,0.48,1.48,0.32],[-0.58,0,-4.3,0.44,1.66,0.3],[-0.1,0,-4.9,0.5,1.38,0.32],[0.42,0,-4.5,0.46,1.58,0.3]].forEach(([E,U,z,H,W,ot],ut)=>{let tt=new ce(new ii(H,W,ot),f);tt.position.set(E,U+W*0.5,z),m.add(tt);for(let st=0;st<5;st+=1){let yt=W-0.14-st*0.12;if(yt<0.92)continue;for(let Et=-1;Et<=1;Et+=1){if((st*3+Et+ut)%3===0)continue;let Pt=(st+Et+ut)%5===0?g:(st+ut)%4===0?y:v,Bt=new ce(new ri(0.055,0.036),Pt);Bt.position.set(E+Et*(H*0.25),yt,z+ot*0.5+0.01),m.add(Bt)}}}),r.add(m);let R=160,w=new Kt,I=new Float32Array(R*6),V=[];for(let E=0;E<R;E+=1){let U=-2.2+Math.random()*2.6,z=0.8+Math.random()*2,H=-1.62-Math.random()*1.1,W=2.6+Math.random()*1.4;V.push({x:U,y:z,z:H,speed:W}),I[E*6+0]=U,I[E*6+1]=z,I[E*6+2]=H,I[E*6+3]=U-0.025,I[E*6+4]=z-0.14,I[E*6+5]=H}w.setAttribute("position",new ae(I,3));let P=new Jr(w,new rr({color:12378879,transparent:!0,opacity:0.48}));P.visible=!1,r.add(P);let F=120,N=new Kt,G=new Float32Array(F*3),Z=[];for(let E=0;E<F;E+=1){let U=-2.1+Math.random()*2.4,z=0.85+Math.random()*1.9,H=-1.58-Math.random()*1.2;Z.push({x:U,y:z,z:H,speed:0.26+Math.random()*0.24,phase:Math.random()*6.28}),G[E*3+0]=U,G[E*3+1]=z,G[E*3+2]=H}N.setAttribute("position",new ae(G,3));let X=Zc("rgba(255,255,255,0.95)","rgba(220,238,255,0)"),j=new sr(N,new Ti({map:X,size:0.048,transparent:!0,opacity:0.85,depthWrite:!1}));j.visible=!1,r.add(j);let k=Zc("rgba(255,248,244,0.34)","rgba(255,248,244,0)"),B=[];for(let E=0;E<12;E+=1){let U=new Vs(new Yr({map:k,transparent:!0,opacity:0,depthWrite:!1}));U.scale.set(0.06,0.06,1),r.add(U),B.push({sprite:U,age:E/12*2.4,life:2.4,drift:(Math.random()-0.5)*0.025})}let q=34,at=new Kt,ft=new Float32Array(q*3),Q=[];for(let E=0;E<q;E+=1){let U=-1.2+Math.random()*2.4,z=0.78+Math.random()*1.35,H=-1+Math.random()*1.9;Q.push({x:U,y:z,z:H,phase:Math.random()*6.28,speed:0.2+Math.random()*0.3}),ft[E*3+0]=U,ft[E*3+1]=z,ft[E*3+2]=H}at.setAttribute("position",new ae(ft,3));let K=Zc("rgba(255,242,216,0.75)","rgba(255,220,245,0)"),mt=new sr(at,new Ti({map:K,size:0.028,transparent:!0,opacity:0.55,depthWrite:!1}));r.add(mt);let lt=y_(),rt=[];for(let E=0;E<14;E+=1){let U=new Vs(new Yr({map:lt,transparent:!0,opacity:0,depthWrite:!1}));U.visible=!1,r.add(U),rt.push({sprite:U,active:!1,age:0,life:1.5,vx:0,vy:0,vz:0})}let ht=[[186,152],[208,138],[234,146],[254,128],[278,138],[302,122],[324,140],[344,132],[362,154],[336,170],[306,162],[272,168]],gt="",A=0,x=!0,C=0,O=[7005951,16748240,13149439,8844744,16765576];function M(E,U){let{width:z,height:H}=d,W=u.createLinearGradient(0,0,0,H);if(W.addColorStop(0,E.skyTop),W.addColorStop(0.54,E.skyMid),W.addColorStop(1,E.skyBot),u.fillStyle=W,u.fillRect(0,0,z,H),U.weather==="rain")u.fillStyle="rgba(28,36,58,0.28)",u.fillRect(0,0,z,H);let ot=(Number(U.sceneHour??20)%24+24)%24;if(ot<6.5||ot>18.2){let st=u.createRadialGradient(198,152,6,198,152,52);st.addColorStop(0,"rgba(255,248,225,0.92)"),st.addColorStop(0.45,"rgba(255,230,245,0.28)"),st.addColorStop(1,"rgba(255,230,245,0)"),u.fillStyle=st,u.beginPath(),u.arc(198,152,52,0,Math.PI*2),u.fill(),u.fillStyle="#fff9e6",u.beginPath(),u.arc(198,152,17,0,Math.PI*2),u.fill()}else{let ut=180+(ot-6.5)/11.7*165,tt=175-Math.sin((ot-6.5)/11.7*Math.PI)*44,st=u.createRadialGradient(ut,tt,6,ut,tt,74);st.addColorStop(0,"rgba(255,250,224,0.94)"),st.addColorStop(0.4,"rgba(255,212,188,0.34)"),st.addColorStop(1,"rgba(255,212,188,0)"),u.fillStyle=st,u.beginPath(),u.arc(ut,tt,74,0,Math.PI*2),u.fill()}u.fillStyle=ot<6.5||ot>19.5?"rgba(165,148,215,0.14)":"rgba(255,248,255,0.24)";for(let ut=0;ut<4;ut+=1){let tt=(ut*155+A*(4+ut))%(z+160)-80,st=148+ut%2*42;u.beginPath(),u.ellipse(tt,st,78,18,0,0,Math.PI*2),u.fill()}if(E.starsAlpha>0.05){u.fillStyle=`rgba(255,250,255,${0.55*E.starsAlpha})`;for(let tt=0;tt<42;tt+=1){let st=(tt*97+31)%z,yt=(tt*53+17)%190,Et=0.65+0.35*Math.sin(A*2.1+tt);u.globalAlpha=E.starsAlpha*Et,u.beginPath(),u.arc(st,yt,1.3+tt%2*0.7,0,Math.PI*2),u.fill()}u.globalAlpha=1;let ut=Math.max(0,Math.min(12,Number(U.playableTracks||0)));if(ut>0){u.strokeStyle=`rgba(255,236,184,${0.48*E.starsAlpha})`,u.lineWidth=1.4,u.beginPath();for(let tt=0;tt<ut;tt+=1){let[st,yt]=ht[tt];if(tt===0)u.moveTo(st,yt);else u.lineTo(st,yt)}u.stroke();for(let tt=0;tt<ut;tt+=1){let[st,yt]=ht[tt];u.fillStyle=`rgba(255,245,204,${0.95*E.starsAlpha})`,u.beginPath(),u.arc(st,yt,3.2,0,Math.PI*2),u.fill()}}}p.needsUpdate=!0}let L=new T;return{toggleLamp(){return x=!x,x},isLampOn(){return x},cycleCrystalColor(){C=(C+1)%O.length;let E=i.get("led_cyan");if(E)E.emissive.setHex(O[C]);return O[C]},spawnHearts(E,U=7){let z=0;for(let H of rt){if(H.active)continue;if(H.active=!0,H.age=0,H.life=1.15+Math.random()*0.55,H.sprite.position.set(E.x+(Math.random()-0.5)*0.22,E.y+0.08+Math.random()*0.08,E.z+(Math.random()-0.5)*0.14),H.vx=(Math.random()-0.5)*0.16,H.vy=0.26+Math.random()*0.18,H.vz=(Math.random()-0.5)*0.1,H.sprite.scale.set(0.055,0.055,1),H.sprite.visible=!0,z+=1,z>=U)break}},setLowPower(E){e.shadowMap.enabled=!E,a.castShadow=!E},update(E,U,z){A+=E;let H=Number.isFinite(Number(U.sceneHour))?Number(U.sceneHour):20.5,W=v_(H);t.background=W.bg,e.toneMappingExposure=W.exposure,s.color.copy(W.hemiSky),s.groundColor.copy(W.hemiGround),s.intensity=W.hemiInt,a.color.copy(W.keyColor),a.intensity=W.keyInt*(U.weather==="rain"?0.78:1),a.position.set(W.keyPos[0],W.keyPos[1],W.keyPos[2]),o.color.copy(W.winColor),o.intensity=W.winInt*(U.weather==="rain"?0.55:1),l.color.copy(W.fillColor),l.intensity=W.fillInt;let ot=x?1:0.05;c.color.copy(W.lampColor),c.intensity=W.lampInt*ot;let ut=Number(U.beatPulse||0);h.intensity=(0.72+ut*0.45)*W.ledScale,n.uRimColor.value.copy(W.rimColor),n.uRimStrength.value=W.rimStrength,n.uMoodTint.value.copy(W.moodTint);let tt=i.get("led_pink");if(tt)tt.emissiveIntensity=(1.35+ut*0.75)*W.ledScale;let st=i.get("led_cyan");if(st)st.emissiveIntensity=(1.25+ut*0.55)*W.ledScale;let yt=i.get("lamp_bulb");if(yt)yt.emissiveIntensity=x?1.2+W.lampInt*0.45:0.08;f.color.copy(W.bg).multiplyScalar(0.85),v.opacity=0.08+W.cityLit*0.85,y.opacity=0.06+W.cityLit*0.78,g.opacity=0.06+W.cityLit*0.78;let Et=`${Math.round(H*10)}|${U.weather}|${U.playableTracks||0}|${Math.floor(A*4)}`;if(Et!==gt)gt=Et,M(W,U);let Pt=U.weather||"clear";if(P.visible=Pt==="rain",j.visible=Pt==="snow",Pt==="rain"){let et=w.attributes.position.array;for(let dt=0;dt<R;dt+=1){let xt=V[dt];if(xt.y-=xt.speed*E,xt.x-=0.45*E,xt.y<0.72)xt.y=2.65+Math.random()*0.3,xt.x=-2.1+Math.random()*2.5;et[dt*6+0]=xt.x,et[dt*6+1]=xt.y,et[dt*6+2]=xt.z,et[dt*6+3]=xt.x-0.028,et[dt*6+4]=xt.y-0.14,et[dt*6+5]=xt.z}w.attributes.position.needsUpdate=!0}else if(Pt==="snow"){let et=N.attributes.position.array;for(let dt=0;dt<F;dt+=1){let xt=Z[dt];if(xt.y-=xt.speed*E,xt.x+=Math.sin(A*1.4+xt.phase)*0.12*E,xt.y<0.78)xt.y=2.65+Math.random()*0.25,xt.x=-2+Math.random()*2.3;et[dt*3+0]=xt.x,et[dt*3+1]=xt.y,et[dt*3+2]=xt.z}N.attributes.position.needsUpdate=!0}let Bt=z?.getObjectByName("Prop_Coffee");if(Bt){Bt.getWorldPosition(L);for(let et of B){if(et.age+=E,et.age>=et.life)et.age-=et.life;let dt=et.age/et.life;et.sprite.position.set(L.x+Math.sin(A*1.6+dt*5)*0.014+et.drift*dt*12,L.y+0.06+dt*0.24,L.z+Math.cos(A*1.3+dt*4)*0.012);let xt=0.045+dt*0.09;et.sprite.scale.set(xt,xt,1),et.sprite.material.opacity=Math.sin(dt*Math.PI)*0.36}}let Ct=at.attributes.position.array;for(let et=0;et<q;et+=1){let dt=Q[et];Ct[et*3+0]=dt.x+Math.sin(A*dt.speed+dt.phase)*0.06,Ct[et*3+1]=dt.y+Math.cos(A*dt.speed*0.8+dt.phase)*0.04,Ct[et*3+2]=dt.z}at.attributes.position.needsUpdate=!0;for(let et of rt){if(!et.active)continue;if(et.age+=E,et.age>=et.life){et.active=!1,et.sprite.visible=!1;continue}let dt=et.age/et.life;et.sprite.position.x+=et.vx*E,et.sprite.position.y+=et.vy*E,et.sprite.position.z+=et.vz*E;let xt=0.055*(1+Math.sin(dt*Math.PI)*0.35);et.sprite.scale.set(xt,xt,1),et.sprite.material.opacity=dt<0.2?dt/0.2:(1-dt)/0.8}},dispose(){p.dispose(),X.dispose(),k.dispose(),K.dispose(),lt.dispose(),r.traverse((E)=>{if(E.geometry?.dispose?.(),Array.isArray(E.material))E.material.forEach((U)=>U?.dispose?.());else E.material?.dispose?.()})}}}var Jc=["Fcl_MTH_A","Fcl_MTH_I","Fcl_MTH_U","Fcl_MTH_E","Fcl_MTH_O"];function Me(t,e,n){return Math.max(e,Math.min(n,t))}function al(t,e,n,i){return tr.lerp(t,e,1-Math.exp(-n*Math.max(0,i)))}function Jf(t,e){let n=[],i=[],r=[],s=[],a=null,o=null,l=null,c=null;t.traverse((k)=>{if(k.isMesh&&k.morphTargetDictionary&&k.morphTargetInfluences)n.push(k);let B=k.name||"";if(k.isBone){if(B==="J_Bip_C_Head")a=k;if(B==="J_Adj_L_FaceEye"||B==="J_Adj_R_FaceEye")r.push({bone:k,restQ:k.quaternion.clone()});if(B.startsWith("J_Sec_Hair")&&!B.endsWith("_end")){let q=B.match(/J_Sec_Hair(\d+)/),at=q?Number(q[1]):1;i.push({bone:k,restQ:k.quaternion.clone(),depth:at,seed:i.length*1.37%6.28,ax:0,az:0,vx:0,vz:0})}if(/^J_Opt_C_FoxTail[345]_01$/.test(B))s.push(k)}if(B==="Headphones_3D")o=k;if(B==="Headphones_Glow")l=k;if(B==="VinylDisc")c=k});let h=new Map,d=new Map,u=1.4,p=-1,_=!1,m={x:0,y:0,active:!1},f={x:0,y:0},v=new T,y=new T,g=new T,S=!1,R=0,w=0,I=0,V=new Ge(0,0,0,"XYZ"),P=new me,F=new T;function N(k,B){let q=d.get(k)||0;d.set(k,Math.max(q,Me(B,0,1)))}function G(k,B,q){d.clear();let at=Me(Number(B.mood??0.6),0,1),ft=Me(Number(B.drowsy??0),0,1),Q=Me(Number(B.celebration??0),0,1),K=Boolean(B.sheIsTalking);if(R>0)R=Math.max(0,R-k);let mt=q==="pet_happy_once"?1:Math.min(1,R/1.2);N("Fcl_MTH_Fun",0.14+at*0.18),N("Fcl_BRW_Fun",0.1+at*0.12);let lt=!1,rt=0.06+at*0.08;if(mt>0.05)N("Fcl_EYE_Joy",0.9*mt),N("Fcl_MTH_Joy",0.68*mt),N("Fcl_BRW_Joy",0.55*mt),rt=Math.max(rt,0.92*mt),lt=mt>0.5;else if(Q>0.05)N("Fcl_EYE_Joy",0.85*Q),N("Fcl_MTH_Joy",0.72*Q),N("Fcl_BRW_Joy",0.48*Q),rt=Math.max(rt,0.7*Q),lt=Q>0.5;else if(q==="coffee_once")N("Fcl_EYE_Close",0.46),N("Fcl_MTH_Fun",0.42),N("Fcl_BRW_Fun",0.34),rt=Math.max(rt,0.28),lt=!0;else if(q==="stand_stretch_once")N("Fcl_EYE_Fun",0.72),N("Fcl_MTH_O",0.36),N("Fcl_BRW_Fun",0.38),rt=Math.max(rt,0.24),lt=!0;else if(q==="chin_rest_loop")N("Fcl_EYE_Fun",0.24),N("Fcl_MTH_Fun",0.46),N("Fcl_BRW_Fun",0.28),rt=Math.max(rt,0.36);else if(q==="listen_music_loop")N("Fcl_EYE_Close",0.34),N("Fcl_MTH_Fun",0.38),N("Fcl_BRW_Fun",0.26);else if(q==="drowsy_nod_loop"||ft>0.25){let gt=q==="drowsy_nod_loop"?Math.max(0.75,ft):ft;N("Fcl_EYE_Close",0.78*gt),N("Fcl_MTH_Small",0.24*gt),lt=gt>0.65}else if(q==="phone_once"||q==="write_note_once")N("Fcl_MTH_Fun",0.28),N("Fcl_BRW_Fun",0.18);if(!lt){if(p>=0)if(p+=k/0.15,p>=1)if(p=-1,_)_=!1,u=0.14;else u=2.6+Math.random()*3.6,_=Math.random()<0.18;else{let gt=Math.sin(p*Math.PI);N("Fcl_EYE_Close",gt*0.96)}else if(u-=k,u<=0)p=0}if(K){let gt=w*8.2,A=Math.floor(gt)%Jc.length,x=Math.max(0,Math.sin((gt-Math.floor(gt))*Math.PI)),C=0.32+0.42*(0.5+0.5*Math.sin(w*3.7));N(Jc[A],x*C),N("Fcl_MTH_Fun",0.22)}if(I=al(I,rt,5.5,k),e?.uBlush)e.uBlush.value=I;let ht=new Set([...h.keys(),...d.keys()]);for(let gt of ht){let A=h.get(gt)||0,x=d.get(gt)||0,C=gt==="Fcl_EYE_Close"?28:K&&Jc.includes(gt)?22:9,O=al(A,x,C,k);if(O<0.001&&x===0)h.delete(gt);else h.set(gt,O)}for(let gt of n){let{morphTargetDictionary:A,morphTargetInfluences:x}=gt;for(let C of Object.keys(A)){let O=A[C];x[O]=h.get(C)||0}}}function Z(k,B,q){let at=0,ft=0;if(B==="chin_rest_loop"||B==="pet_happy_once")at=m.active?m.x*0.55:0.05,ft=m.active?m.y*0.45:0.05;else if(B==="phone_once"||B==="write_note_once")at=0.25,ft=-0.35;else if(m.active)at=m.x*0.65,ft=m.y*0.48;else at=-0.22+Math.sin(w*0.7)*0.1,ft=-0.05+Math.cos(w*0.55)*0.06;f.x=al(f.x,Me(at,-1,1),6.5,k),f.y=al(f.y,Me(ft,-1,1),6.5,k);for(let Q of r)V.set(Me(-f.y*0.085,-0.1,0.1),0,Me(f.x*0.12,-0.14,0.14)),P.setFromEuler(V),Q.bone.quaternion.copy(Q.restQ).multiply(P);if(q&&a&&m.active&&(B==="idle_seated_loop"||B==="typing_loop"||B==="chin_rest_loop"))V.set(Me(-f.y*0.055,-0.07,0.07),Me(f.x*0.075,-0.09,0.09),0),P.setFromEuler(V),a.quaternion.multiply(P)}function X(k,B){if(!a||i.length===0)return;if(a.getWorldPosition(y),S&&k>0.0005)g.subVectors(y,v).divideScalar(Math.max(k,0.016)),g.clampLength(0,1.8);else g.set(0,0,0),S=!0;v.copy(y);let q=Math.min(k,0.033),at=Number(B.beatPulse||0),ft=26,Q=5.4;for(let lt of i){let rt=0.55+lt.depth*0.45,ht=Math.sin(w*1.45+lt.seed)*0.024*rt+Math.sin(w*2.8+lt.seed)*0.012*at*rt,gt=Math.cos(w*1.25+lt.seed*1.3)*0.02*rt,A=Me(ht-g.z*0.22*rt-g.y*0.14*rt,-0.34,0.34),x=Me(gt+g.x*0.25*rt,-0.34,0.34),C=(A-lt.ax)*ft-lt.vx*Q,O=(x-lt.az)*ft-lt.vz*Q;lt.vx+=C*q,lt.vz+=O*q,lt.ax=Me(lt.ax+lt.vx*q,-0.42,0.42),lt.az=Me(lt.az+lt.vz*q,-0.42,0.42),V.set(lt.ax,0,lt.az),P.setFromEuler(V),lt.bone.quaternion.copy(lt.restQ).multiply(P)}let K=Me(Number(B.mood??0.6),0,1),mt=0.035+K*0.035+at*0.04;s.forEach((lt,rt)=>{let ht=Math.sin(w*(2.6+K*1.4)+rt*0.7)*mt;V.set(0,0,ht),P.setFromEuler(V),lt.quaternion.multiply(P)})}function j(k,B,q){let at=Boolean(B.isPlaying)||q==="listen_music_loop";if(o)o.visible=at;if(l)l.visible=at;if(c&&B.isPlaying)c.rotateZ(k*0.85)}return{setPointer(k,B,q=!0){m.x=Me(k,-1,1),m.y=Me(B,-1,1),m.active=Boolean(q)},triggerPet(){R=3.2},getHeadWorldPosition(k=new T){if(!a)return k.set(0,1.15,0);return a.getWorldPosition(k),k},getHeadScreenPoint(k){if(!a||!k)return{x:0.52,y:0.3};return a.getWorldPosition(F),F.y+=0.24,F.project(k),{x:Me((F.x+1)*0.5,0.14,0.86),y:Me((1-F.y)*0.5,0.1,0.72)}},update(k,B,q,{allowAdditiveHead:at=!0}={}){w+=k,G(k,B,q),Z(k,q,at),X(k,B),j(k,B,q)}}}function ol(t,e,n){return Math.max(e,Math.min(n,t))}function ll(t,e,n,i){return tr.lerp(t,e,1-Math.exp(-n*Math.max(0,i)))}function hl(t){return new T(Number(t[0]),Number(t[2]),-Number(t[1]))}function jf(t,e,n,{diagnosticRun:i=!1,onPresetChange:r=null}={}){let s={},a=n.cameraPresets||{};for(let[B,q]of Object.entries(a)){if(!q?.position||!q?.target)continue;s[B]={key:B,label:q.label||B,position:hl(q.position),target:hl(q.target),fov:Number(q.fovDegrees||q.fov||42)}}if(!s.overview){let B=n.camera||{};s.overview={key:"overview",label:"全景工位",position:B.position?hl(B.position):new T(1.28,1.58,2.72),target:B.target?hl(B.target):new T(-0.02,1.04,0.1),fov:Number(B.fovDegrees||45)}}let o="overview",l=s.overview.target.clone(),c=s.overview.target.clone(),h=s.overview.fov,d=s.overview.fov,u=new qs,p=new qs,_=new T;function m(B,q){if(c.copy(B.target),d=B.fov,_.copy(B.position).sub(B.target),p.setFromVector3(_),q)l.copy(c),u.copy(p),h=d,g(0)}let f={minRadius:0.85,maxRadius:3.45,minPolar:0.92,maxPolar:1.56,minAzimuth:-0.68,maxAzimuth:1.05};function v(){p.radius=ol(p.radius,f.minRadius,f.maxRadius),p.phi=ol(p.phi,f.minPolar,f.maxPolar),p.theta=ol(p.theta,f.minAzimuth,f.maxAzimuth)}let y=0;function g(B){if(y+=B,B>0)l.lerp(c,1-Math.exp(-7.5*B)),u.radius=ll(u.radius,p.radius,8.5,B),u.phi=ll(u.phi,p.phi,8.5,B),u.theta=ll(u.theta,p.theta,8.5,B),h=ll(h,d,7.5,B);if(_.setFromSpherical(u),t.position.copy(l).add(_),!i)t.position.x+=Math.sin(y*0.42)*0.007,t.position.y+=Math.cos(y*0.34)*0.005;if(t.lookAt(l),Math.abs(t.fov-h)>0.01)t.fov=h,t.updateProjectionMatrix()}m(s.overview,!0);let S=!1,R=!1,w=0,I=0,V=0,P=0,F=null;function N(B){if(i||B.button!==0)return;S=!0,R=!1,F=B.pointerId,w=V=B.clientX,I=P=B.clientY;try{e.setPointerCapture(F)}catch(q){}}function G(B){if(!S)return;let q=B.clientX-V,at=B.clientY-P;if(V=B.clientX,P=B.clientY,!R&&Math.hypot(B.clientX-w,B.clientY-I)>5)R=!0;if(!R)return;p.theta-=q*0.0046,p.phi-=at*0.0038,v()}function Z(B){if(!S)return;if(S=!1,F!==null){try{e.releasePointerCapture(F)}catch(q){}F=null}}function X(B){if(i)return;B.preventDefault();let q=ol(B.deltaY,-120,120)*0.0022;p.radius+=q,v()}function j(){if(i)return;k(o,!1)}if(e&&!i)e.addEventListener("pointerdown",N),window.addEventListener("pointermove",G),window.addEventListener("pointerup",Z),e.addEventListener("wheel",X,{passive:!1}),e.addEventListener("dblclick",j);function k(B,q=!1){let at=s[B];if(!at)return!1;if(o=B,m(at,q),typeof r==="function")r(B,at.label);return!0}return{presets:s,setPreset:k,getActivePreset(){return o},wasDragged(){return R},update(B){if(i)return;g(B)},dispose(){if(!e)return;e.removeEventListener("pointerdown",N),window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",Z),e.removeEventListener("wheel",X),e.removeEventListener("dblclick",j)}}}var jc=["clear","rain","snow"],M_=[{id:"head",label:"摸摸 Snozzy",match:/^(Face|Hair001|Headphones_3D|Headphones_Glow)/i},{id:"coffee",label:"喝一口热咖啡",match:/^(Prop_Coffee|CoffeeMug|CoffeeLiquid|CoffeeCoaster|MugHandle)/i},{id:"phone",label:"看看手机消息",match:/^(Prop_Phone|PhoneBody|PhoneScreen|PhoneCamera)/i},{id:"notebook",label:"写一笔笔记",match:/^(Prop_Pen|Notebook|Pen)/i},{id:"keyboard",label:"专心敲键盘",match:/^(Keyboard|Kbd|Mouse)/i},{id:"lamp",label:"开关台灯氛围",match:/^(DeskLamp|Lamp|ShelfOrbLamp|OrbBase|FloorLamp)/i},{id:"monitor",label:"切换电脑画面",match:/^(MainMonitor|Monitor|SideMonitor)/i},{id:"music",label:"播放 / 暂停音乐",match:/^(Vinyl|RetroStereo|Stereo|DeskSoundbar)/i},{id:"window",label:"切换窗外天气",match:/^(Window|Curtain)/i},{id:"plushie",label:"捏一捏小摆件",match:/^DeskPlushie/i},{id:"crystal",label:"切换水晶光色",match:/^Crystal/i}];function Kf(t){let e=t;while(e){let n=e.name||"";for(let i of M_)if(i.match.test(n))return i;e=e.parent}return null}function $f({canvas:t,tooltipEl:e,camera:n,gltfRoot:i,cameraController:r,lifeEngine:s,atmosphere:a,liveScreens:o,roomState:l,playAction:c,post:h,diagnosticRun:d=!1}){let u=new el,p=new it,_=[];i.traverse((N)=>{if(!N.isMesh)return;if(Kf(N))_.push(N)});let m=i.getObjectByName("DeskPlushie"),f=m?m.scale.clone():new T(1,1,1),v=0,y=0,g=null;function S(){if(e)e.classList.add("hidden");if(t)t.style.cursor="grab"}function R(N,G,Z){if(!e)return;if(e.textContent=N,e.style.left=`${Math.min(window.innerWidth-130,G+14)}px`,e.style.top=`${Math.max(54,Z-34)}px`,e.classList.remove("hidden"),t)t.style.cursor="pointer"}function w(N){let G=t.getBoundingClientRect();return p.x=(N.clientX-G.left)/G.width*2-1,p.y=-((N.clientY-G.top)/G.height)*2+1,G}function I(N){w(N),u.setFromCamera(p,n);let G=u.intersectObjects(_,!1);for(let Z of G){if(!Z.object.visible)continue;let X=Kf(Z.object);if(X)return{rule:X,hit:Z}}return null}function V(N){if(d)return;if(w(N),s?.setPointer(p.x,p.y,!0),N.buttons!==0){if(S(),t)t.style.cursor="grabbing";return}let G=performance.now();if(G-y<42){if(g)R(g.label,N.clientX,N.clientY);return}if(y=G,g=I(N)?.rule||null,g)R(g.label,N.clientX,N.clientY);else S()}function P(){g=null,S(),s?.setPointer(0,0,!1)}function F(N){if(d||N.button!==0||r.wasDragged())return;let G=I(N);if(!G)return;let{rule:Z,hit:X}=G;switch(Z.id){case"head":s?.triggerPet(),a?.spawnHearts(s.getHeadWorldPosition(),8),c("pet_happy_once",{manual:!0}),h("interaction",{target:"head",action:"pet"});break;case"coffee":c("coffee_once",{manual:!0}),h("interaction",{target:"coffee",action:"coffee"});break;case"phone":c("phone_once",{manual:!0}),h("interaction",{target:"phone",action:"phone"});break;case"notebook":c("write_note_once",{manual:!0}),h("interaction",{target:"notebook",action:"write"});break;case"keyboard":c("typing_loop",{manual:!0}),h("interaction",{target:"keyboard",action:"typing"});break;case"lamp":{let j=a?a.toggleLamp():!0;h("interaction",{target:"lamp",action:"toggleLamp",lampOn:j});break}case"monitor":{let j=o?o.cycleMainMode(l):"typing";h("interaction",{target:"monitor",action:"cycleMonitor",mode:j});break}case"music":h("interaction",{target:"music",action:"toggleMusic"});break;case"window":{let j=jc.indexOf(l.weather||"clear"),k=jc[(j+1)%jc.length];l.weather=k,h("interaction",{target:"window",action:"cycleWeather",weather:k});break}case"plushie":v=1,a?.spawnHearts(X.point,4),h("interaction",{target:"plushie",action:"pokePlushie"});break;case"crystal":{let j=a?a.cycleCrystalColor():7005951;a?.spawnHearts(X.point,4),h("interaction",{target:"crystal",action:"cycleCrystal",color:j});break}default:break}}if(t&&!d)t.style.cursor="grab",t.addEventListener("pointermove",V),t.addEventListener("pointerleave",P),t.addEventListener("pointerup",F);return{update(N){if(m&&v>0.001){v=Math.max(0,v-N*1.45);let G=Math.sin(v*Math.PI*3.5)*v*0.22;if(m.scale.set(f.x*(1+G),f.y*(1+G),f.z*(1-G*1.2)),v<=0.001)m.scale.copy(f)}},dispose(){if(!t)return;t.removeEventListener("pointermove",V),t.removeEventListener("pointerleave",P),t.removeEventListener("pointerup",F)}}}var Ui=24,dr=0.32,$s=document.getElementById("room-canvas"),S_=document.getElementById("room-root"),au=document.getElementById("room-loading"),ou=document.getElementById("room-error"),Qf=document.getElementById("room-error-message"),tm=document.getElementById("room-status"),x_=document.getElementById("room-tooltip"),qt=(t,e={})=>{let n={type:t,...e};if(window.webkit?.messageHandlers?.room)window.webkit.messageHandlers.room.postMessage(n)},Fe=window.__withSnozzy3DManifest||{},fl=window.__withSnozzy3DAssetURL,cl=window.__withSnozzy3DAssetDataURL,$t=window.__withSnozzy3DDiagnostic||null,lu=new Qo,dl=[],rs=[],Kc=0,$c=null,Qc=null,Yt=new Map,Ce=new Map,ml=null,Ee="",gl="typing_loop",nn=null,pr=null,ue,le,Ni,rn,Xt,De=!1,Xe=!1,is=!1,hu=0,T_=performance.now(),pl=null,tu=performance.now(),eu=0,_l=0,cm=null,um=null,Dn=null,Qs=[],os=0,cu=[],dm=new Map,Se=null,Re=0,pm=0,un=0,ss=0,ur=0,ea=!1,Un=null,en=!1,as=null,Pi=[],Nn=null,fm=null,uu=null,Fn=null,qe=null,sn=null,ls=null,_u=null,em=0,nu=null,nm=null,Ye={sceneHour:19.6,weather:"clear",isPlaying:!0,beatPulse:0,focusPhase:"idle",activity:"typing",mood:0.62,drowsy:0,sheIsTalking:!1,celebration:0,playableTracks:5,trackTitle:"Lo-Fi Radio · Chill"},du=0.025,im={coffee_once:{startFrame:56,endFrame:120,hand:"J_Bip_R_Hand",prop:"Prop_Coffee",companion:"coffee_once_PropMotion"},phone_once:{startFrame:52,endFrame:128,hand:"J_Bip_L_Hand",prop:"Prop_Phone",companion:"phone_once_PropMotion"}},iu=["Index","Middle","Ring","Little"],ru=["L","R"],ta=0.005,rm=0.01,E_={typing:[30000,90000],idle:[45000,150000],coffee:[240000,600000],phone:[360000,900000],stand:[480000,1200000]},pu=[{name:"typing_loop",probability:0.68},{name:"idle_seated_loop",probability:0.22},{name:"coffee_once",probability:0.04},{name:"phone_once",probability:0.04},{name:"stand_stretch_once",probability:0.02}];function w_(t,e){return t+Math.random()*(e-t)}function na(){if(Se!==null)clearTimeout(Se),Se=null}function fu(){if(as!==null)clearTimeout(as),as=null}function mm(){Re+=1,na(),Un=null,un=0,ss=0,ea=!1}function b_(){let t=Math.random(),e=0;for(let n of pu)if(e+=n.probability,t<e)return n.name;return pu.at(-1).name}function Fi(t=null,e=null){if($t&&!en||De||Xe||nn||Se!==null)return;let n=e||Un||b_(),i=Yt.has(n)?n:Yt.has("typing_loop")?"typing_loop":Yt.has("idle_seated_loop")?"idle_seated_loop":null;if(!i)return;Un=i;let r=i==="typing_loop"?"typing":i==="idle_seated_loop"?"idle":i==="coffee_once"?"coffee":i==="phone_once"?"phone":"stand",[s,a]=E_[r];un=Math.max(0,Number(t??w_(s,a))),pm=performance.now();let o=Re;Se=setTimeout(()=>{if(Se=null,Un=null,De||Xe||o!==Re)return;if(en)Pi.push("timerFired");if(On(i,{manual:!1,routine:!0})&&!nn&&!en)Fi()},un)}function sm(){if($t&&!en||De)return;if(na(),Re+=1,ur+=1,un=0,ss=0,Un=null,nn)ea=!0;else ea=!1,Fi()}function A_(){if($t&&!en||Xe||Se===null)return;let t=Math.max(0,performance.now()-pm);un=Math.max(0,un-t),ss=performance.now(),Re+=1,na()}function R_(){if($t&&!en||Xe||De||Se!==null)return;Fi(un||null,Un)}function gm(t=40,e=!1,n=null){if($t&&!e||De||Xe||en||nn)return!1;let i=Math.max(15,Math.min(5000,Number(t)||40));fu(),na(),Re+=1,Un=null,un=0,ss=0,en=!0,Pi=[],Nn=null;let r={requestedDelayMs:i,scheduled:!1,timerFired:!1,actionBefore:Ee,actionAfter:null,eventsBefore:0,eventsAfter:0,passed:!1},s={pauseSuspends:!1,resumeRestores:!1,remainingMs:0,passed:!1},a={started:!1,resetCountBefore:ur,resetCountAfter:ur,generationBefore:Re,generationAfter:Re,generationAdvanced:!1,timerScheduled:!1,timerReordered:!1,pendingName:null,passed:!1},o={scheduled:!1,generationBefore:Re,generationAfter:Re,timerCanceled:!1,timerFiredBefore:0,timerFiredAfter:0,noNewTimerFired:!1,actionBefore:Ee,actionAfter:null,actionUnchanged:!1,oldGenerationSuppressed:!1,callbackSuppressed:!1,passed:!1};Fi(i,"typing_loop"),r.scheduled=Se!==null,r.eventsBefore=Pi.length,gu(!0),s.remainingMs=un,s.pauseSuspends=Se===null&&un>0,gu(!1),s.resumeRestores=Se!==null;let l=()=>{if(De||!en)return;fu(),r.eventsAfter=Pi.length,r.timerFired=Pi.slice(r.eventsBefore).includes("timerFired"),r.actionAfter=Ee,r.passed=r.scheduled&&r.timerFired,o.timerFiredAfter=Pi.length,o.actionAfter=Ee,o.actionUnchanged=o.actionBefore===o.actionAfter,o.noNewTimerFired=o.timerFiredAfter===o.timerFiredBefore,o.oldGenerationSuppressed=o.generationAfter>o.generationBefore,o.callbackSuppressed=o.noNewTimerFired&&o.actionUnchanged&&Se===null,o.passed=o.scheduled&&o.timerCanceled&&o.generationAfter>o.generationBefore&&o.callbackSuppressed;let h=s.pauseSuspends&&s.resumeRestores,d=a.started&&a.resetCountAfter>a.resetCountBefore&&a.generationAfter>a.generationBefore&&a.timerScheduled&&a.passed,u=o.callbackSuppressed;if(en=!1,Un=null,un=0,ss=0,Nn={requestedDelayMs:i,schedule:{...r},pauseResume:{...s,passed:h},manualReorder:{...a,passed:d},teardownCancel:{...o},callbackSuppressed:u,scheduled:r.scheduled,accelerated:a.timerScheduled,pauseSuspends:s.pauseSuspends,resumeRestores:s.resumeRestores,manualReset:d,timerFired:r.timerFired,passed:r.passed&&h&&d&&o.passed&&u},!$t)Fi();if(qt("routineProbe",{result:Nn}),typeof n==="function")n(Nn)},c=()=>{if(De||!en)return;let h=ur,d=Re,u=On("typing_loop",{manual:!0});a.started=u,a.resetCountBefore=h,a.resetCountAfter=ur,a.generationBefore=d,a.generationAfter=Re,a.generationAdvanced=Re>d,a.timerScheduled=Se!==null,a.timerReordered=a.timerScheduled&&a.generationAdvanced,a.pendingName=Un,a.passed=u&&ur===h+1&&Re>d&&Se!==null&&a.timerReordered,na(),Re+=1,Un=null,un=0,ss=0,o.generationBefore=Re,o.actionBefore=Ee;let p=Pi.length;Fi(i,"typing_loop"),o.scheduled=Se!==null,o.timerFiredBefore=p;let _=Se;mm(),o.generationAfter=Re,o.timerCanceled=_!==null&&Se===null,as=setTimeout(l,i+40)};return as=setTimeout(()=>{if(as=null,De||!en)return;if(Pi.slice(r.eventsBefore).includes("timerFired")){c();return}c()},i+40),!0}function _m(){if(pl===null)return;try{globalThis.createImageBitmap=pl}catch(t){}pl=null}function am(t){if(!t?.index)return Math.floor((t?.attributes?.position?.count||0)/3);return Math.floor(t.index.count/3)}function C_(t,e){let n=0,i=0,r=0,s=0,a=0,o=new Set,l=[];t.traverse((m)=>{if(n+=1,m.isBone)s+=1;if(!m.isMesh)return;if(i+=1,r+=am(m.geometry),m.morphTargetDictionary)Object.keys(m.morphTargetDictionary).forEach((f)=>o.add(f));if(m.isSkinnedMesh&&m.skeleton)a=Math.max(a,m.skeleton.bones.length);l.push({name:m.name,triangles:am(m.geometry),materialCount:Array.isArray(m.material)?m.material.length:1,morphTargetCount:m.morphTargetDictionary?Object.keys(m.morphTargetDictionary).length:0,skinned:Boolean(m.isSkinnedMesh)})});let c=new Ue().setFromObject(t),h=c.getSize(new T),d=c.getCenter(new T),u=e.filter((m)=>m.transparent||m.alphaTest>0),p=e.map((m)=>{let f=m.map||null,v=f?.image||null,y=f?.source?.data||null;return{name:m.userData.phase0SourceName||m.name,runtimeName:m.name,type:m.type,role:m.userData.phase0Character?"character":"scene",unlit:Boolean(m.userData.phase0Unlit),map:{present:Boolean(f),uuid:f?.uuid||null,imageName:v?.name||null,imageSourceUUID:f?.source?.uuid||null,imageSourceType:y?.constructor?.name||null,width:v?.width||v?.videoWidth||null,height:v?.height||v?.videoHeight||null,colorSpace:f?.colorSpace||null},alphaMapPresent:Boolean(m.alphaMap),alphaTest:m.alphaTest,transparent:m.transparent,depthWrite:m.depthWrite}}),_=p.filter((m)=>m.role==="character");return{nodeCount:n,meshCount:i,boneCount:s,skeletonBoneCount:a,morphTargetCount:o.size,triangleCount:r,materialCount:e.length,characterMaterialCount:_.length,unlitCharacterMaterialCount:_.filter((m)=>m.unlit).length,characterMaterials:_,materialRuntime:p,alphaMaterialCount:u.length,alphaMaterials:u.map((m)=>({name:m.userData.phase0SourceName||m.name,transparent:m.transparent,alphaTest:m.alphaTest,depthWrite:m.depthWrite,side:m.side===be?"DoubleSide":"FrontSide",toon:Boolean(m.userData.phase0Toon),unlit:Boolean(m.userData.phase0Unlit),mapPresent:Boolean(m.map),mapColorSpace:m.map?.colorSpace||null,alphaMode:m.userData.phase0AlphaMode||(m.transparent?"BLEND":"MASK")})),meshes:l,bounds:{min:c.min.toArray(),max:c.max.toArray(),size:h.toArray(),center:d.toArray()},rootScale:t.scale.toArray()}}function L_(){let t=le.getContext(),e=le.domElement.width,n=le.domElement.height,i=new Uint8Array(e*n*4);return t.readPixels(0,0,e,n,t.RGBA,t.UNSIGNED_BYTE,i),i}function vm(t,e){if(!t||!e||t.length!==e.length)return{changedPixels:0,meanAbsoluteChannelDiff:0,maxChannelDiff:0};let n=0,i=0,r=0;for(let s=0;s<t.length;s+=4){let a=0;for(let o=0;o<4;o+=1){let l=Math.abs(t[s+o]-e[s+o]);a=Math.max(a,l),i+=l,r=Math.max(r,l)}if(a>2)n+=1}return{changedPixels:n,changedPixelRatio:n/(t.length/4),meanAbsoluteChannelDiff:i/t.length,maxChannelDiff:r}}function vu(t){le.render(Ni,rn);let e=le.domElement.toDataURL("image/png"),n=L_();if(t==="idle")$c=n,cm=n;if(t==="typing")Qc=n,um=n;if(qt("screenshot",{name:t,dataURL:e}),$c&&Qc){let i=vm($c,Qc);qt("pixelDiff",{pixelDiff:i})}}function mu(t=null){let e=Yt.get("typing_loop");if(!os||!e)return;let n=t??(performance.now()-os)/1000;if(n>dr+0.08)return;if(cu.some((i)=>Math.abs(i.elapsedSeconds-n)<0.01))return;cu.push({elapsedSeconds:n,idleWeight:Yt.get("idle_seated_loop")?.getEffectiveWeight?.()||0,typingWeight:e.getEffectiveWeight(),idleTimeSeconds:Yt.get("idle_seated_loop")?.time||0,typingTimeSeconds:e.time})}function I_(t,e,n,i=null){let r=[...Yt.entries()].map(([d,u])=>({name:d,weight:Number(u.getEffectiveWeight?.()||0)})).filter((d)=>d.weight>0.001).sort((d,u)=>u.weight-d.weight),s=r.find((d)=>d.name===t),a=i||null,o=r.filter((d)=>d.name!==t&&d.name!==a),l=a?r.find((d)=>d.name===a):null,c=Boolean(s)&&Math.abs(s.weight-1)<=0.03&&!o.length&&(!a||Boolean(l)),h={action:t,screenshot:e,timeSeconds:n,active:r,mainWeight:s?.weight||0,companion:l?.name||null,companionWeight:l?.weight||0,isolatedPass:c};return Qs.push(h),qt("diagnostic",{phase:"sampleWeights",...h}),h}function ym(t){let e=t.name.lastIndexOf(".");if(e<=0||!Xt)return!1;let n=t.name.slice(0,e),i=Xt.getObjectByName(n);return Boolean(i?.isBone)}function P_(t){return{sourceClipCount:t.length,clips:t.map((e)=>({name:e.name,durationSeconds:e.duration,trackCount:e.tracks.length,boneTrackCount:e.tracks.filter(ym).length,hasPropTracks:e.tracks.some((n)=>/Prop_|Keyboard|Monitor|Coffee|Phone/.test(n.name)),loop:Boolean(Ce.get(e.name)?.loop)})),sourceFrameRate:Ui}}function U_(){let t=dl.filter((o)=>o>100),e=dl.filter((o)=>o<=100),n=[...e].sort((o,l)=>o-l),i=[...dl].sort((o,l)=>o-l),r=(o,l)=>o.length?o[Math.min(o.length-1,Math.floor(o.length*l))]:0,s=rs.length>1?rs.at(-1)-rs[0]:0,a=e.reduce((o,l)=>o+l,0);return{frames:hu,durationSeconds:s/1000,fps:a>0?e.length*1000/a:0,activeIntervalCount:e.length,warmupExcludedIntervalCount:t.length,warmupExcludedIntervalsMs:t.slice(0,12),frameTimeMs:{min:n[0]||0,median:r(n,0.5),p95:r(n,0.95),max:n.at(-1)||0},rawFrameTimeMs:{min:i[0]||0,median:r(i,0.5),p95:r(i,0.95),max:i.at(-1)||0}}}function N_(){let t=le?.getContext?.(),e=window.__roomMetrics||{},n=[...Ce.values()].map((K)=>({name:K.name,durationSeconds:K.duration,trackCount:K.tracks.length,boneTrackCount:K.tracks.filter(ym).length,loop:Boolean(Ce.get(K.name)?.loop),actionCreated:Yt.has(K.name)})),i=vm(cm,um),r=Fe.validation||{},s=Array.isArray(r.requiredClips)?r.requiredClips:[],a=new Set(Yt.keys()),o=s.filter((K)=>!a.has(K)),l=Number(Fe.counts?.boneCount||0),c=Number(Fe.counts?.morphTargetCount||0),h=Number(Fe.counts?.materialCount||0),d=Number(Fe.validation?.maxMaterials??Fe.budgets?.maxMaterials),u=Number.isFinite(d)&&e.materialCount<=d,p=["coffee_once","phone_once"].filter((K)=>a.has(K)).map((K)=>`${K}_PropMotion`).filter((K)=>a.has(K)),_=["coffee_once","phone_once"].filter((K)=>a.has(K)&&!a.has(`${K}_PropMotion`)),m=window.__runtimeContactMeasurement||fm||{},f=m.source==="runtimeAnimationSample"&&m.pass===!0&&m.restoredToTyping===!0,v=new Map((Fe.clips||[]).map((K)=>[K.name,K])),y=v.get("coffee_once")?.contact||{},g=v.get("phone_once")?.contact||{},S=v.get("typing_loop")||{},R=S.contact||{},w=(K)=>typeof K==="number"&&Number.isFinite(K),I=(K)=>{let mt=K?.toleranceMeters,lt=K?.wristToSocketMinMeters,rt=K?.wristToSocketMaxMeters,ht=K?.grabSampleCount,gt=K?.trajectoryMaxMeters;return w(mt)&&mt>0&&w(lt)&&lt>=0&&lt<=mt&&w(rt)&&rt>=0&&rt<=mt&&w(ht)&&ht>0&&w(gt)&&gt>0},V=I(y)&&I(g),P=S.keyboardContact,F=P?.maxFingerTipPlaneErrorMeters,N=P?.sampleCount,G=w(F)&&F<=0.025&&w(N)&&N>0,Z=Boolean(Fe.validation?.contactContract)&&V&&G,X=window.__roomCameraContract||{},j=X.source==="manifest"&&Array.isArray(X.position)&&X.position.length===3&&Array.isArray(X.target)&&X.target.length===3&&Number.isFinite(Number(X.fov)),k=!$t||Qs.length>0&&Qs.every((K)=>K.isolatedPass),B=U_(),q=$t?Number(i.changedPixelRatio||0)>0.00001&&Number(i.maxChannelDiff||0)>2:!0,at={enabled:!Boolean($t),productionOnly:!0,distribution:pu,timerActive:Se!==null,supportsTimerCancellation:!0,manualResetCount:ur,pauseSuspends:!0,resumeRestores:!0,supportsDisposeCancellation:!0,disposeCancellationObserved:Nn?.teardownCancel?.passed===!0&&Nn?.teardownCancel?.callbackSuppressed===!0,probe:Nn,state:De?"disposed":Xe?"paused":nn?"deferred_for_one_shot":Se!==null?"scheduled":"idle"},ft=at.productionOnly&&at.supportsTimerCancellation&&at.supportsDisposeCancellation&&Nn?.passed===!0,Q={webgl:Boolean(t),skeleton:e.skeletonBoneCount>=l&&e.boneCount>=l,morphTargets:e.morphTargetCount>=c,materials:e.characterMaterialCount>=Math.min(h,20)&&u,routineScheduler:ft,triangles:e.triangleCount<=Number(r.maxTriangles||200000),requiredClips:o.length===0,propCompanionActions:_.length===0,runtimeContact:f,manifestContact:Z,cameraContract:j,isolatedCaptureActions:k,actionBindings:s.every((K)=>a.has(K)),pixelAnimation:q,activeFrameTiming:$t?.performance?B.activeIntervalCount>=5&&Number(B.frameTimeMs.p95||0)<=100:!0};return{status:Object.values(Q).every(Boolean)?"PASS":"FAIL",runtime:"WKWebView + vendored Three.js + GLTFLoader",assetURL:fl,loadMilliseconds:performance.now()-T_,webgl:t?{renderer:t.getParameter(t.RENDERER),vendor:t.getParameter(t.VENDOR),version:t.getParameter(t.VERSION),shadingLanguageVersion:t.getParameter(t.SHADING_LANGUAGE_VERSION)}:null,counts:e,animation:{clips:n,activeAction:Ee,crossfadeSeconds:dr,crossfadeSamples:cu},camera:X,diagnosticActiveWeights:Qs,activeFPS:$t?.performance?B.fps:_l,renderLoopFPS:_l,frameTiming:B,pixelDiff:i,gates:Q,failedGates:Object.entries(Q).filter(([,K])=>!K).map(([K])=>K),missingClips:o,companionGates:p,companionMissing:_,runtimeContact:m,contact:{contractPass:V,source:m.source||null,runtime:m,typingKeyboardPass:G,contract:Fe.validation?.contactContract||null,coffee:y,phone:g,typing:R,keyboardDistanceMeters:F,keyboardSampleCount:N,maxMaterials:d,runtimeMaterialCount:e.materialCount,materialCountBudgetPass:u},manifestExpected:Fe.counts||{},routineScheduler:at,requiredClips:s,textureLoader:window.__roomTextureLoader||null,diagnostics:$t?{requestedActions:$t.actions||[],screenshots:$t.screenshots!==!1,performance:Boolean($t.performance),activeWeights:Qs}:null}}function vl(){if(!$t||Dn==="done")return;Dn="done";let t=N_();qt("report",{report:t}),qt("done",{report:t})}function Mm(){if(De)return;if(hu===0)qt("firstFrame",{width:le.domElement.width,height:le.domElement.height});let t=performance.now();if(Kc)dl.push(t-Kc);if(Kc=t,rs.push(t),hu+=1,rs.length>300)rs.shift();let e=Math.min(lu.getDelta(),0.1);if(!Xe){if(ue)ue.update(e);if(sn?.update(e,Ye,Ee,{allowAdditiveHead:!$t}),ls?.update(e),_u?.update(e),Fn?.update(e,Ye),qe?.update(e,Ye,Xt),le.render(Ni,rn),!$t&&sn&&t-em>=120){em=t;let n=sn.getHeadScreenPoint(rn);qt("headAnchor",{x:n.x,y:n.y})}if(eu+=1,t-tu>=1000)_l=eu*1000/(t-tu),eu=0,tu=t,qt("status",{message:`${Ee||"准备中"} · ${Math.round(_l)} FPS`,action:Ee});if(mu(),$t)H_(t)}setTimeout(Mm,16.666666666666668)}function Sm(t,e=Ee){if(tm)tm.textContent=t;qt("status",{message:t,action:e})}function yl(t){let e=String(t||"").trim();return{idle:"idle_seated_loop",typing:"typing_loop",coffee:"coffee_once",phone:"phone_once",stand:"stand_stretch_once",stretch:"stand_stretch_once",chin_rest:"chin_rest_loop",closeup:"chin_rest_loop",listen:"listen_music_loop",drowsy:"drowsy_nod_loop",pet:"pet_happy_once",write:"write_note_once"}[e]||e}function On(t,e={}){let n=yl(t),i=Yt.get(n);if(!i)return ia(`动作「${n}」不在当前 GLB 中`),!1;let r=ml;if(r===i&&i.isRunning()){if(e.manual)sm();return!0}if(nn&&nn!==i)nn.stop(),nn=null;if(fr(),i.reset(),Ce.get(n)?.loop)i.setLoop(kr,1/0).clampWhenFinished=!1;else i.setLoop(Qn,1).clampWhenFinished=!0,nn=i;if(i.setEffectiveWeight(1).play(),r&&r!==i)r.crossFadeTo(i,dr,!1),os=performance.now();if(ml=i,Ee=n,Ce.get(n)?.loop)gl=n;if(Sm(e.manual?`正在${Ce.get(n)?.label||n}`:Ce.get(n)?.label||n,n),n==="pet_happy_once"){if(sn?.triggerPet(),sn&&qe)qe.spawnHearts(sn.getHeadWorldPosition())}if(e.manual)qt("action",{name:n,manual:!0});let s={coffee_once:"coffee_once_PropMotion",phone_once:"phone_once_PropMotion",write_note_once:"write_note_once_PropMotion"}[n];if(s&&Yt.has(s))Di("Prop_Coffee"),Di("Prop_Phone"),Di("Prop_Pen"),pr=Yt.get(s),pr.reset().setLoop(Qn,1).setEffectiveWeight(1).play();if(e.manual)sm();return!0}function F_(t){if(t!==nn)return;nn=null,fr();let e=Yt.has(gl)?gl:"typing_loop";if(On(e,{manual:!1}),ea)ea=!1;Fi()}function su(t,e){let n=t.getObjectByName(e);if(!n)return;dm.set(e,{position:n.position.clone(),quaternion:n.quaternion.clone(),scale:n.scale.clone()})}function Di(t){let e=Xt?.getObjectByName(t),n=dm.get(t);if(!e||!n)return;e.position.copy(n.position),e.quaternion.copy(n.quaternion),e.scale.copy(n.scale),e.updateMatrixWorld(!0)}function fr(){pr?.stop?.(),pr=null,Di("Prop_Coffee"),Di("Prop_Phone"),Di("Prop_Pen")}function Oi(t){return Boolean(t)&&Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z)}function xm(t,e=null){if(!ue||!Xt)return{pass:!1,reason:"missing_runtime_state"};let n=Yt.get(t);if(!n)return{pass:!1,reason:`missing_action:${t}`};if(e&&!Yt.has(e))return{pass:!1,reason:`missing_action:${e}`};ue.stopAllAction(),Yt.forEach((r)=>{r.stop(),r.reset(),r.enabled=!1,r.setEffectiveWeight(0)}),fr(),n.enabled=!0,n.setLoop(Qn,1),n.clampWhenFinished=!0,n.setEffectiveWeight(1).play();let i=null;if(e)i=Yt.get(e),i.enabled=!0,i.setLoop(Qn,1),i.clampWhenFinished=!0,i.setEffectiveWeight(1).play();return{pass:!0,action:n,companion:i}}function om(){let t=Yt.get("typing_loop");if(!t||!ue||!Xt)return!1;return ue.stopAllAction(),Yt.forEach((e)=>{e.stop(),e.reset(),e.enabled=!1,e.setEffectiveWeight(0)}),fr(),t.enabled=!0,t.setLoop(kr,1/0),t.clampWhenFinished=!1,t.setEffectiveWeight(1).play(),t.time=0,ue.update(0),Xt.updateMatrixWorld(!0),ml=t,Ee="typing_loop",gl="typing_loop",nn=null,os=0,!0}function lm(t,e){let n=(Fe.clips||[]).find((S)=>S.name===t),i=n?.contact?.holdFrameWindow,r=Array.isArray(i)&&i.length===2?Number(i[0]):e.startFrame,s=Array.isArray(i)&&i.length===2?Number(i[1]):e.endFrame,a=n?.contact?.handLocalGripPoint,o=Array.isArray(a)&&a.length===3?new T(Number(a[0]),Number(a[1]),Number(a[2])):null,l={action:t,companion:e.companion,hand:e.hand,prop:e.prop,startFrame:r,endFrame:s,fps:Ui,toleranceMeters:du,source:"runtimeAnimationSample",sampleCount:0,maxWorldDistanceMeters:null,minWorldDistanceMeters:null,pass:!1};if(!Xt||!ue)return{...l,reason:"missing_runtime_state"};let c=Xt.getObjectByName(e.hand),h=Xt.getObjectByName(e.prop);if(!c||!h)return{...l,reason:`missing_node:${!c?e.hand:e.prop}`};let d=xm(t,e.companion);if(!d.pass)return{...l,reason:d.reason};let u=0,p=1/0,_=[],m=new T,f=new T,v=Number(Ce.get(t)?.duration);if(!Number.isFinite(v)||v<=0)return{...l,reason:`invalid_duration:${t}`};for(let S=r;S<=s;S+=1){let R=S/Ui;if(!Number.isFinite(R)||R<0||R>v+1/Ui)return{...l,reason:`invalid_time:${S}`};if(d.action.time=Math.min(R,v),d.companion)d.companion.time=Math.min(R,v);if(ue.update(0),Xt.updateMatrixWorld(!0),o)m.copy(o).applyMatrix4(c.matrixWorld);else c.getWorldPosition(m);if(h.getWorldPosition(f),!Oi(m)||!Oi(f))return{...l,reason:`non_finite_position:${S}`};let w=m.distanceTo(f);if(!Number.isFinite(w))return{...l,reason:`non_finite_distance:${S}`};u=Math.max(u,w),p=Math.min(p,w),_.push({frame:S,timeSeconds:R,worldDistanceMeters:w})}let y=[...Yt.entries()].filter(([,S])=>S.getEffectiveWeight()>0.001).map(([S])=>S).sort(),g=y.length===1+(d.companion?1:0)&&y.includes(t)&&(!d.companion||y.includes(e.companion));return{...l,sampleCount:_.length,maxWorldDistanceMeters:u,minWorldDistanceMeters:p,isolatedActions:y,isolatedPass:g,samples:_,pass:g&&_.length===s-r+1&&u<=du}}function D_(t){if(!t)return{pass:!1,reason:"missing_node:Keyboard"};let e=[];if(t.traverse((l)=>{if(l.isMesh&&l.geometry)e.push(l)}),t.isMesh&&t.geometry&&!e.includes(t))e.push(t);if(e.length===0)return{pass:!1,reason:"missing_mesh:Keyboard"};t.updateMatrixWorld(!0);let n=t.getWorldPosition(new T),r=t.getWorldQuaternion(new me).clone().invert(),s=new T(1/0,1/0,1/0),a=new T(-1/0,-1/0,-1/0),o=new T;for(let l of e){let c=l.geometry;if(!c.boundingBox)c.computeBoundingBox();let h=c.boundingBox;if(!h||!Oi(h.min)||!Oi(h.max))return{pass:!1,reason:`invalid_geometry_bbox:${l.name||"Keyboard"}`};for(let d of[h.min.x,h.max.x])for(let u of[h.min.y,h.max.y])for(let p of[h.min.z,h.max.z]){if(o.set(d,u,p).applyMatrix4(l.matrixWorld).sub(n).applyQuaternion(r),!Oi(o))return{pass:!1,reason:"non_finite_keyboard_bbox"};s.min(o),a.max(o)}}if(![s.x,s.y,s.z,a.x,a.y,a.z].every(Number.isFinite)||a.x<s.x||a.y<s.y||a.z<s.z)return{pass:!1,reason:"invalid_keyboard_basis"};return{pass:!0,origin:n,inverseRotation:r,min:s,max:a,footprint:{minX:s.x-ta,maxX:a.x+ta,minY:s.y-ta,maxY:a.y+ta},topZ:a.z,meshNames:e.map((l)=>l.name||"Keyboard"),basis:"Keyboard world rotation only; child mesh geometry bbox"}}function O_(t){if(t?.parent?.isBone){let i=new T,r=new T;t.parent.getWorldPosition(i),t.getWorldPosition(r);let s=r.clone().add(r.clone().sub(i).multiplyScalar(0.78));return Oi(s)?s:null}let e=t?.position?.length?.();if(!Number.isFinite(e)||e<=0)return null;let n=new T(0,e,0).applyMatrix4(t.matrixWorld);return Oi(n)?n:null}function B_(){let t={action:"typing_loop",source:"runtimeAnimationSample",fps:Ui,tipMethod:"local +Y × distal bone local offset length",distalBones:ru.flatMap((f)=>iu.map((v)=>`J_Bip_${f}_${v}3`)),footprintPaddingMeters:ta,topToleranceMeters:rm,sampleCount:0,frameStart:0,frameEnd:null,pass:!1};if(!Xt||!ue)return{...t,reason:"missing_runtime_state"};let e=Yt.get("typing_loop"),n=Xt.getObjectByName("Keyboard");if(!e)return{...t,reason:"missing_action:typing_loop"};if(!n)return{...t,reason:"missing_node:Keyboard"};let i=D_(n);if(!i.pass)return{...t,reason:i.reason};let r={};for(let f of ru){r[f]={};for(let v of iu){let y=`J_Bip_${f}_${v}3`,g=Xt.getObjectByName(y);if(!g?.isBone)return{...t,reason:`missing_node:${y}`};let S=g.position.length();if(!Number.isFinite(S)||S<0.005||S>0.05)return{...t,reason:`invalid_bone_length:${y}`};r[f][v]=g}}let s=Number(Ce.get("typing_loop")?.duration);if(!Number.isFinite(s)||s<=0)return{...t,reason:"invalid_duration:typing_loop"};let a=Math.round(s*Ui),o=xm("typing_loop");if(!o.pass)return{...t,reason:o.reason};let l=new T,c=0,h=0,d=0,u=[],p=[];for(let f=0;f<=a;f+=1){let v=f/Ui;if(!Number.isFinite(v)||v<0||v>s+1/Ui)return{...t,reason:`invalid_time:${f}`,frameEnd:a};e.time=Math.min(v,s),ue.update(0),Xt.updateMatrixWorld(!0);let y={frame:f,timeSeconds:v,hands:{}},g=!0;for(let S of ru){let R=null;for(let I of iu){let V=r[S][I],P=O_(V);if(!P)return{...t,reason:`non_finite_tip:${f}`,frameEnd:a};l.copy(P);let F=l.clone().sub(i.origin).applyQuaternion(i.inverseRotation);if(!Oi(F))return{...t,reason:`non_finite_keyboard_tip:${f}`,frameEnd:a};let N=Math.abs(F.z-i.topZ),G=Math.max(i.footprint.minX-F.x,F.x-i.footprint.maxX,i.footprint.minY-F.y,F.y-i.footprint.maxY,0),Z={finger:I,tipKeyboardBasis:F.toArray(),topDistanceMeters:N,footprintOverflowMeters:G,withinFootprint:G<=0,withinTopTolerance:N<=rm},X=Z.withinFootprint&&Z.withinTopTolerance,j=R?.withinFootprint&&R?.withinTopTolerance;if(!R||X&&!j||!j&&N<R.topDistanceMeters)R=Z}let w=Boolean(R?.withinFootprint&&R?.withinTopTolerance);g=g&&w,c=Math.max(c,R?.topDistanceMeters||0),h=Math.max(h,R?.footprintOverflowMeters||0),y.hands[S]={...R,pass:w}}if(g)d+=1;else u.push(f);p.push(y)}let _=[...Yt.entries()].filter(([,f])=>f.getEffectiveWeight()>0.001).map(([f])=>f).sort(),m=_.length===1&&_[0]==="typing_loop";return{...t,frameEnd:a,sampleCount:p.length,validFrameCount:d,failedFrames:u,maxFingerTipTopDistanceMeters:c,maxFootprintOverflowMeters:h,isolatedActions:_,isolatedPass:m,keyboardBasis:{min:i.min.toArray(),max:i.max.toArray(),topZ:i.topZ,footprint:i.footprint,meshNames:i.meshNames,basis:i.basis},samples:p,pass:m&&p.length===a+1&&d===p.length}}function z_(){let t={source:"runtimeAnimationSample",pass:!1,restoredToTyping:!1,toleranceMeters:du,coffee:null,phone:null,typing:null};try{t.coffee=lm("coffee_once",im.coffee_once),t.phone=lm("phone_once",im.phone_once),t.typing=B_(),t.restoredToTyping=om(),t.pass=Boolean(t.coffee?.pass&&t.phone?.pass&&t.typing?.pass&&t.restoredToTyping)}catch(e){t.error=String(e?.message||e),t.pass=!1,t.restoredToTyping=om()}return fm=t,window.__runtimeContactMeasurement=t,qt("runtimeContact",{measurement:t}),t}function V_(t){ue=new tl(Xt),Ce.clear(),Yt.clear();let e=Array.isArray(Fe.clips)?Fe.clips:[];t.animations.forEach((s)=>{let a=e.find((l)=>l.name===s.name)||{name:s.name,loop:/loop/i.test(s.name),label:s.name};Ce.set(s.name,{...a,duration:s.duration,tracks:s.tracks});let o=ue.clipAction(s);o.setLoop(a.loop?kr:Qn,a.loop?1/0:1),o.clampWhenFinished=!a.loop,o.enabled=!0,o.setEffectiveWeight(0),Yt.set(s.name,o)}),ue.addEventListener("finished",(s)=>F_(s.action));let n=P_(t.animations);window.__roomAnimation=n,qt("setup",{animation:n,counts:window.__roomMetrics});let r=($t&&Yt.has("idle_seated_loop")?"idle_seated_loop":null)||(Yt.has("typing_loop")?"typing_loop":t.animations[0]?.name||"");if(!r||!On(r))throw Error("GLB 没有可播放动作");if(z_(),window.__roomStartedAt=performance.now(),$t)G_();else setTimeout(()=>{if(ue)ue.setTime(0);Xt.updateMatrixWorld(!0),le.render(Ni,rn)},16),Fi();window.__roomReady=!0,au?.classList.add("hidden"),qt("ready",{counts:window.__roomMetrics,animation:n}),Sm("已就绪 · 正在打字",Ee)}function H_(t){if(!$t||Dn==="done")return;let e=t-(os||t);if(Dn==="idle")return;if(Dn==="typing"&&e>850)if(vu("typing"),(Array.isArray($t.actions)?$t.actions:[]).length>0)Tm(0);else vl()}function ul(t,e,n=t){if(!Yt.has(t))return!1;ue.stopAllAction(),Yt.forEach((s)=>{s.stop(),s.reset(),s.enabled=!1,s.setEffectiveWeight(0)}),fr();let i=Yt.get(t);i.enabled=!0,i.setLoop(Ce.get(t)?.loop?kr:Qn,Ce.get(t)?.loop?1/0:1),i.clampWhenFinished=!Ce.get(t)?.loop,i.setEffectiveWeight(1).play(),ml=i,Ee=t;let r={coffee_once:"coffee_once_PropMotion",phone_once:"phone_once_PropMotion",write_note_once:"write_note_once_PropMotion"}[t];if(r&&Yt.has(r)){let s=Yt.get(r);s.enabled=!0,s.setLoop(Qn,1).clampWhenFinished=!0,s.setEffectiveWeight(1).play(),pr=s}if(i.time=Math.max(0,Math.min(e,Number(Ce.get(t)?.duration||1))),pr)pr.time=i.time;return ue.update(0),sn?.update(0.05,Ye,t,{allowAdditiveHead:!1}),Xt.updateMatrixWorld(!0),Fn?.update(0.1,Ye,!0),qe?.update(0.016,Ye,Xt),le.render(Ni,rn),I_(t,n,i.time,r),vu(n),!0}function G_(){Dn="deterministic";let t=Yt.has("idle_seated_loop")?"idle_seated_loop":Ee,e=Yt.has("typing_loop")?"typing_loop":Ee;if(!t||!e){ia("诊断缺少 idle/typing 动作");return}ul(t,0.22,"idle"),On(e,{manual:!0}),os=performance.now(),ue.update(dr*0.5),mu(dr*0.5),ue.update(dr*0.5),mu(dr),ul(e,1.85,"typing"),(Array.isArray($t?.actions)?$t.actions:[]).forEach((r)=>{let s=yl(r),a=Number(Ce.get(s)?.duration||1),o=s==="coffee_once"?Math.min(a*0.55,a-0.05):s==="phone_once"?Math.min(a*0.5,a-0.05):s==="stand_stretch_once"?Math.min(a*0.53,a-0.05):Math.min(a*0.45,a-0.05);ul(s,o,s),fr(),Di("Prop_Coffee"),Di("Prop_Phone")}),ul(e,0.15,"typing_return"),fr();let i=()=>{if(De)return;if(Dn="routineProbe",gm(40,!0,()=>{if(!De)vl()}))return;Nn={requestedDelayMs:40,schedule:{scheduled:!1,timerFired:!1,passed:!1},pauseResume:{pauseSuspends:!1,resumeRestores:!1,passed:!1},manualReorder:{started:!1,timerScheduled:!1,passed:!1},teardownCancel:{scheduled:!1,timerCanceled:!1,callbackSuppressed:!1,passed:!1},callbackSuppressed:!1,scheduled:!1,accelerated:!1,pauseSuspends:!1,resumeRestores:!1,manualReset:!1,timerFired:!1,passed:!1},qt("routineProbe",{result:Nn}),vl()};if($t?.performance)Dn="performance",setTimeout(()=>{i()},2200);else i()}function W_(t){switch(yl(t)){case"coffee_once":return 2900;case"phone_once":return 2400;case"stand_stretch_once":return 4200;default:return 1100}}function Tm(t){let e=Array.isArray($t?.actions)?$t.actions:[];if(t>=e.length){qt("diagnostic",{phase:"done"}),vl();return}let n=yl(e[t]);qt("diagnostic",{phase:"start",index:t,name:n}),Dn=`action:${t}:playing`,On(n,{manual:!0});let i=W_(n),r=Number(Ce.get(n)?.duration||1)*1000;setTimeout(()=>{if(De)return;qt("diagnostic",{phase:"capture",index:t,name:n}),vu(n),qt("diagnostic",{phase:"afterCapture",index:t,name:n}),Dn=`action:${t}:captured`},i),setTimeout(()=>{if(De)return;qt("diagnostic",{phase:"next",index:t,name:n}),Tm(t+1)},Math.max(i,r)+450)}function k_(){let t=is?1:Math.min(window.devicePixelRatio||1,2);le?.setPixelRatio(t)}function gu(t){let e=Boolean(t);if(e===Xe)return;if(e)A_(),Xe=!0,lu.stop();else Xe=!1,lu.start(),R_();S_?.classList.toggle("paused",Xe),qt("status",{paused:Xe,lowPower:is,message:Xe?"已暂停":Ee})}function X_(){let t=Fe.camera||Fe.room?.camera||null;if(t?.position&&t?.target){let e=(n)=>[Number(n[0]),Number(n[2]),-Number(n[1])];return{position:e(t.position),target:e(t.target),fov:Number(t.fovDegrees||t.fov||32),source:"manifest"}}return{position:[2.88,2.35,4.05],target:[0,1.02,0.18],fov:31,source:"Blender authored fallback"}}function q_(){let t=X_();return rn=new _e(t.fov,window.innerWidth/window.innerHeight,0.01,100),rn.position.fromArray(t.position),rn.lookAt(new T().fromArray(t.target)),rn.updateProjectionMatrix(),window.__roomCameraContract=t,t}function Y_(t){is=Boolean(t),k_(),qe?.setLowPower(is),qt("status",{paused:Xe,lowPower:is,message:is?"省电模式":Ee})}function ia(t){let e=String(t||"3D 房间加载失败");if(au)au.classList.add("hidden");if(ou)ou.classList.remove("hidden");if(Qf)Qf.textContent=e;qt("error",{message:e})}function Z_(){if(De)return;De=!0,mm(),fu(),en=!1,ue?.stopAllAction(),Xt?.traverse((t)=>{if(t.geometry?.dispose)t.geometry.dispose();(Array.isArray(t.material)?t.material:[t.material]).forEach((n)=>n?.dispose?.())}),uu?.dispose?.(),Fn?.dispose?.(),qe?.dispose?.(),ls?.dispose?.(),_u?.dispose?.(),le?.dispose(),le?.forceContextLoss?.(),qt("disposed")}window.__withSnozzy3DCommand=(t)=>{if(typeof t==="string")return On(t,{manual:!0});if(!t||typeof t!=="object")return!1;if(t.type==="action")return On(t.name,{manual:!0});if(t.type==="cameraPreset"&&t.preset)return ls?ls.setPreset(t.preset,Boolean(t.instant)):!1;if(t.type==="pet"){if(sn?.triggerPet(),sn&&qe)qe.spawnHearts(sn.getHeadWorldPosition());return On("pet_happy_once",{manual:!0})}if(t.type==="state"&&t.state&&typeof t.state==="object")return Object.assign(Ye,t.state),Fn?.update(0.1,Ye,!0),qe?.update(0.016,Ye,Xt),!0;if(t.type==="toggleLamp")return qe?qe.toggleLamp():!1;if(t.type==="cycleMonitor")return Fn?Boolean(Fn.cycleMainMode(Ye)):!1;if(t.type==="pause")return gu(t.value);if(t.type==="lowPower")return Y_(t.value);if(t.type==="routineProbe"){let e=t.allowDiagnostic===!0||t.diagnostic===!0;return gm(t.delayMs,e)}if(t.type==="dispose")return Z_();return!1};function J_(t,e){window.__roomMetrics=e,V_(t),setTimeout(Mm,16)}function hm(t){_m(),qt("stage",{name:"setup_enter"}),Xt=t.scene,su(Xt,"Prop_Coffee"),su(Xt,"Prop_Phone"),su(Xt,"Prop_Pen"),Ni=new _o,Ni.background=new vt(1447728),le=new Dc({canvas:$s,antialias:!0,alpha:!1,preserveDrawingBuffer:Boolean($t)}),le.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),le.setSize(window.innerWidth,window.innerHeight,!1),le.outputColorSpace=ge,le.toneMapping=to,le.toneMappingExposure=1.12,qt("stage",{name:"renderer_ready"}),uu=Xf(),Fn=qf();let e=Yf(Xt,uu.textures,Fn.textures),{materials:n}=e;nu=e.sharedUniforms,nm=e.emissiveRegistry,qe=Zf(Ni,le,nu,nm),sn=Jf(Xt,nu),qt("stage",{name:"materials_ready",count:n.length}),Xt.rotation.x=-Math.PI/2,Ni.add(Xt),Xt.updateMatrixWorld(!0),sn.update(0.05,Ye,"idle_seated_loop",{allowAdditiveHead:!1}),Fn.update(0.1,Ye,!0),qe.update(0.016,Ye,Xt);let i=q_();ls=jf(rn,$s,Fe,{diagnosticRun:Boolean($t),onPresetChange(s,a){qt("cameraPreset",{preset:s,label:a})}}),_u=$f({canvas:$s,tooltipEl:x_,camera:rn,gltfRoot:Xt,cameraController:ls,lifeEngine:sn,atmosphere:qe,liveScreens:Fn,roomState:Ye,playAction:On,post:qt,diagnosticRun:Boolean($t)});let r=C_(Xt,n);qt("stage",{name:"metrics_ready"}),r.materialCount=n.length,window.addEventListener("resize",()=>{le.setSize(window.innerWidth,window.innerHeight,!1),rn.aspect=window.innerWidth/window.innerHeight,rn.updateProjectionMatrix()}),$s.addEventListener("webglcontextlost",(s)=>{s.preventDefault(),ia("图形上下文丢失，请切回 2.5D 后重试。")},!1),$s.addEventListener("webglcontextrestored",()=>{ou?.classList.add("hidden"),qt("status",{message:"图形上下文已恢复"})},!1),r.cameraContract=i,J_(t,r),qt("stage",{name:"animation_started"})}qt("boot",{assetURL:fl});if(!fl&&!cl)ia("没有找到 SnozzyRoom3D.glb");else{pl=globalThis.createImageBitmap;try{globalThis.createImageBitmap=void 0}catch(n){}let t=new Wc;window.__roomTextureLoader="TextureLoader (createImageBitmap disabled until parse complete)";let e=(n)=>{_m(),ia(`GLB 加载失败：${n?.message||String(n)}`)};if(cl){let n=cl.indexOf(",");try{let i=Uint8Array.from(atob(cl.slice(n+1)),(r)=>r.charCodeAt(0));t.parse(i.buffer,"",hm,e)}catch(i){e(i)}}else t.load(fl,hm,void 0,e)}})();
