(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[33],{393:function(e,t,n){"use strict";n(2);var a=n(39),r=n(433),c=n(436),o=n(300),i=n(310),s=n(95),l=n(378),u=n(74),b=n(75),d=n(40),m=n(22),j=n(0),f={toggleList:d.q},p=Object(a.b)((function(e){return{sidebarOpen:e.system.sidebarOpen,operatorMode:e.system.operatorMode,managerObjects:e.objectBrowser.objectManager.objectsToManage}}),f);t.a=p(Object(i.a)((function(e){return Object(o.a)({headerContainer:{width:"100%",minHeight:79,display:"flex",backgroundColor:"#fff",left:0,boxShadow:"rgba(0,0,0,.08) 0 3px 10px"},label:{display:"flex",justifyContent:"flex-start",alignItems:"center"},labelStyle:{color:"#000",fontSize:18,fontWeight:700,marginLeft:34,marginTop:8},rightMenu:{textAlign:"right"},logo:{marginLeft:34,fill:e.palette.primary.main,"& .min-icon":{width:120}}})}))((function(e){var t=e.classes,n=e.label,a=e.actions,o=e.sidebarOpen,i=e.operatorMode,d=e.managerObjects,f=e.toggleList;return Object(j.jsxs)(c.a,{container:!0,className:"".concat(t.headerContainer," page-header"),direction:"row",alignItems:"center",children:[Object(j.jsx)(r.a,{display:{xs:"block",sm:"block",md:"none"},children:Object(j.jsx)(c.a,{item:!0,xs:12,style:{height:10},children:"\xa0"})}),Object(j.jsxs)(c.a,{item:!0,xs:12,sm:12,md:6,className:t.label,children:[!o&&Object(j.jsx)("div",{className:t.logo,children:i?Object(j.jsx)(u.a,{}):Object(j.jsx)(b.a,{})}),Object(j.jsx)(s.a,{variant:"h4",className:t.labelStyle,children:n})]}),Object(j.jsxs)(c.a,{item:!0,xs:12,sm:12,md:6,className:t.rightMenu,children:[a&&a,d&&d.length>0&&Object(j.jsx)(l.a,{color:"primary","aria-label":"Refresh List",component:"span",onClick:function(){f()},size:"large",children:Object(j.jsx)(m.ob,{})})]})]})})))},395:function(e,t,n){"use strict";var a=n(1),r=(n(2),n(436)),c=n(300),o=n(310),i=n(120),s=n(0);t.a=Object(o.a)((function(e){return Object(c.a)(Object(a.a)({},i.r))}))((function(e){var t=e.classes,n=e.className,a=void 0===n?"":n,c=e.children;return Object(s.jsx)("div",{className:t.contentSpacer,children:Object(s.jsx)(r.a,{container:!0,children:Object(s.jsx)(r.a,{item:!0,xs:12,className:a,children:c})})})}))},403:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},418:function(e,t,n){"use strict";n(2);var a=n(21),r=n(300),c=n(310),o=n(22),i=n(0);t.a=Object(c.a)((function(e){return Object(r.a)({link:{display:"flex",alignItems:"center",textDecoration:"none",maxWidth:"250px",padding:"2rem 2rem 0rem 2rem",color:e.palette.primary.light,fontSize:".8rem","&:hover":{textDecoration:"underline"}},icon:{marginRight:".3rem",display:"flex",alignItems:"center",justifyContent:"center"}})}))((function(e){var t=e.to,n=e.label,r=e.classes,c=e.className;return Object(i.jsxs)(a.a,{to:t,className:"".concat(r.link," ").concat(c||""),children:[Object(i.jsx)("div",{className:r.icon,children:Object(i.jsx)(o.g,{})}),Object(i.jsx)("div",{className:r.label,children:n})]})}))},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(78);function r(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}},424:function(e,t,n){"use strict";var a=n(1),r=n(2),c=n(0);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function n(n){return Object(c.jsx)(r.Suspense,{fallback:t,children:Object(c.jsx)(e,Object(a.a)({},n))})}return n}},426:function(e,t,n){"use strict";var a=n(1),r=n(6),c=n(403),o=(n(2),n(300)),i=n(310),s=n(378),l=n(376),u=n(7),b=n(0),d=["classes","children","variant","tooltip"];t.a=Object(i.a)((function(e){return Object(o.a)({root:{padding:8,marginLeft:8,borderWidth:1,borderColor:"#696969",color:"#696969",borderStyle:"solid",borderRadius:3,"& .min-icon":{width:20},"& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.main,borderRadius:3,opacity:.3},"&:disabled":{color:"#EBEBEB",borderColor:"#EBEBEB"}},contained:{borderColor:e.palette.primary.main,background:e.palette.primary.main,color:"white","& .MuiTouchRipple-root span":{backgroundColor:e.palette.primary.dark,borderRadius:3,opacity:.3},"&:hover":{backgroundColor:e.palette.primary.light,color:"#FFF"}}})}))((function(e){var t=e.classes,n=e.children,o=e.variant,i=void 0===o?"outlined":o,m=e.tooltip,j=Object(c.a)(e,d),f=Object(b.jsx)(s.a,Object(a.a)(Object(a.a)({},j),{},{className:Object(u.a)(t.root,Object(r.a)({},t.contained,"contained"===i)),children:n}));return m&&""!==m?Object(b.jsx)(l.a,{title:m,children:Object(b.jsx)("span",{children:f})}):f}))},433:function(e,t,n){"use strict";var a=n(3),r=n(4),c=n(2),o=(n(11),n(7)),i=n(99),s=n(354),l=n(364),u=n(59),b=n(0),d=["className","component"];var m=n(210),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=Object(i.a)("div")(s.a),m=c.forwardRef((function(e,c){var i=Object(u.a)(t),s=Object(l.a)(e),m=s.className,j=s.component,f=void 0===j?"div":j,p=Object(r.a)(s,d);return Object(b.jsx)(n,Object(a.a)({as:f,ref:c,className:Object(o.a)(m,"MuiBox-root"),theme:i},p))}));return m}({defaultTheme:Object(m.a)()});t.a=j},473:function(e,t,n){"use strict";n.d(t,"t",(function(){return r})),n.d(t,"l",(function(){return c})),n.d(t,"o",(function(){return o})),n.d(t,"n",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"j",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"i",(function(){return b})),n.d(t,"k",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"m",(function(){return x})),n.d(t,"p",(function(){return v})),n.d(t,"r",(function(){return g})),n.d(t,"q",(function(){return y})),n.d(t,"s",(function(){return N}));var a=n(16),r=function(e,t,n){return{type:a.v,pageName:e,field:t,value:n}},c=function(e,t){return{type:a.t,pageName:e,valid:t}},o=function(e){return{type:a.u,storageClasses:e}},i=function(e){return{type:a.s,limitSize:e}},s=function(){return{type:a.a}},l=function(e){return{type:a.h,id:e}},u=function(e,t,n,r){return{type:a.d,id:e,key:t,fileName:n,value:r}},b=function(){return{type:a.g}},d=function(e){return{type:a.j,id:e}},m=function(e,t,n,r){return{type:a.f,id:e,key:t,fileName:n,value:r}},j=function(e,t,n){return{type:a.m,key:e,fileName:t,value:n}},f=function(e,t,n){return{type:a.k,key:e,fileName:t,value:n}},p=function(e,t,n){return{type:a.o,key:e,fileName:t,value:n}},h=function(e,t){return{type:a.n,fileName:e,value:t}},O=function(e,t){return{type:a.l,fileName:e,value:t}},x=function(){return{type:a.p}},v=function(e){return{type:a.x,state:e}},g=function(e,t){return{type:a.w,name:e,namespace:t}},y=function(e){return{type:a.z,tenant:e}},N=function(e){return{type:a.y,tab:e}}},475:function(e,t,n){"use strict";var a=n(1),r=n(15),c=n(2),o=n.n(c),i=n(433),s=n(811),l=(n(11),n(0)),u=c.createContext(null);function b(e){var t=e.children,n=e.value,a=function(){var e=c.useState(null),t=Object(r.a)(e,2),n=t[0],a=t[1];return c.useEffect((function(){a("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),n}(),o=c.useMemo((function(){return{idPrefix:a,value:n}}),[a,n]);return Object(l.jsx)(u.Provider,{value:o,children:t})}function d(){return c.useContext(u)}function m(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function j(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}var f=n(3),p=n(4),h=n(807),O=["children"],x=c.forwardRef((function(e,t){var n=e.children,a=Object(p.a)(e,O),r=d();if(null===r)throw new TypeError("No TabContext provided");var o=c.Children.map(n,(function(e){return c.isValidElement(e)?c.cloneElement(e,{"aria-controls":m(r,e.props.value),id:j(r,e.props.value)}):null}));return Object(l.jsx)(h.a,Object(f.a)({},a,{ref:t,value:r.value,children:o}))})),v=n(7),g=n(8),y=n(12),N=n(93),T=n(70),C=n(94);function S(e){return Object(T.a)("MuiTabPanel",e)}Object(C.a)("MuiTabPanel",["root"]);var w=["children","className","value"],E=Object(g.a)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),M=c.forwardRef((function(e,t){var n=Object(y.a)({props:e,name:"MuiTabPanel"}),a=n.children,r=n.className,c=n.value,o=Object(p.a)(n,w),i=Object(f.a)({},n),s=function(e){var t=e.classes;return Object(N.a)({root:["root"]},S,t)}(i),u=d();if(null===u)throw new TypeError("No TabContext provided");var b=m(u,c),h=j(u,c);return Object(l.jsx)(E,Object(f.a)({"aria-labelledby":h,className:Object(v.a)(s.root,r),hidden:c!==u.value,id:b,ref:t,role:"tabpanel",ownerState:i},o,{children:c===u.value&&a}))})),k=n(310),P=n(29),I=n(300),R=n(795);t.a=Object(k.a)((function(e){return Object(I.a)({tabsContainer:{display:"flex",height:"100%",width:"100%"},tabsHeaderContainer:{width:"300px",background:"#FBFAFA",borderRight:"1px solid #EAEAEA","& .MuiTabs-root":{"& .MuiTabs-indicator":{display:"none"},"& .MuiTab-root":{display:"flex",flexFlow:"row",alignItems:"center",justifyContent:"flex-start",borderBottom:"1px solid #EAEAEA","& .MuiSvgIcon-root":{marginRight:8,marginBottom:0},"&.Mui-selected":{background:"#E5E5E5"}},"&. MuiTabs-scroller":{display:"none"}}},tabContentContainer:{width:"100%","& .MuiTabPanel-root":{height:"100%"}},tabPanel:{height:"100%"},"@media (max-width: 900px)":{tabsContainer:{flexFlow:"column",flexDirection:"column"},tabsHeaderContainer:{width:"100%",borderBottom:" 1px solid #EAEAEA","& .MuiTabs-root .MuiTabs-scroller .MuiButtonBase-root":{borderBottom:" 0px"}}}})}))((function(e){var t=e.children,n=e.classes,c=e.selectedTab,u=void 0===c?"0":c,d=e.routes,m=e.isRouteTabs,j=o.a.useState(u),f=Object(r.a)(j,2),p=f[0],h=f[1],O=Object(P.a)(),v=Object(R.a)(O.breakpoints.down("md")),g=[],y=[];return t?(t.forEach((function(e){g.push(e.tabConfig),y.push(e.content)})),Object(l.jsx)(b,{value:"".concat(p),children:Object(l.jsxs)(i.a,{className:n.tabsContainer,children:[Object(l.jsx)(i.a,{className:n.tabsHeaderContainer,children:Object(l.jsx)(x,{onChange:function(e,t){h(t)},orientation:v?"horizontal":"vertical",variant:v?"scrollable":"standard",scrollButtons:"auto",className:n.tabList,children:g.map((function(e,t){return e?Object(l.jsx)(s.a,Object(a.a)(Object(a.a)({className:n.tabHeader,value:"".concat(t)},e),{},{disableRipple:!0,disableTouchRipple:!0,focusRipple:!0}),"v-tab-".concat(t)):null}))})}),Object(l.jsxs)(i.a,{className:n.tabContentContainer,children:[m?null:y.map((function(e,t){return Object(l.jsx)(M,{classes:Object(a.a)({},n.tabPanel),value:"".concat(t),children:e||null},"v-tab-p-".concat(t))})),m?Object(l.jsx)("div",{className:n.tabPanel,children:d}):null]})]})})):null}))},487:function(e,t,n){"use strict";n(2);var a=n(436),r=n(300),c=n(310),o=n(0);t.a=Object(c.a)((function(e){return Object(r.a)({headerBarIcon:{marginRight:".7rem",color:e.palette.primary.main,"& .min-icon":{width:44,height:44}},headerBarSubheader:{color:"grey"},screenTitle:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1rem",borderBottom:"1px solid #EAEAEA"},titleColumn:{height:"auto",justifyContent:"center",display:"flex",flexFlow:"column",alignItems:"flex-start","& h1":{fontSize:"1.4rem"}},leftItems:{display:"flex",alignItems:"center"},rightItems:{display:"flex",alignItems:"center"}})}))((function(e){var t=e.classes,n=e.icon,r=e.title,c=e.subTitle,i=e.actions,s=e.className;return Object(o.jsx)(a.a,{container:!0,children:Object(o.jsxs)(a.a,{item:!0,xs:12,className:"".concat(t.screenTitle," ").concat(s||""),children:[Object(o.jsxs)("div",{className:t.leftItems,children:[n?Object(o.jsx)("div",{className:t.headerBarIcon,children:n}):null,Object(o.jsxs)("div",{className:t.titleColumn,children:[Object(o.jsx)("h1",{style:{margin:0},children:r}),Object(o.jsx)("span",{className:t.headerBarSubheader,children:c})]})]}),Object(o.jsx)("div",{className:t.rightItems,children:i})]})})}))},942:function(e,t,n){"use strict";n.r(t);var a=n(419),r=n(15),c=n(1),o=n(2),i=n.n(o),s=n(39),l=n(21),u=n(19),b=n(300),d=n(310),m=n(46),j=n.n(m),f=n(436),p=n(31),h=n(473),O=n(120),x=n(52),v=n(393),g=n(22),y=n(58),N=n(487),T=n(129),C=n(136),S=n(151),w=n(395),E=n(418),M=n(475),k=n(426),P=n(424),I=n(0),R=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(6),n.e(56),n.e(133)]).then(n.bind(null,873))}))),A=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(55),n.e(63)]).then(n.bind(null,907))}))),B=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(3),n.e(7),n.e(143)]).then(n.bind(null,908))}))),z=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(71),n.e(80)]).then(n.bind(null,909))}))),D=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(54),n.e(96)]).then(n.bind(null,910))}))),L=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(111)]).then(n.bind(null,874))}))),F=Object(P.a)(i.a.lazy((function(){return n.e(148).then(n.bind(null,875))}))),_=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(3),n.e(7),n.e(29),n.e(113)]).then(n.bind(null,876))}))),H=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(45),n.e(121)]).then(n.bind(null,877))}))),q=Object(P.a)(i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(112)]).then(n.bind(null,902))}))),W=Object(s.b)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,currentTab:e.tenants.tenantDetails.currentTab,selectedTenant:e.tenants.tenantDetails.currentTenant,selectedNamespace:e.tenants.tenantDetails.currentNamespace,tenantInfo:e.tenants.tenantDetails.tenantInfo}}),{setErrorSnackMessage:p.e,setSnackBarMessage:p.k,setTenantDetailsLoad:h.p,setTenantName:h.r,setTenantInfo:h.q,setTenantTab:h.s});t.default=Object(d.a)((function(e){return Object(b.a)(Object(c.a)(Object(c.a)({},O.B),{},{pageContainer:{border:"1px solid #EAEAEA",width:"100%",height:"100%"},contentSpacer:Object(c.a)(Object(c.a)({},O.r.contentSpacer),{},{minHeight:400}),redState:{color:e.palette.error.main,"& .min-icon":{width:16,height:16}},yellowState:{color:e.palette.warning.main,"& .min-icon":{width:16,height:16}},greenState:{color:e.palette.success.main,"& .min-icon":{width:16,height:16}},greyState:{color:"grey","& .min-icon":{width:16,height:16}},healthStatusIcon:{position:"relative",fontSize:10,left:26,height:10,top:4}},Object(O.f)(e.spacing(4))))}))(W((function(e){var t=e.classes,n=e.match,c=e.history,i=e.loadingTenant,s=(e.currentTab,e.selectedTenant),b=e.tenantInfo,d=e.selectedNamespace,m=e.setErrorSnackMessage,p=e.setSnackBarMessage,h=e.setTenantDetailsLoad,O=e.setTenantName,P=e.setTenantInfo,W=(e.setTenantTab,Object(o.useState)(!1)),J=Object(r.a)(W,2),V=J[0],Y=J[1],G=n.params.tenantName,K=n.params.tenantNamespace,Q=Object(o.useState)(!1),U=Object(r.a)(Q,2),X=U[0],Z=U[1];Object(o.useEffect)((function(){i||G===s&&K===d||(O(G,K),h(!0))}),[i,s,d,h,P,O,G,K]),Object(o.useEffect)((function(){i&&x.a.invoke("GET","/api/v1/namespaces/".concat(K,"/tenants/").concat(G)).then((function(e){var t,n=e.pools?e.pools:[],r=0,c=0,o=0,i=Object(a.a)(n);try{for(i.s();!(t=i.n()).done;){var s=t.value,l=s.volumes_per_server*s.servers*s.volume_configuration.size;s.label="pool-".concat(o),void 0!==s.name&&""!==s.name||(s.name=s.label),s.capacity=Object(y.l)(l+""),s.volumes=s.servers*s.volumes_per_server,r+=s.servers,c+=s.volumes,o+=1}}catch(u){i.e(u)}finally{i.f()}e.total_instances=r,e.total_volumes=c,P(e),h(!1)})).catch((function(e){m(e),h(!1)}))}),[i,K,G,P,h,m]);var $=j()(n,"path","/").split("/"),ee=$[$.length-1]||"summary";":podName"!==ee&&"pods"!==ee||(ee="pods");var te=Object(o.useState)(ee),ne=Object(r.a)(te,2),ae=ne[0],re=ne[1];Object(o.useEffect)((function(){re(ee)}),[ee]);var ce,oe=function(e){return"/namespaces/".concat(K,"/tenants/").concat(G,"/").concat(e)};return Object(I.jsxs)(o.Fragment,{children:[V&&Object(I.jsx)(R,{open:V,closeModalAndRefresh:function(){Y(!1),h(!0)},tenant:G,namespace:K}),X&&null!==b&&Object(I.jsx)(H,{deleteOpen:X,selectedTenant:b,closeDeleteModalAndRefresh:function(e){Z(!1),e&&(p("Tenant Deleted"),c.push("/tenants"))}}),Object(I.jsx)(v.a,{label:Object(I.jsx)(o.Fragment,{children:Object(I.jsx)(l.a,{to:"/tenants",className:t.breadcrumLink,children:"Tenants"})})}),Object(I.jsx)(E.a,{to:"/tenants",label:"Return to Tenants"}),Object(I.jsxs)(w.a,{className:t.pageContainer,children:[Object(I.jsx)(f.a,{item:!0,xs:12,children:Object(I.jsx)(N.a,{icon:Object(I.jsxs)(o.Fragment,{children:[Object(I.jsx)("div",{className:t.healthStatusIcon,children:b&&b.status&&Object(I.jsx)("span",{className:(ce=b.status.health_status,"red"===ce?t.redState:"yellow"===ce?t.yellowState:"green"===ce?t.greenState:t.greyState),children:Object(I.jsx)(g.j,{})})}),Object(I.jsx)(S.a,{})]}),title:n.params.tenantName,subTitle:Object(I.jsxs)(o.Fragment,{children:["Namespace: ",K," / Capacity:"," ",Object(y.l)(((null===b||void 0===b?void 0:b.total_size)||0).toString(10))]}),actions:Object(I.jsxs)("div",{children:[Object(I.jsx)(k.a,{tooltip:"Delete",color:"primary","aria-label":"Delete",onClick:function(){Z(!0)},size:"large",children:Object(I.jsx)(g.t,{})}),Object(I.jsx)(k.a,{tooltip:"Edit YAML",color:"primary","aria-label":"Edit YAML",onClick:function(){Y(!0)},size:"large",children:Object(I.jsx)(T.default,{})}),Object(I.jsx)(k.a,{tooltip:"Refresh",color:"primary","aria-label":"Refresh List",onClick:function(){h(!0)},children:Object(I.jsx)(C.default,{})})]})})}),Object(I.jsxs)(M.a,{selectedTab:ae,isRouteTabs:!0,routes:Object(I.jsx)("div",{className:t.contentSpacer,children:Object(I.jsx)(u.c,{history:c,children:Object(I.jsxs)(u.d,{children:[Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName/summary",component:A}),Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName/metrics",component:F}),Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName/security",component:_}),Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName/pools",component:z}),Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName/pods/:podName",component:q}),Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName/pods",component:D}),Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName/volumes",component:L}),Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName/license",component:B}),Object(I.jsx)(u.b,{path:"/namespaces/:tenantNamespace/tenants/:tenantName",component:function(){return Object(I.jsx)(u.a,{to:"/namespaces/".concat(K,"/tenants/").concat(G,"/summary")})}})]})})}),children:[{tabConfig:{label:"Summary",value:"summary",component:l.a,to:oe("summary")}},{tabConfig:{label:"Metrics",value:"metrics",component:l.a,to:oe("metrics")}},{tabConfig:{label:"Security",value:"security",component:l.a,to:oe("security")}},{tabConfig:{label:"Pools",value:"pools",component:l.a,to:oe("pools")}},{tabConfig:{label:"Pods",value:"pods",component:l.a,to:oe("pods")}},{tabConfig:{label:"Volumes",value:"volumes",component:l.a,to:oe("volumes")}},{tabConfig:{label:"License",value:"license",component:l.a,to:oe("license")}}]})]})]})})))}}]);
//# sourceMappingURL=33.1bb1ba8d.chunk.js.map