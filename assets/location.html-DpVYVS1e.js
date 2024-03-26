import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c,d as n,e as a,a as e,f as l}from"./app-Cbix2SPG.js";const i={},r=n("h1",{id:"javascript-location-url-地址对象",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript-location-url-地址对象"},[n("span",null,"JavaScript location URL 地址对象")])],-1),u=n("p",null,"完整的 URL 地址：",-1),m=n("p",null,"协议：// 主机名：端口号 /路径/ ？查询字符串 #锚点",-1),d={href:"https://127.0.0.1:5500/javascript.html/?a=ssa&bd=asd#aaa",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>location<span class="token punctuation">.</span>hash <span class="token comment">// #aaa      哈希值</span>
location<span class="token punctuation">.</span>host <span class="token comment">// 127.0.0.1:5500 域名+端口</span>
location<span class="token punctuation">.</span>hostname <span class="token comment">// 127.0.0.1  域名</span>
location<span class="token punctuation">.</span>href <span class="token comment">// https:127.0.0.1:5500/?a=ssa&amp;bd=asd#aaa url 地址 toString() 也能返回这个值</span>
location<span class="token punctuation">.</span>origin <span class="token comment">// https:127.0.0.1:5500 文件来源地址</span>
location<span class="token punctuation">.</span>pathname <span class="token comment">// /JavaScript.html 文件路径</span>
location<span class="token punctuation">.</span>port <span class="token comment">// 5500 端口</span>
location<span class="token punctuation">.</span>protocol <span class="token comment">// https: 协议</span>
location<span class="token punctuation">.</span>search <span class="token comment">// ?a=ssa&amp;bd=asd 表单提交的数据</span>
location<span class="token punctuation">.</span>port <span class="token operator">=</span> <span class="token number">8080</span><span class="token punctuation">;</span> <span class="token comment">// 可以用这样的方法修改上面的值，除了 hash 值外，页面都会以新的 URL 重新加载</span>

location <span class="token operator">=</span> <span class="token string">&#39;http:// www.163.com&#39;</span><span class="token punctuation">;</span>
location<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token comment">// 在当前窗口跳转到这个URL</span>
location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;http:// baidu.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">*</span><span class="token comment">// 在当前窗口替换成新的 URL 用户将不能回到前一个页面*</span>
location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 重新加载（可能从缓存中加载）</span>
location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 重新加载（从服务器重新加载）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(v,b){const s=o("ExternalLinkIcon");return p(),c("div",null,[r,u,m,n("p",null,[a("如："),n("a",d,[a("https://127.0.0.1:5500/javascript.html/?a=ssa&bd=asd#aaa"),e(s)])]),k])}const f=t(i,[["render",h],["__file","location.html.vue"]]),j=JSON.parse(`{"path":"/posts/javascript/bom/location.html","title":"JavaScript location URL 地址对象","lang":"zh-CN","frontmatter":{"description":"JavaScript location URL 地址对象 完整的 URL 地址： 协议：// 主机名：端口号 /路径/ ？查询字符串 #锚点 如：https://127.0.0.1:5500/javascript.html/?a=ssa&bd=asd#aaa","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/bom/location.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/bom/location.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript location URL 地址对象"}],["meta",{"property":"og:description","content":"JavaScript location URL 地址对象 完整的 URL 地址： 协议：// 主机名：端口号 /路径/ ？查询字符串 #锚点 如：https://127.0.0.1:5500/javascript.html/?a=ssa&bd=asd#aaa"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript location URL 地址对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":0.78,"words":233},"filePathRelative":"posts/javascript/bom/location.md","localizedDate":"2023年5月3日","excerpt":"\\n<p>完整的 URL 地址：</p>\\n<p>协议：// 主机名：端口号 /路径/ ？查询字符串 #锚点</p>\\n<p>如：<a href=\\"https://127.0.0.1:5500/javascript.html/?a=ssa&amp;bd=asd#aaa\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://127.0.0.1:5500/javascript.html/?a=ssa&amp;bd=asd#aaa</a></p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>location<span class=\\"token punctuation\\">.</span>hash <span class=\\"token comment\\">// #aaa      哈希值</span>\\nlocation<span class=\\"token punctuation\\">.</span>host <span class=\\"token comment\\">// 127.0.0.1:5500 域名+端口</span>\\nlocation<span class=\\"token punctuation\\">.</span>hostname <span class=\\"token comment\\">// 127.0.0.1  域名</span>\\nlocation<span class=\\"token punctuation\\">.</span>href <span class=\\"token comment\\">// https:127.0.0.1:5500/?a=ssa&amp;bd=asd#aaa url 地址 toString() 也能返回这个值</span>\\nlocation<span class=\\"token punctuation\\">.</span>origin <span class=\\"token comment\\">// https:127.0.0.1:5500 文件来源地址</span>\\nlocation<span class=\\"token punctuation\\">.</span>pathname <span class=\\"token comment\\">// /JavaScript.html 文件路径</span>\\nlocation<span class=\\"token punctuation\\">.</span>port <span class=\\"token comment\\">// 5500 端口</span>\\nlocation<span class=\\"token punctuation\\">.</span>protocol <span class=\\"token comment\\">// https: 协议</span>\\nlocation<span class=\\"token punctuation\\">.</span>search <span class=\\"token comment\\">// ?a=ssa&amp;bd=asd 表单提交的数据</span>\\nlocation<span class=\\"token punctuation\\">.</span>port <span class=\\"token operator\\">=</span> <span class=\\"token number\\">8080</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 可以用这样的方法修改上面的值，除了 hash 值外，页面都会以新的 URL 重新加载</span>\\n\\nlocation <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'http:// www.163.com'</span><span class=\\"token punctuation\\">;</span>\\nlocation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">assign</span><span class=\\"token punctuation\\">(</span>url<span class=\\"token punctuation\\">)</span><span class=\\"token comment\\">// 在当前窗口跳转到这个URL</span>\\nlocation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">replace</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"http:// baidu.com\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token operator\\">*</span><span class=\\"token comment\\">// 在当前窗口替换成新的 URL 用户将不能回到前一个页面*</span>\\nlocation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">reload</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 重新加载（可能从缓存中加载）</span>\\nlocation<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">reload</span><span class=\\"token punctuation\\">(</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token comment\\">// 重新加载（从服务器重新加载）</span>\\n</code></pre></div>","autoDesc":true}`);export{f as comp,j as data};