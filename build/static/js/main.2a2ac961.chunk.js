(this["webpackJsonpthelobby.github.io"]=this["webpackJsonpthelobby.github.io"]||[]).push([[0],[,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),i=a(3),s=a(4),r=a(0),c=a.n(r),l=(a(21),a(8)),u=a(10),m=a(13),p=a(12),h=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).setName=function(e){},o.setEmail=function(e){},o.sendLogins=function(e,t,a){console.log(o.state.email),t.includes("\n")||2!==t.split("@").length?alert("invalid email: "+t):""!==e?(o.setState({buttonName:"Switch account",userName:e,email:t}),a()):alert("invalid name: "+o.state.userName)},o.changeToHome=function(){o.setState({body:"home"})},o.changeToAbout=function(){o.setState({body:"about"})},o.state={userName:"",email:"",buttonName:"Sign in",body:"home"},o}return Object(o.a)(a,[{key:"decideBody",value:function(){return"home"===this.state.body?c.a.createElement(u.default,null):"about"===this.state.body?c.a.createElement(p.default,null):void 0}},{key:"render",value:function(){return c.a.createElement("div",{id:"FrontEnd"},c.a.createElement(l.default,{name:this.state.userName,email:this.state.email,sendLogins:this.sendLogins,buttonName:this.state.buttonName,home:this.changeToHome,about:this.changeToAbout}),this.decideBody(),c.a.createElement(m.default,null))}}]),a}(r.Component);t.default=h},function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),i=a(3),s=a(4),r=a(0),c=a.n(r),l=a(9),u=a(15),m=a.n(u),p=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).toogleLogin=function(){"hideLogin"===o.state.loginClass?o.setState({loginClass:""}):o.setState({loginClass:"hideLogin"})},o.state={loginClass:"hideLogin"},o}return Object(o.a)(a,[{key:"displayGreeting",value:function(){if(""!==this.props.name)return c.a.createElement("span",null,"Hi "+this.props.name.split(" ")[0])}},{key:"render",value:function(){return c.a.createElement("div",{className:"FE_navigation"},c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"left both"},this.displayGreeting(),c.a.createElement("button",{className:"FE_navigation_button",onClick:this.props.home},"Home"),c.a.createElement("button",{className:"FE_navigation_button",onClick:this.props.about},"About"),c.a.createElement("button",{className:"FE_navigation_button",onClick:this.props.join},"Join")),c.a.createElement("img",{src:m.a}),c.a.createElement("div",{className:"right both"},c.a.createElement("button",{className:"FE_navigation_button",onClick:this.toogleLogin},this.props.buttonName))),c.a.createElement(l.default,{class:this.state.loginClass,sendLogins:this.props.sendLogins,toogleLogin:this.toogleLogin}))}}]),a}(r.Component);t.default=p},function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),i=a(3),s=a(4),r=a(0),c=a.n(r),l=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).submit=function(){o.props.sendLogins(o.state.userName,o.state.email,o.props.toogleLogin)},o.state={userName:"",email:""},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"FE_login "+this.props.class},c.a.createElement("div",null,c.a.createElement("input",{placeholder:"NAME",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})}})),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"EMAIL",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),c.a.createElement("button",{className:"FE_navigation_button",onClick:this.submit},"Submit"))}}]),a}(r.Component);t.default=l},function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),i=a(3),s=a(4),r=a(0),c=a.n(r),l=a(11),u=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={cards:[]},o}return Object(o.a)(a,[{key:"makeExampleCard",value:function(){for(var e=this.generateRandomStr(7),t=30*Math.random()+15,a="",n=0;n<t;n++)a+=this.generateRandomStr(Math.floor(7*Math.random()+3))+" ";return c.a.createElement(l.default,{subject:e,description:a,number:Math.floor(10*Math.random()),img:"./imgSample/company"+Math.floor(10*Math.random()+1)+".png"})}},{key:"generateRandomStr",value:function(e){for(var t="",a=0;a<e;a++)t+=String.fromCharCode(Math.floor(26*Math.random()+97));return t}},{key:"componentDidMount",value:function(){for(var e=[],t=0;t<40;t++)e.push(this.makeExampleCard());this.setState({cards:e})}},{key:"generateColumns",value:function(){if(0!==this.state.cards.length){for(var e=[],t=0;t<5;t++)e.push([]);for(var a=this.state.cards.length/5,n=0;n<this.state.cards.length;n++)e[Math.floor(n/a)].push(this.state.cards[n]);for(var o=[],i=0;i<5;i++)o.push(c.a.createElement("div",{className:"FE_body_column"},e[i]));return o}}},{key:"render",value:function(){return c.a.createElement("div",{className:"FE_body"},this.generateColumns())}}]),a}(r.Component);t.default=u},function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),i=a(3),s=a(4),r=a(0),c=a.n(r),l=function(e){Object(s.a)(r,e);var t=Object(i.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return c.a.createElement("div",{className:"FE_Card "},c.a.createElement("div",{className:"zero_height"},"_"),c.a.createElement("img",{src:a(42)(""+this.props.img),alt:"company profile"}),c.a.createElement("h1",null,this.props.subject),c.a.createElement("p",null,this.props.description),c.a.createElement("div",{className:"container"},c.a.createElement("span",null,this.props.number+" in line "),c.a.createElement("button",null,"Join Queue")))}}]),r}(r.Component);t.default=l},function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),i=a(3),s=a(4),r=a(0),c=a.n(r),l=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"createHtml",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Our goal"),c.a.createElement("div",{className:"FE_about_info"},c.a.createElement("p",null,"Schools have always had a unique relationship with colleges and universities as they often serve as the highest concentration of diverse talent and skills that are so important to companies today.  For years students and these companies have been able to connect through job fairs where students could have face to face time with representatives of these companies, to learn and to have a more casual conversation before an interview."),c.a.createElement("p",null,"As situations arise where these sorts of interactions are no longer possible, and more and more students are earning their degrees online, how will this valuable interaction continue to be an integral part of jump starting students\u2019 careers?"),c.a.createElement("p",null,"We seeks to create a virtual career fair that gives students the opportunity to not only get a larger view of the opportunities available for them, but also get important information on the companies as well as talk to representatives one on one."),c.a.createElement("p",null,"This is done through creating a dashboard where users can get quick information on a lot of companies, drop their resume into some, as well as add themselves in line to talk to a company representative over zoom."),c.a.createElement("p",null,"While nothing can completely substitute the opportunity to interact with companies in person, we want to gives users a chance to simply get information and connect with companies and companies to be able to simply connect with young professionals.")),c.a.createElement("iframe",{src:"https://itconnect.uw.edu/connect/phones/conferencing/zoom-video-conferencing/zoom-canvas/"}),c.a.createElement("iframe",{src:"https://zoom.us/join",sandbox:"allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"FE_about FE_body"},this.createHtml())}}]),a}(r.Component);t.default=l},function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(2),i=a(3),s=a(4),r=a(0),c=a.n(r),l=(a(22),function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).showHideInput=function(){"hideInput"===o.state.textareaClassName?o.setState({textareaClassName:"showInput"}):o.setState({textareaClassName:"hideInput"})},o.sendFeeback=function(){o.setState({feedback:"thank you"})},o.state={textareaClassName:"hideInput",feedback:""},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"FE_footer"},c.a.createElement("div",null,"Footer"),c.a.createElement("div",{className:"feedback"},c.a.createElement("p",{onClick:function(t){return e.showHideInput()}},"Bugs? Feedbacks? Suggestions? Tell us here"),c.a.createElement("div",{className:"inputDiv "+this.state.textareaClassName},c.a.createElement("textarea",{value:this.state.feedback,placeholder:"type here",onChange:function(t){return e.setState({feedback:t.target.value})}}),c.a.createElement("button",{onClick:function(t){return e.sendFeeback()}},"Send"))))}}]),a}(r.Component));t.default=l},,function(e,t){e.exports="data:image/png;base64,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"},,,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){var n={"./FE_Card":11,"./FE_Card.js":11,"./FE_about":12,"./FE_about.js":12,"./FE_body":10,"./FE_body.js":10,"./FE_footer":13,"./FE_footer.css":22,"./FE_footer.js":13,"./FE_login":9,"./FE_login.js":9,"./FE_navigation":8,"./FE_navigation.js":8,"./FrontEnd":7,"./FrontEnd.css":21,"./FrontEnd.js":7,"./Logo.png":15,"./imgSample/company1.png":43,"./imgSample/company10.png":44,"./imgSample/company2.png":45,"./imgSample/company3.png":46,"./imgSample/company4.png":47,"./imgSample/company5.png":48,"./imgSample/company6.png":49,"./imgSample/company7.png":50,"./imgSample/company8.png":51,"./imgSample/company9.png":52};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=42},function(e,t,a){e.exports=a.p+"static/media/company1.bf4cf288.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX///8An+NkZWcAneIAm+Lz8/NfYWMAmOFWV1lbXV9BtOkAluGl0vHNzs5cXV+8vL17fX/o+P3h4eKz3/VSVFatrq+/5veNy+8qrudtb3Hn5+eq2POTlJXT09Tt7e1oaWuBgoTX8Pu/v8Beu+uztLVxw+2en6B2d3lLTVDg9PzZ2dqBye8fqebO6vm54faLjI0Ajd+X0/Ks2fRJuepER0pUdiZUAAAJJklEQVR4nO2cC3eiOhDHI48QdBFFdCtVsdSqtQ9vd+/3/2x38gTcgrXqUnrnd872sIRy5t8JmUwyQAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAjyt7jtVnIzbNq4i+DZlTjdpo27BA92pxrvpWnzzueuVyOwY3eatu98bupcCE58a9rAc3n1agV2Ok7TFp5Lp96FoPChaRPP4805IhD66WPTRp7DMO+j1RHjpmkrz+He9FGnJuy3OGK8mEjhPDVty3V4tk0XbdqU6zAyT6E3atqW62AbFz43bcp1eDKRotfisaSGoRlm7Pviebeapkz9JF0TKbxiFhhsWRXxvjFjP8OLGWac0uSaWtXEUVPWfgYzIS0nSKt+jUJr2pS1n+A2jxSvhdMuqxNosaAxg0/GjKN2ado5q+ukQL8pe0/mIY8Ud4XTUVwv0OqvGzP5NB5NH7VL6d/miAthsGlJyMgjRSmFD+qfQg5tScTIO2kpv2V+v4p8sJk3ZvVJvDvQJEEl86mR2JKIcXtqWjE3HbgfXtm2C1ER8KtZmkGIXdeyS1GYtH0svV+YQNKWiFEx8a5mbUabOLmybZehKnmqxjcRY3Bd0y7FyQlwZiS2ZXp68iJGaiJGel3LLsXJC1H5rLW/urJtF+L5/blbNfs8YrRjenrygrBrnEhnV7btQuSL+r2PRYxxHjHasaCRb8zY3WEN+W+Ybko3zZl9Cvnmmu1V8k8hRw6ME9sSMY5ukB5ukRqFtCU5xtFN7oNxNmudD48VKhyWKvTb9hweKzY5TK5aN/vm1BYMHZQMtS+DEtTWKtilsq88C46bsvYz1JZjlGYC7VvJUHScSrzSbK51uYXm7kc1xevCPFK0ZEXxVEwfpcumTbkOhUixaNqWq5C0M1KcQL5p4zdtynXIN238rGlbPk+0CqvIWhspylRvPeV7Ty1J7iv4RvuHVXyfPeAqkqP7+OOmTTyXWW05DXTSpg08m29UT1NFbU1Ue5Yu6khrFLY7UmjmNbWJLVnKP8b3qS9FEARBEARBEOQTRGEY6vRtkYXhTh1nhQXcQB7LJdDo8DTgrvTZjGfz5ppsZy4mr3pD6vGH3lwc/jAFKb9u8ytH8ljvY533FZHEYr7vM8rtcgcxP2bC7vk2NlV26njGL4ULLGV2sI31+tKebWWKFMTbhKxjtdWbxVuTOd31PFWP2tEHcOSpo0mvZyobXuXxvaf2Is96jTPZUj+OY59uI+JSSuGYWUJO4Of7DBvqcykDasX6YiGLmgWmAVXroaHPIrLyffnXKW43TTz9mk1Pb4G/eB1HuW7k5K8UP9vOTyKqPXqCs74/saFMyKGxS9a+zzeHIirWNrlC1Ql3zFIKhaCQUUucjy2LRVqhWqkQCom6ImCFQj1QqN5gMAp/Oma/f+QYsXChUniB16iTuGBCrKqVAuGBgBf2yoYlLSkkayqEwRXSt1KhXG2SCse++OtMaWHHEAzveJOSwo5t62JxUKjrU8B3l1MIYswyX8RU1wIPLKVC6URe/1pSOJe/NaPpXnmTK5QrhlIh3GLKCxSKtZbch7KoWCu88+zftjPSCjuecCJ/GeByCpU9B2qn3DzuIWn/nh74cMeEdPC/+f0BnU5pmt8R3BzAI1Dc9J149o0tioq1wp+OByK7WqEtnfjbvqQPaxXSJTeTLGI4KCnMxJXck+D3sVKYzsUgrO7oxnSQlFwICp3RsxChFfL/gWil0O4K/Y/Qav8lhf485QczynZ+SeGUj0twHn76NFUKKZz28zuuKZ2WK7xA4S/492YUPnr2A3lzZDcdOc5EVMbf297E0Qp/8XA4uaJCaN5BZ1wvmFYIM4IwpWLMZXxoAfmJVriL4UHWd+R1z+XSC1B3C26zjULopK9c5r1S+PrmeJMhyH70dLQQ8bBXfBv3sgoDcNFgDK5KtEKLR3zKuOVzMTDNpXele/c0zu84owcr3ULhXc950gqfRQeVP7nCEbHtmye7N7zzSvHQOec7N8cUrnyYBcxIrpBH/H0gFTA+jDAZYoTCReyPM33HhB1UzwiFvBMSOboo7wlPKoVvEPbhpFF49ecwEMU+MB4ahYU9MhhqoctmUzlrkU1rv69iJd+MOijLlwqHPfvBFgpBzj08ZQ+2ECoU8mLA3uNFFRbjoYoBxMRD3gShe0beU8iL8XiXhZ+rvCm2qFWvkDw5tpzIwEhqw1NmQxw0Cp8c555cVOHBnGagpY6N+KnlvqtwLXtsHFMxl1FNK986ppC/U8QVDnsdRzxmnpjpSIXkuTO8rEI9L53zkR+eLFEbKedaRfe+o9DXk24Z1nWTdVzhrScU3jpqHjoRz6NSKLiowlJuEVN/s98zyngwqFe4Y1SVcIViFqubAnZUIY8YXW6/LkF1bKdCocotfp8nUeaHQs2CigQwFrYHcWxKJZMtEwp9k0+FTLe6sb8sNE19FSPcrX+gsCfnnZD+8e9G9hyd9j14vRcy8vKwB5kkV9hV+aHzz5kf0izm+MFsvx+rueSsUGc33vNENhkYzW7eGg4g5ke6abHXDeHyoBLxQee9P28gwt3e6PR+2OUvZtwX3s546gpNtyrH/56f+UEQ5H/MGUWw7aifTT76Zp37Z0n3liQtKMBcfLR6K/nzwq//VYwwZgEojJgFrtikqZUELF6RAPIn2QHHfZaR5ZTy6cPCWiW7mE//1szaiDU8RqIpWQ6svgtzuy/51vqWCB+mC7IOsjWJlsTlZi9SyEp4eyIOVlLtYrrjs6A04f16K06Bwg1ZrUg25ie2TcmoYbbccYXMJWG2CsgOFK5Ca8EV/svb4QRJyVi+usW7sxuG02g3U81SITQHe7KNgi/ZZ+eDUCkMk3S3zAjN5v0Khfw53Ix36Y7QYCxn4EbhjGzD1dcsdYuWruylGejbCWHUNQplL1UKXUimINvYRGSaqSSsqBCc3JiKaqwU8qIYckUYaZLtYJOQFbNmM1crJGMfRhr1HJK1H2TQvCH9zUZKFM/kKiTzGd+xWTak4qOMA8gLP3Ql6CFWe179NawzNYAeBcaVVip0pymLjl/GWfvsK8Y+BEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEGQ78t/1t+tW/ThHSkAAAAASUVORK5CYII="},function(e,t,a){e.exports=a.p+"static/media/company2.307ed353.png"},function(e,t,a){e.exports=a.p+"static/media/company3.d8b9e39a.png"},function(e,t,a){e.exports=a.p+"static/media/company4.5b180c5b.png"},function(e,t,a){e.exports=a.p+"static/media/company5.7e8a9f02.png"},function(e,t,a){e.exports=a.p+"static/media/company6.34686969.png"},function(e,t,a){e.exports=a.p+"static/media/company7.011c3d68.png"},function(e,t,a){e.exports=a.p+"static/media/company8.514c32df.png"},function(e,t,a){e.exports=a.p+"static/media/company9.80cf5926.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(23),s=a.n(i),r=(a(32),a(1)),c=a(2),l=a(3),u=a(4),m=(a(33),a(5));a(34);var p=a(18),h=a.n(p),d=a(26),g=(a(41),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).submit=function(){n.props.sendLogins(n.state.userName,n.state.email,n.props.toogleLogin)},n.state={userName:"",email:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"BE_login "+this.props.class},o.a.createElement("div",null,o.a.createElement("input",{placeholder:"NAME",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})}})),o.a.createElement("div",null,o.a.createElement("input",{placeholder:"EMAIL",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),o.a.createElement("button",{className:"BE_navigation_button",onClick:this.submit},"Submit"))}}]),a}(n.Component)),E=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).toogleLogin=function(){"hideLogin"===n.state.loginClass?n.setState({loginClass:""}):n.setState({loginClass:"hideLogin"})},n.state={loginClass:"hideLogin"},n}return Object(c.a)(a,[{key:"displayGreeting",value:function(){if(""!==this.props.name)return o.a.createElement("span",null,"Hi "+this.props.name)}},{key:"render",value:function(){return o.a.createElement("div",{className:"BE_navigation"},o.a.createElement("div",{className:"left both"},this.displayGreeting()),o.a.createElement("div",{className:"right both"},o.a.createElement("button",{className:"BE_navigation_button",onClick:this.toogleLogin},this.props.buttonName)),o.a.createElement(g,{class:this.state.loginClass,sendLogins:this.props.sendLogins,toogleLogin:this.toogleLogin}))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={display:""},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"student"},o.a.createElement("div",null,"Student:   ",this.props.student),o.a.createElement("div",null,"Email: ",this.props.email))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).sendLogins=function(e,t,a){console.log(n.state.email),t.includes("\n")||2!==t.split("@").length?alert("invalid email: "+t):""!==e?(n.setState({buttonName:"Switch account",userName:e,email:t}),a()):alert("invalid name: "+n.state.userName)},n.Dequeue=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://8ckk6ja3rk.execute-api.us-west-2.amazonaws.com/Dequeue/dequeueclient",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:"CSE142"})}).then((function(e){return e.json()})).then((function(e){return n.setState({student:e.name,studentEmail:e.email})}));case 2:case"end":return e.stop()}}),e)}))),n.state={userName:"",email:"",buttonName:"Sign in",student:"",studentEmail:""},n}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("body",{id:"BackEnd"},o.a.createElement(E,{name:this.state.userName,email:this.state.email,sendLogins:this.sendLogins,buttonName:this.state.buttonName}),o.a.createElement("button",{className:"Dequeue",onClick:this.Dequeue},"Next Student"),o.a.createElement(f,{student:this.state.student,email:this.state.studentEmail}))}}]),a}(n.Component),b=a(7),C=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).switchPage=function(){"front"===n.state.page?n.setState({page:"back"}):n.setState({page:"front"})},n.state={page:"front"},n}return Object(c.a)(a,[{key:"createHtml",value:function(){return"front"===this.state.page?o.a.createElement(b.default,null):o.a.createElement(v,null)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},console.log("Only front end is built, backend features not accessable"),this.createHtml(),o.a.createElement("button",{style:{position:"fixed",top:0,left:0},onClick:this.switchPage},"Switch"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,null,o.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.2a2ac961.chunk.js.map