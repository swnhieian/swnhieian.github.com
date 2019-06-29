(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/me.1c8bf460.jpg"},35:function(e,t,a){e.exports=a(58)},40:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(13),l=a.n(i),c=(a(40),a(7)),o=a(6),s=a(10),m=a(8),u=a(11),h=(a(42),a(44),a(45),a(47),a(16)),d=a(3),p=a(61),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleNavbar=a.toggleNavbar.bind(Object(h.a)(Object(h.a)(a))),a.handleScroll=a.handleScroll.bind(Object(h.a)(Object(h.a)(a))),a.state={open:!0,scrollingLock:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.threshold=l.a.findDOMNode(this).offsetTop,window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){window.scrollY>this.threshold?this.setState({scrollingLock:!0}):window.scrollY<this.threshold&&this.setState({scrollingLock:!1})}},{key:"toggleNavbar",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){return r.a.createElement(d.i,{color:"light",light:!0,expand:"md",className:"navbar-sticky border"+(this.state.scrollingLock?" stick":"")},r.a.createElement(d.j,{href:"/"}),r.a.createElement(d.k,{onClick:this.toggleNavbar}),r.a.createElement(d.d,{isOpen:this.state.open,navbar:!0},r.a.createElement(d.f,{className:"ml-auto",navbar:!0},r.a.createElement(d.g,null,r.a.createElement(d.h,{to:"/home",activeClassName:"active",tag:p.a},"Home")),r.a.createElement(d.g,null,r.a.createElement(d.h,{to:"/publications",activeClassName:"active",tag:p.a},"Publications")),r.a.createElement(d.g,null,r.a.createElement(d.h,{to:"/contact",activeClassName:"active",tag:p.a},"Contact")),r.a.createElement(d.g,null,r.a.createElement(d.h,{href:"/WeinanShi-CV.pdf",target:"_blank",activeClassName:"active"},"CV")))))}}]),t}(n.Component),g=a(31),b=a.n(g),E=a(15),y=a.n(E),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",function(){y()(".parallax").each(function(e,t){var a=y()(this).attr("parallax-speed");if(a){var n="-"+window.pageYOffset/a+"px";y()(this).css("background-position","center "+n)}})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"head",className:"parallax","parallax-speed":"4"},r.a.createElement("h1",{id:"logo",className:"text-center"},r.a.createElement("img",{className:"img-circle rounded-circle",src:b.a,alt:""}),r.a.createElement("span",{className:"title"},"Weinan Shi"),r.a.createElement("span",{className:"tagline"},"Tsinghua University",r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:swn18@mails.tsinghua.edu.cn"},"swn18@mails.tsinghua.edu.cn")))),r.a.createElement(f,null))}}]),t}(n.Component),v=(a(21),a(19)),k=a(5),S=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.e,null,r.a.createElement(d.l,{className:"section topspace"},r.a.createElement(d.c,null,r.a.createElement("p",{className:"lead text-muted text-justify"},"I am a PhD student at Department of Computer Science and Technology, Tsinghua University. I mainly focus on ",r.a.createElement("strong",null,"Human Computer Interaction"),", supervised by\xa0",r.a.createElement("a",{href:"http://media.cs.tsinghua.edu.cn/~pervasive/shiyc/",target:"_blank",rel:"noopener noreferrer"},"Prof. Yuanchun Shi")," and\xa0",r.a.createElement("a",{href:"http://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/",target:"_blank",rel:"noopener noreferrer"},"Prof. Chun Yu"),". I received my Bachelor's degree at Tsinghua University in 2016.",r.a.createElement("br",null),r.a.createElement("br",null),"Currently, my research interest includes ",r.a.createElement("strong",null,"text entry techniques"),", ",r.a.createElement("strong",null,"smartphones and smartwatches"),",",r.a.createElement("strong",null," accessibility")," and ",r.a.createElement("strong",null,"novel interaction techniques"),". I aim at creating novel, natural and easy-to-use interaction techniques for the current and for the future."))),r.a.createElement(d.e,{className:"section featured topspace education"},r.a.createElement("h2",{className:"section-title"},r.a.createElement("span",null,"Education")),r.a.createElement(d.l,null,r.a.createElement(d.c,{md:"2",sm:"3"},r.a.createElement("p",{className:"text-right"},r.a.createElement("strong",null,"2016.9 ~ Present"))),r.a.createElement(d.c,{md:"10",sm:"9"},r.a.createElement("p",{className:"text-left"},r.a.createElement("strong",null,"PhD Candidate")," on Human-Computer Interaction, Department of computer science and technology, Tsinghua University."))),r.a.createElement(d.l,null,r.a.createElement(d.c,{md:"2",sm:"3"},r.a.createElement("p",{className:"text-right"},r.a.createElement("strong",null,"2012.9 ~ 2016.6"))),r.a.createElement(d.c,{md:"10",sm:"9"},r.a.createElement("p",{className:"text-left"},r.a.createElement("strong",null,"Bachelor's degree")," at Department of Computer Science and Technology, Tsinghua University."),r.a.createElement("p",{className:"text-left"},r.a.createElement("strong",null,"Bachelor's degree")," at Department of Economics and Finance, Tsinghua University. (Second Degree Program)")))),r.a.createElement(d.e,{className:"section featured topspace education"},r.a.createElement("h2",{className:"section-title"},r.a.createElement("span",null,"Experience")),r.a.createElement(v.Timeline,null,r.a.createElement(v.TimelineEvent,{title:"2019, 2017",createdAt:"",titleStyle:{fontWeight:"bold",fontSize:"1.3em"},iconColor:"#6fba1c",iconStyle:{fontSize:"1.3em"},icon:r.a.createElement(k.a,{icon:"chalkboard-teacher"})},r.a.createElement("h6",null,r.a.createElement("strong",null,"Teaching assistant")," of Theory and Practice of Human Computer Interaction, Tsinghua University.")),r.a.createElement(v.TimelineEvent,{title:"2016",titleStyle:{fontWeight:"bold",fontSize:"1.3em"},createdAt:"",iconColor:"#03a9f4",icon:r.a.createElement(k.a,{icon:"building"})},r.a.createElement("h6",null,r.a.createElement("strong",null,"Intern")," at ",r.a.createElement("a",{href:"http://www.cloudbeaver.com/",target:"_blank",rel:"noopener noreferrer"},"CloudBeaver Techonology (Beijing) Co., Ltd."))),r.a.createElement(v.TimelineEvent,{title:"2016",createdAt:"",titleStyle:{fontWeight:"bold",fontSize:"1.3em"},iconColor:"#03a9f4",icon:r.a.createElement(k.a,{icon:"building"})},r.a.createElement("h6",null,r.a.createElement("strong",null,"Intern")," at ",r.a.createElement("a",{href:"https://www.tencent.com/",target:"_blank",rel:"noopener noreferrer"},"Tencent Technology (Shenzhen) Co., Ltd."))),r.a.createElement(v.TimelineEvent,{title:"2014 ~ 2015",createdAt:"",titleStyle:{fontWeight:"bold",fontSize:"1.3em"},iconColor:"#6fba1c",icon:r.a.createElement(k.a,{icon:"school"})},r.a.createElement("h6",null,r.a.createElement("strong",null,"Director of Operations in student union")," of Dept. of Computer Science and Technology, Tsinghua University.")))),r.a.createElement(d.e,{className:"section featured topspace"},r.a.createElement("h2",{className:"section-title"},r.a.createElement("span",null,"Skills")),r.a.createElement(d.l,null,r.a.createElement(d.c,null,r.a.createElement("h3",{className:"text-center"},"Languages"),r.a.createElement("p",null,"Chinese"),r.a.createElement("p",null,"English")),r.a.createElement(d.c,null,r.a.createElement("h3",{className:"text-center"},"Coding"),r.a.createElement("p",null,"Python"),r.a.createElement("p",null,"Java (Android)"),r.a.createElement("p",null,"C#")),r.a.createElement(d.c,null,r.a.createElement("h3",{className:"text-center"},"Web Dev"),r.a.createElement("p",null,"HTML"),r.a.createElement("p",null,"CSS"),r.a.createElement("p",null,"JavaScript")),r.a.createElement(d.c,null,r.a.createElement("h3",{className:"text-center"},"Others"),r.a.createElement("p",null,"Academic research and writing"),r.a.createElement("p",null,"LATEX typesetting and publishing")))))}}]),t}(n.Component),T=a(32),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).myName="Weinan Shi",e.paperData=[{title:"VIPBoard: Improving Screen-Reader Keyboard for Visually Impaired People with Character-Level Auto Correction",url:"https://dl.acm.org/citation.cfm?doid=3290605.3300747",conference:"CHI 2019",authors:["Weinan Shi","Chun Yu","Shuyi Fan","Feng Wang","Tong Wang","Xin Yi","Xiaojun Bi","Yuanchun Shi"],abstract:"Modern touchscreen keyboards are all powered by the word-level auto-correction ability to handle input errors. Unfortunately, visually impaired users are deprived of such benefit because a screen-reader keyboard offers only character-level input and provides no correction ability. In this paper, we present VIPBoard, a smart keyboard for visually impaired people, which aims at improving the underlying keyboard algorithm without altering the current input interaction. Upon each tap, VIPBoard predicts the probability of each key considering both touch location and language model, and reads the most likely key, which saves the calibration time when the touchdown point misses the target key. Meanwhile, the keyboard layout automatically scales according to users\ufffd touch point location, which enables them to select other keys easily. A user study shows that compared with the current keyboard technique, VIPBoard can reduce touch error rate by 63.0% and increase text entry speed by 12.6%.",award:"honorable",video:"http://pi.cs.tsinghua.edu.cn/lab/videos/video-VIPBoard.mp4",paper:"http://pi.cs.tsinghua.edu.cn/lab/papers/VIPBoard.pdf",img:"/vipboard.png"},{title:"Lip-Interact: Improving Mobile Device Interaction with Silent Speech Commands",url:"https://dl.acm.org/citation.cfm?id=3242599",conference:"UIST 2018",authors:["Ke Sun","Chun Yu","Weinan Shi","Lan Liu","Yuanchun Shi"],abstract:"We present Lip-Interact, an interaction technique that allows users to issue commands on their smartphone through silent speech. Lip-Interact repurposes the front camera to capture the user\u2019s mouth movements and recognize the issued commands with an end-to-end deep learning model. Our system supports 44 commands for accessing both system-level functionalities (launching apps, changing system settings, and handling pop-up windows) and application-level functionalities (integrated operations for two apps). We verify the feasibility of Lip-Interact with three user experiments: evaluating the recognition accuracy, comparing with touch on input efficiency, and comparing with voiced commands with regards to personal privacy and social norms. We demonstrate that Lip-Interact can help users access functionality efficiently in one step, enable one-handed input when the other hand is occupied, and assist touch to make interactions more fluent.",video:"http://pi.cs.tsinghua.edu.cn/lab/videos/Lip-Interact.mp4",paper:"http://pi.cs.tsinghua.edu.cn/lab/papers/Lip_Interact_final.pdf",img:"/lip-interact.jpg"},{title:"TOAST: Ten-Finger Eyes-Free Typing on Touchable Surfaces",url:"https://dl.acm.org/citation.cfm?id=3191765",conference:"Ubicomp 2018",authors:["Weinan Shi","Chun Yu","Xin Yi","Zhen Li","Yuanchun Shi"],abstract:"Touch typing on flat surfaces (e.g. interactive tabletop) is challenging due to lack of tactile feedback and hand drifting. In this paper, we present TOAST, an eyes-free keyboard technique for enabling efficient touch typing on touch-sensitive surfaces. We first formalized the problem of keyboard parameter (e.g. location and size) estimation based on users' typing data. Through a user study, we then examined users' eyes-free touch typing behavior on an interactive tabletop with only asterisk feedback. We fitted the keyboard model to the typing data, results suggested that the model parameters (keyboard location and size) changed not only between different users, but also within the same user along with time. Based on the results, we proposed a Markov-Bayesian algorithm for input prediction, which considers the relative location between successive touch points within each hand respectively. Simulation results showed that based on the pooled data from all users, this model improved the top-1 accuracy of the classical statistical decoding algorithm from 86.2% to 92.1%. In a second user study, we further improved TOAST with dynamical model parameter adaptation, and evaluated users' text entry performance with TOAST using realistic text entry tasks. Participants reached a pick-up speed of 41.4 WPM with a character-level error rate of 0.6%. And with less than 10 minutes of practice, they reached 44.6 WPM without sacrificing accuracy. Participants' subjective feedback also indicated that TOAST offered a natural and efficient typing experience.",video:"http://pi.cs.tsinghua.edu.cn/lab/videos/TOAST.mp4",paper:"http://pi.cs.tsinghua.edu.cn/lab/papers/TOAST.pdf",img:"http://pi.cs.tsinghua.edu.cn/wp-content/uploads/2018/04/new-image-n24k9-300x300.jpg"},{title:"Word Clarity as a Metric in Sampling Keyboard Test Sets",url:"https://dl.acm.org/citation.cfm?id=3025701",conference:"CHI 2017",authors:["Xin Yi","Chun Yu","Weinan Shi","Xiaojun Bi","Yuanchun Shi"],abstract:"Test sets play an essential role in evaluating text entry techniques. In this paper, we argue that in addition to the widely adopted metric of bigram representativeness and memorability, word clarity should also be considered as a metric when creating test sets from the target dataset. Word clarity quantifies the extent to which a word is likely to confuse with other words on a keyboard. We formally define word clarity, derive equations calculating it, and both theoretically and empirically show that word clarity has a significant effect on text entry performance: it can yield up to 26.4% difference in error rate, and 25% difference in input speed. We later propose a Pareto optimization method for sampling test sets with different sizes, which optimizes the word clarity and bigram representativeness, and memorability of the test set. The obtained test sets are published on the Internet.",paper:"http://pi.cs.tsinghua.edu.cn/lab/papers/Word%20Clarity_Xin%20Yi_CHI2017.pdf",img:"http://pi.cs.tsinghua.edu.cn/wp-content/uploads/2017/01/Word-clarity-300x300.png"},{title:"Is it too small?: Investigating the performances and preferences of users when typing on tiny QWERTY keyboards",url:"https://www.sciencedirect.com/science/article/pii/S1071581917300654",conference:"IJHCS 2017",authors:["Xin Yi","Chun Yu","Weinan Shi","Yuanchun Shi"],abstract:"Typing on tiny QWERTY keyboards on smartwatches is considered challenging or even impractical due to the limited screen space. In this paper, we describe three user studies undertaken to investigate users\u2019 typing abilities and preferences on tiny QWERTY keyboards. The first two studies, using a smartphone as a substitute for a smartwatch, tested five different keyboard sizes (2, 2.5, 3, 3.5 and 4 cm). Study 1 collected typing data from participants using keyboards and given asterisk feedback. We analyzed both the distribution of touch points (e.g., the systematic offset and shape of the distribution) and the effect of keyboard size. Study 2 adopted a Bayesian algorithm based on a touch model derived from Study 1 and a unigram word language model to perform input prediction. We found that on the smart keyboard, participants could type between 26.8 and 33.6 words per minute (WPM) across the five keyboard sizes with an uncorrected character error rate ranging from 0.4% to 1.9%. Participants\u2019 subjective feedback indicated that they felt most comfortable with keyboards larger than 2.5 cm. Study 3 replicated the 3.0 and 3.5 cm keyboard tests on a real smartwatch and verified that in terms of text entry speed, error rate and user preference, there was no significant difference between the results measured on a smartphone and that on a smartwatch with same sized keys. This study result indicated that the results of Study 1 and 2 are applicable to smartwatch devices. Finally, we conducted a simulation to investigate the performance of different touch/language models based on our collected data. The results showed that using either a bigram language model or a detailed touch model can effectively correct imprecision in users\u2019 input. Our results suggest that achieving satisfactory levels of text input on tiny QWERTY keyboards is possible.",paper:"http://pi.cs.tsinghua.edu.cn/lab/papers/IJHCS_Xin%20YI.pdf",img:"http://pi.cs.tsinghua.edu.cn/wp-content/uploads/2017/06/IJHCS-YX--300x300.png"}],e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){y()('[data-toggle="tooltip"]').tooltip()}}]),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.paperData.map(function(t,a){var n=t.authors.map(function(a,n){var i="";return n<t.authors.length-1&&(i=", "),a===e.myName?r.a.createElement("span",{key:n},r.a.createElement("strong",null,a),i):r.a.createElement("span",{key:n},a+i)});return r.a.createElement(d.l,{key:a,className:"topspace publication mb-3 align-items-center"},r.a.createElement(d.c,{md:"3",sm:"6",className:"widget text-center mb-3"},r.a.createElement("img",{src:t.img,alt:t.title,className:"rounded align-middle"})),r.a.createElement(d.c,{md:"9",sm:"6",className:"maincontent"},r.a.createElement("header",{className:"page-header"},r.a.createElement("h5",{className:"page-title"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.title)),"honorable"===t.award&&r.a.createElement("h6",null,r.a.createElement("b",null,r.a.createElement(k.a,{icon:"award"}),"\xa0\xa0Best Paper Honorable Mention Award (Top 5%)")),r.a.createElement("h6",{className:"page-authors align-middle"},r.a.createElement(d.a,{color:"secondary",className:"align-middle"},t.conference)," ",n)),r.a.createElement("div",{className:"abstract"},r.a.createElement(T.a,{lines:4},t.abstract)),r.a.createElement("div",{className:"text-left"},t.video&&r.a.createElement("a",{href:t.video,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.b,{color:"primary",className:"mr-2 mt-2 rounded","data-toggle":"tooltip","data-placement":"top",title:"Paper Video"},r.a.createElement(k.a,{icon:"video"}))),t.paper&&r.a.createElement("a",{href:t.paper,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(d.b,{color:"primary",className:"mr-2 mt-2 rounded","data-toggle":"tooltip","data-placement":"top",title:"PDF File"},r.a.createElement(k.a,{icon:"file-pdf"}))))))});return r.a.createElement(d.e,{className:"pb-5"},t)}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{id:"underfooter"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 widget"},r.a.createElement("div",{className:"widget-body"},r.a.createElement("p",{className:"text-center"},"Copyright \xa9 ",(new Date).getFullYear(),", ",r.a.createElement("a",{href:"http://www.shiweinan.com"},"Weinan Shi"),r.a.createElement("br",null)))))))}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"p-5"},r.a.createElement(d.e,null,r.a.createElement("h2",{className:"section-title"},r.a.createElement("span",null,"Contact")),r.a.createElement(d.l,null,r.a.createElement(d.c,{className:"mb-5"},r.a.createElement("h4",null,"Please feel free to contact me if you have any questions."))),r.a.createElement(d.l,null,r.a.createElement(d.c,null,r.a.createElement("h5",null,r.a.createElement(k.a,{icon:"envelope"})),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:swn18@mails.tsinghua.edu.cn"},"swn18@mails.tsinghua.edu.cn"),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:swnhieian@126.com"},"swnhieian@126.com"))),r.a.createElement(d.c,null,r.a.createElement("h5",null,r.a.createElement(k.a,{icon:"map-marker-alt"})),r.a.createElement("p",null,"Room 3-526, FIT Building, Tsinghua University, Beijing, China, 100084"))),r.a.createElement(d.l,null,r.a.createElement(d.c,null,r.a.createElement("h5",null,r.a.createElement(k.a,{icon:["fab","github"]})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/swnhieian"},"@swnhieian"))),r.a.createElement(d.c,null,r.a.createElement("h5",null,r.a.createElement(k.a,{icon:["fab","facebook"]})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.facebook.com/swnhieian"},"@\u77f3\u4f1f\u7537")))),r.a.createElement(d.l,null,r.a.createElement(d.c,null,r.a.createElement("h5",null,r.a.createElement(k.a,{icon:["fab","weixin"]})),r.a.createElement("p",null,"shiweinan1995")),r.a.createElement(d.c,null,r.a.createElement("h5",null,r.a.createElement(k.a,{icon:["fab","weibo"]})),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.weibo.com/u/2647918555"},"@\u77f3\u4f1f\u7537THU"))))))}}]),t}(n.Component),j=a(60),I=a(62),x=a(59),W=a(18),Y=a(14),P=a(17),L=a(33),B=a.n(L);W.b.add(Y.e,Y.i,Y.d,Y.f,Y.g,Y.c,Y.h,Y.b,Y.a),W.b.add(P.f,P.e,P.b,P.a,P.c,P.d);var A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement("main",{id:"main",className:"pb-5"},r.a.createElement(I.a,null,r.a.createElement(x.a,{exact:!0,path:"/home",component:S}),r.a.createElement(x.a,{path:"/publications",component:N}),r.a.createElement(x.a,{path:"/contact",component:O}),r.a.createElement(B.a,{to:"/home"}))),r.a.createElement(C,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,2,1]]]);
//# sourceMappingURL=main.910084ff.chunk.js.map