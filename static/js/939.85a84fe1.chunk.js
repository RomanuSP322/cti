"use strict";(self.webpackChunkcti=self.webpackChunkcti||[]).push([[939],{1466:function(t,e,a){a.d(e,{Z:function(){return b}});var n=a(8683),c=a(5671),s=a(3144),i=a(7326),r=a(136),o=a(8347),l=a(2791),d=a(184),_=function(t){(0,r.Z)(a,t);var e=(0,o.Z)(a);function a(){return(0,c.Z)(this,a),e.apply(this,arguments)}return(0,s.Z)(a,[{key:"render",value:function(){var t=this.props,e=t.label,a=t.text_color,n=t.activeTab,c=t.index,s=t.activateTab,i=t.imgurl,r=t.openedWidth,o=t.closedWidth,l=t.orientation,_=t.length,u=n===c,p={width:"".concat("".concat(u?r:o,"px")),backgroundImage:"url(".concat(i,")"),color:a},b={height:"".concat(u?"".concat(500,"px"):"200px"),backgroundImage:"url(".concat(i,")"),color:a};return(0,d.jsx)("div",{className:"panel ".concat(""," ").concat(c===_-1?"":"panel__border"),"aria-expanded":u,children:(0,d.jsx)("div",{className:"panel__inner ".concat("horizontal"===l?"panel__inner_horizontal":""),style:"horizontal"===l?b:p,"aria-hidden":!u,children:(0,d.jsx)("button",{className:"panel__label ".concat("horizontal"===l?"panel__label_horizontal":""),role:"tab",onClick:s,children:(0,d.jsx)("h3",{className:"panel__title ".concat("horizontal"===l?"panel__title_horizontal":""),children:e})})})})}}]),a}(l.Component),u=_,p=function(t){(0,r.Z)(a,t);var e=(0,o.Z)(a);function a(t){var n;return(0,c.Z)(this,a),(n=e.call(this,t)).state={activeTab:0},n.activateTab=n.activateTab.bind((0,i.Z)(n)),n}return(0,s.Z)(a,[{key:"activateTab",value:function(t){this.setState((function(e){return{activeTab:e.activeTab===t?-1:t}}))}},{key:"render",value:function(){var t=this,e=this.props.panels,a=this.props.type,c=this.state.activeTab,s=e.length,i=window.innerWidth/2+50,r=i/s+20;return(0,d.jsx)("div",{className:"accordion ".concat("horizontal"===a?"accordion__type_horizontal":""),role:"tablist",children:e.map((function(e,o){return(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(u,(0,n.Z)((0,n.Z)({activeTab:c,index:o,orientation:a,openedWidth:i,closedWidth:r,length:s},e),{},{activateTab:t.activateTab.bind(null,o)})),(0,d.jsxs)("div",{className:"panel__content-wrapper ".concat("horizontal"===a?"panel__content-wrapper_horizontal":""),style:{opacity:"".concat(c===o?"1":"0"),color:"".concat(e.text_color),transform:"".concat("horizontal"===a?"translateY(".concat(200*c,"px)"):"translateX(".concat(c*r,"px)"))},children:[(0,d.jsx)("h2",{className:"panel__subtitle ".concat("horizosntal"===a?"panel__subtitle_disable":""),children:e.subtitle}),(0,d.jsx)("h2",{className:"panel__content-title ".concat(""),children:e.content_title}),(0,d.jsx)("p",{className:"panel__content ".concat("horizontal"===a?"panel__content_horizontal":""),children:e.content})]})]},o)}))})}}]),a}(l.Component),b=p},7939:function(t,e,a){a.r(e),a.d(e,{default:function(){return z}});var n=a(8683),c=a(885),s=a(2791),i=a(6331),r=a(161),o=a(234),l=a(3422),d=a(1071),_=a(7194),u=a(8116),p=a(650),b=a(5197),m=a(4785),h={section:"databases",title:"\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 IT \u0440\u0435\u0448\u0435\u043d\u0438\u044f",bgimage:i,subtitle:"\u0413\u0440\u0430\u043c\u043e\u0442\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0441\u0438\u0441\u0442\u0435\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438"},f=[{label:"\u0410\u043d\u0430\u043b\u0438\u0437 \u0431\u0438\u0437\u043d\u0435\u0441-\u043c\u043e\u0434\u0435\u043b\u0438",subtitle:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 IT \u0440\u0435\u0448\u0435\u043d\u0438\u0439",text_color:"#36b5f0",content_title:"\u0410\u043d\u0430\u043b\u0438\u0437 \u0431\u0438\u0437\u043d\u0435\u0441-\u043c\u043e\u0434\u0435\u043b\u0438",content:"\u041d\u0430\u0448\u0438 \u043e\u043f\u044b\u0442 \u0438 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0438\u0437\u0430 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0438\u0441\u0442\u0435\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u0440\u0435\u0434\u043f\u043e\u043b\u0430\u0433\u0430\u044e\u0442 \u0441\u0435\u0440\u044c\u0435\u0437\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043f\u0440\u043e\u0435\u043a\u0442\u043d\u044b\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u043f\u043e \u043e\u0431\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438, \u0441\u0431\u043e\u0440 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043e \u043f\u043e\u0442\u043e\u043a\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f",imgurl:r},{label:"\u0412\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 ",subtitle:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 IT \u0440\u0435\u0448\u0435\u043d\u0438\u0439",content_title:"\u0412\u044b\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438",text_color:"#95e616",content:"\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0435\u0434\u0438\u043d\u043e\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u044f \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0434\u0432\u043e\u0439\u043d\u0438\u043a \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439. \u0424\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0441\u0432\u044f\u0437\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u0441\u0432\u043e\u0435 \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432\u0441\u0435\u0445 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u043c\u0435\u0441\u0442 \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0440\u043e\u043b\u0435\u0439",imgurl:o},{label:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430",subtitle:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 IT \u0440\u0435\u0448\u0435\u043d\u0438\u0439",text_color:"#ef3a56",content_title:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 ",content:"\u041e\u0441\u043e\u0431\u043e\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0443\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0438 \u044d\u0440\u0433\u043e\u043d\u043e\u043c\u0438\u0447\u043d\u043e\u0433\u043e \u201c\u0434\u0440\u0443\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e\u201d \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430, \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0443\u0434\u043e\u0431\u043d\u044b\u0445, \u0438\u043d\u0442\u0443\u0438\u0442\u0438\u0432\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0445 \u0441\u0445\u0435\u043c \u0434\u0438\u0430\u043b\u043e\u0433\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",imgurl:l},{label:"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",subtitle:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 IT \u0440\u0435\u0448\u0435\u043d\u0438\u0439",content_title:"\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 ",text_color:"#9bace7",content:"\u041f\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u043e\u0435 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0430\u043d\u0430\u043b\u0438\u0437 \u0438 \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c, \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u0445 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0438\u0437\u043d\u0435\u0441-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432. \u041f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438, \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u0432\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043f\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438. \u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",imgurl:d},{label:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",subtitle:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 IT \u0440\u0435\u0448\u0435\u043d\u0438\u0439",content_title:"\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435 ",text_color:"#ffd900",content:"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0438 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0435 \u0438 \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043d\u0430 \u0432\u0441\u0435\u043c \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0438\u0445 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0446\u0438\u043a\u043b\u0430",imgurl:_}],x=[{title:"\u0410\u0418\u0421 \u041a\u0420\u0421 \u0422\u0440\u0430\u043d\u0441\u044d\u043d\u0435\u0440\u0433\u043e",subtitle:"",description:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438 \u043f\u043e \u0440\u0435\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0443 \u0438 \u043a\u0430\u043f\u0438\u0442\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0440\u0435\u043c\u043e\u043d\u0442\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0436\u0435\u043b\u0435\u0437\u043d\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u043e\u0433\u043e \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 \u0434\u043b\u044f \u0422\u0440\u0430\u043d\u0441\u044d\u043d\u0435\u0440\u0433\u043e.",image:p,path:"projects/22069"},{title:"\u0421\u0418\u041e\u041f \u0413\u0423\u041f \u0413\u042d\u0422",subtitle:"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043a\u043e\u0433\u043e \u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0443\u043d\u0438\u0442\u0430\u0440\u043d\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u044f \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0433\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430",description:"\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0438\u0437\u043d\u0435\u0441-\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438, \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0435\u043c\u043e\u043d\u0442\u0430 \u043f\u043e\u0434\u0432\u0438\u0436\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u0430\u0432\u0430 \u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b.",image:u,path:"projects/22070"},{title:"\u0421\u0422\u0423\u041f\u041f\u041a",subtitle:"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0433\u043e\u0440\u043e\u0434\u043d\u044b\u043c \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0441\u043a\u0438\u043c \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043e\u043c",description:"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u0433\u0440\u0430\u0436\u0434\u0430\u043d \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0439 \u043f\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044e \u041f\u041f\u041a, \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0441\u043a\u0438\u0445 \u043e\u0431\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432, \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 \u0438 \u0440\u0435\u043c\u043e\u043d\u0442\u043e\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u041f\u041f\u041a. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438 \u0421\u0422\u0423\u041f\u041f\u041a \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a\u0438 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0430 \u041e\u0410\u041e \xab\u0420\u0416\u0414\xbb, \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u044b\u0435 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u043f\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0441\u043a\u043e\u0433\u043e \u0445\u043e\u043b\u0434\u0438\u043d\u0433\u0430 \xab\u0420\u0416\u0414\xbb, \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u0447\u0438\u043a\u0438 \u043f\u0440\u0438\u0433\u043e\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f.",image:b,path:"projects/22067"},{title:"\u041a\u0410\u0421 \u0410\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u0430 \u0421\u0426\u0411",subtitle:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0430\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u044b \u0421\u0426\u0411",description:"\u0415\u0434\u0438\u043d\u044b\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441 \u0434\u043b\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043e \u043c\u0435\u0441\u0442\u043e\u043d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438, \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0439, \u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043e\u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u044b, \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u043e\u0432 \u0432 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u0430\u0441\u0442\u0435\u0440\u0441\u043a\u0438\u0445 \u0438 \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0430\u0445 \u0421\u0426\u0411. \u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u043e\u0442\u043a\u0430\u0437\u044b \u0432 \u0440\u0430\u0431\u043e\u0442\u0435 \u043f\u0440\u0438\u0431\u043e\u0440\u043e\u0432, \u0441\u0432\u043e\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u044c \u0432 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0443\u0440\u044b.",image:m,path:"projects/22071"}],g=a(1961),j=a(691),v=a(1466),N=a(2952),Z=a(3040),w=a(184);var y=function(t){var e=t.title,a=t.subtitle,n=t.description,c=t.image,s=t.path,i=t.theme,r=t.imgpos,o=t.columns;return(0,w.jsx)("div",{className:"database-case ".concat("dark"===i?"database-case__theme_dark":""),children:(0,w.jsxs)("div",{className:"database-case__content ".concat("right"===r?"database-case__content_right":""),children:[(0,w.jsx)("div",{className:"database-case__column",children:(0,w.jsx)("img",{src:c,alt:"img",className:"database-case__image database-case__image_column",draggable:"false"})}),(0,w.jsx)("div",{className:"database-case__column ",children:(0,w.jsxs)("div",{className:"database-case__description ".concat("dark"===i?"database-case__description_dark":""),children:[(0,w.jsx)("h2",{className:"database-case__title",children:e}),(0,w.jsx)("h3",{className:"database-case__subtitle",children:a}),"1"===o?(0,w.jsx)("img",{src:c,alt:"img",className:"database-case__image",draggable:"false"}):null,(0,w.jsx)("p",{className:"database-case__article",children:n}),(0,w.jsx)("div",{className:"database-case__btn-more",children:(0,w.jsx)(Z.Z,{direction:s,text:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})]})})]})})},k=a(1962),C=a(1925),T=a(9780);var z=function(){var t=(0,s.useState)(window.innerWidth),e=(0,c.Z)(t,2),a=e[0],i=e[1];(0,s.useEffect)((function(){function t(){i(window.innerWidth)}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);var r=(0,s.useRef)(null);return(0,w.jsxs)("div",{className:"databases",children:[(0,w.jsx)(g.Z,{}),(0,w.jsx)(j.Z,{intro:h,nextRef:r}),(0,w.jsx)("div",{className:"main__accordion",ref:r,children:(0,w.jsx)(v.Z,{panels:f,type:a<1101?"horizontal":"vertical"})}),(0,w.jsx)(N.Z,{pos:"up",svg:"M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,138.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"}),(0,w.jsxs)("div",{className:"databases__platform databases__about",children:[(0,w.jsxs)("div",{className:"databases__platform_column ",children:[(0,w.jsx)("h2",{className:"databases__platform_title databases__about_title ",children:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u043d\u0430 \u0431\u0430\u0437\u0435 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b LSS"}),(0,w.jsx)("p",{className:"databases__platform_article databases__about_article",children:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 LSS - \u044d\u0442\u043e \u0435\u0434\u0438\u043d\u0430\u044f \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f, \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438\xa0WEB \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445\xa0\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0441\xa0\u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445\xa0\u043f\u043e 3-\u0445 \u0437\u0432\u0435\u043d\u043d\u043e\u0439 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435. \u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u043a\u043e\u0440\u0438\u0442\u044c \u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0442\u0440\u0430\u0441\u043b\u0435\u0432\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c \u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u043e\u0442\u043a\u0430\u0437\u043e\u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0441\u0442\u044c \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u044b\u0445 \u0440\u0435\u0448\u0435\u043d\u0438\u0439."}),(0,w.jsx)("div",{className:"databases__platform_btn",children:(0,w.jsx)(Z.Z,{direction:"#",text:"\u0427\u0438\u0442\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435",type:"learn_more"})})]}),(0,w.jsx)("img",{className:"databases__platform_img",src:T,alt:"img",draggable:"false"})]}),(0,w.jsxs)("div",{className:"databases__about",children:[(0,w.jsx)("h2",{className:"databases__about_title",children:"\u0411\u043e\u0433\u0430\u0442\u044b\u0439 \u043e\u043f\u044b\u0442 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0438 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c"}),(0,w.jsxs)("div",{className:"databases__about_content",children:[(0,w.jsx)("p",{className:"databases__about_article",children:"\u0426\u0422\u0418 \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u043a\u0440\u0443\u043f\u043d\u044b\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044e\u0442 \u0432 \u0441\u0435\u0431\u0435 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u043d\u043e\u0440\u043e\u0434\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438. \u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0442\u0449\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0430 \u043a \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u043d\u0438\u043c. \u0422\u0430\u043a\u0436\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0445\u0440\u0430\u043d\u0438\u043c\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u0435\u0435 \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u043d\u0435\u0441\u0430\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u0414\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u041c\u044b \u043d\u0430\u043a\u043e\u043f\u0438\u043b\u0438 \u0431\u043e\u0433\u0430\u0442\u044b\u0439 \u043e\u043f\u044b\u0442 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u044f\u0445, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u043e\u0439 \u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c."}),(0,w.jsx)("img",{className:"databases__about_img",src:C,alt:"img",draggable:"false"})]})]}),(0,w.jsx)(y,(0,n.Z)((0,n.Z)({},x[0]),{},{columns:a<951?"1":"2"})),(0,w.jsx)(y,(0,n.Z)((0,n.Z)({},x[1]),{},{imgpos:"right",columns:a<951?"1":"2"})),(0,w.jsx)(N.Z,{pos:"down",svg:"M0,64L60,64C120,64,240,64,360,96C480,128,600,192,720,192C840,192,960,128,1080,96C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"}),(0,w.jsx)(y,(0,n.Z)((0,n.Z)({},x[2]),{},{theme:"dark",columns:a<951?"1":"2"})),(0,w.jsx)(y,(0,n.Z)((0,n.Z)({},x[3]),{},{theme:"dark",imgpos:"right",columns:a<951?"1":"2"})),(0,w.jsx)(k.Z,{})]})}},691:function(t,e,a){a.d(e,{Z:function(){return s}});a(2791);var n=a(1180),c=a(184),s=function(t){var e=t.intro,a=t.nextRef,s=t.scroller,i={"--normal":"url(".concat(e.bgimage,")")};return(0,c.jsxs)("section",{className:"".concat(e.section,"__intro intro__wrapper"),style:i,children:[(0,c.jsx)("h2",{className:"intro__title ".concat(e.section,"__title"),children:e.title}),(0,c.jsx)("h3",{className:"intro__subtitle top_span  ".concat(e.section,"__subtitle"),children:e.subtitle}),s?null:(0,c.jsx)(n.Z,{refProp:a})]})}},3040:function(t,e,a){a.d(e,{Z:function(){return s}});a(2791);var n=a(9271),c=a(184);var s=function(t){var e=t.direction,a=t.text,s=t.type,i=(0,n.k6)();return(0,c.jsxs)("button",{className:"more__btn ".concat("learn_more"===s?"more__btn_large":""),onClick:function(){return t=e,void i.push("/".concat(t));var t},children:[(0,c.jsx)("span",{className:"circle","aria-hidden":"true",children:(0,c.jsx)("span",{className:"more__icon more__arrow"})}),(0,c.jsx)("p",{className:"more__text",children:a})]})}},1180:function(t,e,a){a.d(e,{Z:function(){return c}});a(2791);var n=a(184);var c=function(t){var e=t.refProp;return(0,n.jsxs)("div",{className:"scrolldown",onClick:function(){return t=e,void window.scrollTo({top:t.current.offsetTop,behavior:"smooth"});var t},children:[(0,n.jsx)("div",{className:"scrolldown__ico"}),(0,n.jsx)("div",{className:"scrolldown__ico"}),(0,n.jsx)("div",{className:"scrolldown__ico"})]})}},650:function(t,e,a){t.exports=a.p+"static/media/aistransenergo.17ada2ea6b71a9f836ef.png"},161:function(t,e,a){t.exports=a.p+"static/media/analyze.968383f12e98b5735178.png"},234:function(t,e,a){t.exports=a.p+"static/media/concept.fc82ad2413ace5b0e371.png"},6331:function(t,e,a){t.exports=a.p+"static/media/databases2.8e1354e31037613dc748.png"},8116:function(t,e,a){t.exports=a.p+"static/media/gupget.785cf75668772ab62053.png"},1071:function(t,e,a){t.exports=a.p+"static/media/integration.cfb5880bdeb8f4b8e4ec.png"},3422:function(t,e,a){t.exports=a.p+"static/media/interface.2a6cf065148c1f9860d1.png"},1925:function(t,e,a){t.exports=a.p+"static/media/itabout.ef0bfe2c5de62804c90e.png"},9780:function(t,e,a){t.exports=a.p+"static/media/platformthree.baaa630dcea8bfc69416.png"},4785:function(t,e,a){t.exports=a.p+"static/media/scb.55ce3b55c397a6cc706d.png"},5197:function(t,e,a){t.exports=a.p+"static/media/stuppk.51b241e637db3ee1b479.png"},7194:function(t,e,a){t.exports=a.p+"static/media/support.6465e36788c1608a7a11.png"},8683:function(t,e,a){function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a.d(e,{Z:function(){return s}})}}]);
//# sourceMappingURL=939.85a84fe1.chunk.js.map