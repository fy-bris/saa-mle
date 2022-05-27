(function(t){function s(s){for(var i,o,l=s[0],r=s[1],c=s[2],h=0,d=[];h<l.length;h++)o=l[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(s);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],i=!0,l=1;l<e.length;l++){var r=e[l];0!==a[r]&&(i=!1)}i&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var i={},a={app:0},n=[];function o(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)o.d(e,i,function(s){return t[s]}.bind(null,i));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/saa-mle/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=s,l=l.slice();for(var c=0;c<l.length;c++)s(l[c]);var u=r;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";e("85ec")},"21f7":function(t,s,e){"use strict";var i=e("acc8"),a=e.n(i);s["default"]=a.a},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"wrapper"}},[e("nav",{staticClass:"navbar is-dark"},[e("div",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e("strong",[t._v("ML estimation of selection and allele age")])]),e("a",{staticClass:"navbar-burger",attrs:{"aria-label":"menu","aria-expanded":"false","data-target":"navbar-menu"},on:{click:function(s){t.showMobileMenu=!t.showMobileMenu}}},[e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}})])],1),e("div",{staticClass:"navbar-menu",class:{"is-active":t.showMobileMenu},attrs:{id:"navbar-menu"}},[e("div",{staticClass:"navbar-start"}),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("div",{staticClass:"buttons"},[e("router-link",{staticClass:"button is-light",attrs:{to:"/doc"}},[t._v("Documentation")])],1)])])])]),e("section",{staticClass:"section"},[e("router-view")],1),t._m(0)])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"footer"},[e("p",{staticClass:"has-text-centered"},[t._v("Copyright (c) 2022")])])}],o={name:"Home",data:function(){return{showMobileMenu:!1}},mounted:function(){document.title="SAA"}},l=o,r=(e("034f"),e("2877")),c=Object(r["a"])(l,a,n,!1,null,null,null),u=c.exports,h=e("8c4f"),d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-3 has-background-light"},[e("div",{staticClass:"box"},[e("section",{staticClass:"buttons"},[e("button",{class:{"button is-success":"mle"==t.task,button:"mle"!=t.task},on:{click:function(s){return t.setTask("mle")}}},[t._v("ML estimation")]),e("button",{directives:[{name:"show",rawName:"v-show",value:t.advanced,expression:"advanced"}],class:{"button is-success":"lkhd"==t.task,button:"lkhd"!=t.task},on:{click:function(s){return t.setTask("lkhd")}}},[t._v("Compute likelihood")]),e("div",{directives:[{name:"show",rawName:"v-show",value:"mle"==t.task,expression:"task=='mle'"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Range of selection coefficient")]),e("div",{staticClass:"control"},[e("label",{staticClass:"label"},[t._v("Min")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.smin,expression:"smin",modifiers:{number:!0}}],staticClass:"input is-info",attrs:{type:"text"},domProps:{value:t.smin},on:{input:function(s){s.target.composing||(t.smin=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}}),e("label",{staticClass:"label"},[t._v("Max")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.smax,expression:"smax",modifiers:{number:!0}}],staticClass:"input is-info",attrs:{type:"text"},domProps:{value:t.smax},on:{input:function(s){s.target.composing||(t.smax=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}})]),e("br"),t.workerBusy?t._e():e("button",{staticClass:"button is-success",on:{click:t.gss}},[t._v("Estimate: ")]),t.workerBusy?e("button",{staticClass:"button is-danger"},[t._v("Calculating")]):t._e(),t.workerBusy?e("i",{staticClass:"fa fa-spinner fa-spin",staticStyle:{"font-size":"36px",color:"red"}}):t._e(),t.workerBusy?e("pre",[t._v("  Step "+t._s(t.gssStep)+" of "+t._s(t.gssInfo.n+1))]):t._e()]),e("div",{directives:[{name:"show",rawName:"v-show",value:"lkhd"==t.task,expression:"task=='lkhd'"}],staticClass:"field"},[e("label",{staticClass:"label"},[t._v("selection coefficient")]),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sel,expression:"sel",modifiers:{number:!0}}],staticClass:"input is-info",attrs:{type:"text"},domProps:{value:t.sel},on:{input:function(s){s.target.composing||(t.sel=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}})]),e("br"),e("button",{staticClass:"button is-success",on:{click:function(s){return t.computeLkhd(t.sel)}}},[t._v("Compute")])])]),e("hr"),e("h2",{staticClass:"title"},[t._v("Parameters")]),e("section",{staticClass:"form"},[e("div",{staticClass:"field"},[t._m(0),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.N0,expression:"N0",modifiers:{number:!0}}],staticClass:"input is-info",attrs:{type:"text","data-tooltip":"Tooltip Text"},domProps:{value:t.N0},on:{input:function(s){s.target.composing||(t.N0=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}})])]),e("div",{staticClass:"field"},[t._m(1),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.hh,expression:"hh",modifiers:{number:!0}}],staticClass:"input is-info",attrs:{type:"text"},domProps:{value:t.hh},on:{input:function(s){s.target.composing||(t.hh=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}})])]),e("label",{staticClass:"checkbox"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.advanced,expression:"advanced"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.advanced)?t._i(t.advanced,null)>-1:t.advanced},on:{change:function(s){var e=t.advanced,i=s.target,a=!!i.checked;if(Array.isArray(e)){var n=null,o=t._i(e,n);i.checked?o<0&&(t.advanced=e.concat([n])):o>-1&&(t.advanced=e.slice(0,o).concat(e.slice(o+1)))}else t.advanced=a}}}),t._v("  Advanced options")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.advanced,expression:"advanced"}],staticClass:"field"},[t._m(2),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.lkhdCutoffRatio,expression:"lkhdCutoffRatio",modifiers:{number:!0}}],staticClass:"input is-info",attrs:{type:"text"},domProps:{value:t.lkhdCutoffRatio},on:{input:function(s){s.target.composing||(t.lkhdCutoffRatio=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.advanced,expression:"advanced"}],staticClass:"field"},[t._m(3),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.nSubSteps,expression:"nSubSteps",modifiers:{number:!0}}],staticClass:"input is-info",attrs:{type:"text"},domProps:{value:t.nSubSteps},on:{input:function(s){s.target.composing||(t.nSubSteps=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}})])]),e("section",{directives:[{name:"show",rawName:"v-show",value:t.advanced,expression:"advanced"}],staticClass:"buttons"},[e("button",{class:{"button is-success":1==t.flagAge,button:0==t.flagAge},on:{click:function(s){return t.setflagAge(1)}}},[t._v("Infer allele age")]),e("button",{class:{"button is-success":0==t.flagAge,button:1==t.flagAge},on:{click:function(s){return t.setflagAge(0)}}},[t._v("Selection coefficient only")])])])])]),e("div",{staticClass:"column is-6 has-background-light"},[e("div",{staticClass:"box"},[e("sample-chart",{attrs:{samplePlotDict:t.samplePlotDict}})],1),t.gssInfo?e("div",{staticClass:"box"},[e("gss-plot",{directives:[{name:"show",rawName:"v-show",value:"mle"==t.task,expression:"task=='mle'"}],attrs:{gssPlotDict:t.gssPlotDict,"vbind:key":"componentKey"}}),e("lkhd-plot",{directives:[{name:"show",rawName:"v-show",value:1==t.flagAge,expression:"flagAge==1"}],attrs:{lkhdPlotDict:t.lkhdPlotDict}})],1):t._e()]),e("div",{staticClass:"column is-3 has-background-link-light"},[e("h4",{staticClass:"title"},[t._v("Data")]),e("div",{staticClass:"box"},[e("h4",{staticClass:"subtitle"},[t._v("Historical sample")]),e("div",{staticClass:"tooltip"},[e("div",{staticClass:"file"},[e("label",{staticClass:"file-label"},[e("input",{staticClass:"file-input",attrs:{type:"file"},on:{change:function(s){return t.readFile(s,1)}}}),t._m(4)])]),t._m(5)]),t.dataFile?e("pre",[t._v("File: "+t._s(t.dataFile.name))]):t._e(),e("br"),e("br"),e("button",{class:{"button is-success":!t.showCounts,button:t.showCounts},on:{click:t.flipShowCounts}},[t._v("Show")]),t.showCounts?e("table",{staticClass:"table is-fullwidth"},[t._m(6),e("tbody",t._l(t.countsTr,(function(s){return e("tr",{key:s},[e("td",[t._v(t._s(s[0]))]),e("td",[t._v(t._s(s[1]))]),e("td",[t._v(t._s(s[2]))])])})),0)]):t._e()]),e("div",{staticClass:"box"},[e("h4",{staticClass:"subtitle"},[t._v("Historical population size")]),e("div",{staticClass:"tooltip"},[e("div",{staticClass:"file"},[e("label",{staticClass:"file-label"},[e("input",{staticClass:"file-input",attrs:{type:"file"},on:{change:function(s){return t.readFile(s,2)}}}),t._m(7)])]),t.NtFile?e("pre",[t._v("File: "+t._s(t.NtFile.name))]):t._e(),t._m(8)]),e("br"),e("br"),e("button",{class:{"button is-success":!t.showNt,button:t.showNt},on:{click:t.flipShowNt}},[t._v("Show")]),e("br"),e("br"),e("button",{staticClass:"button",on:{click:t.removeNt}},[t._v("Remove")]),t.showNt?e("table",{staticClass:"table is-fullwidth"},[t._m(9),e("tbody",t._l(t.NtTr,(function(s){return e("tr",{key:s},[e("td",[t._v(t._s(s[0]))]),e("td",[t._v(t._s(s[1]))])])})),0)]):t._e()]),e("div",{staticClass:"box"},[e("table",{staticClass:"table is-fullwidth tooltip"},[e("span",{staticClass:"tooltiptext"},[t._v("CI for illustration only. For better results, use bootstrap.")]),t._m(10),e("tbody",[e("tr",[e("td",[t._v("s")]),t.sEst?e("td",[t._v(t._s(t.sEst.mle.toFixed(4)))]):t._e(),t.sEst?e("td",[t._v("["+t._s(t.sEst.lower.toFixed(4))+", "+t._s(t.sEst.upper.toFixed(4))+"]")]):t._e()]),e("tr",[e("td",[t._v("allele age")]),t.ageEst?e("td",[t._v(t._s(t.ageEst.mle.toFixed(0)))]):t._e(),t.ageEst?e("td",[t._v("["+t._s(t.ageEst.upper.toFixed(0))+", "+t._s(t.ageEst.lower.toFixed(0))+"]")]):t._e()])])])])])])])},f=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tooltip"},[e("label",{staticClass:"label"},[t._v("N")]),e("span",{staticClass:"tooltiptext"},[t._v("Reference population size")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tooltip"},[e("label",{staticClass:"label"},[t._v("h")]),e("span",{staticClass:"tooltiptext"},[t._v("Dominance parameter")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tooltip"},[e("label",{staticClass:"label"},[t._v("Likelihood cutoff ratio")]),e("span",{staticClass:"tooltiptext"},[t._v("Stop evolution of KBE after likelihood has dropped to 1/lcr of the maximum")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tooltip"},[e("label",{staticClass:"label"},[t._v("Number of sub-steps per time step")]),e("span",{staticClass:"tooltiptext"},[t._v("One time step is N generations. More sub-steps is safer but takes longer.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fas fa-upload"})]),e("span",{staticClass:"file-label"},[t._v("Update")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"tooltiptext"},[t._v(" Plain text file should have 3 columns of numbers: time (gbp), sample size, mutant count. See "),e("a",{attrs:{href:"@/../example/sample_bwd2.txt"}},[t._v("example")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",[t._v("Time")]),e("th",[t._v("Total count")]),e("th",[t._v("Mutant count")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fas fa-upload"})]),e("span",{staticClass:"file-label"},[t._v("Update")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"tooltiptext"},[t._v("Plain text file should have 2 columns of numbers: time (gbp), population size. See "),e("a",{attrs:{href:"@/../example/Nt_bwd1.txt"}},[t._v("example")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",[t._v("Time")]),e("th",[t._v("Population size")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th"),e("th",[t._v("Estimate")]),e("th",[t._v("95% CI ")])])}],p=e("2909"),m=(e("d81d"),e("cb29"),e("4e82"),e("c740"),e("d3b7"),e("ddb0"),e("b680"),e("fb6a"),e("ac1f"),e("1276"),e("4de4"),e("caad"),e("2532"),e("b0c0"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.series?e("apexchart",{attrs:{height:"250",options:t.options,series:t.series}}):t._e()}),v=[],g=e("5530"),b=(e("a3a2"),e("1321")),x=e.n(b),_={name:"gss-plot",props:{gssPlotDict:Object},components:{apexchart:x.a},mounted:function(){this.options=this.optionsOrig},data:function(){return{series:null,options:null,optionsOrig:{chart:{id:"gss-plot",type:"area"},zoom:{enabled:!0},dataLabels:{enabled:!1},title:{text:"Likelihood as a function of s",align:"left",offsetX:50},markers:{size:5,hover:{size:9}},tooltip:{enabled:!0},xaxis:{type:"numeric",axisTicks:{show:!0},labels:{formatter:function(t){return t?t.toFixed(3):t}},title:{text:"selection coefficient s"}},yaxis:{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{formatter:function(t){return t.toExponential(4)}},title:{text:"Likelihood",style:{color:"#008FFB"}}},stroke:{curve:"straight",width:2}}}},watch:{gssPlotDict:function(t){var s;"smax"in t?(s=Object(g["a"])(Object(g["a"])({},this.options),{},{annotations:{xaxis:[{x:t.smax,strokeDashArray:0,borderColor:"#775DD0",label:{borderColor:"#775DD0",style:{color:"#fff",background:"#775DD0"},text:"mle="+t.smax.toFixed(4),position:"bottom"}}]}}),this.options=s):this.options=this.optionsOrig,this.series=t.series}},methods:{}},C=_,k=Object(r["a"])(C,m,v,!1,null,null,null),y=k.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.series?e("apexchart",{attrs:{height:"250",options:t.options,series:t.series}}):t._e()},N=[],I={name:"lkhd-plot",props:{lkhdPlotDict:Object},components:{apexchart:x.a},mounted:function(){this.options=this.optionsOrig},data:function(){return{series:null,options:null,optionsOrig:{chart:{id:"lkhd-plot",type:"line"},title:{text:"Likelihood as a function of allele age",align:"left",offsetX:50},tooltip:{enabled:!0,shared:!0,intersect:!1},xaxis:{type:"numeric",title:{text:"time (generations)"}},yaxis:{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},labels:{formatter:function(t){return t.toExponential(4)}},title:{text:"Likelihood",style:{color:"#008FFB"}}},stroke:{width:1}}}},watch:{lkhdPlotDict:function(t){if("tmax"in t){var s=Object(g["a"])(Object(g["a"])({},this.options),{annotations:{xaxis:[{x:t.tmax,strokeDashArray:0,borderColor:"#775DD0",label:{borderColor:"#775DD0",style:{color:"#fff",background:"#775DD0"},text:"mle="+t.tmax.toFixed(0),position:"bottom"}}]}});this.options=s}else this.options=this.optionsOrig;this.series=t.series}},methods:{}},P=I,S=Object(r["a"])(P,w,N,!1,null,null,null),D=S.exports,F=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.series?e("apexchart",{attrs:{type:"line",height:"250",options:t.options,series:t.series}}):t._e()},E=[],M={name:"sample-chart",props:{samplePlotDict:Array},components:{apexchart:x.a},data:function(){var t=this;return{series:null,options:{chart:{id:"sample-chart",type:"line",stacked:!0},title:{text:"Samples",align:"left",offsetX:50},tooltip:{enabled:!0,shared:!0,intersect:!1},xaxis:{type:"numeric",title:{text:"time (generations)"}},yaxis:[{axisTicks:{show:!0},axisBorder:{show:!0,color:"#008FFB"},min:0,max:function(){var s=t.series[0].data.map((function(t){return t[1]})),e=t.series[1].data.map((function(t){return t[1]}));return Math.max.apply(Math,Object(p["a"])(s.map((function(t,s){return t+e[s]}))))},labels:{formatter:function(t){return t.toFixed(0)}},title:{text:"Sample counts",style:{color:"#008FFB"}}},{show:!1,labels:{formatter:function(t){return t.toFixed(0)}}},{min:0,max:1,axisTicks:{show:!0},axisBorder:{show:!0,color:"#FEB019"},labels:{},title:{text:"Mutant proportion"}},{opposite:!0,axisTicks:{show:!0},axisBorder:{show:!0,color:"#FF4560"},min:0,max:function(t){return 1.1*t},labels:{formatter:function(t){return t.toFixed(0)}},title:{text:"Population size"}}],dataLabels:{enabled:!1},stroke:{width:[1,1,2,4],curve:["smooth","smooth","smooth","stepline"]},fill:{opacity:[.7,.1,.5,1]}}}},watch:{samplePlotDict:function(t){this.series=t}},methods:{updateChart:function(){var t=90,s=20,e=this.series[0].data.map((function(){return Math.floor(Math.random()*(t-s+1))+s}));this.series=[{data:e}]}}},O=M,A=Object(r["a"])(O,F,E,!1,null,null,null),j=A.exports,$={name:"Home",mounted:function(){var t=this;this.worker=new Worker("@/../script/kbe/worker.js"),this.worker.onmessage=function(s){"RESULT"===s.data.type&&(t.summary=s.data.payload.summary,t.lkhdt=s.data.payload.res,t.workerBusy=!1)},this.genSamplePlot()},data:function(){return{task:"mle",advanced:!1,summary:null,lkhdt:null,sel:.01,smin:0,smax:.02,N0:5e3,hh:.5,flagAge:1,lkhdCutoffRatio:5,nSubSteps:20,dataFile:null,NtFile:null,counts:[[0,60,121,181,241,301,362,422,482,542,603,663,723,783,844,904,964,1024,1085,1145],[60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60],[53,49,48,36,41,28,28,23,19,7,11,9,5,3,4,2,2,1,0,0]],Nt:[[0],[5e3]],showCounts:!1,showNt:!1,workerBusy:!1,sComputed:[],lComputed:[],worker:null,gssInfo:null,gssStep:0,samplePlotDict:[],lkhdPlotDict:{series:[]},gssPlotDict:null,ageEst:null,sEst:null}},components:{GssPlot:y,LkhdPlot:D,SampleChart:j},computed:{dt:function(){return 1/this.N0},countsTr:function(){var t=this;return this.counts?this.counts[0].map((function(s,e){return t.counts.map((function(t){return t[e]}))})):null},NtTr:function(){var t=this;return this.Nt?this.Nt[0].map((function(s,e){return t.Nt.map((function(t){return t[e]}))})):null}},watch:{gssStep:function(){"c"==this.gssInfo.cur?this.computeLkhd(this.gssInfo.c):"d"==this.gssInfo.cur?this.computeLkhd(this.gssInfo.d):"a"==this.gssInfo.cur?this.computeLkhd(this.gssInfo.a):this.computeLkhd(this.gssInfo.b)},workerBusy:function(t,s){var e=this,i=function(){var t=Array(e.sComputed.length).fill().map((function(t,s){return s})),s=t.map((function(t){return[e.sComputed[t],e.lComputed[t]]}));return s.sort((function(t,s){return t[0]-s[0]})),s},a=function(t,s,e){var i=s.findIndex((function(t){return t>e}));if(i>=1){var a=t[i-1],n=t[i],o=s[i-1],l=s[i];return a+(n-a)/(l-o)*(e-o)}return t[0]};if(s&&!t){this.sComputed.push(this.summary[0]),this.lComputed.push(this.summary[3]),this.summary[1]>this.nSubSteps&&(this.nSubSteps=this.summary[1]);var n=this.lkhdt.length,o=this.lkhdt.findIndex((function(t){return t>0})),l=Object(p["a"])(Array(n-o).keys()).map((function(t){return o+t}));if(null!=this.lkhdPlotDict.series?this.lkhdPlotDict.series.push({name:"s="+this.summary[0].toFixed(6),type:"line",data:l.map((function(t){return[2*-t*e.N0*e.dt,e.lkhdt[t]]}))}):this.lkhdPlotDict={series:[{name:"s="+this.summary[0].toFixed(6),type:"line",data:l.map((function(t){return[2*-t*e.N0*e.dt,e.lkhdt[t]]}))}]},this.gssPlotDict={series:[{name:"likelihood",data:i()}]},"mle"!=this.task)return;if("c"==this.gssInfo.cur?this.gssInfo.yc=this.summary[3]:"d"==this.gssInfo.cur&&(this.gssInfo.yd=this.summary[3]),"b"==this.gssInfo.cur)return this.gssInfo.cur="a",void this.gssStep++;if(null==this.gssInfo.yc)return this.gssInfo.cur="c",void this.gssStep++;if(null==this.gssInfo.yd)return this.gssInfo.cur="d",void this.gssStep++;if(this.gssStep>this.gssInfo.n){if(1==this.flagAge){var r,c,u=this.lComputed.indexOf(Math.max.apply(Math,Object(p["a"])(this.lComputed))),h=this.lkhdPlotDict.series[u].data.map((function(t){return t[1]})),d=Math.max.apply(Math,Object(p["a"])(h)),f=h.indexOf(d),m=(Math.log(h[f-1])-2*Math.log(h[f])+Math.log(h[f+1]))/Math.pow(2*this.N0*this.dt,2),v=1/Math.sqrt(-m),g=1.96*v,b=Math.round(g/(2*this.N0*this.dt));r=f<=b?0:f-b,c=f>=h.length-b?h.length-1:f+b;var x=this.lkhdPlotDict.series;x.push({name:"95% Confidence interval",type:"area",data:this.lkhdPlotDict.series[u].data.slice(r,c+1)});var _=this.lkhdPlotDict.series[u].data[0][0];this.ageEst={lower:2*-r*this.N0*this.dt+_,upper:2*-c*this.N0*this.dt+_,mle:2*-f*this.N0*this.dt+_},this.lkhdPlotDict={tmax:this.ageEst.mle,series:x}}var C=this.gssPlotDict.series[0].data.map((function(t,s){return e.gssPlotDict.series[0].data.map((function(t){return t[s]}))})),k=Math.max.apply(Math,Object(p["a"])(C[1])),y=C[0][C[1].indexOf(k)],w=.058*k,N=a(C[0],C[1],w),I=C[0].slice().reverse(),P=C[1].slice().reverse(),S=a(I,P,w);this.sComputed.push(N),this.lComputed.push(w),this.sComputed.push(S),this.lComputed.push(w);var D=i(),F=D.findIndex((function(t){return t[0]==N})),E=D.findIndex((function(t){return t[0]==S}));return this.sEst={lower:N,upper:S,mle:y},void(this.gssPlotDict={series:[{name:"likelihood",type:"line",data:D},{name:"95% Confidence interval",type:"area",data:D.slice(F,E+1)}],smax:y})}this.gssInfo.yc>this.gssInfo.yd?(this.gssInfo.b=this.gssInfo.d,this.gssInfo.d=this.gssInfo.c,this.gssInfo.yd=this.gssInfo.yc,this.gssInfo.h1=this.gssInfo.invphi*this.gssInfo.h1,this.gssInfo.c=this.gssInfo.a+this.gssInfo.invphi2*this.gssInfo.h1,this.gssInfo.yc=null,this.gssInfo.cur="c",this.gssStep++):(this.gssInfo.a=this.gssInfo.c,this.gssInfo.c=this.gssInfo.d,this.gssInfo.yc=this.gssInfo.yd,this.gssInfo.h1=this.gssInfo.invphi*this.gssInfo.h1,this.gssInfo.d=this.gssInfo.a+this.gssInfo.invphi*this.gssInfo.h1,this.gssInfo.yd=null,this.gssInfo.cur="d",this.gssStep++)}}},methods:{setTask:function(t){this.task=t},setflagAge:function(t){this.flagAge=t},flipShowCounts:function(){this.showCounts=!this.showCounts},flipShowNt:function(){this.showNt=!this.showNt},removeNt:function(){this.N0>0||(this.N0=5e3),this.NtFile=null,this.Nt=[[0],[this.N0]],this.genSamplePlot()},genSamplePlot:function(){var t=this;if(null!=this.counts){var s=Array(this.counts[0].length).fill().map((function(t,s){return s})),e=Math.max.apply(Math,Object(p["a"])(this.counts[0])),i=Array(this.Nt[0].length).fill().map((function(t,s){return s})),a=i.map((function(s){return[-t.Nt[0][s],Math.round(t.Nt[1][s])]})),n=this.Nt[1][this.Nt[1].length-1];e>this.Nt[0][this.Nt[0].length-1]&&a.push([-e,n]),this.samplePlotDict=[{name:"mutant count",type:"column",data:s.map((function(s){return[-t.counts[0][s],Math.round(t.counts[2][s])]}))},{name:"non-mutant count",type:"column",data:s.map((function(s){return[-t.counts[0][s],Math.round(t.counts[1][s]-t.counts[2][s])]}))},{name:"mutant proportion",type:"area",data:s.map((function(s){return[-t.counts[0][s],Math.round(100*t.counts[2][s]/t.counts[1][s])/100]}))},{name:"population size",type:"line",data:a}]}},computeLkhd:function(t){"mle"!=this.task&&(this.lkhdPlotDict={series:null}),this.workerBusy=!0,this.worker.postMessage({type:"COMPUTE",payload:{N0:this.N0,dt:this.dt,hh:this.hh,flagAge:this.flagAge,lkhdCutoffRatio:this.lkhdCutoffRatio,nSubSteps:this.nSubSteps,sel:t,counts:this.counts}})},convertStrArray:function(t){for(var s=t.split("\n"),e=s.map((function(t){return t.split(" ").map(parseFloat)})),i=e[0].length,a=e.filter((function(t){return t.length==i})),n=[],o=function(t){n.push(a.map((function(s){return s[t]})))},l=0;l<i;l++)o(l);return n},readFile:function(t,s){var e,i=this;1==s?(this.dataFile=t.target.files[0],e=this.dataFile):(this.NtFile=t.target.files[0],e=this.NtFile);var a=new FileReader;e.name.includes(".txt")?(a.onload=function(t){1==s?(i.counts=i.convertStrArray(t.target.result),i.genSamplePlot()):(i.Nt=i.convertStrArray(t.target.result),i.N0=i.Nt[1][0],i.genSamplePlot())},a.onerror=function(t){return console.log(t)},a.readAsText(e)):console.log("readFile: unknown file type"),this.sEst=null,this.ageEst=null,this.sComputed=[],this.lComputed=[],this.lkhdPlotDict={series:null},this.gssPlotDict={series:null}},gss:function(){if(this.sEst=null,this.ageEst=null,this.sComputed=[],this.lComputed=[],this.lkhdPlotDict={series:null},this.gssPlotDict={series:null},this.smin>this.smax){var t=[this.smin,this.smax];this.smax=t[0],this.smin=t[1]}var s=this.smin,e=this.smax,i=e-s,a=1e-4,n=.6180339887,o=.3819660113,l=Math.ceil(Math.log(a/i)/Math.log(n)),r=s+o*i,c=s+n*i;this.gssInfo={cur:"b",a:s,b:e,c:r,d:c,yc:null,yd:null,invphi:n,invphi2:o,h1:i,n:l},this.gssStep=0,this.gssStep++}}},T=$,B=Object(r["a"])(T,d,f,!1,null,null,null),L=B.exports,z=e("b05d");i["a"].use(h["a"]);var R=[{path:"/",name:"Home",component:L},{path:"/doc",name:"Doc",component:z["default"]}],U=new h["a"]({mode:"history",base:"/saa-mle/",routes:R}),H=U;e("92c6");i["a"].config.productionTip=!1,new i["a"]({router:H,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,s,e){},"8dde":function(t,s,e){"use strict";e.d(s,"a",(function(){return i})),e.d(s,"b",(function(){return a}));var i=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-login"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-4 is-offset-4"},[e("h2",{staticClass:"is-size-2 has-text-centered"},[t._v("some stuff")])])])])}]},acc8:function(t,s){},b05d:function(t,s,e){"use strict";var i=e("8dde"),a=e("21f7"),n=e("2877"),o=Object(n["a"])(a["default"],i["a"],i["b"],!1,null,null,null);s["default"]=o.exports}});
//# sourceMappingURL=app.6b0d5a78.js.map