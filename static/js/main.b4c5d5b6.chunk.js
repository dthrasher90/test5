(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{22:function(e,a,t){e.exports=t(47)},27:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(13),o=t.n(r),c=(t(27),t(3)),l=t.n(c),m=t(14),i=t(15),d=t(16),u=t(21),p=t(20),h=t(17),f=t.n(h),b=t(49),E=(t(46),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={teams:[]},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.the-odds-api.com/v3/odds/?apiKey=56ad61c3cfdfd7b9d6ffc700dd08be39&sport=americanfootball_nfl&region=us&mkt=spreads",e.next=3,f.a.get("https://api.the-odds-api.com/v3/odds/?apiKey=56ad61c3cfdfd7b9d6ffc700dd08be39&sport=americanfootball_nfl&region=us&mkt=spreads");case 3:a=e.sent,this.setState({teams:a.data.data});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTableData",value:function(){var e=Object.values(this.state.teams);console.log(e);var a=[];return e.forEach((function(e,t){("Houston Texans"===e.teams[0]&&"Kansas City Chiefs"===e.teams[1]||"Buffalo Bills"===e.teams[0]&&"New York Jets"===e.teams[1]||"Chicago Bears"===e.teams[0]&&"Detroit Lions"===e.teams[1]||"Green Bay Packers"===e.teams[0]&&"Minnesota Vikings"===e.teams[1]||"Miami Dolphins"===e.teams[0]&&"New England Patriots"===e.teams[1]||"Baltimore Ravens"===e.teams[0]&&"Cleveland Browns"===e.teams[1]||"Carolina Panthers"===e.teams[0]&&"Las Vegas Raiders"===e.teams[1]||"Cincinnati Bengals"===e.teams[0]&&"Los Angeles Chargers"===e.teams[1]||"New Orleans Saints"===e.teams[0]&&"Tampa Bay Buccaneers"===e.teams[1]||"Arizona Cardinals"===e.teams[0]&&"San Francisco 49ers"===e.teams[1]||"Dallas Cowboys"===e.teams[0]&&"Los Angeles Rams"===e.teams[1]||"New York Giants"===e.teams[0]&&"Pittsburgh Steelers"===e.teams[1]||"Denver Broncos"===e.teams[0]&&"Tennessee Titans"===e.teams[1])&&a.push(e)})),console.log(a),a.map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("td",{className:"content_teams"},"  ",e.teams[0]," ",n.a.createElement("br",null)," ",e.teams[1]," "),n.a.createElement("td",{className:"content_books"},"  ",n.a.createElement("br",null)," ",e.sites[3].odds.spreads.points[1]),n.a.createElement("td",{className:"content_books"},"  ",n.a.createElement("br",null)," ",e.sites[4].odds.spreads.points[1]),n.a.createElement("td",{className:"content_books"},"  ",n.a.createElement("br",null)," ",e.sites[5].odds.spreads.points[1]))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"tableContainer"},n.a.createElement("h2",null,"  NFL Lines Week 1 "),n.a.createElement(b.a,{size:"sm",className:"nflWeek1"},n.a.createElement("thead",null,n.a.createElement("tr",{classname:"header_row"},n.a.createElement("th",{className:"header_main_teams"}," Match "),n.a.createElement("th",{className:"header_main_books"}," MyBookie "),n.a.createElement("th",{className:"header_main_books"}," Draft Kings "),n.a.createElement("th",{className:"header_main_books"}," Fan Duel "))),n.a.createElement("tbody",null,this.renderTableData())))}}]),t}(n.a.Component));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b4c5d5b6.chunk.js.map