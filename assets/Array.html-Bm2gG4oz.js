import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Cbix2SPG.js";const p={},e=t(`<h1 id="javascript-array-数组对象-数据类型" tabindex="-1"><a class="header-anchor" href="#javascript-array-数组对象-数据类型"><span>JavaScript Array 数组对象-数据类型</span></a></h1><h2 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一个值是数组的长度，值为 empty（空</span>
<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 多个值与字面量一样</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>利用 length 可以在末尾添加一项</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">as</span><span class="token punctuation">[</span><span class="token keyword">as</span><span class="token punctuation">.</span>length<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">as</span><span class="token punctuation">[</span><span class="token number">99</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 下标 99 添加，3 到 98 都是undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>转换方法</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> color <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pink&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
color<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// red,pink,green</span>
color<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (3) [&quot;red&quot;, &quot;pink&quot;, &quot;green&quot;] 返回数组对象的原始值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="改变原数组-7-个方法" tabindex="-1"><a class="header-anchor" href="#改变原数组-7-个方法"><span>改变原数组（7 个方法）</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 末尾添加 一个/多个值, 返回新 length</span>
arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除末尾的值，返回删除的值</span>
arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 前面添加 一个/多个值，返回新 length</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除第一个值，返回删除的值</span>
arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 数组逆序，不是排序</span>
arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 升序，return 大于 0 的值，a b互换，小于 0 不换</span>
arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> length<span class="token punctuation">,</span> <span class="token string">&#39;替换或插入的值 ?可选&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 起始下标，截取的长度，返回剪切的 [数组]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不改变原数组" tabindex="-1"><a class="header-anchor" href="#不改变原数组"><span>不改变原数组</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;12&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拼接数字或字符，返回新数组</span>
arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 截取开始下标，结束下标 -1</span>
arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回以标识符连接字符串</span>
arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回数组的字符串</span>
arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 查找数值在数组的位置，有返回下标，没有返回 -1</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 传入的参数是否是数组，是返回 true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组迭代" tabindex="-1"><a class="header-anchor" href="#数组迭代"><span>数组迭代</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> 条件<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 条件每一项为 true，全部符合条件才为 true</span>
arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> 条件<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 条件有一项为 true，则为 true</span>
arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> 条件<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回符合条件的值，组成数组返回，没有符合返回空[]</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 遍历</span>
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">items<span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> val <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 遍历每一项，组成新数组返回</span>

<span class="token comment">// 归并</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> cur<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// prev 为此方法 return 的值，初始为数组的第一项</span>
  <span class="token comment">// cur 为数组的下一项</span>
  <span class="token comment">// index 下标</span>
  <span class="token comment">// array 数组本身</span>
  <span class="token keyword">return</span> prev <span class="token operator">+</span> cur<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// arr.reduceRight 与 reduce 是一样的，从右边开始遍历</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>reduce 计算数组总和</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> prev <span class="token operator">+</span> next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>利用 reduce 第二个参数，计算对象下某个值的总和</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> prev <span class="token operator">+</span> next<span class="token punctuation">.</span>a<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有 reduce 第二个参数，prev 初始值会是数组的第一项，设置初始值为 0 与下一项累加即可</p><h2 id="类数组" tabindex="-1"><a class="header-anchor" href="#类数组"><span>类数组</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;12&#39;</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;122&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">splice</span><span class="token operator">:</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>splice<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 控制台会输出数组形式的数据，js 中的数组也是重写了 Object 的原型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件:</p><ol><li>键为 0 1 2 3 的数字字符串（数组 0 1 2 也会被默认调用 tostring 以字符串存储为键）</li><li>有 length 属性</li><li>绑定 splice 为 Array 原型上的方法此时输出的 obj 为数组</li></ol>`,22),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","Array.html.vue"]]),d=JSON.parse(`{"path":"/posts/javascript/types/Array.html","title":"JavaScript Array 数组对象-数据类型","lang":"zh-CN","frontmatter":{"description":"JavaScript Array 数组对象-数据类型 创建 利用 length 可以在末尾添加一项 转换方法 改变原数组（7 个方法） 不改变原数组 数组迭代 reduce 计算数组总和 利用 reduce 第二个参数，计算对象下某个值的总和 如果没有 reduce 第二个参数，prev 初始值会是数组的第一项，设置初始值为 0 与下一项累加即可 类数...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/types/Array.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/types/Array.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript Array 数组对象-数据类型"}],["meta",{"property":"og:description","content":"JavaScript Array 数组对象-数据类型 创建 利用 length 可以在末尾添加一项 转换方法 改变原数组（7 个方法） 不改变原数组 数组迭代 reduce 计算数组总和 利用 reduce 第二个参数，计算对象下某个值的总和 如果没有 reduce 第二个参数，prev 初始值会是数组的第一项，设置初始值为 0 与下一项累加即可 类数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript Array 数组对象-数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"创建","slug":"创建","link":"#创建","children":[]},{"level":2,"title":"改变原数组（7 个方法）","slug":"改变原数组-7-个方法","link":"#改变原数组-7-个方法","children":[]},{"level":2,"title":"不改变原数组","slug":"不改变原数组","link":"#不改变原数组","children":[]},{"level":2,"title":"数组迭代","slug":"数组迭代","link":"#数组迭代","children":[]},{"level":2,"title":"类数组","slug":"类数组","link":"#类数组","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"posts/javascript/types/Array.md","localizedDate":"2023年5月3日","excerpt":"\\n<h2>创建</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Array</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 一个值是数组的长度，值为 empty（空</span>\\n<span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Array</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'1'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'3'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 多个值与字面量一样</span>\\n</code></pre></div>","autoDesc":true}`);export{k as comp,d as data};
