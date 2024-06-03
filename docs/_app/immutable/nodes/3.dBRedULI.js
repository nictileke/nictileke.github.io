import{j,k as q,s as A,n as k}from"../chunks/scheduler.B-P6Xm_t.js";import{S as B,i as D,q as o,s as M,r as i,h as x,u,j as h,t as l,a as p,g as w,v as c,e as K,c as O,d as z,n as V}from"../chunks/index.zqDNQBOO.js";import{b as H,u as J,a as N,T as g,C as Q}from"../chunks/T.ZLiDHcXd.js";import{r as R,w as U}from"../chunks/index.BuxinNyB.js";const G=f=>`useFrame-order-${f.toString()}`,W=(f,r)=>{if(!H)return{start:()=>{},stop:()=>{},started:R(!1)};const s=U(!1),t=J(),{useFrameOrders:$}=N(),{autoInvalidations:e}=j("threlte-internal-context");let a=0;for(;$.includes(a);)a+=.01;$.push(a);const v=G(a),S=_=>{f(t,_)},d=t.mainStage.createTask(v,S,{after:$.filter(_=>_<a).map(_=>G(_)),before:$.filter(_=>_>a).map(_=>G(_))}),C=()=>{s.set(!0),e.add(f),d.start()},b=()=>{s.set(!0),e.delete(f),d.stop()};return C(),q(()=>{t.mainStage.removeTask(v),$.splice($.indexOf(a),1)}),{start:C,stop:b,started:{subscribe:s.subscribe}}};function X(f){let r,s;return r=new g.PerspectiveCamera({props:{makeDefault:!0,position:[-10,10,10],fov:15}}),r.$on("create",ne),{c(){o(r.$$.fragment)},l(t){i(r.$$.fragment,t)},m(t,$){u(r,t,$),s=!0},p:k,i(t){s||(l(r.$$.fragment,t),s=!0)},o(t){p(r.$$.fragment,t),s=!1},d(t){c(r,t)}}}function Y(f){let r,s,t,$;return r=new g.CircleGeometry({props:{args:[3,16]}}),t=new g.MeshBasicMaterial({props:{color:"#666666",wireframe:!0}}),{c(){o(r.$$.fragment),s=M(),o(t.$$.fragment)},l(e){i(r.$$.fragment,e),s=x(e),i(t.$$.fragment,e)},m(e,a){u(r,e,a),h(e,s,a),u(t,e,a),$=!0},p:k,i(e){$||(l(r.$$.fragment,e),l(t.$$.fragment,e),$=!0)},o(e){p(r.$$.fragment,e),p(t.$$.fragment,e),$=!1},d(e){e&&w(s),c(r,e),c(t,e)}}}function Z(f){let r,s,t,$;return r=new g.BoxGeometry({}),t=new g.MeshStandardMaterial({props:{color:"#0059BA"}}),{c(){o(r.$$.fragment),s=M(),o(t.$$.fragment)},l(e){i(r.$$.fragment,e),s=x(e),i(t.$$.fragment,e)},m(e,a){u(r,e,a),h(e,s,a),u(t,e,a),$=!0},p:k,i(e){$||(l(r.$$.fragment,e),l(t.$$.fragment,e),$=!0)},o(e){p(r.$$.fragment,e),p(t.$$.fragment,e),$=!1},d(e){e&&w(s),c(r,e),c(t,e)}}}function ee(f){let r,s,t,$;return r=new g.TorusKnotGeometry({props:{args:[.5,.15,100,12,2,3]}}),t=new g.MeshStandardMaterial({props:{color:"#F85122"}}),{c(){o(r.$$.fragment),s=M(),o(t.$$.fragment)},l(e){i(r.$$.fragment,e),s=x(e),i(t.$$.fragment,e)},m(e,a){u(r,e,a),h(e,s,a),u(t,e,a),$=!0},p:k,i(e){$||(l(r.$$.fragment,e),l(t.$$.fragment,e),$=!0)},o(e){p(r.$$.fragment,e),p(t.$$.fragment,e),$=!1},d(e){e&&w(s),c(r,e),c(t,e)}}}function te(f){let r,s,t,$;return r=new g.IcosahedronGeometry({}),t=new g.MeshStandardMaterial({props:{color:"#F8EBCE"}}),{c(){o(r.$$.fragment),s=M(),o(t.$$.fragment)},l(e){i(r.$$.fragment,e),s=x(e),i(t.$$.fragment,e)},m(e,a){u(r,e,a),h(e,s,a),u(t,e,a),$=!0},p:k,i(e){$||(l(r.$$.fragment,e),l(t.$$.fragment,e),$=!0)},o(e){p(r.$$.fragment,e),p(t.$$.fragment,e),$=!1},d(e){e&&w(s),c(r,e),c(t,e)}}}function re(f){let r,s,t,$,e,a,v,S,d,C,b,_,y,F;return r=new g.Group({props:{"rotation.y":f[0],$$slots:{default:[X]},$$scope:{ctx:f}}}),t=new g.Mesh({props:{"rotation.x":90*Math.PI/180,$$slots:{default:[Y]},$$scope:{ctx:f}}}),e=new g.DirectionalLight({props:{intensity:.8,"position.x":5,"position.y":10}}),v=new g.AmbientLight({props:{intensity:.2}}),d=new g.Mesh({props:{"position.y":1.2,"position.z":-.75,$$slots:{default:[Z]},$$scope:{ctx:f}}}),b=new g.Mesh({props:{position:[1.2,1.5,.75],"rotation.x":5,"rotation.y":71,$$slots:{default:[ee]},$$scope:{ctx:f}}}),y=new g.Mesh({props:{position:[-1.4,1.5,.75],rotation:[-5,128,10],$$slots:{default:[te]},$$scope:{ctx:f}}}),{c(){o(r.$$.fragment),s=M(),o(t.$$.fragment),$=M(),o(e.$$.fragment),a=M(),o(v.$$.fragment),S=M(),o(d.$$.fragment),C=M(),o(b.$$.fragment),_=M(),o(y.$$.fragment)},l(n){i(r.$$.fragment,n),s=x(n),i(t.$$.fragment,n),$=x(n),i(e.$$.fragment,n),a=x(n),i(v.$$.fragment,n),S=x(n),i(d.$$.fragment,n),C=x(n),i(b.$$.fragment,n),_=x(n),i(y.$$.fragment,n)},m(n,m){u(r,n,m),h(n,s,m),u(t,n,m),h(n,$,m),u(e,n,m),h(n,a,m),u(v,n,m),h(n,S,m),u(d,n,m),h(n,C,m),u(b,n,m),h(n,_,m),u(y,n,m),F=!0},p(n,[m]){const T={};m&1&&(T["rotation.y"]=n[0]),m&2&&(T.$$scope={dirty:m,ctx:n}),r.$set(T);const I={};m&2&&(I.$$scope={dirty:m,ctx:n}),t.$set(I);const E={};m&2&&(E.$$scope={dirty:m,ctx:n}),d.$set(E);const L={};m&2&&(L.$$scope={dirty:m,ctx:n}),b.$set(L);const P={};m&2&&(P.$$scope={dirty:m,ctx:n}),y.$set(P)},i(n){F||(l(r.$$.fragment,n),l(t.$$.fragment,n),l(e.$$.fragment,n),l(v.$$.fragment,n),l(d.$$.fragment,n),l(b.$$.fragment,n),l(y.$$.fragment,n),F=!0)},o(n){p(r.$$.fragment,n),p(t.$$.fragment,n),p(e.$$.fragment,n),p(v.$$.fragment,n),p(d.$$.fragment,n),p(b.$$.fragment,n),p(y.$$.fragment,n),F=!1},d(n){n&&(w(s),w($),w(a),w(S),w(C),w(_)),c(r,n),c(t,n),c(e,n),c(v,n),c(d,n),c(b,n),c(y,n)}}}const ne=({ref:f})=>{f.lookAt(0,1,0)};function se(f,r,s){let t=0;return W(()=>{s(0,t+=.001)}),[t]}class $e extends B{constructor(r){super(),D(this,r,se,re,A,{})}}function ae(f){let r,s;return r=new $e({}),{c(){o(r.$$.fragment)},l(t){i(r.$$.fragment,t)},m(t,$){u(r,t,$),s=!0},i(t){s||(l(r.$$.fragment,t),s=!0)},o(t){p(r.$$.fragment,t),s=!1},d(t){c(r,t)}}}function fe(f){let r,s;return r=new Q({props:{$$slots:{default:[ae]},$$scope:{ctx:f}}}),{c(){o(r.$$.fragment)},l(t){i(r.$$.fragment,t)},m(t,$){u(r,t,$),s=!0},p(t,[$]){const e={};$&1&&(e.$$scope={dirty:$,ctx:t}),r.$set(e)},i(t){s||(l(r.$$.fragment,t),s=!0)},o(t){p(r.$$.fragment,t),s=!1},d(t){c(r,t)}}}class me extends B{constructor(r){super(),D(this,r,null,fe,A,{})}}function oe(f){let r,s,t;return s=new me({}),{c(){r=K("div"),o(s.$$.fragment),this.h()},l($){r=O($,"DIV",{class:!0});var e=z(r);i(s.$$.fragment,e),e.forEach(w),this.h()},h(){V(r,"class","svelte-1cnnenw")},m($,e){h($,r,e),u(s,r,null),t=!0},p:k,i($){t||(l(s.$$.fragment,$),t=!0)},o($){p(s.$$.fragment,$),t=!1},d($){$&&w(r),c(s)}}}class ce extends B{constructor(r){super(),D(this,r,null,oe,A,{})}}export{ce as component};