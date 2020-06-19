(this["webpackJsonpppmtool-react-client"]=this["webpackJsonpppmtool-react-client"]||[]).push([[0],{41:function(e,t,a){e.exports=a(75)},46:function(e,t,a){},47:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),o=a.n(c),s=(a(46),a(2)),i=a(3),l=a(6),m=a(4),u=a(7),p=(a(47),a(77)),d=a(5),h=a(8),v=a.n(h),f=a(12),E=a.n(f),b=function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(E.a.post("/api/project",e));case 3:t.push("/dashboard"),a({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).onDeleteClick=function(e){a.props.deleteProject(e)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.project;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card card-body mb-3",id:"card"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-2"},n.a.createElement("span",{className:"mx-auto"},e.projectIdentifier)),n.a.createElement("div",{className:"col-lg-6 col-md-4 col-8"},n.a.createElement("h3",null,e.projectName),n.a.createElement("p",null,e.description)),n.a.createElement("div",{className:"col-md-4 d-none d-lg-block"},n.a.createElement("ul",{className:"list-group"},n.a.createElement(p.a,{to:"/projectBoard/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item board"},n.a.createElement("i",{className:"fa fa-flag-checkered pr-1"}," PROJECT BOARD "))),n.a.createElement(p.a,{to:"/updateProject/".concat(e.projectIdentifier)},n.a.createElement("li",{className:"list-group-item update"},n.a.createElement("i",{className:"fa fa-edit pr-1"}," UPDATE PROJECT"))),n.a.createElement("li",{className:"list-group-item delete",onClick:this.onDeleteClick.bind(this,e.projectIdentifier)},n.a.createElement("i",{className:"fa fa-minus-circle pr-1"}," DELETE")))))))}}]),t}(r.Component),g=Object(d.b)(null,{deleteProject:function(e){return function(t){return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("Are you sure :( ? Your will lost this project and everything about it")){a.next=4;break}return a.next=3,v.a.awrap(E.a.delete("/api/project/".concat(e)));case 3:t({type:"DELETE_PROJECT",payload:e});case 4:case"end":return a.stop()}}))}}})(j),N=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{to:"/addProject",className:"btn btn-lg btn-info",id:"main"},"NEW PROJECT"))},y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getProjects()}},{key:"render",value:function(){var e=this.props.project.projects;return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"display-4 text-center"},n.a.createElement("i",{className:"fa fa-cog"}),"Your Projects"),n.a.createElement("br",null),n.a.createElement(N,null),n.a.createElement("br",null),n.a.createElement("hr",null),e.map((function(e){return n.a.createElement(g,{key:e.id,project:e})}))))))}}]),t}(r.Component),O=Object(d.b)((function(e){return{project:e.project}}),{getProjects:function(){return function(e){var t;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(E.a.get("/api/project/all"));case 2:t=a.sent,e({type:"GET_PROJECTS",payload:t.data});case 4:case"end":return a.stop()}}))}}})(y),k=function(e){e?E.a.defaults.headers.common.Authorization=e:delete E.a.defaults.headers.common.Authorization},C=a(23),w=a.n(C),S=function(){return function(e){localStorage.removeItem("jwtToken"),k(!1),e({type:"SET_CURRENT_USER",payload:{}})}},_=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"logout",value:function(){this.props.logout(),window.location.href="/"}},{key:"render",value:function(){var e,t=this.props.security,a=t.validToken,r=t.user,c=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{className:"nav-link",to:"/dashboard"},"Dashboard"))),n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{className:"nav-link",to:"/dashboard"},n.a.createElement("i",{className:"fa fa-user-circle mr-1"}),r.fullName)),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{className:"nav-link",to:"/logout",onClick:this.logout.bind(this)},"Logout")))),o=n.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{className:"nav-link",to:"/register"},"Sign Up")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.a,{className:"nav-link",to:"/login"},"Login"))));return e=a&&r?c:o,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark mb-4"},n.a.createElement("div",{className:"container"},n.a.createElement(p.a,{className:"navbar-brand",to:"/"},n.a.createElement("i",{className:"fa fa-cogs"})," Project Pal"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),e))}}]),t}(r.Component),T=Object(d.b)((function(e){return{security:e.security}}),{logout:S})(_),P=(a(73),a(79)),R=a(80),x=a(81),D=a(14),I=a(10),A=a(11),G=a.n(A),U=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",null,n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Create Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.projectIdentifier}),placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange}),e.projectIdentifier&&n.a.createElement("div",{className:"invalid-feedback"},e.projectIdentifier)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:G()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",value:this.state.description,onChange:this.onChange}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn btn-block mt-4",id:"main"})))))))}}]),t}(r.Component),B=Object(d.b)((function(e){return{errors:e.errors}}),{createProject:b})(U),L=a(17),W=a(39),J={},q=a(18),M={projects:[],project:{}},K={project_tasks:[],project_task:{}},F={validToken:!1,user:{}},H=function(e){return!!e},X=Object(L.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS":return Object(q.a)({},e,{projects:t.payload});case"GET_PROJECT":return Object(q.a)({},e,{project:t.payload});case"DELETE_PROJECT":return Object(q.a)({},e,{projects:e.projects.filter((function(e){return e.projectIdentifier!==t.payload}))});default:return e}},backlog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BACKLOG":return Object(q.a)({},e,{project_tasks:t.payload});case"GET_PROJECT_TASK":return Object(q.a)({},e,{project_task:t.payload});case"DELETE_PROJECT_TASK":return Object(q.a)({},e,{project_tasks:e.project_tasks.filter((function(e){return e.projectSequence!==t.payload}))});default:return e}},security:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(q.a)({},e,{validToken:H(t.payload),user:t.payload});default:return e}}}),V={},Y=[W.a],z=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Q=window.navigator.userAgent.includes("Chrome")&&z?Object(L.e)(X,V,Object(L.d)(L.a.apply(void 0,Y),z)):Object(L.e)(X,V,Object(L.d)(L.a.apply(void 0,Y))),$=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectName:"",projectIdentifier:"",description:"",start_date:"",end_date:"",errors:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project,a=t.id,r=t.projectName,n=t.projectIdentifier,c=t.description,o=t.start_date,s=t.end_date;this.setState({id:a,projectName:r,projectIdentifier:n,description:c,start_date:o,end_date:s})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getProject(e,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectName:this.state.projectName,projectIdentifier:this.state.projectIdentifier,description:this.state.description,start_date:this.state.start_date,end_date:this.state.end_date};this.props.createProject(t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"project"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h5",{className:"display-4 text-center"},"Update Project form"),n.a.createElement("hr",null),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.projectName}),placeholder:"Project Name",name:"projectName",value:this.state.projectName,onChange:this.onChange}),e.projectName&&n.a.createElement("div",{className:"invalid-feedback"},e.projectName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Unique Project ID",name:"projectIdentifier",value:this.state.projectIdentifier,onChange:this.onChange,disabled:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:G()("form-control form-control-lg",{"is-invalid":e.description}),placeholder:"Project Description",name:"description",onChange:this.onChange,value:this.state.description}),e.description&&n.a.createElement("div",{className:"invalid-feedback"},e.description)),n.a.createElement("h6",null,"Start Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"start_date",value:this.state.start_date,onChange:this.onChange})),n.a.createElement("h6",null,"Estimated End Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"end_date",value:this.state.end_date,onChange:this.onChange})),n.a.createElement("input",{type:"submit",className:"btn  btn-block mt-4",id:"main"}))))))}}]),t}(r.Component),Z=Object(d.b)((function(e){return{project:e.project.project,errors:e.errors}}),{getProject:function(e,t){return function(a){var r;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(E.a.get("/api/project/".concat(e)));case 3:r=n.sent,a({type:"GET_PROJECT",payload:r.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t.push("/dashboard");case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},createProject:b})($),ee=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDeleteClick",value:function(e,t){this.props.deleteProjectTask(e,t)}},{key:"render",value:function(){var e,t,a=this.props.project_task;return 1===a.priority&&(t="light",e="HIGH"),2===a.priority&&(t="medium",e="MEDIUM"),3===a.priority&&(t="dark",e="LOW"),n.a.createElement("div",{className:"card mb-1 bg-light"},n.a.createElement("div",{className:"card-header text-dark",id:t},"ID: ",a.projectSequence," -- Priority: ",e),n.a.createElement("div",{className:"card-body bg-light"},n.a.createElement("h5",{className:"card-title"},a.summary),n.a.createElement("p",{className:"card-text text-truncate "},a.acceptanceCriteria),n.a.createElement(p.a,{to:"/updateProjectTask/".concat(a.projectIdentifier,"/").concat(a.projectSequence),className:"btn  ml-4",id:"main"},"UPDATE/VIEW"),n.a.createElement("button",{className:"btn btn-outline-info ml-4",onClick:this.onDeleteClick.bind(this,a.projectIdentifier,a.projectSequence)},"DELETE")))}}]),t}(r.Component),te=Object(d.b)(null,{deleteProjectTask:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.confirm("Are you sure you want to delete the project task ".concat(t,"? The action cannot be undone"))){r.next=4;break}return r.next=3,v.a.awrap(E.a.delete("/api/backlog/".concat(e,"/").concat(t)));case 3:a({type:"DELETE_PROJECT_TASK",payload:t});case 4:case"end":return r.stop()}}))}}})(ee),ae=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=this.props.project_tasks_prop.map((function(e){return n.a.createElement(te,{key:e.id,project_task:e})})),t=[],a=[],r=[],c=0;c<e.length;c++)"TO_DO"===e[c].props.project_task.status&&t.push(e[c]),"DONE"===e[c].props.project_task.status&&r.push(e[c]),"IN_PROGRESS"===e[c].props.project_task.status&&a.push(e[c]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header text-white",id:"color1"},n.a.createElement("h3",null,"TO DO"))),t),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header text-white",id:"color2"},n.a.createElement("h3",null,"IN PROGRESS"))),a),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("div",{className:"card text-center mb-2"},n.a.createElement("div",{className:"card-header text-white",id:"color3"},n.a.createElement("h3",null,"DONE"))),r)))}}]),t}(r.Component),re=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={errors:{}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getBacklog(e)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t=this.props.match.params.id,a=this.props.backlog.project_tasks;return e=function(e,t){return t.length<1?e.projectNotFound?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectNotFound):e.projectIdentifier?n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},e.projectIdentifier):n.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"No Project Tasks on this board"):n.a.createElement(ae,{project_tasks_prop:t})}(this.state.errors,a),n.a.createElement("div",{className:"container"},n.a.createElement(p.a,{to:"/addProjectTask/".concat(t),className:"btn mb-4",id:"main"},n.a.createElement("i",{className:"fas fa-plus-circle"}),n.a.createElement("h5",{id:"inline"}," CREATE NEW TASK")),n.a.createElement("hr",null),e)}}]),t}(r.Component),ne=Object(d.b)((function(e){return{backlog:e.backlog,errors:e.errors}}),{getBacklog:function(e){return function(t){var a;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(E.a.get("/api/backlog/".concat(e)));case 3:a=r.sent,t({type:"GET_BACKLOG",payload:a.data}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),t({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(re),ce=function(e){function t(e){var a;Object(s.a)(this,t);var r=(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).props.match.params.id;return a.state={summary:"",acceptanceCriteria:"",status:"",priority:"0",dueDate:"",projectIdentifier:r,errors:{}},a.onChange=a.onChange.bind(Object(I.a)(a)),a.onSubmit=a.onSubmit.bind(Object(I.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate};this.props.addProjectTask(this.state.projectIdentifier,t,this.props.history)}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.a,{to:"/projectBoard/".concat(e),href:"#",className:"btn btn-light",id:"main"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Add Project Task"),n.a.createElement("p",{className:"lead text-center"},"Project Name + Project Code"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":t.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),t.summary&&n.a.createElement("div",{className:"invalid-feedback"},t.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-block mt-4",id:"main"}))))))}}]),t}(r.Component),oe=Object(d.b)((function(e){return{errors:e.errors}}),{addProjectTask:function(e,t,a){return function(r){return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.awrap(E.a.post("/api/backlog/".concat(e),t));case 3:a.push("/projectBoard/".concat(e)),r({type:"GET_ERRORS",payload:{}}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),r({type:"GET_ERRORS",payload:n.t0.response.data});case 10:case"end":return n.stop()}}),null,null,[[0,7]])}}})(ce),se=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={id:"",projectSequence:"",summary:"",acceptanceCriteria:"",status:"",priority:"",dueDate:"",projectIdentifier:"",create_At:"",errors:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.backlog_id,a=e.pt_id;this.props.getProjectTask(t,a,this.props.history)}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors});var t=e.project_task,a=t.id,r=t.projectSequence,n=t.summary,c=t.acceptanceCriteria,o=t.status,s=t.priority,i=t.dueDate,l=t.projectIdentifier,m=t.create_At;this.setState({id:a,projectSequence:r,summary:n,acceptanceCriteria:c,status:o,priority:s,dueDate:i,projectIdentifier:l,create_At:m})}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={id:this.state.id,projectSequence:this.state.projectSequence,summary:this.state.summary,acceptanceCriteria:this.state.acceptanceCriteria,status:this.state.status,priority:this.state.priority,dueDate:this.state.dueDate,projectIdentifier:this.state.projectIdentifier,create_At:this.state.create_At};this.props.updateProjectTask(this.state.projectIdentifier,this.state.projectSequence,t,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"add-PBI"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement(p.a,{to:"/projectBoard/".concat(this.state.projectIdentifier),className:"btn btn-light",id:"main"},"Back to Project Board"),n.a.createElement("h4",{className:"display-4 text-center"},"Update Project Task ~!"),n.a.createElement("p",{className:"lead text-center"},"Project Name: ",this.state.projectIdentifier," | Project Task ID:"," ",this.state.projectSequence," "),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.summary}),name:"summary",placeholder:"Project Task summary",value:this.state.summary,onChange:this.onChange}),e.summary&&n.a.createElement("div",{className:"invalid-feedback"},e.summary)),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control form-control-lg",placeholder:"Acceptance Criteria",name:"acceptanceCriteria",value:this.state.acceptanceCriteria,onChange:this.onChange})),n.a.createElement("h6",null,"Due Date"),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"date",className:"form-control form-control-lg",name:"dueDate",value:this.state.dueDate,onChange:this.onChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"priority",value:this.state.priority,onChange:this.onChange},n.a.createElement("option",{value:0},"Select Priority"),n.a.createElement("option",{value:1},"High"),n.a.createElement("option",{value:2},"Medium"),n.a.createElement("option",{value:3},"Low"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control form-control-lg",name:"status",value:this.state.status,onChange:this.onChange},n.a.createElement("option",{value:""},"Select Status"),n.a.createElement("option",{value:"TO_DO"},"TO DO"),n.a.createElement("option",{value:"IN_PROGRESS"},"IN PROGRESS"),n.a.createElement("option",{value:"DONE"},"DONE"))),n.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block mt-4",id:"main"}))))))}}]),t}(r.Component),ie=Object(d.b)((function(e){return{project_task:e.backlog.project_task,errors:e.errors}}),{getProjectTask:function(e,t,a){return function(r){var n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(E.a.get("/api/backlog/".concat(e,"/").concat(t)));case 3:n=c.sent,r({type:"GET_PROJECT_TASK",payload:n.data}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),a.push("/dashboard");case 10:case"end":return c.stop()}}),null,null,[[0,7]])}},updateProjectTask:function(e,t,a,r){return function(n){return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(E.a.patch("/api/backlog/".concat(e,"/").concat(t),a));case 3:r.push("/projectBoard/".concat(e)),n({type:"GET_ERRORS",payload:{}}),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),n({type:"GET_ERRORS",payload:c.t0.response.data});case 10:case"end":return c.stop()}}),null,null,[[0,7]])}}})(se),le=a(1),me=a.n(le),ue=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"landing-header"},n.a.createElement("h1",{className:"display-3 mb-4"},n.a.createElement("i",{className:"fa fa-cogs"})," Project Pal"),n.a.createElement("h3",{className:"display-5 mb-4"},"Your Project Management Tool"),n.a.createElement("p",{className:"lead"},"Create your account to join active projects or start you own"),n.a.createElement(p.a,{className:"btn btn-lg mr-2",id:"main",to:"/register"},"Sign Up"),n.a.createElement(p.a,{className:"btn btn-lg mr-2",id:"main2",to:"/login"},"Login")),n.a.createElement("h1",{className:"slideshow"}))}}]),t}(r.Component);ue.protoTypes={security:me.a.object.isRequired};var pe=Object(d.b)((function(e){return{security:e.security}}))(ue),de=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",fullName:"",password:"",confirmPassword:"",errors:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,fullName:this.state.fullName,password:this.state.password,confirmPassword:this.state.confirmPassword};this.props.createNewUser(t,this.props.history)}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"register"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),n.a.createElement("p",{className:"lead text-center"},"Create Account"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.fullName}),placeholder:"Full Name",name:"fullName",value:this.state.fullName,onChange:this.onChange}),e.fullName&&n.a.createElement("div",{className:"invalid-feedback"},e.fullName)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address (Username)",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":e.confirmPassword}),placeholder:"Confirm Password",name:"confirmPassword",value:this.state.confirmPassword,onChange:this.onChange}),e.confirmPassword&&n.a.createElement("div",{className:"invalid-feedback"},e.confirmPassword)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4",id:"main"}))))))}}]),t}(r.Component),he=Object(d.b)((function(e){return{errors:e.errors,security:e.security}}),{createNewUser:function(e,t){return function(a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,v.a.awrap(E.a.post("/api/users/register",e));case 3:t.push("/login"),a({type:"GET_ERRORS",payload:{}}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),a({type:"GET_ERRORS",payload:r.t0.response.data});case 10:case"end":return r.stop()}}),null,null,[[0,7]])}}})(de),ve=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={username:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.security.validToken&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.security.validToken&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.login(t)}},{key:"onChange",value:function(e){this.setState(Object(D.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return n.a.createElement("div",{className:"login"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-8 m-auto"},n.a.createElement("h1",{className:"display-4 text-center"},"Log In"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.username}),placeholder:"Email Address",name:"username",value:this.state.username,onChange:this.onChange}),e.username&&n.a.createElement("div",{className:"invalid-feedback"},e.username)),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&n.a.createElement("div",{className:"invalid-feedback"},e.password)),n.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4",id:"main"}))))))}}]),t}(r.Component),fe=Object(d.b)((function(e){return{security:e.security,errors:e.errors}}),{login:function(e){return function(t){var a,r,n;return v.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,v.a.awrap(E.a.post("/api/users/login",e));case 3:a=c.sent,r=a.data.token,localStorage.setItem("jwtToken",r),k(r),n=w()(r),t({type:"SET_CURRENT_USER",payload:n}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),t({type:"GET_ERRORS",payload:c.t0.response.data});case 14:case"end":return c.stop()}}),null,null,[[0,11]])}}})(ve),Ee=a(40),be=a(78),je=Object(d.b)((function(e){return{security:e.security}}))((function(e){var t=e.component,a=e.security,r=Object(Ee.a)(e,["component","security"]);return n.a.createElement(R.a,Object.assign({},r,{render:function(e){return!0===a.validToken?n.a.createElement(t,e):n.a.createElement(be.a,{to:"/login"})}}))})),ge=localStorage.jwtToken;if(ge){k(ge);var Ne=w()(ge);Q.dispatch({type:"SET_CURRENT_USER",payload:Ne});var ye=Date.now()/1e3;Ne.exp<ye&&(Q.dispatch(S()),window.location.href="./")}var Oe=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,{store:Q},n.a.createElement(P.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(T,null),n.a.createElement(R.a,{exact:!0,path:"/",component:pe}),n.a.createElement(R.a,{exact:!0,path:"/register",component:he}),n.a.createElement(R.a,{exact:!0,path:"/login",component:fe}),n.a.createElement(x.a,null,n.a.createElement(je,{exact:!0,path:"/dashboard",component:O}),n.a.createElement(je,{exact:!0,path:"/addProject",component:B}),n.a.createElement(je,{exact:!0,path:"/updateProject/:id",component:Z}),n.a.createElement(je,{exact:!0,path:"/projectBoard/:id",component:ne}),n.a.createElement(je,{exact:!0,path:"/addProjectTask/:id",component:oe}),n.a.createElement(je,{exact:!0,path:"/updateProjectTask/:backlog_id/:pt_id",component:ie})))))}}]),t}(r.Component),ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(n.a.createElement(Oe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");ke?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ce(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Ce(e)}))}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.9e50f381.chunk.js.map