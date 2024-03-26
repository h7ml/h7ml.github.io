import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Cbix2SPG.js";const p={},e=t(`<h1 id="深拷贝浅拷贝的区别-如何实现一个深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝浅拷贝的区别-如何实现一个深拷贝"><span>深拷贝浅拷贝的区别？如何实现一个深拷贝？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/cdf952e0-69b8-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、数据类型存储" tabindex="-1"><a class="header-anchor" href="#一、数据类型存储"><span>一、数据类型存储</span></a></h2><p>前面文章我们讲到，<code>JavaScript</code>中存在两大数据类型：</p><ul><li>基本类型</li><li>引用类型</li></ul><p>基本类型数据保存在在栈内存中</p><p>引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中</p><h2 id="二、浅拷贝" tabindex="-1"><a class="header-anchor" href="#二、浅拷贝"><span>二、浅拷贝</span></a></h2><p>浅拷贝，指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝</p><p>如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址</p><p>即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址</p><p>下面简单实现一个浅拷贝</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shallowClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> prop <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newObj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>JavaScript</code>中，存在浅拷贝的现象有：</p><ul><li><code>Object.assign</code></li><li><code>Array.prototype.slice()</code>, <code>Array.prototype.concat()</code></li><li>使用拓展运算符实现的复制</li></ul><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign"><span>Object.assign</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nature</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;smart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;good&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">names</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name1</span><span class="token operator">:</span> <span class="token string">&#39;fx&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name2</span><span class="token operator">:</span> <span class="token string">&#39;xka&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">love</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fx is a great girl&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> fxObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slice" tabindex="-1"><a class="header-anchor" href="#slice"><span>slice()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;One&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> fxArr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="concat" tabindex="-1"><a class="header-anchor" href="#concat"><span>concat()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;One&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> fxArr<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拓展运算符" tabindex="-1"><a class="header-anchor" href="#拓展运算符"><span>拓展运算符</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fxArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;One&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fxArrs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>fxArr<span class="token punctuation">]</span><span class="token punctuation">;</span>
fxArrs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;One&quot;, &quot;Two&quot;, &quot;Three&quot;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fxArrs<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;One&quot;, &quot;love&quot;, &quot;Three&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、深拷贝" tabindex="-1"><a class="header-anchor" href="#三、深拷贝"><span>三、深拷贝</span></a></h2><p>深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性</p><p>常见的深拷贝方式有：</p><ul><li><p>_.cloneDeep()</p></li><li><p>jQuery.extend()</p></li><li><p>JSON.stringify()</p></li><li><p>手写循环递归</p></li></ul><h3 id="clonedeep" tabindex="-1"><a class="header-anchor" href="#clonedeep"><span>_.cloneDeep()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f <span class="token operator">===</span> obj2<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jquery-extend" tabindex="-1"><a class="header-anchor" href="#jquery-extend"><span>jQuery.extend()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">f</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">g</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f <span class="token operator">===</span> obj2<span class="token punctuation">.</span>b<span class="token punctuation">.</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-stringify" tabindex="-1"><a class="header-anchor" href="#json-stringify"><span>JSON.stringify()</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是这种方式存在弊端，会忽略<code>undefined</code>、<code>symbol</code>和<code>函数</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name1</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token function-variable function">name3</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name4</span><span class="token operator">:</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: &quot;A&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环递归" tabindex="-1"><a class="header-anchor" href="#循环递归"><span>循环递归</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> hash <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span> <span class="token comment">// 如果是null或者undefined我就不进行拷贝操作</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 可能是对象或者普通的值  如果是函数的话是不需要深拷贝</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
  <span class="token comment">// 是对象的话就要进行深拷贝</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> hash<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cloneObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身</span>
  hash<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> cloneObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 实现一个递归拷贝</span>
      cloneObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> cloneObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、区别" tabindex="-1"><a class="header-anchor" href="#四、区别"><span>四、区别</span></a></h2><p>下面首先借助两张图，可以更加清晰看到浅拷贝与深拷贝的区别</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/d9862c00-69b8-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从上图发现，浅拷贝和深拷贝都创建出一个新的对象，但在复制对象属性的时候，行为就不一样</p><p>浅拷贝只复制属性指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存，修改对象属性会影响原对象</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 浅拷贝</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token function">shallowClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一个浅拷贝方法</span>
obj3<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">;</span>
obj3<span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 新旧对象还是共享同一块内存</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj1&#39;</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj1 { name: &#39;init&#39;,  arr: [ 1, [ 5, 6, 7 ], 4 ] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj3&#39;</span><span class="token punctuation">,</span> obj3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj3 { name: &#39;update&#39;, arr: [ 1, [ 5, 6, 7 ], 4 ] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 深拷贝</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj4 <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一个深拷贝方法</span>
obj4<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;update&#39;</span><span class="token punctuation">;</span>
obj4<span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 新对象跟原对象不共享内存</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj1&#39;</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj1 { name: &#39;init&#39;, arr: [ 1, [ 2, 3 ], 4 ] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;obj4&#39;</span><span class="token punctuation">,</span> obj4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj4 { name: &#39;update&#39;, arr: [ 1, [ 5, 6, 7 ], 4 ] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><p>前提为拷贝类型为引用类型的情况下：</p><ul><li><p>浅拷贝是拷贝一层，属性为对象时，浅拷贝是复制，两个对象指向同一个地址</p></li><li><p>深拷贝是递归拷贝深层次，属性为对象时，深拷贝是新开栈，两个对象指向不同的地址</p></li></ul>`,48),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","copy.html.vue"]]),d=JSON.parse('{"path":"/posts/interview/JavaScript/copy.html","title":"深拷贝浅拷贝的区别？如何实现一个深拷贝？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-深拷贝浅拷贝的区别？如何实现一个深拷贝？","footer":"深拷贝浅拷贝的区别？如何实现一个深拷贝？","order":13,"star":13,"date":"2023-03-26T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","JavaScript"],"tag":["interview","JavaScript"],"shortTitle":"前端物语|面试物语-深拷贝浅拷贝的区别？如何实现一个深拷贝？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"深拷贝浅拷贝的区别？如何实现一个深拷贝？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/JavaScript/copy.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/JavaScript/copy.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"深拷贝浅拷贝的区别？如何实现一个深拷贝？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-深拷贝浅拷贝的区别？如何实现一个深拷贝？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"深拷贝浅拷贝的区别？如何实现一个深拷贝？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-03-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深拷贝浅拷贝的区别？如何实现一个深拷贝？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/cdf952e0-69b8-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/d9862c00-69b8-11eb-ab90-d9ae814b240d.png\\"],\\"datePublished\\":\\"2023-03-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、数据类型存储","slug":"一、数据类型存储","link":"#一、数据类型存储","children":[]},{"level":2,"title":"二、浅拷贝","slug":"二、浅拷贝","link":"#二、浅拷贝","children":[{"level":3,"title":"Object.assign","slug":"object-assign","link":"#object-assign","children":[]},{"level":3,"title":"slice()","slug":"slice","link":"#slice","children":[]},{"level":3,"title":"concat()","slug":"concat","link":"#concat","children":[]},{"level":3,"title":"拓展运算符","slug":"拓展运算符","link":"#拓展运算符","children":[]}]},{"level":2,"title":"三、深拷贝","slug":"三、深拷贝","link":"#三、深拷贝","children":[{"level":3,"title":"_.cloneDeep()","slug":"clonedeep","link":"#clonedeep","children":[]},{"level":3,"title":"jQuery.extend()","slug":"jquery-extend","link":"#jquery-extend","children":[]},{"level":3,"title":"JSON.stringify()","slug":"json-stringify","link":"#json-stringify","children":[]},{"level":3,"title":"循环递归","slug":"循环递归","link":"#循环递归","children":[]}]},{"level":2,"title":"四、区别","slug":"四、区别","link":"#四、区别","children":[{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":4.09,"words":1226},"filePathRelative":"posts/interview/JavaScript/copy.md","localizedDate":"2023年3月26日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/cdf952e0-69b8-11eb-85f6-6fac77c0c9b3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、数据类型存储</h2>\\n<p>前面文章我们讲到，<code>JavaScript</code>中存在两大数据类型：</p>\\n<ul>\\n<li>基本类型</li>\\n<li>引用类型</li>\\n</ul>\\n<p>基本类型数据保存在在栈内存中</p>"}');export{k as comp,d as data};