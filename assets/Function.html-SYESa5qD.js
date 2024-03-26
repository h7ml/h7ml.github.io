import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as t}from"./app-Cbix2SPG.js";const p={},e=t(`<h1 id="javascript-function-函数对象-数据类型" tabindex="-1"><a class="header-anchor" href="#javascript-function-函数对象-数据类型"><span>JavaScript function 函数对象-数据类型</span></a></h1><ul><li>函数分类 <ul><li>普通命名函数</li><li>通过名字调用执行</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>事件处理函数 <ul><li>可以是匿名函数也可以是匿名函数，通过元素对象的事件触发来执行</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>构造函数 <ul><li>通过 new 运算符来执行</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>回调函数 <ul><li>在主函数中满足一定条件调用执行 匿名函数也可以是命名函数</li></ul></li><li>表达式函数：将一个函数 赋值给一个变量 通过函数名的调用执行</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>匿名函数：闭包</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;mark&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;mark&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者</span>
<span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;mark&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="callee-与-caller" tabindex="-1"><a class="header-anchor" href="#callee-与-caller"><span>callee 与 caller</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>callee<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前函数</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>caller<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 真正调用此函数的函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改变-this-指向" tabindex="-1"><a class="header-anchor" href="#改变-this-指向"><span>改变 this 指向</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 多个参数</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 两个参数，第二个为数组</span>
<span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 与 call 一样，返回的是函数本身</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意第一个参数传 null 为不改变 this 指向 :::</p><h2 id="函数的-length-属性" tabindex="-1"><a class="header-anchor" href="#函数的-length-属性"><span>函数的 length 属性</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span>
    <span class="token comment">// 1</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span>
    <span class="token comment">// 0</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span>
    <span class="token comment">// 2 有一个默认值， 3-1 = 2</span>

    <span class="token comment">// 数值为参数的长度，但指定了默认值 length 属性将失真</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span>
    <span class="token comment">// 0</span>

    <span class="token comment">// 如果设置了默认值的参数不是尾参数，那么 length 属性也不再计入后面的参数了。</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span>
    <span class="token comment">// 0</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="name-属性" tabindex="-1"><a class="header-anchor" href="#name-属性"><span>name 属性</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
foo<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span>
  <span class="token comment">// &quot;foo&quot;</span>
  <span class="token comment">// 构造函数 name 为构造出来对象下的值</span>
  <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,16),c=[e];function o(l,i){return a(),s("div",null,c)}const k=n(p,[["render",o],["__file","Function.html.vue"]]),d=JSON.parse('{"path":"/posts/javascript/types/Function.html","title":"JavaScript function 函数对象-数据类型","lang":"zh-CN","frontmatter":{"description":"JavaScript function 函数对象-数据类型 函数分类 普通命名函数 通过名字调用执行 事件处理函数 可以是匿名函数也可以是匿名函数，通过元素对象的事件触发来执行 构造函数 通过 new 运算符来执行 回调函数 在主函数中满足一定条件调用执行 匿名函数也可以是命名函数 表达式函数：将一个函数 赋值给一个变量 通过函数名的调用执行 匿名函数...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/types/Function.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/types/Function.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript function 函数对象-数据类型"}],["meta",{"property":"og:description","content":"JavaScript function 函数对象-数据类型 函数分类 普通命名函数 通过名字调用执行 事件处理函数 可以是匿名函数也可以是匿名函数，通过元素对象的事件触发来执行 构造函数 通过 new 运算符来执行 回调函数 在主函数中满足一定条件调用执行 匿名函数也可以是命名函数 表达式函数：将一个函数 赋值给一个变量 通过函数名的调用执行 匿名函数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript function 函数对象-数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"callee 与 caller","slug":"callee-与-caller","link":"#callee-与-caller","children":[]},{"level":2,"title":"改变 this 指向","slug":"改变-this-指向","link":"#改变-this-指向","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.37,"words":410},"filePathRelative":"posts/javascript/types/Function.md","localizedDate":"2023年5月3日","excerpt":"\\n<ul>\\n<li>函数分类\\n<ul>\\n<li>普通命名函数</li>\\n<li>通过名字调用执行</li>\\n</ul>\\n</li>\\n</ul>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{k as comp,d as data};