"use strict";(self.webpackChunkjacktnorris_github_io=self.webpackChunkjacktnorris_github_io||[]).push([[6003],{6003:(e,t,n)=>{n.r(t),n.d(t,{coffeeScript:()=>b});var r="error";function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var c=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,i=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,a=/^[_A-Za-z$][_A-Za-z$0-9]*/,f=/^@[_A-Za-z$][_A-Za-z$0-9]*/,p=o(["and","or","not","is","isnt","in","instanceof","typeof"]),s=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],u=o(s.concat(["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"]));s=o(s);var l=/^('{3}|\"{3}|['\"])/,d=/^(\/{3}|\/)/,h=o(["Infinity","NaN","undefined","null","true","false","on","off","yes","no"]);function m(e,t){if(e.sol()){null===t.scope.align&&(t.scope.align=!1);var n=t.scope.offset;if(e.eatSpace()){var o=e.indentation();return o>n&&"coffee"==t.scope.type?"indent":o<n?"dedent":null}n>0&&y(e,t)}if(e.eatSpace())return null;var s=e.peek();if(e.match("####"))return e.skipToEnd(),"comment";if(e.match("###"))return t.tokenize=k,t.tokenize(e,t);if("#"===s)return e.skipToEnd(),"comment";if(e.match(/^-?[0-9\.]/,!1)){var m=!1;if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(m=!0),e.match(/^-?\d+\.\d*/)&&(m=!0),e.match(/^-?\.\d+/)&&(m=!0),m)return"."==e.peek()&&e.backUp(1),"number";var g=!1;if(e.match(/^-?0x[0-9a-f]+/i)&&(g=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(g=!0),e.match(/^-?0(?![\dx])/i)&&(g=!0),g)return"number"}if(e.match(l))return t.tokenize=v(e.current(),!1,"string"),t.tokenize(e,t);if(e.match(d)){if("/"!=e.current()||e.match(/^.*\//,!1))return t.tokenize=v(e.current(),!0,"string.special"),t.tokenize(e,t);e.backUp(1)}return e.match(c)||e.match(p)?"operator":e.match(i)?"punctuation":e.match(h)?"atom":e.match(f)||t.prop&&e.match(a)?"property":e.match(u)?"keyword":e.match(a)?"variable":(e.next(),r)}function v(e,t,n){return function(r,o){for(;!r.eol();)if(r.eatWhile(/[^'"\/\\]/),r.eat("\\")){if(r.next(),t&&r.eol())return n}else{if(r.match(e))return o.tokenize=m,n;r.eat(/['"\/]/)}return t&&(o.tokenize=m),n}}function k(e,t){for(;!e.eol();){if(e.eatWhile(/[^#]/),e.match("###")){t.tokenize=m;break}e.eatWhile("#")}return"comment"}function g(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"coffee";for(var r=0,o=!1,c=null,i=t.scope;i;i=i.prev)if("coffee"===i.type||"}"==i.type){r=i.offset+e.indentUnit;break}"coffee"!==n?(o=null,c=e.column()+e.current().length):t.scope.align&&(t.scope.align=!1),t.scope={offset:r,type:n,prev:t.scope,align:o,alignOffset:c}}function y(e,t){if(t.scope.prev){if("coffee"===t.scope.type){for(var n=e.indentation(),r=!1,o=t.scope;o;o=o.prev)if(n===o.offset){r=!0;break}if(!r)return!0;for(;t.scope.prev&&t.scope.offset!==n;)t.scope=t.scope.prev;return!1}return t.scope=t.scope.prev,!1}}const b={name:"coffeescript",startState:function(){return{tokenize:m,scope:{offset:0,type:"coffee",prev:null,align:!1},prop:!1,dedent:0}},token:function(e,t){var n=null===t.scope.align&&t.scope;n&&e.sol()&&(n.align=!1);var o=function(e,t){var n=t.tokenize(e,t),o=e.current();"return"===o&&(t.dedent=!0),(("->"===o||"=>"===o)&&e.eol()||"indent"===n)&&g(e,t);var c="[({".indexOf(o);if(-1!==c&&g(e,t,"])}".slice(c,c+1)),s.exec(o)&&g(e,t),"then"==o&&y(e,t),"dedent"===n&&y(e,t))return r;if(-1!==(c="])}".indexOf(o))){for(;"coffee"==t.scope.type&&t.scope.prev;)t.scope=t.scope.prev;t.scope.type==o&&(t.scope=t.scope.prev)}return t.dedent&&e.eol()&&("coffee"==t.scope.type&&t.scope.prev&&(t.scope=t.scope.prev),t.dedent=!1),"indent"==n||"dedent"==n?null:n}(e,t);return o&&"comment"!=o&&(n&&(n.align=!0),t.prop="punctuation"==o&&"."==e.current()),o},indent:function(e,t){if(e.tokenize!=m)return 0;var n=e.scope,r=t&&"])}".indexOf(t.charAt(0))>-1;if(r)for(;"coffee"==n.type&&n.prev;)n=n.prev;var o=r&&n.type===t.charAt(0);return n.align?n.alignOffset-(o?1:0):(o?n.prev:n).offset},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=6003.b3fb97e7.chunk.js.map