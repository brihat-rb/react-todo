(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),l=n.n(r),s=(n(15),n(9)),c=n(1),i=n(2),u=n(4),m=n(3),d=n(5),p=(n(17),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={time:null},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){return e.setState({time:(new Date).toLocaleTimeString()})},500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return o.a.createElement("div",{className:"ticktock"},this.state.time)}}]),t}(a.Component)),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("center",null,o.a.createElement("h2",null,"Todo Using"," ",o.a.createElement("font",{color:"green"},"React",o.a.createElement("font",{color:"maroon"},"JS"))," ","(v1.0_localStorage)"))}}]),t}(a.Component),h=(n(7),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;console.log("TodoCount rendered");var t=this.props.entries.length,n=this.props.entries.filter(function(e){return"done"===e.state}).length,a=this.props.entries.filter(function(e){return"ndone"===e.state}).length;return o.a.createElement("div",null,o.a.createElement("center",null,o.a.createElement("b",null,"TASKS",o.a.createElement("div",{className:"black"},o.a.createElement("thinking",{onClick:function(){return e.props.deleteTodos(0)}},".:",t,":."))),o.a.createElement("b",{className:"rbold"},"TODO"," ",o.a.createElement("thinking",{onClick:function(){return e.props.deleteTodos(1)}},".:",a,":.")),"\xa0\xa0\xa0\xa0\xa0\xa0",o.a.createElement("b",{className:"gbold"},"DONE"," ",o.a.createElement("thinking",{onClick:function(){return e.props.deleteTodos(2)}},".:",n,":.")),o.a.createElement("br",null)))}}]),t}(a.Component)),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("TODOLIST Rendered"),o.a.createElement("div",{className:"main",align:"center"},o.a.createElement("div",{className:"header"},o.a.createElement("form",{onSubmit:this.props.addItem},o.a.createElement("input",{placeholder:"Task",ref:this.props.inputElement,value:this.props.currentItem.text,onChange:this.props.handleInput}),o.a.createElement("button",{type:"submit"},"Add Task"),o.a.createElement("input",{id:"search",placeholder:"Search Tasks . . . ",onChange:this.props.search}),o.a.createElement("button",{onClick:this.props.clearsearch},"Clear Search"),"Filter",o.a.createElement("select",{id:"filter",onChange:this.props.filter,defaultValue:"0"},o.a.createElement("option",{value:"0"}),o.a.createElement("option",{value:"1",className:"gbold"},"DONE"),o.a.createElement("option",{value:"2",className:"rbold"},"NOT DONE")),o.a.createElement("button",{onClick:this.props.clearfilter},"Clear Filter"))),o.a.createElement("br",null))}}]),t}(a.Component),v=(n(20),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,n=this;return console.log("TODOITEM Rendered"),"ndone"===this.props.item.state?(e=o.a.createElement("button",{onClick:function(){return n.props.toggleDone(n.props.item.key)},className:"btn-ndone"},"Done"),t="\u2005\u2005\u2004 "):(e=o.a.createElement("button",{onClick:function(){return n.props.toggleDone(n.props.item.key)},className:"btn-done"},"Not Done"),t="\u2714 "),o.a.createElement("div",{className:"row",state:this.props.item.state},o.a.createElement("div",{className:"margin"}),o.a.createElement("div",{className:"column"},o.a.createElement("span",{className:"tick"},t),o.a.createElement("span",{key:this.props.item.key},this.props.item.text),o.a.createElement("label",{className:"fade"},Date(this.props.item.key))),o.a.createElement("div",{className:"column"},o.a.createElement("button",{onClick:function(){return n.props.editItem(n.props.item.key)},className:"btn-edit"},"Edit"),o.a.createElement("button",{onClick:function(){return n.props.deleteItem(n.props.item.key)},className:"btn-delete"},"Delete"),e))}}]),t}(a.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("TODO ITEMS Rendered"),this.props.entries.map(function(t){return o.a.createElement(v,{item:t,key:t.key,editItem:e.props.editItem,deleteItem:e.props.deleteItem,toggleDone:e.props.toggleDone})})}}]),t}(a.Component),E=(n(22),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("br",null),"\u2660 Brihat \u2660",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("b",null,"Features: "),o.a.createElement("br",null),"Filter TASK to do and TASK done | Activities are logged to console | Search Tasks | Task counter | localStorage | React JS",o.a.createElement("br",null),o.a.createElement("br",null))}}]),t}(a.Component)),y=(n(24),function(e){function t(){var e;return Object(c.a)(this,t),console.log("APP Constructor"),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={items:[],currentItem:{text:"",key:"",state:""}},e.handleInput=function(t){var n={text:t.target.value,key:Date.now(),state:"ndone"};e.setState({currentItem:n}),console.log(typeof new Date(e.state.currentItem.key)),console.log(Date(e.state.currentItem.key))},e.addItem=function(t){t.preventDefault(),console.log("Add Item");var n=e.state.currentItem;if(e.isUnique(n.text)){if(""!==n.text){console.log(n);var a=Object(s.a)(e.state.items).concat([n]);e.setState({items:a,currentItem:{text:"",key:"",state:""}},function(){e.saveStateToLocalStorage(),console.log("New Task Added",n.text)})}}else console.log("Duplicate Task found"),alert("This task already exists")},e.editItem=function(t){var n=prompt("Enter new name");if(e.isUnique(n)){var a=e.state.items.filter(function(e){return e.key===t})[0].text;e.state.items.filter(function(e){return e.key===t})[0].text=n,e.setState(e.state.items,function(){e.saveStateToLocalStorage()}),console.log("Task ",a,"updated to ",n)}else alert("This name already exist")},e.deleteItem=function(t){var n=e.state.items.filter(function(e){return e.key!==t});e.setState({items:n},function(){e.saveStateToLocalStorage()}),console.log("Task Deleted")},e.deleteTodos=function(t){if(0===t)e.setState({items:[]},function(){e.saveStateToLocalStorage()});else if(1===t){var n=e.state.items.filter(function(e){return"done"===e.state});console.log(n),e.setState({items:n},function(){e.saveStateToLocalStorage()})}else if(2===t){var a=e.state.items.filter(function(e){return"ndone"===e.state});console.log(a),e.setState({items:a},function(){e.saveStateToLocalStorage()})}else console.log("Invalid options")},e.toggleDone=function(t){var n=e.state.items.filter(function(e){return e.key===t})[0];"ndone"===n.state?n.state="done":n.state="ndone",e.setState(e.state.items,function(){e.saveStateToLocalStorage()}),console.log("Task State Toggled")},e.search=function(e){var t=0;console.log("search",e.target.value);var n=document.getElementById("filter").value,a="";a="1"===n?"done":"2"===n?"ndone":"";for(var o=e.target.value,r=document.getElementsByTagName("span"),l=0;l<r.length;l++){var s=r[l].parentNode.parentNode;""===a?r[l].textContent.toLowerCase().startsWith(o.toLowerCase())?(t++,s.removeAttribute("style")):s.setAttribute("style","display:none"):r[l].textContent.toLowerCase().startsWith(o.toLowerCase())&&s.getAttribute("state")===a?(t++,s.removeAttribute("style")):s.setAttribute("style","display:none")}document.getElementById("info1").textContent=""!==o?"SEARCH RESULT ("+t+")":""},e.clearsearch=function(t){t.preventDefault(),t.target.value="",document.getElementById("search").value="",e.search(t),console.log("Search Cleared")},e.filter=function(e){var t=Number(e.target.value),n=document.getElementById("search").value,a=document.getElementsByTagName("span");switch(t){case 0:for(var o=0;o<a.length;o++){var r=a[o].parentNode.parentNode;a[o].textContent.toLowerCase().startsWith(n.toLowerCase())?r.removeAttribute("style"):r.setAttribute("style","display:none")}document.getElementById("info2").textContent="";break;case 1:for(var l=0;l<a.length;l++){var s=a[l].parentNode.parentNode;"done"===s.getAttribute("state")&&a[l].textContent.toLowerCase().startsWith(n.toLowerCase())?s.removeAttribute("style"):s.setAttribute("style","display:none")}document.getElementById("info2").textContent="DONE FILTER APPLIED";break;case 2:for(var c=0;c<a.length;c++){var i=a[c].parentNode.parentNode;"ndone"===i.getAttribute("state")&&a[c].textContent.toLowerCase().startsWith(n.toLowerCase())?i.removeAttribute("style"):i.setAttribute("style","display:none")}document.getElementById("info2").textContent="NOT DONE FILTER APPLIED"}},e.clearfilter=function(t){t.preventDefault(),t.target.value=0,document.getElementById("filter").value="0",e.filter(t),console.log("Filter Cleared")},e.state={items:[],currentItem:{text:"",key:"",state:""}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("APP Components Did Mount");var e=JSON.parse(localStorage.getItem("todos"));null!==e&&this.setState({items:e})}},{key:"saveStateToLocalStorage",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.items)),console.log("Saved to local")}},{key:"isUnique",value:function(e){for(var t=this.state.items,n=0;n<t.length;n++)if(t[n].text.toLowerCase()===e.toLowerCase())return!1;return!0}},{key:"render",value:function(){return console.log("APP Rendered"),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement("br",null),o.a.createElement("div",{className:"sticky-time"},o.a.createElement(p,null)),o.a.createElement(f,null),o.a.createElement("div",{className:"sticky-title"},o.a.createElement(g,{addItem:this.addItem,inputElement:this.inputElement,handleInput:this.handleInput,currentItem:this.state.currentItem,search:this.search,clearsearch:this.clearsearch,filter:this.filter,clearfilter:this.clearfilter})),o.a.createElement("hr",null),o.a.createElement("div",{className:"sticky-count"},o.a.createElement(h,{entries:this.state.items,deleteTodos:this.deleteTodos})),o.a.createElement("center",null,o.a.createElement("b",{id:"info1",className:"bbold"}),"\xa0\xa0\xa0\xa0",o.a.createElement("b",{id:"info2",className:"bbold"})),o.a.createElement(b,{key:this.state.items,entries:this.state.items,editItem:this.editItem,deleteItem:this.deleteItem,toggleDone:this.toggleDone})),o.a.createElement(E,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.633bc0d5.chunk.js.map