import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as e,c as p,d as n,e as c,a as o,f as i}from"./app-Cbix2SPG.js";const l={},r=i(`<h1 id="说说你在-react-项目是如何捕获错误的" tabindex="-1"><a class="header-anchor" href="#说说你在-react-项目是如何捕获错误的"><span>说说你在 React 项目是如何捕获错误的？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/8db1b5c0-f288-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>错误在我们日常编写代码是非常常见的</p><p>举个例子，在<code>react</code>项目中去编写组件内<code>JavaScript</code>代码错误会导致 <code>React</code> 的内部状态被破坏，导致整个应用崩溃，这是不应该出现的现象</p><p>作为一个框架，<code>react</code>也有自身对于错误的处理的解决方案</p><h2 id="二、如何做" tabindex="-1"><a class="header-anchor" href="#二、如何做"><span>二、如何做</span></a></h2><p>为了解决出现的错误导致整个应用崩溃的问题，<code>react16</code>引用了<strong>错误边界</strong>新的概念</p><p>错误边界是一种 <code>React</code> 组件，这种组件可以捕获发生在其子组件树任何位置的 <code>JavaScript</code> 错误，并打印这些错误，同时展示降级 <code>UI</code>，而并不会渲染那些发生崩溃的子组件树</p><p>错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误</p><p>形成错误边界组件的两个条件：</p><ul><li>使用了 static getDerivedStateFromError()</li><li>使用了 componentDidCatch()</li></ul><p>抛出错误后，请使用 <code>static getDerivedStateFromError()</code> 渲染备用 UI ，使用 <code>componentDidCatch()</code> 打印错误信息，如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 更新 state 使下一次渲染能够显示降级后的 UI</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 你同样可以将错误日志上报给服务器</span>
    <span class="token function">logErrorToMyService</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 你可以自定义降级后的 UI 并渲染</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Something went wrong.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以把自身组件的作为错误边界的子组件，如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyWidget</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ErrorBoundary</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这些情况无法捕获到异常：</p><ul><li>事件处理</li><li>异步代码</li><li>服务端渲染</li><li>自身抛出来的错误</li></ul><p>在<code>react 16</code>版本之后，会把渲染期间发生的所有错误打印到控制台</p><p>除了错误信息和 JavaScript 栈外，React 16 还提供了组件栈追踪。现在你可以准确地查看发生在组件树内的错误信息：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/7b2b51d0-f289-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到在错误信息下方文字中存在一个组件栈，便于我们追踪错误</p><p>对于错误边界无法捕获的异常，如事件处理过程中发生问题并不会捕获到，是因为其不会在渲染期间触发，并不会导致渲染时候问题</p><p>这种情况可以使用<code>js</code>的<code>try...catch...</code>语法，如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// 执行操作，如有错误则会抛出</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Caught an error.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click Me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外还可以通过监听<code>onerror</code>事件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,28),u={href:"https://zh-hans.reactjs.org/docs/error-boundaries.html",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const s=t("ExternalLinkIcon");return e(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[c("https://zh-hans.reactjs.org/docs/error-boundaries.html"),o(s)])])])])}const h=a(l,[["render",d],["__file","capture_error.html.vue"]]),b=JSON.parse('{"path":"/posts/interview/React/capture_error.html","title":"说说你在 React 项目是如何捕获错误的？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说你在 React 项目是如何捕获错误的？","footer":"说说你在 React 项目是如何捕获错误的？","order":27,"star":27,"date":"2023-04-14T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","React"],"tag":["interview","React"],"shortTitle":"前端物语|面试物语-说说你在 React 项目是如何捕获错误的？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说你在 React 项目是如何捕获错误的？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/React/capture_error.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/React/capture_error.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说你在 React 项目是如何捕获错误的？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说你在 React 项目是如何捕获错误的？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说你在 React 项目是如何捕获错误的？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2023-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说你在 React 项目是如何捕获错误的？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/8db1b5c0-f288-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/7b2b51d0-f289-11eb-ab90-d9ae814b240d.png\\"],\\"datePublished\\":\\"2023-04-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、如何做","slug":"二、如何做","link":"#二、如何做","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":2.68,"words":805},"filePathRelative":"posts/interview/React/capture_error.md","localizedDate":"2023年4月14日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/8db1b5c0-f288-11eb-85f6-6fac77c0c9b3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>错误在我们日常编写代码是非常常见的</p>\\n<p>举个例子，在<code>react</code>项目中去编写组件内<code>JavaScript</code>代码错误会导致 <code>React</code> 的内部状态被破坏，导致整个应用崩溃，这是不应该出现的现象</p>"}');export{h as comp,b as data};