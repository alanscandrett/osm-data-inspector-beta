(function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},"15cc":function(e,t,a){},2:function(e,t){},3:function(e,t){},"38dc":function(e){e.exports=JSON.parse('{"type":"bar","data":{"labels":[],"datasets":[{"label":"Data Source","data":[],"backgroundColor":["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],"borderColor":["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],"borderWidth":1}]},"options":{"scales":{"yAxes":[{"ticks":{"beginAtZero":true}}]}}}')},4:function(e,t){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},"4f06":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Map")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"MapView"},[a("LMap",{ref:"LeafletMap",attrs:{zoom:e.zoom,center:e.center}},[a("LTileLayer",{attrs:{url:e.url}}),a("LFeatureGroup",{ref:"SketchLayer",on:{ready:function(t){return e.addControls()}}}),a("MapButton",{attrs:{unicodeSymbol:e.chartIcon}},[a("StatisticsPanel",{attrs:{buildingsCount:e.buildingStatistics.buildingsCount,buildingsLandUse:e.buildingStatistics.buildingsLandUse,chartData:e.buildingStatistics.chartData}})],1)],1)],1)},c=[],i=(a("99af"),a("4de4"),a("4160"),a("caad"),a("c975"),a("d81d"),a("b0c0"),a("b680"),a("b64b"),a("2532"),a("159b"),a("96cf"),a("1da1")),u=a("2699"),d=a("a40a"),l=a("c5ca"),f=a("b6e3"),b=a.n(f),p={osm:function(e,t,a){b()(e,t,a)}},j=p,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-control",{class:e.cssClassName,attrs:{position:"topleft"}},[a("div",{on:{click:e.toggleOpen}},[e.isOpen?e._t("default"):a("div",{staticClass:"icon"},[e._v(e._s(e.unicodeSymbol))])],2)])},g=[],m=a("2253"),y={name:"MapButton",components:{LControl:m["a"]},props:{cssClassName:{type:String,default:"example-custom-control"},unicodeSymbol:{type:String,default:"☹"}},data:function(){return{isOpen:!1}},methods:{toggleOpen:function(){this.isOpen=!this.isOpen}}},v=y,O=(a("f973"),a("2877")),k=Object(O["a"])(v,h,g,!1,null,"775962ef",null),L=k.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"PanelParent"},[e._m(0),a("div",[a("canvas",{ref:"chart",staticClass:"chartClass"})]),a("div",[a("table",[e._m(1),a("tr",[a("td",[e._v(e._s(e.buildingsCount))]),a("td",[e._v(e._s(e.buildingsLandUse))])])])])])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Structure Statistics")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("Building Count")]),a("th",[e._v("Building Area %")])])}],S=(a("a9e3"),a("30ef")),z=a.n(S),P=a("38dc"),x={name:"StatisticsPanel",data:function(){return{chartObject:void 0}},props:{buildingsCount:{type:Number,default:0},buildingsLandUse:{type:Number,default:0},chartData:{type:Object,default:function(){return{data:[],labels:[]}}}},mounted:function(){this.chartObject=new z.a(this.$refs.chart,P)},watch:{chartData:function(e){this.chartObject.data.datasets[0].data=e.data,this.chartObject.data.labels=e.labels,this.chartObject.update()}}},C=x,A=(a("ebb4"),Object(O["a"])(C,_,w,!1,null,"500ee29a",null)),D=A.exports,M=a("e11e"),N=a.n(M),E=(a("20d6"),a("5fbf"),a("595b")),F=a("b196"),q={name:"Map",components:{LMap:u["a"],LTileLayer:d["a"],LFeatureGroup:l["a"],MapButton:L,StatisticsPanel:D},data:function(){return{chartIcon:"📊",url:"https://cdn.lima-labs.com/{z}/{x}/{y}.png?free",zoom:15,center:[35.67319515681665,139.74308967590332],buildingLayers:[],queryPolygonLayers:[],buildingFootprintArea:void 0,queryPolygonArea:void 0}},computed:{map:function(){return this.$refs.LeafletMap.mapObject},sketchLayer:function(){return this.$refs.SketchLayer},buildingStatistics:function(){var e={buildingsCount:void 0,buildingsLandUse:void 0,chartData:{data:[],labels:[]}};return this.buildingFootprintArea&&this.queryPolygonArea&&(e.buildingsCount=Object.keys(this.buildingLayers[0]._layers).length,e.buildingsLandUse=this.buildingFootprintArea/this.queryPolygonArea*100,this.buildingLayers[0].getLayers().forEach((function(t){var a=t.feature.properties["source"];a||(a="N/A"),e.chartData.labels.includes(a)?e.chartData.data[e.chartData.labels.indexOf(a)]+=1:(e.chartData.labels.push(a),e.chartData.data[e.chartData.labels.indexOf(a)]=1)}))),console.log(e.chartData),e}},mounted:function(){var e=this;this.map.on("draw:created",(function(t){var a=e.queryPolygonLayers.pop();a&&a.remove(),e.queryPolygonLayers.push(t.layer),e.map.addLayer(t.layer),e.buildingFootprintArea=0,e.queryPolygonArea=0,e.getGeometry()}))},methods:{getArea:function(e){var t=E["polygon"](e);return E["area"](t)},addControls:function(){var e=new N.a.Control.Draw({draw:{polyline:!1,circle:!1,circlemarker:!1,marker:!1},edit:{featureGroup:this.$refs.SketchLayer.mapObject,edit:!1,remove:!1}});this.map.addControl(e)},getGeometry:function(){var e=this.queryPolygonLayers[0].toGeoJSON();this.queryPolygonArea=this.getArea(e.geometry.coordinates),this.spatialQueryOSM(e.geometry.coordinates)},addGeoJSONtoMap:function(e,t){var a=this;this.buildingLayers.length&&this.buildingLayers.pop().remove(),t.features=t.features.map((function(e){if("Polygon"===e.geometry.type){var t=F(e,a.queryPolygonLayers[0].toGeoJSON());return t.features[0].properties=e.properties,t.features[0].id=e.id,t}})),t.features=t.features.filter((function(e){return void 0!=e}));var n=N.a.geoJson(t,{onEachFeature:function(e,t){var a="N/A",n=e.properties.id?e.properties.id:a,r=e.properties.name?e.properties.name:a,s=e.properties["name:en"]?e.properties["name:en"]:a,o=e.properties["operator:en"]?e.properties["operator:en"]:a,c=e.properties.height?e.properties.height:a,i=e.properties.source?e.properties.source:a,u=e.properties.amenity?e.properties.amenity:a;t.bindPopup("\n          <h1> Building Details </h1>\n          <table>\n            <tr>\n              <th>ID</td>\n              <th>Name</td>\n              <th>Name (EN)</td>\n              <th>Operator</td>\n              <th>Height</td>\n              <th>Source</td>\n              <th>Amenity</td>\n            </tr>\n            <tr>\n              <td>".concat(n,"</td>\n              <td>").concat(r,"</td>\n              <td>").concat(s,"</td>\n              <td>").concat(o,"</td>\n              <td>").concat(c,"</td>\n              <td>").concat(i,"</td>\n              <td>").concat(u,"</td>\n            </tr>\n          </table>\n          "),{maxWidth:"auto",className:"popupClass"})}});this.buildingLayers.push(n),n.addTo(this.map),this.calculateBuildingFootprintArea()},spatialQueryOSM:function(e){var t="";e[0].forEach((function(e){t+=" "+e[1]+" "+e[0]}));var a='[out:json];\n        way[building](poly:"'.concat(t,'");\n        (._;>;);\n        out;');j.osm(a,this.addGeoJSONtoMap,{flatProperties:!0})},calculateBuildingFootprintArea:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=0,n=e.buildingLayers[0].getLayers(),n.forEach((function(t){if("Polygon"===t.feature.geometry.type){var n=e.getArea(t.feature.geometry.coordinates);a+=n}})),e.buildingFootprintArea=parseFloat(a.toFixed(2));case 4:case"end":return t.stop()}}),t)})))()}}},U=q,$=(a("eb6f"),Object(O["a"])(U,o,c,!1,null,null,null)),G=$.exports,B={name:"App",components:{Map:G}},J=B,T=(a("5c0b"),Object(O["a"])(J,r,s,!1,null,null,null)),I=T.exports;a("6cc5");n["a"].config.productionTip=!1,delete M["Icon"].Default.prototype._getIconUrl,M["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),new n["a"]({render:function(e){return e(I)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},a61a:function(e,t,a){},eb6f:function(e,t,a){"use strict";a("15cc")},ebb4:function(e,t,a){"use strict";a("4f06")},f973:function(e,t,a){"use strict";a("a61a")}});
//# sourceMappingURL=app.e3717c50.js.map