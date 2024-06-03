import{n as Ce,B as Z,j as A,k as Me,C as Oe,o as Se,s as $e,d as oe}from"./scheduler.B-P6Xm_t.js";import{S as ke,i as Pe,q as P,s as q,r as N,h as K,u as z,j as L,t as I,a as C,g as G,v as E,z as ae,B as Ne,A as ze}from"./index.zqDNQBOO.js";import{b as Ee,u as te,D as O,c as Te,V as re,M as me,d as Ae,S as w,w as ne,e as R,f as ie,R as je,g as He,m as Fe,T,h as Re}from"./T.ZLiDHcXd.js";import{r as Be,w as k}from"./index.BuxinNyB.js";const xe=typeof window<"u";let ce=xe?()=>window.performance.now():()=>Date.now(),pe=xe?e=>requestAnimationFrame(e):Ce;const $=new Set;function ye(e){$.forEach(n=>{n.c(e)||($.delete(n),n.f())}),$.size!==0&&pe(ye)}function Ve(e){let n;return $.size===0&&pe(ye),{promise:new Promise(t=>{$.add(n={c:e,f:t})}),abort(){$.delete(n)}}}function Ze(e,n){const t="threlte-plugin-context";if(Array.isArray(e)){const[i,o]=e;Z(t,{...A(t),[i]:o})}else{const i=e,o=n;if(!o)return;Z(t,{...A(t),[i]:o})}}function Le(e,n,t){if(!Ee)return{task:void 0,start:()=>{},stop:()=>{},started:Be(!1)};let i,o,r;O.isKey(e)?(i=e,o=n,r=t):(i=Symbol("useTask"),o=e,r=n);const a=te();let c=a.mainStage;if(r){if(r.stage)if(O.isValue(r.stage))c=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);c=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const m=r.after[d];if(O.isValue(m)){c=m.stage;break}}else O.isValue(r.after)&&(c=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const m=r.before[d];if(O.isValue(m)){c=m.stage;break}}else O.isValue(r.before)&&(c=r.before.stage)}const{autoInvalidations:l}=A("threlte-internal-context"),s=k(!1),f=c.createTask(i,o,r),u=()=>{s.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&l.add(o),f.start()},v=()=>{s.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&l.delete(o),f.stop()};return(r==null?void 0:r.autoStart)??!0?u():v(),Me(()=>{c&&c.removeTask(i)}),{task:f,start:u,stop:v,started:{subscribe:s.subscribe}}}const Y=e=>{const n=k(void 0),t=k(void 0);return e.then(i=>{n.set(i)}).catch(i=>{console.error("Error in asyncWritable:",i.message),t.set(i)}),Object.assign(Object.assign(e,n),{error:t,promise:e})};function Ge(e,n){const{remember:t,clear:i}=Te();let o;const r=()=>new e;return{load:(l,s)=>{const f=async u=>{var v;if(o||(o=r()),"loadAsync"in o){const d=await o.loadAsync(u,s==null?void 0:s.onProgress);return((v=s==null?void 0:s.transform)==null?void 0:v.call(s,d))??d}else return new Promise((d,m)=>{o.load(u,h=>{var g;return d(((g=s==null?void 0:s.transform)==null?void 0:g.call(s,h))??h)},h=>{var g;return(g=s==null?void 0:s.onProgress)==null?void 0:g.call(s,h)},m)})};if(Array.isArray(l)){const u=l.map(d=>t(()=>f(d),[e,d]));return Y(Promise.all(u))}else if(typeof l=="string"){const u=t(()=>f(l),[e,l]);return Y(u)}else{const u=Object.values(l).map(d=>t(()=>f(d),[e,d]));return Y(Promise.all(u).then(d=>Object.fromEntries(Object.entries(l).map(([m],h)=>[m,d[h]]))))}},clear:l=>{Array.isArray(l)?l.forEach(s=>{i([e,s])}):typeof l=="string"?i([e,l]):Object.entries(l).forEach(([s,f])=>{i([e,s,f])})},loader:o}}new re;new re;new re;new me;new me;new Ae;`${w.logdepthbuf_pars_vertex}${w.fog_pars_vertex}${w.logdepthbuf_vertex}${w.fog_vertex}`;`${w.tonemapping_fragment}${w.colorspace_fragment}`;`${w.tonemapping_fragment}${w.colorspace_fragment}`;const We=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Ue=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Ye=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,qe=Ye,Ke=`
	${We}
	${Ue}
`;`${qe}${Ke}${w.tonemapping_fragment}${w.colorspace_fragment}`;const Xe=e=>{const{camera:n}=te();let t=e.current.clientWidth,i=e.current.clientHeight;const o=new ResizeObserver(([r])=>{t=r.contentRect.width,i=r.contentRect.height});return ne(e,r=>(r&&o.observe(r),()=>{r&&o.unobserve(r)})),(r,a)=>{a.pointer.update(c=>(c.set(r.offsetX/t*2-1,-(r.offsetY/i)*2+1),c)),a.raycaster.setFromCamera(a.pointer.current,n.current)}},he=Symbol("interactivity-context"),Je=()=>A(he),Qe=e=>{const n=R(te().renderer.domElement),t={enabled:R(!0),pointer:R(new ie),pointerOverTarget:R(!1),lastEvent:void 0,raycaster:new je,initialClick:[0,0],initialHits:[],hovered:new Map,interactiveObjects:[],target:n,compute:Xe(n),filter:e==null?void 0:e.filter};return Z(he,t),t},ge=Symbol("interactivity-handler-context"),be=()=>A(ge),et=()=>{Z(ge,{dispatchers:new WeakMap})},tt=()=>{const e=Je(),{dispatchers:n}=be();if(!e)throw new Error("No interactivity context found. Did you forget to implement interactivity()?");const t=He();return{...e,addInteractiveObject:r=>{e.interactiveObjects.indexOf(r)>-1||(n.set(r,t),e.interactiveObjects.push(r))},removeInteractiveObject:r=>{const a=e.interactiveObjects.indexOf(r);e.interactiveObjects.splice(a,1),n.delete(r)}}},rt=e=>{const n=Oe(),t=k(!1);return Se(()=>{t.set(Object.keys(n.$$.callbacks).some(i=>e.includes(i)))}),{hasEventHandlers:t}},nt=["click","contextmenu","dblclick","wheel","pointerup","pointerdown","pointerover","pointerout","pointerenter","pointerleave","pointermove","pointermissed"],it=()=>{Ze("interactivity",({ref:e})=>{if(!e.isObject3D)return;const{addInteractiveObject:n,removeInteractiveObject:t}=tt(),i=k(e),{hasEventHandlers:o}=rt(nt);return ne([o,i],([r,a])=>{if(r)return n(a),()=>t(a)}),{onRefChange(r){i.set(r)}}})};function se(e){return`${(e.eventObject||e.object).uuid}/${e.index}${e.instanceId}`}const le=[["click",!1],["contextmenu",!1],["dblclick",!1],["wheel",!1],["pointerdown",!0],["pointerup",!0],["pointerleave",!0],["pointerenter",!0],["pointermove",!0],["pointercancel",!0]],ot=e=>{const{dispatchers:n}=be(),t=f=>{const u=f.offsetX-e.initialClick[0],v=f.offsetY-e.initialClick[1];return Math.round(Math.hypot(u,v))},i=f=>{for(const u of e.hovered.values())if(f.length===0||!f.some(v=>v.object===u.object&&v.index===u.index&&v.instanceId===u.instanceId)){const{eventObject:v}=u;e.hovered.delete(se(u));const d=n.get(v);if(d){const m={...u,intersections:f};d("pointerout",m),d("pointerleave",m)}}},o=Fe(e.enabled),r=()=>{if(!o.current)return[];const f=[],u=e.raycaster.intersectObjects(e.interactiveObjects,!0),v=e.filter===void 0?u:e.filter(u,e);for(const d of v){let m=d.object;for(;m;)n.has(m)&&f.push({...d,eventObject:m}),m=m.parent}return f},a=(f,u)=>{var v;for(const d of u)(v=n.get(d))==null||v("pointermissed",f)},c=f=>f==="pointerleave"||f==="pointercancel"?()=>{e.pointerOverTarget.set(!1),i([])}:f==="pointerenter"?()=>{e.pointerOverTarget.set(!0)}:u=>{const v=f==="pointermove",d=f==="click"||f==="contextmenu"||f==="dblclick";e.compute(u,e);const m=r(),h=d?t(u):0;f==="pointerdown"&&(e.initialClick=[u.offsetX,u.offsetY],e.initialHits=m.map(b=>b.eventObject)),d&&m.length===0&&h<=2&&a(u,e.interactiveObjects),v&&i(m);let g=!1;e:for(const b of m){const D={stopped:g,...b,intersections:m,stopPropagation(){if(g=!0,D.stopped=!0,e.hovered.size>0&&Array.from(e.hovered.values()).some(p=>p.eventObject===b.eventObject)){const p=m.slice(0,m.indexOf(b));i([...p,b])}},camera:e.raycaster.camera,delta:h,nativeEvent:u,pointer:e.pointer.current,ray:e.raycaster.ray},x=n.get(b.eventObject);if(!x)return;if(v){if(x.hasEventListener("pointerover")||x.hasEventListener("pointerenter")||x.hasEventListener("pointerout")||x.hasEventListener("pointerleave")){const p=se(D),_=e.hovered.get(p);_?_.stopped&&D.stopPropagation():(e.hovered.set(p,D),x("pointerover",D),x("pointerenter",D))}x("pointermove",D)}else x.hasEventListener(f)?(!d||e.initialHits.includes(b.eventObject))&&(a(u,e.interactiveObjects.filter(_=>!e.initialHits.includes(_))),x(f,D)):d&&e.initialHits.includes(b.eventObject)&&a(u,e.interactiveObjects.filter(_=>!e.initialHits.includes(_)));if(g)break e}},l=f=>{le.forEach(([u])=>{f.removeEventListener(u,c(u))})},s=f=>{le.forEach(([u,v])=>{f.addEventListener(u,c(u),{passive:v})})};ne(e.target,f=>(f&&s(f),()=>{f&&l(f)}))},at=e=>{et();const n=Qe(e);return it(),ot(n),n};for(let e=0;e<256;e++)(e<16?"0":"")+e.toString(16);var De={exports:{}};De.exports=W;De.exports.default=W;function W(e,n,t){t=t||2;var i=n&&n.length,o=i?n[0]*t:e.length,r=we(e,0,o,t,!0),a=[];if(!r||r.next===r.prev)return a;var c,l,s,f,u,v,d;if(i&&(r=ut(e,n,r,t)),e.length>80*t){c=s=e[0],l=f=e[1];for(var m=t;m<o;m+=t)u=e[m],v=e[m+1],u<c&&(c=u),v<l&&(l=v),u>s&&(s=u),v>f&&(f=v);d=Math.max(s-c,f-l),d=d!==0?32767/d:0}return j(r,a,t,c,l,d,0),a}function we(e,n,t,i,o){var r,a;if(o===Q(e,n,t,i)>0)for(r=n;r<t;r+=i)a=fe(r,e[r],e[r+1],a);else for(r=t-i;r>=n;r-=i)a=fe(r,e[r],e[r+1],a);return a&&U(a,a.next)&&(F(a),a=a.next),a}function M(e,n){if(!e)return e;n||(n=e);var t=e,i;do if(i=!1,!t.steiner&&(U(t,t.next)||y(t.prev,t,t.next)===0)){if(F(t),t=n=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==n);return n}function j(e,n,t,i,o,r,a){if(e){!a&&r&&pt(e,i,o,r);for(var c=e,l,s;e.prev!==e.next;){if(l=e.prev,s=e.next,r?st(e,i,o,r):ct(e)){n.push(l.i/t|0),n.push(e.i/t|0),n.push(s.i/t|0),F(e),e=s.next,c=s.next;continue}if(e=s,e===c){a?a===1?(e=lt(M(e),n,t),j(e,n,t,i,o,r,2)):a===2&&ft(e,n,t,i,o,r):j(M(e),n,t,i,o,r,1);break}}}}function ct(e){var n=e.prev,t=e,i=e.next;if(y(n,t,i)>=0)return!1;for(var o=n.x,r=t.x,a=i.x,c=n.y,l=t.y,s=i.y,f=o<r?o<a?o:a:r<a?r:a,u=c<l?c<s?c:s:l<s?l:s,v=o>r?o>a?o:a:r>a?r:a,d=c>l?c>s?c:s:l>s?l:s,m=i.next;m!==n;){if(m.x>=f&&m.x<=v&&m.y>=u&&m.y<=d&&S(o,c,r,l,a,s,m.x,m.y)&&y(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function st(e,n,t,i){var o=e.prev,r=e,a=e.next;if(y(o,r,a)>=0)return!1;for(var c=o.x,l=r.x,s=a.x,f=o.y,u=r.y,v=a.y,d=c<l?c<s?c:s:l<s?l:s,m=f<u?f<v?f:v:u<v?u:v,h=c>l?c>s?c:s:l>s?l:s,g=f>u?f>v?f:v:u>v?u:v,b=X(d,m,n,t,i),D=X(h,g,n,t,i),x=e.prevZ,p=e.nextZ;x&&x.z>=b&&p&&p.z<=D;){if(x.x>=d&&x.x<=h&&x.y>=m&&x.y<=g&&x!==o&&x!==a&&S(c,f,l,u,s,v,x.x,x.y)&&y(x.prev,x,x.next)>=0||(x=x.prevZ,p.x>=d&&p.x<=h&&p.y>=m&&p.y<=g&&p!==o&&p!==a&&S(c,f,l,u,s,v,p.x,p.y)&&y(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;x&&x.z>=b;){if(x.x>=d&&x.x<=h&&x.y>=m&&x.y<=g&&x!==o&&x!==a&&S(c,f,l,u,s,v,x.x,x.y)&&y(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;p&&p.z<=D;){if(p.x>=d&&p.x<=h&&p.y>=m&&p.y<=g&&p!==o&&p!==a&&S(c,f,l,u,s,v,p.x,p.y)&&y(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function lt(e,n,t){var i=e;do{var o=i.prev,r=i.next.next;!U(o,r)&&_e(o,i,i.next,r)&&H(o,r)&&H(r,o)&&(n.push(o.i/t|0),n.push(i.i/t|0),n.push(r.i/t|0),F(i),F(i.next),i=e=r),i=i.next}while(i!==e);return M(i)}function ft(e,n,t,i,o,r){var a=e;do{for(var c=a.next.next;c!==a.prev;){if(a.i!==c.i&&gt(a,c)){var l=Ie(a,c);a=M(a,a.next),l=M(l,l.next),j(a,n,t,i,o,r,0),j(l,n,t,i,o,r,0);return}c=c.next}a=a.next}while(a!==e)}function ut(e,n,t,i){var o=[],r,a,c,l,s;for(r=0,a=n.length;r<a;r++)c=n[r]*i,l=r<a-1?n[r+1]*i:e.length,s=we(e,c,l,i,!1),s===s.next&&(s.steiner=!0),o.push(ht(s));for(o.sort(vt),r=0;r<o.length;r++)t=dt(o[r],t);return t}function vt(e,n){return e.x-n.x}function dt(e,n){var t=mt(e,n);if(!t)return n;var i=Ie(t,e);return M(i,i.next),M(t,t.next)}function mt(e,n){var t=n,i=e.x,o=e.y,r=-1/0,a;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){var c=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(c<=i&&c>r&&(r=c,a=t.x<t.next.x?t:t.next,c===i))return a}t=t.next}while(t!==n);if(!a)return null;var l=a,s=a.x,f=a.y,u=1/0,v;t=a;do i>=t.x&&t.x>=s&&i!==t.x&&S(o<f?i:r,o,s,f,o<f?r:i,o,t.x,t.y)&&(v=Math.abs(o-t.y)/(i-t.x),H(t,e)&&(v<u||v===u&&(t.x>a.x||t.x===a.x&&xt(a,t)))&&(a=t,u=v)),t=t.next;while(t!==l);return a}function xt(e,n){return y(e.prev,e,n.prev)<0&&y(n.next,e,e.next)<0}function pt(e,n,t,i){var o=e;do o.z===0&&(o.z=X(o.x,o.y,n,t,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,yt(o)}function yt(e){var n,t,i,o,r,a,c,l,s=1;do{for(t=e,e=null,r=null,a=0;t;){for(a++,i=t,c=0,n=0;n<s&&(c++,i=i.nextZ,!!i);n++);for(l=s;c>0||l>0&&i;)c!==0&&(l===0||!i||t.z<=i.z)?(o=t,t=t.nextZ,c--):(o=i,i=i.nextZ,l--),r?r.nextZ=o:e=o,o.prevZ=r,r=o;t=i}r.nextZ=null,s*=2}while(a>1);return e}function X(e,n,t,i,o){return e=(e-t)*o|0,n=(n-i)*o|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e|n<<1}function ht(e){var n=e,t=e;do(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next;while(n!==e);return t}function S(e,n,t,i,o,r,a,c){return(o-a)*(n-c)>=(e-a)*(r-c)&&(e-a)*(i-c)>=(t-a)*(n-c)&&(t-a)*(r-c)>=(o-a)*(i-c)}function gt(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!bt(e,n)&&(H(e,n)&&H(n,e)&&Dt(e,n)&&(y(e.prev,e,n.prev)||y(e,n.prev,n))||U(e,n)&&y(e.prev,e,e.next)>0&&y(n.prev,n,n.next)>0)}function y(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function U(e,n){return e.x===n.x&&e.y===n.y}function _e(e,n,t,i){var o=V(y(e,n,t)),r=V(y(e,n,i)),a=V(y(t,i,e)),c=V(y(t,i,n));return!!(o!==r&&a!==c||o===0&&B(e,t,n)||r===0&&B(e,i,n)||a===0&&B(t,e,i)||c===0&&B(t,n,i))}function B(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function V(e){return e>0?1:e<0?-1:0}function bt(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&_e(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function H(e,n){return y(e.prev,e,e.next)<0?y(e,n,e.next)>=0&&y(e,e.prev,n)>=0:y(e,n,e.prev)<0||y(e,e.next,n)<0}function Dt(e,n){var t=e,i=!1,o=(e.x+n.x)/2,r=(e.y+n.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&o<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==e);return i}function Ie(e,n){var t=new J(e.i,e.x,e.y),i=new J(n.i,n.x,n.y),o=e.next,r=n.prev;return e.next=n,n.prev=e,t.next=o,o.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function fe(e,n,t,i){var o=new J(e,n,t);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function F(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function J(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}W.deviation=function(e,n,t,i){var o=n&&n.length,r=o?n[0]*t:e.length,a=Math.abs(Q(e,0,r,t));if(o)for(var c=0,l=n.length;c<l;c++){var s=n[c]*t,f=c<l-1?n[c+1]*t:e.length;a-=Math.abs(Q(e,s,f,t))}var u=0;for(c=0;c<i.length;c+=3){var v=i[c]*t,d=i[c+1]*t,m=i[c+2]*t;u+=Math.abs((e[v]-e[m])*(e[d+1]-e[v+1])-(e[v]-e[d])*(e[m+1]-e[v+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function Q(e,n,t,i){for(var o=0,r=n,a=t-i;r<t;r+=i)o+=(e[a]-e[r])*(e[r+1]+e[a+1]),a=r;return o}W.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},i=0,o=0;o<e.length;o++){for(var r=0;r<e[o].length;r++)for(var a=0;a<n;a++)t.vertices.push(e[o][r][a]);o>0&&(i+=e[o-1].length,t.holes.push(i))}return t};new ie;new ie;var ue;(e=>{function n(o){let r=o.slice();return r.sort(e.POINT_COMPARATOR),e.makeHullPresorted(r)}e.makeHull=n;function t(o){if(o.length<=1)return o.slice();let r=[];for(let c=0;c<o.length;c++){const l=o[c];for(;r.length>=2;){const s=r[r.length-1],f=r[r.length-2];if((s.x-f.x)*(l.y-f.y)>=(s.y-f.y)*(l.x-f.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let c=o.length-1;c>=0;c--){const l=o[c];for(;a.length>=2;){const s=a[a.length-1],f=a[a.length-2];if((s.x-f.x)*(l.y-f.y)>=(s.y-f.y)*(l.x-f.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}e.makeHullPresorted=t;function i(o,r){return o.x<r.x?-1:o.x>r.x?1:o.y<r.y?-1:o.y>r.y?1:0}e.POINT_COMPARATOR=i})(ue||(ue={}));function ve(e){return Object.prototype.toString.call(e)==="[object Date]"}function ee(e,n,t,i){if(typeof t=="number"||ve(t)){const o=i-t,r=(t-n)/(e.dt||1/60),a=e.opts.stiffness*o,c=e.opts.damping*r,l=(a-c)*e.inv_mass,s=(r+l)*e.dt;return Math.abs(s)<e.opts.precision&&Math.abs(o)<e.opts.precision?i:(e.settled=!1,ve(t)?new Date(t.getTime()+s):t+s)}else{if(Array.isArray(t))return t.map((o,r)=>ee(e,n[r],t[r],i[r]));if(typeof t=="object"){const o={};for(const r in t)o[r]=ee(e,n[r],t[r],i[r]);return o}else throw new Error(`Cannot spring ${typeof t} values`)}}function wt(e,n={}){const t=k(e),{stiffness:i=.15,damping:o=.8,precision:r=.01}=n;let a,c,l,s=e,f=e,u=1,v=0,d=!1;function m(g,b={}){f=g;const D=l={};return e==null||b.hard||h.stiffness>=1&&h.damping>=1?(d=!0,a=ce(),s=g,t.set(e=f),Promise.resolve()):(b.soft&&(v=1/((b.soft===!0?.5:+b.soft)*60),u=0),c||(a=ce(),d=!1,c=Ve(x=>{if(d)return d=!1,c=null,!1;u=Math.min(u+v,1);const p={inv_mass:u,opts:h,settled:!0,dt:(x-a)*60/1e3},_=ee(p,s,e,f);return a=x,s=e,t.set(e=_),p.settled&&(c=null),!p.settled})),new Promise(x=>{c.promise.then(()=>{D===l&&x()})}))}const h={set:m,update:(g,b)=>m(g(f,e),b),subscribe:t.subscribe,stiffness:i,damping:o,precision:r};return h}function de(e){let n,t;return n=new T.MeshBasicMaterial({props:{map:e[2]}}),{c(){P(n.$$.fragment)},l(i){N(n.$$.fragment,i)},m(i,o){z(n,i,o),t=!0},p(i,o){const r={};o&4&&(r.map=i[2]),n.$set(r)},i(i){t||(I(n.$$.fragment,i),t=!0)},o(i){C(n.$$.fragment,i),t=!1},d(i){E(n,i)}}}function _t(e){let n,t,i,o;n=new T.SphereGeometry({props:{args:[6,1e3]}});let r=e[2]&&de(e);return{c(){P(n.$$.fragment),t=q(),r&&r.c(),i=ae()},l(a){N(n.$$.fragment,a),t=K(a),r&&r.l(a),i=ae()},m(a,c){z(n,a,c),L(a,t,c),r&&r.m(a,c),L(a,i,c),o=!0},p(a,c){a[2]?r?(r.p(a,c),c&4&&I(r,1)):(r=de(a),r.c(),I(r,1),r.m(i.parentNode,i)):r&&(Ne(),C(r,1,1,()=>{r=null}),ze())},i(a){o||(I(n.$$.fragment,a),I(r),o=!0)},o(a){C(n.$$.fragment,a),C(r),o=!1},d(a){a&&(G(t),G(i)),E(n,a),r&&r.d(a)}}}function It(e){let n,t,i,o,r,a;return n=new T.PerspectiveCamera({props:{makeDefault:!0,position:[10,1,10]}}),n.$on("create",Ct),i=new T.DirectionalLight({props:{position:[0,10,10]}}),r=new T.Mesh({props:{"position.y":1,"rotation.y":e[0]*.2,scale:e[1],$$slots:{default:[_t]},$$scope:{ctx:e}}}),r.$on("pointerenter",e[5]),r.$on("pointerleave",e[6]),{c(){P(n.$$.fragment),t=q(),P(i.$$.fragment),o=q(),P(r.$$.fragment)},l(c){N(n.$$.fragment,c),t=K(c),N(i.$$.fragment,c),o=K(c),N(r.$$.fragment,c)},m(c,l){z(n,c,l),L(c,t,l),z(i,c,l),L(c,o,l),z(r,c,l),a=!0},p(c,[l]){const s={};l&1&&(s["rotation.y"]=c[0]*.2),l&2&&(s.scale=c[1]),l&132&&(s.$$scope={dirty:l,ctx:c}),r.$set(s)},i(c){a||(I(n.$$.fragment,c),I(i.$$.fragment,c),I(r.$$.fragment,c),a=!0)},o(c){C(n.$$.fragment,c),C(i.$$.fragment,c),C(r.$$.fragment,c),a=!1},d(c){c&&(G(t),G(o)),E(n,c),E(i,c),E(r,c)}}}const Ct=({ref:e})=>{e.lookAt(0,1,0)};function Mt(e,n,t){let i,o;at();const r=wt(1);oe(e,r,f=>t(1,i=f));const a=Ge(Re).load("/IP.Logga.png");oe(e,a,f=>t(2,o=f));let c=0;return Le(f=>{t(0,c+=f)}),[c,i,o,r,a,()=>r.set(1.5),()=>r.set(1)]}class Pt extends ke{constructor(n){super(),Pe(this,n,Mt,It,$e,{})}}export{Pt as P};
