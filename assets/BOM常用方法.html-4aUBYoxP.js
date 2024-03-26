import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Cbix2SPG.js";const e="/assets/BOM-BO0xdVsE.png",p={},o=t('<h1 id="javascript-bom-常用方法" tabindex="-1"><a class="header-anchor" href="#javascript-bom-常用方法"><span>JavaScript BOM 常用方法</span></a></h1><figure><img src="'+e+`" alt="BOM" tabindex="0" loading="lazy"><figcaption>BOM</figcaption></figure><h2 id="系统对话框" tabindex="-1"><a class="header-anchor" href="#系统对话框"><span>系统对话框</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;确定？&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 true false</span>
<span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;输入文本&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;默认文本&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回输入的值，取消返回 null</span>
window<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印对话框</span>
window<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查找对话框</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="console-time" tabindex="-1"><a class="header-anchor" href="#console-time"><span>console.time()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;test1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;test1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试从上一个 test1 到这行代码运行所用的时间</p><h2 id="open-及-close" tabindex="-1"><a class="header-anchor" href="#open-及-close"><span>open 及 close</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token string">&#39;新窗口命名&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;新窗口尺寸&#39;</span>，<span class="token string">&#39;是否替换当前历史记录 boolean 值&#39;</span><span class="token punctuation">)</span>
<span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 关闭当前页面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[o];function i(l,u){return s(),a("div",null,c)}const m=n(p,[["render",i],["__file","BOM常用方法.html.vue"]]),k=JSON.parse(`{"path":"/posts/javascript/bom/BOM%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95.html","title":"JavaScript BOM 常用方法","lang":"zh-CN","frontmatter":{"description":"JavaScript BOM 常用方法 BOMBOM 系统对话框 console.time() 测试从上一个 test1 到这行代码运行所用的时间 open 及 close","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/bom/BOM%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/bom/BOM%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript BOM 常用方法"}],["meta",{"property":"og:description","content":"JavaScript BOM 常用方法 BOMBOM 系统对话框 console.time() 测试从上一个 test1 到这行代码运行所用的时间 open 及 close"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript BOM 常用方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"系统对话框","slug":"系统对话框","link":"#系统对话框","children":[{"level":3,"title":"console.time()","slug":"console-time","link":"#console-time","children":[]}]},{"level":2,"title":"open 及 close","slug":"open-及-close","link":"#open-及-close","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":0.41,"words":124},"filePathRelative":"posts/javascript/bom/BOM常用方法.md","localizedDate":"2023年5月3日","excerpt":"\\n<figure><figcaption>BOM</figcaption></figure>\\n<h2>系统对话框</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token function\\">alert</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'hello'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">confirm</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'确定？'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 返回 true false</span>\\n<span class=\\"token function\\">prompt</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'输入文本'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'默认文本'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 返回输入的值，取消返回 null</span>\\nwindow<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 打印对话框</span>\\nwindow<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">find</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 查找对话框</span>\\n</code></pre></div>","autoDesc":true}`);export{m as comp,k as data};
