"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[273],{748:function(e,a,s){var i=s(1413),r=s(5987),l=s(4758),t=s.n(l),o=s(9867),n=s(8731),c=s.n(n),d=s(2834),f=["as","className","type","tooltip"],v={type:c().string,tooltip:c().bool,as:c().elementType},m=o.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,o=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:t()(o,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v,a.Z=m},5273:function(e,a,s){s.d(a,{Z:function(){return X}});var i=s(1413),r=s(5987),l=s(4758),t=s.n(l),o=s(8731),n=s.n(o),c=s(9867),d=s(748),f=s(7528),v=s(1227),m=s(5582),u=s(2834),p=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.htmlFor,n=(0,r.Z)(e,p),d=(0,c.useContext)(v.Z).controlId;return s=(0,m.vE)(s,"form-check-label"),(0,u.jsx)("label",(0,i.Z)((0,i.Z)({},n),{},{ref:a,htmlFor:o||d,className:t()(l,s)}))}));Z.displayName="FormCheckLabel";var b=Z;var x=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],h=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,o=e.bsSwitchPrefix,n=e.inline,p=void 0!==n&&n,Z=e.disabled,h=void 0!==Z&&Z,N=e.isValid,y=void 0!==N&&N,j=e.isInvalid,w=void 0!==j&&j,I=e.feedbackTooltip,P=void 0!==I&&I,k=e.feedback,F=e.feedbackType,C=e.className,g=e.style,R=e.title,E=void 0===R?"":R,z=e.type,S=void 0===z?"checkbox":z,T=e.label,V=e.children,L=e.as,O=void 0===L?"input":L,_=(0,r.Z)(e,x);l=(0,m.vE)(l,"form-check"),o=(0,m.vE)(o,"form-switch");var H=(0,c.useContext)(v.Z).controlId,G=(0,c.useMemo)((function(){return{controlId:s||H}}),[H,s]),M=!V&&null!=T&&!1!==T||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,b),A=(0,u.jsx)(f.Z,(0,i.Z)((0,i.Z)({},_),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:y,isInvalid:w,disabled:h,as:O}));return(0,u.jsx)(v.Z.Provider,{value:G,children:(0,u.jsx)("div",{style:g,className:t()(C,M&&l,p&&"".concat(l,"-inline"),"switch"===S&&o),children:V||(0,u.jsxs)(u.Fragment,{children:[A,M&&(0,u.jsx)(b,{title:E,children:T}),k&&(0,u.jsx)(d.Z,{type:F,tooltip:P,children:k})]})})})}));h.displayName="FormCheck";var N=Object.assign(h,{Input:f.Z,Label:b}),y=s(6830),j=(0,s(5845).Z)("form-floating"),w=["controlId","as"],I=c.forwardRef((function(e,a){var s=e.controlId,l=e.as,t=void 0===l?"div":l,o=(0,r.Z)(e,w),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,u.jsx)(v.Z.Provider,{value:n,children:(0,u.jsx)(t,(0,i.Z)((0,i.Z)({},o),{},{ref:a}))})}));I.displayName="FormGroup";var P=I,k=(s(944),s(885)),F=["as","bsPrefix","className"],C=["className"];var g=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,l=e.className,o=(0,r.Z)(e,F);s=(0,m.vE)(s,"col");var n=(0,m.pi)(),c=[],d=[];return n.forEach((function(e){var a,i,r,l=o[e];delete o[e],"object"===typeof l&&null!=l?(a=l.span,i=l.offset,r=l.order):a=l;var t="xs"!==e?"-".concat(e):"";a&&c.push(!0===a?"".concat(s).concat(t):"".concat(s).concat(t,"-").concat(a)),null!=r&&d.push("order".concat(t,"-").concat(r)),null!=i&&d.push("offset".concat(t,"-").concat(i))})),[(0,i.Z)((0,i.Z)({},o),{},{className:t().apply(void 0,[l].concat(c,d))}),{as:a,bsPrefix:s,spans:c}]}(e),l=(0,k.Z)(s,2),o=l[0],n=o.className,c=(0,r.Z)(o,C),d=l[1],f=d.as,v=void 0===f?"div":f,p=d.bsPrefix,Z=d.spans;return(0,u.jsx)(v,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:t()(n,!Z.length&&p)}))}));g.displayName="Col";var R=g,E=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],z=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,o=e.bsPrefix,n=e.column,d=e.visuallyHidden,f=e.className,p=e.htmlFor,Z=(0,r.Z)(e,E),b=(0,c.useContext)(v.Z).controlId;o=(0,m.vE)(o,"form-label");var x="col-form-label";"string"===typeof n&&(x="".concat(x," ").concat(x,"-").concat(n));var h=t()(f,o,d&&"visually-hidden",n&&x);return p=p||b,n?(0,u.jsx)(R,(0,i.Z)({ref:a,as:"label",className:h,htmlFor:p},Z)):(0,u.jsx)(l,(0,i.Z)({ref:a,className:h,htmlFor:p},Z))}));z.displayName="FormLabel",z.defaultProps={column:!1,visuallyHidden:!1};var S=z,T=["bsPrefix","className","id"],V=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.id,n=(0,r.Z)(e,T),d=(0,c.useContext)(v.Z).controlId;return s=(0,m.vE)(s,"form-range"),(0,u.jsx)("input",(0,i.Z)((0,i.Z)({},n),{},{type:"range",ref:a,className:t()(l,s),id:o||d}))}));V.displayName="FormRange";var L=V,O=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],_=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,o=e.htmlSize,n=e.className,d=e.isValid,f=void 0!==d&&d,p=e.isInvalid,Z=void 0!==p&&p,b=e.id,x=(0,r.Z)(e,O),h=(0,c.useContext)(v.Z).controlId;return s=(0,m.vE)(s,"form-select"),(0,u.jsx)("select",(0,i.Z)((0,i.Z)({},x),{},{size:o,ref:a,className:t()(n,s,l&&"".concat(s,"-").concat(l),f&&"is-valid",Z&&"is-invalid"),id:b||h}))}));_.displayName="FormSelect";var H=_,G=["bsPrefix","className","as","muted"],M=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.as,n=void 0===o?"small":o,c=e.muted,d=(0,r.Z)(e,G);return s=(0,m.vE)(s,"form-text"),(0,u.jsx)(n,(0,i.Z)((0,i.Z)({},d),{},{ref:a,className:t()(l,s,c&&"text-muted")}))}));M.displayName="FormText";var A=M,q=c.forwardRef((function(e,a){return(0,u.jsx)(N,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));q.displayName="Switch";var B=Object.assign(q,{Input:N.Input,Label:N.Label}),D=["bsPrefix","className","children","controlId","label"],J=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.children,n=e.controlId,c=e.label,d=(0,r.Z)(e,D);return s=(0,m.vE)(s,"form-floating"),(0,u.jsxs)(P,(0,i.Z)((0,i.Z)({ref:a,className:t()(l,s),controlId:n},d),{},{children:[o,(0,u.jsx)("label",{htmlFor:n,children:c})]}))}));J.displayName="FloatingLabel";var K=J,Q=["className","validated","as"],U={_ref:n().any,validated:n().bool,as:n().elementType},W=c.forwardRef((function(e,a){var s=e.className,l=e.validated,o=e.as,n=void 0===o?"form":o,c=(0,r.Z)(e,Q);return(0,u.jsx)(n,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:t()(s,l&&"was-validated")}))}));W.displayName="Form",W.propTypes=U;var X=Object.assign(W,{Group:P,Control:y.Z,Floating:j,Check:N,Switch:B,Label:S,Text:A,Range:L,Select:H,FloatingLabel:K})},7528:function(e,a,s){var i=s(1413),r=s(5987),l=s(4758),t=s.n(l),o=s(9867),n=s(1227),c=s(5582),d=s(2834),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],v=o.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,v=e.className,m=e.type,u=void 0===m?"checkbox":m,p=e.isValid,Z=void 0!==p&&p,b=e.isInvalid,x=void 0!==b&&b,h=e.as,N=void 0===h?"input":h,y=(0,r.Z)(e,f),j=(0,o.useContext)(n.Z).controlId;return l=(0,c.vE)(l,"form-check-input"),(0,d.jsx)(N,(0,i.Z)((0,i.Z)({},y),{},{ref:a,type:u,id:s||j,className:t()(v,l,Z&&"is-valid",x&&"is-invalid")}))}));v.displayName="FormCheckInput",a.Z=v},1227:function(e,a,s){var i=s(9867).createContext({});a.Z=i},6830:function(e,a,s){var i=s(1413),r=s(4942),l=s(5987),t=s(4758),o=s.n(t),n=s(9867),c=(s(944),s(748)),d=s(1227),f=s(5582),v=s(2834),m=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],u=n.forwardRef((function(e,a){var s,t,c=e.bsPrefix,u=e.type,p=e.size,Z=e.htmlSize,b=e.id,x=e.className,h=e.isValid,N=void 0!==h&&h,y=e.isInvalid,j=void 0!==y&&y,w=e.plaintext,I=e.readOnly,P=e.as,k=void 0===P?"input":P,F=(0,l.Z)(e,m),C=(0,n.useContext)(d.Z).controlId;(c=(0,f.vE)(c,"form-control"),w)?s=(0,r.Z)({},"".concat(c,"-plaintext"),!0):(t={},(0,r.Z)(t,c,!0),(0,r.Z)(t,"".concat(c,"-").concat(p),p),s=t);return(0,v.jsx)(k,(0,i.Z)((0,i.Z)({},F),{},{type:u,size:Z,ref:a,readOnly:I,id:b||C,className:o()(x,s,N&&"is-valid",j&&"is-invalid","color"===u&&"".concat(c,"-color"))}))}));u.displayName="FormControl",a.Z=Object.assign(u,{Feedback:c.Z})},944:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=273.a66a504f.chunk.js.map