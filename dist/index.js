"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var u=s(function(f,o){
var v=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,p=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function l(e){var r,a,t,i;if(typeof e!="object"||e===null)throw new TypeError(n('1kBDv',e));if(a=e.shape,!p(a))throw new TypeError(n('1kBDv',e));for(r=[],i=0;i<a.length;i++){if(t=a[i],!v(t))throw new TypeError(n('1kBDv',e));r.push(t)}return r}o.exports=l
});var d=u();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
