(this.webpackJsonpreact_game=this.webpackJsonpreact_game||[]).push([[0],{27:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c(20),l=c.n(a),o=c(9),u=c(5);c(27);var i=function(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/GuGuDan",children:"GuGuDan"}),Object(n.jsx)(o.b,{to:"/WordRelay",children:"WordRelay"}),Object(n.jsx)(o.b,{to:"/NumberBaseball",children:"NumberBaseball"}),Object(n.jsx)(o.b,{to:"/ResponseCheck",children:"ResponseCheck"}),Object(n.jsx)(o.b,{to:"/RSP",children:"RSP"}),Object(n.jsx)(o.b,{to:"/Lotto",children:"Lotto"}),Object(n.jsx)(o.b,{to:"/TicTacToe",children:"TicTacToe"}),Object(n.jsx)(o.b,{to:"/MineSearch",children:"MineSearch"})]})},s=(c(33),function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{children:"Welcome, game world! Enjoy the game."})})}),j=c(2),b=c(1),O=b.useState,d=b.useRef,h=function(){var e=O(Math.ceil(9*Math.random())),t=Object(j.a)(e,2),c=t[0],r=t[1],a=O(Math.ceil(9*Math.random())),l=Object(j.a)(a,2),o=l[0],u=l[1],i=O(""),s=Object(j.a)(i,2),b=s[0],h=s[1],f=O(""),x=Object(j.a)(f,2),m=x[0],p=x[1],v=d(null);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{children:[c," \uacf1\ud558\uae30 ",o,"\ub294?"]}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),parseInt(b)===c*o?(p("\uc815\ub2f5: "+b),r(Math.ceil(9*Math.random())),u(Math.ceil(9*Math.random())),h("")):(p("\ub561"),h("")),v.current.focus()},children:[Object(n.jsx)("input",{ref:v,onChange:function(e){h(e.target.value)},value:b}),Object(n.jsx)("button",{children:"\uc785\ub825!"})]}),Object(n.jsx)("div",{id:"result",children:m})]})},f=c(1),x=f.useState,m=f.useRef,p=function(){var e=x("J3SUNG"),t=Object(j.a)(e,2),c=t[0],r=t[1],a=x(""),l=Object(j.a)(a,2),o=l[0],u=l[1],i=x(""),s=Object(j.a)(i,2),b=s[0],O=s[1],d=m(null);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:c}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c[c.length-1]===o[0]?(O("\ub529\ub3d9\ub315"),r(o),u("")):(O("\ub561"),u("")),d.current.focus()},children:[Object(n.jsx)("label",{htmlFor:"wordInput",children:"\uae00\uc790\ub97c \uc785\ub825\ud558\uc138\uc694."}),Object(n.jsx)("input",{id:"wordInput",className:"wordInput",ref:d,value:o,onChange:function(e){u(e.target.value)}}),Object(n.jsx)("button",{children:"\uc785\ub825!!!"})]}),Object(n.jsx)("div",{children:b})]})},v=c(4),E=Object(r.memo)((function(e){var t=e.tryInfo;return Object(n.jsx)("div",{className:"try",children:Object(n.jsxs)("li",{children:[Object(n.jsx)("div",{children:t.try}),Object(n.jsx)("div",{children:t.result})]})})}));c(34);function N(){for(var e=[1,2,3,4,5,6,7,8,9],t=[],c=0;c<4;c+=1){var n=e.splice(Math.floor(Math.random()*(9-c)),1)[0];t.push(n)}return t}var I=Object(r.memo)((function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],l=Object(r.useState)(""),o=Object(j.a)(l,2),u=o[0],i=o[1],s=Object(r.useState)(N()),b=Object(j.a)(s,2),O=b[0],d=b[1],h=Object(r.useState)([]),f=Object(j.a)(h,2),x=f[0],m=f[1],p=Object(r.useRef)(null);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:c}),Object(n.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),u===O.join(""))a("\ud648\ub7f0!"),m((function(e){return[].concat(Object(v.a)(e),[{try:u,result:"\ud648\ub7f0"}])})),alert("\uac8c\uc784\uc744 \ub2e4\uc2dc \uc2dc\uc791\ud569\ub2c8\ub2e4."),i(""),d(N()),m([]);else{var t=u.split("").map((function(e){return parseInt(e)})),c=0,n=0;if(x.length>=9)a("10\ubc88 \ub118\uac8c \ud2c0\ub824\uc11c \uc2e4\ud328! \ub2f5\uc740 ".concat(O.join(","),"\uc600\uc2b5\ub2c8\ub2e4.")),alert("\uac8c\uc784\uc744 \ub2e4\uc2dc \uc2dc\uc791\ud569\ub2c8\ub2e4."),i(""),d(N()),m([]);else{for(var r=0;r<4;r+=1)t[r]===O[r]?c+=1:O.includes(t[r])&&(n+=1);m((function(e){return[].concat(Object(v.a)(e),[{try:u,result:"".concat(c," \uc2a4\ud2b8\ub77c\uc774\ud06c, ").concat(n," \ubcfc\uc785\ub2c8\ub2e4.")}])})),i("")}}p.current.focus()},children:Object(n.jsx)("input",{ref:p,maxLength:4,value:u,onChange:function(e){i(e.target.value)}})}),Object(n.jsxs)("div",{children:["\uc2dc\ub3c4: ",x.length]}),Object(n.jsx)("ul",{children:x.map((function(e,t){return Object(n.jsx)(E,{tryInfo:e},"".concat(t+1,"\ucc28 \uc2dc\ub3c4 : "))}))})]})})),g=(c(35),function(){var e=Object(r.useState)("waiting"),t=Object(j.a)(e,2),c=t[0],a=t[1],l=Object(r.useState)("\ud074\ub9ad\ud574\uc11c \uc2dc\uc791\ud558\uc138\uc694."),o=Object(j.a)(l,2),u=o[0],i=o[1],s=Object(r.useState)([]),b=Object(j.a)(s,2),O=b[0],d=b[1],h=Object(r.useRef)(null),f=Object(r.useRef)(),x=Object(r.useRef)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{id:"screen",className:c,onClick:function(){"waiting"===c?(a("ready"),i("\ucd08\ub85d\uc0c9\uc774 \ub418\uba74 \ud074\ub9ad\ud558\uc138\uc694."),h.current=setTimeout((function(){a("now"),i("\ud074\ub9ad"),d([]),f.current=new Date}),Math.floor(1e3*Math.random())+2e3)):"ready"===c?(clearTimeout(h.current),a("waiting"),i("\ucd08\ub85d\uc0c9\uc774 \ub41c \ud6c4\uc5d0 \ud074\ub9ad\ud558\uc138\uc694.")):"now"===c&&(x.current=new Date,a("waiting"),i("\ud074\ub9ad\ud574\uc11c \uc2dc\uc791\ud574\uc8fc\uc138\uc694."),d((function(e){return[].concat(Object(v.a)(e),[x.current-f.current])})))},children:u}),0===O.length?null:Object(n.jsxs)("div",{children:["\ud3c9\uade0 \uc2dc\uac04: ",O.reduce((function(e,t){return e+t}))/O.length,"ms"]})]})}),w={"\ubc14\uc704":"0","\uac00\uc704":"-142px","\ubcf4":"-284px"},M={"\uac00\uc704":1,"\ubc14\uc704":0,"\ubcf4":-1},C=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],l=Object(r.useState)(w.\ubc14\uc704),o=Object(j.a)(l,2),u=o[0],i=o[1],s=Object(r.useState)(0),b=Object(j.a)(s,2),O=b[0],d=b[1],h=Object(r.useRef)();Object(r.useEffect)((function(){return console.log("\ub2e4\uc2dc \uc2e4\ud589"),h.current=setInterval(f,100),function(){console.log("\uc885\ub8cc"),clearInterval(h.current)}}),[u]);var f=function(){u===w.\ubc14\uc704?i(w.\uac00\uc704):u===w.\uac00\uc704?i(w.\ubcf4):u===w.\ubcf4&&i(w.\ubc14\uc704)},x=function(e){return function(){if(h.current){clearInterval(h.current),h.current=null;var t=M[e]-M[function(e){return Object.entries(w).find((function(t){return t[1]===e}))[0]}(u)];0===t?a("\ube44\uacbc\uc2b5\ub2c8\ub2e4!"):[-1,2].includes(t)?(a("\uc774\uacbc\uc2b5\ub2c8\ub2e4!"),d((function(e){return e+1}))):(a("\uc84c\uc2b5\ub2c8\ub2e4!"),d((function(e){return e-1}))),setTimeout((function(){h.current=setInterval(f,100)}),1e3)}}};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{id:"computer",style:{background:"url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ".concat(u," 0")}}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{id:"rock",className:"btn",onClick:x("\ubc14\uc704"),children:"\ubc14\uc704"}),Object(n.jsx)("button",{id:"scissor",className:"btn",onClick:x("\uac00\uc704"),children:"\uac00\uc704"}),Object(n.jsx)("button",{id:"paper",className:"btn",onClick:x("\ubcf4"),children:"\ubcf4"})]}),Object(n.jsx)("div",{children:c}),Object(n.jsxs)("div",{children:["\ud604\uc7ac ",O,"\uc810"]})]})},D=Object(r.memo)((function(e){var t,c=e.number;return t=c<10?"red":c<20?"orange":c<30?"yellow":c<40?"blue":"green",Object(n.jsx)("div",{className:"ball",style:{background:t},children:c})}));c(36);function S(){console.log("getWinNumbers");for(var e=Array(45).fill().map((function(e,t){return t+1})),t=[];e.length>0;)t.push(e.splice(Math.floor(Math.random()*e.length),1)[0]);var c=t[t.length-1],n=t.slice(0,6).sort((function(e,t){return e-t}));return[].concat(Object(v.a)(n),[c])}var L=function(){var e=Object(r.useMemo)((function(){return S()}),[]),t=Object(r.useState)(e),c=Object(j.a)(t,2),a=c[0],l=c[1],o=Object(r.useState)([]),u=Object(j.a)(o,2),i=u[0],s=u[1],b=Object(r.useState)(null),O=Object(j.a)(b,2),d=O[0],h=O[1],f=Object(r.useState)(!1),x=Object(j.a)(f,2),m=x[0],p=x[1],E=Object(r.useRef)([]);Object(r.useEffect)((function(){console.log("useEffect");for(var e=function(e){E.current[e]=setTimeout((function(){s((function(t){return[].concat(Object(v.a)(t),[a[e]])}))}),1e3*(e+1))},t=0;t<a.length-1;++t)e(t);return E.current[6]=setTimeout((function(){h(a[6]),p(!0)}),7e3),function(){E.current.forEach((function(e){clearTimeout(e)}))}}),[E.current]);var N=Object(r.useCallback)((function(){l(S()),s([]),h(null),p(!1),E.current=[]}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:"\ub2f9\ucca8 \uc22b\uc790"}),Object(n.jsx)("div",{id:"\uacb0\uacfc\ucc3d",children:i.map((function(e){return Object(n.jsx)(D,{number:e},e)}))}),Object(n.jsx)("div",{children:"\ubcf4\ub108\uc2a4!"}),d&&Object(n.jsx)(D,{number:d}),m&&Object(n.jsx)("button",{onClick:N,children:"\ud55c\ubc88\ub354!"})]})},T=c(3),y=Object(r.memo)((function(e){var t=e.rowIndex,c=e.cellIndex,a=e.dispatch,l=e.cellData,o=Object(r.useCallback)((function(){console.log(t,c),l||a({type:G,row:t,cell:c})}),[l]);return Object(n.jsx)("td",{className:"tictactoe",onClick:o,children:l})})),k=Object(r.memo)((function(e){var t=e.rowData,c=e.rowIndex,r=e.dispatch;return Object(n.jsx)("tr",{children:Array(t.length).fill().map((function(e,a){return Object(n.jsx)(y,{dispatch:r,rowIndex:c,cellIndex:a,cellData:t[a],children:""},a)}))})})),A=function(e){e.onClick;var t=e.tableData,c=e.dispatch;return Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:Array(t.length).fill().map((function(e,r){return Object(n.jsx)(k,{dispatch:c,rowIndex:r,rowData:t[r]},r)}))})})},R=(c(37),{winner:"",turn:"O",tableData:[["","",""],["","",""],["","",""]],recentCell:[-1,-1]}),_="SET_WINNER",G="CLICK_CELL",F="CHANGE_TURN",U="RESET_GAME",Q=function(e,t){switch(t.type){case _:return Object(T.a)(Object(T.a)({},e),{},{winner:t.winner});case G:var c=Object(v.a)(e.tableData);return c[t.row]=Object(v.a)(c[t.row]),c[t.row][t.cell]=e.turn,Object(T.a)(Object(T.a)({},e),{},{tableData:c,recentCell:[t.row,t.cell]});case F:return Object(T.a)(Object(T.a)({},e),{},{turn:"O"===e.turn?"X":"O"});case U:return Object(T.a)(Object(T.a)({},e),{},{tableData:[["","",""],["","",""],["","",""]],recentCell:[-1,-1]});default:return e}},P=function(){var e=Object(r.useReducer)(Q,R),t=Object(j.a)(e,2),c=t[0],a=t[1],l=c.tableData,o=c.turn,u=(c.winner,c.recentCell),i=Object(r.useCallback)((function(){a({type:_,winner:"O"})}),[]);return Object(r.useEffect)((function(){var e=Object(j.a)(u,2),t=e[0],c=e[1];if(!(t<0)){var n=!1;if(l[t][0]===o&&l[t][1]===o&&l[t][2]===o&&(n=!0),l[0][c]===o&&l[1][c]===o&&l[2][c]===o&&(n=!0),l[0][0]===o&&l[1][1]===o&&l[2][2]===o&&(n=!0),l[0][2]===o&&l[1][1]===o&&l[2][0]===o&&(n=!0),n)a({type:_,winner:o}),a({type:U});else{var r=!0;l.forEach((function(e){e.forEach((function(e){e||(r=!1)}))})),a(r?{type:U}:{type:F})}}}),[u]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{onClick:i,tableData:c.tableData,dispatch:a}),c.winner&&Object(n.jsxs)("div",{children:[c.winner,"\ub2d8\uc758 \uc2b9\ub9ac"]})]})},K=function(e){switch(e){case z.NORMAL:case z.MINE:return{background:"#444"};case z.CLICKED_MINE:case z.OPENED:return{background:"white"};case z.QUESTION_MINE:case z.QUESTION:return{background:"yellow"};case z.FLAG_MINE:case z.FLAG:return{background:"red"};default:return{background:"white"}}},W=function(e){switch(console.log("getTdtext"),e){case z.NORMAL:return"";case z.MINE:return"X";case z.CLICKED_MINE:return"\ud391";case z.FLAG_MINE:case z.FLAG:return"!";case z.QUESTION_MINE:case z.QUESTION:return"?";default:return e||""}},B=Object(r.memo)((function(e){var t=e.rowIndex,c=e.cellIndex,a=Object(r.useContext)(V),l=a.tableData,o=a.dispatch,u=a.halted,i=Object(r.useCallback)((function(){if(!u)switch(l[t][c]){case z.OPENED:case z.FLAG_MINE:case z.FLAG:case z.QUESTION_MINE:case z.QUESTION:return;case z.NORMAL:return void o({type:te,row:t,cell:c});case z.MINE:return void o({type:ce,row:t,cell:c});default:return}}),[l[t][c],u]),s=Object(r.useCallback)((function(e){if(e.preventDefault(),!u)switch(l[t][c]){case z.NORMAL:case z.MINE:return void o({type:ne,row:t,cell:c});case z.FLAG_MINE:case z.FLAG:return void o({type:re,row:t,cell:c});case z.QUESTION_MINE:case z.QUESTION:return void o({type:ae,row:t,cell:c});default:return}}),[l[t][c],u]);return console.log("td rendered"),Object(n.jsx)(J,{onClickTd:i,onRightClickTd:s,data:l[t][c]})})),J=Object(r.memo)((function(e){var t=e.onClickTd,c=e.onRightClickTd,r=e.data;return console.log("real td rendered"),Object(n.jsx)("td",{className:"Mine",style:K(r),onClick:t,onContextMenu:c,children:W(r)})})),H=B,X=Object(r.memo)((function(e){var t=e.rowIndex,c=Object(r.useContext)(V).tableData;return Object(n.jsx)("tr",{children:c[0]&&Array(c[0].length).fill().map((function(e,c){return Object(n.jsx)(H,{rowIndex:t,cellIndex:c},c)}))})})),Z=Object(r.memo)((function(){var e=Object(r.useContext)(V).tableData;return Object(n.jsx)("table",{children:Array(e.length).fill().map((function(e,t){return Object(n.jsx)(X,{rowIndex:t})}))})})),q=Object(r.memo)((function(){var e=Object(r.useState)(10),t=Object(j.a)(e,2),c=t[0],a=t[1],l=Object(r.useState)(10),o=Object(j.a)(l,2),u=o[0],i=o[1],s=Object(r.useState)(20),b=Object(j.a)(s,2),O=b[0],d=b[1],h=Object(r.useContext)(V).dispatch,f=Object(r.useCallback)((function(e){a(e.target.value)}),[]),x=Object(r.useCallback)((function(e){i(e.target.value)}),[]),m=Object(r.useCallback)((function(e){d(e.target.value)}),[]),p=Object(r.useCallback)((function(){h({type:ee,row:c,cell:u,mine:O})}),[c,u,O]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{type:"number",placeholder:"\uc138\ub85c",value:c,onChange:f}),Object(n.jsx)("input",{type:"number",placeholder:"\uac00\ub85c",value:u,onChange:x}),Object(n.jsx)("input",{type:"number",placeholder:"\uc9c0\ub8b0",value:O,onChange:m}),Object(n.jsx)("button",{onClick:p,children:"\uc2dc\uc791"})]})})),z=(c(38),{MINE:-7,NORMAL:-1,QUESTION:-2,FLAG:-3,QUESTION_MINE:-4,FLAG_MINE:-5,CLICKED_MINE:-6,OPENED:0}),V=Object(r.createContext)({tableData:[],halted:!0,dispatch:function(){}}),Y={tableData:[],data:{row:0,cell:0,mine:0},timer:0,result:"",halted:!0,openedCount:0},$=function(e,t,c){console.log(e,t,c);for(var n=Array(e*t).fill().map((function(e,t){return t})),r=[];n.length>e*t-c;){var a=n.splice(Math.floor(Math.random()*n.length),1)[0];r.push(a)}for(var l=[],o=0;o<e;o++){var u=[];l.push(u);for(var i=0;i<t;i++)u.push(z.NORMAL)}for(var s=0;s<r.length;s++){var j=Math.floor(r[s]/t),b=r[s]%t;l[j][b]=z.MINE}return console.log(l),l},ee="START_GAME",te="OPEN_CELL",ce="CLICK_MINE",ne="FLAG_CELL",re="QUESTION_CELL",ae="NORMALIZE_CELL",le="INCREMENT_TIMER",oe=function(e,t){switch(t.type){case ee:return Object(T.a)(Object(T.a)({},e),{},{data:{row:t.row,cell:t.cell,mine:t.mine},openedCount:0,tableData:$(t.row,t.cell,t.mine),halted:!1,timer:0});case te:var c=Object(v.a)(e.tableData);c.forEach((function(e,t){c[t]=Object(v.a)(e)}));var n=[],r=0;console.log(c.length,c[0].length);!function e(t,a){if(console.log(t,a),!(t<0||t>=c.length||a<0||a>=c[0].length)&&![z.OPENED,z.FLAG,z.FLAG_MINE,z.QUESTION_MINE,z.QUESTION].includes(c[t][a])&&!n.includes(t+"/"+a)){n.push(t+"/"+a);var l=[c[t][a-1],c[t][a+1]];c[t-1]&&(l=l.concat([c[t-1][a-1],c[t-1][a],c[t-1][a+1]])),c[t+1]&&(l=l.concat([c[t+1][a-1],c[t+1][a],c[t+1][a+1]]));var o=l.filter((function(e){return[z.MINE,z.FLAG_MINE,z.QUESTION_MINE].includes(e)})).length;if(0===o&&t>-1){var u=[];t-1>-1&&(u.push([t-1,a-1]),u.push([t-1,a]),u.push([t-1,a+1])),u.push([t,a-1]),u.push([t,a+1]),t+1<c.length&&(u.push([t+1,a-1]),u.push([t+1,a]),u.push([t+1,a+1])),u.forEach((function(t){c[t[0]][t[1]]!==z.OPENED&&e(t[0],t[1])}))}c[t][a]===z.NORMAL&&(r+=1),c[t][a]=o}}(t.row,t.cell);var a=!1,l="";return console.log(e.data.row*e.data.cell-e.data.mine,e.openedCount,r),e.data.row*e.data.cell-e.data.mine===e.openedCount+r&&(a=!0,l="".concat(e.timer,"\ucd08\ub9cc\uc5d0 \uc2b9\ub9ac\ud558\uc168\uc2b5\ub2c8\ub2e4")),Object(T.a)(Object(T.a)({},e),{},{tableData:c,openedCount:e.openedCount+r,halted:a,result:l});case ce:var o=Object(v.a)(e.tableData);return o[t.row]=Object(v.a)(e.tableData[t.row]),o[t.row][t.cell]=z.CLICKED_MINE,Object(T.a)(Object(T.a)({},e),{},{tableData:o,halted:!0});case ne:var u=Object(v.a)(e.tableData);return u[t.row]=Object(v.a)(e.tableData[t.row]),u[t.row][t.cell]===z.MINE?u[t.row][t.cell]=z.FLAG_MINE:u[t.row][t.cell]=z.FLAG,Object(T.a)(Object(T.a)({},e),{},{tableData:u});case re:var i=Object(v.a)(e.tableData);return i[t.row]=Object(v.a)(e.tableData[t.row]),i[t.row][t.cell]===z.FLAG_MINE?i[t.row][t.cell]=z.QUESTION_MINE:i[t.row][t.cell]=z.QUESTION,Object(T.a)(Object(T.a)({},e),{},{tableData:i});case ae:var s=Object(v.a)(e.tableData);return s[t.row]=Object(v.a)(e.tableData[t.row]),s[t.row][t.cell]===z.QUESTION_MINE?s[t.row][t.cell]=z.MINE:s[t.row][t.cell]=z.NORMAL,Object(T.a)(Object(T.a)({},e),{},{tableData:s});case le:return Object(T.a)(Object(T.a)({},e),{},{timer:e.timer+1});default:return e}},ue=function(){var e=Object(r.useReducer)(oe,Y),t=Object(j.a)(e,2),c=t[0],a=t[1],l=c.tableData,o=c.halted,u=c.timer,i=c.result,s=Object(r.useMemo)((function(){return{tableData:l,halted:o,dispatch:a}}),[l,o]);return Object(r.useEffect)((function(){var e;return!1===o&&(e=setInterval((function(){a({type:le})}),1e3)),function(){clearInterval(e)}}),[o]),Object(n.jsxs)(V.Provider,{value:s,children:[Object(n.jsx)(q,{}),Object(n.jsx)("div",{children:u+" sec"}),Object(n.jsx)(Z,{}),Object(n.jsx)("div",{children:i})]})};c(39);var ie=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(i,{}),Object(n.jsxs)("div",{className:"component",children:[Object(n.jsx)(u.a,{path:"/",exact:!0,component:s}),Object(n.jsx)(u.a,{path:"/GuGuDan",component:h}),Object(n.jsx)(u.a,{path:"/WordRelay",component:p}),Object(n.jsx)(u.a,{path:"/NumberBaseball",component:I}),Object(n.jsx)(u.a,{path:"/ResponseCheck",component:g}),Object(n.jsx)(u.a,{path:"/RSP",component:C}),Object(n.jsx)(u.a,{path:"/Lotto",component:L}),Object(n.jsx)(u.a,{path:"/TicTacToe",component:P}),Object(n.jsx)(u.a,{path:"/MineSearch",component:ue})]})]})};l.a.render(Object(n.jsx)("div",{children:Object(n.jsx)(ie,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c864f35e.chunk.js.map