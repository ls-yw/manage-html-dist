(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34834098"],{"28a7":function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("规则")])]),l("div",{staticClass:"text item orange"},[l("p",[e._v("系统默认变量：<{articleid}> - 文章序号，<{chapterid}> － 章节序号， <{subarticleid}> － 文章子序号， <{subchapterid}> － 章节子序号。")]),l("p",[e._v("系统标签 * 可以替代任意字符串。")]),l("p",[e._v("系统标签 ! 可以替代除了<和>以外的任意字符串。")]),l("p",[e._v("系统标签 ~ 可以替代除了<>'\"以外的任意字符串。")]),l("p",[e._v("系统标签 ^ 可以替代除了数字和<>之外字符串。")]),l("p",[e._v("系统标签 $ 可以替代数字字符串。")]),l("p",[e._v("空格 & nbsp; 可使用@代替")]),l("p",[e._v("采集规则中，需要获取的内容部分用四个以上系统标签代替，如 !!!!")])])]),l("el-form",{ref:"form",attrs:{rules:e.rules,model:e.collectObj,"label-width":"150px"}},[l("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",{staticClass:"title"},[e._v(e._s(0===e.collectId?"新增":"编辑")+"采集节点“"+e._s(e.$route.query.name||"")+"”")])]),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"名称",prop:"name"}},[l("el-input",{attrs:{placeholder:"请输入节点名称"},model:{value:e.collectObj.name,callback:function(t){e.$set(e.collectObj,"name",t)},expression:"collectObj.name"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"目标网址",prop:"host"}},[l("el-input",{attrs:{placeholder:"请输入目标网址"},model:{value:e.collectObj.host,callback:function(t){e.$set(e.collectObj,"host",t)},expression:"collectObj.host"}})],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"章节子序号运算方式",prop:"rules.sub_book_id"}},[l("el-col",{attrs:{span:12}},[l("el-input",{attrs:{placeholder:"请输入章节子序号运算方式"},model:{value:e.collectObj.rules.sub_book_id,callback:function(t){e.$set(e.collectObj.rules,"sub_book_id",t)},expression:"collectObj.rules.sub_book_id"}})],1),l("el-col",{staticClass:"text-center",attrs:{span:12}},[e._v("<{subBookId}>")]),l("el-col",{staticClass:"orange",attrs:{span:24}},[e._v("支持使用<{bookId}> 标记的四则运算（+加，-减，*乘，/除，%取余，%%取整）"),l("br"),l("span",{staticClass:"red"},[e._v("暂只支持一步运算")])])],1)],1),l("el-col",{attrs:{span:12}})],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"可否采集",prop:"collect_status"}},[l("el-radio-group",{model:{value:e.collectObj.collect_status,callback:function(t){e.$set(e.collectObj,"collect_status",t)},expression:"collectObj.collect_status"}},[l("el-radio",{attrs:{label:1}},[e._v("可采集")]),l("el-radio",{attrs:{label:0}},[e._v("不可采集")])],1)],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"目标网站编码",prop:"iconv"}},[l("el-radio-group",{model:{value:e.collectObj.iconv,callback:function(t){e.$set(e.collectObj,"iconv",t)},expression:"collectObj.iconv"}},[l("el-radio",{attrs:{label:"UTF-8"}}),l("el-radio",{attrs:{label:"GBK"}}),l("el-radio",{attrs:{label:"G2312"}})],1)],1)],1)],1)],1),l("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("小说信息页面采集规则")])]),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"小说信息页面地址",prop:"rules.book_url"}},[l("el-input",{attrs:{placeholder:"请输入小说信息页面地址"},model:{value:e.collectObj.rules.book_url,callback:function(t){e.$set(e.collectObj.rules,"book_url",t)},expression:"collectObj.rules.book_url"}}),l("p",{staticClass:"note"},[e._v("例：https://www.x23us.com/book/<{bookId}>")])],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"小说名称采集规则",prop:"rules.name"}},[l("el-input",{attrs:{placeholder:"请输入小说名称采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.name,callback:function(t){e.$set(e.collectObj.rules,"name",t)},expression:"collectObj.rules.name"}}),l("p",{staticClass:"note"},[e._v("例：<dd><h1>!!!! 全文阅读</h1></dd>")])],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"作者采集规则",prop:"rules.author"}},[l("el-input",{attrs:{placeholder:"请输入作者采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.author,callback:function(t){e.$set(e.collectObj.rules,"author",t)},expression:"collectObj.rules.author"}}),l("p",{staticClass:"note"},[e._v("例：<th>文章作者</th><td>@!!!!</td>")])],1)],1),l("el-col",{attrs:{span:12}})],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"小说类型采集规则",prop:"rules.category"}},[l("el-input",{attrs:{placeholder:"请输入小说类型采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.category,callback:function(t){e.$set(e.collectObj.rules,"category",t)},expression:"collectObj.rules.category"}}),l("p",{staticClass:"note"},[e._v('例：<a href="/class/$_$.html">!!!!</a>')])],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"小说类型对应关系",prop:""}})],1),l("el-col",{attrs:{span:12}})],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"简介采集规则",prop:"rules.intro"}},[l("el-input",{attrs:{placeholder:"请输入简介采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.intro,callback:function(t){e.$set(e.collectObj.rules,"intro",t)},expression:"collectObj.rules.intro"}}),l("p",{staticClass:"note"},[e._v('例：<p>****</p><p style="display:none" id="sidename">')])],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"全文标记采集规则",prop:"rules.finished"}},[l("el-input",{attrs:{placeholder:"请输入全文标记采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.finished,callback:function(t){e.$set(e.collectObj.rules,"finished",t)},expression:"collectObj.rules.finished"}}),l("p",{staticClass:"note"},[e._v("例：<th>文章状态</th><td>@已完成</td></tr>")])],1)],1),l("el-col",{attrs:{span:12}})],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"封面图片采集规则",prop:"rules.thumb_img"}},[l("el-input",{attrs:{placeholder:"请输入封面图片采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.thumb_img,callback:function(t){e.$set(e.collectObj.rules,"thumb_img",t)},expression:"collectObj.rules.thumb_img"}}),l("p",{staticClass:"note"},[e._v('例：<img style="padding:7px; border:1px solid #E4E4E4; width:120px; height:150px; margin:0 25px 0 15px;" alt="!" src="!!!!"/>')])],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"过滤的封面图片",prop:"rules.filter_thimb_img"}},[l("el-input",{attrs:{placeholder:"请输入过滤的封面图片"},model:{value:e.collectObj.rules.filter_thimb_img,callback:function(t){e.$set(e.collectObj.rules,"filter_thimb_img",t)},expression:"collectObj.rules.filter_thimb_img"}})],1)],1),l("el-col",{attrs:{span:12}})],1)],1),l("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("小说目录页面采集规则")])]),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"小说目录页面地址",prop:"rules.chapter_url"}},[l("el-input",{attrs:{placeholder:"请输入小说目录页面地址",rows:4},model:{value:e.collectObj.rules.chapter_url,callback:function(t){e.$set(e.collectObj.rules,"chapter_url",t)},expression:"collectObj.rules.chapter_url"}}),l("p",{staticClass:"note"},[e._v("例：https://www.x23us.com/html/<{subBookId}>/<{bookId}>/")])],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"章节名称采集规则",prop:"rules.article_title"}},[l("el-input",{attrs:{placeholder:"请输入章节名称采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.article_title,callback:function(t){e.$set(e.collectObj.rules,"article_title",t)},expression:"collectObj.rules.article_title"}}),l("p",{staticClass:"note"},[e._v('例：<td class="L"><a href="$.html">!!!!</a></td>')])],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"章节序号采集规则",prop:"rules.article_id"}},[l("el-input",{attrs:{placeholder:"请输入章节序号采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.article_id,callback:function(t){e.$set(e.collectObj.rules,"article_id",t)},expression:"collectObj.rules.article_id"}}),l("p",{staticClass:"note"},[e._v('例：<td class="L"><a href="$$$$.html">!</a></td>')])],1)],1)],1)],1),l("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[e._v("章节内容页面采集规则")])]),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"章节内容页面地址",prop:"rules.article_url"}},[l("el-input",{attrs:{placeholder:"请输入章节内容页面地址",rows:4},model:{value:e.collectObj.rules.article_url,callback:function(t){e.$set(e.collectObj.rules,"article_url",t)},expression:"collectObj.rules.article_url"}}),l("p",{staticClass:"note"},[e._v("例：https://www.x23us.com/html/<{subBookId}>/<{bookId}>/<{articleId}>.html")])],1)],1)],1),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"章节内容采集规则",prop:"rules.content"}},[l("el-input",{attrs:{placeholder:"请输入章节内容采集规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.content,callback:function(t){e.$set(e.collectObj.rules,"content",t)},expression:"collectObj.rules.content"}}),l("p",{staticClass:"note"},[e._v('例：</p><dd id="contents">****</dd><div class="adhtml"><script>show_htm2();<\/script></div>')])],1)],1),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"内容替换规则"}},[l("el-col",{attrs:{span:11}},[l("el-input",{attrs:{placeholder:"请输入章节内容过滤规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.content_filter,callback:function(t){e.$set(e.collectObj.rules,"content_filter",t)},expression:"collectObj.rules.content_filter"}}),l("p",{staticClass:"note"},[e._v("例：顶点|x23us")])],1),l("el-col",{staticClass:"text-center",attrs:{span:2}},[e._v("-")]),l("el-col",{attrs:{span:11}},[l("el-input",{attrs:{placeholder:"请输入章节内容替换规则",type:"textarea",rows:4},model:{value:e.collectObj.rules.content_replace,callback:function(t){e.$set(e.collectObj.rules,"content_replace",t)},expression:"collectObj.rules.content_replace"}}),l("p",{staticClass:"note"},[e._v("例：woodlsy|woodlsy")])],1)],1)],1)],1)],1),l("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],staticClass:"box-card"},[l("div",{staticClass:"text-center"},[l("el-button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("保存")]),l("el-button",{on:{click:function(t){return e.$router.go(-1)}}},[e._v("取消")])],1)])],1)],1)},a=[],o=l("b637"),s={name:"Edit",data:function(){return{formLoading:!1,collectObj:{collect_status:1,iconv:"GBK",rules:{}},collectId:0,rules:{name:[{required:!0,message:"请填写采集节点名称",trigger:"blur"}],host:[{required:!0,message:"请填写目标网址",trigger:"blur"}],iconv:[{required:!0,message:"请选择目标网站编码",trigger:"change"}],collect_status:[{required:!0,message:"请选择采集状态",trigger:"change"}],rules:{book_url:[{required:!0,message:"请填写小说信息页面地址",trigger:"blur"}],name:[{required:!0,message:"请填写小说名称采集规则",trigger:"blur"}],author:[{required:!0,message:"请填写小说作者采集规则",trigger:"blur"}],chapter_url:[{required:!0,message:"请填写小说目录页面地址",trigger:"blur"}],article_title:[{required:!0,message:"请填写章节名称采集规则",trigger:"blur"}],article_id:[{required:!0,message:"请填写章节序号采集规则",trigger:"blur"}],article_url:[{required:!0,message:"请填写章节内容页面地址",trigger:"blur"}],content:[{required:!0,message:"请填写章节内容采集规则",trigger:"blur"}]}}}},created:function(){this.$route.query.id&&this.$route.query.id>0&&(this.collectId=this.$route.query.id,this.getInfo())},methods:{getInfo:function(){var e=this;Object(o["d"])({id:this.collectId}).then((function(t){e.collectObj=t.data}))},handleSave:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return console.log("error submit!!"),!1;Object(o["h"])(e.collectObj).then((function(t){e.$message.success("保存成功"),setTimeout((function(){e.$router.push("/novel/collect/list")}),2e3)}))}))}}},c=s,i=(l("37e84"),l("2877")),n=Object(i["a"])(c,r,a,!1,null,"f88fc14e",null);t["default"]=n.exports},"37e84":function(e,t,l){"use strict";l("d465")},b637:function(e,t,l){"use strict";l.d(t,"e",(function(){return a})),l.d(t,"c",(function(){return o})),l.d(t,"a",(function(){return s})),l.d(t,"f",(function(){return c})),l.d(t,"d",(function(){return i})),l.d(t,"h",(function(){return n})),l.d(t,"b",(function(){return u})),l.d(t,"g",(function(){return p})),l.d(t,"i",(function(){return d}));var r=l("b775");function a(e){return Object(r["a"])({url:"/novel/collect/list",method:"get",params:e})}function o(e){return Object(r["a"])({url:"/novel/collect/article",method:"get",params:e})}function s(e){return Object(r["a"])({url:"/novel/collect/confirmArticle",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/novel/collect/test",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/novel/collect/info",method:"get",params:e})}function n(e){return Object(r["a"])({url:"/novel/collect/save",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/novel/collect/delete",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/novel/collect/collectBookInfo",method:"post",data:e})}function d(e){return Object(r["a"])({url:"/novel/collect/collectSaveBookInfo",method:"post",data:e})}},d465:function(e,t,l){}}]);