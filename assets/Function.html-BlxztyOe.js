import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Cbix2SPG.js";const p={},e=t(`<h1 id="javascript-es6-function-箭头函数" tabindex="-1"><a class="header-anchor" href="#javascript-es6-function-箭头函数"><span>JavaScript ES6 Function 箭头函数</span></a></h1><h2 id="传参" tabindex="-1"><a class="header-anchor" href="#传参"><span>传参</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 默认参数</span>
<span class="token comment">// 使用默认参数时，不能有同名形参</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age <span class="token operator">=</span> <span class="token number">17</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&#39;,&#39;</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// [1, 2]</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>values<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数"><span>箭头函数</span></a></h2><ul><li>与一般函数区别 <ul><li>先声明后使用</li><li>不能使用 arguments ,使用 ...rest 剩余运算符解决</li><li>不能 new 当做构造函数</li></ul></li><li>简写 <ul><li>只有一个形参时可以省略圆括号</li><li>只有一条语句，且把这条语句当做返回值时可以省略大括号</li></ul></li><li>this 指向 <ul><li>this 指向上一层函数的 this</li><li>箭头函数的当前调用者不能使用 call，apply、bind 改变 this 指向</li></ul></li><li>不适用场景 <ul><li>对象中的方法不适用箭头函数</li><li>DOM 绑定事件不适用箭头函数</li></ul></li></ul><h2 id="箭头函数不适用的场景" tabindex="-1"><a class="header-anchor" href="#箭头函数不适用的场景"><span>箭头函数不适用的场景</span></a></h2><ol><li>对象中的方法不能用箭头函数；</li><li>给 DOM 绑定事件时不能用箭头函数；</li></ol><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">usr</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>usr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>usr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    obj<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
    obj<span class="token punctuation">.</span><span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// btn.addEventListener(&#39;click&#39;, function() {</span>
    <span class="token comment">//     console.log(this);</span>
    <span class="token comment">// });</span>

    btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Function.html.vue"]]),d=JSON.parse(`{"path":"/posts/ecmascript/Function.html","title":"JavaScript ES6 Function 箭头函数","lang":"zh-CN","frontmatter":{"description":"JavaScript ES6 Function 箭头函数 传参 箭头函数 与一般函数区别 先声明后使用 不能使用 arguments ,使用 ...rest 剩余运算符解决 不能 new 当做构造函数 简写 只有一个形参时可以省略圆括号 只有一条语句，且把这条语句当做返回值时可以省略大括号 this 指向 this 指向上一层函数的 this 箭头函数...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/ecmascript/Function.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/ecmascript/Function.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript ES6 Function 箭头函数"}],["meta",{"property":"og:description","content":"JavaScript ES6 Function 箭头函数 传参 箭头函数 与一般函数区别 先声明后使用 不能使用 arguments ,使用 ...rest 剩余运算符解决 不能 new 当做构造函数 简写 只有一个形参时可以省略圆括号 只有一条语句，且把这条语句当做返回值时可以省略大括号 this 指向 this 指向上一层函数的 this 箭头函数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript ES6 Function 箭头函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"传参","slug":"传参","link":"#传参","children":[]},{"level":2,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]},{"level":2,"title":"箭头函数不适用的场景","slug":"箭头函数不适用的场景","link":"#箭头函数不适用的场景","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.04,"words":312},"filePathRelative":"posts/ecmascript/Function.md","localizedDate":"2023年5月3日","excerpt":"\\n<h2>传参</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 默认参数</span>\\n<span class=\\"token comment\\">// 使用默认参数时，不能有同名形参</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">name<span class=\\"token punctuation\\">,</span> age <span class=\\"token operator\\">=</span> <span class=\\"token number\\">17</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>name <span class=\\"token operator\\">+</span> <span class=\\"token string\\">','</span> <span class=\\"token operator\\">+</span> age<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">f</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\"><span class=\\"token operator\\">...</span>values</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// [1, 2]</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>values<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 2</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">f</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 2</span>\\n</code></pre></div>","autoDesc":true}`);export{r as comp,d as data};
