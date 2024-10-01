// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s){var o,n,i,d;if("object"!=typeof s||null===s)throw new TypeError(t("1kBDv",s));if(n=s.shape,!r(n))throw new TypeError(t("1kBDv",s));for(o=[],d=0;d<n.length;d++){if(i=n[d],!e(i))throw new TypeError(t("1kBDv",s));o.push(i)}return o}export{s as default};
//# sourceMappingURL=index.mjs.map
