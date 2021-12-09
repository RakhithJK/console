(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[119],{389:function(e,t,a){"use strict";var n,i=a(15),o=a(1),c=a(2),s=a(39),r=a(378),l=a(372),d=a(406),b=a(407),j=a(408),u=a(300),p=a(310),m=a(120),h=a(31),O=a(46),x=a.n(O),f=a(127),g=a.n(f),v=a(126),C=a.n(v),y=a(123),k=a.n(y),S=a(0),N=function(){clearInterval(n)},E={displayErrorMessage:h.h},M=Object(s.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),E)(Object(p.a)((function(e){return Object(u.a)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,a=e.modalSnackMessage,o=e.displayErrorMessage,s=e.customStyle,r=Object(c.useState)(!1),l=Object(i.a)(r,2),d=l[0],b=l[1],j=Object(c.useState)(!1),u=Object(i.a)(j,2),p=u[0],m=u[1],h=Object(c.useCallback)((function(){m(!1)}),[]);Object(c.useEffect)((function(){p||(o({detailedError:"",errorMessage:""}),b(!1))}),[o,p]),Object(c.useEffect)((function(){""!==a.message&&"error"===a.type&&m(!0)}),[h,a.message,a.type]);var O=x()(a,"message",""),f=x()(a,"detailedErrorMsg","");return"error"!==a.type||""===O?null:Object(S.jsx)(c.Fragment,{children:Object(S.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(p?t.modalErrorShow:""),style:s,onMouseOver:N,onMouseLeave:function(){n=setInterval(h,1e4)},children:[Object(S.jsx)("button",{className:t.closeButton,onClick:h,children:Object(S.jsx)(k.a,{})}),Object(S.jsxs)("div",{className:t.errorTitle,children:[Object(S.jsx)("span",{className:t.messageIcon,children:Object(S.jsx)(C.a,{})}),Object(S.jsx)("span",{className:t.errorLabel,children:O})]}),""!==f&&Object(S.jsxs)(c.Fragment,{children:[Object(S.jsx)("div",{className:t.detailsContainerLink,children:Object(S.jsxs)("button",{className:t.detailsButton,onClick:function(){b(!d)},children:["Details",Object(S.jsx)(g.a,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),Object(S.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:f})]})]})})}))),w={content:'" "',borderLeft:"2px solid #9C9C9C",height:33,width:1,position:"absolute"},D=Object(s.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:h.i});t.a=Object(p.a)((function(e){return Object(u.a)(Object(o.a)({dialogContainer:{padding:"8px 15px 22px"},closeContainer:{textAlign:"right"},closeButton:{height:16,width:16,padding:0,backgroundColor:"initial","&:hover":{backgroundColor:"initial"},"&:active":{backgroundColor:"initial"}},closeIcon:{"&::before":Object(o.a)(Object(o.a)({},w),{},{transform:"rotate(45deg)",height:12}),"&::after":Object(o.a)(Object(o.a)({},w),{},{transform:"rotate(-45deg)",height:12}),"&:hover::before, &:hover::after":{borderColor:"#9C9C9C"},display:"block",position:"relative",height:12,width:12},titleClass:{padding:"0px 50px 12px",fontSize:"1.2rem",fontWeight:600,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},modalContent:{padding:"0 50px"},customDialogSize:{width:"100%",maxWidth:765}},m.y))}))(D((function(e){var t=e.onClose,a=e.modalOpen,n=e.title,s=e.children,u=e.classes,p=e.wideLimit,m=void 0===p||p,h=e.modalSnackMessage,O=e.noContentPadding,x=e.setModalSnackMessage,f=Object(c.useState)(!1),g=Object(i.a)(f,2),v=g[0],C=g[1];Object(c.useEffect)((function(){x("")}),[x]),Object(c.useEffect)((function(){if(h){if(""===h.message)return void C(!1);"error"!==h.type&&C(!0)}}),[h]);var y=m?{classes:{paper:u.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},k="";return h&&(k=h.detailedErrorMsg,(""===h.detailedErrorMsg||h.detailedErrorMsg.length<5)&&(k=h.message)),Object(S.jsx)(d.a,Object(o.a)(Object(o.a)({open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},y),{},{children:Object(S.jsxs)("div",{className:u.dialogContainer,children:[Object(S.jsx)(M,{}),Object(S.jsx)(l.a,{open:v,className:u.snackBarModal,onClose:function(){C(!1),x("")},message:k,ContentProps:{className:"".concat(u.snackBar," ").concat(h&&"error"===h.type?u.errorSnackBar:"")},autoHideDuration:h&&"error"===h.type?1e4:5e3}),Object(S.jsx)("div",{className:u.closeContainer,children:Object(S.jsx)(r.a,{"aria-label":"close",className:u.closeButton,onClick:t,disableRipple:!0,size:"large",children:Object(S.jsx)("span",{className:u.closeIcon})})}),Object(S.jsx)(b.a,{id:"alert-dialog-title",className:u.titleClass,children:n}),Object(S.jsx)(j.a,{className:O?"":u.modalContent,children:s})]})}))})))},390:function(e,t,a){"use strict";var n=a(1),i=a(2),o=a.n(i),c=a(415),s=a(436),r=a(809),l=a(376),d=a(378),b=a(300),j=a(369),u=a(310),p=a(120),m=a(121),h=a(0),O=Object(j.a)((function(e){return Object(b.a)(Object(n.a)({},p.n))}));function x(e){var t=O();return Object(h.jsx)(c.a,Object(n.a)({InputProps:{classes:t}},e))}t.a=Object(u.a)((function(e){return Object(b.a)(Object(n.a)(Object(n.a)(Object(n.a)({},p.i),p.D),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,a=e.onChange,i=e.value,c=e.id,b=e.name,j=e.type,u=void 0===j?"text":j,p=e.autoComplete,O=void 0===p?"off":p,f=e.disabled,g=void 0!==f&&f,v=e.multiline,C=void 0!==v&&v,y=e.tooltip,k=void 0===y?"":y,S=e.index,N=void 0===S?0:S,E=e.error,M=void 0===E?"":E,w=e.required,D=void 0!==w&&w,I=e.placeholder,L=void 0===I?"":I,B=e.min,W=e.max,z=e.overlayIcon,T=void 0===z?null:z,R=e.overlayObject,A=void 0===R?null:R,F=e.extraInputProps,P=void 0===F?{}:F,H=e.overlayAction,K=e.noLabelMinWidth,J=void 0!==K&&K,q=e.classes,G=Object(n.a)({"data-index":N},P);return"number"===u&&B&&(G.min=B),"number"===u&&W&&(G.max=W),Object(h.jsx)(o.a.Fragment,{children:Object(h.jsxs)(s.a,{container:!0,className:" ".concat(""!==M?q.errorInField:q.inputBoxContainer),children:[""!==t&&Object(h.jsxs)(r.a,{htmlFor:c,className:J?q.noMinWidthLabel:q.inputLabel,children:[Object(h.jsxs)("span",{children:[t,D?"*":""]}),""!==k&&Object(h.jsx)("div",{className:q.tooltipContainer,children:Object(h.jsx)(l.a,{title:k,placement:"top-start",children:Object(h.jsx)("div",{className:q.tooltip,children:Object(h.jsx)(m.a,{})})})})]}),Object(h.jsxs)("div",{className:q.textBoxContainer,children:[Object(h.jsx)(x,{id:c,name:b,fullWidth:!0,value:i,disabled:g,onChange:a,type:u,multiline:C,autoComplete:O,inputProps:G,error:""!==M,helperText:M,placeholder:L,className:q.inputRebase}),T&&Object(h.jsx)("div",{className:"".concat(q.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(h.jsx)(d.a,{onClick:H?function(){H()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:T})}),A&&Object(h.jsx)("div",{className:"".concat(q.overlayAction," ").concat(""!==t?"withLabel":""),children:A})]})]})})}))},435:function(e,t,a){"use strict";var n=a(1),i=a(2),o=a.n(i),c=a(436),s=a(779),r=a(809),l=a(376),d=a(971),b=a(957),j=a(488),u=a(300),p=a(310),m=a(120),h=a(121),O=a(0),x=Object(p.a)((function(e){return Object(u.a)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(s.c);t.a=Object(p.a)((function(e){return Object(u.a)(Object(n.a)(Object(n.a)({},m.i),m.D))}))((function(e){var t=e.classes,a=e.id,n=e.name,i=e.onChange,s=e.options,u=e.label,p=e.tooltip,m=void 0===p?"":p,f=e.value,g=e.disabled,v=void 0!==g&&g;return Object(O.jsx)(o.a.Fragment,{children:Object(O.jsxs)(c.a,{item:!0,xs:12,className:t.fieldContainer,children:[""!==u&&Object(O.jsxs)(r.a,{htmlFor:a,className:t.inputLabel,children:[Object(O.jsx)("span",{children:u}),""!==m&&Object(O.jsx)("div",{className:t.tooltipContainer,children:Object(O.jsx)(l.a,{title:m,placement:"top-start",children:Object(O.jsx)("div",{className:t.tooltip,children:Object(O.jsx)(h.a,{})})})})]}),Object(O.jsx)(d.a,{fullWidth:!0,children:Object(O.jsx)(b.a,{id:a,name:n,value:f,onChange:i,input:Object(O.jsx)(x,{}),disabled:v,children:s.map((function(e){return Object(O.jsx)(j.a,{value:e.value,children:e.label},"select-".concat(n,"-").concat(e.label))}))})})]})})}))},892:function(e,t,a){"use strict";a.r(t);var n=a(15),i=a(1),o=a(2),c=a(39),s=a(436),r=a(380),l=a(366),d=a(300),b=a(310),j=a(31),u=a(120),p=a(52),m=a(389),h=a(390),O=a(435),x=a(0),f=Object(c.b)(null,{setModalErrorSnackMessage:j.h});t.default=Object(b.a)((function(e){return Object(d.a)(Object(i.a)({buttonContainer:{textAlign:"right"}},u.p))}))(f((function(e){var t=e.classes,a=e.open,i=(e.encryptionEnabled,e.encryptionCfg),c=e.selectedBucket,d=e.closeModalAndRefresh,b=e.setModalErrorSnackMessage,j=Object(o.useState)(!1),u=Object(n.a)(j,2),f=u[0],g=u[1],v=Object(o.useState)(""),C=Object(n.a)(v,2),y=C[0],k=C[1],S=Object(o.useState)("disabled"),N=Object(n.a)(S,2),E=N[0],M=N[1];Object(o.useEffect)((function(){i&&("AES256"===i.algorithm?M("sse-s3"):(M("sse-kms"),k(i.kmsMasterKeyID)))}),[i]);return Object(x.jsx)(m.a,{modalOpen:a,onClose:function(){d()},title:"Enable Bucket Encryption",children:Object(x.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),f||("disabled"===E?p.a.invoke("POST","/api/v1/buckets/".concat(c,"/encryption/disable")).then((function(){g(!1),d()})).catch((function(e){g(!1),b(e)})):p.a.invoke("POST","/api/v1/buckets/".concat(c,"/encryption/enable"),{encType:E,kmsKeyID:y}).then((function(){g(!1),d()})).catch((function(e){g(!1),b(e)})))},children:Object(x.jsxs)(s.a,{container:!0,children:[Object(x.jsxs)(s.a,{item:!0,xs:12,className:t.formScrollable,children:[Object(x.jsx)(s.a,{item:!0,xs:12,children:Object(x.jsx)(O.a,{onChange:function(e){M(e.target.value)},id:"select-encryption-type",name:"select-encryption-type",label:"Encryption Type",value:E,options:[{label:"Disabled",value:"disabled"},{label:"SSE-S3",value:"sse-s3"},{label:"SSE-KMS",value:"sse-kms"}]})}),Object(x.jsx)(s.a,{item:!0,xs:12,children:Object(x.jsx)("br",{})}),"sse-kms"===E&&Object(x.jsx)(s.a,{item:!0,xs:12,children:Object(x.jsx)(h.a,{id:"kms-key-id",name:"kms-key-id",label:"KMS Key ID",value:y,onChange:function(e){k(e.target.value)}})}),Object(x.jsx)(s.a,{item:!0,xs:12,children:Object(x.jsx)("br",{})})]}),Object(x.jsx)(s.a,{item:!0,xs:12,className:t.buttonContainer,children:Object(x.jsx)(r.a,{type:"submit",variant:"contained",color:"primary",disabled:f,children:"Save"})}),f&&Object(x.jsx)(s.a,{item:!0,xs:12,children:Object(x.jsx)(l.a,{})})]})})})})))}}]);
//# sourceMappingURL=119.a4fe4289.chunk.js.map