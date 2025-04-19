import{q as V,a8 as N,a9 as k,aa as W,ab as b,I as Y,J as U,i as z,ac as h,ad as J,ae as A,af as x,ag as X,w as m,G as c,x as j,A as R,ah as D,H as K,ai as Q,aj as S,B as L,ak as Z,al as ee,am as te,an as re,ao as ae,ap as ne,D as oe,p as se,c as ie,m as ue}from"./B9CXXYAi.js";function ye(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const le=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ge(e){return le.includes(e)}const ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ee(e){return e=e.toLowerCase(),ce[e]??e}const fe=["touchstart","touchmove"];function de(e){return fe.includes(e)}const _e=["textarea","script","style","title"];function we(e){return _e.includes(e)}function be(e,t){if(t){const r=document.body;e.autofocus=!0,V(()=>{document.activeElement===r&&e.focus()})}}let C=!1;function ve(){C||(C=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function H(e){var t=W,r=b;N(null),k(null);try{return e()}finally{N(t),k(r)}}function Te(e,t,r,s=r){e.addEventListener(t,()=>H(r));const n=e.__on_r;n?e.__on_r=()=>{n(),s(!0)}:e.__on_r=()=>s(!0),ve()}const $=new Set,M=new Set;function pe(e,t,r,s={}){function n(a){if(s.capture||w.call(t,a),!a.cancelBubble)return H(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?V(()=>{t.addEventListener(e,n,s)}):t.addEventListener(e,n,s),n}function Le(e,t,r,s,n){var a={capture:s,passive:n},o=pe(e,t,r,a);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(e,o,a)})}function Ne(e){for(var t=0;t<e.length;t++)$.add(e[t]);for(var r of M)r(e)}function w(e){var O;var t=this,r=t.ownerDocument,s=e.type,n=((O=e.composedPath)==null?void 0:O.call(e))||[],a=n[0]||e.target,o=0,v=e.__root;if(v){var l=n.indexOf(v);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var f=n.indexOf(t);if(f===-1)return;l<=f&&(o=l)}if(a=n[o]||e.target,a!==t){U(e,"currentTarget",{configurable:!0,get(){return a||r}});var E=W,d=b;N(null),k(null);try{for(var i,u=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var y=a["__"+s];if(y!=null&&(!a.disabled||e.target===a))if(z(y)){var[F,...G]=y;F.apply(a,[e,...G])}else y.call(a,e)}catch(T){i?u.push(T):i=T}if(e.cancelBubble||p===t||p===null)break;a=p}if(i){for(let T of u)queueMicrotask(()=>{throw T});throw i}}finally{e.__root=t,delete e.currentTarget,N(E),k(d)}}}function q(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function _(e,t){var r=b;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ke(e,t){var r=(t&x)!==0,s=(t&X)!==0,n,a=!e.startsWith("<!>");return()=>{if(m)return _(c,null),c;n===void 0&&(n=q(a?e:"<!>"+e),r||(n=h(n)));var o=s||J?document.importNode(n,!0):n.cloneNode(!0);if(r){var v=h(o),l=o.lastChild;_(v,l)}else _(o,o);return o}}function Ae(e,t,r="svg"){var s=!e.startsWith("<!>"),n=(t&x)!==0,a=`<${r}>${s?e:"<!>"+e}</${r}>`,o;return()=>{if(m)return _(c,null),c;if(!o){var v=q(a),l=h(v);if(n)for(o=document.createDocumentFragment();h(l);)o.appendChild(h(l));else o=h(l)}var f=o.cloneNode(!0);if(n){var E=h(f),d=f.lastChild;_(E,d)}else _(f,f);return f}}function Se(e=""){if(!m){var t=A(e+"");return _(t,t),t}var r=c;return r.nodeType!==3&&(r.before(r=A()),R(r)),_(r,r),r}function Re(){if(m)return _(c,null),c;var e=document.createDocumentFragment(),t=document.createComment(""),r=A();return e.append(t,r),_(t,r),e}function De(e,t){if(m){b.nodes_end=c,j();return}e!==null&&e.before(t)}let P=!0;function Me(e){P=e}function Pe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function he(e,t){return B(e,t)}function Ie(e,t){D(),t.intro=t.intro??!1;const r=t.target,s=m,n=c;try{for(var a=h(r);a&&(a.nodeType!==8||a.data!==K);)a=Q(a);if(!a)throw S;L(!0),R(a),j();const o=B(e,{...t,anchor:a});if(c===null||c.nodeType!==8||c.data!==Z)throw ee(),S;return L(!1),o}catch(o){if(o===S)return t.recover===!1&&te(),D(),re(r),L(!1),he(e,t);throw o}finally{L(s),R(n)}}const g=new Map;function B(e,{target:t,anchor:r,props:s={},events:n,context:a,intro:o=!0}){D();var v=new Set,l=d=>{for(var i=0;i<d.length;i++){var u=d[i];if(!v.has(u)){v.add(u);var p=de(u);t.addEventListener(u,w,{passive:p});var y=g.get(u);y===void 0?(document.addEventListener(u,w,{passive:p}),g.set(u,1)):g.set(u,y+1)}}};l(ae($)),M.add(l);var f=void 0,E=ne(()=>{var d=r??t.appendChild(A());return oe(()=>{if(a){se({});var i=ie;i.c=a}n&&(s.$$events=n),m&&_(d,null),P=o,f=e(d,s)||{},P=!0,m&&(b.nodes_end=c),a&&ue()}),()=>{var p;for(var i of v){t.removeEventListener(i,w);var u=g.get(i);--u===0?(document.removeEventListener(i,w),g.delete(i)):g.set(i,u)}M.delete(l),d!==r&&((p=d.parentNode)==null||p.removeChild(d))}});return I.set(f,E),f}let I=new WeakMap;function Oe(e,t){const r=I.get(e);return r?(I.delete(e),r(t)):Promise.resolve()}export{De as a,Se as b,Re as c,ve as d,pe as e,Ne as f,be as g,Ie as h,ye as i,ge as j,Le as k,_ as l,he as m,Ee as n,q as o,Ae as p,we as q,Me as r,Pe as s,ke as t,Oe as u,P as v,H as w,Te as x};
