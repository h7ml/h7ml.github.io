import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as t}from"./app-Cbix2SPG.js";const p={},e=t(`<h1 id="javascript-es6-async-函数" tabindex="-1"><a class="header-anchor" href="#javascript-es6-async-函数"><span>JavaScript ES6 async 函数</span></a></h1><ol><li>async 函数返回 Promise 对象，用同步流程来表达异步操作</li><li>虽然返回的是 Promise 对象，但不能在 async 函数中调用 resolve，reject 函数</li><li>async 可以单独使用，await 只能在 async 函数中使用</li><li>调用 async 函数会立即执行，遇到 await 关键字会暂停执行，await 后的指向完成后，async 函数接着执行。</li><li>如果 await 后的异步需要时间，await 下一行会接着执行，导致 await 的结果比下一行代码后得到</li><li>解决异步需要时间的问题，await 等待的是 Promise 的结果。所以 await 后面配合 Promise 执行异步函数，但 await 不能处理 Promise 失败后的结果</li><li>解决失败结果方法一：await prm().catch(e =&gt; {}); 阅读不方便</li><li>解决方法二 ： 在 prm() 结果中不管成功还是失败,都调用 resolve 方法,成功传[null,数据]，失败传 [err]; await 执行后 [e,d]=await prm(); 结构判断 e 是否出错</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">await</span> 异步函数<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ti</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;异步结果&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">ti</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 里面异步函数 2 秒后执行</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这里会比上面await先输出&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token punctuation">[</span>e<span class="token punctuation">,</span> data<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">prm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 发生了错误</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;promise执行完后才执行这行代码&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">prm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;成功&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;失败了&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function o(i,l){return a(),s("div",null,c)}const k=n(p,[["render",o],["__file","async.html.vue"]]),d=JSON.parse('{"path":"/posts/ecmascript/async.html","title":"JavaScript ES6 async 函数","lang":"zh-CN","frontmatter":{"description":"JavaScript ES6 async 函数 async 函数返回 Promise 对象，用同步流程来表达异步操作 虽然返回的是 Promise 对象，但不能在 async 函数中调用 resolve，reject 函数 async 可以单独使用，await 只能在 async 函数中使用 调用 async 函数会立即执行，遇到 await 关键字会...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/ecmascript/async.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/ecmascript/async.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript ES6 async 函数"}],["meta",{"property":"og:description","content":"JavaScript ES6 async 函数 async 函数返回 Promise 对象，用同步流程来表达异步操作 虽然返回的是 Promise 对象，但不能在 async 函数中调用 resolve，reject 函数 async 可以单独使用，await 只能在 async 函数中使用 调用 async 函数会立即执行，遇到 await 关键字会..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript ES6 async 函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.19,"words":356},"filePathRelative":"posts/ecmascript/async.md","localizedDate":"2023年5月3日","excerpt":"\\n<ol>\\n<li>async 函数返回 Promise 对象，用同步流程来表达异步操作</li>\\n<li>虽然返回的是 Promise 对象，但不能在 async 函数中调用 resolve，reject 函数</li>\\n<li>async 可以单独使用，await 只能在 async 函数中使用</li>\\n<li>调用 async 函数会立即执行，遇到 await 关键字会暂停执行，await 后的指向完成后，async 函数接着执行。</li>\\n<li>如果 await 后的异步需要时间，await 下一行会接着执行，导致 await 的结果比下一行代码后得到</li>\\n<li>解决异步需要时间的问题，await 等待的是 Promise 的结果。所以 await 后面配合 Promise 执行异步函数，但 await 不能处理 Promise 失败后的结果</li>\\n<li>解决失败结果方法一：await prm().catch(e =&gt; {}); 阅读不方便</li>\\n<li>解决方法二 ： 在 prm() 结果中不管成功还是失败,都调用 resolve 方法,成功传[null,数据]，失败传 [err]; await 执行后 [e,d]=await prm(); 结构判断 e 是否出错</li>\\n</ol>","autoDesc":true}');export{k as comp,d as data};
