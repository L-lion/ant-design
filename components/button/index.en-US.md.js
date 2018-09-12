webpackJsonp([212],{1771:function(t,e){t.exports={content:["section",["p","To trigger an operation."],["h2","When To Use"],["p","A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic."]],meta:{category:"Components",type:"General",title:"Button",filename:"components/button/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","To get a customized button, just set ",["code","type"],"/",["code","shape"],"/",["code","size"],"/",["code","loading"],"/",["code","disabled"],"."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","disabled"],["td","disabled state of button"],["td","boolean"],["td",["code","false"]]],["tr",["td","ghost"],["td","make background transparent and invert text and border colors, added in 2.7"],["td","boolean"],["td","false"]],["tr",["td","href"],["td","redirect url of link button"],["td","string"],["td","-"]],["tr",["td","htmlType"],["td","set the original html ",["code","type"]," of ",["code","button"],", see: ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"},"MDN"]],["td","string"],["td",["code","button"]]],["tr",["td","icon"],["td","set the icon of button, see: Icon component"],["td","string"],["td","-"]],["tr",["td","loading"],["td","set the loading status of button"],["td","boolean ","|"," { delay: number }"],["td","false"]],["tr",["td","shape"],["td","can be set to ",["code","circle"]," or omitted"],["td","string"],["td","-"]],["tr",["td","size"],["td","can be set to ",["code","small"]," ",["code","large"]," or omitted"],["td","string"],["td",["code","default"]]],["tr",["td","target"],["td","same as target attribute of a, works when href is specified"],["td","string"],["td","-"]],["tr",["td","type"],["td","can be set to ",["code","primary"]," ",["code","ghost"]," ",["code","dashed"]," ",["code","danger"],"(added in 2.7) or omitted (meaning ",["code","default"],")"],["td","string"],["td",["code","default"]]],["tr",["td","onClick"],["td","set the handler to handle ",["code","click"]," event"],["td","function"],["td","-"]],["tr",["td","block"],["td","option to fit button width to its parent width"],["td","boolean"],["td",["code","false"]]]]],["p",["code","<Button>Hello world!</Button>"]," will be rendered into ",["code","<button><span>Hello world!</span></button>"],", and all the properties which are not listed above will be transferred to the ",["code","<button>"]," tag."],["p",["code",'<Button href="http://example.com">Hello world!</Button>']," will be rendered into ",["code",'<a href="http://example.com"><span>Hello world!</span></a>'],"."],["style","\n[id^=components-button-demo-] .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n[id^=components-button-demo-] .ant-btn-group > .ant-btn,\n[id^=components-button-demo-] .ant-btn-group > span > .ant-btn {\n  margin-right: 0;\n}\n"]]}}});