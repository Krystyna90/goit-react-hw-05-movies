"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[917],{917:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var n=i(885),r=i(791),s=i(739),c=i(731);var a=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("39e7639bbdd6f3ff4985c89cb032db66")).then((function(e){return e.json()}))},o=i(425),l=i(166),h=i(184),d=[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}],f=function(){var e,t,i=(0,s.UO)().movieId,f=(0,r.useState)(null),u=(0,n.Z)(f,2),v=u[0],x=u[1],j=(0,s.TH)(),m=null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return console.log(j),(0,r.useEffect)((function(){a(i).then((function(e){return x(e)}))}),[i]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.rU,{to:m,children:(0,h.jsx)("img",{src:l,alt:"Back",width:"50",height:"40"})}),v&&(0,h.jsxs)("div",{className:o.Z.MovieCard,children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(v.poster_path),alt:v.original_title})}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[" ",v.original_title]}),(0,h.jsxs)("p",{children:["User score: ",v.vote_average]}),(0,h.jsx)("h4",{children:"Overview"}),(0,h.jsx)("p",{children:v.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:v.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional information"}),d.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsx)(c.OL,{className:o.Z.NavigationLink,to:e.href,state:{from:j.state.from},children:e.text})},e.href)})),(0,h.jsx)(r.Suspense,{fallback:null,children:(0,h.jsx)(s.j3,{})})]})]})}},166:function(e,t,i){e.exports=i.p+"static/media/back.823c22871690692dfa3e.png"}}]);
//# sourceMappingURL=917.e96bac9f.chunk.js.map