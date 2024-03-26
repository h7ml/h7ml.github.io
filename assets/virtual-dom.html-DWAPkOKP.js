import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-Cbix2SPG.js";const o={},t=e(`<h2 id="virtual-dom" tabindex="-1"><a class="header-anchor" href="#virtual-dom"><span>Virtual DOM</span></a></h2><p>要知道渲染<code>真实DOM</code>的开销是很大的，比如有时候我们修改了某个数据，<strong>如果直接渲染到真实 dom 上会引起整个 dom 树的重绘和重排</strong>，有没有可能我们只更新我们修改的那一小块 dom 而不要更新整个 dom 呢？</p><p><code>diff算法</code>能够帮助我们。</p><p>我们先根据真实 DOM 生成一颗<code>virtual DOM</code>，当<code>virtual DOM</code>某个节点的数据改变后会生成一个新的<code>Vnode</code>，然后<code>Vnode</code>和<code>oldVnode</code>作对比，发现有不一样的地方就直接修改在真实的 DOM 上，然后使<code>oldVnode</code>的值为<code>Vnode</code>。</p><p><code>diff</code>的过程就是调用名为<code>patch</code>的函数，比较新旧节点，一边比较一边给<strong>真实的 DOM</strong>打补丁。</p><h3 id="virtual-dom-和真实-dom-的区别" tabindex="-1"><a class="header-anchor" href="#virtual-dom-和真实-dom-的区别"><span>virtual DOM 和真实 DOM 的区别</span></a></h3><p><code>virtual DOM</code>是将真实的 DOM 的数据抽取出来，以对象的形式模拟树形结构。比如 dom 是这样的：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的 virtual DOM（伪代码）：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;123&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（温馨提示：<code>VNode</code>和<code>oldVNode</code>都是对象，一定要记住）</p><ul><li><p>用 JavaScript 对象模拟 DOM</p></li><li><p>把此虚拟 DOM 转成真实 DOM 并插入页面中</p></li><li><p>如果有事件发生修改了虚拟 DOM</p></li><li><p>比较两棵虚拟 DOM 树的差异，得到差异对象</p></li><li><p>把差异对象应用到真正的 DOM 树上</p></li></ul><h3 id="vnode" tabindex="-1"><a class="header-anchor" href="#vnode"><span>VNode</span></a></h3><p>对于 <code>VNode</code>，相信大家一点都不陌生，用于表示虚拟节点，是实现<code>Virtual DOM</code>的一种方式。那么它究竟是怎样的呢？我们就去 Vue 源码里探讨一下。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">VNode</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> VNodeData <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">elm</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">ns</span><span class="token operator">:</span> string <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">context</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// rendered in this component&#39;s scope</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> string <span class="token operator">|</span> number <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">componentOptions</span><span class="token operator">:</span> VNodeComponentOptions <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">componentInstance</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// component instance</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> VNode <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// component placeholder node</span>

  <span class="token comment">// strictly internal</span>
  <span class="token literal-property property">raw</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// contains raw HTML? (server only)</span>
  <span class="token literal-property property">isStatic</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// hoisted static node</span>
  <span class="token literal-property property">isRootInsert</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// necessary for enter transition check</span>
  <span class="token literal-property property">isComment</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// empty comment placeholder?</span>
  <span class="token literal-property property">isCloned</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// is a cloned node?</span>
  <span class="token literal-property property">isOnce</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span> <span class="token comment">// is a v-once node?</span>
  <span class="token literal-property property">asyncFactory</span><span class="token operator">:</span> Function <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// async component factory function</span>
  <span class="token literal-property property">asyncMeta</span><span class="token operator">:</span> Object <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">isAsyncPlaceholder</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">ssrContext</span><span class="token operator">:</span> Object <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">fnContext</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// real context vm for functional nodes</span>
  <span class="token literal-property property">fnOptions</span><span class="token operator">:</span> <span class="token operator">?</span>ComponentOptions<span class="token punctuation">;</span> <span class="token comment">// for SSR caching</span>
  <span class="token literal-property property">fnScopeId</span><span class="token operator">:</span> <span class="token operator">?</span>string<span class="token punctuation">;</span> <span class="token comment">// functional scope id support</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token parameter">tag<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    data<span class="token operator">?</span><span class="token operator">:</span> VNodeData<span class="token punctuation">,</span>
    children<span class="token operator">?</span><span class="token operator">:</span> <span class="token operator">?</span>Array<span class="token operator">&lt;</span>VNode<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    text<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    elm<span class="token operator">?</span><span class="token operator">:</span> Node<span class="token punctuation">,</span>
    context<span class="token operator">?</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>
    componentOptions<span class="token operator">?</span><span class="token operator">:</span> VNodeComponentOptions<span class="token punctuation">,</span>
    asyncFactory<span class="token operator">?</span><span class="token operator">:</span> Function</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> tag<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> children<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>text <span class="token operator">=</span> text<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>elm <span class="token operator">=</span> elm<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ns <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> context<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnContext <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnOptions <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>fnScopeId <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>componentOptions <span class="token operator">=</span> componentOptions<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>raw <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isStatic <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isRootInsert <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isComment <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isCloned <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isOnce <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>asyncFactory <span class="token operator">=</span> asyncFactory<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>asyncMeta <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>isAsyncPlaceholder <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// DEPRECATED: alias for componentInstance for backwards compat.</span>
  <span class="token comment">/* istanbul ignore next */</span>
  <span class="token keyword">get</span> <span class="token function">child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Component <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>componentInstance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里千万不要因为 <code>VNode</code> 的这么属性而被吓到，或者咬紧牙去摸清楚每个属性的意义，其实，我们主要了解其几个核心的关键属性就差不多了，例如：</p><ul><li><code>tag</code> 属性即这个<code>vnode</code>的标签属性</li><li><code>data</code> 属性包含了最后渲染成真实 dom 节点后，节点上的<code>class</code>，<code>attribute</code>，<code>style</code>以及绑定的事件</li><li><code>children</code> 属性是<code>vnode</code>的子节点</li><li><code>text</code> 属性是文本属性</li><li><code>elm</code> 属性为这个<code>vnode</code>对应的真实 dom 节点</li><li><code>key</code> 属性是<code>vnode</code>的标记，在<code>diff</code>过程中可以提高<code>diff</code>的效率</li></ul><p><code>Virtual DOM</code> 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 <code>VNode</code> 的 create、diff、patch 等过程。</p>`,18),p=[t];function c(l,r){return s(),a("div",null,p)}const u=n(o,[["render",c],["__file","virtual-dom.html.vue"]]),k=JSON.parse('{"path":"/posts/vue/virtual-dom.html","title":"Virtual DOM","lang":"zh-CN","frontmatter":{"icon":"vue","order":3,"date":"2021-07-12T00:00:00.000Z","author":"h7ml","title":"Virtual DOM","category":"vue","tag":["vue","Virtual DOM"],"star":true,"lastUpdated":false,"description":"Virtual DOM 要知道渲染真实DOM的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实 dom 上会引起整个 dom 树的重绘和重排，有没有可能我们只更新我们修改的那一小块 dom 而不要更新整个 dom 呢？ diff算法能够帮助我们。 我们先根据真实 DOM 生成一颗virtual DOM，当virtual DOM某个节点的数...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/vue/virtual-dom.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/vue/virtual-dom.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"Virtual DOM"}],["meta",{"property":"og:description","content":"Virtual DOM 要知道渲染真实DOM的开销是很大的，比如有时候我们修改了某个数据，如果直接渲染到真实 dom 上会引起整个 dom 树的重绘和重排，有没有可能我们只更新我们修改的那一小块 dom 而不要更新整个 dom 呢？ diff算法能够帮助我们。 我们先根据真实 DOM 生成一颗virtual DOM，当virtual DOM某个节点的数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:tag","content":"Virtual DOM"}],["meta",{"property":"article:published_time","content":"2021-07-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Virtual DOM\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"Virtual DOM","slug":"virtual-dom","link":"#virtual-dom","children":[{"level":3,"title":"virtual DOM 和真实 DOM 的区别","slug":"virtual-dom-和真实-dom-的区别","link":"#virtual-dom-和真实-dom-的区别","children":[]},{"level":3,"title":"VNode","slug":"vnode","link":"#vnode","children":[]}]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":2.79,"words":836},"filePathRelative":"posts/vue/virtual-dom.md","localizedDate":"2021年7月12日","excerpt":"<h2>Virtual DOM</h2>\\n<p>要知道渲染<code>真实DOM</code>的开销是很大的，比如有时候我们修改了某个数据，<strong>如果直接渲染到真实 dom 上会引起整个 dom 树的重绘和重排</strong>，有没有可能我们只更新我们修改的那一小块 dom 而不要更新整个 dom 呢？</p>\\n<p><code>diff算法</code>能够帮助我们。</p>\\n<p>我们先根据真实 DOM 生成一颗<code>virtual DOM</code>，当<code>virtual DOM</code>某个节点的数据改变后会生成一个新的<code>Vnode</code>，然后<code>Vnode</code>和<code>oldVnode</code>作对比，发现有不一样的地方就直接修改在真实的 DOM 上，然后使<code>oldVnode</code>的值为<code>Vnode</code>。</p>","autoDesc":true}');export{u as comp,k as data};
