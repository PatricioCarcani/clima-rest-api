(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),o=(t(14),t(1)),s=t(2),i=t(4),u=t(3),m=t(5),d=function(e){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper light-blue darken-2"},r.a.createElement("h1",{className:"brand-logo"},e.titulo)))))},p=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).ciudadRef=r.a.createRef(),t.paisRef=r.a.createRef(),t.buscarClima=function(e){e.preventDefault();var a={ciudad:t.ciudadRef.current.value,pais:t.paisRef.current.value};console.log(a),t.props.datosConsulta(a)},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor-form"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.buscarClima},r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("input",{id:"ciudad",name:"ciudad",ref:this.ciudadRef,type:"text"}),r.a.createElement("label",{htmlFor:"ciudad"},"Ciudad:")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("select",{ref:this.paisRef},r.a.createElement("option",{value:"",defaultValue:!0},"Elige un pa\xeds"),r.a.createElement("option",{value:"AR"},"Argentina"),r.a.createElement("option",{value:"CO"},"Colombia"),r.a.createElement("option",{value:"CR"},"Costa Rica"),r.a.createElement("option",{value:"ES"},"Espa\xf1a"),r.a.createElement("option",{value:"US"},"Estados Unidos"),r.a.createElement("option",{value:"MX"},"M\xe9xico"),r.a.createElement("option",{value:"PE"},"Per\xfa")),r.a.createElement("label",{htmlFor:"pais"},"Pa\xeds:")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-2 buscador"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light btn-large yellow accent-4",value:"Buscar"}))))))}}]),a}(n.Component),f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 offset-m3"},r.a.createElement("div",{className:"card-panel red darken-4 error"},e.mensaje))))},v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).mostrarResultado=function(){var e=t.props.resultado,a=e.name,n=e.weather,l=e.main;if(!a||!n||!l)return null;var c="http://openweathermap.org/img/w/".concat(n[0].icon,".png"),o="Clima de ".concat(a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"resultado col s12 m8 l6 offset-m2 offset-l3"},r.a.createElement("div",{className:"card-panel light-blue align-center"},r.a.createElement("span",{className:"white-text"},r.a.createElement("h2",null,"El clima en ",a),r.a.createElement("p",{className:"temperatura"},"Actual: ",(l.temp-273.15).toFixed(1)," \xb0C",r.a.createElement("img",{src:c,alt:o})),r.a.createElement("p",null,"Max. ",(l.temp_max-273.15).toFixed(0)," \xb0C"),r.a.createElement("p",null,"Min. ",(l.temp_min-273.15).toFixed(0)," \xb0C")))))},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.mostrarResultado())}}]),a}(n.Component),E=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={error:"",consulta:{},resultado:{}},t.consultarApi=function(){var e=t.state.consulta,a=e.ciudad,n=e.pais;if(!a||!n)return null;var r="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(n,"&appid=").concat("02d29608fbbed3c7f8779eed442902df");fetch(r).then(function(e){return e.json()}).then(function(e){t.setState({resultado:e})}).catch(function(e){console.log(e)})},t.datosConsulta=function(e){console.log(e),""===e.ciudad||""===e.pais?(console.log("Error al validar"),t.setState({error:!0})):(console.log("Formulario validado correctamente"),t.setState({error:!1,consulta:e}))},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({error:!1})}},{key:"componentDidUpdate",value:function(e,a){a.consulta!==this.state.consulta&&this.consultarApi()}},{key:"render",value:function(){var e,a=this.state.error,t=this.state.resultado.cod;return e=a?r.a.createElement(f,{mensaje:"Ambos campos son obligatorios"}):"404"===t?r.a.createElement(f,{mensaje:"Ciudad no encontrada"}):r.a.createElement(v,{resultado:this.state.resultado}),r.a.createElement("div",{className:"App"},r.a.createElement(d,{titulo:"Buscador de clima en React"}),r.a.createElement(p,{datosConsulta:this.datosConsulta}),e)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.87d7288f.chunk.js.map