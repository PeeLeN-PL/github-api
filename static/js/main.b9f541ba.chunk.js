(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{38:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),n=c(16),i=c.n(n),a=c(6),l=c(12),j=c(27),o=c(28),u=c(24),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR_SET_MESSAGE":return Object(u.a)(Object(u.a)({},e),{},{message:t.payload});default:return e}},d=Object(l.c)({error:b}),_=Object(l.a)(o.a,j.a),m=Object(l.d)(d,_),h=(c(38),c(13)),O=c(3),p=c(7),x=c(4),f=c.n(x),y=c(11),w=function(e,t){return function(){var c=Object(y.a)(f.a.mark((function c(r){return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,r({type:t,payload:e});case 2:return c.abrupt("return",e);case 3:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()},v=c(0),k=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.error})),c=Object(r.useState)(5),n=Object(p.a)(c,2),i=n[0],l=n[1];return function(e,t){var c=s.a.useRef();s.a.useEffect((function(){c.current=e}),[e]),s.a.useEffect((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){l(i-1),1===i&&e(w(!1,"ERROR_SET_MESSAGE"))}),1e3),Object(v.jsx)(v.Fragment,{children:t.message?Object(v.jsxs)("div",{id:"error",className:"error",children:[Object(v.jsx)("div",{className:"error__message",children:t.message}),Object(v.jsxs)("div",{className:"error__counter",children:["Komunikat wy\u0142\u0105czy si\u0119 za: ",Object(v.jsx)("strong",{children:i})," sek."]})]}):null})},g=function(){return Object(v.jsx)("nav",{id:"nav",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/",children:"Wyszukiwarka projekt\xf3w githubowych"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/requirements",children:"Za\u0142o\u017cenia ca\u0142ej aplikacji"})}),Object(v.jsx)("li",{children:Object(v.jsx)(h.b,{to:"/factorial",children:"Wyliczanie silni"})})]})})},S={"RangeError: Maximum call stack size exceeded":"Przekroczono maksymalny rozmiar stosu wywo\u0142a\u0144"},E=function(){var e=Object(a.b)(),t=Object(r.useState)(!1),c=Object(p.a)(t,2),s=c[0],n=c[1],i=Object(r.useState)(!1),l=Object(p.a)(i,2),j=l[0],o=l[1],u=Object(r.useState)(!1),b=Object(p.a)(u,2),d=b[0],_=b[1],m=Object(r.useRef)(null);Object(r.useEffect)((function(){g(),m.current.focus()}),[]);var h=function(){var e=Object(y.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=Object.values(t.target).reduce((function(e,t){return t.name&&(e[t.name]=t.value),e}),{}),O(c.number);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(t){if(t>0)try{var c=x(t);c===1/0&&(c="nieskonczono\u015b\u0107"),n(t),o(c),k(t,c)}catch(r){o(!1),e(w(S[r.message]||r.message,"ERROR_SET_MESSAGE"))}else o(!1),e(w("brak warto\u015bci","ERROR_SET_MESSAGE"))},x=function e(t){return 0===t||1===t?1:t*e(t-1)},k=function(e,t){var c={number:e,result:t,time:Date.now()},r=JSON.parse(localStorage.getItem("factorial_history"))||[];r.push(c),localStorage.setItem("factorial_history",JSON.stringify(r)),_(r.reverse())},g=function(){var e=JSON.parse(localStorage.getItem("factorial_history"))||[];_(e.reverse())};return Object(v.jsxs)("div",{className:"factorial",children:[Object(v.jsx)("h1",{children:"Wyliczanie slini"}),Object(v.jsxs)("form",{onSubmit:h,className:"factorial__form form",children:[Object(v.jsx)("p",{className:"form__label",children:"Podaj liczb\u0119:"}),Object(v.jsx)("input",{type:"number",name:"number",min:"1",className:"form__input",ref:m}),Object(v.jsx)("button",{type:"submit",className:"form__button",children:"Oblicz"})]}),j?Object(v.jsx)("div",{className:"factorial__result",children:Object(v.jsxs)("p",{children:["Silnia z liczby ",Object(v.jsx)("strong",{children:s})," to: ",Object(v.jsx)("strong",{children:j})]})}):null,d&&d.length?Object(v.jsxs)("div",{className:"factorial__history",children:[Object(v.jsx)("h2",{className:"factorial__history__label",children:"Historia poprzednich wylicze\u0144:"}),Object(v.jsx)("ul",{className:"factorial__history__list history list",children:d.map((function(e){return Object(v.jsxs)("li",{className:"factorial__history__list__item list__item",children:[Object(v.jsxs)("div",{className:"factorial__history__list__item__math-data",children:[Object(v.jsxs)("div",{className:"factorial__history__list__item__number",children:["Podana liczba: ",Object(v.jsx)("strong",{children:e.number})]}),Object(v.jsxs)("div",{className:"factorial__history__list__item__result",children:["Wynik: ",Object(v.jsx)("strong",{children:e.result})]})]}),Object(v.jsxs)("div",{className:"factorial__history__list__item__date",children:["Data wyliczenia: ",new Date(e.time).toLocaleString()]})]},"item_".concat(e.time))}))})]}):null]})},z={"Git Repository is empty.":"Repozytorium Git jest puste."},R=function(e){var t=Object(a.b)(),c=Object(r.useState)(e.username),s=Object(p.a)(c,2),n=s[0],i=s[1],l=Object(r.useState)(!1),j=Object(p.a)(l,2),o=j[0],u=j[1],b=Object(r.useState)({}),d=Object(p.a)(b,2),_=d[0],m=d[1];Object(r.useEffect)((function(){i(e.username),h(e.username)}),[e.username]);var h=function(){var e=Object(y.a)(f.a.mark((function e(c){var r,s,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(c,"/repos"));case 2:return r=e.sent,e.next=5,r.json();case 5:s=e.sent,t(w(!1,"ERROR_SET_MESSAGE")),Array.isArray(s)&&(n=O(s),u(n.slice(0,5)),s.length||t(w("Ten u\u017cytkownik nie posiada repozytori\xf3w","ERROR_SET_MESSAGE")));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return e.sort((function(e,t){return new Date(t.updated_at).getTime()-new Date(e.updated_at).getTime()}))},x=function(){var e=Object(y.a)(f.a.mark((function e(c,r){var s,n,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object.assign({},_),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,t(w(!1,"ERROR_SET_MESSAGE")),Array.isArray(i)?s[r]=i.splice(0,5):(s[r]=!1,t(w(z[i.message],"ERROR_SET_MESSAGE"))),m(s);case 10:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:o&&o.length?Object(v.jsxs)("div",{className:"projects__list",children:[Object(v.jsxs)("h2",{className:"projects__list__label",children:["Repozytoria u\u017cytkownika ",Object(v.jsx)("span",{className:"projects__list__label__user",children:n}),":"]}),Object(v.jsx)("ol",{className:"projects__list__items list",children:o.map((function(e){return Object(v.jsxs)("li",{className:"projects__list__items__item list__item",children:[Object(v.jsxs)("div",{className:"projects__list__items__item__section--left",children:[Object(v.jsx)("div",{className:"projects__list__items__item__name",children:e.name}),Object(v.jsx)("div",{className:"projects__list__items__item__update-at",children:e.updated_at})]}),Object(v.jsx)("div",{className:"projects__list__items__item__section--right",children:void 0===_[e.id]?Object(v.jsx)("span",{onClick:function(){return x(e.commits_url.replace("{/sha}",""),e.id)},className:"projects__list__items__item__button",children:"pobierz commity"}):null}),_[e.id]&&_[e.id].length?Object(v.jsx)("ul",{className:"projects__list__items__item__commits",children:_[e.id].map((function(t,c){return Object(v.jsx)("li",{children:t.commit.message},"projects__".concat(e.created_at,"__commit__").concat(c))}))}):null]},"projects__".concat(e.created_at))}))})]}):null})},N=R;R.defaultProps={username:!1};var A={"Not Found":"Nie ma takiego u\u017cytkownika na GitHub"};var G=function(){var e=Object(a.b)(),t=Object(r.useState)(""),c=Object(p.a)(t,2),s=c[0],n=c[1],i=Object(r.useState)(!1),l=Object(p.a)(i,2),j=l[0],o=l[1],u=Object(r.useRef)(null);Object(r.useEffect)((function(){u.current.focus()}));var b=function(){var t=Object(y.a)(f.a.mark((function t(c){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),e(w(!1,"ERROR_SET_MESSAGE")),!s){t.next=10;break}return t.next=5,d();case 5:r=t.sent,o(r),r.message&&e(w(A[r.message]||r.message,"ERROR_SET_MESSAGE")),t.next=12;break;case 10:o(!1),e(w("brak loginu","ERROR_SET_MESSAGE"));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var e=Object(y.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"projects",children:[Object(v.jsx)("h1",{children:"Wyszukiwarka projekt\xf3w githubowych"}),Object(v.jsxs)("form",{onSubmit:b,className:"projects__form form",children:[Object(v.jsx)("p",{className:"form__label",children:"Podaj login z GitHub:"}),Object(v.jsx)("input",{type:"text",value:s,onChange:function(e){return n(e.target.value)},className:"form__input",ref:u}),Object(v.jsx)("button",{type:"submit",className:"form__button",children:"Pobierz"})]}),j&&!j.message?Object(v.jsx)(N,{username:j.login}):null]})},M=function(){return Object(v.jsxs)("div",{id:"Requirements",children:[Object(v.jsx)("h1",{children:"Za\u0142o\u017cenia aplikacji"}),Object(v.jsx)("p",{children:"Aplikacja ma si\u0119 sk\u0142ada\u0107 z minimum 3 ekran\xf3w:"}),Object(v.jsxs)("ol",{children:[Object(v.jsx)("li",{children:" Wyszukiwarka projekt\xf3w githubowych"}),Object(v.jsx)("li",{children:"Za\u0142o\u017cenia ca\u0142ej aplikacji"}),Object(v.jsx)("li",{children:"Wyliczanie silni"})]}),Object(v.jsx)("p",{children:"Ad 1"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Wykorzystane jest publiczne API Githuba;"}),Object(v.jsxs)("li",{children:["Czeka na podanie loginu u\u017cytkownika:",Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"waliduje poprawno\u015b\u0107;"}),Object(v.jsx)("li",{children:"obs\u0142uguje nieistniej\u0105ce loginy;"})]})]}),Object(v.jsxs)("li",{children:["wy\u015bwietla maksymalnie 5 projekt\xf3w w kolejno\u015bci od ostatnio updatowanego:",Object(v.jsx)("ul",{children:Object(v.jsx)("li",{children:"wy\u015bwietla maksymalnie 5 commit\xf3w ka\u017cdego z projekt\xf3w; "})})]})]}),Object(v.jsx)("p",{children:"Ad 2"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"wy\u015bwietla niniejsz\u0105 tre\u015b\u0107 (list\u0119 wymaga\u0144) z podobnym (takim samym) podzia\u0142em i uk\u0142adem; "}),Object(v.jsx)("li",{children:"prosz\u0119 zawrze\u0107 te\u017c autora aplikacji - w\u0142asne imi\u0119 i nazwisko; "})]}),Object(v.jsx)("p",{children:"Ad 3"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"input do podania liczby dla kt\xf3rej b\u0119dzie wyliczona silnia;"}),Object(v.jsx)("li",{children:"historia poprzednich wylicze\u0144. "})]}),Object(v.jsx)("p",{children:"Og\xf3lne"}),Object(v.jsxs)("ul",{children:[Object(v.jsxs)("li",{children:["korzysta z ",Object(v.jsx)("b",{children:"LESS / SASS"}),". Spe\u0142nia wymogi ",Object(v.jsx)("b",{children:"BEM"}),". Jest te\u017c ",Object(v.jsx)("b",{children:"estetyczna;"})]}),Object(v.jsxs)("li",{children:["wy\u015bwietla ",Object(v.jsx)("b",{children:"co drugi"})," element ka\u017cdej listy wyr\xf3\u017cnionym kolorem;"]}),Object(v.jsxs)("li",{children:["jest ",Object(v.jsx)("b",{children:"hostowana "}),"(github pages, heroku, itd..), a jej kod jest dost\u0119pny ",Object(v.jsx)("b",{children:"publicznie"}),"; "]}),Object(v.jsxs)("li",{children:["Mi\u0142o widziane u\u017cycie ",Object(v.jsx)("b",{children:"middlewar\xf3w reduxowych"}),"."]})]}),Object(v.jsx)("p",{children:"Autor: Pawe\u0142 Mieczkowski"})]})};var T=function(){var e=Object(a.c)((function(e){return e.error}));return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(O.c,{children:[Object(v.jsx)(O.a,{exact:!0,path:"/",children:Object(v.jsx)(G,{})}),Object(v.jsx)(O.a,{path:"/factorial",children:Object(v.jsx)(E,{})}),Object(v.jsx)(O.a,{path:"/requirements",children:Object(v.jsx)(M,{})})]})}),e.message?Object(v.jsx)(k,{}):null]})};i.a.render(Object(v.jsx)(a.a,{store:m,children:Object(v.jsx)(h.a,{children:Object(v.jsx)(T,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b9f541ba.chunk.js.map