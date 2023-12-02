// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function s(s){var n,o,i,l;if("object"!=typeof s||null===s)throw new TypeError(t("nullKy",s));if(o=s.shape,!r(o))throw new TypeError(t("nullKy",s));for(n=[],l=0;l<o.length;l++){if(i=o[l],!e(i))throw new TypeError(t("nullKy",s));n.push(i)}return n}export{s as default};
//# sourceMappingURL=index.mjs.map
