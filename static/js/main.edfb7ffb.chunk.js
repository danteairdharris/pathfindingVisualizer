(this["webpackJsonppathfinding-visualizer-app"]=this["webpackJsonppathfinding-visualizer-app"]||[]).push([[0],{28:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),o=n(10),c=n.n(o),r=(n(28),n(18)),s=n(19),l=n(23),d=n(22),h=n(11),u=n.n(h),y=n(20),f=n.n(y),g=n(21),p=n.n(g);n(45);var v=n(0);u.a.use(f.a);var b=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={w:0,h:0,elements:[],options:{name:"cola",randomize:!0,padding:150,avoidOverlap:!0,maxSimulationTime:1e4},nodes:100,adjacencyList:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({w:window.innerWidth,h:window.innerHeight}),this.resetGraph()}},{key:"resetGraph",value:function(){this.newGraph(this.state.nodes)}},{key:"newGraph",value:function(t){this.cy.elements().remove();var e=[],n=[],a=t+8,i=t,o="",c=0;this.cy.add({data:{id:"0",label:"n0"}});for(var r=0;r<t;r++)n[r]=[];for(var s=1;s<t;s++)c=j(s>=5?s-5:0,s-1),s===t-1?this.cy.add({data:{id:s.toString(),label:"target"}}):this.cy.add({data:{id:s.toString(),label:""}}),this.cy.add({data:{id:c.toString()+"e"+s.toString(),source:c.toString(),target:s.toString(),label:"e"+s.toString()}}),o=c.toString()+s.toString(),e.push(o),n[c].push(s),n[s].push(c);for(;i<=a;){for(var l="0",d="0",h=0;h<e.length;h++)(e[h].includes(l)&&e[h].includes(d)||l===d)&&(h=0,l=j(1,t-1).toString(),d=j(1,t-1).toString());this.cy.add({data:{id:l+"e"+d,source:l,target:d,label:"e"+i.toString()}}),o=l+d,e.push(o),n[parseInt(l)].push(parseInt(d)),n[parseInt(d)].push(parseInt(l)),i++}this.setState({adjacencyList:n})}},{key:"breadthFirstSearch",value:function(){this.animations(function(t){for(var e=[0,0],n=[],a=[],i=[],o=[],c=[],r=0;r<t.length;r++)c[r]=0;for(a.push(0),n.push(0);0!==n.length;)for(var s=n.shift(),l=0;l<t[s].length;l++){var d=t[s][l];o.push([d,s]),!1===a.includes(d)&&(n.push(d),a.push(d),c[d]=s)}for(var h=t.length-1;0!==h;)i.push(h),h=c[h];return i.push(0),e[0]=o,e[1]=i,e}(this.state.adjacencyList))}},{key:"animations",value:function(t){var e=this,n=0;this.cy.$id(t[0].toString()).style("background-color","red");for(var a=function(a){var i=t[0][a][0],o=t[0][a][1];n=25*a,setTimeout((function(){e.cy.$id("".concat(i,"e").concat(o)).style("line-color","green"),e.cy.$id("".concat(o,"e").concat(i)).style("line-color","green")}),25*a)},i=0;i<t[0].length;i++)a(i);for(var o=function(a){var i=t[1][a],o=t[1][a-1];setTimeout((function(){e.cy.$id(o.toString()).style("background-color","red"),e.cy.$id("".concat(i,"e").concat(o)).style("line-style","dashed"),e.cy.$id("".concat(i,"e").concat(o)).style("line-color","#BB371B"),e.cy.$id("".concat(o,"e").concat(i)).style("line-style","dashed"),e.cy.$id("".concat(o,"e").concat(i)).style("line-color","#BB371B")}),n+100*a)},c=1;c<t[1].length;c++)o(c)}},{key:"render",value:function(){var t=this;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"button-container",children:[Object(v.jsx)("button",{className:"button",onClick:m,children:"Generate New Random Graph"}),Object(v.jsx)("button",{className:"button",onClick:function(){return t.breadthFirstSearch()},children:"Shortest Path (BFS)"})]}),Object(v.jsx)("div",{className:"visualizer-container",children:Object(v.jsx)(p.a,{elements:this.state.elements,cy:function(e){t.cy=e,e.on("resize",(function(n){e.layout(t.state.options).run(),e.fit()}))},style:{width:this.state.w,height:this.state.h},stylesheet:[{selector:"node",style:{width:20,height:20,label:"data(label)",backgroundColor:"black","font-size":45}},{selector:"edge",style:{width:10,"line-color":"cyan","line-style":"solid"}}]})})]})}}]),n}(i.a.Component);function j(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function m(){window.location.reload(!1)}n(47);var S=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(b,{})})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),o(t),c(t)}))};c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.edfb7ffb.chunk.js.map