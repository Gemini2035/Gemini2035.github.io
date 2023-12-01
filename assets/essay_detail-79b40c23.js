var Re=Object.defineProperty;var ve=(a,t,e)=>t in a?Re(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var k=(a,t,e)=>(ve(a,typeof t!="symbol"?t+"":t,e),e),Se=(a,t,e)=>{if(!t.has(a))throw TypeError("Cannot "+e)};var W=(a,t,e)=>{if(t.has(a))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(a):t.set(a,e)};var Q=(a,t,e)=>(Se(a,t,"access private method"),e);import{q as Ie,d as Ae,r as A,o as Ce,a as Ee,m as ae,c as C,e as m,C as ce,u as T,v as J,n as K,y as Le,z as qe,b as E,A as Pe,B as Be,N as Ze,_ as Me}from"./index-a017375d.js";import{E as De,T as He}from"./toTop-0b2a61fe.js";function te(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let R=te();function de(a){R=a}const ke=/[&<>"']/,Oe=new RegExp(ke.source,"g"),xe=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Qe=new RegExp(xe.source,"g"),Ne={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},he=a=>Ne[a];function b(a,t){if(t){if(ke.test(a))return a.replace(Oe,he)}else if(xe.test(a))return a.replace(Qe,he);return a}const je=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Ue(a){return a.replace(je,(t,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Fe=/(^|[^\[])\^/g;function d(a,t){let e=typeof a=="string"?a:a.source;t=t||"";const n={replace:(r,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(Fe,"$1"),e=e.replace(r,s),n},getRegex:()=>new RegExp(e,t)};return n}function pe(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const q={exec:()=>null};function ue(a,t){const e=a.replace(/\|/g,(i,s,l)=>{let o=!1,p=s;for(;--p>=0&&l[p]==="\\";)o=!o;return o?"|":" |"}),n=e.split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function N(a,t,e){const n=a.length;if(n===0)return"";let r=0;for(;r<n;){const i=a.charAt(n-r-1);if(i===t&&!e)r++;else if(i!==t&&e)r++;else break}return a.slice(0,n-r)}function Xe(a,t){if(a.indexOf(t[1])===-1)return-1;let e=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===t[0])e++;else if(a[n]===t[1]&&(e--,e<0))return n;return-1}function fe(a,t,e,n){const r=t.href,i=t.title?b(t.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:e,href:r,title:i,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,l}return{type:"image",raw:e,href:r,title:i,text:b(s)}}function Ge(a,t){const e=a.match(/^(\s+)(?:```)/);if(e===null)return t;const n=e[1];return t.split(`
`).map(r=>{const i=r.match(/^\s+/);if(i===null)return r;const[s]=i;return s.length>=n.length?r.slice(n.length):r}).join(`
`)}class U{constructor(t){k(this,"options");k(this,"rules");k(this,"lexer");this.options=t||R}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:N(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=Ge(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const r=N(n,"#");(this.options.pedantic||!r||/ $/.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const n=N(e[0].replace(/^ *>[ \t]?/gm,""),`
`),r=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(n);return this.lexer.state.top=r,{type:"blockquote",raw:e[0],tokens:i,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const r=n.length>1,i={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const s=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",o="",p=!1;for(;t;){let c=!1;if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;l=e[0],t=t.substring(l.length);let u=e[2].split(`
`,1)[0].replace(/^\t+/,H=>" ".repeat(3*H.length)),h=t.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,o=u.trimStart()):(f=e[2].search(/[^ ]/),f=f>4?1:f,o=u.slice(f),f+=e[1].length);let w=!1;if(!u&&/^ *$/.test(h)&&(l+=h+`
`,t=t.substring(h.length+1),c=!0),!c){const H=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),O=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),S=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),I=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;t;){const v=t.split(`
`,1)[0];if(h=v,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),S.test(h)||I.test(h)||H.test(h)||O.test(t))break;if(h.search(/[^ ]/)>=f||!h.trim())o+=`
`+h.slice(f);else{if(w||u.search(/[^ ]/)>=4||S.test(u)||I.test(u)||O.test(u))break;o+=`
`+h}!w&&!h.trim()&&(w=!0),l+=v+`
`,t=t.substring(v.length+1),u=h.slice(f)}}i.loose||(p?i.loose=!0:/\n *\n *$/.test(l)&&(p=!0));let x=null,y;this.options.gfm&&(x=/^\[[ xX]\] /.exec(o),x&&(y=x[0]!=="[ ] ",o=o.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:l,task:!!x,checked:y,loose:!1,text:o,tokens:[]}),i.raw+=l}i.items[i.items.length-1].raw=l.trimEnd(),i.items[i.items.length-1].text=o.trimEnd(),i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const u=i.items[c].tokens.filter(f=>f.type==="space"),h=u.length>0&&u.some(f=>/\n.*\n/.test(f.raw));i.loose=h}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),r=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:i}}}table(t){const e=this.rules.block.table.exec(t);if(!e||!/[:|]/.test(e[2]))return;const n=ue(e[1]),r=e[2].replace(/^\||\| *$/g,"").split("|"),i=e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)/^ *-+: *$/.test(l)?s.align.push("right"):/^ *:-+: *$/.test(l)?s.align.push("center"):/^ *:-+ *$/.test(l)?s.align.push("left"):s.align.push(null);for(const l of n)s.header.push({text:l,tokens:this.lexer.inline(l)});for(const l of i)s.rows.push(ue(l,s.header.length).map(o=>({text:o,tokens:this.lexer.inline(o)})));return s}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:b(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=N(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=Xe(e[2],"()");if(s>-1){const o=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,o).trim(),e[3]=""}}let r=e[2],i="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);s&&(r=s[1],i=s[3])}else i=e[3]?e[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(n)?r=r.slice(1):r=r.slice(1,-1)),fe(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(/\s+/g," "),i=e[r.toLowerCase()];if(!i){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return fe(n,i,n[0],this.lexer)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...r[0]].length-1;let l,o,p=s,c=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+s);(r=u.exec(e))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(o=[...l].length,r[3]||r[4]){p+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){c+=o;continue}if(p-=o,p>0)continue;o=Math.min(o,o+p+c);const h=[...r[0]][0].length,f=t.slice(0,s+r.index+h+o);if(Math.min(s,o)%2){const x=f.slice(1,-1);return{type:"em",raw:f,text:x,tokens:this.lexer.inlineTokens(x)}}const w=f.slice(2,-2);return{type:"strong",raw:f,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const r=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return r&&i&&(n=n.substring(1,n.length-1)),n=b(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=b(e[1]),r="mailto:"+n):(n=b(e[1]),r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,i;if(e[2]==="@")r=b(e[0]),i="mailto:"+r;else{let s;do s=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(s!==e[0]);r=b(e[0]),e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){let n;return this.lexer.state.inRawBlock?n=e[0]:n=b(e[0]),{type:"text",raw:e[0],text:n}}}}const Ve=/^(?: *(?:\n|$))+/,We=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Je=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Z=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ke=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,me=/(?:[*+-]|\d{1,9}[.)])/,be=d(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,me).getRegex(),ne=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ye=/^[^\n]+/,se=/(?!\s*\])(?:\\.|[^\[\]\\])+/,et=d(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",se).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),tt=d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,me).getRegex(),V="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ie=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,nt=d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",ie).replace("tag",V).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),we=d(ne).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",V).getRegex(),st=d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",we).getRegex(),re={blockquote:st,code:We,def:et,fences:Je,heading:Ke,hr:Z,html:nt,lheading:be,list:tt,newline:Ve,paragraph:we,table:q,text:Ye},ge=d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",V).getRegex(),it={...re,table:ge,paragraph:d(ne).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ge).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",V).getRegex()},rt={...re,html:d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ie).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:q,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:d(ne).replace("hr",Z).replace("heading",` *#{1,6} *[^
]`).replace("lheading",be).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ye=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,lt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,_e=/^( {2,}|\\)\n(?!\s*$)/,ot=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,M="\\p{P}$+<=>`^|~",at=d(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,M).getRegex(),ct=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,ht=d(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,M).getRegex(),pt=d("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,M).getRegex(),ut=d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,M).getRegex(),ft=d(/\\([punct])/,"gu").replace(/punct/g,M).getRegex(),gt=d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),dt=d(ie).replace("(?:-->|$)","-->").getRegex(),kt=d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",dt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),F=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,xt=d(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",F).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),$e=d(/^!?\[(label)\]\[(ref)\]/).replace("label",F).replace("ref",se).getRegex(),Te=d(/^!?\[(ref)\](?:\[\])?/).replace("ref",se).getRegex(),mt=d("reflink|nolink(?!\\()","g").replace("reflink",$e).replace("nolink",Te).getRegex(),le={_backpedal:q,anyPunctuation:ft,autolink:gt,blockSkip:ct,br:_e,code:lt,del:q,emStrongLDelim:ht,emStrongRDelimAst:pt,emStrongRDelimUnd:ut,escape:ye,link:xt,nolink:Te,punctuation:at,reflink:$e,reflinkSearch:mt,tag:kt,text:ot,url:q},bt={...le,link:d(/^!?\[(label)\]\((.*?)\)/).replace("label",F).getRegex(),reflink:d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F).getRegex()},Y={...le,escape:d(ye).replace("])","~|])").getRegex(),url:d(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},wt={...Y,br:d(_e).replace("{2,}","*").getRegex(),text:d(Y.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},j={normal:re,gfm:it,pedantic:rt},L={normal:le,gfm:Y,breaks:wt,pedantic:bt};class _{constructor(t){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||R,this.options.tokenizer=this.options.tokenizer||new U,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:j.normal,inline:L.normal};this.options.pedantic?(e.block=j.pedantic,e.inline=L.pedantic):this.options.gfm&&(e.block=j.gfm,this.options.breaks?e.inline=L.breaks:e.inline=L.gfm),this.tokenizer.rules=e}static get rules(){return{block:j,inline:L}}static lex(t,e){return new _(e).lex(t)}static lexInline(t,e){return new _(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(l,o,p)=>o+"    ".repeat(p.length));let n,r,i,s;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),e.push(n);continue}if(i=t,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=t.slice(1);let p;this.options.extensions.startBlock.forEach(c=>{p=c.call({lexer:this},o),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(i=t.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){r=e[e.length-1],s&&r.type==="paragraph"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n),s=i.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&r.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):e.push(n);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,r,i,s=t,l,o,p;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;t;)if(o||(p=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},t,e))?(t=t.substring(n.raw.length),e.push(n),!0):!1))){if(n=this.tokenizer.escape(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.tag(t)){t=t.substring(n.raw.length),r=e[e.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(n=this.tokenizer.link(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(n.raw.length),r=e[e.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(n=this.tokenizer.emStrong(t,s,p)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.codespan(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.br(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.del(t)){t=t.substring(n.raw.length),e.push(n);continue}if(n=this.tokenizer.autolink(t)){t=t.substring(n.raw.length),e.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(t))){t=t.substring(n.raw.length),e.push(n);continue}if(i=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const u=t.slice(1);let h;this.options.extensions.startInline.forEach(f=>{h=f.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(i=t.substring(0,c+1))}if(n=this.tokenizer.inlineText(i)){t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(p=n.raw.slice(-1)),o=!0,r=e[e.length-1],r&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):e.push(n);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return e}}class X{constructor(t){k(this,"options");this.options=t||R}code(t,e,n){var i;const r=(i=(e||"").match(/^\S*/))==null?void 0:i[0];return t=t.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+b(r)+'">'+(n?t:b(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:b(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t,e){return t}heading(t,e,n){return`<h${e}>${t}</h${e}>
`}hr(){return`<hr>
`}list(t,e,n){const r=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
`+t+"</"+r+`>
`}listitem(t,e,n){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){const r=pe(t);if(r===null)return n;t=r;let i='<a href="'+t+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>",i}image(t,e,n){const r=pe(t);if(r===null)return n;t=r;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${e}"`),i+=">",i}text(t){return t}}class oe{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class ${constructor(t){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=t||R,this.options.renderer=this.options.renderer||new X,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new oe}static parse(t,e){return new $(e).parse(t)}static parseInline(t,e){return new $(e).parseInline(t)}parse(t,e=!0){let n="";for(let r=0;r<t.length;r++){const i=t[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=i,l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=l||"";continue}}switch(i.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const s=i;n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,Ue(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=i;n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=i;let l="",o="";for(let c=0;c<s.header.length;c++)o+=this.renderer.tablecell(this.parseInline(s.header[c].tokens),{header:!0,align:s.align[c]});l+=this.renderer.tablerow(o);let p="";for(let c=0;c<s.rows.length;c++){const u=s.rows[c];o="";for(let h=0;h<u.length;h++)o+=this.renderer.tablecell(this.parseInline(u[h].tokens),{header:!1,align:s.align[h]});p+=this.renderer.tablerow(o)}n+=this.renderer.table(l,p);continue}case"blockquote":{const s=i,l=this.parse(s.tokens);n+=this.renderer.blockquote(l);continue}case"list":{const s=i,l=s.ordered,o=s.start,p=s.loose;let c="";for(let u=0;u<s.items.length;u++){const h=s.items[u],f=h.checked,w=h.task;let x="";if(h.task){const y=this.renderer.checkbox(!!f);p?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=y+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=y+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:y+" "}):x+=y+" "}x+=this.parse(h.tokens,p),c+=this.renderer.listitem(x,w,!!f)}n+=this.renderer.list(c,l,o);continue}case"html":{const s=i;n+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=i;n+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=i,l=s.tokens?this.parseInline(s.tokens):s.text;for(;r+1<t.length&&t[r+1].type==="text";)s=t[++r],l+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);n+=e?this.renderer.paragraph(l):l;continue}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(t,e){e=e||this.renderer;let n="";for(let r=0;r<t.length;r++){const i=t[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){n+=s||"";continue}}switch(i.type){case"escape":{const s=i;n+=e.text(s.text);break}case"html":{const s=i;n+=e.html(s.text);break}case"link":{const s=i;n+=e.link(s.href,s.title,this.parseInline(s.tokens,e));break}case"image":{const s=i;n+=e.image(s.href,s.title,s.text);break}case"strong":{const s=i;n+=e.strong(this.parseInline(s.tokens,e));break}case"em":{const s=i;n+=e.em(this.parseInline(s.tokens,e));break}case"codespan":{const s=i;n+=e.codespan(s.text);break}case"br":{n+=e.br();break}case"del":{const s=i;n+=e.del(this.parseInline(s.tokens,e));break}case"text":{const s=i;n+=e.text(s.text);break}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}}class P{constructor(t){k(this,"options");this.options=t||R}preprocess(t){return t}postprocess(t){return t}}k(P,"passThroughHooks",new Set(["preprocess","postprocess"]));var B,ee,G,ze;class yt{constructor(...t){W(this,B);W(this,G);k(this,"defaults",te());k(this,"options",this.setOptions);k(this,"parse",Q(this,B,ee).call(this,_.lex,$.parse));k(this,"parseInline",Q(this,B,ee).call(this,_.lexInline,$.parseInline));k(this,"Parser",$);k(this,"Renderer",X);k(this,"TextRenderer",oe);k(this,"Lexer",_);k(this,"Tokenizer",U);k(this,"Hooks",P);this.use(...t)}walkTokens(t,e){var r,i;let n=[];for(const s of t)switch(n=n.concat(e.call(this,s)),s.type){case"table":{const l=s;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,e));for(const o of l.rows)for(const p of o)n=n.concat(this.walkTokens(p.tokens,e));break}case"list":{const l=s;n=n.concat(this.walkTokens(l.items,e));break}default:{const l=s;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{n=n.concat(this.walkTokens(l[o],e))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const s=e.renderers[i.name];s?e.renderers[i.name]=function(...l){let o=i.renderer.apply(this,l);return o===!1&&(o=s.apply(this,l)),o}:e.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=e[i.level];s?s.unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),r.extensions=e),n.renderer){const i=this.defaults.renderer||new X(this.defaults);for(const s in n.renderer){if(!(s in i)||s==="options")throw new Error(`renderer '${s}' does not exist`);const l=s,o=n.renderer[l],p=i[l];i[l]=(...c)=>{let u=o.apply(i,c);return u===!1&&(u=p.apply(i,c)),u||""}}r.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new U(this.defaults);for(const s in n.tokenizer){if(!(s in i)||["options","rules","lexer"].includes(s))throw new Error(`tokenizer '${s}' does not exist`);const l=s,o=n.tokenizer[l],p=i[l];i[l]=(...c)=>{let u=o.apply(i,c);return u===!1&&(u=p.apply(i,c)),u}}r.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new P;for(const s in n.hooks){if(!(s in i)||s==="options")throw new Error(`hook '${s}' does not exist`);const l=s,o=n.hooks[l],p=i[l];P.passThroughHooks.has(s)?i[l]=c=>{if(this.defaults.async)return Promise.resolve(o.call(i,c)).then(h=>p.call(i,h));const u=o.call(i,c);return p.call(i,u)}:i[l]=(...c)=>{let u=o.apply(i,c);return u===!1&&(u=p.apply(i,c)),u}}r.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,s=n.walkTokens;r.walkTokens=function(l){let o=[];return o.push(s.call(this,l)),i&&(o=o.concat(i.call(this,l))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return _.lex(t,e??this.defaults)}parser(t,e){return $.parse(t,e??this.defaults)}}B=new WeakSet,ee=function(t,e){return(n,r)=>{const i={...r},s={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const l=Q(this,G,ze).call(this,!!s.silent,!!s.async);if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(o=>t(o,s)).then(o=>s.walkTokens?Promise.all(this.walkTokens(o,s.walkTokens)).then(()=>o):o).then(o=>e(o,s)).then(o=>s.hooks?s.hooks.postprocess(o):o).catch(l);try{s.hooks&&(n=s.hooks.preprocess(n));const o=t(n,s);s.walkTokens&&this.walkTokens(o,s.walkTokens);let p=e(o,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(o){return l(o)}}},G=new WeakSet,ze=function(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+b(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}};const z=new yt;function g(a,t){return z.parse(a,t)}g.options=g.setOptions=function(a){return z.setOptions(a),g.defaults=z.defaults,de(g.defaults),g};g.getDefaults=te;g.defaults=R;g.use=function(...a){return z.use(...a),g.defaults=z.defaults,de(g.defaults),g};g.walkTokens=function(a,t){return z.walkTokens(a,t)};g.parseInline=z.parseInline;g.Parser=$;g.parser=$.parse;g.Renderer=X;g.TextRenderer=oe;g.Lexer=_;g.lexer=_.lex;g.Tokenizer=U;g.Hooks=P;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;$.parse;_.lex;class _t{async getMdHtml(t){let e="";try{e=await(await fetch(`/src/data/markDown/${t}.md`)).text()}catch(n){return Promise.reject(n)}return Promise.resolve(g.parse(e))}}const $t=Ie(new _t),D=a=>(Pe("data-v-4a96f43b"),a=a(),Be(),a),Tt={key:0,class:"skeleton"},zt=D(()=>m("div",{class:"title"},null,-1)),Rt=D(()=>m("div",{class:"content"},null,-1)),vt=[zt,Rt],St={key:1,class:"essay-container"},It={key:0,class:"falure"},At=D(()=>m("p",null,"发生未知错误",-1)),Ct=["innerHTML"],Et={class:"essay-info"},Lt={class:"classify"},qt=D(()=>m("p",{class:"icon"},"X",-1)),Pt=D(()=>m("p",{class:"text"},"关闭",-1)),Bt=[qt,Pt],Zt=Ae({__name:"essay_detail",setup(a){const t=qe(),e=Ze(),n=["前端","Python","C/Cpp","SwiftUi","其它"],r=A(""),i=A(!1),s=A(!1);Ce(()=>{l(),window.addEventListener("scroll",()=>h(),!0)}),Ee(()=>{window.removeEventListener("scroll",()=>h(),!0)});const l=()=>{i.value=!0,s.value=!1,$t.getMdHtml(t.query.id).then(x=>{r.value=x}).catch(x=>{console.log(x),s.value=!0}).finally(()=>i.value=!1)},o=()=>{e.push({name:"studyLog"})},p=()=>{u.value.scrollTo({top:0})},c=A(0),u=A(),h=()=>{var S,I,v;const x=((S=u.value)==null?void 0:S.clientHeight)||0,y=((I=u.value)==null?void 0:I.scrollHeight)||1,O=(((v=u.value)==null?void 0:v.scrollTop)||0)/(y-x)*100;c.value=Math.floor(O)},f=ae(()=>c.value>45),w=ae(()=>Math.min(c.value/10,1));return(x,y)=>(E(),C("div",{ref_key:"essayContainerRef",ref:u,class:"scroll-container"},[i.value?(E(),C("div",Tt,vt)):(E(),C("div",St,[s.value?(E(),C("div",It,[At,m("p",{class:"retry",onClick:l},"重试")])):(E(),C("div",{key:1,innerHTML:r.value},null,8,Ct))])),m("div",Et,[ce(De,{title:T(t).query.title,"title-en":T(t).query.titleEn,pubdate:T(t).query.pubdate,class:"main-info"},null,8,["title","title-en","pubdate"]),m("p",Lt,"文章分类："+J(n[T(t).query.classify]),1)]),m("div",{class:"back",onClick:o},Bt),m("div",{class:"pin",style:K({willChange:"opcity",opacity:T(w)})},[m("div",{class:"percentage",style:K({willChange:"width",width:c.value+"%"})},null,4),m("p",{class:"number-info",style:K({willChange:"transform",transform:`translate3d(${c.value-1}%, 0, 0)`})},J(c.value)+"%",5),m("h1",{class:Le(["title",{hide:c.value>98}])},J(T(t).query.title),3)],4),ce(He,{onClick:p,show:T(f)},null,8,["show"])],512))}});const Ot=Me(Zt,[["__scopeId","data-v-4a96f43b"]]);export{Ot as default};
