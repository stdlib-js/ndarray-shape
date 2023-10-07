"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=s(function(f,o){
var v=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,p=require('@stdlib/assert-is-collection/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function l(r){var e,a,t,i;if(typeof r!="object"||r===null)throw new TypeError(n('nullDv',r));if(a=r.shape,!p(a))throw new TypeError(n('nullDv',r));for(e=[],i=0;i<a.length;i++){if(t=a[i],!v(t))throw new TypeError(n('nullDv',r));e.push(t)}return e}o.exports=l
});var d=u();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
