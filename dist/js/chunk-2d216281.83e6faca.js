(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216281"],{c0ec:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PlayerFullDeatils",{attrs:{id:t.$route.params.id}})],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.imageUrl,alt:"Card image cap"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("player Full details")]),a("p",{staticClass:"card-text"},[t._v("some information about player")]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("player name: "+t._s(t.fullName))]),a("li",{staticClass:"list-group-item"},[t._v("players's team: "+t._s(t.teamName))]),a("li",{staticClass:"list-group-item"},[t._v("player position: "+t._s(t.position))]),a("li",{staticClass:"list-group-item"},[t._v("common name: "+t._s(t.commonName))]),a("li",{staticClass:"list-group-item"},[t._v("nationality: "+t._s(t.nationality))]),a("li",{staticClass:"list-group-item"},[t._v("birth date: "+t._s(t.birthDate))]),a("li",{staticClass:"list-group-item"},[t._v("birth country:"+t._s(t.birthCountry))]),a("li",{staticClass:"list-group-item"},[t._v("player height: "+t._s(t.height))]),a("li",{staticClass:"list-group-item"},[t._v("player weight:"+t._s(t.weight))])])]),a("b-button",{attrs:{pill:"",variant:"outline-danger",disabled:!t.alreadyInFavorites},on:{click:t.addToFavorites}},[t._v("add to favorites")])],1)},l=[],n=a("1da1"),o=(a("96cf"),{name:"PlayerFullDeatils",data:function(){return{fullName:"",teamName:"",imageUrl:"",position:"",commonName:"",nationality:"",birthDate:"",birthCountry:"",height:"",weight:"",alreadyInFavorites:!1}},props:{id:{type:String,required:!0}},methods:{updatePlayer:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("response"),e.prev=1,e.next=4,t.axios.get(t.$root.store.serverDomain+"/players/"+t.id);case 4:a=e.sent,r=a.data,t.fullName=r.player_full_name,t.teamName=r.player_team,t.imageUrl=r.player_image,t.position=r.player_position,t.commonName=r.player_common_name,t.nationality=r.player_nationality,t.birthDate=r.player_birthdate,t.birthCountry=r.player_birthcountry,t.height=r.player_height,t.weight=r.player_weight,e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](1),console.log("error in update player full details"),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))()},checkIfInFavorites:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.alreadyInFavorites=!0;case 1:case"end":return e.stop()}}),e)})))()},addToFavorites:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post(t.$root.store.serverDomain+"/users/favoritePlayers",{playerId:t.id});case 3:a=e.sent,console.log(a),t.$root.toast("Favorite players",a.data,"success"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$root.toast("Favorite players",e.t0.response.data,"warning");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){console.log("full details player mounted"),this.updatePlayer(),this.checkIfInFavorites()}}),c=o,u=a("2877"),p=Object(u["a"])(c,s,l,!1,null,null,null),m=p.exports,d={components:{PlayerFullDeatils:m},name:"PlayerFullDeatilsPage"},h=d,y=Object(u["a"])(h,r,i,!1,null,null,null);e["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d216281.83e6faca.js.map