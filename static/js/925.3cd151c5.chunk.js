"use strict";(self.webpackChunkcti=self.webpackChunkcti||[]).push([[925],{1466:function(t,e,n){n.d(e,{Z:function(){return b}});var a=n(8683),o=n(5671),c=n(3144),i=n(7326),r=n(136),l=n(8347),s=n(2791),u=n(184),p=function(t){(0,r.Z)(n,t);var e=(0,l.Z)(n);function n(t){var a;return(0,o.Z)(this,n),(a=e.call(this,t)).state={width:0},a}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var t=this;window.setTimeout((function(){var e=window.innerWidth-940;t.setState({width:e})}),333)}},{key:"render",value:function(){var t=this.props,e=t.label,n=t.text_color,a=t.activeTab,o=t.index,c=t.activateTab,i=t.imgurl,r=t.orientation,l=(this.state.width,a===o),s={width:"".concat(l?"".concat(window.innerWidth-940,"px"):"280px"),backgroundImage:"url(".concat(i,")"),color:n},p={height:"".concat(l?"".concat(500,"px"):"200px"),backgroundImage:"url(".concat(i,")"),color:n};return(0,u.jsx)("div",{className:"panel ".concat(""),role:"tabpanel","aria-expanded":l,children:(0,u.jsx)("div",{className:"panel__inner ".concat("horizontal"===r?"panel__inner_horizontal":""),style:"horizontal"===r?p:s,"aria-hidden":!l,children:(0,u.jsx)("button",{className:"panel__label ".concat("horizontal"===r?"panel__label_horizontal":""),role:"tab",onClick:c,children:(0,u.jsx)("h3",{className:"panel__title ".concat("horizontal"===r?"panel__title_horizontal":""),children:e})})})})}}]),n}(s.Component),d=function(t){(0,r.Z)(n,t);var e=(0,l.Z)(n);function n(t){var a;return(0,o.Z)(this,n),(a=e.call(this,t)).state={activeTab:0},a.activateTab=a.activateTab.bind((0,i.Z)(a)),a}return(0,c.Z)(n,[{key:"activateTab",value:function(t){this.setState((function(e){return{activeTab:e.activeTab===t?-1:t}}))}},{key:"render",value:function(){var t=this,e=this.props.panels,n=this.props.type,o=this.state.activeTab;return(0,u.jsx)("div",{className:"accordion ".concat("horizontal"===n?"accordion__type_horizontal":""),role:"tablist",children:e.map((function(e,c){return(0,u.jsxs)(s.Fragment,{children:[(0,u.jsx)(p,(0,a.Z)((0,a.Z)({activeTab:o,index:c,orientation:n},e),{},{activateTab:t.activateTab.bind(null,c)})),(0,u.jsxs)("div",{className:"panel__content-wrapper ".concat("horizontal"===n?"panel__content-wrapper_horizontal":""),style:{opacity:"".concat(o===c?"1":"0"),color:"".concat(e.text_color),transform:"".concat("horizontal"===n?"translateY(".concat(200*o,"px)"):"translateX(".concat(280*o,"px)"))},children:[(0,u.jsx)("h2",{className:"panel__subtitle ".concat("horizontal"===n?"panel__subtitle_horizontal":""),children:e.subtitle}),(0,u.jsx)("h2",{className:"panel__content-title ".concat(""),children:e.content_title}),(0,u.jsx)("p",{className:"panel__content ".concat("horizontal"===n?"panel__content_horizontal":""),children:e.content})]})]},c)}))})}}]),n}(s.Component),b=d},8733:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var a=n(2791),o=n(6331),c=n(161),i=n(234),r=n(3422),l=n(1071),s=n(7194),u={section:"databases",title:"\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 IT \u0440\u0435\u0448\u0435\u043d\u0438\u044f",bgimage:o,subtitle:"\u0413\u0440\u0430\u043c\u043e\u0442\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438"},p=[{label:"\u0410\u043d\u0430\u043b\u0438\u0437 \u0431\u0438\u0437\u043d\u0435\u0441-\u043c\u043e\u0434\u0435\u043b\u0438",subtitle:"555",text_color:"#36b5f0",content_title:"\u0410\u043d\u0430\u043b\u0438\u0437 \u0431\u0438\u0437\u043d\u0435\u0441-\u043c\u043e\u0434\u0435\u043b\u0438",content:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u044b\u0435 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 IT \u0440\u0435\u0448\u0435\u043d\u0438\u044f: \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c. \u0412\u0430\u0436\u043d\u0435\u0439\u0448\u0438\u043c \u0430\u0441\u043f\u0435\u043a\u0442\u043e\u043c, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0444\u043e\u043a\u0443\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0445\u0440\u0430\u043d\u0438\u043c\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438",imgurl:c},{label:"\u0412\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f",subtitle:"555",content_title:"\u0412\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f",text_color:"#95e616",content:"\u0412\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0435\u0434\u0438\u043d\u043e\u0433\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044e\u0449\u0435\u0433\u043e \u043f\u0440\u0435\u0436\u0434\u0435 \u0440\u0430\u0437\u0440\u043e\u0437\u043d\u0435\u043d\u043d\u044b\u0435 \u0438, \u043d\u0430 \u043f\u0435\u0440\u0432\u044b\u0439 \u0432\u0437\u0433\u043b\u044f\u0434, \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438. \u0424\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0441\u0432\u044f\u0437\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u0441\u0432\u043e\u0435 \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432\u0441\u0435\u0445 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u043c\u0435\u0441\u0442 \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0440\u043e\u043b\u0435\u0439",imgurl:i},{label:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",subtitle:"123",text_color:"#ef3a56",content_title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",content:"\u041e\u0441\u043e\u0431\u043e\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0443\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0438 \u044d\u0440\u0433\u043e\u043d\u043e\u043c\u0438\u0447\u043d\u043e\u0433\u043e \u201c\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e\u201d \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0443\u0434\u043e\u0431\u043d\u044b\u0445, \u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0445 \u0441\u0445\u0435\u043c \u0434\u0438\u0430\u043b\u043e\u0433\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",imgurl:r},{label:"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",subtitle:"321",content_title:"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",text_color:"#9bace7",content:"\u041f\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u043e\u0435 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u043e\u043c \u0432\u0441\u0435\u0445 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439, \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u0445 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0438\u0437\u043d\u0435\u0441-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432. \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u0432\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043f\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438. \u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",imgurl:l},{label:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",subtitle:"321",content_title:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",text_color:"#ffd900",content:"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0438 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0435 \u0438 \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043d\u0430 \u0432\u0441\u0435\u043c \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0438\u0445 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430",imgurl:s}],d=n(9420),b=n(691),f=n(1466),_=(n(2952),n(5506)),h=n(184);var v=function(){(0,a.useEffect)((function(){window.scrollTo(0,0)}),[]);var t=(0,a.useRef)(null);return(0,h.jsxs)("div",{className:"databases",children:[(0,h.jsx)(d.Z,{}),(0,h.jsx)(b.Z,{intro:u,nextRef:t}),(0,h.jsx)("div",{className:"databases__about",ref:t}),(0,h.jsx)("div",{className:"main__accordion",children:(0,h.jsx)(f.Z,{panels:p,type:"horizontal"})}),(0,h.jsx)(_.Z,{})]})}},691:function(t,e,n){n.d(e,{Z:function(){return c}});n(2791);var a=n(1180),o=n(184),c=function(t){var e=t.intro,n=t.nextRef,c=t.scroller,i={"--normal":"url(".concat(e.bgimage,")")};return(0,o.jsxs)("section",{className:"".concat(e.section,"__intro intro__wrapper"),style:i,children:[(0,o.jsx)("h2",{className:"intro__title ".concat(e.section,"__title"),children:e.title}),(0,o.jsx)("h3",{className:"intro__subtitle top_span  ".concat(e.section,"__subtitle"),children:e.subtitle}),c?null:(0,o.jsx)(a.Z,{refProp:n})]})}},1180:function(t,e,n){n.d(e,{Z:function(){return o}});n(2791);var a=n(184);var o=function(t){var e=t.refProp;return(0,a.jsxs)("div",{className:"scrolldown",onClick:function(){return t=e,void window.scrollTo({top:t.current.offsetTop,behavior:"smooth"});var t},children:[(0,a.jsx)("div",{className:"scrolldown__ico"}),(0,a.jsx)("div",{className:"scrolldown__ico"}),(0,a.jsx)("div",{className:"scrolldown__ico"})]})}},161:function(t,e,n){t.exports=n.p+"static/media/analyze.6d4e251b3b10329a7091.png"},234:function(t,e,n){t.exports=n.p+"static/media/concept.9567dc8f1e172654e3e7.png"},6331:function(t,e,n){t.exports=n.p+"static/media/databases2.7fa881edd836c83541d2.png"},1071:function(t,e,n){t.exports=n.p+"static/media/integration.f24f4aaed4ed1a379bef.png"},3422:function(t,e,n){t.exports=n.p+"static/media/interface.6c9bfcb8a6a508b4c140.png"},7194:function(t,e,n){t.exports=n.p+"static/media/support.b21a8df478d671025b13.png"},8683:function(t,e,n){function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=925.3cd151c5.chunk.js.map