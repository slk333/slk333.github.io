(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(145),i=n(146),l=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.hook))},u=function(e){return r.a.createElement("section",{id:"latest"},r.a.createElement("small",{style:{fontSize:"15px"}},"This Week..."),r.a.createElement(l,{title:"Embed and stylize code in a webpage",hook:"If you want to embed some code in your article, and want it to look nice, there is a simple and quick way to do it. You can use Prettify by Google."}),r.a.createElement(i.Link,{to:"article"},"Continue Reading"),r.a.createElement(l,{title:"Why would you learn programming",hook:"So you can talk to the computer. But it's more than that. It's more like to use the computer as an extension of your brain, just like we use the machines to extend our body limited capabilities. So what does a computer have to offer that we don't have already ?"}),r.a.createElement(i.Link,{to:"article"},"Continue Reading"))},s=function(e){return r.a.createElement("section",{id:"archives"},r.a.createElement("small",{style:{fontSize:"15px"}},"Archives..."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Write posts with Markdown"),r.a.createElement("p",null,"It's cumbersome to write html by hand. When you write a post, you want to focus on what you write, and not on the html structure. But you still need to format your text."),r.a.createElement("a",{href:"Using-Markdown-to-write-posts.html"},"Continue Reading"))),r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Why I'm making a custom blog"),r.a.createElement("p",null,"Why I'm making a custom blog instead of using ready-to-use solutions like Blogger, Medium or Wordpress."),r.a.createElement("a",{href:"Why-I'm-making-a-custom-blog.html"},"Continue Reading")))))},c=function(e){return r.a.createElement("footer",null,"Copyright 2019 Antoine Weber",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/antoineweber?ref_src=twsrc%5Etfw",className:"twitter-follow-button","data-show-count":"false"},"Follow @antoineweber")))},d=n(143);t.default=function(){return r.a.createElement("div",null,r.a.createElement("title",null,"Minimalist Blog"),r.a.createElement("meta",{name:"description",content:"A minimalist blog"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"}),r.a.createElement(d.a,null,r.a.createElement(o.a,null),r.a.createElement("hr",null),r.a.createElement(u,null),r.a.createElement("hr",null),r.a.createElement(s,null),r.a.createElement("hr",null),r.a.createElement(c,null)))}},142:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(148)),o=a(n(149)),i=a(n(7)),l=a(n(51)),u=a(n(52)),s=a(n(4)),c=a(n(0)),d=n(22),f=n(146);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,u=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:s,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},143:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(144),i=n.n(o);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:i.a.container},t)}},144:function(e,t,n){e.exports={container:"container-module--container--3C57J"}},145:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("a",{href:"../index.html"},r.a.createElement("img",{src:"../logo.svg",alt:"logo",id:"logo"})),r.a.createElement("h1",{style:{letterSpacing:"0.1em",marginBottom:"0px"}},"slk333|Awew33 "))}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(142),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(147),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},148:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},149:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},150:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(68),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-index-js-47d1d85a2e8311b879f9.js.map