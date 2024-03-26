import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Cbix2SPG.js";const p={},e=t(`<h1 id="object-defineproperty-核心代码-自定义实现" tabindex="-1"><a class="header-anchor" href="#object-defineproperty-核心代码-自定义实现"><span>Object.defineproperty 核心代码 自定义实现</span></a></h1><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 触发更新视图</span>
<span class="token keyword">function</span> <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;视图更新&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 重新定义数组原型</span>
<span class="token keyword">const</span> oldArrayProperty <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token comment">// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型</span>
<span class="token keyword">const</span> arrProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>oldArrayProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;splice&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">methodName</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  arrProto<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 触发视图更新</span>
    oldArrayProperty<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Array.prototype.push.call(this, ...arguments)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 重新定义属性，监听起来</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 深度监听</span>
  <span class="token function">observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 核心 API</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">!==</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 深度监听</span>
        <span class="token function">observer</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 设置新值</span>
        <span class="token comment">// 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值</span>
        value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>

        <span class="token comment">// 触发更新视图</span>
        <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 监听对象属性</span>
<span class="token keyword">function</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> target <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> target <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不是对象或数组</span>
    <span class="token keyword">return</span> target<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 污染全局的 Array 原型</span>
  <span class="token comment">// Array.prototype.push = function () {</span>
  <span class="token comment">//     updateView()</span>
  <span class="token comment">//     ...</span>
  <span class="token comment">// }</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> arrProto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 重新定义各个属性（for in 也可以遍历数组）</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">defineReactive</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 准备数据</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;北京&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 需要深度监听</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 监听数据</span>
<span class="token function">observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 测试</span>
<span class="token comment">// data.name = &#39;lisi&#39;</span>
<span class="token comment">// data.age = 21</span>
<span class="token comment">// // console.log(&#39;age&#39;, data.age)</span>
<span class="token comment">// data.x = &#39;100&#39; // 新增属性，监听不到 —— 所以有 Vue.set</span>
<span class="token comment">// delete data.name // 删除属性，监听不到 —— 所有已 Vue.delete</span>
<span class="token comment">// data.info.address = &#39;上海&#39; // 深度监听</span>
data<span class="token punctuation">.</span>nums<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 监听数组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","Object.defineproperty.html.vue"]]),d=JSON.parse(`{"path":"/posts/vue/Object.defineproperty.html","title":"Object.defineproperty 核心代码 自定义实现","lang":"zh-CN","frontmatter":{"icon":"vue","order":1,"date":"2021-06-27T00:00:00.000Z","author":"h7ml","category":"vue","tag":"vue","star":true,"description":"Object.defineproperty 核心代码 自定义实现","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/vue/Object.defineproperty.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/vue/Object.defineproperty.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"Object.defineproperty 核心代码 自定义实现"}],["meta",{"property":"og:description","content":"Object.defineproperty 核心代码 自定义实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"vue"}],["meta",{"property":"article:published_time","content":"2021-06-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Object.defineproperty 核心代码 自定义实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-06-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.23,"words":368},"filePathRelative":"posts/vue/Object.defineproperty.md","localizedDate":"2021年6月27日","excerpt":"\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 触发更新视图</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">updateView</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'视图更新'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 重新定义数组原型</span>\\n<span class=\\"token keyword\\">const</span> oldArrayProperty <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Array</span><span class=\\"token punctuation\\">.</span>prototype<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型</span>\\n<span class=\\"token keyword\\">const</span> arrProto <span class=\\"token operator\\">=</span> Object<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">create</span><span class=\\"token punctuation\\">(</span>oldArrayProperty<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'push'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'pop'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'shift'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'unshift'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'splice'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">forEach</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">methodName</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  arrProto<span class=\\"token punctuation\\">[</span>methodName<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">updateView</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 触发视图更新</span>\\n    oldArrayProperty<span class=\\"token punctuation\\">[</span>methodName<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">call</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">...</span>arguments<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">// Array.prototype.push.call(this, ...arguments)</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 重新定义属性，监听起来</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">defineReactive</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">target<span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">,</span> value</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 深度监听</span>\\n  <span class=\\"token function\\">observer</span><span class=\\"token punctuation\\">(</span>value<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 核心 API</span>\\n  Object<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">defineProperty</span><span class=\\"token punctuation\\">(</span>target<span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> value<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">set</span><span class=\\"token punctuation\\">(</span>newValue<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>newValue <span class=\\"token operator\\">!==</span> value<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 深度监听</span>\\n        <span class=\\"token function\\">observer</span><span class=\\"token punctuation\\">(</span>newValue<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token comment\\">// 设置新值</span>\\n        <span class=\\"token comment\\">// 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值</span>\\n        value <span class=\\"token operator\\">=</span> newValue<span class=\\"token punctuation\\">;</span>\\n\\n        <span class=\\"token comment\\">// 触发更新视图</span>\\n        <span class=\\"token function\\">updateView</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 监听对象属性</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">observer</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">target</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">typeof</span> target <span class=\\"token operator\\">!==</span> <span class=\\"token string\\">'object'</span> <span class=\\"token operator\\">||</span> target <span class=\\"token operator\\">===</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// 不是对象或数组</span>\\n    <span class=\\"token keyword\\">return</span> target<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token comment\\">// 污染全局的 Array 原型</span>\\n  <span class=\\"token comment\\">// Array.prototype.push = function () {</span>\\n  <span class=\\"token comment\\">//     updateView()</span>\\n  <span class=\\"token comment\\">//     ...</span>\\n  <span class=\\"token comment\\">// }</span>\\n\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isArray</span><span class=\\"token punctuation\\">(</span>target<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    target<span class=\\"token punctuation\\">.</span>__proto__ <span class=\\"token operator\\">=</span> arrProto<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token comment\\">// 重新定义各个属性（for in 也可以遍历数组）</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> key <span class=\\"token keyword\\">in</span> target<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">defineReactive</span><span class=\\"token punctuation\\">(</span>target<span class=\\"token punctuation\\">,</span> key<span class=\\"token punctuation\\">,</span> target<span class=\\"token punctuation\\">[</span>key<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token comment\\">// 准备数据</span>\\n<span class=\\"token keyword\\">const</span> data <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'zhangsan'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">info</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">address</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'北京'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 需要深度监听</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">nums</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">30</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 监听数据</span>\\n<span class=\\"token function\\">observer</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token comment\\">// 测试</span>\\n<span class=\\"token comment\\">// data.name = 'lisi'</span>\\n<span class=\\"token comment\\">// data.age = 21</span>\\n<span class=\\"token comment\\">// // console.log('age', data.age)</span>\\n<span class=\\"token comment\\">// data.x = '100' // 新增属性，监听不到 —— 所以有 Vue.set</span>\\n<span class=\\"token comment\\">// delete data.name // 删除属性，监听不到 —— 所有已 Vue.delete</span>\\n<span class=\\"token comment\\">// data.info.address = '上海' // 深度监听</span>\\ndata<span class=\\"token punctuation\\">.</span>nums<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 监听数组</span>\\n</code></pre></div>","autoDesc":true}`);export{k as comp,d as data};
