import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as t,f as e}from"./app-Cbix2SPG.js";const s={},l=e(`<h1 id="javascript-表单属性、方法" tabindex="-1"><a class="header-anchor" href="#javascript-表单属性、方法"><span>JavaScript 表单属性、方法</span></a></h1><h2 id="对象属性-方法" tabindex="-1"><a class="header-anchor" href="#对象属性-方法"><span>对象属性，方法</span></a></h2><ul><li>acceptCharset：服务器能够处理的字符集，等价于 HTML 中的 accept-charset</li><li>action：接受请求的 URL，等价于 HTML 中的 action 特性</li><li>elements：表单中所有控件（HTMLCollection）</li><li>enctype：请求编码类型</li><li>length：表单中控件的数量</li><li>method：要发送的 HTTP 请求类型，通常是 get、post</li><li>name：表单名称</li><li>target：用于发送请求和接收响应的窗口名称</li><li>reset()：讲所有表单域重置为默认值</li><li>submit()：提交表单</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">novalidate</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>novalidate <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 禁用验证</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="获取元素" tabindex="-1"><a class="header-anchor" href="#获取元素"><span>获取元素</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 获取页面中的第一个表单</span>
document<span class="token punctuation">.</span>forms<span class="token punctuation">[</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 获取页面中的 name 为 username</span>

form<span class="token punctuation">.</span>pass<span class="token punctuation">;</span> <span class="token comment">// 获取表单中 name 属性为 pass</span>
form<span class="token punctuation">.</span>elements<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 取得表单中第一个字段</span>
form<span class="token punctuation">.</span>elements<span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token string">&#39;textbox1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">// 取得 name 为 textbox1 的字段</span>
form<span class="token punctuation">.</span>elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span><span class="token comment">// 取得表单包含字段的数量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件"><span>事件</span></a></h2><p>事件也对应的有方法，form.submit() 为提交</p><ul><li>表单事件 <ul><li>input：value 值发生改变</li><li>onpropertychange: IE value 值改变时</li><li>blur：失去焦点</li><li>focus：获取焦点</li><li>select：输入框中文本被选中触发</li><li>change：当输入框被修改 且 失去焦点</li></ul></li></ul><p>必须添加到 form 表单元素上</p><ul><li>submit：点击 submit 按钮才触发</li><li>reset：点击 reset 按钮才触发</li></ul><h2 id="字段属性" tabindex="-1"><a class="header-anchor" href="#字段属性"><span>字段属性</span></a></h2><p>共有字段属性</p><ul><li>disabled：布尔值，表示当前字段是否被禁用</li><li>form：指向当前字段所在的表单，只读</li><li>name：当前字段名称</li><li>readOnly：布尔值，表示当前字段是否只读</li><li>tabIndex：表示当前字段 tab 序号</li><li>type：当前字段类型</li><li>value：当前字段将被提交给服务器的值</li></ul>`,15),i=[l];function c(p,o){return n(),t("div",null,i)}const m=a(s,[["render",c],["__file","属性方法事件.html.vue"]]),d=JSON.parse('{"path":"/posts/javascript/form/%E5%B1%9E%E6%80%A7%E6%96%B9%E6%B3%95%E4%BA%8B%E4%BB%B6.html","title":"JavaScript 表单属性、方法","lang":"zh-CN","frontmatter":{"description":"JavaScript 表单属性、方法 对象属性，方法 acceptCharset：服务器能够处理的字符集，等价于 HTML 中的 accept-charset action：接受请求的 URL，等价于 HTML 中的 action 特性 elements：表单中所有控件（HTMLCollection） enctype：请求编码类型 length：表单中...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/form/%E5%B1%9E%E6%80%A7%E6%96%B9%E6%B3%95%E4%BA%8B%E4%BB%B6.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/form/%E5%B1%9E%E6%80%A7%E6%96%B9%E6%B3%95%E4%BA%8B%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript 表单属性、方法"}],["meta",{"property":"og:description","content":"JavaScript 表单属性、方法 对象属性，方法 acceptCharset：服务器能够处理的字符集，等价于 HTML 中的 accept-charset action：接受请求的 URL，等价于 HTML 中的 action 特性 elements：表单中所有控件（HTMLCollection） enctype：请求编码类型 length：表单中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 表单属性、方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"对象属性，方法","slug":"对象属性-方法","link":"#对象属性-方法","children":[]},{"level":2,"title":"获取元素","slug":"获取元素","link":"#获取元素","children":[]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[]},{"level":2,"title":"字段属性","slug":"字段属性","link":"#字段属性","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"posts/javascript/form/属性方法事件.md","localizedDate":"2023年5月3日","excerpt":"\\n<h2>对象属性，方法</h2>\\n<ul>\\n<li>acceptCharset：服务器能够处理的字符集，等价于 HTML 中的 accept-charset</li>\\n<li>action：接受请求的 URL，等价于 HTML 中的 action 特性</li>\\n<li>elements：表单中所有控件（HTMLCollection）</li>\\n<li>enctype：请求编码类型</li>\\n<li>length：表单中控件的数量</li>\\n<li>method：要发送的 HTTP 请求类型，通常是 get、post</li>\\n<li>name：表单名称</li>\\n<li>target：用于发送请求和接收响应的窗口名称</li>\\n<li>reset()：讲所有表单域重置为默认值</li>\\n<li>submit()：提交表单</li>\\n</ul>","autoDesc":true}');export{m as comp,d as data};
