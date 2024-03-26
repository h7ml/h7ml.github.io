import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,f as s}from"./app-Cbix2SPG.js";const e={},o=s(`<h1 id="javascript-es6-iterator-迭代器" tabindex="-1"><a class="header-anchor" href="#javascript-es6-iterator-迭代器"><span>JavaScript ES6 Iterator 迭代器</span></a></h1><p>核心概念：</p><ol><li>迭代器是一个统一的接口，作用是使各种数据结构可被便捷的访问</li><li>是 Symbol.iterator 下的方法实现。提供这种接口的有 Array、String、arguments、Map、Set、Dom 元素（正在进行中）。可以被 for...of 遍历</li><li>Array 下有 Symbol 属性，所以<code>arr[Symbol.iterator]()</code>调用，返回 Iterator 对象</li><li>iterator 对象下 next 方法单次调用方法<code>{value: &#39;本次遍历的值&#39;, done: 是否遍历结束，返回 true/false }</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;zero&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> it <span class="token operator">=</span> items<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: &quot;zero&quot;, done: false}</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: &quot;one&quot;, done: false}</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: &quot;two&quot;, done: false}</span>
it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {value: undefined, done: true}</span>

<span class="token comment">// 正常运行</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 部署一个Iterator接口</span>
obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function c(i,r){return a(),t("div",null,p)}const m=n(e,[["render",c],["__file","Iterator.html.vue"]]),d=JSON.parse(`{"path":"/posts/ecmascript/Iterator.html","title":"JavaScript ES6 Iterator 迭代器","lang":"zh-CN","frontmatter":{"description":"JavaScript ES6 Iterator 迭代器 核心概念： 迭代器是一个统一的接口，作用是使各种数据结构可被便捷的访问 是 Symbol.iterator 下的方法实现。提供这种接口的有 Array、String、arguments、Map、Set、Dom 元素（正在进行中）。可以被 for...of 遍历 Array 下有 Symbol 属性...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/ecmascript/Iterator.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/ecmascript/Iterator.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript ES6 Iterator 迭代器"}],["meta",{"property":"og:description","content":"JavaScript ES6 Iterator 迭代器 核心概念： 迭代器是一个统一的接口，作用是使各种数据结构可被便捷的访问 是 Symbol.iterator 下的方法实现。提供这种接口的有 Array、String、arguments、Map、Set、Dom 元素（正在进行中）。可以被 for...of 遍历 Array 下有 Symbol 属性..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript ES6 Iterator 迭代器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"posts/ecmascript/Iterator.md","localizedDate":"2023年5月3日","excerpt":"\\n<p>核心概念：</p>\\n<ol>\\n<li>迭代器是一个统一的接口，作用是使各种数据结构可被便捷的访问</li>\\n<li>是 Symbol.iterator 下的方法实现。提供这种接口的有 Array、String、arguments、Map、Set、Dom 元素（正在进行中）。可以被 for...of 遍历</li>\\n<li>Array 下有 Symbol 属性，所以<code>arr[Symbol.iterator]()</code>调用，返回 Iterator 对象</li>\\n<li>iterator 对象下 next 方法单次调用方法<code>{value: '本次遍历的值', done: 是否遍历结束，返回 true/false }</code></li>\\n</ol>","autoDesc":true}`);export{m as comp,d as data};
