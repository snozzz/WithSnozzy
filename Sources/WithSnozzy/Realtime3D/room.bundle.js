(()=>{var bu="179";var Au=0,bl=1,Cu=2;var Al=1,Ru=2,xn=3,si=0,We=1,Re=2,ai=0,$r=1,Cl=2,Rl=3,Ll=4,Lu=5,dr=100,Iu=101,Pu=102,Uu=103,Nu=104,Du=200,Ou=201,Fu=202,Bu=203,zu=204,Vu=205,Hu=206,Gu=207,ku=208,Wu=209,Xu=210,qu=211,Yu=212,Zu=213,ju=214,ua=0,da=1,pa=2,Qr=3,fa=4,ma=5,ga=6,_a=7,Ju=0,Ku=1,$u=2,Vn=0,Qu=1,td=2,ed=3,va=4,nd=5,id=6,rd=7;var pr=301,Li=302,xa=303,ya=304,ts=306,fr=1000,Ma=1001,Sa=1002,Hn=1003,Ta=1004;var Ii=1005;var cn=1006,mr=1007;var Gn=1008;var oi=1009,sd=1010,ad=1011,es=1012,Il=1013,gr=1014,li=1015,ns=1016,Pl=1017,Ul=1018,_r=1020,od=35902,ld=1021,hd=1022,yn=1023,Ea=1026,is=1027,cd=1028,Nl=1029,ud=1030,Dl=1031;var Ol=1033,wa=33776,ba=33777,Aa=33778,Ca=33779,Fl=35840,Bl=35841,zl=35842,Vl=35843,Hl=36196,Gl=37492,kl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,Zl=37812,jl=37813,Jl=37814,Kl=37815,$l=37816,Ql=37817,th=37818,eh=37819,nh=37820,ih=37821,Ra=36492,rh=36494,sh=36495,dd=36283,ah=36284,oh=36285,lh=36286,kn=2200,vr=2201;var hh=2300,La=2301;var ch=0,rs=1,xr=2;var pd=3201;var fd=0,md=1,Pi="",un="srgb",De="srgb-linear",uh="linear",te="srgb";var gd=512,_d=513,vd=514,dh=515,xd=516,yd=517,Md=518,Sd=519;var ph="300 es",fh=2000;class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n!==void 0&&(n[t]!==void 0&&n[t].indexOf(e)!==-1)}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}var Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=1234567,or=Math.PI/180,bi=180/Math.PI;function Je(){let t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,n=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Ae[255&t]+Ae[t>>8&255]+Ae[t>>16&255]+Ae[t>>24&255]+"-"+Ae[255&e]+Ae[e>>8&255]+"-"+Ae[e>>16&15|64]+Ae[e>>24&255]+"-"+Ae[63&n|128]+Ae[n>>8&255]+"-"+Ae[n>>16&255]+Ae[n>>24&255]+Ae[255&i]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Pt(t,e,n){return Math.max(e,Math.min(n,t))}function Sl(t,e){return(t%e+e)%e}function qr(t,e,n){return(1-n)*t+n*e}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(4294967295*t);case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int32Array:return Math.round(2147483647*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw Error("Invalid component type.")}}var mh={DEG2RAD:or,RAD2DEG:bi,generateUUID:Je,clamp:Pt,euclideanModulo:Sl,mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},inverseLerp:function(t,e,n){return t!==e?(n-t)/(e-t):0},lerp:qr,damp:function(t,e,n,i){return qr(t,e,1-Math.exp(-n*i))},pingpong:function(t,e=1){return e-Math.abs(Sl(t,2*e)-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(0.5-Math.random())},seededRandom:function(t){t!==void 0&&(Bc=t);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*or},radToDeg:function(t){return t*bi},isPowerOfTwo:function(t){return!(t&t-1)&&t!==0},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,n,i,r){let{cos:s,sin:a}=Math,o=s(n/2),l=a(n/2),h=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),f=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*c,l*d,l*u,o*h);break;case"YZY":t.set(l*u,o*c,l*d,o*h);break;case"ZXZ":t.set(l*d,l*u,o*c,o*h);break;case"XZX":t.set(o*c,l*_,l*f,o*h);break;case"YXY":t.set(l*f,o*c,l*_,o*h);break;case"ZYZ":t.set(l*_,l*f,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:jt,denormalize:ln};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Pt(this.x,t.x,e.x),this.y=Pt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Pt(this.x,t,e),this.y=Pt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],h=n[i+2],c=n[i+3],d=r[s+0],u=r[s+1],f=r[s+2],_=r[s+3];if(a===0)return t[e+0]=o,t[e+1]=l,t[e+2]=h,void(t[e+3]=c);if(a===1)return t[e+0]=d,t[e+1]=u,t[e+2]=f,void(t[e+3]=_);if(c!==_||o!==d||l!==u||h!==f){let m=1-a,p=o*d+l*u+h*f+c*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let M=Math.sqrt(x),R=Math.atan2(M,p*v);m=Math.sin(m*R)/M,a=Math.sin(a*R)/M}let g=a*v;if(o=o*m+d*g,l=l*m+u*g,h=h*m+f*g,c=c*m+_*g,m===1-a){let M=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=M,l*=M,h*=M,c*=M}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,i,r,s){let a=n[i],o=n[i+1],l=n[i+2],h=n[i+3],c=r[s],d=r[s+1],u=r[s+2],f=r[s+3];return t[e]=a*f+h*c+o*u-l*d,t[e+1]=o*f+h*d+l*c-a*u,t[e+2]=l*f+h*u+a*d-o*c,t[e+3]=h*f-a*c-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:r,_order:s}=t,a=Math.cos,o=Math.sin,l=a(n/2),h=a(i/2),c=a(r/2),d=o(n/2),u=o(i/2),f=o(r/2);switch(s){case"XYZ":this._x=d*h*c+l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c-d*u*f;break;case"YXZ":this._x=d*h*c+l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c+d*u*f;break;case"ZXY":this._x=d*h*c-l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c-d*u*f;break;case"ZYX":this._x=d*h*c-l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c+d*u*f;break;case"YZX":this._x=d*h*c+l*u*f,this._y=l*u*c+d*h*f,this._z=l*h*f-d*u*c,this._w=l*h*c-d*u*f;break;case"XZY":this._x=d*h*c-l*u*f,this._y=l*u*c-d*h*f,this._z=l*h*f+d*u*c,this._w=l*h*c+d*u*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10],d=n+a+c;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(h-o)*u,this._y=(r-l)*u,this._z=(s-i)*u}else if(n>a&&n>c){let u=2*Math.sqrt(1+n-a-c);this._w=(h-o)/u,this._x=0.25*u,this._y=(i+s)/u,this._z=(r+l)/u}else if(a>c){let u=2*Math.sqrt(1+a-n-c);this._w=(r-l)/u,this._x=(i+s)/u,this._y=0.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-n-a);this._w=(s-i)/u,this._x=(r+l)/u,this._y=(o+h)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<0.00000001?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:r,_w:s}=t,a=e._x,o=e._y,l=e._z,h=e._w;return this._x=n*h+s*a+i*l-r*o,this._y=i*h+s*o+r*a-n*l,this._z=r*h+s*l+n*o-i*a,this._w=s*h-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,s=this._w,a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;let o=1-a*a;if(o<=Number.EPSILON){let u=1-e;return this._w=u*s+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let l=Math.sqrt(o),h=Math.atan2(l,a),c=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=s*c+this._w*d,this._x=n*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=2*(s*i-a*n),h=2*(a*e-r*i),c=2*(r*n-s*e);return this.x=e+o*l+s*c-a*h,this.y=n+o*h+a*l-r*c,this.z=i+o*c+r*h-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Pt(this.x,t.x,e.x),this.y=Pt(this.y,t.y,e.y),this.z=Pt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Pt(this.x,t,e),this.y=Pt(this.y,t,e),this.z=Pt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:r}=t,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-n*o,this.z=n*a-i*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=2*Math.random()-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Wo=new T,zc=new ye;class Lt{constructor(t,e,n,i,r,s,a,o,l){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,o,l)}set(t,e,n,i,r,s,a,o,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=o,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],h=n[4],c=n[7],d=n[2],u=n[5],f=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],g=i[7],M=i[2],R=i[5],b=i[8];return r[0]=s*_+a*v+o*M,r[3]=s*m+a*x+o*R,r[6]=s*p+a*g+o*b,r[1]=l*_+h*v+c*M,r[4]=l*m+h*x+c*R,r[7]=l*p+h*g+c*b,r[2]=d*_+u*v+f*M,r[5]=d*m+u*x+f*R,r[8]=d*p+u*g+f*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8];return e*s*h-e*a*l-n*r*h+n*a*o+i*r*l-i*s*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8],c=h*s-a*l,d=a*o-h*r,u=l*r-s*o,f=e*c+n*d+i*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return t[0]=c*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*s)*_,t[3]=d*_,t[4]=(h*e-i*o)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*o-l*e)*_,t[8]=(s*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){let o=Math.cos(r),l=Math.sin(r);return this.set(n*o,n*l,-n*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var Xo=new Lt;function gh(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function hr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Td(){let t=hr("canvas");return t.style.display="block",t}var Vc={};function Ai(t){t in Vc||(Vc[t]=!0,console.warn(t))}function Ed(t,e,n){return new Promise(function(i,r){setTimeout(function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}},n)})}var Hc=new Lt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Gc=new Lt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function bf(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a?(this.spaces[s].transfer==="srgb"&&(r.r=On(r.r),r.g=On(r.g),r.b=On(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),r):r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?"linear":this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ai("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ai("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Hc,fromXYZ:Gc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var Vt=bf();function On(t){return t<0.04045?0.0773993808*t:Math.pow(0.9478672986*t+0.0521327014,2.4)}function lr(t){return t<0.0031308?12.92*t:1.055*Math.pow(t,0.41666)-0.055}var Zi;class _h{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=hr("canvas")),Zi.width=t.width,Zi.height=t.height;let i=Zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=255*On(r[s]/255);return n.putImageData(i,0,0),e}if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(255*On(e[n]/255)):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Af=0;class ss{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Je(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(qo(i[s].image)):r.push(qo(i[s]))}else r=qo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function qo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_h.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cf=0,Yo=new T;class de extends Wn{constructor(t=de.DEFAULT_IMAGE,e=de.DEFAULT_MAPPING,n=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=de.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Je(),this.name="",this.source=new ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n:console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`)}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}de.DEFAULT_IMAGE=null,de.DEFAULT_MAPPING=300,de.DEFAULT_ANISOTROPY=1;class Yt{constructor(t=0,e=0,n=0,i=1){Yt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<0.0001?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,s=0.01,a=0.1,o=t.elements,l=o[0],h=o[4],c=o[8],d=o[1],u=o[5],f=o[9],_=o[2],m=o[6],p=o[10];if(Math.abs(h-d)<0.01&&Math.abs(c-_)<0.01&&Math.abs(f-m)<0.01){if(Math.abs(h+d)<0.1&&Math.abs(c+_)<0.1&&Math.abs(f+m)<0.1&&Math.abs(l+u+p-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,g=(u+1)/2,M=(p+1)/2,R=(h+d)/4,b=(c+_)/4,I=(f+m)/4;return x>g&&x>M?x<0.01?(n=0,i=0.707106781,r=0.707106781):(n=Math.sqrt(x),i=R/n,r=b/n):g>M?g<0.01?(n=0.707106781,i=0,r=0.707106781):(i=Math.sqrt(g),n=R/i,r=I/i):M<0.01?(n=0.707106781,i=0.707106781,r=0):(r=Math.sqrt(M),n=b/r,i=I/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-f)*(m-f)+(c-_)*(c-_)+(d-h)*(d-h));return Math.abs(v)<0.001&&(v=1),this.x=(m-f)/v,this.y=(c-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Pt(this.x,t.x,e.x),this.y=Pt(this.y,t.y,e.y),this.z=Pt(this.z,t.z,e.z),this.w=Pt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Pt(this.x,t,e),this.y=Pt(this.y,t,e),this.z=Pt(this.z,t,e),this.w=Pt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vh extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Yt(0,0,t,e),this.scissorTest=!1,this.viewport=new Yt(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new de(i);this.textures=[];let s=n.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ss(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ia extends de{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xh extends de{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Le{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,sn):sn.fromBufferAttribute(r,s),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}let i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),Ps.subVectors(this.max,Fr),ji.subVectors(t.a,Fr),Ji.subVectors(t.b,Fr),Ki.subVectors(t.c,Fr),Kn.subVectors(Ji,ji),$n.subVectors(Ki,Ji),Si.subVectors(ji,Ki);let e=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-Si.z,Si.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,Si.z,0,-Si.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-Si.y,Si.x,0];return!!Zo(e,ji,Ji,Ki,Ps)&&(e=[1,0,0,0,1,0,0,0,1],!!Zo(e,ji,Ji,Ki,Ps)&&(Us.crossVectors(Kn,$n),e=[Us.x,Us.y,Us.z],Zo(e,ji,Ji,Ki,Ps)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=0.5*this.getSize(sn).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Rn=[new T,new T,new T,new T,new T,new T,new T,new T],sn=new T,Is=new Le,ji=new T,Ji=new T,Ki=new T,Kn=new T,$n=new T,Si=new T,Fr=new T,Ps=new T,Us=new T,Ti=new T;function Zo(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ti.fromArray(t,s);let o=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),h=n.dot(Ti),c=i.dot(Ti);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Rf=new Le,Br=new T,jo=new T;class Oe{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Rf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);let e=Br.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=0.5*(n-this.radius);this.center.addScaledVector(Br,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(jo)),this.expandByPoint(Br.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var Ln=new T,Jo=new T,Ns=new T,Qn=new T,Ko=new T,Ds=new T,$o=new T;class yr{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Jo.copy(t).add(e).multiplyScalar(0.5),Ns.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Jo);let r=0.5*t.distanceTo(e),s=-this.direction.dot(Ns),a=Qn.dot(this.direction),o=-Qn.dot(Ns),l=Qn.lengthSq(),h=Math.abs(1-s*s),c,d,u,f;if(h>0)if(c=s*o-a,d=s*a-o,f=r*h,c>=0)if(d>=-f)if(d<=f){let _=1/h;c*=_,d*=_,u=c*(c+s*d+2*a)+d*(s*c+d+2*o)+l}else d=r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;else d=-r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;else d<=-f?(c=Math.max(0,-(-s*r+a)),d=c>0?-r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l):d<=f?(c=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(c=Math.max(0,-(s*r+a)),d=c>0?r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l);else d=s>0?-r:r,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(Jo).addScaledVector(Ns,d),u}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(i>r)return null;let s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return!(t.radius<0)&&this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;return t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,s=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,s=(t.min.y-d.y)*h),n>s||r>i?null:((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),c>=0?(a=(t.min.z-d.z)*c,o=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,o=(t.min.z-d.z)*c),n>o||a>i?null:((a>n||n!=n)&&(n=a),(o<i||i!=i)&&(i=o),i<0?null:this.at(n>=0?n:i,e)))}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,r){Ko.subVectors(e,t),Ds.subVectors(n,t),$o.crossVectors(Ko,Ds);let s,a=this.direction.dot($o);if(a>0){if(i)return null;s=1}else{if(!(a<0))return null;s=-1,a=-a}Qn.subVectors(this.origin,t);let o=s*this.direction.dot(Ds.crossVectors(Qn,Ds));if(o<0)return null;let l=s*this.direction.dot(Ko.cross(Qn));if(l<0)return null;if(o+l>a)return null;let h=-s*Qn.dot($o);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(t,e,n,i,r,s,a,o,l,h,c,d,u,f,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,o,l,h,c,d,u,f,_,m)}set(t,e,n,i,r,s,a,o,l,h,c,d,u,f,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=a,p[13]=o,p[2]=l,p[6]=h,p[10]=c,p[14]=d,p[3]=u,p[7]=f,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),s=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),h=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){let d=s*h,u=s*c,f=a*h,_=a*c;e[0]=o*h,e[4]=-o*c,e[8]=l,e[1]=u+f*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=f+u*l,e[10]=s*o}else if(t.order==="YXZ"){let d=o*h,u=o*c,f=l*h,_=l*c;e[0]=d+_*a,e[4]=f*a-u,e[8]=s*l,e[1]=s*c,e[5]=s*h,e[9]=-a,e[2]=u*a-f,e[6]=_+d*a,e[10]=s*o}else if(t.order==="ZXY"){let d=o*h,u=o*c,f=l*h,_=l*c;e[0]=d-_*a,e[4]=-s*c,e[8]=f+u*a,e[1]=u+f*a,e[5]=s*h,e[9]=_-d*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(t.order==="ZYX"){let d=s*h,u=s*c,f=a*h,_=a*c;e[0]=o*h,e[4]=f*l-u,e[8]=d*l+_,e[1]=o*c,e[5]=_*l+d,e[9]=u*l-f,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(t.order==="YZX"){let d=s*o,u=s*l,f=a*o,_=a*l;e[0]=o*h,e[4]=_-d*c,e[8]=f*c+u,e[1]=c,e[5]=s*h,e[9]=-a*h,e[2]=-l*h,e[6]=u*c+f,e[10]=d-_*c}else if(t.order==="XZY"){let d=s*o,u=s*l,f=a*o,_=a*l;e[0]=o*h,e[4]=-c,e[8]=l*h,e[1]=d*c+_,e[5]=s*h,e[9]=u*c-f,e[2]=f*c-u,e[6]=a*h,e[10]=_*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lf,t,If)}lookAt(t,e,n){let i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),ti.crossVectors(n,Ve),ti.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=0.0001:Ve.z+=0.0001,Ve.normalize(),ti.crossVectors(n,Ve)),ti.normalize(),Os.crossVectors(Ve,ti),i[0]=ti.x,i[4]=Os.x,i[8]=Ve.x,i[1]=ti.y,i[5]=Os.y,i[9]=Ve.y,i[2]=ti.z,i[6]=Os.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],o=n[8],l=n[12],h=n[1],c=n[5],d=n[9],u=n[13],f=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],g=n[11],M=n[15],R=i[0],b=i[4],I=i[8],F=i[12],P=i[1],N=i[5],H=i[9],G=i[13],Y=i[2],z=i[6],j=i[10],J=i[14],Q=i[3],tt=i[7],ht=i[11],vt=i[15];return r[0]=s*R+a*P+o*Y+l*Q,r[4]=s*b+a*N+o*z+l*tt,r[8]=s*I+a*H+o*j+l*ht,r[12]=s*F+a*G+o*J+l*vt,r[1]=h*R+c*P+d*Y+u*Q,r[5]=h*b+c*N+d*z+u*tt,r[9]=h*I+c*H+d*j+u*ht,r[13]=h*F+c*G+d*J+u*vt,r[2]=f*R+_*P+m*Y+p*Q,r[6]=f*b+_*N+m*z+p*tt,r[10]=f*I+_*H+m*j+p*ht,r[14]=f*F+_*G+m*J+p*vt,r[3]=v*R+x*P+g*Y+M*Q,r[7]=v*b+x*N+g*z+M*tt,r[11]=v*I+x*H+g*j+M*ht,r[15]=v*F+x*G+g*J+M*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],h=t[2],c=t[6],d=t[10],u=t[14];return t[3]*(+r*o*c-i*l*c-r*a*d+n*l*d+i*a*u-n*o*u)+t[7]*(+e*o*u-e*l*d+r*s*d-i*s*u+i*l*h-r*o*h)+t[11]*(+e*l*c-e*a*u-r*s*c+n*s*u+r*a*h-n*l*h)+t[15]*(-i*a*h-e*o*c+e*a*d+i*s*c-n*s*d+n*o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8],c=t[9],d=t[10],u=t[11],f=t[12],_=t[13],m=t[14],p=t[15],v=c*m*l-_*d*l+_*o*u-a*m*u-c*o*p+a*d*p,x=f*d*l-h*m*l-f*o*u+s*m*u+h*o*p-s*d*p,g=h*_*l-f*c*l+f*a*u-s*_*u-h*a*p+s*c*p,M=f*c*o-h*_*o-f*a*d+s*_*d+h*a*m-s*c*m,R=e*v+n*x+i*g+r*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/R;return t[0]=v*b,t[1]=(_*d*r-c*m*r-_*i*u+n*m*u+c*i*p-n*d*p)*b,t[2]=(a*m*r-_*o*r+_*i*l-n*m*l-a*i*p+n*o*p)*b,t[3]=(c*o*r-a*d*r-c*i*l+n*d*l+a*i*u-n*o*u)*b,t[4]=x*b,t[5]=(h*m*r-f*d*r+f*i*u-e*m*u-h*i*p+e*d*p)*b,t[6]=(f*o*r-s*m*r-f*i*l+e*m*l+s*i*p-e*o*p)*b,t[7]=(s*d*r-h*o*r+h*i*l-e*d*l-s*i*u+e*o*u)*b,t[8]=g*b,t[9]=(f*c*r-h*_*r-f*n*u+e*_*u+h*n*p-e*c*p)*b,t[10]=(s*_*r-f*a*r+f*n*l-e*_*l-s*n*p+e*a*p)*b,t[11]=(h*a*r-s*c*r-h*n*l+e*c*l+s*n*u-e*a*u)*b,t[12]=M*b,t[13]=(h*_*i-f*c*i+f*n*d-e*_*d-h*n*m+e*c*m)*b,t[14]=(f*a*i-s*_*i-f*n*o+e*_*o+s*n*m-e*a*m)*b,t[15]=(s*c*i-h*a*i+h*n*o-e*c*o-s*n*d+e*a*d)*b,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,o=t.z,l=r*s,h=r*a;return this.set(l*s+n,l*a-i*o,l*o+i*a,0,l*a+i*o,h*a+n,h*o-i*s,0,l*o-i*a,h*o+i*s,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,h=s+s,c=a+a,d=r*l,u=r*h,f=r*c,_=s*h,m=s*c,p=a*c,v=o*l,x=o*h,g=o*c,M=n.x,R=n.y,b=n.z;return i[0]=(1-(_+p))*M,i[1]=(u+g)*M,i[2]=(f-x)*M,i[3]=0,i[4]=(u-g)*R,i[5]=(1-(d+p))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(f+x)*b,i[9]=(m-v)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=$i.set(i[0],i[1],i[2]).length(),s=$i.set(i[4],i[5],i[6]).length(),a=$i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],an.copy(this);let o=1/r,l=1/s,h=1/a;return an.elements[0]*=o,an.elements[1]*=o,an.elements[2]*=o,an.elements[4]*=l,an.elements[5]*=l,an.elements[6]*=l,an.elements[8]*=h,an.elements[9]*=h,an.elements[10]*=h,e.setFromRotationMatrix(an),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=2000,o=!1){let l=this.elements,h=2*r/(e-t),c=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,_;if(o)f=r/(s-r),_=s*r/(s-r);else if(a===2000)f=-(s+r)/(s-r),_=-2*s*r/(s-r);else{if(a!==2001)throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);f=-s/(s-r),_=-s*r/(s-r)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=2000,o=!1){let l=this.elements,h=2/(e-t),c=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),f,_;if(o)f=1/(s-r),_=s/(s-r);else if(a===2000)f=-2/(s-r),_=-(s+r)/(s-r);else{if(a!==2001)throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);f=-1/(s-r),_=-r/(s-r)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=c,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var $i=new T,an=new yt,Lf=new T(0,0,0),If=new T(1,1,1),ti=new T,Os=new T,Ve=new T,kc=new yt,Wc=new ye;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],h=i[9],c=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<0.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<0.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(d,-1,1)),Math.abs(d)<0.9999999?(this._y=Math.atan2(-c,u),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Pt(c,-1,1)),Math.abs(c)<0.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Pt(o,-1,1)),Math.abs(o)<0.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Pt(s,-1,1)),Math.abs(s)<0.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return!!(this.mask&1<<t)}}var Pf=0,Xc=new T,Qi=new ye,In=new yt,Fs=new T,zr=new T,Uf=new T,Nf=new ye,qc=new T(1,0,0),Yc=new T(0,1,0),Zc=new T(0,0,1),jc={type:"added"},Df={type:"removed"},tr={type:"childadded",child:null},Qo={type:"childremoved",child:null};class Qt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Je(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();let t=new T,e=new hn,n=new ye,i=new T(1,1,1);e._onChange(function(){n.setFromEuler(e,!1)}),n._onChange(function(){e.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new Lt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(zr,Fs,this.up):In.lookAt(Fs,zr,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(In),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),tr.child=t,this.dispatchEvent(tr),tr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Df),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),tr.child=t,this.dispatchEvent(tr),tr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Uf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,h=o.length;l<h;l++){let c=o[l];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(t.materials,this.material[o]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(r(t.animations,o))}}if(e){let a=s(t.geometries),o=s(t.materials),l=s(t.textures),h=s(t.images),c=s(t.shapes),d=s(t.skeletons),u=s(t.animations),f=s(t.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),c.length>0&&(n.shapes=c),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),f.length>0&&(n.nodes=f)}return n.object=i,n;function s(a){let o=[];for(let l in a){let h=a[l];delete h.metadata,o.push(h)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}Qt.DEFAULT_UP=new T(0,1,0),Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new T,Pn=new T,tl=new T,Un=new T,er=new T,nr=new T,Jc=new T,el=new T,nl=new T,il=new T,rl=new Yt,sl=new Yt,al=new Yt;class Ge{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),on.subVectors(t,e),i.cross(on);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){on.subVectors(i,e),Pn.subVectors(n,e),tl.subVectors(t,e);let s=on.dot(on),a=on.dot(Pn),o=on.dot(tl),l=Pn.dot(Pn),h=Pn.dot(tl),c=s*l-a*a;if(c===0)return r.set(0,0,0),null;let d=1/c,u=(l*o-a*h)*d,f=(s*h-a*o)*d;return r.set(1-u-f,f,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)!==null&&(Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1)}static getInterpolation(t,e,n,i,r,s,a,o){return this.getBarycoord(t,e,n,i,Un)===null?(o.x=0,o.y=0,("z"in o)&&(o.z=0),("w"in o)&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,Un.x),o.addScaledVector(s,Un.y),o.addScaledVector(a,Un.z),o)}static getInterpolatedAttribute(t,e,n,i,r,s){return rl.setScalar(0),sl.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(t,e),sl.fromBufferAttribute(t,n),al.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(rl,r.x),s.addScaledVector(sl,r.y),s.addScaledVector(al,r.z),s}static isFrontFacing(t,e,n,i){return on.subVectors(n,e),Pn.subVectors(t,e),on.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),0.5*on.cross(Pn).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,s,a;er.subVectors(i,n),nr.subVectors(r,n),el.subVectors(t,n);let o=er.dot(el),l=nr.dot(el);if(o<=0&&l<=0)return e.copy(n);nl.subVectors(t,i);let h=er.dot(nl),c=nr.dot(nl);if(h>=0&&c<=h)return e.copy(i);let d=o*c-h*l;if(d<=0&&o>=0&&h<=0)return s=o/(o-h),e.copy(n).addScaledVector(er,s);il.subVectors(t,r);let u=er.dot(il),f=nr.dot(il);if(f>=0&&u<=f)return e.copy(r);let _=u*l-o*f;if(_<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(nr,a);let m=h*f-u*c;if(m<=0&&c-h>=0&&u-f>=0)return Jc.subVectors(r,i),a=(c-h)/(c-h+(u-f)),e.copy(i).addScaledVector(Jc,a);let p=1/(m+_+d);return s=_*p,a=d*p,e.copy(n).addScaledVector(er,s).addScaledVector(nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function ol(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<0.16666666666666666?t+6*(e-t)*n:n<0.5?e:n<0.6666666666666666?t+6*(e-t)*(0.6666666666666666-n):t}class _t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,Vt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Vt.workingColorSpace){if(t=Sl(t,1),e=Pt(e,0,1),n=Pt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=0.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=ol(s,r,t+0.3333333333333333),this.g=ol(s,r,t),this.b=ol(s,r,t-0.3333333333333333)}return Vt.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=lr(t.r),this.g=lr(t.g),this.b=lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Vt.workingToColorSpace(Ce.copy(this),t),65536*Math.round(Pt(255*Ce.r,0,255))+256*Math.round(Pt(255*Ce.g,0,255))+Math.round(Pt(255*Ce.b,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.workingToColorSpace(Ce.copy(this),e);let{r:n,g:i,b:r}=Ce,s=Math.max(n,i,r),a=Math.min(n,i,r),o,l,h=(a+s)/2;if(a===s)o=0,l=0;else{let c=s-a;switch(l=h<=0.5?c/(s+a):c/(2-s-a),s){case n:o=(i-r)/c+(i<r?6:0);break;case i:o=(r-n)/c+2;break;case r:o=(n-i)/c+4}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t="srgb"){Vt.workingToColorSpace(Ce.copy(this),t);let{r:e,g:n,b:i}=Ce;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Bs);let n=qr(ei.h,Bs.h,e),i=qr(ei.s,Bs.s,e),r=qr(ei.l,Bs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ce=new _t;_t.NAMES=wd;var Of=0;class Fe extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Je(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(r){let s=[];for(let a in r){let o=r[a];delete o.metadata,s.push(o)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ke extends Fe{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var I0=Ff();function Ff(){let t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,r[l]=24,r[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,r[l]=-h-1,r[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,r[l]=13,r[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,r[l]=24,r[256|l]=24):(i[l]=31744,i[256|l]=64512,r[l]=13,r[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var ue=new T,zs=new et,Bf=0;class fe{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Ua extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Na extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class St extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}var zf=0,je=new yt,ll=new Qt,ir=new T,He=new Le,Vr=new Le,xe=new T;class $t extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Je(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new((gh(t))?Na:Ua)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Lt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return ll.lookAt(t),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Le);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let a=e[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(He.min,Vr.min),He.expandByPoint(xe),xe.addVectors(He.max,Vr.max),He.expandByPoint(xe)):(He.expandByPoint(Vr.min),He.expandByPoint(Vr.max))}He.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let r=0,s=e.length;r<s;r++){let a=e[r],o=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xe.fromBufferAttribute(a,l),o&&(ir.fromBufferAttribute(t,l),xe.add(ir)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let{position:n,normal:i,uv:r}=e;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),a=[],o=[];for(let I=0;I<n.count;I++)a[I]=new T,o[I]=new T;let l=new T,h=new T,c=new T,d=new et,u=new et,f=new et,_=new T,m=new T;function p(I,F,P){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,F),c.fromBufferAttribute(n,P),d.fromBufferAttribute(r,I),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,P),h.sub(l),c.sub(l),u.sub(d),f.sub(d);let N=1/(u.x*f.y-f.x*u.y);isFinite(N)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(c,-u.y).multiplyScalar(N),m.copy(c).multiplyScalar(u.x).addScaledVector(h,-f.x).multiplyScalar(N),a[I].add(_),a[F].add(_),a[P].add(_),o[I].add(m),o[F].add(m),o[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,F=v.length;I<F;++I){let P=v[I],N=P.start;for(let H=N,G=N+P.count;H<G;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let x=new T,g=new T,M=new T,R=new T;function b(I){M.fromBufferAttribute(i,I),R.copy(M);let F=a[I];x.copy(F),x.sub(M.multiplyScalar(M.dot(F))).normalize(),g.crossVectors(R,F);let P=g.dot(o[I])<0?-1:1;s.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,F=v.length;I<F;++I){let P=v[I],N=P.start;for(let H=N,G=N+P.count;H<G;H+=3)b(t.getX(H+0)),b(t.getX(H+1)),b(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(3*e.count),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,s=new T,a=new T,o=new T,l=new T,h=new T,c=new T;if(t)for(let d=0,u=t.count;d<u;d+=3){let f=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,m),h.subVectors(s,r),c.subVectors(i,r),h.cross(c),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),o.add(h),l.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),h.subVectors(s,r),c.subVectors(i,r),h.cross(c),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:h,normalized:c}=a,d=new l.constructor(o.length*h),u=0,f=0;for(let _=0,m=o.length;_<m;_++){u=a.isInterleavedBufferAttribute?o[_]*a.data.stride+a.offset:o[_]*h;for(let p=0;p<h;p++)d[f++]=l[u++]}return new fe(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new $t,n=this.index.array,i=this.attributes;for(let a in i){let o=t(i[a],n);e.setAttribute(a,o)}let r=this.morphAttributes;for(let a in r){let o=[],l=r[a];for(let h=0,c=l.length;h<c;h++){let d=t(l[h],n);o.push(d)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,o=s.length;a<o;a++){let l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},r=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],h=[];for(let c=0,d=l.length;c<d;c++){let u=l[c];h.push(u.toJSON(t.data))}h.length>0&&(i[o]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],c=r[l];for(let d=0,u=c.length;d<u;d++)h.push(c[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let l=0,h=s.length;l<h;l++){let c=s[l];this.addGroup(c.start,c.count,c.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Kc=new yt,Ei=new yr,Vs=new Oe,$c=new T,Hs=new T,Gs=new T,ks=new T,hl=new T,Ws=new T,Qc=new T,Xs=new T;class Se extends Qt{constructor(t=new $t,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ws.set(0,0,0);for(let o=0,l=r.length;o<l;o++){let h=a[o],c=r[o];h!==0&&(hl.fromBufferAttribute(c,t),s?Ws.addScaledVector(hl,h):Ws.addScaledVector(hl.sub(e),h))}e.add(Ws)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),Vs.containsPoint(Ei.origin)===!1){if(Ei.intersectSphere(Vs,$c)===null)return;if(Ei.origin.distanceToSquared($c)>(t.far-t.near)**2)return}Kc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Kc),n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1||this._computeIntersections(t,e,Ei)}}_computeIntersections(t,e,n){let i,r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,_=d.length;f<_;f++){let m=d[f],p=s[m.materialIndex];for(let v=Math.max(m.start,u.start),x=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));v<x;v+=3)i=qs(this,p,t,n,l,h,c,a.getX(v),a.getX(v+1),a.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}else for(let f=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);f<_;f+=3)i=qs(this,s,t,n,l,h,c,a.getX(f),a.getX(f+1),a.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),e.push(i));else if(o!==void 0)if(Array.isArray(s))for(let f=0,_=d.length;f<_;f++){let m=d[f],p=s[m.materialIndex];for(let v=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));v<x;v+=3)i=qs(this,p,t,n,l,h,c,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}else for(let f=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);f<_;f+=3)i=qs(this,s,t,n,l,h,c,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}function qs(t,e,n,i,r,s,a,o,l,h){t.getVertexPosition(o,Hs),t.getVertexPosition(l,Gs),t.getVertexPosition(h,ks);let c=function(d,u,f,_,m,p,v,x){let g;if(g=u.side===1?_.intersectTriangle(v,p,m,!0,x):_.intersectTriangle(m,p,v,u.side===0,x),g===null)return null;Xs.copy(x),Xs.applyMatrix4(d.matrixWorld);let M=f.ray.origin.distanceTo(Xs);return M<f.near||M>f.far?null:{distance:M,point:Xs.clone(),object:d}}(t,e,n,i,Hs,Gs,ks,Qc);if(c){let d=new T;Ge.getBarycoord(Qc,Hs,Gs,ks,d),r&&(c.uv=Ge.getInterpolatedAttribute(r,o,l,h,d,new et)),s&&(c.uv1=Ge.getInterpolatedAttribute(s,o,l,h,d,new et)),a&&(c.normal=Ge.getInterpolatedAttribute(a,o,l,h,d,new T),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new T,materialIndex:0};Ge.getNormal(Hs,Gs,ks,u.normal),c.face=u,c.barycoord=d}return c}class Ui extends $t{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let o=[],l=[],h=[],c=[],d=0,u=0;function f(_,m,p,v,x,g,M,R,b,I,F){let P=g/b,N=M/I,H=g/2,G=M/2,Y=R/2,z=b+1,j=I+1,J=0,Q=0,tt=new T;for(let ht=0;ht<j;ht++){let vt=ht*N-G;for(let $=0;$<z;$++){let Z=$*P-H;tt[_]=Z*v,tt[m]=vt*x,tt[p]=Y,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=R>0?1:-1,h.push(tt.x,tt.y,tt.z),c.push($/b),c.push(1-ht/I),J+=1}}for(let ht=0;ht<I;ht++)for(let vt=0;vt<b;vt++){let $=d+vt+z*ht,Z=d+vt+z*(ht+1),mt=d+(vt+1)+z*(ht+1),ut=d+(vt+1)+z*ht;o.push($,Z,ut),o.push(Z,mt,ut),Q+=6}a.addGroup(u,Q,F),u+=Q,d+=J}f("z","y","x",-1,-1,n,e,t,s,r,0),f("z","y","x",1,-1,n,e,-t,s,r,1),f("x","z","y",1,1,t,n,e,i,s,2),f("x","z","y",1,-1,t,n,-e,i,s,3),f("x","y","z",1,-1,t,e,n,i,r,4),f("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(o),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ie(t){let e={};for(let n=0;n<t.length;n++){let i=Ni(t[n]);for(let r in i)e[r]=i[r]}return e}function yh(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}var bd={clone:Ni,merge:Ie};class Mn extends Fe{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=function(e){let n=[];for(let i=0;i<e.length;i++)n.push(e[i].clone());return n}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class as extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var ni=new T,tu=new et,eu=new et;class pe extends as{constructor(t=50,e=1,n=0.1,i=2000){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=2*bi*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(0.5*or*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*bi*Math.atan(Math.tan(0.5*or*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,tu,eu),e.subVectors(eu,tu)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(0.5*or*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-0.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=s;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var rr=-90;class Mh extends Qt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new pe(rr,1,t,e);i.layers=this.layers,this.add(i);let r=new pe(rr,1,t,e);r.layers=this.layers,this.add(r);let s=new pe(rr,1,t,e);s.layers=this.layers,this.add(s);let a=new pe(rr,1,t,e);a.layers=this.layers,this.add(a);let o=new pe(rr,1,t,e);o.layers=this.layers,this.add(o);let l=new pe(rr,1,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else{if(t!==2001)throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1)}for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,s,a,o,l,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,s),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(c,d,u),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Da extends de{constructor(t=[],e=301,n,i,r,s,a,o,l,h){super(t,e,n,i,r,s,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sh extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Da(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ui(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;let s=new Se(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Mh(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}class gn extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}var Vf={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=0.02,f=0.005;l.inputState.pinching&&d>u+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Oa extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ls{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Je()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Je()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var Ne=new T;class Mr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=jt(e,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Mr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}var P0=new T,U0=new T,N0=new T,D0=new et,O0=new et,F0=new yt,B0=new T,z0=new T,V0=new T,H0=new et,G0=new et,k0=new et;var W0=new T,X0=new T;var nu=new T,iu=new Yt,ru=new Yt,Hf=new T,su=new yt,Ys=new T,cl=new Oe,au=new yt,ul=new yr;class Fa extends Se{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Le),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ys),this.boundingBox.expandByPoint(Ys)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oe),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ys),this.boundingSphere.expandByPoint(Ys)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(i),t.ray.intersectsSphere(cl)!==!1&&(au.copy(i).invert(),ul.copy(t.ray).applyMatrix4(au),this.boundingBox!==null&&ul.intersectsBox(this.boundingBox)===!1||this._computeIntersections(t,e,ul)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Yt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;iu.fromBufferAttribute(i.attributes.skinIndex,t),ru.fromBufferAttribute(i.attributes.skinWeight,t),nu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=ru.getComponent(r);if(s!==0){let a=iu.getComponent(r);su.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Hf.copy(nu).applyMatrix4(su),s)}}return e.applyMatrix4(this.bindMatrixInverse)}}class hs extends Qt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ba extends de{constructor(t=null,e=1,n=1,i,r,s,a,o,l=1003,h=1003,c,d){super(null,s,a,o,l,h,i,r,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var ou=new yt,Gf=new yt;class cs{constructor(t=[],e=[]){this.uuid=Je(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=t.length;r<s;r++){let a=t[r]?t[r].matrixWorld:Gf;ou.multiplyMatrices(a,e[r]),ou.toArray(n,16*r)}i!==null&&(i.needsUpdate=!0)}clone(){return new cs(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=4*Math.ceil(t/4),t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Ba(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let r=t.bones[n],s=e[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new hs),this.bones.push(s),this.boneInverses.push(new yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){let s=e[i];t.bones.push(s.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ci extends fe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var sr=new yt,lu=new yt,Zs=[],hu=new Le,kf=new yt,Hr=new Se,Gr=new Oe;class za extends Se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Le),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),hu.copy(t.boundingBox).applyMatrix4(sr),this.boundingBox.union(hu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sr),Gr.copy(t.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=t*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=i[r+s]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),t.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sr),lu.multiplyMatrices(n,sr),Hr.matrixWorld=lu,Hr.raycast(t,Zs);for(let s=0,a=Zs.length;s<a;s++){let o=Zs[s];o.instanceId=r,o.object=this,e.push(o)}Zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ba(new Float32Array(i*this.count),i,this.count,1028,1015));let r=this.morphTexture.source.data.data,s=0;for(let l=0;l<n.length;l++)s+=n[l];let a=this.geometry.morphTargetsRelative?1:1-s,o=i*t;r[o]=a,r.set(n,o+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}var dl=new T,Wf=new T,Xf=new Lt;class Dn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=dl.subVectors(n,e).cross(Wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xf.getNormalMatrix(t),i=this.coplanarPoint(dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var wi=new Oe,qf=new et(0.5,0.5),js=new T;class Di{constructor(t=new Dn,e=new Dn,n=new Dn,i=new Dn,r=new Dn,s=new Dn){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],h=r[4],c=r[5],d=r[6],u=r[7],f=r[8],_=r[9],m=r[10],p=r[11],v=r[12],x=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,u-h,p-f,M-v).normalize(),i[1].setComponents(l+s,u+h,p+f,M+v).normalize(),i[2].setComponents(l+a,u+c,p+_,M+x).normalize(),i[3].setComponents(l-a,u-c,p-_,M-x).normalize(),n)i[4].setComponents(o,d,m,g).normalize(),i[5].setComponents(l-o,u-d,p-m,M-g).normalize();else if(i[4].setComponents(l-o,u-d,p-m,M-g).normalize(),e===2000)i[5].setComponents(l+o,u+d,p+m,M+g).normalize();else{if(e!==2001)throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);i[5].setComponents(o,d,m,g).normalize()}return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(t){wi.center.set(0,0,0);let e=qf.distanceTo(t.center);return wi.radius=0.7071067811865476+e,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}var fn=new yt,mn=new Di;class Va{constructor(){this.coordinateSystem=2000}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(fn,i.coordinateSystem,i.reversedDepth),mn.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(fn,i.coordinateSystem,i.reversedDepth),mn.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(fn,i.coordinateSystem,i.reversedDepth),mn.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(fn,i.coordinateSystem,i.reversedDepth),mn.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let i=e.cameras[n];if(fn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),mn.setFromProjectionMatrix(fn,i.coordinateSystem,i.reversedDepth),mn.containsPoint(t))return!0}return!1}clone(){return new Va}}class Ad{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let r=this.pool,s=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];s.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}var q0=new yt,Y0=new _t(1,1,1),Z0=new Di,j0=new Va,J0=new Le,K0=new Oe,$0=new T,Q0=new T,t_=new T,e_=new Ad,n_=new Se;class us extends Fe{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var oa=new T,la=new T,cu=new yt,kr=new yr,Js=new Oe,pl=new T,uu=new T;class Sr extends Qt{constructor(t=new $t,e=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)oa.fromBufferAttribute(e,i-1),la.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=oa.distanceTo(la);t.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=r,t.ray.intersectsSphere(Js)===!1)return;cu.copy(i).invert(),kr.copy(t.ray).applyMatrix4(cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,h=n.index,c=n.attributes.position;if(h!==null){let d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let f=d,_=u-1;f<_;f+=l){let m=h.getX(f),p=h.getX(f+1),v=Ks(this,t,kr,o,m,p,f);v&&e.push(v)}if(this.isLineLoop){let f=h.getX(u-1),_=h.getX(d),m=Ks(this,t,kr,o,f,_,u-1);m&&e.push(m)}}else{let d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let f=d,_=u-1;f<_;f+=l){let m=Ks(this,t,kr,o,f,f+1,f);m&&e.push(m)}if(this.isLineLoop){let f=Ks(this,t,kr,o,u-1,d,u-1);f&&e.push(f)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function Ks(t,e,n,i,r,s,a){let o=t.geometry.attributes.position;if(oa.fromBufferAttribute(o,r),la.fromBufferAttribute(o,s),n.distanceSqToSegment(oa,la,pl,uu)>i)return;pl.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(pl);return l<e.near||l>e.far?void 0:{distance:l,point:uu.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var du=new T,pu=new T;class Ha extends Sr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)du.fromBufferAttribute(e,i),pu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+du.distanceTo(pu);t.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ga extends Sr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ds extends Fe{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var fu=new yt,Tl=new yr,$s=new Oe,Qs=new T;class ka extends Qt{constructor(t=new $t,e=new ds){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;fu.copy(i).invert(),Tl.copy(t.ray).applyMatrix4(fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,h=n.attributes.position;if(l!==null)for(let c=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);c<d;c++){let u=l.getX(c);Qs.fromBufferAttribute(h,u),mu(Qs,u,o,i,t,e,this)}else for(let c=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);c<d;c++)Qs.fromBufferAttribute(h,c),mu(Qs,c,o,i,t,e,this)}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function mu(t,e,n,i,r,s,a){let o=Tl.distanceSqToPoint(t);if(o<n){let l=new T;Tl.closestPointToPoint(t,l),l.applyMatrix4(i);let h=r.ray.origin.distanceTo(l);if(h<r.near||h>r.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wa extends de{constructor(t,e,n=1014,i,r,s,a=1003,o=1003,l,h=1026,c=1){if(h!==1026&&h!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:c},i,r,s,a,o,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Xa extends $t{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let s=[],a=[],o=[],l=[],h=e/2,c=Math.PI/2*t,d=e,u=2*c+d,f=2*n+r,_=i+1,m=new T,p=new T;for(let v=0;v<=f;v++){let x=0,g=0,M=0,R=0;if(v<=n){let F=v/n,P=F*Math.PI/2;g=-h-t*Math.cos(P),M=t*Math.sin(P),R=-t*Math.cos(P),x=F*c}else if(v<=n+r){let F=(v-n)/r;g=F*e-h,M=t,R=0,x=c+F*d}else{let F=(v-n-r)/n,P=F*Math.PI/2;g=h+t*Math.sin(P),M=t*Math.cos(P),R=t*Math.sin(P),x=c+d+F*c}let b=Math.max(0,Math.min(1,x/u)),I=0;v===0?I=0.5/i:v===f&&(I=-0.5/i);for(let F=0;F<=i;F++){let P=F/i,N=P*Math.PI*2,H=Math.sin(N),G=Math.cos(N);p.x=-M*G,p.y=g,p.z=M*H,a.push(p.x,p.y,p.z),m.set(-M*G,R,M*H),m.normalize(),o.push(m.x,m.y,m.z),l.push(P+I,b)}if(v>0){let F=(v-1)*_;for(let P=0;P<i;P++){let N=F+P,H=F+P+1,G=v*_+P,Y=v*_+P+1;s.push(N,H,G),s.push(H,Y,G)}}}this.setIndex(s),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(o,3)),this.setAttribute("uv",new St(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class qa extends $t{constructor(t=1,e=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],s=[],a=[],o=[],l=new T,h=new et;s.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let c=0,d=3;c<=e;c++,d+=3){let u=n+c/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),s.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(s[d]/t+1)/2,h.y=(s[d+1]/t+1)/2,o.push(h.x,h.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(a,3)),this.setAttribute("uv",new St(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ps extends $t{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,o=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],c=[],d=[],u=[],f=0,_=[],m=n/2,p=0;function v(x){let g=f,M=new et,R=new T,b=0,I=x===!0?t:e,F=x===!0?1:-1;for(let N=1;N<=i;N++)c.push(0,m*F,0),d.push(0,F,0),u.push(0.5,0.5),f++;let P=f;for(let N=0;N<=i;N++){let H=N/i*o+a,G=Math.cos(H),Y=Math.sin(H);R.x=I*Y,R.y=m*F,R.z=I*G,c.push(R.x,R.y,R.z),d.push(0,F,0),M.x=0.5*G+0.5,M.y=0.5*Y*F+0.5,u.push(M.x,M.y),f++}for(let N=0;N<i;N++){let H=g+N,G=P+N;x===!0?h.push(G,G+1,H):h.push(G+1,G,H),b+=3}l.addGroup(p,b,x===!0?1:2),p+=b}(function(){let x=new T,g=new T,M=0,R=(e-t)/n;for(let b=0;b<=r;b++){let I=[],F=b/r,P=F*(e-t)+t;for(let N=0;N<=i;N++){let H=N/i,G=H*o+a,Y=Math.sin(G),z=Math.cos(G);g.x=P*Y,g.y=-F*n+m,g.z=P*z,c.push(g.x,g.y,g.z),x.set(Y,R,z).normalize(),d.push(x.x,x.y,x.z),u.push(H,1-F),I.push(f++)}_.push(I)}for(let b=0;b<i;b++)for(let I=0;I<r;I++){let F=_[I][b],P=_[I+1][b],N=_[I+1][b+1],H=_[I][b+1];(t>0||I!==0)&&(h.push(F,P,H),M+=3),(e>0||I!==r-1)&&(h.push(P,N,H),M+=3)}l.addGroup(p,M,0),p+=M})(),s===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ya extends ps{constructor(t=1,e=1,n=32,i=1,r=!1,s=0,a=2*Math.PI){super(0,t,e,n,i,r,s,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:a}}static fromJSON(t){return new Ya(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hi extends $t{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],s=[];function a(u,f,_,m){let p=m+1,v=[];for(let x=0;x<=p;x++){v[x]=[];let g=u.clone().lerp(_,x/p),M=f.clone().lerp(_,x/p),R=p-x;for(let b=0;b<=R;b++)v[x][b]=b===0&&x===p?g:g.clone().lerp(M,b/R)}for(let x=0;x<p;x++)for(let g=0;g<2*(p-x)-1;g++){let M=Math.floor(g/2);g%2==0?(o(v[x][M+1]),o(v[x+1][M]),o(v[x][M])):(o(v[x][M+1]),o(v[x+1][M+1]),o(v[x+1][M]))}}function o(u){r.push(u.x,u.y,u.z)}function l(u,f){let _=3*u;f.x=t[_+0],f.y=t[_+1],f.z=t[_+2]}function h(u,f,_,m){m<0&&u.x===1&&(s[f]=u.x-1),_.x===0&&_.z===0&&(s[f]=m/2/Math.PI+0.5)}function c(u){return Math.atan2(u.z,-u.x)}function d(u){return Math.atan2(-u.y,Math.sqrt(u.x*u.x+u.z*u.z))}(function(u){let f=new T,_=new T,m=new T;for(let p=0;p<e.length;p+=3)l(e[p+0],f),l(e[p+1],_),l(e[p+2],m),a(f,_,m,u)})(i),function(u){let f=new T;for(let _=0;_<r.length;_+=3)f.x=r[_+0],f.y=r[_+1],f.z=r[_+2],f.normalize().multiplyScalar(u),r[_+0]=f.x,r[_+1]=f.y,r[_+2]=f.z}(n),function(){let u=new T;for(let f=0;f<r.length;f+=3){u.x=r[f+0],u.y=r[f+1],u.z=r[f+2];let _=c(u)/2/Math.PI+0.5,m=d(u)/Math.PI+0.5;s.push(_,1-m)}(function(){let f=new T,_=new T,m=new T,p=new T,v=new et,x=new et,g=new et;for(let M=0,R=0;M<r.length;M+=9,R+=6){f.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),m.set(r[M+6],r[M+7],r[M+8]),v.set(s[R+0],s[R+1]),x.set(s[R+2],s[R+3]),g.set(s[R+4],s[R+5]),p.copy(f).add(_).add(m).divideScalar(3);let b=c(p);h(v,R+0,f,b),h(x,R+2,_,b),h(g,R+4,m,b)}})(),function(){for(let f=0;f<s.length;f+=6){let _=s[f+0],m=s[f+2],p=s[f+4],v=Math.max(_,m,p),x=Math.min(_,m,p);v>0.9&&x<0.1&&(_<0.2&&(s[f+0]+=1),m<0.2&&(s[f+2]+=1),p<0.2&&(s[f+4]+=1))}}()}(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.vertices,t.indices,t.radius,t.details)}}class Za extends hi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Za(t.radius,t.detail)}}var ta=new T,ea=new T,fl=new T,na=new Ge;class Th extends $t{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(or*e),s=t.getIndex(),a=t.getAttribute("position"),o=s?s.count:a.count,l=[0,0,0],h=["a","b","c"],c=[,,,],d={},u=[];for(let f=0;f<o;f+=3){s?(l[0]=s.getX(f),l[1]=s.getX(f+1),l[2]=s.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:m,c:p}=na;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),na.getNormal(fl),c[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,c[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,c[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,c[0]!==c[1]&&c[1]!==c[2]&&c[2]!==c[0])for(let v=0;v<3;v++){let x=(v+1)%3,g=c[v],M=c[x],R=na[h[v]],b=na[h[x]],I=`${g}_${M}`,F=`${M}_${g}`;F in d&&d[F]?(fl.dot(d[F].normal)<=r&&(u.push(R.x,R.y,R.z),u.push(b.x,b.y,b.z)),d[F]=null):(I in d)||(d[I]={index0:l[v],index1:l[x],normal:fl.clone()})}}for(let f in d)if(d[f]){let{index0:_,index1:m}=d[f];ta.fromBufferAttribute(a,_),ea.fromBufferAttribute(a,m),u.push(ta.x,ta.y,ta.z),u.push(ea.x,ea.y,ea.z)}this.setAttribute("position",new St(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class $e{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,s;s=e||t*n[r-1];let a,o=0,l=r-1;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),a=n[i]-s,a<0)o=i+1;else{if(!(a>0)){l=i;break}l=i-1}if(i=l,n[i]===s)return i/(r-1);let h=n[i];return(i+(s-h)/(n[i+1]-h))/(r-1)}getTangent(t,e){let i=t-0.0001,r=t+0.0001;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),a=this.getPoint(r),o=e||(s.isVector2?new et:new T);return o.copy(a).sub(s).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new T,i=[],r=[],s=[],a=new T,o=new yt;for(let u=0;u<=t;u++){let f=u/t;i[u]=this.getTangentAt(f,new T)}r[0]=new T,s[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),c=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),c<=l&&(l=c,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),s[u]=s[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Pt(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(o.makeRotationAxis(a,f))}s[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(Pt(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let f=1;f<=t;f++)r[f].applyMatrix4(o.makeRotationAxis(i[f],u*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class fs extends $e{constructor(t=0,e=0,n=1,i=1,r=0,s=2*Math.PI,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new et){let n=e,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=s?0:i),this.aClockwise!==!0||s||(r===i?r=-i:r-=i);let a=this.aStartAngle+t*r,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Eh extends fs{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function wh(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){r(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,d){let u=(a-s)/h-(o-s)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,f*=c,r(a,o,u,f)},calc:function(s){let a=s*s;return t+e*s+n*a+i*(a*s)}}}var ia=new T,ml=new wh,gl=new wh,_l=new wh;class bh extends $e{constructor(t=[],e=!1,n="centripetal",i=0.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,a,o,l=Math.floor(s),h=s-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1),this.closed||l>0?a=i[(l-1)%r]:(ia.subVectors(i[0],i[1]).add(i[0]),a=ia);let c=i[l%r],d=i[(l+1)%r];if(this.closed||l+2<r?o=i[(l+2)%r]:(ia.subVectors(i[r-1],i[r-2]).add(i[r-1]),o=ia),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,f=Math.pow(a.distanceToSquared(c),u),_=Math.pow(c.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(o),u);_<0.0001&&(_=1),f<0.0001&&(f=_),m<0.0001&&(m=_),ml.initNonuniformCatmullRom(a.x,c.x,d.x,o.x,f,_,m),gl.initNonuniformCatmullRom(a.y,c.y,d.y,o.y,f,_,m),_l.initNonuniformCatmullRom(a.z,c.z,d.z,o.z,f,_,m)}else this.curveType==="catmullrom"&&(ml.initCatmullRom(a.x,c.x,d.x,o.x,this.tension),gl.initCatmullRom(a.y,c.y,d.y,o.y,this.tension),_l.initCatmullRom(a.z,c.z,d.z,o.z,this.tension));return n.set(ml.calc(h),gl.calc(h),_l.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gu(t,e,n,i,r){let s=0.5*(i-e),a=0.5*(r-n),o=t*t;return(2*n-2*i+s+a)*(t*o)+(-3*n+3*i-2*s-a)*o+s*t+n}function Yr(t,e,n,i){return function(r,s){let a=1-r;return a*a*s}(t,e)+function(r,s){return 2*(1-r)*r*s}(t,n)+function(r,s){return r*r*s}(t,i)}function Zr(t,e,n,i,r){return function(s,a){let o=1-s;return o*o*o*a}(t,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(t,n)+function(s,a){return 3*(1-s)*s*s*a}(t,i)+function(s,a){return s*s*s*a}(t,r)}class ja extends $e{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Zr(t,i.x,r.x,s.x,a.x),Zr(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ah extends $e{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Zr(t,i.x,r.x,s.x,a.x),Zr(t,i.y,r.y,s.y,a.y),Zr(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ja extends $e{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends $e{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ka extends $e{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Yr(t,i.x,r.x,s.x),Yr(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $a extends $e{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Yr(t,i.x,r.x,s.x),Yr(t,i.y,r.y,s.y),Yr(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qa extends $e{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,o=i[s===0?s:s-1],l=i[s],h=i[s>i.length-2?i.length-1:s+1],c=i[s>i.length-3?i.length-1:s+2];return n.set(gu(a,o.x,l.x,h.x,c.x),gu(a,o.y,l.y,h.y,c.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new et().fromArray(i))}return this}}var ha=Object.freeze({__proto__:null,ArcCurve:Eh,CatmullRomCurve3:bh,CubicBezierCurve:ja,CubicBezierCurve3:Ah,EllipseCurve:fs,LineCurve:Ja,LineCurve3:Ch,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:$a,SplineCurve:Qa});class Rh extends $e{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ha[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let s=i[r]-n,a=this.curves[r],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],a=s.isEllipseCurve?2*t:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let l=0;l<o.length;l++){let h=o[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ha[i.type]().fromJSON(i))}return this}}class ca extends Rh{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ja(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ka(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){let a=new ja(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Qa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,s,a,o),this}absellipse(t,e,n,i,r,s,a,o){let l=new fs(t,e,n,i,r,s,a,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class to extends ca{constructor(t){super(t),this.uuid=Je(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ca().fromJSON(i))}return this}}function Yf(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=_u(t,0,r,n,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,h;if(i&&(s=function(c,d,u,f){let _=[];for(let m=0,p=d.length;m<p;m++){let v=_u(c,d[m]*f,m<p-1?d[m+1]*f:c.length,f,!1);v===v.next&&(v.steiner=!0),_.push(em(v))}_.sort($f);for(let m=0;m<_.length;m++)u=Qf(_[m],u);return u}(t,e,s,n)),t.length>80*n){o=1/0,l=1/0;let c=-1/0,d=-1/0;for(let u=n;u<r;u+=n){let f=t[u],_=t[u+1];f<o&&(o=f),_<l&&(l=_),f>c&&(c=f),_>d&&(d=_)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return jr(s,a,n,o,l,h,0),a}function _u(t,e,n,i,r){let s;if(r===function(a,o,l,h){let c=0;for(let d=o,u=l-h;d<l;d+=h)c+=(a[u]-a[d])*(a[d+1]+a[u+1]),u=d;return c}(t,e,n,i)>0)for(let a=e;a<n;a+=i)s=vu(a/i|0,t[a],t[a+1],s);else for(let a=n-i;a>=e;a-=i)s=vu(a/i|0,t[a],t[a+1],s);return s&&cr(s,s.next)&&(Kr(s),s=s.next),s}function Ri(t,e){if(!t)return t;e||(e=t);let n,i=t;do if(n=!1,i.steiner||!cr(i,i.next)&&se(i.prev,i,i.next)!==0)i=i.next;else{if(Kr(i),i=e=i.prev,i===i.next)break;n=!0}while(n||i!==e);return e}function jr(t,e,n,i,r,s,a){if(!t)return;!a&&s&&function(l,h,c,d){let u=l;do u.z===0&&(u.z=El(u.x,u.y,h,c,d)),u.prevZ=u.prev,u.nextZ=u.next,u=u.next;while(u!==l);u.prevZ.nextZ=null,u.prevZ=null,function(f){let _,m=1;do{let p,v=f;f=null;let x=null;for(_=0;v;){_++;let g=v,M=0;for(let b=0;b<m&&(M++,g=g.nextZ,g);b++);let R=m;for(;M>0||R>0&&g;)M!==0&&(R===0||!g||v.z<=g.z)?(p=v,v=v.nextZ,M--):(p=g,g=g.nextZ,R--),x?x.nextZ=p:f=p,p.prevZ=x,x=p;v=g}x.nextZ=null,m*=2}while(_>1)}(u)}(t,i,r,s);let o=t;for(;t.prev!==t.next;){let{prev:l,next:h}=t;if(s?jf(t,i,r,s):Zf(t))e.push(l.i,t.i,h.i),Kr(t),t=h.next,o=h.next;else if((t=h)===o){a?a===1?jr(t=Jf(Ri(t),e),e,n,i,r,s,2):a===2&&Kf(t,e,n,i,r,s):jr(Ri(t),e,n,i,r,s,1);break}}}function Zf(t){let e=t.prev,n=t,i=t.next;if(se(e,n,i)>=0)return!1;let r=e.x,s=n.x,a=i.x,o=e.y,l=n.y,h=i.y,c=Math.min(r,s,a),d=Math.min(o,l,h),u=Math.max(r,s,a),f=Math.max(o,l,h),_=i.next;for(;_!==e;){if(_.x>=c&&_.x<=u&&_.y>=d&&_.y<=f&&Xr(r,o,s,l,a,h,_.x,_.y)&&se(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function jf(t,e,n,i){let r=t.prev,s=t,a=t.next;if(se(r,s,a)>=0)return!1;let o=r.x,l=s.x,h=a.x,c=r.y,d=s.y,u=a.y,f=Math.min(o,l,h),_=Math.min(c,d,u),m=Math.max(o,l,h),p=Math.max(c,d,u),v=El(f,_,e,n,i),x=El(m,p,e,n,i),g=t.prevZ,M=t.nextZ;for(;g&&g.z>=v&&M&&M.z<=x;){if(g.x>=f&&g.x<=m&&g.y>=_&&g.y<=p&&g!==r&&g!==a&&Xr(o,c,l,d,h,u,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;if(g=g.prevZ,M.x>=f&&M.x<=m&&M.y>=_&&M.y<=p&&M!==r&&M!==a&&Xr(o,c,l,d,h,u,M.x,M.y)&&se(M.prev,M,M.next)>=0)return!1;M=M.nextZ}for(;g&&g.z>=v;){if(g.x>=f&&g.x<=m&&g.y>=_&&g.y<=p&&g!==r&&g!==a&&Xr(o,c,l,d,h,u,g.x,g.y)&&se(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;M&&M.z<=x;){if(M.x>=f&&M.x<=m&&M.y>=_&&M.y<=p&&M!==r&&M!==a&&Xr(o,c,l,d,h,u,M.x,M.y)&&se(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Jf(t,e){let n=t;do{let i=n.prev,r=n.next.next;!cr(i,r)&&Rd(i,n,n.next,r)&&Jr(i,r)&&Jr(r,i)&&(e.push(i.i,n.i,r.i),Kr(n),Kr(n.next),n=t=r),n=n.next}while(n!==t);return Ri(n)}function Kf(t,e,n,i,r,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nm(a,o)){let l=Ld(a,o);return a=Ri(a,a.next),l=Ri(l,l.next),jr(a,e,n,i,r,s,0),void jr(l,e,n,i,r,s,0)}o=o.next}a=a.next}while(a!==t)}function $f(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0))n=(t.next.y-t.y)/(t.next.x-t.x)-(e.next.y-e.y)/(e.next.x-e.x);return n}function Qf(t,e){let n=function(r,s){let a=s,o=r.x,l=r.y,h,c=-1/0;if(cr(r,a))return a;do{if(cr(r,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let m=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(m<=o&&m>c&&(c=m,h=a.x<a.next.x?a:a.next,m===o))return h}a=a.next}while(a!==s);if(!h)return null;let d=h,u=h.x,f=h.y,_=1/0;a=h;do{if(o>=a.x&&a.x>=u&&o!==a.x&&Cd(l<f?o:c,l,u,f,l<f?c:o,l,a.x,a.y)){let m=Math.abs(l-a.y)/(o-a.x);Jr(a,r)&&(m<_||m===_&&(a.x>h.x||a.x===h.x&&tm(h,a)))&&(h=a,_=m)}a=a.next}while(a!==d);return h}(t,e);if(!n)return e;let i=Ld(n,t);return Ri(i,i.next),Ri(n,n.next)}function tm(t,e){return se(t.prev,t,e.prev)<0&&se(e.next,t,t.next)<0}function El(t,e,n,i,r){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-n)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function em(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Cd(t,e,n,i,r,s,a,o){return(r-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(s-o)>=(r-a)*(i-o)}function Xr(t,e,n,i,r,s,a,o){return!(t===a&&e===o)&&Cd(t,e,n,i,r,s,a,o)}function nm(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(n,i){let r=n;do{if(r.i!==n.i&&r.next.i!==n.i&&r.i!==i.i&&r.next.i!==i.i&&Rd(r,r.next,n,i))return!0;r=r.next}while(r!==n);return!1}(t,e)&&(Jr(t,e)&&Jr(e,t)&&function(n,i){let r=n,s=!1,a=(n.x+i.x)/2,o=(n.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==n);return s}(t,e)&&(se(t.prev,t,e.prev)||se(t,e.prev,e))||cr(t,e)&&se(t.prev,t,t.next)>0&&se(e.prev,e,e.next)>0)}function se(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function cr(t,e){return t.x===e.x&&t.y===e.y}function Rd(t,e,n,i){let r=sa(se(t,e,n)),s=sa(se(t,e,i)),a=sa(se(n,i,t)),o=sa(se(n,i,e));return r!==s&&a!==o||(!(r!==0||!ra(t,n,e))||(!(s!==0||!ra(t,i,e))||(!(a!==0||!ra(n,t,i))||!(o!==0||!ra(n,e,i)))))}function ra(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function sa(t){return t>0?1:t<0?-1:0}function Jr(t,e){return se(t.prev,t,t.next)<0?se(t,e,t.next)>=0&&se(t,t.prev,e)>=0:se(t,e,t.prev)<0||se(t,t.next,e)<0}function Ld(t,e){let n=wl(t.i,t.x,t.y),i=wl(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function vu(t,e,n,i){let r=wl(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Kr(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function wl(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}class Id{static triangulate(t,e,n=2){return Yf(t,e,n)}}class _n{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return 0.5*n}static isClockWise(t){return _n.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];xu(t),yu(n,t);let s=t.length;e.forEach(xu);for(let o=0;o<e.length;o++)i.push(s),s+=e[o].length,yu(n,e[o]);let a=Id.triangulate(n,i);for(let o=0;o<a.length;o+=3)r.push(a.slice(o,o+3));return r}}function xu(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function yu(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class eo extends $t{constructor(t=new to([new et(0.5,0.5),new et(-0.5,0.5),new et(-0.5,-0.5),new et(0.5,-0.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,o=t.length;a<o;a++)s(t[a]);function s(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,c=e.depth!==void 0?e.depth:1,d=e.bevelEnabled===void 0||e.bevelEnabled,u=e.bevelThickness!==void 0?e.bevelThickness:0.2,f=e.bevelSize!==void 0?e.bevelSize:u-0.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:im,x,g,M,R,b,I=!1;p&&(x=p.getSpacedPoints(h),I=!0,d=!1,g=p.computeFrenetFrames(h,!1),M=new T,R=new T,b=new T),d||(m=0,u=0,f=0,_=0);let F=a.extractPoints(l),P=F.shape,N=F.holes;if(!_n.isClockWise(P)){P=P.reverse();for(let A=0,D=N.length;A<D;A++){let y=N[A];_n.isClockWise(y)&&(N[A]=y.reverse())}}function H(A){let y=A[0];for(let C=1;C<=A.length;C++){let L=C%A.length,O=A[L],B=O.x-y.x,k=O.y-y.y,X=B*B+k*k,rt=Math.max(Math.abs(O.x),Math.abs(O.y),Math.abs(y.x),Math.abs(y.y));X<=0.000000000000000000010000000000000001*rt*rt?(A.splice(L,1),C--):y=O}}H(P),N.forEach(H);let G=N.length,Y=P;for(let A=0;A<G;A++){let D=N[A];P=P.concat(D)}function z(A,D,y){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),A.clone().addScaledVector(D,y)}let j=P.length;function J(A,D,y){let C,L,O,B=A.x-D.x,k=A.y-D.y,X=y.x-A.x,rt=y.y-A.y,dt=B*B+k*k,st=B*rt-k*X;if(Math.abs(st)>Number.EPSILON){let lt=Math.sqrt(dt),Mt=Math.sqrt(X*X+rt*rt),Rt=D.x-k/lt,Ht=D.y+B/lt,Wt=((y.x-rt/Mt-Rt)*rt-(y.y+X/Mt-Ht)*X)/(B*rt-k*X);C=Rt+B*Wt-A.x,L=Ht+k*Wt-A.y;let It=C*C+L*L;if(It<=2)return new et(C,L);O=Math.sqrt(It/2)}else{let lt=!1;B>Number.EPSILON?X>Number.EPSILON&&(lt=!0):B<-Number.EPSILON?X<-Number.EPSILON&&(lt=!0):Math.sign(k)===Math.sign(rt)&&(lt=!0),lt?(C=-k,L=B,O=Math.sqrt(dt)):(C=B,L=k,O=Math.sqrt(dt/2))}return new et(C/O,L/O)}let Q=[];for(let A=0,D=Y.length,y=D-1,C=A+1;A<D;A++,y++,C++)y===D&&(y=0),C===D&&(C=0),Q[A]=J(Y[A],Y[y],Y[C]);let tt=[],ht,vt,$=Q.concat();for(let A=0,D=G;A<D;A++){let y=N[A];ht=[];for(let C=0,L=y.length,O=L-1,B=C+1;C<L;C++,O++,B++)O===L&&(O=0),B===L&&(B=0),ht[C]=J(y[C],y[O],y[B]);tt.push(ht),$=$.concat(ht)}if(m===0)vt=_n.triangulateShape(Y,N);else{let A=[],D=[];for(let y=0;y<m;y++){let C=y/m,L=u*Math.cos(C*Math.PI/2),O=f*Math.sin(C*Math.PI/2)+_;for(let B=0,k=Y.length;B<k;B++){let X=z(Y[B],Q[B],O);at(X.x,X.y,-L),C===0&&A.push(X)}for(let B=0,k=G;B<k;B++){let X=N[B];ht=tt[B];let rt=[];for(let dt=0,st=X.length;dt<st;dt++){let lt=z(X[dt],ht[dt],O);at(lt.x,lt.y,-L),C===0&&rt.push(lt)}C===0&&D.push(rt)}}vt=_n.triangulateShape(A,D)}let Z=vt.length,mt=f+_;for(let A=0;A<j;A++){let D=d?z(P[A],$[A],mt):P[A];I?(R.copy(g.normals[0]).multiplyScalar(D.x),M.copy(g.binormals[0]).multiplyScalar(D.y),b.copy(x[0]).add(R).add(M),at(b.x,b.y,b.z)):at(D.x,D.y,0)}for(let A=1;A<=h;A++)for(let D=0;D<j;D++){let y=d?z(P[D],$[D],mt):P[D];I?(R.copy(g.normals[A]).multiplyScalar(y.x),M.copy(g.binormals[A]).multiplyScalar(y.y),b.copy(x[A]).add(R).add(M),at(b.x,b.y,b.z)):at(y.x,y.y,c/h*A)}for(let A=m-1;A>=0;A--){let D=A/m,y=u*Math.cos(D*Math.PI/2),C=f*Math.sin(D*Math.PI/2)+_;for(let L=0,O=Y.length;L<O;L++){let B=z(Y[L],Q[L],C);at(B.x,B.y,c+y)}for(let L=0,O=N.length;L<O;L++){let B=N[L];ht=tt[L];for(let k=0,X=B.length;k<X;k++){let rt=z(B[k],ht[k],C);I?at(rt.x,rt.y+x[h-1].y,x[h-1].x+y):at(rt.x,rt.y,c+y)}}}function ut(A,D){let y=A.length;for(;--y>=0;){let C=y,L=y-1;L<0&&(L=A.length-1);for(let O=0,B=h+2*m;O<B;O++){let k=j*O,X=j*(O+1);Ct(D+C+k,D+L+k,D+L+X,D+C+X)}}}function at(A,D,y){o.push(A),o.push(D),o.push(y)}function it(A,D,y){w(A),w(D),w(y);let C=i.length/3,L=v.generateTopUV(n,i,C-3,C-2,C-1);S(L[0]),S(L[1]),S(L[2])}function Ct(A,D,y,C){w(A),w(D),w(C),w(D),w(y),w(C);let L=i.length/3,O=v.generateSideWallUV(n,i,L-6,L-3,L-2,L-1);S(O[0]),S(O[1]),S(O[3]),S(O[1]),S(O[2]),S(O[3])}function w(A){i.push(o[3*A+0]),i.push(o[3*A+1]),i.push(o[3*A+2])}function S(A){r.push(A.x),r.push(A.y)}(function(){let A=i.length/3;if(d){let D=0,y=j*D;for(let C=0;C<Z;C++){let L=vt[C];it(L[2]+y,L[1]+y,L[0]+y)}D=h+2*m,y=j*D;for(let C=0;C<Z;C++){let L=vt[C];it(L[0]+y,L[1]+y,L[2]+y)}}else{for(let D=0;D<Z;D++){let y=vt[D];it(y[2],y[1],y[0])}for(let D=0;D<Z;D++){let y=vt[D];it(y[0]+j*h,y[1]+j*h,y[2]+j*h)}}n.addGroup(A,i.length/3-A,0)})(),function(){let A=i.length/3,D=0;ut(Y,D),D+=Y.length;for(let y=0,C=N.length;y<C;y++){let L=N[y];ut(L,D),D+=L.length}n.addGroup(A,i.length/3-A,1)}()}this.setAttribute("position",new St(i,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals()}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,n,i){if(i.shapes=[],Array.isArray(e))for(let r=0,s=e.length;r<s;r++){let a=e[r];i.shapes.push(a.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ha[i.type]().fromJSON(i)),new eo(n,t.options)}}var im={generateTopUV:function(t,e,n,i,r){let s=e[3*n],a=e[3*n+1],o=e[3*i],l=e[3*i+1],h=e[3*r],c=e[3*r+1];return[new et(s,a),new et(o,l),new et(h,c)]},generateSideWallUV:function(t,e,n,i,r,s){let a=e[3*n],o=e[3*n+1],l=e[3*n+2],h=e[3*i],c=e[3*i+1],d=e[3*i+2],u=e[3*r],f=e[3*r+1],_=e[3*r+2],m=e[3*s],p=e[3*s+1],v=e[3*s+2];return Math.abs(o-c)<Math.abs(a-h)?[new et(a,1-l),new et(h,1-d),new et(u,1-_),new et(m,1-v)]:[new et(o,1-l),new et(c,1-d),new et(f,1-_),new et(p,1-v)]}};class no extends hi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new no(t.radius,t.detail)}}class io extends $t{constructor(t=[new et(0,-0.5),new et(0.5,0),new et(0,0.5)],e=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Pt(i,0,2*Math.PI);let r=[],s=[],a=[],o=[],l=[],h=1/e,c=new T,d=new et,u=new T,f=new T,_=new T,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,u.x=1*p,u.y=-m,u.z=0*p,_.copy(u),u.normalize(),o.push(u.x,u.y,u.z);break;case t.length-1:o.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,u.x=1*p,u.y=-m,u.z=0*p,f.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),o.push(u.x,u.y,u.z),_.copy(f)}for(let v=0;v<=e;v++){let x=n+v*h*i,g=Math.sin(x),M=Math.cos(x);for(let R=0;R<=t.length-1;R++){c.x=t[R].x*g,c.y=t[R].y,c.z=t[R].x*M,s.push(c.x,c.y,c.z),d.x=v/e,d.y=R/(t.length-1),a.push(d.x,d.y);let b=o[3*R+0]*g,I=o[3*R+1],F=o[3*R+0]*M;l.push(b,I,F)}}for(let v=0;v<e;v++)for(let x=0;x<t.length-1;x++){let g=x+v*t.length,M=g,R=g+t.length,b=g+t.length+1,I=g+1;r.push(M,R,I),r.push(b,I,R)}this.setIndex(r),this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(a,2)),this.setAttribute("normal",new St(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.points,t.segments,t.phiStart,t.phiLength)}}class ro extends hi{constructor(t=1,e=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ro(t.radius,t.detail)}}class Tr extends $t{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,s=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,h=o+1,c=t/a,d=e/o,u=[],f=[],_=[],m=[];for(let p=0;p<h;p++){let v=p*d-s;for(let x=0;x<l;x++){let g=x*c-r;f.push(g,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let v=0;v<a;v++){let x=v+l*p,g=v+l*(p+1),M=v+1+l*(p+1),R=v+1+l*p;u.push(x,g,R),u.push(g,M,R)}this.setIndex(u),this.setAttribute("position",new St(f,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tr(t.width,t.height,t.widthSegments,t.heightSegments)}}class so extends $t{constructor(t=0.5,e=1,n=32,i=1,r=0,s=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n);let a=[],o=[],l=[],h=[],c=t,d=(e-t)/(i=Math.max(1,i)),u=new T,f=new et;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*s;u.x=c*Math.cos(p),u.y=c*Math.sin(p),o.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(u.x/e+1)/2,f.y=(u.y/e+1)/2,h.push(f.x,f.y)}c+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let v=p+m,x=v,g=v+n+1,M=v+n+2,R=v+1;a.push(x,g,R),a.push(g,M,R)}}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ao extends $t{constructor(t=new to([new et(0,0.5),new et(-0.5,-0.5),new et(0.5,-0.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],s=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,o,h),a+=o,o=0;function l(h){let c=i.length/3,d=h.extractPoints(e),u=d.shape,f=d.holes;_n.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=f.length;m<p;m++){let v=f[m];_n.isClockWise(v)===!0&&(f[m]=v.reverse())}let _=_n.triangulateShape(u,f);for(let m=0,p=f.length;m<p;m++){let v=f[m];u=u.concat(v)}for(let m=0,p=u.length;m<p;m++){let v=u[m];i.push(v.x,v.y,0),r.push(0,0,1),s.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){let v=_[m],x=v[0]+c,g=v[1]+c,M=v[2]+c;n.push(x,g,M),o+=3}}this.setIndex(n),this.setAttribute("position",new St(i,3)),this.setAttribute("normal",new St(r,3)),this.setAttribute("uv",new St(s,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return function(e,n){if(n.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let s=e[i];n.shapes.push(s.uuid)}else n.shapes.push(e.uuid);return n}(this.parameters.shapes,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let s=e[t.shapes[i]];n.push(s)}return new ao(n,t.curveSegments)}}class oo extends $t{constructor(t=1,e=32,n=16,i=0,r=2*Math.PI,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(s+a,Math.PI),l=0,h=[],c=new T,d=new T,u=[],f=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,g=0;p===0&&s===0?g=0.5/e:p===n&&o===Math.PI&&(g=-0.5/e);for(let M=0;M<=e;M++){let R=M/e;c.x=-t*Math.cos(i+R*r)*Math.sin(s+x*a),c.y=t*Math.cos(s+x*a),c.z=t*Math.sin(i+R*r)*Math.sin(s+x*a),f.push(c.x,c.y,c.z),d.copy(c).normalize(),_.push(d.x,d.y,d.z),m.push(R+g,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let x=h[p][v+1],g=h[p][v],M=h[p+1][v],R=h[p+1][v+1];(p!==0||s>0)&&u.push(x,g,R),(p!==n-1||o<Math.PI)&&u.push(g,M,R)}this.setIndex(u),this.setAttribute("position",new St(f,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lo extends hi{constructor(t=1,e=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lo(t.radius,t.detail)}}class ho extends $t{constructor(t=1,e=0.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let s=[],a=[],o=[],l=[],h=new T,c=new T,d=new T;for(let u=0;u<=n;u++)for(let f=0;f<=i;f++){let _=f/i*r,m=u/n*Math.PI*2;c.x=(t+e*Math.cos(m))*Math.cos(_),c.y=(t+e*Math.cos(m))*Math.sin(_),c.z=e*Math.sin(m),a.push(c.x,c.y,c.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(c,h).normalize(),o.push(d.x,d.y,d.z),l.push(f/i),l.push(u/n)}for(let u=1;u<=n;u++)for(let f=1;f<=i;f++){let _=(i+1)*u+f-1,m=(i+1)*(u-1)+f-1,p=(i+1)*(u-1)+f,v=(i+1)*u+f;s.push(_,m,v),s.push(m,p,v)}this.setIndex(s),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(o,3)),this.setAttribute("uv",new St(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class co extends $t{constructor(t=1,e=0.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],h=[],c=new T,d=new T,u=new T,f=new T,_=new T,m=new T,p=new T;for(let x=0;x<=n;++x){let g=x/n*r*Math.PI*2;v(g,r,s,t,u),v(g+0.01,r,s,t,f),m.subVectors(f,u),p.addVectors(f,u),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let M=0;M<=i;++M){let R=M/i*Math.PI*2,b=-e*Math.cos(R),I=e*Math.sin(R);c.x=u.x+(b*p.x+I*_.x),c.y=u.y+(b*p.y+I*_.y),c.z=u.z+(b*p.z+I*_.z),o.push(c.x,c.y,c.z),d.subVectors(c,u).normalize(),l.push(d.x,d.y,d.z),h.push(x/n),h.push(M/i)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let M=(i+1)*(x-1)+(g-1),R=(i+1)*x+(g-1),b=(i+1)*x+g,I=(i+1)*(x-1)+g;a.push(M,R,I),a.push(R,b,I)}function v(x,g,M,R,b){let I=Math.cos(x),F=Math.sin(x),P=M/g*x,N=Math.cos(P);b.x=R*(2+N)*0.5*I,b.y=R*(2+N)*F*0.5,b.z=R*Math.sin(P)*0.5}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class uo extends $t{constructor(t=new $a(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let s=t.computeFrenetFrames(e,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new T,o=new T,l=new et,h=new T,c=[],d=[],u=[],f=[];function _(m){h=t.getPointAt(m/e,h);let p=s.normals[m],v=s.binormals[m];for(let x=0;x<=i;x++){let g=x/i*Math.PI*2,M=Math.sin(g),R=-Math.cos(g);o.x=R*p.x+M*v.x,o.y=R*p.y+M*v.y,o.z=R*p.z+M*v.z,o.normalize(),d.push(o.x,o.y,o.z),a.x=h.x+n*o.x,a.y=h.y+n*o.y,a.z=h.z+n*o.z,c.push(a.x,a.y,a.z)}}(function(){for(let m=0;m<e;m++)_(m);_(r===!1?e:0),function(){for(let m=0;m<=e;m++)for(let p=0;p<=i;p++)l.x=m/e,l.y=p/i,u.push(l.x,l.y)}(),function(){for(let m=1;m<=e;m++)for(let p=1;p<=i;p++){let v=(i+1)*(m-1)+(p-1),x=(i+1)*m+(p-1),g=(i+1)*m+p,M=(i+1)*(m-1)+p;f.push(v,x,M),f.push(x,g,M)}}()})(),this.setIndex(f),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(d,3)),this.setAttribute("uv",new St(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new uo(new ha[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Lh extends $t{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new T,r=new T;if(t.index!==null){let s=t.attributes.position,a=t.index,o=t.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start;for(let u=d,f=d+c.count;u<f;u+=3)for(let _=0;_<3;_++){let m=a.getX(u+_),p=a.getX(u+(_+1)%3);i.fromBufferAttribute(s,m),r.fromBufferAttribute(s,p),Mu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let s=t.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){let h=3*a+l,c=3*a+(l+1)%3;i.fromBufferAttribute(s,h),r.fromBufferAttribute(s,c),Mu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new St(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Mu(t,e,n){let i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)!==!0&&n.has(r)!==!0&&(n.add(i),n.add(r),!0)}var i_=Object.freeze({__proto__:null,BoxGeometry:Ui,CapsuleGeometry:Xa,CircleGeometry:qa,ConeGeometry:Ya,CylinderGeometry:ps,DodecahedronGeometry:Za,EdgesGeometry:Th,ExtrudeGeometry:eo,IcosahedronGeometry:no,LatheGeometry:io,OctahedronGeometry:ro,PlaneGeometry:Tr,PolyhedronGeometry:hi,RingGeometry:so,ShapeGeometry:ao,SphereGeometry:oo,TetrahedronGeometry:lo,TorusGeometry:ho,TorusKnotGeometry:co,TubeGeometry:uo,WireframeGeometry:Lh});class Er extends Fe{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xe extends Er{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+0.4*e)/(1-0.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class po extends Fe{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _t(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ih extends Fe{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ph extends Fe{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function aa(t,e){return t&&t.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t):t}function rm(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function sm(t){let e=t.length,n=Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(function(i,r){return t[i]-t[r]}),n}function Su(t,e,n){let i=t.length,r=new t.constructor(i);for(let s=0,a=0;a!==i;++s){let o=n[s]*e;for(let l=0;l!==e;++l)r[a++]=t[o+l]}return r}function Pd(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),n.push(...a)),s=t[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),n.push(a)),s=t[r++];while(s!==void 0)}class ci{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let s;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break n}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break n}break t}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Uh extends ci{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:s=t,o=2*n-e;break;case 2402:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}let l=0.5*(n-e),h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-e)/(i-e),_=f*f,m=_*f,p=-d*m+2*d*_-d*f,v=(1+d)*m+(-1.5-2*d)*_+(-0.5+d)*f+1,x=(-1-u)*m+(1.5+u)*_+0.5*f,g=u*m-u*_;for(let M=0;M!==a;++M)r[M]=p*s[h+M]+v*s[l+M]+x*s[o+M]+g*s[c+M];return r}}class fo extends ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=(n-e)/(i-e),c=1-h;for(let d=0;d!==a;++d)r[d]=s[l+d]*c+s[o+d]*h;return r}}class Nh extends ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class ke{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=aa(e,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:aa(t.times,Array),values:aa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(t===this.DefaultInterpolation)throw Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){let o=n[a];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&rm(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,r=t.length-1,s=1;for(let a=1;a<r;++a){let o=!1,l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{let h=a*n,c=h-n,d=h+n;for(let u=0;u!==n;++u){let f=e[h+u];if(f!==e[c+u]||f!==e[d+u]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];let h=a*n,c=s*n;for(let d=0;d!==n;++d)e[c+d]=e[h+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=new this.constructor(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}ke.prototype.ValueTypeName="",ke.prototype.TimeBufferType=Float32Array,ke.prototype.ValueBufferType=Float32Array,ke.prototype.DefaultInterpolation=2301;class ii extends ke{constructor(t,e,n){super(t,e,n)}}ii.prototype.ValueTypeName="bool",ii.prototype.ValueBufferType=Array,ii.prototype.DefaultInterpolation=2300,ii.prototype.InterpolantFactoryMethodLinear=void 0,ii.prototype.InterpolantFactoryMethodSmooth=void 0;class mo extends ke{constructor(t,e,n,i){super(t,e,n,i)}}mo.prototype.ValueTypeName="color";class Fn extends ke{constructor(t,e,n,i){super(t,e,n,i)}}Fn.prototype.ValueTypeName="number";class Dh extends ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)ye.slerpFlat(r,0,s,l-a,s,l,o);return r}}class Bn extends ke{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Dh(this.times,this.values,this.getValueSize(),t)}}Bn.prototype.ValueTypeName="quaternion",Bn.prototype.InterpolantFactoryMethodSmooth=void 0;class ri extends ke{constructor(t,e,n){super(t,e,n)}}ri.prototype.ValueTypeName="string",ri.prototype.ValueBufferType=Array,ri.prototype.DefaultInterpolation=2300,ri.prototype.InterpolantFactoryMethodLinear=void 0,ri.prototype.InterpolantFactoryMethodSmooth=void 0;class zn extends ke{constructor(t,e,n,i){super(t,e,n,i)}}zn.prototype.ValueTypeName="vector";class ur{constructor(t="",e=-1,n=[],i=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Je(),this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let s=0,a=n.length;s!==a;++s)e.push(am(n[s]).scale(i));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,s=n.length;r!==s;++r)e.push(ke.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let r=e.length,s=[];for(let a=0;a<r;a++){let o=[],l=[];o.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=sm(o);o=Su(o,1,h),l=Su(l,1,h),i||o[0]!==0||(o.push(r),l.push(l[0])),s.push(new Fn(".morphTargetInfluences["+e[a].name+"]",o,l).scale(1/n))}return new this(t,-1,s)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,o=t.length;a<o;a++){let l=t[a],h=l.name.match(r);if(h&&h.length>1){let c=h[1],d=i[c];d||(i[c]=d=[]),d.push(l)}}let s=[];for(let a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return s}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,c,d,u,f){if(d.length!==0){let _=[],m=[];Pd(d,_,m,u),_.length!==0&&f.push(new h(c,_,m))}},i=[],r=t.name||"default",s=t.fps||30,a=t.blendMode,o=t.length||-1,l=t.hierarchy||[];for(let h=0;h<l.length;h++){let c=l[h].keys;if(c&&c.length!==0)if(c[0].morphTargets){let d={},u;for(u=0;u<c.length;u++)if(c[u].morphTargets)for(let f=0;f<c[u].morphTargets.length;f++)d[c[u].morphTargets[f]]=-1;for(let f in d){let _=[],m=[];for(let p=0;p!==c[u].morphTargets.length;++p){let v=c[u];_.push(v.time),m.push(v.morphTarget===f?1:0)}i.push(new Fn(".morphTargetInfluence["+f+"]",_,m))}o=d.length*s}else{let d=".bones["+e[h].name+"]";n(zn,d+".position",c,"pos",i),n(Bn,d+".quaternion",c,"rot",i),n(zn,d+".scale",c,"scl",i)}}if(i.length===0)return null;return new this(r,o,i,a)}resetDuration(){let t=0;for(let e=0,n=this.tracks.length;e!==n;++e){let i=this.tracks[e];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function am(t){if(t.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=function(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fn;case"vector":case"vector2":case"vector3":case"vector4":return zn;case"color":return mo;case"quaternion":return Bn;case"bool":case"boolean":return ii;case"string":return ri}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}(t.type);if(t.times===void 0){let n=[],i=[];Pd(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}var vn={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Oh{constructor(t,e,n){let i=this,r,s=!1,a=0,o=0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],f=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var Ud=new Oh;class qn{constructor(t){this.manager=t!==void 0?t:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nn={};class Nd extends Error{constructor(t,e){super(t),this.response=e}}class ms extends qn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=vn.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Nn[t]!==void 0)return void Nn[t].push({onLoad:e,onProgress:n,onError:i});Nn[t]=[],Nn[t].push({onLoad:e,onProgress:n,onError:i});let s=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,o=this.responseType;fetch(s).then((l)=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Nn[t],c=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,f=u!==0,_=0,m=new ReadableStream({start(p){(function v(){c.read().then(({done:x,value:g})=>{if(x)p.close();else{_+=g.byteLength;let M=new ProgressEvent("progress",{lengthComputable:f,loaded:_,total:u});for(let R=0,b=h.length;R<b;R++){let I=h[R];I.onProgress&&I.onProgress(M)}p.enqueue(g),v()}},(x)=>{p.error(x)})})()}});return new Response(m)}throw new Nd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then((l)=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((h)=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),c=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(c);return l.arrayBuffer().then((u)=>d.decode(u))}}}).then((l)=>{vn.add(`file:${t}`,l);let h=Nn[t];delete Nn[t];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onLoad&&u.onLoad(l)}}).catch((l)=>{let h=Nn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Nn[t];for(let c=0,d=h.length;c<d;c++){let u=h[c];u.onError&&u.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var ar=new WeakMap;class Fh extends qn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=vn.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let c=ar.get(s);c===void 0&&(c=[],ar.set(s,c)),c.push({onLoad:e,onError:i})}return s}let a=hr("img");function o(){h(),e&&e(this);let c=ar.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}ar.delete(this),r.manager.itemEnd(t)}function l(c){h(),i&&i(c),vn.remove(`image:${t}`);let d=ar.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onError&&f.onError(c)}ar.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vn.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class go extends qn{constructor(t){super(t)}load(t,e,n,i){let r=new de,s=new Fh(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class wr extends Qt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _o extends wr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}var vl=new yt,Tu=new T,Eu=new T;class vo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Di,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tu),Eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eu),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1):n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),n.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dd extends vo{constructor(){super(new pe(50,1,0.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=2*bi*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;n===e.fov&&i===e.aspect&&r===e.far||(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class xo extends wr{constructor(t,e,n=0,i=Math.PI/3,r=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new Dd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}var wu=new yt,Wr=new T,xl=new T;class Od extends vo{constructor(){super(new pe(90,1,0.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Yt(2,1,1,1),new Yt(0,1,1,1),new Yt(3,1,1,1),new Yt(1,1,1,1),new Yt(3,0,1,1),new Yt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wr),xl.copy(n.position),xl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xl),n.updateMatrixWorld(),i.makeTranslation(-Wr.x,-Wr.y,-Wr.z),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu,n.coordinateSystem,n.reversedDepth)}}class yo extends wr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Od}get power(){return 4*this.intensity*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class br extends as{constructor(t=-1,e=1,n=1,i=-1,r=0.1,s=2000){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fd extends vo{constructor(){super(new br(-5,5,5,-5,0.5,500)),this.isDirectionalLightShadow=!0}}class Oi extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new Fd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ui{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}var yl=new WeakMap;class Mo extends qn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,s=vn.get(`image-bitmap:${t}`);if(s!==void 0)return r.manager.itemStart(t),s.then?void s.then((l)=>{if(yl.has(s)!==!0)return e&&e(l),r.manager.itemEnd(t),l;i&&i(yl.get(s)),r.manager.itemError(t),r.manager.itemEnd(t)}):(setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s);let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return vn.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),yl.set(o,l),vn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});vn.add(`image-bitmap:${t}`,o),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var r_=new yt,s_=new yt,a_=new yt;class Bh extends pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class So{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}var o_=new T,l_=new ye,h_=new T,c_=new T,u_=new T;var d_=new T,p_=new ye,f_=new T,m_=new T;class zh{constructor(t,e,n){let i,r,s;switch(this.binding=t,this.valueSize=n,e){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=Array(5*n);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,r=t*i+i,s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=e}else{s+=e;let a=e/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let o=e*this._origIndex;this._mixBufferRegion(n,i,o,1-r,e)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let o=e,l=e+e;o!==l;++o)if(n[o]!==n[o+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,s=i;r!==s;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=3*this.valueSize;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=0.5)for(let s=0;s!==r;++s)t[e+s]=t[n+s]}_slerp(t,e,n,i){ye.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){let s=this._workIndex*r;ye.multiplyQuaternionsFlat(t,s,t,e,t,n),ye.slerpFlat(t,e,t,e,t,s,i)}_lerp(t,e,n,i,r){let s=1-i;for(let a=0;a!==r;++a){let o=e+a;t[o]=t[o]*s+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let s=0;s!==r;++s){let a=e+s;t[a]=t[a]+t[n+s]*i}}}var Vh="\\[\\]\\.:\\/",om=new RegExp("["+Vh+"]","g"),Ml="[^"+Vh+"]",lm="[^"+Vh.replace("\\.","")+"]",hm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ml)+/(WCOD+)?/.source.replace("WCOD",lm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml)+"$"),cm=["material","materials","bones","map"];class qt{constructor(t,e,n){this.path=e,this.parsedPath=n||qt.parseTrackName(e),this.node=qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new qt.Composite(t,e,n):new qt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(om,"")}static parseTrackName(t){let e=hm.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);cm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let a=r[s];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);t=t.material.materials;break;case"bones":if(!t.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!t.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);t=t.material.map;break;default:if(t[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);t=t[n]}if(l!==void 0){if(t[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);t=t[l]}}let s=t[i];if(s===void 0){let l=e.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t)}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!t.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}o=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(o=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qt.Composite=class{constructor(t,e,n){let i=n||qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray],qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hh{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let r=e.tracks,s=r.length,a=Array(s),o={endingStart:2400,endingEnd:2400};for(let l=0;l!==s;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=o}this._interpolantSettings=o,this._interpolants=a,this._propertyBindings=Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,r=t._clip.duration,s=r/i,a=i/r;t.warp(1,s,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,r=i.time,s=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let{parameterPositions:o,sampleValues:l}=a;return o[0]=r,o[1]=r+n,l[0]=t/s,l[1]=e/s,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled)return void this._updateWeight(t);let r=this._startTime;if(r!==null){let o=(t-r)*n;o<0||n===0?e=0:(this._startTime=null,e=n*o)}e*=this._updateTimeScale(t);let s=this._updateTime(e),a=this._updateWeight(t);if(a>0){let o=this._interpolants,l=this._propertyBindings;if(this.blendMode===2501)for(let h=0,c=o.length;h!==c;++h)o[h].evaluate(s),l[h].accumulateAdditive(a);else for(let h=0,c=o.length;h!==c;++h)o[h].evaluate(s),l[h].accumulate(i,a)}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null)e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,r=this._loopCount,s=n===2202;if(t===0)return r===-1||!s||1&~r?i:e-i;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else{if(!(i<0)){this.time=i;break t}i=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);let o=this.repetitions-r;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(o===1){let l=t<0;this._setEndings(l,!l,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&!(1&~r))return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=2401,i.endingEnd=2401):(i.endingStart=t?this.zeroSlopeAtStart?2401:2400:2402,i.endingEnd=e?this.zeroSlopeAtEnd?2401:2400:2402)}_scheduleFading(t,e,n){let i=this._mixer,r=i.time,s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);let{parameterPositions:a,sampleValues:o}=s;return a[0]=r,o[0]=e,a[1]=r+t,o[1]=n,this}}var um=new Float32Array(1);class To extends Wn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,s=t._propertyBindings,a=t._interpolants,o=n.uuid,l=this._bindingsByRootAndName,h=l[o];h===void 0&&(h={},l[o]=h);for(let c=0;c!==r;++c){let d=i[c],u=d.name,f=h[u];if(f!==void 0)++f.referenceCount,s[c]=f;else{if(f=s[c],f!==void 0){f._cacheIndex===null&&(++f.referenceCount,this._addInactiveBinding(f,o,u));continue}let _=e&&e._propertyBindings[c].binding.parsedPath;f=new zh(qt.create(n,u,_),d.ValueTypeName,d.getValueSize()),++f.referenceCount,this._addInactiveBinding(f,o,u),s[c]=f}a[c].resultBuffer=f.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,r=this._actionsByClip,s=r[e];if(s===void 0)s={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=s;else{let a=s.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),s.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let r=t._clip.uuid,s=this._actionsByClip,a=s[r],o=a.knownActions,l=o[o.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,o[h]=l,o.pop(),t._byClipCacheIndex=null,delete a.actionByRoot[(t._localRoot||this._root).uuid],o.length===0&&delete s[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,r=this._bindings,s=i[e];s===void 0&&(s={},i[e]=s),s[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],o=e[e.length-1],l=t._cacheIndex;o._cacheIndex=l,e[l]=o,e.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new fo(new Float32Array(2),new Float32Array(2),1,um),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){let i=e||this._root,r=i.uuid,s=typeof t=="string"?ur.findByName(i,t):t,a=s!==null?s.uuid:t,o=this._actionsByClip[a],l=null;if(n===void 0&&(n=s!==null?s.blendMode:2500),o!==void 0){let c=o.actionByRoot[r];if(c!==void 0&&c.blendMode===n)return c;l=o.knownActions[0],s===null&&(s=l._clip)}if(s===null)return null;let h=new Hh(this,s,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){let n=e||this._root,i=n.uuid,r=typeof t=="string"?ur.findByName(n,t):t,s=r?r.uuid:t,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions;for(let e=this._nActiveActions-1;e>=0;--e)t[e].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),s=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,s);let a=this._bindings,o=this._nActiveBindings;for(let l=0;l!==o;++l)a[l].apply(s);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let s=r.knownActions;for(let a=0,o=s.length;a!==o;++a){let l=s[a];this._deactivateAction(l);let h=l._cacheIndex,c=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,c._cacheIndex=h,e[h]=c,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let r in n){let s=n[r].actionByRoot[e];s!==void 0&&(this._deactivateAction(s),this._removeInactiveAction(s))}let i=this._bindingsByRootAndName[e];if(i!==void 0)for(let r in i){let s=i[r];s.restoreOriginalState(),this._removeInactiveBinding(s)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}var g_=new yt;var __=new et;var v_=new T,x_=new T,y_=new T,M_=new T,S_=new T,T_=new T,E_=new T;var w_=new T;var b_=new T,A_=new yt,C_=new yt;var R_=new T,L_=new _t,I_=new _t;var P_=new T,U_=new T,N_=new T;var D_=new T,O_=new as;var F_=new Le;var B_=new T;function Gh(t,e,n,i){let r=function(s){switch(s){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${s}.`)}(i);switch(n){case 1021:return t*e;case 1028:case 1029:return t*e/r.components*r.byteLength;case 1030:case 1031:return t*e*2/r.components*r.byteLength;case 1022:return t*e*3/r.components*r.byteLength;case 1023:case 1033:return t*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");function op(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dm(t){let e=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),e.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let i=e.get(n);i&&(t.deleteBuffer(i.buffer),e.delete(n))},update:function(n,i){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let s=e.get(n);return void((!s||s.version<n.version)&&e.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}let r=e.get(n);if(r===void 0)e.set(n,function(s,a){let{array:o,usage:l}=s,h=o.byteLength,c=t.createBuffer(),d;if(t.bindBuffer(a,c),t.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=t.HALF_FLOAT;else if(o instanceof Uint16Array)d=s.isFloat16BufferAttribute?t.HALF_FLOAT:t.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=t.SHORT;else if(o instanceof Uint32Array)d=t.UNSIGNED_INT;else if(o instanceof Int32Array)d=t.INT;else if(o instanceof Int8Array)d=t.BYTE;else if(o instanceof Uint8Array)d=t.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=t.UNSIGNED_BYTE}return{buffer:c,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:h}}(n,i));else if(r.version<n.version){if(r.size!==n.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let{array:l,updateRanges:h}=a;if(t.bindBuffer(o,s),h.length===0)t.bufferSubData(o,0,l);else{h.sort((d,u)=>d.start-u.start);let c=0;for(let d=1;d<h.length;d++){let u=h[c],f=h[d];f.start<=u.start+u.count+1?u.count=Math.max(u.count,f.start+f.count-u.start):(++c,h[c]=f)}h.length=c+1;for(let d=0,u=h.length;d<u;d++){let f=h[d];t.bufferSubData(o,f.start*l.BYTES_PER_ELEMENT,l,f.start,f.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,n,i),r.version=n.version}}}}var Ut={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ot={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new et(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Sn={basic:{uniforms:Ie([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ie([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ie([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ie([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ie([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new _t(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ie([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ie([ot.points,ot.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ie([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ie([ot.common,ot.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ie([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ie([ot.sprite,ot.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ie([ot.common,ot.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ie([ot.lights,ot.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Sn.physical={uniforms:Ie([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Eo={r:0,b:0,g:0},Fi=new hn,pm=new yt;function fm(t,e,n,i,r,s,a){let o=new _t(0),l,h,c=s===!0?0:1,d=null,u=0,f=null;function _(p){let v=p.isScene===!0?p.background:null;if(v&&v.isTexture)v=(p.backgroundBlurriness>0?n:e).get(v);return v}function m(p,v){p.getRGB(Eo,yh(t)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),c=v,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(o,c)},render:function(p){let v=!1,x=_(p);x===null?m(o,c):x&&x.isColor&&(m(x,1),v=!0);let g=t.xr.getEnvironmentBlendMode();g==="additive"?i.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))},addToRenderList:function(p,v){let x=_(v);x&&(x.isCubeTexture||x.mapping===ts)?(h===void 0&&(h=new Se(new Ui(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ni(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(g,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Fi.copy(v.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pm.makeRotationFromEuler(Fi)),h.material.toneMapped=Vt.getTransfer(x.colorSpace)!==te,d===x&&u===x.version&&f===t.toneMapping||(h.material.needsUpdate=!0,d=x,u=x.version,f=t.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Se(new Tr(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ni(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),d===x&&u===x.version&&f===t.toneMapping||(l.material.needsUpdate=!0,d=x,u=x.version,f=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function mm(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,a=!1;function o(v){return t.bindVertexArray(v)}function l(v){return t.deleteVertexArray(v)}function h(v){let x=[],g=[],M=[];for(let R=0;R<n;R++)x[R]=0,g[R]=0,M[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:g,attributeDivisors:M,object:v,attributes:{},index:null}}function c(){let v=s.newAttributes;for(let x=0,g=v.length;x<g;x++)v[x]=0}function d(v){u(v,0)}function u(v,x){let{newAttributes:g,enabledAttributes:M,attributeDivisors:R}=s;g[v]=1,M[v]===0&&(t.enableVertexAttribArray(v),M[v]=1),R[v]!==x&&(t.vertexAttribDivisor(v,x),R[v]=x)}function f(){let{newAttributes:v,enabledAttributes:x}=s;for(let g=0,M=x.length;g<M;g++)x[g]!==v[g]&&(t.disableVertexAttribArray(g),x[g]=0)}function _(v,x,g,M,R,b,I){I===!0?t.vertexAttribIPointer(v,x,g,R,b):t.vertexAttribPointer(v,x,g,M,R,b)}function m(){p(),a=!0,s!==r&&(s=r,o(s.object))}function p(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(v,x,g,M,R){let b=!1,I=function(F,P,N){let H=N.wireframe===!0,G=i[F.id];G===void 0&&(G={},i[F.id]=G);let Y=G[P.id];Y===void 0&&(Y={},G[P.id]=Y);let z=Y[H];return z===void 0&&(z=h(t.createVertexArray()),Y[H]=z),z}(M,g,x);s!==I&&(s=I,o(s.object)),b=function(F,P,N,H){let G=s.attributes,Y=P.attributes,z=0,j=N.getAttributes();for(let J in j)if(j[J].location>=0){let Q=G[J],tt=Y[J];if(tt===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(tt=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(tt=F.instanceColor)),Q===void 0)return!0;if(Q.attribute!==tt)return!0;if(tt&&Q.data!==tt.data)return!0;z++}return s.attributesNum!==z||s.index!==H}(v,M,g,R),b&&function(F,P,N,H){let G={},Y=P.attributes,z=0,j=N.getAttributes();for(let J in j)if(j[J].location>=0){let Q=Y[J];Q===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor));let tt={};tt.attribute=Q,Q&&Q.data&&(tt.data=Q.data),G[J]=tt,z++}s.attributes=G,s.attributesNum=z,s.index=H}(v,M,g,R),R!==null&&e.update(R,t.ELEMENT_ARRAY_BUFFER),(b||a)&&(a=!1,function(F,P,N,H){c();let G=H.attributes,Y=N.getAttributes(),z=P.defaultAttributeValues;for(let j in Y){let J=Y[j];if(J.location>=0){let Q=G[j];if(Q===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let{normalized:tt,itemSize:ht}=Q,vt=e.get(Q);if(vt===void 0)continue;let{buffer:$,type:Z,bytesPerElement:mt}=vt,ut=Z===t.INT||Z===t.UNSIGNED_INT||Q.gpuType===Il;if(Q.isInterleavedBufferAttribute){let at=Q.data,it=at.stride,Ct=Q.offset;if(at.isInstancedInterleavedBuffer){for(let w=0;w<J.locationSize;w++)u(J.location+w,at.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let w=0;w<J.locationSize;w++)d(J.location+w);t.bindBuffer(t.ARRAY_BUFFER,$);for(let w=0;w<J.locationSize;w++)_(J.location+w,ht/J.locationSize,Z,tt,it*mt,(Ct+ht/J.locationSize*w)*mt,ut)}else{if(Q.isInstancedBufferAttribute){for(let at=0;at<J.locationSize;at++)u(J.location+at,Q.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let at=0;at<J.locationSize;at++)d(J.location+at);t.bindBuffer(t.ARRAY_BUFFER,$);for(let at=0;at<J.locationSize;at++)_(J.location+at,ht/J.locationSize,Z,tt,ht*mt,ht/J.locationSize*at*mt,ut)}}else if(z!==void 0){let tt=z[j];if(tt!==void 0)switch(tt.length){case 2:t.vertexAttrib2fv(J.location,tt);break;case 3:t.vertexAttrib3fv(J.location,tt);break;case 4:t.vertexAttrib4fv(J.location,tt);break;default:t.vertexAttrib1fv(J.location,tt)}}}}f()}(v,x,g,M),R!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:m,resetDefaultState:p,dispose:function(){m();for(let v in i){let x=i[v];for(let g in x){let M=x[g];for(let R in M)l(M[R].object),delete M[R];delete x[g]}delete i[v]}},releaseStatesOfGeometry:function(v){if(i[v.id]===void 0)return;let x=i[v.id];for(let g in x){let M=x[g];for(let R in M)l(M[R].object),delete M[R];delete x[g]}delete i[v.id]},releaseStatesOfProgram:function(v){for(let x in i){let g=i[x];if(g[v.id]===void 0)continue;let M=g[v.id];for(let R in M)l(M[R].object),delete M[R];delete g[v.id]}},initAttributes:c,enableAttribute:d,disableUnusedAttributes:f}}function gm(t,e,n){let i;function r(s,a,o){o!==0&&(t.drawArraysInstanced(i,s,a,o),n.update(a,i,o))}this.setMode=function(s){i=s},this.render=function(s,a){t.drawArrays(i,s,a),n.update(a,i,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,a,0,o);let l=0;for(let h=0;h<o;h++)l+=a[h];n.update(l,i,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<s.length;c++)r(s[c],a[c],l[c]);else{h.multiDrawArraysInstancedWEBGL(i,s,0,a,0,l,0,o);let c=0;for(let d=0;d<o;d++)c+=a[d]*l[d];n.update(c,i,1)}}}function _m(t,e,n,i){let r;function s(u){if(u==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=n.precision!==void 0?n.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(u){return u===yn||i.convert(u)===t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let f=u===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==oi&&i.convert(u)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==li&&!f)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:t.getParameter(t.MAX_TEXTURE_SIZE),maxCubemapSize:t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:t.getParameter(t.MAX_VERTEX_ATTRIBS),maxVertexUniforms:t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:t.getParameter(t.MAX_VARYING_VECTORS),maxFragmentUniforms:t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:t.getParameter(t.MAX_SAMPLES)}}function vm(t){let e=this,n=null,i=0,r=!1,s=!1,a=new Dn,o=new Lt,l={value:null,needsUpdate:!1};function h(c,d,u,f){let _=c!==null?c.length:0,m=null;if(_!==0){if(m=l.value,f!==!0||m===null){let p=u+4*_,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,g=u;x!==_;++x,g+=4)a.copy(c[x]).applyMatrix4(v,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let u=c.length!==0||d||i!==0||r;return r=d,i=c.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,d){n=h(c,d,0)},this.setState=function(c,d,u){let{clippingPlanes:f,clipIntersection:_,clipShadows:m}=c,p=t.get(c);if(!r||f===null||f.length===0||s&&!m)s?h(null):function(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let v=s?0:i,x=4*v,g=p.clippingState||null;l.value=g,g=h(f,d,x,u);for(let M=0;M!==x;++M)g[M]=n[M];p.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}}}function xm(t){let e=new WeakMap;function n(r,s){return s===xa?r.mapping=pr:s===ya&&(r.mapping=Li),r}function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===xa||s===ya){if(e.has(r))return n(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Sh(a.height);return o.fromEquirectangularTexture(t,r),e.set(r,o),r.addEventListener("dispose",i),n(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Bd=[0.125,0.215,0.35,0.446,0.526,0.582],gs=20,kh=new br,zd=new _t,Wh=null,Xh=0,qh=0,Yh=!1,zi=(1+Math.sqrt(5))/2,Ar=1/zi,Vd=[new T(-zi,Ar,0),new T(zi,Ar,0),new T(-Ar,0,zi),new T(Ar,0,zi),new T(0,zi,-Ar),new T(0,zi,Ar),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],ym=new T;class jh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=0.1,i=100,r={}){let{size:s=256,position:a=ym}=r;Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wh,Xh,qh),this._renderer.xr.enabled=Yh,t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pr||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ns,format:yn,colorSpace:De,depthBuffer:!1},i=Hd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){let a=[],o=[],l=[],h=s,c=s-4+1+Bd.length;for(let d=0;d<c;d++){let u=Math.pow(2,h);o.push(u);let f=1/u;d>s-4?f=Bd[d-s+4-1]:d===0&&(f=0),l.push(f);let _=1/(u-2),m=-_,p=1+_,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,g=6,M=3,R=2,b=1,I=new Float32Array(M*g*x),F=new Float32Array(R*g*x),P=new Float32Array(b*g*x);for(let H=0;H<x;H++){let G=H%3*2/3-1,Y=H>2?0:-1,z=[G,Y,0,G+0.6666666666666666,Y,0,G+0.6666666666666666,Y+1,0,G,Y,0,G+0.6666666666666666,Y+1,0,G,Y+1,0];I.set(z,M*g*H),F.set(v,R*g*H);let j=[H,H,H,H,H,H];P.set(j,b*g*H)}let N=new $t;N.setAttribute("position",new fe(I,M)),N.setAttribute("uv",new fe(F,R)),N.setAttribute("faceIndex",new fe(P,b)),a.push(N),h>4&&h--}return{lodPlanes:a,sizeLods:o,sigmas:l}}(r)),this._blurMaterial=function(s,a,o){let l=new Float32Array(gs),h=new T(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/o,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}(r,t,e)}return i}_compileMaterial(t){let e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,kh)}_sceneToCubeUV(t,e,n,i,r){let s=new pe(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(zd),l.toneMapping=Vn,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null));let d=new Ke({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),u=new Se(new Ui,d),f=!1,_=t.background;_?_.isColor&&(d.color.copy(_),t.background=null,f=!0):(d.color.copy(zd),f=!0);for(let m=0;m<6;m++){let p=m%3;p===0?(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[m],r.y,r.z)):p===1?(s.up.set(0,0,a[m]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[m],r.z)):(s.up.set(0,a[m],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[m]));let v=this._cubeSize;wo(i,p*v,m>2?v:0,v,v),l.setRenderTarget(i),f&&l.render(u,s),l.render(t,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=c,l.autoClear=h,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===pr||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let r=i?this._cubemapMaterial:this._equirectMaterial,s=new Se(this._lodPlanes[0],r);r.uniforms.envMap.value=t;let a=this._cubeSize;wo(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(s,kh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vd[(i-r-1)%Vd.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,i,r){let s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){let o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Se(this._lodPlanes[i],l),c=l.uniforms,d=this._sizeLods[n]-1,u=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,f=r/u,_=isFinite(r)?1+Math.floor(3*f):gs;_>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],p=0;for(let g=0;g<gs;++g){let M=g/f,R=Math.exp(-M*M/2);m.push(R),g===0?p+=R:g<_&&(p+=2*R)}for(let g=0;g<m.length;g++)m[g]=m[g]/p;c.envMap.value=t.texture,c.samples.value=_,c.weights.value=m,c.latitudinal.value=s==="latitudinal",a&&(c.poleAxis.value=a);let{_lodMax:v}=this;c.dTheta.value=u,c.mipInt.value=v-n;let x=this._sizeLods[i];wo(e,3*x*(i>v-4?i-v+4:0),4*(this._cubeSize-x),3*x,2*x),o.setRenderTarget(e),o.render(h,kh)}}function Hd(t,e,n){let i=new Xn(t,e,n);return i.texture.mapping=ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Gd(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function kd(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
	`}function Mm(t){let e=new WeakMap,n=null;function i(r){let s=r.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===xa||s===ya,o=s===pr||s===Li;if(a||o){let l=e.get(r),h=l!==void 0?l.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==h)return n===null&&(n=new jh(t)),l=a?n.fromEquirectangular(r,l):n.fromCubemap(r,l),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),l.texture;if(l!==void 0)return l.texture;{let c=r.image;return a&&c&&c.height>0||o&&c&&function(d){let u=0,f=6;for(let _=0;_<f;_++)d[_]!==void 0&&u++;return u===f}(c)?(n===null&&(n=new jh(t)),l=a?n.fromEquirectangular(r):n.fromCubemap(r),l.texture.pmremVersion=r.pmremVersion,e.set(r,l),r.addEventListener("dispose",i),l.texture):null}}}return r},dispose:function(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function Sm(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Ai("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tm(t,e,n,i){let r={},s=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let d in h.attributes)e.remove(h.attributes[d]);h.removeEventListener("dispose",a),delete r[h.id];let c=s.get(h);c&&(e.remove(c),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(l){let h=[],c=l.index,d=l.attributes.position,u=0;if(c!==null){let m=c.array;u=c.version;for(let p=0,v=m.length;p<v;p+=3){let x=m[p+0],g=m[p+1],M=m[p+2];h.push(x,g,g,M,M,x)}}else{if(d===void 0)return;{let m=d.array;u=d.version;for(let p=0,v=m.length/3-1;p<v;p+=3){let x=p+0,g=p+1,M=p+2;h.push(x,g,g,M,M,x)}}}let f=new((gh(h))?Na:Ua)(h,1);f.version=u;let _=s.get(l);_&&e.remove(_),s.set(l,f)}return{get:function(l,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h},update:function(l){let h=l.attributes;for(let c in h)e.update(h[c],t.ARRAY_BUFFER)},getWireframeAttribute:function(l){let h=s.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return s.get(l)}}}function Em(t,e,n){let i,r,s;function a(o,l,h){h!==0&&(t.drawElementsInstanced(i,l,r,o*s,h),n.update(l,i,h))}this.setMode=function(o){i=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,l){t.drawElements(i,l,r,o*s),n.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,r,o,0,h);let c=0;for(let d=0;d<h;d++)c+=l[d];n.update(c,i,1)},this.renderMultiDrawInstances=function(o,l,h,c){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/s,l[u],c[u]);else{d.multiDrawElementsInstancedWEBGL(i,l,0,r,o,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f]*c[f];n.update(u,i,1)}}}function wm(t){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(n,i,r){switch(e.calls++,i){case t.TRIANGLES:e.triangles+=r*(n/3);break;case t.LINES:e.lines+=r*(n/2);break;case t.LINE_STRIP:e.lines+=r*(n-1);break;case t.LINE_LOOP:e.lines+=r*n;break;case t.POINTS:e.points+=r*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function bm(t,e,n){let i=new WeakMap,r=new Yt;return{update:function(s,a,o){let l=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==c){let F=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",F)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;u===!0&&(x=1),f===!0&&(x=2),_===!0&&(x=3);let g=a.attributes.position.count*x,M=1;g>e.maxTextureSize&&(M=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let R=new Float32Array(g*M*4*c),b=new Ia(R,g,M,c);b.type=li,b.needsUpdate=!0;let I=4*x;for(let P=0;P<c;P++){let N=m[P],H=p[P],G=v[P],Y=g*M*4*P;for(let z=0;z<N.count;z++){let j=z*I;u===!0&&(r.fromBufferAttribute(N,z),R[Y+j+0]=r.x,R[Y+j+1]=r.y,R[Y+j+2]=r.z,R[Y+j+3]=0),f===!0&&(r.fromBufferAttribute(H,z),R[Y+j+4]=r.x,R[Y+j+5]=r.y,R[Y+j+6]=r.z,R[Y+j+7]=0),_===!0&&(r.fromBufferAttribute(G,z),R[Y+j+8]=r.x,R[Y+j+9]=r.y,R[Y+j+10]=r.z,R[Y+j+11]=G.itemSize===4?r.w:1)}}d={count:c,texture:b,size:new et(g,M)},i.set(a,d),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let f=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(t,"morphTargetBaseInfluence",f),o.getUniforms().setValue(t,"morphTargetInfluences",l)}o.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}}}function Am(t,e,n,i){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),n.remove(o.instanceMatrix),o.instanceColor!==null&&n.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(r.get(h)!==o&&(e.update(h),r.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(n.update(a.instanceMatrix,t.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,t.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;r.get(c)!==o&&(c.update(),r.set(c,o))}return h},dispose:function(){r=new WeakMap}}}var lp=new de,Wd=new Wa(1,1),hp=new Ia,cp=new xh,up=new Da,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),jd=new Float32Array(4);function Cr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Xd[r];if(s===void 0&&(s=new Float32Array(r),Xd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function me(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function ge(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ao(t,e){let n=qd[e];n===void 0&&(n=new Int32Array(e),qd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Cm(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Rm(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(me(n,e))return;t.uniform2fv(this.addr,e),ge(n,e)}}function Lm(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)n[0]===e.r&&n[1]===e.g&&n[2]===e.b||(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(me(n,e))return;t.uniform3fv(this.addr,e),ge(n,e)}}function Im(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(me(n,e))return;t.uniform4fv(this.addr,e),ge(n,e)}}function Pm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(me(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),ge(n,e)}else{if(me(n,i))return;jd.set(i),t.uniformMatrix2fv(this.addr,!1,jd),ge(n,i)}}function Um(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(me(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),ge(n,e)}else{if(me(n,i))return;Zd.set(i),t.uniformMatrix3fv(this.addr,!1,Zd),ge(n,i)}}function Nm(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(me(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),ge(n,e)}else{if(me(n,i))return;Yd.set(i),t.uniformMatrix4fv(this.addr,!1,Yd),ge(n,i)}}function Dm(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Om(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(me(n,e))return;t.uniform2iv(this.addr,e),ge(n,e)}}function Fm(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(me(n,e))return;t.uniform3iv(this.addr,e),ge(n,e)}}function Bm(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(me(n,e))return;t.uniform4iv(this.addr,e),ge(n,e)}}function zm(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Vm(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y||(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(me(n,e))return;t.uniform2uiv(this.addr,e),ge(n,e)}}function Hm(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z||(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(me(n,e))return;t.uniform3uiv(this.addr,e),ge(n,e)}}function Gm(t,e){let n=this.cache;if(e.x!==void 0)n[0]===e.x&&n[1]===e.y&&n[2]===e.z&&n[3]===e.w||(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(me(n,e))return;t.uniform4uiv(this.addr,e),ge(n,e)}}function km(t,e,n){let i=this.cache,r=n.allocateTextureUnit(),s;i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),this.type===t.SAMPLER_2D_SHADOW?(Wd.compareFunction=dh,s=Wd):s=lp,n.setTexture2D(e||s,r)}function Wm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cp,r)}function Xm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||up,r)}function qm(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hp,r)}function Ym(t,e){t.uniform1fv(this.addr,e)}function Zm(t,e){let n=Cr(e,this.size,2);t.uniform2fv(this.addr,n)}function jm(t,e){let n=Cr(e,this.size,3);t.uniform3fv(this.addr,n)}function Jm(t,e){let n=Cr(e,this.size,4);t.uniform4fv(this.addr,n)}function Km(t,e){let n=Cr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $m(t,e){let n=Cr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Qm(t,e){let n=Cr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function tg(t,e){t.uniform1iv(this.addr,e)}function eg(t,e){t.uniform2iv(this.addr,e)}function ng(t,e){t.uniform3iv(this.addr,e)}function ig(t,e){t.uniform4iv(this.addr,e)}function rg(t,e){t.uniform1uiv(this.addr,e)}function sg(t,e){t.uniform2uiv(this.addr,e)}function ag(t,e){t.uniform3uiv(this.addr,e)}function og(t,e){t.uniform4uiv(this.addr,e)}function lg(t,e,n){let i=this.cache,r=e.length,s=Ao(n,r);me(i,s)||(t.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||lp,s[a])}function hg(t,e,n){let i=this.cache,r=e.length,s=Ao(n,r);me(i,s)||(t.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||cp,s[a])}function cg(t,e,n){let i=this.cache,r=e.length,s=Ao(n,r);me(i,s)||(t.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||up,s[a])}function ug(t,e,n){let i=this.cache,r=e.length,s=Ao(n,r);me(i,s)||(t.uniform1iv(this.addr,s),ge(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||hp,s[a])}class dp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=function(i){switch(i){case 5126:return Cm;case 35664:return Rm;case 35665:return Lm;case 35666:return Im;case 35674:return Pm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Dm;case 35667:case 35671:return Om;case 35668:case 35672:return Fm;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Vm;case 36295:return Hm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}(e.type)}}class pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=function(i){switch(i){case 5126:return Ym;case 35664:return Zm;case 35665:return jm;case 35666:return Jm;case 35674:return Km;case 35675:return $m;case 35676:return Qm;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return rg;case 36294:return sg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return hg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return ug}}(e.type)}}class fp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let a=i[r];a.setValue(t,e[a.id],n)}}}var Zh=/(\w+)(\])?(\[|\.)?/g;function Jd(t,e){t.seq.push(e),t.map[e.id]=e}function dg(t,e,n){let i=t.name,r=i.length;for(Zh.lastIndex=0;;){let s=Zh.exec(i),a=Zh.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===r){Jd(n,h===void 0?new dp(o,t,e):new pp(o,t,e));break}{let c=n.map[o];c===void 0&&(c=new fp(o),Jd(n,c)),n=c}}}class vs{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i);dg(r,t.getUniformLocation(e,r.name),this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){let a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.id in e&&n.push(s)}return n}}function Kd(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var pg=0,$d=new Lt;function Qd(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+function(o,l){let h=o.split(`
`),c=[],d=Math.max(l-6,0),u=Math.min(l+6,h.length);for(let f=d;f<u;f++){let _=f+1;c.push(`${_===l?">":" "} ${_}: ${h[f]}`)}return c.join(`
`)}(t.getShaderSource(e),a)}return r}function fg(t,e){let n=function(i){Vt._getMatrix($d,Vt.workingColorSpace,i);let r=`mat3( ${$d.elements.map((s)=>s.toFixed(4))} )`;switch(Vt.getTransfer(i)){case uh:return[r,"LinearTransferOETF"];case te:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[r,"LinearTransferOETF"]}}(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function mg(t,e){let n;switch(e){case Qu:n="Linear";break;case td:n="Reinhard";break;case ed:n="Cineon";break;case va:n="ACESFilmic";break;case id:n="AgX";break;case rd:n="Neutral";break;case nd:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var bo=new T;function gg(){return Vt.getLuminanceCoefficients(bo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${bo.x.toFixed(4)}, ${bo.y.toFixed(4)}, ${bo.z.toFixed(4)} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function _s(t){return t!==""}function tp(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ep(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(t){return t.replace(_g,xg)}var vg=new Map;function xg(t,e){let n=Ut[e];if(n===void 0){let i=vg.get(e);if(i===void 0)throw Error("Can not resolve #include <"+e+">");n=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Jh(n)}var yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(t){return t.replace(yg,Mg)}function Mg(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ip(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Sg(t,e,n,i){let r=t.getContext(),s=n.defines,a=n.vertexShader,o=n.fragmentShader,l=function(H){let G="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===Al?G="SHADOWMAP_TYPE_PCF":H.shadowMapType===Ru?G="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===xn&&(G="SHADOWMAP_TYPE_VSM"),G}(n),h=function(H){let G="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case pr:case Li:G="ENVMAP_TYPE_CUBE";break;case ts:G="ENVMAP_TYPE_CUBE_UV"}return G}(n),c=function(H){let G="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===Li&&(G="ENVMAP_MODE_REFRACTION"),G}(n),d=function(H){let G="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case Ju:G="ENVMAP_BLENDING_MULTIPLY";break;case Ku:G="ENVMAP_BLENDING_MIX";break;case $u:G="ENVMAP_BLENDING_ADD"}return G}(n),u=function(H){let G=H.envMapCubeUVHeight;if(G===null)return null;let Y=Math.log2(G)-2,z=1/G;return{texelWidth:1/(3*Math.max(Math.pow(2,Y),112)),texelHeight:z,maxMip:Y}}(n),f=function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}(n),_=function(H){let G=[];for(let Y in H){let z=H[Y];z!==!1&&G.push("#define "+Y+" "+z)}return G.join(`
`)}(s),m=r.createProgram(),p,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_s).join(`
`),p.length>0&&(p+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(_s).join(`
`),v.length>0&&(v+=`
`)):(p=[ip(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),v=[ip(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vn?"#define TONE_MAPPING":"",n.toneMapping!==Vn?Ut.tonemapping_pars_fragment:"",n.toneMapping!==Vn?mg("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,fg("linearToOutputTexel",n.outputColorSpace),gg(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_s).join(`
`)),a=Jh(a),a=tp(a,n),a=ep(a,n),o=Jh(o),o=tp(o,n),o=ep(o,n),a=np(a),o=np(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",n.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let g=x+p+a,M=x+v+o,R=Kd(r,r.VERTEX_SHADER,g),b=Kd(r,r.FRAGMENT_SHADER,M);function I(H){if(t.debug.checkShaderErrors){let G=r.getProgramInfoLog(m)||"",Y=r.getShaderInfoLog(R)||"",z=r.getShaderInfoLog(b)||"",j=G.trim(),J=Y.trim(),Q=z.trim(),tt=!0,ht=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(tt=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,R,b);else{let vt=Qd(r,R,"vertex"),$=Qd(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+vt+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):J!==""&&Q!==""||(ht=!1);ht&&(H.diagnostics={runnable:tt,programLog:j,vertexShader:{log:J,prefix:p},fragmentShader:{log:Q,prefix:v}})}r.deleteShader(R),r.deleteShader(b),F=new vs(r,m),P=function(G,Y){let z={},j=G.getProgramParameter(Y,G.ACTIVE_ATTRIBUTES);for(let J=0;J<j;J++){let Q=G.getActiveAttrib(Y,J),tt=Q.name,ht=1;Q.type===G.FLOAT_MAT2&&(ht=2),Q.type===G.FLOAT_MAT3&&(ht=3),Q.type===G.FLOAT_MAT4&&(ht=4),z[tt]={type:Q.type,location:G.getAttribLocation(Y,tt),locationSize:ht}}return z}(r,m)}let F,P;r.attachShader(m,R),r.attachShader(m,b),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),this.getUniforms=function(){return F===void 0&&I(this),F},this.getAttributes=function(){return P===void 0&&I(this),P};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,37297)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=b,this}var Tg=0;class mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gp(t),e.set(t,n)),n}}class gp{constructor(t){this.id=Tg++,this.code=t,this.usedTimes=0}}function Eg(t,e,n,i,r,s,a){let o=new Pa,l=new mp,h=new Set,c=[],d=r.logarithmicDepthBuffer,u=r.vertexTextures,f=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(p){return h.add(p),p===0?"uv":`uv${p}`}return{getParameters:function(p,v,x,g,M){let R=g.fog,b=M.geometry,I=p.isMeshStandardMaterial?g.environment:null,F=(p.isMeshStandardMaterial?n:e).get(p.envMap||I),P=F&&F.mapping===ts?F.image.height:null,N=_[p.type];p.precision!==null&&(f=r.getMaxPrecision(p.precision),f!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",f,"instead."));let H=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,G=H!==void 0?H.length:0,Y,z,j,J,Q=0;if(b.morphAttributes.position!==void 0&&(Q=1),b.morphAttributes.normal!==void 0&&(Q=2),b.morphAttributes.color!==void 0&&(Q=3),N){let Xt=Sn[N];Y=Xt.vertexShader,z=Xt.fragmentShader}else Y=p.vertexShader,z=p.fragmentShader,l.update(p),j=l.getVertexShaderID(p),J=l.getFragmentShaderID(p);let tt=t.getRenderTarget(),ht=t.state.buffers.depth.getReversed(),vt=M.isInstancedMesh===!0,$=M.isBatchedMesh===!0,Z=!!p.map,mt=!!p.matcap,ut=!!F,at=!!p.aoMap,it=!!p.lightMap,Ct=!!p.bumpMap,w=!!p.normalMap,S=!!p.displacementMap,A=!!p.emissiveMap,D=!!p.metalnessMap,y=!!p.roughnessMap,C=p.anisotropy>0,L=p.clearcoat>0,O=p.dispersion>0,B=p.iridescence>0,k=p.sheen>0,X=p.transmission>0,rt=C&&!!p.anisotropyMap,dt=L&&!!p.clearcoatMap,st=L&&!!p.clearcoatNormalMap,lt=L&&!!p.clearcoatRoughnessMap,Mt=B&&!!p.iridescenceMap,Rt=B&&!!p.iridescenceThicknessMap,Ht=k&&!!p.sheenColorMap,Wt=k&&!!p.sheenRoughnessMap,It=!!p.specularMap,pt=!!p.specularColorMap,Tt=!!p.specularIntensityMap,Kt=X&&!!p.transmissionMap,be=X&&!!p.thicknessMap,gt=!!p.gradientMap,Ot=!!p.alphaMap,Gt=p.alphaTest>0,Zn=!!p.alphaHash,U=!!p.extensions,Ue=Vn;p.toneMapped&&(tt!==null&&tt.isXRRenderTarget!==!0||(Ue=t.toneMapping));let ve={shaderID:N,shaderType:p.type,shaderName:p.name,vertexShader:Y,fragmentShader:z,defines:p.defines,customVertexShaderID:j,customFragmentShaderID:J,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:f,batching:$,batchingColor:$&&M._colorsTexture!==null,instancing:vt,instancingColor:vt&&M.instanceColor!==null,instancingMorph:vt&&M.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:tt===null?t.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:De,alphaToCoverage:!!p.alphaToCoverage,map:Z,matcap:mt,envMap:ut,envMapMode:ut&&F.mapping,envMapCubeUVHeight:P,aoMap:at,lightMap:it,bumpMap:Ct,normalMap:w,displacementMap:u&&S,emissiveMap:A,normalMapObjectSpace:w&&p.normalMapType===md,normalMapTangentSpace:w&&p.normalMapType===fd,metalnessMap:D,roughnessMap:y,anisotropy:C,anisotropyMap:rt,clearcoat:L,clearcoatMap:dt,clearcoatNormalMap:st,clearcoatRoughnessMap:lt,dispersion:O,iridescence:B,iridescenceMap:Mt,iridescenceThicknessMap:Rt,sheen:k,sheenColorMap:Ht,sheenRoughnessMap:Wt,specularMap:It,specularColorMap:pt,specularIntensityMap:Tt,transmission:X,transmissionMap:Kt,thicknessMap:be,gradientMap:gt,opaque:p.transparent===!1&&p.blending===$r&&p.alphaToCoverage===!1,alphaMap:Ot,alphaTest:Gt,alphaHash:Zn,combine:p.combine,mapUv:Z&&m(p.map.channel),aoMapUv:at&&m(p.aoMap.channel),lightMapUv:it&&m(p.lightMap.channel),bumpMapUv:Ct&&m(p.bumpMap.channel),normalMapUv:w&&m(p.normalMap.channel),displacementMapUv:S&&m(p.displacementMap.channel),emissiveMapUv:A&&m(p.emissiveMap.channel),metalnessMapUv:D&&m(p.metalnessMap.channel),roughnessMapUv:y&&m(p.roughnessMap.channel),anisotropyMapUv:rt&&m(p.anisotropyMap.channel),clearcoatMapUv:dt&&m(p.clearcoatMap.channel),clearcoatNormalMapUv:st&&m(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(p.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&m(p.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&m(p.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&m(p.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&m(p.sheenRoughnessMap.channel),specularMapUv:It&&m(p.specularMap.channel),specularColorMapUv:pt&&m(p.specularColorMap.channel),specularIntensityMapUv:Tt&&m(p.specularIntensityMap.channel),transmissionMapUv:Kt&&m(p.transmissionMap.channel),thicknessMapUv:be&&m(p.thicknessMap.channel),alphaMapUv:Ot&&m(p.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(w||C),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!b.attributes.uv&&(Z||Ot),fog:!!R,useFog:p.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:M.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Q,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:t.shadowMap.enabled&&x.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Z&&p.map.isVideoTexture===!0&&Vt.getTransfer(p.map.colorSpace)===te,decodeVideoTextureEmissive:A&&p.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(p.emissiveMap.colorSpace)===te,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Re,flipSided:p.side===We,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:U&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(U&&p.extensions.multiDraw===!0||$)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return ve.vertexUv1s=h.has(1),ve.vertexUv2s=h.has(2),ve.vertexUv3s=h.has(3),h.clear(),ve},getProgramCacheKey:function(p){let v=[];if(p.shaderID?v.push(p.shaderID):(v.push(p.customVertexShaderID),v.push(p.customFragmentShaderID)),p.defines!==void 0)for(let x in p.defines)v.push(x),v.push(p.defines[x]);return p.isRawShaderMaterial===!1&&(function(x,g){x.push(g.precision),x.push(g.outputColorSpace),x.push(g.envMapMode),x.push(g.envMapCubeUVHeight),x.push(g.mapUv),x.push(g.alphaMapUv),x.push(g.lightMapUv),x.push(g.aoMapUv),x.push(g.bumpMapUv),x.push(g.normalMapUv),x.push(g.displacementMapUv),x.push(g.emissiveMapUv),x.push(g.metalnessMapUv),x.push(g.roughnessMapUv),x.push(g.anisotropyMapUv),x.push(g.clearcoatMapUv),x.push(g.clearcoatNormalMapUv),x.push(g.clearcoatRoughnessMapUv),x.push(g.iridescenceMapUv),x.push(g.iridescenceThicknessMapUv),x.push(g.sheenColorMapUv),x.push(g.sheenRoughnessMapUv),x.push(g.specularMapUv),x.push(g.specularColorMapUv),x.push(g.specularIntensityMapUv),x.push(g.transmissionMapUv),x.push(g.thicknessMapUv),x.push(g.combine),x.push(g.fogExp2),x.push(g.sizeAttenuation),x.push(g.morphTargetsCount),x.push(g.morphAttributeCount),x.push(g.numDirLights),x.push(g.numPointLights),x.push(g.numSpotLights),x.push(g.numSpotLightMaps),x.push(g.numHemiLights),x.push(g.numRectAreaLights),x.push(g.numDirLightShadows),x.push(g.numPointLightShadows),x.push(g.numSpotLightShadows),x.push(g.numSpotLightShadowsWithMaps),x.push(g.numLightProbes),x.push(g.shadowMapType),x.push(g.toneMapping),x.push(g.numClippingPlanes),x.push(g.numClipIntersection),x.push(g.depthPacking)}(v,p),function(x,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),g.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reversedDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),x.push(o.mask)}(v,p),v.push(t.outputColorSpace)),v.push(p.customProgramCacheKey),v.join()},getUniforms:function(p){let v=_[p.type],x;if(v){let g=Sn[v];x=bd.clone(g.uniforms)}else x=p.uniforms;return x},acquireProgram:function(p,v){let x;for(let g=0,M=c.length;g<M;g++){let R=c[g];if(R.cacheKey===v){x=R,++x.usedTimes;break}}return x===void 0&&(x=new Sg(t,v,p,s),c.push(x)),x},releaseProgram:function(p){if(--p.usedTimes===0){let v=c.indexOf(p);c[v]=c[c.length-1],c.pop(),p.destroy()}},releaseShaderCache:function(p){l.remove(p)},programs:c,dispose:function(){l.dispose()}}}function wg(){let t=new WeakMap;return{has:function(e){return t.has(e)},get:function(e){let n=t.get(e);return n===void 0&&(n={},t.set(e,n)),n},remove:function(e){t.delete(e)},update:function(e,n,i){t.get(e)[n]=i},dispose:function(){t=new WeakMap}}}function bg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sp(){let t=[],e=0,n=[],i=[],r=[];function s(a,o,l,h,c,d){let u=t[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:d},t[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=h,u.renderOrder=a.renderOrder,u.z=c,u.group=d),e++,u}return{opaque:n,transmissive:i,transparent:r,init:function(){e=0,n.length=0,i.length=0,r.length=0},push:function(a,o,l,h,c,d){let u=s(a,o,l,h,c,d);l.transmission>0?i.push(u):l.transparent===!0?r.push(u):n.push(u)},unshift:function(a,o,l,h,c,d){let u=s(a,o,l,h,c,d);l.transmission>0?i.unshift(u):l.transparent===!0?r.unshift(u):n.unshift(u)},finish:function(){for(let a=e,o=t.length;a<o;a++){let l=t[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){n.length>1&&n.sort(a||bg),i.length>1&&i.sort(o||rp),r.length>1&&r.sort(o||rp)}}}function Ag(){let t=new WeakMap;return{get:function(e,n){let i=t.get(e),r;return i===void 0?(r=new sp,t.set(e,[r])):n>=i.length?(r=new sp,i.push(r)):r=i[n],r},dispose:function(){t=new WeakMap}}}function Cg(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new T,color:new _t};break;case"SpotLight":n={position:new T,direction:new T,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new T,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new T,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new T,halfWidth:new T,halfHeight:new T}}return t[e.id]=n,n}}}var Rg=0;function Lg(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ig(t){let e=new Cg,n=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":h={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1000}}return o[l.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new T);let r=new T,s=new yt,a=new yt;return{setup:function(o){let l=0,h=0,c=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,u=0,f=0,_=0,m=0,p=0,v=0,x=0,g=0,M=0,R=0;o.sort(Lg);for(let I=0,F=o.length;I<F;I++){let P=o[I],N=P.color,H=P.intensity,G=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)l+=N.r*H,h+=N.g*H,c+=N.b*H;else if(P.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],H);R++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,J=n.get(P);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.directionalShadow[d]=J,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=P.shadow.matrix,p++}i.directional[d]=z,d++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(N).multiplyScalar(H),z.distance=G,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[f]=z;let j=P.shadow;if(P.map&&(i.spotLightMap[g]=P.map,g++,j.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[f]=j.matrix,P.castShadow){let J=n.get(P);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,i.spotShadow[f]=J,i.spotShadowMap[f]=Y,x++}f++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(N).multiplyScalar(H),z.halfWidth.set(0.5*P.width,0,0),z.halfHeight.set(0,0.5*P.height,0),i.rectArea[_]=z,_++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let j=P.shadow,J=n.get(P);J.shadowIntensity=j.intensity,J.shadowBias=j.bias,J.shadowNormalBias=j.normalBias,J.shadowRadius=j.radius,J.shadowMapSize=j.mapSize,J.shadowCameraNear=j.camera.near,J.shadowCameraFar=j.camera.far,i.pointShadow[u]=J,i.pointShadowMap[u]=Y,i.pointShadowMatrix[u]=P.shadow.matrix,v++}i.point[u]=z,u++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(H),z.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[m]=z,m++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=h,i.ambient[2]=c;let b=i.hash;b.directionalLength===d&&b.pointLength===u&&b.spotLength===f&&b.rectAreaLength===_&&b.hemiLength===m&&b.numDirectionalShadows===p&&b.numPointShadows===v&&b.numSpotShadows===x&&b.numSpotMaps===g&&b.numLightProbes===R||(i.directional.length=d,i.spot.length=f,i.rectArea.length=_,i.point.length=u,i.hemi.length=m,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+g-M,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,b.directionalLength=d,b.pointLength=u,b.spotLength=f,b.rectAreaLength=_,b.hemiLength=m,b.numDirectionalShadows=p,b.numPointShadows=v,b.numSpotShadows=x,b.numSpotMaps=g,b.numLightProbes=R,i.version=Rg++)},setupView:function(o,l){let h=0,c=0,d=0,u=0,f=0,_=l.matrixWorldInverse;for(let m=0,p=o.length;m<p;m++){let v=o[m];if(v.isDirectionalLight){let x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),h++}else if(v.isSpotLight){let x=i.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),d++}else if(v.isRectAreaLight){let x=i.rectArea[u];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),a.identity(),s.copy(v.matrixWorld),s.premultiply(_),a.extractRotation(s),x.halfWidth.set(0.5*v.width,0,0),x.halfHeight.set(0,0.5*v.height,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),u++}else if(v.isPointLight){let x=i.point[c];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),c++}else if(v.isHemisphereLight){let x=i.hemi[f];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(_),f++}}},state:i}}function ap(t){let e=new Ig(t),n=[],i=[],r={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,n.length=0,i.length=0},state:r,setupLights:function(){e.setup(n)},setupLightsView:function(s){e.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function Pg(t){let e=new WeakMap;return{get:function(n,i=0){let r=e.get(n),s;return r===void 0?(s=new ap(t),e.set(n,[s])):i>=r.length?(s=new ap(t),r.push(s)):s=r[i],s},dispose:function(){e=new WeakMap}}}function Ug(t,e,n){let i=new Di,r=new et,s=new et,a=new Yt,o=new Ih({depthPacking:pd}),l=new Ph,h={},c=n.maxTextureSize,d={[si]:We,[We]:si,[Re]:Re},u=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:`void main() {
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
}`}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new $t;_.setAttribute("position",new fe(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let m=new Se(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let v=this.type;function x(b,I){let F=e.update(m);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Xn(r.x,r.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(I,null,F,u,m,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(I,null,F,f,m,null)}function g(b,I,F,P){let N=null,H=F.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(H!==void 0)N=H;else if(N=F.isPointLight===!0?l:o,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let G=N.uuid,Y=I.uuid,z=h[G];z===void 0&&(z={},h[G]=z);let j=z[Y];j===void 0&&(j=N.clone(),z[Y]=j,I.addEventListener("dispose",R)),N=j}if(N.visible=I.visible,N.wireframe=I.wireframe,N.side=P===xn?I.shadowSide!==null?I.shadowSide:I.side:I.shadowSide!==null?I.shadowSide:d[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?0.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,F.isPointLight===!0&&N.isMeshDistanceMaterial===!0)t.properties.get(N).light=F;return N}function M(b,I,F,P,N){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===xn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld);let G=e.update(b),Y=b.material;if(Array.isArray(Y)){let z=G.groups;for(let j=0,J=z.length;j<J;j++){let Q=z[j],tt=Y[Q.materialIndex];if(tt&&tt.visible){let ht=g(b,tt,P,N);b.onBeforeShadow(t,b,I,F,G,ht,Q),t.renderBufferDirect(F,null,G,ht,b,Q),b.onAfterShadow(t,b,I,F,G,ht,Q)}}}else if(Y.visible){let z=g(b,Y,P,N);b.onBeforeShadow(t,b,I,F,G,z,null),t.renderBufferDirect(F,null,G,z,b,null),b.onAfterShadow(t,b,I,F,G,z,null)}}let H=b.children;for(let G=0,Y=H.length;G<Y;G++)M(H[G],I,F,P,N)}function R(b){b.target.removeEventListener("dispose",R);for(let I in h){let F=h[I],P=b.target.uuid;if(P in F)F[P].dispose(),delete F[P]}}this.render=function(b,I,F){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(b.length===0)return;let P=t.getRenderTarget(),N=t.getActiveCubeFace(),H=t.getActiveMipmapLevel(),G=t.state;G.setBlending(ai),G.buffers.depth.getReversed()?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Y=v!==xn&&this.type===xn,z=v===xn&&this.type!==xn;for(let j=0,J=b.length;j<J;j++){let Q=b[j],tt=Q.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;r.copy(tt.mapSize);let ht=tt.getFrameExtents();if(r.multiply(ht),s.copy(tt.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ht.x),r.x=s.x*ht.x,tt.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ht.y),r.y=s.y*ht.y,tt.mapSize.y=s.y)),tt.map===null||Y===!0||z===!0){let $=this.type!==xn?{minFilter:Hn,magFilter:Hn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Xn(r.x,r.y,$),tt.map.texture.name=Q.name+".shadowMap",tt.camera.updateProjectionMatrix()}t.setRenderTarget(tt.map),t.clear();let vt=tt.getViewportCount();for(let $=0;$<vt;$++){let Z=tt.getViewport($);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),G.viewport(a),tt.updateMatrices(Q,$),i=tt.getFrustum(),M(I,F,tt.camera,Q,this.type)}tt.isPointLightShadow!==!0&&this.type===xn&&x(tt,F),tt.needsUpdate=!1}v=this.type,p.needsUpdate=!1,t.setRenderTarget(P,N,H)}}var Ng={[ua]:da,[pa]:ga,[fa]:_a,[Qr]:ma,[da]:ua,[ga]:pa,[_a]:fa,[ma]:Qr};function Dg(t,e){let n=new function(){let y=!1,C=new Yt,L=null,O=new Yt(0,0,0,0);return{setMask:function(B){L===B||y||(t.colorMask(B,B,B,B),L=B)},setLocked:function(B){y=B},setClear:function(B,k,X,rt,dt){dt===!0&&(B*=rt,k*=rt,X*=rt),C.set(B,k,X,rt),O.equals(C)===!1&&(t.clearColor(B,k,X,rt),O.copy(C))},reset:function(){y=!1,L=null,O.set(-1,0,0,0)}}},i=new function(){let y=!1,C=!1,L=null,O=null,B=null;return{setReversed:function(k){if(C!==k){let X=e.get("EXT_clip_control");k?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),C=k;let rt=B;B=null,this.setClear(rt)}},getReversed:function(){return C},setTest:function(k){k?ut(t.DEPTH_TEST):at(t.DEPTH_TEST)},setMask:function(k){L===k||y||(t.depthMask(k),L=k)},setFunc:function(k){if(C&&(k=Ng[k]),O!==k){switch(k){case ua:t.depthFunc(t.NEVER);break;case da:t.depthFunc(t.ALWAYS);break;case pa:t.depthFunc(t.LESS);break;case Qr:t.depthFunc(t.LEQUAL);break;case fa:t.depthFunc(t.EQUAL);break;case ma:t.depthFunc(t.GEQUAL);break;case ga:t.depthFunc(t.GREATER);break;case _a:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}O=k}},setLocked:function(k){y=k},setClear:function(k){B!==k&&(C&&(k=1-k),t.clearDepth(k),B=k)},reset:function(){y=!1,L=null,O=null,B=null,C=!1}}},r=new function(){let y=!1,C=null,L=null,O=null,B=null,k=null,X=null,rt=null,dt=null;return{setTest:function(st){y||(st?ut(t.STENCIL_TEST):at(t.STENCIL_TEST))},setMask:function(st){C===st||y||(t.stencilMask(st),C=st)},setFunc:function(st,lt,Mt){L===st&&O===lt&&B===Mt||(t.stencilFunc(st,lt,Mt),L=st,O=lt,B=Mt)},setOp:function(st,lt,Mt){k===st&&X===lt&&rt===Mt||(t.stencilOp(st,lt,Mt),k=st,X=lt,rt=Mt)},setLocked:function(st){y=st},setClear:function(st){dt!==st&&(t.clearStencil(st),dt=st)},reset:function(){y=!1,C=null,L=null,O=null,B=null,k=null,X=null,rt=null,dt=null}}},s=new WeakMap,a=new WeakMap,o={},l={},h=new WeakMap,c=[],d=null,u=!1,f=null,_=null,m=null,p=null,v=null,x=null,g=null,M=new _t(0,0,0),R=0,b=!1,I=null,F=null,P=null,N=null,H=null,G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,z=0,j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=z>=2);let J=null,Q={},tt=t.getParameter(t.SCISSOR_BOX),ht=t.getParameter(t.VIEWPORT),vt=new Yt().fromArray(tt),$=new Yt().fromArray(ht);function Z(y,C,L,O){let B=new Uint8Array(4),k=t.createTexture();t.bindTexture(y,k),t.texParameteri(y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let X=0;X<L;X++)y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?t.texImage3D(C,0,t.RGBA,1,1,O,0,t.RGBA,t.UNSIGNED_BYTE,B):t.texImage2D(C+X,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,B);return k}let mt={};function ut(y){o[y]!==!0&&(t.enable(y),o[y]=!0)}function at(y){o[y]!==!1&&(t.disable(y),o[y]=!1)}mt[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),mt[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),mt[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),i.setClear(1),r.setClear(0),ut(t.DEPTH_TEST),i.setFunc(Qr),S(!1),A(bl),ut(t.CULL_FACE),w(ai);let it={[dr]:t.FUNC_ADD,[Iu]:t.FUNC_SUBTRACT,[Pu]:t.FUNC_REVERSE_SUBTRACT};it[Uu]=t.MIN,it[Nu]=t.MAX;let Ct={[Du]:t.ZERO,[Ou]:t.ONE,[Fu]:t.SRC_COLOR,[zu]:t.SRC_ALPHA,[Xu]:t.SRC_ALPHA_SATURATE,[ku]:t.DST_COLOR,[Hu]:t.DST_ALPHA,[Bu]:t.ONE_MINUS_SRC_COLOR,[Vu]:t.ONE_MINUS_SRC_ALPHA,[Wu]:t.ONE_MINUS_DST_COLOR,[Gu]:t.ONE_MINUS_DST_ALPHA,[qu]:t.CONSTANT_COLOR,[Yu]:t.ONE_MINUS_CONSTANT_COLOR,[Zu]:t.CONSTANT_ALPHA,[ju]:t.ONE_MINUS_CONSTANT_ALPHA};function w(y,C,L,O,B,k,X,rt,dt,st){if(y!==ai){if(u===!1&&(ut(t.BLEND),u=!0),y===Lu)B=B||C,k=k||L,X=X||O,C===_&&B===v||(t.blendEquationSeparate(it[C],it[B]),_=C,v=B),L===m&&O===p&&k===x&&X===g||(t.blendFuncSeparate(Ct[L],Ct[O],Ct[k],Ct[X]),m=L,p=O,x=k,g=X),rt.equals(M)!==!1&&dt===R||(t.blendColor(rt.r,rt.g,rt.b,dt),M.copy(rt),R=dt),f=y,b=!1;else if(y!==f||st!==b){if(_===dr&&v===dr||(t.blendEquation(t.FUNC_ADD),_=dr,v=dr),st)switch(y){case $r:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cl:t.blendFunc(t.ONE,t.ONE);break;case Rl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ll:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case $r:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ll:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}m=null,p=null,x=null,g=null,M.set(0,0,0),R=0,f=y,b=st}}else u===!0&&(at(t.BLEND),u=!1)}function S(y){I!==y&&(y?t.frontFace(t.CW):t.frontFace(t.CCW),I=y)}function A(y){y!==Au?(ut(t.CULL_FACE),y!==F&&(y===bl?t.cullFace(t.BACK):y===Cu?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):at(t.CULL_FACE),F=y}function D(y,C,L){y?(ut(t.POLYGON_OFFSET_FILL),N===C&&H===L||(t.polygonOffset(C,L),N=C,H=L)):at(t.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:i,stencil:r},enable:ut,disable:at,bindFramebuffer:function(y,C){return l[y]!==C&&(t.bindFramebuffer(y,C),l[y]=C,y===t.DRAW_FRAMEBUFFER&&(l[t.FRAMEBUFFER]=C),y===t.FRAMEBUFFER&&(l[t.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(y,C){let L=c,O=!1;if(y){L=h.get(C),L===void 0&&(L=[],h.set(C,L));let B=y.textures;if(L.length!==B.length||L[0]!==t.COLOR_ATTACHMENT0){for(let k=0,X=B.length;k<X;k++)L[k]=t.COLOR_ATTACHMENT0+k;L.length=B.length,O=!0}}else L[0]!==t.BACK&&(L[0]=t.BACK,O=!0);O&&t.drawBuffers(L)},useProgram:function(y){return d!==y&&(t.useProgram(y),d=y,!0)},setBlending:w,setMaterial:function(y,C){y.side===Re?at(t.CULL_FACE):ut(t.CULL_FACE);let L=y.side===We;C&&(L=!L),S(L),y.blending===$r&&y.transparent===!1?w(ai):w(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),i.setFunc(y.depthFunc),i.setTest(y.depthTest),i.setMask(y.depthWrite),n.setMask(y.colorWrite);let O=y.stencilWrite;r.setTest(O),O&&(r.setMask(y.stencilWriteMask),r.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),r.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),D(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?ut(t.SAMPLE_ALPHA_TO_COVERAGE):at(t.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:A,setLineWidth:function(y){y!==P&&(Y&&t.lineWidth(y),P=y)},setPolygonOffset:D,setScissorTest:function(y){y?ut(t.SCISSOR_TEST):at(t.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=t.TEXTURE0+G-1),J!==y&&(t.activeTexture(y),J=y)},bindTexture:function(y,C,L){L===void 0&&(L=J===null?t.TEXTURE0+G-1:J);let O=Q[L];O===void 0&&(O={type:void 0,texture:void 0},Q[L]=O),O.type===y&&O.texture===C||(J!==L&&(t.activeTexture(L),J=L),t.bindTexture(y,C||mt[y]),O.type=y,O.texture=C)},unbindTexture:function(){let y=Q[J];y!==void 0&&y.type!==void 0&&(t.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{t.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{t.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{t.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{t.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,C){let L=a.get(C);L===void 0&&(L=new WeakMap,a.set(C,L));let O=L.get(y);O===void 0&&(O=t.getUniformBlockIndex(C,y.name),L.set(y,O))},uniformBlockBinding:function(y,C){let L=a.get(C).get(y);s.get(C)!==L&&(t.uniformBlockBinding(C,L,y.__bindingPointIndex),s.set(C,L))},texStorage2D:function(){try{t.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{t.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{t.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{t.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{t.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{t.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){vt.equals(y)===!1&&(t.scissor(y.x,y.y,y.z,y.w),vt.copy(y))},viewport:function(y){$.equals(y)===!1&&(t.viewport(y.x,y.y,y.z,y.w),$.copy(y))},reset:function(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),i.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),o={},J=null,Q={},l={},h=new WeakMap,c=[],d=null,u=!1,f=null,_=null,m=null,p=null,v=null,x=null,g=null,M=new _t(0,0,0),R=0,b=!1,I=null,F=null,P=null,N=null,H=null,vt.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),n.reset(),i.reset(),r.reset()}}}function Og(t,e,n,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new et,c=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function _(w,S){return f?new OffscreenCanvas(w,S):hr("canvas")}function m(w,S,A){let D=1,y=Ct(w);if((y.width>A||y.height>A)&&(D=A/Math.max(y.width,y.height)),D<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let C=Math.floor(D*y.width),L=Math.floor(D*y.height);d===void 0&&(d=_(C,L));let O=S?_(C,L):d;return O.width=C,O.height=L,O.getContext("2d").drawImage(w,0,0,C,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+C+"x"+L+")."),O}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),w}return w}function p(w){return w.generateMipmaps}function v(w){t.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(w,S,A,D,y=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let C=S;if(S===t.RED&&(A===t.FLOAT&&(C=t.R32F),A===t.HALF_FLOAT&&(C=t.R16F),A===t.UNSIGNED_BYTE&&(C=t.R8)),S===t.RED_INTEGER&&(A===t.UNSIGNED_BYTE&&(C=t.R8UI),A===t.UNSIGNED_SHORT&&(C=t.R16UI),A===t.UNSIGNED_INT&&(C=t.R32UI),A===t.BYTE&&(C=t.R8I),A===t.SHORT&&(C=t.R16I),A===t.INT&&(C=t.R32I)),S===t.RG&&(A===t.FLOAT&&(C=t.RG32F),A===t.HALF_FLOAT&&(C=t.RG16F),A===t.UNSIGNED_BYTE&&(C=t.RG8)),S===t.RG_INTEGER&&(A===t.UNSIGNED_BYTE&&(C=t.RG8UI),A===t.UNSIGNED_SHORT&&(C=t.RG16UI),A===t.UNSIGNED_INT&&(C=t.RG32UI),A===t.BYTE&&(C=t.RG8I),A===t.SHORT&&(C=t.RG16I),A===t.INT&&(C=t.RG32I)),S===t.RGB_INTEGER&&(A===t.UNSIGNED_BYTE&&(C=t.RGB8UI),A===t.UNSIGNED_SHORT&&(C=t.RGB16UI),A===t.UNSIGNED_INT&&(C=t.RGB32UI),A===t.BYTE&&(C=t.RGB8I),A===t.SHORT&&(C=t.RGB16I),A===t.INT&&(C=t.RGB32I)),S===t.RGBA_INTEGER&&(A===t.UNSIGNED_BYTE&&(C=t.RGBA8UI),A===t.UNSIGNED_SHORT&&(C=t.RGBA16UI),A===t.UNSIGNED_INT&&(C=t.RGBA32UI),A===t.BYTE&&(C=t.RGBA8I),A===t.SHORT&&(C=t.RGBA16I),A===t.INT&&(C=t.RGBA32I)),S===t.RGB&&A===t.UNSIGNED_INT_5_9_9_9_REV&&(C=t.RGB9_E5),S===t.RGBA){let L=y?uh:Vt.getTransfer(D);A===t.FLOAT&&(C=t.RGBA32F),A===t.HALF_FLOAT&&(C=t.RGBA16F),A===t.UNSIGNED_BYTE&&(C=L===te?t.SRGB8_ALPHA8:t.RGBA8),A===t.UNSIGNED_SHORT_4_4_4_4&&(C=t.RGBA4),A===t.UNSIGNED_SHORT_5_5_5_1&&(C=t.RGB5_A1)}return C!==t.R16F&&C!==t.R32F&&C!==t.RG16F&&C!==t.RG32F&&C!==t.RGBA16F&&C!==t.RGBA32F||e.get("EXT_color_buffer_float"),C}function M(w,S){let A;return w?S===null||S===gr||S===_r?A=t.DEPTH24_STENCIL8:S===li?A=t.DEPTH32F_STENCIL8:S===es&&(A=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===gr||S===_r?A=t.DEPTH_COMPONENT24:S===li?A=t.DEPTH_COMPONENT32F:S===es&&(A=t.DEPTH_COMPONENT16),A}function R(w,S){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Hn&&w.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function b(w){let S=w.target;S.removeEventListener("dispose",b),function(A){let D=i.get(A);if(D.__webglInit===void 0)return;let y=A.source,C=u.get(y);if(C){let L=C[D.__cacheKey];L.usedTimes--,L.usedTimes===0&&F(A),Object.keys(C).length===0&&u.delete(y)}i.remove(A)}(S),S.isVideoTexture&&c.delete(S)}function I(w){let S=w.target;S.removeEventListener("dispose",I),function(A){let D=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(D.__webglFramebuffer[C]))for(let L=0;L<D.__webglFramebuffer[C].length;L++)t.deleteFramebuffer(D.__webglFramebuffer[C][L]);else t.deleteFramebuffer(D.__webglFramebuffer[C]);D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer[C])}else{if(Array.isArray(D.__webglFramebuffer))for(let C=0;C<D.__webglFramebuffer.length;C++)t.deleteFramebuffer(D.__webglFramebuffer[C]);else t.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&t.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&t.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let C=0;C<D.__webglColorRenderbuffer.length;C++)D.__webglColorRenderbuffer[C]&&t.deleteRenderbuffer(D.__webglColorRenderbuffer[C]);D.__webglDepthRenderbuffer&&t.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let y=A.textures;for(let C=0,L=y.length;C<L;C++){let O=i.get(y[C]);O.__webglTexture&&(t.deleteTexture(O.__webglTexture),a.memory.textures--),i.remove(y[C])}i.remove(A)}(S)}function F(w){let S=i.get(w);t.deleteTexture(S.__webglTexture);let A=w.source;delete u.get(A)[S.__cacheKey],a.memory.textures--}let P=0;function N(w,S){let A=i.get(w);if(w.isVideoTexture&&function(D){let y=a.render.frame;c.get(D)!==y&&(c.set(D,y),D.update())}(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&A.__version!==w.version){let D=w.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(D.complete!==!1)return void Q(A,w,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}else w.isExternalTexture&&(A.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,A.__webglTexture,t.TEXTURE0+S)}let H={[fr]:t.REPEAT,[Ma]:t.CLAMP_TO_EDGE,[Sa]:t.MIRRORED_REPEAT},G={[Hn]:t.NEAREST,[Ta]:t.NEAREST_MIPMAP_NEAREST,[Ii]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[mr]:t.LINEAR_MIPMAP_NEAREST,[Gn]:t.LINEAR_MIPMAP_LINEAR},Y={[gd]:t.NEVER,[Sd]:t.ALWAYS,[_d]:t.LESS,[dh]:t.LEQUAL,[vd]:t.EQUAL,[Md]:t.GEQUAL,[xd]:t.GREATER,[yd]:t.NOTEQUAL};function z(w,S){if(S.type!==li||e.has("OES_texture_float_linear")!==!1||S.magFilter!==cn&&S.magFilter!==mr&&S.magFilter!==Ii&&S.magFilter!==Gn&&S.minFilter!==cn&&S.minFilter!==mr&&S.minFilter!==Ii&&S.minFilter!==Gn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,H[S.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,H[S.wrapT]),w!==t.TEXTURE_3D&&w!==t.TEXTURE_2D_ARRAY||t.texParameteri(w,t.TEXTURE_WRAP_R,H[S.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,G[S.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,G[S.minFilter]),S.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Y[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Hn)return;if(S.minFilter!==Ii&&S.minFilter!==Gn)return;if(S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let A=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,A.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function j(w,S){let A=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",b));let D=S.source,y=u.get(D);y===void 0&&(y={},u.set(D,y));let C=function(L){let O=[];return O.push(L.wrapS),O.push(L.wrapT),O.push(L.wrapR||0),O.push(L.magFilter),O.push(L.minFilter),O.push(L.anisotropy),O.push(L.internalFormat),O.push(L.format),O.push(L.type),O.push(L.generateMipmaps),O.push(L.premultiplyAlpha),O.push(L.flipY),O.push(L.unpackAlignment),O.push(L.colorSpace),O.join()}(S);if(C!==w.__cacheKey){y[C]===void 0&&(y[C]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,A=!0),y[C].usedTimes++;let L=y[w.__cacheKey];L!==void 0&&(y[w.__cacheKey].usedTimes--,L.usedTimes===0&&F(S)),w.__cacheKey=C,w.__webglTexture=y[C].texture}return A}function J(w,S,A){return Math.floor(Math.floor(w/A)/S)}function Q(w,S,A){let D=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(D=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(D=t.TEXTURE_3D);let y=j(w,S),C=S.source;n.bindTexture(D,w.__webglTexture,t.TEXTURE0+A);let L=i.get(C);if(C.version!==L.__version||y===!0){n.activeTexture(t.TEXTURE0+A);let O=Vt.getPrimaries(Vt.workingColorSpace),B=S.colorSpace===Pi?null:Vt.getPrimaries(S.colorSpace),k=S.colorSpace===Pi||O===B?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let X=m(S.image,!1,r.maxTextureSize);X=it(S,X);let rt=s.convert(S.format,S.colorSpace),dt=s.convert(S.type),st,lt=g(S.internalFormat,rt,dt,S.colorSpace,S.isVideoTexture);z(D,S);let Mt=S.mipmaps,Rt=S.isVideoTexture!==!0,Ht=L.__version===void 0||y===!0,Wt=C.dataReady,It=R(S,X);if(S.isDepthTexture)lt=M(S.format===is,S.type),Ht&&(Rt?n.texStorage2D(t.TEXTURE_2D,1,lt,X.width,X.height):n.texImage2D(t.TEXTURE_2D,0,lt,X.width,X.height,0,rt,dt,null));else if(S.isDataTexture)if(Mt.length>0){Rt&&Ht&&n.texStorage2D(t.TEXTURE_2D,It,lt,Mt[0].width,Mt[0].height);for(let pt=0,Tt=Mt.length;pt<Tt;pt++)st=Mt[pt],Rt?Wt&&n.texSubImage2D(t.TEXTURE_2D,pt,0,0,st.width,st.height,rt,dt,st.data):n.texImage2D(t.TEXTURE_2D,pt,lt,st.width,st.height,0,rt,dt,st.data);S.generateMipmaps=!1}else Rt?(Ht&&n.texStorage2D(t.TEXTURE_2D,It,lt,X.width,X.height),Wt&&function(pt,Tt,Kt,be){let gt=pt.updateRanges;if(gt.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Kt,be,Tt.data);else{gt.sort((Ue,ve)=>Ue.start-ve.start);let Ot=0;for(let Ue=1;Ue<gt.length;Ue++){let ve=gt[Ot],Xt=gt[Ue],_i=ve.start+ve.count,vi=J(Xt.start,Tt.width,4),xi=J(ve.start,Tt.width,4);Xt.start<=_i+1&&vi===xi&&J(Xt.start+Xt.count-1,Tt.width,4)===vi?ve.count=Math.max(ve.count,Xt.start+Xt.count-ve.start):(++Ot,gt[Ot]=Xt)}gt.length=Ot+1;let Gt=t.getParameter(t.UNPACK_ROW_LENGTH),Zn=t.getParameter(t.UNPACK_SKIP_PIXELS),U=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,Tt.width);for(let Ue=0,ve=gt.length;Ue<ve;Ue++){let Xt=gt[Ue],_i=Math.floor(Xt.start/4),vi=Math.ceil(Xt.count/4),xi=_i%Tt.width,Dr=Math.floor(_i/Tt.width),bs=vi;t.pixelStorei(t.UNPACK_SKIP_PIXELS,xi),t.pixelStorei(t.UNPACK_SKIP_ROWS,Dr),n.texSubImage2D(t.TEXTURE_2D,0,xi,Dr,bs,1,Kt,be,Tt.data)}pt.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Gt),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Zn),t.pixelStorei(t.UNPACK_SKIP_ROWS,U)}}(S,X,rt,dt)):n.texImage2D(t.TEXTURE_2D,0,lt,X.width,X.height,0,rt,dt,X.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Rt&&Ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,It,lt,Mt[0].width,Mt[0].height,X.depth);for(let pt=0,Tt=Mt.length;pt<Tt;pt++)if(st=Mt[pt],S.format!==yn)if(rt!==null)if(Rt){if(Wt)if(S.layerUpdates.size>0){let Kt=Gh(st.width,st.height,S.format,S.type);for(let be of S.layerUpdates){let gt=st.data.subarray(be*Kt/st.data.BYTES_PER_ELEMENT,(be+1)*Kt/st.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pt,0,0,be,st.width,st.height,1,rt,gt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pt,0,0,0,st.width,st.height,X.depth,rt,st.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pt,lt,st.width,st.height,X.depth,0,st.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?Wt&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,pt,0,0,0,st.width,st.height,X.depth,rt,dt,st.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pt,lt,st.width,st.height,X.depth,0,rt,dt,st.data)}else{Rt&&Ht&&n.texStorage2D(t.TEXTURE_2D,It,lt,Mt[0].width,Mt[0].height);for(let pt=0,Tt=Mt.length;pt<Tt;pt++)st=Mt[pt],S.format!==yn?rt!==null?Rt?Wt&&n.compressedTexSubImage2D(t.TEXTURE_2D,pt,0,0,st.width,st.height,rt,st.data):n.compressedTexImage2D(t.TEXTURE_2D,pt,lt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?Wt&&n.texSubImage2D(t.TEXTURE_2D,pt,0,0,st.width,st.height,rt,dt,st.data):n.texImage2D(t.TEXTURE_2D,pt,lt,st.width,st.height,0,rt,dt,st.data)}else if(S.isDataArrayTexture)if(Rt){if(Ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,It,lt,X.width,X.height,X.depth),Wt)if(S.layerUpdates.size>0){let pt=Gh(X.width,X.height,S.format,S.type);for(let Tt of S.layerUpdates){let Kt=X.data.subarray(Tt*pt/X.data.BYTES_PER_ELEMENT,(Tt+1)*pt/X.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Tt,X.width,X.height,1,rt,dt,Kt)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,rt,dt,X.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,lt,X.width,X.height,X.depth,0,rt,dt,X.data);else if(S.isData3DTexture)Rt?(Ht&&n.texStorage3D(t.TEXTURE_3D,It,lt,X.width,X.height,X.depth),Wt&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,rt,dt,X.data)):n.texImage3D(t.TEXTURE_3D,0,lt,X.width,X.height,X.depth,0,rt,dt,X.data);else if(S.isFramebufferTexture){if(Ht)if(Rt)n.texStorage2D(t.TEXTURE_2D,It,lt,X.width,X.height);else{let{width:pt,height:Tt}=X;for(let Kt=0;Kt<It;Kt++)n.texImage2D(t.TEXTURE_2D,Kt,lt,pt,Tt,0,rt,dt,null),pt>>=1,Tt>>=1}}else if(Mt.length>0){if(Rt&&Ht){let pt=Ct(Mt[0]);n.texStorage2D(t.TEXTURE_2D,It,lt,pt.width,pt.height)}for(let pt=0,Tt=Mt.length;pt<Tt;pt++)st=Mt[pt],Rt?Wt&&n.texSubImage2D(t.TEXTURE_2D,pt,0,0,rt,dt,st):n.texImage2D(t.TEXTURE_2D,pt,lt,rt,dt,st);S.generateMipmaps=!1}else if(Rt){if(Ht){let pt=Ct(X);n.texStorage2D(t.TEXTURE_2D,It,lt,pt.width,pt.height)}Wt&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,rt,dt,X)}else n.texImage2D(t.TEXTURE_2D,0,lt,rt,dt,X);p(S)&&v(D),L.__version=C.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function tt(w,S,A,D,y,C){let L=s.convert(A.format,A.colorSpace),O=s.convert(A.type),B=g(A.internalFormat,L,O,A.colorSpace),k=i.get(S),X=i.get(A);if(X.__renderTarget=S,!k.__hasExternalTextures){let rt=Math.max(1,S.width>>C),dt=Math.max(1,S.height>>C);y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY?n.texImage3D(y,C,B,rt,dt,S.depth,0,L,O,null):n.texImage2D(y,C,B,rt,dt,0,L,O,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),at(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,D,y,X.__webglTexture,0,ut(S)):(y===t.TEXTURE_2D||y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,D,y,X.__webglTexture,C),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ht(w,S,A){if(t.bindRenderbuffer(t.RENDERBUFFER,w),S.depthBuffer){let D=S.depthTexture,y=D&&D.isDepthTexture?D.type:null,C=M(S.stencilBuffer,y),L=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,O=ut(S);at(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,O,C,S.width,S.height):A?t.renderbufferStorageMultisample(t.RENDERBUFFER,O,C,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,C,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,w)}else{let D=S.textures;for(let y=0;y<D.length;y++){let C=D[y],L=s.convert(C.format,C.colorSpace),O=s.convert(C.type),B=g(C.internalFormat,L,O,C.colorSpace),k=ut(S);A&&at(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,k,B,S.width,S.height):at(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,k,B,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,B,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function vt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!S.depthTexture||!S.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let A=i.get(S.depthTexture);A.__renderTarget=S,A.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);let D=A.__webglTexture,y=ut(S);if(S.depthTexture.format===Ea)at(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,D,0,y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,D,0);else{if(S.depthTexture.format!==is)throw Error("Unknown depthTexture format");at(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,D,0,y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,D,0)}}function $(w){let S=i.get(w),A=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let D=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),D){let y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,D.removeEventListener("dispose",y)};D.addEventListener("dispose",y),S.__depthDisposeCallback=y}S.__boundDepthTexture=D}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(A)throw Error("target.depthTexture not supported in Cube render targets");let D=w.texture.mipmaps;D&&D.length>0?vt(S.__webglFramebuffer[0],w):vt(S.__webglFramebuffer,w)}else if(A){S.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[D]),S.__webglDepthbuffer[D]===void 0)S.__webglDepthbuffer[D]=t.createRenderbuffer(),ht(S.__webglDepthbuffer[D],w,!1);else{let y=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,C=S.__webglDepthbuffer[D];t.bindRenderbuffer(t.RENDERBUFFER,C),t.framebufferRenderbuffer(t.FRAMEBUFFER,y,t.RENDERBUFFER,C)}}else{let D=w.texture.mipmaps;if(D&&D.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ht(S.__webglDepthbuffer,w,!1);else{let y=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,C=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,C),t.framebufferRenderbuffer(t.FRAMEBUFFER,y,t.RENDERBUFFER,C)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}let Z=[],mt=[];function ut(w){return Math.min(r.maxSamples,w.samples)}function at(w){let S=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function it(w,S){let{colorSpace:A,format:D,type:y}=w;return w.isCompressedTexture===!0||w.isVideoTexture===!0||A!==De&&A!==Pi&&(Vt.getTransfer(A)===te?D===yn&&y===oi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",A)),S}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=function(){let w=P;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),P+=1,w},this.resetTextureUnits=function(){P=0},this.setTexture2D=N,this.setTexture2DArray=function(w,S){let A=i.get(w);w.isRenderTargetTexture===!1&&w.version>0&&A.__version!==w.version?Q(A,w,S):n.bindTexture(t.TEXTURE_2D_ARRAY,A.__webglTexture,t.TEXTURE0+S)},this.setTexture3D=function(w,S){let A=i.get(w);w.isRenderTargetTexture===!1&&w.version>0&&A.__version!==w.version?Q(A,w,S):n.bindTexture(t.TEXTURE_3D,A.__webglTexture,t.TEXTURE0+S)},this.setTextureCube=function(w,S){let A=i.get(w);w.version>0&&A.__version!==w.version?function(D,y,C){if(y.image.length!==6)return;let L=j(D,y),O=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+C);let B=i.get(O);if(O.version!==B.__version||L===!0){n.activeTexture(t.TEXTURE0+C);let k=Vt.getPrimaries(Vt.workingColorSpace),X=y.colorSpace===Pi?null:Vt.getPrimaries(y.colorSpace),rt=y.colorSpace===Pi||k===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let dt=y.isCompressedTexture||y.image[0].isCompressedTexture,st=y.image[0]&&y.image[0].isDataTexture,lt=[];for(let gt=0;gt<6;gt++)lt[gt]=dt||st?st?y.image[gt].image:y.image[gt]:m(y.image[gt],!0,r.maxCubemapSize),lt[gt]=it(y,lt[gt]);let Mt=lt[0],Rt=s.convert(y.format,y.colorSpace),Ht=s.convert(y.type),Wt=g(y.internalFormat,Rt,Ht,y.colorSpace),It=y.isVideoTexture!==!0,pt=B.__version===void 0||L===!0,Tt=O.dataReady,Kt,be=R(y,Mt);if(z(t.TEXTURE_CUBE_MAP,y),dt){It&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Wt,Mt.width,Mt.height);for(let gt=0;gt<6;gt++){Kt=lt[gt].mipmaps;for(let Ot=0;Ot<Kt.length;Ot++){let Gt=Kt[Ot];y.format!==yn?Rt!==null?It?Tt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,0,0,Gt.width,Gt.height,Rt,Gt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,Wt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?Tt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,0,0,Gt.width,Gt.height,Rt,Ht,Gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,Wt,Gt.width,Gt.height,0,Rt,Ht,Gt.data)}}}else{if(Kt=y.mipmaps,It&&pt){Kt.length>0&&be++;let gt=Ct(lt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,be,Wt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(st){It?Tt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,lt[gt].width,lt[gt].height,Rt,Ht,lt[gt].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Wt,lt[gt].width,lt[gt].height,0,Rt,Ht,lt[gt].data);for(let Ot=0;Ot<Kt.length;Ot++){let Gt=Kt[Ot].image[gt].image;It?Tt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,0,0,Gt.width,Gt.height,Rt,Ht,Gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,Wt,Gt.width,Gt.height,0,Rt,Ht,Gt.data)}}else{It?Tt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Rt,Ht,lt[gt]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Wt,Rt,Ht,lt[gt]);for(let Ot=0;Ot<Kt.length;Ot++){let Gt=Kt[Ot];It?Tt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,0,0,Rt,Ht,Gt.image[gt]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,Wt,Rt,Ht,Gt.image[gt])}}}p(y)&&v(t.TEXTURE_CUBE_MAP),B.__version=O.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}(A,w,S):n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+S)},this.rebindTextures=function(w,S,A){let D=i.get(w);S!==void 0&&tt(D.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),A!==void 0&&$(w)},this.setupRenderTarget=function(w){let S=w.texture,A=i.get(w),D=i.get(S);w.addEventListener("dispose",I);let y=w.textures,C=w.isWebGLCubeRenderTarget===!0,L=y.length>1;if(L||(D.__webglTexture===void 0&&(D.__webglTexture=t.createTexture()),D.__version=S.version,a.memory.textures++),C){A.__webglFramebuffer=[];for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0){A.__webglFramebuffer[O]=[];for(let B=0;B<S.mipmaps.length;B++)A.__webglFramebuffer[O][B]=t.createFramebuffer()}else A.__webglFramebuffer[O]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){A.__webglFramebuffer=[];for(let O=0;O<S.mipmaps.length;O++)A.__webglFramebuffer[O]=t.createFramebuffer()}else A.__webglFramebuffer=t.createFramebuffer();if(L)for(let O=0,B=y.length;O<B;O++){let k=i.get(y[O]);k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&at(w)===!1){A.__webglMultisampledFramebuffer=t.createFramebuffer(),A.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,A.__webglMultisampledFramebuffer);for(let O=0;O<y.length;O++){let B=y[O];A.__webglColorRenderbuffer[O]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,A.__webglColorRenderbuffer[O]);let k=s.convert(B.format,B.colorSpace),X=s.convert(B.type),rt=g(B.internalFormat,k,X,B.colorSpace,w.isXRRenderTarget===!0),dt=ut(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,dt,rt,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+O,t.RENDERBUFFER,A.__webglColorRenderbuffer[O])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(A.__webglDepthRenderbuffer=t.createRenderbuffer(),ht(A.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(C){n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture),z(t.TEXTURE_CUBE_MAP,S);for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0)for(let B=0;B<S.mipmaps.length;B++)tt(A.__webglFramebuffer[O][B],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+O,B);else tt(A.__webglFramebuffer[O],w,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);p(S)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(L){for(let O=0,B=y.length;O<B;O++){let k=y[O],X=i.get(k),rt=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(rt,X.__webglTexture),z(rt,k),tt(A.__webglFramebuffer,w,k,t.COLOR_ATTACHMENT0+O,rt,0),p(k)&&v(rt)}n.unbindTexture()}else{let O=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(O=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(O,D.__webglTexture),z(O,S),S.mipmaps&&S.mipmaps.length>0)for(let B=0;B<S.mipmaps.length;B++)tt(A.__webglFramebuffer[B],w,S,t.COLOR_ATTACHMENT0,O,B);else tt(A.__webglFramebuffer,w,S,t.COLOR_ATTACHMENT0,O,0);p(S)&&v(O),n.unbindTexture()}w.depthBuffer&&$(w)},this.updateRenderTargetMipmap=function(w){let S=w.textures;for(let A=0,D=S.length;A<D;A++){let y=S[A];if(p(y)){let C=x(w),L=i.get(y).__webglTexture;n.bindTexture(C,L),v(C),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(at(w)===!1){let{textures:S,width:A,height:D}=w,y=t.COLOR_BUFFER_BIT,C=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,L=i.get(w),O=S.length>1;if(O)for(let k=0;k<S.length;k++)n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,L.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,L.__webglMultisampledFramebuffer);let B=w.texture.mipmaps;B&&B.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,L.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let k=0;k<S.length;k++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(y|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(y|=t.STENCIL_BUFFER_BIT)),O){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,L.__webglColorRenderbuffer[k]);let X=i.get(S[k]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,X,0)}t.blitFramebuffer(0,0,A,D,0,0,A,D,y,t.NEAREST),l===!0&&(Z.length=0,mt.length=0,Z.push(t.COLOR_ATTACHMENT0+k),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Z.push(C),mt.push(C),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Z))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),O)for(let k=0;k<S.length;k++){n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,L.__webglColorRenderbuffer[k]);let X=i.get(S[k]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,L.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,X,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,L.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let S=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=at}function Fg(t,e){return{convert:function(n,i=Pi){let r,s=Vt.getTransfer(i);if(n===oi)return t.UNSIGNED_BYTE;if(n===Pl)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return t.UNSIGNED_SHORT_5_5_5_1;if(n===od)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return t.BYTE;if(n===ad)return t.SHORT;if(n===es)return t.UNSIGNED_SHORT;if(n===Il)return t.INT;if(n===gr)return t.UNSIGNED_INT;if(n===li)return t.FLOAT;if(n===ns)return t.HALF_FLOAT;if(n===ld)return t.ALPHA;if(n===hd)return t.RGB;if(n===yn)return t.RGBA;if(n===Ea)return t.DEPTH_COMPONENT;if(n===is)return t.DEPTH_STENCIL;if(n===cd)return t.RED;if(n===Nl)return t.RED_INTEGER;if(n===ud)return t.RG;if(n===Dl)return t.RG_INTEGER;if(n===Ol)return t.RGBA_INTEGER;if(n===wa||n===ba||n===Aa||n===Ca)if(s===te){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===Fl||n===Bl||n===zl||n===Vl){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Hl||n===Gl||n===kl){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(n===Hl||n===Gl)return s===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kl)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===jl||n===Jl||n===Kl||n===$l||n===Ql||n===th||n===eh||n===nh||n===ih){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(n===Wl)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===th)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eh)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nh)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ih)return s===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Ra||n===rh||n===sh){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(n===Ra)return s===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===dd||n===ah||n===oh||n===lh){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===_r?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}}}class $h extends de{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}class _p{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $h(t.texture);t.depthNear===e.depthNear&&t.depthFar===e.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vp extends Wn{constructor(t,e){super();let n=this,i=null,r=1,s=null,a="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,f=null,_=new _p,m={},p=e.getContextAttributes(),v=null,x=null,g=[],M=[],R=new et,b=null,I=new pe;I.viewport=new Yt;let F=new pe;F.viewport=new Yt;let P=[I,F],N=new Bh,H=null,G=null;function Y($){let Z=M.indexOf($.inputSource);if(Z===-1)return;let mt=g[Z];mt!==void 0&&(mt.update($.inputSource,$.frame,l||s),mt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",j);for(let $=0;$<g.length;$++){let Z=M[$];Z!==null&&(M[$]=null,g[$].disconnect(Z))}H=null,G=null,_.reset();for(let $ in m)delete m[$];t.setRenderTarget(v),u=null,d=null,c=null,i=null,x=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}function j($){for(let Z=0;Z<$.removed.length;Z++){let mt=$.removed[Z],ut=M.indexOf(mt);ut>=0&&(M[ut]=null,g[ut].disconnect(mt))}for(let Z=0;Z<$.added.length;Z++){let mt=$.added[Z],ut=M.indexOf(mt);if(ut===-1){for(let it=0;it<g.length;it++){if(it>=M.length){M.push(mt),ut=it;break}if(M[it]===null){M[it]=mt,ut=it;break}}if(ut===-1)break}let at=g[ut];at&&at.connect(mt)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=g[$];return Z===void 0&&(Z=new os,g[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=g[$];return Z===void 0&&(Z=new os,g[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=g[$];return Z===void 0&&(Z=new os,g[$]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",z),i.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&(c=new XRWebGLBinding(i,e)),c!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,mt=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=p.stencil?is:Ea,mt=p.stencil?_r:gr);let at={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=c.createProjectionLayer(at),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Xn(d.textureWidth,d.textureHeight,{format:yn,type:oi,depthTexture:new Wa(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Z={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Xn(u.framebufferWidth,u.framebufferHeight,{format:yn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),vt.setContext(i),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let J=new T,Q=new T;function tt($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let{near:Z,far:mt}=$;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),N.near=F.near=I.near=Z,N.far=F.far=I.far=mt,H===N.near&&G===N.far||(i.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,G=N.far),N.layers.mask=6|$.layers.mask,I.layers.mask=3&N.layers.mask,F.layers.mask=5&N.layers.mask;let ut=$.parent,at=N.cameras;tt(N,ut);for(let it=0;it<at.length;it++)tt(at[it],ut);at.length===2?function(it,Ct,w){J.setFromMatrixPosition(Ct.matrixWorld),Q.setFromMatrixPosition(w.matrixWorld);let S=J.distanceTo(Q),A=Ct.projectionMatrix.elements,D=w.projectionMatrix.elements,y=A[14]/(A[10]-1),C=A[14]/(A[10]+1),L=(A[9]+1)/A[5],O=(A[9]-1)/A[5],B=(A[8]-1)/A[0],k=(D[8]+1)/D[0],X=y*B,rt=y*k,dt=S/(-B+k),st=dt*-B;if(Ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(st),it.translateZ(dt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),A[10]===-1)it.projectionMatrix.copy(Ct.projectionMatrix),it.projectionMatrixInverse.copy(Ct.projectionMatrixInverse);else{let lt=y+dt,Mt=C+dt,Rt=X-st,Ht=rt+(S-st),Wt=L*C/Mt*lt,It=O*C/Mt*lt;it.projectionMatrix.makePerspective(Rt,Ht,Wt,It,lt,Mt),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}(N,I,F):N.projectionMatrix.copy(I.projectionMatrix),function(it,Ct,w){w===null?it.matrix.copy(Ct.matrixWorld):(it.matrix.copy(w.matrixWorld),it.matrix.invert(),it.matrix.multiply(Ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(Ct.projectionMatrix),it.projectionMatrixInverse.copy(Ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=2*bi*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}($,N,ut)},this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||u!==null)return o},this.setFoveation=function($){o=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function($){return m[$]};let ht=null,vt=new op;vt.setAnimationLoop(function($,Z){if(h=Z.getViewerPose(l||s),f=Z,h!==null){let mt=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let ut=!1;mt.length!==N.cameras.length&&(N.cameras.length=0,ut=!0);for(let it=0;it<mt.length;it++){let Ct=mt[it],w=null;if(u!==null)w=u.getViewport(Ct);else{let A=c.getViewSubImage(d,Ct);w=A.viewport,it===0&&(t.setRenderTargetTextures(x,A.colorTexture,A.depthStencilTexture),t.setRenderTarget(x))}let S=P[it];S===void 0&&(S=new pe,S.layers.enable(it),S.viewport=new Yt,P[it]=S),S.matrix.fromArray(Ct.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(Ct.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(w.x,w.y,w.width,w.height),it===0&&(N.matrix.copy(S.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ut===!0&&N.cameras.push(S)}let at=i.enabledFeatures;if(at&&at.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&c){let it=c.getDepthInformation(mt[0]);it&&it.isValid&&it.texture&&_.init(it,i.renderState)}if(at&&at.includes("camera-access")&&(t.state.unbindTexture(),c))for(let it=0;it<mt.length;it++){let Ct=mt[it].camera;if(Ct){let w=m[Ct];w||(w=new $h,m[Ct]=w);let S=c.getCameraImage(Ct);w.sourceTexture=S}}}for(let mt=0;mt<g.length;mt++){let ut=M[mt],at=g[mt];ut!==null&&at!==void 0&&at.update(ut,Z,l||s)}ht&&ht($,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),f=null}),this.setAnimationLoop=function($){ht=$},this.dispose=function(){}}}var Bi=new hn,Bg=new yt;function zg(t,e){function n(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function i(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,n(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,n(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,n(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===We&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,n(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===We&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,n(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,n(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(r.envMap.value=o,Bi.copy(l),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),r.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(Bi)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,yh(t)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(r,s):s.isMeshToonMaterial?(i(r,s),function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}(r,s)):s.isMeshPhongMaterial?(i(r,s),function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,0.0001)}(r,s)):s.isMeshStandardMaterial?(i(r,s),function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,h.roughnessMapTransform)),c.envMap&&(h.envMapIntensity.value=c.envMapIntensity)}(r,s),s.isMeshPhysicalMaterial&&function(h,c,d){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===We&&h.clearcoatNormalScale.value.negate())),c.dispersion>0&&(h.dispersion.value=c.dispersion),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=d.texture,h.transmissionSamplerSize.value.set(d.width,d.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,h.specularIntensityMapTransform))}(r,s,l)):s.isMeshMatcapMaterial?(i(r,s),function(h,c){c.matcap&&(h.matcap.value=c.matcap)}(r,s)):s.isMeshDepthMaterial?i(r,s):s.isMeshDistanceMaterial?(i(r,s),function(h,c){let d=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(d.matrixWorld),h.nearDistance.value=d.shadow.camera.near,h.farDistance.value=d.shadow.camera.far}(r,s)):s.isMeshNormalMaterial?i(r,s):s.isLineBasicMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,n(c.map,h.mapTransform))}(r,s),s.isLineDashedMaterial&&function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}(r,s)):s.isPointsMaterial?function(h,c,d,u){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*d,h.scale.value=0.5*u,c.map&&(h.map.value=c.map,n(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,n(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(r,s,a,o):s.isSpriteMaterial?function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,n(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,n(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Vg(t,e,n,i){let r={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,f,_){let m=d.value,p=u+"_"+f;if(_[p]===void 0)return _[p]=typeof m=="number"||typeof m=="boolean"?m:m.clone(),!0;{let v=_[p];if(typeof m=="number"||typeof m=="boolean"){if(v!==m)return _[p]=m,!0}else if(v.equals(m)===!1)return v.copy(m),!0}return!1}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function c(d){let u=d.target;u.removeEventListener("dispose",c);let f=a.indexOf(u.__bindingPointIndex);a.splice(f,1),t.deleteBuffer(r[u.id]),delete r[u.id],delete s[u.id]}return{bind:function(d,u){let f=u.program;i.uniformBlockBinding(d,f)},update:function(d,u){let f=r[d.id];f===void 0&&(function(p){let v=p.uniforms,x=0,g=16;for(let R=0,b=v.length;R<b;R++){let I=Array.isArray(v[R])?v[R]:[v[R]];for(let F=0,P=I.length;F<P;F++){let N=I[F],H=Array.isArray(N.value)?N.value:[N.value];for(let G=0,Y=H.length;G<Y;G++){let z=h(H[G]),j=x%g,J=j%z.boundary,Q=j+J;x+=J,Q!==0&&g-Q<z.storage&&(x+=g-Q),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=z.storage}}}let M=x%g;M>0&&(x+=g-M),p.__size=x,p.__cache={}}(d),f=function(p){let v=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();p.__bindingPointIndex=v;let x=t.createBuffer(),g=p.__size,M=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,g,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}(d),r[d.id]=f,d.addEventListener("dispose",c));let _=u.program;i.updateUBOMapping(d,_);let m=e.render.frame;s[d.id]!==m&&(function(p){let v=r[p.id],x=p.uniforms,g=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let M=0,R=x.length;M<R;M++){let b=Array.isArray(x[M])?x[M]:[x[M]];for(let I=0,F=b.length;I<F;I++){let P=b[I];if(l(P,M,I,g)===!0){let N=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],G=0;for(let Y=0;Y<H.length;Y++){let z=H[Y],j=h(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,N+G,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}(d),s[d.id]=m)},dispose:function(){for(let d in r)t.deleteBuffer(r[d]);a=[],r={},s={}}}}class Qh{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=t,u;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=s;let f=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,v=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,M=!1;this._outputColorSpace=un;let R=0,b=0,I=null,F=-1,P=null,N=new Yt,H=new Yt,G=null,Y=new _t(0),z=0,j=e.width,J=e.height,Q=1,tt=null,ht=null,vt=new Yt(0,0,j,J),$=new Yt(0,0,j,J),Z=!1,mt=new Di,ut=!1,at=!1,it=new yt,Ct=new T,w=new Yt,S={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},A=!1;function D(){return I===null?Q:1}let y,C,L,O,B,k,X,rt,dt,st,lt,Mt,Rt,Ht,Wt,It,pt,Tt,Kt,be,gt,Ot,Gt,Zn,U=n;function Ue(E,V){return e.getContext(E,V)}try{let E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bu}`),e.addEventListener("webglcontextlost",_i,!1),e.addEventListener("webglcontextrestored",vi,!1),e.addEventListener("webglcontextcreationerror",xi,!1),U===null){if(U=Ue("webgl2",E),U===null)throw Ue("webgl2")?Error("Error creating WebGL context with your selected attributes."):Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function ve(){y=new Sm(U),y.init(),Ot=new Fg(U,y),C=new _m(U,y,t,Ot),L=new Dg(U,y),C.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),O=new wm(U),B=new wg,k=new Og(U,y,L,B,C,Ot,O),X=new xm(g),rt=new Mm(g),dt=new dm(U),Gt=new mm(U,dt),st=new Tm(U,dt,O,Gt),lt=new Am(U,st,dt,O),Kt=new bm(U,C,k),It=new vm(B),Mt=new Eg(g,X,rt,y,C,Gt,It),Rt=new zg(g,B),Ht=new Ag,Wt=new Pg(y),Tt=new fm(g,X,rt,L,lt,u,o),pt=new Ug(g,lt,C),Zn=new Vg(U,O,C,L),be=new gm(U,y,O),gt=new Em(U,y,O),O.programs=Mt.programs,g.capabilities=C,g.extensions=y,g.properties=B,g.renderLists=Ht,g.shadowMap=pt,g.state=L,g.info=O}ve();let Xt=new vp(g,U);function _i(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function vi(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=O.autoReset,V=pt.enabled,q=pt.autoUpdate,K=pt.needsUpdate,W=pt.type;ve(),O.autoReset=E,pt.enabled=V,pt.autoUpdate=q,pt.needsUpdate=K,pt.type=W}function xi(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dr(E){let V=E.target;V.removeEventListener("dispose",Dr),function(q){(function(K){let W=B.get(K).programs;W!==void 0&&(W.forEach(function(nt){Mt.releaseProgram(nt)}),K.isShaderMaterial&&Mt.releaseShaderCache(K))})(q),B.remove(q)}(V)}function bs(E,V,q){E.transparent===!0&&E.side===Re&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,Rs(E,V,q),E.side=si,E.needsUpdate=!0,Rs(E,V,q),E.side=Re):Rs(E,V,q)}this.xr=Xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(j,J,!1))},this.getSize=function(E){return E.set(j,J)},this.setSize=function(E,V,q=!0){Xt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(j=E,J=V,e.width=Math.floor(E*Q),e.height=Math.floor(V*Q),q===!0&&(e.style.width=E+"px",e.style.height=V+"px"),this.setViewport(0,0,E,V))},this.getDrawingBufferSize=function(E){return E.set(j*Q,J*Q).floor()},this.setDrawingBufferSize=function(E,V,q){j=E,J=V,Q=q,e.width=Math.floor(E*q),e.height=Math.floor(V*q),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(N)},this.getViewport=function(E){return E.copy(vt)},this.setViewport=function(E,V,q,K){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,V,q,K),L.viewport(N.copy(vt).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,V,q,K){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,V,q,K),L.scissor(H.copy($).multiplyScalar(Q).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){L.setScissorTest(Z=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,q=!0){let K=0;if(E){let W=!1;if(I!==null){let nt=I.texture.format;W=nt===Ol||nt===Dl||nt===Nl}if(W){let nt=I.texture.type,ct=nt===oi||nt===gr||nt===es||nt===_r||nt===Pl||nt===Ul,ft=Tt.getClearColor(),xt=Tt.getClearAlpha(),Et=ft.r,bt=ft.g,wt=ft.b;ct?(f[0]=Et,f[1]=bt,f[2]=wt,f[3]=xt,U.clearBufferuiv(U.COLOR,0,f)):(_[0]=Et,_[1]=bt,_[2]=wt,_[3]=xt,U.clearBufferiv(U.COLOR,0,_))}else K|=U.COLOR_BUFFER_BIT}V&&(K|=U.DEPTH_BUFFER_BIT),q&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_i,!1),e.removeEventListener("webglcontextrestored",vi,!1),e.removeEventListener("webglcontextcreationerror",xi,!1),Tt.dispose(),Ht.dispose(),Wt.dispose(),B.dispose(),X.dispose(),rt.dispose(),lt.dispose(),Gt.dispose(),Zn.dispose(),Mt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",Ac),Xt.removeEventListener("sessionend",Cc),yi.stop()},this.renderBufferDirect=function(E,V,q,K,W,nt){V===null&&(V=S);let ct=W.isMesh&&W.matrixWorld.determinant()<0,ft=function(Bt,re,Me,Dt,At){re.isScene!==!0&&(re=S),k.resetTextureUnits();let en=re.fog,zo=Dt.isMeshStandardMaterial?re.environment:null,Ls=I===null?g.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:De,jn=(Dt.isMeshStandardMaterial?rt:X).get(Dt.envMap||zo),dn=Dt.vertexColors===!0&&!!Me.attributes.color&&Me.attributes.color.itemSize===4,qi=!!Me.attributes.tangent&&(!!Dt.normalMap||Dt.anisotropy>0),Cn=!!Me.morphAttributes.position,Vo=!!Me.morphAttributes.normal,Yi=!!Me.morphAttributes.color,Nc=Vn;Dt.toneMapped&&(I!==null&&I.isXRRenderTarget!==!0||(Nc=g.toneMapping));let Dc=Me.morphAttributes.position||Me.morphAttributes.normal||Me.morphAttributes.color,Tf=Dc!==void 0?Dc.length:0,zt=B.get(Dt),Ef=p.state.lights;if(ut===!0&&(at===!0||Bt!==P)){let Ze=Bt===P&&Dt.id===F;It.setState(Dt,Bt,Ze)}let nn=!1;Dt.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==Ef.state.version||zt.outputColorSpace!==Ls||At.isBatchedMesh&&zt.batching===!1?nn=!0:At.isBatchedMesh||zt.batching!==!0?At.isBatchedMesh&&zt.batchingColor===!0&&At.colorTexture===null||At.isBatchedMesh&&zt.batchingColor===!1&&At.colorTexture!==null||At.isInstancedMesh&&zt.instancing===!1?nn=!0:At.isInstancedMesh||zt.instancing!==!0?At.isSkinnedMesh&&zt.skinning===!1?nn=!0:At.isSkinnedMesh||zt.skinning!==!0?At.isInstancedMesh&&zt.instancingColor===!0&&At.instanceColor===null||At.isInstancedMesh&&zt.instancingColor===!1&&At.instanceColor!==null||At.isInstancedMesh&&zt.instancingMorph===!0&&At.morphTexture===null||At.isInstancedMesh&&zt.instancingMorph===!1&&At.morphTexture!==null||zt.envMap!==jn||Dt.fog===!0&&zt.fog!==en?nn=!0:zt.numClippingPlanes===void 0||zt.numClippingPlanes===It.numPlanes&&zt.numIntersection===It.numIntersection?(zt.vertexAlphas!==dn||zt.vertexTangents!==qi||zt.morphTargets!==Cn||zt.morphNormals!==Vo||zt.morphColors!==Yi||zt.toneMapping!==Nc||zt.morphTargetsCount!==Tf)&&(nn=!0):nn=!0:nn=!0:nn=!0:nn=!0:(nn=!0,zt.__version=Dt.version);let Mi=zt.currentProgram;nn===!0&&(Mi=Rs(Dt,re,At));let Oc=!1,Or=!1,Ho=!1,ce=Mi.getUniforms(),Jn=zt.uniforms;if(L.useProgram(Mi.program)&&(Oc=!0,Or=!0,Ho=!0),Dt.id!==F&&(F=Dt.id,Or=!0),Oc||P!==Bt){L.buffers.depth.getReversed()&&Bt.reversedDepth!==!0&&(Bt._reversedDepth=!0,Bt.updateProjectionMatrix()),ce.setValue(U,"projectionMatrix",Bt.projectionMatrix),ce.setValue(U,"viewMatrix",Bt.matrixWorldInverse);let Ze=ce.map.cameraPosition;Ze!==void 0&&Ze.setValue(U,Ct.setFromMatrixPosition(Bt.matrixWorld)),C.logarithmicDepthBuffer&&ce.setValue(U,"logDepthBufFC",2/(Math.log(Bt.far+1)/Math.LN2)),(Dt.isMeshPhongMaterial||Dt.isMeshToonMaterial||Dt.isMeshLambertMaterial||Dt.isMeshBasicMaterial||Dt.isMeshStandardMaterial||Dt.isShaderMaterial)&&ce.setValue(U,"isOrthographic",Bt.isOrthographicCamera===!0),P!==Bt&&(P=Bt,Or=!0,Ho=!0)}if(At.isSkinnedMesh){ce.setOptional(U,At,"bindMatrix"),ce.setOptional(U,At,"bindMatrixInverse");let Ze=At.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),ce.setValue(U,"boneTexture",Ze.boneTexture,k))}At.isBatchedMesh&&(ce.setOptional(U,At,"batchingTexture"),ce.setValue(U,"batchingTexture",At._matricesTexture,k),ce.setOptional(U,At,"batchingIdTexture"),ce.setValue(U,"batchingIdTexture",At._indirectTexture,k),ce.setOptional(U,At,"batchingColorTexture"),At._colorsTexture!==null&&ce.setValue(U,"batchingColorTexture",At._colorsTexture,k));let Go=Me.morphAttributes;Go.position===void 0&&Go.normal===void 0&&Go.color===void 0||Kt.update(At,Me,Mi),(Or||zt.receiveShadow!==At.receiveShadow)&&(zt.receiveShadow=At.receiveShadow,ce.setValue(U,"receiveShadow",At.receiveShadow)),Dt.isMeshGouraudMaterial&&Dt.envMap!==null&&(Jn.envMap.value=jn,Jn.flipEnvMap.value=jn.isCubeTexture&&jn.isRenderTargetTexture===!1?-1:1),Dt.isMeshStandardMaterial&&Dt.envMap===null&&re.environment!==null&&(Jn.envMapIntensity.value=re.environmentIntensity),Or&&(ce.setValue(U,"toneMappingExposure",g.toneMappingExposure),zt.needsLights&&(rn=Ho,(pn=Jn).ambientLightColor.needsUpdate=rn,pn.lightProbe.needsUpdate=rn,pn.directionalLights.needsUpdate=rn,pn.directionalLightShadows.needsUpdate=rn,pn.pointLights.needsUpdate=rn,pn.pointLightShadows.needsUpdate=rn,pn.spotLights.needsUpdate=rn,pn.spotLightShadows.needsUpdate=rn,pn.rectAreaLights.needsUpdate=rn,pn.hemisphereLights.needsUpdate=rn),en&&Dt.fog===!0&&Rt.refreshFogUniforms(Jn,en),Rt.refreshMaterialUniforms(Jn,Dt,Q,J,p.state.transmissionRenderTarget[Bt.id]),vs.upload(U,Pc(zt),Jn,k));var pn,rn;if(Dt.isShaderMaterial&&Dt.uniformsNeedUpdate===!0&&(vs.upload(U,Pc(zt),Jn,k),Dt.uniformsNeedUpdate=!1),Dt.isSpriteMaterial&&ce.setValue(U,"center",At.center),ce.setValue(U,"modelViewMatrix",At.modelViewMatrix),ce.setValue(U,"normalMatrix",At.normalMatrix),ce.setValue(U,"modelMatrix",At.matrixWorld),Dt.isShaderMaterial||Dt.isRawShaderMaterial){let Ze=Dt.uniformsGroups;for(let ko=0,wf=Ze.length;ko<wf;ko++){let Fc=Ze[ko];Zn.update(Fc,Mi),Zn.bind(Fc,Mi)}}return Mi}(E,V,q,K,W);L.setMaterial(K,ct);let xt=q.index,Et=1;if(K.wireframe===!0){if(xt=st.getWireframeAttribute(q),xt===void 0)return;Et=2}let bt=q.drawRange,wt=q.attributes.position,Nt=bt.start*Et,ne=(bt.start+bt.count)*Et;nt!==null&&(Nt=Math.max(Nt,nt.start*Et),ne=Math.min(ne,(nt.start+nt.count)*Et)),xt!==null?(Nt=Math.max(Nt,0),ne=Math.min(ne,xt.count)):wt!=null&&(Nt=Math.max(Nt,0),ne=Math.min(ne,wt.count));let ae=ne-Nt;if(ae<0||ae===1/0)return;let he;Gt.setup(W,K,ft,q,xt);let ie=be;if(xt!==null&&(he=dt.get(xt),ie=gt,ie.setIndex(he)),W.isMesh)K.wireframe===!0?(L.setLineWidth(K.wireframeLinewidth*D()),ie.setMode(U.LINES)):ie.setMode(U.TRIANGLES);else if(W.isLine){let Bt=K.linewidth;Bt===void 0&&(Bt=1),L.setLineWidth(Bt*D()),W.isLineSegments?ie.setMode(U.LINES):W.isLineLoop?ie.setMode(U.LINE_LOOP):ie.setMode(U.LINE_STRIP)}else W.isPoints?ie.setMode(U.POINTS):W.isSprite&&ie.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ai("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(y.get("WEBGL_multi_draw"))ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let{_multiDrawStarts:Bt,_multiDrawCounts:re,_multiDrawCount:Me}=W,Dt=xt?dt.get(xt).bytesPerElement:1,At=B.get(K).currentProgram.getUniforms();for(let en=0;en<Me;en++)At.setValue(U,"_gl_DrawID",en),ie.render(Bt[en]/Dt,re[en])}else if(W.isInstancedMesh)ie.renderInstances(Nt,ae,W.count);else if(q.isInstancedBufferGeometry){let Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,re=Math.min(q.instanceCount,Bt);ie.renderInstances(Nt,ae,re)}else ie.render(Nt,ae)},this.compile=function(E,V,q=null){q===null&&(q=E),p=Wt.get(q),p.init(V),x.push(p),q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let K=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let nt=W.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){let ft=nt[ct];bs(ft,q,W),K.add(ft)}else bs(nt,q,W),K.add(nt)}),p=x.pop(),K},this.compileAsync=function(E,V,q=null){let K=this.compile(E,V,q);return new Promise((W)=>{function nt(){K.forEach(function(ct){B.get(ct).currentProgram.isReady()&&K.delete(ct)}),K.size!==0?setTimeout(nt,10):W(E)}y.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let As=null;function Ac(){yi.stop()}function Cc(){yi.start()}let yi=new op;function Bo(E,V,q,K){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||mt.intersectsSprite(E)){K&&w.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);let nt=lt.update(E),ct=E.material;ct.visible&&m.push(E,nt,ct,q,w.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||mt.intersectsObject(E))){let nt=lt.update(E),ct=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),w.copy(E.boundingSphere.center)):(nt.boundingSphere===null&&nt.computeBoundingSphere(),w.copy(nt.boundingSphere.center)),w.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(ct)){let ft=nt.groups;for(let xt=0,Et=ft.length;xt<Et;xt++){let bt=ft[xt],wt=ct[bt.materialIndex];wt&&wt.visible&&m.push(E,nt,wt,q,w.z,bt)}}else ct.visible&&m.push(E,nt,ct,q,w.z,null)}}let W=E.children;for(let nt=0,ct=W.length;nt<ct;nt++)Bo(W[nt],V,q,K)}function Rc(E,V,q,K){let{opaque:W,transmissive:nt,transparent:ct}=E;p.setupLightsView(q),ut===!0&&It.setGlobalState(g.clippingPlanes,q),K&&L.viewport(N.copy(K)),W.length>0&&Cs(W,V,q),nt.length>0&&Cs(nt,V,q),ct.length>0&&Cs(ct,V,q),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Lc(E,V,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Xn(1,1,{generateMipmaps:!0,type:y.has("EXT_color_buffer_half_float")||y.has("EXT_color_buffer_float")?ns:oi,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));let W=p.state.transmissionRenderTarget[K.id],nt=K.viewport||N;W.setSize(nt.z*g.transmissionResolutionScale,nt.w*g.transmissionResolutionScale);let ct=g.getRenderTarget(),ft=g.getActiveCubeFace(),xt=g.getActiveMipmapLevel();g.setRenderTarget(W),g.getClearColor(Y),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,0.5),g.clear(),A&&Tt.render(q);let Et=g.toneMapping;g.toneMapping=Vn;let bt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),ut===!0&&It.setGlobalState(g.clippingPlanes,K),Cs(E,q,K),k.updateMultisampleRenderTarget(W),k.updateRenderTargetMipmap(W),y.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Nt=0,ne=V.length;Nt<ne;Nt++){let ae=V[Nt],he=ae.object,ie=ae.geometry,Bt=ae.material,re=ae.group;if(Bt.side===Re&&he.layers.test(K.layers)){let Me=Bt.side;Bt.side=We,Bt.needsUpdate=!0,Ic(he,q,K,ie,Bt,re),Bt.side=Me,Bt.needsUpdate=!0,wt=!0}}wt===!0&&(k.updateMultisampleRenderTarget(W),k.updateRenderTargetMipmap(W))}g.setRenderTarget(ct,ft,xt),g.setClearColor(Y,z),bt!==void 0&&(K.viewport=bt),g.toneMapping=Et}function Cs(E,V,q){let K=V.isScene===!0?V.overrideMaterial:null;for(let W=0,nt=E.length;W<nt;W++){let ct=E[W],ft=ct.object,xt=ct.geometry,Et=ct.group,bt=ct.material;bt.allowOverride===!0&&K!==null&&(bt=K),ft.layers.test(q.layers)&&Ic(ft,V,q,xt,bt,Et)}}function Ic(E,V,q,K,W,nt){E.onBeforeRender(g,V,q,K,W,nt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(g,V,q,K,E,nt),W.transparent===!0&&W.side===Re&&W.forceSinglePass===!1?(W.side=We,W.needsUpdate=!0,g.renderBufferDirect(q,V,K,W,E,nt),W.side=si,W.needsUpdate=!0,g.renderBufferDirect(q,V,K,W,E,nt),W.side=Re):g.renderBufferDirect(q,V,K,W,E,nt),E.onAfterRender(g,V,q,K,W,nt)}function Rs(E,V,q){V.isScene!==!0&&(V=S);let K=B.get(E),W=p.state.lights,nt=p.state.shadowsArray,ct=W.state.version,ft=Mt.getParameters(E,W.state,nt,V,q),xt=Mt.getProgramCacheKey(ft),Et=K.programs;K.environment=E.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(E.isMeshStandardMaterial?rt:X).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",Dr),Et=new Map,K.programs=Et);let bt=Et.get(xt);if(bt!==void 0){if(K.currentProgram===bt&&K.lightsStateVersion===ct)return Uc(E,ft),bt}else ft.uniforms=Mt.getUniforms(E),E.onBeforeCompile(ft,g),bt=Mt.acquireProgram(ft,xt),Et.set(xt,bt),K.uniforms=ft.uniforms;let wt=K.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(wt.clippingPlanes=It.uniform),Uc(E,ft),K.needsLights=function(Nt){return Nt.isMeshLambertMaterial||Nt.isMeshToonMaterial||Nt.isMeshPhongMaterial||Nt.isMeshStandardMaterial||Nt.isShadowMaterial||Nt.isShaderMaterial&&Nt.lights===!0}(E),K.lightsStateVersion=ct,K.needsLights&&(wt.ambientLightColor.value=W.state.ambient,wt.lightProbe.value=W.state.probe,wt.directionalLights.value=W.state.directional,wt.directionalLightShadows.value=W.state.directionalShadow,wt.spotLights.value=W.state.spot,wt.spotLightShadows.value=W.state.spotShadow,wt.rectAreaLights.value=W.state.rectArea,wt.ltc_1.value=W.state.rectAreaLTC1,wt.ltc_2.value=W.state.rectAreaLTC2,wt.pointLights.value=W.state.point,wt.pointLightShadows.value=W.state.pointShadow,wt.hemisphereLights.value=W.state.hemi,wt.directionalShadowMap.value=W.state.directionalShadowMap,wt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,wt.spotShadowMap.value=W.state.spotShadowMap,wt.spotLightMatrix.value=W.state.spotLightMatrix,wt.spotLightMap.value=W.state.spotLightMap,wt.pointShadowMap.value=W.state.pointShadowMap,wt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=bt,K.uniformsList=null,bt}function Pc(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=vs.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Uc(E,V){let q=B.get(E);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}yi.setAnimationLoop(function(E){As&&As(E)}),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(E){As=E,Xt.setAnimationLoop(E),E===null?yi.stop():yi.start()},Xt.addEventListener("sessionstart",Ac),Xt.addEventListener("sessionend",Cc),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(V),V=Xt.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,V,I),p=Wt.get(E,x.length),p.init(V),x.push(p),it.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),mt.setFromProjectionMatrix(it,fh,V.reversedDepth),at=this.localClippingEnabled,ut=It.init(this.clippingPlanes,at),m=Ht.get(E,v.length),m.init(),v.push(m),Xt.enabled===!0&&Xt.isPresenting===!0){let nt=g.xr.getDepthSensingMesh();nt!==null&&Bo(nt,V,-1/0,g.sortObjects)}Bo(E,V,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(tt,ht),A=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,A&&Tt.addToRenderList(m,E),this.info.render.frame++,ut===!0&&It.beginShadows();let q=p.state.shadowsArray;pt.render(q,E,V),ut===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset();let{opaque:K,transmissive:W}=m;if(p.setupLights(),V.isArrayCamera){let nt=V.cameras;if(W.length>0)for(let ct=0,ft=nt.length;ct<ft;ct++)Lc(K,W,E,nt[ct]);A&&Tt.render(E);for(let ct=0,ft=nt.length;ct<ft;ct++){let xt=nt[ct];Rc(m,E,xt,xt.viewport)}}else W.length>0&&Lc(K,W,E,V),A&&Tt.render(E),Rc(m,E,V);I!==null&&b===0&&(k.updateMultisampleRenderTarget(I),k.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(g,E,V),Gt.resetDefaultState(),F=-1,P=null,x.pop(),x.length>0?(p=x[x.length-1],ut===!0&&It.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,V,q){let K=B.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),B.get(E.texture).__webglTexture=V,B.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){let q=B.get(E);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};let yf=U.createFramebuffer();this.setRenderTarget=function(E,V=0,q=0){I=E,R=V,b=q;let K=!0,W=null,nt=!1,ct=!1;if(E){let ft=B.get(E);if(ft.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(ft.__webglFramebuffer===void 0)k.setupRenderTarget(E);else if(ft.__hasExternalTextures)k.rebindTextures(E,B.get(E.texture).__webglTexture,B.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let bt=E.depthTexture;if(ft.__boundDepthTexture!==bt){if(bt!==null&&B.has(bt)&&(E.width!==bt.image.width||E.height!==bt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(E)}}let xt=E.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(ct=!0);let Et=B.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Array.isArray(Et[V])?Et[V][q]:Et[V],nt=!0):W=E.samples>0&&k.useMultisampledRTT(E)===!1?B.get(E).__webglMultisampledFramebuffer:Array.isArray(Et)?Et[q]:Et,N.copy(E.viewport),H.copy(E.scissor),G=E.scissorTest}else N.copy(vt).multiplyScalar(Q).floor(),H.copy($).multiplyScalar(Q).floor(),G=Z;if(q!==0&&(W=yf),L.bindFramebuffer(U.FRAMEBUFFER,W)&&K&&L.drawBuffers(E,W),L.viewport(N),L.scissor(H),L.setScissorTest(G),nt){let ft=B.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,ft.__webglTexture,q)}else if(ct){let ft=V;for(let xt=0;xt<E.textures.length;xt++){let Et=B.get(E.textures[xt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+xt,Et.__webglTexture,q,ft)}}else if(E!==null&&q!==0){let ft=B.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,q)}F=-1},this.readRenderTargetPixels=function(E,V,q,K,W,nt,ct,ft=0){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(xt=xt[ct]),xt){L.bindFramebuffer(U.FRAMEBUFFER,xt);try{let Et=E.textures[ft],bt=Et.format,wt=Et.type;if(!C.textureFormatReadable(bt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(wt))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");V>=0&&V<=E.width-K&&q>=0&&q<=E.height-W&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft),U.readPixels(V,q,K,W,Ot.convert(bt),Ot.convert(wt),nt))}finally{let Et=I!==null?B.get(I).__webglFramebuffer:null;L.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,V,q,K,W,nt,ct,ft=0){if(!E||!E.isWebGLRenderTarget)throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=B.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(xt=xt[ct]),xt){if(V>=0&&V<=E.width-K&&q>=0&&q<=E.height-W){L.bindFramebuffer(U.FRAMEBUFFER,xt);let Et=E.textures[ft],bt=Et.format,wt=Et.type;if(!C.textureFormatReadable(bt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(wt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft),U.readPixels(V,q,K,W,Ot.convert(bt),Ot.convert(wt),0);let ne=I!==null?B.get(I).__webglFramebuffer:null;L.bindFramebuffer(U.FRAMEBUFFER,ne);let ae=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Ed(U,ae,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(Nt),U.deleteSync(ae),nt}throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,V=null,q=0){let K=Math.pow(2,-q),W=Math.floor(E.image.width*K),nt=Math.floor(E.image.height*K),ct=V!==null?V.x:0,ft=V!==null?V.y:0;k.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ct,ft,W,nt),L.unbindTexture()};let Mf=U.createFramebuffer(),Sf=U.createFramebuffer();this.copyTextureToTexture=function(E,V,q=null,K=null,W=0,nt=null){let ct,ft,xt,Et,bt,wt,Nt,ne,ae;nt===null&&(W!==0?(Ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=W,W=0):nt=0);let he=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(q!==null)ct=q.max.x-q.min.x,ft=q.max.y-q.min.y,xt=q.isBox3?q.max.z-q.min.z:1,Et=q.min.x,bt=q.min.y,wt=q.isBox3?q.min.z:0;else{let dn=Math.pow(2,-W);ct=Math.floor(he.width*dn),ft=Math.floor(he.height*dn),xt=E.isDataArrayTexture?he.depth:E.isData3DTexture?Math.floor(he.depth*dn):1,Et=0,bt=0,wt=0}K!==null?(Nt=K.x,ne=K.y,ae=K.z):(Nt=0,ne=0,ae=0);let ie=Ot.convert(V.format),Bt=Ot.convert(V.type),re;V.isData3DTexture?(k.setTexture3D(V,0),re=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),re=U.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),re=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);let Me=U.getParameter(U.UNPACK_ROW_LENGTH),Dt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),At=U.getParameter(U.UNPACK_SKIP_PIXELS),en=U.getParameter(U.UNPACK_SKIP_ROWS),zo=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),U.pixelStorei(U.UNPACK_SKIP_ROWS,bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,wt);let Ls=E.isDataArrayTexture||E.isData3DTexture,jn=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){let dn=B.get(E),qi=B.get(V),Cn=B.get(dn.__renderTarget),Vo=B.get(qi.__renderTarget);L.bindFramebuffer(U.READ_FRAMEBUFFER,Cn.__webglFramebuffer),L.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let Yi=0;Yi<xt;Yi++)Ls&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,B.get(E).__webglTexture,W,wt+Yi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,B.get(V).__webglTexture,nt,ae+Yi)),U.blitFramebuffer(Et,bt,ct,ft,Nt,ne,ct,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);L.bindFramebuffer(U.READ_FRAMEBUFFER,null),L.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||B.has(E)){let dn=B.get(E),qi=B.get(V);L.bindFramebuffer(U.READ_FRAMEBUFFER,Mf),L.bindFramebuffer(U.DRAW_FRAMEBUFFER,Sf);for(let Cn=0;Cn<xt;Cn++)Ls?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,dn.__webglTexture,W,wt+Cn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,dn.__webglTexture,W),jn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qi.__webglTexture,nt,ae+Cn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qi.__webglTexture,nt),W!==0?U.blitFramebuffer(Et,bt,ct,ft,Nt,ne,ct,ft,U.COLOR_BUFFER_BIT,U.NEAREST):jn?U.copyTexSubImage3D(re,nt,Nt,ne,ae+Cn,Et,bt,ct,ft):U.copyTexSubImage2D(re,nt,Nt,ne,Et,bt,ct,ft);L.bindFramebuffer(U.READ_FRAMEBUFFER,null),L.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else jn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(re,nt,Nt,ne,ae,ct,ft,xt,ie,Bt,he.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(re,nt,Nt,ne,ae,ct,ft,xt,ie,he.data):U.texSubImage3D(re,nt,Nt,ne,ae,ct,ft,xt,ie,Bt,he):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,nt,Nt,ne,ct,ft,ie,Bt,he.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,nt,Nt,ne,he.width,he.height,ie,he.data):U.texSubImage2D(U.TEXTURE_2D,nt,Nt,ne,ct,ft,ie,Bt,he);U.pixelStorei(U.UNPACK_ROW_LENGTH,Me),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,en),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zo),nt===0&&V.generateMipmaps&&U.generateMipmap(re),L.unbindTexture()},this.copyTextureToTexture3D=function(E,V,q=null,K=null,W=0){return Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,V,q,K,W)},this.initRenderTarget=function(E){B.get(E).__webglFramebuffer===void 0&&k.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?k.setTextureCube(E,0):E.isData3DTexture?k.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?k.setTexture2DArray(E,0):k.setTexture2D(E,0),L.unbindTexture()},this.resetState=function(){R=0,b=0,I=null,L.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fh}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}function tc(t,e){if(e===ch)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===xr||e===rs){let n=t.getIndex();if(n===null){let a=[],o=t.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);t.setIndex(a),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,r=[];if(e===xr)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)if(a%2===0)r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2));else r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a));if(r.length/3!==i)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}class ac extends qn{constructor(t){super(t);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new bp(e)}),this.register(function(e){return new Ap(e)}),this.register(function(e){return new Op(e)}),this.register(function(e){return new Fp(e)}),this.register(function(e){return new Bp(e)}),this.register(function(e){return new Rp(e)}),this.register(function(e){return new Lp(e)}),this.register(function(e){return new Ip(e)}),this.register(function(e){return new Pp(e)}),this.register(function(e){return new wp(e)}),this.register(function(e){return new Up(e)}),this.register(function(e){return new Cp(e)}),this.register(function(e){return new Dp(e)}),this.register(function(e){return new Np(e)}),this.register(function(e){return new Tp(e)}),this.register(function(e){return new zp(e)}),this.register(function(e){return new Vp(e)})}load(t,e,n,i){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let l=ui.extractUrlBase(t);s=ui.resolveURL(l,this.path)}else s=ui.extractUrlBase(t);this.manager.itemStart(t);let a=function(l){if(i)i(l);else console.error(l);r.manager.itemError(t),r.manager.itemEnd(t)},o=new ms(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{r.parse(l,s,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){if(this.pluginCallbacks.indexOf(t)===-1)this.pluginCallbacks.push(t);return this}unregister(t){if(this.pluginCallbacks.indexOf(t)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1);return this}parse(t,e,n,i){let r,s={},a={},o=new TextDecoder;if(typeof t==="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(o.decode(new Uint8Array(t,0,4))===Hp){try{s[Ft.KHR_BINARY_GLTF]=new Gp(t)}catch(c){if(i)i(c);return}r=JSON.parse(s[Ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){if(i)i(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Yp(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let c=this.pluginCallbacks[h](l);if(!c.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");a[c.name]=c,s[c.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let c=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(c){case Ft.KHR_MATERIALS_UNLIT:s[c]=new Ep;break;case Ft.KHR_DRACO_MESH_COMPRESSION:s[c]=new kp(r,this.dracoLoader);break;case Ft.KHR_TEXTURE_TRANSFORM:s[c]=new Wp;break;case Ft.KHR_MESH_QUANTIZATION:s[c]=new Xp;break;default:if(d.indexOf(c)>=0&&a[c]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){let n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function Gg(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}var Ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Tp{constructor(t){this.parser=t,this.name=Ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){let r=e[n];if(r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0)t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,i=e.cache.get(n);if(i)return i;let r=e.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,h=new _t(16777215);if(o.color!==void 0)h.setRGB(o.color[0],o.color[1],o.color[2],De);let c=o.range!==void 0?o.range:0;switch(o.type){case"directional":l=new Oi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new yo(h),l.distance=c;break;case"spot":l=new xo(h),l.distance=c,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,l.angle=o.spot.outerConeAngle,l.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}if(l.position.set(0,0,0),Yn(l,o),o.intensity!==void 0)l.intensity=o.intensity;return l.name=e.createUniqueName(o.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t!=="light")return;return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;if(a===void 0)return null;return this._loadLight(a).then(function(o){return n._getNodeRef(e.cache,a,o)})}}class Ep{constructor(){this.name=Ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Ke}extendParams(t,e,n){let i=[];t.color=new _t(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],De),t.opacity=s[3]}if(r.baseColorTexture!==void 0)i.push(n.assignTexture(t,"map",r.baseColorTexture,un))}return Promise.all(i)}}class wp{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;if(r!==void 0)e.emissiveIntensity=r;return Promise.resolve()}}class bp{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0)e.clearcoat=s.clearcoatFactor;if(s.clearcoatTexture!==void 0)r.push(n.assignTexture(e,"clearcoatMap",s.clearcoatTexture));if(s.clearcoatRoughnessFactor!==void 0)e.clearcoatRoughness=s.clearcoatRoughnessFactor;if(s.clearcoatRoughnessTexture!==void 0)r.push(n.assignTexture(e,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture));if(s.clearcoatNormalTexture!==void 0){if(r.push(n.assignTexture(e,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0){let a=s.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new et(a,a)}}return Promise.all(r)}}class Ap{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_DISPERSION}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Cp{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.iridescenceFactor!==void 0)e.iridescence=s.iridescenceFactor;if(s.iridescenceTexture!==void 0)r.push(n.assignTexture(e,"iridescenceMap",s.iridescenceTexture));if(s.iridescenceIor!==void 0)e.iridescenceIOR=s.iridescenceIor;if(e.iridescenceThicknessRange===void 0)e.iridescenceThicknessRange=[100,400];if(s.iridescenceThicknessMinimum!==void 0)e.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum;if(s.iridescenceThicknessMaximum!==void 0)e.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum;if(s.iridescenceThicknessTexture!==void 0)r.push(n.assignTexture(e,"iridescenceThicknessMap",s.iridescenceThicknessTexture));return Promise.all(r)}}class Rp{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_SHEEN}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];e.sheenColor=new _t(0,0,0),e.sheenRoughness=0,e.sheen=1;let s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){let a=s.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],De)}if(s.sheenRoughnessFactor!==void 0)e.sheenRoughness=s.sheenRoughnessFactor;if(s.sheenColorTexture!==void 0)r.push(n.assignTexture(e,"sheenColorMap",s.sheenColorTexture,un));if(s.sheenRoughnessTexture!==void 0)r.push(n.assignTexture(e,"sheenRoughnessMap",s.sheenRoughnessTexture));return Promise.all(r)}}class Lp{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.transmissionFactor!==void 0)e.transmission=s.transmissionFactor;if(s.transmissionTexture!==void 0)r.push(n.assignTexture(e,"transmissionMap",s.transmissionTexture));return Promise.all(r)}}class Ip{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_VOLUME}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0)r.push(n.assignTexture(e,"thicknessMap",s.thicknessTexture));e.attenuationDistance=s.attenuationDistance||1/0;let a=s.attenuationColor||[1,1,1];return e.attenuationColor=new _t().setRGB(a[0],a[1],a[2],De),Promise.all(r)}}class Pp{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_IOR}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Up{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_SPECULAR}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0)r.push(n.assignTexture(e,"specularIntensityMap",s.specularTexture));let a=s.specularColorFactor||[1,1,1];if(e.specularColor=new _t().setRGB(a[0],a[1],a[2],De),s.specularColorTexture!==void 0)r.push(n.assignTexture(e,"specularColorMap",s.specularColorTexture,un));return Promise.all(r)}}class Np{constructor(t){this.parser=t,this.name=Ft.EXT_MATERIALS_BUMP}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(e.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0)r.push(n.assignTexture(e,"bumpMap",s.bumpTexture));return Promise.all(r)}}class Dp{constructor(t){this.parser=t,this.name=Ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){let n=this.parser.json.materials[t];if(!n.extensions||!n.extensions[this.name])return null;return Xe}extendMaterialParams(t,e){let n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.anisotropyStrength!==void 0)e.anisotropy=s.anisotropyStrength;if(s.anisotropyRotation!==void 0)e.anisotropyRotation=s.anisotropyRotation;if(s.anisotropyTexture!==void 0)r.push(n.assignTexture(e,"anisotropyMap",s.anisotropyTexture));return Promise.all(r)}}class Op{constructor(t){this.parser=t,this.name=Ft.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],s=e.options.ktx2Loader;if(!s)if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return e.loadTextureImage(t,r.source,s)}}class Fp{constructor(t){this.parser=t,this.name=Ft.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let s=r.extensions[e],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);if(l!==null)o=l}return n.loadTextureImage(t,s.source,o)}}class Bp{constructor(t){this.parser=t,this.name=Ft.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;let s=r.extensions[e],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);if(l!==null)o=l}return n.loadTextureImage(t,s.source,o)}}class zp{constructor(t){this.name=Ft.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported)if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return r.then(function(a){let o=i.byteOffset||0,l=i.byteLength||0,h=i.count,c=i.byteStride,d=new Uint8Array(a,o,l);if(s.decodeGltfBufferAsync)return s.decodeGltfBufferAsync(h,c,d,i.mode,i.filter).then(function(u){return u.buffer});else return s.ready.then(function(){let u=new ArrayBuffer(h*c);return s.decodeGltfBuffer(new Uint8Array(u),h,c,d,i.mode,i.filter),u})})}else return null}}class Vp{constructor(t){this.name=Ft.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=e.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Qe.TRIANGLES&&l.mode!==Qe.TRIANGLE_STRIP&&l.mode!==Qe.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=n.extensions[this.name].attributes,a=[],o={};for(let l in s)a.push(this.parser.getDependency("accessor",s[l]).then((h)=>{return o[l]=h,o[l]}));if(a.length<1)return null;return a.push(this.parser.createNodeMesh(t)),Promise.all(a).then((l)=>{let h=l.pop(),c=h.isGroup?h.children:[h],d=l[0].count,u=[];for(let f of c){let _=new yt,m=new T,p=new ye,v=new T(1,1,1),x=new za(f.geometry,f.material,d);for(let g=0;g<d;g++){if(o.TRANSLATION)m.fromBufferAttribute(o.TRANSLATION,g);if(o.ROTATION)p.fromBufferAttribute(o.ROTATION,g);if(o.SCALE)v.fromBufferAttribute(o.SCALE,g);x.setMatrixAt(g,_.compose(m,p,v))}for(let g in o)if(g==="_COLOR_0"){let M=o[g];x.instanceColor=new Ci(M.array,M.itemSize,M.normalized)}else if(g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE")f.geometry.setAttribute(g,o[g]);Qt.prototype.copy.call(x,f),this.parser.assignFinalMaterial(x),u.push(x)}if(h.isGroup)return h.clear(),h.add(...u),h;return u[0]})}}var Hp="glTF",xs=12,xp={JSON:1313821514,BIN:5130562};class Gp{constructor(t){this.name=Ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Hp)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-xs,r=new DataView(t,xs),s=0;while(s<i){let a=r.getUint32(s,!0);s+=4;let o=r.getUint32(s,!0);if(s+=4,o===xp.JSON){let l=new Uint8Array(t,xs+s,a);this.content=n.decode(l)}else if(o===xp.BIN){let l=xs+s;this.body=t.slice(l,l+a)}s+=a}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class kp{constructor(t,e){if(!e)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ft.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,a={},o={},l={};for(let h in s){let c=rc[h]||h.toLowerCase();a[c]=s[h]}for(let h in t.attributes){let c=rc[h]||h.toLowerCase();if(s[h]!==void 0){let d=n.accessors[t.attributes[h]],u=Rr[d.componentType];l[c]=u.name,o[c]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(c,d){i.decodeDracoFile(h,function(u){for(let f in u.attributes){let _=u.attributes[f],m=o[f];if(m!==void 0)_.normalized=m}c(u)},a,l,De,d)})})}}class Wp{constructor(){this.name=Ft.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0)t.channel=e.texCoord;if(e.offset!==void 0)t.offset.fromArray(e.offset);if(e.rotation!==void 0)t.rotation=e.rotation;if(e.scale!==void 0)t.repeat.fromArray(e.scale);return t.needsUpdate=!0,t}}class Xp{constructor(){this.name=Ft.KHR_MESH_QUANTIZATION}}class oc extends ci{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let s=0;s!==i;s++)e[s]=n[r+s];return e}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,h=i-e,c=(n-e)/h,d=c*c,u=d*c,f=t*l,_=f-l,m=-2*u+3*d,p=u-d,v=1-m,x=p-d+c;for(let g=0;g!==a;g++){let M=s[_+g+a],R=s[_+g+o]*h,b=s[f+g+a],I=s[f+g]*h;r[g]=v*M+x*R+m*b+p*I}return r}}var kg=new ye;class qp extends oc{interpolate_(t,e,n,i){let r=super.interpolate_(t,e,n,i);return kg.fromArray(r).normalize().toArray(r),r}}var Qe={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yp={9728:Hn,9729:cn,9984:Ta,9985:mr,9986:Ii,9987:Gn},Mp={33071:Ma,33648:Sa,10497:fr},ec={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wg={CUBICSPLINE:void 0,LINEAR:La,STEP:hh},nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xg(t){if(t.DefaultMaterial===void 0)t.DefaultMaterial=new Er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si});return t.DefaultMaterial}function Vi(t,e,n){for(let i in n.extensions)if(t[i]===void 0)e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i]}function Yn(t,e){if(e.extras!==void 0)if(typeof e.extras==="object")Object.assign(t.userData,e.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras)}function qg(t,e,n){let i=!1,r=!1,s=!1;for(let h=0,c=e.length;h<c;h++){let d=e[h];if(d.POSITION!==void 0)i=!0;if(d.NORMAL!==void 0)r=!0;if(d.COLOR_0!==void 0)s=!0;if(i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);let a=[],o=[],l=[];for(let h=0,c=e.length;h<c;h++){let d=e[h];if(i){let u=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):t.attributes.position;a.push(u)}if(r){let u=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):t.attributes.normal;o.push(u)}if(s){let u=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):t.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(h){let c=h[0],d=h[1],u=h[2];if(i)t.morphAttributes.position=c;if(r)t.morphAttributes.normal=d;if(s)t.morphAttributes.color=u;return t.morphTargetsRelative=!0,t})}function Yg(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Zg(t){let e,n=t.extensions&&t.extensions[Ft.KHR_DRACO_MESH_COMPRESSION];if(n)e="draco:"+n.bufferView+":"+n.indices+":"+ic(n.attributes);else e=t.indices+":"+ic(t.attributes)+":"+t.mode;if(t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+ic(t.targets[i]);return e}function ic(t){let e="",n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function sc(t){switch(t){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jg(t){if(t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0)return"image/webp";if(t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var Jg=new yt;class Yp{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Gg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,s=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let o=a.match(/Version\/(\d+)/);i=n&&o?parseInt(o[1],10):-1,r=a.indexOf("Firefox")>-1,s=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||n&&i<17||r&&s<98)this.textureLoader=new go(this.options.manager);else this.textureLoader=new Mo(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ms(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){let a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return Vi(r,a,i),Yn(a,i),Promise.all(n._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){for(let o of a.scenes)o.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){let s=e[i].joints;for(let a=0,o=s.length;a<o;a++)t[s[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){let s=t[i];if(s.mesh!==void 0){if(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0)n[s.mesh].isSkinnedMesh=!0}if(s.camera!==void 0)this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,e){if(e===void 0)return;if(t.refs[e]===void 0)t.refs[e]=t.uses[e]=0;t.refs[e]++}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let i=n.clone(),r=(s,a)=>{let o=this.associations.get(s);if(o!=null)this.associations.set(a,o);for(let[l,h]of s.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let i=t(e[n]);if(i)return i}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let i=0;i<e.length;i++){let r=t(e[i]);if(r)n.push(r)}return n}getDependency(t,e){let n=t+":"+e,i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,s){return n.getDependency(t,s)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ft.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,s){n.load(ui.resolveURL(e.uri,i.path),r,void 0,function(){s(Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){let e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){let s=ec[i.type],a=Rr[i.componentType],o=i.normalized===!0,l=new a(i.count*s);return Promise.resolve(new fe(l,s,o))}let r=[];if(i.bufferView!==void 0)r.push(this.getDependency("bufferView",i.bufferView));else r.push(null);if(i.sparse!==void 0)r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView));return Promise.all(r).then(function(s){let a=s[0],o=ec[i.type],l=Rr[i.componentType],h=l.BYTES_PER_ELEMENT,c=h*o,d=i.byteOffset||0,u=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0,_,m;if(u&&u!==c){let p=Math.floor(d/u),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=e.cache.get(v);if(!x)_=new l(a,p*u,i.count*u/h),x=new ls(_,u/h),e.cache.add(v,x);m=new Mr(x,o,d%u/h,f)}else{if(a===null)_=new l(i.count*o);else _=new l(a,d,i.count*o);m=new fe(_,o,f)}if(i.sparse!==void 0){let p=ec.SCALAR,v=Rr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,g=i.sparse.values.byteOffset||0,M=new v(s[1],x,i.sparse.count*p),R=new l(s[2],g,i.sparse.count*o);if(a!==null)m=new fe(m.array.slice(),m.itemSize,m.normalized);m.normalized=!1;for(let b=0,I=M.length;b<I;b++){let F=M[b];if(m.setX(F,R[b*o]),o>=2)m.setY(F,R[b*o+1]);if(o>=3)m.setZ(F,R[b*o+2]);if(o>=4)m.setW(F,R[b*o+3]);if(o>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,s=e.images[r],a=this.textureLoader;if(s.uri){let o=n.manager.getHandler(s.uri);if(o!==null)a=o}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let i=this,r=this.json,s=r.textures[t],a=r.images[e],o=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(e,n).then(function(h){if(h.flipY=!1,h.name=s.name||a.name||"",h.name===""&&typeof a.uri==="string"&&a.uri.startsWith("data:image/")===!1)h.name=a.uri;let d=(r.samplers||{})[s.sampler]||{};return h.magFilter=yp[d.magFilter]||cn,h.minFilter=yp[d.minFilter]||Gn,h.wrapS=Mp[d.wrapS]||fr,h.wrapT=Mp[d.wrapT]||fr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Hn&&h.minFilter!==cn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(t,e){let n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then((c)=>c.clone());let s=i.images[t],a=self.URL||self.webkitURL,o=s.uri||"",l=!1;if(s.bufferView!==void 0)o=n.getDependency("bufferView",s.bufferView).then(function(c){l=!0;let d=new Blob([c],{type:s.mimeType});return o=a.createObjectURL(d),o});else if(s.uri===void 0)throw Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(c){return new Promise(function(d,u){let f=d;if(e.isImageBitmapLoader===!0)f=function(_){let m=new de(_);m.needsUpdate=!0,d(m)};e.load(ui.resolveURL(c,r.path),f,void 0,u)})}).then(function(c){if(l===!0)a.revokeObjectURL(o);return Yn(c,s),c.userData.mimeType=s.mimeType||jg(s.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),c});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){let r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0)s=s.clone(),s.channel=n.texCoord;if(r.extensions[Ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let o=r.associations.get(s);s=r.extensions[Ft.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,o)}}if(i!==void 0)s.colorSpace=i;return t[e]=s,s})}assignFinalMaterial(t){let{geometry:e,material:n}=t,i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,s=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,o=this.cache.get(a);if(!o)o=new ds,Fe.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,o.sizeAttenuation=!1,this.cache.add(a,o);n=o}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,o=this.cache.get(a);if(!o)o=new us,Fe.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,this.cache.add(a,o);n=o}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";if(i)a+="derivative-tangents:";if(r)a+="vertex-colors:";if(s)a+="flat-shading:";let o=this.cache.get(a);if(!o){if(o=n.clone(),r)o.vertexColors=!0;if(s)o.flatShading=!0;if(i){if(o.normalScale)o.normalScale.y*=-1;if(o.clearcoatNormalScale)o.clearcoatNormalScale.y*=-1}this.cache.add(a,o),this.associations.set(o,this.associations.get(n))}n=o}t.material=n}getMaterialType(){return Er}loadMaterial(t){let e=this,n=this.json,i=this.extensions,r=n.materials[t],s,a={},o=r.extensions||{},l=[];if(o[Ft.KHR_MATERIALS_UNLIT]){let c=i[Ft.KHR_MATERIALS_UNLIT];s=c.getMaterialType(),l.push(c.extendParams(a,r,e))}else{let c=r.pbrMetallicRoughness||{};if(a.color=new _t(1,1,1),a.opacity=1,Array.isArray(c.baseColorFactor)){let d=c.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],De),a.opacity=d[3]}if(c.baseColorTexture!==void 0)l.push(e.assignTexture(a,"map",c.baseColorTexture,un));if(a.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,a.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0)l.push(e.assignTexture(a,"metalnessMap",c.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",c.metallicRoughnessTexture));s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}if(r.doubleSided===!0)a.side=Re;let h=r.alphaMode||nc.OPAQUE;if(h===nc.BLEND)a.transparent=!0,a.depthWrite=!1;else if(a.transparent=!1,h===nc.MASK)a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:0.5;if(r.normalTexture!==void 0&&s!==Ke){if(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new et(1,1),r.normalTexture.scale!==void 0){let c=r.normalTexture.scale;a.normalScale.set(c,c)}}if(r.occlusionTexture!==void 0&&s!==Ke){if(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0)a.aoMapIntensity=r.occlusionTexture.strength}if(r.emissiveFactor!==void 0&&s!==Ke){let c=r.emissiveFactor;a.emissive=new _t().setRGB(c[0],c[1],c[2],De)}if(r.emissiveTexture!==void 0&&s!==Ke)l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,un));return Promise.all(l).then(function(){let c=new s(a);if(r.name)c.name=r.name;if(Yn(c,r),e.associations.set(c,{materials:t}),r.extensions)Vi(i,c,r);return c})}createUniqueName(t){let e=qt.sanitizeNodeName(t||"");if(e in this.nodeNamesUsed)return e+"_"+ ++this.nodeNamesUsed[e];else return this.nodeNamesUsed[e]=0,e}loadGeometries(t){let e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(o){return Sp(o,a,e)})}let s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a],h=Zg(l),c=i[h];if(c)s.push(c.promise);else{let d;if(l.extensions&&l.extensions[Ft.KHR_DRACO_MESH_COMPRESSION])d=r(l);else d=Sp(new $t,l,e);i[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(t){let e=this,n=this.json,i=this.extensions,r=n.meshes[t],s=r.primitives,a=[];for(let o=0,l=s.length;o<l;o++){let h=s[o].material===void 0?Xg(this.cache):this.getDependency("material",s[o].material);a.push(h)}return a.push(e.loadGeometries(s)),Promise.all(a).then(function(o){let l=o.slice(0,o.length-1),h=o[o.length-1],c=[];for(let u=0,f=h.length;u<f;u++){let _=h[u],m=s[u],p,v=l[u];if(m.mode===Qe.TRIANGLES||m.mode===Qe.TRIANGLE_STRIP||m.mode===Qe.TRIANGLE_FAN||m.mode===void 0){if(p=r.isSkinnedMesh===!0?new Fa(_,v):new Se(_,v),p.isSkinnedMesh===!0)p.normalizeSkinWeights();if(m.mode===Qe.TRIANGLE_STRIP)p.geometry=tc(p.geometry,rs);else if(m.mode===Qe.TRIANGLE_FAN)p.geometry=tc(p.geometry,xr)}else if(m.mode===Qe.LINES)p=new Ha(_,v);else if(m.mode===Qe.LINE_STRIP)p=new Sr(_,v);else if(m.mode===Qe.LINE_LOOP)p=new Ga(_,v);else if(m.mode===Qe.POINTS)p=new ka(_,v);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);if(Object.keys(p.geometry.morphAttributes).length>0)Yg(p,r);if(p.name=e.createUniqueName(r.name||"mesh_"+t),Yn(p,r),m.extensions)Vi(i,p,m);e.assignFinalMaterial(p),c.push(p)}for(let u=0,f=c.length;u<f;u++)e.associations.set(c[u],{meshes:t,primitives:u});if(c.length===1){if(r.extensions)Vi(i,c[0],r);return c[0]}let d=new gn;if(r.extensions)Vi(i,d,r);e.associations.set(d,{meshes:t});for(let u=0,f=c.length;u<f;u++)d.add(c[u]);return d})}loadCamera(t){let e,n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(n.type==="perspective")e=new pe(mh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2000000);else if(n.type==="orthographic")e=new br(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar);if(n.name)e.name=this.createUniqueName(n.name);return Yn(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));if(e.inverseBindMatrices!==void 0)n.push(this.getDependency("accessor",e.inverseBindMatrices));else n.push(null);return Promise.all(n).then(function(i){let r=i.pop(),s=i,a=[],o=[];for(let l=0,h=s.length;l<h;l++){let c=s[l];if(c){a.push(c);let d=new yt;if(r!==null)d.fromArray(r.array,l*16);o.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new cs(a,o)})}loadAnimation(t){let e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,s=[],a=[],o=[],l=[],h=[];for(let c=0,d=i.channels.length;c<d;c++){let u=i.channels[c],f=i.samplers[u.sampler],_=u.target,m=_.node,p=i.parameters!==void 0?i.parameters[f.input]:f.input,v=i.parameters!==void 0?i.parameters[f.output]:f.output;if(_.node===void 0)continue;s.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",v)),l.push(f),h.push(_)}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(h)]).then(function(c){let d=c[0],u=c[1],f=c[2],_=c[3],m=c[4],p=[];for(let v=0,x=d.length;v<x;v++){let g=d[v],M=u[v],R=f[v],b=_[v],I=m[v];if(g===void 0)continue;if(g.updateMatrix)g.updateMatrix();let F=n._createAnimationTracks(g,M,R,b,I);if(F)for(let P=0;P<F.length;P++)p.push(F[P])}return new ur(r,void 0,p)})}createNodeMesh(t){let e=this.json,n=this,i=e.nodes[t];if(i.mesh===void 0)return null;return n.getDependency("mesh",i.mesh).then(function(r){let s=n._getNodeRef(n.meshCache,i.mesh,r);if(i.weights!==void 0)s.traverse(function(a){if(!a.isMesh)return;for(let o=0,l=i.weights.length;o<l;o++)a.morphTargetInfluences[o]=i.weights[o]});return s})}loadNode(t){let e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),s=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)s.push(n.getDependency("node",a[l]));let o=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(s),o]).then(function(l){let h=l[0],c=l[1],d=l[2];if(d!==null)h.traverse(function(u){if(!u.isSkinnedMesh)return;u.bind(d,Jg)});for(let u=0,f=c.length;u<f;u++)h.add(c[u]);return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],s=r.name?i.createUniqueName(r.name):"",a=[],o=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});if(o)a.push(o);if(r.camera!==void 0)a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)}));return i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0)h=new hs;else if(l.length>1)h=new gn;else if(l.length===1)h=l[0];else h=new Qt;if(h!==l[0])for(let c=0,d=l.length;c<d;c++)h.add(l[c]);if(r.name)h.userData.name=r.name,h.name=s;if(Yn(h,r),r.extensions)Vi(n,h,r);if(r.matrix!==void 0){let c=new yt;c.fromArray(r.matrix),h.applyMatrix4(c)}else{if(r.translation!==void 0)h.position.fromArray(r.translation);if(r.rotation!==void 0)h.quaternion.fromArray(r.rotation);if(r.scale!==void 0)h.scale.fromArray(r.scale)}if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let c=i.associations.get(h);i.associations.set(h,{...c})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],i=this,r=new gn;if(n.name)r.name=i.createUniqueName(n.name);if(Yn(r,n),n.extensions)Vi(e,r,n);let s=n.nodes||[],a=[];for(let o=0,l=s.length;o<l;o++)a.push(i.getDependency("node",s[o]));return Promise.all(a).then(function(o){for(let h=0,c=o.length;h<c;h++)r.add(o[h]);let l=(h)=>{let c=new Map;for(let[d,u]of i.associations)if(d instanceof Fe||d instanceof de)c.set(d,u);return h.traverse((d)=>{let u=i.associations.get(d);if(u!=null)c.set(d,u)}),c};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){let s=[],a=t.name?t.name:t.uuid,o=[];if(di[r.path]===di.weights)t.traverse(function(d){if(d.morphTargetInfluences)o.push(d.name?d.name:d.uuid)});else o.push(a);let l;switch(di[r.path]){case di.weights:l=Fn;break;case di.rotation:l=Bn;break;case di.translation:case di.scale:l=zn;break;default:switch(n.itemSize){case 1:l=Fn;break;case 2:case 3:default:l=zn;break}break}let h=i.interpolation!==void 0?Wg[i.interpolation]:La,c=this._getArrayFromAccessor(n);for(let d=0,u=o.length;d<u;d++){let f=new l(o[d]+"."+di[r.path],e.array,c,h);if(i.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(f);s.push(f)}return s}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=sc(e.constructor),i=new Float32Array(e.length);for(let r=0,s=e.length;r<s;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){return new(this instanceof Bn?qp:oc)(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Kg(t,e,n){let i=e.attributes,r=new Le;if(i.POSITION!==void 0){let o=n.json.accessors[i.POSITION],l=o.min,h=o.max;if(l!==void 0&&h!==void 0){if(r.set(new T(l[0],l[1],l[2]),new T(h[0],h[1],h[2])),o.normalized){let c=sc(Rr[o.componentType]);r.min.multiplyScalar(c),r.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new T,l=new T;for(let h=0,c=s.length;h<c;h++){let d=s[h];if(d.POSITION!==void 0){let u=n.json.accessors[d.POSITION],f=u.min,_=u.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),u.normalized){let m=sc(Rr[u.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}t.boundingBox=r;let a=new Oe;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=a}function Sp(t,e,n){let i=e.attributes,r=[];function s(a,o){return n.getDependency("accessor",a).then(function(l){t.setAttribute(o,l)})}for(let a in i){let o=rc[a]||a.toLowerCase();if(o in t.attributes)continue;r.push(s(i[a],o))}if(e.indices!==void 0&&!t.index){let a=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});r.push(a)}if(Vt.workingColorSpace!==De&&"COLOR_0"in i)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Vt.workingColorSpace}" not supported.`);return Yn(t,e),Kg(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?qg(t,e.targets,n):t})}var fi=24,Gi=0.32,lc=document.getElementById("room-canvas"),$g=document.getElementById("room-root"),gc=document.getElementById("room-loading"),_c=document.getElementById("room-error"),Zp=document.getElementById("room-error-message"),jp=document.getElementById("room-status"),Zt=(t,e={})=>{let n={type:t,...e};if(window.webkit?.messageHandlers?.room)window.webkit.messageHandlers.room.postMessage(n)},Be=window.__withSnozzy3DManifest||{},Po=window.__withSnozzy3DAssetURL,Co=window.__withSnozzy3DAssetDataURL,Jt=window.__withSnozzy3DDiagnostic||null,vc=new So,Lo=[],Lr=[],hc=0,cc=null,uc=null,kt=new Map,we=new Map,Uo=null,Ee="",No="typing_loop",Ye=null,ki=null,le,oe,Tn,En,ee,Pe=!1,ze=!1,Ss=!1,xc=0,Qg=performance.now(),Io=null,dc=performance.now(),pc=0,Do=0,sf=null,af=null,An=null,ys=[],Ur=0,yc=[],of=new Map,_e=null,Te=0,lf=0,tn=0,Ir=0,Hi=0,Ts=!1,wn=null,qe=!1,Pr=null,pi=[],bn=null,hf=null,Mc=0.025,Jp={coffee_once:{startFrame:56,endFrame:120,hand:"J_Bip_R_Hand",prop:"Prop_Coffee",companion:"coffee_once_PropMotion"},phone_once:{startFrame:52,endFrame:128,hand:"J_Bip_L_Hand",prop:"Prop_Phone",companion:"phone_once_PropMotion"}},fc=["Index","Middle","Ring","Little"],mc=["L","R"],Ms=0.005,Kp=0.01,t0={typing:[30000,90000],idle:[45000,150000],coffee:[240000,600000],phone:[360000,900000],stand:[480000,1200000]},Sc=[{name:"typing_loop",probability:0.68},{name:"idle_seated_loop",probability:0.22},{name:"coffee_once",probability:0.04},{name:"phone_once",probability:0.04},{name:"stand_stretch_once",probability:0.02}];function e0(t,e){return t+Math.random()*(e-t)}function Es(){if(_e!==null)clearTimeout(_e),_e=null}function Tc(){if(Pr!==null)clearTimeout(Pr),Pr=null}function cf(){Te+=1,Es(),wn=null,tn=0,Ir=0,Ts=!1}function n0(){let t=Math.random(),e=0;for(let n of Sc)if(e+=n.probability,t<e)return n.name;return Sc.at(-1).name}function mi(t=null,e=null){if(Jt&&!qe||Pe||ze||Ye||_e!==null)return;let n=e||wn||n0(),i=kt.has(n)?n:kt.has("typing_loop")?"typing_loop":kt.has("idle_seated_loop")?"idle_seated_loop":null;if(!i)return;wn=i;let r=i==="typing_loop"?"typing":i==="idle_seated_loop"?"idle":i==="coffee_once"?"coffee":i==="phone_once"?"phone":"stand",[s,a]=t0[r];tn=Math.max(0,Number(t??e0(s,a))),lf=performance.now();let o=Te;_e=setTimeout(()=>{if(_e=null,wn=null,Pe||ze||o!==Te)return;if(qe)pi.push("timerFired");if(gi(i,{manual:!1,routine:!0})&&!Ye&&!qe)mi()},tn)}function $p(){if(Jt&&!qe||Pe)return;if(Es(),Te+=1,Hi+=1,tn=0,Ir=0,wn=null,Ye)Ts=!0;else Ts=!1,mi()}function i0(){if(Jt&&!qe||ze||_e===null)return;let t=Math.max(0,performance.now()-lf);tn=Math.max(0,tn-t),Ir=performance.now(),Te+=1,Es()}function r0(){if(Jt&&!qe||ze||Pe||_e!==null)return;mi(tn||null,wn)}function uf(t=40,e=!1,n=null){if(Jt&&!e||Pe||ze||qe||Ye)return!1;let i=Math.max(15,Math.min(5000,Number(t)||40));Tc(),Es(),Te+=1,wn=null,tn=0,Ir=0,qe=!0,pi=[],bn=null;let r={requestedDelayMs:i,scheduled:!1,timerFired:!1,actionBefore:Ee,actionAfter:null,eventsBefore:0,eventsAfter:0,passed:!1},s={pauseSuspends:!1,resumeRestores:!1,remainingMs:0,passed:!1},a={started:!1,resetCountBefore:Hi,resetCountAfter:Hi,generationBefore:Te,generationAfter:Te,generationAdvanced:!1,timerScheduled:!1,timerReordered:!1,pendingName:null,passed:!1},o={scheduled:!1,generationBefore:Te,generationAfter:Te,timerCanceled:!1,timerFiredBefore:0,timerFiredAfter:0,noNewTimerFired:!1,actionBefore:Ee,actionAfter:null,actionUnchanged:!1,oldGenerationSuppressed:!1,callbackSuppressed:!1,passed:!1};mi(i,"typing_loop"),r.scheduled=_e!==null,r.eventsBefore=pi.length,wc(!0),s.remainingMs=tn,s.pauseSuspends=_e===null&&tn>0,wc(!1),s.resumeRestores=_e!==null;let l=()=>{if(Pe||!qe)return;Tc(),r.eventsAfter=pi.length,r.timerFired=pi.slice(r.eventsBefore).includes("timerFired"),r.actionAfter=Ee,r.passed=r.scheduled&&r.timerFired,o.timerFiredAfter=pi.length,o.actionAfter=Ee,o.actionUnchanged=o.actionBefore===o.actionAfter,o.noNewTimerFired=o.timerFiredAfter===o.timerFiredBefore,o.oldGenerationSuppressed=o.generationAfter>o.generationBefore,o.callbackSuppressed=o.noNewTimerFired&&o.actionUnchanged&&_e===null,o.passed=o.scheduled&&o.timerCanceled&&o.generationAfter>o.generationBefore&&o.callbackSuppressed;let c=s.pauseSuspends&&s.resumeRestores,d=a.started&&a.resetCountAfter>a.resetCountBefore&&a.generationAfter>a.generationBefore&&a.timerScheduled&&a.passed,u=o.callbackSuppressed;if(qe=!1,wn=null,tn=0,Ir=0,bn={requestedDelayMs:i,schedule:{...r},pauseResume:{...s,passed:c},manualReorder:{...a,passed:d},teardownCancel:{...o},callbackSuppressed:u,scheduled:r.scheduled,accelerated:a.timerScheduled,pauseSuspends:s.pauseSuspends,resumeRestores:s.resumeRestores,manualReset:d,timerFired:r.timerFired,passed:r.passed&&c&&d&&o.passed&&u},!Jt)mi();if(Zt("routineProbe",{result:bn}),typeof n==="function")n(bn)},h=()=>{if(Pe||!qe)return;let c=Hi,d=Te,u=gi("typing_loop",{manual:!0});a.started=u,a.resetCountBefore=c,a.resetCountAfter=Hi,a.generationBefore=d,a.generationAfter=Te,a.generationAdvanced=Te>d,a.timerScheduled=_e!==null,a.timerReordered=a.timerScheduled&&a.generationAdvanced,a.pendingName=wn,a.passed=u&&Hi===c+1&&Te>d&&_e!==null&&a.timerReordered,Es(),Te+=1,wn=null,tn=0,Ir=0,o.generationBefore=Te,o.actionBefore=Ee;let f=pi.length;mi(i,"typing_loop"),o.scheduled=_e!==null,o.timerFiredBefore=f;let _=_e;cf(),o.generationAfter=Te,o.timerCanceled=_!==null&&_e===null,Pr=setTimeout(l,i+40)};return Pr=setTimeout(()=>{if(Pr=null,Pe||!qe)return;if(pi.slice(r.eventsBefore).includes("timerFired")){h();return}h()},i+40),!0}function df(){if(Io===null)return;try{globalThis.createImageBitmap=Io}catch(t){}Io=null}function pf(t){let e=(t.name||"").toLowerCase();return/hair|eyelash|eyeline|brow/.test(e)}function s0(t){if(!t)return null;return t.colorSpace=un,t.needsUpdate=!0,t}function a0(t){if(!t||t.userData?.phase0Unlit)return t;let e=pf(t),n=s0(t.map||null),i=t.alphaMap||null,r=new Ke({color:t.color?.clone?.()||new _t(16777215),map:n,alphaMap:i,transparent:Boolean(t.transparent)||e,alphaTest:e?0.35:t.alphaTest||0,depthWrite:!0,side:Re});return r.skinning=Boolean(t.skinning)||!0,r.morphTargets=Boolean(t.morphTargets)||!0,r.morphNormals=Boolean(t.morphNormals),r.needsUpdate=!0,r.name=`${t.name||"Material"}_Phase0Unlit`,r.userData.phase0Unlit=!0,r.userData.phase0Character=!0,r.userData.phase0SourceName=t.name||"",r.userData.phase0AlphaMode=e?"MASK(alphaTest=0.35)":t.transparent?"BLEND":"OPAQUE",r}function o0(t){if(!t||t.userData?.phase0Toon)return t;let e=pf(t),n={color:t.color?.clone?.()||new _t(16777215),map:t.map||null,alphaMap:t.alphaMap||null,skinning:Boolean(t.skinning),morphTargets:Boolean(t.morphTargets),morphNormals:Boolean(t.morphNormals)},i=new po(n);return i.name=`${t.name||"Material"}_Phase0Toon`,i.transparent=Boolean(t.transparent)||e,i.alphaTest=e?0.35:t.alphaTest||0,i.depthWrite=!0,i.side=Re,i.userData.phase0Toon=!0,i.userData.phase0SourceName=t.name||"",i.userData.phase0AlphaMode=e?"MASK(alphaTest=0.35)":t.transparent?"BLEND":"OPAQUE",i}function l0(t){return Boolean(t.isSkinnedMesh)||/^(body|face|hair|sleeve)/i.test(t.name||"")}function h0(t){let e=new Map,n=new Map;return t.traverse((i)=>{if(!i.isMesh)return;let s=(Array.isArray(i.material)?i.material:[i.material]).map((a)=>{if(!a)return a;let o=a.uuid||null,l=o?n.get(o):null,h=l||(l0(i)?a0(a):i.userData.phase0Character!==!1?o0(a):a);if(o&&!l)n.set(o,h);if(h)e.set(h.uuid,h);return h});if(i.material=Array.isArray(i.material)?s:s[0],i.isSkinnedMesh)i.frustumCulled=!1}),[...e.values()]}function Qp(t){if(!t?.index)return Math.floor((t?.attributes?.position?.count||0)/3);return Math.floor(t.index.count/3)}function c0(t,e){let n=0,i=0,r=0,s=0,a=0,o=new Set,l=[];t.traverse((m)=>{if(n+=1,m.isBone)s+=1;if(!m.isMesh)return;if(i+=1,r+=Qp(m.geometry),m.morphTargetDictionary)Object.keys(m.morphTargetDictionary).forEach((p)=>o.add(p));if(m.isSkinnedMesh&&m.skeleton)a=Math.max(a,m.skeleton.bones.length);l.push({name:m.name,triangles:Qp(m.geometry),materialCount:Array.isArray(m.material)?m.material.length:1,morphTargetCount:m.morphTargetDictionary?Object.keys(m.morphTargetDictionary).length:0,skinned:Boolean(m.isSkinnedMesh)})});let h=new Le().setFromObject(t),c=h.getSize(new T),d=h.getCenter(new T),u=e.filter((m)=>m.transparent||m.alphaTest>0),f=e.map((m)=>{let p=m.map||null,v=p?.image||null,x=p?.source?.data||null;return{name:m.userData.phase0SourceName||m.name,runtimeName:m.name,type:m.type,role:m.userData.phase0Character?"character":"scene",unlit:Boolean(m.userData.phase0Unlit),map:{present:Boolean(p),uuid:p?.uuid||null,imageName:v?.name||null,imageSourceUUID:p?.source?.uuid||null,imageSourceType:x?.constructor?.name||null,width:v?.width||v?.videoWidth||null,height:v?.height||v?.videoHeight||null,colorSpace:p?.colorSpace||null},alphaMapPresent:Boolean(m.alphaMap),alphaTest:m.alphaTest,transparent:m.transparent,depthWrite:m.depthWrite}}),_=f.filter((m)=>m.role==="character");return{nodeCount:n,meshCount:i,boneCount:s,skeletonBoneCount:a,morphTargetCount:o.size,triangleCount:r,materialCount:e.length,characterMaterialCount:_.length,unlitCharacterMaterialCount:_.filter((m)=>m.unlit).length,characterMaterials:_,materialRuntime:f,alphaMaterialCount:u.length,alphaMaterials:u.map((m)=>({name:m.userData.phase0SourceName||m.name,transparent:m.transparent,alphaTest:m.alphaTest,depthWrite:m.depthWrite,side:m.side===Re?"DoubleSide":"FrontSide",toon:Boolean(m.userData.phase0Toon),unlit:Boolean(m.userData.phase0Unlit),mapPresent:Boolean(m.map),mapColorSpace:m.map?.colorSpace||null,alphaMode:m.userData.phase0AlphaMode||(m.transparent?"BLEND":"MASK")})),meshes:l,bounds:{min:h.min.toArray(),max:h.max.toArray(),size:c.toArray(),center:d.toArray()},rootScale:t.scale.toArray()}}function u0(){let t=oe.getContext(),e=oe.domElement.width,n=oe.domElement.height,i=new Uint8Array(e*n*4);return t.readPixels(0,0,e,n,t.RGBA,t.UNSIGNED_BYTE,i),i}function ff(t,e){if(!t||!e||t.length!==e.length)return{changedPixels:0,meanAbsoluteChannelDiff:0,maxChannelDiff:0};let n=0,i=0,r=0;for(let s=0;s<t.length;s+=4){let a=0;for(let o=0;o<4;o+=1){let l=Math.abs(t[s+o]-e[s+o]);a=Math.max(a,l),i+=l,r=Math.max(r,l)}if(a>2)n+=1}return{changedPixels:n,changedPixelRatio:n/(t.length/4),meanAbsoluteChannelDiff:i/t.length,maxChannelDiff:r}}function bc(t){oe.render(Tn,En);let e=oe.domElement.toDataURL("image/png"),n=u0();if(t==="idle")cc=n,sf=n;if(t==="typing")uc=n,af=n;if(Zt("screenshot",{name:t,dataURL:e}),cc&&uc){let i=ff(cc,uc);Zt("pixelDiff",{pixelDiff:i})}}function Ec(t=null){let e=kt.get("typing_loop");if(!Ur||!e)return;let n=t??(performance.now()-Ur)/1000;if(n>Gi+0.08)return;if(yc.some((i)=>Math.abs(i.elapsedSeconds-n)<0.01))return;yc.push({elapsedSeconds:n,idleWeight:kt.get("idle_seated_loop")?.getEffectiveWeight?.()||0,typingWeight:e.getEffectiveWeight(),idleTimeSeconds:kt.get("idle_seated_loop")?.time||0,typingTimeSeconds:e.time})}function d0(t,e,n,i=null){let r=[...kt.entries()].map(([d,u])=>({name:d,weight:Number(u.getEffectiveWeight?.()||0)})).filter((d)=>d.weight>0.001).sort((d,u)=>u.weight-d.weight),s=r.find((d)=>d.name===t),a=i||null,o=r.filter((d)=>d.name!==t&&d.name!==a),l=a?r.find((d)=>d.name===a):null,h=Boolean(s)&&Math.abs(s.weight-1)<=0.03&&!o.length&&(!a||Boolean(l)),c={action:t,screenshot:e,timeSeconds:n,active:r,mainWeight:s?.weight||0,companion:l?.name||null,companionWeight:l?.weight||0,isolatedPass:h};return ys.push(c),Zt("diagnostic",{phase:"sampleWeights",...c}),c}function mf(t){let e=t.name.lastIndexOf(".");if(e<=0||!ee)return!1;let n=t.name.slice(0,e),i=ee.getObjectByName(n);return Boolean(i?.isBone)}function p0(t){return{sourceClipCount:t.length,clips:t.map((e)=>({name:e.name,durationSeconds:e.duration,trackCount:e.tracks.length,boneTrackCount:e.tracks.filter(mf).length,hasPropTracks:e.tracks.some((n)=>/Prop_|Keyboard|Monitor|Coffee|Phone/.test(n.name)),loop:Boolean(we.get(e.name)?.loop)})),sourceFrameRate:fi}}function f0(){let t=Lo.filter((o)=>o>100),e=Lo.filter((o)=>o<=100),n=[...e].sort((o,l)=>o-l),i=[...Lo].sort((o,l)=>o-l),r=(o,l)=>o.length?o[Math.min(o.length-1,Math.floor(o.length*l))]:0,s=Lr.length>1?Lr.at(-1)-Lr[0]:0,a=e.reduce((o,l)=>o+l,0);return{frames:xc,durationSeconds:s/1000,fps:a>0?e.length*1000/a:0,activeIntervalCount:e.length,warmupExcludedIntervalCount:t.length,warmupExcludedIntervalsMs:t.slice(0,12),frameTimeMs:{min:n[0]||0,median:r(n,0.5),p95:r(n,0.95),max:n.at(-1)||0},rawFrameTimeMs:{min:i[0]||0,median:r(i,0.5),p95:r(i,0.95),max:i.at(-1)||0}}}function m0(){let t=oe?.getContext?.(),e=window.__roomMetrics||{},n=[...we.values()].map((Z)=>({name:Z.name,durationSeconds:Z.duration,trackCount:Z.tracks.length,boneTrackCount:Z.tracks.filter(mf).length,loop:Boolean(we.get(Z.name)?.loop),actionCreated:kt.has(Z.name)})),i=ff(sf,af),r=Be.validation||{},s=Array.isArray(r.requiredClips)?r.requiredClips:[],a=new Set(kt.keys()),o=s.filter((Z)=>!a.has(Z)),l=Number(Be.counts?.boneCount||0),h=Number(Be.counts?.morphTargetCount||0),c=Number(Be.counts?.materialCount||0),d=Number(Be.validation?.maxMaterials??Be.budgets?.maxMaterials),u=Number.isFinite(d)&&e.materialCount<=d,f=["coffee_once","phone_once"].filter((Z)=>a.has(Z)).map((Z)=>`${Z}_PropMotion`).filter((Z)=>a.has(Z)),_=["coffee_once","phone_once"].filter((Z)=>a.has(Z)&&!a.has(`${Z}_PropMotion`)),m=window.__runtimeContactMeasurement||hf||{},p=m.source==="runtimeAnimationSample"&&m.pass===!0&&m.restoredToTyping===!0,v=new Map((Be.clips||[]).map((Z)=>[Z.name,Z])),x=v.get("coffee_once")?.contact||{},g=v.get("phone_once")?.contact||{},M=v.get("typing_loop")||{},R=M.contact||{},b=(Z)=>typeof Z==="number"&&Number.isFinite(Z),I=(Z)=>{let mt=Z?.toleranceMeters,ut=Z?.wristToSocketMinMeters,at=Z?.wristToSocketMaxMeters,it=Z?.grabSampleCount,Ct=Z?.trajectoryMaxMeters;return b(mt)&&mt>0&&b(ut)&&ut>=0&&ut<=mt&&b(at)&&at>=0&&at<=mt&&b(it)&&it>0&&b(Ct)&&Ct>0},F=I(x)&&I(g),P=M.keyboardContact,N=P?.maxFingerTipPlaneErrorMeters,H=P?.sampleCount,G=b(N)&&N<=0.025&&b(H)&&H>0,Y=Boolean(Be.validation?.contactContract)&&F&&G,z=window.__roomCameraContract||{},j=z.source==="manifest"&&Array.isArray(z.position)&&z.position.length===3&&Array.isArray(z.target)&&z.target.length===3&&Number.isFinite(Number(z.fov)),J=!Jt||ys.length>0&&ys.every((Z)=>Z.isolatedPass),Q=f0(),tt=Jt?Number(i.changedPixelRatio||0)>0.00001&&Number(i.maxChannelDiff||0)>2:!0,ht={enabled:!Boolean(Jt),productionOnly:!0,distribution:Sc,timerActive:_e!==null,supportsTimerCancellation:!0,manualResetCount:Hi,pauseSuspends:!0,resumeRestores:!0,supportsDisposeCancellation:!0,disposeCancellationObserved:bn?.teardownCancel?.passed===!0&&bn?.teardownCancel?.callbackSuppressed===!0,probe:bn,state:Pe?"disposed":ze?"paused":Ye?"deferred_for_one_shot":_e!==null?"scheduled":"idle"},vt=ht.productionOnly&&ht.supportsTimerCancellation&&ht.supportsDisposeCancellation&&bn?.passed===!0,$={webgl:Boolean(t),skeleton:e.skeletonBoneCount>=l&&e.boneCount>=l,morphTargets:e.morphTargetCount>=h,materials:e.characterMaterialCount>=Math.min(c,20)&&u,routineScheduler:vt,triangles:e.triangleCount<=Number(r.maxTriangles||200000),requiredClips:o.length===0,propCompanionActions:_.length===0,runtimeContact:p,manifestContact:Y,cameraContract:j,isolatedCaptureActions:J,actionBindings:s.every((Z)=>a.has(Z)),pixelAnimation:tt,activeFrameTiming:Jt?.performance?Q.activeIntervalCount>=5&&Number(Q.frameTimeMs.p95||0)<=100:!0};return{status:Object.values($).every(Boolean)?"PASS":"FAIL",runtime:"WKWebView + vendored Three.js + GLTFLoader",assetURL:Po,loadMilliseconds:performance.now()-Qg,webgl:t?{renderer:t.getParameter(t.RENDERER),vendor:t.getParameter(t.VENDOR),version:t.getParameter(t.VERSION),shadingLanguageVersion:t.getParameter(t.SHADING_LANGUAGE_VERSION)}:null,counts:e,animation:{clips:n,activeAction:Ee,crossfadeSeconds:Gi,crossfadeSamples:yc},camera:z,diagnosticActiveWeights:ys,activeFPS:Jt?.performance?Q.fps:Do,renderLoopFPS:Do,frameTiming:Q,pixelDiff:i,gates:$,failedGates:Object.entries($).filter(([,Z])=>!Z).map(([Z])=>Z),missingClips:o,companionGates:f,companionMissing:_,runtimeContact:m,contact:{contractPass:F,source:m.source||null,runtime:m,typingKeyboardPass:G,contract:Be.validation?.contactContract||null,coffee:x,phone:g,typing:R,keyboardDistanceMeters:N,keyboardSampleCount:H,maxMaterials:d,runtimeMaterialCount:e.materialCount,materialCountBudgetPass:u},manifestExpected:Be.counts||{},routineScheduler:ht,requiredClips:s,textureLoader:window.__roomTextureLoader||null,diagnostics:Jt?{requestedActions:Jt.actions||[],screenshots:Jt.screenshots!==!1,performance:Boolean(Jt.performance),activeWeights:ys}:null}}function Oo(){if(!Jt||An==="done")return;An="done";let t=m0();Zt("report",{report:t}),Zt("done",{report:t})}function gf(){if(Pe)return;if(xc===0)Zt("firstFrame",{width:oe.domElement.width,height:oe.domElement.height});let t=performance.now();if(hc)Lo.push(t-hc);if(hc=t,Lr.push(t),xc+=1,Lr.length>300)Lr.shift();let e=Math.min(vc.getDelta(),0.1);if(!ze){if(le)le.update(e);if(oe.render(Tn,En),pc+=1,t-dc>=1000)Do=pc*1000/(t-dc),pc=0,dc=t,Zt("status",{message:`${Ee||"准备中"} · ${Math.round(Do)} FPS`,action:Ee});if(Ec(),Jt)S0(t)}setTimeout(gf,16.666666666666668)}function _f(t,e=Ee){if(jp)jp.textContent=t;Zt("status",{message:t,action:e})}function Fo(t){let e=String(t||"").trim();return{idle:"idle_seated_loop",typing:"typing_loop",coffee:"coffee_once",phone:"phone_once",stand:"stand_stretch_once",stretch:"stand_stretch_once"}[e]||e}function gi(t,e={}){let n=Fo(t),i=kt.get(n);if(!i)return ws(`动作「${n}」不在当前 GLB 中`),!1;let r=Uo;if(r===i&&i.isRunning()){if(e.manual)$p();return!0}if(Ye&&Ye!==i)Ye.stop(),Ye=null;if(Xi(),i.reset(),we.get(n)?.loop)i.setLoop(vr,1/0).clampWhenFinished=!1;else i.setLoop(kn,1).clampWhenFinished=!0,Ye=i;if(i.setEffectiveWeight(1).play(),r&&r!==i)r.crossFadeTo(i,Gi,!1),Ur=performance.now();if(Uo=i,Ee=n,we.get(n)?.loop)No=n;if(_f(e.manual?`正在${we.get(n)?.label||n}`:we.get(n)?.label||n,n),e.manual)Zt("action",{name:n,manual:!0});let s={coffee_once:"coffee_once_PropMotion",phone_once:"phone_once_PropMotion"}[n];if(s&&kt.has(s))Nr("Prop_Coffee"),Nr("Prop_Phone"),ki=kt.get(s),ki.reset().setLoop(kn,1).setEffectiveWeight(1).play();if(e.manual)$p();return!0}function g0(t){if(t!==Ye)return;Ye=null,Xi();let e=kt.has(No)?No:"typing_loop";if(gi(e,{manual:!1}),Ts)Ts=!1;mi()}function tf(t,e){let n=t.getObjectByName(e);if(!n)return;of.set(e,{position:n.position.clone(),quaternion:n.quaternion.clone(),scale:n.scale.clone()})}function Nr(t){let e=ee?.getObjectByName(t),n=of.get(t);if(!e||!n)return;e.position.copy(n.position),e.quaternion.copy(n.quaternion),e.scale.copy(n.scale),e.updateMatrixWorld(!0)}function Xi(){ki?.stop?.(),ki=null,Nr("Prop_Coffee"),Nr("Prop_Phone")}function Wi(t){return Boolean(t)&&Number.isFinite(t.x)&&Number.isFinite(t.y)&&Number.isFinite(t.z)}function vf(t,e=null){if(!le||!ee)return{pass:!1,reason:"missing_runtime_state"};let n=kt.get(t);if(!n)return{pass:!1,reason:`missing_action:${t}`};if(e&&!kt.has(e))return{pass:!1,reason:`missing_action:${e}`};le.stopAllAction(),kt.forEach((r)=>{r.stop(),r.reset(),r.enabled=!1,r.setEffectiveWeight(0)}),Xi(),n.enabled=!0,n.setLoop(kn,1),n.clampWhenFinished=!0,n.setEffectiveWeight(1).play();let i=null;if(e)i=kt.get(e),i.enabled=!0,i.setLoop(kn,1),i.clampWhenFinished=!0,i.setEffectiveWeight(1).play();return{pass:!0,action:n,companion:i}}function ef(){let t=kt.get("typing_loop");if(!t||!le||!ee)return!1;return le.stopAllAction(),kt.forEach((e)=>{e.stop(),e.reset(),e.enabled=!1,e.setEffectiveWeight(0)}),Xi(),t.enabled=!0,t.setLoop(vr,1/0),t.clampWhenFinished=!1,t.setEffectiveWeight(1).play(),t.time=0,le.update(0),ee.updateMatrixWorld(!0),Uo=t,Ee="typing_loop",No="typing_loop",Ye=null,Ur=0,!0}function nf(t,e){let n={action:t,companion:e.companion,hand:e.hand,prop:e.prop,startFrame:e.startFrame,endFrame:e.endFrame,fps:fi,toleranceMeters:Mc,source:"runtimeAnimationSample",sampleCount:0,maxWorldDistanceMeters:null,minWorldDistanceMeters:null,pass:!1};if(!ee||!le)return{...n,reason:"missing_runtime_state"};let i=ee.getObjectByName(e.hand),r=ee.getObjectByName(e.prop);if(!i||!r)return{...n,reason:`missing_node:${!i?e.hand:e.prop}`};let s=vf(t,e.companion);if(!s.pass)return{...n,reason:s.reason};let a=0,o=1/0,l=[],h=new T,c=new T,d=Number(we.get(t)?.duration);if(!Number.isFinite(d)||d<=0)return{...n,reason:`invalid_duration:${t}`};for(let _=e.startFrame;_<=e.endFrame;_+=1){let m=_/fi;if(!Number.isFinite(m)||m<0||m>d+1/fi)return{...n,reason:`invalid_time:${_}`};if(s.action.time=Math.min(m,d),s.companion)s.companion.time=Math.min(m,d);if(le.update(0),ee.updateMatrixWorld(!0),i.getWorldPosition(h),r.getWorldPosition(c),!Wi(h)||!Wi(c))return{...n,reason:`non_finite_position:${_}`};let p=h.distanceTo(c);if(!Number.isFinite(p))return{...n,reason:`non_finite_distance:${_}`};a=Math.max(a,p),o=Math.min(o,p),l.push({frame:_,timeSeconds:m,worldDistanceMeters:p})}let u=[...kt.entries()].filter(([,_])=>_.getEffectiveWeight()>0.001).map(([_])=>_).sort(),f=u.length===1+(s.companion?1:0)&&u.includes(t)&&(!s.companion||u.includes(e.companion));return{...n,sampleCount:l.length,maxWorldDistanceMeters:a,minWorldDistanceMeters:o,isolatedActions:u,isolatedPass:f,samples:l,pass:f&&l.length===e.endFrame-e.startFrame+1&&a<=Mc}}function _0(t){if(!t)return{pass:!1,reason:"missing_node:Keyboard"};let e=[];if(t.traverse((l)=>{if(l.isMesh&&l.geometry)e.push(l)}),t.isMesh&&t.geometry&&!e.includes(t))e.push(t);if(e.length===0)return{pass:!1,reason:"missing_mesh:Keyboard"};t.updateMatrixWorld(!0);let n=t.getWorldPosition(new T),r=t.getWorldQuaternion(new ye).clone().invert(),s=new T(1/0,1/0,1/0),a=new T(-1/0,-1/0,-1/0),o=new T;for(let l of e){let h=l.geometry;if(!h.boundingBox)h.computeBoundingBox();let c=h.boundingBox;if(!c||!Wi(c.min)||!Wi(c.max))return{pass:!1,reason:`invalid_geometry_bbox:${l.name||"Keyboard"}`};for(let d of[c.min.x,c.max.x])for(let u of[c.min.y,c.max.y])for(let f of[c.min.z,c.max.z]){if(o.set(d,u,f).applyMatrix4(l.matrixWorld).sub(n).applyQuaternion(r),!Wi(o))return{pass:!1,reason:"non_finite_keyboard_bbox"};s.min(o),a.max(o)}}if(![s.x,s.y,s.z,a.x,a.y,a.z].every(Number.isFinite)||a.x<s.x||a.y<s.y||a.z<s.z)return{pass:!1,reason:"invalid_keyboard_basis"};return{pass:!0,origin:n,inverseRotation:r,min:s,max:a,footprint:{minX:s.x-Ms,maxX:a.x+Ms,minY:s.y-Ms,maxY:a.y+Ms},topZ:a.z,meshNames:e.map((l)=>l.name||"Keyboard"),basis:"Keyboard world rotation only; child mesh geometry bbox"}}function v0(t){let e=t?.position?.length?.();if(!Number.isFinite(e)||e<=0)return null;let n=new T(0,e,0).applyMatrix4(t.matrixWorld);return Wi(n)?n:null}function x0(){let t={action:"typing_loop",source:"runtimeAnimationSample",fps:fi,tipMethod:"local +Y × distal bone local offset length",distalBones:mc.flatMap((p)=>fc.map((v)=>`J_Bip_${p}_${v}3`)),footprintPaddingMeters:Ms,topToleranceMeters:Kp,sampleCount:0,frameStart:0,frameEnd:null,pass:!1};if(!ee||!le)return{...t,reason:"missing_runtime_state"};let e=kt.get("typing_loop"),n=ee.getObjectByName("Keyboard");if(!e)return{...t,reason:"missing_action:typing_loop"};if(!n)return{...t,reason:"missing_node:Keyboard"};let i=_0(n);if(!i.pass)return{...t,reason:i.reason};let r={};for(let p of mc){r[p]={};for(let v of fc){let x=`J_Bip_${p}_${v}3`,g=ee.getObjectByName(x);if(!g?.isBone)return{...t,reason:`missing_node:${x}`};let M=g.position.length();if(!Number.isFinite(M)||M<0.005||M>0.05)return{...t,reason:`invalid_bone_length:${x}`};r[p][v]=g}}let s=Number(we.get("typing_loop")?.duration);if(!Number.isFinite(s)||s<=0)return{...t,reason:"invalid_duration:typing_loop"};let a=Math.round(s*fi),o=vf("typing_loop");if(!o.pass)return{...t,reason:o.reason};let l=new T,h=0,c=0,d=0,u=[],f=[];for(let p=0;p<=a;p+=1){let v=p/fi;if(!Number.isFinite(v)||v<0||v>s+1/fi)return{...t,reason:`invalid_time:${p}`,frameEnd:a};e.time=Math.min(v,s),le.update(0),ee.updateMatrixWorld(!0);let x={frame:p,timeSeconds:v,hands:{}},g=!0;for(let M of mc){let R=null;for(let I of fc){let F=r[M][I],P=v0(F);if(!P)return{...t,reason:`non_finite_tip:${p}`,frameEnd:a};l.copy(P);let N=l.clone().sub(i.origin).applyQuaternion(i.inverseRotation);if(!Wi(N))return{...t,reason:`non_finite_keyboard_tip:${p}`,frameEnd:a};let H=Math.abs(N.z-i.topZ),G=Math.max(i.footprint.minX-N.x,N.x-i.footprint.maxX,i.footprint.minY-N.y,N.y-i.footprint.maxY,0),Y={finger:I,tipKeyboardBasis:N.toArray(),topDistanceMeters:H,footprintOverflowMeters:G,withinFootprint:G<=0,withinTopTolerance:H<=Kp},z=Y.withinFootprint&&Y.withinTopTolerance,j=R?.withinFootprint&&R?.withinTopTolerance;if(!R||z&&!j||!j&&H<R.topDistanceMeters)R=Y}let b=Boolean(R?.withinFootprint&&R?.withinTopTolerance);g=g&&b,h=Math.max(h,R?.topDistanceMeters||0),c=Math.max(c,R?.footprintOverflowMeters||0),x.hands[M]={...R,pass:b}}if(g)d+=1;else u.push(p);f.push(x)}let _=[...kt.entries()].filter(([,p])=>p.getEffectiveWeight()>0.001).map(([p])=>p).sort(),m=_.length===1&&_[0]==="typing_loop";return{...t,frameEnd:a,sampleCount:f.length,validFrameCount:d,failedFrames:u,maxFingerTipTopDistanceMeters:h,maxFootprintOverflowMeters:c,isolatedActions:_,isolatedPass:m,keyboardBasis:{min:i.min.toArray(),max:i.max.toArray(),topZ:i.topZ,footprint:i.footprint,meshNames:i.meshNames,basis:i.basis},samples:f,pass:m&&f.length===a+1&&d===f.length}}function y0(){let t={source:"runtimeAnimationSample",pass:!1,restoredToTyping:!1,toleranceMeters:Mc,coffee:null,phone:null,typing:null};try{t.coffee=nf("coffee_once",Jp.coffee_once),t.phone=nf("phone_once",Jp.phone_once),t.typing=x0(),t.restoredToTyping=ef(),t.pass=Boolean(t.coffee?.pass&&t.phone?.pass&&t.typing?.pass&&t.restoredToTyping)}catch(e){t.error=String(e?.message||e),t.pass=!1,t.restoredToTyping=ef()}return hf=t,window.__runtimeContactMeasurement=t,Zt("runtimeContact",{measurement:t}),t}function M0(t){le=new To(ee),we.clear(),kt.clear();let e=Array.isArray(Be.clips)?Be.clips:[];t.animations.forEach((s)=>{let a=e.find((l)=>l.name===s.name)||{name:s.name,loop:/loop/i.test(s.name),label:s.name};we.set(s.name,{...a,duration:s.duration,tracks:s.tracks});let o=le.clipAction(s);o.setLoop(a.loop?vr:kn,a.loop?1/0:1),o.clampWhenFinished=!a.loop,o.enabled=!0,o.setEffectiveWeight(0),kt.set(s.name,o)}),le.addEventListener("finished",(s)=>g0(s.action));let n=p0(t.animations);window.__roomAnimation=n,Zt("setup",{animation:n,counts:window.__roomMetrics});let r=(Jt&&kt.has("idle_seated_loop")?"idle_seated_loop":null)||(kt.has("typing_loop")?"typing_loop":t.animations[0]?.name||"");if(!r||!gi(r))throw Error("GLB 没有可播放动作");if(y0(),window.__roomStartedAt=performance.now(),Jt)T0();else setTimeout(()=>{if(le)le.setTime(0);ee.updateMatrixWorld(!0),oe.render(Tn,En)},16),mi();window.__roomReady=!0,gc?.classList.add("hidden"),Zt("ready",{counts:window.__roomMetrics,animation:n}),_f("已就绪 · 正在打字",Ee)}function S0(t){if(!Jt||An==="done")return;let e=t-(Ur||t);if(An==="idle")return;if(An==="typing"&&e>850)if(bc("typing"),(Array.isArray(Jt.actions)?Jt.actions:[]).length>0)xf(0);else Oo()}function Ro(t,e,n=t){if(!kt.has(t))return!1;le.stopAllAction(),kt.forEach((s)=>{s.stop(),s.reset(),s.enabled=!1,s.setEffectiveWeight(0)}),Xi();let i=kt.get(t);i.enabled=!0,i.setLoop(we.get(t)?.loop?vr:kn,we.get(t)?.loop?1/0:1),i.clampWhenFinished=!we.get(t)?.loop,i.setEffectiveWeight(1).play(),Uo=i,Ee=t;let r={coffee_once:"coffee_once_PropMotion",phone_once:"phone_once_PropMotion"}[t];if(r&&kt.has(r)){let s=kt.get(r);s.enabled=!0,s.setLoop(kn,1).clampWhenFinished=!0,s.setEffectiveWeight(1).play(),ki=s}if(i.time=Math.max(0,Math.min(e,Number(we.get(t)?.duration||1))),ki)ki.time=i.time;return le.update(0),ee.updateMatrixWorld(!0),oe.render(Tn,En),d0(t,n,i.time,r),bc(n),!0}function T0(){An="deterministic";let t=kt.has("idle_seated_loop")?"idle_seated_loop":Ee,e=kt.has("typing_loop")?"typing_loop":Ee;if(!t||!e){ws("诊断缺少 idle/typing 动作");return}Ro(t,0.22,"idle"),gi(e,{manual:!0}),Ur=performance.now(),le.update(Gi*0.5),Ec(Gi*0.5),le.update(Gi*0.5),Ec(Gi),Ro(e,1.85,"typing"),(Array.isArray(Jt?.actions)?Jt.actions:[]).forEach((r)=>{let s=Fo(r),a=Number(we.get(s)?.duration||1),o=s==="coffee_once"?Math.min(a*0.55,a-0.05):s==="phone_once"?Math.min(a*0.5,a-0.05):s==="stand_stretch_once"?Math.min(a*0.53,a-0.05):Math.min(a*0.45,a-0.05);Ro(s,o,s),Xi(),Nr("Prop_Coffee"),Nr("Prop_Phone")}),Ro(e,0.15,"typing_return"),Xi();let i=()=>{if(Pe)return;if(An="routineProbe",uf(40,!0,()=>{if(!Pe)Oo()}))return;bn={requestedDelayMs:40,schedule:{scheduled:!1,timerFired:!1,passed:!1},pauseResume:{pauseSuspends:!1,resumeRestores:!1,passed:!1},manualReorder:{started:!1,timerScheduled:!1,passed:!1},teardownCancel:{scheduled:!1,timerCanceled:!1,callbackSuppressed:!1,passed:!1},callbackSuppressed:!1,scheduled:!1,accelerated:!1,pauseSuspends:!1,resumeRestores:!1,manualReset:!1,timerFired:!1,passed:!1},Zt("routineProbe",{result:bn}),Oo()};if(Jt?.performance)An="performance",setTimeout(()=>{i()},2200);else i()}function E0(t){switch(Fo(t)){case"coffee_once":return 2900;case"phone_once":return 2400;case"stand_stretch_once":return 4200;default:return 1100}}function xf(t){let e=Array.isArray(Jt?.actions)?Jt.actions:[];if(t>=e.length){Zt("diagnostic",{phase:"done"}),Oo();return}let n=Fo(e[t]);Zt("diagnostic",{phase:"start",index:t,name:n}),An=`action:${t}:playing`,gi(n,{manual:!0});let i=E0(n),r=Number(we.get(n)?.duration||1)*1000;setTimeout(()=>{if(Pe)return;Zt("diagnostic",{phase:"capture",index:t,name:n}),bc(n),Zt("diagnostic",{phase:"afterCapture",index:t,name:n}),An=`action:${t}:captured`},i),setTimeout(()=>{if(Pe)return;Zt("diagnostic",{phase:"next",index:t,name:n}),xf(t+1)},Math.max(i,r)+450)}function w0(){let t=Ss?1:Math.min(window.devicePixelRatio||1,2);oe?.setPixelRatio(t)}function wc(t){let e=Boolean(t);if(e===ze)return;if(e)i0(),ze=!0,vc.stop();else ze=!1,vc.start(),r0();$g?.classList.toggle("paused",ze),Zt("status",{paused:ze,lowPower:Ss,message:ze?"已暂停":Ee})}function b0(){let t=Be.camera||Be.room?.camera||null;if(t?.position&&t?.target){let e=(n)=>[Number(n[0]),Number(n[2]),-Number(n[1])];return{position:e(t.position),target:e(t.target),fov:Number(t.fovDegrees||t.fov||32),source:"manifest"}}return{position:[2.88,2.35,4.05],target:[0,1.02,0.18],fov:31,source:"Blender authored fallback"}}function A0(){let t=b0();return En=new pe(t.fov,window.innerWidth/window.innerHeight,0.01,100),En.position.fromArray(t.position),En.lookAt(new T().fromArray(t.target)),En.updateProjectionMatrix(),window.__roomCameraContract=t,t}function C0(t){Ss=Boolean(t),w0(),Zt("status",{paused:ze,lowPower:Ss,message:Ss?"省电模式":Ee})}function ws(t){let e=String(t||"3D 房间加载失败");if(gc)gc.classList.add("hidden");if(_c)_c.classList.remove("hidden");if(Zp)Zp.textContent=e;Zt("error",{message:e})}function R0(){if(Pe)return;Pe=!0,cf(),Tc(),qe=!1,le?.stopAllAction(),ee?.traverse((t)=>{if(t.geometry?.dispose)t.geometry.dispose();(Array.isArray(t.material)?t.material:[t.material]).forEach((n)=>n?.dispose?.())}),oe?.dispose(),oe?.forceContextLoss?.(),Zt("disposed")}window.__withSnozzy3DCommand=(t)=>{if(typeof t==="string")return gi(t,{manual:!0});if(!t||typeof t!=="object")return!1;if(t.type==="action")return gi(t.name,{manual:!0});if(t.type==="pause")return wc(t.value);if(t.type==="lowPower")return C0(t.value);if(t.type==="routineProbe"){let e=t.allowDiagnostic===!0||t.diagnostic===!0;return uf(t.delayMs,e)}if(t.type==="dispose")return R0();return!1};function L0(t,e){window.__roomMetrics=e,M0(t),setTimeout(gf,16)}function rf(t){df(),Zt("stage",{name:"setup_enter"}),ee=t.scene,tf(ee,"Prop_Coffee"),tf(ee,"Prop_Phone"),Tn=new Oa,Tn.background=new _t(921632),oe=new Qh({canvas:lc,antialias:!0,alpha:!1,preserveDrawingBuffer:Boolean(Jt)}),oe.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),oe.setSize(window.innerWidth,window.innerHeight,!1),oe.outputColorSpace=un,oe.toneMapping=va,oe.toneMappingExposure=1.08,Zt("stage",{name:"renderer_ready"}),Tn.add(new _o(13161983,2433075,1.45));let e=new Oi(16770258,2.1);e.position.set(2.5,-3.5,4.8),Tn.add(e);let n=new Oi(9284351,1.15);n.position.set(-3,1,3),Tn.add(n);let i=h0(ee);Zt("stage",{name:"materials_ready",count:i.length}),ee.rotation.x=-Math.PI/2,Tn.add(ee),ee.updateMatrixWorld(!0);let r=A0(),s=c0(ee,i);Zt("stage",{name:"metrics_ready"}),s.materialCount=i.length,window.addEventListener("resize",()=>{oe.setSize(window.innerWidth,window.innerHeight,!1),En.aspect=window.innerWidth/window.innerHeight,En.updateProjectionMatrix()}),lc.addEventListener("webglcontextlost",(a)=>{a.preventDefault(),ws("图形上下文丢失，请切回 2.5D 后重试。")},!1),lc.addEventListener("webglcontextrestored",()=>{_c?.classList.add("hidden"),Zt("status",{message:"图形上下文已恢复"})},!1),s.cameraContract=r,L0(t,s),Zt("stage",{name:"animation_started"})}Zt("boot",{assetURL:Po});if(!Po&&!Co)ws("没有找到 SnozzyRoom3D.glb");else{Io=globalThis.createImageBitmap;try{globalThis.createImageBitmap=void 0}catch(n){}let t=new ac;window.__roomTextureLoader="TextureLoader (createImageBitmap disabled until parse complete)";let e=(n)=>{df(),ws(`GLB 加载失败：${n?.message||String(n)}`)};if(Co){let n=Co.indexOf(",");try{let i=Uint8Array.from(atob(Co.slice(n+1)),(r)=>r.charCodeAt(0));t.parse(i.buffer,"",rf,e)}catch(i){e(i)}}else t.load(Po,rf,void 0,e)}})();
