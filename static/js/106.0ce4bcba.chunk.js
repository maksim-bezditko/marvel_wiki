"use strict";(self.webpackChunkmarvel_wiki=self.webpackChunkmarvel_wiki||[]).push([[106],{330:function(t,n,e){e.r(n),e.d(n,{default:function(){return Q}});var r=e(885);function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},a(t,n)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}var c=e(2);function l(t,n){if(n&&("object"===(0,c.Z)(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function u(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=s(t);if(n){var i=s(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return l(this,e)}}var p,d=e(791),h=e(184),x=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&a(t,n)}(c,t);var n,e,r,s=u(c);function c(){var t;i(this,c);for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(t=s.call.apply(s,[this].concat(e))).state={error:!1},t}return n=c,r=[{key:"getDerivedStateFromError",value:function(t){this.setState({error:!0})}}],(e=[{key:"render",value:function(){return this.state.error?(0,h.jsx)("h2",{children:"Something went wrong. Please, refresh th page"}):this.props.children}}])&&o(n.prototype,e),r&&o(n,r),Object.defineProperty(n,"prototype",{writable:!1}),c}(d.Component),f=e(168),m=e(444),g=e.p+"static/media/mjolnir.61f31e1809f12183a524.png",b=e(576),w=e(970),v=e(504),j=e(696),k=m.ZP.div(p||(p=(0,f.Z)(['\n\tdisplay: flex;\n\tbox-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);\n\t.card {\n\t\talign-items: center;\n\t\twidth: 50%;\n\t\tflex-basis: 50%;\n\t\tpadding: 35px 40px;\n\t\tdisplay: flex;\n\t\timg {\n\t\t\twidth: 180px;\n\t\t\theight: 190px;\n\t\t\tmargin-right: 30px;\n\t\t}\n\t\t.card-info {\n\t\t\th2 {\n\t\t\t\tfont-weight: 700;\n\t\t\t\tfont-family: "Roboto Condensed";\n\t\t\t\tfont-size: 22px;\n\t\t\t\tline-height: 29px;\n\t\t\t\tmargin-bottom: 10px;\n\t\t\t\tmargin-top: 0;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tjustify-content: flex-start;\n\t\t\t\twhite-space: nowrap;\n\t\t\t\toverflow: hidden;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\tmax-width: 250px;\n\t\t\t}\n\t\t\tp {\n\t\t\t\tfont-size: 14px;\n\t\t\t\tline-height: 16.41px;\n\t\t\t\tmargin-bottom: 13px;\n\t\t\t\t/* overflow-y: scroll; */\n\t\t\t\tmin-height: 80px;\n\t\t\t\twidth: 265px;\n\t\t\t\tdisplay: -webkit-box;\n\t\t\t\t-webkit-line-clamp: 5;\n\t\t\t\t-webkit-box-orient: vertical;  \n\t\t\t\toverflow: hidden;\n\n\t\t\t}\n\t\t\t.buttons {\n\t\t\t\tdisplay: flex;\n\t\t\t\trow-gap: 10px;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\ta {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\twidth: 101px;\n\t\t\t\t\theight: 38px;\n\t\t\t\t\tbackground-color: #9F0013;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\ttransition: transform 0.2s ease-in-out 0.1s;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tclip-path: polygon(100% 0, 100% 72%, 86% 100%, 0 100%, 0 30%, 13% 0);\n\t\t\t\t\t&:nth-child(2) {\n\t\t\t\t\t\tbackground-color: #5C5C5C;\n\t\t\t\t\t\tmargin-right: 33px;\n\t\t\t\t\t\t@media (max-width: 1089px) {\n\t\t\t\t\t\t\tmargin-right: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t&:nth-child(1) {\n\t\t\t\t\t\tmargin-right: 10px;\n\t\t\t\t\t}\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\ttransform: translateY(-4px);\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.banner {\n\t\tposition: relative;\n\t\tmin-width: 50%;\n\t\tflex-basis: 50%;\n\t\tbackground-color: black;\n\t\tpadding: 35px 40px;\n\t\th2 {\n\t\t\tfont-size: 24px;\n\t\t\tfont-weight: 700;\n\t\t\tcolor: white;\n\t\t\tposition: relative;\n\t\t\tz-index: 1;\n\t\t}\n\t\t.margin {\n\t\t\tmargin-bottom: 33px;\n\t\t}\n\t\tbutton {\n\t\t\ttext-transform: uppercase;\n\t\t\tposition: relative;\n\t\t\twidth: 101px;\n\t\t\theight: 38px;\n\t\t\tbackground-color: #9F0013;\n\t\t\tcolor: white;\n\t\t\tfont-size: 14px;\n\t\t\ttransition: all 0.2s ease-in-out 0.1s;\n\t\t\tcursor: pointer;\n\t\t\tmargin-top: 30px;\n\t\t\t&:before {\n\t\t\t\tcontent: "";\n\t\t\t\twidth: 10px;\n\t\t\t\theight: 20px;\n\t\t\t\ttransform: rotate(0.125turn) translate(-9px, -4px) ;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tbackground-color: black;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: "";\n\t\t\t\twidth: 10px;\n\t\t\t\theight: 20px;\n\t\t\t\ttransform: rotate(0.125turn) translate(9px, 4px);\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 0;\n\t\t\t\tright: 0;\n\t\t\t\tbackground-color: black;\n\t\t\t}\n\t\t\t&:hover {\n\t\t\t\ttransform: translateY(-4px);\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t\t.shield {\n\t\t\tposition: absolute;\n\t\t\tbottom: 14px;\n\t\t\tright: 0;\n\t\t\ttransform: translateX(30px);\n\t\t\tz-index: 0;\n\t\t\tmax-height: 300px;\n\t\t\tmax-width: 200px;\n\t\t}\n\t}\n'])));function y(){var t=(0,j.Z)(),n=t.error,e=t.loading,i=t.getCharacter,o=t.clearError,a=(0,d.useState)([]),s=(0,r.Z)(a,2),c=s[0],l=s[1],u=function(){o(),i().then((function(t){l({name:t.name,description:t.description,thumbnail:t.thumbnail,homepage:t.homepage,wiki:t.wiki,id:t.id})}))};(0,d.useEffect)(u,[]);var p=e?(0,h.jsx)(w.Z,{}):null,x=n?(0,h.jsx)(b.Z,{}):null,f=p||x?null:(0,h.jsx)(_,{char:c});return(0,h.jsxs)(k,{children:[(0,h.jsxs)("div",{className:"card",children:[p,x,f]}),(0,h.jsxs)("div",{className:"banner",children:[(0,h.jsx)("h2",{children:"Random character for today!"}),(0,h.jsx)("h2",{className:"margin",children:"Do you want to get to know him better?"}),(0,h.jsx)("h2",{children:"Or choose another one"}),(0,h.jsx)("button",{onClick:u,children:"Try it"}),(0,h.jsx)("img",{className:"shield",src:g,alt:"shield"})]})]})}var C,_=function(t){var n=t.char,e=n.thumbnail,r=n.name,i=n.description,o=n.id;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("img",{src:e||"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",alt:""}),(0,h.jsxs)("div",{className:"card-info",children:[(0,h.jsx)("h2",{children:r}),(0,h.jsx)("p",{children:i}),(0,h.jsxs)("div",{className:"buttons",children:[(0,h.jsx)(v.rU,{to:"/".concat(o),className:"homepage",children:"Homepage"}),(0,h.jsx)("a",{target:"_blank",rel:"noreferrer",href:r?"https://www.google.com/search?q=".concat(r.toLowerCase().split(" ").join("+")):"",className:"wiki",children:"Search"})]})]})]})},Z=e(982),N=m.ZP.div(C||(C=(0,f.Z)(["\n\theight: 318px;\n\twidth: 200px;\n\tflex-basis: 30.3%;\n\ttransition: all 0.3s ease-in-out 0.2s;\n\t.card {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\ttransition: all 0.2s;\n\t\tbox-shadow: ",";\n\t\t&:hover {\n\t\t\tbox-shadow: ",";\n\t\t\tcursor: pointer;\n\t\t}\n\t}\n\t.card img {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n\t.card {\n\t\t.name {\n\t\t\twidth: 200px;\n\t\t\theight: 118px;\n\t\t\tpadding: 15px;\n\t\t\ttext-transform: uppercase;\n\t\t\tfont-weight: 700;\n\t\t\tbackground-color: #232222;\n\t\t\tcolor: white;\n\t\t}\n\t}\n"])),(function(t){return t.active?"0px 5px 20px #9F0013":"none"}),(function(t){return t.active?"none":"0px 5px 20px #9F0013"}));function F(t){return(0,h.jsx)(N,{ref:t.updateRefs,onClick:t.onClick,active:t.active,children:(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("img",{src:t.thumbnail,alt:""}),(0,h.jsx)("div",{className:"name",children:t.name})]})})}var P,O,S=e(456);function E(){var t=(0,j.Z)(),n=t.error,e=t.loading,i=t.getCharacters,o=(0,d.useState)([]),a=(0,r.Z)(o,2),s=a[0],c=a[1],l=(0,d.useState)(210),u=(0,r.Z)(l,2),p=u[0],x=u[1],f=(0,d.useContext)(S.m),m=(0,d.useContext)(S.O).changeId,g=function(){c([]),x(null)};(0,d.useEffect)((function(){i(p).then((function(t){c((0,Z.Z)(t)),x(p+9)})).catch(g)}),[]),(0,d.useEffect)((function(){var t=setTimeout((function(){return document.addEventListener("scroll",v)}),100);return function(){clearTimeout(t),document.removeEventListener("scroll",v)}}));var v=function(){var t=document.documentElement;t.scrollHeight<=t.clientHeight+t.scrollTop&&function(){try{f(!0),i(p,!1).then((function(t){c((function(n){return[].concat((0,Z.Z)(n),(0,Z.Z)(t))})),x((function(t){return t+9}))})).then((function(){return f(!1)})).catch(g)}catch(n){throw new b.Z("Couldn't load from the server!")}}()},k=(0,d.useCallback)((function(t){m(t.id)}),[]),y=(0,d.useRef)([]),C=(0,d.useCallback)((function(){var t=s.map((function(t,n){return(0,h.jsx)(F,{name:t.name,thumbnail:t.thumbnail,onClick:function(){k(t),function(t){y.current.forEach((function(t){t.classList.remove("active1")})),y.current[t].classList.add("active1")}(n)},updateRefs:function(t){y.current[n]=t}},t.id)}));return(0,h.jsx)(I,{children:(0,h.jsx)(H,{children:t})})}),[s]),_=(0,d.useMemo)((function(){return n?(0,h.jsx)(b.Z,{}):null}),[n]),N=(0,d.useMemo)((function(){return e?(0,h.jsx)(w.Z,{}):null}),[e]),P=(0,d.useMemo)((function(){return(n||e)&&e?null:C()}),[s]);return(0,h.jsxs)(h.Fragment,{children:[_,P,N]})}var R,z,I=m.ZP.div(P||(P=(0,f.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbutton {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\ttext-transform: uppercase;\n\t\ttext-decoration: none;\n\t\tposition: relative;\n\t\twidth: 170px;\n\t\theight: 38px;\n\t\tbackground-color: #9F0013;\n\t\tcolor: white;\n\t\tfont-size: 14px;\n\t\ttransition: transform 0.2s ease-in-out 0.1s;\n\t\tcursor: pointer;\n\t\tclip-path: polygon(6% 0, 100% 0, 100% 74%, 95% 100%, 0 100%, 0 26%);\n\t\tmargin-top: 45px;\n\t\t&:hover:enabled {\n\t\t\ttransform: translateY(-4px);\n\t\t\tcursor: pointer;\n\t\t}\n\t\t&:disabled {\n\t\t\tfilter: grayscale(.5)\n\t\t}\n\t} \n"]))),H=m.ZP.div(O||(O=(0,f.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\trow-gap: 30px;\n\tcolumn-gap: 25px;\n\tmax-width: 650px;\n\tjustify-content: center;\n"]))),T=m.ZP.div(R||(R=(0,f.Z)(["\n\t.char__select {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t\tmargin-bottom: 30px;\n\t}\n\t.skeleton {\n\t\t&__header {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 40px auto;\n\t\t\tcolumn-gap: 10px;\n\t\t\talign-items: center;\n\t\t}\n\t\t&__circle {\n\t\t\twidth: 40px;\n\t\t\theight: 40px;\n\t\t\tbackground-color: #C4C4C4;\n\t\t\tborder-radius: 100%;\n\t\t\tanimation: test 2s linear;\n\t\t\tanimation-iteration-count: infinite;\n\t\t}\n\t\t@keyframes test {\n\t\t\t0% {\n\t\t\t\tbackground-color: #dedede;\n\t\t\t}\n\t\t\t50% {\n\t\t\t\tbackground-color: #b4b4b4;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\tbackground-color: #dedede;\n\t\t\t}\n\t\t}\n\t\t&__mini {\n\t\t\twidth: 100%;\n\t\t\theight: 16px;\n\t\t\tbackground-color: #C4C4C4;\n\t\t\tanimation: test 2s linear;\n\t\t\tanimation-iteration-count: infinite;\n\t\t}\n\t\t&__block {\n        \theight: 35px;\n        \twidth: 100%;\n        \tbackground-color: #C4C4C4;\n        \tmargin-top: 15px;\n\t\t\tanimation: test 2s linear;\n\t\t\tanimation-iteration-count: infinite;\n    \t}\n\t}\n"]))),A=function(){return(0,h.jsxs)(T,{children:[(0,h.jsx)("p",{className:"char__select",children:"Please select a character to see information \ud83d\udc48"}),(0,h.jsxs)("div",{className:"skeleton",children:[(0,h.jsxs)("div",{className:"pulse skeleton__header",children:[(0,h.jsx)("div",{className:"pulse skeleton__circle"}),(0,h.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,h.jsx)("div",{className:"pulse skeleton__block"}),(0,h.jsx)("div",{className:"pulse skeleton__block"}),(0,h.jsx)("div",{className:"pulse skeleton__block"})]})]})},L=e(871);function M(t,n){var e=function(t){return t.split(".")}(t);return function(t){for(var e=0,r=t.length;e<r;++e)n=n[t[e]];return n}(e)}function Y(t,n){!function(t){if(!Array.isArray(t))throw new Error("Input must be array.")}(n),n.length<2||n.sort((function(n,e){var r=M(t,n),i=M(t,e);return String(r)<String(i)?-1:1}))}function B(){var t=(0,d.useState)(""),n=(0,r.Z)(t,2),e=n[0],i=n[1],o=(0,d.useState)([]),a=(0,r.Z)(o,2),s=a[0],c=a[1],l=(0,j.Z)(),u=l.searchChar,p=(l.error,l.loading,(0,d.useContext)(S.m)),x=(0,d.useCallback)((function(t){p(!0),i(t.target.value),""!==t.target.value?u(t.target.value).then((function(t){p(!1),Y("name",t),c(t)})):(c([]),p(!1))}),[]),f=(0,L.s0)();return(0,h.jsx)(U,{children:(0,h.jsxs)("div",{className:"searchInput",children:[(0,h.jsx)("p",{children:"Wanna search for a particular character?\ud83e\uddd0"}),(0,h.jsx)("input",{type:"text",value:e,onChange:x,placeholder:"Mashaman, for example \ud83d\ude09"}),(0,h.jsx)("div",{className:"suggestions",children:s.map((function(t,n){return(0,h.jsx)("div",{onClick:function(){return f("/".concat(t.id))},className:"suggestion",children:t.name},n)}))})]})})}var D,q,U=m.ZP.div(z||(z=(0,f.Z)(["\n\tmargin-top: 20px;\n\tp {\n\t\tmargin-bottom: 10px;\n\t}\n\t.searchInput {\n\t\tinput:focus {\n\t\t\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.267);\n\t\t\toutline: none;\n\t\t}\n\t\tinput {\n\t\t\twidth: 100%;\n\t\t\theight: 38px;\n\t\t\tbackground: #FFFFFF;\n\t\t\tbox-shadow: 0px 0px 8px rgba(0, 0, 0, 0.447);\n\t\t\tpadding: 10px;\n\t\t\tfont-family: 'Roboto Condensed';\n\t\t\tfont-weight: 400;\n\t\t\tfont-size: 14px;\n\t\t\tline-height: 16px;\n\t\t\tcolor: rgba(0, 0, 0, 0.782);\n\t\t\ttransition: all 0.2s ease-in-out 0.1s;\n\t\t}\n\t}\n\t.suggestions {\n\t\t::-webkit-scrollbar {\n\t\t\twidth: 3px;\n\t\t}\n\t\t::-webkit-scrollbar-track {\n\t\t\tbackground: transparent;\n\t\t}\n\t\t::-webkit-scrollbar-thumb {\n\t\t\tbackground: #7a7a7aa1;\n\t\t}\n\t\t::-webkit-scrollbar-thumb:hover {\n\t\t\tbackground: #555;\n\t\t}\n\t\tbox-shadow: 0px 0px 8px rgba(0, 0, 0, 0.342);\n\t\tmargin-top: 7px;\n\t\tmax-height: 120px;\n\t\toverflow-y: scroll;\n\t\t.suggestion {\n\t\t\tbackground-color: #dddddd8f;\n\t\t\tpadding: 5px;\n\t\t\tborder-bottom: 1px solid #FFFFFF;\n\t\t\tborder-radius: 2px;\n\t\t\tcursor: pointer;\n\t\t\tbox-sizing: content-box;\n\t\t}\n\t}\n"])));function W(){var t=(0,j.Z)(),n=t.error,e=t.loading,i=t.getCharacterById,o=(0,d.useState)(null),a=(0,r.Z)(o,2),s=a[0],c=a[1],l=(0,d.useContext)(S.O).charId;(0,d.useEffect)((function(){l&&(c(null),i(l).then((function(t){return c({name:t.name,id:t.id,homepage:t.homepage,wiki:t.wiki,description:t.description,comics:t.comics,thumbnail:t.thumbnail})})).catch((function(){return c(null)})))}),[l]);var u=s||e||n?null:(0,h.jsx)(A,{}),p=n?(0,h.jsx)(b.Z,{height:400}):null,x=e?(0,h.jsx)(w.Z,{}):null,f=e||n||!s?null:(0,h.jsx)(X,{char:s});return(0,h.jsxs)(J,{children:[(0,h.jsxs)(G,{maxHeight:document.documentElement.clientHeight-400,children:[p,x,u,f]}),(0,h.jsx)(B,{})]})}var X=function(t){var n=t.char,e=n.thumbnail,r=n.name,i=n.comics,o=n.description,a=n.id,s=(0,L.s0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"main",children:[(0,h.jsx)("img",{src:e,className:"avatar",alt:""}),(0,h.jsxs)("div",{className:"name_and_links",children:[(0,h.jsx)("h2",{children:r}),(0,h.jsxs)("div",{className:"buttons",children:[(0,h.jsx)(v.rU,{to:"/".concat(a),className:"homepage",children:"Homepage"}),(0,h.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/search?q=".concat(r.toLowerCase().split(" ").join("+")),className:"wiki",children:"Search"})]})]})]}),(0,h.jsx)("div",{className:"description",children:o}),(0,h.jsxs)("div",{className:"comics",children:[(0,h.jsx)("div",{className:"heading",children:"Comics:"}),(0,h.jsxs)("div",{className:"items",children:[i.length?null:"No comics about the character",i.map((function(t,n){return(0,h.jsx)("div",{onClick:function(){return s("/comics/".concat(t.id))},className:"item",children:t.name},n)}))]})]})]})},G=m.ZP.div(D||(D=(0,f.Z)(["\n\t/* width */\n\t::-webkit-scrollbar {\n\t\twidth: 3px;\n\t}\n\n\t/* Track */\n\t::-webkit-scrollbar-track {\n\t\tbackground: transparent;\n\t}\n\n\t/* Handle */\n\t::-webkit-scrollbar-thumb {\n\t\tbackground: #7a7a7aa1;\n\t}\n\n\t/* Handle on hover */\n\t::-webkit-scrollbar-thumb:hover {\n\t\tbackground: #555;\n\t}\n\n\tmax-height: ",";\n\twidth: 425px;\n\talign-self: flex-start;\n\tbackground-color: white;\n\toverflow-y: scroll;\n\tpadding: 25px;\n\tbox-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);\n\timg {\n\t\tdisplay: block;\n\t}\n\t.main {\n\t\tdisplay: flex;\n\t\t.avatar {\n\t\t\twidth: 150px;\n\t\t\theight: auto;\n\t\t\tmargin-right: 25px;\n\t\t}\n\t\t.name_and_links {\n\t\t\th2 {\n\t\t\t\tfont-family: 'Roboto Condensed';\n\t\t\t\tfont-weight: 700;\n\t\t\t\tfont-size: 22px;\n\t\t\t\tline-height: 26px;\n\t\t\t\tcolor: #000000;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t\tmargin-bottom: 35px;\n\t\t\t}\n\t\t\t.buttons {\n\t\t\t\tdisplay: flex;\n\t\t\t\trow-gap: 10px;\n\t\t\t\tjustify-content: space-between;\n\t\t\t\tflex-wrap: wrap;\n\t\t\t\ta {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\twidth: 101px;\n\t\t\t\t\theight: 38px;\n\t\t\t\t\tbackground-color: #9F0013;\n\t\t\t\t\tcolor: white;\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\ttransition: transform 0.2s ease-in-out 0.1s;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tclip-path: polygon(100% 0, 100% 72%, 86% 100%, 0 100%, 0 30%, 13% 0);\n\t\t\t\t\t&:nth-child(2) {\n\t\t\t\t\t\tbackground-color: #5C5C5C;\n\t\t\t\t\t\tmargin-right: 33px;\n\t\t\t\t\t\t@media (max-width: 1089px) {\n\t\t\t\t\t\t\tmargin-right: 0;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t&:nth-child(1) {\n\t\t\t\t\t\tmargin-right: 10px;\n\t\t\t\t\t}\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\ttransform: translateY(-4px);\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t\t/* @media (max-width: 1089px) {\n\t\t\t\t\t\twidth: 100%;\n\n\t\t\t\t\t} */\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t.description {\n\t\tmargin-top: 15px;\n\t\tmargin-bottom: 10px;\n\t\tfont-family: 'Roboto Condensed';\n\t\tfont-weight: 400;\n\t\tfont-size: 14px;\n\t\tline-height: 16px;\n\t\tcolor: #000000;\n\t}\n\t.comics {\n\t\t.heading {\n\t\t\tfont-family: 'Roboto Condensed';\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 18px;\n\t\t\tline-height: 21px;\n\t\t\tcolor: #000000;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t\t.items {\n\t\t\t.item {\n\t\t\t\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\t\t\t\twidth: 375px;\n\t\t\t\t/* height: 25px; */\n\t\t\t\tfont-family: 'Roboto Condensed';\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 14px;\n\t\t\t\tline-height: 16px;\n\t\t\t\tcolor: #000000;\n\t\t\t\tpadding: 4px 10px;\n\t\t\t\t&:not(:last-child) {\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t}\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.maxHeight+"px"})),J=m.ZP.div(q||(q=(0,f.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: sticky;\n\ttop: 10px;\n\talign-self: flex-start;\n"]))),K=S.O.Provider,Q=function(){var t=(0,d.useState)(null),n=(0,r.Z)(t,2),e=n[0],i=n[1],o=(0,d.useCallback)((function(t){i(t)}),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{children:(0,h.jsx)(y,{})}),(0,h.jsx)("div",{className:"characters",children:(0,h.jsxs)(K,{value:{changeId:o,charId:e},children:[(0,h.jsx)(x,{children:(0,h.jsx)(E,{})}),(0,h.jsx)(W,{})]})})]})}},982:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(907);var i=e(181);function o(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,i.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=106.0ce4bcba.chunk.js.map