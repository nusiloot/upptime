import{_ as t,a as n,b as e,c as r,i as c,s as a,d as i,S as o,e as u,t as s,f,g as l,h,j as p,k as d,l as v,m,n as g,o as $,p as E,q as w,r as D,u as R,v as y,w as T,x as b,y as S,z as I,A as H,B as L,C as M,D as k,E as x,F as N,G as _,H as A,I as P,J as U}from"./client.5b519a83.js";import{c as O,_ as V,h as C,L as j}from"./createOctokit.74d153c8.js";function z(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var i=n(this).constructor;c=Reflect.construct(a,arguments,i)}else c=a.apply(this,arguments);return e(this,c)}}function B(t,n,e){var r=t.slice();return r[5]=n[e],r}function F(t){var n,e,r,c=I.i18n.allSystemsOperational+"";return{c:function(){n=u("article"),e=s("✅   "),r=s(c),this.h()},l:function(t){n=f(t,"ARTICLE",{class:!0});var a=l(n);e=h(a,"✅   "),r=h(a,c),a.forEach(p),this.h()},h:function(){d(n,"class","good svelte-18zj4n9")},m:function(t,c){v(t,n,c),m(n,e),m(n,r)},p:g,d:function(t){t&&p(n)}}}function J(t){for(var n,e,r,c,a=I.i18n.activeIncidents+"",i=t[1],o=[],d=0;d<i.length;d+=1)o[d]=G(B(t,i,d));return{c:function(){n=u("h2"),e=s(a),r=$();for(var t=0;t<o.length;t+=1)o[t].c();c=L()},l:function(t){n=f(t,"H2",{});var i=l(n);e=h(i,a),i.forEach(p),r=E(t);for(var u=0;u<o.length;u+=1)o[u].l(t);c=L()},m:function(t,a){v(t,n,a),m(n,e),v(t,r,a);for(var i=0;i<o.length;i+=1)o[i].m(t,a);v(t,c,a)},p:function(t,n){if(2&n){var e;for(i=t[1],e=0;e<i.length;e+=1){var r=B(t,i,e);o[e]?o[e].p(r,n):(o[e]=G(r),o[e].c(),o[e].m(c.parentNode,c))}for(;e<o.length;e+=1)o[e].d(1);o.length=i.length}},i:g,o:g,d:function(t){t&&p(n),t&&p(r),M(o,t),t&&p(c)}}}function q(t){var n,e;return n=new j({}),{c:function(){k(n.$$.fragment)},l:function(t){x(n.$$.fragment,t)},m:function(t,r){N(n,t,r),e=!0},p:g,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function G(t){var n,e,r,c,a,i,o,g,w,D,R,y,T,b,S,L=t[5].title.replace("🛑","").replace("⚠️","").trim()+"",M=I.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(t[5].created_at).toLocaleString()).replace(/\$POSTS/g,t[5].comments)+"",k=I.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"";return{c:function(){n=u("article"),e=u("div"),r=u("div"),c=u("h4"),a=s(L),i=$(),o=u("div"),g=s(M),w=$(),D=u("div"),R=u("a"),y=s(k),b=$(),this.h()},l:function(t){n=f(t,"ARTICLE",{class:!0});var u=l(n);e=f(u,"DIV",{class:!0});var s=l(e);r=f(s,"DIV",{});var d=l(r);c=f(d,"H4",{});var v=l(c);a=h(v,L),v.forEach(p),i=E(d),o=f(d,"DIV",{});var m=l(o);g=h(m,M),m.forEach(p),d.forEach(p),w=E(s),D=f(s,"DIV",{class:!0});var $=l(D);R=f($,"A",{href:!0});var T=l(R);y=h(T,k),T.forEach(p),$.forEach(p),s.forEach(p),b=E(u),u.forEach(p),this.h()},h:function(){d(R,"href",T="".concat(I.path,"/incident/").concat(t[5].number)),d(D,"class","f r"),d(e,"class","f"),d(n,"class",S="down link "+(t[5].title.includes("degraded")?"degraded":"")+" svelte-18zj4n9")},m:function(t,u){v(t,n,u),m(n,e),m(e,r),m(r,c),m(c,a),m(r,i),m(r,o),m(o,g),m(e,w),m(e,D),m(D,R),m(R,y),m(n,b)},p:function(t,e){2&e&&L!==(L=t[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&H(a,L),2&e&&M!==(M=I.i18n.activeIncidentSummary.replace(/\$DATE/g,new Date(t[5].created_at).toLocaleString()).replace(/\$POSTS/g,t[5].comments)+"")&&H(g,M),2&e&&k!==(k=I.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"")&&H(y,k),2&e&&T!==(T="".concat(I.path,"/incident/").concat(t[5].number))&&d(R,"href",T),2&e&&S!==(S="down link "+(t[5].title.includes("degraded")?"degraded":"")+" svelte-18zj4n9")&&d(n,"class",S)},d:function(t){t&&p(n)}}}function K(t){var n,e,r,c,a,i=!t[1].length&&!t[0]&&F(),o=[q,J],s=[];function h(t,n){return t[0]?0:t[1].length?1:-1}return~(r=h(t))&&(c=s[r]=o[r](t)),{c:function(){i&&i.c(),n=$(),e=u("section"),c&&c.c(),this.h()},l:function(t){i&&i.l(t),n=E(t),e=f(t,"SECTION",{class:!0});var r=l(e);c&&c.l(r),r.forEach(p),this.h()},h:function(){d(e,"class","svelte-18zj4n9")},m:function(t,c){i&&i.m(t,c),v(t,n,c),v(t,e,c),~r&&s[r].m(e,null),a=!0},p:function(t,a){var u=w(a,1)[0];t[1].length||t[0]?i&&(i.d(1),i=null):i?i.p(t,u):((i=F()).c(),i.m(n.parentNode,n));var f=r;(r=h(t))===f?~r&&s[r].p(t,u):(c&&(D(),R(s[f],1,1,(function(){s[f]=null})),y()),~r?((c=s[r])?c.p(t,u):(c=s[r]=o[r](t)).c(),T(c,1),c.m(e,null)):c=null)},i:function(t){a||(T(c),a=!0)},o:function(t){R(c),a=!1},d:function(t){i&&i.d(t),t&&p(n),t&&p(e),~r&&s[r].d()}}}function Q(t,n,e){var r=!0,c=O(),a=I.owner,i=I.repo,o=[];return b(V(S.mark((function t(){return S.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,c.issues.listForRepo({owner:a,repo:i,state:"open",filter:"all",sort:"created",direction:"desc",labels:"status"});case 4:t.t1=o=t.sent.data,(0,t.t0)(1,t.t1),e(1,o=o.map((function(t,n){return t.showHeading=0===n||new Date(o[n-1].created_at).toLocaleDateString()!==new Date(t.created_at).toLocaleDateString(),t}))),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(0),C(t.t2);case 12:e(0,r=!1);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))),[r,o]}var W=function(n){t(u,o);var e=z(u);function u(t){var n;return r(this,u),n=e.call(this),c(i(n),t,Q,K,a,{}),n}return u}();function X(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var i=n(this).constructor;c=Reflect.construct(a,arguments,i)}else c=a.apply(this,arguments);return e(this,c)}}function Y(t,n,e){var r=t.slice();return r[8]=n[e],r}function Z(t){for(var n,e=t[1],r=[],c=0;c<e.length;c+=1)r[c]=nt(Y(t,e,c));return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c();n=L()},l:function(t){for(var e=0;e<r.length;e+=1)r[e].l(t);n=L()},m:function(t,e){for(var c=0;c<r.length;c+=1)r[c].m(t,e);v(t,n,e)},p:function(t,c){if(6&c){var a;for(e=t[1],a=0;a<e.length;a+=1){var i=Y(t,e,a);r[a]?r[a].p(i,c):(r[a]=nt(i),r[a].c(),r[a].m(n.parentNode,n))}for(;a<r.length;a+=1)r[a].d(1);r.length=e.length}},i:g,o:g,d:function(t){M(r,t),t&&p(n)}}}function tt(t){var n,e;return n=new j({}),{c:function(){k(n.$$.fragment)},l:function(t){x(n.$$.fragment,t)},m:function(t,r){N(n,t,r),e=!0},p:g,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function nt(t){var n,e,r,c,a,i,o,g,w,D,R,y,T=t[8].name+"",b=I.i18n.overallUptime.replace(/\$UPTIME/g,t[8].uptime)+"",S=I.i18n.averageResponseTime.replace(/\$TIME/g,t[8].time)+"";return{c:function(){n=u("article"),e=u("h4"),r=u("a"),c=s(T),i=$(),o=u("div"),g=$(),w=u("div"),D=$(),this.h()},l:function(t){n=f(t,"ARTICLE",{class:!0,style:!0});var a=l(n);e=f(a,"H4",{});var u=l(e);r=f(u,"A",{href:!0});var s=l(r);c=h(s,T),s.forEach(p),u.forEach(p),i=E(a),o=f(a,"DIV",{}),l(o).forEach(p),g=E(a),w=f(a,"DIV",{}),l(w).forEach(p),D=E(a),a.forEach(p),this.h()},h:function(){d(r,"href",a="".concat(I.path,"/history/").concat(t[8].slug)),d(n,"class",R=A("".concat(t[8].status," link"))+" svelte-b6aso6"),d(n,"style",y='background-image: url("'.concat(t[2],"/").concat(t[8].slug,".png"))},m:function(t,a){v(t,n,a),m(n,e),m(e,r),m(r,c),m(n,i),m(n,o),o.innerHTML=b,m(n,g),m(n,w),w.innerHTML=S,m(n,D)},p:function(t,e){2&e&&T!==(T=t[8].name+"")&&H(c,T),2&e&&a!==(a="".concat(I.path,"/history/").concat(t[8].slug))&&d(r,"href",a),2&e&&b!==(b=I.i18n.overallUptime.replace(/\$UPTIME/g,t[8].uptime)+"")&&(o.innerHTML=b),2&e&&S!==(S=I.i18n.averageResponseTime.replace(/\$TIME/g,t[8].time)+"")&&(w.innerHTML=S),2&e&&R!==(R=A("".concat(t[8].status," link"))+" svelte-b6aso6")&&d(n,"class",R),2&e&&y!==(y='background-image: url("'.concat(t[2],"/").concat(t[8].slug,".png"))&&d(n,"style",y)},d:function(t){t&&p(n)}}}function et(t){var n,e,r,c,a,i,o,d=I.i18n.liveStatus+"",g=[tt,Z],b=[];function S(t,n){return t[0]?0:t[1].length?1:-1}return~(a=S(t))&&(i=b[a]=g[a](t)),{c:function(){n=u("h2"),e=s(d),r=$(),c=u("section"),i&&i.c()},l:function(t){n=f(t,"H2",{});var a=l(n);e=h(a,d),a.forEach(p),r=E(t),c=f(t,"SECTION",{});var o=l(c);i&&i.l(o),o.forEach(p)},m:function(t,i){v(t,n,i),m(n,e),v(t,r,i),v(t,c,i),~a&&b[a].m(c,null),o=!0},p:function(t,n){var e=w(n,1)[0],r=a;(a=S(t))===r?~a&&b[a].p(t,e):(i&&(D(),R(b[r],1,1,(function(){b[r]=null})),y()),~a?((i=b[a])?i.p(t,e):(i=b[a]=g[a](t)).c(),T(i,1),i.m(c,null)):i=null)},i:function(t){o||(T(i),o=!0)},o:function(t){R(i),o=!1},d:function(t){t&&p(n),t&&p(r),t&&p(c),~a&&b[a].d()}}}function rt(t,n,e){var r=!0,c=O(),a=I.owner,i=I.repo,o=(I["status-website"]||{}).apiBaseUrl,u=[];o||(o="https://api.github.com");var s=o.includes("api.github.com")?"https://raw.githubusercontent.com":o,f="".concat(s,"/").concat(a,"/").concat(i,"/master/graphs");return b(V(S.mark((function t(){return S.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.t1=JSON,t.t2=atob,t.next=6,c.repos.getContent({owner:a,repo:i,path:"history/summary.json"});case 6:t.t3=t.sent.data.content.replace(/\n/g,""),t.t4=(0,t.t2)(t.t3),t.t5=u=t.t1.parse.call(t.t1,t.t4),(0,t.t0)(1,t.t5),t.next=15;break;case 12:t.prev=12,t.t6=t.catch(0),C(t.t6);case 15:e(0,r=!1);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))),[r,u,f]}var ct=function(n){t(u,o);var e=X(u);function u(t){var n;return r(this,u),n=e.call(this),c(i(n),t,rt,et,a,{}),n}return u}();function at(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var i=n(this).constructor;c=Reflect.construct(a,arguments,i)}else c=a.apply(this,arguments);return e(this,c)}}function it(t,n,e){var r=t.slice();return r[5]=n[e],r}function ot(t){for(var n,e,r,c,a=I.i18n.pastIncidents+"",i=t[1],o=[],w=0;w<i.length;w+=1)o[w]=ft(it(t,i,w));return{c:function(){n=u("h2"),e=s(a),r=$();for(var t=0;t<o.length;t+=1)o[t].c();c=L(),this.h()},l:function(t){n=f(t,"H2",{class:!0});var i=l(n);e=h(i,a),i.forEach(p),r=E(t);for(var u=0;u<o.length;u+=1)o[u].l(t);c=L(),this.h()},h:function(){d(n,"class","svelte-18y4uo2")},m:function(t,a){v(t,n,a),m(n,e),v(t,r,a);for(var i=0;i<o.length;i+=1)o[i].m(t,a);v(t,c,a)},p:function(t,n){if(2&n){var e;for(i=t[1],e=0;e<i.length;e+=1){var r=it(t,i,e);o[e]?o[e].p(r,n):(o[e]=ft(r),o[e].c(),o[e].m(c.parentNode,c))}for(;e<o.length;e+=1)o[e].d(1);o.length=i.length}},i:g,o:g,d:function(t){t&&p(n),t&&p(r),M(o,t),t&&p(c)}}}function ut(t){var n,e;return n=new j({}),{c:function(){k(n.$$.fragment)},l:function(t){x(n.$$.fragment,t)},m:function(t,r){N(n,t,r),e=!0},p:g,i:function(t){e||(T(n.$$.fragment,t),e=!0)},o:function(t){R(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function st(t){var n,e,r=new Date(t[5].created_at).toLocaleDateString()+"";return{c:function(){n=u("h3"),e=s(r)},l:function(t){n=f(t,"H3",{});var c=l(n);e=h(c,r),c.forEach(p)},m:function(t,r){v(t,n,r),m(n,e)},p:function(t,n){2&n&&r!==(r=new Date(t[5].created_at).toLocaleDateString()+"")&&H(e,r)},d:function(t){t&&p(n)}}}function ft(t){var n,e,r,c,a,i,o,g,w,D,R,y,T,b,S,L=t[5].title.replace("🛑","").replace("⚠️","").trim()+"",M=I.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(t[5].closed_at).getTime()-new Date(t[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,t[5].comments)+"",k=I.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"",x=t[5].showHeading&&st(t);return{c:function(){x&&x.c(),n=$(),e=u("article"),r=u("div"),c=u("div"),a=u("h4"),i=s(L),o=$(),g=u("div"),w=$(),D=u("div"),R=u("a"),y=s(k),b=$(),this.h()},l:function(t){x&&x.l(t),n=E(t),e=f(t,"ARTICLE",{class:!0});var u=l(e);r=f(u,"DIV",{class:!0});var s=l(r);c=f(s,"DIV",{});var d=l(c);a=f(d,"H4",{});var v=l(a);i=h(v,L),v.forEach(p),o=E(d),g=f(d,"DIV",{}),l(g).forEach(p),d.forEach(p),w=E(s),D=f(s,"DIV",{class:!0});var m=l(D);R=f(m,"A",{href:!0});var $=l(R);y=h($,k),$.forEach(p),m.forEach(p),s.forEach(p),b=E(u),u.forEach(p),this.h()},h:function(){d(R,"href",T="".concat(I.path,"/incident/").concat(t[5].number)),d(D,"class","f r"),d(r,"class","f"),d(e,"class",S="down link "+(t[5].title.includes("degraded")?"degraded":""))},m:function(t,u){x&&x.m(t,u),v(t,n,u),v(t,e,u),m(e,r),m(r,c),m(c,a),m(a,i),m(c,o),m(c,g),g.innerHTML=M,m(r,w),m(r,D),m(D,R),m(R,y),m(e,b)},p:function(t,r){t[5].showHeading?x?x.p(t,r):((x=st(t)).c(),x.m(n.parentNode,n)):x&&(x.d(1),x=null),2&r&&L!==(L=t[5].title.replace("🛑","").replace("⚠️","").trim()+"")&&H(i,L),2&r&&M!==(M=I.i18n.pastIncidentsResolved.replace(/\$MINUTES/g,((new Date(t[5].closed_at).getTime()-new Date(t[5].created_at).getTime())/6e4).toFixed(0)).replace(/\$POSTS/g,t[5].comments)+"")&&(g.innerHTML=M),2&r&&k!==(k=I.i18n.incidentReport.replace(/\$NUMBER/g,t[5].number)+"")&&H(y,k),2&r&&T!==(T="".concat(I.path,"/incident/").concat(t[5].number))&&d(R,"href",T),2&r&&S!==(S="down link "+(t[5].title.includes("degraded")?"degraded":""))&&d(e,"class",S)},d:function(t){x&&x.d(t),t&&p(n),t&&p(e)}}}function lt(t){var n,e,r,c,a=[ut,ot],i=[];function o(t,n){return t[0]?0:t[1].length?1:-1}return~(e=o(t))&&(r=i[e]=a[e](t)),{c:function(){n=u("section"),r&&r.c()},l:function(t){n=f(t,"SECTION",{});var e=l(n);r&&r.l(e),e.forEach(p)},m:function(t,r){v(t,n,r),~e&&i[e].m(n,null),c=!0},p:function(t,c){var u=w(c,1)[0],s=e;(e=o(t))===s?~e&&i[e].p(t,u):(r&&(D(),R(i[s],1,1,(function(){i[s]=null})),y()),~e?((r=i[e])?r.p(t,u):(r=i[e]=a[e](t)).c(),T(r,1),r.m(n,null)):r=null)},i:function(t){c||(T(r),c=!0)},o:function(t){R(r),c=!1},d:function(t){t&&p(n),~e&&i[e].d()}}}function ht(t,n,e){var r=!0,c=O(),a=I.owner,i=I.repo,o=[];return b(V(S.mark((function t(){return S.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,c.issues.listForRepo({owner:a,repo:i,state:"closed",filter:"all",sort:"created",direction:"desc",labels:"status"});case 4:t.t1=o=t.sent.data,(0,t.t0)(1,t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),C(t.t2);case 11:e(1,o=o.map((function(t,n){return t.showHeading=0===n||new Date(o[n-1].created_at).toLocaleDateString()!==new Date(t.created_at).toLocaleDateString(),t}))),e(0,r=!1);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})))),[r,o]}var pt=function(n){t(u,o);var e=at(u);function u(t){var n;return r(this,u),n=e.call(this),c(i(n),t,ht,lt,a,{}),n}return u}();function dt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var i=n(this).constructor;c=Reflect.construct(a,arguments,i)}else c=a.apply(this,arguments);return e(this,c)}}function vt(t){var n,e=U(I["status-website"].introTitle)+"";return{c:function(){n=u("h1")},l:function(t){n=f(t,"H1",{}),l(n).forEach(p)},m:function(t,r){v(t,n,r),n.innerHTML=e},p:g,d:function(t){t&&p(n)}}}function mt(t){var n,e=U(I["status-website"].introMessage)+"";return{c:function(){n=u("p"),this.h()},l:function(t){n=f(t,"P",{class:!0}),l(n).forEach(p),this.h()},h:function(){d(n,"class","lead svelte-ngkazm")},m:function(t,r){v(t,n,r),n.innerHTML=e},p:g,d:function(t){t&&p(n)}}}function gt(t){var n,e,r,c,a,i,o,s,h,m;document.title=n=t[0];var g=I["status-website"]&&function(t){var n,e,r=I["status-website"].introTitle&&vt(),c=I["status-website"].introMessage&&mt();return{c:function(){r&&r.c(),n=$(),c&&c.c(),e=L()},l:function(t){r&&r.l(t),n=E(t),c&&c.l(t),e=L()},m:function(t,a){r&&r.m(t,a),v(t,n,a),c&&c.m(t,a),v(t,e,a)},p:function(t,n){I["status-website"].introTitle&&r.p(t,n),I["status-website"].introMessage&&c.p(t,n)},d:function(t){r&&r.d(t),t&&p(n),c&&c.d(t),t&&p(e)}}}();return a=new W({}),o=new ct({}),h=new pt({}),{c:function(){e=$(),r=u("header"),g&&g.c(),c=$(),k(a.$$.fragment),i=$(),k(o.$$.fragment),s=$(),k(h.$$.fragment),this.h()},l:function(t){P('[data-svelte="svelte-1258swp"]',document.head).forEach(p),e=E(t),r=f(t,"HEADER",{class:!0});var n=l(r);g&&g.l(n),n.forEach(p),c=E(t),x(a.$$.fragment,t),i=E(t),x(o.$$.fragment,t),s=E(t),x(h.$$.fragment,t),this.h()},h:function(){d(r,"class","svelte-ngkazm")},m:function(t,n){v(t,e,n),v(t,r,n),g&&g.m(r,null),v(t,c,n),N(a,t,n),v(t,i,n),N(o,t,n),v(t,s,n),N(h,t,n),m=!0},p:function(t,e){var r=w(e,1)[0];(!m||1&r)&&n!==(n=t[0])&&(document.title=n),I["status-website"]&&g.p(t,r)},i:function(t){m||(T(a.$$.fragment,t),T(o.$$.fragment,t),T(h.$$.fragment,t),m=!0)},o:function(t){R(a.$$.fragment,t),R(o.$$.fragment,t),R(h.$$.fragment,t),m=!1},d:function(t){t&&p(e),t&&p(r),g&&g.d(),t&&p(c),_(a,t),t&&p(i),_(o,t),t&&p(s),_(h,t)}}}function $t(t,n,e){var r="Status";try{r=I["status-website"].name}catch(t){}return[r]}var Et=function(n){t(u,o);var e=dt(u);function u(t){var n;return r(this,u),n=e.call(this),c(i(n),t,$t,gt,a,{}),n}return u}();export default Et;
